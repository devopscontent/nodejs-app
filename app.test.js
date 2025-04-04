const request = require('supertest');
const { app, server } = require('./index');  // Import both app and server

describe('GET /', () => {
    afterAll(() => {
        server.close();  // Properly close the server after tests to avoid Jest warnings
    });

    it('should return a Hello World message', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World from Node.js App!');
    });
});
