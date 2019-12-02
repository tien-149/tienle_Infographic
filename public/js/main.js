(() => {
    // try to get the object and do stuff with it
    let seeMoreButtons = document.querySelectorAll('.see-more'),
        popOver = document.querySelector('.popover');

    const waypoint = new Waypoint({
        // what element is this waypoint looking at?
        // the handler will fire when it scrolls into view
        element: document.getElementById('beer2'),
        // what should we do when we hit the waypoint? this is up to you.
        // you can trigger animation, do an AJAX call... whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint!');
        //   this.element.innerHTML += `
        //   <p>Added this with Waypoint! We are scrolling ${direction}</p>`;
        }
    })

    const waypoint2 = new Waypoint({
        // what element is this waypoint looking at?
        // the handler will fire when it scrolls into view

        element: document.getElementById('beer3'),
        // what should we do when we hit the waypoint? this is up to you.
        // you can trigger animation, do an AJAX call... whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint 2!');
        },

        offset: 200
    })

    const svgGraphic = document.querySelector(".svg-wrapper");

    // svgGraphic.addEventListener("click", function() {
    //     console.log(this);
    // })
    // show the popover
    function showPopover(beerdata, el) {
        popOver.querySelector(".ipa-rating").textContent = `IPA Rating: ${beerdata.IpaRating}`;
        popOver.querySelector(".ratings").textContent = `IPA Rating: ${beerdata.ratings}`;
        popOver.querySelector(".beer-description").textContent = beerdata.description;

        popOver.classList.add('show-popover');

        el.appendChild(popOver);
    }

    // do our fetch call to the database
    function fetchData() {
        let url = `/info/${this.dataset.target}`,
            targetElement = this;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            showPopover(data, targetElement);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    seeMoreButtons.forEach(button => button.addEventListener("click", fetchData));
})();