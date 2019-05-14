
//节流(一段时间执行一次后，就不执行第二次)
function throttle(fn, dealy){
  let canUse = true;
  return function(){
    if(canUse){
      fn.apply(this, arguments);
      canUse = false;
      setTimeout(()=>canUse = true, dealy);
    }
  }
}


//防抖
function debounce(fn, dealy){
  let timerId = null;
  return function(){
    const context = this;
    if(timerId){window.clearTimeout(timerId)}
    timerId = setTimeout(()=>{
      fn.apply(context, arguments);
      timerId = null;
    },dealy)
  }
}
