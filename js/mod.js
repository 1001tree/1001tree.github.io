let modInfo = {
	name: "一千零一树",
	id: "1001tree",
	pointsName: "世界",
	modFiles: ["layers.js","nodes.js", "tree.js", "book.js", "const.js", "const403.js",

		"world/101.js", "world/102.js", "world/103.js", "world/104.js", "world/105.js",
		"world/201.js", "world/202.js", "world/203.js", "world/204.js", "world/205.js",
		"world/301.js", "world/302.js", "world/303.js", "world/304.js", "world/305.js",
		"world/401.js", "world/402.js", "world/403.js", "world/404.js", "world/405.js",
		"world/501.js", "world/502.js", "world/503.js", "world/504.js", "world/505.js",
		"world/101/1011.js",
		"world/202/2021.js",
		"world/302/3021.js", "world/302/3022.js", "world/302/3023.js", "world/302/3024.js",

		"world/10102.js"
	],
	discordName: "1001树游戏群",
	discordLink: "https://qm.qq.com/q/ApvcgvPhN8",
	initialStartPoints: new Decimal(0), // 用于硬重置和新玩家
	offlineLimit: 0,  // 离线时间限制（小时）
}

// 在num和name中设置版本号
let VERSION = {
	num: 0.812,
	name: "发布版v18"
}

let changelog = `
	<h1>更新日志:</h1><br><br>
	<h3>v19 | 0.812 | 2026/6/12</h3><br>
	更新了一些样式，添加了行隐藏按钮<br>
	303因为还未做到下一个可玩版本，遂目前不可隐藏，后续版本更新后将可正常隐藏<br>
	修改了返回键样式<br>
	新增设置：世界之书/额外游戏隐藏，短时间表示
	更新了10102:乾狐离光声望三角<br>
	略微加强狐维度，战斗等级提升生成器上限<br>
	修复了一些已知问题<br><br>
	<h3>v16 | 0.81 | 2026/6/7</h3><br>
	完善了世界403的框架并完成前8个关卡;改善了部分UI;解决了一些已知问题<br>
	重平衡狐维度,攻击层更新!<br><br>
	<h3>v14 | 0.805 | 2026/5/31</h3><br>
	101新增一个dlc<br><br>
	<h3>v13 | 0.804 | 2026/5/28</h3><br>
	更新了评论区<br>
	更新了202：一个新工作<br>
	更新了404: 新增fps设置，单曲状态分离存储<br>
	以及405被砍掉了<br><br>
	<h3>v10 | 0.8 | 2026/5/22</h3><br>
	更新了20个游戏和关于第20个游戏的成就<br><br>
	<h3>v9 | 0.7981 | 2026/5/21</h3><br>
	梦力被平衡：梦力生成器更弱，夜世界需要2梦力解锁<br><br>
	<h3>v8 | 0.798 | 2026/5/20</h3><br>
	更新了一个世界<br>
	更新了一个挑战成就和一系列基于此的流程<br><br>
	<h3>v5 | 0.797 | 2026/5/16</h3><br>
	修改了梦力生成器机制<br><br>
	<h3>v4 | 0.796 | 2026/5/15</h3><br>
	不再提供初始梦力,达成成就时获得梦力<br><br>
	<h3>v3 | 0.795 | 2026/5/14</h3><br>
	翻新了成就样式,修改了成就隐藏逻辑<br><br>
	<h3>v2 | 0.79 | 2026/5/13</h3><br>
	最后一个游戏,也是最重要的游戏,开始制作!<br><br>
	<h3>v1 | 0.76 | 2026/5/1</h3><br>
	发布版v1<br><br>
	<h3>v0.76? | 2026/3/15</h3><br>
	更新了19个游戏<br><br>
	<h3>v0.68 | 2026/1/16</h3><br>
	更新了17个游戏<br><br>
	<h3>v0.60 | 2025/12/14</h3><br>
	更新了15个游戏<br><br>
	<h3>v0.56 | 2025/10/19</h3><br>
	更新了14个游戏<br><br>
	<h3>v0.48 | 2025/9/17</h3><br>
	更新了12个游戏<br><br>
	<h3>游戏立项 | 2025/8/28</h3><br>
	1001tree team 成立!<br><br>`

let winText = `恭喜你!你已经*简单*通关了本游戏,接下来向着全成就收集前进吧!`

