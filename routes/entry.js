const express = require('express');
const router = express.Router();
const axios = require('axios');

const BaseURL = 'https://api.spacexdata.com/v3/launches/';
let upcoming = [];
let past = [];

router.get('/', (req, res) => {
  //* For Getting 3 Upcoming Launches
  axios
    .get(
      BaseURL +
        'upcoming?limit=3&filter=flight_number,launch_date_utc,rocket/rocket_name,links/mission_patch_link'
    )
    .then(function(response) {
      //console.log(response.data);
      upcoming = response.data;

      //* For Getting Past Launches
      axios
        .get(
          BaseURL +
            'past?filter=flight_number,launch_date_utc,rocket/rocket_name,links/mission_patch'
        )
        .then(function(response) {
          // handle success
          past = response.data;
          res.render('homepg', { upcoming: upcoming, past: past });
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
});

module.exports = router;
