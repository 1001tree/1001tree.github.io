addLayer("404", {
    symbol: "🌙",
    resource: "Dut",
    color: "hsl(280,100%,50%)",
    startData() {
        return {
            unlocked: true,
            points: _D0,
            speed: 10,
            offset: 0,
            judge: 0,
            songid: 101,
            life: 1000,
        }
    },
    type: "none",
    tabFormat: [
        [
            "row",
            [
                [
                    "column",
                    [
                        ["display-text", function () {
                            return `
                            ${d404.e ? "游戏结束喵<br>" : ""}<br>
                            请使用单页面游玩<br>
                            得到70万分完成世界<br><br>
                            最高分数<br><h1 class="p8pt">${formatWhole(player[this.layer].points)}</h1><br><br>
                            本曲分数<br><h1 class="p8pt">${formatWhole(d404.p)}</h1><br>
                            准度 ${formatWhole(calApc())}<br>
                            绝赞 ${formatWhole(calMax())}<br>
                            连击 ${formatWhole(calCom())}<br>
                            判定 ×${format(jt404[d404.jt][6], 2)}<br>
                            满分 ${formatWhole(1100000 * jt404[d404.jt][6])}<br>
                            <br>
                            ACC<br><h2 class="p8pt">${formatPersent(calAcc())}</h2><br><br>
                            最大连击<br><h2 class="p8pt">${formatWhole(d404.mc)}</h2><br><br>
                            平均偏移<br><h2 class="p8pt">${format(calDel(), 1)}ms</h2><br><br>`
                        }],
                        ["display-text", function () {
                            return `流速 ${player[this.layer].speed}`
                        }],
                        ["slider", ["speed", 3, 25]],
                        ["display-text", function () {
                            return `延迟 ${player[this.layer].offset}`
                        }],
                        ["slider", ["offset", -300, 300]],
                        "blank",
                        ["clickable", 11],
                        ["clickable", 12],
                    ]
                ],
                [
                    "column",
                    [
                        [
                            "raw-html",
                            '<canvas id="c404" width="720" height="780" style="background-color: #000;"></canvas>'
                        ],
                        [
                            "raw-html",
                            '<div style="width:900px;height:0;"></div>'
                        ],
                        ["display-text", function () {
                            return `
                            歌曲 <span class="p8pt">${meta.singer} - ${meta.name}</span><br>
                            谱师 <span class="p8pt">${meta.charter}</span>`
                        }],
                    ]
                ],
                [
                    "column",
                    [
                        ["display-text", function () {
                            return `
                            LIFE<br><h1 class="p8pt">${formatWhole(player[this.layer].life)}</h1><br><br>
                            ${getText(0)}(${formatPersent(w404[0])})<br><h2 class="p8pt">${formatWhole(d404.j[0])}</h2><br><br>
                            ${getText(1)}(${formatPersent(w404[1])})<br><h2 class="p8pt">${formatWhole(d404.j[1])}</h2><br><br>
                            ${getText(2)}(${formatPersent(w404[2])})<br><h2 class="p8pt">${formatWhole(d404.j[2])}</h2><br><br>
                            ${getText(3)}(${formatPersent(w404[3])})<br><h2 class="p8pt">${formatWhole(d404.j[3])}</h2><br><br>
                            ${getText(4)}(${formatPersent(w404[4])})<br><h2 class="p8pt">${formatWhole(d404.j[4])}</h2><br><br>
                            ${getText(5)}(${formatPersent(w404[5])})<br><h2 class="p8pt">${formatWhole(d404.j[5])}</h2><br><br>
                            FAST<br><h2 class="p8pt">${formatWhole(d404.j[6])}</h2><br>
                            SLOW<br><h2 class="p8pt">${formatWhole(d404.j[7])}</h2>`
                        }],
                        "blank",
                        ["clickable", 21],
                        ["clickable", 22],
                        ["clickable", 23],
                    ]
                ],
            ]
        ],
        ["blank", "50px"],
        ["display-text", function () {
            return `<h1>选曲</h1>`
        }],
        "blank",
        ["display-text", function () {
            return `<h2>DST</h2>`
        }],
        ["clickables", [10]],
        "blank",
        ["display-text", function () {
            return `<h2>PLT</h2>`
        }],
        ["clickables", [20]],
        "blank",
        ["display-text", function () {
            return `<h2>STR</h2>`
        }],
        ["clickables", [30]],
        "blank",
        ["display-text", function () {
            return `<h2>GLX</h2>`
        }],
        ["clickables", [40]],
        ["blank", "50px"],
    ],
    clickables: {
        11: {
            title: "开始游戏",
            display: "退出该页面会导致游戏中止<br>推荐暂停其他游戏以获得流畅体验",
            onClick() {
                d404.e = false
                d404.s = true
                d404.st = Date.now()
                resetChart(true)
            },
            canClick() { return true },
            style() {
                return {
                    width: "200px",
                    minHeight: "75px",
                    height: "75px",
                    backgroundColor: "#DDD"
                }
            }
        },
        12: {
            title: "结束游戏",
            display: "如果游戏结束歌还在播放,请点我",
            onClick() {
                d404.u = false
                d404.s = false
                resetChart(false)
            },
            canClick() { return true },
            style() {
                return {
                    width: "200px",
                    minHeight: "75px",
                    height: "75px",
                    backgroundColor: "#DDD"
                }
            }
        },
        21: {
            title: "初始设置",
            display: "重置流速和延迟",
            onClick() {
                player[404].speed = 10
                player[404].offset = 0
            },
            canClick() { return true },
            style() {
                return {
                    width: "200px",
                    minHeight: "60px",
                    height: "60px",
                    backgroundColor: "#DDD"
                }
            }
        },
        22: {
            title: "判定",
            display() {
                if (player[this.layer].judge == 0) return "普判(×1.00)<br>常规判定"
                else if (player[this.layer].judge == 1) return "宽判(×0.75)<br>将无法获得FOX,且BAD判定范围更大"
                else if (player[this.layer].judge == 2) return "严判(×1.25)<br>去除FoX,但判定更严格"
                else if (player[this.layer].judge == 3) return "糊判(×0.10)<br>打到就是FOX"
                return "你把判定改炸了,朋友"
            },
            onClick() {
                if (player[this.layer].judge == 1) {
                    player[this.layer].judge = 2
                    return
                }
                else if (player[this.layer].judge == 2) {
                    player[this.layer].judge = 3
                    return
                }
                else if (player[this.layer].judge == 3) {
                    player[this.layer].judge = 0
                    return
                }
                player[this.layer].judge = 1
            },
            canClick() { return !d404.s },
            style() {
                return {
                    width: "200px",
                    minHeight: "60px",
                    height: "60px",
                    backgroundColor: "#DDD"
                }
            }
        },
        23: {
            title: "AUTO",
            display: "不计分,不可关闭<br>除非结束游戏",
            onClick() {
                d404.u = true
            },
            canClick() { return !d404.u },
            style() {
                return {
                    width: "200px",
                    minHeight: "60px",
                    height: "60px",
                    backgroundColor: "#DDD"
                }
            }
        },
        //dst
        101: {
            title: "DST- Introduction<br>ᐇ",
            display: "W/",
            onClick() {
                player[this.layer].songid = this.id
            },
            canClick() { return !d404.s },
            style() {
                return {
                    width: "640px",
                    minHeight: "80px",
                    height: "80px",
                    backgroundColor: player[this.layer].songid == this.id ? "#EEE" : "#888",
                    display: "inline-block",
                    fontSize: "14px",
                    clipPath: "polygon(0% 50%,6% 100%,94% 100%,100% 50%,94% 0%,6% 0%)"
                }
            }
        },
        102: {
            title: "DST+ wh~aooltz<br>Waltz in 21edo",
            display: "Deister Orchestra",
            onClick() {
                player[this.layer].songid = this.id
            },
            canClick() { return !d404.s },
            style() {

                return {
                    width: "640px",
                    minHeight: "80px",
                    height: "80px",
                    backgroundColor: player[this.layer].songid == this.id ? "#EEE" : "#888",
                    display: "inline-block",
                    fontSize: "14px",
                    clipPath: "polygon(0% 50%,6% 100%,94% 100%,100% 50%,94% 0%,6% 0%)"
                }
            }
        },
        103: {
            title: "DST? 0.704545<br>dropdead[光敏性癫痫预警]",
            display: "Frums",
            onClick() {
                player[this.layer].songid = this.id
            },
            canClick() { return !d404.s },
            style() {

                return {
                    width: "640px",
                    minHeight: "80px",
                    height: "80px",
                    backgroundColor: player[this.layer].songid == this.id ? "#EEE" : "#888",
                    display: "inline-block",
                    fontSize: "14px",
                    clipPath: "polygon(0% 50%,6% 100%,94% 100%,100% 50%,94% 0%,6% 0%)"
                }
            }
        },
        //plt
        201: {
            title: "PLT GOOD SLEEPER<br>groove 33edo",
            display: "Deister Orchestra",
            onClick() {
                player[this.layer].songid = this.id
            },
            canClick() { return !d404.s },
            style() {

                return {
                    width: "640px",
                    minHeight: "80px",
                    height: "80px",
                    backgroundColor: player[this.layer].songid == this.id ? "#EEE" : "#888",
                    display: "inline-block",
                    fontSize: "14px",
                    clipPath: "polygon(0% 50%,6% 100%,94% 100%,100% 50%,94% 0%,6% 0%)"
                }
            }
        },
        202: {
            title: "PLT+ BBLLET<br>Crush Everyone",
            display: "The Quick Brown Fox",
            onClick() {
                player[this.layer].songid = this.id
            },
            canClick() { return !d404.s },
            style() {

                return {
                    width: "640px",
                    minHeight: "80px",
                    height: "80px",
                    backgroundColor: player[this.layer].songid == this.id ? "#EEE" : "#888",
                    display: "inline-block",
                    fontSize: "14px",
                    clipPath: "polygon(0% 50%,6% 100%,94% 100%,100% 50%,94% 0%,6% 0%)"
                }
            }
        },
        203: {
            title: "PLT+ jack<br>Dragon Rider",
            display: "Two Steps From Hell",
            onClick() {
                player[this.layer].songid = this.id
            },
            canClick() { return !d404.s },
            style() {

                return {
                    width: "640px",
                    minHeight: "80px",
                    height: "80px",
                    backgroundColor: player[this.layer].songid == this.id ? "#EEE" : "#888",
                    display: "inline-block",
                    fontSize: "14px",
                    clipPath: "polygon(0% 50%,6% 100%,94% 100%,100% 50%,94% 0%,6% 0%)"
                }
            }
        },
        //str
        301: {
            title: "STR JACK<br>やっぱりみゃー姉なんばーわん",
            display: "長江里加",
            onClick() {
                player[this.layer].songid = this.id
            },
            canClick() { return !d404.s },
            style() {

                return {
                    width: "640px",
                    minHeight: "80px",
                    height: "80px",
                    backgroundColor: player[this.layer].songid == this.id ? "#EEE" : "#888",
                    display: "inline-block",
                    fontSize: "14px",
                    clipPath: "polygon(0% 50%,6% 100%,94% 100%,100% 50%,94% 0%,6% 0%)"
                }
            }
        },
        302: {
            title: "STR J~A~C~K<br>unforeseen dream scenarios that glorify the beauty of a vacuum cleaner",
            display: "Rory in early 20s、Shizuma Lietova",
            onClick() {
                player[this.layer].songid = this.id
            },
            canClick() { return !d404.s },
            style() {
                return {
                    width: "640px",
                    minHeight: "80px",
                    height: "80px",
                    backgroundColor: player[this.layer].songid == this.id ? "#EEE" : "#888",
                    display: "inline-block",
                    fontSize: "10px",
                    clipPath: "polygon(0% 50%,6% 100%,94% 100%,100% 50%,94% 0%,6% 0%)"
                }
            }
        },
        303: {
            title: "STR Challenge<br>Agni7EEE",
            display: "SKYLINE/RUNAWAYPLAN",
            onClick() {
                player[this.layer].songid = this.id
            },
            canClick() { return !d404.s },
            style() {
                return {
                    width: "640px",
                    minHeight: "80px",
                    height: "80px",
                    backgroundColor: player[this.layer].songid == this.id ? "#EEE" : "#888",
                    display: "inline-block",
                    fontSize: "14px",
                    clipPath: "polygon(0% 50%,6% 100%,94% 100%,100% 50%,94% 0%,6% 0%)"
                }
            }
        },
        //glx
        401: {
            title: "GLX SUPERJJJJACK<br>None Shall Live",
            display: "Thomas Bergersen",
            onClick() {
                player[this.layer].songid = this.id
            },
            canClick() { return !d404.s },
            style() {

                return {
                    width: "640px",
                    minHeight: "80px",
                    height: "80px",
                    backgroundColor: player[this.layer].songid == this.id ? "#EEE" : "#888",
                    display: "inline-block",
                    fontSize: "14px",
                    clipPath: "polygon(0% 50%,6% 100%,94% 100%,100% 50%,94% 0%,6% 0%)"
                }
            }
        },
    },
    layerShown() { return getGridData('main', this.layer) && (!options.hideWorld || !player.world[this.layer]) },
    hotkeys: [
        {
            key: "z",
            description: "[404] Z: 轨道一",
            onPress() { clickTrack(0) },
            unlocked() { return getGridData('main', this.layer) }
        },
        {
            key: "x",
            description: "[404] X: 轨道二",
            onPress() { clickTrack(1) },
            unlocked() { return getGridData('main', this.layer) }
        },
        {
            key: "n",
            description: "[404] N: 轨道三",
            onPress() { clickTrack(2) },
            unlocked() { return getGridData('main', this.layer) }
        },
        {
            key: "m",
            description: "[404] M: 轨道四",
            onPress() { clickTrack(3) },
            unlocked() { return getGridData('main', this.layer) }
        },
    ],
});

