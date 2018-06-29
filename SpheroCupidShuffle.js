async function startProgram() {
	setMainLed({ r: 187, g: 255, b: 0 });
	setMainLed({ r: 255, g: 4, b: 87 });
	for (var _i0 = 0; _i0 < 4; ++_i0) {
		setStabilization(true);
		await roll(270, 42, 3.5);
		setStabilization(true);
		await roll(90, 42, 3.5);
		setStabilization(true);
		await spin(1440, 3.5);
		setStabilization(true);
		await rawMotor(255, 0, 3);
		setStabilization(true);
		resetAim();
		await fade({ r: 0, g: 255, b: 11 }, { r: 68, g: 0, b: 255 }, 0);
		await fade({ r: 2, g: 0, b: 255 }, { r: 255, g: 0, b: 217 }, 0);
		await delay(0.025);
	}
}