const layer10103 = 20
const upgrades10103 = {}
const upgradesformat10103 = []
const upgradescost10103 = getDelannoyMatrix(layer10103)

for (let i = 0; i < layer10103; i++) {
    upgradesformat10103.push(["row", []])
    for (let j = 0; j < layer10103; j++) {
        let id = xytoid(j, i)
        upgradesformat10103[i][1].push(["upgrade", id])
        upgrades10103[id] = {
            fullDisplay() {
                return `<h3>${id}</h3><br><span>${formatWhole(upgradescost10103[i][j])}</span>`
            },
            title: id,
            cost: _D(upgradescost10103[i][j]),
            style: {
                minHeight: "34px",
                width: "67px"
            },
            canAfford() {
                if (i + j == 0) return true
                return j == 0 ?
                    hasUpgrade(10103, xytoid(j, i - 1))
                    :
                    (
                        i == 0 ?
                            hasUpgrade(10103, xytoid(j - 1, i))
                            :
                            hasUpgrade(10103, xytoid(j, i - 1)) &&
                            hasUpgrade(10103, xytoid(j - 1, i))
                    )
            },
            onPurchase() {
                player[10103].power = player[10103].power.add(1)
                player[10103].point = player[10103].point.add(this.cost)
                player[10103].buy[0][i] = player[10103].buy[0][i].add(1)
                player[10103].buy[1][j] = player[10103].buy[1][j].add(1)
            }
        }
    }
}

let milestones10103 = {}

for (let i = 0; i < 10; i++) {
    milestones10103[i] = {
        requirementDescription: `${formatPersent((i + 1) / 10, 0)}的升级`,
        effectDescription() {
            return `
            购买一定数量的升级解锁<br>
            目标是 ${format(layers[10103].milestones[i].target)}<br>
            完成了 ${formatPersent(player[10103].power.div(this.target).clamp(0, 1))}
            ` },
        done() { return player[10103].power.gte(this.target) },
        onComplete() { player[10103].milestone = player[10103].milestone.add(1) },
        target: _D(400 * (i + 1) / 10),
        style: { height: "104px", width: "244px" }
    }
    milestones10103[i + 10] = {
        requirementDescription: `^${formatPersent((i + 1) / 10, 0)}的花费`,
        effectDescription() {
            return `
            花费一定数量的UI解锁<br>
            目标是 ${format(this.target)}<br>
            完成了 ${formatPersent(player[10103].point.div(this.target).clamp(0, 1))}
            ` },
        done() { return player[10103].point.gte(this.target) },
        onComplete() { player[10103].milestone = player[10103].milestone.add(1) },
        target: _D(130271906898720 ** ((i + 1) / 10)),
        style: { height: "104px", width: "244px" }
    }
    milestones10103[i + 20] = {
        requirementDescription: `^${formatPersent(1 - (i + 1) / 10, 0)}+1的时间`,
        effectDescription() {
            return `
            距离一定时间的目标解锁<br>
            目标是 ${formatTime(this.target)}<br>
            完成了 ${this.base().lte(this.target) ? formatPersent(1) : formatPersent(this.target.log(this.base()).clamp(0, 1))}
            ` },
        done() { return this.base().lte(this.target) },
        onComplete() { player[10103].milestone = player[10103].milestone.add(1) },
        base() { return _D(130271906898720).sub(player[this.layer].point).sub(player[this.layer].points).div(layers[this.layer].getPoint()) },
        target: _D(130271906898720 ** (1 - (i + 1) / 10)).add(1),
        style: { height: "104px", width: "244px" }
    }
    milestones10103[i + 30] = {
        requirementDescription() { return `${formatWhole(i + 1)}行完成!` },
        effectDescription() {
            return `
            完成第${formatWhole(i + 1)}行来解锁这个里程碑<br>
            目标是 ${formatWhole(this.target)}<br>
            完成了 ${formatPersent(player[10103].buy[0][i].div(this.target).clamp(0, 1))}
            ` },
        done() { return this.base() == this.target },
        onComplete() { player[10103].milestone = player[10103].milestone.add(1) },
        base() { return player[10103].buy[0][i] },
        target: layer10103,
        style: { height: "104px", width: "132px" }
    }
    milestones10103[i + 40] = {
        requirementDescription() { return `${formatWhole(i + 11)}行完成!` },
        effectDescription() {
            return `
            完成第${formatWhole(i + 11)}行来解锁这个里程碑<br>
            目标是 ${formatWhole(this.target)}<br>
            完成了 ${formatPersent(player[10103].buy[0][i + 10].div(this.target).clamp(0, 1))}
            ` },
        done() { return this.base() == this.target },
        onComplete() { player[10103].milestone = player[10103].milestone.add(1) },
        base() { return player[10103].buy[0][i + 10] },
        target: layer10103,
        style: { height: "104px", width: "132px" }
    }
    milestones10103[i + 50] = {
        requirementDescription() { return `${formatWhole(i + 1)}列完成!` },
        effectDescription() {
            return `
            完成第${formatWhole(i + 1)}列来解锁这个里程碑<br>
            目标是 ${formatWhole(this.target)}<br>
            完成了 ${formatPersent(player[10103].buy[1][i].div(this.target).clamp(0, 1))}
            ` },
        done() { return this.base() == this.target },
        onComplete() { player[10103].milestone = player[10103].milestone.add(1) },
        base() { return player[10103].buy[1][i] },
        target: layer10103,
        style: { height: "104px", width: "132px" }
    }
    milestones10103[i + 60] = {
        requirementDescription() { return `${formatWhole(i + 11)}列完成!` },
        effectDescription() {
            return `
            完成第${formatWhole(i + 11)}列来解锁这个里程碑<br>
            目标是 ${formatWhole(this.target)}<br>
            完成了 ${formatPersent(player[10103].buy[1][i + 10].div(this.target).clamp(0, 1))}
            ` },
        done() { return this.base() == this.target },
        onComplete() { player[10103].milestone = player[10103].milestone.add(1) },
        base() { return player[10103].buy[1][i + 10] },
        target: layer10103,
        style: { height: "104px", width: "132px" }
    }
}

