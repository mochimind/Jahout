JH.TM = {};
JH.TM.listeners = [];

JH.TM.PlayerMove = function() {
	JH.Time.AddTime(15);
	for (var i=0 ; i<JH.TM.listeners.length ; i++) {
		JH.TM.listeners[i][0](15, JH.TM.listeners[i][1]);
	}
};

JH.TM.RegisterListener = function(obj, args) {
	JH.TM.listeners.push([obj, args]);
};



