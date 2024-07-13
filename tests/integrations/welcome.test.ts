import request from 'supertest'

import app from '../../src/app'

describe('GET /', () => {
    it('should be return Hello World', async () => {
        const response = await request(app)
            .get('/')

        expect(response.status).toBe(200)
    })
})
