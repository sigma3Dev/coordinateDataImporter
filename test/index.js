var should                = require('chai').should(),
    coordinateDataImport  = require('../index');

describe('#coordinateDataImporter', function() {
  it('turns a .txt file with a set of points into array of coordinates', function() {
    var points = "./test/testPoints.txt";

    var result = [{
        "x": 33.5,
        "y": 43.3,
        "z": 55.7
        }, {
        "x": 15.5,
        "y": 13.3,
        "z": 17.7
        }, {
        "x": 26.5,
        "y": 54.3,
        "z": 44.7
      }];
    var test = coordinateDataImport(points);
    console.log(test);
    test.should.deep.equal(result);
  });
});