const layer10102 = 25
const upgrades10102 = {}
const upgradesformat10102 = []
const upgradescost10102 = getYanghuiTriangle(layer10102)

for (let i = 0; i < layer10102; i++) {
    upgradesformat10102.push(["row", []])
    for (let j = 0; j <= i; j++) {
        let id = xytoid(j, i)
        upgradesformat10102[i][1].push(["upgrade", id])
        upgrades10102[id] = {
            fullDisplay() {
                return `
                <span class="c2">${id}</span><br>
                <span class="c3">${formatWhole(upgradescost10102[i][j])}</span>
                `
            },
            title: id,
            cost: _D(upgradescost10102[i][j]),
            style: {
                minHeight: "32px",
                width: "56px"
            },
            canAfford() {
                if (i + j == 0) return true
                return j == 0 ?
                    hasUpgrade(10102, xytoid(j, i - 1))
                    :
                    (
                        j == i ?
                            hasUpgrade(10102, xytoid(j - 1, i - 1))
                            :
                            hasUpgrade(10102, xytoid(j, i - 1)) &&
                            hasUpgrade(10102, xytoid(j - 1, i - 1))
                    )
            },
            onPurchase() {
                player[10102].power = player[10102].power.add(1)
                player[10102].point = player[10102].point.add(this.cost)
            }
        }
    }
}

let milestones10102 = {}

for (let i = 0; i < 10; i++) {
    milestones10102[i] = {
        requirementDescription: `${formatPersent((i + 1) / 10, 0)}的升级`,
        effectDescription() {
            return `
            购买一定数量的升级来解锁这个里程碑<br>
            目标是 ${format(layers[10102].milestones[i].target)}<br>
            完成了 ${formatPersent(player[10102].power.div(this.target).clamp(0, 1))}
            ` },
        done() { return player[10102].power.gte(this.target) },
        target: _D(325 * (i + 1) / 10)
    }
    milestones10102[i + 10] = {
        requirementDescription: `${formatPersent((i + 1) / 10, 0)}的花费`,
        effectDescription() {
            return `
            花费一定数量的狐狸来解锁这个里程碑<br>
            目标是 ${format(this.target)}<br>
            完成了 ${formatPersent(player[10102].point.div(this.target).clamp(0, 1))}
            ` },
        done() { return player[10102].point.gte(this.target) },
        target: _D(33554431 * (i + 1) / 10)
    }
    milestones10102[i + 20] = {
        requirementDescription: `${formatPersent((i + 1) / 10, 0)}的速度`,
        effectDescription() {
            return `
            达到一定数量的速度来解锁这个里程碑<br>
            目标是 ${format(this.target)}<br>
            完成了 ${formatPersent(layers[10102].getPoint().div(this.target).clamp(0, 1))}
            ` },
        done() { return layers[10102].getPoint().gte(this.target) },
        target: _D(3355.4431 * (i + 1) / 10)
    }
    milestones10102[i + 30] = {
        requirementDescription: `^${formatPersent(1 - (i + 1) / 10, 0)}+1的时间`,
        effectDescription() {
            return `
            距离一定时间的目标来解锁这个里程碑<br>
            目标是 ${formatTime(this.target)}<br>
            完成了 ${this.base().lte(this.target) ? formatPersent(1) : formatPersent(this.target.log(this.base()).clamp(0, 1))}
            ` },
        done() { return this.base().lte(this.target) },
        base() { return _D(33554431).sub(player[this.layer].point).sub(player[this.layer].points).div(layers[this.layer].getPoint()) },
        target: _D(33554431 ** (1 - (i + 1) / 10)).add(1)
    }
}

function getYanghuiTriangle(columns) {
    const triangle = [];
    for (let i = 0; i < columns; i++) {
        triangle[i] = [];
        triangle[i][0] = triangle[i][i] = 1;
        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
    }
    return triangle;
}

