import * as Caman from '../js/filter.js'

const tag_img = '#img_ori';	

  var vintage = () => {
	Caman("#img_ori", function () {
		this.greyscale();
		this.contrast(5);
		this.noise(3);
		this.sepia(100);
		this.channels({red:8,blue:2,green:4});
		this.gamma(0.87);
		this.render();
	});
	}
  let lomo = () => {
    Caman(tag_img, function () {
      this.brightness(15);
      this.exposure(15);
      this.curves("rgb", [0, 0], [200, 0], [155, 255], [255, 255]);
      this.saturation(-20);
      this.gamma(1.8);
      this.render();
    });
  }
  let clarity = () => {
    Caman(tag_img, function () {
      this.vibrance(20);
      this.curves("rgb", [5, 0], [130, 150], [190, 220], [250, 255]);
      this.sharpen(15);
      this.vignette("45%", 20);
      this.render();
    });
  }
  let sinCity = () => {
    Caman(tag_img, function () {
      this.contrast(100);
      this.brightness(15);
      this.exposure(10);
      this.posterize(80);
      this.clip(30);
      this.greyscale();
      this.render();
    });
  }
  let sumrise = () => {
    Caman(tag_img, function () {
      this.exposure(3.5);
      this.saturation(-5);
      this.vibrance(50);
      this.sepia(60);
      this.colorize("#e87b22", 10);
      this.channels({ red: 8, blue: 8 });
      this.contrast(5);
      this.gamma(1.2);
      this.render();
    });
  }
  let orangePeel = () => {
    Caman(tag_img, function () {
      this.curves("rgb", [0, 0], [100, 50], [140, 200], [255, 255]);
      this.vibrance(-30);
      this.saturation(-30);
      this.colorize("#ff9000", 30);
      this.contrast(-5);
      this.render();
    });
  }
  let love = () => {
    Caman(tag_img, function () {
      this.brightness(5);
      this.exposure(8);
      this.contrast(4);
      this.colorize("#c42007", 30);
      this.vibrance(50);
      this.render();
    });
  }
  let grungy = () => {
    Caman(tag_img, function () {
      this.gamma(1.5);
      this.clip(25);
      this.saturation(-60);
      this.contrast(5);
      this.noise(5);
      this.render();
    });
  }
  let jarques = () => {
    Caman(tag_img, function () {
      this.saturation(-35);
      this.curves("b", [20, 0], [90, 120], [186, 144], [255, 230]);
      this.curves("r", [0, 0], [144, 90], [138, 120], [255, 255]);
      this.curves("g", [10, 0], [115, 105], [148, 100], [255, 248]);
      this.curves("rgb", [0, 0], [120, 100], [128, 140], [255, 255]);
      this.render();
    });
  }
  let pinhole = () => {
    Caman(tag_img, function () {
      this.greyscale();
      this.sepia(10);
      this.exposure(10);
      this.contrast(15);
      this.render();
    });
  }
  let glowingSun = () => {
    Caman(tag_img, function () {
      this.brightness(10);
      this.newLayer(function () {
        this.setBlendingMode("multiply");
        this.opacity(80);
        this.copyParent();
        this.filter.gamma(0.8);
        this.filter.contrast(50);
        return this.filter.exposure(10)
      });
      this.render();
    });
  }
  let nostalgia = () => {
    Caman(tag_img, function () {
      this.saturation(20);
      this.gamma(1.4);
      this.greyscale();
      this.contrast(5);
      this.sepia(100);
      this.channels({ red: 8, blue: 2, green: 4 });
      this.gamma(0.8);
      this.contrast(5);
      this.exposure(10);
      this.newLayer(function () {
        this.setBlendingMode("overlay");
        this.copyParent();
        this.opacity(55);
        return this.filter.stackBlur(10)
      });
      this.vignette("50%", 30);
      this.render();
    });
  }

export { vintage, lomo, clarity, sinCity }