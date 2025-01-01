// Perubahan: Menambahkan inputRegex dan apiRegex di luar fungsi
let inputRegex = /[a-z]+|[^a-z]+/gi;
let apiRegex = /\/api\/convert\?input=/i;

function ConvertHandler() {
  
  this.getNum = function(input) { // Tetap mempertahankan komentar asli
    let result;
    
    //Regex utk memisahkan unit
    let numRegex = /^([\d\.\/]+)/;
    let match = input.match(numRegex);
    
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
      //     let numberRegex = /\d/

      //     if(numberRegex.test(result) === false){
      //       result = 1
      //     }

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
  
   this.getUnit = function(input) { // Tetap mempertahankan komentar asli
    let result; // Perubahan: deklarasi result di luar if..else
    
    //Regex utk satuan
     let unitRegex = /([a-zA-Z]+)$/;
    let match = input.match(unitRegex);
    
    if (input.includes("/api/convert?input=")) { // Perubahan: Penanganan input dari API
      let inputArr = input.split(apiRegex);
      let regexStr = inputArr[1];
       // Console 2
         console.log(`regexStr: ${regexStr}`);

      //       ///////////////////////////////////////////////////////////////////////
       result = regexStr.match(inputRegex)[1]; // Perubahan: Tidak deklarasi ulang result
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

      return result.toLowerCase();  // Perubahan: Mengembalikan unit dalam lowercase
    } else {   // Perubahan: Penanganan input bukan dari API
      
      // Perubahan: Validasi unit dengan array
    //Regex utk satuan
      let unitRegex = /([a-zA-Z]+)$/;
    let match = input.match(unitRegex);
    
      if(match){
        result=match[1].toLowerCase(); //mengubah huruf kecil
           
         //validasi 
       let validUnits= ['gal','l','lbs','kg','mi','km'];
          if(!validUnits.includes(result)){
            result=null;  //Return null jika tdk valid
           }
       } else {
          result = null;
        }
       // console 4
        console.log(`inputUnit: ${input}`);
        let result2 = input.match(inputRegex)[1]; // Perubahan: Menggunakan result2 untuk menghindari conflict
       // console 5
        console.log(`Unit result: ${result2}`);
       if (!result2) {
        result2 = input.match(inputRegex)[0];
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
      if (!validUnits.includes(result2)) {
        return "invalid unit";
      }

       if (result2 === "l" || result2 === "L") return "L"; // Perubahan: Mengembalikan "L" jika liter
     
        return result2.toLowerCase();  // Perubahan: Mengembalikan unit dalam lowercase
      }
   };
  
  this.getReturnUnit = function(initUnit) { // Tetap mempertahankan komentar asli
    let result;
   if (initUnit === "gal" || initUnit === "GAL") {
      result = "L";
    } else if (initUnit === "l" || initUnit === "L") {  // Perubahan: Menambahkan pengecekan "L"
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

  this.spellOutUnit = function(unit) { // Tetap mempertahankan komentar asli
    let result;
    
    if(unit === 'gal'){
      result='gallons';
    }else if(unit==='l' || unit==='L'){
      result='liters';
    }else if(unit === 'lbs'){
      result='pounds';
    }else if(unit === 'kg'){
      result='kilograms';
    }else if(unit==='mi'){
      result='miles';
    }else if(unit==='km'){
      result='kilometers';
    }else{
      result=null;
    }

    return result;
  };
  
  this.convert = function(initNum, initUnit) { // Tetap mempertahankan komentar asli
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
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
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) { // Tetap mempertahankan komentar asli
    let result;
    
    if (initNum === null) { // Perubahan: Error handling untuk initNum
      return 'invalid number';
    }
    if (initUnit === null) {  // Perubahan: Error handling untuk initUnit
      return 'invalid unit';
    }
    if (returnNum === null) {  // Perubahan: Error handling untuk returnNum
      return 'invalid number and unit';
    }

    let initUnitSpelled = this.spellOutUnit(initUnit);
    let returnUnitSpelled=this.spellOutUnit(returnUnit);

    result = `${initNum} ${initUnitSpelled} converts to ${returnNum} ${returnUnitSpelled}`;
        
    // Perubahan: Perbaiki format string output agar sesuai test
    result = result.replace("gallon(s)", "gallons");
    result = result.replace("litre(s)", "liters");
    result = result.replace("mile(s)", "miles");
    result = result.replace("kilometre(s)", "kilometers");
    result = result.replace("pound(s)", "pounds");
    result = result.replace("kilogram(s)", "kilograms");

    return result;
  };
  
}

module.exports = ConvertHandler;