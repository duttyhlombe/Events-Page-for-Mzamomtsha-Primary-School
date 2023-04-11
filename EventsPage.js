// Autoplay ImageSlider for all the images on events article cards

const slides = document.querySelectorAll('.slides');
const slides1 = document.querySelectorAll('.slides1');
const slides2 = document.querySelectorAll('.slides2');
const slides3 = document.querySelectorAll('.slides3');
const slides4 = document.querySelectorAll('.slides4');
const slides5 = document.querySelectorAll('.slides5');
const slides6 = document.querySelectorAll('.slides6');
const slides7 = document.querySelectorAll('.slides7');
const prevBtn = document.getElementById('prev-btn');
const prevBtn1 = document.getElementById('prev-btn1');
const prevBtn2 = document.getElementById('prev-btn2');
const prevBtn3 = document.getElementById('prev-btn3');
const prevBtn4 = document.getElementById('prev-btn4');
const prevBtn5 = document.getElementById('prev-btn5');
const prevBtn6 = document.getElementById('prev-btn6');
const prevBtn7 = document.getElementById('prev-btn7');
const nextBtn = document.getElementById('next-btn');
const nextBtn1 = document.getElementById('next-btn1');
const nextBtn2 = document.getElementById('next-btn2');
const nextBtn3 = document.getElementById('next-btn3');
const nextBtn4 = document.getElementById('next-btn4');
const nextBtn5 = document.getElementById('next-btn5');
const nextBtn6 = document.getElementById('next-btn6');
const nextBtn7 = document.getElementById('next-btn7');
const dots = document.querySelectorAll('.dot')
const dots1 = document.querySelectorAll('.dot1')
const dots2 = document.querySelectorAll('.dot2')
const dots3 = document.querySelectorAll('.dot3')
const dots4 = document.querySelectorAll('.dot4')
const dots5 = document.querySelectorAll('.dot5')
const dots6 = document.querySelectorAll('.dot6')
const dots7 = document.querySelectorAll('.dot7')

let index = 0;

// Adding opacity to first dot on first time

dots[0].style.opacity='1'
dots1[0].style.opacity='1'
dots2[0].style.opacity='1'
dots3[0].style.opacity='1'
dots4[0].style.opacity='1'
dots5[0].style.opacity='1'
dots6[0].style.opacity='1'
dots7[0].style.opacity='1'

// positioning the slides

slides.forEach((slide,index)=>{
  slide.style.left=`${index*100}%`
});

// positioning the slides1

