let Binary=(arr,key)=>{
    let result =[]
    let Start=0;
    let end=arr.length;
    while(Start<=end){
        let mid =Math.floor((Start+end)/2)
        if(arr[mid]==key){
          return  ( mid);
        }
        else if(arr[mid]<=key){
            end=mid-1
        }else{
            Start =mid+1
        }
        return NaN;
    }
}
let arr=[13,2,45,67,77,43,21,88,65,21,11,34,67]
let  key=21
let Search =Binary(arr,key)
console.log(Search)