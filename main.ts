input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("f")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("r")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("l")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("b")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