slides1.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`
  });
  
// positioning the slides2

slides2.forEach((slide,index)=>{
  slide.style.left=`${index*100}%`
});

// positioning the slides3

slides3.forEach((slide,index)=>{
  slide.style.left=`${index*100}%`
});

// positioning the slides4

slides4.forEach((slide,index)=>{
  slide.style.left=`${index*100}%`
});

// positioning the slides5

slides5.forEach((slide,index)=>{
  slide.style.left=`${index*100}%`
});

// positioning the slides6

slides6.forEach((slide,index)=>{
  slide.style.left=`${index*100}%`
});

// positioning the slides6

slides7.forEach((slide,index)=>{
  slide.style.left=`${index*100}%`
});



// move slide function

const moveSlide = () =>{
  slides.forEach((slide)=>{
    slide.style.transform=`translateX(-${index*100}%)`;
  });
  slides1.forEach((slide)=>{
    slide.style.transform=`translateX(-${index*100}%)`;
  });
  slides2.forEach((slide)=>{
    slide.style.transform=`translateX(-${index*100}%)`;
  });
  slides3.forEach((slide)=>{
    slide.style.transform=`translateX(-${index*100}%)`;
  });
  slides4.forEach((slide)=>{
    slide.style.transform=`translateX(-${index*100}%)`;
  });
  slides5.forEach((slide)=>{
    slide.style.transform=`translateX(-${index*100}%)`;
  });
  slides6.forEach((slide)=>{
    slide.style.transform=`translateX(-${index*100}%)`;
  });
  slides7.forEach((slide)=>{
    slide.style.transform=`translateX(-${index*100}%)`;
  });
}


// remove dots opacity 1 from all dots

const removeDotsOpacity = () =>{
  dots.forEach((dot)=>{
    dot.style.opacity='.2';
  });
  dots1.forEach((dot)=>{
    dot.style.opacity='.2';
  });
  dots2.forEach((dot)=>{
    dot.style.opacity='.2';
  });
  dots3.forEach((dot)=>{
    dot.style.opacity='.2';
  });
  dots4.forEach((dot)=>{
    dot.style.opacity='.2';
  });
  dots5.forEach((dot)=>{
    dot.style.opacity='.2';
  });
  dots6.forEach((dot)=>{
    dot.style.opacity='.2';
  });
  dots7.forEach((dot)=>{
    dot.style.opacity='.2';
  });
}




dots.forEach((dot,i)=>{
  dot.addEventListener("click",(e)=>{
    index=i;
    removeDotsOpacity();
    e.target.style.opacity='1'
    moveSlide();
  })
});

dots1.forEach((dot,i)=>{
    dot.addEventListener("click",(e)=>{
      index=i;
      removeDotsOpacity();
      e.target.style.opacity='1'
      moveSlide();
    })
  });

  dots2.forEach((dot,i)=>{
    dot.addEventListener("click",(e)=>{
      index=i;
      removeDotsOpacity();
      e.target.style.opacity='1'
      moveSlide();
    })
  });

  dots3.forEach((dot,i)=>{
    dot.addEventListener("click",(e)=>{
      index=i;
      removeDotsOpacity();
      e.target.style.opacity='1'
      moveSlide();
    })
  });

  dots4.forEach((dot,i)=>{
    dot.addEventListener("click",(e)=>{
      index=i;
      removeDotsOpacity();
      e.target.style.opacity='1'
      moveSlide();
    })
  });

  dots5.forEach((dot,i)=>{
    dot.addEventListener("click",(e)=>{
      index=i;
      removeDotsOpacity();
      e.target.style.opacity='1'
      moveSlide();
    })
  });

  dots6.forEach((dot,i)=>{
    dot.addEventListener("click",(e)=>{
      index=i;
      removeDotsOpacity();
      e.target.style.opacity='1'
      moveSlide();
    })
  });

  dots7.forEach((dot,i)=>{
    dot.addEventListener("click",(e)=>{
      index=i;
      removeDotsOpacity();
      e.target.style.opacity='1'
      moveSlide();
    })
  });

// show the previous slide

prevBtn.addEventListener('click',()=>{
  if(index===0) return index;
  index--;
  removeDotsOpacity();
  dots[index].style.opacity='1'
  dots1[index].style.opacity='1'
  dots2[index].style.opacity='1'
  dots3[index].style.opacity='1' 
  dots4[index].style.opacity='1'
  dots5[index].style.opacity='1'
  dots6[index].style.opacity='1'
  dots7[index].style.opacity='1'
  moveSlide();
});


  

// show the next slide

nextBtn.addEventListener('click',()=>{
  if(index===slides.length-1) return index;
  index++;
  removeDotsOpacity();
  dots[index].style.opacity='1'
  dots1[index].style.opacity='1'
  dots2[index].style.opacity='1'
  dots3[index].style.opacity='1'
  dots4[index].style.opacity='1'
  dots5[index].style.opacity='1'
  dots6[index].style.opacity='1'
  dots7[index].style.opacity='1'
  moveSlide();
});






// auto play slide

const autoPlaySlide = () =>{
  removeDotsOpacity();
  if(index===slides.length-1) index= -1;
  index++;
  dots[index].style.opacity='1'
  dots1[index].style.opacity='1'
  dots2[index].style.opacity='1'
  dots3[index].style.opacity='1'
  dots4[index].style.opacity='1'
  dots5[index].style.opacity='1'
  dots6[index].style.opacity='1'
  dots7[index].style.opacity='1'
  moveSlide();
}
  
window.onload=()=>{
  setInterval(autoPlaySlide,5000);
}


let searchable = [
  'First term feeding scheme',
  'School grounds upgraded',
  'Annual Prize Giving',
  'Generous donations that upgrade the computer lab',
  'Sports Day',
  'Heritage Day',
  'Music Festival',
  'Mzamomtsha Primary School Fun, Run & Walk',
];

// Auto-complete Search

const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup', () => {
  let results = [];
  let input = searchInput.value;
  if (input.length) {
    results = searchable.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
  }
  renderResults(results);
});

function renderResults(results) {
  if (!results.length) {
    return searchWrapper.classList.remove('show');
  }

  const content = results
    .map((item) => {
      return `<li><a href='#'></a>${item}</li>`;
    })
    .join('');

  searchWrapper.classList.add('show');
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}