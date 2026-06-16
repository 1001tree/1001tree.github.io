
let layer505 = 16
let upgrades505 = {}
let tabformat505 = {}
let buyable505 = {}
let defined505 = false

if (!(defined505)) define505()

function define505() {
    defined505 = true

    tabformat505 = {}
    for (let i = 0; i < layer505; i++) {
        let tab = []
        for (let j = 0; j < layer505; j++) {
            tab.push(["row", []])
            for (let k = 0; k < layer505; k++) {
                let id = i * 10000 + j * 100 + k
                upgrades505[id] = {
                    fullDisplay() {
                        if (player[505].clca == this.id && buyableEffect(this.layer, 42)) return `<h2>Crack!</h2>`
                        else return `<h1>${randomString(4)}</h1>`

                    },
                    cost: _D(-1),
                    style: {
                        minHeight: "38px",
                        width: "80px"
                    },
                    canAfford() {
                        if (getBuyableAmount(this.layer, 21).gt(0.5)) {
                            if (buyableEffect(this.layer, 21).gte(seededRandom(this.id + player[this.layer].seed).value)) return false
                        }
                        return true
                    },
                    unlocked() {
                        if (getBuyableAmount(this.layer, 22).gt(0.5)) {
                            if (buyableEffect(this.layer, 22).gte(seededRandom(this.id + player[this.layer].seed + 1).value)) return false
                        }
                        return true
                    },
                    onPurchase() {
                        if (_DR().gt(buyableEffect(this.layer, 11))) player[this.layer].power = player[this.layer].power.add(1)

                        if (getBuyableAmount(this.layer, 21).gt(0.5)) {
                            player[this.layer].seed = Date.now()
                        }

                        if (buyableEffect(this.layer, 31)) player.subtabs[this.layer].fox = randomBetween(0, layer505)

                        if (player[505].clca == this.id && buyableEffect(this.layer, 42)) {
                            player[this.layer].clcpo = player[this.layer].clcpo.add(1)
                            makeParticles({
                                time: 2,
                                fadeOutTime: 1,
                                fadeInTime: 0.2,
                                gravity: 1,
                                image: "",
                                style: { width: "auto" },
                                text: `<h1>夸嚓爆炸！</h1>`,
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
                            }, randomBetween(5, 10))
                        }

                        player[this.layer].clca = 10000 * randomBetween(0, layer505 - 1) + 100 * randomBetween(0, layer505 - 1) + randomBetween(0, layer505 - 1)
                    }
                }
                tab[j][1][k] = ["upgrade", id]
            }
        }

        tabformat505[i + 1] = {
            content: [
                ["bar", "foxbar"],
                ["bar", "prebar"],
                ["bar", "clcbar"],
                "blank",
                ["display-text", `此游戏推荐打开取消渐变动画游玩`],
                ...tab],
            style: { width: "1340px", height: "760px" },
            prestigeNotify() {
                return buyableEffect(505, 42) && (Math.floor(player[505].clca / 10000) + 1 == i + 1)
            }
        }
    }

    buyable505 = {
        1: {
            title() { return `困难的转生 等级${formatWhole(getBuyableAmount(this.layer, this.id))}` },
            display() {
                return `转生需要的升级现在是 ${formatWhole(this.effect())}
                难度价值 ${formatWhole(this.diff())}`
            },
            unlocked() { return true },
            effect(x) { return x.pow(3) },
            purchaseLimit() {
                return Decimal.min(player[this.layer].diffh, 15)
            },
            diff() {
                let x = getBuyableAmount(this.layer, this.id)
                return Decimal.ceil(x.div(3)).add(1)
            },
            branches: [11, 21, 31],
        },
        11: {
            title() { return `注定失败 等级${formatWhole(getBuyableAmount(this.layer, this.id))}` },
            display() {
                return `购买升级 ${formatPersent(this.effect())} 概率不计购买数
                难度价值 ${formatWhole(this.diff())}`
            },
            unlocked() { return player[this.layer].diffh.gt(1.5) },
            effect(x) { return x.div(x.add(9)) },
            purchaseLimit() {
                return Decimal.min(Decimal.floor(player[this.layer].diffh.div(2)), 10)
            },
            diff() {
                let x = getBuyableAmount(this.layer, this.id)
                if (x.lt(2.5)) return x
                return Decimal.floor(x.add(2).div(2))
            },
            branches: [12, 42],
        },
        12: {
            title() { return `手指风暴 等级${formatWhole(getBuyableAmount(this.layer, this.id))}` },
            display() {
                return `升级数每秒减少 ${format(this.effect())}
                难度价值 ${formatWhole(this.diff())}`
            },
            unlocked() { return player[this.layer].diffh.gt(7.5) },
            effect(x) {
                if (x.gt(5.5)) return _D3
                else if (x.gt(4.5)) return _D2
                else if (x.gt(3.5)) return _D(5 / 4)
                else if (x.gt(2.5)) return _D(2 / 3)
                else if (x.gt(1.5)) return _D(1 / 2)
                else if (x.gt(0.5)) return _D(1 / 5)
                else return _D0
            },
            purchaseLimit() {
                return Decimal.min(Decimal.floor(player[this.layer].diffh.sub(5).div(3)), 6)
            },
            diff() {
                let x = getBuyableAmount(this.layer, this.id)
                if (x.gt(5.5)) return x.add(2)
                return x
            },
            branches: [],
        },
        21: {
            title() { return `拒之门外 等级${formatWhole(getBuyableAmount(this.layer, this.id))}` },
            display() {
                return `升级 ${formatPersent(this.effect())} 概率被禁购
                难度价值 ${formatWhole(this.diff())}`
            },
            unlocked() { return player[this.layer].diffh.gte(2.5) },
            effect(x) { return x.div(x.add(19)) },
            purchaseLimit() {
                return Decimal.min(Decimal.floor(player[this.layer].diffh.sub(1).div(2)), 10)
            },
            diff() {
                let x = getBuyableAmount(this.layer, this.id)
                if (x.lt(2.5)) return x
                return Decimal.floor(x.add(2).div(2))
            },
            branches: [22, 42],
        },
        22: {
            title() { return `空虚之眼 等级${formatWhole(getBuyableAmount(this.layer, this.id))}` },
            display() {
                return `升级 ${formatPersent(this.effect())} 概率不显示
                难度价值 ${formatWhole(this.diff())}`
            },
            unlocked() { return player[this.layer].diffh.gt(9.5) },
            effect(x) { return x.div(x.add(19)) },
            purchaseLimit() {
                return Decimal.min(Decimal.floor(player[this.layer].diffh.sub(8).div(2)), 10)
            },
            diff() {
                let x = getBuyableAmount(this.layer, this.id)
                return x
            },
            branches: [],
        },
        31: {
            title() { return `悸动之心 等级${formatWhole(getBuyableAmount(this.layer, this.id))}` },
            display() {
                return `每次购买升级都会切换页面
                难度价值 ${formatWhole(this.diff())}`
            },
            effect(x) { return x.gt(0.5) },
            unlocked() { return player[this.layer].diffh.gt(3.5) },
            purchaseLimit() {
                if (player[this.layer].diffh.gt(4.5)) return _D1
                return _D0
            },
            diff() {
                return getBuyableAmount(this.layer, this.id).mul(2)
            },
            branches: [32],
        },
        32: {
            title() { return `明晰之命 等级${formatWhole(getBuyableAmount(this.layer, this.id))}` },
            display() {
                return `允许你在不清空转生升级数的情况下重置升级板
                难度价值 ${formatWhole(this.diff())}`
            },
            effect(x) { return x.gt(0.5) },
            unlocked() { return player[this.layer].diffh.gt(14.5) },
            purchaseLimit() {
                if (player[this.layer].diffh.gt(15.5)) return _D1
                return _D0
            },
            diff() {
                return getBuyableAmount(this.layer, this.id).mul(-1)
            },
            branches: [33],
        },
        33: {
            title() { return `世界低语 等级${formatWhole(getBuyableAmount(this.layer, this.id))}` },
            display() {
                return `每次升级 1/256 概率完成世界
                难度价值 ${formatWhole(this.diff())}`
            },
            effect() { return _D(1 / 256) },
            unlocked() { return player[this.layer].diffh.gt(18.5) },
            purchaseLimit() {
                if (player[this.layer].diffh.gt(19.5)) return _D1
                return _D0
            },
            diff() {
                return _D0
            },
            branches: [],
        },
        42: {
            title() { return `夸嚓! 等级${formatWhole(getBuyableAmount(this.layer, this.id))}` },
            display() {
                return `解锁夸嚓力量
                难度价值 ${formatWhole(this.diff())}`
            },
            effect(x) { return x.gt(0.5) },
            unlocked() { return player[this.layer].diffh.gt(5.5) },
            purchaseLimit() {
                if (player[this.layer].diffh.gt(6.5)) return _D1
                return _D0
            },
            diff() {
                return _D0
            },
            branches: [],
        },
    }

    Object.keys(buyable505).forEach(key => {
        let id = parseInt(key)
        let item = buyable505[key]

        item.style = { width: "156px", height: "72px" }
        item.canAfford = function () {
            if (player[this.layer].power.gt(0.5)) return false
            return true
        }
        item.canSellOne = function () {
            if (player[this.layer].power.gt(0.5)) return false
            return getBuyableAmount(this.layer, this.id).gt(0.5)
        }
        item.buy = function () {
            addBuyables(this.layer, this.id, _D1)
            layers[this.layer].getDiff()
        }
        item.sellOne = function () {
            addBuyables(this.layer, this.id, _D(-1))
            layers[this.layer].getDiff()
        }

    })
}

