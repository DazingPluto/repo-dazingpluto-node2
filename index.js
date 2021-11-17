const myModule = require ('./ult/module');
console.log(myModule);

myModule.helloWorld();
console.log(myModule.helloWorld());

const faker = require ('faker');
let randomeName= faker.name.findName();
console.log(randomeName);

const radomAdress = {
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    zipCode: faker.address.zipCode()
}
console.log(radomAdress);

const axious = require ('axios');

axious.get('https://api.github.com/users/romebell')
.then(function(response) {
    console.log(response.data);
})
.catch(function(err) {
    console.log(err);
});