input.onGesture(Gesture.ScreenUp, function () {
    radio.sendString("b")
    basic.showLeds(`
        . # . . .
        . # . . .
        . # # # .
        . # . # .
        . # # # .
        `)
    music.play(music.stringPlayable("C5 B A G F E D C ", 333), music.PlaybackMode.UntilDone)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("l")
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # # # .
        `)
    music.play(music.stringPlayable("C5 B A G F E D C ", 333), music.PlaybackMode.UntilDone)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendString("f")
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # . . .
        `)
    music.play(music.stringPlayable("C5 B A G F E D C ", 333), music.PlaybackMode.UntilDone)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("c")
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # # .
        `)
    music.play(music.stringPlayable("C5 B A G F E D C ", 333), music.PlaybackMode.UntilDone)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("r")
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # . .
        . # . . .
        . # . . .
        `)
    music.play(music.stringPlayable("C5 B A G F E D C ", 333), music.PlaybackMode.UntilDone)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("r")
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # . .
        . # . . .
        . # . . .
        `)
    music.play(music.stringPlayable("C5 B A G F E D C ", 333), music.PlaybackMode.UntilDone)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("r")
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # . .
        . # . . .
        . # . . .
        `)
    music.play(music.stringPlayable("C5 B A G F E D C ", 333), music.PlaybackMode.UntilDone)
    basic.clearScreen()
})
