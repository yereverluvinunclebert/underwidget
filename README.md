# underwidget
  
 The Steampunk Underwidget, written in Javascript and XML for the Yahoo 
 Widget (Konfabulator) Engine. Created for XP, Vista, Win7, 8, 10+ as well as the 
 Apple Mac prior to Catalina.
 
![underwidget](https://github.com/yereverluvinunclebert/underwidget/assets/2788342/9278163f-ffbb-4be2-bb23-9df6e9e8ee16)

This widget is an attractive steampunk Yahoo widget for your desktop. The 
Steampunk Underwidget for your Windows/Mac desktop, a fully working yahoo widget 
and it can be moved around your desktop looking very steampunk indeed. 

![underwidgetDesktop](https://github.com/yereverluvinunclebert/underwidget/assets/2788342/ec1079d1-0d28-43ee-a9d6-579f751a61d4)

The Steampunk Underwidget is a 24hr clock that sits on your steampunk desktop 
looking as if it is part of that desktop. The underwidget is designed to work 
with the Steampunk Timekeeper Orrery MkII that has a transparent glass middle 
section that can be made fully opaque or fully transparent. When fully 
transparent the underwidget does its job acting as the orrery's internal 
gubbins. However, the underwidget does not need the orrery and can simply sit 
on the desktop on its own. It has a shadow that can be enabled to make it seem 
to sit deeper into the desktop in a three dimensional sense. The Underwidget 
works better with one of our existing background wallpapers that you can get 
here . You can see how it works from the image below. The widget really looks 
as if it is embedded into the actual desktop. 

![underwidget-about](https://github.com/yereverluvinunclebert/underwidget/assets/2788342/c789f6da-d308-4823-a038-742cea82b47d)

The underwidget is still beta and some bits may not work completely, although 
most bugs have now been fixed. Added dock vitality, correct layering inherited 
from the orrery widget. Still need to fix the installation image though.

Note that the widget is not just eye-candy, it also acts as a working 24hr 
clock, the single hand points to both the hour and minutes indicating the time. 
The cogs and wheels rotate providing a clockwork motion giving life to your 
static desktop.

![orreryBeautiful](https://github.com/yereverluvinunclebert/underwidget/assets/2788342/f8a242e9-6883-4edf-bcb7-27c9a55ee536)

The red tap removes the shadow and re-enables it each time you click upon it. 
You can even interact with each individual cog. Simply click on each.

Clicking on the upper winding point opens the widget's preferences. Whilst all 
these things are happening full sound effects are provided.

The widget can be locked into position by clicking on the outer ring. A locking 
pin will appear in position to indicate the widget is locked into place.

The underwidget can be seen doing its job through the orrery centre glass in the 
image below - note the cogs and the wheels, they are all moving. 

 ![yahoo-logo-small_111](https://github.com/yereverluvinunclebert/Steampunk-MediaPlayer-Ywidget/assets/2788342/c5668608-ab57-4665-a332-3bc9b7e07a9f)

 All javascript widgets need an engine to function, in this case the widget uses 
 the Yahoo Widget Konfabulator engine. The engine interprets the javascript and 
 creates the widget according to the XML description and using the images you 
 provide. 
 
Built using: 

	RJTextEd Advanced Editor  https://www.rj-texted.se/ 
	Adobe Photoshop CS ver 8.0 (2003)  https://www.adobe.com/uk/products/photoshop/free-trial-download.html  
	Yahoo Widgets SDK: engine (Konfabulator), debugger & documentation
	
Tested on :

	ReactOS 0.4.14 32bit on virtualBox    
	Windows 7 Professional 32bit on Intel    
	Windows 7 Ultimate 64bit on Intel    
	Windows 7 Professional 64bit on Intel    
	Windows XP SP3 32bit on Intel    
	Windows 10 Home 64bit on Intel    
	Windows 10 Home 64bit on AMD    
	Windows 11 64bit on Intel 
   
 Dependencies:
 
 o A windows-alike o/s such as Windows XP, 7-11 or Apple Mac OSX 11 prior to Catalina.  
 
  To run this widget properly you may also also need:
 
	1. Steampunk Orrery Timekeeper Widget here - https://www.deviantart.com/yereverluvinuncleber/art/Steampunk-Orrery-Calendar-Clock-Yahoo-Widget-MkII-455720507?q=gallery%3Ayereverluvinuncleber&qo=2
	2. Leather Desktop wallpaper 1 - https://www.deviantart.com/yereverluvinuncleber/art/Steampunk-Leather-Desktop-Wallpaper-530615051
 	3. Leather Desktop wallpaper 2 - https://www.deviantart.com/yereverluvinuncleber/art/Steampunk-Wallpaper-MkII-1440x990-439053362 	
 	
  o Installation of the yahoo widget SDK runtime engine  
 
	Yahoo widget engine for Windows - http://g6auc.me.uk/ywidgets_sdk_setup.exe  
	Yahoo widget engine for Mac - https://rickyromero.com/widgets/downloads/yahoo-widgets-4.5.2.dmg
	Yahoo Widgets SDK: engine (Konfabulator), debugger & documentation 
	
 Running the widget using a javascript engine frees javascript from running only 
 within the captivity of a browser, you will now be able to run these widgets on 
 your Windows desktop as long as you have the correct widget engine installed.
  
 Instructions for running Yahoo widgets on Windows
 =================================================
 
 1. Install yahoo widget SDK runtime engine
 2. Download the gauge from this repo.
 3. Unzip it
 4. Double-click on the resulting .KON file and it will install and run
 
 Instructions for running Yahoo widgets on Mac OS/X ONLY
 ========================================================
 
 1. Install yahoo widget SDK runtime engine for Mac
 2. Download the gauge from this repo.
 3. Unzip it
 4. For all all recent versions of Mac OS/X including Sierra, edit the following 
 file:
 
 com.yahoo.widgetengine.plist which is in /Users/xxx/Library/Preferences. Look 
 for these lines: 
    
   <key>DockOpen</key>  
   <string>false</string>  
 
 Change to false if it is true.
 
 5. Double-click on the widgets .KON file and it will install and run
 
 Wit these instructions you should be able to start Yahoo! Widgets and the 
 menubar item should appear. Widgets can then be started from the menubar or by 
 double-clicking on the KON file in the usual way.
 
 ![aboutus](https://github.com/yereverluvinunclebert/Steampunk-Moon_Phase_III/assets/2788342/a39bfd44-1f95-4800-a591-e68684ab5d42)

 LICENCE AGREEMENTS:
 
 Copyright 2023 Dean Beedell
 
 In addition to the GNU General Public Licence please be aware that you may use
 any of my own imagery in your own creations but commercially only with my
 permission. In all other non-commercial cases I require a credit to the
 original artist using my name or one of my pseudonyms and a link to my site.
 With regard to the commercial use of incorporated images, permission and a
 licence would need to be obtained from the original owner and creator, ie. me.
 
