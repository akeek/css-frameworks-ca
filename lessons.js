// Template object
const myCountry = {
    country: 'Norway',
    city: 'Oslo',
    currency: 'Krone',
  };

  console.log(myCountry);

  const myCountryJSON = JSON.stringify(myCountry);
  console.log(myCountryJSON)

  const myCountryPARSE = JSON.parse(myCountryJSON)
  console.log(myCountryPARSE)

  localStorage.setItem('firstName', 'Ola');
  localStorage.setItem('lastName', 'Nordmann');