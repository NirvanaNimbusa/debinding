# debinding

**`debinding`** removes `process.[binding|_linkedBinding]`. That's all.

It does this by loading all the internal modules first, so they have access to
it, and then removing it.

The purpose of `process.binding` is to provide internal C++ functions to core
libraries. It was never intended as a tool to be used in userland, and really
shouldn't be used that way. You can use this library to enforce that in your
codebase. Just require it really early in your application.

## License

Apache 2.0. See LICENSE.txt.
