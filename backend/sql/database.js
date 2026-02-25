const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'elsofeladat',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

//!SQL Queries
async function selectall() {
    const query = 'SELECT * FROM konyv;';
    const [rows] = await pool.execute(query);
    return rows;
}

async function insertBook(book) {
    const query = 'INSERT INTO konyv (cim, szerzo, kiado, kiadas, oldalak, mufaj, ar) VALUES (?, ?, ?, ?, ?, ?, ?);';
    try{
        const [result] = await pool.execute(query, [book.cim, book.szerzo, book.kiado, book.kiadas, book.oldal, book.mufaj, book.ar]);
        return result.insertId;
    } catch (error) {
        console.error('Hiba az adat beszúrásakor:', error);
    }
}
//!Export
module.exports = {
    selectall,
    insertBook
};
