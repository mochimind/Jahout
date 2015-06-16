var JH = {};
JH.Main = {};
JH.Main.keydown = false;
JH.Main.keyTiming = 200;

$(function(){
	JH.UM.Init();
	JH.MMgr.Init();

	JH.UM.AddUnit(JH.Unit.Player, JH.MMgr.spawn);
	JH.UM.AddUnit(JH.Unit.Billow, [25,25]);

	
	JH.MD.Init();
	JH.IM.Init();
	JH.SM.Init();
	JH.Actions.Init();
	
	JH.Inventory.Init();

	JH.Main.Annotate("Welcome to Jahout");
	
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
	
	JH.Actions.AddAction("Inventory", JH.Inventory.TogglePanel);
	JH.Actions.AddAction("Attack", JH.TargetD.HandleAttack);
	JH.IM.Equip(JH.Equipment.Create(JH.Equipment.citizen));
	JH.IM.Equip(JH.Equipment.Create(JH.Equipment.dsevest));
	JH.IM.Equip(JH.Equipment.Create(JH.Equipment.spacesuit));
	JH.IM.Equip(JH.Equipment.Create(JH.Equipment.dsehelmet));
	JH.IM.Equip(JH.Equipment.Create(JH.Equipment.dsemule));
	JH.IM.Equip(JH.Equipment.Create(JH.Equipment.msdoc));
	JH.IM.Equip(JH.Equipment.Create(JH.Equipment.echef));
});

JH.Main.Annotate = function(str) {
	$("#notes").append(str + "\n");
};

JH.Main.PrintObj = function(obj) {
	var str = '{';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str += "[" + p + ',' + obj[p] + "]";
        }
    }
    str += "}";
    console.log (str);
};