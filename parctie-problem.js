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

function number_2(array) {
    var sum = 0;
    // var sebit = 0;
    for (var i = 0; i <= array.length; i++) {
        sum += i;
    }
    var debit = sum / array.length;
    return debit
}
// console.log(number_2(arry))


/*------------------
\- problem number four -\
-------------------*/
function number_3(num) {
    var modula = num % 2;
    return modula
}

// console.log('it is event number', number_3(20))

function number_4(num) {
    console.log('it is odd number', num % 2)
}
// number_4(29)


/*------------------
\- problem number five -\
-------------------*/

var color = 'red';
if (color === 'red') {
    // console.log('you may be in danger . ')
}
else if (color === 'yellow') {
    console.log('ami yellow color');
}
else {
    console.log('ami green color')
}

/* 
---switch---
*/
var color = 'yellow';
switch (color) {
    case 'red':
        console.log('ami red color');
        break;
    case 'yellow':
        // console.log('ami yellow color');
        break;
    default:
    // console.log('ami green color')
}



/*------------------
\- problem number six -\
-------------------*/

function number_5(num) {
    for (var i = 1; i <= 10; i++) {
        var multiplication = num * i;
        console.log(num + ' X' + ' ' + i + ' = ' + multiplication)
    }
}
// number_5(13)


function namta(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + ' x' + ' ' + i + ' = ' + num * i)
    }
}
// namta(5)



/*------------------
\- problem number seven -\
-------------------*/

function name(latter) {
    return latter = 'md sdiqur rahman sani';
}
var latter = 'MD SADIQUR RAHMAN SANI';
// console.log(latter)
// console.log(name(latter))


/*------------------
\- problem number eight -\
-------------------*/

function fullName(first, last) {
    console.log(first + " " + last);
}

var first = 'Md';
var last = 'Sadiq';
fullName(first, last);