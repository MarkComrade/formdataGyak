document.addEventListener('DOMContentLoaded', () => {
    createTable();
})

const getMethodFetch = async (url) => { 
    try{
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

const createTable = async () => {
    console.log('indulas');
    const data = await getMethodFetch('/api/getbooks');
    console.log(data);

    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const headers = ['ID', 'Cím', 'Szerző', 'Kiadó', 'Kiadás éve', 'Oldalak száma', 'Műfaj', 'Ár'];

    headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    data.books.forEach(book => {
        const row = document.createElement('tr');
        Object.values(book).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    let div = document.getElementById('forTable');
    div.appendChild(table);
}