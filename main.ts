// Default axis
input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
})
input.onButtonPressed(Button.AB, function () {
    steps = steps * 2
    basic.showNumber(steps)
})
input.onButtonPressed(Button.B, function () {
    steps = 0
    distance = 0
    basic.showString("Reset")
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
let distance = 0
let steps = 0
// Example: 0.5 meters per step
let stepLength = 2
// Default axis
let axis = "Y"
