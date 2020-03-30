'use strict';
const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@metropolia.fi',
    password: '1234',
  },
  {
    id: '2',
    name: 'Jane Doez',
    email: 'jane@metropolia.fi',
    password: 'qwer',
  },
];
const pool = require('../database/db');
const promisePool = pool.promise();

const getAllUsers = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM wop_user');
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }   
};

const getUser = async (id) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM wop_user WHERE user_id = ?', [id]);
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }   
};
module.exports = {
  users,
  getAllUsers,
  getUser
};
