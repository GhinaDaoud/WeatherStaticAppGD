document.getElementById("getWeatherBtn").addEventListener("click", async function () {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const weatherResultDiv = document.getElementById("weatherResult");
    weatherResultDiv.innerHTML = "Loading..."; 

    try {
        const response = await fetch(`https://weatherwebappgd-ahfgauf7cugthyb2.canadacentral-01.azurewebsites.net//api/weather?city=${city}`);

        if (!response.ok) {
            throw new Error("Failed to fetch weather data.");
        }

        const data = await response.json();

        const weather = data.weather[0].description;
        const temperature = (data.main.temp - 273.15).toFixed(2); 

        weatherResultDiv.innerHTML = `
            <p><strong>Weather:</strong> ${weather}</p>
            <p><strong>Temperature:</strong> ${temperature}°C</p>
        `;
    } catch (error) {
        weatherResultDiv.innerHTML = "Error fetching weather data. Please try again.";
        console.error("Error:", error);
    }
});
