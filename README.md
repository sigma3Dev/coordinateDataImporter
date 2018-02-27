# coordinateDataImporter

## Installation

```
npm install --save coordinatedataimporter
```

## Usage

The module takes in a .txt file. 
The file should be in the following format (empty space between the numbers, no commas, one point per line):

```
23.5 33.3 45.7
5.5 3.3 7.7
16.5 44.3 34.7
```

The module then returns an array of objects. Each object describes the x, y and z coordinates of a point.

```js
[ { x: 23.5, y: 33.3, z: 45.7 },
  { x: 5.5, y: 3.3, z: 7.7 },
  { x: 16.5, y: 44.3, z: 34.7 } ]
```

## Tests

```
npm test
```

## Release History

0.1.0 Initial release
