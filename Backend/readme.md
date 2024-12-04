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