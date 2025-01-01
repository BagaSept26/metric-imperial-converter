# Metric-Imperial Converter

This is the boilerplate for the Metric-Imperial Converter project. Build a full stack JavaScript app that is functionally similar to this: https://metric-imperial-converter.freecodecamp.rocks/

# Metric/Imperial Unit Converter

## Select a Language / Pilih Bahasa:

[English](#english) | [Bahasa Indonesia](#bahasa-indonesia)

---

<h2 id="english">English</h2>

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

### <a name="project-overview-english"></a>Project Overview (English)

This project provides a backend API that can convert units such as gallons to liters, pounds to kilograms, miles to kilometers, and vice versa. It is built using Node.js, Express, and various testing libraries. The project also includes a simple frontend interface built using HTML, CSS, and JavaScript (jQuery).

### <a name="features-english"></a>Features (English)

*   **Unit Conversion:** Converts between gallons and liters, pounds and kilograms, miles and kilometers.
*   **Input Handling:** Accepts inputs with whole numbers, decimal numbers, fractional numbers, and fractional numbers with decimals.
*   **Error Handling:** Provides clear error messages for invalid input numbers, invalid units, or a combination of both.
*   **Case Insensitive Input:** Accepts units in both uppercase and lowercase.
*   **Lowercase Output:** Returns `initUnit` and `returnUnit` in lowercase (except for liters, which is represented as `L`).
*   **Formatted Output:** Returns a well-formatted string output along with a JSON response.
*   **Frontend Interface:** Includes a simple HTML interface with a form to input values and view the conversion results.
*   **Unit and Functional Tests:** Contains comprehensive unit tests and functional tests to ensure the correctness of the application.

### <a name="api-endpoints-english"></a>API Endpoints (English)

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