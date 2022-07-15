
function getCoins_prueba1(monto){
    nominaciones = [1,2,5,10,20,50]
    //nominaciones = [50,20,10,5,2,1]
    monedas = 0
    for ( i=nominaciones.length - 1; i >= 0; i--) {
        nominacion = nominaciones[i]

        monedas += parseInt(monto/nominacion)
        monto = monto%nominacion
        //console.log('pos:',nominaciones[i],' monedas: ',monedas,' monto: ',monto)
    }
    return monedas
}

function getCoins_prueba2(monto){
    nominaciones = [1,2,5,10,20,50]
    if(monto >= nominaciones[5]){
        queda = parseInt(monto/nominaciones[5])
        console.log(`Existe ${queda} billetes de 50`)
        monto = monto%nominaciones[5]
    }
    if(monto >= nominaciones[4]){
        queda = parseInt(monto/nominaciones[4])
        console.log(`Existe ${queda} billetes de 20`)
        monto = monto%nominaciones[4]
    }
    if(monto >= nominaciones[3]){
        queda = parseInt(monto/nominaciones[3])
        console.log(`Existe ${queda} billetes de 10`)
        monto = monto%nominaciones[3]
    }
    if(monto >= nominaciones[2]){
        queda = parseInt(monto/nominaciones[2])
        console.log(`Existe ${queda} billetes de 5`)
        monto = monto%nominaciones[2]
    }

    if(monto >= nominaciones[1]){
        queda = parseInt(monto/nominaciones[1])
        console.log(`Existe ${queda} billetes de 2`)
        monto = monto%nominaciones[1]
    }
    if(monto >= nominaciones[0]){
        queda = parseInt(monto/nominaciones[0])
        console.log(`Existe ${queda} billetes de 1`)
        monto = monto%nominaciones[0]
    }
}

function getCoins(monto){
    nominaciones = [1,2,5,10,20,50]
    for ( i=nominaciones.length - 1; i >= 0; i--) {
        
        if(monto >= nominaciones[i]){
            queda = parseInt(monto/nominaciones[i])
            console.log(`Dar ${queda} moneda de ${nominaciones[i]}`)
            monto = monto%nominaciones[i]
        }
    }
}
getCoins(51)
console.log('-----------------')
getCoins(3)
console.log('-----------------')
getCoins(5)
console.log('-----------------')
getCoins(16)
console.log('-----------------')
getCoins(100)


/*getCoins_prueba2(51)
console.log('-----------------')
getCoins_prueba2(3)
console.log('-----------------')
getCoins_prueba2(5)
console.log('-----------------')
getCoins_prueba2(16)
console.log('-----------------')
getCoins_prueba2(100)*/

/*console.log(getCoins_prueba1(51)) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins_prueba1(3)) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins_prueba1(5)) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins_prueba1(16)) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins_prueba1(100))// [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos*/