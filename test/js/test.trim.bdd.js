/*jslint
  devel : true browser: true */
/*global
    chai, describe, it, trim */
var expect = chai.expect;
chai.should();

describe("Testing trim BDD style", function () {
    it("Should return empty string for empty string", function () {
        multplicar(2,5).should.be.equal(10);
    });
    it("Should return empty string for one space", function () {
        trim("2","3").should.be.equal(0);
    });
    it("Should return 'foo' for ' foo '", function () {
        trim(" foo ").should.be.equal("foo");
    });
    it("Should return 'fo o' for ' fo  o '", function () {
        trim(" fo  o ").should.be.equal("fo o");
    });
    it("Buenas tardes", function () {
        trim("fo    o").should.be.equal("fo o");
    });
    it("Should return the correct spaces for a more complex word", function () {
        trim(" El   veloz murciélago   hindú comía   feliz   cardillo y kiwi    ")
            .should.be.equal("El veloz murciélago hindú comía feliz cardillo y kiwi");
    });
});
