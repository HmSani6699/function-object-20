var madrasa = {
    name: 'Pakunda',
    address: 'Pakunda',
    allStudent: 250,
    allStaf: 18,
}

//chack item us the dot notation
var chackItem_1 = madrasa.allStudent;

//chack item  us the bracket notation
var chackItem_2 = madrasa['allStudent'];

// chack itm tha us of variable

var propertyName = 'name';
var propertyValue = madrasa[propertyName]
// console.log(propertyName, propertyValue)


//chack all keys
var allKeys = Object.keys(madrasa);


//chack all value
var allValue = Object.values(madrasa);

//set tha objects value
// 1.
// console.log(madrasa);
madrasa.name = 'pakunda'
//2.
madrasa['name'] = 'islamia'
// console.log(madrasa);
//3.
madrasa[propertyName] = 'Mdrasa'
// console.log(madrasa);




const friends = {
    name: 'Tlha',
    age: 20,
    address: 'Sirabo',
    thana: 'Sonarga',
}

//chack  the objects property item
const friendsProperty = 'name';
const friendsValue = friends[friendsProperty];
// console.log(friendsProperty, friends[friendsProperty]);
// console.log(friends);

//set the property item

friends[friendsProperty] = 'adiba';
// console.log(friends);
friends[friendsProperty] = 'Salim';
// console.log(friends);





/* ----------------
//-----Objects----///
-------------*/

const subjects = {
    name: 'Bangla',
    number: 200,
    page: 300,
    price: 170,
}

/* 
-------chack objects property------
 */

//chack the specific property name. us the dot notation
var subjectsProperty = subjects.name;

//chack the specific property name. us the vrecat notation
var subjectsProperty = subjects['name'];

//chack the specific property name. us the variable
var subjectsProperty = 'name';
var subjectsValue = subjects[subjectsProperty];

// console.log(subjects)
/* 
-----set objects value
*/

//set the specific objects value. us the dot notation
var subjectsValue = subjects.name = 'Englsh';
// console.log(subjects)

//set the specific objects value. us the vrecat notation 
var subjectsValue = subjects['name'] = 'Somaj';

//set the specific objects value. us the variable

var subjectsValue = subjects[subjectsProperty] = 'Arbis'
// console.log(subjects)


/* 
------Access the objects all property name----
*/
var allPropertyName = Object.keys(subjects);
// console.log(allPropertyName)


/* 
------ Access the objects all Value name----
*/
var allValueName = Object.values(subjects);
// console.log(allValueName)