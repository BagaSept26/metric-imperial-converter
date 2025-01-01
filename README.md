# Metric-Imperial Converter

This is the boilerplate for the Metric-Imperial Converter project. Build a full stack JavaScript app that is functionally similar to this: https://metric-imperial-converter.freecodecamp.rocks/

# Metric/Imperial Unit Converter

## Select a Language / Pilih Bahasa:

[English](#english) | [Bahasa Indonesia](#bahasa-indonesia)

---

## English

<a name="english"></a>

This project is a solution for the Metric/Imperial Unit Converter project from freeCodeCamp's Quality Assurance Certification. It provides an API to convert between different metric and imperial units.

### Table of Contents

- [Project Overview](#project-overview-english)
- [Features](#features-english)
- [API Endpoints](#api-endpoints-english)
- [How to Use](#how-to-use-english)
- [Unit Tests](#unit-tests-english)
- [Functional Tests](#functional-tests-english)
- [Technology Stack](#technology-stack-english)
- [Running the Tests](#running-the-tests-english)
- [License](#license-english)
- [Author](#author-english)

### Project Overview (English)

This project provides a backend API that can convert units such as gallons to liters, pounds to kilograms, miles to kilometers, and vice versa. It is built using Node.js, Express, and various testing libraries. The project also includes a simple frontend interface built using HTML, CSS, and JavaScript (jQuery).

### Features (English)

*   **Unit Conversion:** Converts between gallons and liters, pounds and kilograms, miles and kilometers.
*   **Input Handling:** Accepts inputs with whole numbers, decimal numbers, fractional numbers, and fractional numbers with decimals.
*   **Error Handling:** Provides clear error messages for invalid input numbers, invalid units, or a combination of both.
*   **Case Insensitive Input:** Accepts units in both uppercase and lowercase.
*   **Lowercase Output:** Returns `initUnit` and `returnUnit` in lowercase (except for liters, which is represented as `L`).
*  **Formatted Output:** Returns a well-formatted string output along with a JSON response.
*   **Frontend Interface:** Includes a simple HTML interface with a form to input values and view the conversion results.
*   **Unit and Functional Tests:** Contains comprehensive unit tests and functional tests to ensure the correctness of the application.

### API Endpoints (English)

The project provides the following API endpoint:

*   **`GET /api/convert`**:
    *   Accepts a query parameter `input` (e.g., `/api/convert?input=10L`).
    *   Returns a JSON response containing:
        *   `initNum`: The initial number.
        *   `initUnit`: The initial unit.
        *   `returnNum`: The converted number.
        *   `returnUnit`: The converted unit.
        *   `string`: A human-readable string representing the conversion.

**Example Request (English):**
Use code with caution.
Markdown
/api/convert?input=4gal

**Example Response (English):**
```json
{
  "initNum": 4,
  "initUnit": "gal",
  "returnNum": 15.14164,
  "returnUnit": "L",
  "string": "4 gallons converts to 15.14164 liters"
}

Use code with caution.
Error Responses (English):
invalid input: if the input parameter is not given

invalid unit: if the unit is invalid

invalid number: if the number is invalid

invalid number and unit: if both number and unit are invalid

Invalid unit: if the returnUnit is invalid

How to Use (English)
Clone the repository:

git clone <repository-url>
Use code with caution.
Bash
Navigate to the project directory:

cd <project-directory>
Use code with caution.
Bash
Install dependencies:

npm install
Use code with caution.
Bash
or

yarn install
Use code with caution.
Bash
Create a .env file:

Copy the sample.env to .env

Set the PORT and NODE_ENV variables appropriately. Add NODE_ENV=test to run the test

Run the application:

npm start
Use code with caution.
Bash
or

yarn start
Use code with caution.
Bash
Open index.html in your browser, input some values and see the result.

Unit Tests (English)
The project includes 16 unit tests to ensure that the convertHandler logic works as expected. These tests cover the following areas:

Correctly read a whole number input.

Correctly read a decimal number input.

Correctly read a fractional input.

Correctly read a fractional input with a decimal.

Return an error on a double-fraction (i.e. 3/2/3).

Default to a numerical input of 1 when no numerical input is provided.

Correctly read each valid input unit.

Return an error for an invalid input unit.

Return the correct return unit for each valid input unit.

Correctly return the spelled-out string unit for each valid input unit.

Correctly convert gal to L.

Correctly convert L to gal.

Correctly convert mi to km.

Correctly convert km to mi.

Correctly convert lbs to kg.

Correctly convert kg to lbs.

Functional Tests (English)
The project includes 5 functional tests to ensure that the API endpoints work correctly. These tests cover:

Converting a valid input such as 10L.

Converting an invalid input such as 32g.

Converting an invalid number such as 3/7.2/4kg.

Converting an invalid number and unit such as 3/7.2/4kilomegagram.

Converting with no number such as kg.

Technology Stack (English)
Node.js

Express

Chai

Chai HTTP

Mocha

Helmet

jQuery

dotenv

Cors

Running the Tests (English)
To run the tests, use the following command:

npm run test
Use code with caution.
Bash
or

yarn test
Use code with caution.
Bash
This will execute both unit and functional tests and output the results.

License (English)
This project is licensed under the MIT License.

Author (English)
[BagaSept26]