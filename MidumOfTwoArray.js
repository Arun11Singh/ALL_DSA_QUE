let Medium=(arr1,arr2,len)=>
{   let sum =0
    let con={}
    let index= 0
    
   for(let i=0;i<len;i++)
   {
   
   con=  (arr1.concat(arr2))
   con.sort((a,b)=>a-b)
  
   }
   
   let n=con.length-1
   for(let j=1;j<n;j++){
      sum+=con[j]
      index++
   }
   return sum/index;
}
let arr1=[1,3]
let arr2=[2]
let len =arr1.length+arr2.length;
console.log(Medium(arr1,arr2,len))