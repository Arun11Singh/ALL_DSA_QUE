let Tringle =(arr,n)=>{
  if(n<3){
    return false
  }
  arr.sort()
  console.log(arr)
  for(let i=0;i<n-2;i++){
    if(arr[i]+arr[i+1]>arr[i+2]){
        return "Tringle is possible"
    }

  }
  return"Tringle is not possible"
}
let arr =[2,4,1,3,6]
let n=arr.length
console.log(Tringle(arr,n))

