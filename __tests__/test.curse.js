import request from 'supertest';
import chai from 'chai';
import app from '../App.js';
import User from '../models/user.js';
import getToken from './utils.js';
import Curse from '../models/curse.js';
import { before } from 'mocha';

const { expect } = chai;

describe('Test the curse endpoints', () => {
  let token;
  let curse1;
  let curse2;

  before( async () => {
    token = await getToken();
    curse1 = await Curse.create({
      id: 'TE224',
      name: 'test4',
      credit: '3',
      nota_id: '2',
      condition_id:'3',
    })
    curse2 = await Curse.create({
      id: 'TE225',
      name: 'test3',
      credit: '4',
      nota_id: '3',
      condition_id:'4',
    })
  })

  it('should retrieve all the curses', async () => {
    const { body, status } = await request(app)
      .get('/curses')
      .set('Authorization', `Bearer ${token}`);
    expect(status).to.equal(200);
    expect(body).to.be.a('array');
    expect(body.length).to.equal(2);//'9 en test local'
  });

  it('get /curses should retrieve unauthorized for unloged users', async () => {
    const { status } = await request(app)
      .get('/curses')
    expect(status).to.equal(403);
  });

  it('should retrieve a curse by id', async () => {
    const { body, status } = await request(app)
      .get(`/curses/${curse1.id}`)
      .set('Authorization', `Bearer ${token}`);
    expect(status).to.equal(200);
    expect(body).to.be.a('object');
    expect(body.id).to.equal(curse1.id);
    expect(body.name).to.equal(curse1.name);
  });

  it('get /curses/id should retrieve unauthorized for unloged users', async () => {
    const { status } = await request(app)
      .get(`/curses/${curse1.id}`);
    expect(status).to.equal(403);
  });

  it('put /curses/id should allow to update the object', async () => {
    const payload = { 
      id: 'TE224',
      name: 'new name',
    }
    const { body, status } = await request(app)
      .put(`/curses/${curse1.id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(payload);
    expect(status).to.equal(200);
    expect(body).to.be.a('object');
    
    // retrieve the object from the database
    const curse = await Curse.findByPk(curse1.id);
    expect(curse.name).to.equal(payload.name);
  });

  it('post /curses should allow to create an object', async () => {
    const payload = { 
      id: 'TE226',
      name: 'test4',
      credit: '5',
      nota_id: '4',
      condition_id:'2',
    }
    const { body, status } = await request(app)
      .post('/curses')
      .set('Authorization', `Bearer ${token}`)
      .send(payload);
    expect(status).to.equal(200);
    expect(body).to.be.a('object');
    
    // retrieve the object from the database
    const curse = await Curse.findByPk("TE226");
    expect(curse.name).to.equal(payload.name);
  });

  it('delete /curses/id should allow to delete an object', async () => {
    
    const { body, status } = await request(app)
      .delete(`/curses/TE226`)
      .set('Authorization', `Bearer ${token}`)
    expect(status).to.equal(200);
    expect(body).to.be.a('object');
    
    // retrieve the object from the database
    const curse = await Curse.findByPk("TE226");
    expect(curse).to.equal(null);
  });
});