import weaponData from './weapons.json' assert {type: 'json'};

const weaponContainer = document.querySelector(".container");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#btn-search");

// load items
window.addEventListener('DOMContentLoaded', function(){
    displayWeaponItems(weaponData);
});

// let i = 0;

function displayWeaponItems(weaponItems) {
    let displayWeapon = weaponItems.map(function(weapon){   

        return `<div class="box">
            <div class="image-container">
                <img src="/img/${weapon.id}.png" alt="">
            </div>
            <div class="name-upgrade">
                <h3 class="name">${weapon.name} +</h3>
                <p class="show-upgrade">0</p> 
                <input class="upgrade" type="number" max="9" min="0" value="0">
            </div>
            <p class="level">Level: ${weapon.level}</p>
            <p class="attack-value">Attack Value ${weapon.attack_value[0]}</p>
            <p class="magical-attack-value">Magical Attack Value ${weapon.magical_attack_value[0]}</p>
            <p class="attack-speed">Attack Speed ${weapon.attack_speed[0]}</p>
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


// const weaponUpgrades = document.getElementsByClassName(".upgrade");
// const showUpgrades = document.getElementsByClassName(".show-upgrade");

// weaponUpgrades.forEach(function(weaponUpgrade){
//     weaponUpgrade.addEventListener("change", updateValue);
// })


// function updateValue(e) {
//     showUpgrades.forEach(function(showUpgrade){

//         let number = e.target.parentElement.firstChild.nextSibling.nextSibling;

//         number.textContent= e.target.value;

//         console.log(e.target.value)
//     });

//     console.log(e.target.value);
// }


weaponContainer.addEventListener("click", updateValue);

function updateValue(e) {
    if(e.target.classList.contains("upgrade")){
        let upgradeLevel = e.target.value;
        let number = e.target.parentElement.firstChild.nextSibling.nextSibling.nextSibling;
        number.textContent= e.target.value;

        let weaponAttackValue = e.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling;
        
        weaponAttackValue.innerHTML = `<p class="attack-value">Attack Value ${weaponData[0].attack_value[upgradeLevel]}</p>`
    
        let weaponMagicalAttackValue = e.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextElementSibling;

        weaponMagicalAttackValue.innerHTML = `<p class="magical-attack-value">Magical Attack Value ${weaponData[0].magical_attack_value[upgradeLevel]}</p>`

        let weaponAttackSpeed = e.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextElementSibling.nextElementSibling;

        weaponAttackSpeed.innerHTML = `<p class="attack-speed">Attack Speed ${weaponData[0].attack_speed[updateValue]}</p>`

        console.log(weaponAttackSpeed);

    }

}
