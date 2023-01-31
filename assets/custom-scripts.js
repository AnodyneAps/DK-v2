(function(a){
	$('.youtube-cover-image, .youtube-button').on('click', function (e) {
		$('.youtube-cover-image , .youtube-button').hide();
	});
	// scroll smothing for readmore button
	$('.btn-readmore').on('click', function () {
		$('html, body').animate({ scrollTop: $(this.hash).offset().top - 180 }, 1000);
		return false;
	});

})(jQuery);


// variables for accordios
var accordionBtn = document.querySelectorAll('.accordion__title');
var allTexts = document.querySelectorAll('.accordion__flex');
var accIcon = document.querySelectorAll('.accIcon');

// event listener
accordionBtn.forEach(function (el) {
	el.addEventListener('click', toggleAccordion)
});

// function
function toggleAccordion(el) {
	var targetText = el.currentTarget.nextElementSibling.classList;
	var targetAccIcon = el.currentTarget.children[0];
	var target = el.currentTarget;

	if (targetText.contains('accordion-show')) {
		targetText.remove('accordion-show');
		targetAccIcon.classList.remove('anime');
		target.classList.remove('accordionTitleActive');
	}
	else {
		accordionBtn.forEach(function (el) {
			el.classList.remove('accordionTitleActive');

			allTexts.forEach(function (el) {
				el.classList.remove('accordion-show');
			})

			accIcon.forEach(function (el) {
				el.classList.remove('anime');
			})

		})

		targetText.add('accordion-show');
		target.classList.add('accordionTitleActive');
		targetAccIcon.classList.add('anime');
	}
}


//tabs section
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.content-body');
function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add('tab-active');
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show-active');
}

function removeBorder() {
  tabItems.forEach(item => {
    item.classList.remove('tab-active');
  });
}
// Remove show class from all content items
function removeShow() {
  tabContentItems.forEach(item => {
    item.classList.remove('show-active');
  });
}
// Listen for tab item click
tabItems.forEach(item => {
  item.addEventListener('click', selectItem);
});

// relief tabs
const homeTabBtns = document.querySelectorAll('.home-tabs__wrapper-btns-btn');
const homeTabItems = document.querySelectorAll('.home-tabs__wrapper-content-img');

function selectHomeTabContents(e) {
  removeActiveHomeTabClass();
  removeActiveHomeTabItemClass();
  this.classList.add('active');
  const homeTabContentItems = document.querySelector(`#${this.id}-content`);
  homeTabContentItems.classList.add('active');
}

homeTabBtns.forEach(tabbtn => tabbtn.addEventListener('click', selectHomeTabContents));

const removeActiveHomeTabClass = () => {
  homeTabBtns.forEach(tabbtn => {
    tabbtn.classList.remove('active')
  })
}
const removeActiveHomeTabItemClass = () => {
  homeTabItems.forEach(homeTabItem => {
    homeTabItem.classList.remove('active')
  })
}
// product counter scripts 
const counter = document.getElementById("product__counter");
if(counter){
setInterval(() => {
	//set day hours
	const d = new Date();
	const setTimeOfDay = d.getHours();
	//set day hours
	let	date1 = new Date().setHours(08,59,59) 
	let date2 =  new Date().setHours(14,59,59) 
	let date3 = new Date().setHours(32,59,59) 

  const currentDate = d;
  const timeBetweenDates1 = Math.ceil(( date1 - currentDate ) / 1000)
	const timeBetweenDates2 = Math.ceil(( date2 - currentDate ) / 1000);
	const timeBetweenDates3 = Math.ceil(( date3 - currentDate ) / 1000)
			if(setTimeOfDay >= 0 && setTimeOfDay < 9){
				if(timeBetweenDates1 < 0) return
				countTimer(timeBetweenDates1)
			}
			else if(setTimeOfDay >= 9 && setTimeOfDay < 15){
				if(timeBetweenDates2 < 0) return
				countTimer(timeBetweenDates2)
			}
			else{
				if(timeBetweenDates3 < 0) return
				countTimer(timeBetweenDates3)
			}
	}, 1000)
//add zeros
function addZero(num) {
    return ("0" + parseInt(num)).substr(-2);
}
function countTimer(time){
	const seconds = addZero(time % 60)
	const minutes = addZero(Math.floor(time / 60) % 60)
	const hours = addZero(Math.floor(time / 3600))
  	counter.innerHTML = "<div class='inner'>"+hours+"<span class='dots'>:</span></div><div class='inner'>"+minutes+"<span class='dots'>:</span></div><div class='inner'>"+seconds+"</div>";
}
}


const closeBtn = document.querySelector(".close__btn");
const flipBar = document.querySelector(".flip-container");

if(flipBar){
window.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    if(scroll > 699){ flipBar.classList.add("fixed-bottom")
    }
    else if(scroll < 500) {flipBar.classList.remove("fixed-bottom")
  }
  });
if(closeBtn){
	closeBtn.addEventListener("click", ()=>{
		localStorage.setItem("className", "show-flip");
		let classFromLocalStorage = localStorage.getItem("className");
		if (!classFromLocalStorage){
			flipBar.classList.add("show-flip")
		}
		flipBar.classList.remove("show-flip");
	});
}


