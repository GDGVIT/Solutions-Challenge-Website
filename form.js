const number = document.querySelector('#number');
const i = document.querySelector('i');
const form = document.querySelector('form');
const email = document.querySelector('#email');
const regno = document.querySelector('#regNo');
const name = document.querySelector('#name');
const button = document.querySelector(".submit");
const  loader = document.querySelector(".loader");
const success = document.querySelector(".success");
const ok = document.querySelector('#ok');

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
        loader.style.display = "block";
        number.classList.remove('inpError');
        name.classList.remove('inpError');
        email.classList.remove('inpError');
        regno.classList.remove('inpError');

        const data = {
            name: name.value,
            registrationNumber: regno.value,
            phoneNumber: number.value,
            emailAddress: email.value,
            deviceID: '',
            eventName: "SolutionsChallenge"
        };
        grecaptcha.ready(() =>{
            grecaptcha.execute("6Lf5ddUUAAAAAKIJ5kmvXFeoqZ-VFtKgSBzaUXTk", {action : '/'})
            .then((token) => {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append('g-recaptcha-response', token);
            
                var json = JSON.stringify(data);
            
                var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: json,
                mode: 'cors'    
                };
            
                fetch("https://dsc-eventsreg.herokuapp.com/api/v1/participants/register", requestOptions)
                .then(response => {  response.text();
                                     loader.style.display = "none";
                                     swal("SUCCESS", "You're all set !", "success");
                                    })
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

