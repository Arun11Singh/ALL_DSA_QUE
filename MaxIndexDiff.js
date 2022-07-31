let arr=[4,5,7,2,8]
let MaxIndexDiff=0
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]<=arr[j]){
            MaxIndexDiff=Math.max(MaxIndexDiff,j-i)
        }
    }
}
console.log("Maxmum value:",MaxIndexDiff)