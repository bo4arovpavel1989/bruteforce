const assert = require('assert');
const bf = require('./bruteforce');


describe('bruteforce', () => {
  it('should find "secret" string', async () => {
    const chars = ['a', 'b', 'c', 'd', 'e'];
    const secret = 'ba';
    const check = (c) => new Promise((resolve, reject) => resolve(c === secret))

    const result = bf({ chars }, check)

    assert.equal(await result, secret);
  })

  it('should find "secret" number from numbers charset', async () => {
    const chars = [1, 2, 3, 4, 5];
    const secret = 21;
    const check = (c) => new Promise((resolve, reject) => resolve(c == secret))

    const result = bf({ chars }, check)

    assert.equal(await result, secret);
  })

  it('should throw TypeError for not array charset', async () => {
    const chars = {};
    const secret = 21;
    const check = (c) => new Promise((resolve, reject) => resolve(c == secret))

    const result = bf.bind(null, { chars }, check)

    await assert.rejects(result, { name: 'TypeError' });
  })

  it('should throw TypeError for empty array charset', async () => {
    const chars = [];
    const secret = 21;
    const check = (c) => new Promise((resolve, reject) => resolve(c == secret))

    const result = bf.bind(null, { chars }, check)

    await assert.rejects(result, { name: 'TypeError' });
  })
});
