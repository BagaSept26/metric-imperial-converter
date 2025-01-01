const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

  // Perubahan: Menambahkan suite untuk routing tests
  suite('Routing Tests', function() {
    
    // Perubahan: Menambahkan suite untuk GET /api/convert
    suite('GET /api/convert => conversion object', function() {
      
      //1. Convert a valid input such as 10L: GET request to /api/convert.
      test('Convert 10L (valid input)', function(done) { // Perubahan: Mengubah nama test dan menggunakan logic dari contoh
        chai.request(server)
         .get('/api/convert')
          .query({input: '10L'})
          .end(function(err, res){
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, 10);
            assert.equal(res.body.initUnit, 'L');
            assert.approximately(res.body.returnNum, 2.64172, 0.1);
            assert.equal(res.body.returnUnit, 'gal');
            done();
          });
        });
      
        //2. Convert an invalid input such as 32g: GET request to /api/convert.
        test('Convert 32g (invalid input unit)', function(done) { // Perubahan: Mengubah nama test dan menggunakan logic dari contoh
          chai.request(server)
            .get('/api/convert')
            .query({input: '32g'})
            .end(function(err, res){
              assert.equal(res.status, 200)
              assert.equal(res.body, 'invalid unit');
              done(); // Perubahan: Pindahkan done() ke dalam end
          });
        });
      
      //3. Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert.
      test('Convert 3/7.2/4kg (invalid number)', function(done) { // Perubahan: Mengubah nama test dan menggunakan logic dari contoh
        chai.request(server)
        .get('/api/convert')
         .query({input: '3/7.2/4kg'})
         .end(function(err, res){
           assert.equal(res.status, 200)
          assert.equal(res.body, 'invalid number');
           done(); // Perubahan: Pindahkan done() ke dalam end
        });
       });  
      
     //4. Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert.
     test('Convert 3/7.2/4kilomegagram (invalid number and unit)', function(done) {  // Perubahan: Mengubah nama test dan menggunakan logic dari contoh
        chai.request(server)
         .get('/api/convert')
         .query({input: '3/7.2/4kilomegagram'})
          .end(function(err, res){
            assert.equal(res.status, 200)
            assert.equal(res.body, 'invalid number and unit');
           done(); // Perubahan: Pindahkan done() ke dalam end
         });
       });
      
      //5. Convert with no number such as kg: GET request to /api/convert.
     test('Convert kg (no number)', function(done) { // Perubahan: Mengubah nama test dan menggunakan logic dari contoh
       chai.request(server)
          .get('/api/convert')
          .query({input: 'kg'})
          .end(function(err, res){
            assert.equal(res.status, 200)
            assert.equal(res.body.initNum, 1)
             assert.equal(res.body.initUnit, 'kg')
             done(); // Perubahan: Pindahkan done() ke dalam end
         });
        });
      
     });
   });

});