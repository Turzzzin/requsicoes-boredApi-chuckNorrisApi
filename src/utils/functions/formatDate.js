function formatDate(date) {
    const datePart = date.split(' ')[0];
    const dateComponents = datePart.split('-');
    return `${dateComponents[2]}-${dateComponents[1]}-${dateComponents[0]}`;
}

module.exports = { formatDate };