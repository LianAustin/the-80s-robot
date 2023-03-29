hummingbird.startHummingbird()
basic.forever(function () {
    hummingbird.setLED(ThreePort.One, 70)
    basic.pause(500)
    hummingbird.setLED(ThreePort.One, 0)
    basic.pause(500)
    hummingbird.setTriLED(
    TwoPort.One,
    100,
    0,
    0
    )
    basic.pause(500)
})
basic.forever(function () {
    hummingbird.setTriLED(
    TwoPort.One,
    0,
    100,
    0
    )
    basic.pause(500)
    hummingbird.setTriLED(
    TwoPort.One,
    0,
    0,
    100
    )
    basic.pause(500)
})
