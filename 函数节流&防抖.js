
//节流
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
