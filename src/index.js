'use strict'

const BASE62='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const base62 = require('base-x')(BASE62);

function base62_encode(str) {
    return base62_encode_buffer(Buffer.from(str));
}

function base62_encode_buffer(buffer) {
    return base62.encode(buffer);
}

function base62_decode(str) {
    return base62.decode(str).toString();
}

module.exports = {
    base62_encode,
    base62_decode,
    base62_encode_buffer,
}