addLayer("505", {
    symbol: "🆘",
    resource: "升级",
    color: "#d44",
    update(diff) {
        if (!getGridData('main', this.layer)) return
        player[this.layer].power = Decimal.max(0, player[this.layer].power.sub(buyableEffect(this.layer, 12).mul(diff)))
    },
    startData() {
        return {
            unlocked: true,
            points: _D0,
            power: _D0,
            prest: _D0,
            clcpo: _D0,
            diffh: _D0,
            diffn: _D1,
            complete: false,
            clca: 0,
            seed: 0,
        }
    },
    type: "none",
    tabFormat: {
        "真·点击墙": { content: [["microtabs", "fox"]], style: { width: "1340px" } },
        "新世代晋级": {
            content: [["microtabs", "pre"]], style: { width: "1340px" },
            prestigeNotify() {
                return player[505].power.gte(buyableEffect(505, 1).sub(0.5)) && player[505].diffn.gt(player[505].diffh) 
            }
        },
        "夸嚓力量": { content: [["microtabs", "clc"]], style: { width: "1340px" }, unlocked() { return buyableEffect(505, 42) } },
    },
    microtabs: {
        fox: tabformat505,
        pre: {
            "超越生死!相似失去而重来": {
                content: [
                    ["display-text", function () {
                        return `死去,再使用更神奇的力量以强度高更加的力量回归!通过增加困难以得到强非常的力量,让自己更加困难,最后达到超越自己的困难!`
                    }],
                    ["bar", "foxbar"],
                    ["bar", "prebar"],
                    ["display-text", function () {
                        return `你达成的最高难度在 <h1 class="nmpt">${formatWhole(player[this.layer].diffh)}</h1> 等级<br>
                        你当前游玩的难度在 <h2 class="nmpt">${formatWhole(player[this.layer].diffn)}</h2> 等级`
                    }],
                    "blank",
                    "clickables",
                    "blank",
                    ["display-text", "你只能在未购买升级时修改难度"],
                    "blank",
                    ["buyable-tree", [
                        [1], [11, 21, 31], [12, 42, 22, 32], [33]
                    ]],
                    "blank",
                    ["milestones", [0]],
                    "blank",
                ],
                style: { width: "1340px" }
            }
        },
        clc: {
            "夸嚓夸嚓!力量涌现在你!": {
                content: [
                    ["display-text", function () {
                        return `点击升级每次,夸嚓升级(更小的夸嚓!字)出现其他位置(也许你拥有,这发生在你拥有很多地方更频繁),获得夸嚓能量点击夸嚓升级时间!`
                    }],
                    ["bar", "clcbar"],
                    ["display-text", function () {
                        return `你有 <h1 class="nmpt">${format(player[this.layer].clcpo)}</h1> 夸嚓狠狠攥在你的手内!夸嚓!`
                    }],
                    "blank",
                    ["milestones", [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]],
                    "blank",
                ],
                style: { width: "1340px" }
            }
        }
    },
    upgrades: upgrades505,
    layerShown() { return getGridData('main', this.layer) && (!options.hideWorld || !player.world[this.layer]) && (!options[`line${Math.floor(this.layer / 100)}`]) },
    bars: {
        foxbar: {
            direction: RIGHT,
            width: 1280,
            height: 20,
            progress() {
                return player[this.layer].points.div(4096)
            },
            display() {
                return `<span class="nmpt" style="text-shadow:1px 1px 0 #000;">${formatPersent(player[this.layer].points.div(4096))} - ${formatWhole(player[this.layer].points)} / ${formatWhole(4096)} 升级</span>`
            },
            fillStyle: {
                backgroundColor: "#1fc922"
            },
            instant: true
        },
        prebar: {
            direction: RIGHT,
            width: 1280,
            height: 20,
            progress() {
                return buyableEffect(this.layer, 1).eq(0) ? 1 : player[this.layer].power.div(buyableEffect(this.layer, 1))
            },
            display() {
                return `<span class="nmpt" style="text-shadow:1px 1px 0 #000;">${formatPersent(buyableEffect(this.layer, 1).eq(0) ? 1 : player[this.layer].power.div(buyableEffect(this.layer, 1)))} - ${formatWhole(player[this.layer].power)} / ${formatWhole(buyableEffect(this.layer, 1))} 升级 直到转生</span>`
            },
            fillStyle: {
                backgroundColor: "#877edf"
            },
            instant: true
        },
        clcbar: {
            direction: RIGHT,
            width: 1280,
            height: 20,
            progress() {
                return player[this.layer].clcpo.div(500)
            },
            display() {
                return `<span class="nmpt" style="text-shadow:1px 1px 0 #000;">${formatPersent(player[this.layer].clcpo.div(500))} - ${formatWhole(player[this.layer].clcpo)} / ${formatWhole(500)} 夸嚓</span>`
            },
            fillStyle: {
                backgroundColor: "#d323b0"
            },
            instant: true,
            unlocked() {return buyableEffect(this.layer, 42)}
        },
    },
    milestones: {
        0: {
            requirementDescription: "雨之将倾,沉眠于梦",
            effectDescription: "世界完成",
            done() {
                return player[this.layer].complete
            },
            onComplete() {
                completeWorld(this.layer)
            },
            style: { width: "670px" }
        },
        10: {
            requirementDescription: "叮!",
            effectDescription: "需求你获取一个夸嚓！",
            done() {
                return player[this.layer].clcpo.gt(0.5)
            }
        },
        11: {
            requirementDescription: "当!",
            effectDescription: "需求你获取比一个多一个夸嚓！",
            done() {
                return player[this.layer].clcpo.gte(2)
            }
        },
        12: {
            requirementDescription: "乒乓!",
            effectDescription: "需求你获取再多就一个夸嚓！",
            done() {
                return player[this.layer].clcpo.gte(3)
            }
        },
        13: {
            requirementDescription: "噼啪的!",
            effectDescription: "噼啪需要更多，你五个需要现在夸嚓力气大！",
            done() {
                return player[this.layer].clcpo.gte(5)
            }
        },
        14: {
            requirementDescription: "叮咚,羌!",
            effectDescription: "它知道你做的，夸嚓，八个给予成就！",
            done() {
                return player[this.layer].clcpo.gte(8)
            }
        },
        15: {
            requirementDescription: "哒呤叮咚!",
            effectDescription: "八个还不够，找它再一次，一倍百分比的多更加！",
            done() {
                return player[this.layer].clcpo.gte(16)
            }
        },
        16: {
            requirementDescription: "铿锵!",
            effectDescription: "我们知道三十二，也就是再一倍的个你收集，这是艰苦的吗？",
            done() {
                return player[this.layer].clcpo.gte(32)
            }
        },
        17: {
            requirementDescription: "轰啪!",
            effectDescription: "眼睛你的太温良寒冷了，六十七小子和夸嚓产生矛盾了，收集打败他！",
            done() {
                return player[this.layer].clcpo.gte(67)
            }
        },
        18: {
            requirementDescription: "哦不,痛苦的这无疑!",
            effectDescription: "一直如此，我寻找上好的如此多夸嚓，而这并没有什么用，现在你需要一百另外的三十七个解除痛苦！",
            done() {
                return player[this.layer].clcpo.gte(137)
            }
        },
        19: {
            requirementDescription: "次末端,十里挑一网格的夸嚓!",
            effectDescription: "你的夸嚓挤满一整面墙，真棒！梦力+1",
            onComplete() {
                player.main.points = player.main.points.add(1)
            },
            done() {
                return player[this.layer].clcpo.gte(256)
            }
        },
        20: {
            requirementDescription: "!?强强?!",
            effectDescription: "五百个夸嚓！梦力+1",
            onComplete() {
                player.main.points = player.main.points.add(1)
            },
            done() {
                return player[this.layer].clcpo.gte(500)
            }
        },
    },
    clickables: {
        11: {
            title() {
                return `从死亡旋转到活着<br>
                将你的最高通关难度变为 ${formatWhole(Decimal.max(player[this.layer].diffn, player[this.layer].diffh))}<br>
                需求 ${formatWhole(buyableEffect(this.layer, 1))} 升级`
            },
            unlocked() { return true },
            canClick() {
                return player[this.layer].power.gte(buyableEffect(this.layer, 1).sub(0.5))
            },
            onClick() {
                layers[this.layer].prestige(true)
            },
            style: { width: "220px", height: "128px" },
        },
        12: {
            title: "痛苦,明晰,回到一切",
            display() {
                return `无进度地重置之前你所做的一切,这相当痛苦`
            },
            unlocked() { return true },
            canClick() { return true },
            onClick() {
                layers[this.layer].prestige(false)
            },
            style: { width: "140px", minHeight: "90px" },
        },
        13: {
            title: "天火明命!",
            display() {
                return `祛尽邪魔!`
            },
            unlocked() { return buyableEffect(this.layer, 32) },
            canClick() { return true },
            onClick() {
                player[this.layer].points = _D0
                player[this.layer].upgrades = []
            },
            style: { width: "140px", minHeight: "90px" },
        }
    },
    prestige(gain) {
        player[this.layer].upgrades = []
        player[this.layer].points = _D0
        player[this.layer].power = _D0

        if (gain) {
            player[this.layer].diffh = Decimal.max(player[this.layer].diffn, player[this.layer].diffh)
        }
    },
    buyables: buyable505,
    getDiff() {
        let b = layers[this.layer].buyables
        let d = _D0

        Object.keys(b).forEach(key => {
            let id = parseInt(key)
            if (!isNaN(id) && b[key].diff) {
                d = d.add(b[key].diff())
            }
        })

        let dmax = _DInf
        if (getBuyableAmount(505, 1).lt(0.5)) dmax = _D1
        else if (getBuyableAmount(505, 1).lt(1.5)) dmax = _D3
        else if (getBuyableAmount(505, 1).lt(2.5)) dmax = _D6
        else if (getBuyableAmount(505, 1).lt(3.5)) dmax = _D10
        else if (getBuyableAmount(505, 1).lt(4.5)) dmax = _D15
        else if (getBuyableAmount(505, 1).lt(5.5)) dmax = _D21
        else if (getBuyableAmount(505, 1).lt(6.5)) dmax = _D28
        else if (getBuyableAmount(505, 1).lt(7.5)) dmax = _D35

        player[this.layer].diffn = Decimal.min(dmax, d)
    },
});

