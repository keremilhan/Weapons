import weaponData from './weapons.json' assert {type: 'json'};

const weaponContainer = document.querySelector(".container");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#btn-search");

// load items
window.addEventListener('DOMContentLoaded', function(){
    displayWeaponItems(weaponData);
});

let i = 3;

function displayWeaponItems(weaponItems) {
    let displayWeapon = weaponItems.map(function(weapon){   

        return `<div class="box">
            <div class="image-container">
                <img src="/img/${weapon.id}.png" alt="">
            </div>
            <div class="name-upgrade">
                <h3 class="name">${weapon.name} +${i}</h3>
                <input class="upgrade" type="number" max="9" min="0" value="0">
            </div>
            <p class="level">Level: ${weapon.level}</p>
            <p class="attack-value">Attack Value ${weapon.attack_value[i]}</p>
            <p class="magical-attack-value">Magical Attack Value ${weapon.magical_attack_value[i]}</p>
            <p class="attack-speed">Attack Speed ${weapon.attack_speed[i]}</p>
            <div class="extra-container">
                <p class="extra">${weapon.extra1}</p>
                <p class="extra">${weapon.extra2}</p>
            </div>
            <p class="type">${weapon.type}</p>
        </div>`


    }); 

    displayWeapon = displayWeapon.join('');
    weaponContainer.innerHTML = displayWeapon;

}

// const weaponUpgrade = document.querySelector(".upgrade");
// const name = document.querySelector(".name");

// weaponUpgrade.addEventListener("change", updateValue);

// function updateValue(e) {
//     name.textContent = e.target.value;
// }






