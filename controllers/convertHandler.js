// Perubahan: Menambahkan inputRegex dan apiRegex di luar fungsi
let inputRegex = /[a-z]+|[^a-z]+/gi;
let apiRegex = /\/api\/convert\?input=/i;

function ConvertHandler() {
  this.getNum = function (input) { // Perubahan: Modifikasi fungsi getNum
    let result;

     // Perubahan: Menambahkan console.log dan handling input null
     console.log(`1. inputNum: ${input}`);
     if (input === null || input === undefined) return "invalid number";

    if (input.includes("/api/convert?input=")) { // Perubahan: Penanganan input dari API
      let inputArr = input.split(apiRegex);
      let regexStr = inputArr[1];
      // Console 2
       console.log(`2. regexStr: ${regexStr}`);

      //       ///////////////////////////////////////////////////////////////////////
      let result = regexStr.match(inputRegex)[0];
      console.log(`Formated result: ${result}`);
      //       //////////////////////////////////////////////////////////////////////
      let numberRegex = /\d/;

      if (numberRegex.test(result) === false) {
        result = 1;
      }

      if (result.toString().includes("/")) {
        let values = result.toString().split("/");
        // console 3
         console.log(`splitResult: ${values}`);
        if (values.length != 2) {
          return "invalid number";
        }
        values[0] = parseFloat(values[0]);
        values[1] = parseFloat(values[1]);
        result = parseFloat((values[0] / values[1]).toFixed(5));
      }

      if (isNaN(result)) {
        return "invalid number";
      }

      return Number(result);
    } else { // Perubahan: Penanganan input bukan dari API
    
       // console 2.1
        console.log(`Else input 1: ${input}`);

      if (/^(gal)$|^(l)$|^(lbs)$|^(kg)$|^(mi)$|^(km)$/i.test(input)) return 1;
      if (!/[\d\/]/g.test(input)) return 1;
       console.log(`Else input 2: ${input}`);
       result = input
        .replace(/\s*/g, "")
        .match(/^\d*[.]{0,1}\d*\/*\d*[.]{0,1}\d*\w*$/);
       console.log(`Else input 3: ${result}`);
      if (result)
        result = input
          .replace(/\s*/g, "")
          .match(/^\d*[.]{0,1}\d*\/*\d*[.]{0,1}\d*\w*$/)[0]
          .replace(/^[0]*/g, "")
          .replace(/([.]\d*[1-9])[0]+/, "$1")
          .replace(/^(\d*[.]{0,1}\d*\/*\d*[.]{0,1}\d*)\w*$/, "$1")
          .replace(/[.]*$/g, "");
          console.log(`Else input4 : ${result}`);
      if (/[.]{2}/g.test(input)) return "invalid number";
      if (/[.]\d*[.]/g.test(input)) return "invalid number";
      if (/[\/]{2}/g.test(input)) return "invalid number";
      if (/[\/]\d*[\/]/g.test(input)) return "invalid number";

      console.log(`Regex Result: ${result}`);

      if (result) {
        if (result.includes("/")) {
          let values = result.toString().split("/");
          // console 3
           console.log(`splitResult: ${values}`);
          if (values.length != 2) {
            return "invalid number";
          }
          values[0] = parseFloat(values[0]);
          values[1] = parseFloat(values[1]);
          result = parseFloat((values[0] / values[1]).toFixed(5));
        }
      }

      if (isNaN(result)) {
        return "invalid number";
      }

      return Number(result);
    }
  };

  this.getUnit = function (input) { // Perubahan: Modifikasi fungsi getUnit
      if (input.includes("/api/convert?input=")) { // Perubahan: Penanganan input dari API
      let inputArr = input.split(apiRegex);
      let regexStr = inputArr[1];
       // Console 2
         console.log(`regexStr: ${regexStr}`);

      //       ///////////////////////////////////////////////////////////////////////
       let result = regexStr.match(inputRegex)[1];
       console.log(`Formated result: ${result}`);
      //       //////////////////////////////////////////////////////////////////////
      // console 5
       console.log(`Unit result: ${result}`);
      if (!result) {
        result = regexStr.match(inputRegex)[0];
      }

      // Perubahan: Validasi unit dengan array
       let validUnits = [
        "gal",
        "l",
        "mi",
        "km",
        "lbs",
        "kg",
        "GAL",
        "L",
        "MI",
        "KM",
        "LBS",
        "KG",
      ];

      if (!validUnits.includes(result)) {
        return "invalid unit";
      }

      if (result === "l" || result === "L") return "L"; // Perubahan: Mengembalikan "L" jika liter

      return result.toLowerCase(); // Perubahan: Mengembalikan unit dalam lowercase
    } else {  // Perubahan: Penanganan input bukan dari API
       var result;
      // console 4
       console.log(`inputUnit: ${input}`);
       result = input.match(inputRegex)[1];
        // console 5
        console.log(`Unit result: ${result}`);
      if (!result) {
         result = input.match(inputRegex)[0];
      }

         // Perubahan: Validasi unit dengan array
        let validUnits = [
          "gal",
          "l",
          "mi",
          "km",
          "lbs",
          "kg",
          "GAL",
          "L",
          "MI",
          "KM",
          "LBS",
          "KG",
        ];

      if (!validUnits.includes(result)) {
         return "invalid unit";
      }

      if (result === "l" || result === "L") return "L";  // Perubahan: Mengembalikan "L" jika liter

      return result.toLowerCase(); // Perubahan: Mengembalikan unit dalam lowercase
    }
  };

  this.getReturnUnit = function (initUnit) { // Perubahan: Modifikasi fungsi getReturnUnit
    var result;

    if (initUnit === "gal" || initUnit === "GAL") {
      result = "L";
    } else if (initUnit === "l" || initUnit === "L") { // Perubahan: Menambahkan pengecekan "L"
      result = "gal";
    }

    if (initUnit === "lbs" || initUnit === "LBS") {
      result = "kg";
    } else if (initUnit === "kg" || initUnit === "KG") {
      result = "lbs";
    }

    if (initUnit === "mi" || initUnit === "MI") {
      result = "km";
    } else if (initUnit === "km" || initUnit === "KM") {
      result = "mi";
    }

     return result;
  };

  this.spellOutUnit = function (unit) {  // Perubahan: Modifikasi fungsi spellOutUnit
    var result;

    switch (unit) {
      case "gal":
      case "GAL":
        result = "gallon(s)";
        break;
      case "l":
      case "L":
        result = "litre(s)";
        break;
      case "lbs":
      case "LBs":
        result = "pound(s)";
        break;
      case "kg":
      case "KG":
        result = "kilogram(s)";
        break;
      case "mi":
      case "MI":
        result = "mile(s)";
        break;
      case "km":
      case "KM":
        result = "kilometre(s)";
        break;
    }

    return result;
  };

  this.convert = function (initNum, initUnit) { // Perubahan: Modifikasi fungsi convert
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    if (initUnit === "gal" || initUnit === "GAL") {
      result = (initNum * galToL).toFixed(5);
    } else if (initUnit === "l" || initUnit === "L") {  // Perubahan: Menambahkan pengecekan "L"
      result = (initNum / galToL).toFixed(5);
    }

    if (initUnit === "lbs" || initUnit === "LBS") {
      result = (initNum * lbsToKg).toFixed(5);
    } else if (initUnit === "kg" || initUnit === "KG") {
      result = (initNum / lbsToKg).toFixed(5);
    }

    if (initUnit === "mi" || initUnit === "MI") {
      result = (initNum * miToKm).toFixed(5);
    } else if (initUnit === "km" || initUnit === "KM") {
      result = (initNum / miToKm).toFixed(5);
    }

    return parseFloat(result);
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) { // Perubahan: Modifikasi fungsi getString
    var result;

     // Perubahan: Error handling untuk initNum dan initUnit
     if (initNum === null) {
        return 'invalid number';
      }
      if (initUnit === null) {
        return 'invalid unit';
      }
      if(returnNum === null){
        return 'invalid number and unit';
      }
    result =
      initNum +
      " " +
      this.spellOutUnit(initUnit) +
      " converts to " +
      returnNum +
      " " +
      this.spellOutUnit(returnUnit);

    return result;
  };
}

module.exports = ConvertHandler;