const checkCookie = () => {
	let classFromLocalStorage = localStorage.getItem("className");
	if(classFromLocalStorage == "show-flip") {
		flipBar.classList.add("hide");
		flipBar.classList.remove("show-flip");
	} else {
		flipBar.classList.add("show-flip");
		flipBar.classList.remove("hide");
	}
}

window.onload = () =>{
	setTimeout(()=>{
		checkCookie();
	},1000)
}


// clear localStorage after some time 
let  minute = 3; // to clear the localStorage after 1 minute
               // (if someone want to clear after 1 hour multiply by extra 60 or if you want to add more minuttes simply add 10 infront of minute variable)
let now = new Date().getTime();
var setupTime = localStorage.getItem('setupTime');
if (setupTime == null) {
    localStorage.setItem('setupTime', now)
} else {
    if(now-setupTime > minute*60*1000) {
       localStorage.removeItem("className");
        localStorage.setItem('setupTime', now);
    }
}

setInterval(() => {
	//set day hours
	const d = new Date();
	const setTimeOfDay = d.getHours();
	//set day hours
	let	date1 = new Date().setHours(08,59,59) 
	let date2 =  new Date().setHours(14,59,59) 
	let date3 = new Date().setHours(32,59,59) 

  const currentDate = d;
  const timeBetweenDates1 = Math.ceil(( date1 - currentDate ) / 1000)
	const timeBetweenDates2 = Math.ceil(( date2 - currentDate ) / 1000);
	const timeBetweenDates3 = Math.ceil(( date3 - currentDate ) / 1000)
			if(setTimeOfDay >= 0 && setTimeOfDay < 9){
				if(timeBetweenDates1 < 0) return
				flipAllCards(timeBetweenDates1)
			}
			else if(setTimeOfDay >= 9 && setTimeOfDay < 15){
				if(timeBetweenDates2 < 0) return
				flipAllCards(timeBetweenDates2)
			}
			else{
				if(timeBetweenDates3 < 0) return
				flipAllCards(timeBetweenDates3)
			}
	}, 1000)


function flipAllCards(time) {
  const seconds = time % 60
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600)

  flip(document.querySelector("[data-hour-tens]"), Math.floor(hours / 10))
  flip(document.querySelector("[data-hour-ones]"), hours % 10)
  flip(document.querySelector("[data-minute-tens]"), Math.floor(minutes / 10))
  flip(document.querySelector("[data-minute-ones]"), minutes % 10)
  flip(document.querySelector("[data-second-tens]"), Math.floor(seconds / 10))
  flip(document.querySelector("[data-second-ones]"), seconds % 10)
}

function flip(flipCard, newNumber){

	const topHalf = flipCard.querySelector(".top");
	const startNumber = parseInt(topHalf.textContent);
	if(newNumber === startNumber) return 

	const bottomHalf = flipCard.querySelector(".bottom");
	const topFlip = document.createElement("div");
	topFlip.classList.add("top-flip");
	const bottomFlip = document.createElement("div");
	bottomFlip.classList.add("bottom-flip");


topHalf.textContent = startNumber;
bottomHalf.textContent = startNumber;
topFlip.textContent = startNumber;
bottomFlip.textContent = newNumber;



topFlip.addEventListener("animationstart", e =>{
	topHalf.textContent = newNumber;
})
topFlip.addEventListener("animationend", e =>{
	topFlip.remove();
})

bottomFlip.addEventListener("animationend", e =>{
	bottomHalf.textContent = newNumber;
	bottomFlip.remove();
})

flipCard.append(topFlip, bottomFlip);
}
}


//quantity selector
const qtyPlus = document.querySelector(".qty-plus")
const qtyMinus = document.querySelector(".qty-minus")
const qtyBreaksBullets = document.querySelectorAll(".qb__item");
qtyBreaksBullets.forEach((bullet, index) => bullet.addEventListener("DOMContentLoaded", addClassToItems(bullet, index)));

qtyPlus.addEventListener("click", ()=> {
		qtyBreaksBullets.forEach((bullet, index) =>{
				var qtyInputValue = document.querySelector(".qty-input").value;
				if(`bulletNum__${qtyInputValue}` == `bulletNum__${index}`){
					bullet.classList.add("bullet");
				} 
				else {
				bullet.classList.remove("bullet");
				}
		})
	});

qtyMinus.addEventListener("click", () =>{
		qtyBreaksBullets.forEach((bullet, index) =>{
					var qtyInputValue = document.querySelector(".qty-input").value -2;
					if(`bulletNum__${qtyInputValue}` == `bulletNum__${index}`){
						bullet.classList.add("bullet");
					} 
					else {
					bullet.classList.remove("bullet");
				}
		})
})

function addClassToItems(b, i){
b.classList.add(`bulletNum__${i}`);
}

function selectBullet() {
  removeBullet();

  this.classList.add("bullet");
	if(this.classList.contains("bulletNum__1")){
	 document.querySelector(".qty-input").value = +2;
	} else if( this.classList.contains("bulletNum__2")){
		 document.querySelector(".qty-input").value = +3;
	}else {
	 document.querySelector(".qty-input").value = 1;
	}
}

// Remove show class from all content items
function removeBullet() {
qtyBreaksBullets.forEach(item => {
    item.classList.remove("bullet");
  });
}
// Listen for tab item click
qtyBreaksBullets.forEach((item, index) => {
  item.addEventListener('click', selectBullet);
});