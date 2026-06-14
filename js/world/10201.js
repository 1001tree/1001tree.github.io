let layer10201 = 15
let upgrades10201 = {}
let tabformat10201 = {}
let defined10201 = false

if (!(defined10201)) define10201()

function define10201() {
    defined10201 = true

    tabformat10201 = {}
    for (let i = 0; i < layer10201; i++) {
        let tab = []
        for (let j = 0; j < layer10201; j++) {
            tab.push(["row", []])
            for (let k = 0; k < layer10201; k++) {
                let id = i * 10000 + xytoid(k, j)
                upgrades10201[id] = {
                    fullDisplay() {
                        return `<h1>${randomString(4)}</h1>`
                    },
                    cost: _D(0),
                    style: {
                        minHeight: "42px",
                        width: "85px"
                    },
                    onPurchase() {
                        player.subtabs[this.layer].fox = randomBetween(0, layer10201)
                        player[this.layer].power = player[this.layer].power.add(1)
                    }
                }
                tab[j][1][k] = ["upgrade", id]
            }
        }

        tabformat10201[i] = {
            content: [["bar", "foxbar"],...tab],
            style: { width: "1340px", height: "670px" }
        }
    }
}

addLayer("10201", {
    symbol: "🆘",
    resource: "",
    color: "#e33",
    startData() {
        return {
            unlocked: true,
            points: _D0,
            power: _D0
        }
    },
    type: "none",
    tabFormat: { "真·点击墙": { content: [["microtabs", "fox"]], style: { width: "1340px" } } },
    microtabs: { fox: tabformat10201 },
    upgrades: upgrades10201,
    layerShown() { return true },
    bars: {
        foxbar: {
            direction: RIGHT,
            width: 1280,
            height: 20,
            progress() {
                return player[this.layer].power.div(3375)
            },
            display() {
                return `<span class="nmpt" style="text-shadow:1px 1px 0 #000;">${formatPersent(player[this.layer].power.div(3375))} - ${formatWhole(player[this.layer].power)} / ${formatWhole(3375)} 升级</span>`
            },
            fillStyle: {
                backgroundColor: "#1fc922"
            },
            instant: true
        },
    },
    tooltip() {
        return getGameName(this.layer)
    },
});