//======================================================================================
// Function to move the main_window onto the main screen - called on startup and by timer
//======================================================================================
function mainScreen() {
// if the widget is off screen then move into the viewable window

    print("****************MAINSCREEN********************");

    // check for aspect ratio and determine whether it is in portrait or landscape mode
    if (screen.width > screen.height) {
        aspectRatio = "landscape";
    } else {
        aspectRatio = "portrait";
    }
    print("screen.width " + screen.width);
    print("screen.height " + screen.height);
    print("aspectRatio " + aspectRatio);
    // check if the widget has a lock for the screen type.
    if (aspectRatio === "landscape") {
        if (preferences.widgetLockLandscapeModePref.value === "enabled") {
            mainWindow.hoffset = preferences.landscapeHoffsetPref.value;
            mainWindow.voffset = preferences.landscapeVoffsetPref.value;
        }
        if (preferences.widgetHideModePref.value === "landscape") {
            print("Hiding the widget for landscape mode");
            widget.visible = false;
        } else {
            widget.visible = true;
        }
    }
    // check if the widget has a lock for the screen type.
    if (aspectRatio === "portrait") {
        if (preferences.widgetLockPortraitModePref.value === "enabled") {
            mainWindow.hoffset = preferences.portraitHoffsetPref.value;
            mainWindow.voffset = preferences.portraitVoffsetPref.value;
        }
        if (preferences.widgetHideModePref.value === "portrait") {
            print("Hiding the widget for portrait mode");
            widget.visible = false;
        } else {
            widget.visible = true;
        }
    }

    if (mainWindow.hOffset < 0) {
        mainWindow.hOffset = 10;
    }
    if (mainWindow.vOffset < 0) {
        mainWindow.vOffset = 0; // avoid Mac toolbar
    }
    if (mainWindow.hOffset > screen.width - 50) { //adjust for the extra width of the help page
        mainWindow.hOffset = screen.width - mainWindow.width + 220;
    }
    if (mainWindow.vOffset > screen.height - 150) {	 //adjust for the extra height of the help page
        mainWindow.vOffset = screen.height - mainWindow.height; // avoid Mac toolbar
    }

    // calculate the current hlocation in % of the screen
    //store the current hlocation in % of the screen
    if (preferences.hLocationPercPref.value !== "") {
        preferences.hLocationPercPref.value = String((mainWindow.hoffset / screen.width) * 100);
    }
    if (preferences.vLocationPercPref.value !== "") {
        preferences.vLocationPercPref.value = String((mainWindow.voffset / screen.height) * 100);
    }

}
//=====================
//End function
//=====================

