JH.SM = {};
JH.SM.updateCounter = 0;
JH.SM.hunger = 1200;
JH.SM.water = 720;
JH.SM.fatigue = 1440;

JH.SM.Init = function() {
	JH.TM.RegisterListener(JH.SM.HandleTime);
};

JH.SM.HandleTime = function(elapsedTime) {
	JH.SM.updateCounter += elapsedTime;
	if (JH.SM.updateCounter > 60) {
		var processCount = Math.floor(JH.SM.updateCounter / 60);
		JH.SM.updateCounter %= 60;
		
		JH.SM.hunger -= processCount;
		JH.SM.water -= processCount;
		JH.SM.fatigue -= processCount;
		
		JH.SM.UpdateDisplay();
	}
};

JH.SM.UpdateDisplay = function() {
	$("#hungerLabel").text(JH.SM.hunger);
	$("#waterLabel").text(JH.SM.water);
	$("#fatigueLabel").text(JH.SM.fatigue);
};

