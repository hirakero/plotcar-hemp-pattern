def 三角1():
    eureka_plotter_car.plottercar_pen(pen_onoff.DOWN)
    eureka_plotter_car.plottercar_1sou_forward(2)
    eureka_plotter_car.plottercar_pen(pen_onoff.UP)
    eureka_plotter_car.plottercar_L_cycle(150)
    eureka_plotter_car.plottercar_pen(pen_onoff.DOWN)
    eureka_plotter_car.plottercar_1sou_forward(Math.sqrt(3) * 2)
    eureka_plotter_car.plottercar_pen(pen_onoff.UP)
    eureka_plotter_car.plottercar_L_cycle(150)
    eureka_plotter_car.plottercar_pen(pen_onoff.DOWN)
    eureka_plotter_car.plottercar_1sou_forward(2)
    eureka_plotter_car.plottercar_pen(pen_onoff.UP)
def 三角2():
    for index in range(3):
        三角1()
        eureka_plotter_car.plottercar_R_cycle(60)

def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def 正三角形(長さ: number):
    for index2 in range(3):
        eureka_plotter_car.plottercar_pen(pen_onoff.DOWN)
        eureka_plotter_car.plottercar_1sou_forward(長さ)
        eureka_plotter_car.plottercar_pen(pen_onoff.UP)
        eureka_plotter_car.plottercar_R_cycle(120)
def 六角():
    for index3 in range(6):
        三角2()
        eureka_plotter_car.plottercar_1sou_forward(2)
        eureka_plotter_car.plottercar_R_cycle(120)
        eureka_plotter_car.plottercar_1sou_forward(2)
        eureka_plotter_car.plottercar_R_cycle(180)

def on_button_pressed_ab():
    pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

eureka_plotter_car.microbit_version_info(microbit_version.VERSION1)
六角()

def on_forever():
    pass
basic.forever(on_forever)
