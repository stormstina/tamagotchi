console.log("tamagotchi");

// -------------------------------------------- Tamagotchi prototype --------------------------------------------
class Tamagotchi {
    constructor(name, animalType ) {
        this.name = name;
        this.animalType = animalType;
        this.tiredness = 50;
        this.hunger = 50;
        this.loneliness = 50;
        this.happiness = 50;
    }
    nap() {
        /*  
            Sänker tiredness med 40,
            sänker happiness med 10, 
            ökar hunger och loneliness med 10.
        */

    }
    play() {
        /*
            Ökar happiness med 30, 
            ökar hunger och tiredness med 20. 
            Sänker loneliness med 10.
        */

    }
    eat() {
        /*
            Sänker hunger med 60, 
            ökar tiredness med 10.
        */

    }
}

// -------------------------------------------- Render user pet --------------------------------------------
function renderPet(pet){
    // Hämta div
    let container = document.querySelector("#gameContainer")
    console.log(container);
    console.log(pet);

    container.innerHTML = `
        <div class="score">
            <p>Tiredness:
                <span id="sleep-score">${pet.tiredness}</span>
            </p>
            <p>Hunger:
                <span id="hunger-score">${pet.hunger}</span>
            </p>
            <p>Loneliness:
                <span id="lonely-score">${pet.loneliness}</span>
            </p>
            <p>Happiness:
                <span id="happy-score">${pet.happiness}</span>
            </p>
        </div>
        <div class="pet-container">
            <h3>${pet.name}</h3>
            <p>${pet.animalType}</p>
        </div>
        <div class="game-buttons">
            <button id="eat"><i class="fa-solid fa-cookie-bite"></i></button>
            <button id="play"><i class="fa-solid fa-otter"></i></button>
            <button id="sleep"><i class="fa-solid fa-moon"></i></button>
        </div>
    `
}

// -------------------------------------------- FORM: User input for creating Pet --------------------------------------------

let tForm = document.querySelector('#createTamagotchi');

tForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Create a new instance of the Tamagotchi prototype from user input
    let tamName = document.querySelector('#tName').value;
    console.log(tamName);

    let tamType = document.querySelector("#tType").value;
    console.log(tamType);

    let newPet = new Tamagotchi(tamName, tamType)
    console.log(newPet);
    
    renderPet(newPet)
    
})

