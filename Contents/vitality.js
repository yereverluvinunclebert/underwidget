/*properties
    appendChild, createDocument, createElement, dockOpen, hOffset, opacity,
    setAttribute, setDockItem, src, vOffset
*/

function buildVitality(bg, hr, mn, lev) {
	var d, v, dock_bg, dock_icon, u, t, w, x;
        if (hr < 10) { hr = "0"+hr};
        if (mn < 10) { mn = "0"+mn};
	if (!widget.dockOpen) { return; }
        log("lev ", lev);
	d = XMLDOM.createDocument();
	v = d.createElement("dock-item");
	v.setAttribute("version", "1.0");
	d.appendChild(v);

	dock_bg = d.createElement("image");
	dock_bg.setAttribute("src", bg);
	dock_bg.setAttribute("hOffset", 0);
	dock_bg.setAttribute("vOffset", 0);
	v.appendChild(dock_bg);

	w = d.createElement("text");
	w.setAttribute("hOffset", "30");
	w.setAttribute("vOffset", "46");
	w.setAttribute("hAlign", "right");
	w.setAttribute("style", "text-align: right;font-family: 'Times New Roman'; font-stretch: condensed; font-size: 31px; color: #ffffff; -kon-shadow: 0px -1px rgba( 0, 0, 0, 0.7 )");
        w.setAttribute("data",  hr);
	v.appendChild(w);

	t = d.createElement("text");
	t.setAttribute("hOffset", "75");
	t.setAttribute("vOffset", "46");
	t.setAttribute("hAlign", "right");
	t.setAttribute("style", "text-align: right;font-family: 'Times New Roman'; font-stretch: condensed; font-size: 31px; color: #ffffff; -kon-shadow: 0px -1px rgba( 0, 0, 0, 0.7 )");
        t.setAttribute("data",  ":" + mn);
	v.appendChild(t);

	x = d.createElement("text");
	x.setAttribute("hOffset", "72");
	x.setAttribute("vOffset", "56");
	x.setAttribute("hAlign", "right");
	x.setAttribute("style", "text-align: right;font-family: 'Times New Roman'; font-stretch: condensed; font-size: 12px; color: #ffffff; -kon-shadow: 0px -1px rgba( 0, 0, 0, 0.7 )");
        x.setAttribute("data", "layered " + lev);
	v.appendChild(x);

	widget.setDockItem(d, "fade");
}
