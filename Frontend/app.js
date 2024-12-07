document.getElementById("getWeatherBtn").addEventListener("click", async function () {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const weatherResultDiv = document.getElementById("weatherResult");
    weatherResultDiv.innerHTML = "Loading..."; // Show loading text

    try {
        // Fetch weather data from your API
        const response = await fetch(`/api/weather?city=${city}`);

        if (!response.ok) {
            throw new Error("Failed to fetch weather data.");
        }

        const data = await response.json();

        // Show the weather information
        const weather = data.weather[0].description;
        const temperature = (data.main.temp - 273.15).toFixed(2); // Convert from Kelvin to Celsius

        weatherResultDiv.innerHTML = `
            <p><strong>Weather:</strong> ${weather}</p>
            <p><strong>Temperature:</strong> ${temperature}°C</p>
        `;
    } catch (error) {
        weatherResultDiv.innerHTML = "Error fetching weather data. Please try again.";
        console.error("Error:", error);
    }
});
