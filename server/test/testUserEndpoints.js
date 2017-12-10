const request = require('request');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const mysql = require('mysql');
const assert = require('assert');

const app = require('../index.js');

const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cs130_project_test',
    multipleStatements: true,
});

//Clear the test database
const query = `SET FOREIGN_KEY_CHECKS = 0; TRUNCATE TABLE User; ` +
				`SET FOREIGN_KEY_CHECKS = 1;`;

db.query(query, (error, results) => {
    if (error) {
        console.log(error);
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .send({ message: "Internal server error." });
    }
    else {
        console.log("Success");
    }
});


// TODO:
// Dynmically switch server.js database to cs130_project_test when testing

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

it('Should sign up a user', function(done) {
	chai.request(app)
	.post('/v1/user/0/signup')
	.send({"password":"abc"})
	.end(function(err, res) {
		res.should.have.status(200);
		done();
	});
});

it('Should prevent duplicate user', function(done) {
	chai.request(app)
	.post('/v1/user/0/signup')
	.send({"password":"abc"})
	.end(function(err, res) {
		res.should.have.status(500);
		done();
	});
});

it('Should update password', function(done) {
    chai.request(app)
    .post('/v1/user/0/update')
    .send({"password":"abc",
            "newPassword": "bcd"})
    .end(function(err, res) {
        res.should.have.status(200);
        done();
    });
});

it('Should create a request', function(done) {
    chai.request(app)
    .post('/v1/request/create')
    .send({"userId":"0",
            "title":"first request",
            "latitude":32.001,
            "longitude":32.001,
            "address":"527 Midvale",
            "description":"first request",
            "timeStart":"2017-01-09 00:00:00",
            "timeEnd":"2017-01-09 00:00:00"
        })
    .end(function(err, res) {
        res.should.have.status(200);
        done();
    });
});

it('Should create a request', function(done) {
    chai.request(app)
    .get('/v1/user/0/requests')
    .end(function(err, res) {
        res.should.have.status(200);
        done();
    });
});
