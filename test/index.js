const should                  = require('chai').should(),
      coordinateDataImport  = require('../index');

describe('#coordinateDataImporter', function() {
  it('turns two .txt files with start and target points into two arrays of coordinates', function() {
    const start = "./test/testStart.txt";
    const target = "./test/testTarget.txt";

    const result = {
      start: [23.5, 33.3, 45.7, 5.5, 3.3, 7.7, 16.5, 44.3, 34.7], 
      target: [33.5, 43.3, 55.7, 15.5, 13.3, 17.7, 26.5, 54.3, 44.7]
    };

    coordinateDataImport(start, target).should.deep.equal(result);
  });
});