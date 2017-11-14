/*jslint
  devel : true browser: true */
/*global
    chai, suite, test, trim */
var assert = chai.assert;
var expect = chai.expect;

suite("Probando la funcon valorVerdad", function() {
    test("Pruebo que al pasar un undefined me devuelve undefined", function() {
        expect(valorVerdad(undefined)).to.equal(undefined);
    });
    test("Pruebo que al pasar un numerico me devuelve ese mismo numero", function() {
        expect(valorVerdad(2)).to.equal(2);
    });
    test("Pruebo que al pasar una cadena de un numero  devuelve el número como númerico", function() {
        expect(valorVerdad("5")).to.equal(5);
    });
    test("Pruebo que al pasar una cadena de un numero decimal  devuelve el número como númerico", function() {
        expect(valorVerdad("5.0")).to.equal(5.0);
    });
     test("Pruebo que al pasar una cadena de un numero en hexadecimeal  devuelve el número como númerico", function() {
        expect(valorVerdad("0x10")).to.equal(16);
    });
    
     test("Pruebo que al pasar una cadena me devuelve una cadena", function() {
        expect(valorVerdad("nueve")).to.equal("nueve");
    });
    
       test("Pruebo que al pasar una cadena con un boleano me devuelve boolean", function() {
        expect(valorVerdad("true")).to.equal(true);
    });
    
     test("Pruebo que al pasar una cadena con un boleano al principio me devuelve boolean", function() {
        expect(valorVerdad("false   ")).to.equal(false);
    });
    
     test("Pruebo que al pasar un boleano me devuelve boolean", function() {
        expect(valorVerdad(false)).to.equal(false);
    });
    
        test("Pruebo que al pasar una cadena que empieza valor numerico  me devuelve  un valor numerico y  unas cadena", function() {
        expect(valorVerdad("5 euros")).to.equal(5);
    });
    
        test("Pruebo que al pasar una cadena y un valor numerico  me devuelve  un valor numerico y  unas cadena", function() {
        expect(valorVerdad("34 50")).to.equal(34);
    });
});
