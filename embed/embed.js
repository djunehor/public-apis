let baseUrl = 'https://my-json-server.typicode.com/typicode/demo';
window.onload = () => {
    console.log('on load', window.location.href);
    let elements = getAllEmbedElements();

    for(let element of elements) {
        populateElement(element);
    }
}

function getAllEmbedElements() {
    return document.getElementsByClassName('embedable');
}

async function populateElement(element) {
    let id = element.id;
    let result = await apiCall(id);
    element.innerHTML = JSON.stringify(result)
}

async function apiCall(id) {
    fetch(`${baseUrl}/${id}`)
    .then((res) => res.json())
    .catch((err)  => {
        console.log(err);
    });
}
