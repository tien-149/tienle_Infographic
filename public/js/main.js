let seeMoreButtons = document.querySelectorAll(".see-more"),
    popOver = document.querySelector(".popover");


//setting up waypoints
var beerOneWaypoint = new Waypoint({
    element: document.getElementById('beer1'),
    offset:300,
    handler: function(direction) {
      console.log('Scrolled to waypoint!');

      let svg = this.element.firstElementChild.contentDocument;

      svg.querySelector("#beer").classList.add("yellow");

      this.element.innerHTML += '<h1>Added with beerOne waypoint</h1>';
    }
});

var beerTwoWaypoint = new Waypoint({
    element: document.getElementById('beer2'),
    offset:300,
    handler: function(direction) {
      console.log('Scrolled to waypoint!');
      this.element.innerHTML += '<p>Added with beerTwo waypoint</p>';
    }
});

var beerThreeWaypoint = new Waypoint({
    element: document.getElementById('beer3'),
    offset:300,
    handler: function(direction) {
      console.log('Scrolled to waypoint!');
      this.element.innerHTML += '<p>Added with beerTwo waypoint</p>';
    }
});


const theSVGWrapper = document.querySelector(".svg-wrapper");

// theSVGWrapper.addEventListener('mouseover', function(e){
//     console.log("A");
// });

//show the popover
function showPopover(data, el){
    popOver.querySelector(".ipa-rating").textContent = `IPA rating: ${data.IpaRating}`;
    popOver.querySelector(".ratings").textContent = `IPA rating: ${data.ratings}`;
    popOver.querySelector(".beer-description").textContent = data.description;

    popOver.classList.add('show-popover');

    el.appendChild(popOver);
}

function fetchData(){
    let url = `/info/${this.dataset.target}`;
    let targetElement = this;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        showPopover(data, targetElement);
    })
    .catch(function(error) {
        console.log(error);
    })
};

seeMoreButtons.forEach(button => {
    button.addEventListener('click', fetchData);
});