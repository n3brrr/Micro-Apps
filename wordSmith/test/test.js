console.log = function () { };
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function () {

    let structureOne = function () {
      const getSuggestions = () => {
        _.then(_).then(jsonResponse => { 
          renderRawResponse(jsonResponse)
        })
      }
    };

    let structureTwo = function () {
      const getSuggestions = () => {
        _.then(_).then(jsonResponse => renderRawResponse(jsonResponse))
      }
    };

    // next CP
    let structureThree = function () {
      const getSuggestions = () => {
        _.then(_).then(jsonResponse => {
          renderResponse(jsonResponse)
        })
      }
    };

    let structureFour = function () {
      const getSuggestions = () => {
        _.then(_).then(jsonResponse => renderResponse(jsonResponse))
      }
    };

    let passesThisCP = Structured.match(code, structureOne) || Structured.match(code, structureTwo);
    let passesNextCP = Structured.match(code, structureThree) || Structured.match(code, structureFour);
    assert.isOk(passesThisCP || passesNextCP, 'Within the callback function of the second `.then()`, did you call `renderRawResponse()` and pass `jsonResponse` as its argument?');

  });
});