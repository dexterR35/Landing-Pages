(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._1003 = function() {
	this.initialize(img._1003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,70);


(lib._15003 = function() {
	this.initialize(img._15003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,78);


(lib.am_baiat = function() {
	this.initialize(img.am_baiat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,141);


(lib.asfi = function() {
	this.initialize(img.asfi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,61);


(lib.bg_300x250baiat = function() {
	this.initialize(img.bg_300x250baiat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.carduri = function() {
	this.initialize(img.carduri);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,153);


(lib.dis3 = function() {
	this.initialize(img.dis3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,31);


(lib.emag = function() {
	this.initialize(img.emag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,196);


(lib.ip = function() {
	this.initialize(img.ip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,33);


(lib.logo_MC = function() {
	this.initialize(img.logo_MC);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,72);


(lib.pt = function() {
	this.initialize(img.pt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,488,107);


(lib.sacosa = function() {
	this.initialize(img.sacosa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,150);


(lib.vs_baiat = function() {
	this.initialize(img.vs_baiat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,89);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.vs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.vs_baiat();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vs, new cjs.Rectangle(0,0,88,89), null);


(lib.tpl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ip();
	this.instance.setTransform(1,2,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tpl, new cjs.Rectangle(1,2,177.9,21.1), null);


(lib.tdis = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.dis3();
	this.instance.setTransform(-2,-3,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tdis, new cjs.Rectangle(-2,-3,206.1,27.9), null);


(lib.tcar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._15003();
	this.instance.setTransform(-2,1,0.74,0.74);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tcar, new cjs.Rectangle(-2,1,82.2,57.7), null);


(lib.t100 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._1003();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t100, new cjs.Rectangle(0,0,67,70), null);


(lib.sacosa_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sacosa();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sacosa_1, new cjs.Rectangle(0,0,115,150), null);


(lib.rd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA0420").s().p("A+xR5MAAAgjxMA9jAAAMAAAAjxg");
	this.shape.setTransform(196.975,114.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rd, new cjs.Rectangle(0,0,394,229), null);


(lib.pt_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pt();
	this.instance.setTransform(0,0,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pt_1, new cjs.Rectangle(0,0,400.2,87.8), null);


(lib.line = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmsAZIAAgxINZAAIAAAxg");
	this.shape.setTransform(65,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.line, new cjs.Rectangle(22.1,0,85.80000000000001,5), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvKFsIAArXIeVAAIAALXg");
	mask.setTransform(97.1,36.425);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AibAPIAAgdIE3AAIAAAdg");
	this.shape.setTransform(25.375,25.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#100C08").s().p("AjvB4IAAjvIHfAAIAADvg");
	this.shape_1.setTransform(25.4,37.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3032E").s().p("AjvB7IAAj0IHfAAIAAD0g");
	this.shape_2.setTransform(25.4,13.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Aj9D+IAAn7IH7AAIAAH7g");
	this.shape_3.setTransform(25.4,25.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#100C08").s().p("AgiApIAAhRIBDAAIAAAOIg3AAIAAASIAmAAIAAAOIgmAAIAAAUIA6AAIAAAPg");
	this.shape_4.setTransform(190.65,68.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#100C08").s().p("AgfApIAAhRIANAAIAABCIAyAAIAAAPg");
	this.shape_5.setTransform(182.5,68.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#100C08").s().p("AAeApIgHgSIgsAAIgIASIgOAAIAkhRIAPAAIAkBRgAgOAJIAeAAIgQgkg");
	this.shape_6.setTransform(173.6,68.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#100C08").s().p("AAYApIgRgeIggAAIAAAeIgNAAIAAhRIA1AAQALAAAFAHQAHAGgBANQAAATgQAFIASAfgAgZgDIAmAAQALAAAAgLQAAgMgMAAIglAAg");
	this.shape_7.setTransform(164.5,68.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#100C08").s().p("AgjApIAAhRIBEAAIAAAOIg3AAIAAASIAmAAIAAAOIgmAAIAAAUIA5AAIAAAPg");
	this.shape_8.setTransform(155.4,68.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#100C08").s().p("AAUApIgshEIAABEIgOAAIAAhRIAUAAIAsBDIAAhDIANAAIAABRg");
	this.shape_9.setTransform(145.7,68.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#100C08").s().p("AgiApIAAhRIBDAAIAAAOIg3AAIAAASIAmAAIAAAOIgmAAIAAAUIA6AAIAAAPg");
	this.shape_10.setTransform(136.65,68.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#100C08").s().p("AgdAhQgNgMAAgVQAAgTANgNQANgLARAAQAVAAAPATIgMAIQgKgMgPAAQgMAAgJAIQgIAJAAALQAAANAIAIQAJAJAMAAQAUAAAHgTIgdAAIAAgOIAtAAIAAADQAAATgMAMQgMANgTAAQgRAAgMgLg");
	this.shape_11.setTransform(126.925,68.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#100C08").s().p("AgjApIAAhRIBEAAIAAAOIg3AAIAAASIAmAAIAAAOIgmAAIAAAUIA5AAIAAAPg");
	this.shape_12.setTransform(114.55,68.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#100C08").s().p("AgFApIAAhDIggAAIAAgOIBLAAIAAAOIggAAIAABDg");
	this.shape_13.setTransform(105.775,68.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#100C08").s().p("AgjApIAAhRIBEAAIAAAOIg3AAIAAASIAmAAIAAAOIgmAAIAAAUIA6AAIAAAPg");
	this.shape_14.setTransform(97.6,68.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#100C08").s().p("AgFApIAAhRIALAAIAABRg");
	this.shape_15.setTransform(91.15,68.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#100C08").s().p("AgcAfQgNgMAAgTQAAgTAOgNQANgLAQAAQAYAAAQAXIgNAFQgKgNgRAAQgNAAgIAIQgIAIAAAMQAAANAIAIQAIAIAOAAQAQAAALgNIALAHQgPAVgYAAQgSAAgMgNg");
	this.shape_16.setTransform(84.55,68.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#100C08").s().p("AgdAhQgNgMAAgVQAAgTANgNQAMgLARAAQARAAANALQAOANgBATQABAUgOANQgNALgRAAQgRAAgMgLgAgVgUQgIAJgBALQABAOAIAHQAJAJAMAAQANAAAJgJQAIgHAAgOQAAgLgIgJQgJgIgNAAQgMAAgJAIg");
	this.shape_17.setTransform(74.6,68.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#100C08").s().p("AgmAdIAHgLQAOALATAAQAKAAAHgDQAGgEAAgGQAAgGgIgDIgMgCIgQgBQgNgCgGgEQgFgFgBgKQAAgMAKgGQAKgHAQAAQAVAAAOAMIgIAKQgNgIgOAAQgWAAAAAKQAAAGAJABIAVADQAQACAHAFQAIAFAAAMQAAAMgJAIQgKAHgSAAQgZAAgPgOg");
	this.shape_18.setTransform(65.15,68.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#100C08").s().p("AgjApIAAhRIBEAAIAAAOIg3AAIAAASIAmAAIAAAOIgmAAIAAAUIA5AAIAAAPg");
	this.shape_19.setTransform(53.45,68.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#100C08").s().p("AglApIAAhSIA0AAQALABAGAHQAGAHAAAMQAAANgGAFQgHAHgMAAIglAAIAAAegAgYgDIAlAAQAMAAAAgLQAAgLgNAAIgkAAg");
	this.shape_20.setTransform(44.725,68.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#100C08").s().p("AgbAjQgKgIgBgOIAAg3IANAAIAAA0QAAATAZAAQAaAAgBgTIAAg0IAOAAIAAA3QAAAOgLAIQgKAHgSAAQgRAAgKgHg");
	this.shape_21.setTransform(34.9,68.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#100C08").s().p("AgcAhQgPgMAAgVQAAgTAPgNQALgLARAAQASAAALALQAOANABATQgBAVgOAMQgKALgTAAQgRAAgLgLgAgUgUQgJAIAAAMQAAAOAIAHQAJAJAMAAQANAAAJgJQAIgHAAgOQAAgMgIgIQgKgIgMAAQgMAAgIAIg");
	this.shape_22.setTransform(24.9,68.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#100C08").s().p("AAYApIgRgeIggAAIAAAeIgNAAIAAhRIA1AAQAKAAAGAHQAGAGAAANQAAATgQAFIASAfgAgZgDIAlAAQAMAAAAgLQAAgMgNAAIgkAAg");
	this.shape_23.setTransform(15.25,68.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#100C08").s().p("AgcAhQgOgMAAgVQAAgTAOgNQALgLASAAQAWAAAOATIgMAIQgKgMgPAAQgLAAgKAIQgIAIAAAMQAAANAIAIQAJAJAMAAQAUAAAHgTIgdAAIAAgOIAtAAIAAADQAAATgMAMQgLANgUAAQgQAAgMgLg");
	this.shape_24.setTransform(5.175,68.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#100C08").s().p("AiWCRIAAkhICXAAQBEAAApAoQApAnAABBQAAA8gpAqQgqArg7AAgAhhBgIBiAAQAtAAAagbQAYgaAAgrQAAgqgYgaQgagbgtAAIhiAAg");
	this.shape_25.setTransform(150.125,25.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#100C08").s().p("ABNCRIhQhrIhXAAIAABrIg2AAIAAkhIC5AAQAuAAAcAaQAaAZAAApQAAAmgYAXQgWAXglAFIBXBsgAhagJIB+AAQAZAAAOgMQANgLAAgUQAAgUgMgMQgMgMgXAAIiDAAg");
	this.shape_26.setTransform(115.175,25.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#100C08").s().p("AiRCRIAAkhIC9AAQApAAAZAXQAaAWAAAlQAAAigeAYQATAJALARQALARgBAVQAAAlgZAXQgcAZgwAAgAhcBhICIAAQAvAAAAglQAAgmgoAAIiPAAgAhcgZICLAAQARAAAKgKQAJgKgBgPQAAgQgJgJQgLgLgSAAIiIAAg");
	this.shape_27.setTransform(79.35,25.425);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,194.2,72.9), null);


(lib.emag_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.emag();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.emag_1, new cjs.Rectangle(0,0,209,196), null);


(lib.ctaz = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9041E").s().p("AgNA0IAAhnIAbAAIAABng");
	this.shape.setTransform(115.525,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9041E").s().p("AgNA0IAAhnIAbAAIAABng");
	this.shape_1.setTransform(110.475,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9041E").s().p("AggA0IAAhnIAbAAIAABQIAmAAIAAAXg");
	this.shape_2.setTransform(103.95,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9041E").s().p("AATA0IgFgWIgcAAIgFAWIgcAAIAfhnIAhAAIAfBngAAJAJIgCgHIgDgQIgEgRIAAAAIgDARIgEAQIgCAHIASAAg");
	this.shape_3.setTransform(94.775,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E9041E").s().p("AgNA0IAAhQIgbAAIAAgXIBRAAIAAAXIgbAAIAABQg");
	this.shape_4.setTransform(85.625,14.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E9041E").s().p("AgiA0IAAhnIBDAAIAAAXIgnAAIAAAQIAhAAIAAAXIghAAIAAASIApAAIAAAXg");
	this.shape_5.setTransform(76.8,14.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E9041E").s().p("AgpA0IAAhnIAfAAQAOAAAMAFQANAFAGAMQAHALAAASQAAASgHAMQgGALgMAGQgMAFgOAAgAgNAeIABAAQAIAAAFgCQAGgDADgHQAEgHAAgLQAAgMgEgGQgDgGgGgCQgFgDgIAAIgBAAg");
	this.shape_6.setTransform(67.3,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E9041E").s().p("AATBCIgFgWIgcAAIgFAWIgcAAIAfhnIAhAAIAfBngAAJAXIgCgHIgDgQIgEgRIAAAAIgDARIgEAQIgCAHIASAAgAgQgzQgFgEgBgKIAOAAIADAEQACACADAAQADAAACgCQACgBAAgDIAPAAQgBAKgFAEQgGAGgKAAQgKAAgGgGg");
	this.shape_7.setTransform(53.925,13.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E9041E").s().p("AggA0IAAhnIAbAAIAABQIAmAAIAAAXg");
	this.shape_8.setTransform(45.25,14.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E9041E").s().p("AghA0IAAhnIBDAAIAAAXIgnAAIAAAUIAhAAIAAAWIghAAIAAAmg");
	this.shape_9.setTransform(36.7,14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E9041E").s().p("AATA0IgFgWIgcAAIgFAWIgcAAIAfhnIAhAAIAfBngAAJAJIgCgHIgDgQIgEgRIAAAAIgDARIgEAQIgCAHIASAAg");
	this.shape_10.setTransform(27.475,14.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ao+CMQg2AAgmgmQgmgmAAg2IAAgTQAAg2AmgmQAmgmA2AAIR9AAQA2AAAmAmQAmAmAAA2IAAATQAAA2gmAmQgmAmg2AAg");
	this.shape_11.setTransform(70.5,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaz, new cjs.Rectangle(0,0,141,28), null);


(lib.carduri_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.carduri();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carduri_1, new cjs.Rectangle(0,0,207,153), null);


(lib.asfi_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.asfi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.asfi_1, new cjs.Rectangle(0,0,156,61), null);


(lib.amaj = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.am_baiat();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.amaj, new cjs.Rectangle(0,0,260,141), null);


(lib.logos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(98.6,16.4,0.45,0.45,0,0,0,97.1,36.5);

	this.instance_1 = new lib.logo_MC();
	this.instance_1.setTransform(0,2.3,0.4372,0.4374);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AAACeIAAk6");
	this.shape.setTransform(48.5,16.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(0.1,1,1).p("A9ekQMA69AAAIAAIhMg69AAAg");
	this.shape_1.setTransform(170.575,15.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A9eERIAAohMA69AAAIAAIhg");
	this.shape_2.setTransform(170.575,15.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logos, new cjs.Rectangle(-19.1,-12.3,379.40000000000003,56.599999999999994), null);


// stage content:
(lib._300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,586,592];
	// timeline functions:
	this.frame_0 = function() {
		this.count = 0;
	}
	this.frame_586 = function() {
		if(this.count < 1){
			this.count = this.count + 1;
			this.play();
		}else{
			//this.gotoAndStop(170);
			this.stop();
		}
	}
	this.frame_592 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(586).call(this.frame_586).wait(6).call(this.frame_592).wait(1));

	// guide
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(593));

	// logo_mc
	this.instance = new lib.logos();
	this.instance.setTransform(73.15,22.6,0.88,0.88,0,0,0,71.3,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(593));

	// cta
	this.instance_1 = new lib.ctaz();
	this.instance_1.setTransform(226.9,222,0.63,0.63,0,0,0,70.7,14.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(420).to({_off:false},0).to({regY:14.2,scaleX:0.8,scaleY:0.8,alpha:1},10,cjs.Ease.backOut).wait(163));

	// disc
	this.instance_2 = new lib.tdis();
	this.instance_2.setTransform(98.8,222.65,0.69,0.69,0,0,0,119.5,9.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(312).to({_off:false},0).wait(281));

	// carduri
	this.instance_3 = new lib.carduri_1();
	this.instance_3.setTransform(146.45,205.95,0.44,0.44,0,0,0,103.7,77);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(149).to({_off:false},0).to({alpha:1},18).to({_off:true},106).wait(320));

	// _500
	this.instance_4 = new lib.tcar();
	this.instance_4.setTransform(254.75,146.85,0.92,0.92,0,0,0,49.2,20.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(346).to({_off:false},0).to({alpha:1},11).wait(236));

	// emag
	this.instance_5 = new lib.emag_1();
	this.instance_5.setTransform(168.1,150.05,1.31,1.31,0,0,0,104.7,98.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(334).to({_off:false},0).to({scaleX:0.53,scaleY:0.53,y:150.1},12,cjs.Ease.backOut).wait(247));

	// sacosa
	this.instance_6 = new lib.sacosa_1();
	this.instance_6.setTransform(91.15,160.9,1.06,1.06,0,0,0,58.6,76);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(286).to({_off:false},0).to({scaleX:0.44,scaleY:0.44,x:91.2,y:160.95},12,cjs.Ease.backOut).wait(295));

	// _00
	this.instance_7 = new lib.t100();
	this.instance_7.setTransform(50.3,136.75,0.72,0.72,0,0,0,45.6,17.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(300).to({_off:false},0).to({alpha:1},12).wait(281));

	// plus
	this.instance_8 = new lib.tpl();
	this.instance_8.setTransform(80.2,90.55,1.0099,1.0099,0,0,0,62.8,8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(274).to({_off:false},0).to({alpha:1},12).wait(307));

	// line
	this.instance_9 = new lib.line();
	this.instance_9.setTransform(-42.3,155.45,0.6916,0.6916,0,0,0,65,2.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(149).to({_off:false},0).to({x:147.7},19,cjs.Ease.circOut).to({_off:true},105).wait(320));

	// tex
	this.instance_10 = new lib.pt_1();
	this.instance_10.setTransform(187.2,114.7,0.6916,0.6916,0,0,0,200.2,43.9);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(149).to({_off:false},0).to({x:147.2,y:115.7,alpha:1},19,cjs.Ease.circOut).to({_off:true},105).wait(320));

	// rosu
	this.instance_11 = new lib.rd();
	this.instance_11.setTransform(176.05,380.55,1,1,0,0,0,197,114.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(135).to({_off:false},0).to({y:160.55},14,cjs.Ease.circOut).wait(444));

	// amaj
	this.instance_12 = new lib.amaj();
	this.instance_12.setTransform(226.1,201.55,0.31,0.31,0,0,0,130.2,70.7);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(57).to({_off:false},0).to({regX:130.1,regY:70.6,scaleX:0.61,scaleY:0.61},12,cjs.Ease.circOut).wait(524));

	// vs
	this.instance_13 = new lib.vs();
	this.instance_13.setTransform(182.2,136.85,2.28,2.28,0,0,0,44.2,44.6);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(39).to({_off:false},0).to({scaleX:0.64,scaleY:0.64,x:182.3,y:136.9},10,cjs.Ease.backOut).wait(544));

	// asfi
	this.instance_14 = new lib.asfi_1();
	this.instance_14.setTransform(159,75.5,0.22,0.22,0,0,0,78.2,30.7);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(19).to({_off:false},0).to({regY:30.6,scaleX:0.65,scaleY:0.65,x:159.05},13,cjs.Ease.circOut).wait(561));

	// bg
	this.instance_15 = new lib.bg_300x250baiat();

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(593));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(593));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(78.1,122.7,294.9,372.40000000000003);
// library properties:
lib.properties = {
	id: '145E6B4868CAFE4195E8B5C9632D6C13',
	width: 300,
	height: 250,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_1003.png?1663242203849", id:"_1003"},
		{src:"images/_15003.png?1663242203849", id:"_15003"},
		{src:"images/am_baiat.png?1663242203849", id:"am_baiat"},
		{src:"images/asfi.png?1663242203849", id:"asfi"},
		{src:"images/bg_300x250baiat.jpg?1663242203849", id:"bg_300x250baiat"},
		{src:"images/carduri.png?1663242203849", id:"carduri"},
		{src:"images/dis3.png?1663242203849", id:"dis3"},
		{src:"images/emag.png?1663242203849", id:"emag"},
		{src:"images/ip.png?1663242203849", id:"ip"},
		{src:"images/logo_MC.png?1663242203849", id:"logo_MC"},
		{src:"images/pt.png?1663242203849", id:"pt"},
		{src:"images/sacosa.png?1663242203849", id:"sacosa"},
		{src:"images/vs_baiat.png?1663242203849", id:"vs_baiat"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['145E6B4868CAFE4195E8B5C9632D6C13'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;