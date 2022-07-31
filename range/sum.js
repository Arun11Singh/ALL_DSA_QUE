function sumTask(num){
    for(let i =0;i<num.length;i++){
        for(let j=i+1;j<num.length;j++){
        if(num[i]+num[j+1]==k){
            return "It is possible"
        }else{
            return "It is not possible"
        }
     }
    }
}
let num=[1,2,3,4,5,6,7]
let k=4
console.log(sumTask(num))