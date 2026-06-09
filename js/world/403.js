addLayer("403", {
    symbol: "",
    resource: "",
    color: "#4A7FCF",
    update(diff) {
        if (player[403].select>=player[403].program.length)player[403].select=0
        if (player[403].select<0)player[403].select=player[403].program.length-1
    },
    startData() {
        return {
            unlocked: true,
            level: 0,
            scenario: 1,
            value: "",
            select: 0,
            program: [],
            cycleCount: 0,
        }
    },
    execute(c,str) { //执行一串命令
        let ret=str
        if (c===undefined) return
        if (c.length==0) return
        for (let i in c) {
            if (c[i] instanceof Array) {ret=layers[403].executeLoop(c[i],ret)}
            else ret=layers[403].executeCommand(c[i],ret)
            if (ret=="*")return "*"
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
        if (player[403].cycleCount++>99999)return "*"
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
        let r=[],h=0,f=false,t=[]
        for (let i in a){
            if (a[i]=="") continue
            if (a[i]=="}") h--
            if (h==0&&f==true) {f=false;r.push(layers[403].assemble(t));continue}
            if (f==true) t.push(a[i])
            if (a[i]=="{") h++
            if (a[i]=="{"&&f==false) {f=true;t=[]}
            else if (f==false) r.push(a[i])
        }
        return r
    },
    milestones: {
        0: {
            requirementDescription: "完成403中的第4关",
            done() {return player[403].grid[104]==true},
            onComplete() {player.main.points=player.main.points.add(1)}
        },
        1: {
            requirementDescription: "完成403中的第8关",
            done() {return player[403].grid[204]==true},
            onComplete() {player.main.points=player.main.points.add(1)}
        },
        2: {
            requirementDescription: "完成403中的第12关",
            done() {return player[403].grid[304]==true},
            onComplete() {player.main.points=player.main.points.add(1)}
        },
        3: {
            requirementDescription: "完成403中的第16关",
            done() {return player[403].grid[404]==true},
            onComplete() {completeWorld(this.layer)}
        },
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
        ["row",[
            ["column",[
                ["clickables","6"],"blank",
                ["clickables","7"],"blank",
                ["clickables","8"],"blank",
                ["clickables","9"],
            ]],
            ["column",[
                ["clickables","4"],
                ["clickables","5"]
            ]],
        ]],
        ["blank","12px"],
        ["row",[["clickables",[3]],["clickables",[10]]]],
        "grid",
        ["blank","16px"],
        ["display-text",function(){
            if(player[403].level==0)return ""
            else return `- 运行日志 -<br>${player[403].log}`}]
    ],
    clickables: {
        11: {
            title: "<h1>◀</h1>",
            display: "- 返回选关界面 -",
            unlocked() {return player[403].level!=0},
            canClick: true,
            onClick() {player[403].level=0;player[403].program=[];player[403].log=""},
            style() {return {"min-height":"88px","height":"88px","width":"110px","border-radius":"0px","color":"#10142A","background-color":"#F0F475","border":"4px solid #255072"}}
        },
        12: {
            title() {return ` <h2>关 卡 ${player[403].level%100+4*Math.floor(player[403].level/100)-4} </h2>`},
            display() {return ` <h3>- Level ${player[403].level%100+4*Math.floor(player[403].level/100)-4} ${player[403].grid[player[403].level]==false?"":"已通过! "}-</h3>`},
            unlocked() {return player[403].level!=0},
            canClick: false,
            style() {return {"min-height":"88px","height":"88px","width":"160px","border-radius":"0px","color":"#10142A","background-color":`${player[403].grid[player[403].level]==false?"#EDDC60":"#70EF90"}`,"border":"4px solid #255072"}}
        },
        13: {
            title: "<h1>↺</h1>",
            display: "- 重试本关卡 -",
            unlocked() {return player[403].level!=0},
            canClick: true,
            onClick() {player[403].program=[];player[403].log=""},
            style() {return {"min-height":"88px","height":"88px","width":"120px","border-radius":"0px","color":"#1014A","background-color":"#A8FA77","border":"4px solid #255072"}}
        },
        14: {
            title: "<h1>▶</h1>",
            display: "- 运行测试程序 -",
            unlocked() {return player[403].level!=0},
            canClick: true,
            onClick() {
                let h=0
                let v=true
                player[403].cycleCount=0
                player[403].program.forEach(i=>{
                    if (i=="{")h++
                    if (i=="}")h--
                    if (h<0)v=false
                })
                if (v==false||h>0) player[403].log=`运行失败: 程序不合法<br>原因: 存在未闭合的循环`
                else {
                    let u=data403[player[403].level][2]
                    let p=layers[403].assemble(player[403].program)
                    let f=true
                    for (let i=1;i<=u[0];i++){
                        let r=layers[403].execute(p,u[i][0])
                        if (r=="*"){player[403].log=`${u[0]==1?"":`测试点${i}: `}程序运行超时, 自动中断`;f=false;break}
                        if (r!=u[i][1]){player[403].log=`${u[0]==1?"":`测试点${i}: `}结果与目标不匹配<br>结果: ${layers[403].execute(p,u[i][0])}<br> ≠ ${u[i][1]}`;f=false;break}
                    }
                    if (f==true){
                        makeParticles(WINWINWIN,100)
                        setGridData(403,player[403].level,true)
                        player[403].log=""
                    }
                }
            },
            style() {return {"min-height":"88px","height":"88px","width":"120px","border-radius":"0px","color":"#1014A","background-color":"#91F09F","border":"4px solid #255072"}}
        },
        21: {
            title() {return `<h2>←</h2>`},
            unlocked() {return player[403].level!=0&&data403[player[403].level][2][0]!=1},
            canClick() {return player[403].scenario>1},
            onClick() {player[403].scenario--},
            style() {return {"min-height":"35px","height":"35px","width":"38px","border-radius":"1px","color":"#10140A","background-color":"#9A8FDF","border":"1px solid #295476"}}
        },
        22: {
            title() {return `<h3>${data403[player[403].level][2][0]==1?"":`测试点 ${player[403].scenario}`} | 目标：${data403[player[403].level][2][player[403].scenario][0]} → ${data403[player[403].level][2][player[403].scenario][1]}</h3>`},
            unlocked() {return player[403].level!=0},
            canClick: false,
            style() {return {"min-height":"35px","height":"35px","width":`${data403[player[403].level][2][0]==1?"580px":"480px"}`,"border-radius":"1px","color":"#10140A","background-color":"#9A8FDF","border":"1px solid #295476"}}
        },
        23: {
            title() {return `<h2>→</h2>`},
            unlocked() {return player[403].level!=0&&data403[player[403].level][2][0]!=1},
            canClick() {return player[403].scenario<10},
            onClick() {player[403].scenario++},
            style() {return {"min-height":"35px","height":"35px","width":"38px","border-radius":"1px","color":"#10140A","background-color":"#9A8FDF","border":"1px solid #295476"}}
        },
        31: {
            title: "<h1>{</h1>",
            unlocked() {return player[403].level!=0&&data403[player[403].level][3]},
            canClick: true,
            onClick() {player[403].program.splice(++player[403].select,0,"{")},
            style() {return {"min-height":"82px","height":"82px","width":"74px","border-radius":"1px","color":"#10140A","background-color":"#5ADFC8","border":"3px solid #347486"}}            
        },
        32: {
            title: "<h1>}</h1>",
            unlocked() {return player[403].level!=0&&data403[player[403].level][3]},
            canClick: true,
            onClick() {player[403].program.splice(++player[403].select,0,"}")},
            style() {return {"min-height":"82px","height":"82px","width":"74px","border-radius":"1px","color":"#10140A","background-color":"#5ADFC8","border":"3px solid #347486"}}            
        },
        41: {
            title() {return ` > 程序 | 第${player[403].level%100+4*Math.floor(player[403].level/100)-4}关`},
            unlocked() {return player[403].level!=0},
            canClick: false,
            style() {return {"min-height":"32px","height":"32px","width":"480px","border-radius":"0px","color":"#CCCCCF","background-color":"#030301","border":"2px solid #71717F","text-align":"left"}}
        },
        51: {
            title() {
                let text="<h3>"
                let inx=0
                let u=player[403].program
                for (let i in u){
                    if (i==player[403].select&&player[403].resetTime%1<0.6)text+="⊿&nbsp;&nbsp"
                    else text+="&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp"
                    if (u[i]=="}")inx-=4
                    text+="&nbsp;".repeat(Math.max(inx,0))
                    if (u[i]=="{")inx+=4
                    text+=u[i]+"<br>"
                }
                return text+"</h3>"
            },
            unlocked() {return player[403].level!=0},
            canClick: false,
            style() {return {"min-height":"300px","height":"300px","width":"480px","border-radius":"0px","color":"#CCCCCF","background-color":"#030301","border":"2px solid #87889E","text-align":"left"}}
        },
        61: {
            title: "<h1>▲</h1>",
            unlocked() {return player[403].level!=0},
            canClick: true,
            onClick() {player[403].select--},
            style() {return {"min-height":"60px","height":"60px","width":"60px","border-radius":"0px","color":"#CCCCCF","background-color":"#405060","border":"2px solid #87889E","transform":"scale(1,1)"}}
        },
        71: {
            title: "<h1>←</h1>",
            unlocked() {return player[403].level!=0},
            canClick: true,
            onClick() {player[403].program.splice(player[403].select--,1)},
            style() {return {"min-height":"72px","height":"72px","width":"60px","border-radius":"0px","color":"#CCCCCF","background-color":"#304050","border":"2px solid #87889E","transform":"scale(1,1)"}}
        },
        81: {
            title: "<h1>+</h1>",
            unlocked() {return player[403].level!=0},
            canClick: true,
            onClick() {player[403].program.splice(++player[403].select,0,"")},
            style() {return {"min-height":"72px","height":"72px","width":"60px","border-radius":"0px","color":"#CCCCCF","background-color":"#304050","border":"2px solid #87889E","transform":"scale(1,1)"}}
        },
        91: {
            title: "<h1>▼</h1>",
            unlocked() {return player[403].level!=0},
            canClick: true,
            onClick() {player[403].select++},
            style() {return {"min-height":"60px","height":"60px","width":"60px","border-radius":"0px","color":"#CCCCCF","background-color":"#405060","border":"2px solid #87889E","transform":"scale(1,1)"}}
        },
        101: {
            title() {return data403[player[403].level][1][1]},
            unlocked() {return player[403].level!=0&&data403[player[403].level][1][0]>=1},
            canClick: true,
            onClick() {player[403].program.splice(++player[403].select,0,data403[player[403].level][1][1])},
            style() {return {"min-height":"82px","height":"82px","width":"82px","border-radius":"1px","color":"#10140A","background-color":"#5A8FDF","border":"3px solid #295476"}}
        },
        102: {
            title() {return data403[player[403].level][1][2]},
            unlocked() {return player[403].level!=0&&data403[player[403].level][1][0]>=2},
            canClick: true,
            onClick() {player[403].program.splice(++player[403].select,0,data403[player[403].level][1][2])},
            style() {return {"min-height":"82px","height":"82px","width":"82px","border-radius":"1px","color":"#10140A","background-color":"#5A8FDF","border":"3px solid #295476"}}
        },
        103: {
            title() {return data403[player[403].level][1][3]},
            unlocked() {return player[403].level!=0&&data403[player[403].level][1][0]>=3},
            canClick: true,
            onClick() {player[403].program.splice(++player[403].select,0,data403[player[403].level][1][3])},
            style() {return {"min-height":"82px","height":"82px","width":"82px","border-radius":"1px","color":"#10140A","background-color":"#5A8FDF","border":"3px solid #295476"}}
        },
        104: {
            title() {return data403[player[403].level][1][4]},
            unlocked() {return player[403].level!=0&&data403[player[403].level][1][0]>=4},
            canClick: true,
            onClick() {player[403].program.splice(++player[403].select,0,data403[player[403].level][1][4])},
            style() {return {"min-height":"82px","height":"82px","width":"82px","border-radius":"1px","color":"#10140A","background-color":"#5A8FDF","border":"3px solid #295476"}}
        },
        105: {
            title() {return data403[player[403].level][1][5]},
            unlocked() {return player[403].level!=0&&data403[player[403].level][1][0]>=5},
            canClick: true,
            onClick() {player[403].program.splice(++player[403].select,0,data403[player[403].level][1][5])},
            style() {return {"min-height":"82px","height":"82px","width":"82px","border-radius":"1px","color":"#10140A","background-color":"#5A8FDF","border":"3px solid #295476"}}
        },
        106: {
            title() {return data403[player[403].level][1][6]},
            unlocked() {return player[403].level!=0&&data403[player[403].level][1][0]>=6},
            canClick: true,
            onClick() {player[403].program.splice(++player[403].select,0,data403[player[403].level][1][6])},
            style() {return {"min-height":"82px","height":"82px","width":"82px","border-radius":"1px","color":"#10140A","background-color":"#5A8FDF","border":"3px solid #295476"}}
        },
        107: {
            title() {return data403[player[403].level][1][7]},
            unlocked() {return player[403].level!=0&&data403[player[403].level][1][0]>=7},
            canClick: true,
            onClick() {player[403].program.splice(++player[403].select,0,data403[player[403].level][1][7])},
            style() {return {"min-height":"82px","height":"82px","width":"82px","border-radius":"1px","color":"#10140A","background-color":"#5A8FDF","border":"3px solid #295476"}}
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
        onClick(data,id){player[403].level=id;player[403].scenario=data403[id][4]},
        getTitle(data,id){return `<h1>${id%100+4*Math.floor(id/100)-4}</h1>`},
        getStyle(data,id){
            let bgColor="#777A7F"
            if (id==101||player[403].grid[`${id%100==1?id-97:(id-1)}`]==true) bgColor=RGBtoHEX([70,100,140].map(v=>Math.floor(v*(Math.min(1.2+0.55*Math.sin(player[403].resetTime*3),255)))))
            if (data==true) bgColor="#1E9E7E"
            return {"height":"106px","width":"106px","border":"4px solid #45C0A2","border-radius":"3px","margin":"20px","background-color":`${bgColor}`}
        }
    },
    layerShown() { return getGridData('main', this.layer) && (!options.hideWorld || !player.world[this.layer]) },

});
