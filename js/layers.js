addLayer("main", {
    name: "梦界",
    symbol: "🌏️",
    resource: "梦力",
    color: "#9b43f4",
    update(diff) {
        player.global.click *= (2 ** diff)
    },
    startData() {
        return {
            unlocked: true,
            points: _D0
        }
    },
    type: "none",
    tabFormat: [
        "main-display",
        "blank",
        ["display-text", "此条为宽度检测条,如果你无法看到这个条的两端<br>请在设置中将页面布局改为单页面(或减小浏览器缩放比例)以获得最佳显示"],
        "blank",
        ["bar", 1],
        "blank",
        ["display-text", "游戏类型 | <span class='c1'>???</span> <span class='c2'>增量</span> <span class='c3'>非增量</span> | 悬浮以查看玩法标签<br>你可以消耗梦力解锁一个世界<br>中间的九个夜世界需要2梦力<br>其他世界需要1梦力"],
        "blank",
        "clickables",
        "grid",
    ],
    bars: {
        1: {
            direction: RIGHT,
            width: 750,
            height: 30,
            display() {
                return '<span style="color:#88888888">游戏完成进度</span>'
            },
            progress() {
                return player.points.div(26)
            }
        }
    },
    grid: {
        rows: 5,
        cols: 5,
        getStartData(id) {
            return false
        },
        getUnlocked(id) {
            return true
        },
        getCanClick(data, id) {
            if (data) return true
            if(/[2-4]0[2-4]/.test(id)) return player[this.layer].points.gte(2) && !getGameName(id)[0].includes("未完成游戏")
            else return player[this.layer].points.gte(1) && !getGameName(id)[0].includes("未完成游戏")
        },
        onClick(data, id) {
            if (data) return
            if(/[2-4]0[2-4]/.test(id)) player[this.layer].points = player[this.layer].points.sub(2)
            else player[this.layer].points = player[this.layer].points.sub(1)
            setGridData(this.layer, id, true)
        },
        getDisplay(data, id) {
            let mode = options.hcmode
            let n = getGameName(id)

            if (mode % 3 == 2) {
                return `<h1>${n[0]}</h1>
                <h3>${n[1]}</h3>
                <br>${player.world[id] ? "已完成" : (data ? "已解锁" : "未解锁")}`
            }
            else if (mode % 3 == 0) {
                return `<h2 class="${n[2]}">${n[0]}</h2>
                <span class="${n[2]}">${n[1]}</span>
                <br>${player.world[id] ? "已完成" : (data ? "已解锁" : "未解锁")}`
            }
            else {
                return `<h1>${player.world[id] ? "已完成" : (data ? "已解锁" : "未解锁")} | ${n[0]}</h1>
                <h2>${n[1]}</h2>
                <h3>标签:${n[3]}</h3>`
            }
        },
        getStyle(data, id) {
            let style = { backgroundClip: "padding-box", "transition-duration": "0s" }

            let mode = options.hcmode

            if (mode == 0) {
                style.width = "148px"
                style.height = "116px"
                if (player.world[id]) style.backgroundImage = "linear-gradient(to bottom, #FD0, #D00)"
                else if (data) style.backgroundImage = "linear-gradient(to bottom, #0F8, #6CC)"
                else if (this.getCanClick(data, id)) style.backgroundImage = "linear-gradient(to bottom, #DDD, #888)"
                else style.backgroundImage = "linear-gradient(to bottom, #666, #222)"
            }
            else if (mode == 1) {
                style.width = "750px"
                style.height = "100px"
                style["border-style"] = "solid"
                style["border-color"] = "transparent"
                if (player.world[id]) style.backgroundImage = "linear-gradient(to bottom, #ED0, #C20)"
                else if (data) style.backgroundImage = "linear-gradient(to bottom, #1E7, #3A9)"
                else if (this.getCanClick(data, id)) style.backgroundImage = "linear-gradient(to bottom, #DDE, #776)"
                else style.backgroundImage = "linear-gradient(to bottom, #666, #555)"
            }
            else if (mode == 2) {
                style.width = "148px"
                style.height = "148px"
                if (player.world[id]) style.backgroundImage = "linear-gradient(to bottom, #AAF, #FAA)"
                else if (data) style.backgroundImage = "linear-gradient(to bottom, #EEE, #FAA)"
                else if (this.getCanClick(data, id)) style.backgroundImage = "linear-gradient(to bottom, #EEE, #999)"
                else style.backgroundImage = "linear-gradient(#666)"
            }

            return style
        },
        getTooltip(data, id) { return getGameName(id)[3] }
    },
    clickables: {
        11: {
            title() { return MODE_DISPLAYS[MODE_SETTINGS.indexOf(options.hcmode)] },
            onClick() {
                adjustMode()
            },
            canClick() { return true },
            onHold() { },
            style() {
                return {
                    minHeight: "50px",
                    width: "750px",
                    transform: "unset",
                    backgroundColor: "#eee"
                }
            }
        }
    },
    layerShown() { return true },

    hotkeys: [
        { key: "i", description: "-Setting- I: 页面布局", onPress() { toggleOpt("forceOneTab") } },
        { key: "o", description: "-Setting- O: BGM显示", onPress() { toggleOpt("songshown") } },
        { key: "p", description: "-Setting- P: 新闻显示", onPress() { toggleOpt('newsshown') } },
    ],
    //toggleOpt("songshown")toggleOpt('newsshown')

});

