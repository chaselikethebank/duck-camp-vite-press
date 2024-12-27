# User Stories

## Core Features

1. **Create a Camp**  
   - **As an admin**, I want to enter camp details into the app, so that I can create a main dashboard for managing that camp.

2. **User Roles**  
   - **As an admin**, I want to assign admin or guide roles to users, so that they can log in to the camp dashboard and access the appropriate features.

3. **Create a Blind**  
   - **As an admin**, I want to add a location (blind) to the camp, so that I can assign hunts to specific locations.

4. **Create a Hunt**  
   - **As a guide**, I want to schedule a hunt and input a list of clients, so that I can manage upcoming hunts and track participants.

5. **Weather API Call**  
   - **As a guide**, I want the app to automatically make an API call on the hunt date to retrieve weather data (moon phase, rain, sunrise, wind direction), so that I can assess the conditions for the hunt.

6. **Store Weather Data**  
   - **As a system**, I want to store the retrieved weather data in the database, so that it can be referenced later for analysis or reporting.

7. **Harvest Data**  
   - **As a guide**, I want to record the number, gender, and species of birds harvested through a form, so that I can keep track of the hunt results for reporting.

## Dashboard Features

1. **Hunt Table**  
   - **As an admin**, I want to view a table of all hunts, including date, weather, guides, number of clients, and harvest data, so that I can review and manage hunt information efficiently.

2. **Sorting**  
   - **As a guide**, I want to organize the hunts table by the number of birds harvested per hunter (clients + guides), so that I can easily see which hunts were most productive.

3. **Filtering**  
   - **As an admin**, I want to filter the hunts table by date, blinds, and weather conditions (wind, moon phase, temperature, wind direction, rain), so that I can quickly narrow down the hunts I'm interested in reviewing.

4. **Future Date Filtering**  
   - **As a guide**, I want to filter hunts by future dates and view a forecast card with weather data, so that I can plan upcoming hunts based on expected conditions.

5. **Match Past Hunts**  
   - **As a guide**, I want to filter past hunts by forecasted weather conditions to identify best practices for similar weather, so that I can improve the success of future hunts.

## Next Steps

1. **API Call**  
   - **As a developer**, I want to integrate an API to retrieve relevant weather data, so that the app can provide accurate and up-to-date information for the hunts.

2. **LLM Integration**  
   - **As a developer**, I want to integrate a Large Language Model (LLM) to analyze the hunt data and provide recommendations for the best hunting strategies based on weather conditions, so that guides can optimize their hunting plans.
