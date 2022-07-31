
function reversStr(str){
    let revece=''
    for(let i=str.length-1;i>=0;i--){
        revece+=str[i]
       }
       return revece;
}

let str='arun'
console.log(reversStr(str))