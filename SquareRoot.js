let squareRoot=(n)=>
{
    let start =0
    let end =n
    let ans=0

    while(start<=end){
        let  mid =Math.floor((start+end)/2)
       let  squ=mid*mid;
        if(squ <= n){
            ans= mid
        }
         if(squ < n){
            start=mid+1;
         }
         else{
            end =mid-1
         }
        
    }
    return ans;
}
let n=134;
let ans=squareRoot(n)
console.log(ans)