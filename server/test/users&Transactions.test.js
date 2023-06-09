import request from 'supertest';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from '../app';
import { User } from '../models/Users';
import { Transaction } from '../models/Transactions';

dotenv.config();

const number = (Math.floor(Math.random() * 10000) + 10000)
  .toString()
  .substring(1);
const newUser = {
  email: `test.jest${number}@mailcom`,
  password: 'Pas1234%',
  username: 'Jest',
};
const newUserWithBadEmail = {
  email: 'test.jestmail.com',
  password: 'Pas1234%',
  username: 'Jest',
};
let transaction = {
  type: false,
  amount: 1234,
  date: Date(),
  category: 'Car',
  comment: 'test Jest',
  owner: 'will be changed in test',
};

let transactionUpdate = {
  type: false,
  amount: 1234567,
  date: Date(),
  category: 'Car',
  comment: 'test Jest',
  owner: 'will be changed in test',
};

describe('Users test', () => {
  let token = 'token';
  let transactionId = 'id';
  beforeAll(async () => {
    await mongoose.connect(process.env.DB);
  });

  afterAll(async () => {
    await User.deleteOne({ email: newUser.email });
    await Transaction.deleteOne({ _id: transactionId });
    await mongoose.connection.close();
  });

  test('Sign up user', async () => {
    const res = await request(app)
      .post('/api/auth/sign-up')
      .send(newUser)
      .set('Accept', 'application/json');
    expect(res.status).toBe(201);
  });

  test('Sign up user with email in use', async () => {
    const res = await request(app)
      .post('/api/auth/sign-up')
      .send(newUser)
      .set('Accept', 'application/json');
    expect(res.status).toBe(409);
  });

  test('Sign up user with bad email', async () => {
    const res = await request(app)
      .post('/api/auth/sign-up')
      .send(newUserWithBadEmail)
      .set('Accept', 'application/json');
    expect(res.status).toBe(400);
  });

  test('Log in user', async () => {
    const res = await request(app)
      .post('/api/auth/sign-in')
      .send(newUser)
      .set('Accept', 'application/json');
    expect(res.status).toBe(201);
    expect(res.body).toBeDefined();
    token = res.body.token;
    transaction.owner = res.body.user.id;
    transactionUpdate.owner = res.body.user.id;
  });

  test('Log in user with bad email', async () => {
    const res = await request(app)
      .post('/api/auth/sign-in')
      .send(newUserWithBadEmail)
      .set('Accept', 'application|json');
    expect(res.status).toBe(401);
  });

  test('Current user', async () => {
    const res = await request(app)
      .get('/api/auth/current')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application|json');
    expect(res.status).toBe(200);
  });

  test('Create transaction', async () => {
    const res = await request(app)
      .post('/api/transactions/')
      .set('Authorization', `Bearer ${token}`)
      .send(transaction)
      .set('Accept', 'application/json');
    expect(res.status).toBe(201);
    expect(res.body).toBeDefined();
    transactionId = res.body.data._id;
  });

  test('All transactions', async () => {
    const res = await request(app)
      .get('/api/transactions')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json');
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
  });

  test('Update transaction', async () => {
    const res = await request(app)
      .put(`/api/transactions/${transactionId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(transactionUpdate)
      .set('Accept', 'application/json');
    expect(res.status).toBe(200);
  });

  test('Create bad transaction', async () => {
    const res = await request(app)
      .post('/api/transactions/')
      .set('Authorization', `Bearer ${token}`)
      .send()
      .set('Accept', 'application/json');
    expect(res.status).toBe(400);
  });

  test('All transactions not found', async () => {
    const res = await request(app)
      .get('/api/transaction-summary')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(404);
  });

  test('Transaction categories', async () => {
    const res = await request(app)
      .get('/api/transaction-categories')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json');
    expect(res.status).toBe(200);
  });

  test('Transaction categories not found', async () => {
    const res = await request(app)
      .get('/api/transaction-categorie')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json');
    expect(res.status).toBe(404);
  });

  test('Delete transaction', async () => {
    const res = await request(app)
      .delete(`/api/transactions/${transactionId}`)
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json');
    expect(res.status).toBe(204);
  });

  test('Logout user', async () => {
    const response = await request(app)
      .post('/api/auth/sign-out')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application|json');
    expect(response.status).toBe(200);
  });
});