let to404
let i404 = null

let crt = []
let meta = { name: "曲名", singer: "曲师", charter: "谱师", count: 1, delay: 0 }
let effect = { s: 1, d: 0, n: [] }
let loeff = []

const d404 = {
    u: false,
    e: false,
    s: false,
    jt: 0,
    t: Date.now(),
    st: Date.now(),
    tt: 0,
    a: {
        0: 0,
        1: 0,
        2: 0,
        3: 0
    },
    p: 0,
    mp: 0,
    j: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    d: [
        0, 0
    ],
    c: 0,
    mc: 0,
    m: {
        i: 0,
        t: 0
    },
    ap: true,
    fc: true
}

const note = {
    0: [],
    1: [],
    2: [],
    3: []
}

const w404 = [
    1,
    0.99,
    0.6,
    0.2,
    -1,
    0,
]

const jt404 = [
    [
        70,
        140,
        210,
        280,
        350,
        -280,
        1
    ],
    [
        -1,
        135,
        200,
        300,
        500,
        -500,
        0.75
    ],
    [
        50,
        -1,
        120,
        160,
        240,
        -160,
        1.25
    ],
    [
        300,
        -1,
        -1,
        -1,
        -1,
        -300,
        0.1
    ]
]

function endGame() {
    d404.e = true
    d404.s = false
    if (!d404.u) {
        d404.mp = Math.max(d404.p, d404.mp)
        player[404].points = Math.max(d404.mp, player[404].points)
        if (d404.mp > 700000 && !player.world[404]) completeWorld(404)
    }
    d404.u = false
}

