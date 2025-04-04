describe('GET /', () => {
    afterAll((done) => {
        if (server) {
            server.close(done);  // Properly close the server
        }
    }, 10000);  // Increase the timeout to 10 seconds

    it('should return a Hello World message', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World from Node.js App!');
    });
});
