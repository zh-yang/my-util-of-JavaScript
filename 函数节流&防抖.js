
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
