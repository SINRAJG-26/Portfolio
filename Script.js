const navLinks=document.querySelectorAll('header nav a');
const logoLink=document.querySelector('.logo');
const sections=document.querySelectorAll('section');
const menuIcon=document.querySelector('#menu-icon');
const navbar=document.querySelector('header nav');

menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
})
const activePage=()=>{

    const header=document.querySelector('header');
    const barsBox=document.querySelector('.bars-box');



    header.classList.remove('active');
    setTimeout(()=>{
        header.classList.add('active');
    },1100);

    navLinks.forEach(link=>{
        link.classList.remove('active');
    });

     barsBox.classList.remove('active');
    setTimeout(()=>{
        barsBox.classList.add('active');
    },1100);

     sections.forEach(section=>{
        section.classList.remove('active');
    });

    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')

}

navLinks.forEach((link,idx)=>{
    link.addEventListener('click',()=>{
        if(!link.classList.contains('active')){
            activePage();

            link.classList.add('active');

            setTimeout(()=>{
                sections[idx].classList.add('active')
            },1100);
        }
    });
});

logoLink.addEventListener('click',()=>{
    if(!navLinks[0].classList.contains('active')){
        activePage();

        navLinks[0].classList.add('active');
        
         setTimeout(()=>{
                sections[0].classList.add('active')
            },1100);
        
    }
});


const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {

        const resumeDetails=document.querySelectorAll('.resume-detail')

        resumeBtns.forEach(btn => 
            btn.classList.remove('active'));
        btn.classList.add('active');

        
        resumeDetails.forEach(detail => 
            detail.classList.remove('active'));

        resumeDetails[idx].classList.add('active')

    });
});

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');

    const portfolioDetails=document.querySelectorAll('.portfolio-detail');


    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail=>{
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
};


// Event listeners outside the function, and correct the logic
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled');
    } else {
        index = 4; // limit max
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
          arrowRight.classList.remove('disabled');
    } else {
        index = 0; // limit min
         arrowLeft.classList.add('disabled');
    }
    activePortfolio();
});

// Initialize carousel
activePortfolio();


  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
        form.reset();
        document.querySelector(".form-success-msg").style.display = "block";
      })
      .catch((error) => alert("Error sending message: " + error));

    return false;
  }