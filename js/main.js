/* eslint-env jquery */
/* exported title, fetchQuote */
/* eslint-disable no-console */ 

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

// Call Apply Bind
var title = 'window';

function StockQuote(company) {
    this.company = company;
    this.title = company;
    this.showQuote = true;
    this.quotes = {
        'apple': '60',
        'ibm': '55',
        'microsoft': '65'
    };
}

StockQuote.prototype.getQuote = function() {
    console.log(`title: ${this.title}`);
    console.log(this.quotes[this.company]);
};

function fetchQuote() {
    var company = document.getElementById('company').value;
    let quote = new StockQuote(company);
    setInterval(quote.getQuote.bind(quote), 3000);
}

var person = {
    firstName: 'Ernest',
    lastName: 'Peterson',
    getFullName: function(greeting){ 
        return greeting + '! ' + this.firstName + ' ' + this. lastName;
    }
};

var person2 = {
    firstName: 'Not',
    lastName: 'Ernest'
};
console.log(person.getFullName('Hello'));
console.log(person.getFullName.apply(person2, ['Hello', ' how']));

// es5 constructor function
function Alert(title) {
    this.myTitle = title || 'alert';
}

Alert.prototype.someAlert = function() {
    console.log(this.myTitle);
};

Alert.prototype.toString = function() {
    return `Alert->${this.myTitle}`;
};

var thisAlert = new Alert('Hello World!');
console.log(thisAlert.myTitle);
console.log(thisAlert.toString());

// new constructor function "success"
function SuccessAlert(input) {
    Alert.call(this, input);
    this.type = 'success';
    console.log('successful execution');
}

SuccessAlert.prototype = Object.create(Alert.prototype);
SuccessAlert.prototype.constructor = SuccessAlert;

var successCall = new SuccessAlert('Successfully called');
successCall.someAlert();

// es6 
class ES6Alert {
    constructor(title) {
        this.es6Title = title || 'alert: you didn\'t enter a title';
    }
    show(){
        console.log('ES6 says ', this.es6Title);
    }
    toString() {
        return `Alert_>${this.es6Title}`;
    }
}

class SuccessAlertES6 extends ES6Alert {
    constructor(someTitleData) {
        super(someTitleData); // calls the base class
        console.log(someTitleData);
        this.type = 'success';
    }
}

var newAlert = new ES6Alert('Hello World!');
console.log('ES6 says ', newAlert.es6Title);
newAlert.show();
console.log('ES6 says ', newAlert.toString());

var newSuccessAlert = new SuccessAlertES6('New Hello World!');
newSuccessAlert.show();