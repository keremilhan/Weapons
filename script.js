import weaponData from './weapons.json' assert {type: 'json'};

const weaponContainer = document.querySelector(".container");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#btn-search");

// load items
window.addEventListener('DOMContentLoaded', function(){
    displayWeaponItems(weaponData);
});

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
                <p class="extra">${weapon.extra1[0]}</p>
                <p class="extra">${weapon.extra2[0]}</p>
            </div>
            <div class="footer">
                <p class="type">${weapon.type}</p>
                <div class="id-container">
                    <p class="hashtag">#</p>
                    <p class="id">${weapon.id}</p>
                </div>
            </div>
        </div>`

    }); 

    displayWeapon = displayWeapon.join('');
    weaponContainer.innerHTML = displayWeapon;

}

weaponContainer.addEventListener("change", updateValue);

function updateValue(e) {
    if(e.target.classList.contains("upgrade")){
        let upgradeLevel = e.target.value;
        let number = e.target.parentElement.firstChild.nextSibling.nextSibling.nextSibling;
        number.textContent= e.target.value;

        let id = e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling;


        let weaponAttackValue = e.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling;
        
        weaponAttackValue.innerHTML = `<p class="attack-value">Attack Value ${weaponData[id.textContent-1].attack_value[upgradeLevel]}</p>`
    
        let weaponMagicalAttackValue = e.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextElementSibling;

        weaponMagicalAttackValue.innerHTML = `<p class="magical-attack-value">Magical Attack Value ${weaponData[id.textContent-1].magical_attack_value[upgradeLevel]}</p>`

        let weaponAttackSpeed = e.target.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextElementSibling.nextElementSibling;

        weaponAttackSpeed.innerHTML = `<p class="attack-speed">Attack Speed ${weaponData[id.textContent-1].attack_speed[upgradeLevel]}</p>`

        let extra1 = e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling;

        extra1.innerHTML = `<p class="extra">${weaponData[id.textContent-1].extra1[upgradeLevel]}</p>`

        let extra2 = e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling;

        extra2.innerHTML = `<p class="extra">${weaponData[id.textContent-1].extra2[upgradeLevel]}</p>`

    }
}


searchInput.addEventListener('input', function(e){

    const weaponNames = document.querySelectorAll(".name");
    const search = searchInput.value.toLowerCase();
   

    weaponNames.forEach((weaponName) => {
        weaponName.parentElement.parentElement.style.display = "flex";

        if(!weaponName.innerHTML.toLowerCase().includes(search)) {
            weaponName.parentElement.parentElement.style.display = "none";
        }
    });
});
