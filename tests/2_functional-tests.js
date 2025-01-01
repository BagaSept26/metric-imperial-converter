const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

    //1. Convert a valid input such as 10L: GET request to /api/convert.
    test('Test GET request to /api/convert with valid input 10L', function(done) {
        chai.request(server)
        .get('/api/convert')
        .query({input: '10L'})
        .end(function(err, res){
          assert.equal(res.status, 200, 'Response status should be 200');
          assert.equal(res.body.initNum, 10, 'initNum should be 10');
          assert.equal(res.body.initUnit, 'l', 'initUnit should be l');
          assert.approximately(res.body.returnNum, 2.64172, 0.00001, 'returnNum should be approximately 2.64172');
          assert.equal(res.body.returnUnit, 'gal', 'returnUnit should be gal');
          assert.equal(res.body.string, '10 liters converts to 2.64172 gallons', 'string is not correct');
          done();
        });
      });

    //2. Convert an invalid input such as 32g: GET request to /api/convert.
    test('Test GET request to /api/convert with invalid input 32g', function(done) {
        chai.request(server)
        .get('/api/convert')
        .query({input: '32g'})
        .end(function(err, res){
            assert.equal(res.status, 200, 'Response status should be 200');
          assert.equal(res.body, 'invalid unit', 'Response should be invalid unit');
          done();
        });
      });

    //3. Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert.
    test('Test GET request to /api/convert with invalid number 3/7.2/4kg', function(done) {
        chai.request(server)
        .get('/api/convert')
        .query({input: '3/7.2/4kg'})
        .end(function(err, res){
          assert.equal(res.status, 200, 'Response status should be 200');
          assert.equal(res.body, 'invalid number', 'Response should be invalid number');
          done();
        });
      });

    //4. Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert.
    test('Test GET request to /api/convert with invalid number AND unit 3/7.2/4kilomegagram', function(done) {
        chai.request(server)
        .get('/api/convert')
        .query({input: '3/7.2/4kilomegagram'})
        .end(function(err, res){
          assert.equal(res.status, 200, 'Response status should be 200');
          assert.equal(res.body, 'invalid number and unit', 'Response should be invalid number and unit');
          done();
        });
      });

    //5. Convert with no number such as kg: GET request to /api/convert.
    test('Test GET request to /api/convert with no number such as kg', function(done) {
        chai.request(server)
        .get('/api/convert')
        .query({input: 'kg'})
         .end(function(err, res){
           assert.equal(res.status, 200, 'Response status should be 200');
           assert.equal(res.body.initNum, 1, 'initNum should be 1');
           assert.equal(res.body.initUnit, 'kg', 'initUnit should be kg');
           assert.approximately(res.body.returnNum, 2.20462, 0.00001, 'returnNum should be approximately 2.20462');
            assert.equal(res.body.returnUnit, 'lbs', 'returnUnit should be lbs');
            assert.equal(res.body.string, '1 kilograms converts to 2.20462 pounds', 'string is not correct');
           done();
        });
      });

});
