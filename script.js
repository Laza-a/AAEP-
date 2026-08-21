// Obtenemos el campo de búsqueda mediante su ID
const searchInput = document.getElementById("search-input");

// Agregamos un evento que se ejecuta cada vez que el usuario escribe
searchInput.addEventListener("input", filtroAnimalRaza);


// Función encargada de filtrar los animales
function filtroAnimalRaza() {

    // Obtenemos el texto escrito por el usuario
    // y lo pasamos a minúsculas para facilitar la comparación
    const textoBuscado = searchInput.value.toLowerCase().trim();

    // Seleccionamos todas las tarjetas de animales
    const animales = document.querySelectorAll(".card");


    // Recorremos cada tarjeta
    animales.forEach(function(animal) {

        // Obtenemos el nombre guardado en data-animal
        const nombreAnimal = animal.dataset.animal.toLowerCase();

        // Comprobamos si el nombre contiene el texto buscado
        if (nombreAnimal.includes(textoBuscado)) {

            // Si coincide, mostramos la tarjeta
            animal.style.display = "block";

        } else {

            // Si no coincide, ocultamos la tarjeta
            animal.style.display = "none";
        }

    });
}