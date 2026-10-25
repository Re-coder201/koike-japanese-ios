"""Fetch public RSS titles/links and curated article metadata. Python stdlib only."""
import concurrent.futures, datetime, html, json, pathlib, re, urllib.request, xml.etree.ElementTree as ET
ROOT = pathlib.Path(__file__).resolve().parents[1]
FEEDS = [
    ('https://dailyportalz.jp/feed/headline', 'デイリーポータルZ', '幽默'),
    ('https://www.nippon.com/ja/feed/', 'nippon.com', '时政'),
]
SEEDS = [
    ('https://www.maff.go.jp/j/keikaku/syokubunka/culture/wagohan/articles/2303/spe15_02.html', 'お花見の歴史とお花見弁当', '農林水産省', '生活'),
    ('https://www.nippon.com/ja/japan-topics/c08603/', '江戸の大名屋敷は情報・文化の中継地点', 'nippon.com', '历史'),
    ('https://www.nippon.com/ja/views/b08802/', '家康が築いた巨大都市東京', 'nippon.com', '历史'),
    ('https://www.nippon.com/ja/japan-topics/g01005/', '寺子屋：驚くべき江戸時代の教育力', 'nippon.com', '文化'),
]
def clean(s):
    return re.sub(r'\s+', ' ', html.unescape(re.sub('<[^>]+>', '', s or ''))).strip()
def category(title, default):
    if default == '幽默': return default
    for cat, pattern in [('历史', '歴史|江戸|戦国|明治|幕府|古代|武将'), ('文化', '文化|文学|芸術|美術|伝統|俳句|歌舞伎|寺子屋'), ('生活', '暮らし|料理|食べ|レシピ|健康|子育て|旅行|生活|猫|犬')]:
        if re.search(pattern, title): return cat
    return default
def request(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'KoikeJapaneseLearning/0.1 (RSS article discovery)'})
    with urllib.request.urlopen(req, timeout=25) as response:
        return response.read(3_000_000)
def feed_items(feed):
    url, source, default = feed
    root = ET.fromstring(request(url))
    result = []
    for item in root.findall('.//item')[:45]:
        title = clean(item.findtext('title'))
        link = clean(item.findtext('link'))
        date = clean(item.findtext('pubDate'))
        if not title or not link.startswith('https://'): continue
        try:
            import email.utils
            date = email.utils.parsedate_to_datetime(date).date().isoformat()
        except (ValueError, TypeError): date = ''
        result.append(dict(title=title, url=link, source=source, category=category(title, default), date=date))
    if not result: raise ValueError('No articles in '+url)
    return result
def main():
    path = ROOT / 'articles.json'
    old = json.loads(path.read_text(encoding='utf-8')) if path.exists() else {'items': []}
    items, errors, succeeded = [], [], 0
    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
        jobs = {pool.submit(feed_items, f): f for f in FEEDS}
        for job in concurrent.futures.as_completed(jobs):
            try:
                fetched=job.result(); items.extend(fetched); succeeded+=1
            except Exception as e:
                errors.append(jobs[job][0]+': '+str(e))
    items.extend(dict(url=u,title=t,source=s,category=c,date='') for u,t,s,c in SEEDS)
    items.extend(old['items']) # Keep saved links discoverable after they leave RSS.
    unique = {item['url']: item for item in reversed(items)}
    result = list(unique.values())
    result.sort(key=lambda a: a.get('date', ''), reverse=True)
    if not succeeded:
        raise SystemExit('All RSS sources failed; previous index preserved. '+str(errors))
    payload = {'updatedAt': datetime.datetime.now(datetime.timezone.utc).isoformat(), 'errors': errors, 'items': result}
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
    print(f'{len(result)} articles; {succeeded} sources; errors={errors}')
if __name__ == '__main__': main()
