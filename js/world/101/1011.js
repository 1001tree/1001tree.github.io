addLayer("1011", {
    symbol: "",
    resource: "点数",
    color: "#aaa",
    update(diff) {
        if (!getGridData('main', 101) || player.pause[101]) return

        let p = player[this.layer].points
        let g = layers[this.layer].getSortCap()[1]

        player[this.layer].points = p.add(g.mul(diff))

    },
    startData() {
        return {
            unlocked: true,
            points: _D0
        }
    },
    type: "none",
    getPoint() {
        return ArrayMax(
            _D0,
            getEffect(this.layer, 11, _D0),
            getEffect(this.layer, 12, _D0),
            getEffect(this.layer, 13, _D0),
            getEffect(this.layer, 14, _D0),
            getEffect(this.layer, 15, _D0),
        )
            .mul(getEffect(this.layer, 21, 1))
            .mul(getEffect(this.layer, 22, 1))
            .mul(getEffect(this.layer, 23, 1))
            .mul(getEffect(this.layer, 24, 1))
            .mul(getEffect(this.layer, 25, 1))
            .pow(hasUpgrade(this.layer, 53) ? 1.1 : 1)
            .pow(hasUpgrade(this.layer, 54) ? 1.1 : 1)
            .pow(getEffect(this.layer, 55, [null, 1])[1])
    },
    getSortCap() {
        let g = layers[this.layer].getPoint()
        if(hasUpgrade(this.layer,65)) {
            return [[0,0,0],g,_D(Infinity)]
        } else {
            let n = _D1
            let x = 1
            let y = 0
            let z = 0
            let p = Decimal.max(_D1,player[this.layer].points)
    
            if (g.gt(n)) {
                while (g.gt(n)) {
                    g = n.mul(
                        g.div(n)
                            .pow(
                                n.div(n.add(1.01))
                            )
                    )
    
                    if (x % (ArrayMax(
                            10,
                            getEffect(this.layer, 51, 10),
                            getEffect(this.layer, 52, 10),
                            getEffect(this.layer, 53, 10),
                            getEffect(this.layer, 54, 10),
                            getEffect(this.layer, 55, [10, null])[0],
                        )) == 0
                    ) {
                        g = g.pow(divNum(
                            ArrayMin(
                                _D(1.5),
                                getEffect(this.layer, 41, _D(1.5)),
                                getEffect(this.layer, 42, _D(1.5)),
                                getEffect(this.layer, 43, _D(1.5)),
                                getEffect(this.layer, 44, _D(1.5)),
                                getEffect(this.layer, 45, _D(1.5)),
                            )
                        ))
                        y++
                    }
    
                    if (x % 100 == 0) {
                        g = g.pow(divNum(2))
                        z++
                    }
    
                    n = n.add(
                        ArrayMax(
                            _D1,
                            getEffect(this.layer, 31, _D1),
                            getEffect(this.layer, 32, _D1),
                            getEffect(this.layer, 33, _D1),
                            getEffect(this.layer, 34, _D1),
                            getEffect(this.layer, 35, _D1),
                            getEffect(this.layer, 61, _D1),
                            getEffect(this.layer, 62, _D1),
                            getEffect(this.layer, 63, _D1),
                            getEffect(this.layer, 64, _D1),
                        )
                    )
    
                    x++
                }
            }
    
            let c = g.mul(10)
            if (p.eq(0)) {
                //do nothing
            } else if (p.gte(g.mul(10))) {
                g = g.pow(3).mul(100).div(p.pow(2))
            }
    
            return [[x,y,z], g, c]
        }
    },
    upgrades: {
        11: {
            title: "无趣的开端",
            description: "每秒自动获得1点数",
            effect() {
                return _D(1)
            },
            cost: new Decimal(0),
        },
        12: {
            title: "昨日再现",
            description: "每秒自动获得2点点数而不是1点",
            effect() {
                return _D(2)
            },
            cost: new Decimal(9),
            unlocked() { return hasUpgrade(this.layer, 11) }
        },
        13: {
            title: "三阳开泰",
            description: "每秒自动获得4点点数而不是2点",
            effect() {
                return _D(4)
            },
            cost: new Decimal(16),
            unlocked() { return hasUpgrade(this.layer, 12) }
        },
        14: {
            title: "大家都烦了",
            description: "每秒自动获得8点点数而不是4点",
            effect() {
                return _D(8)
            },
            cost: new Decimal(25),
            unlocked() { return hasUpgrade(this.layer, 13) }
        },
        15: {
            title: "我保证是最后一次",
            description: "每秒自动获得16点点数而不是8点",
            effect() {
                return _D(16)
            },
            cost: new Decimal(36),
            unlocked() { return hasUpgrade(this.layer, 14) }
        },
        21: {
            title: "平淡的发展",
            description: "点数获取基于点数提升",
            effect() {
                return player[this.layer].points.add(1)
            },
            effectDisplay() {
                return `×${format(this.effect())}`
            },
            cost: new Decimal(59),
            unlocked() { return hasUpgrade(this.layer, 15) }
        },
        22: {
            title: "不是,又来?",
            description: "点数获取再次基于点数提升",
            effect() {
                return player[this.layer].points.add(1).pow(2)
            },
            effectDisplay() {
                return `×${format(this.effect())}`
            },
            cost: new Decimal(100),
            unlocked() { return hasUpgrade(this.layer, 21) }
        },
        23: {
            title: "懒得喷",
            description: "点数获取再再次基于点数提升",
            effect() {
                return player[this.layer].points.add(1).pow(3)
            },
            effectDisplay() {
                return `×${format(this.effect())}`
            },
            cost: new Decimal(169),
            unlocked() { return hasUpgrade(this.layer, 22) }
        },
        24: {
            title: "写树原来这么简单",
            description: "点数获取再再再次基于点数提升",
            effect() {
                return player[this.layer].points.add(1).pow(4)
            },
            effectDisplay() {
                return `×${format(this.effect())}`
            },
            cost: new Decimal(361),
            unlocked() { return hasUpgrade(this.layer, 23) }
        },
        25: {
            title: "这次真是最后一次",
            description: "点数获取最后一次基于点数提升,嗯价格怎么变少了?",
            effect() {
                return player[this.layer].points.add(1).pow(5)
            },
            effectDisplay() {
                return `×${format(this.effect())}`
            },
            cost: new Decimal(289),
            unlocked() { return hasUpgrade(this.layer, 24) }
        },
        31: {
            title: "来点不一样的",
            description: "软上限间隔从1削弱至1.01",
            effect() {
                return _D(1.01)
            },
            cost: new Decimal(500),
            unlocked() { return hasUpgrade(this.layer, 25) }
        },
        32: {
            title: "上一个升级到底削弱了什么",
            description: "软上限间隔从1.01削弱至1.05",
            effect() {
                return _D(1.05)
            },
            cost: new Decimal(501),
            unlocked() { return hasUpgrade(this.layer, 31) }
        },
        33: {
            title: "我们需要动力!",
            description: "软上限间隔从1.05削弱至1.1",
            effect() {
                return _D(1.1)
            },
            cost: new Decimal(505),
            unlocked() { return hasUpgrade(this.layer, 32) }
        },
        34: {
            title: "炸档被提前了吗?",
            description: "软上限间隔从1.1削弱至1.25",
            effect() {
                return _D(1.25)
            },
            cost: new Decimal(510),
            unlocked() { return hasUpgrade(this.layer, 33) }
        },
        35: {
            title: "遮沙避风了!",
            description: "软上限间隔从1.25削弱至2",
            effect() {
                return _D(2)
            },
            cost: new Decimal(250),
            unlocked() { return hasUpgrade(this.layer, 34) }
        },
        41: {
            title: "它被命运扼住脖颈",
            description: "点数削弱软软上限",
            effect() {
                return _D(1.5).pow(_D1.div(
                    player[this.layer].points.add(10).log(10).pow(0.2)
                ))
            },
            effectDisplay() {
                return `软软上限效果为^1/${format(this.effect())}`
            },
            cost: new Decimal(1414),
            unlocked() { return hasUpgrade(this.layer, 35) }
        },
        42: {
            title: "折断噩梦之羽翼",
            description: "点数削弱软软上限",
            effect() {
                return _D(1.5).pow(_D1.div(
                    player[this.layer].points.add(10).log(10).pow(0.3)
                ))
            },
            effectDisplay() {
                return `软软上限效果为^1/${format(this.effect())}`
            },
            cost: new Decimal(1732),
            unlocked() { return hasUpgrade(this.layer, 41) }
        },
        43: {
            title: "将梦力联结为风",
            description: "点数削弱软软上限",
            effect() {
                return _D(1.5).pow(_D1.div(
                    player[this.layer].points.add(10).log(10).pow(0.375)
                ))
            },
            effectDisplay() {
                return `软软上限效果为^1/${format(this.effect())}`
            },
            cost: new Decimal(2000),
            unlocked() { return hasUpgrade(this.layer, 42) }
        },
        44: {
            title: "翱翔于星空之上",
            description: "点数削弱软软上限",
            effect() {
                return _D(1.5).pow(_D1.div(
                    player[this.layer].points.add(10).log(10).pow(0.44)
                ))
            },
            effectDisplay() {
                return `软软上限效果为^1/${format(this.effect())}`
            },
            cost: new Decimal(1234),
            unlocked() { return hasUpgrade(this.layer, 43) }
        },
        45: {
            title: "限制也是自由",
            description: "点数削弱软软上限",
            effect() {
                return _D(1.5).pow(_D1.div(
                    player[this.layer].points.add(10).log(10).pow(0.5)
                ))
            },
            effectDisplay() {
                return `软软上限效果为^1/${format(this.effect())}`
            },
            cost: new Decimal(1000),
            unlocked() { return hasUpgrade(this.layer, 44) }
        },
        51: {
            title: "软禁",
            description: "软软上限间隔从10削弱至11",
            effect() {
                return 11
            },
            cost: new Decimal(3500),
            unlocked() { return hasUpgrade(this.layer, 44) }
        },
        52: {
            title: "休息一下",
            description: "软软上限间隔从11削弱至12",
            effect() {
                return 12
            },
            cost: new Decimal(4800),
            unlocked() { return hasUpgrade(this.layer, 51) }
        },
        53: {
            title: "墙累了,我要放水",
            description: "软软上限间隔从12削弱至13,点数获取^1.1",
            effect() {
                return 13
            },
            cost: new Decimal(1437),
            unlocked() { return hasUpgrade(this.layer, 52) }
        },
        54: {
            title: "继续时间墙",
            description: "软软上限间隔从13削弱至15,点数获取再^1.1",
            effect() {
                return 15
            },
            cost: new Decimal(5210),
            unlocked() { return hasUpgrade(this.layer, 53) }
        },
        55: {
            title: "继续时间墙",
            description: "软软上限间隔从15削弱至20,点数获取基于点数提升",
            effect() {
                return [20, player[this.layer].points.add(1).log(10).pow(0.1)]
            },
            effectDisplay() {
                return `^${format(this.effect()[1])}`
            },
            cost: new Decimal(5333),
            unlocked() { return hasUpgrade(this.layer, 53) }
        },
        61: {
            title: "依旧老活动返场",
            description: "软上限间隔从2削弱至3",
            effect() {
                return _D(3)
            },
            cost: new Decimal(1080),
            unlocked() { return hasUpgrade(this.layer, 55) }
        },
        62: {
            title: "我的点数缩水了",
            description: "软上限间隔从3削弱至4",
            effect() {
                return _D(4)
            },
            cost: new Decimal(314),
            unlocked() { return hasUpgrade(this.layer, 61) }
        },
        63: {
            title: "我的点数膨胀了",
            description: "软上限间隔从4削弱至5",
            effect() {
                return _D(5)
            },
            cost: new Decimal(5000),
            unlocked() { return hasUpgrade(this.layer, 62) }
        },
        64: {
            title: "事情有点不对劲",
            description: "软上限间隔从5削弱至10",
            effect() {
                return _D(10)
            },
            cost: new Decimal(17250),
            unlocked() { return hasUpgrade(this.layer, 63) }
        },
        65: {
            title: "软上限被禁止了",
            description: "击破所有软上限,梦力+1",
            onPurchase() {
                player.main.points = player.main.points.add(1)
            },
            cost: new Decimal(118000),
            unlocked() { return hasUpgrade(this.layer, 64) }
        },
    },
    infoboxes: {
        main: {
            title: "1g1sc",
            body() {
                return `你的点数获取被软上限了,基于点数获取而不是点数,这会带来什么呢?<br>
                每固定的(初始值为1)点数获取,点数获取会被软上限<br>
                每固定的(初始值为10)层软上限,点数获取会被软软上限<br>
                每100层软上限,点数获取会被软软软上限<br>
                点数大于点数获取的10倍后,点数获取会额外被软上限` },
        },
    },
    
    layerShown() { return false },

});