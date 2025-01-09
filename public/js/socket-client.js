
// Referncias del HTMl

const lblOnline = document.querySelector('#lblOnline');
const lblOfline  = document.querySelector('#lblOfline');
const txtMensage = document.querySelector('#txtMensage');
const btnEnviar  = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () =>{
    // console.log('Conectado')

    lblOfline.style.display = 'none';
    lblOnline.style.display = '';
});
socket.on('disconnect', () =>{
    console.log('Desconectado del servidor');
    lblOnline.style.display = 'none';
    lblOfline.style.display = '';
});

socket.on('enviar-mensaje', (payload)=>{
    console.log(payload)
});

btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensage.value;
    const payload = {
        mensaje,
        id: '1233164',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload, (id)=>{
        console.log('Desde el server', id );
    });

});
