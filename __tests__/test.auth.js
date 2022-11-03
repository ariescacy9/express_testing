import request from 'supertest';
import chai from 'chai';
import app from '../App.js';
import User from '../models/user.js';

const { expect } = chai;

describe('Test the auth endpoints', () => {

  it('should allow to create users', async () => {
    const payload = {
      'name': 'teast',
      'last_name': 'test',
      'email': 'josae@email.com',
      'password': '123456'
    }
    const { body, status } = await request(app).post('/auth/register').send(payload);
    expect(status).to.equal(201);

    // check the userId
    expect(body).to.have.property('userId');
    const userId = body.userId;
    const user = await User.findByPk(userId);
    expect(user.name).to.equal(payload.name);
    expect(user.last_name).to.equal(payload.last_name);
  });

  it('should allow to login', async () => {
    const payload = {
      'email': 'josae@email.com',
      'password': '123456'
    }
    const { body, status } = await request(app)
      .post('/auth/login')
      .type("json")
      .send(payload);
    expect(status).to.equal(200);
  });

  it("should fail if email is not incorrect", async () => {
    const payload = {
      'email': 'unexsitedEmail@email.com',
      'password': '123456'
    }
    const { body, status } = await request(app)
      .post('/auth/login')
      .type("json")
      .send(payload);
    expect(status).to.equal(404);
    expect(body.message).contains('No user found with email');
  });

  it("should fail if password is not incorrect", async () => {
    const payload = {
      'email': 'josae@email.com',
      'password': 'badPassword'
    }
    const { body, status } = await request(app)
      .post('/auth/login')
      .type("json")
      .send(payload);
    expect(status).to.equal(401);
    expect(body.message).contains('Invalid Password');
  });
});