// 如果在Layer内添加了新函数,请在此处添加它们
var doNotCallTheseFunctionsEveryTick = ['resetGame', 'getPrice', 'getEffect', 'executeBoost', 'getAutoGen',
	'clickwallReset', 'checkHash', 'nextHash', "getBoard", "getValue", 'next', 'getZKopt', 'pgen_301',
	"resetgrid", "getWrongPage", "getRandomcode", "analyzeGrid", 'getTickTime', 'getZKText', 'getlyrPoints',
	"getSomeText", "getRandomProblem", "randomProblem", "normalEndGame", 'mult', 'machineRoll', 'dolyrReset',
	"xytoid", "idtoxy", "face", "getArrow", "click", 'calcbase', 'calcmul', 'doMovement', 'getBoost', 'calclyyrBoost',
	'getTarget', 'checkHash', 'keyList', 'getPoint', 'getMulPoint', 'getMulMulti', 'pGen', 'calcX', 'calcA',
	'updateGrid', 'numGen', 'mergeGrid', 'canMerge', 'canMax', 'noReset', 'res', 'tar', 'pointsGain', 'getMetaPoints',
	'getMulPower', 'getMulGetPoint', 'getChallenge', 'subpower', 'm2effect', 'udClear', 'switchGrid', 'calcC', 'calcB',
	'calcmaxhp', 'divpower', 'chalcomp', 'chaleff', 'randomButton', 'getText', 'genClear', 'getPgen', 'calcfunc',
	'calcP1', 'enginegen', 'renginegen', 'engineeff', 'rengineeff', 'hengineeff', 'yourMovement', 'catGen',
	'getRandomcode', 'getLoseText', 'getWrongPage', 'find25', 'calculateInfoDensity', 'catMove', 'spGen',
	"ai0", "ai1", "ai2", "ai3", "ai4", "ai5", "ai6", "ai7", "ai8", "ai9", "sC1", "sC2", "sC3", "sC4", "sC5",
	"aC1", "aC2", "aC3", "aC4", "aC5", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10",
	"startSimulation", "endSimulation", "getColor_205", "start", "checkboard", "initializeGrid",
	"price", "getlvtext", "getfltext", "getfl3problem", "getfl6mult", "getfl7problem", "initfl11grid", "calc304left",
	"getfl13gain", "execute", "executeLoop", "executeCommand", "breakDown", "assemble", "startChallenge", "endChallenge",
	"check11", "check12", "check13", "check14", "clearIntervene", "getgain", "getgen", "getprice", "getrate", "getratebuff", "getcap", "getshopcap",
	"getFl22req", "getFl22trig", "attpower", "bossatt", "bossmaxhp", "bossdef", "bossgen", "powergen", "getattack"
]

function getStartPoints() {
	return new Decimal(modInfo.initialStartPoints)
}

// 决定是否醒着
function canGenPoints() {
	return false
}

// 计算点数/秒!
function getPointGen() {
	return _D0
}

// 你可以在此添加应该存入"player"并保存的非图层相关变量,以及默认值
// 有关常量定义请在const.js中进行!
function addedPlayerData() {
	return {
		_501: {
			stage: _D0,
			started: false,
			timeleft: new Decimal(10),
			cnt: 999,
			trig: [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false],
			rp: 0,
			gnum: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
			rc: "",
			complete: false,
			lose: false,
		},
		world: {
			101: false, 102: false, 103: false, 104: false, 105: false,
			201: false, 202: false, 203: false, 204: false, 205: false,
			301: false, 302: false, 303: false, 304: false, 305: false,
			401: false, 402: false, 403: false, 404: false, 405: false,
			501: false, 502: false, 503: false, 504: false, 505: false,
		},
		pause: {
			101: false, 102: false, 103: false, 104: false, 105: false,
			201: false, 202: false, 203: false, 204: false, 205: false,
			301: false, 302: false, 303: false, 304: false, 305: false,
			401: false, 402: false, 403: false, 404: false, 405: false,
			501: false, 502: false, 503: false, 504: false, 505: false,
			10101: false, 10102: false, 10103: false, 10104: false, 10105: false,
			10201: false, 10202: false, 10203: false, 10204: false, 10205: false,
			10301: false, 10302: false, 10303: false, 10304: false, 10305: false,
			10401: false, 10402: false, 10403: false, 10404: false, 10405: false,
			10501: false, 10502: false, 10503: false, 10504: false, 10505: false,
		},
		global: {
			//此处存放全局变量
			name: "player", //玩家的名字
			import: false,
			mynews: "请输入文本",
			achseed: Date.now(),
			tickTime: [],
			click: 0
		},
		completeallachivement: false,
		gainpower: false,
	}
}

// 在页面顶部显示新闻
var displayNews = [
	function () {
		if (options.newsshown) return `<div style="
		width: calc(100% - 50px);
		background-color: rgba(255,255,255,0.2);
		margin: 5px auto;
		border: solid 3px rgba(0,0,0,0.5);
		min-height:64px;
  		display: flex;
  		justify-content: center;
  		align-items: center;
		">
			<span style="
			opacity: ${news.opacity};">
				${news.text}
			</span>
		</div>
		`
		else return "<br>"
	}
];

