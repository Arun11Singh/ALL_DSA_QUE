 const arr = [2, 5, 9,12,98,43];
 var popped = arr.pop();
 console.log(popped)
// for(let i=0;i<arr.length;i++){
//    if(arr[i]==9){
//      console.log(i.pop(arr))
     
//    }
// }
// console.log("running")




function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return;
   {
      bar: "hello"
  };
}
console.log(foo1())
console.log(foo2())
