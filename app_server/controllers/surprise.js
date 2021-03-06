const surprise = (req, res) => {
    res.render('surprise', { title: 'Surprise' });
}

module.exports = {
    surprise
}