window.onload = () => {

    const myForm = document.getElementById('sort-type');
    
    myForm.addEventListener('submit', (event) => {
        const value = document.querySelector("input[name='sorter']:checked").value;
        event.preventDefault();
        if (value.toLowerCase() === 'blue') {
            setColor("blueStyle");
        } else {
            setColor("redStyle");
        }
    });
    
    let currentClass = null;

    const setColor = (className) => {
        console.log("SET CLASS TO", className);
        var element = document.getElementById("form-section");
        if (currentClass) {
            element.classList.remove(currentClass);        
        }
        currentClass = className;
        element.classList.add(className);
        };
};