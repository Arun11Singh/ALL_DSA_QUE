let squareRoot = (n,p) => {
    let start = 0
    let end = n
    let ans = 0

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        let squ = mid * mid;
        if (squ <= n) {
            ans = mid
        }
        if (squ < n) {
            start = mid + 1;
        }
        else {
            end = mid - 1
        }

    }
   let add=0.1
   while(p>0)

   {
    ans=ans+add;
    while(ans*ans<=n)
    {
        ans=ans+add;
    }
    ans=ans-add;
    add=add/10;
    p--
   }
    return ans;
}
let n = 16;
let ans = squareRoot(n,4)
console.log(ans)