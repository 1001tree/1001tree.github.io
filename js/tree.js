var layoutInfo = {
    startTab: "none",
    startNavTab: "tree-tab",
    showTree: true,

    treeLayout: [
        ["main", "ach", "book", "extra"],
        ["line1", "101", "102", "103", "104", "105"],
        ["line2", "201", "202", "203", "204", "205"],
        ["line3", "301", "302", "303", "304", "305"],
        ["line4", "401", "402", "403", "404", "405"],
        ["line5", "501", "502", "503", "504", "505"],
    ]
}

addLayer("tree-tab", {
    tabFormat: [["tree", function () { return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS) }]],
    previousTab: "",
    leftTab: true,
})