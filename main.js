// https://ip-api.com/docs/api:json
const fetchIpInformation = async () => {
  const ipInformation = await fetch('http://ip-api.com/json/').then((response) => {
    return response.json();
  });
  handleUserBasedOnIp(ipInformation.country, ipInformation.countryCode);
};

const handleUserBasedOnIp = (country, countryCode) => {
  // countryCode is DE for Germany
  // country is Germany
  if (countryCode === 'DE') {
    console.log('Germany');
    document.getElementById('countrycode').innerText = `CountryCode: ${countryCode}`;
  }

  if (country === 'Germany') {
    console.log('true as well');
    document.getElementById('country').innerText = `Country: ${country}`;
  }
};

fetchIpInformation();

