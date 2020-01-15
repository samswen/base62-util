/* eslint-disable no-undef */
'use strict';

const { base62_encode, base62_decode, base62_encode_buffer } = require('../src');

const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

describe('Test base62_encode, base62_decode and encoded_buffer', () => {

    it('verifies a string after encoding and decoding are still the same', async () => {


        const str = 'Hello base62 encode/decode';

        const encoded_buffer = base62_encode_buffer(Buffer.from(str));

        const encoded = base62_encode(str);

        expect(encoded_buffer).equals(encoded);

        //console.log(encoded);
        assert.isNotNull(encoded);
        expect(encoded).to.be.an('string');

        const decoded = base62_decode(encoded);

        //console.log(decoded);
        assert.isNotNull(decoded);
        expect(decoded).to.be.an('string');

        expect(decoded).equals(str);
    });
});
