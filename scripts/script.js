let mon = document.querySelector('.bars__mon');
let tue = document.querySelector('.bars__tue');
let wed = document.querySelector('.bars__wed');
let thu = document.querySelector('.bars__thu');
let fri = document.querySelector('.bars__fri');
let sat = document.querySelector('.bars__sat');
let sun = document.querySelector('.bars__sun');
let bars = document.querySelectorAll('.bar');

fetch('data.json')
    .then(response => response.json())
    .then(data => getData(data))

function getData(data) {
    mon.style.height = `${data[0].amount * 3}px`;
    tue.style.height = `${data[1].amount * 3}px`;
    wed.style.height = `${data[2].amount * 3}px`;
    thu.style.height = `${data[3].amount * 3}px`;
    fri.style.height = `${data[4].amount * 3}px`;
    sat.style.height = `${data[5].amount * 3}px`;
    sun.style.height = `${data[6].amount * 3}px`; 

    bars.forEach(bar => {
        bar.style.setProperty('--prueba', 'none');
        
        bar.addEventListener("mouseover", () => {
            if(bar == mon) bar.setAttribute('data-content', `$${data[0].amount}`);
            if(bar == tue) bar.setAttribute('data-content', `$${data[1].amount}`);
            if(bar == wed) bar.setAttribute('data-content', `$${data[2].amount}`);
            if(bar == thu) bar.setAttribute('data-content', `$${data[3].amount}`);
            if(bar == fri) bar.setAttribute('data-content', `$${data[4].amount}`);
            if(bar == sat) bar.setAttribute('data-content', `$${data[5].amount}`);
            if(bar == sun) bar.setAttribute('data-content', `$${data[6].amount}`);
            bar.style.setProperty('--prueba', 'block');
        });

        bar.addEventListener("mouseout", () => {
            bar.setAttribute('data-content', "Hola");
            bar.style.setProperty('--prueba', 'none');
        });
    });
}