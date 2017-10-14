/**
 * @description 跨浏览器的事件处理程序
 * @author yang
 */

/*
	在添加事件处理程序事addEventListener和attachEvent主要有几个区别：
	1.参数个数不相同，addEventListener有三个参数，attachEvent只有两个；
	2.第一个参数意义不同，有没有‘on’；
	3.事件处理程序的作用域不相同，addEventListener的作用域是元素本身，this是指的触发元素，而attachEvent事件处理程序会在全局变量内运行，this是window；
	4.为一个事件添加多个事件处理程序时，执行顺序不同，addEventListener添加会按照添加顺序执行，而attachEvent添加多个事件处理程序时顺序无规律。	
*/


//绑定事件处理程序

function addEvent(node, type, handler) {
		//必须要传入参数
    if (!node) return false;
    //优先使用addEventListener
    if (node.addEventListener) {
        node.addEventListener(type, handler, false);
        return true;
    }
    //把事件函数绑定 到node上，方便解除绑定
    else if (node.attachEvent) {
        node['e' + type + handler] = handler;
        node[type + handler] = function() {
            node['e' + type + handler](window.event);
        };
        node.attachEvent('on' + type, node[type + handler]);
        return true;
    }
    return false;
}

//取消事件处理程序

function removeEvent(node, type, handler) {
    if (!node) return false;
    if (node.removeEventListener) {
        node.removeEventListener(type, handler, false);
        return true;
    }
    else if (node.detachEvent) {
        node.detachEvent('on' + type, node[type + handler]);
        node[type + handler] = null;
    }
    return false;
}