function twict(arr,n){
    let j=0;
    let arr1=[]
    for(let i=0;i<n;i++){
        if(i<n-2 && arr[i]==arr[i+1] && arr[i]==arr[i+2]){
            continue;
        }else{
            arr[j]=arr[i]
            j++;
        }
    }
    for(let i=0;i<j;i++){
       arr1.push( arr[i])
       
    }
    console.log(arr1)
}
let arr=[1,2,2,3,3,3,4,4,5,5,5]
let n=arr.length;
twict(arr,n)