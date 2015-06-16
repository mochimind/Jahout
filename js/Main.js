var JH = {};
JH.Main = {};

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
	
	$(document).keyup(function(e) {
		//console.log("keydown: " + e.keyCode);
		if (e.keyCode == 37) {
			JH.MD.MoveLeft();
		} else if (e.keyCode == 38) {
			JH.MD.MoveUp();
		} else if (e.keyCode == 39) {
			JH.MD.MoveRight();
		} else if (e.keyCode == 40) {
			JH.MD.MoveDown();
		} 
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