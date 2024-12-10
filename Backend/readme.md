# Backend API Documentation

## POST /users/register

Registers a new user account.

### Description

Creates a new user with the provided information.

### Request Body

- `fullname` (object)
  - `firstname` (string): Required. Minimum 3 characters.
  - `lastname` (string): Optional. Minimum 3 characters.
- `email` (string): Required. Must be a valid email address.
- `password` (string): Required. Minimum 6 characters.

### Responses

- **201 Created**

  - Description: User created successfully.
  - Body:

    ```json
    {
      "token": "string",
      "user": {
        "_id": "string",
        "fullname": {
          "firstname": "string",
          "lastname": "string"
        },
        "email": "string"
        // ...existing fields...
      }
    }
    ```

- **400 Bad Request**

  - Description: Validation errors occurred.
  - Body:

    ```json
    {
      "errors": [
        {
          "msg": "string",
          "param": "string",
          "location": "body"
        }
        // ...existing errors...
      ]
    }
    ```

- **500 Internal Server Error**

  - Description: An unexpected error occurred.

### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## POST /users/login

Logs in an existing user.

### Description

Authenticates a user with the provided email and password.

### Request Body

- `email` (string): Required. Must be a valid email address.
- `password` (string): Required. Minimum 6 characters.

### Responses

- **200 OK**

  - Description: User authenticated successfully.
  - Body:

    ```json
    {
      "token": "string",
      "user": {
        "_id": "string",
        "fullname": {
          "firstname": "string",
          "lastname": "string"
        },
        "email": "string"
        // ...existing fields...
      }
    }
    ```

- **400 Bad Request**

  - Description: Validation errors occurred.
  - Body:

    ```json
    {
      "errors": [
        {
          "msg": "string",
          "param": "string",
          "location": "body"
        }
        // ...existing errors...
      ]
    }
    ```

- **401 Unauthorized**

  - Description: Invalid email or password.
  - Body:

    ```json
    {
      "message": "Invalid email or password"
    }
    ```

- **500 Internal Server Error**

  - Description: An unexpected error occurred.

### Example Request

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## GET /users/profile

Gets the profile of the authenticated user.

### Description

Retrieves the profile information of the currently authenticated user.

### Responses

- **200 OK**

  - Description: User profile retrieved successfully.
  - Body:

    ```json
    {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string"
      // ...existing fields...
    }
    ```

- **401 Unauthorized**

  - Description: User is not authenticated.
  - Body:

    ```json
    {
      "message": "Unauthorized"
    }
    ```

- **500 Internal Server Error**

  - Description: An unexpected error occurred.

### Example Request

```json
{
  "token": "string"
}
```

## GET /users/logout

Logs out the authenticated user.

### Description

Logs out the currently authenticated user by clearing the authentication token.

### Responses

- **200 OK**

  - Description: User logged out successfully.
  - Body:

    ```json
    {
      "message": "Logged out successfully"
    }
    ```

- **401 Unauthorized**

  - Description: User is not authenticated.
  - Body:

    ```json
    {
      "message": "Unauthorized"
    }
    ```

- **500 Internal Server Error**

  - Description: An unexpected error occurred.

### Example Request

```json
{
  "token": "string"
}
```

## POST /captains/register

Registers a new captain account.

### Description

Creates a new captain with the provided information.

### Request Body

- `fullname` (object)
  - `firstname` (string): Required. Minimum 3 characters.
  - `lastname` (string): Optional. Minimum 3 characters.
- `email` (string): Required. Must be a valid email address.
- `password` (string): Required. Minimum 6 characters.
- `vehicle` (object)
  - `color` (string): Required. Minimum 3 characters.
  - `plate` (string): Required. Minimum 3 characters.
  - `capacity` (number): Required. Minimum 1.
  - `vehicleType` (string): Required. Must be one of ['car', 'motorcycle', 'auto'].

### Responses

- **201 Created**

  - Description: Captain created successfully.
  - Body:

    ```json
    {
      "token": "string",
      "captain": {
        "_id": "string",
        "fullname": {
          "firstname": "string",
          "lastname": "string"
        },
        "email": "string",
        "vehicle": {
          "color": "string",
          "plate": "string",
          "capacity": "number",
          "vehicleType": "string"
        }
        // ...existing fields...
      }
    }
    ```

