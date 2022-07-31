

function ternarySearch(start, end, key, ar)
{
    if (end >= start) {
        let mid1 = start + parseInt((end - start) / 3, 10);
        let mid2 = end - parseInt((end - start) / 3, 10);
        if (ar[mid1] == key) {
            return mid1;
        }
        if (ar[mid2] == key) {
            return mid2;
        }

        if (key < ar[mid1]) {
            return ternarySearch(start, mid1 - 1, key, ar);
        }
        else if (key > ar[mid2]) {
            return ternarySearch(mid2 + 1, start, key, ar);
        }
        else {
            return ternarySearch(mid1 + 1, mid2 - 1, key, ar);
        }
    }
    return -1;
}
  
let start, end, p, key;
let ar = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
start = 0;
end = 9;
key = 5;
p = ternarySearch(start, end, key, ar);
console.log("Index of " + key + " is " + p + "</br>");
key = 50;
p = ternarySearch(start, end, key, ar);
console.log("Index of " + key + " is " + p);