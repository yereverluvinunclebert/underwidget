/*global hourHand, backgroundCog, backgroundCog2, bigCog, bigCog2, smallCog, wheel */

/*properties
    floor, getHours, getMinutes, interval, onTimerFired, rotation, ticking
*/
var currIcon = "Resources/clock-dock.png";
var lock = "Resources/lock.mp3";
var steam = "Resources/steamsound.mp3";
var winding = "Resources/winding.mp3";
var cogrotation = 0;
var scale	 = Number(preferences.sizePref.value) / 100;

//==============================
// resizing variables
//==============================

    var mainWindowWidthDefault =     mainWindow.width;
    var mainWindowHeightDefault =     mainWindow.height;
    var mainWindowhoffsetDefault =     mainWindow.hoffset;
    var mainWindowvoffsetDefault =     mainWindow.voffset;

    var darknesshoffsetDefault = darkness.hoffset;
    var darknessvoffsetDefault = darkness.voffset;
    var darknesswidthDefault = darkness.width;
    var darknessheightDefault = darkness.height;

    var backgroundCoghoffsetDefault = backgroundCog.hoffset ;
    var backgroundCogvoffsetDefault =  backgroundCog.voffset ;
    var backgroundCogwidthDefault = backgroundCog.width ;
    var backgroundCogheightDefault = backgroundCog.height ;
    var backgroundCoghRegistrationPointDefault = backgroundCog.hRegistrationPoint;
    var backgroundCogvRegistrationPointDefault = backgroundCog.vRegistrationPoint;

    var backgroundCog2hoffsetDefault = backgroundCog2.hoffset ;
    var backgroundCog2voffsetDefault = backgroundCog2.voffset;
    var backgroundCog2widthDefault = backgroundCog2.width;
    var backgroundCog2heightDefault = backgroundCog2.height;
    var backgroundCog2hRegistrationPointDefault = backgroundCog2.hRegistrationPoint;
    var backgroundCog2vRegistrationPointDefault = backgroundCog2.vRegistrationPoint;

    var brassBackplatehoffsetDefault = brassBackplate.hoffset;
    var brassBackplatevoffsetDefault = brassBackplate.voffset;
    var brassBackplatewidthDefault = brassBackplate.width;
    var brassBackplateheightDefault = brassBackplate.height;

    var bigCoghoffsetDefault = bigCog.hoffset;
    var bigCogvoffsetDefault = bigCog.voffset;
    var bigCogwidthDefault = bigCog.width ;
    var bigCogheightDefault = bigCog.height;
    var bigCoghRegistrationPointDefault = bigCog.hRegistrationPoint;
    var bigCogvRegistrationPointDefault = bigCog.vRegistrationPoint;

    var wheelhoffsetDefault = wheel.hoffset;
    var wheelvoffsetDefault = wheel.voffset;
    var wheelwidthDefault = wheel.width ;
    var wheelheightDefault = wheel.height;
    var wheelhRegistrationPointDefault = wheel.hRegistrationPoint;
    var wheelvRegistrationPointDefault = wheel.vRegistrationPoint;

    var smallCoghoffsetDefault = smallCog.hoffset;
    var smallCogvoffsetDefault = smallCog.voffset;
    var smallCogwidthDefault = smallCog.width ;
    var smallCogheightDefault = smallCog.height;
    var smallCoghRegistrationPointDefault = smallCog.hRegistrationPoint;
    var smallCogvRegistrationPointDefault = smallCog.vRegistrationPoint;

    var bigCog2hoffsetDefault = bigCog2.hoffset;
    var bigCog2voffsetDefault = bigCog2.voffset;
    var bigCog2widthDefault = bigCog2.width ;
    var bigCog2heightDefault = bigCog2.height;
    var bigCog2hRegistrationPointDefault = bigCog2.hRegistrationPoint;
    var bigCog2vRegistrationPointDefault = bigCog2.vRegistrationPoint;

    var mountingNutsPlatehoffsetDefault = mountingNutsPlate.hoffset;
    var mountingNutsPlatevoffsetDefault = mountingNutsPlate.voffset;
    var mountingNutsPlatewidthDefault = mountingNutsPlate.width ;
    var mountingNutsPlateheightDefault = mountingNutsPlate.height;

    var frontplatehoffsetDefault = frontplate.hoffset;
    var frontplatevoffsetDefault = frontplate.voffset;
    var frontplatewidthDefault = frontplate.width ;
    var frontplateheightDefault = frontplate.height;

    var housinghoffsetDefault = housing.hoffset;
    var housingvoffsetDefault = housing.voffset;
    var housingwidthDefault = housing.width ;
    var housingheightDefault = housing.height;

    var hourHandhoffsetDefault = hourHand.hoffset;
    var hourHandvoffsetDefault = hourHand.voffset;
    var hourHandwidthDefault = hourHand.width ;
    var hourHandheightDefault = hourHand.height;
    var hourHandhRegistrationPointDefault = hourHand.hRegistrationPoint;
    var hourHandvRegistrationPointDefault = hourHand.vRegistrationPoint;

    var rubberSurroundhoffsetDefault = rubberSurround.hoffset;
    var rubberSurroundvoffsetDefault = rubberSurround.voffset;
    var rubberSurroundwidthDefault = rubberSurround.width ;
    var rubberSurroundheightDefault = rubberSurround.height;

    var handleshoffsetDefault = handles.hoffset;
    var handlesvoffsetDefault = handles.voffset;
    var handleswidthDefault = handles.width ;
    var handlesheightDefault = handles.height;

    var HourRinghoffsetDefault = HourRing.hoffset;
    var HourRingvoffsetDefault = HourRing.voffset;
    var HourRingwidthDefault = HourRing.width ;
    var HourRingheightDefault = HourRing.height;

    var winderBelowhoffsetDefault = winderBelow.hoffset;
    var winderBelowvoffsetDefault = winderBelow.voffset;
    var winderBelowwidthDefault = winderBelow.width ;
    var winderBelowheightDefault = winderBelow.height;

    var redTaphoffsetDefault = redTap.hoffset;
    var redTapvoffsetDefault = redTap.voffset;
    var redTapwidthDefault = redTap.width ;
    var redTapheightDefault = redTap.height;

    var winderTophoffsetDefault = winderTop.hoffset;
    var winderTopvoffsetDefault = winderTop.voffset;
    var winderTopwidthDefault = winderTop.width ;
    var winderTopheightDefault = winderTop.height;

    var rimRubyHolehoffsetDefault = rimRubyHole.hoffset;
    var rimRubyHolevoffsetDefault = rimRubyHole.voffset;
    var rimRubyHolewidthDefault = rimRubyHole.width ;
    var rimRubyHoleheightDefault = rimRubyHole.height;

    var rimRubyHoleCopyhoffsetDefault = rimRubyHoleCopy.hoffset;
    var rimRubyHoleCopyvoffsetDefault = rimRubyHoleCopy.voffset;
    var rimRubyHoleCopywidthDefault = rimRubyHoleCopy.width ;
    var rimRubyHoleCopyheightDefault = rimRubyHoleCopy.height;

    var mountingNutsPlateNo2hoffsetDefault = mountingNutsPlateNo2.hoffset;
    var mountingNutsPlateNo2voffsetDefault = mountingNutsPlateNo2.voffset;
    var mountingNutsPlateNo2widthDefault = mountingNutsPlateNo2.width ;
    var mountingNutsPlateNo2heightDefault = mountingNutsPlateNo2.height;

    var pinhoffsetDefault = pin.hoffset;
    var pinvoffsetDefault = pin.voffset;
    var pinwidthDefault = pin.width ;
    var pinheightDefault = pin.height;

    var shadowhoffsetDefault = shadow.hoffset;
    var shadowvoffsetDefault = shadow.voffset;
    var shadowwidthDefault = shadow.width ;
    var shadowheightDefault = shadow.height;