//===============================
// function to resize all layers
//===============================
function resize() {
    Scale = Number(preferences.sizePref.value) / 100;	// sets global scale because it is used elsewhere
    log("Resizing: preferences.sizePref.value: " + preferences.sizePref.value);
    log("Scale: " + Scale);

    mainWindow.width = mainWindowWidthDefault * Scale  ;
    mainWindow.height =  mainWindowHeightDefault * Scale;
    mainWindow.hoffset = mainWindowhoffsetDefault * Scale;
    mainWindow.voffset  = mainWindowvoffsetDefault * Scale;

    darkness.hoffset = darknesshoffsetDefault * Scale;
    darkness.voffset = darknessvoffsetDefault * Scale;
    darkness.width = darknesswidthDefault * Scale;
    darkness.height = darknessheightDefault * Scale;

    backgroundCog.hoffset = backgroundCoghoffsetDefault * Scale;
    backgroundCog.voffset = backgroundCogvoffsetDefault * Scale;
    backgroundCog.width = backgroundCogwidthDefault * Scale;
    backgroundCog.height = backgroundCogheightDefault * Scale;
    backgroundCog.hRegistrationPoint = backgroundCoghRegistrationPointDefault * Scale;
    backgroundCog.vRegistrationPoint = backgroundCogvRegistrationPointDefault * Scale;

    backgroundCog2.hoffset = backgroundCog2hoffsetDefault * Scale;
    backgroundCog2.voffset = backgroundCog2voffsetDefault * Scale;
    backgroundCog2.width = backgroundCog2widthDefault * Scale;
    backgroundCog2.height = backgroundCog2heightDefault * Scale;
    backgroundCog2.hRegistrationPoint = backgroundCog2hRegistrationPointDefault * Scale;
    backgroundCog2.vRegistrationPoint = backgroundCog2vRegistrationPointDefault * Scale;

    brassBackplate.hoffset = brassBackplatehoffsetDefault * Scale;
    brassBackplate.voffset = brassBackplatevoffsetDefault * Scale;
    brassBackplate.width = brassBackplatewidthDefault * Scale;
    brassBackplate.height = brassBackplateheightDefault * Scale;

    bigCog.hoffset = bigCoghoffsetDefault * Scale;
    bigCog.voffset = bigCogvoffsetDefault * Scale;
    bigCog.width = bigCogwidthDefault * Scale;
    bigCog.height = bigCogheightDefault * Scale;
    bigCog.hRegistrationPoint = bigCoghRegistrationPointDefault * Scale;
    bigCog.vRegistrationPoint = bigCogvRegistrationPointDefault * Scale;

    wheel.hoffset = wheelhoffsetDefault * Scale;
    wheel.voffset = wheelvoffsetDefault * Scale;
    wheel.width = wheelwidthDefault * Scale;
    wheel.height = wheelheightDefault * Scale;
    wheel.hRegistrationPoint = wheelhRegistrationPointDefault * Scale;
    wheel.vRegistrationPoint = wheelvRegistrationPointDefault * Scale;

    smallCog.hoffset = smallCoghoffsetDefault * Scale;
    smallCog.voffset = smallCogvoffsetDefault * Scale;
    smallCog.width = smallCogwidthDefault * Scale;
    smallCog.height = smallCogheightDefault * Scale;
    smallCog.hRegistrationPoint = smallCoghRegistrationPointDefault * Scale;
    smallCog.vRegistrationPoint = smallCogvRegistrationPointDefault * Scale;

    bigCog2.hoffset = bigCog2hoffsetDefault * Scale;
    bigCog2.voffset = bigCog2voffsetDefault * Scale;
    bigCog2.width = bigCog2widthDefault * Scale;
    bigCog2.height = bigCog2heightDefault * Scale;
    bigCog2.hRegistrationPoint = bigCog2hRegistrationPointDefault * Scale;
    bigCog2.vRegistrationPoint = bigCog2vRegistrationPointDefault * Scale;

    mountingNutsPlate.hoffset = mountingNutsPlatehoffsetDefault * Scale;
    mountingNutsPlate.voffset = mountingNutsPlatevoffsetDefault * Scale;
    mountingNutsPlate.width = mountingNutsPlatewidthDefault * Scale;
    mountingNutsPlate.height = mountingNutsPlateheightDefault * Scale;

    frontplate.hoffset = frontplatehoffsetDefault * Scale;
    frontplate.voffset = frontplatevoffsetDefault * Scale;
    frontplate.width = frontplatewidthDefault * Scale;
    frontplate.height = frontplateheightDefault * Scale;

    housing.hoffset = housinghoffsetDefault * Scale;
    housing.voffset = housingvoffsetDefault * Scale;
    housing.width = housingwidthDefault * Scale;
    housing.height = housingheightDefault * Scale;

    hourHand.hoffset = hourHandhoffsetDefault * Scale;
    hourHand.voffset = hourHandvoffsetDefault * Scale;
    hourHand.width = hourHandwidthDefault * Scale;
    hourHand.height = hourHandheightDefault * Scale;
    hourHand.hRegistrationPoint = hourHandhRegistrationPointDefault * Scale;
    hourHand.vRegistrationPoint = hourHandvRegistrationPointDefault * Scale;

    rubberSurround.hoffset = rubberSurroundhoffsetDefault * Scale;
    rubberSurround.voffset = rubberSurroundvoffsetDefault * Scale;
    rubberSurround.width = rubberSurroundwidthDefault * Scale;
    rubberSurround.height = rubberSurroundheightDefault * Scale;

    handles.hoffset = handleshoffsetDefault * Scale;
    handles.voffset = handlesvoffsetDefault * Scale;
    handles.width = handleswidthDefault * Scale;
    handles.height = handlesheightDefault * Scale;

    HourRing.hoffset = HourRinghoffsetDefault * Scale;
    HourRing.voffset = HourRingvoffsetDefault * Scale;
    HourRing.width = HourRingwidthDefault * Scale;
    HourRing.height = HourRingheightDefault * Scale;

    winderBelow.hoffset = winderBelowhoffsetDefault * Scale;
    winderBelow.voffset = winderBelowvoffsetDefault * Scale;
    winderBelow.width = winderBelowwidthDefault * Scale;
    winderBelow.height = winderBelowheightDefault * Scale;

    redTap.hoffset = redTaphoffsetDefault * Scale;
    redTap.voffset = redTapvoffsetDefault * Scale;
    redTap.width = redTapwidthDefault * Scale;
    redTap.height = redTapheightDefault * Scale;

    winderTop.hoffset = winderTophoffsetDefault * Scale;
    winderTop.voffset = winderTopvoffsetDefault * Scale;
    winderTop.width = winderTopwidthDefault * Scale;
    winderTop.height = winderTopheightDefault * Scale;

    rimRubyHole.hoffset = rimRubyHolehoffsetDefault * Scale;
    rimRubyHole.voffset = rimRubyHolevoffsetDefault * Scale;
    rimRubyHole.width = rimRubyHolewidthDefault * Scale;
    rimRubyHole.height = rimRubyHoleheightDefault * Scale;

    rimRubyHoleCopy.hoffset = rimRubyHoleCopyhoffsetDefault * Scale;
    rimRubyHoleCopy.voffset = rimRubyHoleCopyvoffsetDefault * Scale;
    rimRubyHoleCopy.width = rimRubyHoleCopywidthDefault * Scale;
    rimRubyHoleCopy.height = rimRubyHoleCopyheightDefault * Scale;

    mountingNutsPlateNo2.hoffset = mountingNutsPlateNo2hoffsetDefault * Scale;
    mountingNutsPlateNo2.voffset = mountingNutsPlateNo2voffsetDefault * Scale;
    mountingNutsPlateNo2.width = mountingNutsPlateNo2widthDefault * Scale;
    mountingNutsPlateNo2.height = mountingNutsPlateNo2heightDefault * Scale;

    pin.hoffset = pinhoffsetDefault * Scale;
    pin.voffset = pinvoffsetDefault * Scale;
    pin.width = pinwidthDefault * Scale;
    pin.height = pinheightDefault * Scale;

    shadow.hoffset = shadowhoffsetDefault * Scale;
    shadow.voffset = shadowvoffsetDefault * Scale;
    shadow.width = shadowwidthDefault * Scale;
    shadow.height = shadowheightDefault * Scale;

    mainWindow.visible = true;

}
//=====================
//End function
//=====================

