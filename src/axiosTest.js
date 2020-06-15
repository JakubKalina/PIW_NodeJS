const axios = require('axios');

async function getSampleData() {
    const response = await axios.get('https://randomuser.me/api/');
    const data = response.data;
    console.log("Pobrano dane użytkownika o adresie email: " + data.results[0].email + " oraz numerze telefonu: " + data.results[0].cell);
}

getSampleData();