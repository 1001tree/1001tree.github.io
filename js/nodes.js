addNode("line1", {
    color() { return colors_theme["color"] },
    symbol() { return `${options[this.layer] ? "1 H" : "1 S"}` },
    canClick() { return true },
    onClick() { options[this.layer] = !options[this.layer] },
    layerShown() { return true },
    branches: ["101", "102", "103", "104", "105"],
    tooltip() { return `第一行<br>${options[this.layer] ? "隐藏" : "显示"}` },
})
addNode("line2", {
    color() { return colors_theme["color"] },
    symbol() { return `${options[this.layer] ? "2 H" : "2 S"}` },
    canClick() { return true },
    onClick() { options[this.layer] = !options[this.layer] },
    layerShown() { return true },
    branches: ["201", "202", "203", "204", "205"],
    tooltip() { return `第二行<br>${options[this.layer] ? "隐藏" : "显示"}` },
})
addNode("line3", {
    color() { return colors_theme["color"] },
    symbol() { return `${options[this.layer] ? "3 H" : "3 S"}` },
    canClick() { return true },
    onClick() { options[this.layer] = !options[this.layer] },
    layerShown() { return true },
    branches: ["301", "302", "303", "304", "305"],
    tooltip() { return `第三行<br>${options[this.layer] ? "隐藏" : "显示"}` },
})
addNode("line4", {
    color() { return colors_theme["color"] },
    symbol() { return `${options[this.layer] ? "4 H" : "4 S"}` },
    canClick() { return true },
    onClick() { options[this.layer] = !options[this.layer] },
    layerShown() { return true },
    branches: ["401", "402", "403", "404", "405"],
    tooltip() { return `第四行<br>${options[this.layer] ? "隐藏" : "显示"}` },
})
addNode("line5", {
    color() { return colors_theme["color"] },
    symbol() { return `${options[this.layer] ? "5 H" : "5 S"}` },
    canClick() { return true },
    onClick() { options[this.layer] = !options[this.layer] },
    layerShown() { return true },
    branches: ["501", "502", "503", "504", "505"],
    tooltip() { return `第五行<br>${options[this.layer] ? "隐藏" : "显示"}` },
})