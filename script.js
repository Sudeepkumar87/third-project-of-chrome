const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})
// this code is for hamburger menu end here
const navBar = document.querySelector(".navbar");

window.onscroll = () => {
  if (window.scrollY>100){
    navBar.classList.add("navActive");

  } else{
    navBar.classList.remove("navActive")
  }
}


const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab =>{
  tab.addEventListener('click',()=>{
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent =>{
      tabContent.classList.remove('active')
    })
    target.classList.add('active')
  })
})
