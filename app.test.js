//test('Basic test to verify Jest setup', () => {
  //  expect(1 + 1).toBe(2);
  //});


  // app.test.js
const request = require('supertest');
const app = require('./index');  // Make sure to export your app in app.js

describe('GET /', () => {
    it('should return a Hello World message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Hello World from Node.js App!');
    });
});
