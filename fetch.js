console.log(11111111);
console.log(22222222);
setTimeout(() => console.log('yahoo'), 5000)
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
console.log(33333333);
console.log(44444444);
