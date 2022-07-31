  //liner searching


  let linerSeach=(arr,n,x)=>
  {
    for(let i=0;i<n;i++){
        if(arr[i]==x){
          return(`value ${x} found index ${i}`)
        } 
       
    }
    console.log("value is not found") 
}
  let arr=[2,3,4,6,7,9]
  let x=10
  let n=arr.length
   console.log (linerSeach(arr,n,x))
































// let linerSearch= (arr,key)=>{
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==key){
//             return i;
//         }
//     }
// }
//   //global searching
// let globleSearch= (arr,key)=>{
//     let result =[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==key){
//             result.push(i)
//         }
//     }
//     return result;
// }


// let arr=[2,3,56,78,7,9,4,2,4,6]
// let key= 4
// let globle=globleSearch (arr,key)

// let liner=linerSearch(arr,key)
// console.log(liner)
// console.log(globle)