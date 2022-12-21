
export const socketComunicate = (io) => {

    const nameSpaceOrders = io.of('/comunicado-socket');

    nameSpaceOrders.on('connection', socket => {
        
        console.log('USER CONECTED');

        socket.on('position', (data) => {

            

            nameSpaceOrders.emit(`position/${data.idcomunicado}`, 
                                            { latitud: data.latitud, 
                                            longitude: data.longitud });
            
        });

        socket.on('disconnect', (data) => {
            console.log('USER DISCONNECT');
        });

    });

} 