// 在页面顶部显示额外内容
var displayThings = [
	function () {
		return `
		如果游戏出现问题,请先尝试刷新页面,如果问题可复现<br>
		请截图错误界面,导出存档并提交给开发组<br>`
	},
	function () {
		if (options.tipshown) {
			switch (options.hud) {
				case 0:
					return `当前游戏运行速度 ${format(Cal_TPS()[0], 1)}tps | ${formatWhole(Cal_TPS()[1])}ms`
				case 1:
					return `梦力生成器能量 ${formatWhole(player.book.power)} / ${formatWhole(layers.book.getcap())}`
				case 2:
					return `游玩时长 ${formatTime(player.timePlayed)}`
				case 99:
					return ``
			}
		}
	},
	function () {
		try {
			if (Object.values(player.pause).some(Boolean)) return "当前有游戏暂停运算,你可在设置查阅"
		}
		catch { return null }
	},
	function () {
		if (options.sloganshown) return `<span class="slogan">
			${slogan}
		</span>`
	}
]

// 决定游戏何时"结束"
function isEndgame() {
	return player.points.gte(25)
}

// 后面是次要内容!

// 背景样式,可以是函数
function backgroundStyle() {
	if (options.bgi) return {
		backgroundImage: `linear-gradient(rgba(from var(--background) r g b / 0.75)),
    	url(${options.bgi})`,
		backgroundSize: "cover",
		backgroundPosition: "center center",
	}
}

// 如果有内容可能被长时间tick破坏,可以修改这个值
function maxTickLength() {
	return 0.1
}

// 如果需要修复旧版本存档的数值膨胀问题,使用此函数.如果版本早于修复该问题的版本,
// 你可以用此函数限制他们当前的资源.
function fixOldSave(oldVersion) {
	if (oldVersion <= 0.795) {
		let ach = player.ach.points
		player.main.points = player.main.points.add(ach)
		alert(`在0.796版本的更新后,基于曾经完成的成就,你获得了${formatWhole(ach)}梦力!`)
	}
	if (oldVersion <= 0.796) {
		if (player[this.layer].power) player[this.layer].power = _D(player[this.layer].power)
	}
	if (oldVersion <= 0.7972) {
		if (getGridData('main', 501)) {
			if (!player._501.lose && !player._501.complete) {
				alert(`为什么你买了501但是没玩😱!不过,0.798版本新增了一个更强的挑战成就,想试试的话,去设置打开挑战者模式吧!`)
			}
			if (player._501.lose && player._501.complete) {
				player._501.lose = false
				player._501.complete = false
				alert(`501限定成就愚人节玩笑进行了一次更新,尽管你已经无法完成它,但0.798版本重置了它,查看设置和成就里的新东西吧!`)
			}
			if (!player._501.lose && player._501.complete) {
				options.truechallenger = true
				alert(`看起来你已经完成愚人节玩笑成就了,不过,0.798版本新增了一个更强的挑战成就(你应该已经自动获得了它),想试试的话,就创建一个新存档,去设置打开挑战者模式吧!`)
			}
		}
	}
	if (oldVersion <= 0.803) {
		if (oldVersion <= 0.802) {
			//迁移麦麦数据
			player[10101] = player[405]
		}
		//迁移麦麦数据
		player[405] = {
			"resetTime": 0,
			"unlocked": true,
			"points": _D0,
			"total": _D0,
			"best": _D0,
			"forceTooltip": false,
			"buyables": {},
			"noRespecConfirm": false,
			"clickables": {},
			"spentOnBuyables": _D0,
			"upgrades": [],
			"milestones": [],
			"lastMilestone": null,
			"achievements": [],
			"challenges": {},
			"grid": {},
			"prevTab": ""
		}
		alert(`0.802版本尝试迁移了麦麦(原405,目前计划作为废稿~:重返梦树~内容)数据,但出现了一些问题.
目前已知:ResetTime会报错,刷新无法解决(如果刷新解决了则无视它)
以下是临时解决方法:导出存档,硬重置,导入存档;此方法应能解决上述报错问题`)
	}
	if (oldVersion <= 0.805) {
		let fox = player.book.fox
		fox.power = [
			_D0, _D1, _D0, _D0, _D0, _D0, _D0, _D0, _D0, _D0, _D0
		],
			fox.gener = [
				null, _D1, _D0, _D0, _D0, _D0, _D0, _D0, _D0, _D0, _D0
			]
	}
	if (oldVersion <= 0.811) {
		let a = [
			10101, 10102, 10103, 10104, 10105,
			10201, 10202, 10203, 10204, 10205,
			10301, 10302, 10303, 10304, 10305,
			10401, 10402, 10403, 10404, 10405,
			10501, 10502, 10503, 10504, 10505,
		]
		for (i of a) {
			player.pause[i] = false
		}
	}
}
