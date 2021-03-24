const homelist = (req, res) => {
  res.render('cakes-list', 
    {
      title: 'Candy Cakes - Find cakes and gifts for your friends',
      pageHeader: {
        title: 'Candy Cakes',
        strapLine: 'Cakes and gifts near me!'
      },
      sidebar: "Want to celebrate with us? Candy Cakes helps you find ready made and custom cakes. Find the gifts you are looking for.",
      cakes: [
        {
          name: 'Birthday Cakes',
          subdef: 'Candy Creams',
          rating: 3,
          qualities: ['Smells are free', 'Crazy with cakes', 'Age Gracefully'],
          distance: '100'
        },
        {
          name: 'Valentines',
          subdef: 'Forever us',
          rating: 4,
          qualities: ['Nice and Big', 'Appreciate True Love', 'Kiss and Share'],
          distance: '200'
        },
        {
          name: 'Anniversary Cakes',
          subdef: 'How it was',
          rating: 2,
          qualities: ['We used to be', 'crazy in love', 'Can we just go back'],
          distance: '250'
        }
      ]
    }
  );
};
       
const cakeInfo = (req, res) => {
    res.render('cake-info',
    {
      title: 'Birthday Cakes',
       pageHeader: {
        title: 'Candy Cakes',
      },
      sidebar: {
        context: 'is here so you can share cakes with your loves',
        callToAction: 'If you\'ve bought and you liked it - please leave a review to help other people just like you.'
      },
      cake: {
        name: 'Birthday Cakes',
        subdef: 'Candy Creams',
        rating: 3,
        qualities: ['Smells are free', 'Crazy with cakes', 'Age Gracefully'],
        openingTimes: [
          {
            days: 'Monday - Friday',
            opening: '7:00am',
            closing: '7:00pm',
            closed: false
          },
          {
            days: 'Saturday',
            opening: '8:00am',
            closing: '5:00pm',
            closed: false
          },
          {
            days: 'Sunday',
            closed: true
          }
        ],
        reviews: [
          {
            author: 'Kari A',
            rating: 5,
            timestamp: '16 March 2021',
            reviewText: 'What a great place. I can\'t say enough good things about it.'
          },
          {
            author: 'Young Pope',
            rating: 3,
            timestamp: '16 June 2021',
            reviewText: 'Service was great.'
          }
        ]
      }
    }
  );
};
const addReview = (req, res) => {
    res.render('cake-review-form',
      {
        title: 'Review Candy Cakes' ,
        pageHeader: { title: 'Review Birthday Cakes' }
      }
    );
  };
module.exports = {
    homelist,
    cakeInfo,
    addReview
};