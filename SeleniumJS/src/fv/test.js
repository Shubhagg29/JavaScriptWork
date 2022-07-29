
const assert = require('assert');
//import chai from 'chai';
//var expect= chai.expect;
const expect = require('chai').expect;

describe("Test function", ()=>{

    it("Simple Assertion",()=>{

        let star ='chai';
      
        assert(typeof star === "string");
        expect(star).to.equal('chai');
    });


});