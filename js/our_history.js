(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"our_history_atlas_1", frames: [[0,0,1981,1981]]},
		{name:"our_history_atlas_2", frames: [[0,420,647,153],[0,0,860,243],[1115,341,843,59],[965,420,837,81],[1092,635,612,59],[862,0,631,241],[1092,574,622,59],[0,245,1113,173],[0,800,1097,77],[0,716,1090,82],[1092,696,608,59],[0,673,525,35],[1495,105,495,69],[1704,503,238,35],[1092,503,610,69],[1115,243,585,96],[0,575,610,96],[649,420,314,294],[1099,757,594,49],[1099,808,385,53],[1495,176,416,53],[1495,0,391,103]]}
];


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



(lib.CachedBmp_23 = function() {
	this.initialize(ss["our_history_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["our_history_atlas_2"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.evolvebadge = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_23();
	this.instance.setTransform(-144.1,-144.1,0.1455,0.1455);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.evolvebadge, new cjs.Rectangle(-144.1,-144.1,288.29999999999995,288.29999999999995), null);


(lib.elipse02 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#F8F8F8").ss(15,1,1).p("EgA5g3uQAdAAAcAAQXGAAQUQUQQVQVAAXFQAAXGwVQUQwUQV3GAAQ3FAAwVwVQwSwSgC3B");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.elipse02, new cjs.Rectangle(-364.2,-364.2,728.4,728.4), null);


(lib.elipse01 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#F8F8F8").ss(30,1,1).p("EACnhKLQdDA5UzU0QVvVvAAevQAAeu1vVvQ1vVv+uAAQ+vAA1v1vQ0909gw9T");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.elipse01, new cjs.Rectangle(-489.8,-489.7,979.6,979.5), null);


(lib.Rectangle43 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmOA+IAAh7IMdAAIAAB7g");
	this.shape.setTransform(39.9,6.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle43, new cjs.Rectangle(0,0,79.8,12.3), null);


(lib.Rectangle4221 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmOA9IAAh5IMdAAIAAB5g");
	this.shape.setTransform(39.875,6.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle4221, new cjs.Rectangle(0,0,79.8,12.3), null);


(lib.Rectangle4220 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmOA9IAAh5IMdAAIAAB5g");
	this.shape.setTransform(39.875,6.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle4220, new cjs.Rectangle(0,0,79.8,12.3), null);


(lib.Rectangle4219 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmOA+IAAh7IMdAAIAAB7g");
	this.shape.setTransform(39.875,6.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle4219, new cjs.Rectangle(0,0,79.8,12.3), null);


(lib.Rectangle4218 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmOA+IAAh7IMdAAIAAB7g");
	this.shape.setTransform(39.875,6.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle4218, new cjs.Rectangle(0,0,79.8,12.3), null);


(lib.Rectangle4217 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmOA9IAAh5IMdAAIAAB5g");
	this.shape.setTransform(39.875,6.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle4217, new cjs.Rectangle(0,0,79.8,12.3), null);


(lib.Rectangle4216 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmOA9IAAh5IMdAAIAAB5g");
	this.shape.setTransform(39.875,6.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle4216, new cjs.Rectangle(0,0,79.8,12.3), null);


(lib.Rectangle4215 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmOA9IAAh5IMdAAIAAB5g");
	this.shape.setTransform(39.875,6.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle4215, new cjs.Rectangle(0,0,79.8,12.3), null);


(lib.Rectangle4214 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmOA+IAAh7IMdAAIAAB7g");
	this.shape.setTransform(39.925,6.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle4214, new cjs.Rectangle(0,0,79.9,12.3), null);


(lib.Rectangle4213 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmOA+IAAh7IMdAAIAAB7g");
	this.shape.setTransform(39.925,6.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle4213, new cjs.Rectangle(0,0,79.9,12.3), null);


(lib.Rectangle4212 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmOA+IAAh7IMdAAIAAB7g");
	this.shape.setTransform(39.925,6.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle4212, new cjs.Rectangle(0,0,79.9,12.3), null);


(lib.Rectangle4211 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmOA+IAAh7IMdAAIAAB7g");
	this.shape.setTransform(39.925,6.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle4211, new cjs.Rectangle(0,0,79.9,12.3), null);


(lib.Rectangle4210 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmOA+IAAh7IMdAAIAAB7g");
	this.shape.setTransform(39.925,6.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle4210, new cjs.Rectangle(0,0,79.9,12.3), null);


(lib.Rectangle429 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmPA+IAAh7IMfAAIAAB7g");
	this.shape.setTransform(39.95,6.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle429, new cjs.Rectangle(0,0,79.9,12.3), null);


(lib.Rectangle428 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmOA9IAAh5IMdAAIAAB5g");
	this.shape.setTransform(39.925,6.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle428, new cjs.Rectangle(0,0,79.9,12.3), null);


(lib.Rectangle427 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmOA+IAAh7IMdAAIAAB7g");
	this.shape.setTransform(39.925,6.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle427, new cjs.Rectangle(0,0,79.9,12.3), null);


(lib.Rectangle426 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmOA+IAAh7IMdAAIAAB7g");
	this.shape.setTransform(39.925,6.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle426, new cjs.Rectangle(0,0,79.9,12.3), null);


(lib.Rectangle425 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmPA9IAAh5IMfAAIAAB5g");
	this.shape.setTransform(39.95,6.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle425, new cjs.Rectangle(0,0,79.9,12.3), null);


(lib.Rectangle424 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmPA+IAAh7IMfAAIAAB7g");
	this.shape.setTransform(39.95,6.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle424, new cjs.Rectangle(0,0,79.9,12.3), null);


(lib.Rectangle423 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmOA+IAAh7IMdAAIAAB7g");
	this.shape.setTransform(39.925,6.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle423, new cjs.Rectangle(0,0,79.9,12.3), null);


(lib.Rectangle422 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmOA+IAAh7IMdAAIAAB7g");
	this.shape.setTransform(39.925,6.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle422, new cjs.Rectangle(0,0,79.9,12.3), null);


(lib.Rectangle42 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AmOA+IAAh7IMdAAIAAB7g");
	this.shape.setTransform(39.925,6.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle42, new cjs.Rectangle(0,0,79.9,12.3), null);


(lib.HistoryBG = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#C0529A","#00528C","#4BB3E2"],[0,0.376,1],-923.3,-1032.9,997.3,982.4).s().p("EiV/BhgMAAAjC/MEr/AAAMAAADC/g");
	this.shape.setTransform(960.025,625.4397,1,1.0024,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HistoryBG, new cjs.Rectangle(0.1,0,1919.9,1250.9), null);


(lib.OurHistory2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_22();
	this.instance.setTransform(-2,-7.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.OurHistory2, new cjs.Rectangle(-2,-7.6,323.5,76.5), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgxDKIAAiXIiYAAIAAhkICYAAIAAiYIBkAAIAACYICXAAIAABkIiXAAIAACXg");
	this.shape.setTransform(20.175,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,40.4,40.4), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_21();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,430,121.5), null);


(lib.Group_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,421.5,29.5), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,418.5,40.5), null);


(lib.Group_2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_1, new cjs.Rectangle(0,0,306,29.5), null);


(lib.Group_1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.CachedBmp_17();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,315.5,120.5), null);


(lib.Group_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.CachedBmp_16();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0_1, new cjs.Rectangle(0,0,311,29.5), null);


(lib.Group_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag4DkIAAirIirAAIAAhxICrAAIAAirIBxAAIAACrICrAAIAABxIirAAIAACrg");
	this.shape.setTransform(22.75,22.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,45.5,45.6), null);


(lib.Group_3_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgjCQIAAhsIhsAAIAAhHIBsAAIAAhsIBHAAIAABsIBsAAIAABHIhsAAIAABsg");
	this.shape.setTransform(14.35,14.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_1, new cjs.Rectangle(0,0,28.7,28.7), null);


(lib.Group_2_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKDEIAAg2QgbgEgTgKQgagOgWgYIAngoQAlAoAjAAQARAAANgMQANgMAAgRQAAgOgIgLQgJgKgYgMQgvgVgSgOQgRgMgJgRQgIgRAAgTQAAgeAXgXQAWgWAjgBIAAgVIAlAAIAAAXQAVAGANAHQAMAHAVAUIgoAnQgbgcgbAAQgOAAgKAIQgKAIAAALQAAAKAJAJQAIAJAZAKQArASATAOQARANAJASQAJATAAAXQAAAYgJATQgKAUgPALQgPAMgdAGIAAA3g");
	this.shape_1.setTransform(10.5,19.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_2, new cjs.Rectangle(0,0,21,39.2), null);


(lib.Group_1_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance_2 = new lib.CachedBmp_15();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_2, new cjs.Rectangle(0,0,556.5,86.5), null);


(lib.Group_0_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance_2 = new lib.CachedBmp_14();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0_2, new cjs.Rectangle(0,0,548.5,38.5), null);


(lib.Group_4 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.CachedBmp_13();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,545,41), null);


(lib.Group_3_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Al9L5Qifh9gxjbIFaAAQAoBRBBAqQBCApBOAAQBuAABLhOQBNhPAAh8QAAh4hHhNQhIhNhlAAQg0AAg1AbQg1AcgzA1IkLg8IDRvAIMqAAIAAExIo1AAIhGE6QAcgIAegFQAdgEAYAAQDsAACbChQCcCfAAD7QAAD+isCtQisCtj2AAQjeAAifh+g");
	this.shape_1.setTransform(59,88.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_2, new cjs.Rectangle(0,0,118,177.5), null);


(lib.Group_2_3 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.CachedBmp_12();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_3, new cjs.Rectangle(0,0,304,29.5), null);


(lib.Group_1_0 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0,0,262.5,17.5), null);


(lib.Group_1_3 = function(mode,startPosition,loop,reversed) {
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
	this.instance_3 = new lib.CachedBmp_10();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_3, new cjs.Rectangle(0,0,247.5,34.5), null);


(lib.Group_0_3 = function(mode,startPosition,loop,reversed) {
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
	this.instance_3 = new lib.CachedBmp_9();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0_3, new cjs.Rectangle(0,0,119,17.5), null);


(lib.Group_5 = function(mode,startPosition,loop,reversed) {
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
	this.instance_2 = new lib.CachedBmp_8();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,305,34.5), null);


(lib.Group_2_4 = function(mode,startPosition,loop,reversed) {
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
	this.instance_2 = new lib.CachedBmp_7();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_4, new cjs.Rectangle(0,0,292.5,48), null);


(lib.Group_1_4 = function(mode,startPosition,loop,reversed) {
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
	this.instance_4 = new lib.CachedBmp_6();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_4, new cjs.Rectangle(0,0,305,48), null);


(lib.Group_0_4 = function(mode,startPosition,loop,reversed) {
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
	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0_4, new cjs.Rectangle(0,0,157,147), null);


(lib.Group_6 = function(mode,startPosition,loop,reversed) {
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
	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,297,24.5), null);


(lib.Group_2_5 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnEKeIAAh3IGVmcQCRiUAxhaQAwhbAAhIQAAhLgygxQgygyhPAAQhPAAg2A7Qg1A8gEBmIjyAAQAJjSB8h7QB7h5DAAAQB3AABbAyQBbAzA3BeQA2BgAABhQAAB0hCCGQhDCGivC3IiSCaIHRAAIAADmg");
	this.shape_2.setTransform(147.225,67);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AnEKeIAAh3IGUmcQCTiUAvhaQAxhZAAhKQAAhMgygwQgygyhPAAQhPAAg1A7Qg1A7gFBnIjyAAQAKjTB6h6QB7h5DAAAQB3AABcAyQBbAzA3BeQA2BfAABiQAAB0hCCGQhDCHivC2IiSCaIHRAAIAADmg");
	this.shape_3.setTransform(45.3,67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_5, new cjs.Rectangle(0,0,192.5,134), null);


(lib.Group_1_5 = function(mode,startPosition,loop,reversed) {
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
	this.instance_5 = new lib.CachedBmp_3();
	this.instance_5.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_5, new cjs.Rectangle(0,0,192.5,26.5), null);


(lib.Group_0_5 = function(mode,startPosition,loop,reversed) {
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
	this.instance_5 = new lib.CachedBmp_2();
	this.instance_5.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0_5, new cjs.Rectangle(0,0,208,26.5), null);


(lib.Group_7 = function(mode,startPosition,loop,reversed) {
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
	this.instance_4 = new lib.CachedBmp_1();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,0,195.5,51.5), null);


(lib.Group4343 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Rectangle4214();
	this.instance.setTransform(129.6,79.95,1,1,0,0,0,39.9,6.2);
	this.instance.alpha = 0.25;

	this.instance_1 = new lib.Rectangle4213();
	this.instance_1.setTransform(39.9,79.95,1,1,0,0,0,39.9,6.2);
	this.instance_1.alpha = 0.25;

	this.instance_2 = new lib.Rectangle4212();
	this.instance_2.setTransform(129.6,30.8,1,1,0,0,0,39.9,6.2);
	this.instance_2.alpha = 0.1016;

	this.instance_3 = new lib.Rectangle4211();
	this.instance_3.setTransform(39.9,30.8,1,1,0,0,0,39.9,6.2);
	this.instance_3.alpha = 0.0508;

	this.instance_4 = new lib.Rectangle4210();
	this.instance_4.setTransform(129.6,6.2,1,1,0,0,0,39.9,6.2);
	this.instance_4.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group4343, new cjs.Rectangle(0,0,169.6,86.1), null);


(lib.Group86 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Rectangle4221();
	this.instance.setTransform(129.45,104.25,1,1,0,0,0,39.9,6.1);
	this.instance.alpha = 0.25;

	this.instance_1 = new lib.Rectangle4220();
	this.instance_1.setTransform(39.9,79.7,1,1,0,0,0,39.9,6.1);
	this.instance_1.alpha = 0.0508;

	this.instance_2 = new lib.Rectangle43();
	this.instance_2.setTransform(220.25,55.25,1,1,0,0,0,39.9,6.2);
	this.instance_2.alpha = 0.1016;

	this.instance_3 = new lib.Rectangle4219();
	this.instance_3.setTransform(39.9,55.25,1,1,0,0,0,39.9,6.2);
	this.instance_3.alpha = 0.25;

	this.instance_4 = new lib.Rectangle4218();
	this.instance_4.setTransform(129.45,30.7,1,1,0,0,0,39.9,6.2);
	this.instance_4.alpha = 0.25;

	this.instance_5 = new lib.Rectangle4217();
	this.instance_5.setTransform(129.45,6.1,1,1,0,0,0,39.9,6.1);
	this.instance_5.alpha = 0.3008;

	this.instance_6 = new lib.Rectangle4216();
	this.instance_6.setTransform(39.9,6.1,1,1,0,0,0,39.9,6.1);
	this.instance_6.alpha = 0.1016;

	this.instance_7 = new lib.Rectangle4215();
	this.instance_7.setTransform(39.9,122.65,1,1,0,0,0,39.9,6.1);
	this.instance_7.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group86, new cjs.Rectangle(0,0,260.2,128.8), null);


(lib.Group85 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Rectangle429();
	this.instance.setTransform(219.4,129.1,1,1,0,0,0,40,6.2);
	this.instance.alpha = 0.25;

	this.instance_1 = new lib.Rectangle428();
	this.instance_1.setTransform(129.6,104.45,1,1,0,0,0,39.9,6.1);
	this.instance_1.alpha = 0.0508;

	this.instance_2 = new lib.Rectangle427();
	this.instance_2.setTransform(129.6,79.95,1,1,0,0,0,39.9,6.2);
	this.instance_2.alpha = 0.25;

	this.instance_3 = new lib.Rectangle426();
	this.instance_3.setTransform(39.9,79.95,1,1,0,0,0,39.9,6.2);
	this.instance_3.alpha = 0.25;

	this.instance_4 = new lib.Rectangle425();
	this.instance_4.setTransform(219.4,55.3,1,1,0,0,0,40,6.1);
	this.instance_4.alpha = 0.25;

	this.instance_5 = new lib.Rectangle424();
	this.instance_5.setTransform(219.4,30.8,1,1,0,0,0,40,6.2);
	this.instance_5.alpha = 0.3008;

	this.instance_6 = new lib.Rectangle423();
	this.instance_6.setTransform(129.6,30.8,1,1,0,0,0,39.9,6.2);
	this.instance_6.alpha = 0.1016;

	this.instance_7 = new lib.Rectangle422();
	this.instance_7.setTransform(39.9,30.8,1,1,0,0,0,39.9,6.2);
	this.instance_7.alpha = 0.0508;

	this.instance_8 = new lib.Rectangle42();
	this.instance_8.setTransform(129.6,6.2,1,1,0,0,0,39.9,6.2);
	this.instance_8.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group85, new cjs.Rectangle(0,0,259.3,135.2), null);


(lib.SuccessfullyServed = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_0();
	this.instance.setTransform(210.6,14.7,1,1,0,0,0,210.6,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SuccessfullyServed, new cjs.Rectangle(0,0,421.5,29.5), null);


(lib.ADCAMPAIGNS = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group();
	this.instance.setTransform(209.1,20.4,1,1,0,0,0,209.1,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ADCAMPAIGNS, new cjs.Rectangle(0,0,418.5,40.5), null);


(lib._50 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_2();
	this.instance.setTransform(458.9,27.45,1,1,0,0,0,20.2,20.2);

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(215.1,60.7,1,1,0,0,0,215.1,60.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._50, new cjs.Rectangle(0,0,479.1,121.5), null);


(lib.READERSSERVED = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_2_1();
	this.instance.setTransform(152.8,14.7,1,1,0,0,0,152.8,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.READERSSERVED, new cjs.Rectangle(0,0,306,29.5), null);


(lib.LOYALMONTHLY = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_0_1();
	this.instance.setTransform(155.5,14.7,1,1,0,0,0,155.5,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOYALMONTHLY, new cjs.Rectangle(0,0,311,29.5), null);


(lib._40M = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_3();
	this.instance.setTransform(347.95,31,1,1,0,0,0,22.8,22.8);

	this.instance_1 = new lib.Group_1_1();
	this.instance_1.setTransform(157.8,60.4,1,1,0,0,0,157.8,60.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._40M, new cjs.Rectangle(0,0,370.7,120.5), null);


(lib.INCUMULATIVESOLD = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_4();
	this.instance.setTransform(272.6,20.4,1,1,0,0,0,272.6,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.INCUMULATIVESOLD, new cjs.Rectangle(0,0,545,41), null);


(lib.ADVERTISINGREVENUE = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_0_2();
	this.instance.setTransform(274.1,19.2,1,1,0,0,0,274.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ADVERTISINGREVENUE, new cjs.Rectangle(0,0,548.5,38.5), null);


(lib._900000 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_3_1();
	this.instance.setTransform(605.3,19.5,1,1,0,0,0,14.3,14.3);

	this.instance_1 = new lib.Group_1_2();
	this.instance_1.setTransform(306.55,43.1,1,1,0,0,0,278.4,43.1);

	this.instance_2 = new lib.Group_2_2();
	this.instance_2.setTransform(10.5,37,1,1,0,0,0,10.5,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._900000, new cjs.Rectangle(0,0,619.7,86.5), null);


(lib.OPERATIONSSPANNINGTHEGLOBE = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_0_3();
	this.instance.setTransform(59.6,31.7,1,1,0,0,0,59.6,8.7);

	this.instance_1 = new lib.Group_1_0();
	this.instance_1.setTransform(132.25,8.7,1,1,0,0,0,131.3,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.OPERATIONSSPANNINGTHEGLOBE, new cjs.Rectangle(0,0,263.5,40.5), null);


(lib.COUNTRIESWITHBOOTSONTHEGROUND = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_5();
	this.instance.setTransform(152.4,106.25,1,1,0,0,0,152.4,17.4);

	this.instance_1 = new lib.Group_1_3();
	this.instance_1.setTransform(126.85,59.25,1,1,0,0,0,123.7,17.4);

	this.instance_2 = new lib.Group_2_3();
	this.instance_2.setTransform(153.7,14.7,1,1,0,0,0,152.1,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.COUNTRIESWITHBOOTSONTHEGROUND, new cjs.Rectangle(0,0,305.6,123.4), null);


(lib._5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_3_2();
	this.instance.setTransform(59,88.7,1,1,0,0,0,59,88.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._5, new cjs.Rectangle(0,0,118,177.5), null);


(lib.OWNEDOPERATEDWEBPUBLICATIONS = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_6();
	this.instance.setTransform(151.45,126.45,1,1,0,0,0,148.4,12.3);

	this.instance_1 = new lib.Group_1_4();
	this.instance_1.setTransform(152.6,80.95,1,1,0,0,0,152.6,24.1);

	this.instance_2 = new lib.Group_2_4();
	this.instance_2.setTransform(146.3,24.1,1,1,0,0,0,146.3,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.OWNEDOPERATEDWEBPUBLICATIONS, new cjs.Rectangle(0,0,305,138.7), null);


(lib._16 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_0_4();
	this.instance.setTransform(78.5,73.5,1,1,0,0,0,78.5,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._16, new cjs.Rectangle(0,0,157,147), null);


(lib.YEARS = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_7();
	this.instance.setTransform(97.8,25.7,1,1,0,0,0,97.8,25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.YEARS, new cjs.Rectangle(0,0,195.5,51.5), null);


(lib.INBUSINESSOPERATIONS = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_0_5();
	this.instance.setTransform(104,48.2,1,1,0,0,0,104,13.2);

	this.instance_1 = new lib.Group_1_5();
	this.instance_1.setTransform(97.1,13.2,1,1,0,0,0,96.2,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.INBUSINESSOPERATIONS, new cjs.Rectangle(0,0,208,61.5), null);


(lib._22 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_2_5();
	this.instance.setTransform(96.2,67,1,1,0,0,0,96.2,67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._22, new cjs.Rectangle(0,0,192.5,134), null);


(lib._900Mrevenue = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._900000();
	this.instance.setTransform(0.05,-56.85,1,1,0,0,0,309.9,43.1);

	this.instance_1 = new lib.ADVERTISINGREVENUE();
	this.instance_1.setTransform(0.3,80.75,1,1,0,0,0,274.1,19.2);

	this.instance_2 = new lib.INCUMULATIVESOLD();
	this.instance_2.setTransform(1.75,20.85,1,1,0,0,0,272.6,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._900Mrevenue, new cjs.Rectangle(-309.8,-99.9,619.7,200), null);


(lib._50kcampaigns = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._50();
	this.instance.setTransform(0,-47.85,1,1,0,0,0,239.5,60.7);

	this.instance_1 = new lib.SuccessfullyServed();
	this.instance_1.setTransform(-26.7,93.85,1,1,0,0,0,210.6,14.7);

	this.instance_2 = new lib.ADCAMPAIGNS();
	this.instance_2.setTransform(-28.4,44.65,1,1,0,0,0,209.1,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._50kcampaigns, new cjs.Rectangle(-239.5,-108.5,479.1,217.2), null);


(lib._40Mreaders = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.READERSSERVED();
	this.instance.setTransform(-32.2,91.05,1,1,0,0,0,152.8,14.7);

	this.instance_1 = new lib.LOYALMONTHLY();
	this.instance_1.setTransform(-29.7,42.6,1,1,0,0,0,155.5,14.7);

	this.instance_2 = new lib._40M();
	this.instance_2.setTransform(0,-45.3,1,1,0,0,0,185.3,60.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._40Mreaders, new cjs.Rectangle(-185.3,-105.7,370.70000000000005,211.60000000000002), null);


(lib._22years = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._22();
	this.instance.setTransform(-113.15,0,1,1,0,0,0,96.2,67);

	this.instance_1 = new lib.INBUSINESSOPERATIONS();
	this.instance_1.setTransform(105.4,36.3,1,1,0,0,0,104,30.7);

	this.instance_2 = new lib.YEARS();
	this.instance_2.setTransform(99.65,-34.6,1,1,0,0,0,97.8,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._22years, new cjs.Rectangle(-209.3,-67,418.70000000000005,134.1), null);


(lib._16ono = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._16();
	this.instance.setTransform(-159.35,-0.05,1,1,0,0,0,78.5,73.5);

	this.instance_1 = new lib.OWNEDOPERATEDWEBPUBLICATIONS();
	this.instance_1.setTransform(85.3,3.95,1,1,0,0,0,152.6,69.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._16ono, new cjs.Rectangle(-237.8,-73.5,475.5,147), null);


(lib._5countries = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._5();
	this.instance.setTransform(-164.2,0.5,1,1,0,0,0,59,88.7);

	this.instance_1 = new lib.OPERATIONSSPANNINGTHEGLOBE();
	this.instance_1.setTransform(49.15,68.4,1,1,0,0,0,131.8,20.2);

	this.instance_2 = new lib.COUNTRIESWITHBOOTSONTHEGROUND();
	this.instance_2.setTransform(70.3,-27.4,1,1,0,0,0,152.8,61.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._5countries, new cjs.Rectangle(-223.2,-89.2,446.29999999999995,178.5), null);


// stage content:
(lib.our_history = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [59];
	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Our_History
	this.instance = new lib.OurHistory2();
	this.instance.setTransform(967.05,107.3,1,1,0,0,0,159.7,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Layer_2
	this.instance_1 = new lib.elipse02();
	this.instance_1.setTransform(960,688);
	this.instance_1.alpha = 0.0195;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.9983,scaleY:0.9983,rotation:1.3075,y:688.1125,alpha:0.1271},0).wait(1).to({scaleX:0.9933,scaleY:0.9933,rotation:5.2039,y:688.4478,alpha:0.2343},0).wait(1).to({scaleX:0.9848,scaleY:0.9848,rotation:11.7414,y:689.0103,alpha:0.3414},0).wait(1).to({scaleX:0.973,scaleY:0.973,rotation:20.92,y:689.8,alpha:0.4486},0).wait(1).to({scaleX:0.9578,scaleY:0.9578,rotation:32.6875,y:690.8125,alpha:0.5557},0).wait(1).to({scaleX:0.9392,scaleY:0.9392,rotation:47.07,y:692.05,alpha:0.6629},0).wait(1).to({scaleX:0.9172,scaleY:0.9172,rotation:64.0675,y:693.5125,alpha:0.77},0).wait(1).to({scaleX:0.8919,scaleY:0.8919,rotation:83.68,y:695.2,alpha:0.7208},0).wait(1).to({scaleX:0.8632,scaleY:0.8632,rotation:105.8814,y:697.1102,alpha:0.6715},0).wait(1).to({scaleX:0.831,scaleY:0.831,rotation:130.75,y:699.25,alpha:0.6223},0).wait(1).to({scaleX:0.7956,scaleY:0.7956,rotation:158.1814,y:701.6102,alpha:0.5731},0).wait(1).to({scaleX:0.7567,scaleY:0.7567,rotation:188.28,y:704.2,alpha:0.5238},0).wait(1).to({scaleX:0.7145,scaleY:0.7145,rotation:220.9414,y:707.0103,alpha:0.4746},0).wait(1).to({scaleX:0.6689,scaleY:0.6689,rotation:256.27,y:710.05,alpha:0.4254},0).wait(1).to({scaleX:0.6199,scaleY:0.6199,rotation:294.1875,y:713.3125,alpha:0.3762},0).wait(1).to({scaleX:0.5675,scaleY:0.5675,rotation:334.72,y:716.8,alpha:0.3269},0).wait(1).to({scaleX:0.5118,scaleY:0.5118,rotation:377.8675,y:720.5125,alpha:0.2777},0).wait(1).to({scaleX:0.4527,scaleY:0.4527,rotation:423.6039,y:724.4478,alpha:0.2285},0).wait(1).to({scaleX:0.3901,scaleY:0.3901,rotation:472.0075,y:728.6125,alpha:0.1792},0).wait(1).to({scaleX:0.3242,scaleY:0.3242,rotation:523,y:733,alpha:0.13},0).to({_off:true},1).wait(39));

	// Layer_1
	this.instance_2 = new lib.elipse01();
	this.instance_2.setTransform(960,688);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:0.9982,scaleY:0.9982,rotation:-1.05,y:688.1125,alpha:0.12},0).wait(1).to({scaleX:0.9926,scaleY:0.9926,rotation:-4.179,y:688.4478,alpha:0.24},0).wait(1).to({scaleX:0.9833,scaleY:0.9833,rotation:-9.429,y:689.0103,alpha:0.36},0).wait(1).to({scaleX:0.9703,scaleY:0.9703,rotation:-16.8,y:689.8,alpha:0.48},0).wait(1).to({scaleX:0.9535,scaleY:0.9535,rotation:-26.25,y:690.8125,alpha:0.6},0).wait(1).to({scaleX:0.9331,scaleY:0.9331,rotation:-37.8,y:692.05,alpha:0.72},0).wait(1).to({scaleX:0.9089,scaleY:0.9089,rotation:-51.45,y:693.5125,alpha:0.6686},0).wait(1).to({scaleX:0.881,scaleY:0.881,rotation:-67.2,y:695.2,alpha:0.6171},0).wait(1).to({scaleX:0.8494,scaleY:0.8494,rotation:-85.029,y:697.1102,alpha:0.5657},0).wait(1).to({scaleX:0.8141,scaleY:0.8141,rotation:-105,y:699.25,alpha:0.5143},0).wait(1).to({scaleX:0.775,scaleY:0.775,rotation:-127.029,y:701.6102,alpha:0.4629},0).wait(1).to({scaleX:0.7322,scaleY:0.7322,rotation:-151.2,y:704.2,alpha:0.4114},0).wait(1).to({scaleX:0.6858,scaleY:0.6858,rotation:-177.429,y:707.0103,alpha:0.36},0).wait(1).to({scaleX:0.6355,scaleY:0.6355,rotation:-205.8,y:710.05,alpha:0.3086},0).wait(1).to({scaleX:0.5816,scaleY:0.5816,rotation:-236.25,y:713.3125,alpha:0.2571},0).wait(1).to({scaleX:0.524,scaleY:0.524,rotation:-268.8,y:716.8,alpha:0.2057},0).wait(1).to({scaleX:0.4626,scaleY:0.4626,rotation:-303.45,y:720.5125,alpha:0.1543},0).wait(1).to({scaleX:0.3976,scaleY:0.3976,rotation:-340.179,y:724.4478,alpha:0.1029},0).wait(1).to({scaleX:0.3287,scaleY:0.3287,rotation:-379.05,y:728.6125,alpha:0.0514},0).wait(1).to({scaleX:0.2562,scaleY:0.2562,rotation:-420,y:733,alpha:0},0).to({_off:true},1).wait(39));

	// Layer_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_22 = new cjs.Graphics().p("EAMvBEdMAAAgo8MBlmAAAMAAAAo8g");
	var mask_graphics_23 = new cjs.Graphics().p("EAKiBEdMAAAgo8MBllAAAMAAAAo8g");
	var mask_graphics_24 = new cjs.Graphics().p("EAIUBEdMAAAgo8MBlmAAAMAAAAo8g");
	var mask_graphics_25 = new cjs.Graphics().p("EAGHBEdMAAAgo8MBllAAAMAAAAo8g");
	var mask_graphics_26 = new cjs.Graphics().p("EAD5BEdMAAAgo8MBlmAAAMAAAAo8g");
	var mask_graphics_27 = new cjs.Graphics().p("EABsBEdMAAAgo8MBllAAAMAAAAo8g");
	var mask_graphics_28 = new cjs.Graphics().p("EACbBAKMAAAgo8MBlmAAAMAAAAo8g");
	var mask_graphics_29 = new cjs.Graphics().p("EADLA73MAAAgo8MBllAAAMAAAAo8g");
	var mask_graphics_30 = new cjs.Graphics().p("EAD6A3kMAAAgo8MBlmAAAMAAAAo8g");
	var mask_graphics_31 = new cjs.Graphics().p("EAEqAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_32 = new cjs.Graphics().p("EgCKAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_33 = new cjs.Graphics().p("EgI/AzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_34 = new cjs.Graphics().p("EgPzAzRMAAAgo9MBlkAAAMAAAAo9g");
	var mask_graphics_35 = new cjs.Graphics().p("EgWoAzRMAAAgo9MBlkAAAMAAAAo9g");
	var mask_graphics_36 = new cjs.Graphics().p("EgddAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_37 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_38 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_39 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_40 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_41 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_42 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_43 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_44 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_45 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_46 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_47 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_48 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_49 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_50 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_51 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_52 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_53 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_54 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_55 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_56 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_57 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_58 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");
	var mask_graphics_59 = new cjs.Graphics().p("EgkSAzRMAAAgo9MBllAAAMAAAAo9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_graphics_22,x:731.675,y:438.125}).wait(1).to({graphics:mask_graphics_23,x:717.525,y:438.125}).wait(1).to({graphics:mask_graphics_24,x:703.375,y:438.125}).wait(1).to({graphics:mask_graphics_25,x:689.225,y:438.125}).wait(1).to({graphics:mask_graphics_26,x:675.075,y:438.125}).wait(1).to({graphics:mask_graphics_27,x:660.925,y:438.125}).wait(1).to({graphics:mask_graphics_28,x:665.675,y:410.6188}).wait(1).to({graphics:mask_graphics_29,x:670.425,y:383.1125}).wait(1).to({graphics:mask_graphics_30,x:675.175,y:355.6063}).wait(1).to({graphics:mask_graphics_31,x:679.925,y:328.1}).wait(1).to({graphics:mask_graphics_32,x:636.25,y:328.1}).wait(1).to({graphics:mask_graphics_33,x:592.575,y:328.1}).wait(1).to({graphics:mask_graphics_34,x:548.9,y:328.1}).wait(1).to({graphics:mask_graphics_35,x:505.225,y:328.1}).wait(1).to({graphics:mask_graphics_36,x:461.55,y:328.1}).wait(1).to({graphics:mask_graphics_37,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_38,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_39,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_40,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_41,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_42,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_43,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_44,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_45,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_46,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_47,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_48,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_49,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_50,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_51,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_52,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_53,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_54,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_55,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_56,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_57,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_58,x:417.875,y:328.1}).wait(1).to({graphics:mask_graphics_59,x:417.875,y:328.1}).wait(1));

	// top_left_line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F8F8F8").ss(2,1,1).p("EAtVARMIs1AAMAAAgiXMhN0AAA");
	this.shape.setTransform(508.175,522.075);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(22).to({_off:false},0).wait(38));

	// Layer_9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_25 = new cjs.Graphics().p("EgB4A7oMAAAgo9MCAeAAAMAAAAo9g");
	var mask_1_graphics_26 = new cjs.Graphics().p("EgGNA7HMAAAgo9MCAeAAAMAAAAo9g");
	var mask_1_graphics_27 = new cjs.Graphics().p("EgKiA6mMAAAgo9MCAdAAAMAAAAo9g");
	var mask_1_graphics_28 = new cjs.Graphics().p("EgO3A6FMAAAgo9MCAdAAAMAAAAo9g");
	var mask_1_graphics_29 = new cjs.Graphics().p("EgTNA5kMAAAgo9MCAeAAAMAAAAo9g");
	var mask_1_graphics_30 = new cjs.Graphics().p("EgTFA6rMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_31 = new cjs.Graphics().p("EgS+A7zMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_32 = new cjs.Graphics().p("EgS3A87MAAAgo9MCAdAAAMAAAAo9g");
	var mask_1_graphics_33 = new cjs.Graphics().p("EgSwA+DMAAAgo9MCAeAAAMAAAAo9g");
	var mask_1_graphics_34 = new cjs.Graphics().p("EgaFA+bMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_35 = new cjs.Graphics().p("EghbA+0MAAAgo9MCAeAAAMAAAAo9g");
	var mask_1_graphics_36 = new cjs.Graphics().p("EgowA/MMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_37 = new cjs.Graphics().p("EgwFA/kMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_38 = new cjs.Graphics().p("Eg3bA/9MAAAgo9MCAeAAAMAAAAo9g");
	var mask_1_graphics_39 = new cjs.Graphics().p("Eg+wBAVMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_40 = new cjs.Graphics().p("Eg+wBAVMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_41 = new cjs.Graphics().p("Eg+wBAVMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_42 = new cjs.Graphics().p("Eg+wBAVMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_43 = new cjs.Graphics().p("Eg+wBAVMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_44 = new cjs.Graphics().p("Eg+wBAVMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_45 = new cjs.Graphics().p("Eg+wBAVMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_46 = new cjs.Graphics().p("Eg+wBAVMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_47 = new cjs.Graphics().p("Eg+wBAVMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_48 = new cjs.Graphics().p("Eg+wBAVMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_49 = new cjs.Graphics().p("Eg+wBAVMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_50 = new cjs.Graphics().p("Eg+wBAVMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_51 = new cjs.Graphics().p("Eg+wBAVMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_52 = new cjs.Graphics().p("Eg+wBAVMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_53 = new cjs.Graphics().p("Eg+wBAVMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_54 = new cjs.Graphics().p("Eg+wBAVMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_55 = new cjs.Graphics().p("Eg+wBAVMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_56 = new cjs.Graphics().p("Eg+wBAVMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_57 = new cjs.Graphics().p("Eg+wBAVMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_58 = new cjs.Graphics().p("Eg+wBAVMAAAgo8MCAdAAAMAAAAo8g");
	var mask_1_graphics_59 = new cjs.Graphics().p("Eg+wBAVMAAAgo8MCAdAAAMAAAAo8g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_1_graphics_25,x:810.175,y:381.6}).wait(1).to({graphics:mask_1_graphics_26,x:782.4518,y:378.2875}).wait(1).to({graphics:mask_1_graphics_27,x:754.7268,y:374.975}).wait(1).to({graphics:mask_1_graphics_28,x:727.0018,y:371.6625}).wait(1).to({graphics:mask_1_graphics_29,x:699.2768,y:368.35}).wait(1).to({graphics:mask_1_graphics_30,x:699.9955,y:375.5313}).wait(1).to({graphics:mask_1_graphics_31,x:700.7143,y:382.7125}).wait(1).to({graphics:mask_1_graphics_32,x:701.433,y:389.8938}).wait(1).to({graphics:mask_1_graphics_33,x:702.1518,y:397.075}).wait(1).to({graphics:mask_1_graphics_34,x:655.2143,y:399.5167}).wait(1).to({graphics:mask_1_graphics_35,x:608.2768,y:401.9583}).wait(1).to({graphics:mask_1_graphics_36,x:561.3393,y:404.4}).wait(1).to({graphics:mask_1_graphics_37,x:514.4018,y:406.8417}).wait(1).to({graphics:mask_1_graphics_38,x:467.4643,y:409.2833}).wait(1).to({graphics:mask_1_graphics_39,x:420.5268,y:411.725}).wait(1).to({graphics:mask_1_graphics_40,x:420.5268,y:411.725}).wait(1).to({graphics:mask_1_graphics_41,x:420.5268,y:411.725}).wait(1).to({graphics:mask_1_graphics_42,x:420.5268,y:411.725}).wait(1).to({graphics:mask_1_graphics_43,x:420.5268,y:411.725}).wait(1).to({graphics:mask_1_graphics_44,x:420.5268,y:411.725}).wait(1).to({graphics:mask_1_graphics_45,x:420.5268,y:411.725}).wait(1).to({graphics:mask_1_graphics_46,x:420.5268,y:411.725}).wait(1).to({graphics:mask_1_graphics_47,x:420.5268,y:411.725}).wait(1).to({graphics:mask_1_graphics_48,x:420.5268,y:411.725}).wait(1).to({graphics:mask_1_graphics_49,x:420.5268,y:411.725}).wait(1).to({graphics:mask_1_graphics_50,x:420.5268,y:411.725}).wait(1).to({graphics:mask_1_graphics_51,x:420.5268,y:411.725}).wait(1).to({graphics:mask_1_graphics_52,x:420.5268,y:411.725}).wait(1).to({graphics:mask_1_graphics_53,x:420.5268,y:411.725}).wait(1).to({graphics:mask_1_graphics_54,x:420.5268,y:411.725}).wait(1).to({graphics:mask_1_graphics_55,x:420.5268,y:411.725}).wait(1).to({graphics:mask_1_graphics_56,x:420.5268,y:411.725}).wait(1).to({graphics:mask_1_graphics_57,x:420.5268,y:411.725}).wait(1).to({graphics:mask_1_graphics_58,x:420.5268,y:411.725}).wait(1).to({graphics:mask_1_graphics_59,x:420.5268,y:411.725}).wait(1));

	// center_left_line
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F8F8F8").ss(2,0,0,4).p("Eg4HAD2MBSAAAAIAJnqIeGAA");
	this.shape_1.setTransform(417.325,759.8);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(25).to({_off:false},0).wait(35));

	// Layer_10 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_28 = new cjs.Graphics().p("EAFNBA2MAAAg+VMB0/AAAMAAAA+Vg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EAEDBA2MAAAg+VMB0/AAAMAAAA+Vg");
	var mask_2_graphics_30 = new cjs.Graphics().p("EAC5BA2MAAAg+VMB0/AAAMAAAA+Vg");
	var mask_2_graphics_31 = new cjs.Graphics().p("EABvBA2MAAAg+VMB0/AAAMAAAA+Vg");
	var mask_2_graphics_32 = new cjs.Graphics().p("EAAlBA2MAAAg+VMB0/AAAMAAAA+Vg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EgAkBA2MAAAg+VMB0+AAAMAAAA+Vg");
	var mask_2_graphics_34 = new cjs.Graphics().p("EgAiBFtMAAAg+WMB09AAAMAAAA+Wg");
	var mask_2_graphics_35 = new cjs.Graphics().p("EgAhBKjMAAAg+WMB09AAAMAAAA+Wg");
	var mask_2_graphics_36 = new cjs.Graphics().p("EgAgBPZMAAAg+VMB09AAAMAAAA+Vg");
	var mask_2_graphics_37 = new cjs.Graphics().p("EgAfBUPMAAAg+VMB0+AAAMAAAA+Vg");
	var mask_2_graphics_38 = new cjs.Graphics().p("EgAeBZFMAAAg+VMB0+AAAMAAAA+Vg");
	var mask_2_graphics_39 = new cjs.Graphics().p("EgFlBZFMAAAg+VMB09AAAMAAAA+Vg");
	var mask_2_graphics_40 = new cjs.Graphics().p("EgKtBZFMAAAg+VMB09AAAMAAAA+Vg");
	var mask_2_graphics_41 = new cjs.Graphics().p("EgP1BZFMAAAg+VMB0+AAAMAAAA+Vg");
	var mask_2_graphics_42 = new cjs.Graphics().p("EgU9BZFMAAAg+VMB0+AAAMAAAA+Vg");
	var mask_2_graphics_43 = new cjs.Graphics().p("EgaEBZFMAAAg+VMB09AAAMAAAA+Vg");
	var mask_2_graphics_44 = new cjs.Graphics().p("EgfMBZFMAAAg+VMB09AAAMAAAA+Vg");
	var mask_2_graphics_45 = new cjs.Graphics().p("EgkUBZFMAAAg+VMB09AAAMAAAA+Vg");
	var mask_2_graphics_46 = new cjs.Graphics().p("EgpcBZFMAAAg+VMB0+AAAMAAAA+Vg");
	var mask_2_graphics_47 = new cjs.Graphics().p("EgpcBZFMAAAg+VMB0+AAAMAAAA+Vg");
	var mask_2_graphics_48 = new cjs.Graphics().p("EgpcBZFMAAAg+VMB0+AAAMAAAA+Vg");
	var mask_2_graphics_49 = new cjs.Graphics().p("EgpcBZFMAAAg+VMB0+AAAMAAAA+Vg");
	var mask_2_graphics_50 = new cjs.Graphics().p("EgpcBZFMAAAg+VMB0+AAAMAAAA+Vg");
	var mask_2_graphics_51 = new cjs.Graphics().p("EgpcBZFMAAAg+VMB0+AAAMAAAA+Vg");
	var mask_2_graphics_52 = new cjs.Graphics().p("EgpcBZFMAAAg+VMB0+AAAMAAAA+Vg");
	var mask_2_graphics_53 = new cjs.Graphics().p("EgpcBZFMAAAg+VMB0+AAAMAAAA+Vg");
	var mask_2_graphics_54 = new cjs.Graphics().p("EgpcBZFMAAAg+VMB0+AAAMAAAA+Vg");
	var mask_2_graphics_55 = new cjs.Graphics().p("EgpcBZFMAAAg+VMB0+AAAMAAAA+Vg");
	var mask_2_graphics_56 = new cjs.Graphics().p("EgpcBZFMAAAg+VMB0+AAAMAAAA+Vg");
	var mask_2_graphics_57 = new cjs.Graphics().p("EgpcBZFMAAAg+VMB0+AAAMAAAA+Vg");
	var mask_2_graphics_58 = new cjs.Graphics().p("EgpcBZFMAAAg+VMB0+AAAMAAAA+Vg");
	var mask_2_graphics_59 = new cjs.Graphics().p("EgpcBZFMAAAg+VMB0+AAAMAAAA+Vg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(28).to({graphics:mask_2_graphics_28,x:781.95,y:415.0493}).wait(1).to({graphics:mask_2_graphics_29,x:774.5551,y:415.05}).wait(1).to({graphics:mask_2_graphics_30,x:767.1601,y:415.05}).wait(1).to({graphics:mask_2_graphics_31,x:759.7651,y:415.05}).wait(1).to({graphics:mask_2_graphics_32,x:752.3701,y:415.05}).wait(1).to({graphics:mask_2_graphics_33,x:744.9751,y:415.05}).wait(1).to({graphics:mask_2_graphics_34,x:745.0951,y:446.06}).wait(1).to({graphics:mask_2_graphics_35,x:745.2151,y:477.07}).wait(1).to({graphics:mask_2_graphics_36,x:745.3351,y:508.08}).wait(1).to({graphics:mask_2_graphics_37,x:745.4551,y:539.09}).wait(1).to({graphics:mask_2_graphics_38,x:745.5751,y:570.1}).wait(1).to({graphics:mask_2_graphics_39,x:712.8001,y:570.1}).wait(1).to({graphics:mask_2_graphics_40,x:680.0251,y:570.1}).wait(1).to({graphics:mask_2_graphics_41,x:647.2501,y:570.1}).wait(1).to({graphics:mask_2_graphics_42,x:614.4751,y:570.1}).wait(1).to({graphics:mask_2_graphics_43,x:581.7001,y:570.1}).wait(1).to({graphics:mask_2_graphics_44,x:548.9251,y:570.1}).wait(1).to({graphics:mask_2_graphics_45,x:516.1501,y:570.1}).wait(1).to({graphics:mask_2_graphics_46,x:483.3751,y:570.1}).wait(1).to({graphics:mask_2_graphics_47,x:483.3751,y:570.1}).wait(1).to({graphics:mask_2_graphics_48,x:483.3751,y:570.1}).wait(1).to({graphics:mask_2_graphics_49,x:483.3751,y:570.1}).wait(1).to({graphics:mask_2_graphics_50,x:483.3751,y:570.1}).wait(1).to({graphics:mask_2_graphics_51,x:483.3751,y:570.1}).wait(1).to({graphics:mask_2_graphics_52,x:483.3751,y:570.1}).wait(1).to({graphics:mask_2_graphics_53,x:483.3751,y:570.1}).wait(1).to({graphics:mask_2_graphics_54,x:483.3751,y:570.1}).wait(1).to({graphics:mask_2_graphics_55,x:483.3751,y:570.1}).wait(1).to({graphics:mask_2_graphics_56,x:483.3751,y:570.1}).wait(1).to({graphics:mask_2_graphics_57,x:483.3751,y:570.1}).wait(1).to({graphics:mask_2_graphics_58,x:483.3751,y:570.1}).wait(1).to({graphics:mask_2_graphics_59,x:483.3751,y:570.1}).wait(1));

	// bottom_line_left
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F8F8F8").ss(2,0,0,4).p("Egt7AXCMBQ3AAAMAAAguDILAAA");
	this.shape_2.setTransform(519.225,975.8);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(28).to({_off:false},0).wait(32));

	// Layer_11 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_31 = new cjs.Graphics().p("EgqFBF3MAAAgo9MB+4AAAMAAAAo9g");
	var mask_3_graphics_32 = new cjs.Graphics().p("EgoqBF3MAAAgo9MB+5AAAMAAAAo9g");
	var mask_3_graphics_33 = new cjs.Graphics().p("EgnOBF3MAAAgo9MB+4AAAMAAAAo9g");
	var mask_3_graphics_34 = new cjs.Graphics().p("EglyBF3MAAAgo9MB+4AAAMAAAAo9g");
	var mask_3_graphics_35 = new cjs.Graphics().p("EgkXBF3MAAAgo9MB+5AAAMAAAAo9g");
	var mask_3_graphics_36 = new cjs.Graphics().p("Egi7BF3MAAAgo9MB+5AAAMAAAAo9g");
	var mask_3_graphics_37 = new cjs.Graphics().p("Egi7BC+MAAAgo8MB+5AAAMAAAAo8g");
	var mask_3_graphics_38 = new cjs.Graphics().p("Egi7BAGMAAAgo8MB+5AAAMAAAAo8g");
	var mask_3_graphics_39 = new cjs.Graphics().p("Egi7A9OMAAAgo9MB+5AAAMAAAAo9g");
	var mask_3_graphics_40 = new cjs.Graphics().p("Egi7A6WMAAAgo9MB+5AAAMAAAAo9g");
	var mask_3_graphics_41 = new cjs.Graphics().p("Egi7A3dMAAAgo8MB+5AAAMAAAAo8g");
	var mask_3_graphics_42 = new cjs.Graphics().p("Egc6A3dMAAAgo8MB+5AAAMAAAAo8g");
	var mask_3_graphics_43 = new cjs.Graphics().p("EgW4A3dMAAAgo8MB+4AAAMAAAAo8g");
	var mask_3_graphics_44 = new cjs.Graphics().p("EgQ3A3dMAAAgo8MB+5AAAMAAAAo8g");
	var mask_3_graphics_45 = new cjs.Graphics().p("EgK1A3dMAAAgo8MB+4AAAMAAAAo8g");
	var mask_3_graphics_46 = new cjs.Graphics().p("EgE0A3dMAAAgo8MB+4AAAMAAAAo8g");
	var mask_3_graphics_47 = new cjs.Graphics().p("EABMA3dMAAAgo8MB+6AAAMAAAAo8g");
	var mask_3_graphics_48 = new cjs.Graphics().p("EAHOA3dMAAAgo8MB+5AAAMAAAAo8g");
	var mask_3_graphics_49 = new cjs.Graphics().p("EANPA3dMAAAgo8MB+6AAAMAAAAo8g");
	var mask_3_graphics_50 = new cjs.Graphics().p("EANPA3dMAAAgo8MB+6AAAMAAAAo8g");
	var mask_3_graphics_51 = new cjs.Graphics().p("EANPA3dMAAAgo8MB+6AAAMAAAAo8g");
	var mask_3_graphics_52 = new cjs.Graphics().p("EANPA3dMAAAgo8MB+6AAAMAAAAo8g");
	var mask_3_graphics_53 = new cjs.Graphics().p("EANPA3dMAAAgo8MB+6AAAMAAAAo8g");
	var mask_3_graphics_54 = new cjs.Graphics().p("EANPA3dMAAAgo8MB+6AAAMAAAAo8g");
	var mask_3_graphics_55 = new cjs.Graphics().p("EANPA3dMAAAgo8MB+6AAAMAAAAo8g");
	var mask_3_graphics_56 = new cjs.Graphics().p("EANPA3dMAAAgo8MB+6AAAMAAAAo8g");
	var mask_3_graphics_57 = new cjs.Graphics().p("EANPA3dMAAAgo8MB+6AAAMAAAAo8g");
	var mask_3_graphics_58 = new cjs.Graphics().p("EANPA3dMAAAgo8MB+6AAAMAAAAo8g");
	var mask_3_graphics_59 = new cjs.Graphics().p("EANPA3dMAAAgo8MB+6AAAMAAAAo8g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_3_graphics_31,x:542.7,y:447.075}).wait(1).to({graphics:mask_3_graphics_32,x:551.8699,y:447.075}).wait(1).to({graphics:mask_3_graphics_33,x:561.0399,y:447.075}).wait(1).to({graphics:mask_3_graphics_34,x:570.2099,y:447.075}).wait(1).to({graphics:mask_3_graphics_35,x:579.3799,y:447.075}).wait(1).to({graphics:mask_3_graphics_36,x:588.5499,y:447.075}).wait(1).to({graphics:mask_3_graphics_37,x:588.5499,y:428.645}).wait(1).to({graphics:mask_3_graphics_38,x:588.5499,y:410.215}).wait(1).to({graphics:mask_3_graphics_39,x:588.5499,y:391.785}).wait(1).to({graphics:mask_3_graphics_40,x:588.5499,y:373.355}).wait(1).to({graphics:mask_3_graphics_41,x:588.5499,y:354.925}).wait(1).to({graphics:mask_3_graphics_42,x:627.0874,y:354.925}).wait(1).to({graphics:mask_3_graphics_43,x:665.6249,y:354.925}).wait(1).to({graphics:mask_3_graphics_44,x:704.1624,y:354.925}).wait(1).to({graphics:mask_3_graphics_45,x:742.6999,y:354.925}).wait(1).to({graphics:mask_3_graphics_46,x:781.2374,y:354.925}).wait(1).to({graphics:mask_3_graphics_47,x:819.7749,y:354.925}).wait(1).to({graphics:mask_3_graphics_48,x:858.3124,y:354.925}).wait(1).to({graphics:mask_3_graphics_49,x:896.8499,y:354.925}).wait(1).to({graphics:mask_3_graphics_50,x:896.8499,y:354.925}).wait(1).to({graphics:mask_3_graphics_51,x:896.8499,y:354.925}).wait(1).to({graphics:mask_3_graphics_52,x:896.8499,y:354.925}).wait(1).to({graphics:mask_3_graphics_53,x:896.8499,y:354.925}).wait(1).to({graphics:mask_3_graphics_54,x:896.8499,y:354.925}).wait(1).to({graphics:mask_3_graphics_55,x:896.8499,y:354.925}).wait(1).to({graphics:mask_3_graphics_56,x:896.8499,y:354.925}).wait(1).to({graphics:mask_3_graphics_57,x:896.8499,y:354.925}).wait(1).to({graphics:mask_3_graphics_58,x:896.8499,y:354.925}).wait(1).to({graphics:mask_3_graphics_59,x:896.8499,y:354.925}).wait(1));

	// top_right_line
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F8F8F8").ss(2,0,0,4).p("Eg2cAMcINqAAIAA43MBfPAAA");
	this.shape_3.setTransform(1436.25,554.6);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(31).to({_off:false},0).wait(29));

	// Layer_12 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_34 = new cjs.Graphics().p("Egf9A5vIAA6iMB4HAAAIAAaig");
	var mask_4_graphics_35 = new cjs.Graphics().p("EgbVA5vIAA6iMB4HAAAIAAaig");
	var mask_4_graphics_36 = new cjs.Graphics().p("EgWtA5vIAA6iMB4IAAAIAAaig");
	var mask_4_graphics_37 = new cjs.Graphics().p("EgSFA5vIAA6iMB4IAAAIAAaig");
	var mask_4_graphics_38 = new cjs.Graphics().p("EgNcA5vIAA6iMB4HAAAIAAaig");
	var mask_4_graphics_39 = new cjs.Graphics().p("EgI0A5vIAA6iMB4HAAAIAAaig");
	var mask_4_graphics_40 = new cjs.Graphics().p("EgI0A7ZIAA6hMB4HAAAIAAahg");
	var mask_4_graphics_41 = new cjs.Graphics().p("EgI0A9EIAA6iMB4HAAAIAAaig");
	var mask_4_graphics_42 = new cjs.Graphics().p("EgI0A+vIAA6iMB4HAAAIAAaig");
	var mask_4_graphics_43 = new cjs.Graphics().p("EgI0BAaIAA6iMB4HAAAIAAaig");
	var mask_4_graphics_44 = new cjs.Graphics().p("EgEfBAaIAA6iMB4HAAAIAAaig");
	var mask_4_graphics_45 = new cjs.Graphics().p("EgAKBAaIAA6iMB4HAAAIAAaig");
	var mask_4_graphics_46 = new cjs.Graphics().p("EAEKBAaIAA6iMB4IAAAIAAaig");
	var mask_4_graphics_47 = new cjs.Graphics().p("EAIfBAaIAA6iMB4IAAAIAAaig");
	var mask_4_graphics_48 = new cjs.Graphics().p("EAM0BAaIAA6iMB4IAAAIAAaig");
	var mask_4_graphics_49 = new cjs.Graphics().p("EARJBAaIAA6iMB4IAAAIAAaig");
	var mask_4_graphics_50 = new cjs.Graphics().p("EAVeBAaIAA6iMB4IAAAIAAaig");
	var mask_4_graphics_51 = new cjs.Graphics().p("EAZzBAaIAA6iMB4JAAAIAAaig");
	var mask_4_graphics_52 = new cjs.Graphics().p("EAZzBAaIAA6iMB4JAAAIAAaig");
	var mask_4_graphics_53 = new cjs.Graphics().p("EAZzBAaIAA6iMB4JAAAIAAaig");
	var mask_4_graphics_54 = new cjs.Graphics().p("EAZzBAaIAA6iMB4JAAAIAAaig");
	var mask_4_graphics_55 = new cjs.Graphics().p("EAZzBAaIAA6iMB4JAAAIAAaig");
	var mask_4_graphics_56 = new cjs.Graphics().p("EAZzBAaIAA6iMB4JAAAIAAaig");
	var mask_4_graphics_57 = new cjs.Graphics().p("EAZzBAaIAA6iMB4JAAAIAAaig");
	var mask_4_graphics_58 = new cjs.Graphics().p("EAZzBAaIAA6iMB4JAAAIAAaig");
	var mask_4_graphics_59 = new cjs.Graphics().p("EAZzBAaIAA6iMB4JAAAIAAaig");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(34).to({graphics:mask_4_graphics_34,x:564.2,y:369.4499}).wait(1).to({graphics:mask_4_graphics_35,x:593.8256,y:369.4498}).wait(1).to({graphics:mask_4_graphics_36,x:623.4506,y:369.4498}).wait(1).to({graphics:mask_4_graphics_37,x:653.0756,y:369.4498}).wait(1).to({graphics:mask_4_graphics_38,x:682.7006,y:369.4498}).wait(1).to({graphics:mask_4_graphics_39,x:712.3256,y:369.4498}).wait(1).to({graphics:mask_4_graphics_40,x:712.3256,y:380.1248}).wait(1).to({graphics:mask_4_graphics_41,x:712.3256,y:390.7998}).wait(1).to({graphics:mask_4_graphics_42,x:712.3256,y:401.4748}).wait(1).to({graphics:mask_4_graphics_43,x:712.3256,y:412.1498}).wait(1).to({graphics:mask_4_graphics_44,x:740.0287,y:412.1498}).wait(1).to({graphics:mask_4_graphics_45,x:767.7319,y:412.1498}).wait(1).to({graphics:mask_4_graphics_46,x:795.435,y:412.1498}).wait(1).to({graphics:mask_4_graphics_47,x:823.1381,y:412.1498}).wait(1).to({graphics:mask_4_graphics_48,x:850.8412,y:412.1498}).wait(1).to({graphics:mask_4_graphics_49,x:878.5444,y:412.1498}).wait(1).to({graphics:mask_4_graphics_50,x:906.2475,y:412.1498}).wait(1).to({graphics:mask_4_graphics_51,x:933.9506,y:412.1498}).wait(1).to({graphics:mask_4_graphics_52,x:933.9506,y:412.1498}).wait(1).to({graphics:mask_4_graphics_53,x:933.9506,y:412.1498}).wait(1).to({graphics:mask_4_graphics_54,x:933.9506,y:412.1498}).wait(1).to({graphics:mask_4_graphics_55,x:933.9506,y:412.1498}).wait(1).to({graphics:mask_4_graphics_56,x:933.9506,y:412.1498}).wait(1).to({graphics:mask_4_graphics_57,x:933.9506,y:412.1498}).wait(1).to({graphics:mask_4_graphics_58,x:933.9506,y:412.1498}).wait(1).to({graphics:mask_4_graphics_59,x:933.9506,y:412.1498}).wait(1));

	// center_right_line
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F8F8F8").ss(2,0,0,4).p("EA1UAF0Mg8pAAAIAArnMgt+AAA");
	this.shape_4.setTransform(1469.9,772.475);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(34).to({_off:false},0).wait(26));

	// Layer_13 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_37 = new cjs.Graphics().p("EgeVBA/MAAAg5CMBzSAAAMAAAA5Cg");
	var mask_5_graphics_38 = new cjs.Graphics().p("EgbpBA/MAAAg5CMBzSAAAMAAAA5Cg");
	var mask_5_graphics_39 = new cjs.Graphics().p("EgY9BA/MAAAg5CMBzSAAAMAAAA5Cg");
	var mask_5_graphics_40 = new cjs.Graphics().p("EgWSBA/MAAAg5CMBzTAAAMAAAA5Cg");
	var mask_5_graphics_41 = new cjs.Graphics().p("EgTmBA/MAAAg5CMBzTAAAMAAAA5Cg");
	var mask_5_graphics_42 = new cjs.Graphics().p("EgQ6BA/MAAAg5CMBzTAAAMAAAA5Cg");
	var mask_5_graphics_43 = new cjs.Graphics().p("EgQ6BEvMAAAg5CMBzTAAAMAAAA5Cg");
	var mask_5_graphics_44 = new cjs.Graphics().p("EgQ6BIeMAAAg5BMBzTAAAMAAAA5Bg");
	var mask_5_graphics_45 = new cjs.Graphics().p("EgQ6BMOMAAAg5CMBzTAAAMAAAA5Cg");
	var mask_5_graphics_46 = new cjs.Graphics().p("EgQ6BP+MAAAg5CMBzTAAAMAAAA5Cg");
	var mask_5_graphics_47 = new cjs.Graphics().p("EgQ6BTtMAAAg5BMBzTAAAMAAAA5Bg");
	var mask_5_graphics_48 = new cjs.Graphics().p("EgQ6BXdMAAAg5CMBzTAAAMAAAA5Cg");
	var mask_5_graphics_49 = new cjs.Graphics().p("EgQ6BbNMAAAg5CMBzTAAAMAAAA5Cg");
	var mask_5_graphics_50 = new cjs.Graphics().p("EgLMBbNMAAAg5CMBzTAAAMAAAA5Cg");
	var mask_5_graphics_51 = new cjs.Graphics().p("EgFeBbNMAAAg5CMBzTAAAMAAAA5Cg");
	var mask_5_graphics_52 = new cjs.Graphics().p("EAAPBbNMAAAg5CMBzUAAAMAAAA5Cg");
	var mask_5_graphics_53 = new cjs.Graphics().p("EAF9BbNMAAAg5CMBzUAAAMAAAA5Cg");
	var mask_5_graphics_54 = new cjs.Graphics().p("EALrBbNMAAAg5CMBzUAAAMAAAA5Cg");
	var mask_5_graphics_55 = new cjs.Graphics().p("EARZBbNMAAAg5CMBzUAAAMAAAA5Cg");
	var mask_5_graphics_56 = new cjs.Graphics().p("EAXHBbNMAAAg5CMBzUAAAMAAAA5Cg");
	var mask_5_graphics_57 = new cjs.Graphics().p("EAXHBbNMAAAg5CMBzUAAAMAAAA5Cg");
	var mask_5_graphics_58 = new cjs.Graphics().p("EAXHBbNMAAAg5CMBzUAAAMAAAA5Cg");
	var mask_5_graphics_59 = new cjs.Graphics().p("EAXHBbNMAAAg5CMBzUAAAMAAAA5Cg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(37).to({graphics:mask_5_graphics_37,x:543.75,y:415.9097}).wait(1).to({graphics:mask_5_graphics_38,x:560.9357,y:415.9099}).wait(1).to({graphics:mask_5_graphics_39,x:578.1207,y:415.9099}).wait(1).to({graphics:mask_5_graphics_40,x:595.3057,y:415.9099}).wait(1).to({graphics:mask_5_graphics_41,x:612.4907,y:415.9099}).wait(1).to({graphics:mask_5_graphics_42,x:629.6757,y:415.9099}).wait(1).to({graphics:mask_5_graphics_43,x:629.6757,y:439.8742}).wait(1).to({graphics:mask_5_graphics_44,x:629.6757,y:463.8385}).wait(1).to({graphics:mask_5_graphics_45,x:629.6757,y:487.8028}).wait(1).to({graphics:mask_5_graphics_46,x:629.6757,y:511.7671}).wait(1).to({graphics:mask_5_graphics_47,x:629.6757,y:535.7314}).wait(1).to({graphics:mask_5_graphics_48,x:629.6757,y:559.6957}).wait(1).to({graphics:mask_5_graphics_49,x:629.6757,y:583.6599}).wait(1).to({graphics:mask_5_graphics_50,x:666.2757,y:583.6599}).wait(1).to({graphics:mask_5_graphics_51,x:702.8757,y:583.6599}).wait(1).to({graphics:mask_5_graphics_52,x:739.4757,y:583.6599}).wait(1).to({graphics:mask_5_graphics_53,x:776.0757,y:583.6599}).wait(1).to({graphics:mask_5_graphics_54,x:812.6757,y:583.6599}).wait(1).to({graphics:mask_5_graphics_55,x:849.2757,y:583.6599}).wait(1).to({graphics:mask_5_graphics_56,x:885.8757,y:583.6599}).wait(1).to({graphics:mask_5_graphics_57,x:885.8757,y:583.6599}).wait(1).to({graphics:mask_5_graphics_58,x:885.8757,y:583.6599}).wait(1).to({graphics:mask_5_graphics_59,x:885.8757,y:583.6599}).wait(1));

	// bottom_right_line
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F8F8F8").ss(2,0,0,4).p("EA0RAZbMhODAAAMAAAgy1I6eAA");
	this.shape_5.setTransform(1422.2,991.125);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(37).to({_off:false},0).wait(23));

	// ad_campaigns
	this.instance_3 = new lib._50kcampaigns();
	this.instance_3.setTransform(1571.55,1258.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).wait(1).to({y:1203.8445,alpha:0.2344},0).wait(1).to({y:1156.3324,alpha:0.4374},0).wait(1).to({y:1116.0758,alpha:0.6094},0).wait(1).to({y:1083.1625,alpha:0.75},0).wait(1).to({y:1057.5633,alpha:0.8594},0).wait(1).to({y:1039.2781,alpha:0.9375},0).wait(1).to({y:1028.307,alpha:0.9844},0).wait(1).to({y:1024.65,alpha:1},0).wait(1).to({alpha:0.9805},0).wait(23));

	// readers_served
	this.instance_4 = new lib._40Mreaders();
	this.instance_4.setTransform(1676.5,894.65);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).wait(1).to({y:844.0133,alpha:0.2344},0).wait(1).to({y:800.1551,alpha:0.4374},0).wait(1).to({y:762.9945,alpha:0.6094},0).wait(1).to({y:732.6125,alpha:0.75},0).wait(1).to({y:708.982,alpha:0.8594},0).wait(1).to({y:692.1031,alpha:0.9375},0).wait(1).to({y:681.9758,alpha:0.9844},0).wait(1).to({y:678.6,alpha:1},0).wait(27));

	// ad_revenue
	this.instance_5 = new lib._900Mrevenue();
	this.instance_5.setTransform(1501.25,562.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(22).to({_off:false},0).wait(1).to({x:1503.207,y:513.8453,alpha:0.2344},0).wait(1).to({x:1504.9021,y:471.3574,alpha:0.4374},0).wait(1).to({x:1506.3383,y:435.3578,alpha:0.6094},0).wait(1).to({x:1507.5125,y:405.925,alpha:0.75},0).wait(1).to({x:1508.4258,y:383.0328,alpha:0.8594},0).wait(1).to({x:1509.0781,y:366.6813,alpha:0.9375},0).wait(1).to({x:1509.4695,y:356.8703,alpha:0.9844},0).wait(1).to({x:1509.6,y:353.6,alpha:1},0).wait(30));

	// countries
	this.instance_6 = new lib._5countries();
	this.instance_6.setTransform(448.45,1188.85);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25).to({_off:false},0).wait(1).to({y:1145.8305,alpha:0.2344},0).wait(1).to({y:1108.5698,alpha:0.4374},0).wait(1).to({y:1076.9992,alpha:0.6094},0).wait(1).to({y:1051.1875,alpha:0.75},0).wait(1).to({y:1031.1117,alpha:0.8594},0).wait(1).to({y:1016.7719,alpha:0.9375},0).wait(1).to({y:1008.168,alpha:0.9844},0).wait(1).to({y:1005.3,alpha:1},0).wait(27));

	// owned_n_operated
	this.instance_7 = new lib._16ono();
	this.instance_7.setTransform(296,842.55);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(22).to({_off:false},0).wait(1).to({y:806.2688,alpha:0.2344},0).wait(1).to({y:774.8444,alpha:0.4374},0).wait(1).to({y:748.2188,alpha:0.6094},0).wait(1).to({y:726.45,alpha:0.75},0).wait(1).to({y:709.5188,alpha:0.8594},0).wait(1).to({y:697.425,alpha:0.9375},0).wait(1).to({y:690.1688,alpha:0.9844},0).wait(1).to({y:687.75,alpha:1},0).wait(30));

	// Years_in_business
	this.instance_8 = new lib._22years();
	this.instance_8.setTransform(434.6,463.3);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).wait(1).to({x:433.0766,y:429.1281,alpha:0.2344},0).wait(1).to({x:431.7571,y:399.5307,alpha:0.4374},0).wait(1).to({x:430.6391,y:374.4531,alpha:0.6094},0).wait(1).to({x:429.725,y:353.95,alpha:0.75},0).wait(1).to({x:429.0141,y:338.0031,alpha:0.8594},0).wait(1).to({x:428.5063,y:326.6125,alpha:0.9375},0).wait(1).to({x:428.2016,y:319.7781,alpha:0.9844},0).wait(1).to({x:428.1,y:317.5,alpha:1},0).wait(1).to({x:427.55},0).wait(32));

	// Evolve_Badge
	this.instance_9 = new lib.evolvebadge();
	this.instance_9.setTransform(955,734.9,3.4356,3.4356);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).wait(1).to({scaleX:3.416,scaleY:3.416,alpha:0.0082},0).wait(1).to({scaleX:3.3563,scaleY:3.3563,alpha:0.033},0).wait(1).to({scaleX:3.2569,scaleY:3.2569,alpha:0.0744},0).wait(1).to({scaleX:3.1179,scaleY:3.1179,alpha:0.1322},0).wait(1).to({scaleX:2.9391,scaleY:2.9391,alpha:0.2065},0).wait(1).to({scaleX:2.7205,scaleY:2.7205,alpha:0.2975},0).wait(1).to({scaleX:2.4622,scaleY:2.4622,alpha:0.4049},0).wait(1).to({scaleX:2.1641,scaleY:2.1641,alpha:0.5289},0).wait(1).to({scaleX:1.8264,scaleY:1.8264,alpha:0.6694},0).wait(1).to({scaleX:1.449,scaleY:1.449,alpha:0.8264},0).wait(1).to({scaleX:1.0315,scaleY:1.0315,alpha:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(39));

	// BG
	this.instance_10 = new lib.Group86();
	this.instance_10.setTransform(136.15,1166.75,1,1,0,0,0,130.1,64.4);
	this.instance_10.alpha = 0.6797;

	this.instance_11 = new lib.Group4343();
	this.instance_11.setTransform(1826.5,1196.15,1,1,0,0,0,84.8,43);
	this.instance_11.alpha = 0.6602;

	this.instance_12 = new lib.Group85();
	this.instance_12.setTransform(1782.4,78.75,1,1,0,0,0,129.7,67.6);
	this.instance_12.alpha = 0.6602;

	this.instance_13 = new lib.HistoryBG();
	this.instance_13.setTransform(960.05,624,1,1,0,0,0,960,624);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960.1,625,959.9999999999999,742.4000000000001);
// library properties:
lib.properties = {
	id: '23A090335BD6411593F2933A815BCA5F',
	width: 1920,
	height: 1250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"../images/our_history_atlas_1.png", id:"our_history_atlas_1"},
		{src:"../images/our_history_atlas_2.png", id:"our_history_atlas_2"}
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
an.compositions['23A090335BD6411593F2933A815BCA5F'] = {
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