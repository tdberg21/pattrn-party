var accordions = document.getElementsByClassName('accordion-items');

console.log(accordions[0])
const handleClick = (event) => {
  event.preventDefault();
  console.log(event.target);
};

let i;

for (i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener('click', handleClick)
}

// $(accordions).each(accordion => {
//   $(accordion).on('click', handleClick)
// })
