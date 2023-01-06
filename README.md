# weather-dashboard-server-APIs

Weather dashboard that will run in the browser and feature dynamically updated `HTML and CSS`

## Overview 

Server APIs allow developers to access server's data and functionality by making requests with specific parameters to a URL. Here I will be **retrieving data from another `application's API` and using it in the context of my own**. 

I will build a weather dashboard that runs in the browser and features dynamically updated `HTML and CSS`.

I used the [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities. The link takes you to a guide on how to use the 5 Day Forecast API. It's required to register for an API key in order to use this API (After registering for a new API key, it might take up to 2 hours for that API key to activate).

The base URL for your API calls should look like the following: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`.

**Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?

Using `localStorage` to store any persistent data. 

Information on how to work with the OpenWeather API - [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).


## User Story
```
I AM a student 
WHO needs a portfolio of work 
SO THAT I can showcase my skills and talents to potential employers
```

## Acceptance Criteria

* Create a weather dashboard with form inputs.
  * When a user searches for a city they are presented with current and future conditions for that city and that city is added to the search history
  * When a user views the current weather conditions for that city they are presented with:
    * The city name
    * The date
    * An icon representation of weather conditions
    * The temperature
    * The humidity
    * The wind speed
  * When a user view future weather conditions for that city they are presented with a 5-day forecast that displays:
    * The date
    * An icon representation of weather conditions
    * The temperature
    * The humidity
  * When a user click on a city in the search history they are again presented with current and future conditions for that city

## Mock-Up

The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for London.](./assets/10-server-side-apis-challenge-demo.png)

## Link to Deployed Application

[Live URL]()

## Link to Project GitHub Repo

[GitHub Repo]()

## Screenshot
<img src="https://github.com/ladycosy/anna-portfolio_page/blob/fc7d317ed90cd572c830b26ed04c3ee0de7c3958/images/page_screenshot.png" alt="page screenshot" width="400"/>

---
