JH.SM = {};
JH.SM.updateCounter = 0;
JH.SM.hunger = 1200;
JH.SM.water = 720;
JH.SM.fatigue = 1440;

JH.SM.range = 1;
JH.SM.damage = 2;
JH.SM.armor = 0;

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

JH.SM.SetWeapon = function(range, damage) {
	if (typeof range == undefined || typeof damage == undefined) {
		JH.SM.range = 1;
		JH.SM.damage = 2;
	} else {
		JH.SM.range = range;
		JH.SM.damage = damage;
	}
};

JH.SM.AddArmor = function(armor) {
	if (typeof armor == undefined) {
		return;
	}
	JH.SM.armor += armor;
};

JH.SM.UpdateDisplay = function() {
	$("#hungerLabel").text(JH.SM.hunger);
	$("#waterLabel").text(JH.SM.water);
	$("#fatigueLabel").text(JH.SM.fatigue);
};

