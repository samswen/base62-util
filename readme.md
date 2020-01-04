# base62-util

Instead of base64, base62 encode for string consists of only alphanumeric:

   0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ

## how to install

  npm install @samwen/base62-util --save

## how to use

    const { base62_encode, base62_decode } = require('@samwen/base62-util');

    const str = 'Hello base62 encode/decode';
    const encoded = base62_encode(str);
    const decoded = base_decode(encoded);


