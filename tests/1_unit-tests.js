const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  suite('Function convertHandler.getNum(input)', function() { // Perubahan: Mempertahankan komentar asli
     // 1. test convertHanlder should correctly read a whole number input
        test('Test convertHanlder should correctly read a whole number input',function(){ // Perubahan: Mempertahankan test asli
            assert.equal(convertHandler.getNum("123mi"), 123,'Should return 123 for input 123mi');
            assert.equal(convertHandler.getNum("5gal"), 5, 'Should return 5 for input 5gal');
         });

        // 2. convertHandler should correctly read a fractional input.
        test('convertHandler should correctly read a fractional input', function(){ // Perubahan: Mempertahankan test asli
            assert.equal(convertHandler.getNum("3.14km"),3.14,'should return 3.14 for input 3.14km');
            assert.equal(convertHandler.getNum("0.5lbs"),0.5,'should return 0.5 for input 0.5lbs');
        });

        //3. convertHandler should correctly read a fractional input.
        test('convertHandler should correctly read a fractional input', function(){ // Perubahan: Mempertahankan test asli
            assert.equal(convertHandler.getNum("1/2mi"),0.5,'Should return 0.5 for input 1/2mi');
            assert.equal(convertHandler.getNum("3/4l"),0.75,'should return 0.75 for input 3/4l');
         });

        // 4. convertHandler should correctly read a fractional input with a decimal.
        test('convertHandler should correctly read a fractional input with a decimal',function(){ // Perubahan: Mempertahankan test asli
            assert.equal(convertHandler.getNum("2.5/2mi"),1.25,'should return 1.25 for input 2.5/2mi');
            assert.equal(convertHandler.getNum("5/4.0kg"),1.25,'should return 1.25 for input 5/4.0kg');
        });

        // 5. convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
        test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)',function(){ // Perubahan: Mempertahankan test asli
            assert.isNull(convertHandler.getNum("3/2/3gal"),'should return null for input 3/2/3gal');
            assert.isNull(convertHandler.getNum("1/2/1l"),'should return null for input 1/2/1l');
        });

        // 6. convertHandler should correctly default to a numerical input of 1 when no numerical input is provided
        test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided',function(){ // Perubahan: Mempertahankan test asli
            assert.equal(convertHandler.getNum("mi"),1,'should return 1 for input mi');
            assert.equal(convertHandler.getNum("lbs"),1,'should return 1 for input lbs');
         });
    });
  
  suite('Function convertHandler.getUnit(input)', function() { // Perubahan: Mempertahankan komentar asli
        //7 . convertHandler should correctly read each valid input unit.
      test('convertHandler should correctly read each valid input unit',function(){ // Perubahan: Mempertahankan test asli
        assert.equal(convertHandler.getUnit("12gal"), 'gal', 'Should return gal for input 12gal');
          assert.equal(convertHandler.getUnit("34l"), 'l', 'Should return l for input 34l');
         assert.equal(convertHandler.getUnit("10lbs"), 'lbs', 'Should return lbs for input 10lbs');
          assert.equal(convertHandler.getUnit("12kg"), 'kg', 'Should return kg for input 12kg');
          assert.equal(convertHandler.getUnit("12mi"), 'mi', 'Should return mi for input 12mi');
         assert.equal(convertHandler.getUnit("3km"), 'km', 'Should return km for input 3km');
      });

      //8. convertHandler should correctly return an error for an invalid input unit.
       test('Test convertHandler should correctly return an error for an invalid input unit', function() { // Perubahan: Mempertahankan test asli
         assert.isNull(convertHandler.getUnit("12abc"), 'Should return null for input 12abc');
          assert.isNull(convertHandler.getUnit("12xyz"), 'Should return null for input 12xyz');
          assert.isNull(convertHandler.getUnit("12"), 'Should return null for input 12');
       });
  });
    
   suite('Function convertHandler.getReturnUnit(initUnit)', function() { // Perubahan: Mempertahankan komentar asli
       //9. convertHandler should return the correct return unit for each valid input unit.
       test('Test convertHandler should return the correct return unit for each valid input unit', function() { // Perubahan: Mempertahankan test asli
          assert.equal(convertHandler.getReturnUnit("gal"), 'l', 'Should return l for input gal');
          assert.equal(convertHandler.getReturnUnit("l"), 'gal', 'Should return gal for input l');
          assert.equal(convertHandler.getReturnUnit("lbs"), 'kg', 'Should return kg for input lbs');
          assert.equal(convertHandler.getReturnUnit("kg"), 'lbs', 'Should return lbs for input kg');
          assert.equal(convertHandler.getReturnUnit("mi"), 'km', 'Should return km for input mi');
          assert.equal(convertHandler.getReturnUnit("km"), 'mi', 'Should return mi for input km');
       });
  });

    suite('Function convertHandler.spellOutUnit(unit)', function() { // Perubahan: Mempertahankan komentar asli
       //10. convertHandler should correctly return the spelled-out string unit for each valid input unit.
      test('Test convertHandler should correctly return the spelled-out string unit for each valid input unit', function() { // Perubahan: Mempertahankan test asli
            assert.equal(convertHandler.spellOutUnit("gal"), 'gallons', 'Should return gallons for input gal');
           assert.equal(convertHandler.spellOutUnit("l"), 'liters', 'Should return liters for input l');
            assert.equal(convertHandler.spellOutUnit("lbs"), 'pounds', 'Should return pounds for input lbs');
           assert.equal(convertHandler.spellOutUnit("kg"), 'kilograms', 'Should return kilograms for input kg');
           assert.equal(convertHandler.spellOutUnit("mi"), 'miles', 'Should return miles for input mi');
           assert.equal(convertHandler.spellOutUnit("km"), 'kilometers', 'Should return kilometers for input km');
      });
    });
  
    suite('Function convertHandler.convert(num, unit)', function() { // Perubahan: Mempertahankan komentar asli
        //11. convertHandler should correctly convert gal to L.
        test('Test convertHandler should correctly convert gal to L', function() { // Perubahan: Mempertahankan test asli dan mengubah approximately
            assert.approximately(convertHandler.convert(1, 'gal'), 3.78541, 0.00001, 'Should convert 1 gal to 3.78541 L');
           assert.approximately(convertHandler.convert(2, 'gal'), 7.57082, 0.00001, 'Should convert 2 gal to 7.57082 L');
       });

       //12. convertHandler should correctly convert L to gal.
       test('Test convertHandler should correctly convert L to gal', function() { // Perubahan: Mempertahankan test asli dan mengubah approximately
           assert.approximately(convertHandler.convert(1, 'l'), 0.26417, 0.00001, 'Should convert 1 L to 0.26417 gal');
         assert.approximately(convertHandler.convert(2, 'l'), 0.52834, 0.00001, 'Should convert 2 L to 0.52834 gal');
      });

        //13. convertHandler should correctly convert mi to km.
        test('Test convertHandler should correctly convert mi to km', function() { // Perubahan: Mempertahankan test asli dan mengubah approximately
            assert.approximately(convertHandler.convert(1, 'mi'), 1.60934, 0.00001, 'Should convert 1 mi to 1.60934 km');
            assert.approximately(convertHandler.convert(2, 'mi'), 3.21868, 0.00001, 'Should convert 2 mi to 3.21868 km');
        });

       //14. convertHandler should correctly convert km to mi.
        test('Test convertHandler should correctly convert km to mi', function() { // Perubahan: Mempertahankan test asli dan mengubah approximately
            assert.approximately(convertHandler.convert(1, 'km'), 0.62137, 0.00001, 'Should convert 1 km to 0.62137 mi');
            assert.approximately(convertHandler.convert(2, 'km'), 1.24274, 0.00001, 'Should convert 2 km to 1.24274 mi');
        });

       //15.convertHandler should correctly convert lbs to kg.
       test('Test convertHandler should correctly convert lbs to kg', function() { // Perubahan: Mempertahankan test asli dan mengubah approximately
           assert.approximately(convertHandler.convert(1, 'lbs'), 0.45359, 0.00001, 'Should convert 1 lbs to 0.45359 kg');
          assert.approximately(convertHandler.convert(2, 'lbs'), 0.90718, 0.00001, 'Should convert 2 lbs to 0.90718 kg');
       });

       //16. convertHandler should correctly convert kg to lbs.
        test('Test convertHandler should correctly convert kg to lbs', function() { // Perubahan: Mempertahankan test asli dan mengubah approximately
            assert.approximately(convertHandler.convert(1, 'kg'), 2.20462, 0.00001, 'Should convert 1 kg to 2.20462 lbs');
            assert.approximately(convertHandler.convert(2, 'kg'), 4.40924, 0.00001, 'Should convert 2 kg to 4.40924 lbs');
        });
    });
     // Perubahan: Menambahkan test baru untuk input unit saja
   test('Test convertHandler should return null for a unit input only', function() {
      assert.isNull(convertHandler.getUnit("mi"), 'Should return null for input mi');
     assert.isNull(convertHandler.getUnit("km"), 'Should return null for input km');
    });

   // Perubahan: Menambahkan test baru untuk input unit tidak valid
  test('Test convertHandler should return "invalid unit" for an invalid unit', function(){
       assert.equal(convertHandler.getUnit("1min"), "invalid unit", 'Should return "invalid unit" for input 1min');
     assert.equal(convertHandler.getUnit("1//2gal"), "invalid unit", 'Should return "invalid unit" for input 1//2gal');
     assert.equal(convertHandler.getUnit("1//2min"), "invalid unit", 'Should return "invalid unit" for input 1//2min');
  })
   // Perubahan: Menambahkan test baru untuk pecahan sederhana
  test('convertHandler should correctly read a simple fractional input', function(){
        assert.equal(convertHandler.getNum("1/5mi"),0.2,'Should return 0.2 for input 1/5mi');
  });
      // Perubahan: Menambahkan test baru untuk pecahan desimal ganda
 test('convertHandler should correctly read a fractional input with double decimal',function(){
        assert.equal(convertHandler.getNum("1.5/7km"),0.21429,'Should return 0.21429 for input 1.5/7km');
       assert.equal(convertHandler.getNum("3/2.7km"),1.11111,'Should return 1.11111 for input 3/2.7km');
  });
    
  test('Test convertHandler should return "invalid number" for a invalid number', function(){
       assert.equal(convertHandler.getNum("1.2.3gal"), 'invalid number', 'Should return "invalid number" for input 1.2.3gal');
        assert.equal(convertHandler.getNum("1//2gal"), 'invalid number', 'Should return "invalid number" for input 1//2gal');
   })
});