const palindromes = function (word) {
    let arr = word.split('');
    let alph = "abcdefghijklmnopqrstuvwxyz123456789";
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
            newArr.push(arr[i]);
        } else if (alph.includes(arr[i].toLowerCase())) {
            newArr.push(arr[i].toLowerCase());
        }
    }
    let newWord = newArr.join('');
    let revArr = newArr.reverse();
    let revWord = revArr.join('');
    return newWord == revWord;
};

// Do not edit below this line
module.exports = palindromes;
