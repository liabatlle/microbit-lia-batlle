def askL2():
    global finished, leg2
    finished = 0
    while finished == 0:
        if input.button_is_pressed(Button.B):
            leg2 += 1
            basic.show_string("" + str((leg2)))
        if input.button_is_pressed(Button.A):
            leg2 += -1
            basic.show_string("" + str((leg2)))
        if input.pin_is_pressed(TouchPin.P0):
            finished = 1

def askL1():
    global finished, leg1
    finished = 0
    while finished == 0:
        if input.button_is_pressed(Button.B):
            leg1 += 1
            basic.show_string("" + str((leg1)))
        if input.button_is_pressed(Button.A):
            leg1 += -1
            basic.show_string("" + str((leg1)))
        if input.pin_is_pressed(TouchPin.P0):
            finished = 1
finished = 0
leg2 = 0
leg1 = 0
basic.show_icon(IconNames.LEFT_TRIANGLE)
leg1 = 0
leg2 = 0
basic.pause(1000)
basic.show_string("C1 ?")
askL1()
basic.pause(1000)
basic.show_string("C2 ?")
askL2()
basic.show_string("hip= ")
hypotenuse = Math.sqrt(leg1 ** 2 + leg2 ** 2)
basic.show_string("" + str((hypotenuse)))
