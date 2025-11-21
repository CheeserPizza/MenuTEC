// Datos de Pizzas, Paquetes y Complementos

// Versión de las imágenes - Cambia este número cuando subas nuevas imágenes para forzar la recarga
const IMAGE_VERSION = "v2.1";

// Función para agregar versión a las URLs de imágenes y evitar caché
function getImageUrl(imgPath) {
    if (!imgPath) return '';
    const separator = imgPath.includes('?') ? '&' : '?';
    return `${imgPath}${separator}v=${IMAGE_VERSION}`;
}

let customPizzaQuantityValue = 0; // Variable global para la cantidad

const ingredientes = [
    'Pepperoni',
    'Salami',
    'Tocino',
    'Chorizo',
    'Salchicha Italiana',
    'Jamón',
    'Piña',
    'Champiñones',
    'Cebolla',
    'Pimiento Morron',
    'Jalapeños',
    'Aceitunas'
];

const ingredientesExtra = {};
  

const opcionesAdicionales = {
    orillaRellena: false, // Orilla rellena de queso
    quesoExtra: false     // Queso extra
};

const metodosDePago = ['Efectivo', 'Transferencia Bancaria', 'Tarjeta Credito o Debito'];

const metodosEntrega = [ // ALGO PARA PREGUNTAR
    { metodosEntrega: 'Paso por el Pedido', precioEnvio: 0}
    // Próximamente: Entrega a Domicilio
];

const pizzas = [
    { id: "pizza-peperoni", type: "pizza", id: "peperoni", name: "Pizza de Pepperoni", img: "imgs/peperoni.jpg", price: 99 },

    { id: "pizza-queso", type: "pizza", id: "queso", name: "Pizza de Queso", img: "imgs/pizzaQueso.jpg", price: 99 },
    
    { id: "pizza-peperoniExtra", type: "pizza", id: "extrapeperoni", name: "Pizza de Extra Pepperoni", img: "imgs/extrapeperoni.jpg", price: 129 },

    { id: "pizza-peperoniExtra", type: "pizza", id: "mitamita", name: "1/2 Peperoni 1/2 Queso ", img: "imgs/pizzamitamita.jpeg", price: 119 },

    { id: "pizza-suprema", type: "pizza", id: "suprema", name: "Pizza Suprema", img: "imgs/suprema.jpg", price: 189 },
    
    { id: "pizza-hawaiana", type: "pizza", id: "hawaiana", name: "Pizza Hawaiana", img: "imgs/hawaiana.jpg", price: 159 },
    
    { id: "pizza-trompo", type: "pizza", id: "trompo", name: "Pizza De Trompo", img: "imgs/pizzaTrompo.jpg", price: 169 },
    
    { id: "pizza-3carnes", type: "pizza", id: "3carnes", name: "Pizza 3 Carnes", img: "imgs/3carnes.jpg", price: 169 },
    
    { id: "pizza-alpastor", type: "pizza", id: "alpastor", name: "Pizza Al Pastor", img: "imgs/pizzaAlPastor.jpg", price: 179 },
    
    { id: "pizza-boneless", type: "pizza", id: "pizzaBoneless", name: "Pizza de Boneless con Aderezo", img: "imgs/pizzaBoneless.jpg", price: 189 },
    
    { id: "pizza-mexicana", type: "pizza", id: "mexicana", name: "Pizza A la Mexicana", img: "imgs/mexicana.jpg", price: 189 },
    
    { id: "pizza-cheetos", type: "pizza", id: "cheetos", name: "Pizza de Cheetos Flamin Hot", img: "imgs/cheetos.jpg", price: 179 },
    
    { id: "pizza-vegetariana", type: "pizza", id: "vegetariana", name: "Pizza Vegetariana", img: "imgs/vegetariana.jpg", price: 179 }
];

