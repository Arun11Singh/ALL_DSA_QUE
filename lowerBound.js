let lowerBound = (arr,key)=>
{
  let start =0
  let end =arr.length-1;
  let ans=-1

  while(start<=end){
    let mid =Math.floor((end+start)/2);
    if(key<=arr[mid]){
        ans =mid;
        end = mid-1;
    }else{
        start =mid+1;
    }
  }
  if(ans==-1){
    ans=NaN;
  }
  return ans;
}
let arr=[1,2,3,4,5,6,7,8,12,23,24,25,66,87]
let key=313
let position =lowerBound(arr,key)
console.log("element",arr[position],"position", position)