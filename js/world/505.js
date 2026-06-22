
let layer505 = 16
let upgrades505 = {}
let tabformat505 = {}
let buyable505 = {}
let defined505 = false
let buytree = []

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
                        if (player[505].clca == this.id && buyableEffect(this.layer, 2)) return `<h2>imcrack<h2>`
                        else return `<h2>upgrade<h2>`

                    },
                    cost: _D(-1),
                    style: {
                        minHeight: "38px",
                        width: "80px"
                    },
                    canAfford() {
                        if (getBuyableAmount(this.layer, 21).neq(0)) {
                            if (buyableEffect(this.layer, 21).gte(seededRandom(this.id + player[this.layer].seed).value)) return false
                        }
                        return true
                    },
                    unlocked() {
                        if (getBuyableAmount(this.layer, 22).neq(0)) {
                            if (buyableEffect(this.layer, 22).gte(seededRandom(this.id + player[this.layer].seed + 1).value)) return false
                        }
                        return true
                    },
                    onPurchase() {
                        if (_DR().gt(buyableEffect(this.layer, 11))) player[this.layer].power = player[this.layer].power.add(_D1.sub(buyableEffect(this.layer, 42)))

                        if (getBuyableAmount(this.layer, 21).neq(0)) {
                            player[this.layer].seed = Date.now()
                        }

                        if (buyableEffect(this.layer, 31)) player.subtabs[this.layer].fox = randomBetween(0, layer505)

                        if (player[505].clca == this.id && buyableEffect(this.layer, 2)) {
                            player[this.layer].clcpo = player[this.layer].clcpo.add(1)
                            player[this.layer].power = player[this.layer].power.add(buyableEffect(this.layer, 103).mul(_D1.sub(buyableEffect(this.layer, 42))))
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
                            }, 1)
                        }

                        player[this.layer].clca = rdupgid505()

                        if (_DR().lt(buyableEffect(this.layer, 99))) {
                            player[this.layer].complete = true
                        }
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
                ["display-text", `此游戏推荐打开取消动画游玩`],
                ...tab],
            style: { width: "1340px", height: "760px" },
            prestigeNotify() {
                return buyableEffect(505, 2) && (Math.floor(player[505].clca / 10000) + 1 == i + 1)
            }
        }
    }

    buytree505 = [
        [1, 2, 3], [11, 21, 31], [12, 42, 22, 32], [99]
    ]

    buyable505 = {
        1: {
            title() { return `困难的转生 等级${formatWhole(getBuyableAmount(this.layer, this.id))}` },
            display() {
                return `转生需要的升级现在是 ${formatWhole(this.effect())}
                难度价值 ${formatWhole(this.diff())}`
            },
            unlocked() { return true },
            effect(x) { return Decimal.floor(x.pow(3)) },
            purchaseLimit() {
                return Decimal.min(player[this.layer].diffh, 15)
            },
            diff() {
                let x = getBuyableAmount(this.layer, this.id)
                return Decimal.ceil(x.div(3)).add(1)
            },
            branches: [11, 21, 31, 2],
        },
        2: {
            title() { return `夸嚓! 等级${formatWhole(getBuyableAmount(this.layer, this.id))}` },
            display() {
                return `解锁夸嚓力量`
            },
            effect(x) { return x.neq(0) },
            unlocked() { return player[this.layer].diffh.gte(6) },
            purchaseLimit() {
                if (player[this.layer].diffh.gte(7)) return _D1
                return _D0
            },
            diff() {
                return _D0
            },
            branches: [3],
        },
        3: {
            title() { return `不要夸嚓! 等级${formatWhole(getBuyableAmount(this.layer, this.id))}` },
            display() {
                return `禁用夸嚓升级,根据夸嚓升级等级获得难度价值
                难度价值 ${formatWhole(this.diff())}`
            },
            effect(x) { return x.neq(0) },
            unlocked() { return player[this.layer].diffh.gte(6) },
            purchaseLimit() {
                if (player[this.layer].diffh.gte(7)) return _D1
                return _D0
            },
            diff() {
                return Decimal.floor(getBuyableAmount(this.layer, 101).add(getBuyableAmount(this.layer, 102)).add(getBuyableAmount(this.layer, 103)).div(3))
            },
            branches: [],
        },
        11: {
            title() { return `注定失败 等级${formatWhole(getBuyableAmount(this.layer, this.id))}` },
            display() {
                return `购买升级 ${formatPersent(this.effect())} 概率不计购买数
                难度价值 ${formatWhole(this.diff())}`
            },
            unlocked() { return player[this.layer].diffh.gte(2) },
            effect(x) { return x.div(x.add(9)) },
            purchaseLimit() {
                return Decimal.min(Decimal.floor(player[this.layer].diffh.div(2)), 10)
            },
            diff() {
                let x = getBuyableAmount(this.layer, this.id)
                if (x.lte(2)) return x
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
            unlocked() { return player[this.layer].diffh.gte(8) },
            effect(x) {
                if (x.gte(6)) return _D3
                else if (x.gte(5)) return _D2
                else if (x.gte(4)) return _D(5 / 4)
                else if (x.gte(3)) return _D(2 / 3)
                else if (x.gte(2)) return _D(1 / 2)
                else if (x.gte(1)) return _D(1 / 5)
                else return _D0
            },
            purchaseLimit() {
                return Decimal.min(Decimal.floor(player[this.layer].diffh.sub(5).div(3)), 6)
            },
            diff() {
                let x = getBuyableAmount(this.layer, this.id)
                if (x.gte(6)) return x.add(2)
                return x
            },
            branches: [],
        },
        42: {
            title() { return `贬值 等级${formatWhole(getBuyableAmount(this.layer, this.id))}` },
            display() {
                return `购买数降低 ${formatPersent(this.effect())}
                难度价值 ${formatWhole(this.diff())}`
            },
            unlocked() { return player[this.layer].diffh.gte(11) },
            effect(x) { return x.div(x.add(9)) },
            purchaseLimit() {
                return Decimal.min(Decimal.floor(player[this.layer].diffh.sub(9).div(2)), 10)
            },
            diff() {
                let x = getBuyableAmount(this.layer, this.id)
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
            unlocked() { return player[this.layer].diffh.gte(3) },
            effect(x) { return x.div(x.add(19)) },
            purchaseLimit() {
                return Decimal.min(Decimal.floor(player[this.layer].diffh.sub(1).div(2)), 10)
            },
            diff() {
                let x = getBuyableAmount(this.layer, this.id)
                if (x.lt(2.5)) return x
                return Decimal.floor(x.add(2).div(2))
            },
            branches: [22],
        },
        22: {
            title() { return `空虚之眼 等级${formatWhole(getBuyableAmount(this.layer, this.id))}` },
            display() {
                return `升级 ${formatPersent(this.effect())} 概率不显示
                难度价值 ${formatWhole(this.diff())}`
            },
            unlocked() { return player[this.layer].diffh.gte(10) },
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
            effect(x) { return x.neq(0) },
            unlocked() { return player[this.layer].diffh.gte(4) },
            purchaseLimit() {
                if (player[this.layer].diffh.gte(5)) return _D1
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
            effect(x) { return x.neq(0) },
            unlocked() { return player[this.layer].diffh.gte(15) },
            purchaseLimit() {
                if (player[this.layer].diffh.gte(16)) return _D1
                return _D0
            },
            diff() {
                return getBuyableAmount(this.layer, this.id).mul(-1)
            },
            branches: [],
        },
        99: {
            title() { return `世界低语 等级${formatWhole(getBuyableAmount(this.layer, this.id))}` },
            display() {
                return `每次升级 1/4096 概率完成世界`
            },
            effect(x) { return x.mul(_D(1 / 4096)) },
            unlocked() { return player[this.layer].diffh.gte(37) },
            purchaseLimit() {
                if (player[this.layer].diffh.gte(20)) return _D1
                return _D0
            },
            diff() {
                return _D0
            },
            branches: [],
        },
    }

    Object.keys(buyable505).forEach(key => {
        let item = buyable505[key]

        item.style = { width: "156px", height: "72px" }
        item.canAfford = function () {
            if (player[this.layer].power.gte(1)) return false
            return true
        }
        item.canSellOne = function () {
            if (player[this.layer].power.gte(1)) return false
            return getBuyableAmount(this.layer, this.id).gte(1)
        }
        item.canSellAll = function () {
            if (player[this.layer].power.gte(1)) return false
            return getBuyableAmount(this.layer, this.id).gte(1)
        }
        item.buy = function () {
            addBuyables(this.layer, this.id, _D1)
            layers[this.layer].getDiff()
        }
        item.sellOne = function () {
            addBuyables(this.layer, this.id, _D(-1))
            if (getBuyableAmount(this.layer, this.id).lt(0)) setBuyableAmount(this.layer, this.id, _D0)
            layers[this.layer].getDiff()
        }
        item.sellAll = function () {
            setBuyableAmount(this.layer, this.id, _D0)
            layers[this.layer].getDiff()
        }
    })

    buyable505 = {
        ...buyable505, ...{
            101: {
                title() { return `夸嚓点击器 等级${formatWhole(getBuyableAmount(this.layer, this.id))}` },
                display() {
                    return `每刻有 ${formatPersent(this.effect())} 概率夸嚓完全随机的按钮,会被禁购和不显示阻止!<br><br>价格为 ${formatWhole(this.cost())} 夸嚓`
                },
                purchaseLimit: _D(10),
                effect(x) { return buyableEffect(this.layer, 2) && buyableEffect(this.layer, 3) ? _D0 : x.div(20) },
                cost(x) { return x.add(1).mul(2) },
                unlocked() {
                    return player[this.layer].clcpo.gte(2) || getBuyableAmount(this.layer, this.id).neq(0)
                },
                canAfford() {
                    if (player[this.layer].power.gte(1)) return false
                    return player[this.layer].clcpo.gte(this.cost())
                },
                buy() {
                    player[this.layer].clcpo = player[this.layer].clcpo.sub(this.cost())
                    addBuyables(this.layer, this.id, _D1)
                }
            },
            102: {
                title() { return `精确的夸嚓 等级${formatWhole(getBuyableAmount(this.layer, this.id))}` },
                display() {
                    return `夸嚓点击器有 ${formatPersent(this.effect())} 概率点击夸嚓<br><br>价格为 ${formatWhole(this.cost())} 夸嚓`
                },
                purchaseLimit: _D(10),
                effect(x) { return buyableEffect(this.layer, 2) && buyableEffect(this.layer, 3) ? _D0 : x.div(500) },
                cost(x) { return x.add(1).mul(3) },
                unlocked() {
                    return player[this.layer].clcpo.gte(3) || getBuyableAmount(this.layer, this.id).neq(0)
                },
                canAfford() {
                    if (player[this.layer].power.gte(1)) return false
                    return player[this.layer].clcpo.gte(this.cost())
                },
                buy() {
                    player[this.layer].clcpo = player[this.layer].clcpo.sub(this.cost())
                    addBuyables(this.layer, this.id, _D1)
                }
            },
            103: {
                title() { return `夸嚓夸嚓 等级${formatWhole(getBuyableAmount(this.layer, this.id))}` },
                display() {
                    return `夸嚓的价值额外提升 ${format(this.effect())} 升级点<br><br>价格为 ${formatWhole(this.cost())} 夸嚓`
                },
                purchaseLimit: _D(10),
                effect(x) { return buyableEffect(this.layer, 2) && buyableEffect(this.layer, 3) ? _D0 : x.pow(2).div(10) },
                cost(x) { return x.add(1).mul(5) },
                unlocked() {
                    return player[this.layer].clcpo.gte(5) || getBuyableAmount(this.layer, this.id).neq(0)
                },
                canAfford() {
                    if (player[this.layer].power.gte(1)) return false
                    return player[this.layer].clcpo.gte(this.cost())
                },
                buy() {
                    player[this.layer].clcpo = player[this.layer].clcpo.sub(this.cost())
                    addBuyables(this.layer, this.id, _D1)
                }
            }
        }
    }
}

function rdupgid505() {
    return 10000 * randomBetween(0, layer505 - 1) + 100 * randomBetween(0, layer505 - 1) + randomBetween(0, layer505 - 1)
}

addLayer("505", {
    symbol: "🆘",
    resource: "升级",
    color: "#d44",
    update(diff) {
        if (!getGridData('main', this.layer)) return
        player[this.layer].power = Decimal.max(0, player[this.layer].power.sub(buyableEffect(this.layer, 12).mul(diff)))

        player[this.layer].time += diff
        if (player[this.layer].power.neq(0)) {
            while (player[this.layer].time > 0.05) {
                if (_DR().lt(buyableEffect(this.layer, 101))) {
                    let id
                    if (_DR().gt(buyableEffect(this.layer, 102))) id = rdupgid505()
                    else id = player[this.layer].clca
                    buyUpgrade(this.layer, id)
                }
                player[this.layer].time = Math.min(1, player[this.layer].time - 0.05)
            }
        } else {
            player[this.layer].time = 0
        }
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
            time: 0,
        }
    },
    type: "none",
    tabFormat: {
        "真·点击墙": { content: [["microtabs", "fox"]], style: { width: "1340px" } },
        "新世代晋级": {
            content: [["microtabs", "pre"]], style: { width: "1340px" },
            prestigeNotify() {
                return player[505].power.gte(buyableEffect(505, 1)) && player[505].diffn.gt(player[505].diffh)
            }
        },
        "夸嚓力量": { content: [["microtabs", "clc"]], style: { width: "1340px" }, unlocked() { return buyableEffect(505, 2) } },
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
                    ["display-text", "这里有一些加墙,完成更高难度的游戏来解锁更多墙,你只能在未购买升级时购买加墙"],
                    "blank",
                    ["buyable-tree", buytree505],
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
                        return `点击升级每次,夸嚓升级(有夸嚓!字)出现其他位置(也许你拥有,这发生在你拥有很多地方更频繁),获得夸嚓能量点击夸嚓升级时间!`
                    }],
                    ["bar", "clcbar"],
                    ["display-text", function () {
                        return `你有 <h1 class="nmpt">${format(player[this.layer].clcpo)}</h1> 夸嚓狠狠攥在你的手内!夸嚓!`
                    }],
                    "blank",
                    ["display-text", "你只能在未购买升级时购买夸嚓升级"],
                    ["buyables", [10]],
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
                return `<span class="nmpt" style="text-shadow:1px 1px 0 #000;">${formatPersent(buyableEffect(this.layer, 1).eq(0) ? 1 : player[this.layer].power.div(buyableEffect(this.layer, 1)))} - ${format(player[this.layer].power)} / ${formatWhole(buyableEffect(this.layer, 1))} 升级 直到转生</span>`
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
            unlocked() { return buyableEffect(this.layer, 2) }
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
                return player[this.layer].clcpo.gte(1)
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
        else if (getBuyableAmount(505, 1).lt(4.5)) dmax = _D(15)
        else if (getBuyableAmount(505, 1).lt(5.5)) dmax = _D(21)
        else if (getBuyableAmount(505, 1).lt(6.5)) dmax = _D(28)
        else if (getBuyableAmount(505, 1).lt(7.5)) dmax = _D(35)

        player[this.layer].diffn = Decimal.min(dmax, d)
    },
});

