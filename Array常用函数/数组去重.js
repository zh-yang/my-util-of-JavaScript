
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

//2.先将原数组排序，在与相邻的进行比较，如果不同则存入新数组

function unique2(arr){
 var arr2 = arr.sort();
 var res = [arr2[0]];
 for(var i=1; i<arr2.length; i++){
  if(arr2[i] !== res[res.length-1]){
   res.push(arr2[i]);
  }
 } 
 return res;
}

//3.利用对象属性存在的特性，如果没有该属性则存入新数组

function unique3(arr){
 var res = [];
 var obj = {};
 for(var i=0; i<arr.length; i++){
  if( !obj[arr[i]] ){
   obj[arr[i]] = 1;
   res.push(arr[i]);
  }
 } 
 return res;
}

//4.利用数组的indexOf下标属性来查询

function unique4(arr){
 var res = [];
 for(var i=0; i<arr.length; i++){
  if(res.indexOf(arr[i]) == -1){
   res.push(arr[i]);
  }
 }
 return res;
}

//5.利用数组原型对象上的includes方法

function unique5(arr){
 var res = [];
  
 for(var i=0; i<arr.length; i++){
  if( !res.includes(arr[i]) ){ // 如果res新数组包含当前循环item
   res.push(arr[i]);
  }
 }
 return res;
}

//6.indexOf加filter方法

function unique6(arr){
 var res = [];
  
 res = arr.filter(function(item,idx,self){
  return self.indexOf(item) === idx;
 });
 return res;
}

//7.forEach加includes方法

function unique7(arr){
 var res = [];
  
 arr.forEach(function(item){
  res.includes(item) || res.push(item);
 }); 
 return res;
}