function calAcc() {
    const j = d404.j
    let nc = 0
    let wc = 0
    for (let i = 0; i < 6; i++) {
        nc += j[i]
        wc += j[i] * w404[i];
    }
    if (nc == 0) {
        return 0
    }
    return wc / nc
}

function calDel() {
    if (d404.d[0] == 0) return 0
    return d404.d[1] / d404.d[0]
}

function calApc() {
    const j = d404.j
    let wc = 0
    for (let i = 0; i < 6; i++) {
        wc += j[i] * w404[i];
    }
    return wc / meta.count * 800000
}

function calMax() {
    return d404.j[0] / meta.count * 200000
}

function calCom() {
    return d404.mc / meta.count * 100000
}

function addj(i) {
    d404.j[i]++
    if (i > 1) d404.ap = false
    if (i < 4) {
        d404.c++
        d404.mc = Math.max(d404.c, d404.mc)
    } else {
        d404.c = 0
        d404.fc = false
    }
    d404.p = d404.u ? -(1100000 * jt404[d404.jt][6]) : (calApc() + calMax() + calCom()) * jt404[player[404].judge][6]

    let b
    if (i == 0) {
        b = 3
    } else if (i == 1) {
        b = 1
    } else if (i == 2) {
        b = -3
    } else if (i == 3) {
        b = -5
    } else if (i == 4) {
        b = -15
    } else {
        b = -25
    }

    player[404].life = Math.min(1000, player[404].life + b)

    d404.m.i = i
    d404.m.t = 1
}

