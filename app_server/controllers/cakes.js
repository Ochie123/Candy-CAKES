const homelist = (req, res) => {
    res.render('cakes-list', { title: 'Home' });
    };
const cakeInfo = (req, res) => {
    res.render('cakeInfo', { title: 'Cake Info' });
}
const addReview = (req, res) => {
    res.render('cake-review-form', { title: "Add Review" });
}
module.exports = {
    homelist,
    cakeInfo,
    addReview
};