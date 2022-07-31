let searchUniquic=(arr,start,end)=>
{
    if(start>end){
        return;
    }
    if(start==end){
        return start;
    }
     let mid= start + Math.floor((end-start)/2)

     if(mid%2==0){
        if(arr[mid]==arr[mid+1]){
        //search on rigth
        return searchUniquic(arr,mid+2,end);
     }else
     {
        //search on left
        return searchUniquic(arr,start,mid)
     } 
     }else{//mid is odd
        if(arr[mid] == arr[mid-1]){
             //search on right
             return searchUniquic(arr, mid+1, end);
        }
        else{
            //search on left
            return searchUniquic(arr, start, mid);
        }
    }
}
let arr=[1,1,2,2,3,3,4,4,5,5,6,7,7,8,8,9,9]
let start =0
let end=arr.length-1
let position=searchUniquic(arr,start,end)
console.log("element:",arr[position],"position",position)
// function searchUnique(arr, start, end){
//     //base case
//     if(start > end){
//         return;
//     }

//     if(start == end){ //unique element found
//         return start;
//     }

//     let mid = start + Math.floor((end-start)/2);

//     //check if mid is even
//     if(mid%2 == 0){//mid is even
//         if(arr[mid] == arr[mid+1]){
//             //search on right
//             return searchUnique(arr, mid+2, end);
//         }else{
//             //search on left
//             return searchUnique(arr, start, mid);
//         }

   
// }



// let arr = [1, 1, 3, 3, 4, 5, 5, 7, 7, 9, 9, 11, 11, 15, 15];
// let start =0;
// let end = arr.length-1;
// let position = searchUniquic(arr, start, end);
// console.log("element: ", arr[position], " position: ",position);