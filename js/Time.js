JH.Time = {};
JH.Time.curTime = [0,0,0,0,0];
JH.Time.tickSize = 15;	// seconds

JH.Time.AddTime = function(seconds, minutes, hours, days, years) {
	seconds = typeof seconds !== 'undefined' ? seconds : 0;
	minutes = typeof minutes !== 'undefined' ? minutes : 0;
	hours = typeof hours !== 'undefined' ? hours: 0;
	days = typeof days !== 'undefined' ? days : 0;
	years = typeof years !== 'undefined' ? years : 0;
	JH.Time.curTime[0] += seconds;
	JH.Time.curTime[1] += Math.floor(JH.Time.curTime[0] / 60) + minutes;
	JH.Time.curTime[0] %= 60;
	JH.Time.curTime[2] += Math.floor(JH.Time.curTime[1] / 60) + hours;
	JH.Time.curTime[1] %= 60;
	JH.Time.curTime[3] += Math.floor(JH.Time.curTime[2] / 24) + days;
	JH.Time.curTime[2] %= 24;
	JH.Time.curTime[4] += Math.floor(JH.Time.curTime[3] / 365) + days;
	JH.Time.curTime[3] %= 365;

	JH.Time.UpdateGUI();
};

JH.Time.UpdateGUI = function() {
	$("#timeLabel").text(JH.Time.curTime[4] + "Y, " +
			JH.Time.curTime[3] + "D - " + 
			JH.Time.curTime[2] + "H:" +
			JH.Time.curTime[1] + "M:" + 
			JH.Time.curTime[0] + "S");
};


