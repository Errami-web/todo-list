const btn = document.querySelector('#btn');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const error = document.querySelector('.error');

btn.addEventListener('click',click);
function click(e) {
    //e.preventDefault();
    if(email.value =='' || pass.value ==''){
        error.innerHTML="<h5>Plesse fill your Email and Password !</h5>"
        //setTimeout(()=>error.remove(),3000);
    }else{
        //window.open('todoList.html');
        location.href='todoList.html';
    }
}



//-------------




