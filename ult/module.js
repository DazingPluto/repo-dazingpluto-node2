function helloWorld() {
    return "hello world"
}
function goodbyeWorld() {
    return 'goodbyeWorld'
}
function goodAfternoon() {
    return 'good afternoon world'
}
const playerOne = {
    name: 'Hunter McGuire',
    level: 33,
    mount: {
        horse: 'white',
        level: 7
    }
}
class objective{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.introduction = function() {
            return 'Hi';
        }
    }
}
module.exports = {
    helloWorld,
    goodbyeWorld,
    goodAfternoon,
    playerOne,
    objective
}