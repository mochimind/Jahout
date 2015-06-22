JH.KeyMgr = {};
JH.KeyMgr.keydown = false;
JH.KeyMgr.keyTiming = 100;

JH.KeyMgr.Init = function() {
	$(document).keydown(function(e) {
		if (e.keyCode == 37) {
			if (!JH.KeyMgr.keydown) {
				JH.MD.MoveLeft();
				JH.KeyMgr.keyRepeater = setInterval(function() {
					if (JH.KeyMgr.keyRepeater != null) { 
						JH.MD.MoveLeft();
					}
				}, JH.KeyMgr.keyTiming);
				JH.KeyMgr.keydown = true;
			}
		} else if (e.keyCode == 38) {
			if (!JH.KeyMgr.keydown) {
				JH.MD.MoveUp();
				JH.KeyMgr.keyRepeater = setInterval(function() {
					if (JH.KeyMgr.keyRepeater != null) { JH.MD.MoveUp(); }
				}, JH.KeyMgr.keyTiming);
				JH.KeyMgr.keydown = true;
			}
		} else if (e.keyCode == 39) {
			if (!JH.KeyMgr.keydown) {
				JH.MD.MoveRight();
				JH.KeyMgr.keyRepeater = setInterval(function() {
					if (JH.KeyMgr.keyRepeater != null) { JH.MD.MoveRight(); }
				}, JH.KeyMgr.keyTiming);
				JH.KeyMgr.keydown = true;
			}
		} else if (e.keyCode == 40) {
			if (!JH.KeyMgr.keydown) {
				JH.MD.MoveDown();
				JH.KeyMgr.keyRepeater = setInterval(function() {
					if (JH.KeyMgr.keyRepeater != null) { JH.MD.MoveDown(); }
				}, JH.KeyMgr.keyTiming);
				JH.KeyMgr.keydown = true;
			}
		} 
	});
	$(document).keyup(function(e) {
		window.clearInterval(JH.KeyMgr.keyRepeater);
		JH.KeyMgr.keyRepeater = null;
		JH.KeyMgr.keydown = false;
	});
};





