const placesList = document.getElementById('places-list');
// console.log(placesList);

const li = document.createElement('li');
li.innerText = 'Brindabon';

placesList.appendChild(li);


const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Hi! I am Akash!';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerHTML = 'Biriyani';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerHTML = 'Kacchi';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerHTML = 'Tehari';
ul.appendChild(li3);
const li4 = document.createElement('li');
li4.innerHTML = 'Borhani';
ul.appendChild(li4);

section.appendChild(ul);
console.log(section);

// set innerHTML directly 
const sectionDress = document.createElement('section');
sectionDress.innerHTML= `
<

`