addLayer("ach", {
    name: "成就",
    symbol: "🏆",
    resource: "成就",
    color: "#f2d87b",
    update(diff) {
        if (player[501].lose) {
            options.truechallenger = -1
        }

        if (!options.challenger && player._501.started) {
            options.truechallenger = -1
        }
    },
    startData() {
        return {
            unlocked: true,
            points: _D0
        }
    },
    type: "none",
    tabFormat: {
        成就: {
            content: [
                ["display-text", function () {
                    let tac = _D(Object.keys(layers[this.layer].achievements).length - 2)
                    let ach = player[this.layer].points
                    return `你有 ${formatWhole(ach)}/${formatWhole(tac)} 成就,加成成就获取+1<br>
                    ${layers[this.layer].getSomeText(ach.div(tac))}<br>
                    `
                }],
                "blank",
                ["display-text", function () {
                    return `有一些成就在游戏进程中可能变得永远无法完成,它们是:`
                }],
                ["display-text", function () {
                    return `愚人节玩笑 目前 ${!player._501.lose ? "可完成" : "不可完成"}`
                }],
                ["display-text", function () {
                    return `愚人节挑战者 目前 ${options.truechallenger >= 0 ? "可完成" : "不可完成"}`
                }],
                "blank",
                "clickables",
                "blank",
                "achievements",
            ]
        },
        世界: {
            content: [
                ["row", [["milestone", 101], ["milestone", 102], ["milestone", 103], ["milestone", 104], ["milestone", 105],]],
                ["row", [["milestone", 201], ["milestone", 202], ["milestone", 203], ["milestone", 204], ["milestone", 205],]],
                ["row", [["milestone", 301], ["milestone", 302], ["milestone", 303], ["milestone", 304], ["milestone", 305],]],
                ["row", [["milestone", 401], ["milestone", 402], ["milestone", 403], ["milestone", 404], ["milestone", 405],]],
                ["row", [["milestone", 501], ["milestone", 502], ["milestone", 503], ["milestone", 504], ["milestone", 505],]],
                ["row", [["milestone", 520], ]],
            ]
        }
    },
    getSomeText(progress) {
        let p = progress.eq_tolerance(1) ? 6 : Decimal.ceil(progress.mul(5)).toNumber()
        let s = player.global.achseed
        let t = getHint()[p]

        return chooseOneInArray(t, s)
    },
    achievements: {
        11: {
            name: "<span class='ach'>小世界</span>",
            done() { return player.points.gte(1) },
            onComplete() { achievementComplete() },
            tooltip() { return this.done() ? '<span class="p1pt">完成1世界</span>' : `完成${formatWhole(player.points)}/1世界` },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/11.jpg)",
            },
        },
        12: {
            name: "<span class='ach'>世界计划</span>",
            done() { return player.points.gte(5) },
            onComplete() { achievementComplete() },
            tooltip() { return this.done() ? '<span class="p2pt">完成5世界</span>' : `完成${formatWhole(player.points)}/5世界` },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/12.jpg)",
            },
        },
        13: {
            name: "<span class='ach'>世界收割机</span>",
            done() { return player.points.gte(10) },
            onComplete() { achievementComplete() },
            tooltip() { return this.done() ? '<span class="p4pt">完成10世界</span>' : `完成${formatWhole(player.points)}/10世界` },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/13.jpg)",
            },
        },
        14: {
            name: "<span class='ach'>世界大富翁</span>",
            done() { return player.points.gte(15) },
            onComplete() { achievementComplete() },
            tooltip() { return this.done() ? '<span class="p6pt">完成15世界</span>' : `完成${formatWhole(player.points)}/15世界` },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/14.jpg)",
            },
        },
        15: {
            name: "<span class='ach'>世界征服者</span>",
            done() { return player.points.gte(20) },
            onComplete() { achievementComplete() },
            tooltip() { return this.done() ? '<span class="p8pt">完成20世界</span>' : `完成${formatWhole(player.points)}/20世界` },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/15.jpg)",
            },
        },
        16: {
            name: "<span class='ach'>所有世界的王<br>宇宙的新统领</span>",
            done() { return player.points.gte(26) },
            onComplete() { achievementComplete() },
            tooltip() { return this.done() ? '<span class="p9pt">完成26世界</span>' : `完成${formatWhole(player.points)}/26世界` },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/16.jpg)",
            },
        },
        17: {
            name: "<span class='ach'>但我继续前进</span>",
            done() { return player.keepGoing },
            onComplete() { achievementComplete() },
            tooltip() { return this.done() ? '在结束(?)后选择继续游戏' : `现在谈这个为时尚早` },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/17.jpg)",
            },
        },
        21: {
            name: "<span class='p1tx'>E4444</span>",
            done() { return player[202].points.gte("1e4444") },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "在第1夜获得震撼人心的1e4444点数" } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/21.jpg)",
            },
            unlocked() { return hasAchievement(this.layer, this.id) }
        },
        22: {
            name: "<span class='p2tx'>我...已经麻木?</span>",
            done() { return player[203].click.gte(1000) },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "在第10夜为了击破一堵墙而点击1000次" } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/22.jpg)",
            },
            unlocked() { return hasAchievement(this.layer, this.id) }
        },
        23: {
            name: "<span class='p3tx'>复读机</span>",
            done() {
                return player[204].answer[21] == 40 ||
                    player[204].answer[22] == 40 ||
                    player[204].answer[23] == 40 ||
                    player[204].answer[24] == 40
            },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "在第11夜敷衍的回答所有问题,通过按下Enter键,当然你还不能点太快否则就会误判" } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/23.jpg)",
            },
            unlocked() { return hasAchievement(this.layer, this.id) }
        },
        24: {
            name: "<span class='p4tx'>被愚弄的后果</span>",
            done() { return player[302].fool },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "在第100夜进行无收益飝卆" } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/24.jpg)",
            },
            unlocked() { return hasAchievement(this.layer, this.id) }
        },
        25: {
            name: "<span class='p5tx'>准时准点</span>",
            done() { return player['304'].lv>=20 },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "通过第101夜的第20关" } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/25.jpg)",
            },
            unlocked() { return hasAchievement(this.layer, this.id) }
        },
        26: {
            name: "<span class='p9tx'>@古4D_攵+彰A!</span>",
            done() { return player[303].sl },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "在第1001夜中尝试SL" } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/26.jpg)",
            },
            unlocked() { return hasAchievement(this.layer, this.id) }
        },
        27: {
            name: "<span class='p6tx'>真假无限</span>",
            done() { return player[402].level == 12 && player[402].value.gte(_DInf) },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "在第110夜的第12关达到1.79e308数值." } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/27.jpg)",
            },
            unlocked() { return hasAchievement(this.layer, this.id) }
        },
        31: {
            name: "<span class='p8tx'>FULL FOX FOUND</span>",
            done() { return player[404].points >= 1375000 },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "在第1000夜中的任意曲目达成严判ALL FOX" } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/31.jpg)",
            },
            unlocked() { return hasAchievement(this.layer, this.id) }
        },
        98: {
            name: "<span class='c1'>愚人节</span><span class='p9tx'>挑战者</span>",
            done() { return options.truechallenger == 1 && player._501.complete },
            onComplete() {
                achievementComplete()
                player.main.points = player.main.points.add(14)
            },
            tooltip: "挑战者模式一命通关愚人节小游戏<br>奖励是15梦力",
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/98.jpg)",
            },
            unlocked() { return true }
        },
        99: {
            name: "<span class='p5tx'>完美雇员</span>",
            done() { return player['304'].achtrig2 },
            onComplete() {
                achievementComplete()
                player.main.points = player.main.points.add(9)
            },
            tooltip: "通过第101夜的第...22关???<br>奖励是10梦力",
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/99.jpg)",
            },
            unlocked() { return true }
        },
        101: {
            name: "<span class='c1'>愚人节玩笑</span>",
            done() { return !player._501.lose && player._501.complete },
            onComplete() { achievementComplete() },
            tooltip: "理论上最难完成的成就<br>但也最容易完成<br>一命通关愚人节小游戏",
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/101.jpg)",
            },
            unlocked() { return true }
        },
        102: {
            name: "<span class='c1'><sup>幸运</sup>玩家...还是<sub>倒霉</sub>玩家?</span>",
            done() { return player[502].final },
            onComplete() { achievementComplete() },
            tooltip: "到最后一刻才点到25",
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/102.jpg)",
            },
            unlocked() { return true }
        },
        103: {
            name: "<span class='c1'>绝对的<sup>幸运</sup>玩家</span>",
            done() { return player[201].rg < 0 },
            onComplete() { achievementComplete() },
            tooltip: "在暴涨子小游戏中随机超频效果达到0％以下",
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/103.jpg)",
            },
            unlocked() { return true }
        },
        104: {
            name: "<span class='c1'>真正的游戏大师</span>",
            done() { return (player[104].maxx.gte(2048)) && (player[104].db && player[104].ob1) && (!(player[104].ud || player[104].t5 || player[104].t6)) },
            onComplete() { achievementComplete() },
            tooltip: "在2048小游戏中, 开启DB, OB1, 同时禁用UD和T+合成2048",
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/104.jpg)",
            },
            unlocked() { return true }
        },
        105: {
            name: "<span class='ach'>错漏百出</span>",
            done() { return player[301].achtrig },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "在25 layers中进行无收益的层级重置." } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/105.jpg)",
            },
            unlocked() { return true }
        },
        106: {
            name: "<span class='ach'>填满沙盒</span>",
            done() { return player[504].ach },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "你真的用拼图块填满了通关之后的沙盒板..." } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/106.jpg)",
            },
            unlocked() { return true }
        },
        107: {
            name: "<span class='ach'>你怎么做到的?</span>",
            done() {
                return player['304'].achtrig
            },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "在第101夜的第一关就输掉,我真不应该让你接手这个工作!" } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/107.jpg)",
            },
            unlocked() { return true }
        },
        201: {
            name: "<span class='ach'>更高的质量</span>",
            done() { return options.hqTree },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "打开高质量的树.质量越高,引力越大,就能吸走更多成就!" } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/201.jpg)",
            },
            unlocked() { return true }
        },
        202: {
            name: "<span class='ach'>不起作用?!</span>",
            done() { return player.devSpeed },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "尝试修改游戏速率,但失败了" } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/202.jpg)",
            },
            unlocked() { return true }
        },
        203: {
            name: "<span class='ach'>也许<br>你真的开挂了</span>",
            done() { return player._501.trig[5] },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "访问未使用的愚人节失败方法" } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/203.jpg)",
            },
            unlocked() { return true }
        },
        204: {
            name: "<span class='ach'>欢迎回来</span>",
            done() { return player.global.import },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "导入存档" } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/204.jpg)",
            },
            unlocked() { return true }
        },
        205: {
            name: "<span class='ach'>再次...欢迎回来</span>",
            done() { return player.hardreset },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "点击硬重置按钮但不硬重置" } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/205.jpg)",
            },
            unlocked() { return true }
        },
        206: {
            name: "<span class='ach'>冒名顶替者</span>",
            done() {
                return player.global.name == "乾狐离光"
                    || player.global.name == "userincre"
                    || player.global.name == "banana3864"
                    || player.global.name == "Chara404"
                    || player.global.name == "loader3229"
                    || player.global.name == "Dr丶晨曦公主"
            },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "将名字设置为开发者之一" } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/206.jpg)",
            },
            unlocked() { return true }
        },
        301: {
            name: "<span class='ach'>所有</span>",
            done() { return player.completeallachivement },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "完成这个成就,你就完成了所有成就!" } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/301.jpg)",
            },
            unlocked() { return true }
        },
        302: {
            name: "<span class='ach'>一招!全城制霸!</span>",
            done() { return player.global.click === Infinity },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "设置里的游戏标签里的小游戏也是游戏" } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/302.jpg)",
            },
            unlocked() { return true }
        },
        303: {
            name: "<span class='p9tx'>Z290IHlh</span>",
            done() { return player[303].find },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "吓吓你" } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/303.jpg)",
            },
            unlocked() { return true }
        },
        304: {
            name: "<span class='p9tx'>亲爱的<br>我不会伤害你</span>",
            done() { return player[303].fake },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "亦真亦假？！！" } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/304.jpg)",
            },
            unlocked() { return true }
        },
        305: {
            name: "<span class='ach'>精粹!!!</span>",
            done() { return player.gainpower },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "通过梦力发生器获得一个梦力" } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/305.jpg)",
            },
            unlocked() { return true }
        },
        306: {
            name: "<span class='ach'>深度体验</span>",
            done() { return player.timePlayed > 1800 },
            onComplete() { achievementComplete() },
            tooltip() { if (hasAchievement(this.layer, this.id)) { return "游玩时长达到30分钟" } else { return "完成成就以查看" } },
            style: {
                backgroundImage: "linear-gradient(to bottom, #00000060, #00000000),url(resources/achpic/306.jpg)",
            },
            unlocked() { return true }
        },
        401: {
            name: "<span class='c1'>所有,除了这一个</span>",
            done() {
                return player[this.layer].points.gte(999)
            },
            onComplete() { achievementComplete() },
            tooltip: "完成全部其他成就(当前版本暂不可完成)",
            style: {
                backgroundImage: "linear-gradient(in hsl longer hue to bottom, hsl(0,100%,30%), hsl(330,100%,60%))",
            }
        },
    },
    layerShown() { return !options.achivement },
    clickables: {
        11: {
            title: "完成所有成就",
            display: "按下我完成所有成就",
            canClick() { return true },
            onClick() {
                player.completeallachivement = true
                /*
                for (key in layers[this.layer].achievements) {
                    if (key == "rows" || key == "cols") continue
                    else if (hasAchievement(this.layer, key)) continue
                    player[this.layer].achievements.push(key)
                    achievementComplete()
                }
                */
            }
        }
    },
    milestones: {
        101: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        102: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        103: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        104: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        105: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        201: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        202: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        203: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        204: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        205: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        301: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        302: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        303: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        304: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        305: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        401: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        402: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        403: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        404: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        405: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        501: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        502: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        503: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        504: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        505: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
        520: {
            requirementDescription() { return `世界${this.id}完成!` },
            done() { return player.world[this.id] }
        },
    }
});

/*
addLayer("", {
    symbol: "",
    resource: "",
    color: "#aaa",
    update(diff) {
        if (!getGridData('main', this.layer)||player.pause[this.layer]) return
    },
    startData() {
        return {
            unlocked: true,
            points: _D0
        }
    },
    type: "none",
    tabFormat: [
    ],
    upgrades: {
    },
    milestones: {
    },
    layerShown() { return getGridData('main', this.layer) && (!options.hideWorld || !player.world[this.layer]) },

});
*/