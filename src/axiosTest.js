const axios = require('axios');

// axios.get('https://randomuser.me/api/').then(resp => {
//     console.log(resp.data);
// });


module.exports.getData = function () {
    axios.get('https://randomuser.me/api/').then(resp => {
        console.log(resp.data);
    });
};