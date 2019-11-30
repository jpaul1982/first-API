const request = require('request');
const rp = require('request-promise')

// request('https://jsonplaceholder.typicode.com/users/1', (error, response, body) =>  {
//     if (error) {
//         console.error('Houston, we have a problem:', error); // Print the error if one occurred

//     } else {
//         if (response.statusCode == 200) {
//             const parsedData = JSON.parse(body);
//             console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//             console.log(`${parsedData.name} live in ${parsedData.address.city}`); // Print the HTML for the Google homepage.

//         }
//     }
// });

// rp('https://jsonplaceholder.typicode.com/users/1')
//     .then((body) => {
//         const parsedData = JSON.parse(body);
//         console.log(`${parsedData.name} live in ${parsedData.address.city}`); // Print the HTML for the Google homepage.

//     })
//     .catch((err) => {
//         console.log('error', err);
        
//     });


rp('https://rapidapi.com/imdb/api/movie-database-imdb-alternative')
.then((body) => {
    // const parsedData = JSON.parse(body);
    console.log(body); // Print the HTML for the Google homepage.

})
.catch((err) => {
    console.log('error', err);
    
});