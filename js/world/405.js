addLayer("405", {
    symbol: "⏬️",
    resource: "点数",
    color: "#aaa",
    update(diff) {
        if (!getGridData('main', this.layer)||player.pause[this.layer]) return
        player['405'].points = player['405'].points.add(layers['405'].getadder().times(layers['405'].getmulty()).pow(layers['405'].getpowie()).times(layers['405'].getFinalMult()).times(diff))
        if(inChallenge("405",22)) player['405'].chal4t=player['405'].chal4t.add(diff)
    },
    startData() {
        return {
            unlocked: true,
            points: _D0,
            bamount:_D0,
            chal4t:_D0,
        }
    },
    type: "none",
    microtabs:{
        BUYABLES:{
            "A":{
                content:[
                    ["row",[["buyable",[11]],["buyable",[12]],["buyable",[13]]]],
                    ["row",[["buyable",[21]],["buyable",[22]],["buyable",[23]]]],
                    ["row",[["buyable",[31]],["buyable",[32]],["buyable",[33]]]]
                ]
            },
        }
    },
    tabFormat:{
        "Main":{
            content:[
                ["display-text", function () {
                    return `你有 <h2 class="nmpt">${format(player[this.layer].points)}</h2> 点数(+${format(layers['405'].getadder().times(layers['405'].getmulty()).pow(layers['405'].getpowie()).times(layers['405'].getFinalMult()))}/s)`
                }],
                ["display-text", function () {
                    return `你购买了 <h2 class="nmpt">${format(player[this.layer].bamount)}</h2> 次可购买, 这提供给你 <h2 class="nmpt">${format(layers['405'].amtboost())}</h2> 倍点数加成`
                }],
                ["microtabs","BUYABLES"]
            ],
        },
        "Chals":{
            content:[
                ["display-text", function () {
                    return `你有 <h2 class="nmpt">${format(player[this.layer].points)}</h2> 点数(+${format(layers['405'].getadder().times(layers['405'].getmulty()).pow(layers['405'].getpowie()).times(layers['405'].getFinalMult()))}/s)`
                }],
                ["display-text", function () {
                    return `你购买了 <h2 class="nmpt">${format(player[this.layer].bamount)}</h2> 次可购买, 这提供给你 <h2 class="nmpt">${format(layers['405'].amtboost())}</h2> 倍点数加成`
                }],
                "challenges",
            ],
        },
        "badables":{
            content:[
                ["display-text", function () {
                    return `前面的区域以后再来探索吧o(*￣▽￣*)ブ`
                }],
                // ["display-text", function () {
                //     return `你有 <h2 class="nmpt">${format(player[this.layer].points)}</h2> 点数(+${format(layers['405'].getadder().times(layers['405'].getmulty()).pow(layers['405'].getpowie()).times(layers['405'].getFinalMult()))}/s)`
                // }],
                // ["display-text", function () {
                //     return `你购买了 <h2 class="nmpt">${format(player[this.layer].bamount)}</h2> 次可购买, 这提供给你 <h2 class="nmpt">${format(layers['405'].amtboost())}</h2> 倍点数加成`
                // }],
                // ["display-text", function () {
                //     return `欢迎来到可购买腐化,点击下面的大按钮就可以开始了,你的目标是在腐化中达到1e60点数.`
                // }],
                // ["display-text", function () {
                //     return `你可以从下面选择可购买提升可购买腐化的难度,最终你的可购买碎片数量将等于下方9个可购买等级之和`
                // }],
                // ["row",[["buyable",[101]],["buyable",[102]],["buyable",[103]]]],
                // ["row",[["buyable",[201]],["buyable",[202]],["buyable",[203]]]],
                // ["row",[["buyable",[301]],["buyable",[302]],["buyable",[303]]]]
            ],
            unlocked(){return hasChallenge("405",22)}
        }
    },
    amtboost(){
        let bst = _D1
        bst = player['405'].bamount.div(10).pow(2).add(1).log10().add(1)
        if(hasChallenge("405",22)) bst = player['405'].bamount.pow(0.5)
        return bst
    },
    getadder(){
        let a = _D1
        a = a.add(buyableEffect("405",13).times(2))
        if(hasChallenge("405",11)) a = a.add(buyableEffect("405",22))
        return a
    },
    getmulty(){
        let m = _D1
        m = m.times(layers['405'].amtboost())
        m = m.times(buyableEffect("405",11))
        m = m.times(buyableEffect("405",12))
        if(hasChallenge("405",11)) m = m.times(buyableEffect("405",21))
        if(hasChallenge("405",21)) m = m.times(buyableEffect("405",32))
        return m
    },
    getpowie(){
        let p = _D1
        if(hasChallenge("405",11)) p = p.add(buyableEffect("405",23))
        if(inChallenge("405",12)) p = p.times(0.75)
        if(inChallenge("405",21)) p = p.times(0.9)
        if(hasChallenge("405",12)) p = p.times(1.1)
        return p
    },
    getFinalMult(){
        let fm = _D1
        if(inChallenge("405",11)) fm = fm.times(0.1)
        if(inChallenge("405",21)) fm = fm.times(0.1)
        if(hasChallenge("405",21)) fm = fm.times(buyableEffect("405",31))
        if(inChallenge("405",22)) fm = fm.times(Decimal.pow(0.875,player['405'].chal4t))
        if(hasChallenge("405",22)) fm = fm.times(10)
        return fm
    },
    buyableReset(){
        player['405'].points = _D0
        setBuyableAmount("405",11,_D0)
        player['405'].points = _D0
        setBuyableAmount("405",12,_D0)
        player['405'].points = _D0
        setBuyableAmount("405",13,_D0)
        player['405'].points = _D0
        setBuyableAmount("405",21,_D0)
        player['405'].points = _D0
        setBuyableAmount("405",22,_D0)
        player['405'].points = _D0
        setBuyableAmount("405",23,_D0)
        player['405'].points = _D0
        setBuyableAmount("405",31,_D0)
        player['405'].points = _D0
        setBuyableAmount("405",32,_D0)
        player['405'].points = _D0
        setBuyableAmount("405",33,_D0)
        player['405'].points = _D0
    },
    upgrades: {
    },
    milestones: {
    },
    buyables: {
        11: {
            title() { return `Buyable I` },
            display() {
                return `点数获取乘以${format(buyableEffect("405",13).add(1.1))}每次购买<br>
                            数量:${formatWhole(getBuyableAmount(this.layer, this.id))}`+(getBuyableAmount("405",33).gte(0) ? `<b style="color:white;text-shadow:0 0 10px black">[+${format(buyableEffect("405",33))}]</b>`:``)+`
                            效果:x${format(this.effect())}
                            下一个需要:${format(this.cost())}`
            },
            cost(x) { 
                let p = _D1
                if(x.gte(25)) p = _D(1.25)
                if(x.gte(100)) p = _D(1.33)
                return Decimal.pow(1.25,x.div(0.8).times(p).pow(1.25)).times(10) },
            effect(x) { 
                let b = x
                if(hasChallenge("405",21)) b = b.add(buyableEffect("405",33))
                return Decimal.pow(buyableEffect("405",13).add(1.1),b) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            unlocked() { return true },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player['405'].bamount = player['405'].bamount.add(1)
            },
            style:{"margin":"0px","height":"200px","width":"200px"}
        },
        12: {
            title() { return `Buyable II` },
            display() {
                return `点数获取乘以1.3每次购买<br>
                            数量:${formatWhole(getBuyableAmount(this.layer, this.id))}`+(getBuyableAmount("405",33).gte(0) ? `<b style="color:white;text-shadow:0 0 10px black">[+${format(buyableEffect("405",33))}]</b>`:``)+`
                            效果:x${format(this.effect())}
                            下一个需要:${format(this.cost())}`
            },
            cost(x) { return Decimal.pow(5,x.div(0.9).pow(1.25)).times(50) },
            effect(x) { 
                let b = x
                if(hasChallenge("405",21)) b = b.add(buyableEffect("405",33))
                return Decimal.pow(1.3,b) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            unlocked() { return true },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player['405'].bamount = player['405'].bamount.add(1)
            },
            style:{"margin":"0px","height":"200px","width":"200px"}
        },
        13: {
            title() { return `Buyable III` },
            display() {
                return `I的底数+0.05并将点数获取基础值+0.1每次购买<br>
                            数量:${formatWhole(getBuyableAmount(this.layer, this.id))}/10`+(getBuyableAmount("405",33).gte(0) ? `<b style="color:white;text-shadow:0 0 10px black">[+${format(buyableEffect("405",33))}]</b>`:``)+`
                            效果:+${format(this.effect())} & +${format(this.effect().times(2))}
                            下一个需要:${format(this.cost())}`
            },
            cost(x) { 
                if(inChallenge("405",21)) return Decimal.pow(2.5,x.pow(1.35)).times(500)
                return Decimal.pow(2,x.pow(1.25)).times(150) },
            effect(x) {                 
                let b = x
                if(hasChallenge("405",21)) b = b.add(buyableEffect("405",33))
                return b.times(0.05) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            unlocked() { return true },
            purchaseLimit:10,
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player['405'].bamount = player['405'].bamount.add(1)
            },
            style:{"margin":"0px","height":"200px","width":"200px"}
        },
        21: {
            title() { return `Buyable IV` },
            display() {
                return `点数获取乘以5每次购买<br>
                            数量:${formatWhole(getBuyableAmount(this.layer, this.id))}`+(getBuyableAmount("405",33).gte(0) ? `<b style="color:white;text-shadow:0 0 10px black">[+${format(buyableEffect("405",33))}]</b>`:``)+`
                            效果:x${format(this.effect())}
                            下一个需要:${format(this.cost())}`
            },
            cost(x) { return Decimal.pow(250,x.pow(2)).times(10) },
            effect(x) { 
                let b = x
                if(hasChallenge("405",21)) b = b.add(buyableEffect("405",33))
                return Decimal.pow(5,b) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            unlocked() { return hasChallenge("405",11) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player['405'].bamount = player['405'].bamount.add(1)
            },
            style:{"margin":"0px","height":"200px","width":"200px"}
        },
        22: {
            title() { return `Buyable V` },
            display() {
                return `点数获取基础值加2每次购买<br>
                            数量:${formatWhole(getBuyableAmount(this.layer, this.id))}`+(getBuyableAmount("405",33).gte(0) ? `<b style="color:white;text-shadow:0 0 10px black">[+${format(buyableEffect("405",33))}]</b>`:``)+`
                            效果:+${format(this.effect())}
                            下一个需要:${format(this.cost())}`
            },
            cost(x) { return Decimal.pow(3,x.pow(1.5)).times(1e10) },
            effect(x) { 
                let b = x
                if(hasChallenge("405",21)) b = b.add(buyableEffect("405",33))
                return b.times(2) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            unlocked() { return hasChallenge("405",11) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player['405'].bamount = player['405'].bamount.add(1)
            },
            style:{"margin":"0px","height":"200px","width":"200px"}
        },
        23: {
            title() { return `Buyable VI` },
            display() {
                return `点数指数+0.01每次购买<br>
                            数量:${formatWhole(getBuyableAmount(this.layer, this.id))}/10`+(getBuyableAmount("405",33).gte(0) ? `<b style="color:white;text-shadow:0 0 10px black">[+${format(buyableEffect("405",33))}]</b>`:``)+`
                            效果:+${format(this.effect())}
                            下一个需要:${format(this.cost())}`
            },
            cost(x) { return Decimal.pow(2,x.pow(x.add(2))).times(1e15) },
            effect(x) { 
                let b = x
                if(hasChallenge("405",21)) b = b.add(buyableEffect("405",33))
                return b.times(0.01) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            unlocked() { return true },
            purchaseLimit:10,
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player['405'].bamount = player['405'].bamount.add(1)
            },
            style:{"margin":"0px","height":"200px","width":"200px"}
        },
        31: {
            title() { return `Buyable VII` },
            display() {
                return `点数获取乘以8每次购买(在指数之后)<br>
                            数量:${formatWhole(getBuyableAmount(this.layer, this.id))}`+(getBuyableAmount("405",33).gte(0) ? `<b style="color:white;text-shadow:0 0 10px black">[+${format(buyableEffect("405",33))}]</b>`:``)+`
                            效果:x${format(this.effect())}
                            下一个需要:${format(this.cost())}`
            },
            cost(x) { return Decimal.pow(15,x.pow(x.div(25).add(2))) },
            effect(x) { 
                let b = x
                if(hasChallenge("405",21)) b = b.add(buyableEffect("405",33))
                return Decimal.pow(8,b) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            unlocked() { return true },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player['405'].bamount = player['405'].bamount.add(1)
            },
            style:{"margin":"0px","height":"200px","width":"200px"}
        },
        32: {
            title() { return `Buyable VIII` },
            display() {
                return `点数获取乘数+(V的数量^0.5)每次购买<br>
                            数量:${formatWhole(getBuyableAmount(this.layer, this.id))}`+(getBuyableAmount("405",33).gte(0) ? `<b style="color:white;text-shadow:0 0 10px black">[+${format(buyableEffect("405",33))}]</b>`:``)+`
                            效果:x${format(this.effect())}
                            下一个需要:${format(this.cost())}`
            },
            cost(x) { return Decimal.pow(10,x.pow(2)).times(1e23) },
            effect(x) {
                let b = x
                if(hasChallenge("405",21)) b = b.add(buyableEffect("405",33))
                return b.times(getBuyableAmount("405",22).sqrt()).max(1) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            unlocked() { return true },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player['405'].bamount = player['405'].bamount.add(1)
            },
            style:{"margin":"0px","height":"200px","width":"200px"}
        },
        33: {
            title() { return `Buyable IX` },
            display() {
                return `赠送前8个可购买1个免费等级每数量级^0.5购买<br>
                            数量:${formatWhole(getBuyableAmount(this.layer, this.id))}
                            效果:+${format(this.effect())}
                            下一个需要:${format(this.cost())}`
            },
            cost(x) { return Decimal.pow(100,x.pow(x.times(0.05).add(1))).times(1e28) },
            effect(x) { 
                if(x.eq(0)) return _D0
                return x.log10().add(1).pow(2)},
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            unlocked() { return true },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player['405'].bamount = player['405'].bamount.add(1)
            },
            style:{"margin":"0px","height":"200px","width":"200px"}
        },
            // 101: {
            //     title() { return `<p class='p1tx'>灾难性点数减少</p>` },
            //     display() {
            //         return `点数获取指数^0.66每次购买<br>
            //                     数量:${formatWhole(getBuyableAmount(this.layer, this.id))}/8
            //                     效果:^${format(this.effect())}`
            //     },
            //     cost(x) { return _D0 },
            //     effect(x) {return Decimal.pow(0.66,x)},
            //     canAfford() { return getBuyableAmount(this.layer,this.id).lte(7) },
            //     unlocked() { return true },
            //     buy() {
            //         player[this.layer].points = player[this.layer].points.sub(this.cost())
            //         setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            //     },
            //     style:{"margin":"0px","height":"200px","width":"200px","border":"4px solid","border-color":"red","background-color":"#000000","color":" hsl(0,100%,50%)","box-shadow":""}
            // },
    },
    challenges:{
        11: {
            name() { return `开始的挑战` },
            challengeDescription() { return `点数获取x0.1` },
            goalDescription() { return `10点数` },
            rewardDescription() { return `解锁3个可购买......这个挑战显得很多余!` },
            canComplete() { return player[this.layer].points.gte(10) },
            onEnter() {
                layers[this.layer].buyableReset()
            },
            onExit() {
                layers[this.layer].buyableReset()
            },
            onComplete() {
                playsound("cc")
            },
            style:{"margin":"0px","height":"300px","width":"300px"}
        },
        12: {
            name() { return `中间的挑战` },
            challengeDescription() { return `点数获取^0.75` },
            goalDescription() { return `1e6点数` },
            rewardDescription() { return `点数获取^1.1` },
            canComplete() { return player[this.layer].points.gte(1e6) },
            onEnter() {
                layers[this.layer].buyableReset()
            },
            onExit() {
                layers[this.layer].buyableReset()
            },
            onComplete() {
                playsound("cc")
            },
            unlocked(){return hasChallenge("405",11)},
            style:{"margin":"0px","height":"300px","width":"300px"}
        },
        21: {
            name() { return `四分之三的挑战` },
            challengeDescription() { return `点数^0.9再/10,III的花费略微提高` },
            goalDescription() { return `10000点数` },
            rewardDescription() { return `再解锁三个可购买,九分之一的可购买!` },
            canComplete() { return player[this.layer].points.gte(10000) },
            onEnter() {
                layers[this.layer].buyableReset()
            },
            onExit() {
                layers[this.layer].buyableReset()
            },
            onComplete() {
                playsound("cc")
            },
            unlocked(){return hasChallenge("405",12)},
            style:{"margin":"0px","height":"300px","width":"300px"}
        },
        22: {
            name() { return `八分之七的挑战` },
            challengeDescription() { return `点数获取每秒变为原来的八分之七` },
            goalDescription() { return `1e17点数` },
            rewardDescription() { return `优化基于购买次数增加点数获取的公式,点数获取x10` },
            canComplete() { return player[this.layer].points.gte(1e17) },
            onEnter() {
                layers[this.layer].buyableReset()
                player['405'].chal4t=_D0
            },
            onExit() {
                layers[this.layer].buyableReset()
            },
            onComplete() {
                playsound("cc")
            },
            unlocked(){return hasChallenge("405",21)},
            style:{"margin":"0px","height":"300px","width":"300px"}
        },
    },
    layerShown() { return getGridData('main', this.layer) && (!options.hideWorld || !player.world[this.layer]) && (!options[`line${Math.floor(this.layer / 100)}`]) },

});