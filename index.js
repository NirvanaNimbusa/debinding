const oldNoDeprecation = process.noDeprecation;
process.noDeprecation = true;
Object.keys(process.binding('natives'))
  .filter(k => !k.includes('/'))
  .forEach(k => require(k));
process.noDeprecation = oldNoDeprecation;

const blank = {
  configurable: false,
  writable: false,
  value: undefined
};

Object.defineProperty(process, 'binding', blank);
Object.defineProperty(process, '_linkedBinding', blank);
