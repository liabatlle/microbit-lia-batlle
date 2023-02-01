function askL2() {
    
    finished = 0
    while (finished == 0) {
        if (input.buttonIsPressed(Button.B)) {
            leg2 += 1
            basic.showString("" + ("" + leg2))
        }
        
        if (input.buttonIsPressed(Button.A)) {
            leg2 += -1
            basic.showString("" + ("" + leg2))
        }
        
        if (input.pinIsPressed(TouchPin.P0)) {
            finished = 1
        }
        
    }
}

function askL1() {
    
    finished = 0
    while (finished == 0) {
        if (input.buttonIsPressed(Button.B)) {
            leg1 += 1
            basic.showString("" + ("" + leg1))
        }
        
        if (input.buttonIsPressed(Button.A)) {
            leg1 += -1
            basic.showString("" + ("" + leg1))
        }
        
        if (input.pinIsPressed(TouchPin.P0)) {
            finished = 1
        }
        
    }
}

let finished = 0
let leg2 = 0
let leg1 = 0
basic.showIcon(IconNames.LeftTriangle)
leg1 = 0
leg2 = 0
basic.pause(1000)
basic.showString("L1 ?")
askL1()
basic.pause(1000)
basic.showString("L2 ?")
askL2()
basic.showString("hypo= ")
let hypotenuse = Math.sqrt(leg1 ** 2 + leg2 ** 2)
basic.showString("" + ("" + hypotenuse))
