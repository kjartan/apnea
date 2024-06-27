import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

export async function getContestants() {
  const [rows] = await pool.query("SELECT * FROM notes")
  return rows
}

export async function getContestant(id) {
  const [rows] = await pool.query(`
  SELECT * 
  FROM contestants
  WHERE id = ?
  `, [id])
  return rows[0]
}

export async function creatContestant(title, contents) {
  const [result] = await pool.query(`
  INSERT INTO contestants (firstNam, lastName, country)
  VALUES (?, ?, ?)
  `, [firstNam, lastName, country])
  const id = result.insertId
  return getContestant(id)
}
