function doCoding() {
    console.log('I am coding');
}

console.log('I am first');
console.log('I am second');
// setTimeout(doCoding, 5000);
setTimeout(function () {
    console.log('I am working');
}, 5000)
setTimeout(() => {
    console.log('I am starting')
}, 3000)
console.log('I am third');
console.log('I am fourth');