'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();


  //Route untuk API konversi
  app.route('/api/convert')
  .get((req,res)=>{
    //ambiil input dari querry parameter
    let input = req.query.input;
    //validasi input (tdk kosong)
    if(!input){
      return res.json('invalid input');
    }

    //mendapatkan angka input
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);

    //validasi input
    if(initNum === null && initUnit === null){
      return res.json("invalid number & unit");
    }
    else if(initNum === null){
      return res.json("invalid number")
    }else if(initUnit === null){
      return res.json("invalid unit")
    }

    //mendapatkan unit konversi dan angka konversi
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let returnNum = convertHandler.convert(initNum, initUnit);

    // validasi returnUnit
    if(returnUnit === null){
      return res.json("Invalid unit");
    }
    //membuat string output
    let string = convertHandler.getString(initNum,initUnit,returnNum,returnUnit);

    //mengirim respon JSON
    res.json({
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: string,
    });
  });

};
