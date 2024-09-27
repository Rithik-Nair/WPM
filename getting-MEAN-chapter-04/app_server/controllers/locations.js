/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Restaurant Finder - Discover Great Restaurants Near You',
        pageHeader: {
            title: 'Restaurant Finder',
            strapline: 'Find the best places to eat near your location!'
        },
        sidebar: "Looking for a place to enjoy a delicious meal? Restaurant Finder helps you locate great places with amazing food, a comfortable atmosphere, and excellent service. Let us guide you to your next favorite spot!",
        locations: [{
            name: 'The Gourmet Kitchen',
            address: '10 Main Street, New York, NY 10001',
            rating: 5,
            facilities: ['Fine Dining', 'Vegetarian Options', 'Wine'],
            distance: '150m'
        }, {
            name: 'Bella Italia',
            address: '200 West Street, New York, NY 10002',
            rating: 4,
            facilities: ['Italian', 'Pizza', 'Pasta', 'Wine'],
            distance: '300m'
        }, {
            name: 'Taco Fiesta',
            address: '500 East Street, New York, NY 10003',
            rating: 3,
            facilities: ['Mexican', 'Tacos', 'Drinks'],
            distance: '400m'
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'The Gourmet Kitchen',
        pageHeader: {
            title: 'The Gourmet Kitchen'
        },
        sidebar: {
            context: 'is listed on Restaurant Finder because it offers a gourmet dining experience with a variety of dishes and an elegant atmosphere.',
            callToAction: 'If you\'ve been here and enjoyed your experience, or have any suggestions, please leave a review to help others make a choice.'
        },
        location: {
            name: 'The Gourmet Kitchen',
            address: '10 Main Street, New York, NY 10001',
            rating: 5,
            facilities: ['Fine Dining', 'Vegetarian Options', 'Wine'],
            coords: {
                lat: 40.712776,
                lng: -74.005974
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '12:00pm',
                closing: '10:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '1:00pm',
                closing: '11:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'John Doe',
                rating: 5,
                timestamp: '20 September 2024',
                reviewText: 'Absolutely fantastic dining experience! The food and wine were exceptional.'
            }, {
                author: 'Jane Smith',
                rating: 4,
                timestamp: '10 September 2024',
                reviewText: 'Great place, but a bit pricey for the portion size. Still loved it!'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review The Gourmet Kitchen on Restaurant Finder',
        pageHeader: {
            title: 'Review The Gourmet Kitchen'
        }
    });
};