function getRGB(i, t) {
    let g = [
        "rgba(238,185,120,",
        "rgba(226,190,145,",
        "rgba(167,232,135,",
        "rgba(115,210,188,",
        "rgba(119,22,136,",
        "rgba(150,25,54,"
    ][i]

    return g + t + ")"
}

function getText(i) {
    if (i < 0) return ""
    return [
        "FOX",
        "FoX",
        "ACC",
        "OFF",
        "BAD",
        "ERR"
    ][i]
}

function resetChart(sop) {
    crt = []
    meta = { name: "曲名", singer: "曲师", charter: "谱师", count: 1, delay: 0 }
    window.trackPlayer.setSong(player[404].songid, false)
    for (i in note) {
        note[i] = []
        d404.a[i] = 0
    }
    for (i in d404.j) {
        d404.j[i] = 0
    }
    effect = { s: 1, d: 0, n: [] }
    loeff = []
    d404.d[0] = 0
    d404.d[1] = 0
    d404.p = 0
    d404.m.i = -1
    d404.c = 0
    d404.mc = 0
    d404.jt = player[404].judge
    d404.ap = true
    d404.fc = true
    player[404].life = 1000
    if (sop) {
        fetch(`./resources/chart/track${player[404].songid}.json`)
            .then(response => response.json())
            .then(data => {
                crt = [...data.note]
                meta = data.meta
                effect = typeof data.effect == 'undefined' ? { s: 1, d: 0, n: [] } : { s: 1, d: 0, n: [...data.effect] }
                loeff = []
                to404 = setTimeout(() => { window.trackPlayer.setSong(player[404].songid, true) }, 3000)
            });
    }
}

