const {v4: uuidv4 } = require('uuid');

function guidGenerator() {
    let guidNumber = uuidv4();
    return guidNumber;
}

function formatDate(date) {
    const datePart = date.split(' ')[0];
    const dateComponents = datePart.split('-');
    return `${dateComponents[2]}-${dateComponents[1]}-${dateComponents[0]}`;
}

function replaceChuckNorris(joke) {
    return joke.replace(/Chuck Norris/g, 'CHUCK NORRIS');
}

module.exports = { guidGenerator, formatDate, replaceChuckNorris };