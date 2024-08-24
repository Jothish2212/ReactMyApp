// import React from "react";
// import axios from "axios";

// getCountryWiseStates();

//  async function getCountryWiseStates() {
//     try {
//         var countries = [];
//         const getcountry = async function getcountry() {
//             await axios.get(`http://127.0.0.1:8000/master/country/`)
//                 .then((res) => {
//                     countries.push(...res.data.response);
//                 })
//                 .catch((error) => {
//                     console.error('Error fetching countries:', error);
//                 });
//         };

//         await getcountry(); // Ensure getcountry completes before continuing


//         const countryWiseStates = await Promise.all(countries.map(async (country) => {

//             // if (country.short_code == 'IN' && country.id_country == '102') {
//                 const statesResponse = await fetch(`https://countriesnow.space/api/v0.1/countries/states/q?iso2=${country.short_code}`);
//                 const statesData = await statesResponse.json();
//                 const states = statesData?.data?.states || [];

//                 return {
//                     state: states.map((state, index) => ({
//                         id_state: index + 1,
//                         name: state.name || 'Unknown',
//                         id_country: country.id_country
//                     })),
//                 };
//             // }
//         }));


//         countryWiseStates.sort((a, b) => a.id_country - b.id_country);
//         generateSQLInsertStatements(countryWiseStates)
//         function generateSQLInsertStatements(countriesWithStates) {
//             console.log(countriesWithStates)
//             let sqlStatements = '';

//             countriesWithStates.map((res) => {
//                 if (res != undefined) {
//                     res.state.map((resss) => {
//                         const name = resss.name;
//                         const id_country = resss.id_country;
//                         sqlStatements += `INSERT INTO state (state, id_country) VALUES ('${name}', '${id_country}');\n`;


//                     })
//                 }
//             })
//             console.log(sqlStatements)
//             return sqlStatements;
//             // countriesWithStates.forEach(countryObj => {
//             //     // Access the `state` array inside each country object
//             //     countryObj.state.forEach(state => {
//             //         if (state.name !== undefined && state.id_country !== undefined) {
//             //             const name = state.name;
//             //             const id_country = state.id_country;

//             //             sqlStatements += `INSERT INTO state (state, id_country) VALUES ('${name}', '${id_country}');\n`;
//             //         }
//             //     });
//             // });


//         }

//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }
