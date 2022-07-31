let num=35647;
let str=num.toString();
let NumEven=0;
let NumOdd=0;
for(let i=0;i<str.length;i++){
   if((i+1)%2==0){
      NumEven+=parseInt(str.charAt(i))
   }else{
    NumOdd+=parseInt(str.charAt(i))
   }
}
console.log("EVEN:",NumEven)
console.log("ODD:",NumOdd)