hummingbird.startHummingbird()
basic.forever(function () {
    hummingbird.setLED(ThreePort.One, 0)
    basic.pause(500)
    hummingbird.setLED(ThreePort.One, 0)
    basic.pause(500)
})
