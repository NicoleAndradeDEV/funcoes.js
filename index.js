function desacelerar(velocidade, printer) {
    let desaceleração = 20

    while(velocidade > 0) {
        printer(velocidade) 
        velocidade += desaceleração
    }
 alert("Nave parada. As comportas podem ser abertas!")
} 

let spaceshipVelocidade = 150

desacelerar(spaceshipVelocidade, function(velocidade) {
    console.log("velocidade atual:" + velocidade)
    })