function tick() {
	var d = new Date(),
		h = d.getHours(),
		m = d.getMinutes();

	if (m % 4 === 0) {
		hourHand.rotation = 15 * h + Math.floor(m / 4) + 6;
	}

	backgroundCog.rotation = (backgroundCog.rotation + 2) % 360;
	backgroundCog2.rotation = (backgroundCog2.rotation + 2) % 360;
	bigCog.rotation = (bigCog.rotation + 2) % 360;
	bigCog2.rotation = (bigCog2.rotation + 2) % 360;
	smallCog.rotation = (smallCog.rotation + 3) % 360;
	wheel.rotation = (wheel.rotation + 5) % 360;
}

var timer = new Timer();
timer.interval = 1;
timer.ticking = true;
timer.onTimerFired = tick;

var d = new Date(),
	h = d.getHours(),
	m = d.getMinutes();

hourHand.rotation = 15 * h + Math.floor(m / 4) + 6;
//==============================
//
//==============================
function startup() {
    resize(); 		// resize if required
    mainScreen(); 	// check the widget is on-screen

    mainWindow.level = preferences.windowLevel.value;


    setmenu(); // build the menu
    buildVitality("Resources/clock-dock.png",h,m,preferences.windowLevel.value);
    checkShadow();
    setClickPointToolTips();
    
            // set the widget lock status if pinned
	if (preferences.widgetLockPref.value === "1") {
		mainWindow.locked = true;
                pin.opacity = 255;
		pin.hoffset = preferences.pinHoffsetPref.value * scale;
		pin.Voffset = preferences.pinVoffsetPref.value * scale;
	} else {
                pin.opacity = 0;
        }
        // create the licence window
        createLicence(mainWindow);
        
        //mainWindow.level = "below";
        //preferences.windowLevel.option = "3";
        //log ("preferences.windowLevel.value  ", preferences.windowLevel.option);
        //preferences.windowLevel.option= 2;
};

