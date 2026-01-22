console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {

    let structureOne = function() {
      const shortenUrl = () => {
        fetch(_).then(_)
        .then(jsonResponse => {})
      }
    }

    let structureTwo = function () {
      const shortenUrl = () => {
        fetch(_).then(_)
        .then(jsonResponse => _)
      }
    };

    let isMatchOne = Structured.match(code, structureOne) || Structured.match(code, structureTwo);
    assert.isOk(isMatchOne, 'Did you include an arrow function callback inside the second `.then()`? It should take `jsonResponse` as an argument.')


    let structureThree = function() {
      const shortenUrl = () => {
        fetch(_).then(_)
        .then(jsonResponse => {
          renderResponse(jsonResponse)
        })
      }
    }

    let structureFour = function () {
      const shortenUrl = () => {
        fetch(_).then(_)
        .then(jsonResponse => renderResponse(jsonResponse))
      }
    };

    let isMatchTwo = Structured.match(code, structureThree) || Structured.match(code, structureFour);
    assert.isOk(isMatchTwo, 'Within the callback function, did you call `renderResponse()` with `jsonResponse` as an argument?')
  });
});
