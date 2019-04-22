
//1.定义一个新数组，将原数组的每一项和新数组对比，如果新数组没有就加入

function unique1(arr){
 var res = [];
 for(var i=0; i<arr.length; i++){
  var repeat = false;
  for(var j=0; j<res.length; j++){
   if(arr[i] === res[j]){
    repeat = true;
    break;
   }
  }
  if(!repeat){
   res.push(arr[i]);
  }
 }
 return res;
}