function getTime() {
    let t = window.trackPlayer.getTime() * 1000
    if (!t) {
        return Math.min(-3000 + d404.t - d404.st, 0)
    } else return t

}

function clickTrack(t) {
    d404.a[t] = 1
    let jt = jt404[player[404].judge]

    if (note[t].length == 0) return
    let dt = note[t][0].t - d404.tt
    let fs = dt > 0
    let dl = dt
    dt = Math.abs(dt)

    if (dt < jt[0]) {
        addj(0)
        note[t].shift()
    }
    else if (dt < jt[1]) {
        addj(1)
        note[t].shift()
    }
    else if (dt < jt[2]) {
        calfs(fs)
        addj(2)
        note[t].shift()
    }
    else if (dt < jt[3]) {
        calfs(fs)
        addj(3)
        note[t].shift()
    }
    else if (dt < jt[4]) {
        addj(4)
        note[t].shift()
    }
    else return
    d404.d[0]++
    d404.d[1] += dl

    function calfs(a) {
        a ? d404.j[6]++ : d404.j[7]++
    }
}

function g404() {
    try {
        var c404 = document.getElementById('c404')
        var t404 = c404.getContext('2d')
    } catch { return }

    let t = Date.now() - d404.t
    d404.t = Date.now()

    if (t > 500 && d404.s) { d404.s = false; clickClickable(404, 12); alert("异常:刻间隔过长,已自动结束游戏"); }
    if (player[404].life < 0) {
        window.trackPlayer.setSong(player[404].songid, false)
        endGame()
    }

    let w = 720
    let h = 780

    const g1 = t404.createLinearGradient(0, 0, 0, h - 30)
    g1.addColorStop(0, '#FFFFFF22')
    g1.addColorStop(0.7, '#FFFFFFBB')
    g1.addColorStop(1, '#FFF')

    const g2 = t404.createLinearGradient(0, 0, 0, h - 30)
    g2.addColorStop(0, '#FFFFFF00')
    g2.addColorStop(0.8, '#FFFFFF33')
    g2.addColorStop(1, '#FFFFFF66')

    t404.clearRect(0, 0, w, h)

    t404.font = "80px Angus"
    t404.fillStyle = '#FFFFFF33'
    t404.textAlign = "center";
    t404.fillText("Z", 120, h - 60)
    t404.fillText("X", 280, h - 60)
    t404.fillText("N", 440, h - 60)
    t404.fillText("M", 600, h - 60)

    t404.lineWidth = 6
    t404.strokeStyle = '#FFFFFF66'
    t404.lineCap = "butt"

    t404.beginPath()
    t404.moveTo(60, h - 30)
    t404.lineTo(180, h - 30)
    t404.moveTo(220, h - 30)
    t404.lineTo(340, h - 30)
    t404.moveTo(380, h - 30)
    t404.lineTo(500, h - 30)
    t404.moveTo(540, h - 30)
    t404.lineTo(660, h - 30)
    t404.stroke()

    t404.lineWidth = 8
    t404.strokeStyle = g1
    t404.lineCap = "square"

    t404.beginPath()
    t404.moveTo(60, 0)
    t404.lineTo(60, h - 30)
    t404.moveTo(180, 0)
    t404.lineTo(180, h - 30)
    t404.moveTo(220, 0)
    t404.lineTo(220, h - 30)
    t404.moveTo(340, 0)
    t404.lineTo(340, h - 30)
    t404.moveTo(380, 0)
    t404.lineTo(380, h - 30)
    t404.moveTo(500, 0)
    t404.lineTo(500, h - 30)
    t404.moveTo(540, 0)
    t404.lineTo(540, h - 30)
    t404.moveTo(660, 0)
    t404.lineTo(660, h - 30)
    t404.stroke()

    t404.strokeStyle = g2
    t404.lineCap = "butt"
    for (let i = 0; i < 4; i++) {
        d404.a[i] = Math.max(0, d404.a[i] - t / 333)

        let l = d404.a[i] ** 0.5 * 120
        if (l == 0) continue

        t404.lineWidth = l
        t404.beginPath()
        t404.moveTo(120 + i * 160, 0)
        t404.lineTo(120 + i * 160, h - 33)
        t404.stroke()
    }

    if (d404.s) {
        const offset = meta.delay + player[404].offset / 1

        d404.tt = getTime() + offset
        let time = d404.tt
        let show = time + effect.d


        if (loeff.length != 0) {
            let del = []

            for (i in loeff) {
                if (typeof loeff[i].s != 'undefined') {
                    effect.s = loeff[i].s +
                        (loeff[i].es - loeff[i].s) *
                        (time - loeff[i].t) /
                        (loeff[i].et - loeff[i].t)
                }
                if (typeof loeff[i].d != 'undefined') {
                    effect.d = loeff[i].d +
                        (loeff[i].ed - loeff[i].d) *
                        (time - loeff[i].t) /
                        (loeff[i].et - loeff[i].t)
                }
                if (loeff[i].et - time < 4) {
                    if (loeff[i].es) effect.s = loeff[i].es
                    if (loeff[i].ed) effect.d = loeff[i].ed
                    del.push(i)
                }
            }

            if (del.length != 0) {
                del.sort((a, b) => b - a).forEach(i => {
                    if (i >= 0 && i < loeff.length) {
                        loeff.splice(i, 1);
                    }
                })
            }
        }

        if (effect.n.length != 0) {
            if (effect.n[0].t - time < 4) {
                if (typeof effect.n[0].et != 'undefined') {
                    loeff.push(effect.n[0])
                    effect.n.shift()
                } else {
                    if (typeof effect.n[0].s != 'undefined') effect.s = effect.n[0].s
                    if (typeof effect.n[0].d != 'undefined') effect.d = effect.n[0].d
                    effect.n.shift()
                }
            }
        }

        const speed = effect.s * player[404].speed / 10
        const gap = Math.max(500, (h - 30) / speed + 50)
        
        while (crt.length == 0 ? false : crt[0].t < time + gap) {
            note[crt[0].c].push(crt[0])
            crt.shift()
        }

        t404.fillStyle = '#D8D8D8'
        for (let i = 0; i < 4; i++) {
            if (note[i].length == 0) continue
            for (let j = 0; j < note[i].length; j++) {
                t404.fillRect(64 + i * 160, (h - 65) - (note[i][j].t - show) * speed, 112, 35);
            }
            if (note[i].length == 0) continue
            if (d404.u) {
                if (note[i][0].t - time < 4) {
                    clickTrack(i)
                }
            }
            if (note[i].length == 0) continue
            if (note[i][0].t - time < jt404[player[404].judge][5]) {
                note[i].shift()
                addj(5)
            }
        }
    }

    t404.font = "64px Angus"
    t404.fillStyle = `hsl(${(Date.now() / 100) % 360},50%,70%)`
    t404.fillText(d404.u ? "AUTO" : d404.c, 360, 320)

    t404.fillStyle = `#666`
    t404.fillRect(200, 330, 320, 7)
    t404.fillRect(200, 344, 320, 7)
    t404.fillStyle = `#444`
    t404.fillRect(200, 337, 320, 7)
    t404.fillStyle = `#EEE`
    t404.fillRect(200, 330, window.trackPlayer.getProgress() * 320, 7)
    if (d404.p > 0) {
        t404.fillStyle = d404.ap ? `#F80` : (d404.fc ? "#99F" : "#CCC")
        t404.fillRect(200, 337, (d404.p / (1100000 * jt404[d404.jt][6])) * 320, 7)
    } else {
        t404.fillStyle = "#F99"
        t404.fillRect(200, 337, (-d404.p / (1100000 * jt404[d404.jt][6])) * 320, 7)
    }
    t404.fillStyle = `#F44`
    t404.fillRect(200, 344, (Math.max(player[404].life, 0) / 1000) * 320, 7)

    t404.font = "100px Angus"
    t404.fillStyle = getRGB(d404.m.i, d404.m.t)
    t404.textAlign = "center"
    t404.fillText(getText(d404.m.i), 360, 430)
    d404.m.t = Math.max(0, d404.m.t - t / 750)

}