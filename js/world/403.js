addLayer("403", {
    symbol: "",
    resource: "",
    color: "#4A7FCF",
    update(diff) {
        if (player[403].select>=layers[403].breakDown(player[403].program).length)player[403].select=layers[403].breakDown(player[403].program).length
    },
    startData() {
        return {
            unlocked: true,
            level: 0,
            scenario: 1,
            value: "",
            select: 1, //选择第几行呢
            program: [],
            // examples:
            // A: "x→y"
            // [A,B,C]: A->B->C
            // [[A,B,C]]: loop{A->B->C}
            // [[A],[B],[C]]: loop{A}->loop{B}->loop{C}
            // [[[A],B],C] loop{loop{A}->B}->C
        }
    },
    execute(c,str) { //执行一串命令
        let ret=str
        if (c===undefined) return
        if (c.length==0) return
        for (let i in c) {
            if (c[i] instanceof Array) {ret=layers[403].executeLoop(c[i],str)}
            else ret=layers[403].executeCommand(c[i],ret)
        }
        return ret
    },
    executeLoop(c,str) { //循环执行一串命令直到执行前后没有变化
        if (c.length==0)return str
        let ret=str
        while (true) {
            let mret=layers[403].execute(c,ret)
            if (mret==ret) break
            else ret=mret
        }
        return ret
    },
    executeCommand(c,str) { //执行单条命令
        let [x,y]=c.split("→")
        return str.replaceAll(x,y)
    },
    breakDown(c) {
        let r=[]
            c.forEach(i=>{
                if(i instanceof Array) {r.push("{");r=r.concat(layers[403].breakDown(i));r.push("}")}
                else r.push(i)
            })
        return r
    },
    assemble(a) {
        
    },
    type: "none",
    tabFormat: [
        ["blank","36px"],
        ["display-text",function(){return player[403].level==0?"<h1>选 关 界 面</h1><br><h3>点击以进入关卡</h3>":data403[player[403].level][0]}],
        ["blank","14px"],
        ["clickables","1"],
        ["blank","10px"],
        ["clickables","2"],
        ["blank","10px"],
        ["clickables","3"],
        ["blank","10px"],
        ["clickables","4"],
        ["clickables","5"],
        ["clickables",[100]],
        "grid",
        
    ],
    clickables: {
        11: {
            title: "<h1>◀</h1>",
            display: "返回选关界面",
            unlocked() {return player[403].level!=0},
            canClick: true,
            onClick() {player[403].level=0;player[403].program=[]},
            style() {return {"min-height":"88px","height":"88px","width":"104px","border-radius":"0px","color":"#10140A","background-color":"#F0F475","border":"4px solid #255072"}}
        },
        12: {
            title() {return ` <h2>关卡 ${player[403].level%100+4*Math.floor(player[403].level/100)-4} </h2>`},
            display() {return ` <h3>Level ${player[403].level%100+4*Math.floor(player[403].level/100)-4} </h3>`},
            unlocked() {return player[403].level!=0},
            canClick: false,
            style() {return {"min-height":"88px","height":"88px","width":"145px","border-radius":"0px","color":"#10140A","background-color":"#BFFF4F","border":"4px solid #255072"}}
        },
        24: {
            title() {return ` <h2>目标：${data403[player[403].level][2][player[403].scenario][0]} → ${data403[player[403].level][2][player[403].scenario][1]}</h2>`},
            unlocked() {return player[403].level!=0},
            canClick: false,
            style() {return {"min-height":"60px","height":"60px","width":"540px","border-radius":"1px","color":"#10140A","background-color":"#9A8FDF","border":"3px solid #295476"}}
        },
        31: {
            title() {return data403[player[403].level][1][1]},
            unlocked() {return player[403].level!=0},
            canClick: true,
            onClick() {
                return
            },
            style() {return {"min-height":"82px","height":"82px","width":"82px","border-radius":"1px","color":"#10140A","background-color":"#5A8FDF","border":"3px solid #295476"}}
        },
        32: {
            title() {return data403[player[403].level][1][2]},
            unlocked() {return player[403].level!=0},
            canClick: true,
            onClick() {
                return
            },
            style() {return {"min-height":"82px","height":"82px","width":"82px","border-radius":"1px","color":"#10140A","background-color":"#5A8FDF","border":"3px solid #295476"}}
        },
        41: {
            title() {return ` > 程序 | 第${player[403].level%100+4*Math.floor(player[403].level/100)-4}关`},
            unlocked() {return player[403].level!=0},
            canClick: false,
            style() {return {"min-height":"32px","height":"32px","width":"500px","border-radius":"0px","color":"#CCCCCF","background-color":"#030301","border":"2px solid #71717F","text-align":"left"}}
        },
        51: {
            title() {
                let text="<h2>"
                let inx=0
                let u=layers[403].breakDown(player[403].program)
                for (let i in u){
                    if (i==player[403].select&&player[403].resetTime%2<1)text+=">&nbsp;&nbsp;&nbsp;"
                    else text+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    if (u[i]=="}")inx-=6
                    text+="&nbsp;".repeat(inx)
                    if (u[i]=="{")inx+=6
                    text+=u[i]+"<br>"
                }
                return text+"</h2>"
            },
            unlocked() {return player[403].level!=0},
            canClick: false,
            style() {return {"min-height":"300px","height":"300px","width":"500px","border-radius":"0px","color":"#CCCCCF","background-color":"#030301","border":"2px solid #87889E","text-align":"left"}}
        },
        61: {
            title: "<h1>▲</h1>",
            unlocked() {return player[403].level!=0},
            style() {return {"min-height":"300px","height":"300px","width":"500px","border-radius":"0px","color":"#CCCCCF","background-color":"#030301","border":"2px solid #87889E"}}
        },
        

    },
    grid: {
        rows: 4,
        cols: 4,
        getStartData(){return false},
        getUnlocked(){return player[403].level==0},
        getCanClick(data,id){
            if (id==101) return true
            return id%100==1?getGridData(403,id-97):getGridData(403,id-1)
        },
        onClick(data,id){player[403].level=id},
        getTitle(data,id){return `<h1>${id%100+4*Math.floor(id/100)-4}</h1>`},
        getStyle(data,id){
            let bgColor="#777A7F"
            if (id==101||player[403].grid[`${id-1}`]==true) bgColor=RGBtoHEX([70,100,140].map(v=>Math.floor(v*(Math.min(1.2+0.55*Math.sin(player[403].resetTime*3),255)))))
            if (data==true) bgColor="#1E5E3E"
            return {"height":"106px","width":"106px","border":"4px solid #255072","border-radius":"3px","margin":"20px","background-color":`${bgColor}`}
        }
    },
    layerShown() { return getGridData('main', this.layer) && (!options.hideWorld || !player.world[this.layer]) },

});
