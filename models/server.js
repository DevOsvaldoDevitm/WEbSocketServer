import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { socketController } from '../sockets/controller.js';


class Servidor{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.server = createServer(this.app);
        this.io = new Server(this.server);

        this.paths = {

        }

        // Middlewares
        this.middlewares();
        
        // Rutas de mi aplicacion
        this.routes();
        
        // Sockets
        this.sockets();
    }

    middlewares(){
        // CORS
        this.app.use(cors());

        // Directorio publico
        this.app.use( express.static( 'public' ));
    
    }


    routes(){
        // this.app.use(this.paths.auth, authRouter);
        
    }
    sockets(){
        this.io.on('connection',socketController)
    }

    listen(){
        
    this.server.listen(this.port, ()=>{
        console.log('Servidor corriendo correctamente en el puerto', this.port);
    })
    }

}

export default Servidor;