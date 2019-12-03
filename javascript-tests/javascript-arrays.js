window.onload = () => {

    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    };

    const numbersAction = document.getElementById('numbers-action');
    const languageNamesAction = document.getElementById('language-names-action');
    const techLanguagePopularityAction = document.getElementById('tech-language-popularity-action');
    
    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5],
        languageNames: ['JavaScript', 'HTML', 'CSS', 'Java', 'C#', 'Python', 'C/C++'],
    };

    arrays.numbers.sort((a, b) => a - b);
    arrays.languageNames.sort();

    numbersAction.onclick = () => {
        const numbersDisplay = document.getElementById('numbers-display');
        for (let number of arrays.numbers) {
            console.log(number);
            elfCode.appendToList(numbersDisplay, number);
        }
    };

    languageNamesAction.onclick = () => {
        const languageNamesDisplay = document.getElementById('language-names-display');
        for (let value of arrays.languageNames) {
            console.log(value);
            elfCode.appendToList(languageNamesDisplay, value);
        }
    };

    techLanguagePopularityAction.onclick = () => {
        const techLanguagePopularityDisplay = document.getElementById('tech-language-popularity-display');

    };
}