var man = {
    name: 'manos',
    hat: 2,
    matha: 1,
    kan: 2,
    nak: 1
}

//objects property name
var propertyName = Object.keys(man);
// console.log(propertyName);

//objects property value
var valueName = Object.values(man);
// console.log(valueName);

// objects property =[ 'name', 'hat', 'matha', 'kan', 'nak' ]

for (var i = 0; i < propertyName.length; i++) {
    var pName = propertyName[i];
    var vName = man[pName]
    // console.log(pName, vName)
}

//for in loop 

for (var propertyName in man) {
    var value = man[propertyName];
    // console.log(propertyName, value)
}



var computer = {
    minitor: 'Hd',
    pc: '500gb',
    box: 2,
    mouse: 'black'
}

var property = Object.keys(computer);
for (var i = 0; i < property.length; i++) {
    // console.log(property[i], computer[property[i]])
}


for (var propertyName in computer) {
    // console.log(propertyName, computer[propertyName]);
}




var computer = {
    minitor: 'Hd',
    pc: '500gb',
    box: 2,
    mouse: 'black'
}


var objectsEntries = Object.entries(computer);
console.log(objectsEntries)