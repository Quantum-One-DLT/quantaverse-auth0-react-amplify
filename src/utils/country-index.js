const countries = require("./countries.json");

function countryList(countryCodes) {
  if (countryCodes.length === 0) return "";

  return countryCodes.map((code) => {
    const name = countries[code];
      if (!name) {
        throw new Error("invalid country");
      }
      return `${name} (${code})`;
  }).join(", ");
}

function main() {
  // Values from Developer Dashboard
  // Your application name goes here
  const applicationName = "Quantum One DAO";
  // Your application UID goes here
  const applicationUID = "rZ0cAmPpY2SPgF4bXqBrzndqoTzk1EYsq4RtQ1fNhe0";
  
  // Your required KYC level goes here
  const level = "plus+liveness";

  // Your blocked citizenship country codes go here
  // Leave empty if you don't want to block any countries
  const citizenshipCountryList = ["BY", "CG", "CU", "CD", "ET", "BF", "HK", "RU", "CO", "KP", "LY", "SY", "IQ"];

  // Your blocked residency country codes go here
  // Leave empty if you don't want to block any countries
  const residencyCountryList = ["BY", "CG", "CU", "CD", "ET", "BF", "HK", "RU", "CO", "KP", "LY", "SY", "IQ"];
  
  const lines = [
    `I authorize ${applicationName} (${applicationUID}) to get a proof from Fractal that:`,
    `- I passed KYC level ${level}`
  ];

  if (citizenshipCountryList.length > 0) {
    lines.push(
      `- I am not a citizen of the following countries: ${countryList(citizenshipCountryList)}`
    );
  }

  if (residencyCountryList.length > 0) {
    lines.push(
      `- I am not a resident of the following countries: ${countryList(residencyCountryList)}`
    );
  }

  const message = lines.join("\n");
  console.log(message);
}

main();
