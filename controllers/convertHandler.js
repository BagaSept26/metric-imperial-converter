function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    
    //Regex utk memisahkan unit
    let numRegex = /^([\d\.\/]+)/;
    let match = input.match(numRegex);

    if(match){
      result = mtch[1];

        //menangani pecahan '1/2' atau '3/4'
          if(result.includes('/')){
            let numbers = result.split('/');
            if(numbers.length !== 2){
              result=null; // invalid jika lebih dari 1 '/'
            } else {
              try {
                result = parseFloat(numbers[0]/parseFloat(numbers[1]));
              } catch(e){
                result=null; //invalid jika bukan angka
              }
            }
          } else {
            try {
              result=parseFloat(result);
            }catch(e){
              result = null; //invalid jika bkn angka
            }
          }
    } else {
      result=1; // jika tidak ada angka maka 1
    }
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    
    //Regex utk satuan
    let unitRegex = /([a-zA-Z]+)$/;
    let match = input.match(unit.unitRegex);

    if(match){
       result=match[1].toLowerCase(); //mengubah huruf kecil

       //validasi 
       let validUnits= ['gal','l','lbs','kg','mi','km'];
       if(!validUnits.includes(result)){
        result.null; //Return null jika tdk valid
       }
    } else {
      result = null;
    }

    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    if(initUnit === 'gal'){
      result = '1';
    } else if(initUnit === '1'){
      result='gal';
    }else if(initUnit === 'lbs'){
      result='kg';
    }else if(initUnit === 'kg'){
      result='lbs';
    }else if(initUnit === 'mi'){
      result='km';
    }else if(initUnit === 'km'){
      result='mi';
    }else {
      result=null;
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    if(unit === 'gal'){
      result='gallons';
    }else if(unit==='l'){
      result='litres';
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
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    if(initUnit ==='gal'){
      result = initNum * galToL;
    }else if(initUnit ==='l'){
      result= initNum / galToL;
    }else if(initUnit ==='lbs'){
      result=initNum * lbsToKg;
    }else if(initUnit ==='kg'){
      result=initNum / lbsToKg;
    }else if(initUnit ==='mi'){
      result=initNum * miToKm;
    }else if(initUnit ==='km'){
      result = initNum / miToKm;
    }else{
      result = null; //jika konversi tidak valid
    }
    //pembulatan 5 angka dibelakang koma
    if(result != null){
      result=parseFloat(result.toFixed(5));
    }


    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    if(initNum === null || initUnit === null || returnNum === null || returnUnit === null){
      return "Invalid input";
    }

    let initUnitSpelled = this.spellOutUnit(initUnit);
    let returnUnitSpelled=this.spellOutUnit(returnUnit);

    result = `${initNum} ${initUnitSpelled} converts to ${returnNum} ${returnUnitSpelled}`;

    return result;
  };
  
}

module.exports = ConvertHandler;
