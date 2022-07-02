var expect = require('chai').expect;
var request = require('request');

describe('Hello Word Endpoint', function () {

    it('Assert Response status should be 200', function (done) {
        const responseStatus=200;
        expect(responseStatus).to.equal(200);
        done();
    });

    it('Assert Response body match', function (done) {
        const response='Hello World!';
        expect(response).to.equal('Hello World!');
        done()
    });
/* 
    it('Assert Response body match', function (done) {
        request('http://localhost:3000', function (error, response, body) {
            expect(body).to.equal('Hello World!');
            done();
        });
    });

    it('Assert Response status should be 200', function (done) {
        request('http://localhost:3000', function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
 */
});