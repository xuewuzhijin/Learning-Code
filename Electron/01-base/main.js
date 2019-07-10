const { app, BrowserWindow } = require("electron")

/** 
 * @property { undefined || Object } win 把窗口变量声明在外边，避免JS垃圾回收机制导致几分钟后程序意外退出
 * */
let win

//一： 创建一个浏览器窗口
function createWindow() {
	win = new BrowserWindow({
		width: 480,
		height: 600,
		minWidth: 240,
		minHeight: 600,
		webPreferences: {
			nodeIntegration: true
		}
	})

	// 加载首页文件
	win.loadFile('index.html')

	// 打开开发者工具
	win.webContents.openDevTools()

	// 当这个窗口被关闭，触发下面事件
	win.on('closed', () => win = null )
}

//二： 窗口全部关闭执行的函数
function windowAllClosed() {
	// windows点击关闭是退出程序，mac点击关闭是最小化，所以需要判断当前处理的平台是否是 mac 系统， 核心是 darwin
	process.platform !== 'darwin' && app.quit()
}

//三： 应用重启用
function activate() {
	// 在macOS上，当单击dock图标并且没有其他窗口打开时，
	// 通常在应用程序中重新创建一个窗口。
	win === null && createWindow()
}

/**
 * 生命周期函数
 * 1. ready 启动创建窗口,调用这个函数。
 * 2. windowAllClosed 所有窗口关闭
 * 3. activate 在macOS上，当单击dock图标并且没有其他窗口打开时，通常在应用程序中重新创建一个窗口。
 * */
app.on('ready', createWindow)
app.on('window-all-closed', windowAllClosed)
app.on('activate', activate)