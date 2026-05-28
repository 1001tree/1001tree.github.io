addLayer("2021", {
    symbol: "",
    resource: "202工作7",
    color: "#aaa",
    update(diff) {
        if (!getGridData('main', 202) || player.pause[202]) return
    },
    startData() {
        return {
            unlocked: true,
            points: _D0
        }
    },
    type: "none",
    grid: {
        rows: 10,
        cols: 10,
        getStartData(id) {
            return 0
        },
        getUnlocked(id) {
            return true
        },
        getCanClick(data, id) {
            return data == 0
        },
        onClick(data, id) {
            let { x, y } = idtoxy(id)
            let p = y * 10 + x + 1

            if (Math.random() < (1 / p)**(1/buyableEffect(202, 323))) {
                setGridData(this.layer, id, Math.floor(p ** 0.5 + 1 +buyableEffect(202, 324)))
                player[202].points = player[202].points.add(_D(p / 100)
                .mul(getEffect(202, 11, _D1))
                .mul(getEffect(202, 13, _D1)))
                return true
            }
            return false
        },
        getDisplay(data, id) {
            let { x, y } = idtoxy(id)
            let p = y * 10 + x + 1

            return `<h2>${formatWhole(p)}</h2><br>${formatPersent((1 / p)**(1/buyableEffect(202, 323)))}<br>` + (data != 0 ? `${data}刻` : "未按下")
        },
        getStyle(data, id) {
            let { x, y } = idtoxy(id)

            return {
                height: "72px",
                width: "72px",
                fontSize: "14px",
                color: `#444`,
                backgroundColor: data != 0 ? "#888" : `hsl(${y * 30 + x * 3},80%,70%)`
            }
        }
    },
    layerShown() { return getGridData('main', this.layer) && (!options.hideWorld || !player.world[this.layer]) },

});