// Input:
// arr1[] = {2, 3, 6, 7, 9}
// arr2[] = {1, 4, 8, 10}
// k = 5
// Output:
// 6
// Explanation:
// The final sorted array would be -
// 1, 2, 3, 4, 6, 7, 8, 9, 10
// // The 5th element of this array is 6.
 
let Kth=(arr1,arr2)=>{
   let arr3=arr1.concat(arr2)
    arr3.sort(function(a,b) { return a-b})
    for(let i=0;i<arr3.length;i++){
        if(arr3[i]==k){
            console.log(arr3[i])
        }
    }
    console.log(arr3)
}
let arr1=[2,3,6,7,9] 
let arr2=[1,4,8,10]
let k=6
Kth(arr1,arr2)


//Reverse number value

let reveceNum=(num)=>{
   let rev=0;
   while(num!=0){
    let LastDig=num%10;
    rev=rev*10+LastDig;
    num=Math.floor(num/10)
   }
   return rev;
}
let num=12334;
let n=num.length
console.log(reveceNum(num))