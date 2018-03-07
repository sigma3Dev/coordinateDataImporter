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

The module has two methods: startCoordinateDataImport and targetCoordinateDataImport.

# startCoordinateDataImport:

Returns an array of objects. Each object contains 3 keys: x, y, and z. The value for each ofthese keys will be a number.

```js
[ { x: 23.5, y: 33.3, z: 45.7 },
  { x: 5.5, y: 3.3, z: 7.7 },
  { x: 16.5, y: 44.3, z: 34.7 } ]
```

# targetCoordinateDataImport

Returns an array of objects. Each object contains 6 keys: x, y, z, useX, useY and useZ. The first 3 values (x, y, z) will be numbers, the other 3 (useX, useY, useZ) will be boolean values.

```js
[ { x: 23.5, y: 33.3, z: 45.7, useX: true, useY: true, useZ: true },
  { x: 5.5, y: 3.3, z: 7.7, useX: true, useY: false, useZ: true },
  { x: 16.5, y: 44.3, z: 34.7, useX: true, useY: false, useZ: false } ]
```

## Tests

```
npm test
```

## Release History

0.1.0 Initial release
0.5.0 Current version