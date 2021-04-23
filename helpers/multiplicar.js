const fs = require ('fs');
const colors = require('colors');



const crearArchivo = async(base,listar,hasta)=>{
   try{
       
    
    let salida = '';
    let consola ='';

        for(let i=1;i<=hasta;i++){
            salida +=`${([i])} X ${base} = ${[i]*base}\n` 
            consola +=`${([i])} ${'X'.brightGreen.bold} ${base} ${'='.brightGreen} ${[i]*base}\n` 

            }
           
            if(listar){
                console.log('Tabla de',colors.brightGreen (base))
                console.log(consola)
                
            }
               
      
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida, (err)=>{
           if (err) throw err;
        });
         
         return('Exitoso'.italic.bold)

   }

   catch(err){
       throw err

   }
   


    

     
}

    module.exports={
        crearArchivo
    }