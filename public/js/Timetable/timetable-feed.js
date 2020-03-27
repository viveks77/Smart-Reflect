const url = "http://localhost:3000/getData";

const fetchData = async (raw) => {
    const response = await fetch(url, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : raw,
        redirect : 'follow'
    });

    const data = await response.json();
    return data;
}

