//Menu mobile
const btnMenu = document.querySelector('#btn-menu');

btnMenu.addEventListener('click', (e)=>{
    e.preventDefault();
    const menu= document.querySelector('.mobile-links');
    menu.classList.toggle('hidden');
});

//TypeJS
const typed = new Typed('.typed', {
    strings: ['Roberto Antonio...']
});

//Scroll a la barra de navegación
const ubicacionPrincipal = window.scrollY;
const nav = document.querySelector('#nav');

window.addEventListener('scroll', ()=>{
    const ubicacionActual = window.scrollY;

    console.log(scrollY);

    if(ubicacionPrincipal >= ubicacionActual){
        nav.style.top = "0px";
    }else{
        nav.style.top = "-100px"
    }
});

//Script al formulario

document.addEventListener('DOMContentLoaded', ()=>{
    //Variables

    const email = {
        nombres: '',
        email: '',
        mensaje: ''
    }

    const form = document.querySelector('#form');
    const inputNombres = document.querySelector('#nombres');
    const inputEmail = document.querySelector('#email');
    const inputMensaje = document.querySelector('#mensaje');
    const btnSubmit = document.querySelector('#form button[type="submit"]')


    //Eventos

    form.addEventListener('submit', validarForm);
    inputNombres.addEventListener('input', validarInput);
    inputEmail.addEventListener('input', validarInput);
    inputMensaje.addEventListener('input', validarInput);

    //Funciones 

    //validar inputs
    function validarInput(e){
        if(e.target.value.trim() === ''){
            alertaError(`*Campo obligatorio*`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarCorreo();
            return;
        };

        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            alertaError(`*El email es incorrecto*`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarCorreo();
            return;
        };

        borrarAlerta(e.target.parentElement);
        email[e.target.name] = e.target.value.trim().toLowerCase();
        comprobarCorreo();

    };

    //Validar formulario
    function validarForm(e){
        e.preventDefault();

        cargarSpinner();

        resetFormulario();

            const enviado = document.createElement('DIV');
            if(enviado){
                enviado.remove();
            };
            enviado.classList.add('text-white', 'uppercase', 'text-center', 'font-bold');
            enviado.textContent = 'Enviado con éxito';

            form.appendChild(enviado);
            
            setTimeout(()=>{
                enviado.remove()
            },3500);     
    };
    


    //validar email
    function validarEmail(email){
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
      
    };

    //Alerta emergente
    function alertaError(mensaje, referencia){
        borrarAlerta(referencia);
        const error = document.createElement('DIV');
        error.classList.add('text-white', 'text-center', 'mt-2');
        error.textContent = mensaje;
        referencia.appendChild(error);

        setTimeout(() => {
            error.remove();
        }, 2100);
    };
 

    //Eliminar alerta

    function borrarAlerta(referencia){
        const alerta = referencia.querySelector('.text-white');
        if(alerta){
            alerta.remove();
        };
    };

    function comprobarCorreo(){
        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        };
         btnSubmit.classList.remove('opacity-50');
         btnSubmit.disabled = false;
    };

    //mostrar spinner
    function cargarSpinner(){
        const spinner = document.querySelector('#spinner');
        spinner.classList.add('flex');
        spinner.innerHTML = `
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
        `;
        form.appendChild(spinner);
    };

    //resetear form

    function resetFormulario() {
        // reiniciar el objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        form.reset();
        comprobarCorreo();
    }
});
