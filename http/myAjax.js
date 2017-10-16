/**
 * @description 原生Ajax封装
 * @author yang
 */

 function myAjax(opts) {
 	//通过opts传入参数
 	var url = opts.url,
 			type = opts.type || 'GET',
 			dataType = opts.dataType || 'json',
 			onsuccess = opts.onsuccess || function(){},
 			onerror = opts.onerror || function(){},
 			data = opts.data || {}

 	var dataStr = []
 	for(var in data){
 		dataStr.push(key + '=' + data[key])
 	}
 	dataStr = dataStr.join('&')

 	//GET请求要设置url
 	if(type === 'GET'){
 		url += '?' + dataStr
 	}

 	var xhr = new XMLHttpRequest()
 	xhr.open(type,url,true)
 	xhr.onload = function(){
 		if((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304){
 			if(dataType === 'json'){
 				onsuccess(JSON.parse(xhr.responseText))
 			}else{
 				onsuccess(xhr.responseText)
 			}
 		}else{
 			onerror()
 		}
 	}

 	//设置onerror，这样请求地址无效时也能抛出错误
 	xhr.onerror = onerror

 	//设置POST
 	if(type === 'POST'){
 		xhr.send(dataStr)
 	}else{
 		xhr.send()
 	}


 }