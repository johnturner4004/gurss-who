$(document).ready(onReady);

function onReady() {
  console.log('JQ');
  $('body').on('click', '.image', clickImage);
  getShuffle();
  addPeople();
}

console.log('Here are all the available people:', people);
let shuffle = [];




function getShuffle() {
  let random = 0;
  let randomArray = [];
  random = randomNumber(0, people.length-1);
  for (let i = 0; i < 8; i++) {
    while (randomArray.includes(random) === true) {
      random = randomNumber(0, people.length-1);
    }
    randomArray.push(random);
    shuffle.push(people[random]);
  }
}

console.log(shuffle);

let index = 0;

function addPeople() {
  index = randomNumber(1, shuffle.length - 1);
  $('body').append(`
  <header>
    <h1>Click on: <span id="name">${shuffle[index].name}</span></h1>
  </header>
  <span id="break"></span>
  <main>`)

  for (let i = 0; i < shuffle.length; i++) {
    if (i === index) {
      $('body').append(`
    <div class="image" id=${i} onclick="party.element(this)">
      <img src="https://github.com/${shuffle[i].githubUsername}.png?size=250" alt="Profile image of ${shuffle[i].name}"> 
    </div>
  `);
    } else {
      $('body').append(`
    <div class="image" id=${i}>
      <img src="https://github.com/${shuffle[i].githubUsername}.png?size=250" alt="Profile image of ${shuffle[i].name}"> 
    </div>
  `);
    }
  }
  $('body').append(`</main>`)
}

function clickImage() {
  console.log('Click');
  let clickedImage = Number($(this).attr('id'));
  console.log(clickedImage);
  if (clickedImage === index) {

    setTimeout(winning, 2000);

  } else {
    alert('Sorry, please try again.')
  }

}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);

}

function winning() {
  alert('Correct. Now click on...')
  $.fx.off = true;
  location.reload()
  // index = randomNumber(0, people.length - 1);
  // $('#name').empty()
  // $('#name').append(people[index].name);
  // addPeople();
}