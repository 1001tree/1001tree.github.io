addLayer("303", {
    symbol: "🏁",
    resource: "看我干嘛？",
    color: "#FFF",
    update(diff) {
        if (!getGridData('main', this.layer)) return

        if (player[this.layer].game) {

            if (player[this.layer].load) {
                layers[303].endChallenge("<h1 class='p9tx'>我看到你...尝试逃离我的样子...<br>真的好可爱？！！</h1>")
                player[this.layer].sl = true
                return
            }

            if (player[this.layer].date + 500 < Date.now()) {
                layers[303].endChallenge("<h1 class='p9tx'>不要冷暴力我...我害怕<br>我不想停止...？！！</h1><sub>刻时间超限，性能问题</sub>")
                return
            }

            if (player[this.layer].bomb <= 0) {
                layers[303].endChallenge("<h2 class='p9tx'>炸弹爆炸了...<br>你得关心一下咱嘛</h2><br>但你完好无损，为什么？")
                return
            }

            if (player[this.layer.time <= 0]) {
                layers[303].endChallenge("<h2 class='p9tx'>炸弹爆炸了...<br>也许你需要再快点</h2><br>但你完好无损，为什么？")
                return
            }

            if (player[this.layer].clgVal[2].nervous >= 120) {
                layers[303].endChallenge("<h1 class='p9tx'>你感到喉咙一阵发紧<br>你喘不上气...<br>你倒下了，无法行动的你只能眼睁睁等着？！！</h1>")
                return
            }

            if (player[this.layer].clgVal[2].watch >= 120) {
                options.theme = "bloody"
                changeTheme()
                layers[303].endChallenge("<h1 class='p9tx'>她找到你了，她捧着你的<br><s>活着的</s>心脏？！！</h1>")
                return
            }

            if (
                ((x) => { return x[0] + x[1] })(layers[this.layer].check11(372559)) != 372560 ||
                ((x) => { return x[0] + x[1] })(layers[this.layer].check12(372559)) != 372561 ||
                ((x) => { return x[0] + x[1] })(layers[this.layer].check13(372559)) != 372562
            ) {
                player[this.layer].check = false
                options.theme = "bloody"
                changeTheme()
                layers[303].endChallenge("<h1 class='p9tx'>为了离开我...这值得作弊吗？？！</h1>")
                return
            } else {
                player[this.layer].check = true
            }

            if (player[this.layer.intervene <= 0]) {
                player[303].find = true
            }

            if (player[this.layer].bomb > player[this.layer].maxBomb) {
                player[this.layer].maxBomb = player[this.layer].bomb
            }

            if (inChallenge(this.layer, 13)) {
                let val = player[this.layer].clgVal[2]

                val.nervous += calNervousAddtion()
                val.watch += calWatchAddtion()

                val.power = Math.max(0, val.power * calExp() - 3 * diff)

                function calExp() {
                    let a = val.nervous
                    if (a <= 20) return 0.9 ** diff
                    else {
                        return ((0.9 - (a / 100 * 0.05))
                            + (Math.random() - 0.5) * 0.15 * (a / 100)
                        ) ** diff
                    }
                }

                function calNervousAddtion() {
                    let a = val.watch
                    if (val.watch < 20) return (100 ** 0.9) / 33 * diff
                    return ((100 + a) ** 0.9) / 33 * diff
                }

                function calWatchAddtion() {
                    let a = val.nervous
                    if (a < 40) return 0
                    return a / 50 * diff
                }
            }

            player[this.layer].time = player[this.layer].time - diff
            player[this.layer].intervene = player[this.layer].intervene - diff
            player[this.layer].bomb = player[this.layer].bomb - diff * ((player[this.layer].maxBomb / 10) ** Math.log10(25)) / 5
            player[this.layer].date = Date.now()

            if (player[this.layer].meow && Math.random() < 0.1) {
                makeParticles({
                    time: 2,
                    fadeOutTime: 1,
                    fadeInTime: 0.2,
                    gravity: 1,
                    image: "",
                    style: { width: "auto" },
                    text: `<span class="p9tx">喵</span>`,
                    speed() {
                        return (Math.random() + 1) * 8
                    },
                    angle() {
                        return (Math.random() - 0.5) * 180
                    },
                    dir() {
                        return (Math.random() - 0.5) * 180
                    },
                    spread: 0,
                    rotation() {
                        return (Math.random() - 0.5) * 15
                    },
                }, randomBetween(1, 3))
            }

        }
    },
    startData() {
        return {
            unlocked: true,
            points: _D0,
            game: false,
            load: false,
            time: 0,
            intervene: 90,
            score: 0,

            date: 0,

            bomb: 0,
            maxBomb: 0,

            complete: [false, false, false, false, false, false],

            clgVal: newClgVal,

            salt: 0,

            warning: true,
            find: false,
            sl: false,
            fake: false,
            meow: false,
            check: true,
        }
    },
    keyList() {
        let seed = player[this.layer].salt

        const a = 1664525;
        const c = 1013904223;
        const m = Math.pow(2, 32);

        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let currentSeed = seed;

        for (let i = arr.length - 1; i > 0; i--) {
            currentSeed = (a * currentSeed + c) % m;
            const j = Math.floor((currentSeed / m) * (i + 1));

            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        return arr
    },
    type: "none",
    tabFormat: {
        "1F": {
            content: [
                ["display-text", function () {
                    if (player[this.layer].clgVal.main.showtip) return `${player[this.layer].clgVal.main.showtip}<br><br>`
                }],
                ["display-text", function () {
                    return `
                    qhlg正在游玩AFK CHECK，但是她因为纯靠脑子连第三关都过不去<br>
                    所以被user的反人类设计气死了，同时为了填入最后一个棍木<br>
                    于是qhlg决定自己编写一个AFK CHECK<br>
                    并命名为AFK CHECK Never Gonna Give You Up<br>
                    简称为AFK CHECK NG<br>
                    作为1001树的开发组成员之一，qhlg确信qhlg能为玩家提供完美的作品<br>
                    qhlg把你关在了一个房间里，在你身上放置了一个炸弹<span onClick="player[303].fake = true" style="color:rgba(0,0,0,0);cursor: help;">（假的）</span><br>
                    她告诉你，因为她很坏，所以给你准备了一个小惊喜<br>
                    只有完成AFK CHECK NG才能解除炸弹<br>
                    你也快来试试吧，当你解除炸弹时，你就胜利了！<br>
                    此关卡不允许暂停<span onClick="player[303].meow = !player[303].meow" style="cursor: help;">喵</span>！<br>
                    此外，为了避免意外退出，请暂停其他游戏（特指102）
                    `
                }],
                "blank",
                ["bar", "timebar"],
                ["bar", "bombbar"],
                "blank",
                ["clickables", [1, 2]],
                "blank",
                "challenges",
                ["raw-html", function () {
                    if (checkWarning(303)) return `
                    <div class="bs">
                        <div class="tips" onclick="closeWarning(303)">
                        <h1>重要健康与安全提示</h1>
                        <br>
                        在游玩本游戏前，请仔细阅读以下内容:<br><br>

                        <h2>光敏性癫痫警告</h2><br>
                        极少数人在接触特定视觉图像(包括闪烁灯光或图案)时可能会突发癫痫症状,即使没有癫痫病史的人也可能在游玩时出现该症状<br><br>

                        <h2>视觉变化警告</h2><br>
                        游戏部分场景包含不可避免的高对比度颜色变化,这些视觉元素可能对部分玩家造成不适<br><br>

                        <h2>身体与精神紧张警告</h2><br>
                        游戏内容包含旨在制造紧张,恐惧和惊吓的元素.这些内容可能导致心率加快,血压升高,并对有心脏疾病,精神健康状况或其他潜在健康问题的玩家构成风险<br><br>

                        如果出现任何不适,如头晕,恶心,视力异常,肌肉抽搐或意识模糊,请立即停止游玩并咨询医生<br><br>

                        <button class="pb" onclick="closeWarning(303)">
                            好的
                        </button>
                        </div>
                    </div>`
                }],
                ["raw-html", function () {
                    if (player[this.layer].intervene <= 0) {
                        if (player[this.layer].find) {
                            return `
                            <div class="bs" style="background: rgba(132, 104, 41, 0.5);">
                                <div class="tips" style="background: rgba(132, 104, 41, 1);">
                                    <div style="text-align: right;width:100%">
                                        <button class="pb" onclick="layers[303].clearIntervene()" style="color:#fff; width: 30px;height: 30px;">
                                        ×
                                        </button>
                                    </div>
                                    <br>
                                    <h2>警告！我们看到一个炸弹正在你的身上！</h2><br><br>
                                    <h2>我发现如果您延续拆弹，炸弹很有可能会继续爆炸！</h2><br><br>
                                    <h2>qhlg提示您，请不要尝试进行拆弹，否则可能炸弹会爆炸！</h2><br><br>
                                    <h2>真的！如果你需要什么都不做，等炸弹进入你的家里就行了</h2><br><br>
                                    <h3>爱你的</h3><br>
                                    <h3>炸弹</h3><br><br>
                                    <button class="pb" onclick="layers[303].clearIntervene()">
                                        无视风险
                                    </button>
                                    <button class="pb" onclick="layers[303].clearIntervene()">
                                        继续拆弹
                                    </button>
                                </div>
                            </div>`
                        } else {
                            return `
                            <div class="bs" style="background: rgba(73, 19, 49, 0.5);">
                                <div class="tips" style="background: rgba(73, 19, 49, 1);">
                                    <div style="text-align: right;width:100%">
                                        <button class="pb" onclick="layers[303].clearIntervene()" style="color:#fff; width: 30px;height: 30px;">
                                        ×
                                        </button>
                                    </div>
                                    <br>
                                    <h1>一千零一树三零三世界作弊器<br>您的专属拆弹助手！</h1><br><br>
                                    <h2>您是否正在为<h1 class="p9tx">点击个</h1>炸弹烦恼？<br>不用着急，<h2 class="p9tx">点击个</h2>链接获取一个！</h2><br><br>
                                    <h3>看看时间吧！这是一<span class="p9tx">两</span>二三十分钟<br>bomb<span class="p9tx">弹弹嫩嫩软乎乎好吃呢喵吔！</span></h3><br><br>
                                    <h3>齁噢噢噢噢！炸弹齁噢噢噢要爆炸<br>叮叮滴滴哒哦不我被qhlg侵入了！</h3><br><br>
                                    <span class="p9tx">哈哈哈你别想逃出我的手掌心，${player.global.name}</span><br><br>
                                    <span class="p9tx">那我就这样告诉你吧炸弹是真的你别想<br>离开我</span>哦不<span class="p9tx">他</span>来了！<br>
                                    <span class="p9tx">比狐哈饿役嗯你啊哦</span>停止阅读<span class="p9tx">教恨学武钋</span><br>
                                    快按按钮逃离这里！<br>
                                    <span class="p9tx">来不及了他已经在这里浪费太久时间我的炸弹爆炸把我们的心融为一体我们从此再也不会离开分开走开错开我们永远在一起他留在这里我和他一起我们不会</span>快跑！<span class="p9tx">为了惩罚不听话的孩子我会</span>她真的会杀了你！
                                    <br><br><br>
                                    <button class="pb" onclick="layers[303].clearIntervene()" style="width: 160px;height: 50px;">
                                        我知道我知道了但是我不知道我知不知道
                                    </button>
                                    <button class="pb" onclick="layers[303].clearIntervene()" style="width: 160px;height: 50px;">
                                        请不要问我知不知道但是我知道我不知道
                                    </button>
                                    <button class="pb" onclick="layers[303].clearIntervene()" style="width: 160px;height: 50px;">
                                        可能我知道了而且我知道我不知道也知道
                                    </button>
                                </div>
                            </div>`
                        }
                    }
                }],
            ],
        },
        "2F": {
            content: [
                ["bar", "timebar"],
                ["bar", "bombbar"],
                "blank",
                ["display-text", function () {
                    if (!player[this.layer].complete[0]) return `
                    请你计算以下算式的答案<br>
                    正确率大于80%才能算通过<br>
                    第 ${formatWhole(player[this.layer].clgVal[0].round + 1)} / 3 轮<br>
                    问题 ${formatWhole(player[this.layer].clgVal[0].question + 1)} / ${formatWhole(clgConst[0].roundQuestion[player[this.layer].clgVal[0].round])}<br>
                    正确 ${formatWhole(player[this.layer].clgVal[0].correct)}
                    `
                }],
                ["display-text", function () {
                    return `${player[this.layer].clgVal[0].showtip}`
                }],
                "blank",
                ["display-text", function () {
                    if (!player[this.layer].complete[0] && player[this.layer].clgVal[0].question + clgConst[0].diffQuestion[player[this.layer].clgVal[0].round] < clgConst[0].roundQuestion[player[this.layer].clgVal[0].round]) return `
                    <h1 class="p9tx">Q${player[this.layer].clgVal[0].question + 1 + clgConst[0].diffQuestion[player[this.layer].clgVal[0].round]} | ${player[this.layer].clgVal[0].shownow}</h1>
                    `
                }],
                ["display-text", function () {
                    if (!player[this.layer].complete[0]) {
                        if (player[this.layer].clgVal[0].question >= 0) return `
                        现在,回答 <h1 class="p9tx">Q${player[this.layer].clgVal[0].question + 1}</h1> ！
                        `
                        else return `记住当前的题目！`
                    }
                }],
                "blank",
                ["clickables", [113]],
                "blank",
                ["clickables", [110, 111, 112]],
            ],
            unlocked() {
                return inChallenge(303, 11) && player[303].game
            }
        },
        "3F": {
            content: [
                ["bar", "timebar"],
                ["bar", "bombbar"],
                "blank",
                ["display-text", function () {
                    if (!player[this.layer].complete[1]) return `
                    这个保险箱有一个旋钮，上面刻着1-30的数字<br>
                    随着你旋转，三条密文会变化，这时候看到你解出的三个密码<br>
                    你需要依次让旋钮对准三个密码，然后点击对应按钮确认<br>
                    此过程中没有提示，而且一旦错误，就要重新解锁<br>
                    同时，为了防止机器人访问，本网站已启用人机验证模块<br>
                    您接下来的解码需要在干扰下进行！
                    `
                }],
                ["display-text", function () {
                    return `${player[this.layer].clgVal[1].showtip}`
                }],
                "blank",
                ["display-text", function () {
                    if (!player[this.layer].complete[1]) return `
                    <div 
                    class="tbox" style="
                    background-color:hsl(${(player[this.layer].time * 30) % 360},100%,55%);
                    transform: translate(${(player[this.layer].time * 52) % 6 - 3}px, ${(player[this.layer].time * 48) % 6 - 3}px) rotate(${Math.sin(player[this.layer].time * 17) * 1.25}deg);
                    display: inline-block;">
                    <span class="p9tx">${randomString(66)}</span><br>
                    <span class="p1tx">0:${s256(`0${player[this.layer].salt}${player[this.layer].time}`)}</span><br>
                    <span class="p2tx">1:${s256(`0${player[this.layer].salt}${player[this.layer].clgVal[1].current}`)}</span><br>
                    <span class="p3tx">5:${s256(`1${player[this.layer].salt}${player[this.layer].time}`)}</span><br>
                    <span class="p4tx">2:${s256(`1${player[this.layer].salt}${player[this.layer].clgVal[1].current}`)}</span><br>
                    <span class="p5tx">7:${s256(`2${player[this.layer].salt}${player[this.layer].time}`)}</span><br>
                    <span class="p6tx">6:${s256(`3${player[this.layer].salt}${player[this.layer].time}`)}</span><br>
                    <span class="p7tx">3:${s256(`2${player[this.layer].salt}${player[this.layer].clgVal[1].current}`)}</span><br>
                    <span class="p8tx">4:${s256(`4${player[this.layer].salt}${player[this.layer].time}`)}</span><br>
                    <span class="p9tx">1:${player[this.layer].clgVal[1].passwordDisplay[0]}</span><br>
                    <span class="p9tx">2:${player[this.layer].clgVal[1].passwordDisplay[1]}</span><br>
                    <span class="p9tx">3:${player[this.layer].clgVal[1].passwordDisplay[2]}</span><br>
                    <span class="p9tx">${randomString(66)}</span><br>
                    </div>
                    `
                }],
                "blank",
                ["clickables", [120]],
                "blank",
                ["clickables", [121]],
            ],
            unlocked() {
                return inChallenge(303, 12) && player[303].game
            }
        },
        "4F": {
            content: [
                ["bar", "timebar"],
                ["bar", "bombbar"],
                "blank",
                ["display-text", function () {
                    if (!player[this.layer].complete[1]) return `
                    你还没有钥匙，无法开门
                    `
                    else if (!player[this.layer].complete[2]) return `
                    她不会让你这么容易逃脱的！<br>
                    现在，你需要插入钥匙并扭转它，把门打开，但是你要控制好力度<br>
                    否则，你发出的声音就会把<span class="p9tx">QHLG</span>引来<br>
                    你发出的声音越大，你就会越紧张，这将导致你的操作一定程度上的失控！<br>
                    同样的，在这里待的太久也会催生你的紧张情绪<br>
                    不要让自己过于紧张，也不要被她找到！<br>
                    如果被找到了，她会...
                    `
                }],
                ["display-text", function () {
                    return `${player[this.layer].clgVal[2].showtip}`
                }],
                "blank",
                ["display-text", function () {
                    if (!player[this.layer].complete[2]) {

                        let tr = [0, 20, 40, 60, 80, 100]
                        let { watch, nervous } = player[this.layer].clgVal[2]
                        let w = [0, 0]

                        for (let i = 0; i < tr.length; i++) {
                            if (nervous >= tr[i]) {
                                w[0] = i
                            }
                            if (watch >= tr[i]) {
                                w[1] = i
                            }
                        }

                        return `
                        ${clgConst[2].text[0][w[0]]}(${nervous})
                        <br>
                        ${clgConst[2].text[1][w[1]]}(${watch})
                        `
                    }
                }],
                "blank",
                ["bar", "lockbar"],
                ["display-text", function () {
                    if (!player[this.layer].complete[2]) return `目标力度 <h3>${player[this.layer].clgVal[2].target[
                        player[this.layer].clgVal[2].round
                    ]
                        }</h3> - <h3>${player[this.layer].clgVal[2].target[
                        player[this.layer].clgVal[2].round
                        ] +
                        clgConst[2].range[player[this.layer].clgVal[2].round]
                        }</h3>`
                }],
                "blank",
                ["clickables", [130]],
                "blank",
            ],
            unlocked() {
                return inChallenge(303, 13) && player[303].game
            }
        }
    },
    clearIntervene() {
        if (player[this.layer].find) {
            player[this.layer].intervene = randomBetween(40 + (20 + player[this.layer].time / 30), 60 + (30 + player[this.layer].time / 20))
        } else {
            if (Math.random() < 0.1) {
                player[this.layer].intervene = randomBetween(40 + (20 + player[this.layer].time / 30), 60 + (30 + player[this.layer].time / 20))
                player[this.layer].find = true
            } else {
                makeParticles({
                    time: 5,
                    fadeOutTime: 3,
                    fadeInTime: 1,
                    gravity: 0.75,
                    image: "",
                    style: { width: "auto" },
                    text: `<span style="color:#f00">还...不够<br>渴望更多!</span>`,
                    speed() {
                        return (Math.random() + 1) * 20
                    },
                    angle() {
                        return (Math.random() - 0.5) * 30
                    },
                    dir() {
                        return (Math.random() - 0.5) * 45
                    },
                    spread: 0,
                    rotation() {
                        return (Math.random() - 0.5) * 25
                    },
                }, randomBetween(2, 5))
            }
        }
    },
    check11(input) {
        if (input == 372559) {
            player[this.layer].check = true
            return [372559, 1]
        }

        const const11 = clgConst[0]
        const val11 = player[this.layer].clgVal[0]
        const val12 = player[this.layer].clgVal[1]
        let curquestion = ["Error!请截图向开发者反馈并提供你的存档", 0]
        let ansquestion = ["Error!请截图向开发者反馈并提供你的存档", 0]

        //reset
        if (input == 0) {
            for (let r = 0; r < 3; r++) {
                for (let q = 0; q < clgConst[0].roundQuestion[r]; q++) {
                    let i = randomBetween(0, clgConst[0].base.length - 1)
                    player[this.layer].clgVal[0].data[r][q] = [
                        s256(`${player[this.layer].salt}${clgConst[0].base[i][0]}`),
                        s256(`${player[this.layer].salt}${clgConst[0].base[i][1]}`),
                    ]
                }
            }

            if (val11.question + const11.diffQuestion[val11.round] >= 0 && val11.question + const11.diffQuestion[val11.round] < const11.roundQuestion[val11.round]) {
                for (let q = 0; q < clgConst[0].base.length; q++) {
                    if (
                        s256(`${player[this.layer].salt}${clgConst[0].base[q][0]}`)
                        ==
                        val11.data[val11.round][val11.question + const11.diffQuestion[val11.round]][0]
                    ) {
                        curquestion = clgConst[0].base[q]
                    }
                }
            }

            if (val11.question >= 0 && val11.question < const11.roundQuestion[val11.round]) {
                for (let q = 0; q < clgConst[0].base.length; q++) {
                    if (
                        s256(`${player[this.layer].salt}${clgConst[0].base[q][0]}`)
                        ==
                        val11.data[val11.round][val11.question][0]
                    ) {
                        ansquestion = clgConst[0].base[q]
                    }
                }
            }

            val11.shownow = curquestion[0]
            return
        }

        if (val11.question >= 0 && val11.question < const11.roundQuestion[val11.round]) {
            for (let q = 0; q < clgConst[0].base.length; q++) {
                if (
                    s256(`${player[this.layer].salt}${clgConst[0].base[q][0]}`)
                    ==
                    val11.data[val11.round][val11.question][0]
                ) {
                    ansquestion = clgConst[0].base[q]
                }
            }
        }

        //answer
        if (input != -1) {
            if (input == ansquestion[1]) {
                val11.correct += 1
                val11.showtip = "答对了！"
            } else {
                val11.showtip = "答错了！"
            }
        }
        val11.question += 1

        if (val11.question + const11.diffQuestion[val11.round] >= 0 && val11.question + const11.diffQuestion[val11.round] < const11.roundQuestion[val11.round]) {
            for (let q = 0; q < clgConst[0].base.length; q++) {
                if (
                    s256(`${player[this.layer].salt}${clgConst[0].base[q][0]}`)
                    ==
                    val11.data[val11.round][val11.question + const11.diffQuestion[val11.round]][0]
                ) {
                    curquestion = clgConst[0].base[q]
                }
            }
        }

        val11.shownow = curquestion[0]

        //next round
        if (val11.question >= clgConst[0].roundQuestion[val11.round]) {
            if (val11.correct / clgConst[0].roundQuestion[val11.round] > .8) {
                if (val11.round >= 2) {
                    val11.showtip = "完成！"

                    val12.passwordDisplay[val11.round] = "Error!请截图向开发者反馈并提供你的存档"
                    for (let n = 1; n <= 30; n++) {
                        if (
                            s256(`${player[this.layer].salt}${s256(`${val11.round}${player[this.layer].salt}${n}`)}`)
                            ==
                            val12.password[val11.round]
                        ) {
                            val12.passwordDisplay[val11.round] = s256(`${val11.round}${player[this.layer].salt}${n}`)
                        }
                    }

                    player[this.layer].complete[0] = true
                    layers[this.layer].challenges[11].onComplete()
                } else {
                    val11.showtip = "进入下一轮！"

                    val12.passwordDisplay[val11.round] = "Error!请截图向开发者反馈并提供你的存档"
                    for (let n = 1; n <= 30; n++) {
                        if (
                            s256(`${player[this.layer].salt}${s256(`${val11.round}${player[this.layer].salt}${n}`)}`)
                            ==
                            val12.password[val11.round]
                        ) {
                            val12.passwordDisplay[val11.round] = s256(`${val11.round}${player[this.layer].salt}${n}`)
                        }
                    }

                    val11.round += 1
                    val11.correct = 0
                    val11.question = -const11.diffQuestion[val11.round]
                }
            } else {
                for (let r = 0; r < 3; r++) {
                    for (let q = 0; q < clgConst[0].roundQuestion[r]; q++) {
                        let i = randomBetween(0, clgConst[0].base.length - 1)
                        player[this.layer].clgVal[0].data[r][q] = [
                            s256(`${player[this.layer].salt}${clgConst[0].base[i][0]}`),
                            s256(`${player[this.layer].salt}${clgConst[0].base[i][1]}`),
                        ]
                    }
                }
                val11.showtip = "本轮失败，重新解题！"
                val11.correct = 0
                val11.question = -const11.diffQuestion[val11.round]
            }
        } else return

        if (val11.question + const11.diffQuestion[val11.round] >= 0 && val11.question + const11.diffQuestion[val11.round] < const11.roundQuestion[val11.round]) {
            for (let q = 0; q < clgConst[0].base.length; q++) {
                if (
                    s256(`${player[this.layer].salt}${clgConst[0].base[q][0]}`)
                    ==
                    val11.data[val11.round][val11.question + const11.diffQuestion[val11.round]][0]
                ) {
                    curquestion = clgConst[0].base[q]
                }
            }
        }

        val11.shownow = curquestion[0]
    },
    check12(input) {
        if (input == 372559) {
            player[this.layer].check = true
            return [372559, 2]
        }

        const val12 = player[this.layer].clgVal[1]

        if (input == 0) {
            val12.target = [false, false, false]
        }

        if (
            val12.passwordDisplay[input - 1]
            ==
            s256(`${input - 1}${player[this.layer].salt}${val12.current}`)
        ) {
            val12.target[input - 1] = true
        } else {
            val12.target[input - 1] = false
        }

        if (val12.target[0] && val12.target[1] && val12.target[2]) {
            val12.showtip = "完成！"
            player[this.layer].complete[1] = true
            layers[this.layer].challenges[12].onComplete()
        }
    },
    check13(input) {
        if (input == 372559) {
            player[this.layer].check = true
            return [372559, 3]
        }

        if (input == -1) {
            player[this.layer].clgVal[2] = JSON.parse(JSON.stringify(newClgVal[2]))
            player[this.layer].clgVal[2].target = [
                randomBetween(0, 100 - clgConst[2].range[0]),
                randomBetween(0, 100 - clgConst[2].range[1]),
                randomBetween(0, 100 - clgConst[2].range[2]),
                randomBetween(0, 100 - clgConst[2].range[3]),
                randomBetween(0, 100 - clgConst[2].range[4]),
                randomBetween(0, 100 - clgConst[2].range[5]),
                randomBetween(0, 100 - clgConst[2].range[6]),
                randomBetween(0, 100 - clgConst[2].range[7]),
                randomBetween(0, 100 - clgConst[2].range[8]),
                randomBetween(0, 100 - clgConst[2].range[9]),
                randomBetween(0, 100 - clgConst[2].range[10]),
                randomBetween(0, 100 - clgConst[2].range[11]),
                randomBetween(0, 100 - clgConst[2].range[12]),
            ]
        }

        const val13 = player[this.layer].clgVal[2]

        if (input <= player[this.layer].clgVal[2].target[player[this.layer].clgVal[2].round] + clgConst[2].range[player[this.layer].clgVal[2].round] && input >= player[this.layer].clgVal[2].target[player[this.layer].clgVal[2].round]) {
            if (val13.round >= 12) {
                val13.showtip = "完成！但是后面的还没做"
                player[this.layer].complete[2] = true
                layers[this.layer].challenges[13].onComplete()
            }
            val13.round++
            val13.watch /= 1.05
            val13.nervous /= 1.05
        } else {
            val13.watch *= 1.05
            val13.nervous *= 1.05
            val13.watch += 5 + val13.watch / 50
            val13.nervous += 5 + val13.nervous / 50
        }
    },
    startChallenge() {
        player[this.layer].load = false
        player[this.layer].game = true
        player[this.layer].time = 600
        player[this.layer].intervene = 90
        player[this.layer].score = 0
        player[this.layer].salt = Date.now()
        player[this.layer].bomb = 10
        player[this.layer].maxBomb = 10
        player[this.layer].date = Date.now()

        player[this.layer].challenges = []
        player[this.layer].upgrades = []

        player[this.layer].complete = [false, false, false, false, false, false]

        player[this.layer].clgVal = JSON.parse(JSON.stringify(newClgVal))

        //clg 11
        for (let r = 0; r < 3; r++) {
            for (let q = 0; q < clgConst[0].roundQuestion[r]; q++) {
                let i = randomBetween(0, clgConst[0].base.length - 1)
                player[this.layer].clgVal[0].data[r][q] = [
                    s256(`${player[this.layer].salt}${clgConst[0].base[i][0]}`),
                    s256(`${player[this.layer].salt}${clgConst[0].base[i][1]}`),
                ]
            }
        }

        //clg 12
        player[this.layer].clgVal[1].password = [
            s256(`${player[this.layer].salt}${s256(`0${player[this.layer].salt}${randomBetween(1, 30)}`)}`),
            s256(`${player[this.layer].salt}${s256(`1${player[this.layer].salt}${randomBetween(1, 30)}`)}`),
            s256(`${player[this.layer].salt}${s256(`2${player[this.layer].salt}${randomBetween(1, 30)}`)}`)
        ]
        player[this.layer].clgVal[1].passwordDisplay = [
            "=未破译=",
            "=未破译=",
            "=未破译=",
        ]

        //clg 13
        /*
            player[this.layer].clgVal[2].target = [
                randomBetween(0, 100 - clgConst[2].range[0]),
                randomBetween(0, 100 - clgConst[2].range[1]),
                randomBetween(0, 100 - clgConst[2].range[2]),
                randomBetween(0, 100 - clgConst[2].range[3]),
                randomBetween(0, 100 - clgConst[2].range[4]),
                randomBetween(0, 100 - clgConst[2].range[5]),
                randomBetween(0, 100 - clgConst[2].range[6]),
                randomBetween(0, 100 - clgConst[2].range[7]),
                randomBetween(0, 100 - clgConst[2].range[8]),
                randomBetween(0, 100 - clgConst[2].range[9]),
                randomBetween(0, 100 - clgConst[2].range[10]),
                randomBetween(0, 100 - clgConst[2].range[11]),
                randomBetween(0, 100 - clgConst[2].range[12]),
            */

        layers[this.layer].challenges[11].onExit()
        layers[this.layer].challenges[12].onExit()
        layers[this.layer].challenges[13].onExit()
        player.subtabs[303].mainTabs = "1F"

        window.trackPlayer.setSong("303bg", true)
    },
    endChallenge(showtip) {
        player[this.layer].load = false
        player[this.layer].game = false
        player[this.layer].time = 0
        player[this.layer].intervene = 1
        player[this.layer].score = 0
        player[this.layer].salt = 0
        player[this.layer].bomb = 0
        player[this.layer].maxBomb = 0
        player[this.layer].date = 0

        player[this.layer].challenges = []
        player[this.layer].upgrades = []

        player[this.layer].complete = [false, false, false, false, false, false]

        player[this.layer].clgVal = JSON.parse(JSON.stringify(newClgVal))
        if (showtip) player[this.layer].clgVal.main.showtip = showtip

        layers[this.layer].challenges[11].onExit()
        layers[this.layer].challenges[12].onExit()
        layers[this.layer].challenges[13].onExit()
        player.subtabs[303].mainTabs = "1F"

        window.trackPlayer.setSong("303bg", false)
    },
    upgrades: {

    },
    challenges: {
        11: {
            name: "解算：频棠弧合",
            challengeDescription: "破译出保险箱的密码，你就可以打开保险箱",
            goalDescription: "算出答案",
            rewardDescription: "给你密码",
            canComplete() {
                return player[this.layer].complete[0]
            },
            unlocked() {
                return player[this.layer].game
            },
            onEnter() {
                layers[this.layer].check11(0)
            },
            onExit() {
                layers[this.layer].check11(0)
            },
            onComplete() {
                playsound("cc")
            }
        },
        12: {
            name: "开箱:辣歺供梓",
            challengeDescription: "取出保险箱中的钥匙，你就可以打开门",
            goalDescription: "打开保险箱",
            rewardDescription: "给你钥匙",
            canComplete() {
                return player[this.layer].complete[1]
            },
            unlocked() {
                return player[this.layer].game
            },
            onEnter() {
                layers[this.layer].check12(0)
            },
            onExit() {
                layers[this.layer].check12(0)
            },
            onComplete() {
                playsound("cc")
            }
        },
        13: {
            name: "出门：圆甜姬曳",
            challengeDescription: "<span class='p9tx'>qhlg</span>正在寻找你，不要被发现",
            goalDescription: "用钥匙开门",
            rewardDescription: "逃出房间",
            canComplete() {
                return player[this.layer].complete[2]
            },
            unlocked() {
                return player[this.layer].game && player[this.layer].find
            },
            onEnter() {
                layers[this.layer].check13(-1)
            },
            onExit() {
                layers[this.layer].check13(-1)
            },
            onComplete() {
                playsound("cc")
            }
        },
    },
    clickables: {
        11: {
            title: "*开始摇滚*",
            canClick() { return !player[this.layer].game },
            onClick() {
                layers[303].startChallenge()
            }

        },
        12: {
            title: "结束挑战",
            canClick() { return player[this.layer].game },
            onClick() {
                layers[303].endChallenge("<h1 class='p9tx'>懦夫。</h1>")
            }
        },
        13: {
            title: "你不该这么做",
            canClick() { return true },
            unlocked() {
                return !player[this.layer].check
            },
            onClick() {
                hardReset(true, true)
            }
        },

        //bomb
        21: {
            title: "炸弹计数+1",
            display() {
                return `炸弹计数每秒减少<br>${format(((player[this.layer].maxBomb / 10) ** Math.log10(25)) / 5)}<br>不要贪心<br>不要长按`
            },
            unlocked() {
                return player[this.layer].clgVal[0].question >= 0
            },
            onClick() {
                player[this.layer].bomb = Math.min(100, player[this.layer].bomb + 1)
            },
            onHold() {
                player[this.layer].maxBomb = 100
            },
            canClick() { return player[this.layer].game },
            unlocked() { return player[this.layer].game }
        },

        //clg 11
        1101: {
            title() {
                return `
				<span style="font-size:48px">${layers[this.layer].keyList()[0]}</span>`
            },
            unlocked() {
                return player[this.layer].clgVal[0].question >= 0 && !player[this.layer].complete[0]
            },
            canClick: true,
            onClick() {
                layers[this.layer].check11(layers[this.layer].keyList()[0])
            }
        },
        1102: {
            title() {
                return `
				<span style="font-size:48px">${layers[this.layer].keyList()[1]}</span>`
            },
            unlocked() {
                return player[this.layer].clgVal[0].question >= 0 && !player[this.layer].complete[0]
            },
            canClick: true,
            onClick() {
                layers[this.layer].check11(layers[this.layer].keyList()[1])
            }
        },
        1103: {
            title() {
                return `
				<span style="font-size:48px">${layers[this.layer].keyList()[2]}</span>`
            },
            unlocked() {
                return player[this.layer].clgVal[0].question >= 0 && !player[this.layer].complete[0]
            },
            canClick: true,
            onClick() {
                layers[this.layer].check11(layers[this.layer].keyList()[2])
            }
        },
        1114: {
            title() {
                return `
				<span style="font-size:48px">${layers[this.layer].keyList()[3]}</span>`
            },
            unlocked() {
                return player[this.layer].clgVal[0].question >= 0 && !player[this.layer].complete[0]
            },
            canClick: true,
            onClick() {
                layers[this.layer].check11(layers[this.layer].keyList()[3])
            }
        },
        1115: {
            title() {
                return `
				<span style="font-size:48px">${layers[this.layer].keyList()[4]}</span>`
            },
            unlocked() {
                return player[this.layer].clgVal[0].question >= 0 && !player[this.layer].complete[0]
            },
            canClick: true,
            onClick() {
                layers[this.layer].check11(layers[this.layer].keyList()[4])
            }
        },
        1116: {
            title() {
                return `
				<span style="font-size:48px">${layers[this.layer].keyList()[5]}</span>`
            },
            unlocked() {
                return player[this.layer].clgVal[0].question >= 0 && !player[this.layer].complete[0]
            },
            canClick: true,
            onClick() {
                layers[this.layer].check11(layers[this.layer].keyList()[5])
            }
        },
        1127: {
            title() {
                return `
				<span style="font-size:48px">${layers[this.layer].keyList()[6]}</span>`
            },
            unlocked() {
                return player[this.layer].clgVal[0].question >= 0 && !player[this.layer].complete[0]
            },
            canClick: true,
            onClick() {
                layers[this.layer].check11(layers[this.layer].keyList()[6])
            }
        },
        1128: {
            title() {
                return `
				<span style="font-size:48px">${layers[this.layer].keyList()[7]}</span>`
            },
            unlocked() {
                return player[this.layer].clgVal[0].question >= 0 && !player[this.layer].complete[0]
            },
            canClick: true,
            onClick() {
                layers[this.layer].check11(layers[this.layer].keyList()[7])
            }
        },
        1129: {
            title() {
                return `
				<span style="font-size:48px">${layers[this.layer].keyList()[8]}</span>`
            },
            unlocked() {
                return player[this.layer].clgVal[0].question >= 0 && !player[this.layer].complete[0]
            },
            canClick: true,
            onClick() {
                layers[this.layer].check11(layers[this.layer].keyList()[8])
            }
        },
        1131: {
            title() {
                return `<span style="font-size:36px">Next</span>`
            },
            unlocked() {
                return player[this.layer].clgVal[0].question < 0 && !player[this.layer].complete[0]
            },
            canClick: true,
            onClick() {
                layers[this.layer].check11(-1)
            }
        },

        //clg12
        1201: {
            title() {
                return `<span style="font-size:48px">+</span>`
            },
            onClick() {
                player[303].clgVal[1].current = Math.min(player[303].clgVal[1].current + 1, 30)
            },
            onHold() {
                layers[this.layer].check12(0)
            },
            canClick: true,
            unlocked() {
                return !player[this.layer].complete[1]
            },
        },
        1202: {
            title() {
                return `<span style="font-size:48px">-</span>`
            },
            onClick() {
                player[303].clgVal[1].current = Math.max(player[303].clgVal[1].current - 1, 1)
            },
            onHold() {
                layers[this.layer].check12(0)
            },
            canClick: true,
            unlocked() {
                return !player[this.layer].complete[1]
            },
        },
        1211: {
            title() {
                return `<span style="font-size:48px">1</span>`
            },
            onClick() {
                layers[this.layer].check12(1)
            },
            onHold() {
                layers[this.layer].check12(0)
            },
            canClick: true,
            unlocked() {
                return !player[this.layer].complete[1]
            },
        },
        1212: {
            title() {
                return `<span style="font-size:48px">2</span>`
            },
            onClick() {
                layers[this.layer].check12(2)
            },
            onHold() {
                layers[this.layer].check12(0)
            },
            canClick: true,
            unlocked() {
                return !player[this.layer].complete[1]
            },
        },
        1213: {
            title() {
                return `<span style="font-size:48px">3</span>`
            },
            onClick() {
                layers[this.layer].check12(3)
            },
            onHold() {
                layers[this.layer].check12(0)
            },
            canClick: true,
            unlocked() {
                return !player[this.layer].complete[1]
            },
        },

        //clg12
        1301: {
            title() {
                return `<span style="font-size:28px">用力</span>`
            },
            onClick() {
                player[this.layer].clgVal[2].power = Math.min(100, player[this.layer].clgVal[2].power + calPower())

                function calPower() {
                    let a = player[303].clgVal[2].nervous
                    if (a <= 20) return 5
                    else {
                        return (5 - (a / 100 * 2))
                            + (Math.random() - 0.5) * 5 * (a / 100)
                    }
                }
            },
            canClick: true,
            unlocked() {
                return !player[this.layer].complete[2]
            },
        },
        1302: {
            title() {
                return `<span style="font-size:20px">平复心情</span>`
            },
            onClick() {
                player[303].clgVal[2].nervous = player[303].clgVal[2].nervous / 2
                player[303].clgVal[2].watch += 2 + player[303].clgVal[2].watch / 33
            },
            onHold() {
                player[303].clgVal[2].nervous = 120
            },
            canClick: true,
            unlocked() {
                return !player[this.layer].complete[2]
            },
        },
        1303: {
            title() {
                return `<span style="font-size:20px">扭钥匙</span>`
            },
            onClick() {
                layers[this.layer].check13(player[this.layer].clgVal[2].power)
            },
            canClick: true,
            unlocked() {
                return !player[this.layer].complete[2]
            },
        },
    },
    bars: {
        timebar: {
            direction: RIGHT,
            width: 600,
            height: 30,
            progress() {
                return player[303].time / 600
            },
            display() {
                return `剩余时间 <h3 class="p9tx">${formatTime(player[303].time)}</h3>`
            },
            fillStyle: { backgroundColor: "#3A3" }
        },
        bombbar: {
            direction: RIGHT,
            width: 600,
            height: 20,
            progress() {
                return player[303].bomb / 100
            },
            display() {
                return `炸弹 <span class="p9tx">${format(player[303].bomb)}</span>`
            },
            fillStyle: { backgroundColor: "#F00" }
        },
        lockbar: {
            direction: RIGHT,
            width: 600,
            height: 50,
            progress() {
                return player[303].clgVal[2].power / 100
            },
            display() {
                return `力度 <span class="p9tx">${formatWhole(player[303].clgVal[2].power)}</span>`
            },
            fillStyle: { backgroundColor: "#888" }
        }
    },
    layerShown() { return getGridData('main', this.layer) && (!options.hideWorld || !player.world[this.layer]) },

});