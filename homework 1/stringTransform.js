function stringToLower(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function correctSpaces(str) {
    return str.replace(/\s+/g,' ')
                    .replace(/([;.!?:])/, '$1 ')    // Запятая и точка не работают вместе
                    .replace(/\,/, ', ')            // Отдельная замена на запятую
                    .replace(/ +([;,.!?:])/g, '$1')
                    .trim();
}


function wordsNumber(str) {
    let correctString = correctSpaces(str);
    return correctString.match(/\S+?\s|\S+?$/g).length;
}

function countWords(str) {
    let correctString = str.replace(/\s+/g,' ').replace(/([;.!?:])/, '').replace(/\,/, '').trim().toLowerCase();
    let arr = correctString.split(' ');

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (result.includes(arr[i])) {
            continue;
        }

        let count = 1;
        result.push(arr[i]);

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) count++;
        }

        console.log(`Слово ${arr[i]} встречается ${count} раз(а)`);
    }
}

console.log(wordsNumber('Вот пример строки ,в которой     используются знаки препинания.'));

console.log(correctSpaces('Вот пример строки ,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.'));

countWords('Текст, в котором слово текст несколько раз встречается и слово тоже тоже');
