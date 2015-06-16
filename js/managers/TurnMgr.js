JH.TM = {};
JH.TM.listeners = [];

JH.TM.PlayerAction = function() {
	if (JH.TM.player == null) {
		JH.TM.player = JH.UM.GetPlayer();
	}
	JH.Time.AddTime(JH.TM.player.speed);
	for (var i=0 ; i<JH.TM.listeners.length ; i++) {
		JH.TM.listeners[i][0](JH.TM.player.speed, JH.TM.listeners[i][1]);
	}
	JH.MD.Redraw();
};

JH.TM.RegisterListener = function(obj, args) {
	JH.TM.listeners.push([obj, args]);
};

JH.TM.UnregisterListener = function(obj, args) {
	for (var i=0 ; i<JH.TM.listeners.length ; i++) {
		if (JH.TM.listeners[i][0] == obj && JH.TM.listeners[i][1] == args) {
			JH.TM.listeners.splice(i,1);
		}
	}
};



