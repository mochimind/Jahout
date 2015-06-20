JH.KeyMgr = {};

JH.KeyMgr.Init = function() {
	$(document).keydown(function(e) {
		if (e.keyCode == 37) {
			if (!JH.Main.keydown) {
				JH.MD.MoveLeft();
				JH.Main.keyRepeater = setInterval(function() {
					if (JH.Main.keyRepeater != null) { 
						JH.MD.MoveLeft();
					}
				}, JH.Main.keyTiming);
				JH.Main.keydown = true;
			}
		} else if (e.keyCode == 38) {
			if (!JH.Main.keydown) {
				JH.MD.MoveUp();
				JH.Main.keyRepeater = setInterval(function() {
					if (JH.Main.keyRepeater != null) { JH.MD.MoveUp(); }
				}, JH.Main.keyTiming);
				JH.Main.keydown = true;
			}
		} else if (e.keyCode == 39) {
			if (!JH.Main.keydown) {
				JH.MD.MoveRight();
				JH.Main.keyRepeater = setInterval(function() {
					if (JH.Main.keyRepeater != null) { JH.MD.MoveRight(); }
				}, JH.Main.keyTiming);
				JH.Main.keydown = true;
			}
		} else if (e.keyCode == 40) {
			if (!JH.Main.keydown) {
				JH.MD.MoveDown();
				JH.Main.keyRepeater = setInterval(function() {
					if (JH.Main.keyRepeater != null) { JH.MD.MoveDown(); }
				}, JH.Main.keyTiming);
				JH.Main.keydown = true;
			}
		} 
	});
	$(document).keyup(function(e) {
		window.clearInterval(JH.Main.keyRepeater);
		JH.Main.keyRepeater = null;
		JH.Main.keydown = false;
	});
};





