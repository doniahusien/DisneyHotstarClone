fetch('db.json')
  .then(response => response.json())
  .then(data => {
    processData(data)
  })
  .catch(error => {
    console.error(error);
  });

let lists = [...document.querySelectorAll(".lists")]

function processData(data) {
  if (data) {
    topData = data.popular;
    recData = data.rec;
    newData = data.new;
  }
  displayCard(newData, lists[2]);
  displayCard(topData, lists[1]);
  displayCard(recData, lists[0])
}

function displayCard(data, list) {
  cardHtml = ""
  data.map((item, i) => {
    card = `
        <div class="card">
          <img src="${item.img}" alt="">
          <div class="cards-content">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <button> + Add to watchlist</button>
          </div>
        </div>`;
    list.innerHTML += card;
  })

}




//toggle nav
document.getElementById("toggle").addEventListener("click", () => {
  document.querySelector(".overlay").classList.toggle("show")
})

//slider header
const slideshow = document.querySelector('.Slideshow');
let slideIndex = 0;
function moveSlider() {
  const slideWidth = document.querySelector('.slide').offsetWidth;
  slideIndex = (slideIndex + 1) % slideshow.childElementCount;
  const newPosition = -slideIndex * slideWidth;
  if (slideIndex === 0) {
    slideshow.style.transition = 'none'; 
    slideshow.style.transform = `translateX(0)`;
    setTimeout(() => {
      slideshow.style.transition = ''; 
    }, 0);
  } else {
    slideshow.style.transform = `translateX(${newPosition}px)`;
  }
}
setInterval(moveSlider, 3000);


//play video
let videos = document.querySelectorAll(".video");
for (let i = 0; i < videos.length; i++) {
  videos[i].addEventListener("mouseover", () => {
    let vd = videos[i].lastElementChild;  
    vd.play();
  });
}






//movies scroll
const preBtn = document.querySelectorAll('.pre-btn');
const nxtBtn = document.querySelectorAll('.nxt-btn');
const moviesContainer = [...document.getElementsByClassName('lists')];
moviesContainer.forEach((movie, i) => {
  let movieWidth = movie.offsetWidth/3;
  preBtn[i].addEventListener("click", () => {
    movie.scrollLeft -= movieWidth
  })
  nxtBtn[i].addEventListener("click", () => {
    movie.scrollLeft += movieWidth
  })
});