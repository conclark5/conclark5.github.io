window.onload = () => {

    var person = {
        firstName:'Connor',
        lastName:'Clark',
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        }
    };

    var calculator = {
        operand01:-1,
        operand02:-1,
        add: function() {
            return this.operand01 + this.operand02
        },
        subtract: function() {
            return this.operand01 - this.operand02
        }
    };

    calculator.operand01 = person.firstName.length;
    calculator.operand02 = person.lastName.length;

    calculator.multiply = calculator.operand01 * calculator.operand02;

    function divider(title) {
        console.log("\n====================================");
        console.log(title);
        console.log("====================================\n");
    }
    divider('Person');

    console.log('first name:', person.firstName);
    console.log('last name:', person.lastName);
    console.log('full name:', person.fullName());


    function divider(title) {
        console.log("\n====================================");
        console.log(title);
        console.log("====================================\n");
    }
    divider('Calculator');
    console.log('operand01 is the length of firstName:', calculator.operand01);
    console.log('operand02 is the length of lastName:', calculator.operand02);
    console.log('add length of first and last names:', calculator.add());
    console.log('subtract length of first and last names:', calculator.subtract());
    console.log('multiply length of first and last names:', calculator.multiply);
};


