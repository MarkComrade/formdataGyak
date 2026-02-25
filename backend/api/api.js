const express = require('express');
const router = express.Router();
const database = require('../sql/database.js');
const fs = require('fs/promises');

//!Multer
const multer = require('multer'); //?npm install multer
const path = require('path');

const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, path.join(__dirname, '../uploads'));
    },
    filename: (request, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname); //?egyedi név: dátum - file eredeti neve
    }
});

const upload = multer({ storage });

//!Endpoints:
//?GET /api/test
router.get('/test', (request, response) => {
    response.status(200).json({
        message: 'Ez a végpont működik.'
    });
});

//?GET /api/testsql
router.get('/testsql', async (request, response) => {
    try {
        const selectall = await database.selectall();
        response.status(200).json({
            message: 'Ez a végpont működik.',
            results: selectall
        });
    } catch (error) {
        response.status(500).json({
            message: 'Ez a végpont nem működik.'
        });
    }
});

router.post('/addbook', upload.none(), async (request, response) => { 
    try {
        const bookData = request.body;
        console.log(bookData)
        const insertId = await database.insertBook(bookData);
        response.status(200).json({
            message: 'Könyv sikeresen hozzáadva.',
            bookId: insertId
        });
    }
    catch (error) {
        console.error('Hiba a könyv hozzáadásakor:', error);
        response.status(500).json({
            message: 'Hiba történt a könyv hozzáadásakor.'
        });
    }
});

router.get('/getbooks', async (request, response) => {
    try {
        const books = await database.selectall();

        response.status(200).json({
            message: 'Könyvek sikeresen lekérve.',
            books: books
        });
    } catch (error) {
        console.error('Hiba a könyvek lekérésekor:', error);
        response.status(500).json({
            message: 'Hiba történt a könyvek lekérésekor.'
        });
    }
});

module.exports = router;
