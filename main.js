 // const axios = require('axios');

async function searchCountry() {
    try {
        const result = await axios.get("https://restcountries.eu/rest/v2/name/Belgium");
        const country = result.data[0];
        const name = country.name
        const nameRegionAmount = [country.name] + " is situated in " + [country.subregion] + ". This country has a population of " + [country.population] + ". "
        const capital = "The capital is " + [country.capital]
        const countryFlag = country.flag

        function countryCurrency() {
            const currencies = country.currencies.map((currency) => {
                return currency.name
            })
            return "and you can pay with " + currencies.join("'s and ") + "'s."
        }

        function giveSpokenLanguages() {
                const spokenLanguages = country.languages.map((spokenLanguage) => {
                    return spokenLanguage.name
                })
                return "They speak " + spokenLanguages.join(" and ") +"."
            }

        const flagContainer = document.createElement("IMG");
        flagContainer.setAttribute("src", countryFlag);
        flagContainer.setAttribute("width", "304");
        flagContainer.setAttribute("height", "228");
        flagContainer.setAttribute("alt", countryFlag)
        document.body.appendChild(flagContainer);


        const nameContainer = document.getElementById("country-name");
        nameContainer.textContent = (name);
        document.body.appendChild(nameContainer);

        const nameRegionAmountContainer = document.getElementById("name-sub-amount");
        nameRegionAmountContainer.textContent = (nameRegionAmount);
        document.body.appendChild(nameRegionAmountContainer);

        const capitalCurrencyContainer = document.getElementById("capital-currency");
        capitalCurrencyContainer.textContent = (capital + " " + countryCurrency(country));
        document.body.appendChild(capitalCurrencyContainer);

        const languagesContainer = document.getElementById("languages");
        languagesContainer.textContent = (giveSpokenLanguages(country));
        document.body.appendChild(languagesContainer);


    } catch (e) {
        console.error(e);

    }
};

function onKeyEnterPressDoThis() {
    searchCountry()
}





const inputElement = document.getElementById("country-input");
inputElement.addEventListener("keypress", function (e) {
    const key = e.which || e.keyCode || 0;

    if (key === 13) {
        onKeyEnterPressDoThis();
    }
});

const buttonElement = document.getElementById("button");
buttonElement.addEventListener('click', onKeyEnterPressDoThis);

