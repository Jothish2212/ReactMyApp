function generateSQLInsertStatements(countries) {
    let sqlStatements = 'USE your_database_name;\n\n';

    countries.forEach(country => {
        // const id_country = country.id_country
        const name = country.name.replace(/'/g, "\\'");
        const short_code = country.short_code.replace(/'/g, "\\'");
        const flag = country.flag.replace(/'/g, "\\'");
        const mobile_short_code = country.mobile_short_code.replace(/'/g, "\\'");

        sqlStatements += `INSERT INTO countries ( name, short_code, flag, mobile_short_code) VALUES ( '${name}', '${short_code}', '${flag}', '${mobile_short_code}');\n`;
    });

    return sqlStatements;
}

function getcountry() {

    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            const transformedCountries = data.map((country, index) => {
                const iddRoot = country.idd?.root || ''; // Ensure idd and root exist
                const iddSuffixes = country.idd?.suffixes || []; // Ensure suffixes exist and is an array
                const mobileShortCode = iddRoot + (iddSuffixes[0] || ''); // Concatenate root and first suffix

                return {
                    // id_country: index+1 || 'N/A', // Default value if cca2 is undefined
                    name: country.name?.common || 'Unknown', // Default value if common name is undefined
                    short_code: country.cca2 || 'N/A', // Default value if cca2 is undefined
                    flag: country.flags?.png || '', // Default value if png flag is undefined
                    mobile_short_code: mobileShortCode.trim() // Trim the result
                };
            });

            // Sort countries by name in ascending order
            const sortedCountries = transformedCountries.sort((a, b) => {
                return a.name.localeCompare(b.name); // Sort by country name
            });
            const sqlStatements = generateSQLInsertStatements(sortedCountries);

            // Save SQL statements to file

            setCountries(sortedCountries);
        })
        .catch(error => console.error('Error fetching data:', error));
}