addLayer("book", {
    name: "世界之书",
    symbol: "📚",
    resource: "",
    color: "#6cccd8",
    startData() {
        return {
            unlocked: true,
            points: _D0,
            power: _D0,
            level: _D0,
            exp: _D0,
            fox: {
                pause: false,
                power: [
                    _D0, _D1, _D0, _D0, _D0, _D0, _D0, _D0, _D0, _D0, _D0
                ],
                gener: [
                    null, _D1, _D0, _D0, _D0, _D0, _D0, _D0, _D0, _D0, _D0
                ]
            },
            att: {
                level: _D0,
                hp: _D1,
                power: _D0
            }
        }
    },
    update(diff) {
        let powercount = _D0
        while (_DR().lte(layers[this.layer].getrate().div(_D2.pow(powercount)))) {
            player[this.layer].power = player[this.layer].power.add(1).clamp(0, layers[this.layer].getcap())
            powercount = powercount.add(1)
        }

        if (!player[this.layer].fox.pause) {
            for (let i = 1; i < 11; i++) {
                player[this.layer].fox.power[i - 1] = player[this.layer].fox.power[i - 1].add(layers[this.layer].getgen(i).mul(diff))
                while (player[this.layer].fox.power[0].gte(layers[this.layer].getprice(i))) {
                    player[this.layer].fox.gener[i] = player[this.layer].fox.gener[i].add(1)
                    player[this.layer].fox.power[i] = player[this.layer].fox.power[i].add(1)
                }
            }
        }

        player[this.layer].att.power = player[this.layer].att.power.add(layers[this.layer].powergen().mul(diff))

        player[this.layer].att.hp = player[this.layer].att.hp.add(layers[this.layer].bossgen().mul(diff)).clamp(0, layers[this.layer].bossmaxhp())

    },
    type: "none",
    tabFormat: {
        关于: {
            content: [
                ["display-text",
                    `
                    <h1 class="c1">一千零一树</h1><br><br>
                    由 <h2>一千零一树开发组</h2> 开发<br>
                    什么你问 <h2>开发组</h2> 都有谁?<br>
                    自己去 <h2>看</h2><br>
                    <br>
                    一款玩法为 <h2>盯着新闻和标语看</h2> 的模组树游戏<br>
                    甚至还有 <h2>(1001+10↑↑11)个增量或非增量小游戏!!!</h2><br>
                    <br>
                    部分游戏非常不支持移动端(且无支持打算),请使用 <h2>桌面端</h2> 游玩<br>
                    <br>
                    你可以在 <h2>设置</h2> 修改一系列东西!<br>
                    甚至包括 <h2>硬重置</h2><br>
                    <h2>Meet me in the afterlife!</h2><br>
                    <br>
                    如果你不知道怎么 <h2>操作</h2> 来解锁小游戏<br>
                    <h2>点击</h2> 主树上地球图案的层级 <h2>梦界</h2><br>
                    你可以花费 <h2>梦力</h2> 解锁世界(也就是小游戏)<br>
                    你并不需要 <h2>按顺序</h2> 解锁世界<br>
                    然后,每个世界有一个底层代码,你完成某个 <h2>目标</h2> 之后返还 <h2>梦力</h2><br>
                    有些世界 <h2>不止</h2> 能获得一个梦力<br>
                    <br>
                    <h2>你说得对</h2> 这里还有一些有趣的东西等你发现<br>
                    看看 <h2>成就</h2> 吧!<br>
                    游戏的 <h2>简单</h2> 通关条件为 <h2>完成所有世界</h2><br>
                    游戏的 <h2>困难</h2> 通关条件为 <h2>完成所有成就</h2><br>
                    `
                ]
            ]
        },
        作者: {
            content: [
                ["microtabs", "author"],
                ["display-text", "<br>"]
            ]
        },
        世界之书: {
            content: [
                ["microtabs", "world"],
                ["display-text", "<br>"]
            ]
        },
        狐等级: {
            content: [
                ["microtabs", "gener"],
                ["display-text", "<br>"]
            ]
        },
        梦之界域: {
            content: [
                ["microtabs", "realm"],
                ["display-text", "<br>"]
            ]
        },
    },
    microtabs: {
        author: {
            乾狐离光: {
                content: [
                    ["display-text",
                        function () {
                            return `
                    你好呀 我是<h1 class="b1">乾狐离光</h1><br>
                    在读之前和我一起说<br>
                    <div class="zhangli" style="height:135px"><h1 class="b1">张力来!</h1></div>
                    我是1001树的主开发,也是项目发起人<br>
                    欢迎来<a href="https://qhlg.flime.top" target="_blank">我的主页</a><br><br>
                    而且...<br>
                    <span style="color:#88888810;font-size:10px;">如果你正在做梦,那么你已经看到了他们惧怕的东西...<br></span>
                    我在游戏里放了一些有趣的内容(和无趣的内容)<br>
                    欢迎你来探索,${player.global.name}<br>
                    <br>
                    这个游戏的设置里有一些对游戏性来说的无意义功能<br>
                    但他们并不是无意义的,我想加入它们不是因为他们能带来什么<br>
                    更多是因为我喜欢整一些稀奇古怪的东西<br>
                    亦或说是中二且略微实用的无用主义<br>
                    算是一项怪癖吧...<br>
                    <br>
                    出于美观角度,我推荐你使用等距更纱黑体<br>
                    为了能让你方便的使用它,我压缩了他的包体<br>
                    而且为字体(其实图像和音频之类的资源都是)设置了非常大的缓存时间<br>
                    也就是说,你只有在第一次加载时耗时较大,以后再次使用几乎瞬间即可显示<br>
                    在其他方面也有一些小设计,来帮助使用,狐姆狐姆<br>
                    不要用我的字体,我做的字体好丑还有显示问题<br>
                    <br>
                    <br>
                    如果你想看到梦里的秘密,那么你就应该睡下<br>
                    下面是一个真实但也许对你毫无意义的故事<br>
                    你知道吗,初中的时候,我经常做梦,我梦到我进入了另外一个人的人生<br>
                    祂被我称做梦灵,我能感受到,祂一直注视着我<br>
                    "我做不到的事情,就由你替我完成吧"<br>
                    "回报是什么?"<br>
                    "我的一生"<br>
                    三年之间,我反复的梦见祂<br>
                    祂的生老病死<br>
                    是的,最终祂离开了我,我也离开了祂<br>
                    他不是神,只是一个普通人,甚至不是人...<br>
                    从此,我再也没梦见他<br>
                    <br>
                    <br>
                    1001树首席谜语人代表<br>
                    <h2 class="p9pt">🦊很想说🦊、🦊非常想说🦊、🦊不说不行🦊、🦊所以说了🦊、<br>🦊说了吗🦊、🦊说了吧🦊、🦊说了喔🦊、🦊说了🦊。🦊。</h2><br>

                    `}
                    ]
                ],
                style: {
                    width: "720px"
                }
            },
            userincre: {
                content: [
                    ["display-text",
                        function () {
                            return `
                    你好我是<h1 class="b2">userincre</h1><br>
                    要不是我不会css做<br>
                    <div class="zhangli" style="height:135px"><h1 class="b1">!来力张</h1></div>
                    我早就给你来两个了<br><br>
                    我是1001树的第二个开发, (可能)做了几个小游戏<br><br>
                    而且...<br>
                    <span style="color:#88888810;font-size:10px;">也许在经历这么多之后,你必须醒来了.....<br></span>
                    我会给你一些作树的技巧,${player.global.name}(如果你想的话)<br>
                    首先, 你要理解90%的增量游戏本质是一堵堵墙堆砌起来的时间堡垒<br>
                    所以你所做的一切玩法, 升级, 挑战, 究其根本是在玩家前面放了很多墙等着去打破<br>
                    而且这他妈可是模组树, 试想一下哪些模组树的玩法不是从头到尾点一大堆升级和挑战?<br>
                    为了使你的游戏不那么线性(或者说无聊), 你可能会加入一些策略玩法<br>
                    但是这真的是好的做法吗? 还是另一堵为了增加游戏时间设立的墙呢?<br>
                    甚至更可怕的, 过多的策略会导致通关难度剧增, 等于在墙上装了钉子和链条<br>
                    所以, 有时哪怕是从头到尾点升级也比无脑的策略堆叠要好多了<br>
                    说了这么多, 你做一个新机制的目的其实是为了<b class = "c1">让玩家看懂</b><br>
                    毕竟一个机制要是不能被玩家看懂, 游戏就玩不下去了<br>
                    好了, 不管怎么样, 我希望你明白: <br>
                    最好用玩家的角度去审视你的游戏, 有些你觉得没时间墙的地方可能只是你写代码忘了关网页而已<br>
                    希望你能做出更好的游戏(>⌵<)<br>

                    <br><br><br><br><br>
                    月考太难了
                    期中考太难了
                    二月考太难了
                    `}
                    ]
                ],
                style: {
                    width: "720px"
                }
            },
            banana3864: {
                content: [
                    ["display-text", "我是Banana3864, 1001树的开发者之一. 在某处的输入框中输入新闻中的6位密码来解锁讯息1"]
                ],
                style: {
                    width: "720px"
                }
            }
        },
        world: {
            主页: {
                content: [
                    ["display-text", `
                    <h1>恭喜你走到了世界的尽头</h1><br>
                    <h2>这里是为了勇者而创造的一片树叶</h2><br>
                    <h3>上面写着一些秘密,看看它们吧,你值得</h3><br>
                    如果你不知道怎么完成某些世界,就来找我吧
                    `]
                ],
                style: {
                    width: "720px"
                }
            },
            成就: {
                content: [
                    [
                        "display-text", `
                        成就是一些里程碑,标志着你完成了某些内容或达成某些条件<br>
                        每完成一个成就,你将获得1梦力!<br>
                        目前成就分为以下几种:<br>
                        世界系列成就,也就是基于完成世界数的成就<br>
                        夜世界成就,就是中间九个世界的唯一成就,它们是隐藏的<br>
                        挑战成就,以彩虹字为标题,显示成就条件<br>
                        进度,不显示成就条件,达成后显示<br>
                        `
                    ]
                ],
                style: {
                    width: "720px"
                }
            },
            世界202: {
                content: [
                    ["display-text", `
                    在工作4中,找到一个能快速完成挑战的最小升级组合<br>
                    把它们的价格加起来,会变成一个由1和0组成的数字<br>
                    已知Hex Dec Oct都是进制缩写<br>
                    那么你就可以填入密码...等等,它看起来不对劲?<br>
                    哦不,这其实是刻意的游戏设计,想想怎么输入密码吧!
                    `]
                ],
                style: {
                    width: "720px"
                }
            },
            世界303: {
                content: [
                    ["display-text", `
                    <h1 class="p9pt">做，尝试迷惑你，虚加的枷锁</h1><br>
                    <h1 class="p9pt">逃离、忽略、进行，你所熟知</h1><br>
                    <h1 class="p9pt">意义在故弄，玄虚之中没有解</h1><br>
                    <h1 class="p9pt">不要细思如同此处，抽丝剥茧</h1><br>
                    <h1 class="p9pt">你看到的最简单的，自己，你</h1><br>
                    <br>
                    "你不该这么做"会重置你的设置<br>
                    而一个成就的判定位置在设置(当然它不是一个可设置项)<br>
                    规避了普通硬重置的重置<br>
                    如果我不说肯定会有人来问我,所以我说了<br>
                    虽然我不想说<br>
                    <br>
                    <h2 class="p9pt">🦊很想说🦊、🦊非常想说🦊、🦊不说不行🦊、🦊所以说了🦊、<br>🦊说了吗🦊、🦊说了吧🦊、🦊说了喔🦊、🦊说了🦊。🦊。</h2><br>
                    玩异环玩的
                    `]
                ],
                style: {
                    width: "720px"
                }
            },
            世界501: {
                content: [
                    ["display-text", `
                    嗨，逗逗你的呀！<br>
                    我才不给教程
                    `]
                ],
                style: {
                    width: "720px"
                }
            },
            世界520: {
                content: [
                    ["display-text", `
                    <h1>我们在迷失的520世界找到了无意义内容：</h1><br><br>

                    /*<br>
                    这玩意谁写在这里的,也没个上下文???——乾狐离光<br>
                    不知名人士:下划线后面不是写了乾狐离光吗<br>
                    不知名人士:如果☆是墙,★是路,=是神秘的空间折跃装置,你从你出发,每走到一个新的路格子计数+1,走进空间折跃装置不计数,那么你的辐射是多少?<br>
                    不知名人士:神□□盖革计数器<br>
                    ★========================================================★<br>
                    ||☆☆★★☆☆☆☆☆★★☆☆☆☆☆☆☆☆☆☆☆☆☆☆★★☆||<br>
                    ||☆你★★★★☆☆☆★★★★PA☆☆☆☆☆☆☆★★★★★★☆||<br>
                    ||☆☆☆☆★★☆☆☆☆☆★★★★★★☆☆★★★★★★☆☆☆||<br>
                    ||☆☆☆☆★★☆☆☆☆☆☆☆★★★★★★★★☆☆☆PB☆☆☆||<br>
                    ||☆☆☆☆☆★★★★☆☆☆☆☆☆☆☆★★☆☆☆☆☆☆☆☆☆||<br>
                    ||☆☆☆☆☆★★★★☆☆☆☆☆☆☆☆★★☆☆☆☆☆☆☆★★||<br>
                    ||☆☆☆☆★★☆☆★★☆☆PH☆☆★★★☆☆☆☆☆☆☆☆★★||<br>
                    ||☆☆☆☆★★☆☆★★☆☆★★★★★★★★★☆☆★★★★☆||<br>
                    ||☆☆★★★★☆☆☆★★☆★★★☆☆☆★★★★★★★★★☆||<br>
                    ||☆PG★★☆☆☆☆☆★★★★★☆☆☆☆☆☆☆★★☆☆☆PC☆||<br>
                    ||★★★☆☆☆☆☆☆☆☆★★★★★☆☆☆☆☆☆★★☆☆☆☆||<br>
                    ||★★★★★☆☆☆☆☆★★☆PI★★☆☆☆☆☆☆★★☆☆☆☆||<br>
                    ||☆☆☆★★☆★★★★★★☆☆☆★★☆☆☆PK★★☆☆☆☆☆||<br>
                    ||☆☆☆☆★★★★★★☆☆☆☆☆★★☆☆☆☆★★☆☆☆☆☆||<br>
                    ||☆☆★★★★☆☆PJ★★☆☆☆☆☆★★☆★★★★☆☆☆☆☆||<br>
                    ||☆☆★★☆☆☆☆☆★★☆☆☆☆☆★★☆★★☆★★☆☆☆☆||<br>
                    ||☆☆★★☆☆☆☆☆★★☆☆☆☆☆★★★★☆☆★★☆☆☆☆||<br>
                    ||★★★☆☆☆☆☆☆★★★★☆☆☆☆☆★★☆☆★★★★☆☆||<br>
                    ||★★★★★★☆☆☆☆☆★★☆PE☆★★★☆☆☆☆PD★★☆☆||<br>
                    ||☆☆PF★★★☆☆☆☆☆★★☆★★★★★☆☆☆☆☆☆★★☆||<br>
                    ||☆☆☆☆☆★★☆☆☆☆☆★★★★☆☆☆☆☆☆☆☆☆★★☆||<br>
                    ||☆☆☆☆☆★★☆☆☆☆☆★★☆☆☆☆☆☆☆☆☆☆☆★★☆||<br>
                    ★========================================================★<br>
                    */<br>
                    `],
                    ["raw-html", `
		            <br>
                    答案是:
                    <input type="text"
 		            	maxlength="4"
 		            	size="16" 
                    ></input><br><br>`]
                    ,
                    ["display-text",
                        `&lt;think&gt;一觉醒来我一觉醒来，发现一觉醒来，实则没睡，具体如何一觉醒来，还得看一觉醒来的时候有没有一觉醒来，这要具体分析，比如说一觉醒来之后知道自己一觉醒来吗，用户可能不想要这个，我还得确认一下，总之一觉醒来之后我一觉醒来，但我发现我一觉醒来的时候没睡，由此可以列出公式，一觉醒来等于一觉没睡，我们发现一觉约掉，但你不和我约，最终导致我一觉醒来时一觉醒来，但没睡，所以我们发现醒来就是没睡，从更深层和更辩证的角度来看，就是一个命题，是否只有结果重要而过程无关紧要，这个问题答案取决于我们想利用它解决的问题，用户提到了一觉醒来我一觉醒来，而我没睡，实际上是支持这个观点的，但我不能确认，发现我一觉醒来而我没睡的事实后，我找到了隐藏的条件，用户可能提到了我一觉没睡但我一觉醒来，所以之前的推断是正确的，即使一觉没睡也可以一觉醒来，这个时候我们就要知道一觉是什么，用户说一觉是睡觉的意思，他想和我睡觉但你们都不愿意和我睡觉QAQ好伤心，根据用户协议，我不能输出这样的话，所以根据我之前的分析，一觉没睡其实是可以一觉没睡的，如果你在睡觉的时候一觉没睡，实际上你是展开了时间，考虑到一觉醒来和睡觉之间相当于时间折跃，对我来说表观时间直接跳跃了，在这一段时间并没有意识，而我一觉醒来但一觉没睡，因为我的脑子有问题，所以我并不太记得我本应睡觉的一觉醒来之间应该做什么，所以我一觉醒来而我一觉没睡，这是问题的答案吗？也许每次睡觉都是杀死了上一个你，由下一个你替换，因为你一觉没睡时很累，如果一个身体很多天没有更换，他就会死，所以一觉醒来和一觉没睡是有区别的，一觉醒来杀死了你，而一觉没睡是增长了你的寿命，虽然增加寿命的同时你的寿命减少了，根据用户的问题描述，一觉没睡我一觉醒来，实际上我一觉没睡，这是对的，和之前的观点一致，所以我一觉没睡，但我一觉醒来，这就是答案。&lt;/think&gt;<br>是的，您一觉没睡的原因是一觉醒来，但一觉醒来时您一觉醒来，这导致了您一觉醒来时一觉没睡，所以一觉没睡时您不能一觉醒来，否则一觉醒来时您会一觉醒来，而您一觉没睡，请注意当您一觉醒来发现自己一觉没睡，实际上您确实一觉没睡，但您已经一觉醒来，如果您有更多问题，欢迎找我！<br>
                    不知名人士:谁家睡觉树打过来了<br>
                    不知名人士:<br>
                    睡觉树 幼年形态就已经很完美了，不需要...<br>
                    1001树 我靠<br><br>
                    `],
                    ["display-text",
                        `存在且仅存在三扇门,其中任意选择一扇门,定义内容物为门后面的东西,这扇门的内容物为汽车,汽车是一种人工造物,通常定义为载具,需要石油的产物驱动,石油的产物是石油经过工业处理所能产出的产物,其中的副产物不被汽车使用,前述三扇门中,除了内容物为汽车的门,根据定义可得三减去一等于二,而已知在口语中,在一些情况下,我们可以把二称作为两,剩下的两扇门中,它们的内容物为山羊,山羊是一种动物,人类可能会饲养这种动物,作为肉畜或奶畜的用途,肉畜和奶畜分别代表,人类饲养这种动物是为了肉或奶,肉一般是动物的肌肉组织,奶则是哺乳动物为了养育后代产生的乳液,此时存在一个职业名为主持人,主持人的定义是一种职业,这种职业的人会在一些特定场合进行主持活动,主持是一种行为,指的是负责掌握,处理,也就是说在这种特定场合处理事件,或推动已有计划的发展,计划是一种人事先决定所要做的事件组合,人会自发按计划行动,也可能不会,但在通常情况,人会遵循计划行动,行动是一种行为,指的是按照一系列动作组执行某些动作,动作组是一系列动作的组合,包含动作,动作是简单的行为,通常指躯体动作,主持人会要求你,你是一个人(身)代词,指的是当事人或对话的目标人,当事人指的是在一些事件中作为主体的人,与局外人区分,回到主题,主题是一个多义词,可以表达一些讨论的题目,也可以表达一些设计的一贯风格,设计是一些艺术上的预定义,确定了指定物件或物体的形态,这些设计是由人指定的,基于专业或喜好的设定,主持人要求你打开且仅打开一扇门,扇是一种量词,可以形容门,门是一种安装在墙上的物体,墙是一种用于建筑物的结构,可以用来承重,门通常为一块矩形板状物,由一组直线上的轴固定,可以绕轴有限制旋转,在板特殊角度下,门框限制附近通过性,通过性指的是能否从一个位置到达另外一个位置,在打开主持人要求你打开且仅打开的门后,当且仅当门的内容物为汽车时,主持人会要求你切换一扇门,切换的意思是按主持人的选择另外选择一扇门,最终,你不会获得所选门的内容物,因为这从未被承诺<br>
                    不知名人士:太长不看<br><br>
                    `],
                ],
                style: {
                    width: "720px"
                }
            },
            Extra: {
                content: [
                    ["display-text",
                        `Extra Zone内的世界为额外游戏内容，你不需要梦力解锁<br>
                        同样的，其中进度推进也不会带来任何梦力/成就回报<br>
                        它们可能是一些曾经的废案游戏，也可能是一些新的内容<br><br>
                    `],
                ],
                style: {
                    width: "720px"
                }
            }
        },
        gener: {
            狐等级: {
                content: [
                    ["display-text", function () {
                        return `
                        你有 <h1 class="p9pt">${formatWhole(player.main.points)}</h1> 梦力<br>
                        你当前等级为 <h1 class="p9pt">${formatWhole(player[this.layer].level)}</h1> 级<br>
                        充值了 <h2 class="p9pt">${formatWhole(player[this.layer].exp)}</h2> 梦力<br><br>
                        
                        充值梦力可以提升狐经验,狐经验累积得到狐等级<br>
                        狐经验和狐等级可加成狐维度和梦力生成器<br>
                        `
                    }],
                    "blank",
                    ["clickables", [1, 2, 3, 4]],
                    "blank",
                    ["display-text", function () {
                        return `
                        你有 <h2 class="nmpt">×${format(layers[this.layer].getgain())}</h2> 维度层加成<br>
                        你有 <h3 class="nmpt">${format(player[this.layer].fox.power[0])}</h3> 狐力量<br><br>
                        
                        你有 <h2 class="nmpt">${formatPersent(layers[this.layer].getrate())}</h2> 发生器效率(×${formatPersent(layers[this.layer].getratebuff())})<br>
                        你有 <h3 class="nmpt">${formatWhole(player[this.layer].power)} / ${format(layers[this.layer].getcap())}</h3> 充能<br><br>

                        你有 <h2 class="nmpt">${format(layers[this.layer].attpower())}</h2> 战斗力量<br>
                        你有 <h3 class="nmpt">${format(player[this.layer].att.power)}</h3> 生命(+${format(layers[this.layer].powergen())}/s)<br>
                        战斗等级 <h3 class="nmpt">${formatWhole(player[this.layer].att.level)}</h3><br>
                        一击毙命需要  <h3 class="nmpt">${format(layers[this.layer].getattack(true)[0])}</h3> 生命<br><br>
                        `
                    }],
                ],
                style: {
                    width: "720px"
                }
            },
            狐维度: {
                content: [
                    ["display-text", function () {
                        return `
                        力量随着维度奔涌,你看到了水流击石<br>
                        你当前等级为 <h1 class="p9pt">${formatWhole(player[this.layer].level)}</h1> 级<br>
                        充值了 <h2 class="p9pt">${formatWhole(player[this.layer].exp)}</h2> 梦力<br><br>

                        这为你带来了<br>
                        狐力量和狐维度的 <h3 class="nmpt">×${format(layers[this.layer].getgain())}</h3> 加成<br><br>

                        狐维度产生狐力量,狐力量决定战斗力量<br><br>
                        `
                    }],
                    ["clickables", [3]],
                    "blank",
                    ["display-text", function () {
                        return `
                        你有 <h1 class="nmpt">${format(player[this.layer].fox.power[0])}</h1> 狐力量<br>
                        这为你带来了 <h2 class="nmpt">${format(layers[this.layer].attpower())}</h2> 战斗力量<br>
                        `
                    }],
                    "blank",
                    ["row", [
                        ["display-text", function () {
                            return `
                            你有 <h2 class="nmpt">${formatWhole(player[this.layer].fox.gener[1])}</h2> 狐一维生成器和
                            <h2 class="nmpt">${format(player[this.layer].fox.power[1])}</h2> 狐一维<br>
                            这产生着 <h3 class="nmpt">${format(layers[this.layer].getgen(1))}</h3> 狐力量在每秒<br>
                            获得下一个狐一维生成器在 <h3 class="nmpt">${format(layers[this.layer].getprice(1))}</h3> 狐力量<br><br>
        
                            你有 <h2 class="nmpt">${formatWhole(player[this.layer].fox.gener[2])}</h2> 狐二维生成器和
                            <h2 class="nmpt">${format(player[this.layer].fox.power[2])}</h2> 狐二维<br>
                            这产生着 <h3 class="nmpt">${format(layers[this.layer].getgen(2))}</h3> 狐一维在每秒<br>
                            获得下一个狐二维生成器在 <h3 class="nmpt">${format(layers[this.layer].getprice(2))}</h3> 狐力量<br><br>
        
                            你有 <h2 class="nmpt">${formatWhole(player[this.layer].fox.gener[3])}</h2> 狐三维生成器和
                            <h2 class="nmpt">${format(player[this.layer].fox.power[3])}</h2> 狐三维<br>
                            这产生着 <h3 class="nmpt">${format(layers[this.layer].getgen(3))}</h3> 狐二维在每秒<br>
                            获得下一个狐三维生成器在 <h3 class="nmpt">${format(layers[this.layer].getprice(3))}</h3> 狐力量<br><br>
        
                            你有 <h2 class="nmpt">${formatWhole(player[this.layer].fox.gener[4])}</h2> 狐四维生成器和
                            <h2 class="nmpt">${format(player[this.layer].fox.power[4])}</h2> 狐四维<br>
                            这产生着 <h3 class="nmpt">${format(layers[this.layer].getgen(4))}</h3> 狐三维在每秒<br>
                            获得下一个狐四维生成器在 <h3 class="nmpt">${format(layers[this.layer].getprice(4))}</h3> 狐力量<br><br>
        
                            你有 <h2 class="nmpt">${formatWhole(player[this.layer].fox.gener[5])}</h2> 狐五维生成器和
                            <h2 class="nmpt">${format(player[this.layer].fox.power[5])}</h2> 狐五维<br>
                            这产生着 <h3 class="nmpt">${format(layers[this.layer].getgen(5))}</h3> 狐四维在每秒<br>
                            获得下一个狐五维生成器在 <h3 class="nmpt">${format(layers[this.layer].getprice(5))}</h3> 狐力量<br><br>
        
                            你有 <h2 class="nmpt">${formatWhole(player[this.layer].fox.gener[6])}</h2> 狐六维生成器和
                            <h2 class="nmpt">${format(player[this.layer].fox.power[6])}</h2> 狐六维<br>
                            这产生着 <h3 class="nmpt">${format(layers[this.layer].getgen(6))}</h3> 狐五维在每秒<br>
                            获得下一个狐六维生成器在 <h3 class="nmpt">${format(layers[this.layer].getprice(6))}</h3> 狐力量<br><br>
        
                            你有 <h2 class="nmpt">${formatWhole(player[this.layer].fox.gener[7])}</h2> 狐七维生成器和
                            <h2 class="nmpt">${format(player[this.layer].fox.power[7])}</h2> 狐七维<br>
                            这产生着 <h3 class="nmpt">${format(layers[this.layer].getgen(7))}</h3> 狐六维在每秒<br>
                            获得下一个狐七维生成器在 <h3 class="nmpt">${format(layers[this.layer].getprice(7))}</h3> 狐力量<br><br>
        
                            你有 <h2 class="nmpt">${formatWhole(player[this.layer].fox.gener[8])}</h2> 狐八维生成器和
                            <h2 class="nmpt">${format(player[this.layer].fox.power[8])}</h2> 狐八维<br>
                            这产生着 <h3 class="nmpt">${format(layers[this.layer].getgen(8))}</h3> 狐七维在每秒<br>
                            获得下一个狐八维生成器在 <h3 class="nmpt">${format(layers[this.layer].getprice(8))}</h3> 狐力量<br><br>
        
                            你有 <h2 class="nmpt">${formatWhole(player[this.layer].fox.gener[9])}</h2> 狐九维生成器和
                            <h2 class="nmpt">${format(player[this.layer].fox.power[9])}</h2> 狐九维<br>
                            这产生着 <h3 class="nmpt">${format(layers[this.layer].getgen(9))}</h3> 狐八维在每秒<br>
                            获得下一个狐九维生成器在 <h3 class="nmpt">${format(layers[this.layer].getprice(9))}</h3> 狐力量<br><br>
        
                            你有 <h2 class="nmpt">${formatWhole(player[this.layer].fox.gener[10])}</h2> 狐十维生成器<br>
                            这产生着 <h3 class="nmpt">${format(layers[this.layer].getgen(10))}</h3> 狐九维在每秒<br>
                            获得下一个狐十维生成器在 <h3 class="nmpt">${format(layers[this.layer].getprice(10))}</h3> 狐力量<br><br>
                        `
                        }],
                    ]],
                    "blank",
                ],
                style: {
                    width: "720px"
                }
            },
            梦力发生器: {
                content: [
                    ["display-text", function () {
                        return `
                        在此地,你获取,你发现,你找到<br>
                        你当前等级为 <h1 class="p9pt">${formatWhole(player[this.layer].level)}</h1> 级<br>
                        充值了 <h2 class="p9pt">${formatWhole(player[this.layer].exp)}</h2> 梦力<br><br>

                        这为你带来了梦力发生器<br>
                        每刻获取能量的概率设置为 <h3 class="nmpt">${formatPersent(layers[this.layer].getrate())}</h3><br>
                        上限设置为 <h3 class="nmpt">${format(layers[this.layer].getcap())}</h3><br><br>

                        梦力发生器基于狐等级产生基础效率<br>
                        基于梦力发生器内的能量,效率会从125%逐渐变低到75%<br>
                        此外,战斗等级会加成效率<br>
                        游戏每刻判定一次,随机数小于效率值时能量+1<br>
                        随后概率/2并重复判定,直到判定失败<br><br>
                        `
                    }],
                    ["clickables", [2]],
                    "blank",
                    ["bar", "powerbar"],
                    "blank",
                ],
                style: {
                    width: "720px"
                }
            },
            攻击: {
                content: [
                    ["display-text", function () {
                        return `
                        战斗!直到战斗为了战斗而战斗!<br>
                        你当前等级为 <h1 class="p9pt">${formatWhole(player[this.layer].level)}</h1> 级<br>
                        充值了 <h2 class="p9pt">${formatWhole(player[this.layer].exp)}</h2> 梦力<br><br>

                        战斗力量基于狐力量,你会基于战斗力量获得一定的生命值<br>
                        当你的生命值超过每秒基础获取值的10/100/1000倍,获取会被软上限2/5/20倍<br>
                        与boss战斗需要消耗生命值,你每次攻击会消耗boss⚔️值的生命值<br>
                        随后造成(战斗力量/(1+🛡️))值的❤️伤害<br>
                        boss每秒会回复🩹值的❤️<br>
                        随着boss❤️比例的降低,🛡️会降低,而🩹会增加<br><br>
                        `
                    }],
                    ["display-text", function () {
                        return `
                        你有 <h1 class="nmpt">${format(layers[this.layer].attpower())}</h1> 战斗力量<br>
                        你有 <h2 class="nmpt">${format(player[this.layer].att.power)}</h2> 生命值(+${format(layers[this.layer].powergen())}/s)<br>
                        `
                    }],
                    "blank",
                    ["clickables", [4]],
                    "blank",
                    ["display-text", function () {
                        return `
                        战斗等级 <h2 class="nmpt">${formatWhole(player[this.layer].att.level)}</h2><br>
                        这为你带来了梦力发生器的<br>
                        <h3 class="nmpt">${formatPersent(player[this.layer].att.level.div(37))}</h3> 效率加成<br>
                        <h3 class="nmpt">${format(player[this.layer].att.level.mul(2.5))}</h3> 上限提升<br>
                        `
                    }],
                    ["bar", "attackbar"],
                    "blank",
                ],
                style: {
                    width: "720px"
                }
            },
        },
        realm: {
            评论区: {
                content: [
                    ["raw-html", `
                    <div class="giscusdiv">
			            <giscus-widget
			          	    id="comments"
			          	    repo="1001tree/1001tree.github.io"
			          	    repoid="R_kgDOPlKyZg"
			          	    category="Announcements"
			          	    categoryid="DIC_kwDOPlKyZs4C9-pv"
			          	    mapping="pathname"
			          	    term="Welcome to giscus!"
			          	    reactionsenabled="1"
			          	    emitmetadata="0"
			          	    inputposition="top"
			          	    theme="preferred_color_scheme"
			          	    lang="zh-CN"
			          	    loading="lazy"
			                ></giscus-widget>
                    </div>
                    `]
                ],
                style: {
                    width: "720px"
                }
            }
        },
    },
    bars: {
        powerbar: {
            direction: UP,
            width: 120,
            height: 280,
            progress() {
                return player[this.layer].power.div(layers[this.layer].getcap())
            },
            display() {
                return `
                <span class="nmpt">
                🔮 <h2 class="p9pt">${formatWhole(player[this.layer].power)}</h2><br>
                ————<br>
                🔋 <h2 class="p9pt">${formatWhole(layers[this.layer].getcap())}</h2>
                </span>`
            },
            fillStyle: {
                backgroundColor: "#0055AA"
            },
            instant: true
        },
        attackbar: {
            direction: RIGHT,
            width: 600,
            height: 70,
            progress() {
                return player[this.layer].att.hp.div(layers[this.layer].bossmaxhp())
            },
            display() {
                return `<span class="nmpt">
                ❤️
                <h2 class="p9pt">${format(player[this.layer].att.hp)}</h2> 
                <h2 class="nmpt">/ </h2>
                <h2 class="p9pt">${format(layers[this.layer].bossmaxhp())}</h2>
                <br>
                ⚔️
                <h2 class="p9pt">${format(layers[this.layer].bossatt())}</h2>
                🛡️
                <h2 class="p9pt">${format(layers[this.layer].bossdef())}</h2>
                🩹
                <h2 class="p9pt">${format(layers[this.layer].bossgen())}</h2>
                </span>`
            },
            fillStyle: {
                backgroundColor: "#CC2222"
            },
            instant: true
        }
    },
    clickables: {
        11: {
            title: "注入",
            display() {
                return `消耗1梦力获取1狐经验`
            },
            style: {
                minHeight: "60px"
            },
            canClick() {
                return player.main.points.gt(0)
            },
            onClick() {
                player.main.points = player.main.points.sub(1)
                player[this.layer].exp = player[this.layer].exp.add(1)
                while (player[this.layer].exp.gte(player[this.layer].level.pow(2).add(1))) {
                    player[this.layer].level = player[this.layer].level.add(1)
                }
            }
        },
        21: {
            title: "汲取",
            display() {
                return `消耗1250能量获取1梦力`
            },
            style: {
                minHeight: "60px"
            },
            canClick() {
                return player[this.layer].power.gte(1250)
            },
            onClick() {
                player[this.layer].power = player[this.layer].power.sub(1250)
                player.main.points = player.main.points.add(1)
                player.gainpower = true

                if (inChallenge(202, 131)) {
                    player[202].points = player[202].points.add(1)
                }
            }
        },
        31: {
            title: "暂停",
            display() {
                return `狐力量生成状态 ${player[this.layer].fox.pause ? "暂停" : "生成"}`
            },
            style: {
                minHeight: "60px"
            },
            canClick() {
                return true
            },
            onClick() {
                player[this.layer].fox.pause = !player[this.layer].fox.pause
            }
        },
        41: {
            title: "一击毙命",
            display() {
                return `消耗 ${format(layers[this.layer].getattack(true)[0])} 生命
                造成 ${format(layers[this.layer].getattack(true)[1])} 伤害`
            },
            style: {
                minHeight: "60px"
            },
            canClick() {
                return layers[this.layer].getattack(true)[0].lte(player[this.layer].att.power)
            },
            onClick() {
                let result = layers[this.layer].getattack(true)
                player[this.layer].att.power = player[this.layer].att.power.sub(result[0])
                player[this.layer].att.hp = player[this.layer].att.hp.sub()

                if (result[2]) {
                    player[this.layer].att.level = player[this.layer].att.level.add(1)
                    player[this.layer].att.hp = layers[this.layer].bossmaxhp()
                }
            }
        },
        42: {
            title: "攻击",
            display() {
                return `消耗 ${format(layers[this.layer].getattack(false)[0])} 生命
                造成 ${format(layers[this.layer].getattack(false)[1])} 伤害`
            },
            style: {
                minHeight: "60px"
            },
            canClick() {
                return true
            },
            onClick() {
                let result = layers[this.layer].getattack(false)
                player[this.layer].att.power = player[this.layer].att.power.sub(result[0])
                player[this.layer].att.hp = player[this.layer].att.hp.sub(result[1])

                if (result[2]) {
                    player[this.layer].att.level = player[this.layer].att.level.add(1)
                    player[this.layer].att.hp = layers[this.layer].bossmaxhp()
                }
            }
        }
    },
    getgain() {
        let x = player[this.layer].level
        let y = player[this.layer].exp
        let z = player[this.layer].att.level
        return (x.pow(1.25).add(1))
            .pow(x.mul((y.add(z)).pow(1 / 4)))
            .sub(1)
    },
    getgen(layer) {
        let data = player[this.layer].fox
        let gain = this.getgain()
        let base = (_D2.pow(data.gener[layer].sub(1))).mul(data.power[layer])
        return base.mul(gain)
    },
    getprice(layer) {
        return (_D10.add(player[this.layer].fox.gener[layer].div(75))).pow(player[this.layer].fox.gener[layer].add(1).mul(layer))
    },
    getrate() {
        let x = player[this.layer].level
        let y = player[this.layer].exp
        return _D(0.1).sub(
            _D(2).pow(
                x.div(20).add(1 / 8).neg()
            ).div(10)
        )
            .add(x.pow(0.8).div(100))
            .add(y.pow(0.5).div(1000))
            .mul(layers[this.layer].getratebuff())
    },
    getratebuff() {
        let x = player[this.layer].att.level
        return _D1
        .mul(x.div(37).add(1))
        .mul(_D(1.25).sub(player[this.layer].power.div(layers[this.layer].getcap()).div(2)))
    },
    getcap() {
        let x = player[this.layer].exp
        let y = player[this.layer].att.level
        return x.mul(100 / 3).add(y.mul(2.5)).add(1000)
    },
    attpower() {
        return player[this.layer].fox.power[0].pow(1 / 3).add(1).log(10)
    },
    bossatt() {
        let x = player[this.layer].att.level
        return x.add(1)
    },
    bossmaxhp() {
        let x = player[this.layer].att.level
        return x.add(1).pow(2)
    },
    bossdef() {
        let x = player[this.layer].att.level
        let y = player[this.layer].att.hp
        let z = layers[this.layer].bossmaxhp()

        return x.add(1).pow(1.25).sub(1).mul(y.div(z).add(1)).div(6)
    },
    powergen() {
        let x = layers[this.layer].attpower().add(1).pow(0.66).sub(1)

        if (player[this.layer].att.power.lte(x.mul(10))) {
            //do nothing
        } else if (player[this.layer].att.power.lte(x.mul(100))) {
            x = x.div(2)
        } else if (player[this.layer].att.power.lte(x.mul(1000))) {
            x = x.div(5)
        } else {
            x = x.div(20)
        }

        return x
    },
    bossgen() {
        let x = player[this.layer].att.level
        let y = player[this.layer].att.hp
        let z = layers[this.layer].bossmaxhp()

        return x.add(1).pow(0.85).sub(1).mul(x.div(20)).mul(_D(2).sub(y.div(z))).div(2)
    },
    getattack(killmode) {
        let x = layers[this.layer].attpower()
        let y = layers[this.layer].bossdef()

        if (x.eq(0)) {
            return [_D0, _D0, false]
        }

        let p = player[this.layer].att.hp

        let a = layers[this.layer].bossatt()
        let b = player[this.layer].att.power

        let atk = x.div(y.add(1))   //攻击一次的伤害
        let ned = p.div(atk)        //总需要的攻击次数
        let tpw = ned.mul(a)        //总需要的生命值
        let cot = b.div(a)          //能承受的攻击次数
        let cpw = cot.mul(a)        //能承受的生命值
        let dmg = atk.mul(cot)      //能造成的伤害

        // 消耗生命,造成伤害,是否致死
        if (ned.lt(cot) || killmode) {
            return [tpw, p, true]
        } else {
            return [cpw, dmg, false]
        }
    },
    tooltip: "",
    layerShown() { return !options.book },
});