let layer10102 = 25
let upgrades10102 = {}
let upgradesformat10102 = []
let upgradescost10102 = []
let milestones10102 = {}
let defined10102 = false

if (!(defined10102)) define10102()

function define10102() {
    defined10102 = true
    upgradescost10102 = getYanghuiTriangle(layer10102)

    for (let i = 0; i < layer10102; i++) {
        upgradesformat10102.push(["row", []])
        for (let j = 0; j <= i; j++) {
            let id = xytoid(j, i)
            upgradesformat10102[i][1].push(["upgrade", id])
            upgrades10102[id] = {
                fullDisplay() {
                    return `<h3>${id}</h3><br><span>${formatWhole(upgradescost10102[i][j])}</span>`
                },
                cost: _D(upgradescost10102[i][j]),
                style: {
                    minHeight: "32px",
                    width: "56px"
                },
                canAfford() {
                    if (i + j == 0) return true
                    return j == 0 ?
                        hasUpgrade(this.layer, xytoid(j, i - 1))
                        :
                        (
                            j == i ?
                                hasUpgrade(this.layer, xytoid(j - 1, i - 1))
                                :
                                hasUpgrade(this.layer, xytoid(j, i - 1)) &&
                                hasUpgrade(this.layer, xytoid(j - 1, i - 1))
                        )
                },
                onPurchase() {
                    player[this.layer].power = player[this.layer].power.add(1)
                    player[this.layer].point = player[this.layer].point.add(this.cost)
                }
            }
        }
    }

    for (let i = 0; i < 10; i++) {
        milestones10102[i] = {
            requirementDescription: `${formatPersent((i + 1) / 10, 0)}的升级`,
            effectDescription() {
                return `
                购买一定数量的升级来解锁这个里程碑<br>
                目标是 ${format(layers[this.layer].milestones[i].target)}<br>
                完成了 ${formatPersent(player[this.layer].power.div(this.target).clamp(0, 1))}
                ` },
            done() { return player[this.layer].power.gte(this.target) },
            target: _D(325 * (i + 1) / 10),
            style: { height: "84px", width: "300px" }
        }
        milestones10102[i + 10] = {
            requirementDescription: `${formatPersent((i + 1) / 10, 0)}的花费`,
            effectDescription() {
                return `
                花费一定数量的狐狸来解锁这个里程碑<br>
                目标是 ${format(this.target)}<br>
                完成了 ${formatPersent(player[this.layer].point.div(this.target).clamp(0, 1))}
                ` },
            done() { return player[this.layer].point.gte(this.target) },
            target: _D(33554431 * (i + 1) / 10),
            style: { height: "84px", width: "300px" }
        }
        milestones10102[i + 20] = {
            requirementDescription: `${formatPersent((i + 1) / 10, 0)}的速度`,
            effectDescription() {
                return `
                达到一定数量的速度来解锁这个里程碑<br>
                目标是 ${format(this.target)}<br>
                完成了 ${formatPersent(layers[this.layer].getPoint().div(this.target).clamp(0, 1))}
                ` },
            done() { return layers[this.layer].getPoint().gte(this.target) },
            target: _D(3355.4431 * (i + 1) / 10),
            style: { height: "84px", width: "300px" }
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
            target: _D(33554431 ** (1 - (i + 1) / 10)).add(1),
            style: { height: "84px", width: "300px" }
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
}

addLayer("10102", {
    symbol: "🔺",
    resource: "乾狐离光",
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
                你有 <h1 class="nmpt">${format(player[this.layer].points)}</h1> 乾狐离光<br>
                你被动地获得乾狐离光为 <h2 class="nmpt">${format(layers[this.layer].getPoint())}</h2> 在每/秒<br>
                `
        }],
        ["bar", "foxbar"],
        ["bar", "pointbar"],
        ["microtabs", "fox"],
        ["bar", "pointbar"],
        ["bar", "foxbar"],
        ["display-text", function () {
            return `
                你被动地获得乾狐离光为 <h2 class="nmpt">${format(layers[this.layer].getPoint())}</h2> 在每/秒<br>
                你有 <h1 class="nmpt">${format(player[this.layer].points)}</h1> 乾狐离光<br>
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
                    ["row",
                        [
                            ...[0, 10, 20, 30].map(start => [
                                "column",
                                Array.from({ length: 10 }, (_, i) => ["milestone", start + i])
                            ])
                        ]
                    ]
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
                return `<span class="nmpt" style="text-shadow:1px 1px 0 #000;">${formatPersent(player[this.layer].power / 325)} - ${formatWhole(player[this.layer].power)} / ${formatWhole(325)} 升级</span>`
            },
            fillStyle: {
                backgroundColor: "#1fc922"
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
                return `<span class="nmpt" style="text-shadow:1px 1px 0 #000;">${formatPersent(player[this.layer].point / 33554431)} - ${formatWhole(player[this.layer].point)} / ${formatWhole(33554431)}, 完成在 ${formatTime(_D(33554431).sub(player[this.layer].point).sub(player[this.layer].points).div(layers[this.layer].getPoint()).clamp(0, 33554431))} 后</span>`
            },
            fillStyle: {
                backgroundColor: "#d323b0",
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