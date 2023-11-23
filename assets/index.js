const input = document.getElementById('input');
const btn = document.getElementById('button');
const ul = document.getElementById('todo');


function createTask() {
    const new = document.createElement('ul');
    new.textContent;
    ul.append(new);
    new.value='';
}

function checkTask {
    button.addEventListener('click', function(evt) {
        // в переменной eventTarget окажется элемент button, на который мы кликнули
        const eventTarget = evt.target;
        eventTarget.setAttribute('disabled', true);
    });
    
    ul.addEventListener('click', function(evt) {
    if (evt.target.button === 'BUTTON') {
    }
    });

    new.classList.toogle('active');

    button.addEventListener('click' , function() {
        console.log('click');
    })
}