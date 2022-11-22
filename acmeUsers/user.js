//https://www.acme-api.com/api/companies
let load = document.querySelector('#loadButton');
let list = document.querySelector('#usersList');
let randBtn = document.querySelector('#randomButton');
let h1 = document.querySelector('#random');
let companyBtn = document.querySelector('#companyName');
let compDiv = document.querySelector('#companyNames');
let count = {moreUsers: 1, compCount: 0,}

load.addEventListener('click', () => {
   loadUsers();
});

randBtn.addEventListener('click', () => {
    loadRandomUser();
});

companyBtn.addEventListener('click', () => {
    loadCompanies();
});

async function loadCompanies() {
    if(!count.compCount){
        let response = await fetch('https://www.acme-api.com/api/companies');
        let data = await response.json();
        for(let key in data){
            let company = data[key].name;
            let li = document.createElement('li');
            li.innerText = company;
            compDiv.appendChild(li);
            count.compCount++;
        }
    }
}

async function loadRandomUser() {
    let response = await fetch('https://www.acme-api.com/api/users/random');
    let user = await response.json();
    h1.innerText = user.fullName;
}

async function loadUsers(){
    if(count.moreUsers < 22){
      let response = await fetch('https://www.acme-api.com/api/users');
        if(count.moreUsers > 1){
          response = await fetch(`https://www.acme-api.com/api/users/${count.moreUsers}`);
        }
        let data = await response.json();
        let users = data.users;
        for(let i = 0; i < users.length; i++){
            let user = users[i];
            let li = document.createElement('li');
            li.innerText = user.fullName;
            list.appendChild(li);
        }
        count.moreUsers++;
    }
}