const paquetes = [
    { 
        type: "paquete", 
        name: "Paquete 1",
        id: "paquete-1", 
        img: "imgs/Paquete1.jpg", 
        price: 265, 
        products: [
            { type: "pizza", name: "Pizza de Peperoni", options: { ingredients: ingredientes } },
            { type: "bonealitas", name: "Boneless", options: { sauces: ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"], type: ["Bañados", "Naturales"] } },
            { type: "bebida", name: "Refresco Grande 1.75L" }
        ] 
    },
    { 
        type: "paquete", 
        name: "Paquete 2",
        id: "paquete-2", 
        img: "imgs/Paquete2.jpg", 
        price: 195, 
        products: [
            { type: "pizza", name: "Pizza de Peperoni", options: { ingredients: ingredientes } },
            { type: "complementos", name: "Espagueti Sencillo" },
            { type: "bebida", name: "Refresco Grande 1.75L" }
        ] 
    },
    { 
        type: "paquete", 
        name: "Paquete 3",
        id: "paquete-3", 
        img: "imgs/Paquete3.jpg", 
        price: 225, 
        products: [
            { type: "pizza", name: "Pizza De Boneless (Bañados o Naturales)", options: { sauces: ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"], type: ["Bañados", "Naturales"] } },
            { type: "complemento", name: "Aderezo A Elegir", options: { sauces: ["Ranch", "Jalapeño", "Chipotle", "BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"] } },
            { type: "bebida", name: "Refresco Grande 1.75L" }

        ] 
    },
    { 
        type: "paquete",
        name: "Paquete 4", 
        id: "paquete-4",
        img: "imgs/Paquete4.jpg", 
        price: 315, 
        products: [
            { type: "pizza", name: "2 Pizzas de Peperoni con Extra Queso", options: { ingredients: ingredientes, multiple: true } },
            { type: "bebida", name: "Refresco Grande 1.75L" }
        ] 
    },
    { 
        type: "paquete",
        name: "Paquete 5", 
        id: "paquete-5",
        img: "imgs/Paquete5.jpg", 
        price: 315, 
        products: [
            { type: "pizza", name: "Pizza Grande de 1 Ingrediente", options: { ingredients: ingredientes } },
            { type: "bonealitas", name: "Boneless con Papas", options: { sauces: ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"], type: ["Bañados", "Naturales"] } },
            { type: "complementos", name: "1/2 Litro Espagueti" },
            { type: "bebida", name: "Refresco Grande 1.75L" }
        ] 
    }
];

const bonealitas = [
    { id: "bonealitas-boneless", type: "bonealitas", name: "Boneless", img: "imgs/boneless.jpg", price: 139, options: { sauces: ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"], type: ["Bañados", "Naturales"] } },
    { id: "bonealitas-alitas", type: "bonealitas", name: "Alitas", img: "imgs/alitas.jpg", price: 139, options: { sauces: ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"], type: ["Bañados", "Naturales"] } },
    { id: "bonealitas-1kg-boneless", type: "bonealitas", name: "1Kg de Boneless (No incluye papas)", img: "imgs/kiloBoneless.jpg", price: 279, options: { sauces: ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"], type: ["Bañados", "Naturales"] } },
    { id: "bonealitas-1kg-alitas", type: "bonealitas", name: "1Kg de Alitas  (No incluye papas)", img: "imgs/alitas.jpg", price: 279, options: { sauces: ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"], type: ["Bañados", "Naturales"] } }
];

const complementos = [
    { id: "complemento-papas-sencillas", type: "complemento", name: "Papas Sencillas", img: "imgs/papassencillas.jpg", price: 49 },
    { id: "complemento-papas-preparadas", type: "complemento", name: "Papas Preparadas", img: "imgs/papaspreparadas.jpg", price: 69 },
    { id: "complemento-espagueti-sencillo", type: "complemento", name: "Espagueti Sencillo", img: "imgs/espagueti.jpg", price: 59 },
    { id: "complemento-espagueti-carne", type: "complemento", name: "Espagueti Con Carne", img: "imgs/espagueticarne.jpg", price: 79 },
    { id: "complemento-aderezo", type: "complemento", name: "Aderezo", img: "imgs/aderezo.jpg", price: 15, options: { sauces: ["Ranch", "Jalapeño", "Chipotle", "BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"] } },
    { id: "complemento-3aderezos", type: "complemento", name: "3 Aderezos por $30", img: "imgs/aderezo.jpg", price: 30, options: { sauces: ["Ranch", "Jalapeño", "Chipotle", "BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"], multiple: true } },
    { id: "complemento-aros-cebolla", type: "complemento", name: "8 Aros de Cebolla", img: "imgs/arosdecebolla.jpg", price: 69 },
    { id: "complemento-dedos-queso", type: "complemento", name: "5 Dedos de Queso", img: "imgs/dedosdequeso.jpg", price: 89},
    { id: "complemento-jalapenos-poppers", type: "complemento", name: "5 Jalapeños Poppers", img: "imgs/jalapeñospoppers.jpg", price: 89 },
    { id: "complemento-refresco", type: "complemento", name: "Refresco Grande 1.75L", img: "imgs/cocacola.jpg", price: 59 }
];

let currentProduct = null;

// Variables para almacenar las cantidades seleccionadas
let selectedQuantities = {
    pizza: {},
    paquete: {},
    complemento: {},
    bonealitas: {}
};

// Variables globales
let globalProductName = '';
let globalProductType = '';

let selectedPaymentMethod = "";
let selectedDeliveryMethod = "";

let pizzasPersonalizadas = []; // Arreglo donde se almacenan las pizzas

let productosOrdenados = [];

function generateCards(items, containerId, type) {

    const container = document.getElementById(containerId);

    if (!selectedQuantities[type]) {
        console.error(`Tipo desconocido: ${type}`);
        return;
    }

    let cardsHtml = '';

    // Card especial para crear tu pizza
    if (type === 'pizza') {
        const createPizzaQuantity = customPizzaQuantityValue || 0;

        const createPizzaCard = `
        <div class="col-sm-6 col-md-4">
            <div class="card pizza-card" onclick="increaseCustomPizza()">
                <img src="${getImageUrl('imgs/bmo.png')}" class="card-img-top" alt="Crea tu pizza">
                <div class="card-body">
                    <h5 class="card-title text-center">Crea tu pizza</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="pizza-price">Personalizar</span>
                        <div class="quantity-control">
                            <button type="button" class="btn btn-sm btn-outline-secondary" onclick="event.stopPropagation(); decreaseCustomPizza()">-</button>
                            <input type="text" id="quantity-customPizza" class="quantity-input" value="${createPizzaQuantity}" readonly>
                            <button type="button" class="btn btn-sm btn-warning increase-btn" onclick="event.stopPropagation(); increaseCustomPizza()">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        `;
        cardsHtml += createPizzaCard;
    }

    // Generar las demás cards
    cardsHtml += items.map(item => {
        const selectedQuantity = selectedQuantities[type][item.id] || 0;
 
        // Condición para agregar la descripción
        const description = (item.type === "paquete") 
            ? `<p class='card-text'>
                Contiene:
                <ul>
                    ${item.products.map(product => {
                        if (product.type === "pizza" && product.options && product.options.ingredients) {
                            return `<li>Pizza (elige ingrediente)</li>`;
                        }
                        return `<li>${product.name}</li>`;
                    }).join('')}
                </ul>
            </p>` 
            : '';

        return `
            <div class="col-sm-6 col-md-4">
                <div class="card pizza-card">
                    <img src="${getImageUrl(item.img)}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title text-center">${item.name}</h5>
                        ${description} <!-- Se agrega la descripción con los productos si es un paquete -->
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="pizza-price">$${item.price.toFixed(2)}</span>
                            <div class="quantity-control">
                                <button type="button" class="btn btn-sm btn-outline-secondary" onclick="decreaseQuantity('${type}', '${item.id}')">-</button>
                                <input type="text" id="quantity-${item.id}" class="quantity-input" value="${selectedQuantity}" readonly>
                                <button type="button" class="btn btn-sm btn-outline-secondary" onclick="increaseQuantity('${type}', '${item.id}')">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = cardsHtml;

    // Restaurar cantidades en los inputs después de generar los cards
    //restoreInputQuantities(type);
}

    // Función para sincronizar las cantidades restauradas con los inputs
    /*function restoreInputQuantities(type) {
        Object.keys(selectedQuantities[type]).forEach(itemName => {
            const input = document.querySelector(`#quantity-${itemName}`);
            if (input) {
                input.value = selectedQuantities[type][itemName];
            }
        });
    }*/

// Función para actualizar el estado de las cantidades seleccionadas
function updateSelectedQuantities(type, name, quantity) {
    if (selectedQuantities[type]) {
        selectedQuantities[type][name] = quantity;
    } else {
        console.error(`Tipo desconocido: ${type}`);
    }
}

function updateQuantity(type, name, delta) {
    const quantityInput = document.getElementById(`quantity-${name}`);

    let quantity = parseInt(quantityInput.value);
    quantity = Math.max(0, quantity + delta);
    quantityInput.value = quantity;

    // Actualizar el estado de las cantidades seleccionadas
    updateSelectedQuantities(type, name, quantity);

    
    // Verificar si el producto tiene opciones y está en productosOrdenados
    if (delta < 0) { // Solo preocuparse si se está disminuyendo la cantidad
        // Encuentra el último índice del producto en productosOrdenados
        for (let i = productosOrdenados.length - 1; i >= 0; i--) {
          

            if (productosOrdenados[i].id === name) {
                productosOrdenados.splice(i, 1);
                break;
            }
        }
    }
}

function decreaseQuantity(type, name) {
    // Disminuir la cantidad del producto en el carrito
    updateQuantity(type, name, -1);
    

    // Verificar si el producto tiene opciones
    //const index = productosOrdenados.findIndex(product => product.type === type && product.id === name); //ERROR? SI DA ERROR ALGO PUEDE QUE SEA ESTA PARTE



   /* if (index !== -1) {
        // Si el producto tiene opciones, reducir su cantidad en el array productosOrdenados
        const product = productosOrdenados[index];
        if (product.quantity && product.quantity > 1) {
            product.quantity--; // Reducir la cantidad
        } else {
            // Eliminar la última instancia del producto con opciones
            productosOrdenados.splice(index, 1);
        }
    }*/

}

function createSelectElement(optionsArray, name, labelText) {
    // Crear contenedor para el grupo de formulario con clases mejoradas
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group mb-4 p-2';

    // Crear y configurar la etiqueta con estilos adicionales
    const label = document.createElement('label');
    label.textContent = labelText;
    label.className = 'form-label font-weight-bold mb-2 text-muted'; // Añade color y peso
    formGroup.appendChild(label);

    // Crear y configurar el elemento select con diseño moderno
    const select = document.createElement('select');
    select.name = name;
    select.className = 'form-select custom-select shadow-sm border-0 rounded-pill';
    select.required = true;

    // Crear una opción por defecto para guiar al usuario
    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.textContent = "Selecciona una opción";
    defaultOption.disabled = true; // Deshabilitar la opción por defecto
    defaultOption.selected = true; // Hacerla seleccionada por defecto
    select.appendChild(defaultOption);

    // Añadir cada opción del array
    optionsArray.forEach(optionValue => {
        const option = document.createElement('option');
        option.value = optionValue;
        option.textContent = optionValue;
        select.appendChild(option);
    });

    formGroup.appendChild(select);
    
    // Agregar evento para manejar el cambio de selección
    select.addEventListener('change', () => {
        if (select.value === "") {
            select.setCustomValidity('Debes seleccionar una opción válida.');
        } else {
            select.setCustomValidity('');
        }
    });

    return formGroup;
}

function createRadioElement(options, name, label) {
    const wrapper = document.createElement('div');
    wrapper.className = 'radio-group mb-3';

    const labelElement = document.createElement('label');
    labelElement.className = 'option-title';
    labelElement.textContent = label;
    wrapper.appendChild(labelElement);

    options.forEach(option => {
        const radioWrapper = document.createElement('div');
        radioWrapper.className = 'radio-option';

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = name;
        input.value = option.value;
        input.id = option.id;

        const span = document.createElement('span');
        span.textContent = option.text;

        // Seleccionar el radio button al hacer clic en el contenedor completo
        radioWrapper.addEventListener('click', () => {
            input.checked = true;
            document.querySelectorAll(`.radio-option`).forEach(opt => opt.classList.remove('selected'));
            radioWrapper.classList.add('selected');
        });

        // Agregar el radio button y el texto al contenedor
        radioWrapper.appendChild(input);
        radioWrapper.appendChild(span);
        wrapper.appendChild(radioWrapper);
    });

    return wrapper;
}

function createFormGroup(labelText, inputElement) {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    const label = document.createElement('label');
    label.textContent = labelText;
    formGroup.appendChild(label);
    formGroup.appendChild(inputElement);
    return formGroup;
}

function increaseQuantity(type, name) { //name es el id para que no refactorice todo 

    // Encuentra el producto en la lista de productos disponibles
    const product = [...pizzas, ...bonealitas, ...complementos, ...paquetes].find(p => p.id === name);
    if (!product) return;

    // Asignar el producto actual
    currentProduct = {
        type: product.type,
        name: product.name,
        id: product.id
    };

    // Asignar valores a las variables globales
    globalProductName = product.name;
    globalProductType = product.type;

    const optionsForm = document.getElementById('optionsForm');
    optionsForm.innerHTML = ''; // Limpiar opciones previas

    if (product.img) {
        const img = document.createElement('img');
        img.src = getImageUrl(product.img);
        img.alt = product.name;
        img.className = 'img-fluid mb-2';
        optionsForm.appendChild(img);
    }

    let hasOptions = false;

    switch (product.type) {

        case "pizza":

        if (product.name === "Pizza de Boneless con Aderezo") {

            // Crear select para elegir si los boneless son bañados o naturales
            const bonelessType = ["Bañados", "Naturales"];
            const typeSelect = createSelectElement(bonelessType, 'bonelessType', 'Tipo de Boneless:');
            optionsForm.appendChild(typeSelect);
            // Crear select para elegir la salsa
            const bonelessSauces = ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"];
            const sauceSelect = createSelectElement(bonelessSauces, 'bonelessSauce', 'Salsa para los Boneless:');
            optionsForm.appendChild(sauceSelect);

            
            hasOptions = true;
        }

        break;

        case "bonealitas":
            if (product.options.type) {
                const typeSelect = createSelectElement(product.options.type, 'type', 'Boneless Tipo:');
                optionsForm.appendChild(typeSelect);
                hasOptions = true;
            }
            if (product.options) {
                if (product.options.sauces) {
                    const sauceSelect = createSelectElement(product.options.sauces, 'sauces', 'Boneless Salsa:');
                    optionsForm.appendChild(sauceSelect);
                    hasOptions = true;
                }
            }
            break;

        case "complemento": // aquiiii poner los de los aderezos 
            if (product.options && product.options.sauces) {
                // Si es el producto de 3 aderezos, crear 3 selects
                if (product.options.multiple && product.name === "3 Aderezos por $30") {
                    const sauceSelect1 = createSelectElement(product.options.sauces, 'sauces1', 'Selecciona el primer aderezo:');
                    const sauceSelect2 = createSelectElement(product.options.sauces, 'sauces2', 'Selecciona el segundo aderezo:');
                    const sauceSelect3 = createSelectElement(product.options.sauces, 'sauces3', 'Selecciona el tercer aderezo:');
                    optionsForm.appendChild(sauceSelect1);
                    optionsForm.appendChild(sauceSelect2);
                    optionsForm.appendChild(sauceSelect3);
                    hasOptions = true;
                } else {
                    const sauceSelect = createSelectElement(product.options.sauces, 'sauces', 'Selecciona un aderezo:');
                    optionsForm.appendChild(sauceSelect);
                    hasOptions = true;
                }
            }
            break;

        case "paquete":

        if (product.name === "Paquete 4") {
            // Crear select para elegir el ingrediente de la pizza
           // const ingredientSelect = createSelectElement(ingredientes, 'pizzaIngredient', 'Ingrediente de la Pizza:');
            //optionsForm.appendChild(ingredientSelect);


             // Crear select para elegir si los boneless son bañados o naturales
            // const bonelessType = ["Bañados", "Naturales"];
            // const typeSelect = createSelectElement(bonelessType, 'bonelessType', 'Tipo de Boneless:');
            // optionsForm.appendChild(typeSelect);


            // Crear select para elegir la salsa
           // const bonelessSauces = ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"];
           // const sauceSelect = createSelectElement(bonelessSauces, 'bonelessSauce', 'Salsa para los Boneless:');
           // optionsForm.appendChild(sauceSelect);

           

           // hasOptions = true;
            //break;
        }   

        if (product.name === "Paquete 2") {

        }

            product.products.forEach(productOption => {
            
                // Si la pizza tiene opciones de ingredientes, mostrar select
                if (productOption.type === "pizza" && productOption.options && productOption.options.ingredients) {
                    if (productOption.options.multiple) {
                        // Para paquete 4 que tiene 2 pizzas, crear 2 selects
                        const ingredientSelect1 = createSelectElement(productOption.options.ingredients, 'pizzaIngredient1', 'Ingrediente de la Primera Pizza:');
                        const ingredientSelect2 = createSelectElement(productOption.options.ingredients, 'pizzaIngredient2', 'Ingrediente de la Segunda Pizza:');
                        optionsForm.appendChild(ingredientSelect1);
                        optionsForm.appendChild(ingredientSelect2);
                    } else {
                        // Para pizzas individuales, crear 1 select
                        const ingredientSelect = createSelectElement(productOption.options.ingredients, 'pizzaIngredient', 'Ingrediente de la Pizza:');
                        optionsForm.appendChild(ingredientSelect);
                    }
                    hasOptions = true;
                }

                if (productOption.name === "Boneless" || productOption.name === "Boneless con Papas") {
                    if (productOption.options.type) {
                        const typeSelect = createSelectElement(productOption.options.type, 'type', 'Boneless Tipo:');
                        optionsForm.appendChild(typeSelect);
                        hasOptions = true;
                    }
                    if (productOption.options) {
                        if (productOption.options.sauces) {
                            const sauceSelect = createSelectElement(productOption.options.sauces, 'sauces', 'Boneless Salsa:');
                            optionsForm.appendChild(sauceSelect);
                            hasOptions = true;
                        }
                    }
                };

                if (productOption.name === "Boneless o Alitas") {
                    const radioOptions = [
                        { value: 'Boneless', text: 'Boneless', id: 'bonelessOption' },
                        { value: 'Alitas', text: 'Alitas', id: 'alitasOption' }
                    ];
                    const radioDiv = createRadioElement(radioOptions, 'selection', 'Selecciona:');
                    optionsForm.appendChild(radioDiv);
                    hasOptions = true;
                    if (productOption.options) {
                        
                        if (productOption.options.type) {
                            const typeSelect = createSelectElement(productOption.options.type, 'type', 'Boneless Tipo:');
                            optionsForm.appendChild(typeSelect);
                            hasOptions = true;
                        }
                        if (productOption.options.sauces) {
                            const sauceSelect = createSelectElement(productOption.options.sauces, 'sauces', 'Boneless Salsa:');
                            optionsForm.appendChild(sauceSelect);
                            hasOptions = true;
                        }   
                    }
                }
                if (productOption.name === "Aderezo A Elegir" && productOption.options && productOption.options.sauces) {
                    const sauceSelect = createSelectElement(productOption.options.sauces, 'aderezoSauce', 'Aderezo:');
                    optionsForm.appendChild(sauceSelect);
                    hasOptions = true;
                }
                if (productOption.name === "Aderezo A Elegir" && productOption.sauces) {
                    const sauceSelect = createSelectElement(productOption.sauces, 'sauces', 'Boneless Salsa:');
                    const typeOptions = ['Bañados', 'Naturales'];
                    const typeSelect = createSelectElement(typeOptions, 'type', 'Boneless Tipo:');
                    optionsForm.appendChild(typeSelect); 
                    optionsForm.appendChild(sauceSelect);
                    hasOptions = true;
                }
                if (productOption.name === "Pizza De Boneless (Bañados o Naturales)") {

                    const sauceSelect = createSelectElement(productOption.options.sauces, 'sauces', 'Boneless Salsa:');
                    const typeOptions = ['Bañados', 'Naturales'];
                    const typeSelect = createSelectElement(typeOptions, 'type', 'Boneless Tipo:');
                    optionsForm.appendChild(typeSelect); 
                    optionsForm.appendChild(sauceSelect);
                   
                    hasOptions = true;
                }

            });


            break;
    }

    // Solo mostrar el modal si hay opciones adicionales
    if (hasOptions) {
        $('#optionsModal').modal('show');
    } else {
        updateQuantity(type, name, +1);
    }

}

// Función para guardar opciones seleccionadas
function saveOptions() {

    // Verificar que se haya seleccionado un producto actual
    if (!currentProduct) {
        console.error('No se seleccionó un producto.');
        return;
    }

    // Obtener el tipo y nombre del producto actual
    const { type, name , id} = currentProduct;

    // Encontrar el producto en la lista de productos disponibles
    const product = [...pizzas, ...bonealitas, ...complementos, ...paquetes].find(p => p.id === id);
    if (!product) {
        console.error('Product not found.');
        return;
    }

    

    // Crear un objeto para guardar las opciones seleccionadas
    const selectedOptions = {
        name: product.name,
        img: product.img,
        price: product.price,
        id: product.id,
        options: {}
    };

     // Validación y obtención de opciones
     let allOptionsSelected = true; // Variable para validar si todas las opciones están seleccionadas

     if (product.type === "pizza") {
        
            const bonelessSauceSelect = document.querySelector('select[name="bonelessSauce"]');
            const bonelessTypeSelect = document.querySelector('select[name="bonelessType"]');
        
            selectedOptions.products = [
                { type: "boneless", name: "Pizza de Boneless", options: {} },
            ];

           
            // Validar y guardar la salsa para los boneless
            if (bonelessSauceSelect && bonelessSauceSelect.value) {
                selectedOptions.products[0].options["Salsa"] = bonelessSauceSelect.value;
            } else {
                allOptionsSelected = false; // Marcar como incompleto si falta la salsa
            }


        
            // Validar y guardar el tipo de boneless
            if (bonelessTypeSelect && bonelessTypeSelect.value) {
                selectedOptions.products[0].options["Tipo"] = bonelessTypeSelect.value;
            } else {
                allOptionsSelected = false; // Marcar como incompleto si falta el tipo de boneless
            }
        
        
    }
        
    
     if (product.type === "bonealitas") {
        const sauceSelect = document.querySelector('select[name="sauces"]');
        const typeSelect = document.querySelector('select[name="type"]');
        
        if (sauceSelect && sauceSelect.value) {
            selectedOptions.options.sauce = sauceSelect.value;
        } else {
            allOptionsSelected = false; // Marcar como incompleto si falta la opción de salsa
        }
        
        if (typeSelect && typeSelect.value) {
            selectedOptions.options.type = typeSelect.value;
        } else {
            allOptionsSelected = false; // Marcar como incompleto si falta la opción de tipo
        }
    }

    if (product.type === "complemento") {
        // Si es el producto de 3 aderezos, guardar los 3 aderezos
        if (product.name === "3 Aderezos por $30") {
            const sauceSelect1 = document.querySelector('select[name="sauces1"]');
            const sauceSelect2 = document.querySelector('select[name="sauces2"]');
            const sauceSelect3 = document.querySelector('select[name="sauces3"]');
            
            if (sauceSelect1 && sauceSelect1.value && sauceSelect2 && sauceSelect2.value && sauceSelect3 && sauceSelect3.value) {
                selectedOptions.options.sauce1 = sauceSelect1.value;
                selectedOptions.options.sauce2 = sauceSelect2.value;
                selectedOptions.options.sauce3 = sauceSelect3.value;
            } else {
                allOptionsSelected = false; // Marcar como incompleto si falta algún aderezo
            }
        } else {
            const sauceSelect = document.querySelector('select[name="sauces"]');
            
            if (sauceSelect && sauceSelect.value) {
                selectedOptions.options.sauce = sauceSelect.value;
            } else {
                allOptionsSelected = false; // Marcar como incompleto si falta la opción de salsa
            }
        }
    }

    if (product.type === "paquete") {
        const bonelessOrWings = document.querySelector('input[name="selection"]:checked');
        const sauceSelect = document.querySelector('select[name="sauces"]');
        const typeSelect = document.querySelector('select[name="type"]');
        const pizzaIngredientSelect = document.querySelector('select[name="pizzaIngredient"]');

      //  console.log(product);
        // Verificación de Boneless o Alitas
        if(product.name == "Paquete 1"){
         
            selectedOptions.options["Paquete1"] = product.name;

            // Validar y guardar el ingrediente de la pizza
            if (pizzaIngredientSelect && pizzaIngredientSelect.value) {
                selectedOptions.options["Ingrediente Pizza"] = pizzaIngredientSelect.value;
            } else {
                allOptionsSelected = false; // Marcar como incompleto si falta el ingrediente de la pizza
            }

            // Verificación de salsa
            if (sauceSelect && sauceSelect.value) {
                selectedOptions.options["Aderezo A Elegir"] = sauceSelect.value;
            } else {
                allOptionsSelected = false; // Marcar como incompleto si falta la opción de aderezo
            }

            // Verificación de tipo
            if (typeSelect && typeSelect.value) {
                selectedOptions.options["Tipo"] = typeSelect.value;
            } else {
                allOptionsSelected = false; // Marcar como incompleto si falta la opción de tipo
            }

        }

        // Verificación de Paquete 2
        if(product.name == "Paquete 2"){
            // Validar y guardar el ingrediente de la pizza
            if (pizzaIngredientSelect && pizzaIngredientSelect.value) {
                selectedOptions.options["Ingrediente Pizza"] = pizzaIngredientSelect.value;
            } else {
                allOptionsSelected = false; // Marcar como incompleto si falta el ingrediente de la pizza
            }
         }

       if (product.name === "Paquete 3"){
        selectedOptions.options["Paquete3"] = product.name;
        
        // Verificación de salsa para Boneless
        if (sauceSelect && sauceSelect.value) {
            selectedOptions.options["Aderezo A Elegir"] = sauceSelect.value;
        } else {
            allOptionsSelected = false;
        }

        // Verificación de tipo para Boneless
        if (typeSelect && typeSelect.value) {
            selectedOptions.options["Tipo"] = typeSelect.value;
        } else {
            allOptionsSelected = false;
        }
        
        // Obtener el aderezo seleccionado
        const aderezoSauceSelect = document.querySelector('select[name="aderezoSauce"]');
        if (aderezoSauceSelect && aderezoSauceSelect.value) {
            selectedOptions.options["Aderezo"] = aderezoSauceSelect.value;
        } else {
            allOptionsSelected = false; // Marcar como incompleto si falta el aderezo
        }
       }
       
        if (product.name === "Paquete 4") {
            selectedOptions.options["Paquete4"] = product.name;

            // Obtener los selectores de ingredientes para las 2 pizzas
            const pizzaIngredientSelect1 = document.querySelector('select[name="pizzaIngredient1"]');
            const pizzaIngredientSelect2 = document.querySelector('select[name="pizzaIngredient2"]');
        
            // Validar y guardar los ingredientes de las pizzas
            if (pizzaIngredientSelect1 && pizzaIngredientSelect1.value && pizzaIngredientSelect2 && pizzaIngredientSelect2.value) {
                selectedOptions.options["Ingrediente Pizza 1"] = pizzaIngredientSelect1.value;
                selectedOptions.options["Ingrediente Pizza 2"] = pizzaIngredientSelect2.value;
            } else {
                allOptionsSelected = false; // Marcar como incompleto si falta algún ingrediente
            }
        }
        
        if (product.name === "Paquete 5") {
            selectedOptions.options["Paquete5"] = product.name;
            
            // Validar y guardar el ingrediente de la pizza
            if (pizzaIngredientSelect && pizzaIngredientSelect.value) {
                selectedOptions.options["Ingrediente Pizza"] = pizzaIngredientSelect.value;
            } else {
                allOptionsSelected = false;
            }
            
            // Verificación de salsa para Boneless
            if (sauceSelect && sauceSelect.value) {
                selectedOptions.options["Salsa Boneless"] = sauceSelect.value;
            } else {
                allOptionsSelected = false;
            }

            // Verificación de tipo para Boneless
            if (typeSelect && typeSelect.value) {
                selectedOptions.options["Tipo Boneless"] = typeSelect.value;
            } else {
                allOptionsSelected = false;
            }
        } 
        
        // Lógica para otros paquetes que no tienen manejo específico
        if (product.name !== "Paquete 1" && product.name !== "Paquete 2" && product.name !== "Paquete 3" && product.name !== "Paquete 4" && product.name !== "Paquete 5") {
             // Verificación de salsa
            if (sauceSelect && sauceSelect.value) {
                selectedOptions.options["Aderezo A Elegir"] = sauceSelect.value;
            } else {
                allOptionsSelected = false; // Marcar como incompleto si falta la opción de aderezo
            }

            // Verificación de tipo
            if (typeSelect && typeSelect.value) {
                selectedOptions.options["Tipo"] = typeSelect.value;
            } else {
                allOptionsSelected = false; // Marcar como incompleto si falta la opción de tipo
            }

            selectedOptions.options["Refresco Grande 1.75L"] = "Refresco Grande 1.75L"; // Asumimos siempre incluido
        }
    }

    // Verificar si todas las opciones requeridas están seleccionadas
    if (!allOptionsSelected) {
        alert("Por favor selecciona todas las opciones antes de agregar el producto.");
        return; // Detener si falta alguna opción
    }


    // Guardar las opciones en productosOrdenados
    productosOrdenados.push(selectedOptions);
    
   // console.log(productosOrdenados)
    updateQuantity(globalProductType, id, +1);

    // Cerrar el modal
    $('#optionsModal').modal('hide');

}

function validateForm() {
    const paymentMethod = document.getElementById("paymentMethod").value;
    const deliveryAddress = document.getElementById("deliveryAddress").value;

    // Obtener botón de confirmación
    const confirmButton = document.getElementById("confirmButton");

    // Habilitar botón solo si ambos campos están completos
    if (paymentMethod && deliveryAddress) {
        confirmButton.disabled = false;
    } else {
        confirmButton.disabled = true;
    }
}

// Función para aumentar la cantidad de pizzas personalizadas
function increaseCustomPizza() {
    openCreatePizzaModal(); // Abre el modal
}

function decreaseCustomPizza() {
    if (customPizzaQuantityValue > 0) {
        const confirmDelete = confirm("¿Estás seguro de que quieres borrar la última pizza personalizada?");
        if (confirmDelete) {
            pizzasPersonalizadas.pop(); // Elimina la última pizza agregada
            customPizzaQuantityValue--; // Reduce la cantidad
            const customPizzaQuantity = document.getElementById('quantity-customPizza');
            if (customPizzaQuantity) {
                customPizzaQuantity.value = customPizzaQuantityValue; // Actualiza el valor en la vista
            }
            // Regenerar las cards para actualizar la vista
            generateCards(pizzas, 'pizza-content', 'pizza');
            console.log("Última pizza personalizada eliminada.");
        }
    } else {
        alert("No tienes pizzas personalizadas para borrar.");
    }
}

// Función para eliminar una pizza personalizada específica desde el modal de confirmación
function eliminarPizzaPersonalizada(index) {
    if (index >= 0 && index < pizzasPersonalizadas.length) {
        const confirmDelete = confirm("¿Estás seguro de que quieres eliminar esta pizza personalizada?");
        if (confirmDelete) {
            pizzasPersonalizadas.splice(index, 1); // Elimina la pizza en el índice especificado
            customPizzaQuantityValue--; // Reduce la cantidad
            
            // Actualizar la cantidad en la card de "Crea tu pizza"
            const customPizzaQuantity = document.getElementById('quantity-customPizza');
            if (customPizzaQuantity) {
                customPizzaQuantity.value = customPizzaQuantityValue;
            }
            
            // Regenerar las cards para actualizar la vista
            generateCards(pizzas, 'pizza-content', 'pizza');
            
            // Actualizar el resumen del pedido
            reviewOrder();
            
            console.log(`Pizza personalizada en índice ${index} eliminada.`);
        }
    }
}

function openCreatePizzaModal() {
    const ingredientesContainer = document.getElementById('ingredientesContainer');
    
    // Limpiar contenedor
    ingredientesContainer.innerHTML = '';

    // Generar dinámicamente los ingredientes con opciones de ubicación siempre visibles
    ingredientes.forEach(ingrediente => {
        const div = document.createElement('div');
        div.className = "ingrediente-item";
        div.innerHTML = `
            <div class="ingrediente-row">
                <span class="ingrediente-name">${ingrediente}</span>
                <div class="ubicacion-icons">
                    <button type="button" class="ubicacion-icon-btn" data-ubicacion="izquierda" data-ingrediente="${ingrediente}" title="Mitad Izquierda">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" fill="none"/>
                            <path d="M12 3 A9 9 0 0 0 12 21 L12 3 Z" fill="currentColor" opacity="0.3" class="half-circle-left"/>
                        </svg>
                    </button>
                    <button type="button" class="ubicacion-icon-btn" data-ubicacion="toda" data-ingrediente="${ingrediente}" title="Toda la pizza">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.3" class="full-circle"/>
                        </svg>
                    </button>
                    <button type="button" class="ubicacion-icon-btn" data-ubicacion="derecha" data-ingrediente="${ingrediente}" title="Mitad Derecha">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" fill="none"/>
                            <path d="M12 3 A9 9 0 0 1 12 21 L12 3 Z" fill="currentColor" opacity="0.3" class="half-circle-right"/>
                        </svg>
                    </button>
                </div>
            </div>
            <input type="hidden" class="ubicacion-value" id="ubicacion-${ingrediente}" value="">
        `;
        ingredientesContainer.appendChild(div);
    });

    // Asignar eventos a los botones de ubicación con funcionalidad de deselección
    document.querySelectorAll('#ingredientesContainer .ubicacion-icon-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Evitar que se propague al div del ingrediente
            const ingrediente = this.getAttribute('data-ingrediente');
            const ubicacion = this.getAttribute('data-ubicacion');
            const ubicacionInput = document.getElementById(`ubicacion-${ingrediente}`);
            const currentUbicacion = ubicacionInput.value;
            
            // Si se hace clic en el mismo botón activo, deseleccionar
            if (currentUbicacion === ubicacion && this.classList.contains('active')) {
                ubicacionInput.value = '';
                this.classList.remove('active');
            } else {
                // Seleccionar la nueva ubicación
                ubicacionInput.value = ubicacion;
                document.querySelectorAll(`[data-ingrediente="${ingrediente}"].ubicacion-icon-btn`).forEach(b => {
                    b.classList.remove('active');
                });
                this.classList.add('active');
            }
            
            actualizarPrecioDinamico();
        });
    });

    // Permitir deseleccionar al hacer clic en el div del ingrediente (pero no en los botones)
    document.querySelectorAll('#ingredientesContainer .ingrediente-item').forEach(item => {
        item.addEventListener('click', function(e) {
            // Solo si el clic no fue en un botón de ubicación
            if (!e.target.closest('.ubicacion-icon-btn')) {
                const ingredienteName = item.querySelector('.ingrediente-name').textContent;
                // Encontrar el input hidden correspondiente
                const ubicacionInput = item.querySelector('.ubicacion-value');
                if (ubicacionInput && ubicacionInput.value) {
                    ubicacionInput.value = '';
                    // Desactivar todos los botones de este ingrediente
                    item.querySelectorAll('.ubicacion-icon-btn').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    actualizarPrecioDinamico();
                }
            }
        });
    });

   

    // Eventos para opciones adicionales
    document.getElementById('orillaRellena').addEventListener('change', actualizarPrecioDinamico);
    document.getElementById('quesoExtra').addEventListener('change', actualizarPrecioDinamico);
    document.getElementById('pizzaSize').addEventListener('change', actualizarPrecioDinamico);
    
    // Mostrar el modal
    $('#createPizzaModal').modal('show');
}



// Función para actualizar la vista previa
function updatePreview() {
    const selectedIngredients = [];
    const ingredientes = document.querySelectorAll('#ingredientesContainer .ingrediente-item');
    let tieneSoloPepperoniEnMitad = false;
    
    // Obtener ingredientes seleccionados con su ubicación
    ingredientes.forEach(item => {
        const ingredienteName = item.querySelector('.ingrediente-name').textContent;
        const ubicacionInput = item.querySelector('.ubicacion-value');
        const ubicacion = ubicacionInput ? ubicacionInput.value : '';
        
        if (ubicacion) {
            let ubicacionTexto = '';
            // Mostrar ubicación si es en mitad izquierda o derecha
            if (ubicacion === 'izquierda') {
                ubicacionTexto = ' (Mitad Izquierda)';
            } else if (ubicacion === 'derecha') {
                ubicacionTexto = ' (Mitad Derecha)';
            }
            // Si es "toda", no agregar texto de ubicación
            selectedIngredients.push(`${ingredienteName}${ubicacionTexto}`);
        }
    });
    
    // Verificar si es solo Pepperoni en mitad izquierda o derecha
    const ingredientesConUbicacion = {};
    ingredientes.forEach(item => {
        const ingredienteName = item.querySelector('.ingrediente-name').textContent;
        const ubicacionInput = item.querySelector('.ubicacion-value');
        const ubicacion = ubicacionInput ? ubicacionInput.value : '';
        if (ubicacion) {
            ingredientesConUbicacion[ingredienteName] = ubicacion;
        }
    });
    
    const ingredientesNombres = Object.keys(ingredientesConUbicacion);
    if (ingredientesNombres.length === 1 && 
        ingredientesNombres[0] === 'Pepperoni' &&
        (ingredientesConUbicacion['Pepperoni'] === 'izquierda' || ingredientesConUbicacion['Pepperoni'] === 'derecha')) {
        tieneSoloPepperoniEnMitad = true;
    }
    
    const pizzaSize = document.getElementById('pizzaSize').value;
    const tamañoTexto = pizzaSize === 'chica' ? 'Pizza Chica 8 pulgadas' : 'Pizza Grande 14 pulgadas';
    const orillaRellena = document.getElementById('orillaRellena').checked ? 'Orilla Rellena' : null;
    const quesoExtra = document.getElementById('quesoExtra').checked ? 'Doble Queso' : null;

    let previewText = [tamañoTexto, ...selectedIngredients, orillaRellena, quesoExtra]
        .filter(Boolean)
        .join(', ');
    
    // Agregar mensaje explicativo para Pepperoni en mitad (solo para pizza grande)
    if (pizzaSize === 'grande' && tieneSoloPepperoniEnMitad) {
        previewText += ' (Incluye más queso en la otra mitad)';
    }

    document.getElementById('previewPizza').value = previewText || 'No has seleccionado nada.';
}

function calcularPrecioPizza(ingredientesSeleccionados, orillaRellena = false, ingredientesConUbicacion = {}, pizzaSize = 'grande', quesoExtra = false) {
    // Calcular precio normal
    let precioBase = 0;
    let esPromo = false; // Para saber si aplica promo que se cancela con orilla rellena o doble queso

    // Si es pizza chica, usar precios diferentes
    if (pizzaSize === 'chica') {
        if (ingredientesSeleccionados.length === 0) {
            precioBase = 0;
        } else if (ingredientesSeleccionados.length === 1) {
            precioBase = 65; // Pizza chica 1 ingrediente = $65 (sin promos)
        } else if (ingredientesSeleccionados.length === 2) {
            precioBase = 89; // Pizza chica 2 ingredientes = $89
        } else if (ingredientesSeleccionados.length === 3) {
            precioBase = 89; // Pizza chica 3 ingredientes = $89
        } else if (ingredientesSeleccionados.length >= 4) {
            const ingredientesExtra = ingredientesSeleccionados.length - 3;
            precioBase = 89 + (ingredientesExtra * 5); // $89 + $5 por cada ingrediente extra
        }

        // Orilla rellena en pizza chica = $30
        if (orillaRellena) {
            precioBase += 30;
        }

        return precioBase;
    }

    // Lógica para pizza grande (por defecto)
    if (ingredientesSeleccionados.length === 0) {
        precioBase = 0;
    } else if (ingredientesSeleccionados.length === 1) {
        // Si tiene doble queso, se cancela la promo y se cobra como 1 ingrediente
        if (quesoExtra) {
            precioBase = 129; // Precio base de 1 ingrediente (se cancela promo)
        } else {
            // Sin doble queso, aplican las promos
            if (ingredientesSeleccionados.includes('Pepperoni')) {
                const ubicacionPepperoni = ingredientesConUbicacion['Pepperoni'];
                if (ubicacionPepperoni === 'izquierda' || ubicacionPepperoni === 'derecha') {
                    precioBase = 119; // 1/2 Peperoni 1/2 Queso
                    esPromo = true;
                } else {
                    // Solo Pepperoni en toda la pizza = $99
                    precioBase = 99;
                    esPromo = true;
                }
            } else if (ingredientesSeleccionados.includes('Queso')) {
                // Solo Queso = $99
                precioBase = 99;
                esPromo = true;
            } else {
                // Cualquier otro ingrediente = $129
                precioBase = 129;
            }
        }
    } else if (ingredientesSeleccionados.length === 2) {
        precioBase = 159;
    } else if (ingredientesSeleccionados.length === 3) {
        precioBase = 169;
    } else if (ingredientesSeleccionados.length >= 4) {
        const ingredientesExtra = ingredientesSeleccionados.length - 3;
        precioBase = 169 + (ingredientesExtra * 10);
    }

    // Si tiene orilla rellena
    if (orillaRellena) {
        // Si era promo de 1 ingrediente, se cancela la promo y se cobra como pizza normal de 1 ingrediente
        if (esPromo && ingredientesSeleccionados.length === 1) {
            precioBase = 129; // Precio base de 1 ingrediente
            precioBase += 40; // Agregar $40 de orilla
        } 
        // Si son 2 o 3 ingredientes con orilla, ambos son $199
        else if (ingredientesSeleccionados.length === 2 || ingredientesSeleccionados.length === 3) {
            precioBase = 199; // 2 o 3 ingredientes con orilla = $199
        }
        // Si son 4+ ingredientes con orilla, es $199 + $10 por cada ingrediente extra
        else if (ingredientesSeleccionados.length >= 4) {
            const ingredientesExtra = ingredientesSeleccionados.length - 3;
            precioBase = 199 + (ingredientesExtra * 10);
        }
        // Para 1 ingrediente que no es promo, solo agregar $40
        else if (ingredientesSeleccionados.length === 1) {
            precioBase += 40;
        }
    }

    return precioBase;
}

function guardarPizza() {
    const selectedIngredients = [];
    const ingredientesConUbicacion = {};
    const ingredientesItems = document.querySelectorAll('#ingredientesContainer .ingrediente-item');

    // Obtener ingredientes seleccionados con su ubicación
    ingredientesItems.forEach(item => {
        const ingrediente = item.querySelector('.ingrediente-name').textContent;
        const ubicacionInput = item.querySelector('.ubicacion-value');
        const ubicacion = ubicacionInput ? ubicacionInput.value : '';
        
        if (ubicacion) {
            selectedIngredients.push(ingrediente);
            ingredientesConUbicacion[ingrediente] = ubicacion;
        }
    });

    // Opciones adicionales
    const orillaRellena = document.getElementById('orillaRellena').checked;
    const quesoExtra = document.getElementById('quesoExtra').checked;
    const pizzaSize = document.getElementById('pizzaSize').value; // 'grande' o 'chica'

    // Validar que al menos un ingrediente o una opción adicional esté seleccionada
    if (selectedIngredients.length === 0 && !orillaRellena && !quesoExtra) {
        alert("Debes seleccionar al menos un ingrediente o una opción adicional para guardar tu pizza.");
        return;
    }

    if (selectedIngredients.length === 0) {
        alert("Debes seleccionar al menos un ingrediente.");
        return;
    }

    // Calcular el precio usando la misma lógica que actualizarPrecioDinamico
    // Incluir ingredientesConUbicacion para la lógica especial de Pepperoni
    let precioBase = calcularPrecioPizza(selectedIngredients, orillaRellena, ingredientesConUbicacion, pizzaSize, quesoExtra);
    
    // Agregar doble queso si está seleccionado
    if (quesoExtra) {
        if (pizzaSize === 'chica') {
            // Doble queso en pizza chica = $30
            precioBase += 30;
        } else {
            // Doble queso en pizza grande = $50
            precioBase += 50;
        }
    }

    // Determinar el nombre de la pizza
    let nombrePizza = pizzaSize === 'chica' ? 'Pizza Personalizada Chica' : 'Pizza Personalizada';
    
    // Si es solo Pepperoni en mitad izquierda o derecha (solo para pizza grande), el nombre es "1/2 Peperoni 1/2 Queso"
    if (pizzaSize === 'grande' && selectedIngredients.length === 1 && 
        selectedIngredients[0] === 'Pepperoni' &&
        (ingredientesConUbicacion['Pepperoni'] === 'izquierda' || ingredientesConUbicacion['Pepperoni'] === 'derecha')) {
        nombrePizza = '1/2 Peperoni 1/2 Queso';
    }

    // Crear objeto de pizza personalizada
    const pizzaPersonalizada = {
        name: nombrePizza,
        price: precioBase,
        options: {
            ingredientes: selectedIngredients,
            ingredientesConUbicacion: ingredientesConUbicacion,
            orillaRellena,
            quesoExtra,
            pizzaSize
        },
    };

    // Agregar pizza al arreglo
    pizzasPersonalizadas.push(pizzaPersonalizada);

    // Incrementar cantidad y actualizar el valor en la vista
    customPizzaQuantityValue++;
    const customPizzaQuantity = document.getElementById('quantity-customPizza');
    customPizzaQuantity.value = customPizzaQuantityValue;

    console.log(`Pizza guardada: $${precioBase} MXN`);
    $('#createPizzaModal').modal('hide');
}

// Función para actualizar el precio en tiempo real
function actualizarPrecioDinamico() {
    // Obtener ingredientes seleccionados (los que tienen una ubicación asignada)
    const selectedIngredients = [];
    const ingredientesConUbicacion = {};
    const ingredientes = document.querySelectorAll('#ingredientesContainer .ingrediente-item');
    
    ingredientes.forEach(item => {
        const ingredienteName = item.querySelector('.ingrediente-name').textContent;
        const ubicacionInput = item.querySelector('.ubicacion-value');
        const ubicacion = ubicacionInput ? ubicacionInput.value : '';
        
        if (ubicacion) {
            selectedIngredients.push(ingredienteName);
            ingredientesConUbicacion[ingredienteName] = ubicacion;
        }
    });

    // Opciones adicionales
    const orillaRellena = document.getElementById('orillaRellena').checked;
    const quesoExtra = document.getElementById('quesoExtra').checked;
    const pizzaSize = document.getElementById('pizzaSize').value; // 'grande' o 'chica'

    // Calcular precio base (incluye lógica especial para Pepperoni según ubicación)
    let precioBase = calcularPrecioPizza(selectedIngredients, orillaRellena, ingredientesConUbicacion, pizzaSize, quesoExtra);

    // Agregar doble queso si está seleccionado
    if (quesoExtra) {
        if (pizzaSize === 'chica') {
            // Doble queso en pizza chica = $30
            precioBase += 30;
        } else {
            // Doble queso en pizza grande = $50
            precioBase += 50;
        }
    }

    // Mostrar el precio en el modal
    document.getElementById('precioFinal').textContent = `$${precioBase.toFixed(2)}`;
    updatePreview();
}

// Función para inicializar eventos
function inicializarEventosModal() {
    const orillaRellena = document.getElementById('orillaRellena');
    const quesoExtra = document.getElementById('quesoExtra');

    // Eventos para extras
    orillaRellena.addEventListener('change', actualizarPrecioDinamico);
    quesoExtra.addEventListener('change', actualizarPrecioDinamico);
}

// Reiniciar el modal al abrir
function reiniciarModalPizza() {
    document.querySelectorAll('.ubicacion-value').forEach(input => {
        input.value = '';
    });
    document.querySelectorAll('.ubicacion-icon-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById('pizzaSize').value = 'grande';
    document.getElementById('orillaRellena').checked = false;
    document.getElementById('quesoExtra').checked = false;
    document.getElementById('previewPizza').value = 'Aquí se mostrarán tus selecciones...';
    document.getElementById('precioFinal').textContent = '$0.00';
}

$('#pizzeriaTabs a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');

    // Cambiar las cartas
    switch ($(this).attr('id')) {
        case 'pizzas-tab':
            generateCards(pizzas, 'pizza-content', 'pizza');
            break;
        case 'paquetes-tab':
            generateCards(paquetes, 'paquete-content', 'paquete');
            break;
        case 'bonealitas-tab':
            generateCards(bonealitas, 'bonealitas-content', 'bonealitas');
            break;
        case 'complementos-tab':
            generateCards(complementos, 'complemento-content', 'complemento');
            break;
    }

    // Espera un poco antes de desplazar hacia el inicio (ajusta el tiempo según sea necesario)
    setTimeout(function() {
        $('html, body').animate({ scrollTop: 0 }, 'fast'); // Desplazamiento suave hacia el inicio
    }, 100); 
});




document.getElementById('ingredientesContainer').addEventListener('change', updatePreview);
document.getElementById('orillaRellena').addEventListener('change', updatePreview);
document.getElementById('quesoExtra').addEventListener('change', updatePreview);

// Inicializar eventos al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    inicializarEventosModal();
    // Reiniciar modal al abrir
    $('#createPizzaModal').on('show.bs.modal', reiniciarModalPizza);
});

function reviewOrder() {
    const selectedPizzas = [];
    const quantityInputs = document.querySelectorAll('.quantity-input');
    
    quantityInputs.forEach(input => {
        
        const quantity = parseInt(input.value);
        if (quantity > 0) {

            const cardBody = input.closest('.card-body');
            // Verificar si existen 'card-title' y 'pizza-price' antes de usarlos
            const titleElement = cardBody.querySelector('.card-title');
            const priceElement = cardBody.querySelector('.pizza-price');


            if (titleElement && priceElement) {
                const pizza = titleElement.textContent;
                const price = parseFloat(priceElement.textContent.replace('$', ''));
                  
                console.log(pizza , "" ,quantity )
                if (pizza == "Crea tu pizza"){
                    
                } else if (pizza == "Pizza de Boneless con Aderezo") {

                } 
                else {
                    selectedPizzas.push({ name: pizza, quantity, price });

                }

            }
        }

    });


    const orderSummary = document.getElementById('orderSummary');
    const totalPriceElement = document.getElementById('totalPrice');
    const modalBody = document.querySelector('#orderModal .modal-body');

    orderSummary.innerHTML = '';
    totalPriceElement.textContent = '';

    let totalPrice = 0;

     // Eliminar mensaje previo de selección vacía
     const noSelectionMessage = modalBody.querySelector('.no-selection-message');
     if (noSelectionMessage) {
         noSelectionMessage.remove();
     }
 
     if (!Array.isArray(productosOrdenados)) {
         console.error('productosOrdenados no está definido o no es un array.');
         return;
     }

    // Filtrar productos en selectedPizzas para excluir aquellos que tienen opciones en productosOrdenados
    const filteredPizzas = selectedPizzas.filter(pizza => {
        return !productosOrdenados.some(product => product.name === pizza.name);
    });

    //console.log("productosOrdenados")
    //console.log(productosOrdenados)

    //console.log("filteredPizzas")
    //console.log(filteredPizzas)


    // Mostrar pizzas seleccionadas sin opciones
    filteredPizzas.forEach(pizza => {

       

        const pizzaTotalPrice = pizza.quantity * pizza.price;
        totalPrice += pizzaTotalPrice;
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        
        if (pizza.name == "Paquete 2"){
        li.textContent = `${pizza.quantity > 1 ? `${pizza.quantity} ` : '1 '}${pizza.name}: Pizza de Peperoni, un Espagueti Sencillo y un Refresco Grande 1.75L`;

        } else if (pizza.name == "Paquete 4") {
            li.textContent = `${pizza.quantity > 1 ? `${pizza.quantity} ` : '1 '}${pizza.name}: 2 Pizzas de Peperoni con Extra Queso y un Refresco Grande 1.75L`;
        }

        else{
            li.textContent = `${pizza.quantity} ${pizza.name}`;
        }

        const span = document.createElement('span');
        span.className = 'badge badge-primary badge-pill';
        span.textContent = `$${pizzaTotalPrice.toFixed(2)}`;
        li.appendChild(span);
        orderSummary.appendChild(li);
    });

    

    // Mostrar productos ordenados con opciones
    productosOrdenados.forEach(product => {
        const { name, price, options, quantity } = product;


    const optionDetails = Object.entries(options || {}) // Manejar caso de opciones no definidas
            .map(([key, value]) => `${key}: ${value}`)
            .join(', ');

        // Usar 1 como cantidad predeterminada si no está definida
        const productQuantity = quantity !== undefined ? quantity : 1;

        // Obtener opciones del producto
        const optionEntries = Object.entries(options || {});
        const optionObject = Object.fromEntries(optionEntries);



    

        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        if (optionObject.sauce && optionObject.type) {
            // Crear un elemento para el producto
            li.textContent = `${productQuantity > 1 ? `${productQuantity} ` : ''}${name} ${optionObject.type} Con salsa ${optionObject.sauce}`;
        }

        if (optionObject.sauce && Object.keys(optionObject).length === 1) {
            li.textContent = `${productQuantity > 1 ? `${productQuantity} ` : ''}${name} de salsa ${optionObject.sauce}`;
            // Este es para el aderezo
        }

        // Para 3 Aderezos por $30
        if (product.name === "3 Aderezos por $30" && optionObject.sauce1 && optionObject.sauce2 && optionObject.sauce3) {
            li.textContent = `${productQuantity > 1 ? `${productQuantity} ` : ''}${name}: ${optionObject.sauce1}, ${optionObject.sauce2}, ${optionObject.sauce3}`;
        }

        // Para los paquetes
        if (product.name == "Paquete 1") { // Paquete 1
            const ingredientePizza = optionObject['Ingrediente Pizza'] || 'Peperoni';
            li.textContent = `${productQuantity > 1 ? `${productQuantity} ` : ''}${name}: Pizza de ${ingredientePizza}, Boneless ${optionObject['Tipo']} con Salsa ${optionObject['Aderezo A Elegir']} y un Refresco Grande 1.75L`;
       
        } else if (product.name == "Paquete 2") { // Paquete 2
            const ingredientePizza = optionObject['Ingrediente Pizza'] || 'Peperoni';
            li.textContent = `${productQuantity > 1 ? `${productQuantity} ` : ''}${name}: Pizza de ${ingredientePizza}, un Espagueti Sencillo y un Refresco Grande 1.75L`;

        } else if (product.name == "Paquete 3") {
            const aderezo = optionObject['Aderezo'] || 'Ranch';
            li.textContent = `${productQuantity > 1 ? `${productQuantity} ` : ''}${name}: Pizza de Boneless ${optionObject['Tipo']} con Salsa ${optionObject['Aderezo A Elegir']} un Aderezo ${aderezo} y un Refresco Grande 1.75L`;
        }  

        if (product.name == "Paquete 4") {
            const ingredientePizza1 = optionObject['Ingrediente Pizza 1'] || 'Peperoni';
            const ingredientePizza2 = optionObject['Ingrediente Pizza 2'] || 'Peperoni';
            li.textContent = `${productQuantity > 1 ? `${productQuantity} ` : ''}${name}: 2 Pizzas de ${ingredientePizza1} y ${ingredientePizza2} con Extra Queso y un Refresco Grande 1.75L`;
        }
        
        if (product.name == "Paquete 5") {
            const ingredientePizza = optionObject['Ingrediente Pizza'] || 'Peperoni';
            li.textContent = `${productQuantity > 1 ? `${productQuantity} ` : ''}${name}: Pizza de ${ingredientePizza}, Boneless ${optionObject['Tipo Boneless']} con Salsa ${optionObject['Salsa Boneless']} con Papas, 1/2 Litro Espagueti y un Refresco Grande 1.75L`;
        } else if (product.name == "Pizza de Boneless con Aderezo")
        {
      
            // Acceder al primer elemento del array `products`
            let firstProduct = product.products[0];
        
            // Acceder a las opciones de ese producto
            let salsa = firstProduct.options.Salsa;
            let tipo = firstProduct.options.Tipo;
                
            li.textContent = `${productQuantity > 1 ? `${productQuantity} ` : ''} Pizza de Boneless ${tipo} con Salsa ${salsa} y un Aderezo Ranch`;

        }
        

        const span = document.createElement('span');
        span.className = 'badge badge-primary badge-pill';
        span.textContent = `$${price.toFixed(2)}`;
        li.appendChild(span);
        orderSummary.appendChild(li);

        // Sumar el precio total
        totalPrice += price;
    });

    // Mostrar pizzas personalizadas
    pizzasPersonalizadas.forEach((pizza, index) => {
        const { name, price, options } = pizza;
        const pizzaSize = options.pizzaSize || 'grande';
        // No agregar tamaño si ya está en el nombre
        const tamañoTexto = (pizzaSize === 'chica' && !name.includes('Chica')) ? ' (Chica)' : '';
        
        // Construir detalles de ingredientes con ubicación
        let ingredientDetails = [];
        let mensajeQuesoExtra = '';
        
        if (options.ingredientesConUbicacion) {
            // Agrupar ingredientes por ubicación
            const ingredientesToda = [];
            const ingredientesIzquierda = [];
            const ingredientesDerecha = [];
            
            options.ingredientes.forEach(ing => {
                const ubicacion = options.ingredientesConUbicacion[ing];
                if (ubicacion === 'izquierda') {
                    ingredientesIzquierda.push(ing);
                } else if (ubicacion === 'derecha') {
                    ingredientesDerecha.push(ing);
                } else {
                    ingredientesToda.push(ing);
                }
            });
            
            // Construir texto agrupado
            const partes = [];
            
            if (ingredientesToda.length > 0) {
                partes.push(`Toda: ${ingredientesToda.join(', ')}`);
            }
            
            if (ingredientesIzquierda.length > 0) {
                partes.push(`Izq: ${ingredientesIzquierda.join(', ')}`);
            }
            
            if (ingredientesDerecha.length > 0) {
                partes.push(`Der: ${ingredientesDerecha.join(', ')}`);
            }
            
            ingredientDetails = partes;
            
            // Verificar si es solo Pepperoni en mitad izquierda o derecha (solo para pizza grande)
            const esSoloPepperoniEnMitad = options.pizzaSize !== 'chica' && 
                options.ingredientes.length === 1 && 
                options.ingredientes[0] === 'Pepperoni' &&
                (options.ingredientesConUbicacion['Pepperoni'] === 'izquierda' || options.ingredientesConUbicacion['Pepperoni'] === 'derecha');
            
            if (esSoloPepperoniEnMitad) {
                mensajeQuesoExtra = ' (Incluye más queso en la otra mitad)';
            }
        } else {
            // Compatibilidad con pizzas guardadas antes (sin ubicación)
            ingredientDetails = options.ingredientes;
        }
        
        const ingredientText = ingredientDetails.join(' | ');
        const orillaRellenaText = options.orillaRellena ? 'Con orilla rellena' : '';
        const quesoExtraText = options.quesoExtra ? 'Con doble queso' : '';

        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-start order-item';
        
        // Contenedor del contenido
        const contentDiv = document.createElement('div');
        contentDiv.className = 'order-item-content';
        contentDiv.style.flex = '1';
        
        // Texto del producto
        const textDiv = document.createElement('div');
        textDiv.className = 'order-item-text';
        textDiv.textContent = `${name}${tamañoTexto} (${ingredientText})${mensajeQuesoExtra}, ${orillaRellenaText}, ${quesoExtraText}`;
        contentDiv.appendChild(textDiv);
        
        // Contenedor de precio y botón eliminar
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'order-item-actions';
        actionsDiv.style.display = 'flex';
        actionsDiv.style.alignItems = 'center';
        actionsDiv.style.gap = '10px';
        
        // Precio
        const span = document.createElement('span');
        span.className = 'badge badge-primary badge-pill';
        span.textContent = `$${price.toFixed(2)}`;
        actionsDiv.appendChild(span);
        
        // Botón eliminar (solo para pizzas personalizadas)
        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'btn-delete-pizza';
        deleteBtn.setAttribute('data-pizza-index', index);
        deleteBtn.setAttribute('title', 'Eliminar esta pizza');
        deleteBtn.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;
        deleteBtn.onclick = function() {
            eliminarPizzaPersonalizada(index);
        };
        actionsDiv.appendChild(deleteBtn);
        
        contentDiv.appendChild(actionsDiv);
        li.appendChild(contentDiv);
        orderSummary.appendChild(li);

        totalPrice += price;
    });


    totalPriceElement.textContent = `${totalPrice.toFixed(2)}`;

    populatePaymentAndDeliveryOptions();

    $('#orderModal').modal('show');
}

function populatePaymentAndDeliveryOptions() {
    const paymentMethodSelect = document.getElementById('paymentMethod');
    paymentMethodSelect.innerHTML = '';
    
    // Default option for payment method
    const defaultPaymentOption = new Option("Selecciona un método de pago", "", true, true);
    defaultPaymentOption.disabled = true;
    paymentMethodSelect.appendChild(defaultPaymentOption);

    // Populate payment methods
    metodosDePago.forEach(metodo => {
        const option = new Option(metodo, metodo);
        if (metodo === selectedPaymentMethod) {
            option.selected = true;
        }
        paymentMethodSelect.appendChild(option);
    });

    // El método de entrega ahora es estático (Paso por el Pedido)
    // No necesitamos poblar un select, ya está definido en el HTML
    const deliveryAddressInput = document.getElementById('deliveryAddress');
    if (deliveryAddressInput) {
        deliveryAddressInput.value = 'Paso por el Pedido';
    }

    // Show or hide delivery notice based on selected delivery method
    handleOptionsChange();
}


// Event handler for payment method change

function handleOptionsChange() {
    const paymentMethod = document.getElementById("paymentMethod").value;
    const deliveryInputsContainer = document.getElementById("deliveryInputsContainer");
    const paymentInputContainer = document.getElementById("paymentInputContainer");

    // Asegurar que los campos de dirección siempre estén ocultos
    if (deliveryInputsContainer) {
        deliveryInputsContainer.style.display = "none";
    }

    // Pago en efectivo
    if (paymentMethod === "Efectivo") {
        paymentInputContainer.style.display = "block";
    } else {
        paymentInputContainer.style.display = "none";
    }
}

// Validar en tiempo real los inputs de entrega a domicilio (deshabilitado - solo paso por el local)
// document.getElementById("colonia").addEventListener("input", validateDeliveryInputs);
// document.getElementById("numeroCasa").addEventListener("input", validateDeliveryInputs);


function validateDeliveryInputs() {
    const colonia = document.getElementById("colonia").value.trim();
    const numeroCasa = document.getElementById("numeroCasa").value.trim();
    const confirmButton = document.querySelector('.btn-primary');

    // Deshabilitar botón si algún campo está vacío
    if (colonia && numeroCasa) {
       // confirmButton.disabled = false;
    } else {
       // confirmButton.disabled = true;
    }
}


// Llamar populatePaymentAndDeliveryOptions al abrir el modal
$('#orderModal').on('show.bs.modal', populatePaymentAndDeliveryOptions);

document.getElementById('deliveryAddress').addEventListener('change', updateTotalPrice);

function updateTotalPrice() {
    // Obtener el precio base de los productos seleccionados
    const selectedPizzas = [];
    const quantityInputs = document.querySelectorAll('.quantity-input');

    quantityInputs.forEach(input => {
        const quantity = parseInt(input.value);
        if (quantity > 0) { 
            const cardBody = input.closest('.card-body');
            const pizza = cardBody.querySelector('.card-title').textContent;
            if (pizza == "Crea tu pizza"){


            } else {
                const priceElement = cardBody.querySelector('.pizza-price');
                const price = parseFloat(priceElement.textContent.replace('$', ''));
                selectedPizzas.push({ name: pizza, quantity, price });
            }
            
        }
    });

    // Agregar pizzas personalizadas al cálculo
    pizzasPersonalizadas.forEach(pizza => {
        const existsInOrder = productosOrdenados.some(product => product.name === pizza.name);
        if (!existsInOrder) {
            selectedPizzas.push({
                name: pizza.name,
                quantity: 1, // Las pizzas personalizadas se consideran individuales
                price: pizza.price
            });
        }
    });

    // Filtrar productos ya ordenados
    const filteredPizzas = selectedPizzas.filter(pizza => {
        return !productosOrdenados.some(product => product.name === pizza.name);
    });

    // Calcular el precio total
    let totalPrice = filteredPizzas.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);
    totalPrice += productosOrdenados.reduce((acc, product) => acc + product.price, 0);

    // Actualizar el total en el modal
    document.getElementById('totalPrice').textContent = `${totalPrice.toFixed(2)}`;
}

function sendOrder() {
    const selectedPizzas = [];
    const quantityInputs = document.querySelectorAll('.quantity-input');


    // Recolectar pizzas seleccionadas sin opciones
    quantityInputs.forEach(input => {
        const quantity = parseInt(input.value);
        if (quantity > 0) { 
            const cardBody = input.closest('.card-body');
            const pizza = cardBody.querySelector('.card-title').textContent;
            const priceElement = cardBody.querySelector('.pizza-price');
            const price = parseFloat(priceElement.textContent.replace('$', ''));
            selectedPizzas.push({ name: pizza, quantity, price });
        }
    });

   
    const filteredPizzas = selectedPizzas.filter(pizza => {
        return !productosOrdenados.some(product => product.name === pizza.name);
    });


    let orderMessage = 'Hola, quiero ordenar:\n';


    filteredPizzas.forEach(pizza => {    
        if (pizza.name === "Paquete 2") {
            orderMessage += `${pizza.quantity} Paquete 2: Una Pizza de Peperoni, Un Espagueti Sencillo y un Refresco Grande 1.75L\n`;
        } else if (pizza.name === "Crea tu pizza") {
            // para ahorrar problemas
        } else if (pizza.name === "Paquete 4") {
            // Paquete 4 se maneja en productosOrdenados con opciones
        } else {
            orderMessage += `${pizza.quantity} ${pizza.name}\n`;
        }
    });
    

    // Agregar productos con opciones
    productosOrdenados.forEach(product => {
        const { name, price, options, quantity } = product;
        const optionObject = Object.fromEntries(Object.entries(options || {}));
        const productQuantity = quantity !== undefined ? quantity : 1;

        let optionDetails = '';

      console.log(product)

        if (optionObject.sauce && optionObject.type) {
            optionDetails = `${optionObject.type} con salsa ${optionObject.sauce}`; //PARA LOS BONELESS Y ALITAS VER SI CAUSA ALGUN CONFLICTO
        } else if (optionObject.sauce && Object.keys(optionObject).length === 2) {
            optionDetails = `con salsa ${optionObject.sauce}`;
        } 
        else if (product.name == "Paquete 1") { // Paquete 1
            const ingredientePizza = optionObject['Ingrediente Pizza'] || 'Peperoni';
            optionDetails = `Pizza de ${ingredientePizza}, Con Boneless ${optionObject['Tipo']} con Salsa ${optionObject['Aderezo A Elegir']} y un Refresco Grande 1.75L`;
       
        } else if (product.name == "Paquete 2") { // Paquete 2
            const ingredientePizza = optionObject['Ingrediente Pizza'] || 'Peperoni';
            optionDetails = `Pizza de ${ingredientePizza}, un Espagueti Sencillo y un Refresco Grande 1.75L`;
        
        } else if (product.name == "Paquete 3") { 
            const aderezo = optionObject['Aderezo'] || 'Ranch';
            optionDetails = `Pizza de Boneless ${optionObject['Tipo']} con Salsa ${optionObject['Aderezo A Elegir']} un Aderezo ${aderezo} y un Refresco Grande 1.75L`;
       
        } else if (product.name === "Pizza de Boneless con Aderezo"){
            
            console.log("Producto encontrado:", product);

            // Asegurarse de que `products` tiene elementos
            if (product.products.length > 0) {
                let firstProduct = product.products[0]; // Obtener el primer producto
                let optionObject = firstProduct.options; // Obtener las opciones del producto
        
                console.log("Opciones del producto:", optionObject);
        
                // Validar si existen las propiedades necesarias
                let tipo = optionObject['Tipo'] || "Desconocido";
                let aderezo = optionObject['Salsa'] || "Sin Aderezo";
        
                optionDetails = `Pizza de Boneless ${tipo} con Salsa ${aderezo}, un Aderezo Ranch`;
                
            } 

        } else if (name === "Paquete 4") {
            const ingredientePizza1 = optionObject['Ingrediente Pizza 1'] || 'Peperoni';
            const ingredientePizza2 = optionObject['Ingrediente Pizza 2'] || 'Peperoni';
            optionDetails = `2 Pizzas de ${ingredientePizza1} y ${ingredientePizza2} con Extra Queso y un Refresco Grande 1.75L`;
        } else if (name === "Paquete 5") {
            const ingredientePizza = optionObject['Ingrediente Pizza'] || 'Peperoni';
            optionDetails = `Pizza de ${ingredientePizza}, Boneless ${optionObject['Tipo Boneless']} con Salsa ${optionObject['Salsa Boneless']} con Papas, 1/2 Litro Espagueti y un Refresco Grande 1.75L`;
        } else if (optionObject.sauce && Object.keys(optionObject).length === 1){
        optionDetails = `Salsa ${optionObject.sauce}`; 
            // Este es para el aderezo
        } else if (product.name === "3 Aderezos por $30" && optionObject.sauce1 && optionObject.sauce2 && optionObject.sauce3) {
            optionDetails = `${optionObject.sauce1}, ${optionObject.sauce2}, ${optionObject.sauce3}`;
        }
            
         
        if (optionDetails) {
            orderMessage += `${productQuantity} ${name}: ${optionDetails}\n`;
        }



    });

    // Agregar pizzas personalizadas
    pizzasPersonalizadas.forEach(pizza => {
        const { name, price, options } = pizza;
        const { ingredientes, ingredientesConUbicacion, orillaRellena, quesoExtra, pizzaSize } = options;
        // No agregar tamaño si ya está en el nombre
        const tamañoTexto = (pizzaSize === 'chica' && !name.includes('Chica')) ? ' (Chica)' : '';

        // Crear descripción de la pizza personalizada
        let pizzaDescription = `1 ${name}${tamañoTexto} ($${price.toFixed(2)}): `;

        // Ingredientes seleccionados con ubicación - Agrupados por ubicación
        if (ingredientes.length > 0) {
            if (ingredientesConUbicacion) {
                // Agrupar ingredientes por ubicación
                const ingredientesToda = [];
                const ingredientesIzquierda = [];
                const ingredientesDerecha = [];
                
                ingredientes.forEach(ing => {
                    const ubicacion = ingredientesConUbicacion[ing];
                    if (ubicacion === 'izquierda') {
                        ingredientesIzquierda.push(ing);
                    } else if (ubicacion === 'derecha') {
                        ingredientesDerecha.push(ing);
                    } else {
                        ingredientesToda.push(ing);
                    }
                });
                
                // Construir descripción agrupada con saltos de línea
                const partes = [];
                
                if (ingredientesToda.length > 0) {
                    partes.push(`Toda la pizza: ${ingredientesToda.join(', ')}`);
                }
                
                if (ingredientesIzquierda.length > 0) {
                    partes.push(`Mitad Izquierda: ${ingredientesIzquierda.join(', ')}`);
                }
                
                if (ingredientesDerecha.length > 0) {
                    partes.push(`Mitad Derecha: ${ingredientesDerecha.join(', ')}`);
                }
                
                pizzaDescription += partes.join('\n    ');
                
                // Verificar si es solo Pepperoni en mitad izquierda o derecha (solo para pizza grande)
                const esSoloPepperoniEnMitad = pizzaSize !== 'chica' && 
                    ingredientes.length === 1 && 
                    ingredientes[0] === 'Pepperoni' &&
                    (ingredientesConUbicacion['Pepperoni'] === 'izquierda' || ingredientesConUbicacion['Pepperoni'] === 'derecha');
                
                if (esSoloPepperoniEnMitad) {
                    pizzaDescription += ' (Incluye más queso en la otra mitad)';
                }
            } else {
                // Compatibilidad con pizzas guardadas antes (sin ubicación)
                pizzaDescription += `con ${ingredientes.join(', ')}`;
            }
        }

        // Opciones adicionales
        if (orillaRellena || quesoExtra) {
            const extras = [];
            if (orillaRellena) extras.push('orilla rellena');
            if (quesoExtra) extras.push('doble queso');
            pizzaDescription += ` y ${extras.join(' y ')}`;
        }

        // Agregar la descripción al mensaje
        orderMessage += `${pizzaDescription}\n`;
    });

    // Obtener el precio total calculado
    let totalPrice = parseFloat(document.getElementById('totalPrice').textContent);

    // Obtener método de pago y dirección, si existen
    const paymentMethod = document.getElementById('paymentMethod')?.value;
    const deliveryAddress = document.getElementById('deliveryAddress')?.value;

    let paymentInputContainerval = document.getElementById("cashAmount")?.value;
    paymentInputContainerval = parseFloat(paymentInputContainerval);  // Convert to a number

    const paymentInputContainer = document.getElementById("paymentInputContainer");


    console.log(paymentInputContainerval);
    if (paymentInputContainer.style.display === "block") {
        if (isNaN(paymentInputContainerval)) {
            alert("Por favor, ingresa una cantidad válida con la que pagará.");
            return; // Evitar que se envíe el pedido
        }
    
        if (paymentInputContainerval < totalPrice) {
            alert(
                `La cantidad ingresada (${paymentInputContainerval.toFixed(2)}$) no es suficiente para cubrir el total de la compra (${totalPrice.toFixed(2)}$).`
            );
            return; // Evitar que se envíe el pedido
        }
    }

     // Validar si los campos de opciones están seleccionados
     if (!paymentMethod) {
        alert("Por favor, selecciona un método de pago.");
        return; // Evitar que se envíe el pedido
    }

    // El método de entrega siempre es "Paso por el Pedido" (estático)
    // No necesita validación



    if (filteredPizzas.length == 0 && selectedPizzas.length == 0) {
        alert("Por favor, selecciona al menos un Producto.");
        return; // Evitar que se envíe el pedido
    }



    // Agregar método de pago y dirección al mensaje
    orderMessage += `\nMétodo de Pago: ${paymentMethod || 'No especificado'}`;
    orderMessage += `\nMétodo de Entrega: ${deliveryAddress || 'Paso por el Pedido'}`;

    // Solo hay "Paso por el Pedido", siempre mostrar el total sin envío
    orderMessage += `\nTotal: $${totalPrice.toFixed(2)}`;

    if (paymentMethod === "Efectivo" && !isNaN(paymentInputContainerval)) {
        orderMessage += `\nPaga con: $${paymentInputContainerval.toFixed(2)}`;
    }


    // Agregar el precio total al mensaje
    const whatsappNumber = '8110954704'; // Reemplaza con tu número de WhatsApp
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;
    
    window.open(url, '_blank');
}

function setCookie(name, value, minutes) {
    const date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000)); // Minutos convertidos en milisegundos
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/`;
}


function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            return decodeURIComponent(c.substring(nameEQ.length));
        }
    }
    return null;
}

function guardarDatosEnCookies() {
    setCookie("customPizzaQuantityValue", customPizzaQuantityValue, 1);
    setCookie("pizzasPersonalizadas", JSON.stringify(pizzasPersonalizadas), 1);
    setCookie("productosOrdenados", JSON.stringify(productosOrdenados), 1);
    setCookie("selectedQuantities", JSON.stringify(selectedQuantities), 1);
    setCookie("selectedPaymentMethod", selectedPaymentMethod, 1);
    setCookie("selectedDeliveryMethod", selectedDeliveryMethod, 1);
}

function restaurarDatosDeCookies() {
    const pizzaQuantity = getCookie("customPizzaQuantityValue");
    if (pizzaQuantity !== null) {
        customPizzaQuantityValue = parseInt(pizzaQuantity, 10);
    }

    const personalizadas = getCookie("pizzasPersonalizadas");
    if (personalizadas !== null) {
        pizzasPersonalizadas = JSON.parse(personalizadas);
    }

    const productos = getCookie("productosOrdenados");
    if (productos !== null) {
        productosOrdenados = JSON.parse(productos);
    }

    const cantidades = getCookie("selectedQuantities");

    if (cantidades !== null) {
        const restoredQuantities = JSON.parse(cantidades);

        // Actualiza el estado global de selectedQuantities
        Object.keys(restoredQuantities).forEach((key) => {
            if (selectedQuantities[key]) {
                selectedQuantities[key] = restoredQuantities[key];
            }
        });
    }

    const paymentMethod = getCookie("selectedPaymentMethod");
    if (paymentMethod !== null) {
        selectedPaymentMethod = paymentMethod;
    }

    const deliveryMethod = getCookie("selectedDeliveryMethod");
    if (deliveryMethod !== null) {
        selectedDeliveryMethod = deliveryMethod;
    }
}

window.addEventListener('beforeunload', guardarDatosEnCookies);


// Inicialización de la pestaña activa
document.addEventListener('DOMContentLoaded', () => {
    restaurarDatosDeCookies(); // Restaurar datos desde cookies
    generateCards(pizzas, 'pizza-content', 'pizza');
    generateCards(paquetes, 'paquete-content', 'paquete'); 
    generateCards(bonealitas, 'bonealitas-content', 'bonealitas');
    generateCards(complementos, 'complemento-content', 'complemento'); //importante cargar todas para que seleccione los inputs en la cookie
});

