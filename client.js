$(document).ready(onReady);

function onReady() {
  console.log('JQ');
  addPeople();
  $('body').on('click', '.image', clickImage);
}
console.log('Here are all the available people:', people);

let index = randomNumber(1, people.length) -1;
console.log(index);
console.log(people[index].name);

function addPeople() {
  $('body').append(`
  <header>
    <h1>Click on: <span id="name">${people[index].name}</span></h1>
  </header>
  <span id="break"></span>
  <main>`)
  for (let i = 0; i < people.length; i++) {
    $('body').append(`
    <div class="image" id=${i}>
      <img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}"> 
    </div>
  `);
  }
  $('body').append(`</main>`)
}


  //   <div class="image" id="1">
  //     <img src="https://avatars.githubusercontent.com/u/11574995?v=4"  alt="Profile image of Dane" width="250" />
  //   </div>
  //   <div class="image" id="2">
  //     <img src="https://avatars.githubusercontent.com/u/5143491?v=4"  alt="Profile image of Mary" width="250" />
  //   </div>
  //   <div class="image" id="3">
  //     <img src="https://avatars.githubusercontent.com/u/5541481?v=4"  alt="Profile image of Kris" width="250" />
  //   </div>
  //   <div class="image" id="4">
  //     <img src="https://avatars.githubusercontent.com/u/1153371?v=4"  alt="Profile image of Edan" width="250" />
  //   </div>
  //   <div class="image" id="5">
  //     <img src="https://avatars.githubusercontent.com/u/10237149?v=4"  alt="Profile image of Cassie" width="250" />
  //   </div>
  //   <div class="image" id="6">
  //     <img src="https://avatars.githubusercontent.com/u/25748592?v=4"  alt="Profile image of Chris" width="250" />
  //   </div>
  // </body>


  function clickImage() {
    console.log('Click');
    let clickedImage = Number($(this).attr('id'));
    console.log(clickedImage);
    if (clickedImage === index) {
      winning();
      alert('Correct. Now click on...')
    } else {
      alert('Sorry, please try again.')
    }
    
  }

  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
    
}

function winning() {
  index = randomNumber(0, people.length -1);
  $('#name').empty()
  $('#name').append(people[index].name);
}
