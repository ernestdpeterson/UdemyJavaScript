/*eslint-env jquery*/

var templateLiteral = `this is a 
                    multi line string
                    using template literal (\`\`) from es6`;

function func(funcVar) {
    $('#display').append(funcVar + '<br>');
}

func('the test is good');
func(templateLiteral);
