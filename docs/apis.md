# API Endpoints

## Camps

### 1. Create a Camp
- **POST** `/api/camps`
- **Description**: Create a new camp.
- **Request Body**:
    ```json
    {
        "name": "Camp Name",
        "location": "Camp Location",
        "description": "Description of the camp"
    }
    ```
- **Response**:
    ```json
    {
        "success": true,
        "message": "Camp created successfully",
        "data": {
            "_id": "campId",
            "name": "Camp Name",
            "location": "Camp Location",
            "description": "Description of the camp"
        }
    }
    ```

### 2. Get All Camps
- **GET** `/api/camps`
- **Description**: Retrieve a list of all camps.
- **Response**:
    ```json
    [
        {
            "_id": "campId",
            "name": "Camp Name",
            "location": "Camp Location",
            "description": "Description of the camp"
        }
    ]
    ```

---

## Users

### 1. Register User
- **POST** `/api/users/register`
- **Description**: Register a new user and assign a role (admin/guide).
- **Request Body**:
    ```json
    {
        "username": "userName",
        "email": "email@example.com",
        "password": "userPassword",
        "role": "admin" // "admin" or "guide"
    }
    ```
- **Response**:
    ```json
    {
        "success": true,
        "message": "User registered successfully",
        "data": {
            "_id": "userId",
            "username": "userName",
            "role": "admin"
        }
    }
    ```

---

## Blinds

### 1. Create a Blind
- **POST** `/api/blinds`
- **Description**: Add a location (blind) to the camp.
- **Request Body**:
    ```json
    {
        "campId": "campId",
        "name": "Blind Name",
        "location": "Blind Location"
    }
    ```
- **Response**:
    ```json
    {
        "success": true,
        "message": "Blind created successfully",
        "data": {
            "_id": "blindId",
            "name": "Blind Name",
            "location": "Blind Location"
        }
    }
    ```

### 2. Get All Blinds for a Camp
- **GET** `/api/camps/:campId/blinds`
- **Description**: Retrieve all blinds associated with a particular camp.
- **Response**:
    ```json
    [
        {
            "_id": "blindId",
            "name": "Blind Name",
            "location": "Blind Location"
        }
    ]
    ```

---

## Hunts

### 1. Create a Hunt
- **POST** `/api/hunts`
- **Description**: Schedule a hunt for a specific camp, including a list of clients.
- **Request Body**:
    ```json
    {
        "campId": "campId",
        "blindId": "blindId",
        "huntDate": "2024-12-31T08:00:00Z",
        "clients": ["client1", "client2"]
    }
    ```
- **Response**:
    ```json
    {
        "success": true,
        "message": "Hunt scheduled successfully",
        "data": {
            "_id": "huntId",
            "campId": "campId",
            "blindId": "blindId",
            "huntDate": "2024-12-31T08:00:00Z",
            "clients": ["client1", "client2"]
        }
    }
    ```

### 2. Get All Hunts for a Camp
- **GET** `/api/camps/:campId/hunts`
- **Description**: Retrieve all hunts associated with a particular camp.
- **Response**:
    ```json
    [
        {
            "_id": "huntId",
            "campId": "campId",
            "blindId": "blindId",
            "huntDate": "2024-12-31T08:00:00Z",
            "clients": ["client1", "client2"]
        }
    ]
    ```

---

## Weather Data

### 1. Get Weather Data for a Hunt
- **GET** `/api/hunts/:huntId/weather`
- **Description**: Retrieve weather data for a specific hunt.
- **Response**:
    ```json
    {
        "success": true,
        "data": {
            "huntId": "huntId",
            "weather": {
                "moonPhase": "Full Moon",
                "rain": "None",
                "sunrise": "07:00 AM",
                "windDirection": "North"
            }
        }
    }
    ```

### 2. Store Weather Data after a Hunt
- **POST** `/api/hunts/:huntId/weather`
- **Description**: Store weather data after a hunt has been completed.
- **Request Body**:
    ```json
    {
        "moonPhase": "Full Moon",
        "rain": "None",
        "sunrise": "07:00 AM",
        "windDirection": "North"
    }
    ```
- **Response**:
    ```json
    {
        "success": true,
        "message": "Weather data stored successfully"
    }
    ```

---

## Harvest Data

### 1. Record Harvest Data
- **POST** `/api/hunts/:huntId/harvest`
- **Description**: Record the number, gender, and species of birds harvested.
- **Request Body**:
    ```json
    {
        "number": 10,
        "gender": "Male",
        "species": "Mallard"
    }
    ```
- **Response**:
    ```json
    {
        "success": true,
        "message": "Harvest data recorded successfully"
    }
    ```

---

## Forecast & Filtering

### 1. Get Forecast for a Future Hunt Date
- **GET** `/api/forecast/:date`
- **Description**: Retrieve a weather forecast for a specific date.
- **Response**:
    ```json
    {
        "success": true,
        "data": {
            "forecast": {
                "moonPhase": "New Moon",
                "rain": "Light Rain",
                "sunrise": "06:00 AM",
                "windDirection": "West"
            }
        }
    }
    ```

### 2. Filter Past Hunts by Weather Conditions
- **GET** `/api/hunts/filter`
- **Description**: Filter past hunts by weather conditions.
- **Query Parameters**:
    - `date`: "past"
    - `wind`: "North"
    - `moonPhase`: "Full Moon"
- **Response**:
    ```json
    [
        {
            "_id": "huntId",
            "date": "2024-12-31T08:00:00Z",
            "weather": {
                "rain": "None",
                "windDirection": "North",
                "moonPhase": "Full Moon"
            }
        }
    ]
    ```

---

## Notes

- Each route handles CRUD operations for camps, users, hunts, blinds, weather, and harvest data.
- Ensure to authenticate the users for sensitive operations (e.g., using JWT tokens or session-based authentication).
- Integrate with weather APIs to automatically fetch forecast data.
