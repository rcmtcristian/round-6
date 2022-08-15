
const rightArrow = document.getElementById('right')
const prevArrow = document.getElementById('left')
const showcase = document.querySelector('.showcase');
let fSlide;
let LSlide;

let projects = [ 
  {
    display:"./images/Tesla-Model-3-PNG-HD.png",
    title: "Tesla Model 3 ",
    subTitle:"Long Range",
    price: "$ 57,990",
  },
  {
    display:"./images/Tesla-Model-3-PNG-HD.png",
    title: "Tesla Model 2 ",
    subTitle:"Long Range",
    price: "$ 57,990"
  },
  {
    display:"./images/Tesla-Model-3-PNG-HD.png",
    title: "Tesla Model 1 ",
    subTitle:"Long Range",
    price: "$ 57,990"
  }
  

]

projects.forEach(({display,title,subTitle,price},i) => {
  const slide = document.createElement('div');
  slide.classList.add('insideSlide');
  slide.style.backgroundImage  = `url(${display})`;
  if(i == 0){
    fSlide = slide;
    slide.classList.add('active')
  }

  if(i + 1 == projects.length){
    LSlide = slide
  }


  showcase.appendChild(slide)
});

