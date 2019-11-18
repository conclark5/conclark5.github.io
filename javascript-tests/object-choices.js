const simpleObject = {
    sayName: function() {
        console.log('Simple Object');
    }
};

simpleObject.dynamicMethod = () => {
    console.log('Dynamic Method');
};

function functionObject() {
    functionObject.prototype.sayName = function() {
        console.log('Function Object');
    }
};

class CustomClass {
    sayName() {
        console.log('Custom Class');
    }
};

simpleObject.sayName();
simpleObject.dynamicMethod();

const functionObject = new FunctionObject();
functionObject.sayName();

const customeClass = new CustomClass();
CustomClass.sayName();