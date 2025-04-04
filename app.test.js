const request = require('supertest');
const { app, server } = require('./index');

describe('GET /', () => {
    afterAll((done) => {
        if (server) {
            server.close(done);  // Properly close the server with a callback to ensure Jest knows it's done
        }
    });

    it('should return a Hello World message', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World from Node.js App!');
    });
});
