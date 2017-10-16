/*
	Array.isArray是非常好用的方法，这里对判断是否是数组做了以下兼容。
*/



function isArray (arr) {
	//优先使用Array.isArray
  return typeof Array.isArray === 'function' ?
                Array.isArray(arr) : Object.prototype.toString.call(arr) === '[Object Array]'
}