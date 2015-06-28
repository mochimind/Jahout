JH.KeyMgr = {};
JH.KeyMgr.keydown = false;
JH.KeyMgr.keyTiming = 100;
JH.KeyMgr.keyboardEnabled = true;

JH.KeyMgr.Init = function() {
	$(document).keydown(function(e) {
		JH.KeyMgr.HandleKeyPress(e.keyCode);
	});
	$(document).keyup(function(e) {
		JH.KeyMgr.ClearRepeater();
	});
};

JH.KeyMgr.ClearRepeater = function() {
	if (JH.KeyMgr.keyRepeater != null) {
		window.clearInterval(JH.KeyMgr.keyRepeater);
		JH.KeyMgr.keyRepeater = null;
		JH.KeyMgr.keydown = false;
	}
};

JH.KeyMgr.HandleKeyPress = function(keyCode) {
	if (!JH.KeyMgr.keyboardEnabled) { return; }
	
	if (keyCode == 37) {
		if (!JH.KeyMgr.keydown) {
			JH.MD.MoveLeft();
			JH.KeyMgr.keyRepeater = setInterval(function() {
				if (JH.KeyMgr.keyRepeater != null) { 
					JH.MD.MoveLeft();
				}
			}, JH.KeyMgr.keyTiming);
			JH.KeyMgr.keydown = true;
		}
	} else if (keyCode == 38) {
		if (!JH.KeyMgr.keydown) {
			JH.MD.MoveUp();
			JH.KeyMgr.keyRepeater = setInterval(function() {
				if (JH.KeyMgr.keyRepeater != null) { JH.MD.MoveUp(); }
			}, JH.KeyMgr.keyTiming);
			JH.KeyMgr.keydown = true;
		}
	} else if (keyCode == 39) {
		if (!JH.KeyMgr.keydown) {
			JH.MD.MoveRight();
			JH.KeyMgr.keyRepeater = setInterval(function() {
				if (JH.KeyMgr.keyRepeater != null) { JH.MD.MoveRight(); }
			}, JH.KeyMgr.keyTiming);
			JH.KeyMgr.keydown = true;
		}
	} else if (keyCode == 40) {
		if (!JH.KeyMgr.keydown) {
			JH.MD.MoveDown();
			JH.KeyMgr.keyRepeater = setInterval(function() {
				if (JH.KeyMgr.keyRepeater != null) { JH.MD.MoveDown(); }
			}, JH.KeyMgr.keyTiming);
			JH.KeyMgr.keydown = true;
		}
	} 	
};

JH.KeyMgr.DisableKeyboard = function() {
	JH.KeyMgr.keyboardEnabled = false;
	JH.KeyMgr.ClearRepeater();
};

JH.KeyMgr.EnableKeyboard = function() {
	JH.KeyMgr.keyboardEnabled = true;
};


