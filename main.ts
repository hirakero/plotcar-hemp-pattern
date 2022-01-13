function 六芒星 () {
    eureka_plotter_car.plottercar_L_cycle(30)
    正三角形(1)
    eureka_plotter_car.plottercar_R_cycle(30)
    eureka_plotter_car.plottercar_1sou_forward(Math.sqrt(3) * 4)
    eureka_plotter_car.plottercar_R_cycle(150)
    正三角形(1)
}
function 三角1 () {
    eureka_plotter_car.plottercar_pen(pen_onoff.down)
    eureka_plotter_car.plottercar_1sou_forward(2)
    eureka_plotter_car.plottercar_pen(pen_onoff.up)
    eureka_plotter_car.plottercar_L_cycle(150)
    eureka_plotter_car.plottercar_pen(pen_onoff.down)
    eureka_plotter_car.plottercar_1sou_forward(Math.sqrt(3) * 2)
    eureka_plotter_car.plottercar_pen(pen_onoff.up)
    eureka_plotter_car.plottercar_L_cycle(150)
    eureka_plotter_car.plottercar_pen(pen_onoff.down)
    eureka_plotter_car.plottercar_1sou_forward(2)
    eureka_plotter_car.plottercar_pen(pen_onoff.up)
}
function 三角2 () {
    for (let index = 0; index < 3; index++) {
        三角1()
        eureka_plotter_car.plottercar_R_cycle(60)
    }
}
input.onButtonPressed(Button.A, function () {
	
})
function 正三角形 (長さ: number) {
    for (let index = 0; index < 3; index++) {
        eureka_plotter_car.plottercar_pen(pen_onoff.down)
        eureka_plotter_car.plottercar_1sou_forward(長さ)
        eureka_plotter_car.plottercar_pen(pen_onoff.up)
        eureka_plotter_car.plottercar_R_cycle(120)
    }
}
function 六角 () {
    for (let index = 0; index < 6; index++) {
        三角2()
        eureka_plotter_car.plottercar_1sou_forward(2)
        eureka_plotter_car.plottercar_R_cycle(120)
        eureka_plotter_car.plottercar_1sou_forward(2)
        eureka_plotter_car.plottercar_R_cycle(180)
    }
}
function 五芒星 () {
    for (let index = 0; index < 5; index++) {
        eureka_plotter_car.plottercar_pen(pen_onoff.down)
        eureka_plotter_car.plottercar_1sou_forward(5)
        eureka_plotter_car.plottercar_pen(pen_onoff.up)
        eureka_plotter_car.plottercar_R_cycle(144)
    }
}
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
eureka_plotter_car.microbit_version_info(microbit_version.Version1)
六角()
basic.forever(function () {
	
})
