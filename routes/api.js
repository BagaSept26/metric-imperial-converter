'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  //Route untuk API konversi
  app.route('/api/convert') // Tetap mempertahankan komentar asli
  .get((req,res)=>{  // Tetap mempertahankan komentar asli
    //ambiil input dari querry parameter
    let input = req.query.input;  // Tetap mempertahankan komentar asli
     //validasi input (tdk kosong)
    if(!input){ // Tetap mempertahankan komentar asli
      return res.json('invalid input');
    }

    //mendapatkan angka input
    let initNum = convertHandler.getNum(input); // Tetap mempertahankan komentar asli
    let initUnit = convertHandler.getUnit(input); // Tetap mempertahankan komentar asli
    // Perubahan: Memindahkan let returnNum, toString, dan unit diatas if
    let returnNum = convertHandler.convert(initNum, initUnit); 
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    
     //validasi input
      if(initNum === 'invalid number' && initUnit === 'invalid unit'){ // Perubahan: Mengubah validasi error 
        return res.json('invalid number and unit')
      }
    
      if(initNum === 'invalid number'){ // Perubahan: Mengubah validasi error
        return res.json('invalid number')
      }  
    
      if(initUnit === 'invalid unit'){ // Perubahan: Mengubah validasi error
        return res.json('invalid unit')
      }
      // Perubahan: Menambahkan console.log untuk debugging
      console.log(`returnUnitErr: ${returnUnit}`)
      console.log(`returnNumErr: ${returnNum}`)
     
    
      let responseObject = {} // Perubahan: Menggunakan object untuk response
      responseObject['initNum'] = initNum
      responseObject['initUnit'] = initUnit
      responseObject['returnNum'] = returnNum
      responseObject['returnUnit'] = returnUnit
      responseObject['string'] = toString
    
    
     res.json(responseObject); // Perubahan: Mengirim object sebagai response
    });
    
};