addLayer("10102", {
    symbol: "🔺",
    resource: "狐",
    color: "#36dccb",
    update(diff) {
        if (player.pause[this.layer]) return
        player[this.layer].points = player[this.layer].points.add(layers[this.layer].getPoint().mul(diff))
    },
    getPoint() {
        return _D(3355.4431).pow(player[10102].power.div(325))
    },
    startData() {
        return {
            unlocked: true,
            points: _D0,
            power: _D0,
            point: _D0
        }
    },
    type: "none",
    tabFormat: [
        ["display-text", function () {
            return `
                你有 <h1 class="c1">${format(player[this.layer].points)}</h1> 乾狐离光<br>
                你被动地获得乾狐离光为 <h2 class="c1">${format(layers[this.layer].getPoint())}</h2> 在每/秒<br>
                `
        }],
        ["bar", "foxbar"],
        ["bar", "pointbar"],
        "blank",
        ["microtabs", "fox"],
        "blank",
        ["bar", "pointbar"],
        ["bar", "foxbar"],
        ["display-text", function () {
            return `
                你被动地获得乾狐离光为 <h2 class="c1">${format(layers[this.layer].getPoint())}</h2> 在每/秒<br>
                你有 <h1 class="c1">${format(player[this.layer].points)}</h1> 乾狐离光<br>
                `
        }],
        "blank",
    ],
    microtabs: {
        fox: {
            upgrades: {
                content: [
                    ...upgradesformat10102
                ],
                style: {
                    width: "1440px",
                }
            },
            milestones: {
                content: [
                    ["row", [
                        ["column", [
                            ["milestone", 0],
                            ["milestone", 1],
                            ["milestone", 2],
                            ["milestone", 3],
                            ["milestone", 4],
                            ["milestone", 5],
                            ["milestone", 6],
                            ["milestone", 7],
                            ["milestone", 8],
                            ["milestone", 9],
                        ]],
                        ["column", [
                            ["milestone", 10],
                            ["milestone", 11],
                            ["milestone", 12],
                            ["milestone", 13],
                            ["milestone", 14],
                            ["milestone", 15],
                            ["milestone", 16],
                            ["milestone", 17],
                            ["milestone", 18],
                            ["milestone", 19],
                        ]],
                        ["column", [
                            ["milestone", 20],
                            ["milestone", 21],
                            ["milestone", 22],
                            ["milestone", 23],
                            ["milestone", 24],
                            ["milestone", 25],
                            ["milestone", 26],
                            ["milestone", 27],
                            ["milestone", 28],
                            ["milestone", 29],
                        ]],
                        ["column", [
                            ["milestone", 30],
                            ["milestone", 31],
                            ["milestone", 32],
                            ["milestone", 33],
                            ["milestone", 34],
                            ["milestone", 35],
                            ["milestone", 36],
                            ["milestone", 37],
                            ["milestone", 38],
                            ["milestone", 39],
                        ]]
                    ]]
                ],
                style: {
                    width: "1440px",
                }
            }
        }
    },
    upgrades: upgrades10102,
    bars: {
        foxbar: {
            direction: RIGHT,
            width: 1440,
            height: 20,
            progress() {
                return player[this.layer].power / 325
            },
            display() {
                return `<span class="nmpt">${formatPersent(player[this.layer].power / 325)} - ${formatWhole(player[this.layer].power)} / ${formatWhole(325)}</span>`
            },
            fillStyle: {
                backgroundColor: "#36dccb"
            },
            instant: true
        },
        pointbar: {
            direction: RIGHT,
            width: 1440,
            height: 20,
            progress() {
                return player[this.layer].point / 33554431
            },
            display() {
                return `<span class="nmpt">${formatPersent(player[this.layer].point / 33554431)} - ${formatWhole(player[this.layer].point)} / ${formatWhole(33554431)}, 完成在 ${formatTime(player[this.layer].point.eq(33554431) ? 0 : _D(33554431).sub(player[this.layer].point).sub(player[this.layer].points).div(layers[this.layer].getPoint()))} 后</span>`
            },
            fillStyle: {
                backgroundColor: "#ccb36d"
            },
            instant: true
        }
    },
    milestones: milestones10102,
    layerShown() { return true },
    tooltip() {
        return getGameName(this.layer)
    },
});