//===========================================
// this function opens the online help file
//===========================================
function menuitem1OnClick() {
    var answer = alert("This button opens a browser window and connects to the help page for this widget. Do you wish to proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://lightquick.co.uk/instructions-for-the-steampunk-underwidget.html?Itemid=264");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens the URL for paypal
//===========================================
function menuitem2OnClick() {
    var answer = alert("Help support the creation of more widgets like this, send us a coffee! This button opens a browser window and connects to the Kofi donate page for this widget). Will you be kind and proceed?", "Open Browser Window", "No Thanks");

    if (answer === 1) {
                openURL("https://www.ko-fi.com/yereverluvinunclebert");
    }
}
//=====================
//End function
//=====================

//===========================================
// this function opens the browser at the contact URL
//===========================================
function facebookChat() {
    var answer = alert("Visiting the Facebook chat page - this button opens a browser window and connects to our Facebook chat page.). Proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://www.facebook.com/profile.php?id=100012278951649");
    }
}
//=====================
//End function
//=====================

//===========================================
// this function opens other widgets URL
//===========================================
function menuitem5OnClick() {
    var answer = alert("This button opens a browser window and connects to the Steampunk widgets page on my site. Do you wish to proceed", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://lightquick.co.uk/steampunk-widgets.html?Itemid=264");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens the download URL
//===========================================
function menuitem6OnClick() {
    var answer = alert("Download latest version of the widget - this button opens a browser window and connects to the widget download page where you can check and download the latest zipped .WIDGET file). Proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("https://github.com/yereverluvinunclebert/underwidget");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens the browser at the contact URL
//===========================================
function menuitem7OnClick() {
    var answer = alert("Visiting the support page - this button opens a browser window and connects to our contact us page where you can send us a support query or just have a chat). Proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://lightquick.co.uk/contact.html?Itemid=3");
    }
}
//=====================
//End function
//=====================

//===========================================
// this function allows a spacer in the menu
//===========================================
function nullfunction() { print("null"); }
//=====================
//End function
//=====================



//=========================================================================
// this function assigns items to the menu
//=========================================================================
function setmenu() {
    mainWindow.onContextMenu = function () {
        var items = [], mItem, sItem;

        mItem = new MenuItem();
        mItem.title = "Donate a Coffee with Ko-Fi";
        mItem.onSelect = function () {
            menuitem2OnClick();
        };
        items.push(mItem);
      
        mItem = new MenuItem();
        mItem.title = "";
        mItem.onSelect = function () {
            nullfunction();
        };
        items.push(mItem);

        mItem = new MenuItem();
        mItem.title = "Online Help and other online options";
        items.push(mItem);

              sItem = new MenuItem();
              sItem.title = "See More Steampunk Widgets";
              sItem.onSelect = function () {
                  menuitem5OnClick();
              };
              mItem.appendChild(sItem);

              sItem = new MenuItem();
              sItem.title = "Download Latest Version";
              sItem.onSelect = function () {
                  menuitem6OnClick();
              };
              mItem.appendChild(sItem);

              sItem = new MenuItem();
              sItem.title = "Contact Support";
              sItem.onSelect = function () {
                  menuitem7OnClick();
              };
              mItem.appendChild(sItem);

              sItem = new MenuItem();
              sItem.title = "Chat about Steampunk Widgets on Facebook";
              sItem.onSelect = function() {
                  facebookChat();
              };
             mItem.appendChild(sItem);

        mItem = new MenuItem();
        mItem.title = "Display Licence Agreement...";
        mItem.onSelect = function () {
            displayLicence();
        };
        items.push(mItem);
      
        mItem = new MenuItem();
        mItem.title = "";
        mItem.onSelect = function() {
            nullfunction();
        };
        items.push(mItem);
      
        mItem = new MenuItem();
        mItem.title = "Reveal Widget in Windows Explorer";
        mItem.onSelect = function() {
            findWidget();
        };
        items.push(mItem);

        mItem = new MenuItem();
        mItem.title = "";
        mItem.onSelect = function() {
            nullfunction();
        };
        items.push(mItem);

        mItem = new MenuItem();
        mItem.title = "Reload Widget (F5)";
        mItem.onSelect = function () {
            reloadWidget();
        };
        items.push(mItem);

        if (preferences.imageEditPref.value != "" && debugFlg === "1") {
            mItem = new MenuItem();
            mItem.title = "Edit Widget using " + preferences.imageEditPref.value ;
            mItem.onSelect = function () {
                editWidget();
            };
            items.push(mItem);
         }

        mainWindow.contextMenuItems = items;
    };
}
//=====================
//End function
//=====================

//==============================================================
// this function reloads the widget when preferences are changed
//==============================================================
function changePrefs() {
    log("preferences Changed");
    savePreferences(); 	/// <<<<<<<<<<<<<
    sleep(1000);
    startup();			/// <<<<<<<<<<<<<
}
//=====================
//End function
//=====================

//=====================
// set the tooltips of the click points
//=====================
function setClickPointToolTips() {
		pin.tooltip	   = "thisPinUnlocksTheWidget";
}







//===========================================
// this function causes explorer to be opened and the file selected
//===========================================
function findWidget() {

 // temporary development version of the widget
    var widgetFullPath = convertPathToPlatform(system.userWidgetsFolder + "/" + widgetName);
    var alertString = "The widget folder is: \n";
    if (filesystem.itemExists(widgetFullPath)) {
        alertString += system.userWidgetsFolder + " \n\n";
        alertString += "The widget name is: \n";
        alertString += widgetName + ".\n ";

        alert(alertString, "Open the widget's folder?", "No Thanks");

        filesystem.reveal(widgetFullPath);
    } else {
        widgetFullPath = resolvePath(".");   
        filesystem.reveal(widgetFullPath);
        print("widgetFullPath " + widgetFullPath);
    }
}
//=====================
//End function
//=====================


//===========================================
// this function edits the widget
//===========================================
function editWidget() {
    //var answer = alert("Editing the widget. Proceed?", "Open Editor", "No Thanks");
    //if (answer === 1) {
        //uses the contents of imageEditPref to initiate your default editor
        performCommand("menu");
    //}
}
//=====================
//End function
//=====================

//=====================
// function to carry out a command
//=====================
function performCommand(method) {
    var answer;

    if (method === "menu") {
        runCommandInBg(preferences.imageEditPref.value, "runningTask");
    } else {
        print("method "+method);
        if (system.event.altKey) { // filesystem.open() call
            if (preferences.openFilePref.value === "") {
                answer = alert("This widget has not been assigned an alt+double-click function. You need to open the preferences and select a file to be opened. Do you wish to proceed?", "Open Preferences", "No Thanks");
                if (answer === 1) {
                    showWidgetPreferences();
                }
                return;
            }
            filesystem.open(preferences.openFilePref.value);
        } else {
            if (preferences.imageCmdPref.value === "") {
                answer = alert("This widget has not been assigned a double-click function. You need to open the preferences and enter a run command for this widget. Do you wish to proceed?", "Open Preferences", "No Thanks");
                if (answer === 1) {
                    showWidgetPreferences();
                }
                return;
            }
                runCommandInBg(preferences.imageCmdPref.value, "runningTask");
        }
    }
}
//=====================
//End function
//=====================




//======================================================================================
// Function to lock the widget
//======================================================================================
function lockWidget() {
    // check for aspect ratio and determine whether it is in portrait or landscape mode
    if (screen.width > screen.height) {
        aspectRatio = "landscape";
    } else {
        aspectRatio = "portrait";
    }
    if (mainWindow.locked) {
        pin.opacity = 1;
        mainWindow.locked = false;

        // check if the widget has a lock for the screen type.
        if (aspectRatio === "landscape") {
            preferences.widgetLockLandscapeModePref.value = "disabled";
        }
        // check if the widget has a lock for the screen type.
        if (aspectRatio === "portrait") {
            preferences.widgetLockPortraitModePref.value = "disabled";
        }
        pin.tooltip = "click me to lock the widget in place";
        //screw2.tooltip="click me to lock the widget in place";
        //paper.tooltip="";
        //woodSurround.tooltip="";
    } else {
        pin.opacity = 255;
        mainWindow.locked = true;

        // check if the widget has a lock for the screen type.
        if (aspectRatio === "landscape") {
            preferences.widgetLockLandscapeModePref.value = "enabled";
            preferences.landscapeHoffsetPref.value = mainWindow.hoffset;
            preferences.landscapeVoffsetPref.value = mainWindow.voffset;
        }
        // check if the widget has a lock for the screen type.
        if (aspectRatio === "portrait") {
            preferences.widgetLockPortraitModePref.value = "enabled";
            preferences.portraitHoffsetPref.value = mainWindow.hoffset;
            preferences.portraitVoffsetPref.value = mainWindow.voffset;
        }
        pin.tooltip = "click me to unlock";

        //screw2.tooltip="click me to unlock";
        //paper.tooltip=woodSurround.tooltip="The widget is currently locked in place - click on the screw to release";

    }
    if (preferences.soundPref.value !== "disabled") {
        play(lock, false);
    }
}
//=====================
//End function
//=====================



//======================================================================================
// Function to lock the widget on startup
//======================================================================================
function checkLockWidget() {
    // check for aspect ratio and determine whether it is in portrait or landscape mode
    if (screen.width > screen.height) {
        aspectRatio = "landscape";
    } else {
        aspectRatio = "portrait";
    }
    print("aspectRatio " + aspectRatio);
    print("preferences.widgetLockLandscapeModePref.value " + preferences.widgetLockLandscapeModePref.value);
    print("preferences.widgetLockPortraitModePref.value " + preferences.widgetLockPortraitModePref.value);
    // check if the widget has a lock for the screen type.
    if (aspectRatio === "landscape") {
        if (preferences.widgetLockLandscapeModePref.value === "disabled") {
            pin.opacity = 1;
            mainWindow.locked = false;
            // this does not work yet
            pin.tooltip = "click me to lock the widget in place";
            //screw2.tooltip="click me to lock the widget in place";
            return;
        }
        print("checkLockWidget locking in landscape");
        pin.opacity = 255;
        mainWindow.locked = true;
        // check if the widget has a lock for the screen type.
        pin.tooltip = "click me to unlock";
    }
    // check if the widget has a lock for the screen type.
    if (aspectRatio === "portrait") {
        if (preferences.widgetLockPortraitModePref.value === "disabled") {
            pin.opacity = 1;
            mainWindow.locked = false;
            // this does not work yet
            pin.tooltip = "click me to lock the widget in place";
            //screw2.tooltip="click me to lock the widget in place";
        } else {
            print("checkLockWidget locking in portrait");
            pin.opacity = 255;
            mainWindow.locked = true;
            // check if the widget has a lock for the screen type.
            pin.tooltip = "click me to unlock";
        }
    }
}
//=====================
//End function
//=====================