function getDelannoyMatrix(n) {
    const D = Array(n).fill().map(() => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        D[i][0] = 1;
        D[0][i] = 1;
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            D[i][j] = D[i - 1][j] + D[i][j - 1] + D[i - 1][j - 1];
        }
    }

    const maxVal = D[n - 1][n - 1];
    const colWidth = maxVal.toString().length + 1;

    for (let i = 0; i < n; i++) {
        let rowStr = '';
        for (let j = 0; j < n; j++) {
            rowStr += D[i][j].toString().padStart(colWidth);
        }
    }

    return D;
}

addLayer("10103", {
    symbol: "🟪",
    resource: "User incremental",
    color: "#33BDB2",
    update(diff) {
        if (player.pause[this.layer]) return
        player[this.layer].points = player[this.layer].points.add(layers[this.layer].getPoint().mul(diff))
    },
    getPoint() {
        return _D(3725).pow(player[10103].power.div(400)).mul(_D(372559).pow(player[10103].milestone.div(70 - 5)))
    },
    startData() {
        return {
            unlocked: true,
            points: _D0,
            power: _D0,
            point: _D0,
            milestone: _D0,
            buy: [Array(layer10103).fill(_D0), Array(layer10103).fill(_D0)]
        }
    },
    type: "none",
    tabFormat: [
        ["display-text", function () {
            return `
                你有 <h1 class="nmpt">${format(player[this.layer].points)}</h1> User incremental<br>
                你被动地获得User incremental为 <h2 class="nmpt">${format(layers[this.layer].getPoint())}</h2> 在每/秒<br>
                `
        }],
        ["bar", "foxbar"],
        ["bar", "stonebar"],
        ["bar", "pointbar"],
        ["microtabs", "fox"],
        ["bar", "pointbar"],
        ["bar", "stonebar"],
        ["bar", "foxbar"],
        ["display-text", function () {
            return `
                你被动地获得User incremental为 <h2 class="nmpt">${format(layers[this.layer].getPoint())}</h2> 在每/秒<br>
                你有 <h1 class="nmpt">${format(player[this.layer].points)}</h1> User incremental<br>
                `
        }],
        "blank",
    ],
    microtabs: {
        fox: {
            upgrades: {
                content: [
                    ...upgradesformat10103
                ],
                style: {
                    width: "1440px",
                }
            },
            milestones: {
                content: [
                    ["row",
                        [
                            ...[0, 10, 20, 30, 40, 50, 60].map(start => [
                                "column",
                                Array.from({ length: 10 }, (_, i) => ["milestone", start + i])
                            ]),
                        ]
                    ]
                ],
                style: {
                    width: "1440px",
                }
            }
        }
    },
    upgrades: upgrades10103,
    bars: {
        foxbar: {
            direction: RIGHT,
            width: 1440,
            height: 20,
            progress() {
                return player[this.layer].power.div(400)
            },
            display() {
                return `<span class="nmpt" style="text-shadow:1px 1px 0 #000;">${formatPersent(player[this.layer].power.div(400))} - ${formatWhole(player[this.layer].power)} / ${formatWhole(400)} 升级</span>`
            },
            fillStyle: {
                backgroundColor: "#1fc922"
            },
            instant: true
        },
        stonebar: {
            direction: RIGHT,
            width: 1440,
            height: 20,
            progress() {
                return player[this.layer].milestone.div(70)
            },
            display() {
                return `<span class="nmpt" style="text-shadow:1px 1px 0 #000;">${formatPersent(player[this.layer].milestone.div(70))} - ${formatWhole(player[this.layer].milestone)} / ${formatWhole(70)} 里程碑</span>`
            },
            fillStyle: {
                backgroundColor: "#877edf"
            },
            instant: true
        },
        pointbar: {
            direction: RIGHT,
            width: 1440,
            height: 20,
            progress() {
                return player[this.layer].point.div(130271906898720)
            },
            display() {
                return `<span class="nmpt" style="text-shadow:1px 1px 0 #000;">${formatPersent(player[this.layer].point.div(130271906898720))} - ${formatWhole(player[this.layer].point)} / ${formatWhole(130271906898720)}, 完成在 ${formatTime(_D(130271906898720).sub(player[this.layer].point).sub(player[this.layer].points).div(layers[this.layer].getPoint()).clamp(0, 130271906898720))} 后</span>`
            },
            fillStyle: {
                backgroundColor: "#d323b0",
            },
            instant: true
        }
    },
    milestones: milestones10103,
    layerShown() { return true },
    tooltip() {
        return getGameName(this.layer)
    },
});