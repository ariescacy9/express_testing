import request from 'supertest';
import app from '../App.js';

before(async () => {  
  // create user
  const payload = {
    'name': 'teast',
    'last_name': 'test',
    'email': 'test@email.com',
    'password': '12345689'
  }
  await request(app).post('/auth/register').send(payload);
})