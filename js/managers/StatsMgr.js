JH.SM = {};
JH.SM.updateCounter = 0;
JH.SM.hunger = 1200;
JH.SM.water = 720;
JH.SM.fatigue = 1440;

// clarification: this handles player stats

JH.SM.Init = function() {
	JH.TM.RegisterListener(JH.SM.HandleTime);
	JH.SM.player = JH.UM.GetPlayer();
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
		JH.SM.player.range = 1;
		JH.SM.player.damage = 5;
	} else {
		JH.SM.player.range = range;
		JH.SM.player.damage = damage;
	}
};

JH.SM.AddArmor = function(armor) {
	if (typeof armor == undefined) {
		return;
	}
	JH.SM.player.armor += armor;
};

JH.SM.UpdateDisplay = function() {
	$("#hungerLabel").text(JH.SM.hunger);
	$("#waterLabel").text(JH.SM.water);
	$("#fatigueLabel").text(JH.SM.fatigue);
	$("#healthLabel").text(JH.SM.player.hp[1]);
};

