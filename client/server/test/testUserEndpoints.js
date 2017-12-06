const request = require('request');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../index.js');

const expect = chai.expect;

chai.use(chaiHttp);

it('GET /', done => {
    chai.request(app)
      .get('/')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        // See TODO1 in server.js, we need to set the content type to
        // json but it isn't working for some reason
        expect(res.text).to.equal("Test GET request");
        done();
      });
});
