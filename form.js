const number = document.querySelector('#number');
const i = document.querySelector('i');
const form = document.querySelector('.form');
const email = document.querySelector('#email');
const regno = document.querySelector('#regNo');
const name = document.querySelector('#name');

form.addEventListener('submit', (e)=> {
    // e.preventDefault();

    if(name.value == '')
    {
        document.querySelector('.nameIcon').classList.remove('error');
        name.classList.add('inpError');
        e.preventDefault();
        console.log('invalid');
    }

    if(regno.value == '')
    {
        document.querySelector('.regIcon').classList.remove('error');
        regno.classList.add('inpError');
        e.preventDefault();
        console.log('invalid');
    }

    if(number.value.length != 10)
    {
        document.querySelector('.numIcon').classList.remove('error');
        number.classList.add('inpError');
        e.preventDefault();
        console.log('invalid');
    }

    if(!isEmail(email.value))
    {
        document.querySelector('.mailIcon').classList.remove('error');
        email.classList.add('inpError');
        e.preventDefault();
        console.log('invalid');
    }
});

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}