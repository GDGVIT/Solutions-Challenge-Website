const number = document.querySelector('#number');
const i = document.querySelector('i');
const form = document.querySelector('form');
const email = document.querySelector('#email');
const regno = document.querySelector('#regNo');
const name = document.querySelector('#name');
const button = document.querySelector(".submit");


//FORM VALIDATION 

button.addEventListener('click', (e)=> {
     e.preventDefault();
    let i = 0;
    if(name.value == '')
    {
        // document.querySelector('.nameIcon').classList.remove('error');
        name.classList.add('inpError');
        e.preventDefault();
        console.log('invalid');
    }
    else{
        i+=1;
    }

    if(regno.value == '')
    {
        // document.querySelector('.regIcon').classList.remove('error');
        regno.classList.add('inpError');
        e.preventDefault();
        console.log('invalid');
    }
    else{
        i+=1;
    }

    if(number.value.length != 10)
    {
        // document.querySelector('.numIcon').classList.remove('error');
        number.classList.add('inpError');
        e.preventDefault();
        console.log('invalid');
    }
    else{
        i+=1;
    }

    if(!isEmail(email.value))
    {
        // document.querySelector('.mailIcon').classList.remove('error');
        email.classList.add('inpError');
        e.preventDefault();
        console.log('invalid');
    }
    else{
        i+=1;
    }

    console.log(i);

    if(i==4)
    {
        number.classList.remove('inpError');

        const data = {
            Name: name.value,
            RegistrationNo: regno.value,
            Number: number.value,
            Email: email.value
        };
        grecaptcha.ready(() =>{
            grecaptcha.execute("6Lf5ddUUAAAAAKIJ5kmvXFeoqZ-VFtKgSBzaUXTk", {action : '/'})
            .then((token) => {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
            
                var json = JSON.stringify(data);
            
                var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: json,
                mode: 'cors'    
                };
            
                fetch("https://dsc-eventsreg.herokuapp.com/api/v1/participants/register", requestOptions)
                .then(response => response.text())
                .then((result) => {console.log(result); 
        
                    form.reset()})
                .catch((error) => {console.log('error', error);}); 
            })
        })
                
    }

});

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