- **400 Bad Request**

  - Description: Validation errors occurred.
  - Body:

    ```json
    {
      "errors": [
        {
          "msg": "string",
          "param": "string",
          "location": "body"
        }
        // ...existing errors...
      ]
    }
    ```

- **500 Internal Server Error**

  - Description: An unexpected error occurred.

### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## POST /captains/login

Logs in an existing captain.

### Description

Authenticates a captain with the provided email and password.

### Request Body

- `email` (string): Required. Must be a valid email address.
- `password` (string): Required. Minimum 6 characters.

### Responses

- **200 OK**

  - Description: Captain authenticated successfully.
  - Body:

    ```json
    {
      "token": "string",
      "captain": {
        "_id": "string",
        "fullname": {
          "firstname": "string",
          "lastname": "string"
        },
        "email": "string",
        "vehicle": {
          "color": "string",
          "plate": "string",
          "capacity": "number",
          "vehicleType": "string"
        }
        // ...existing fields...
      }
    }
    ```

- **400 Bad Request**

  - Description: Validation errors occurred.
  - Body:

    ```json
    {
      "errors": [
        {
          "msg": "string",
          "param": "string",
          "location": "body"
        }
        // ...existing errors...
      ]
    }
    ```

- **401 Unauthorized**

  - Description: Invalid email or password.
  - Body:

    ```json
    {
      "message": "Invalid email or password"
    }
    ```

- **500 Internal Server Error**

  - Description: An unexpected error occurred.

### Example Request

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}


## Captain Model

### Description

Represents a captain in the system.

### Fields

- `fullname` (object)
  - `firstname` (string): Required. Minimum 3 characters.
  - `lastname` (string): Optional. Minimum 3 characters.
- `email` (string): Required. Must be a valid email address.
- `password` (string): Required. Minimum 6 characters.
- `socketId` (string): Optional.
- `status` (string): Enum ['active', 'inactive']. Default is 'inactive'.
- `vehicle` (object)
  - `color` (string): Required. Minimum 3 characters.
  - `plate` (string): Required. Minimum 3 characters.
  - `capacity` (number): Required. Minimum 1.
  - `vehicleType` (string): Required. Must be one of ['car', 'motorcycle', 'auto'].
- `location` (object)
  - `latitude` (number): Optional.
  - `longitude` (number): Optional.

### Methods

- `generateAuthToken()`: Generates a JWT token for the captain.
- `comparePassword(password)`: Compares the provided password with the hashed password.
- `hashPassword(password)`: Hashes the provided password.

### Example

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "hashedpassword",
  "socketId": "socket123",
  "status": "active",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  },
  "location": {
    "latitude": 12.345678,
    "longitude": 98.765432
  }
}
```
```

## GET /captains/profile

Gets the profile of the authenticated captain.

### Description

Retrieves the profile information of the currently authenticated captain.

### Responses

- **200 OK**

  - Description: Captain profile retrieved successfully.
  - Body:

    ```json
    {
      "captain": {
        "_id": "string",
        "fullname": {
          "firstname": "string",
          "lastname": "string"
        },
        "email": "string",
        "vehicle": {
          "color": "string",
          "plate": "string",
          "capacity": "number",
          "vehicleType": "string"
        }
        // ...existing fields...
      }
    }
    ```

- **401 Unauthorized**

  - Description: Captain is not authenticated.
  - Body:

    ```json
    {
      "message": "Unauthorized"
    }
    ```

- **500 Internal Server Error**

  - Description: An unexpected error occurred.

### Example Request

```json
{
  "token": "string"
}
```

## GET /captains/logout

Logs out the authenticated captain.

### Description

Logs out the currently authenticated captain by clearing the authentication token.

### Responses

- **200 OK**

  - Description: Captain logged out successfully.
  - Body:

    ```json
    {
      "message": "Logged out successfully"
    }
    ```

- **401 Unauthorized**

  - Description: Captain is not authenticated.
  - Body:

    ```json
    {
      "message": "Unauthorized"
    }
    ```

- **500 Internal Server Error**

  - Description: An unexpected error occurred.

### Example Request

```json
{
  "token": "string"
}
```
