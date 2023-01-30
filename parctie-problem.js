/*------------------
\-problem number one-\
-------------------*/
function foo() {
    console.log('foo');
    bar()
}
// foo();

function bar() {
    console.log('bar')
}


/*------------------
\-problem number two-\
-------------------*/
function number_1(num1, num2, num3) {
    console.log(num1 + num2 + num3)
}
// number_1(20, 30, 40);


/*------------------
\-problem number three-\
-------------------*/
var arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function number(array) {
    var sum = 0;
    // var sebit = 0;
    for (var i = 0; i <= array.length; i++) {
        sum += i;
    }
    var debit = sum / array.length;
    return debit
}
// console.log(number(arry))

