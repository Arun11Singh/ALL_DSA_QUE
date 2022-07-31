var convert = function(s, numRows) {
if (numRows === 1 || s.length < numRows) return s;

    let rows = []
    let converted 
    let reverse = false;
    let count = 0

    // prepare rows
    for (let i = 0; i < numRows; i++) rows[i] = [];
    // reverse the push flow when reaching turning points
    for (let i = 0; i < s.length; i++) {
        rows[count].push(s[i]);

        reverse ? count-- : count++;
        if (count === numRows - 1 || count === 0) reverse = !reverse;
       
     
    }
    // put together converted string
    console.log(rows)
    console.log(count)
    return rows.reduce((converted, cur) => converted + cur.join(''), '');
}
let s= "PAYPALISHIRING", numRows = 3
console.log(convert(s,numRows))