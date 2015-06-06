JH.TM = {};
JH.TM.listeners = [];

JH.TM.PlayerMove = function() {
	JH.Time.AddTime(15);
	for (var i=0 ; i<JH.TM.listeners.length ; i++) {
		JH.TM.listeners[i](15);
	}
};

JH.TM.RegisterListener = function(obj, args) {
	JH.TM.listeners.push(obj);
};



