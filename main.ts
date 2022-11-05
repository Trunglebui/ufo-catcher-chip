basic.showString("on")
led.enable(false)
let X = 180
let Y = 100
ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, X)
ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, Y)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, X)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P2, Y)
    if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP3P4, ModuleWorld_Analog.enRocker.Up)) {
        Y = Y + 1
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP3P4, ModuleWorld_Analog.enRocker.Down)) {
        Y = Y - 1
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP3P4, ModuleWorld_Analog.enRocker.Left)) {
        X = X - 1
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP3P4, ModuleWorld_Analog.enRocker.Right)) {
        X = X + 1
    }
})
basic.forever(function () {
    if (X < 150) {
        X = 150
    } else if (X < 207) {
        X = 207
    } else if (Y < 70) {
        Y = 70
    } else if (Y > 140) {
        Y = 140
    }
})
