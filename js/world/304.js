addLayer("304", {
    symbol: "🕛",
    resource: "点数",
    color: "hsl(170, 100%, 50%)",
    style(){
        if(player['304'].lv>=22||player['304'].wptrig[9]) return {"background": "linear-gradient(in hsl 90deg,hsla(170, 100%, 50%, 0.4),hsla(170, 100%, 50%,0.1),hsla(170, 100%, 50%, 0.4),hsla(170, 100%, 50%,0.1),hsla(170, 100%, 50%, 0.4),hsla(170, 100%, 50%,0.1),hsla(170, 100%, 50%, 0.4))","background-size": "200% auto","animation":"rainbow 30s linear infinite"}
    },
    update(diff) {
        if (!getGridData('main', this.layer)) return
        if(player['304'].started) player['304'].timeleft304 -= diff
        if(player['304'].lv>=11 && (!player.world[this.layer])) completeWorld(this.layer)
        if((player['304'].fl1fuel<=0||(player['304'].lv>=5 && player['304'].fl5timeleft<=0)||(player['304'].lv>=10 && player['304'].fl10timeleft<=0)||(player['304'].lv>=15 && player['304'].fl15timeleft<=0))&&player['304'].started){//判断立刻失败
            player['304'].started = false
            player['304'].losetrig304 = true
            player['304'].losecnt++
            if(player['304'].lv==1) player['304'].achtrig=true
            layers['304'].init304()
        }
        if(player['304'].started && player['304'].timeleft304 <= 0){//判断失败
            if(player['304'].lv>=2&&player['304'].fl2progress<100){
                player['304'].started = false
                player['304'].losetrig304 = true
                player['304'].losecnt++
            }else if(player['304'].lv>=3&&(player['304'].fl3trig==false)){
                player['304'].started = false
                player['304'].losetrig304 = true
                 player['304'].losecnt++
            }else if(player['304'].lv>=4&&(player['304'].fl4progress<100)){
                player['304'].started = false
                player['304'].losetrig304 = true
                 player['304'].losecnt++
            }else if(player['304'].lv>=4&&(player['304'].fl4progress<100)){
                player['304'].started = false
                player['304'].losetrig304 = true
                player['304'].losecnt++
            }else if(player['304'].lv>=6&&(!hasUpgrade("304",14))){
                player['304'].started = false
                player['304'].losetrig304 = true
                player['304'].losecnt++
            }else if(player['304'].lv>=7&&(player['304'].fl7trig==false)){
                player['304'].started = false
                player['304'].losetrig304 = true
                 player['304'].losecnt++
            }else if(player['304'].lv>=8&&(player['304'].fl8trig==false)){
                player['304'].started = false
                player['304'].losetrig304 = true
                 player['304'].losecnt++
            }else if(player['304'].lv>=9&&(player['304'].fl9progress < 100)){
                player['304'].started = false
                player['304'].losetrig304 = true
                 player['304'].losecnt++
            }else if(player['304'].lv>=11&&(player['304'].fl11cnt < 25)){
                player['304'].started = false
                player['304'].losetrig304 = true
                 player['304'].losecnt++
            }else if(player['304'].lv>=12&&(player['304'].fl12trig==false)){
                player['304'].started = false
                player['304'].losetrig304 = true
                 player['304'].losecnt++
            }else if(player['304'].lv>=13&&(!hasUpgrade("304",18))){
                player['304'].started = false
                player['304'].losetrig304 = true
                 player['304'].losecnt++
            }else if(player['304'].lv>=14&&(player['304'].fl14progress<100)){
                player['304'].started = false
                player['304'].losetrig304 = true
                 player['304'].losecnt++
            }else if(player['304'].lv>=22&&(player['304'].fl22time<15)){
                player['304'].started = false
                player['304'].losetrig304 = true
                player['304'].losecnt++
            }else if(player['304'].lv>=22&&((!layers['304'].getFl22trig(player['304'].fl22treq[1]) || (!layers['304'].getFl22trig(player['304'].fl22treq[2])) || (!layers['304'].getFl22trig(player['304'].fl22treq[3]))))){
                player['304'].started = false
                player['304'].losetrig304 = true
                player['304'].losecnt++
            }else{
                if(!player['304'].wptrig[2])player['304'].lv++
                if(player['304'].lv>=5){
                    player['304'].shoppoints = player['304'].shoppoints.add(1)
                    player['304'].shoppoints = player['304'].shoppoints.min(layers['304'].getshopcap())
                }
                if(player['304'].lv==16 && (!player['304'].fl15trig)){
                    player.main.points = player.main.points.add(1)
                    player['304'].fl15trig = true
                }
                if(player['304'].lv==23){
                    player['304'].achtrig2 = true
                }
                if(player['304'].lv<=22)player['304'].lv = Math.min(player['304'].lv,21)
                player['304'].lv=Math.min(player['304'].lv,23)
                player['304'].hlv = Math.max(player['304'].lv,player['304'].hlv)
                player['304'].started = false
            }
            layers['304'].init304()
        }
        if(player['304'].started){
            if(player['304'].Fl==16) player['304'].fl22time+=diff
            if(player['304'].fl22time>=5 && player['304'].fl22treq[1]==0){
                layers['304'].getFl22req(1)
                if(player['304'].fl22treq[1]==9) layers['304'].getFl22trig(9)
                if(player['304'].fl22treq[1]==10) layers['304'].getFl22trig(10)
            }
            if(player['304'].fl22time>=10 && player['304'].fl22treq[2]==0){
                layers['304'].getFl22req(2)
                if(player['304'].fl22treq[2]==9) layers['304'].getFl22trig(9)
                if(player['304'].fl22treq[2]==10) layers['304'].getFl22trig(10)
            }
            if(player['304'].fl22time>=15 && player['304'].fl22treq[3]==0){
                layers['304'].getFl22req(3)
                if(player['304'].fl22treq[3]==9) layers['304'].getFl22trig(9)
                if(player['304'].fl22treq[3]==10) layers['304'].getFl22trig(10)
            }
            if(!player['304'].wptrig[1])player['304'].fl1fuel -= ((hasUpgrade("304",44)?1.2:3)+player['304'].lv/(hasUpgrade("304",51)?100:4))*diff
            if(player['304'].lv>=5 && (!player['304'].wptrig[3])) player['304'].fl5timeleft -= diff
            if(player['304'].lv>=6) player['304'].points = player['304'].points.add((layers['304'].getfl6mult()).times(diff))
            if(player['304'].lv>=9 && player['304'].fl9degree == player['304'].fl9target){
                player['304'].fl9target = (hasUpgrade("304",53)? chooseOneInArray([60,80,100,120]):chooseOneInArray([20,40,60,80,100,120,140,160]))
                player['304'].fl9progress += 20
                player['304'].fl9progress = Math.min(player['304'].fl9progress,100)
            }
            if(player['304'].lv>=10 && (!player['304'].wptrig[4])) player['304'].fl10timeleft -= diff
            if(player['304'].lv>=15 && (!player['304'].wptrig[5])) player['304'].fl15timeleft -= diff
        }
    },
    startData() {
        return {
            unlocked: true,
            points: _D0,
            losecnt:0,
            shoppoints: _D0,
            timeleft304:20,
            started:false,
            achtrig:false,
            achtrig2:false,
            fl15trig:false,
            Fl:1,
            lv:1,
            hlv:1,
            losetrig304: false,
            fl1fuel:0,
            fl2progress:0,
            fl3trig:false,
            fl3problem:``,
            fl3answer:0,
            fl3answer1:0,
            fl4progress:0,
            fl5timeleft:15,
            fl5timecap:15,
            fl7answer:0,
            fl7problem:"",
            fl7answer1:0,
            fl7code:["Err",'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
            fl7trig:false,
            fl8cnt:0,
            fl8answer:0,
            fl8trig:false,
            fl8mode:0,
            fl9progress:0,
            fl9degree:90,
            fl9target:0,
            fl10timeleft:0,
            fl11box:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
            fl11cnt:0,
            pi:[3,1,4,1,5,9,2,6,5,3,5,8,9,7,9,3,2,3,8,4,6,2,6,4,3,3,8,3,2,7,9,5,0,2,8,8,4,1,9,7,1,6,9,3,9,9,3,7,5,1,0,5,8,2,0,9,7,4,9,4,4,5,9,2,3,0,7,8,1,6,4,0,6,2,8,6,2,0,8,9,9,8,6,2,8,0,3,4,8,2,5,3,4,2,1,1,7,0,6,7],
            fl12digit:0,
            fl12answer:0,
            fl12text:"",
            fl12trig:false,
            fl13points:_D0,
            fl14mode:0,
            fl14progress:0,
            fl15timeleft:48,
            fl15pos:15,
            wptrig:[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            fl21code:[0,5,2,8,14,17,10,21],
            fl21cnt:0,
            fl21trig:false,
            bravo:"<br>",
            fl22time:0,
            fl22req:[1,2,3,4,5,6,7,8,9,10],
            fl22treq:[0,0,0,0],
            fl22freq:[0,0,0,0],
            fl22reqtext:[null,`1层指示灯在结束时必须为红色`,`5层指示灯在结束时必须为红色或紫色`,`10层指示灯在结束时必须为红色`,`15层指示灯在结束时必须为红色或紫色`,`结束时必须至少在第6层有9000点数`,`结束时必须在16层`,`重置不超过18次5层炸弹`,`总计不重置超过30次炸弹`,`第二排指示灯失效`,`第一排指示灯无法提示炸弹是否爆炸`],
            bombcnt:0,
            bomb5cnt:0,
            lighttrig1:true,
            lighttrig2:true,
        }
    },
    type: "none",
    tabFormat: {
        AFK: {
            content: [
                ["display-text", function () {
                    return layers[this.layer].getlvtext()
                }],
                ["display-text", function () {
                    return (player['304'].losetrig304 ? `你搞砸了,好吧也许下次...<p style = "color: #00000000">这并不怪你</p>` : ``)
                }],
                ["display-text", function () {
                    return (player['304'].started ? `倒计时:<h2 class='p5pt'> ${formatTime(player['304'].timeleft304)} </h2>` : `当前倒计时为<h2 class='p5pt'> ${formatTime(layers['304'].calc304left())} </h2><br>准备好了就点下面的按钮开始`)
                }],
                "blank",
                ["clickable", [11]],
                "blank",
                ["row",[["clickable", [12]],
                ["clickable", [13]],["clickable",[14]]]],
                "blank",
                ["display-text", function () {
                    return (player['304'].started ? layers[this.layer].getfltext() : ``)
                }],
                ["clickable",[15]],
                ["clickable",[16]],
                ["clickable",[17]],
                ["clickable",[18]],
                ["clickable",[19]],
                ["clickable",[41]],
                ["row",[["clickable", [42]],
                ["clickable", [43]]]],
                ["clickable", [44]],
                ["clickable", [45]],
                ["clickable", [46]],
                ["clickable", [47]],
                "blank",
                ["row",[["clickable", [22]],
                ["clickable", [23]],["clickable",[24]]]],
                ["row",[["clickable", [25]],
                ["clickable", [27]],["clickable",[26]]]],
                ["row",[["clickable", [28]],
                ["clickable", [29]],["clickable",[31]]]],
                ["row",[["clickable", [33]],
                ["clickable", [21]],["clickable",[32]]]],
                "blank",
                ["upgrades",[1]],
                ["row",[["clickable", [51]],
                ["clickable", [52]],["clickable",[53]],
                ["clickable", [54]]]],
                ["row",[["clickable", [90.1]],
                ["clickable", [90.2]],["clickable",[90.3]],
                ["clickable", [90.4]],["clickable",[90.5]],
                ["clickable", [90.6]],["clickable",[90.7]],
                ["clickable", [90.8]],["clickable",[90.9]],
                ["clickable", [90.11]],["clickable",[90.12]],
                ["clickable", [90.13]],
                "grid"
                ]],
                ["display-text", function () {
                    return player['304'].Fl==0?`你以为你能离开吗.....<br>我还为你准备了最后的挑战....${player['304'].bravo.repeat(500)}
                    <p class="fl21">Play,Active,Success,Speed</p>`:``
                }],
                ["clickable",[91]],
                ["display-text", function () {
                    return player['304'].lv==22?`当前已重置${formatWhole(player['304'].bombcnt)}次炸弹和${player['304'].bomb5cnt}次5层炸弹`:``
                }],
            ]
        },
        Shop: {
            content: [
                ["display-text", function () {
                    return `你有 <h2 class = 'p5pt'>${formatWhole(player['304'].shoppoints)}/${formatWhole(layers['304'].getshopcap())}</h2> 商店点数`
                }],
                ["clickable",[61]],
                "blank",
                ["upgrades",[2,3,4,5,6]]
            ],
            unlocked(){return player['304'].lv>=6 && player['304'].started==false}
        },
        Warp: {
            content: [
                ["display-text", function () {
                    return `你可以通过下面的按钮跳转到先前对应的关卡,并且可以调整一系列参数!`
                }],
                "blank",
                ["row",[["clickable", [12]],
                ["clickable", [13]],["clickable",[14]]]],
                "blank",
                ["row",[["clickable", [71]],
                ["clickable", [72]]]],
                "blank",
                ["row",[["clickable", [73]],
                ["clickable", [74]],["clickable", [75]],
                ["clickable", [76]]]],
                ["row",[["clickable", [77]],
                ["clickable", [78]],["clickable", [79]],
                ["clickable", [81]]]],
                ["row",[["clickable", [82]],
                ["clickable", [83]],["clickable", [84]],
                ["clickable", [85]]]],
                ["display-text", function () {
                    return player['304'].fl21trig?`有什么事情发生了...你可以前往0层了`:``
                }],
            ],
            unlocked(){return player['304'].hlv>=2 && player['304'].started==false}
        },
    },
    hotkeys: [
        { key: ")", description: "[304] Shift+0: 代替数字键盘输入", onPress() { if(player['304'].lv<16) layers['304'].clickables[21].onClick() } },
        { key: "!", description: "[304] Shift+1: 代替数字键盘输入", onPress() { if(player['304'].lv<16) layers['304'].clickables[22].onClick() } },
        { key: "@", description: "[304] Shift+2: 代替数字键盘输入", onPress() { if(player['304'].lv<16) layers['304'].clickables[23].onClick() } },
        { key: "#", description: "[304] Shift+3: 代替数字键盘输入", onPress() { if(player['304'].lv<16) layers['304'].clickables[24].onClick() } },
        { key: "$", description: "[304] Shift+4: 代替数字键盘输入", onPress() { if(player['304'].lv<16) layers['304'].clickables[25].onClick() } },
        { key: "%", description: "[304] Shift+5: 代替数字键盘输入", onPress() { if(player['304'].lv<16) layers['304'].clickables[26].onClick() } },
        { key: "^", description: "[304] Shift+6: 代替数字键盘输入", onPress() { if(player['304'].lv<16) layers['304'].clickables[27].onClick() } },
        { key: "&", description: "[304] Shift+7: 代替数字键盘输入", onPress() { if(player['304'].lv<16) layers['304'].clickables[28].onClick() } },
        { key: "*", description: "[304] Shift+8: 代替数字键盘输入", onPress() { if(player['304'].lv<16) layers['304'].clickables[29].onClick() } },
        { key: "(", description: "[304] Shift+9: 代替数字键盘输入", onPress() { if(player['304'].lv<16) layers['304'].clickables[31].onClick() } },
        { key: "q", description: "[304] Q: 确认答案", onPress() { if(player['304'].lv<16) layers['304'].clickables[17].onClick() } },
    ],
    upgrades: {
        11: {
            title: "欢迎来到第六层",
            description: "点数获取翻倍",
            cost: _D(10),
            unlocked(){return player['304'].Fl==6 && player['304'].started}
        },
        12: {
            title: "你有没有发现",
            description: "点数获取x3",
            cost: _D(10),
            unlocked(){return player['304'].Fl==6 && player['304'].started}
        },
        13: {
            title: "时间越来越短",
            description: "点数获取x5",
            cost: _D(20),
            unlocked(){return player['304'].Fl==6 && player['304'].started}
        },
        14: {
            title: "?",
            description: "完成本层任务",
            cost: _D(200),
            unlocked(){return player['304'].Fl==6 && player['304'].started}
        },
        15: {
            title: "欢迎来到第十三层",
            description: "Floor6点数获取x5,倒计时增加10s",
            cost: _D(1),
            currencyDisplayName:`声望点数`,
            currencyInternalName:`fl13points`,
            currencyLayer:"304",
            unlocked(){return player['304'].Fl==13 && player['304'].started},
            onPurchase(){
                player['304'].timeleft304 += 10
            }
        },
        16: {
            title: "我知道这个世界",
            description: "将5层炸弹倒计时上限增加5s",
            cost: _D(1),
            currencyDisplayName:`声望点数`,
            currencyInternalName:`fl13points`,
            currencyLayer:"304",
            unlocked(){return player['304'].Fl==13 && player['304'].started},
            onPurchase(){
                player['304'].fl5timecap += 5
            }
        },
        17: {
            title: "真的很难",
            description: "Floor6点数获取x3,10层炸弹倒计时增加20s",
            cost: _D(1),
            currencyDisplayName:`声望点数`,
            currencyInternalName:`fl13points`,
            currencyLayer:"304",
            unlocked(){return player['304'].Fl==13 && player['304'].started},
            onPurchase(){
                player['304'].fl10timeleft+=20
            }
        },
        18: {
            title: "加油!",
            description: "完成本层任务",
            cost: _D(4),
            currencyDisplayName:`声望点数`,
            currencyInternalName:`fl13points`,
            currencyLayer:"304",
            unlocked(){return player['304'].Fl==13 && player['304'].started},
        },
        21: {
            title: "Time1",
            description: "倒计时增加10s",
            cost: _D(1),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=6},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },
        22: {
            title: "Time2",
            description: "倒计时增加10s",
            cost: _D(2),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=6},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },
        23: {
            title: "Time3",
            description: "倒计时增加10s",
            cost: _D(2),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=6},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },
        24: {
            title: "Time4",
            description: "倒计时增加20s",
            cost: _D(3),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=6},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },
        25: {
            title: "Time5",
            description: "倒计时增加10s",
            cost: _D(1),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=16},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },
        26: {
            title: "TimeX",
            description: "每完成一关,倒计时就增加2.5s",
            cost: _D(5),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=16},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },
        31: {
            title: "F5-1",
            description: "Floor5炸弹初始倒计时增加15s",
            cost: _D(1),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=6},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },
        32: {
            title: "F5-2",
            description: "Floor5炸弹重置后倒计时增加5s",
            cost: _D(2),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=10},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },
        33: {
            title: "F10-1",
            description: "Floor10炸弹初始倒计时增加20s",
            cost: _D(2),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=11},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },
        34: {
            title: "F10-2",
            description: "Floor10炸弹重置对Floor5倒计时的减少变为1s,Floor10炸弹初始倒计时增加10s",
            cost: _D(2),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=11},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },   
        35: {
            title: "F15-1",
            description: "Floor15炸弹初始倒计时增加24s",
            cost: _D(2),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=16},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        }, 
        36: {
            title: "F15-2",
            description: "Floor15炸弹只会出现在10层以上(11到15),但重置时间上限减去12s",
            cost: _D(4),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=16},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },       
        41: {
            title: "B-1",
            description: "Floor2撬锁成功的概率增加",
            cost: _D(1),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=6},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },
        42: {
            title: "B-2",
            description: "大幅简化Floor3的运算",
            cost: _D(2),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=7},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },
        43: {
            title: "B-3",
            description: "Floor4的长按时间消耗更短",
            cost: _D(1),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=7},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },
        44: {
            title: "B-4",
            description: "Floor1燃料消耗速度降低",
            cost: _D(1),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=6},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },
        45: {
            title: "B-9",
            description: "Floor7密文长度缩短",
            cost: _D(1),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=16},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },
        46: {
            title: "B-10",
            description: "自动点击Floor11的前9个格子",
            cost: _D(1),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=16},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },
        51: {
            title: "B-5",
            description: "Floor1燃料消耗速度降低(再次)",
            cost: _D(3),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=8},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },
        52: {
            title: "B-6",
            description: "游戏结束时保留Floor6的前三个升级",
            cost: _D(1),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=8},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },
        53: {
            title: "B-7",
            description: "Floor9的目标角度分布更加平均(60~120)",
            cost: _D(2),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=10},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },
        54: {
            title: "B-8",
            description: "Floor8的数字生成将总是小于33",
            cost: _D(1),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=10},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },
        61: {
            title: "",
            description: "切断5层和6层之间的楼梯",
            cost: _D(-3),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=20},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },
        62: {
            title: "",
            description: "切断10层和11层之间的楼梯",
            cost: _D(-3),
            currencyInternalName:`shoppoints`,
            currencyLayer:"304",
            unlocked(){return player['304'].lv>=20},
            canAfford(){
                return player['304'].shoppoints.gte(this.cost)
            },
        },
    },
    milestones: {
    },
    getlvtext(){
        let s=""       
        let l=player['304'].lv
        if(l==1){
            s = `呃,嘿!我有一些工作要完成,你能在我回来之前盯着这些指示计吗?<br>只有20秒!这很简单的,不让这些数值降到0就行,感谢您的付出!<br>当下方指示灯变红,表示需要赶快添加燃料<br>本世界推荐使用单页面游玩`
        }
        if(l==2){
            s = `这是不是有点太简单了?没关系,我的工作不止这些<br>每一关你都可以到访新的一层,通过上下层的按钮(你已经看见了)<br>在非5的倍数层中(不包括1),你的任务都是需要达到某种目标而不是避免某种东西降为0,第二排的指示灯在完成对应层任务时会变绿<br>除此之外,你还解锁了关卡选择,你可以回到之前的关卡练习操作,以便更好地完成世界!`
        }
        if(l==3){
            s = `本世界不允许暂停哦!<br>顺带一提,你可以使用Shift+0~9进行快捷输入,Q进行答案确定`
        }
        if(l==4){
            s = `或许我该再给你加点时间....记得在完成其他层任务的同时别忘了给1层加燃料`
        }
        if(l==5){
            s = `倒计时的确增加了10s!<br>第5层有一个炸弹,它有15s的倒计时,你需要在它爆炸前点击它将它重置回到15s<br>新的指示灯同样可以提示你何时重置倒计时<br>值得一提的是,你可以通过点击指示灯直接到达对应的楼层,你需要合理运用这一点`
        }
        if(l==6){
            s = `在完成第5关之后,你解锁了商店<br>每完成1关,就可以获得1点数,你可以用点数购买降低游戏难度的升级<br>为了防止你在倒计时增加之后没事干,我给你做了一个增量游戏!好耶`
        }
        if(l==7){
            s = `你已经完成一大半了,加油!<br>随着完成更多的关卡,商店的升级也会更多!<br>第7层需要你破解一个A1Z26密码`
        }
        if(l==8){
            s = `以防你不知道,燃料最多可以加到120%<br>第8层要求你猜测一个1到100之间的整数,我会告诉你猜大了还是猜小了`
        }
        if(l==9){
            s = `咱们再来撬开一扇门吧,这次要比上次难一点....`
        }
        if(l==10){
            s = `挺过这关你就可以获得梦力了,倒计时再次增加了10s!<br>第10层的炸弹更具毁灭性,它的倒计时为30s,并且每次重置它的倒计时都会使得5层倒计时-2s!<br>现在,5层指示灯在倒计时小于3s变为紫色,此时重置10层炸弹将很危险`
        }
        if(l==11){
            s = `恭喜你完成了世界!但如果你想寻求挑战获得额外梦力,我还有额外的一些工作!<br>接下来的东西可能很有难度,我首先给你加10s倒计时,你还获得了5个额外商店点数!<br>来介绍一下11层,舒尔特方格是一种注意力训练游戏,由25个方格组成的方阵构成,训练时将数字1-25随机填入,被测者需按顺序指读并计时完成`
        }
        if(l==12){
            s = `本关考验你默写功夫!现在在1层会有一串数字,你需要在12层输入它,最好记住它不然会浪费你很多时间<br>哦对了,倒计时是不是不够用了?再加10s!(温馨提示:你可以花费一点时间把数字抄在纸上)`
        }
        if(l==13){
            s = `这么多要做的事情会让你手忙脚乱,一定要小心<br>为了防止你无聊,我给那个增量游戏做了一个声望层,好耶!`
        }
        if(l==14){
            s = `这估计将会是迄今为止最难的一关了,如果你这关没有感到很吃力的话说明你的水平很高`
        }
        if(l==15){
            s = `欢迎来到15关,你又获得了10s倒计时,通过这关,你就完成了额外工作!<br>15层是一个48s倒计时的炸弹,但每点击一次它的重置按钮,它就会到另一个层,这非常考验你的手速<br>新增的指示灯在倒计时低于15s时变红,低于5s时变紫,注意寻找按钮要花费时间!`
        }
        if(l==16){
            s = `终于!这就是我的所有工作了,你获得了一个额外梦力,还解锁了一些新的商店升级!<br>额...按理来说应该没有别的关卡了?<br>等等,什么?我们因为不支持移动端被制裁了?!?!<br>好吧,现在你只能用那块该死的数字键盘来输入和确认3,7,8,12层的答案了(/(ㄒoㄒ)/~~)`
        }
        if(l==17){
            s = `看看我新买的炉子,它可省了我不少钱!<br>不要紧张,那些黑烟是它在...呼吸!黑店老板告诉我它只是得了感冒过一会就好了<br>好了你忙吧,我要拿省出来的钱去还不支持移动端的罚款了!`
        }
        if(l==18){
            s = `呃,你还有多余的钱去付给别人工资吗?<p style="color: #ff9090">...太好了,我们的拆弹小组也被开除了,现在点击重置炸弹按钮会有50%的概率只将倒计时增加5s</p>一定要加倍注意15层炸弹哦!`
        }
        if(l==19){
            s = `够了,我已经没有什么东西可以拿走了....<br>这20s倒计时拿走!<p style="color:#FF0000">这关怎么可以这么难啊?!?!?</p>`
        }
        if(l==20){
            s = `<p class='fl20'>事情终于走到了这一步....我已经没有应付必须给高层安装电梯规定的经费了....<br>事到如今,你必须在商店里选择一段楼梯断掉它(这会给你一些没用的点数),这样我们的楼分开看就都不算高层建筑了哈哈....</p>`
        }
        if(l==21){
            s = `啊...你居然真的做到了...我想我也没有什么可以给你了<br>你可以离开了,但是我好像忘了钥匙在哪...<br>也许你能从过去找到线索?不管了,我要被抓走了,祝你好运!<br>(地上留下了一张纸条:5-2-8-14-17-10-X)`
        }
        if(l==22){
            s = `<p class='fl21'>这就是终点了</p>`
        }
        if(l==23){
            s = `恭喜你彻底通关了这个世界,现在没有什么可以阻止你了!`
        }
        return s
    },
    getfltext(){
        let s=``
        let l=player['304'].Fl
        if(l==1){
            s = `当前燃料:<p class="p5pt">${format(player['304'].fl1fuel)}%/100%</p>`+(player['304'].lv>=12?`你需要记住的数字是:${format(player['304'].fl12digit)}`:``)
        }
        if(l==2){
            s = `撬锁进度:<p class="p5pt">${format(player['304'].fl2progress)}%/100%</p>`+(player['304'].fl2progress>=100 ? `<br>大门已打开,恭喜!`:``)
        }
        if(l==3){
            s = (player['304'].fl3trig? `恭喜,回答正确!<br>`:``)+player['304'].fl3problem+`<br>当前答案:${Math.floor(player['304'].fl3answer)}`
        }
        if(l==5){
            s = `倒计时:<p class="p5pt">${format(player['304'].fl5timeleft)}s</p>`
        }
        if(l==6){
            s = `你有<h2 class = 'p5pt'>${format(player['304'].points)}点数</h2>,使得每次增加的燃料x${format(player['304'].points.add(1).log10().div(2).add(1))}`
        }
        if(l==7){
            s = (player['304'].fl7trig? `恭喜,回答正确!`:(player['304'].wptrig[7]?Math.floor(player['304'].fl7answer1):player['304'].fl7problem))+`<br>当前答案:${Math.floor(player['304'].fl7answer)}`
        }
        if(l==8){
            s = (player['304'].fl8trig?`恭喜你猜对了!`:(player['304'].fl8mode==1?`猜大了!`:player['304'].fl8mode==2? `猜小了!`:`请输入一个0到100之间的数字!`))+`<br>当前猜测:${formatWhole(player['304'].fl8answer)}`
        }
        if(l==9){
            s = `撬锁进度:<p class="p5pt">${format(player['304'].fl9progress)}%/100%</p><br>当前旋转度数:${formatWhole(player['304'].fl9degree)}°,转到${formatWhole(player['304'].fl9target)}°可使进度增加20%`+(player['304'].fl9progress>=100 ? `<br>大门已打开,恭喜!`:``)
        }
        if(l==10){
            s = `毁灭倒计时:<p class="p5pt">${format(player['304'].fl10timeleft)}s</p>`
        }
        if(l==12){
            s = (player['304'].fl12trig? `恭喜,默写满分!`:`请默写在1层见到的数字`)+`<br>当前答案:${Math.floor(player['304'].fl12answer)}`
        }
        if(l==13){
            s = `你有<h2 class = 'p5pt'>${format(player['304'].fl13points)}声望点数</h2>`
        }
        if(l==14){
            s =  `当按钮为蓝色时,你应长按按钮;若为黄色则应点击按钮`
        }
        if(l==15){
            s = `十五号倒计时:<p class="p5pt">${format(player['304'].fl15timeleft)}s</p>`
        }
        if(l==16){
            s = `我想你需要在这一层消耗一会时间:${format(Math.min(player['304'].fl22time,15))}s/15s`
            if(player['304'].fl22time>=5) s+=`<br>你不会真的以为这么简单吧,我的额外要求是:${player['304'].fl22reqtext[player['304'].fl22treq[1]]}`
            if(player['304'].fl22time>=10) s+=`<br>你不会真的以为这么简单吧,我的第二个额外要求是:${player['304'].fl22reqtext[player['304'].fl22treq[2]]}`
            if(player['304'].fl22time>=15) s+=`<br>你不会真的以为这么简单吧,我的第三个额外要求是:${player['304'].fl22reqtext[player['304'].fl22treq[3]]}`
        }
        return s
    },
    calc304left(){
        let b = 20
        let l = player['304'].lv
        if(l>=5) b=30
        if(l>=6) b=40
        if(l>=7) b=45
        if(l>=8) b=60
        if(l>=10) b=80
        if(l>=11) b=90
        if(l>=12) b=100
        if(l>=14) b=110
        if(l>=15) b=120
        if(l>=19) b=100
        if(l>=20) b=90
        if(hasUpgrade("304",21)) b+=10
        if(hasUpgrade("304",22)) b+=10
        if(hasUpgrade("304",23)) b+=10
        if(hasUpgrade("304",24)) b+=20
        if(hasUpgrade("304",25)) b+=10
        if(hasUpgrade("304",26)) b+=(player['304'].lv*2.5)
        return b
    },
    getfl3problem(){
        let a1=0
        let a2=0
        let a3=0
        let a4=0
        let k = (hasUpgrade("304",42)?10:4000)
        a1=Math.floor(Math.random()*k)
        a2=Math.floor(Math.random()*k)
        a3=Math.floor(Math.random()*k)
        a4=Math.floor(Math.random()*k)
        player['304'].fl3answer1 = (a1+a2+a3+a4)
        player['304'].fl3problem = `${formatWhole(a1+a2)}+${formatWhole(a3+a4)}=`+(player['304'].wptrig[6]?player['304'].fl3answer1:`?`)
    },
    getfl7problem(){
        let k = 6
        if(hasUpgrade("304",45)) k = 2
        for(i = 1;i<=k;i++){
            let a = Math.floor(Math.random()*25)+1
            player['304'].fl7problem += player['304'].fl7code[a]
            player['304'].fl7answer1 *= (a>=10 ? 100:10)
            player['304'].fl7answer1 += a
        }
    },
    getfl6mult(){
        let mt = _D0
        if(player['304'].lv>=6) mt = _D1
        if(hasUpgrade("304",11)) mt = mt.times(2)
        if(hasUpgrade("304",12)) mt = mt.times(3)
        if(hasUpgrade("304",13)) mt = mt.times(5)
        if(hasUpgrade("304",15)) mt = mt.times(5)
        if(hasUpgrade("304",17)) mt = mt.times(3)
        if(player['304'].wptrig[8]) mt = mt.times(300)
        return mt
    },
    initfl11grid(){
        let a = chooseFromArray(player['304'].fl11box,25)
        player['304'].fl11box = a
        for(i = 0 ;i<25;i++){
            let x = Math.floor(i/5)
            let y = Math.floor(i%5)
            let z = xytoid(x,y)
            player['304'].grid[z] = player['304'].fl11box[i]
        }
    },
    getfl13gain(){
        let p = player['304'].points
        let b = p.div(300).pow(0.75).max(0).floor()
        return b
    },
    getshopcap(){
        let c = player['304'].lv-5
        if(player['304'].lv>=11) c+=5
        return c
    },
    getFl22req(x){
        player['304'].fl22treq[x] = player['304'].fl22freq[x-1]
    },
    getFl22trig(x){
        let flg = true
        if(x==1){
            flg = player['304'].fl1fuel<=20
        }
        if(x==2){
            flg = player['304'].fl5timeleft<=5
        }
        if(x==3){
            flg = player['304'].fl10timeleft<=5
        }
        if(x==4){
            flg = player['304'].fl15timeleft<=15
        }
        if(x==5){
            flg = player['304'].points.gte(9000)
        }
        if(x==6){
            flg = player['304'].Fl==16
        }
        if(x==7){
            flg = player['304'].bomb5cnt<=18
        }
        if(x==8){
            flg = player['304'].bombcnt<=30
        }
        if(x==9){
            player['304'].lighttrig2 = false
        }
        if(x==10){
            player['304'].lighttrig1 = false
        }
        return flg
    },
    init304(){
                if(player['304'].lv==player['304'].hlv) player['304'].wptrig=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
                player['304'].Fl = 1
                player['304'].timeleft304 = layers['304'].calc304left()
                player['304'].bomb5cnt = 0
                player['304'].bombcnt = 0
                player['304'].fl1fuel = (player['304'].lv>=17? 10:50)
                player['304'].fl2progress = 0
                player['304'].fl7problem = ""
                player['304'].fl7answer1 = 0
                layers['304'].getfl3problem()
                layers['304'].getfl7problem()
                player['304'].fl3answer = 0
                player['304'].fl3trig = false
                player['304'].fl4progress = 0
                player['304'].fl5timeleft = (hasUpgrade("304",31)?30:15)
                player['304'].fl5timecap = (hasUpgrade("304",32)?20:15)
                player['304'].upgrades = player['304'].upgrades.filter(n => (n>19||(hasUpgrade("304",52)&&(n<14))))
                player['304'].points = _D0
                player['304'].fl7trig = false
                player['304'].fl7answer = 0
                player['304'].fl8cnt = Math.floor(Math.random()*(hasUpgrade("304",54)?33:99))+1
                player['304'].fl8trig = false
                player['304'].fl8answer = 0
                player['304'].fl8mode = 0
                player['304'].fl9degree = 0
                player['304'].fl9target = 180
                player['304'].fl9progress = 0
                player['304'].fl10timeleft = 30
                if(hasUpgrade("304",33)) player['304'].fl10timeleft += 20
                if(hasUpgrade("304",34)) player['304'].fl10timeleft += 10
                layers['304'].initfl11grid()
                player['304'].fl11cnt = 0
                if(hasUpgrade("304",46)) player['304'].fl11cnt = 9
                player['304'].fl12answer = 0
                player['304'].fl12digit = Math.floor(Math.random()*(Math.random()*934512345))
                player['304'].fl12trig = false
                player['304'].fl12text = ""
                player['304'].fl13points = _D0
                player['304'].fl14mode = 1
                player['304'].fl14progress = 0
                player['304'].fl15pos = 15
                player['304'].fl15timeleft = 48
                if(hasUpgrade("304",35)) player['304'].fl15timeleft += 24
                player['304'].fl22time=0
                player['304'].fl22treq=[0,0,0,0]
                player['304'].fl22freq = chooseFromArray(player['304'].fl22req,3)
                player['304'].lighttrig1=true
                player['304'].lighttrig2=true
    },
    clickables:{
        11: {
            title() { return `开始工作` },
            display: "",
            onClick() {
                init304()
                player['304'].started = true
                player['304'].losetrig304 = false
            },
            unlocked() { return !player['304'].started },
            canClick() { return !player['304'].started && ((hasUpgrade("304",61)||hasUpgrade("304",62))||player['304'].lv<20) },
        },
        12: {
            title() { return `上楼` },
            display: "",
            onClick() {
                player['304'].Fl ++
            },
            unlocked() { return true },
            canClick() {
                if((player['304'].lv==22&&player['304'].Fl==15&&player['304'].started)||player['304'].wptrig[10]) return true
                if(hasUpgrade("304",61)&&player['304'].lv>=20&&player['304'].Fl==5&&(player['304'].started)) return false
                if(hasUpgrade("304",62)&&player['304'].lv>=20&&player['304'].Fl==10&&(player['304'].started)) return false
                 return player['304'].Fl<player['304'].lv && (!player['304'].started||player['304'].Fl<15) 
            },
            style:{"height":"40px","min-height":"40px","width":"60px"}
        },
        13: {
            title() { return `FLOOR ${formatWhole(player['304'].Fl)}` },
            display: "",
            onClick() {
                return
            },
            unlocked() { return true },
            canClick() { return false },
            style:{"border":"2px solid","border-color":"white","background-color":"#000000","color":"white","font-family":"Times New Roman","height":"40px","min-height":"40px"}
        },
        14: {
            title() { return `下楼` },
            display: "",
            onClick() {
                player['304'].Fl --
            },
            unlocked() { return true},
            canClick() { 
                if(player['304'].fl21trig && player['304'].Fl==1 && (!player['304'].started)) return true
                if((hasUpgrade("304",61)&&player['304'].lv>=20&&player['304'].Fl==6)&&(player['304'].started)) return false
                if((hasUpgrade("304",62)&&player['304'].lv>=20&&player['304'].Fl==11)&&(player['304'].started)) return false
                return player['304'].Fl>1 
            },
            style:{"height":"40px","min-height":"40px","width":"60px"}
        },
        15: {
            title() { return `补充燃料` },
            display: "补充(5%*当前燃料百分比)+2%的燃料",
            onClick() {
                player['304'].fl1fuel += ((player['304'].fl1fuel*0.05)+2)*(player['304'].points.add(1).log10().div(2).add(1).toNumber())
                player['304'].fl1fuel = Math.min(player['304'].fl1fuel,player['304'].lv>=17 ? 80:120) 
            },
            unlocked() { return player['304'].Fl==1 && player['304'].started },
            canClick() { return player['304'].Fl==1 },
            style:{}
        },
        16: {
            title() { return `尝试撬锁` },
            display(){return `有${hasUpgrade("304",41)?80:50}%概率将进度增加10%`},
            onClick() {
                player['304'].fl2progress += (chooseWeightInArray([[10,hasUpgrade("304",41)?200:50],[0,50]]))
                player['304'].fl2progress = Math.min(player['304'].fl2progress,100) 
            },
            unlocked() { return player['304'].Fl==2 && player['304'].started },
            canClick() { return player['304'].Fl==2 },
            style:{}
        },
        17: {
            title() { return `检查你的回答` },
            display: "JUST DO IT.",
            onClick() {
                if(player['304'].Fl==3){
                    if(player['304'].fl3answer == player['304'].fl3answer1) player['304'].fl3trig = true
                }
                if(player['304'].Fl==7){
                    if(player['304'].fl7answer == player['304'].fl7answer1) player['304'].fl7trig = true
                }
                if(player['304'].Fl==8){
                    if(player['304'].fl8answer == player['304'].fl8cnt) player['304'].fl8trig = true
                    else{
                        if(player['304'].fl8answer > player['304'].fl8cnt) player['304'].fl8mode = 1
                        else player['304'].fl8mode = 2
                        player['304'].fl8answer = 0
                    }
                }
                if(player['304'].Fl==12){
                    if(player['304'].fl12answer == player['304'].fl12digit) player['304'].fl12trig = true
                }
            },
            unlocked() { return (player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==8||player['304'].Fl==12) && player['304'].started },
            canClick() { return player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==8||player['304'].Fl==12},
            style:{}
        },
        18: {
            title() { return `请长按我!` },
            display() {return `进度:${format(player['304'].fl4progress)}%/100%`},
            onHold() {
                player['304'].fl4progress+=(0.5+((hasUpgrade("304",43)?0.1:0.02)*player['304'].fl4progress))
                player['304'].fl4progress = Math.min(player['304'].fl4progress,100)
            },
            unlocked() { return player['304'].Fl==4 && player['304'].started },
            canClick() { return player['304'].Fl==4 },
            style(){
                if(player['304'].fl4progress>=100) return {"background-color":"#32d600","border":"5px solid #007e0d"}
            }
        },
        19: {
            title() { return `重置炸弹倒计时` },
            display() {return ``},
            onClick() {
                if(chooseOneInArray([0,1])&&player['304'].lv>=18) player['304'].fl5timeleft += 5
                else player['304'].fl5timeleft = player['304'].fl5timecap
                player['304'].fl5timeleft = Math.min(player['304'].fl5timeleft,player['304'].fl5timecap)
                player['304'].bomb5cnt++
                player['304'].bombcnt++
            },
            unlocked() { return player['304'].Fl==5 && player['304'].started },
            canClick() { return player['304'].Fl==5 },
            style(){}
        },
        21: {
            title() { return `0` },
            display: "",
            onClick() {
                if(player['304'].Fl==3){
                    player['304'].fl3answer*=10
                    player['304'].fl3answer = Math.min(Math.abs(player['304'].fl3answer),1e15)
                }
                if(player['304'].Fl==7){
                    player['304'].fl7answer*=10
                    player['304'].fl7answer = Math.min(Math.abs(player['304'].fl7answer),1e17)
                }
                if(player['304'].Fl==8){
                    player['304'].fl8answer*=10
                    player['304'].fl8answer = Math.min(Math.abs(player['304'].fl8answer),100)
                }
                if(player['304'].Fl==12){
                    player['304'].fl12answer*=10
                    player['304'].fl12answer = Math.min(Math.abs(player['304'].fl12answer),1e15)
                }
            },
            unlocked() { return (player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==8||player['304'].Fl==12) && player['304'].started },
            canClick() { return player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==12||player['304'].Fl==8 },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px"}
        },
        22: {
            title() { return `1` },
            display: "",
            onClick() {
                if(player['304'].Fl==3){
                    player['304'].fl3answer*=10
                    player['304'].fl3answer+=1
                    player['304'].fl3answer = Math.min(Math.abs(player['304'].fl3answer),1e15)
                }
                if(player['304'].Fl==7){
                    player['304'].fl7answer*=10
                    player['304'].fl7answer+=1
                    player['304'].fl7answer = Math.min(Math.abs(player['304'].fl7answer),1e17)
                }
                if(player['304'].Fl==8){
                    player['304'].fl8answer*=10
                    player['304'].fl8answer+=1
                    player['304'].fl8answer = Math.min(Math.abs(player['304'].fl8answer),100)
                }
                if(player['304'].Fl==12){
                    player['304'].fl12answer*=10
                    player['304'].fl12answer+=1
                    player['304'].fl12answer = Math.min(Math.abs(player['304'].fl12answer),1e15)
                }
            },
            unlocked() { return (player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==8||player['304'].Fl==12)&& player['304'].started },
            canClick() { return player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==12||player['304'].Fl==8 },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px"}
        },
        23: {
            title() { return `2` },
            display: "",
            onClick() {
                if(player['304'].Fl==3){
                    player['304'].fl3answer*=10
                    player['304'].fl3answer+=2
                    player['304'].fl3answer = Math.min(Math.abs(player['304'].fl3answer),1e15)
                }
                if(player['304'].Fl==7){
                    player['304'].fl7answer*=10
                    player['304'].fl7answer+=2
                    player['304'].fl7answer = Math.min(Math.abs(player['304'].fl7answer),1e17)
                }
                if(player['304'].Fl==8){
                    player['304'].fl8answer*=10
                    player['304'].fl8answer+=2
                    player['304'].fl8answer = Math.min(Math.abs(player['304'].fl8answer),100)
                }
                if(player['304'].Fl==12){
                    player['304'].fl12answer*=10
                    player['304'].fl12answer+=2
                    player['304'].fl12answer = Math.min(Math.abs(player['304'].fl12answer),1e15)
                }
            },
            unlocked() { return (player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==8||player['304'].Fl==12)&& player['304'].started },
            canClick() { return player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==12||player['304'].Fl==8 },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px"}
        },
        24: {
            title() { return `3` },
            display: "",
            onClick() {
                if(player['304'].Fl==3){
                    player['304'].fl3answer*=10
                    player['304'].fl3answer+=3
                    player['304'].fl3answer = Math.min(Math.abs(player['304'].fl3answer),1e15)
                }
                if(player['304'].Fl==7){
                    player['304'].fl7answer*=10
                    player['304'].fl7answer+=3
                    player['304'].fl7answer = Math.min(Math.abs(player['304'].fl7answer),1e17)
                }
                if(player['304'].Fl==8){
                    player['304'].fl8answer*=10
                    player['304'].fl8answer+=3
                    player['304'].fl8answer = Math.min(Math.abs(player['304'].fl8answer),100)
                }
                if(player['304'].Fl==12){
                    player['304'].fl12answer*=10
                    player['304'].fl12answer+=3
                    player['304'].fl12answer = Math.min(Math.abs(player['304'].fl12answer),1e15)
                }
            },
            unlocked() { return (player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==8||player['304'].Fl==12) && player['304'].started },
            canClick() { return player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==12||player['304'].Fl==8 },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px"}
        },
        25: {
            title() { return `4` },
            display: "",
            onClick() {
                if(player['304'].Fl==3){
                    player['304'].fl3answer*=10
                    player['304'].fl3answer+=4
                    player['304'].fl3answer = Math.min(Math.abs(player['304'].fl3answer),1e15)
                }
                if(player['304'].Fl==7){
                    player['304'].fl7answer*=10
                    player['304'].fl7answer+=4
                    player['304'].fl7answer = Math.min(Math.abs(player['304'].fl7answer),1e17)
                }
                if(player['304'].Fl==8){
                    player['304'].fl8answer*=10
                    player['304'].fl8answer+=4
                    player['304'].fl8answer = Math.min(Math.abs(player['304'].fl8answer),100)
                }
                if(player['304'].Fl==12){
                    player['304'].fl12answer*=10
                    player['304'].fl12answer+=4
                    player['304'].fl12answer = Math.min(Math.abs(player['304'].fl12answer),1e15)
                }
            },
            unlocked() { return (player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==8||player['304'].Fl==12)&& player['304'].started },
            canClick() { return player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==12||player['304'].Fl==8 },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px"}
        },
        26: {
            title() { return `5` },
            display: "",
            onClick() {
                if(player['304'].Fl==3){
                    player['304'].fl3answer*=10
                    player['304'].fl3answer+=5
                    player['304'].fl3answer = Math.min(Math.abs(player['304'].fl3answer),1e15)
                }
                if(player['304'].Fl==7){
                    player['304'].fl7answer*=10
                    player['304'].fl7answer+=5
                    player['304'].fl7answer = Math.min(Math.abs(player['304'].fl7answer),1e17)
                }
                if(player['304'].Fl==8){
                    player['304'].fl8answer*=10
                    player['304'].fl8answer+=5
                    player['304'].fl8answer = Math.min(Math.abs(player['304'].fl8answer),100)
                }
                if(player['304'].Fl==12){
                    player['304'].fl12answer*=10
                    player['304'].fl12answer+=5
                    player['304'].fl12answer = Math.min(Math.abs(player['304'].fl12answer),1e15)
                }
            },
            unlocked() { return (player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==8||player['304'].Fl==12)&& player['304'].started },
            canClick() { return player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==12||player['304'].Fl==8 },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px"}
        },
        27: {
            title() { return `6` },
            display: "",
            onClick() {
                if(player['304'].Fl==3){
                    player['304'].fl3answer*=10
                    player['304'].fl3answer+=6
                    player['304'].fl3answer = Math.min(Math.abs(player['304'].fl3answer),1e15)
                }
                if(player['304'].Fl==7){
                    player['304'].fl7answer*=10
                    player['304'].fl7answer+=6
                    player['304'].fl7answer = Math.min(Math.abs(player['304'].fl7answer),1e17)
                }
                if(player['304'].Fl==8){
                    player['304'].fl8answer*=10
                    player['304'].fl8answer+=6
                    player['304'].fl8answer = Math.min(Math.abs(player['304'].fl8answer),100)
                }
                if(player['304'].Fl==12){
                    player['304'].fl12answer*=10
                    player['304'].fl12answer+=6
                    player['304'].fl12answer = Math.min(Math.abs(player['304'].fl12answer),1e15)
                }
            },
            unlocked() { return (player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==8||player['304'].Fl==12)&& player['304'].started },
            canClick() { return player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==12||player['304'].Fl==8 },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px"}
        },
        28: {
            title() { return `7` },
            display: "",
            onClick() {
                if(player['304'].Fl==3){
                    player['304'].fl3answer*=10
                    player['304'].fl3answer+=7
                    player['304'].fl3answer = Math.min(Math.abs(player['304'].fl3answer),1e15)
                }
                if(player['304'].Fl==7){
                    player['304'].fl7answer*=10
                    player['304'].fl7answer+=7
                    player['304'].fl7answer = Math.min(Math.abs(player['304'].fl7answer),1e17)
                }
                if(player['304'].Fl==8){
                    player['304'].fl8answer*=10
                    player['304'].fl8answer+=7
                    player['304'].fl8answer = Math.min(Math.abs(player['304'].fl8answer),100)
                }
                if(player['304'].Fl==12){
                    player['304'].fl12answer*=10
                    player['304'].fl12answer+=7
                    player['304'].fl12answer = Math.min(Math.abs(player['304'].fl12answer),1e15)
                }
            },
            unlocked() { return (player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==8||player['304'].Fl==12) && player['304'].started },
            canClick() { return player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==12||player['304'].Fl==8 },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px"}
        },
        29: {
            title() { return `8` },
            display: "",
            onClick() {
                if(player['304'].Fl==3){
                    player['304'].fl3answer*=10
                    player['304'].fl3answer+=8
                    player['304'].fl3answer = Math.min(Math.abs(player['304'].fl3answer),1e15)
                }
                if(player['304'].Fl==7){
                    player['304'].fl7answer*=10
                    player['304'].fl7answer+=8
                    player['304'].fl7answer = Math.min(Math.abs(player['304'].fl7answer),1e17)
                }
                if(player['304'].Fl==8){
                    player['304'].fl8answer*=10
                    player['304'].fl8answer+=8
                    player['304'].fl8answer = Math.min(Math.abs(player['304'].fl8answer),100)
                }
                if(player['304'].Fl==12){
                    player['304'].fl12answer*=10
                    player['304'].fl12answer+=8
                    player['304'].fl12answer = Math.min(Math.abs(player['304'].fl12answer),1e15)
                }
            },
            unlocked() { return (player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==8||player['304'].Fl==12) && player['304'].started },
            canClick() { return player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==12||player['304'].Fl==8 },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px"}
        },
        31: {
            title() { return `9` },
            display: "",
            onClick() {
                if(player['304'].Fl==3){
                    player['304'].fl3answer*=10
                    player['304'].fl3answer+=9
                    player['304'].fl3answer = Math.min(Math.abs(player['304'].fl3answer),1e15)
                }
                if(player['304'].Fl==7){
                    player['304'].fl7answer*=10
                    player['304'].fl7answer+=9
                    player['304'].fl7answer = Math.min(Math.abs(player['304'].fl7answer),1e17)
                }
                if(player['304'].Fl==8){
                    player['304'].fl8answer*=10
                    player['304'].fl8answer+=9
                    player['304'].fl8answer = Math.min(Math.abs(player['304'].fl8answer),100)
                }
                if(player['304'].Fl==12){
                    player['304'].fl12answer*=10
                    player['304'].fl12answer+=9
                    player['304'].fl12answer = Math.min(Math.abs(player['304'].fl12answer),1e15)
                }
            },
            unlocked() { return (player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==8||player['304'].Fl==12) && player['304'].started },
            canClick() { return player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==12||player['304'].Fl==8 },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px"}
        },
        33: {
            title() { return `C` },
            display: "",
            onClick() {
                if(player['304'].Fl==3){
                    player['304'].fl3answer=0
                }
                if(player['304'].Fl==7){
                    player['304'].fl7answer=0
                }
                if(player['304'].Fl==8){
                    player['304'].fl8answer=0
                }
                if(player['304'].Fl==12){
                    player['304'].fl12answer=0
                }
            },
            unlocked() { return (player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==8||player['304'].Fl==12) && player['304'].started },
            canClick() { return player['304'].Fl==3||player['304'].Fl==7||player['304'].Fl==8||player['304'].Fl==12},
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px"}
        },
        42: {
            title() { return `左拧撬棒` },
            display: "",
            onClick() {
                player['304'].fl9degree-=20
            },
            unlocked() { return player['304'].Fl==9 && player['304'].started},
            canClick() { return player['304'].fl9degree>0 },
            style:{"height":"60px","min-height":"60px","width":"60px"}
        },
        43: {
            title() { return `右拧撬棒` },
            display: "",
            onClick() {
                player['304'].fl9degree+=20
            },
            unlocked() { return player['304'].Fl==9 && player['304'].started},
            canClick() { return player['304'].fl9degree<180 },
            style:{"height":"60px","min-height":"60px","width":"60px"}
        },
        44: {
            title() { return `重置毁灭炸弹倒计时` },
            display() {return ``},
            onClick() {
                if(player['304'].lv>=18&&chooseOneInArray([0,1])) player['304'].fl10timeleft += 5
                else player['304'].fl10timeleft = 30
                player['304'].fl10timeleft = Math.min(player['304'].fl10timeleft,30)
                if(hasUpgrade("304",34)) player['304'].fl5timeleft -= 1
                else player['304'].fl5timeleft -= 2
                player['304'].bombcnt++
            },
            unlocked() { return player['304'].Fl==10 && player['304'].started },
            canClick() { return player['304'].Fl==10 },
            style(){}
        },
        45: {
            title() { return `重置Floor6以获得${format(layers['304'].getfl13gain())}声望点数` },
            display() {return ``},
            onClick() {
                if(player['304'].points.lt(300)) return
                player['304'].fl13points = player['304'].fl13points.add(layers['304'].getfl13gain())
                player['304'].points = _D0
                player['304'].upgrades = player['304'].upgrades.filter(n => (n>14))
            },
            unlocked() { return player['304'].Fl==13 && player['304'].started },
            canClick() { return player['304'].Fl==13 && player['304'].points.gte(300) },
            style:{"width":"150px","border":"4px solid hsl(170,100%,50%)","color":"hsl(170,100%,50%)","background-color"(){
                if(player['304'].points.gte(300)) return "rgba(0, 255, 255, 0.25)"
                return "#00000000"
            }}
        },
        46: {
            title() { return player['304'].fl14mode == 1 ? `请长按我!`:`请点击我!` },
            display() {return `进度:${format(player['304'].fl14progress)}%/100%`},
            onClick(){
                if(player['304'].fl14mode==1) return
                player['304'].fl14progress = player['304'].fl14progress+3
                player['304'].fl14progress = Math.min(player['304'].fl14progress,100)
                if(chooseWeightInArray([[0,80],[1,20]])) player['304'].fl14mode = 1
            },
            onHold() {
                if(player['304'].fl14mode==2) return
                player['304'].fl14progress = player['304'].fl14progress+0.8
                player['304'].fl14progress = Math.min(player['304'].fl14progress,100)
                if(chooseWeightInArray([[0,90],[1,10]])) player['304'].fl14mode = 2
            },
            unlocked() { return player['304'].Fl==14 && player['304'].started },
            canClick() { return player['304'].Fl==14 },
            style(){
                if(player['304'].fl14progress>=100) return {"background-color":"#32d600","border":"5px solid #007e0d"}
                if(player['304'].fl14mode==1) return {"background-color":"#0060d6","border":"5px solid #00247e"}
                if(player['304'].fl14mode==2) return {"background-color":"#ffea00","border":"5px solid #ffa600"}
            }
        },
        47: {
            title() { return `重置十五号炸弹倒计时` },
            display() {return ``},
            onClick() {
                if(chooseOneInArray([0,1])&&player['304'].lv>=18) player['304'].fl15timeleft += 5
                else player['304'].fl15timeleft = (hasUpgrade("304",36)?36:48)
                player['304'].fl15timeleft = Math.min(player['304'].fl15timeleft,(hasUpgrade("304",36)?36:48))
                if(hasUpgrade("304",36))  player['304'].fl15pos = chooseOneInArray([11,12,13,14,15])
                else player['304'].fl15pos = chooseOneInArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
                player['304'].bombcnt++
            },
            unlocked() { return player['304'].Fl==player['304'].fl15pos && player['304'].started },
            canClick() { return player['304'].Fl==player['304'].fl15pos },
            style(){}
        },
        51: {
            title() { return `1` },
            display() {return ``},
            onClick() {
                player['304'].Fl=1
            },
            unlocked() { return player['304'].lv>=1 && player['304'].started },
            canClick() { return true },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px","border":"2px solid white","color":"#FFFFFF","background-color"(){
                if(!player['304'].lighttrig1){
                    if(chooseWeightInArray([[0,80],[1,90]])) return '#FF0000'
                    return "#00000000"
                }
                if(player['304'].fl1fuel<=20) return '#FF0000'
                return "#00000000"
            }}
        },
        52: {
            title() { return `5` },
            display() {return ``},
            onClick() {
                player['304'].Fl=5
            },
            unlocked() { return player['304'].lv>=5 && player['304'].started },
            canClick() { return true },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px","border":"2px solid white","color":"#FFFFFF","background-color"(){
                if(!player['304'].lighttrig1){
                    if(chooseWeightInArray([[0,80],[1,90]])) return '#FF0000'
                    return "#00000000"
                }
                if(player['304'].fl5timeleft<=3 && player['304'].lv>=10) return '#e100ff'
                if(player['304'].fl5timeleft<=5) return '#FF0000'
                return "#00000000"
            }}
        },
        53: {
            title() { return `10` },
            display() {return ``},
            onClick() {
                player['304'].Fl=10
            },
            unlocked() { return player['304'].lv>=10 && player['304'].started },
            canClick() { return true },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px","border":"2px solid white","color":"#FFFFFF","background-color"(){
                if(!player['304'].lighttrig1){
                    if(chooseWeightInArray([[0,80],[1,90]])) return '#FF0000'
                    return "#00000000"
                }
                if(player['304'].fl10timeleft<=5) return '#FF0000'
                return "#00000000"
            }}
        },
        54: {
            title() { return `15` },
            display() {return ``},
            onClick() {
                player['304'].Fl=15
            },
            unlocked() { return player['304'].lv>=15 && player['304'].started },
            canClick() { return true },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px","border":"2px solid white","color":"#FFFFFF","background-color"(){
                if(!player['304'].lighttrig1){
                    if(chooseWeightInArray([[0,80],[1,90]])) return '#FF0000'
                    return "#00000000"
                }
                if(player['304'].fl15timeleft<=5) return '#e100ff'
                if(player['304'].fl15timeleft<=15) return '#FF0000'
                return "#00000000"
            }}
        },
        61: {
            title() { return `重置商店升级` },
            display() {return ``},
            onClick() {
                player['304'].upgrades = []
                player['304'].shoppoints = _D(layers['304'].getshopcap())
            },
            unlocked() { return player['304'].lv>=6 && (!player['304'].started) },
            canClick() { return true },
            style:{"height":"40px","min-height":"40px","width":"150px","margin":"0px","border":"2px solid #00ffc8","color":"#00ffc8","background-color":"#00ffc875"}
        },
        71: {
            title() { return `时光流转` },
            display() {return `跳转到第${formatWhole(player['304'].Fl)}关`},
            onClick() {
                player['304'].upgrades = []
                player['304'].shoppoints = _D(layers['304'].getshopcap())
                player['304'].losetrig304 = false
                player['304'].lv = player['304'].Fl
                player['304'].shoppoints = _D(layers['304'].getshopcap())
                if(player['304'].hlv==21&&(!player['304'].fl21trig)){
                    if(player['304'].fl21code[player['304'].fl21cnt+1]==player['304'].Fl){
                        player['304'].fl21cnt++
                        if(player['304'].fl21cnt==7) player['304'].fl21trig = true
                    }else{
                        player['304'].fl21cnt=0
                        player['304'].fl21trig=false
                    }
                }
            },
            unlocked() { return player['304'].hlv>=2 && (!player['304'].started) },
            canClick() { 
                if(player['304'].Fl==0) return false
                if(player['304'].fl21cnt==6){
                    return true
                }
                return player['304'].Fl!=player['304'].hlv
            },
        },
        72: {
            title() { return `回到现在` },
            display() {return `跳转到第${formatWhole(player['304'].hlv)}关`},
            onClick() {
                player['304'].upgrades = []
                player['304'].shoppoints = _D(layers['304'].getshopcap())
                player['304'].lv = player['304'].hlv
                player['304'].shoppoints = _D(layers['304'].getshopcap())
            },
            unlocked() { return player['304'].hlv>=2 && (!player['304'].started) },
            canClick() { return player['304'].lv!=player['304'].hlv},
        },
        73: {
            title() { return `核动力熔炉` },
            display() {return `Floor1燃料不再降低`},
            onClick() {
                player['304'].wptrig[1] = !player['304'].wptrig[1]
            },
            unlocked() { return player['304'].hlv>player['304'].lv && (!player['304'].started) },
            canClick() { return player['304'].lv!=player['304'].hlv },
            style:{
                "margin":"0px",height: "100px", width: "100px", minHeight: "100px", border: "4px solid", borderColor(){
                    if (player['304'].wptrig[1]) return "#00cf0e"
                    return "#cf0000"
                }, "background-color"() {
                    if (player['304'].wptrig[1]) return "#00cf0e33"
                    return "#cf000033"
                }, "color"() {
                    if (player['304'].wptrig[1]) return "#00cf0e"
                    return "#cf0000"
                }
            }
        },
        74: {
            title() { return `固守原地` },
            display() {return `完成关卡后不进入下一关`},
            onClick() {
                player['304'].wptrig[2] = !player['304'].wptrig[2]
            },
            unlocked() { return player['304'].hlv>player['304'].lv && (!player['304'].started) },
            canClick() { return player['304'].lv!=player['304'].hlv },
            style:{
                "margin":"0px",height: "100px", width: "100px", minHeight: "100px", border: "4px solid", borderColor(){
                    if (player['304'].wptrig[2]) return "#00cf0e"
                    return "#cf0000"
                }, "background-color"() {
                    if (player['304'].wptrig[2]) return "#00cf0e33"
                    return "#cf000033"
                }, "color"() {
                    if (player['304'].wptrig[2]) return "#00cf0e"
                    return "#cf0000"
                }
            }
        },
        75: {
            title() { return `拆弹神人` },
            display() {return `熄灭5层炸弹的引线`},
            onClick() {
                player['304'].wptrig[3] = !player['304'].wptrig[3]
            },
            unlocked() { return player['304'].hlv>player['304'].lv && player['304'].lv>=5 && (!player['304'].started) },
            canClick() { return player['304'].lv!=player['304'].hlv },
            style:{
                "margin":"0px",height: "100px", width: "100px", minHeight: "100px", border: "4px solid", borderColor(){
                    if (player['304'].wptrig[3]) return "#00cf0e"
                    return "#cf0000"
                }, "background-color"() {
                    if (player['304'].wptrig[3]) return "#00cf0e33"
                    return "#cf000033"
                }, "color"() {
                    if (player['304'].wptrig[3]) return "#00cf0e"
                    return "#cf0000"
                }
            }
        },
        76: {
            title() { return `拆弹更神人` },
            display() {return `熄灭10层炸弹的引线`},
            onClick() {
                player['304'].wptrig[4] = !player['304'].wptrig[4]
            },
            unlocked() { return player['304'].hlv>player['304'].lv && player['304'].lv>=10 && (!player['304'].started) },
            canClick() { return player['304'].lv!=player['304'].hlv },
            style:{
                "margin":"0px",height: "100px", width: "100px", minHeight: "100px", border: "4px solid", borderColor(){
                    if (player['304'].wptrig[4]) return "#00cf0e"
                    return "#cf0000"
                }, "background-color"() {
                    if (player['304'].wptrig[4]) return "#00cf0e33"
                    return "#cf000033"
                }, "color"() {
                    if (player['304'].wptrig[4]) return "#00cf0e"
                    return "#cf0000"
                }
            }
        },
        77: {
            title() { return `拆弹最神人` },
            display() {return `熄灭15层炸弹的引线`},
            onClick() {
                player['304'].wptrig[5] = !player['304'].wptrig[5]
            },
            unlocked() { return player['304'].hlv>player['304'].lv && player['304'].lv>=15 && (!player['304'].started) },
            canClick() { return player['304'].lv!=player['304'].hlv },
            style:{
                "margin":"0px",height: "100px", width: "100px", minHeight: "100px", border: "4px solid", borderColor(){
                    if (player['304'].wptrig[5]) return "#00cf0e"
                    return "#cf0000"
                }, "background-color"() {
                    if (player['304'].wptrig[5]) return "#00cf0e33"
                    return "#cf000033"
                }, "color"() {
                    if (player['304'].wptrig[5]) return "#00cf0e"
                    return "#cf0000"
                }
            }
        },
        78: {
            title() { return `速算天才` },
            display() {return `显示Floor3计算的答案`},
            onClick() {
                player['304'].wptrig[6] = !player['304'].wptrig[6]
            },
            unlocked() { return player['304'].hlv>player['304'].lv && player['304'].lv>=3 && (!player['304'].started) },
            canClick() { return player['304'].lv!=player['304'].hlv },
            style:{
                "margin":"0px",height: "100px", width: "100px", minHeight: "100px", border: "4px solid", borderColor(){
                    if (player['304'].wptrig[6]) return "#00cf0e"
                    return "#cf0000"
                }, "background-color"() {
                    if (player['304'].wptrig[6]) return "#00cf0e33"
                    return "#cf000033"
                }, "color"() {
                    if (player['304'].wptrig[6]) return "#00cf0e"
                    return "#cf0000"
                }
            }
        },
        79: {
            title() { return `密码机` },
            display() {return `显示Floor7破译的答案`},
            onClick() {
                player['304'].wptrig[7] = !player['304'].wptrig[7]
            },
            unlocked() { return player['304'].hlv>player['304'].lv && player['304'].lv>=7 && (!player['304'].started) },
            canClick() { return player['304'].lv!=player['304'].hlv },
            style:{
                "margin":"0px",height: "100px", width: "100px", minHeight: "100px", border: "4px solid", borderColor(){
                    if (player['304'].wptrig[7]) return "#00cf0e"
                    return "#cf0000"
                }, "background-color"() {
                    if (player['304'].wptrig[7]) return "#00cf0e33"
                    return "#cf000033"
                }, "color"() {
                    if (player['304'].wptrig[7]) return "#00cf0e"
                    return "#cf0000"
                }
            }
        },
        81: {
            title() { return `F12` },
            display() {return `Floor6点数获取x300`},
            onClick() {
                player['304'].wptrig[8] = !player['304'].wptrig[8]
            },
            unlocked() { return player['304'].hlv>player['304'].lv && player['304'].lv>=8 && (!player['304'].started) },
            canClick() { return player['304'].lv!=player['304'].hlv },
            style:{
                "margin":"0px",height: "100px", width: "100px", minHeight: "100px", border: "4px solid", borderColor(){
                    if (player['304'].wptrig[8]) return "#00cf0e"
                    return "#cf0000"
                }, "background-color"() {
                    if (player['304'].wptrig[8]) return "#00cf0e33"
                    return "#cf000033"
                }, "color"() {
                    if (player['304'].wptrig[8]) return "#00cf0e"
                    return "#cf0000"
                }
            }
        },
        82: {
            title() { return `急迫氛围` },
            display() {return `使用第22关的背景`},
            onClick() {
                player['304'].wptrig[9] = !player['304'].wptrig[9]
            },
            unlocked() { return player['304'].hlv>player['304'].lv && player['304'].hlv>=23 && (!player['304'].started) },
            canClick() { return player['304'].lv!=player['304'].hlv },
            style:{
                "margin":"0px",height: "100px", width: "100px", minHeight: "100px", border: "4px solid", borderColor(){
                    if (player['304'].wptrig[9]) return "#00cf0e"
                    return "#cf0000"
                }, "background-color"() {
                    if (player['304'].wptrig[9]) return "#00cf0e33"
                    return "#cf000033"
                }, "color"() {
                    if (player['304'].wptrig[9]) return "#00cf0e"
                    return "#cf0000"
                }
            }
        },
        83: {
            title() { return `急迫行动` },
            display() {return `解锁第16层`},
            onClick() {
                player['304'].wptrig[10] = !player['304'].wptrig[10]
            },
            unlocked() { return player['304'].hlv>player['304'].lv && player['304'].hlv>=23 && player['304'].lv>=15 && (!player['304'].started) },
            canClick() { return player['304'].lv!=player['304'].hlv },
            style:{
                "margin":"0px",height: "100px", width: "100px", minHeight: "100px", border: "4px solid", borderColor(){
                    if (player['304'].wptrig[10]) return "#00cf0e"
                    return "#cf0000"
                }, "background-color"() {
                    if (player['304'].wptrig[10]) return "#00cf0e33"
                    return "#cf000033"
                }, "color"() {
                    if (player['304'].wptrig[10]) return "#00cf0e"
                    return "#cf0000"
                }
            }
        },
        90.1: {
            title() { return `2` },
            display() {return ``},
            onClick() {
                return
            },
            unlocked() { return player['304'].lv>=2 && player['304'].started },
            canClick() { return true },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px","border":"2px solid white","color":"#FFFFFF","background-color"(){
                if(!player['304'].lighttrig2){
                    if(chooseWeightInArray([[0,80],[1,90]])) return '#22b800'
                    return "#00000000"
                }
                if(player['304'].fl2progress==100) return '#22b800'
                return "#00000000"
            }}
        },
        90.2: {
            title() { return `3` },
            display() {return ``},
            onClick() {
                return
            },
            unlocked() { return player['304'].lv>=3 && player['304'].started },
            canClick() { return true },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px","border":"2px solid white","color":"#FFFFFF","background-color"(){
                if(!player['304'].lighttrig2){
                    if(chooseWeightInArray([[0,80],[1,90]])) return '#22b800'
                    return "#00000000"
                }
                if(player['304'].fl3trig) return '#22b800'
                return "#00000000"
            }}
        },
        90.3: {
            title() { return `4` },
            display() {return ``},
            onClick() {
                return
            },
            unlocked() { return player['304'].lv>=4 && player['304'].started },
            canClick() { return true },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px","border":"2px solid white","color":"#FFFFFF","background-color"(){
                if(!player['304'].lighttrig2){
                    if(chooseWeightInArray([[0,80],[1,90]])) return '#22b800'
                    return "#00000000"
                }
                if(player['304'].fl4progress==100) return '#22b800'
                return "#00000000"
            }}
        },
        90.4: {
            title() { return `6` },
            display() {return ``},
            onClick() {
                return
            },
            unlocked() { return player['304'].lv>=6 && player['304'].started },
            canClick() { return true },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px","border":"2px solid white","color":"#FFFFFF","background-color"(){
                if(!player['304'].lighttrig2){
                    if(chooseWeightInArray([[0,80],[1,90]])) return '#22b800'
                    return "#00000000"
                }
                if(hasUpgrade("304",14)) return '#22b800'
                return "#00000000"
            }}
        },
        90.5: {
            title() { return `7` },
            display() {return ``},
            onClick() {
                return
            },
            unlocked() { return player['304'].lv>=7 && player['304'].started },
            canClick() { return true },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px","border":"2px solid white","color":"#FFFFFF","background-color"(){
                if(!player['304'].lighttrig2){
                    if(chooseWeightInArray([[0,80],[1,90]])) return '#22b800'
                    return "#00000000"
                }
                if(player['304'].fl7trig) return '#22b800'
                return "#00000000"
            }}
        },
        90.6: {
            title() { return `8` },
            display() {return ``},
            onClick() {
                return
            },
            unlocked() { return player['304'].lv>=8 && player['304'].started },
            canClick() { return true },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px","border":"2px solid white","color":"#FFFFFF","background-color"(){
                if(!player['304'].lighttrig2){
                    if(chooseWeightInArray([[0,80],[1,90]])) return '#22b800'
                    return "#00000000"
                }
                if(player['304'].fl8trig) return '#22b800'
                return "#00000000"
            }}
        },
        90.7: {
            title() { return `9` },
            display() {return ``},
            onClick() {
                return
            },
            unlocked() { return player['304'].lv>=9 && player['304'].started },
            canClick() { return true },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px","border":"2px solid white","color":"#FFFFFF","background-color"(){
                if(!player['304'].lighttrig2){
                    if(chooseWeightInArray([[0,80],[1,90]])) return '#22b800'
                    return "#00000000"
                }
                if(player['304'].fl9progress==100) return '#22b800'
                return "#00000000"
            }}
        },
        90.8: {
            title() { return `11` },
            display() {return ``},
            onClick() {
                return
            },
            unlocked() { return player['304'].lv>=11 && player['304'].started },
            canClick() { return true },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px","border":"2px solid white","color":"#FFFFFF","background-color"(){
                if(!player['304'].lighttrig2){
                    if(chooseWeightInArray([[0,80],[1,90]])) return '#22b800'
                    return "#00000000"
                }
                if(player['304'].fl11cnt==25) return '#22b800'
                return "#00000000"
            }}
        },
        90.9: {
            title() { return `12` },
            display() {return ``},
            onClick() {
                return
            },
            unlocked() { return player['304'].lv>=12 && player['304'].started },
            canClick() { return true },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px","border":"2px solid white","color":"#FFFFFF","background-color"(){
                if(!player['304'].lighttrig2){
                    if(chooseWeightInArray([[0,80],[1,90]])) return '#22b800'
                    return "#00000000"
                }
                if(player['304'].fl12trig) return '#22b800'
                return "#00000000"
            }}
        },
        90.11: {
            title() { return `13` },
            display() {return ``},
            onClick() {
                return
            },
            unlocked() { return player['304'].lv>=13 && player['304'].started },
            canClick() { return true },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px","border":"2px solid white","color":"#FFFFFF","background-color"(){
                if(!player['304'].lighttrig2){
                    if(chooseWeightInArray([[0,80],[1,90]])) return '#22b800'
                    return "#00000000"
                }
                if(hasUpgrade("304",18)) return '#22b800'
                return "#00000000"
            }}
        },
        90.12: {
            title() { return `14` },
            display() {return ``},
            onClick() {
                return
            },
            unlocked() { return player['304'].lv>=11 && player['304'].started },
            canClick() { return true },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px","border":"2px solid white","color":"#FFFFFF","background-color"(){
                if(!player['304'].lighttrig2){
                    if(chooseWeightInArray([[0,80],[1,90]])) return '#22b800'
                    return "#00000000"
                }
                if(player['304'].fl14progress==100) return '#22b800'
                return "#00000000"
            }}
        },
        90.13: {
            title() { return `16` },
            display() {return ``},
            onClick() {
                return
            },
            unlocked() { return player['304'].lv>=22 && player['304'].started },
            canClick() { return true },
            style:{"height":"40px","min-height":"40px","width":"40px","margin":"0px","border":"2px solid white","color":"#FFFFFF","background-color"(){
                if(!player['304'].lighttrig2){
                    if(chooseWeightInArray([[0,80],[1,90]])) return '#22b800'
                    return "#00000000"
                }
                if(player['304'].fl22time>=15 && (layers['304'].getFl22trig(player['304'].fl22treq[1]) && layers['304'].getFl22trig(player['304'].fl22treq[2]) && layers['304'].getFl22trig(player['304'].fl22treq[3]))) return '#22b800'
                return "#00000000"
            }}
        },
        91: {
            title() { return `最后的挑战` },
            display() {return `<p class='p5tx'>我们必须做到,我们只能做到</p>`},
            onClick() {
                player['304'].hlv=22
                player['304'].lv=22
                player['304'].Fl=1
                player['304'].fl21trig = false
            },
            unlocked() { return player['304'].Fl==0 },
            canClick() { return player['304'].fl21trig },
            style:{
                "margin":"10px",height: "100px", width: "100px", minHeight: "100px", border: "4px solid hsla(150, 100%, 50%, 0.78)",
            }
        },
    },
    grid: {
        rows: 5,
        cols: 5,
        getStartData(id) {
            return 0;
        },
        getUnlocked(id) { // Default
            return player['304'].started && player['304'].Fl==11
        },
        getCanClick(data, id) {
            return (player['304'].started && data && player['304'].fl11cnt<data)
        },
        onClick(data, id) {
            if((data-player['304'].fl11cnt)!=1){
                player['304'].fl11cnt = 0
                if(hasUpgrade("304",46)) player['304'].fl11cnt = 9
                layers['304'].initfl11grid()
                return
            }
            player[this.layer].grid[id] = 0;
            player['304'].fl11cnt++;
        },
        getDisplay(data, id) {
            return data
        },
        getStyle(data, id) {
            if (data == 0||player['304'].fl11cnt>=data) return { "border": "3px solid", "border-color": "white", "background-color": "black" }
            return { "border": "3px solid", "border-color": "#00a2a5", "background-color": "#00ffff", "font-size": "17.5px","height":"80px","min-height":"80px","width":"80px"}
        }
    },
    
    layerShown() { return getGridData('main', this.layer) && (!options.hideWorld || !player.world[this.layer]) && (!options[`line${Math.floor(this.layer / 100)}`]) },
});