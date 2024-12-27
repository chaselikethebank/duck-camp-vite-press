# MVP Feature List

## Core Features

1. **Create a Camp**:  
   - Enter camp details into the app, creating a main dashboard for that camp.

2. **User Roles**:  
   - Assign admin or guide roles to users, allowing them to log in to the camp dashboard.

3. **Create a Blind**:  
   - Add a location (blind) to the camp.

4. **Create a Hunt**:  
   - Schedule a hunt with a list of clients (initially just a string input).

5. **Weather API Call**:  
   - On the hunt date, make an API call for weather data (MVP: moon, rain, sunrise, and wind direction).

6. **Store Weather Data**:  
   - After the hunt, store the weather data in the database.

7. **Harvest Data**:  
   - Record the number, gender, and species of birds harvested through a form.

## Dashboard Features

1. **Hunt Table**:  
   - Display a table of all hunts, including:
     - Date
     - Weather (rain, wind, moon phase, sunrise)
     - Guide(s)
     - Number of clients
     - Number of birds and species harvested

2. **Sorting**:  
   - Organize the table by the number of birds harvested per hunter (clients + guides).

3. **Filtering**:  
   - Add filters for:
     - Date (past and future)
     - Blinds
     - Weather elements (wind, moon phase, temperature, wind direction, rain)

4. **Future Date Filtering**:  
   - **Forecast Card**:  
     - When a future date is selected, display a card with the weather forecast for that date.
   - **Match Past Hunts**:  
     - Allow users to filter past hunts by the forecasted weather conditions to identify best practices for similar weather.

## Next Steps

1. **API Call**:  
   - Integrate an API to retrieve all relevant data.

2. **LLM Integration**:  
   - Use a Large Language Model (LLM) to analyze the data and provide recommendations for the best hunt strategies based on weather conditions.
