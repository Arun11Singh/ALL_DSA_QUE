// todo
// 1. match both passwords
// 2. uppercase letter
// 3. lowercase letter
// 4. special character
// 5. number
// 6. min number of characters
password = 'ab#dAbhjt'
confirmPassword = 'ab#dAbhjt'
var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
var numbers = /\d/;
function matchPass(password, confirmPassword){
  let count = 5
  if (confirmPassword !== password){
    return false
  }else if(password === password.toLowerCase()){
    count--
  }else if(password === password.toUpperCase()){
    count--
  }else if (!format.test(password)){
    count--
  }else if (!numbers.test(password)){
    count--
  }else if(password.length > 8){
    count--
  }
  return count
}
let count = matchPass(password, confirmPassword)
console.log(count)
res = {
  1: 'very poor',
  2: 'poor',
  3: 'okay',
  4: 'good',
  5: 'strong'
}
if (!count){
  console.log('passwords are not matching')
}else{
  console.log(res[count])
}