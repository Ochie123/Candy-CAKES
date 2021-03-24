/* GET homepage */
const about = (req, res) => {
    res.render('generic-text',
      {
        title: 'About Candy Cakes',
        content: 'Candy Cakes helps you to book and buy quality cakes and gifts.'
      }
    );
  };
  
  module.exports = {
    about
  };
  