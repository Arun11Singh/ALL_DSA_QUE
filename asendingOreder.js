 
function asinding(arr,n){
    let EvenArr = []
    let OddArr = []
    for (let i = 0; i < n; i++) {
        if (arr[i]%2==0) {
            OddArr.push(arr[i])
        } else {
            EvenArr.push(arr[i])
        }
        EvenArr.sort(function(a,b){return a-b;});
		OddArr.sort(function(a,b){return b-a;});

    }
    console.log(EvenArr.concat(OddArr))
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let n = arr.length
asinding(arr,n)


