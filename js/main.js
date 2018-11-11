/*eslint-env jquery*/

const constantVariable = 'some value for a constant variable';

var templateLiteral = `this is a 
                    multi line string
                    using template literal (\`\`) from es6.`;

function func(funcVar) {
    $('#display').append(funcVar + '<br>');
}

//sending data to be displayed on the page by a function
func('the test is good');
func(templateLiteral);
func(constantVariable);

//returning a value from a function to be used in a variable
function add(num1, num2) {
    let result = num1 + num2;
    return result;
}

let funcResult = add(10, 5);
func(`The returned value from the add function is ${funcResult}`);

// json from https://jsonplaceholder.typicode.com
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json));
function fetchUsers(userID){
    fetch('https://jsonplaceholder.typicode.com/users/' + userID)
        .then(res => res.json())
        .then(user => { console.log('User ID form the function call: ', userID, 'The data returned is: ',user);}
        );
}
fetchUsers(2);