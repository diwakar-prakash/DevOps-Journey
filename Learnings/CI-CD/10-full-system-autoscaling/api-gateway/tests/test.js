const request = require('supertest');
const app = require('../src/index');

describe('Test Karna', () => {
    it('test hoga bhai at the /health route', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
    })
}) 

