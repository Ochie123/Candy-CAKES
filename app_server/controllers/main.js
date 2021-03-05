const index = (req, res) => {
    res.render('index', { title: 'Candy Cakes' });
    };
module.exports = {
    index
};