document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = "https://reqres.in/api/users?delay=3";
    const localStorageKey = "userData";
    const localStorageExpiryKey = "userDataExpiry";
    const expiryTime = 60 * 1000; // 1 minuto en milisegundos

    function fetchDataFromApi() {
        return fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Almacenar datos en el local storage
                localStorage.setItem(localStorageKey, JSON.stringify(data));
                const currentTime = new Date().getTime();
                localStorage.setItem(localStorageExpiryKey, currentTime);
                return data;
            })
            .catch(error => console.error("Error al obtener datos del servidor:", error));
    }

    function displayData(userData) {
        const userDataDiv = document.getElementById("userData");
        userDataDiv.innerHTML = "";
        userData.data.forEach(user => {
            const userCard = createUserCard(user);
            userDataDiv.appendChild(userCard);
        });
    }

    function createUserCard(user) {
        const userCard = document.createElement("div");
        userCard.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-4");
        userCard.innerHTML = `
            <div class="card">
                <img src="${user.avatar}" class="card-img-top rounded-circle" alt="Avatar">
                <div class="card-body">
                    <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
                    <p class="card-text">${user.email}</p>
                </div>
            </div>
        `;
        return userCard;
    }

    function fetchDataFromLocalStorage() {
        const userData = localStorage.getItem(localStorageKey);
        if (userData) {
            displayData(JSON.parse(userData));
        } else {
            fetchDataFromApi().then(displayData);
        }
    }

    function checkLocalStorageExpiry() {
        const storedTime = localStorage.getItem(localStorageExpiryKey);
        if (storedTime) {
            const currentTime = new Date().getTime();
            if (currentTime - parseInt(storedTime) <= expiryTime) {
                fetchDataFromLocalStorage();
                return;
            }
        }
        fetchDataFromApi().then(displayData);
    }

    // Hacer la primera solicitud al cargar la página
    checkLocalStorageExpiry();
});