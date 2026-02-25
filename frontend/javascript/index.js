document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitBtn').addEventListener('click', newBook);
});

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

const postMethodFetch = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: data
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    }
    catch (error) {
        console.error('Fetch error:', error);
    }
}

const newBook = async () => { 
    const formData = new FormData(document.getElementById("konyvForm"));

    try{
        const response = await postMethodFetch('/api/addbook', formData);
        console.log(response);
    } catch (error) {
        console.error('Hiba a könyv hozzáadásakor:', error);
    }
}