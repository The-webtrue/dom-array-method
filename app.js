const main = document.getElementById('main');
const addUser= document.getElementById('add-user');
const doubleBtn = document.getElementById('double-money');
const showMillionreBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const caluculateWealthBtn = document.getElementById('caluculate-wealth');

let data = [];

// fetach for api

getRandomUser()
getRandomUser()
getRandomUser()

async function getRandomUser (){
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();

    const user = data.results[0];

    const newuser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random()* 1000000),
    };

    addData(newuser);
}

//dobule money

function doubleMoney (){
    data = data.map((user)=>{
        return {...user, money: user.money * 2 };
    });

    updataDom();
};

// filter only showMillionreBtn
function showMillionre(){
    data = data.filter((user)=>user.money > 1000000);
    updataDom()
}
// add new object to data arr

function addData(object) {
    data.push(object);

    updataDom();
}

// sort by richest

function sortBy (){
    data.sort((a,b)=>b.money - a.money);
    updataDom();
}

// calculet
const caluculate =()=>{
    const wealth = data.reduce((acc, user)=>(acc += user.money), 0);
    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3> Total Wealth : <strong>${formatMoney(wealth)}</strong></h3>`;
    main.appendChild(wealthEl);
}

function updataDom (providedData = data){
    main.innerHTML = `<h2><strong>Person</strong>Wealth</h2>`;

    for(const item of providedData){
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `
        <strong>${item.name}</strong> ${formatMoney(item.money)}
        `;
        main.appendChild(element)
    }
};


// formet number as money


const formatMoney = number =>{
    return '$ ' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
}

// event listerner

addUser.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
showMillionreBtn.addEventListener('click', showMillionre);
sortBtn.addEventListener('click', sortBy);
caluculateWealthBtn.addEventListener('click', caluculate);

// active btn

// Get the container element
var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}