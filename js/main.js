//-----------accordion-------------

(function(){
	var d = document,
	accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
	setAria,
	setAccordionAria,
	switchAccordion,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);
  
  skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  }

		setAriaAttr = function(el, ariaType, newProperty){
		el.setAttribute(ariaType, newProperty);
	};
	setAccordionAria = function(el1, el2, expanded){
		switch(expanded) {
      case "true":
      	setAriaAttr(el1, 'aria-expanded', 'true');
      	setAriaAttr(el2, 'aria-hidden', 'false');
      	break;
      case "false":
      	setAriaAttr(el1, 'aria-expanded', 'false');
      	setAriaAttr(el2, 'aria-hidden', 'true');
      	break;
      default:
				break;
		}
	};
switchAccordion = function(e) {
	e.preventDefault();
	var thisAnswer = e.target.parentNode.nextElementSibling;
	var thisQuestion = e.target;
	if(thisAnswer.classList.contains('is-collapsed')) {
		setAccordionAria(thisQuestion, thisAnswer, 'true');
	} else {
		setAccordionAria(thisQuestion, thisAnswer, 'false');
	}
  	thisQuestion.classList.toggle('is-collapsed');
  	thisQuestion.classList.toggle('is-expanded');
		thisAnswer.classList.toggle('is-collapsed');
		thisAnswer.classList.toggle('is-expanded');
 	
  	thisAnswer.classList.toggle('animateIn');
	};
	for (var i=0,len=accordionToggles.length; i<len; i++) {
		if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();
  
/*------------tabs (Переключатель)------------*/

const tabItems = Array.from(document.querySelectorAll('.tab-item'))
const contentItems = Array.from(document.querySelectorAll('.content-item'))

const clearActiveClass = (element, className = 'is-active') => {
  element.find(item => item.classList.remove(`${ className }`))
}

const setActiveClass = (element, index, className = 'is-active') => {
  element[index].classList.add(`${ className }`)
}

const checkoutTabs = (item, index) => {
  item.addEventListener('click', () => {
    
    if (item.classList.contains('is-active')) return
  
    clearActiveClass(tabItems)
    clearActiveClass(contentItems)
    
    setActiveClass(tabItems, index)
    setActiveClass(contentItems, index)
  })
}

tabItems.forEach(checkoutTabs);

/*------------tabs-lesson (Переключатель-уроки)------------*/

var tabNavs = document.querySelectorAll(".nav-tab");
var tabPanes = document.querySelectorAll(".tab-pane");

for (var i = 0; i < tabNavs.length; i++) {

  tabNavs[i].addEventListener("click", function(e){
    e.preventDefault();
    var activeTabAttr = e.target.getAttribute("data-tab");

    for (var j = 0; j < tabNavs.length; j++) {
      var contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("active");
        tabPanes[j].classList.add("active"); 
      } else {
        tabNavs[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
      }
    };
  });
}

// ----------------spoiler-----------------------

function view(n) {
  style = document.getElementById(n).style;
  style.display = (style.display == 'block') ? 'none' : 'block';
}

/*------------data------------*/

let today = new Date();
let tomorrow = new Date(today.getTime() + (48 * 60 * 60 * 1000));
let dayTomorrow = tomorrow.getDate();
let month = tomorrow.getMonth();

// Преобразуем месяца
switch (month)
{
  case 0: fMonth="января"; break;
  case 1: fMonth="февраля"; break;
  case 2: fMonth="марта"; break;
  case 3: fMonth="апреля"; break;
  case 4: fMonth="мая"; break;
  case 5: fMonth="июня"; break;
  case 6: fMonth="июля"; break;
  case 7: fMonth="августа"; break;
  case 8: fMonth="сентября"; break;
  case 9: fMonth="октября"; break;
  case 10: fMonth="ноября"; break;
  case 11: fMonth="декабря"; break;
}

document.querySelector('.main-form__data').innerHTML = dayTomorrow + " " + fMonth;