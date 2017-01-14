const oldNoDeprecation = process.noDeprecation;
require('./index');
const assert = require('assert');

assert(!process.binding);
assert(!process._linkedBinding);

assert.equal(process.noDeprecation, oldNoDeprecation);
