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

  // you can use either country or countryCode, or both
  if (countryCode === 'DE') {
    // div with id "display-ads" is hidden initially. If the condition passes, we set the display to block and show the ads
    const addContainers = document.getElementsByClassName('google-adsense');

    for (let i = 0; i < addContainers.length; i++) {
      addContainers[i].style.display = 'block';
    }
  }
};

fetchIpInformation();