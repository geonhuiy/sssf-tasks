'use strict';
const cats = [
  {
    id: '1',
    name: 'Frank',
    age: '6',
    weight: '5',
    owner: '1',
    filename: 'http://placekitten.com/400/300',
  },
  {
    id: '2',
    name: 'James',
    age: '4',
    weight: '11',
    owner: '2',
    filename: 'http://placekitten.com/400/302',
  },
];
const pool = require('../database/db');
const promisePool = pool.promise();

const getAllCats = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM wop_cat');
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }   
};

const getCat = async (id) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM wop_cat WHERE cat_id = ?', [id]);
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }   
};
const addCat = async (name, age, weight, owner, filename) => {
  try {
    const [rows] = await promisePool.query("INSERT INTO wop_cat (name, age, weight, owner, filename) VALUES ('"+name+"', '"+age+"','"+weight+"','"+owner+"','"+filename+"')");
    return rows;
  } catch (e) {
    console.log('error', e.message)
  }
}

const updateCat = async (id, name, age, weight, owner) => {
  try {
    const [rows] = await promisePool.query("UPDATE wop_cat SET name = '"+name+"', age = '"+age+"', weight = '"+weight+"', owner = '"+owner+"' WHERE cat_id = '"+id+"'");
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
}

module.exports = {
  cats,
  getCat,
  getAllCats,
  addCat,
  updateCat
};
