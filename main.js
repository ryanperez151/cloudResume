window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});


//const localApi = 'localApihere';
const functionApi = 'https://ryanresume-counter-function.azurewebsites.net/api/HttpTriggerCounter?code=UmgUWcE-zA3EMNIJmxn02OKxQNFrWVvbU3oYDZbGR49nAzFuhRrO3w=='; 

const getVisitCount = () => {
    let count = 42;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response;
        document.getElementById('counter').innerText = count;
		document.getElementById('visitorElem').style.display = 'block';
    }).catch((error) => {
        console.log(error);
    });
    return count;
}