//==============================
//
//==============================
widget.onPreferencesChanged = function () {
    changePrefs();
};


//==============================
//
//==============================
function checkShadow() {
            if (preferences.shadowPref.value != "enable") {
                     shadow.visible = false;
            } else {
                     shadow.visible = true;
            }
};




//==============================
// 
//==============================
redTap.onclick = function () {

	if (preferences.soundPref.value === "enable") {
		play(steam, false);
	}
        if (preferences.shadowPref.value != "enable") {
                 preferences.shadowPref.value = "enable"
                 shadow.visible = true;
        } else {
                 preferences.shadowPref.value = "false"
                 shadow.visible = false;
        }

};


//==============================
// 
//==============================
HourRing.onclick = function () {
	if (!mainWindow.locked) {
		mainWindow.locked = true;
		preferences.widgetLockPref.value = "1";
		pin.hoffset = system.event.hOffset - 5;
		pin.Voffset = system.event.vOffset - 5;
		preferences.pinHoffsetPref.value = pin.hoffset / scale;
		preferences.pinVoffsetPref.value = pin.voffset / scale;
		pin.opacity = 255;
	} else {
   	        pin.hoffset = system.event.hOffset - 5;
		pin.Voffset = system.event.vOffset - 5;
		preferences.pinHoffsetPref.value = pin.hoffset / scale;
		preferences.pinVoffsetPref.value = pin.voffset / scale;
		pin.opacity = 255;
	}

	if (preferences.soundPref.value === "enable") {
		play(lock, false);
	}
};


//==============================
// 
//==============================
winderTop.onclick = function () {

	if (preferences.soundPref.value === "enable") {
		play(winding, false);
	}
	showWidgetPreferences();
};


//==============================
// pins the widget in place
//==============================
pin.onMouseDown = function () {
	if (mainWindow.locked) {
                mainWindow.locked = false;
	        // this does not work yet
                pin.opacity = 0;
		preferences.widgetLockPref.value = "0";
	}
	if (preferences.soundPref.value === "enable") {
		play(lock, false);
	}
};


//==============================
//
//==============================
bigCog.onMouseDown = function () {
        var a;
	cogrotation = cogrotation + 32;
	a = new RotateAnimation(bigCog, cogrotation, 990, animator.kEaseOut);
	animator.start(a);

};

//==============================
//
//==============================
wheel.onMouseDown = function () {
        var a;
	cogrotation = cogrotation + 32;
	a = new RotateAnimation(wheel, cogrotation, 990, animator.kEaseOut);
	animator.start(a);
};

//==============================
//
//==============================
smallCog.onMouseDown = function () {
        var a;
	cogrotation = cogrotation + 32;
	a = new RotateAnimation(smallCog, cogrotation, 990, animator.kEaseOut);
	animator.start(a);
};

//==============================
//
//==============================
bigCog2.onMouseDown = function () {
        var a;
	cogrotation = cogrotation + 32;
	a = new RotateAnimation(bigCog2, cogrotation, 990, animator.kEaseOut);
	animator.start(a);
};





