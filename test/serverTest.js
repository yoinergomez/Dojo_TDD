var should = require('should');
var supertest = require('supertest');
var assert = require('assert');
let test = require('assert');
var Codebreaker = require('../Codebreaker');
var app = require('../server');
var chai = require('chai');
let codebreaker = new Codebreaker();

var request = supertest(app);

describe('GET /setSecret/:number', function() {
    it('should return code 200', function(done) {
        request.get('/setSecret/1234')
            .expect(200)
            .end(function(err, res){
  		    		if (err) return done(err);
  					       done();
  			    });
    });

    it('should return a Content-Type application/json', function(done) {
        request.get('/setSecret/1234')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res){
  		    		if (err) return done(err);
  					       done();
  			    });
    });

    it('should return a correct message Json Object', function(done) {
        request.get('/setsecret/1234')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res){
  		    		if (err) return done(err);
  		    		should.not.exist(err);
  		    		should.exist(res);
  		    		res.body.should.be.an.Object;
  		    		should.exist(res.body.message);
  		    		done();
  			    });
    });

});

describe('GET /guess/:number', function() {
    it('should return code 200', function(done) {
        request.get('/guess/1234')
            .expect(200)
            .end(function(err, res){
  		    		if (err) return done(err);
  					       done();
  			    });
    });

    it('should return a Content-Type application/json', function(done) {
        request.get('/guess/1234')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res){
  		    		if (err) return done(err);
  					       done();
  			    });
    });

    it('should return a correct result Json Object', function(done) {
        request.get('/guess/1234')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res){
  		    		if (err) return done(err);
  		    		should.not.exist(err);
  		    		should.exist(res);
  		    		res.body.should.be.an.Object;
  		    		should.exist(res.body.result);
  		    		done();
  			    });
    });

    it('should guess the correct number', function(done) {
        request.get('/guess/1234')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res){
  		    		if (err) return done(err);
  		    		should.not.exist(err);
  		    		should.exist(res);
  		    		res.body.should.be.an.Object;
  		    		should.exist(res.body.result);
              assert.equal('XXXX',res.body.result);
  		    		done();
  			    });
    });
});
