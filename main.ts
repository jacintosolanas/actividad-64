input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(500)
    basic.showNumber(randint(1, 20))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(500)
    signo = randint(0, 1)
    if (signo == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
    basic.pause(1000)
    basic.showNumber(randint(1, 20))
})
let signo = 0
basic.showString("A= Naturales")
basic.pause(200)
basic.showString("B= Enteros")
