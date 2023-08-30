const {v4: uuidv4 } = require('uuid');

function guidGenerator() {
    let guidNumber = uuidv4();
    return guidNumber;
}

module.exports = { guidGenerator };