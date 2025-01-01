# Metric-Imperial Converter

This is the boilerplate for the Metric-Imperial Converter project. Build a full stack JavaScript app that is functionally similar to this: https://metric-imperial-converter.freecodecamp.rocks/

# Metric/Imperial Unit Converter

## Select a Language / Pilih Bahasa:

[English](#english) | [Bahasa Indonesia](#bahasa-indonesia)

---

<h2 id="english"></h2>

This project is a solution for the Metric/Imperial Unit Converter project from freeCodeCamp's Quality Assurance Certification. It provides an API to convert between different metric and imperial units.

### Table of Contents

-   [Project Overview](#project-overview)
-   [Features](#features)
-   [API Endpoints](#api-endpoints)
-   [How to Use](#how-to-use)
-   [Unit Tests](#unit-tests)
-   [Functional Tests](#functional-tests)
-   [Technology Stack](#technology-stack)
-   [Running the Tests](#running-the-tests)
-   [License](#license)
-   [Author](#author)

### <a id="project-overview"></a>Project Overview

This project provides a backend API that can convert units such as gallons to liters, pounds to kilograms, miles to kilometers, and vice versa. It is built using Node.js, Express, and various testing libraries. The project also includes a simple frontend interface built using HTML, CSS, and JavaScript (jQuery).

### <a id="features"></a>Features

*   **Unit Conversion:** Converts between *gallons* and _liters_, *pounds* and _kilograms_, *miles* and _kilometers_.
*   **Input Handling:** Accepts inputs with whole numbers, decimal numbers, fractional numbers, and fractional numbers with decimals.
*   **Error Handling:** Provides clear error messages for invalid input numbers, invalid units, or a combination of both.
*   **Case Insensitive Input:** Accepts units in both uppercase and lowercase.
*   **Lowercase Output:** Returns `initUnit` and `returnUnit` in lowercase (except for liters, which is represented as `L`).
*   **Formatted Output:** Returns a well-formatted string output along with a JSON response.
*   **Frontend Interface:** Includes a simple HTML interface with a form to input values and view the conversion results.
*   **Unit and Functional Tests:** Contains comprehensive unit tests and functional tests to ensure the correctness of the application.

### <a id="api-endpoints"></a>API Endpoints

The project provides the following API endpoint:

*   **`GET /api/convert`**:
    *   Accepts a query parameter `input` (e.g., `/api/convert?input=10L`).
    *   Returns a JSON response containing:
        *   `initNum`: The initial number.
        *   `initUnit`: The initial unit.
        *   `returnNum`: The converted number.
        *   `returnUnit`: The converted unit.
        *   `string`: A human-readable string representing the conversion.

**Example Request:**

    `/api/convert?input=4gal`

**Example Response:**
```json
{
  "initNum": 4,
  "initUnit": "gal",
  "returnNum": 15.14164,
  "returnUnit": "L",
  "string": "4 gallons converts to 15.14164 liters"
}
```
### Error Responses:
*   `invalid input`: if the `input` parameter is not given
*   `invalid unit`: if the unit is invalid
*   `invalid number`: if the number is invalid
*   `invalid number and unit`: if both number and unit are invalid
*   `Invalid unit`: if the `returnUnit` is invalid

### <a id="how-to-use"></a>How to Use

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd <project-directory>
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```
    or

    ```bash
    yarn install
    ```

4.  **Create a `.env` file:**
    *   Copy the `sample.env` to `.env`
    *   Set the `PORT` and `NODE_ENV` variables appropriately. Add `NODE_ENV=test` to run the test
5.  **Run the application:**

    ```bash
    npm start
    ```
    or
    ```bash
    yarn start
    ```

6.  Open `index.html` in your browser, input some values and see the result.

### <a id="unit-tests"></a>Unit Tests

The project includes 16 unit tests to ensure that the `convertHandler` logic works as expected. These tests cover the following areas:

*   Correctly read a whole number input.
*   Correctly read a decimal number input.
*   Correctly read a fractional input.
*   Correctly read a fractional input with a decimal.
*   Return an error on a double-fraction (i.e. 3/2/3).
*   Default to a numerical input of 1 when no numerical input is provided.
*   Correctly read each valid input unit.
*   Return an error for an invalid input unit.
*   Return the correct return unit for each valid input unit.
*   Correctly return the spelled-out string unit for each valid input unit.
*   Correctly convert gal to L.
*   Correctly convert L to gal.
*   Correctly convert mi to km.
*   Correctly convert km to mi.
*   Correctly convert lbs to kg.
*   Correctly convert kg to lbs.

### <a id="functional-tests"></a>Functional Tests

The project includes 5 functional tests to ensure that the API endpoints work correctly. These tests cover:

*   Converting a valid input such as 10L.
*   Converting an invalid input such as 32g.
*   Converting an invalid number such as 3/7.2/4kg.
*   Converting an invalid number and unit such as 3/7.2/4kilomegagram.
*   Converting with no number such as kg.

### <a id="technology-stack"></a>Technology Stack

*   Node.js
*   Express
*   Chai
*   Chai HTTP
*   Mocha
*   Helmet
*   jQuery
*   dotenv
*   Cors

### <a id="running-the-tests"></a>Running the Tests

To run the tests, use the following command:

    `npm run test`
    
or
    
    `yarn test`

This will execute both unit and functional tests and output the results.

### <a id="license"></a>License

This project is licensed under the MIT License.

### <a id="author"></a>Author

[BagaSept26]

---

<h2 id="bahasa-indonesia"></h2>

Proyek ini adalah solusi untuk proyek Metric/Imperial Unit Converter dari freeCodeCamp's Quality Assurance Certification. Proyek ini menyediakan API untuk mengkonversi antara unit metrik dan imperial yang berbeda.

### Daftar Isi

- [Gambaran Proyek](#gambaran-proyek)
- [Fitur](#fitur)
- [Endpoint API](#endpoint-api)
- [Cara Penggunaan](#cara-penggunaan)
- [Tes Unit](#tes-unit)
- [Tes Fungsional](#tes-fungsional)
- [Tumpukan Teknologi](#tumpukan-teknologi)
- [Menjalankan Tes](#menjalankan-tes)
- [Lisensi](#lisensi)
- [Penulis](#penuli)

### <a id="gambaran-proyek"></a>Gambaran Proyek

Proyek ini menyediakan API backend yang dapat mengkonversi unit seperti galon ke liter, pound ke kilogram, mil ke kilometer, dan sebaliknya. Proyek ini dibangun menggunakan Node.js, Express, dan berbagai library pengujian. Proyek ini juga mencakup antarmuka frontend sederhana yang dibangun menggunakan HTML, CSS, dan JavaScript (jQuery).

### <a id="fitur"></a>Fitur 

*   **Konversi Unit:** Mengkonversi antara galon dan liter, pound dan kilogram, mil dan kilometer.
*   **Penanganan Input:** Menerima input berupa bilangan bulat, bilangan desimal, bilangan pecahan, dan bilangan pecahan dengan desimal.
*   **Penanganan Error:** Memberikan pesan error yang jelas untuk input angka tidak valid, unit tidak valid, atau kombinasi keduanya.
*   **Input Tidak Sensitif Huruf:** Menerima unit dalam huruf besar dan kecil.
*   **Output Huruf Kecil:** Mengembalikan `initUnit` dan `returnUnit` dalam huruf kecil (kecuali untuk liter, yang direpresentasikan sebagai `L`).
*   **Output Terformat:** Mengembalikan output string terformat dengan baik beserta response JSON.
*   **Antarmuka Frontend:** Mencakup antarmuka HTML sederhana dengan form untuk memasukkan nilai dan melihat hasil konversi.
*   **Tes Unit dan Fungsional:** Berisi tes unit dan fungsional yang komprehensif untuk memastikan kebenaran aplikasi.

### <a id="endpoint-api"></a>Endpoint API

Proyek ini menyediakan endpoint API berikut:

*   **`GET /api/convert`**:
    *   Menerima parameter query `input` (misalnya, `/api/convert?input=10L`).
    *   Mengembalikan response JSON yang berisi:
        *   `initNum`: Angka awal.
        *   `initUnit`: Unit awal.
        *   `returnNum`: Angka yang telah dikonversi.
        *   `returnUnit`: Unit yang telah dikonversi.
        *   `string`: String yang mudah dibaca yang merepresentasikan konversi.

**Contoh Request :**

    `/api/convert?input=4gal`

**Contoh Response :**
```json
{
  "initNum": 4,
  "initUnit": "gal",
  "returnNum": 15.14164,
  "returnUnit": "L",
  "string": "4 gallons converts to 15.14164 liters"
}
```
### Response Error :
* `invalid input`: jika parameter `input` tidak diberikan
* `invalid unit`: jika unit tidak valid
*  `invalid number`: jika angka tidak valid
*  `invalid number and unit`: jika angka dan unit tidak valid
*  `Invalid unit`: jika `returnUnit` tidak valid

### <a id="cara-penggunaan"></a>Cara Penggunaan 

1.  **Clone repository:**
    
    `git clone <repository-url>`
    
2.  **Navigasi ke direktori proyek:**
    
    `cd <project-directory>`
    
3.  **Install dependencies:**
    
    `npm install`
    
    atau
    
    `yarn install`
    
4.  **Buat file `.env`:**
    *   Salin `sample.env` menjadi `.env`
    * Atur variabel `PORT` dan `NODE_ENV` dengan tepat. Tambahkan `NODE_ENV=test` untuk menjalankan test
5.  **Jalankan aplikasi:**
    
    `npm start`
    
    atau
    
    `yarn start`
    

6.  Buka `index.html` di browser Anda, masukkan beberapa nilai, dan lihat hasilnya.

### <a id="tes-unit"></a>Tes Unit 

Proyek ini mencakup 16 tes unit untuk memastikan bahwa logika `convertHandler` bekerja sesuai harapan. Tes ini mencakup area berikut:

*   Membaca input bilangan bulat dengan benar.
*   Membaca input bilangan desimal dengan benar.
*   Membaca input pecahan dengan benar.
*   Membaca input pecahan dengan desimal dengan benar.
*   Mengembalikan error pada input double-fraction (misalnya, 3/2/3).
*   Mengatur default input angka menjadi 1 jika tidak ada input angka.
*   Membaca setiap input unit yang valid dengan benar.
*   Mengembalikan error untuk input unit tidak valid.
*   Mengembalikan unit konversi yang benar untuk setiap input unit yang valid.
*   Mengembalikan string unit yang ditulis lengkap dengan benar untuk setiap input unit yang valid.
*   Mengkonversi gal ke L dengan benar.
*   Mengkonversi L ke gal dengan benar.
*   Mengkonversi mi ke km dengan benar.
*   Mengkonversi km ke mi dengan benar.
*   Mengkonversi lbs ke kg dengan benar.
*   Mengkonversi kg ke lbs dengan benar.

### <a id="tes-fungsional"></a>Tes Fungsional 

Proyek ini mencakup 5 tes fungsional untuk memastikan bahwa endpoint API berfungsi dengan benar. Tes ini mencakup:

*   Mengkonversi input valid seperti 10L.
*   Mengkonversi input tidak valid seperti 32g.
*   Mengkonversi angka tidak valid seperti 3/7.2/4kg.
*   Mengkonversi angka dan unit tidak valid seperti 3/7.2/4kilomegagram.
*   Mengkonversi input tanpa angka seperti kg.

### <a name="tumpukan-teknologi"></a>Tumpukan Teknologi 

*   Node.js
*   Express
*   Chai
*   Chai HTTP
*   Mocha
*   Helmet
*   jQuery
*   dotenv
*   Cors

### <a name="menjalankan-tes"></a>Menjalankan Tes 

Untuk menjalankan tes, gunakan perintah berikut:

    `npm run test`

atau
    
    `yarn test`
    

Ini akan menjalankan tes unit dan fungsional dan menampilkan hasilnya.

### <a name="lisensi"></a>Lisensi 

Lisensi MIT.

### <a name="penulis"></a>Penulis 

[BagaSept26]
