let antonio = (arr, n) => {
    let count = []
    let sum = 0, cnt = 0
    let total = 0
    
    for(let i=0;i<n;i++){
        sum=sum+arr[i]
    }
    if(sum%2==1){
        console.log(cnt)
    }
    arr.shift()

    for (let i = 0; i < n -1; i++) {
        count.push(arr[i]/ 2)
        total += count[i]
        cnt++
    }
    if(total%2==1){
        return cnt
    }
return "Invalid"

    
}
let arr = [6,4, 4, 10]
let n = arr.length
console.log(antonio(arr, n))