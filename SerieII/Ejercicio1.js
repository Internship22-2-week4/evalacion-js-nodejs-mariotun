function nombre_archivos(archivos){
    aux=[]
    cont=1
    //archivo={}
    for( i=0;i<archivos.length;i++){
        //archivo={nombre:archivos[i],contador:cont}

        let cant_repetidos=archivos.filter(element => element==archivos[i]);
        //let cant_repetidos=archivos.filter(element => element==archivo.nombre);
        let encontrado=aux.includes(archivos[i]);
    
        if(encontrado){
            //update=`${archivos[i]}(${con++})`
            //archivos[i]+'c'
           // console.log(cant_repetidos.length)
           // if(cont<=cant_repetidos.length){
                aux.push(archivos[i]+`(${cont++})`)
                //aux.push(archivos[i]+`(${archivo.contador++})`)
             /*}else{
                cont=1
            }*/
            
        }else{
            aux.push(archivos[i])
        }

        /*for(x=0;x<aux.length;x++ ){
            if(aux[])
        }*/
    }
    return aux
}

files1 = ['photo', 'postcard', 'photo', 'photo', 'video']
files2 = ['file', 'file', 'file', 'game', 'game']
files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']

renombrados1=nombre_archivos(files1)
console.log(renombrados1)// ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

renombrados2=nombre_archivos(files2)
console.log(renombrados2)// ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

renombrados3=nombre_archivos(files3)
console.log(renombrados3)// ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']