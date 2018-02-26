# coordinateDataImporter

## Usage

The module takes in two .txt files. The first file contains the start system, the second file the target system.
The files should be in the following format (empty spaces between the numbers, no commas, can be split up on multiple lines):

23.5 33.3 45.7
5.5 3.3 7.7
16.5 44.3 34.7

The module then returns an object. The first property of this object will be an array of the values from the start system, the second property will be the values from the target system. 

```js
{
  start: [23.5, 33.3, 45.7, 5.5, 3.3, 7.7, 16.5, 44.3, 34.7], 
  target: [33.5, 43.3, 55.7, 15.5, 13.3, 17.7, 26.5, 54.3, 44.7]
};
```
