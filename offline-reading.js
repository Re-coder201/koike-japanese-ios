/* Original Japanese graded reading, Chinese translations and vocabulary. No third-party full text. */
(() => {
 'use strict';
 const library = [
 {id:'cat-manager',title:'猫の店長',zhTitle:'猫店长',category:'幽默',level:'入门',minutes:3,
 paragraphs:[
 ['駅の近くに、小さな本屋があります。その店には、白い猫がいます。猫は毎朝、入り口の椅子に座っています。お客さんはその猫を「店長」と呼んでいます。','车站附近有一家小书店。店里有一只白猫。猫每天早上都坐在门口的椅子上。客人们把这只猫叫作“店长”。'],
 ['本当の店長は、毎日忙しく働いています。本を並べたり、掃除をしたりします。でも、猫の店長は何もしません。昼ご飯を食べたら、すぐに寝てしまいます。','真正的店长每天都忙着工作，整理书籍、打扫卫生。然而猫店长什么也不做。吃完午饭，它立刻就睡着了。'],
 ['ある日、お客さんが聞きました。「猫の店長の仕事は何ですか。」店の人は笑って答えました。「みんなを笑顔にすることです。それが一番大切な仕事ですよ。」','一天，一位客人问：“猫店长的工作是什么呢？”店员笑着回答：“让大家露出笑容。这可是最重要的工作呀。”']
 ],vocab:[['本屋','ほんや','书店','名词'],['入り口','いりぐち','入口','名词'],['店長','てんちょう','店长','名词'],['笑顔','えがお','笑容','名词']],question:'猫の店長の仕事は何ですか。',answer:'みんなを笑顔にすることです。',answerZh:'让大家露出笑容。'},
 {id:'umbrella',title:'傘はどこ？',zhTitle:'伞在哪里？',category:'幽默',level:'入门',minutes:3,
 paragraphs:[
 ['朝から雨が降っていました。私は大きな傘を持って、駅まで歩きました。電車に乗る前に、パン屋に入りました。温かいパンは、とてもいい匂いがしました。','早上就开始下雨了。我拿着一把大伞，步行去车站。乘电车之前，我走进了一家面包店。热乎乎的面包闻起来特别香。'],
 ['パンを買って外に出ると、傘が見つかりません。「店に忘れたのかな。」私は急いで店に戻りました。店の人も一緒に探してくれました。でも、どこにもありません。','买好面包走到外面时，我找不到伞了。“是不是忘在店里了呢？”我赶忙回到店里。店员也帮着一起找，可是哪里都没有。'],
 ['そのとき、店の人が私の手を見て、少し笑いました。「お客さん、右手を見てください。」右手には、ちゃんと傘がありました。左手のパンのことばかり考えていたのです。','这时，店员看着我的手，微微笑了：“客人，请看看您的右手。”伞好好地拿在右手上呢。原来我的脑子里光想着左手的面包了。']
 ],vocab:[['傘','かさ','伞','名词'],['匂い','におい','气味；香味','名词'],['探す','さがす','寻找','五段动词'],['右手','みぎて','右手','名词']],question:'傘はどこにありましたか。',answer:'右手にありました。',answerZh:'在右手上。'},
 {id:'alarm',title:'目覚まし時計との約束',zhTitle:'和闹钟的约定',category:'幽默',level:'基础',minutes:3,
 paragraphs:[
 ['昨日の夜、私は決めました。「明日から、毎朝六時に起きよう。」目覚まし時計を六時に合わせて、早く寝ました。新しい生活が始まると思うと、少し楽しみでした。','昨天晚上，我下了决心：“从明天起，每天早上六点起床吧。”我把闹钟设到六点，早早睡下。一想到新的生活要开始了，还有一点期待。'],
 ['朝、時計が大きな音を出しました。私は目を開けて、時計に言いました。「あと五分だけ、お願いします。」時計は返事をしませんでした。私は安心して、また目を閉じました。','早上，闹钟发出了很大的声音。我睁开眼，对闹钟说：“拜托，再给我五分钟吧。”闹钟没有回答。我放心地又闭上了眼睛。'],
 ['次に目を開けたとき、もう八時でした。「どうして起こしてくれなかったの？」もちろん、時計は何も言いません。約束を守らなかったのは、時計ではなく、私のほうでした。','下一次睁开眼时，已经八点了。“你怎么不叫醒我呢？”当然，闹钟什么也没说。没有遵守约定的，不是闹钟，而是我自己。']
 ],vocab:[['目覚まし時計','めざましどけい','闹钟','名词'],['約束','やくそく','约定','名词·サ变'],['返事','へんじ','回答；回应','名词·サ变'],['安心','あんしん','安心；放心','名词·サ变']],question:'約束を守らなかったのは誰ですか。',answer:'「私」です。',answerZh:'是“我”。'},
 {id:'morning-tea',title:'朝の十分間',zhTitle:'早晨的十分钟',category:'生活',level:'入门',minutes:3,
 paragraphs:[
 ['私は毎朝、少し早く起きます。窓を開けて、外の空気を吸います。それから、お湯を沸かして、お茶を入れます。お茶を待つ間に、今日やりたいことを考えます。','我每天早上稍微早起一点。打开窗户，呼吸外面的空气。然后烧水、泡茶。等茶泡好的时候，我会想一想今天想做的事。'],
 ['前は、起きてすぐにスマートフォンを見ていました。ニュースや友達の写真を見ていると、時間がすぐに過ぎてしまいました。今は、お茶を飲んでから見ることにしています。','以前，我一起床就看手机。看着新闻和朋友的照片，时间很快就过去了。现在，我决定喝完茶之后再看手机。'],
 ['たった十分間ですが、この静かな時間が好きです。忙しい日でも、朝に小さな楽しみがあると、気持ちが落ち着きます。明日も、自分のためにお茶を入れようと思います。','虽然只有十分钟，但我很喜欢这段安静的时光。即使是忙碌的一天，早上有一点小小的乐趣，心情也会平静下来。明天，我也想为自己泡一杯茶。']
 ],vocab:[['空気','くうき','空气；气氛','名词'],['お湯','おゆ','热水','名词'],['沸かす','わかす','烧开；使沸腾','五段动词'],['気持ち','きもち','心情；感受','名词']],question:'今はいつスマートフォンを見ますか。',answer:'お茶を飲んでから見ます。',answerZh:'喝完茶之后再看。'},
 {id:'wrong-train',title:'一駅歩いてみる',zhTitle:'试着多走一站',category:'生活',level:'基础',minutes:3,
 paragraphs:[
 ['仕事の帰り、いつもの駅で降りようと思いました。でも、読んでいた本が面白くて、降りるのを忘れてしまいました。気づいたときには、電車は次の駅に着いていました。','下班回家时，我原本想在平常的车站下车。但正在读的书太有趣，我忘了下车。等注意到的时候，电车已经到下一站了。'],
 ['少しがっかりしましたが、天気がよかったので、家まで歩くことにしました。知らない道を歩くと、小さなパン屋や古い公園がありました。いつもの町なのに、初めて見る景色でした。','虽然有点沮丧，但因为天气很好，我决定步行回家。走在不熟悉的路上，我看到了小面包店和老公园。明明是平常生活的小镇，却是第一次见到的景色。'],
 ['公園のベンチで、少し休みました。風が気持ちよくて、失敗したことを忘れました。予定どおりにいかない日にも、いいことはあります。今度は、自分から一駅歩いてみたいです。','我在公园的长椅上稍作休息。风吹着很舒服，我都忘了坐过站的事。即使事情没有按计划进行，也会有好事发生。下次，我想主动多走一站。']
 ],vocab:[['降りる','おりる','下车；下来','一段动词'],['景色','けしき','景色','名词'],['予定','よてい','计划；安排','名词·サ变'],['失敗','しっぱい','失败；失误','名词·サ变']],question:'歩いて帰ることにしたのはなぜですか。',answer:'天気がよかったからです。',answerZh:'因为天气很好。'},
 {id:'tiny-study',title:'一日一つでいい',zhTitle:'每天一个就好',category:'生活',level:'入门',minutes:3,
 paragraphs:[
 ['日本語の勉強を始めたころ、私は毎日たくさんの単語を覚えようとしていました。最初の三日間は頑張りましたが、その後は疲れて、教科書を開かなくなりました。','刚开始学日语时，我想每天记很多单词。最初三天很努力，但之后累了，连课本也不再打开了。'],
 ['ある日、友達が言いました。「一日一つでもいいんじゃない？」それから、私は寝る前に一つだけ単語を選ぶことにしました。その言葉で、短い文も作ってみます。','一天，朋友说：“每天只学一个，不也挺好吗？”从那以后，我决定睡前只选一个单词。我还会试着用那个词造一个短句。'],
 ['少ないと思うかもしれません。でも、一か月続けると、前より多くの言葉が分かるようになりました。大切なのは、誰かと比べることではありません。自分の速さで、続けることです。','也许你会觉得太少。但是坚持一个月后，我比以前懂得了更多词语。重要的不是和别人比较，而是按照自己的速度坚持下去。']
 ],vocab:[['単語','たんご','单词','名词'],['教科書','きょうかしょ','教科书','名词'],['続ける','つづける','继续；坚持','一段动词'],['比べる','くらべる','比较','一段动词']],question:'寝る前に何をすることにしましたか。',answer:'一つだけ単語を選ぶことにしました。',answerZh:'决定只选一个单词。'},
 {id:'itadakimasu',title:'「いただきます」の時間',zhTitle:'说“我开动了”的时刻',category:'文化',level:'入门',minutes:3,
 paragraphs:[
 ['日本で友達の家に遊びに行ったとき、一緒に晩ご飯を食べました。食べ始める前に、友達は手を合わせて「いただきます」と言いました。私もまねをして、同じように言いました。','去日本朋友家玩时，我们一起吃了晚饭。开始吃之前，朋友双手合十，说了“いただきます”。我也学着他的样子说了一遍。'],
 ['「どういう気持ちで言うの？」と聞くと、友達は少し考えました。「私は、料理を作ってくれた人や、食べ物にありがとうと思って言うかな。」人によって、考え方は少し違うようです。','我问：“你是抱着怎样的心情说这句话的呢？”朋友想了想：“我的话，大概是想感谢做饭的人和食物吧。”看来不同的人，想法也略有不同。'],
 ['食べ終わった後には、「ごちそうさまでした」と言いました。短い言葉ですが、食事の前後に、気持ちを伝える時間がありました。私はその小さな時間が、いいなと思いました。','吃完之后，我们说了“ごちそうさまでした”（感谢款待）。虽然是简短的话语，却让人在吃饭前后有了表达心意的时间。我觉得这段小小的时间很美好。']
 ],vocab:[['食事','しょくじ','用餐；饭食','名词·サ变'],['料理','りょうり','料理；做菜','名词·サ变'],['伝える','つたえる','传达；告诉','一段动词'],['まね','まね','模仿','名词·サ变']],question:'友達は食べ始める前に何と言いましたか。',answer:'「いただきます」と言いました。',answerZh:'说了“いただきます”。'},
 {id:'season-letter',title:'季節を見つける手紙',zhTitle:'在信里发现季节',category:'文化',level:'基础',minutes:3,
 paragraphs:[
 ['先生から、日本語の短い手紙をもらいました。最初に、勉強の話ではなく、季節の話が書いてありました。「朝の風が冷たくなってきましたね。」その一文を読んで、私は窓の外を見ました。','我收到老师写的一封简短日语信。开头写的不是学习的事，而是季节：“早晨的风开始变凉了呢。”读到这一句，我看向了窗外。'],
 ['忙しい毎日の中で、木の葉の色が変わっていることに気づいていませんでした。手紙を読んだ後、家の近くをゆっくり歩いてみました。道には、黄色い葉がたくさん落ちていました。','在忙碌的日子里，我没有留意到树叶的颜色已经变了。读完信，我试着在家附近慢慢散步。路上落了许多黄色的叶子。'],
 ['返事には、見つけた秋のことを書きました。難しい表現は使えませんでしたが、自分の言葉で伝えることができました。手紙は、遠くの人だけでなく、近くの季節にも私をつないでくれました。','回信时，我写下了自己发现的秋天。虽然不会用复杂的表达，但能够用自己的话传达出来。这封信不只让我与远方的人相连，也让我重新发现了身边的季节。']
 ],vocab:[['季節','きせつ','季节','名词'],['手紙','てがみ','信','名词'],['木の葉','このは','树叶','名词'],['表現','ひょうげん','表达；表现','名词·サ变']],question:'手紙の最初には何が書いてありましたか。',answer:'季節の話が書いてありました。',answerZh:'写着关于季节的话题。'},
 {id:'old-map',title:'古い地図を持って',zhTitle:'带着一张旧地图',category:'历史',level:'基础',minutes:3,
 paragraphs:[
 ['図書館で、町の古い地図を見つけました。今の地図と比べると、道の形が少し違います。大きな道路がある場所に、昔は川が描かれていました。私は、その場所を見に行きたくなりました。','在图书馆，我发现了一张小镇的旧地图。和现在的地图比较，道路的形状有些不同。如今是一条大马路的地方，过去画着一条河。我想去那个地方看看。'],
 ['週末、地図を持って歩きました。川はありませんでしたが、橋の名前がついたバス停がありました。近くには、水に関係する名前の店もありました。昔の町の姿が、名前の中に残っているようでした。','周末，我带着地图去散步。虽然河流已经不在了，却有一座以桥命名的公交站。附近还有名字和水有关的店铺。过去小镇的样貌，仿佛留在了这些名字里。'],
 ['歴史は、遠い場所や有名な人だけのものではないと思いました。毎日歩いている道にも、長い物語があるのかもしれません。今度は、家族にも昔の町のことを聞いてみたいです。','我觉得历史不只属于遥远的地方或著名的人物。每天走的路上，或许也藏着长长的故事。下次，我还想问问家人小镇过去的模样。']
 ],vocab:[['地図','ちず','地图','名词'],['昔','むかし','从前；过去','名词'],['橋','はし','桥','名词'],['残る','のこる','留下；剩余','五段动词']],question:'昔の川の手がかりは何に残っていましたか。',answer:'バス停や店の名前に残っていました。',answerZh:'留在公交站和店铺的名字里。'},
 {id:'old-notebook',title:'祖母の買い物帳',zhTitle:'祖母的购物本',category:'历史',level:'基础',minutes:3,
 paragraphs:[
 ['家の片づけをしていたら、祖母の古いノートが出てきました。中には、毎日の買い物が細かく書いてありました。野菜、魚、米。短い言葉の間に、ときどき家族の名前もありました。','整理家里时，我们发现了祖母的一本旧笔记。里面详细地记着每天买的东西：蔬菜、鱼、大米。在这些简短的词语之间，偶尔也出现家人的名字。'],
 ['「今日は娘の誕生日。少しいい魚を買った。」その行を読んで、母が笑いました。「この日のこと、覚えているよ。」私は知らなかった昔の食卓が、少しだけ見えた気がしました。','“今天是女儿的生日。买了稍微好一点的鱼。”读到这一行，母亲笑了：“这一天，我还记得呢。”我觉得自己仿佛稍稍看见了从未见过的往昔餐桌。'],
 ['ノートには、大きな出来事は書いてありません。でも、家族が何を食べて、何を大切にしていたのかが分かります。小さな記録も、時間がたつと、誰かにとって大切な歴史になるのだと思いました。','笔记里没有写什么重大事件。但是，我们能知道家人吃过什么、珍惜什么。我想，即使是小小的记录，随着时间流逝，也会成为某个人珍贵的历史。']
 ],vocab:[['祖母','そぼ','祖母；外祖母','名词'],['買い物','かいもの','购物；购买的物品','名词·サ变'],['誕生日','たんじょうび','生日','名词'],['記録','きろく','记录','名词·サ变']],question:'ノートには主に何が書いてありましたか。',answer:'毎日の買い物が書いてありました。',answerZh:'主要记着每天的购物情况。'},
 {id:'news-reading',title:'ニュースを読む前に',zhTitle:'阅读新闻之前',category:'时政',level:'进阶',minutes:4,
 paragraphs:[
 ['同じ出来事について、二つのニュースを読みました。見出しだけを見ると、まったく違う話のように感じました。しかし、本文を最後まで読むと、共通する情報がたくさんありました。','我读了两篇报道同一事件的新闻。只看标题时，感觉像是完全不同的事情。但读完整篇文章后，发现其中有很多共同的信息。'],
 ['それから私は、記事を読むとき、三つのことを確認するようになりました。いつ書かれたのか、誰が書いたのか、何を根拠にしているのか、ということです。数字があれば、何と比べた数字なのかも考えます。','从那以后，我读文章时开始确认三件事：是什么时候写的、是谁写的、依据是什么。如果有数字，也会想一想它是在和什么进行比较。'],
 ['分からないことが残ったら、別の記事も探します。すぐに答えを決めなくてもいいと思います。日本語の勉強でも、社会のことを知るときでも、分からない部分を一つずつ確かめる姿勢を大切にしたいです。','如果还有不明白的地方，我会再找其他文章。我觉得不必立刻确定答案。无论是学日语，还是了解社会，我都想珍惜这种逐一核实不明之处的态度。']
 ],vocab:[['見出し','みだし','标题','名词'],['情報','じょうほう','信息','名词'],['確認','かくにん','确认；核实','名词·サ变'],['根拠','こんきょ','根据；依据','名词']],question:'記事を読むときに確認する三つのことは何ですか。',answer:'いつ、誰が書いたのか、何を根拠にしているのか、ということです。',answerZh:'写作时间、作者，以及报道的依据。'},
 {id:'town-library',title:'町の図書館を考える',zhTitle:'思考小镇的图书馆',category:'时政',level:'进阶',minutes:4,
 paragraphs:[
 ['町の図書館の開館時間について、話し合いがありました。夜まで開けてほしいという人もいれば、働く人の負担を心配する人もいました。同じ図書館を大切に思っていても、意見は一つではありません。','围绕小镇图书馆的开放时间，人们展开了讨论。有人希望开放到晚上，也有人担心工作人员的负担。即使同样珍惜这座图书馆，意见也并非只有一种。'],
 ['私は最初、長く開いているほうが便利だと思いました。でも、利用する人の数や、必要なお金の話を聞いて、簡単には決められないと感じました。便利さだけでなく、続けられる仕組みも必要なのです。','起初，我觉得开放时间长一些更方便。但听了使用人数和所需经费的情况后，感觉很难轻易决定。不仅需要便利，也需要能够长期维持的机制。'],
 ['話し合いの後、すぐに結論は出ませんでした。それでも、違う立場の人の話を聞くことには意味があると思いました。社会の問題を考える第一歩は、自分と違う声にも耳を傾けることかもしれません。','讨论之后，并没有马上得出结论。即便如此，我仍觉得倾听不同立场的人很有意义。思考社会问题的第一步，也许就是认真听取与自己不同的声音。']
 ],vocab:[['図書館','としょかん','图书馆','名词'],['意見','いけん','意见；看法','名词'],['負担','ふたん','负担','名词·サ变'],['立場','たちば','立场；处境','名词']],question:'便利さのほかに、何が必要だと感じましたか。',answer:'続けられる仕組みも必要だと感じました。',answerZh:'还需要能够持续运行的机制。'}
 ];
 // Provide the selected reading vocabulary in the existing offline dictionary and review flow.
 for(const a of library)for(const [term,kana,meaning,pos]of a.vocab){if(!WORDS.some(w=>w.id===term)){const stem=/动词/.test(pos)?term.slice(0,-1):term;const paragraph=a.paragraphs.find(p=>p[0].includes(term))||a.paragraphs.find(p=>p[0].includes(stem))||a.paragraphs[0];WORDS.push({id:term,word:term,kana,romaji:'',meaning,pos,tag:'阅读词汇',frequency:0,examples:[{jp:paragraph[0],zh:paragraph[1]}]});}}
 const originalReading=renderReading;
 let shelf='offline',opened=null,onlySaved=false,showAllZh=false,answerShown=false,cacheLabel='正在检查离线资源…';
 if(!state.offline)state.offline={saved:[],progress:{}};
 const readState=()=>state.offline;
 const aBy=id=>library.find(a=>a.id===id);
 const tabs=()=>`<div class="chips reading-shelves"><button class="chip ${shelf==='offline'?'active':''}" data-shelf="offline">离线小书架 · ${library.length} 篇</button><button class="chip ${shelf==='web'?'active':''}" data-shelf="web">网络文章 ↗</button></div>`;
 const styles=document.createElement('style');styles.textContent=`.reading-shelves{margin:0 0 18px}.offline-note{background:var(--pale);padding:15px 17px;border-radius:17px;font-size:12px;line-height:1.9;margin:12px 0 20px}.reader-title{font-size:27px;line-height:1.6;margin:14px 0}.reader-paragraph{padding:18px 0;border-bottom:1px solid var(--line);scroll-margin-top:20px}.reader-paragraph .jp{font-size:19px;line-height:2.2;margin:0 0 10px;overflow-wrap:anywhere}.reader-zh{font-size:14px;line-height:2;color:var(--muted);background:var(--pale);padding:16px;border-radius:14px;margin-top:12px}.reader-tools{display:flex;gap:6px;flex-wrap:wrap;margin:15px 0}.reader-tools button{font-size:12px;padding:10px 13px}.reader-q{font-size:17px;line-height:2}.offline-open{background:transparent;text-align:left;padding:0;width:100%}.offline-open h3{font-size:20px}.offline-book-footer{display:flex;justify-content:space-between;align-items:center;gap:8px}.offline-book-footer .small-btn{font-size:12px}.reading-vocab{padding:8px 0}.reading-vocab .word-row{padding:8px}.reading-vocab .grow{text-align:left}.paragraph-index{font-size:10px;color:var(--muted);letter-spacing:.1em}.offline-cache-btn{font-size:12px;padding:8px 12px;margin-top:8px}.reader-finish{margin-top:20px}.reading-caption{font-size:12px;color:var(--muted);margin:8px 0 15px}`;document.head.append(styles);
 function renderShelf(){const cats=['全部','幽默','时政','历史','文化','生活'];const q=articleQuery.trim().toLowerCase();const list=library.filter(a=>(category==='全部'||category===a.category)&&(!onlySaved||readState().saved.includes(a.id))&&(!q||[a.title,a.zhTitle,a.category,...a.paragraphs.flat()].join(' ').toLowerCase().includes(q)));
 app.innerHTML=tabs()+`<div class="eyebrow">ポケットに、小さな図書館</div><h1>没有网络，也能读日语。</h1><p class="muted">给小池的十二篇小文章，随时翻开一页。</p><div class="offline-note"><strong id="offline-cache-label">${esc(cacheLabel)}</strong><br>全文、中文译文与重点词都保存在应用中。首次联网缓存完成后，飞行模式也能读。<br><button class="offline-cache-btn" data-offline-action="cache">检查离线是否就绪</button></div><form class="search" id="offline-search"><input type="search" id="offline-query" placeholder="搜索标题、中文或正文" aria-label="搜索离线文章" value="${esc(articleQuery)}"><button>搜索</button></form><div class="chips" style="margin-top:15px">${cats.map(c=>`<button class="chip ${c===category?'active':''}" data-category="${c}">${c}</button>`).join('')}</div><div class="toolbar"><button data-offline-action="saved" class="${onlySaved?'primary':''}">${onlySaved?'♥ 已收藏':'♡ 我的文章'}</button><span class="count">${list.length} 篇 · 全文内置</span></div>${list.map(a=>{const p=readState().progress[a.id]||0;return `<article class="card article"><div class="article-meta"><span class="badge">${a.category}</span><span>${a.level} · 约 ${a.minutes} 分钟</span><span>${p>=a.paragraphs.length?'✓ 已读':p?'读到第 '+p+' 段':'未读'}</span></div><button class="offline-open" data-offline-open="${a.id}"><h3 lang="ja">${esc(a.title)}</h3><p>${esc(a.zhTitle)}</p><p lang="ja">${esc(a.paragraphs[0][0].slice(0,48))}…</p></button><div class="offline-book-footer"><button class="small-btn" data-offline-open="${a.id}">${p&&p<a.paragraphs.length?'继续阅读':'在这里阅读'} →</button><button class="small-btn" data-offline-save="${a.id}">${readState().saved.includes(a.id)?'♥ 已收藏':'♡ 收藏'}</button></div></article>`;}).join('')||'<div class="empty"><span>📖</span><p>没有匹配文章，试试其他分类或关键词。</p></div>'}<p class="hint">全部为自编分级学习文章，包含原创故事与社会话题练习，不是新闻报道或真题。难度和阅读时长为参考。重点词可查释义、收藏并加入现有复习；朗读取决于设备是否已下载日语语音。</p>`;
 }
 function renderBook(){const a=aBy(opened);if(!a){opened=null;renderShelf();return;}const p=readState().progress[a.id]||0;app.innerHTML=`<div class="topline"><button class="back" data-offline-action="back">← 离线小书架</button><button class="small-btn" data-offline-save="${a.id}">${readState().saved.includes(a.id)?'♥ 已收藏':'♡ 收藏'}</button></div><span class="badge">${a.category} · ${a.level}</span><h1 class="reader-title" lang="ja">${esc(a.title)}</h1><p class="muted">${esc(a.zhTitle)} · 约 ${a.minutes} 分钟 · 自编学习文章</p><div class="reader-tools"><button data-offline-action="translations">${showAllZh?'隐藏全部译文':'显示全部译文'}</button><button data-offline-action="vocab">重点词汇 ↓</button>${p>0&&p<a.paragraphs.length?'<button data-offline-action="resume">继续上次位置 ↓</button>':''}</div>${a.paragraphs.map(([jp,zh],i)=>`<section class="reader-paragraph" id="reading-paragraph-${i}"><div class="paragraph-index">PARAGRAPH 0${i+1}</div><p class="jp" lang="ja">${tokens(jp)}</p><div class="reader-tools"><button data-speak="${esc(jp)}">♪ 朗读</button><button data-offline-translate="${i}" aria-expanded="${showAllZh}">${showAllZh?'隐藏译文':'查看译文'}</button><button data-offline-progress="${i+1}">读到这里 ✓</button></div><div class="reader-zh" id="reading-zh-${i}" ${showAllZh?'':'hidden'}>${esc(zh)}</div></section>`).join('')}<section class="card" id="reading-question"><h3>读懂了吗？</h3><p class="reader-q" lang="ja">${esc(a.question)}</p><button data-offline-action="answer">${answerShown?'隐藏参考答案':'看看参考答案'}</button><div class="reader-zh" id="reading-answer" ${answerShown?'':'hidden'}><span lang="ja">${esc(a.answer)}</span><br>${esc(a.answerZh)}</div></section><section class="reading-vocab" id="reading-vocab"><h2>把喜欢的词留下来</h2><p class="muted">点词看释义，点爱心加入收藏与复习。</p>${a.vocab.map(v=>row(word(v[0]))).join('')}</section><button class="primary full reader-finish" data-offline-action="finish">${p>=a.paragraphs.length?'✓ 已读完，再读一次也很好':'这篇读完了 ✓'}</button><p class="hint">阅读位置会在停留后自动记录，也可点击“读到这里”。中文译文为本应用配套译文，离线可用。</p>`;observeParagraphs();}
 let observer=null;
 function observeParagraphs(){observer?.disconnect();if(!('IntersectionObserver'in window))return;const readingId=opened;observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting&&opened===readingId&&tab==='reading'){const n=Number(entry.target.id.split('-').pop())+1;if((readState().progress[readingId]||0)<n){readState().progress[readingId]=n;persist();}}},{threshold:.55});document.querySelectorAll('.reader-paragraph').forEach(el=>observer.observe(el));}
 renderReading=function(){if(shelf==='web'){originalReading();app.insertAdjacentHTML('afterbegin',tabs());}else if(opened)renderBook();else renderShelf();};
 document.addEventListener('submit',e=>{if(e.target.id!=='offline-search')return;e.preventDefault();e.stopImmediatePropagation();articleQuery=document.querySelector('#offline-query').value.trim().slice(0,200);renderReading();},true);
 document.addEventListener('click',async e=>{const b=e.target.closest('button');if(!b)return;
 if(b.dataset.shelf){e.stopImmediatePropagation();shelf=b.dataset.shelf;opened=null;renderReading();window.scrollTo(0,0);return;}
 if(b.dataset.offlineOpen){e.stopImmediatePropagation();opened=b.dataset.offlineOpen;showAllZh=false;answerShown=false;renderReading();window.scrollTo(0,0);return;}
 if(b.dataset.offlineSave){e.stopImmediatePropagation();const id=b.dataset.offlineSave;readState().saved=readState().saved.includes(id)?readState().saved.filter(x=>x!==id):[id,...readState().saved];persist();b.textContent=readState().saved.includes(id)?'♥ 已收藏':'♡ 收藏';if(!opened)renderReading();return;}
 if(b.dataset.offlineTranslate!==undefined){e.stopImmediatePropagation();const el=document.querySelector('#reading-zh-'+b.dataset.offlineTranslate);el.hidden=!el.hidden;b.textContent=el.hidden?'查看译文':'隐藏译文';b.setAttribute('aria-expanded',String(!el.hidden));return;}
 if(b.dataset.offlineProgress){e.stopImmediatePropagation();readState().progress[opened]=Number(b.dataset.offlineProgress);persist();toast('已记住阅读位置');return;}
 if(!b.dataset.offlineAction)return;e.stopImmediatePropagation();switch(b.dataset.offlineAction){
 case'back':observer?.disconnect();opened=null;renderReading();window.scrollTo(0,0);break;
 case'saved':onlySaved=!onlySaved;renderReading();break;
 case'translations':showAllZh=!showAllZh;document.querySelectorAll('[data-offline-translate]').forEach(b=>{const el=document.querySelector('#reading-zh-'+b.dataset.offlineTranslate);el.hidden=!showAllZh;b.textContent=showAllZh?'隐藏译文':'查看译文';b.setAttribute('aria-expanded',String(showAllZh));});b.textContent=showAllZh?'隐藏全部译文':'显示全部译文';break;
 case'vocab':document.querySelector('#reading-vocab').scrollIntoView({behavior:'smooth'});break;
 case'resume':document.querySelector('#reading-paragraph-'+Math.min(Math.max(0,(readState().progress[opened]||1)-1),aBy(opened).paragraphs.length-1)).scrollIntoView({behavior:'smooth'});break;
 case'answer':answerShown=!answerShown;document.querySelector('#reading-answer').hidden=!answerShown;b.textContent=answerShown?'隐藏参考答案':'看看参考答案';break;
 case'finish':readState().progress[opened]=aBy(opened).paragraphs.length;persist();toast('读完一篇，慢慢积累 🌷');b.textContent='✓ 已读完，再读一次也很好';break;
 case'cache':await checkCache(true);break;
 }},true);
 async function checkCache(userInitiated=false){try{if(!('serviceWorker'in navigator)||!('caches'in window)){cacheLabel='当前浏览器不支持离线缓存，请用 Safari 打开';}else{const reg=await navigator.serviceWorker.getRegistration();if(userInitiated&&navigator.onLine&&reg)await reg.update();const cache=await caches.open('koike-shell-v0.2.0');const files=['./index.html','./app.js','./core.js','./data.js','./style.css','./example-library.js','./offline-reading.js','./manifest.webmanifest','./icon.svg','./icon-180.png','./icon-192.png','./icon-512.png'];const matches=await Promise.all(files.map(p=>cache.match(new URL(p,location.href).href)));cacheLabel=matches.every(Boolean)?`✓ 离线已就绪 · ${library.length} 篇全文与译文`:(reg?.waiting?'新版本已下载，请关闭全部应用窗口后重新打开':'离线尚未就绪，请联网打开并稍等后再次检查');}}catch{cacheLabel='暂时无法确认离线缓存，请保持联网后重试';}const el=document.querySelector('#offline-cache-label');if(el)el.textContent=cacheLabel;if(userInitiated)toast(cacheLabel);}
 if('serviceWorker'in navigator){navigator.serviceWorker.addEventListener('controllerchange',()=>checkCache());navigator.serviceWorker.ready.then(()=>checkCache());}
 checkCache();
 // Exposed as read-only content for regression checks and future content additions.
 window.KoikeReadingLibrary=library;
 render();
})();
