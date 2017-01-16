var oldNoDeprecation = process.noDeprecation;
process.noDeprecation = true;
Object.keys(process.binding('natives'))
  .filter(function(k){return k.indexOf('/') === -1})
  .forEach(function(k){require(k)});
process.noDeprecation = oldNoDeprecation;

var blank = {
  configurable: false,
  writable: false,
  value: undefined
};

Object.defineProperty(process, 'binding', blank);
Object.defineProperty(process, '_linkedBinding', blank);
