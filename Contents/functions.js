//======================================================================================
// Function to move the main_window onto the main screen
//======================================================================================
function mainScreen() {
// if the widget is off screen then move into the viewable window

    if (preferences.hoffsetpref.value > 0) {
        mainWindow.hOffset = parseInt(preferences.hoffsetpref.value, 10);
    }
    if (preferences.voffsetpref.value > 0) {
        mainWindow.vOffset = parseInt(preferences.voffsetpref.value, 10);
    }

    if (mainWindow.hOffset < 0) {
        mainWindow.hOffset = 10;
    }
    if (mainWindow.vOffset < 32) {
        mainWindow.vOffset = 32; // avoid Mac toolbar
    }
    if (mainWindow.hOffset > screen.width - 50) {
        mainWindow.hOffset = screen.width - mainWindow.width;
    }
    if (mainWindow.vOffset > screen.height - 50) {
        mainWindow.vOffset = screen.height - mainWindow.height; // avoid Mac toolbar
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
    var answer = alert("Help support the creation of more widgets like this, send us a beer! This button opens a browser window and connects to the Paypal donate page for this widget). Will you be kind and proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("https://www.paypal.com/uk/cgi-bin/webscr?cmd=_flow&SESSION=Bj-G10s9o2JJwW_SC1DScBhMvxWaZTF5beyijIne_IL7X0AaTZLYJnwP6z8&dispatch=50a222a57771920b6a3d7b606239e4d529b525e0b7e69bf0224adecfb0124e9b61f737ba21b081981b5bc1bed9bcd4a664bb0e309d0a9e4f");
        //openURL("http://lightquick.co.uk/donate-a-beer.html?Itemid=269");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens my Amazon URL wishlist
//===========================================
function menuitem3OnClick() {
    var answer = alert("Help support the creation of more widgets like this. Buy me a small item on my Amazon wishlist! This button opens a browser window and connects to my Amazon wish list page). Will you be kind and proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://www.amazon.co.uk/gp/registry/registry.html?ie=UTF8&id=A3OBFB6ZN4F7&type=wishlist");
    }
}
//=====================
//End function
//=====================
//===========================================
// this function opens the rocketdock URL
//===========================================
function menuitem4OnClick() {

    var answer = alert("Log in and vote for the widget on Rocketdock. This button opens a browser window and connects to the Rocketdock page where you can give the widget a 5 star rating... Will you be kind and proceed?", "Open Browser Window", "No Thanks");
    if (answer === 1) {
        openURL("http://rocketdock.com/addon/misc/45672");
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
        openURL("http://lightquick.co.uk/downloads/steampunk-underwidget.html?Itemid=264");
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
        var items = [];
        items[1] = new MenuItem();
        items[1].title = "Online Help";
        items[1].onSelect = function () {
            menuitem1OnClick();
        };
        items[2] = new MenuItem();
        items[2].title = "Buy us a Beer with Paypal";
        items[2].onSelect = function () {
            menuitem2OnClick();
        };
        items[3] = new MenuItem();
        items[3].title = "Donate with Amazon";
        items[3].onSelect = function () {
            menuitem3OnClick();
        };
        items[4] = new MenuItem();
        items[4].title = "Vote on Rocketdock";
        items[4].onSelect = function () {
            menuitem4OnClick();
        };
        items[5] = new MenuItem();
        items[5].title = "";
        items[5].onSelect = function () {
            nullfunction();
        };
        items[6] = new MenuItem();
        items[6].title = "See More Steampunk Widgets";
        items[6].onSelect = function () {
            menuitem5OnClick();
        };
        items[7] = new MenuItem();
        items[7].title = "Download Latest Version";
        items[7].onSelect = function () {
            menuitem6OnClick();
        };
        items[11] = new MenuItem();
        items[11].title = "Contact Support";
        items[11].onSelect = function () {
            menuitem7OnClick();
        };
        items[10] = new MenuItem();
        items[10].title = "";
        items[10].onSelect = function() {
            nullfunction();
        };
        items[11] = new MenuItem();
        items[11].title = "Reveal Widget in Windows Explorer";
        items[11].onSelect = function() {
            findWidget();
        };
        items[12] = new MenuItem();
        items[12].title = "";
        items[12].onSelect = function() {
            nullfunction();
        };
        items[13] = new MenuItem();
        items[13].title = "Reload Widget (F5)";
        items[13].onSelect = function () {
            reloadWidget();
        };

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

 var widgetName = "underwidget.widget";
 // temporary development version of the widget
 //var widgetName = "magnifier2.widget";
 var widgetFullPath = convertPathToPlatform(system.userWidgetsFolder + "/" + widgetName);
 var alertString = "The widget folder is: \n";
 alertString += system.userWidgetsFolder + " \n\n";
 alertString += "The widget name is: \n";
 alertString += widgetName+".\n ";
 var answer = alert(alertString, "Open the widget's folder?", "No Thanks");
 if (answer === 1) {
            if (filesystem.itemExists(widgetFullPath) )   {
              //dosCommand = "Explorer.exe /e, /select,E:\\Documents and Settings\\Dean Beedell\\My Documents\\My Widgets\\mars 2.widget";
              dosCommand = "Explorer.exe /e, /select," + widgetFullPath;
              //print("dosCommand "+dosCommand);
              //var explorerExe = runCommand(dosCommand, "bgResult");
              filesystem.reveal(widgetFullPath);
            }
 }
}
//=====================
//End function
//=====================
