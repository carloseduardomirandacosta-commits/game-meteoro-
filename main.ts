input.onButtonPressed(Button.A, function () {
    Nave.change(LedSpriteProperty.X, -1)
})
function CrearMeteorito2 () {
    Meteorito = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        Meteorito.change(LedSpriteProperty.Y, 1)
    }
}
input.onButtonPressed(Button.B, function () {
    Nave.change(LedSpriteProperty.X, 1)
})
let Meteorito: game.LedSprite = null
let Nave: game.LedSprite = null
Nave = game.createSprite(2, 4)
let Puntos = 0
basic.forever(function () {
    if (Meteorito.isTouching(Nave)) {
        game.setScore(Puntos)
        game.gameOver()
        if (Meteorito.isTouching(null)) {
            Puntos += 1
            Meteorito.delete()
            CrearMeteorito2()
        }
    }
})
