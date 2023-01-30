var madrasa = {
    name: 'Pakunda  Madrasa',
    address: 'Pakunda',
    allStudent: 250,
    allStaf: 18,
}

//chack item 1
var chackItem_1 = madrasa.allStudent;

//chack item 2
var chackItem_2 = madrasa['allStudent'];


//chcack all keys
var allKeys = Object.keys(madrasa);


//chack all value
var allValue = Object.values(madrasa);

//chang tha objects value
// 1.
madrasa.name = "pakunda islamia madrasa "

//.2
madrasa['address'] = 'sonarga'

console.log(madrasa);