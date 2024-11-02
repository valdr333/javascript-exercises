const fibonacci = function(n) {
    let arr = [0, 1, 1];
    if (n >= 0) {
        for (let i = 3; i <= n; i++) {
            arr.push(arr[i-1]+arr[i-2]);
        }
        return arr[n];
    } else {
        return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
