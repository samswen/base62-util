/* eslint-disable no-undef */
'use strict';

const { base62_encode, base62_decode } = require('../src');

const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

describe('Test base62_encode and base62_decode', () => {

    it('verifies a string after encoding and decoding are still the same', async () => {

        const str = 'Hello base62 encode/decode';
        const encoded = base62_encode(str);

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
