/**
 * @description jsonP封装
 * @author yang
 */

function jsonp(opts) {
	//判断路径是否正确
	if (!opts.url) {
		console.log('输入路径')
		return
	}
	//获取参数
	opts.data = opts.data || {}
	opts.callback = opts.callback || function(){}

	//设置随机函数，避免请求覆盖
	var randomName = "show" + Math.random()
	randomName = randomName.replace(".", "")
	window[randomName] = function(rel) {
		opts.callback(rel)
		oHeade.removeChild(oScript)
	}
	opts.data.callback = randomName
	var arr = []
	for (name in opts.data) {
		arr.push(name + '=' + opts.data[name]);
	}

	//创建script标签
	var oScript = document.createElement("script")
	//设置script的src属性
	oScript.src = opts.url + '?' + arr.join("&")
	//获取head标签
	var oHeade = document.getElementsByTagName("head")[0];
	//将动态创建的script标签添加到head中
	oHeade.appendChild(oScript);
}


/*使用范例
	jsonp({
	url: 'http://api.jirengu.com/fm/getSong.php',
	data: {},
	callback: function(rel){console.log(rel)}
	})
*/