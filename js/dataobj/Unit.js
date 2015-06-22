JH.Unit = {};

JH.Unit.Billow = "Billow";
JH.Unit.Player = "You";

JH.Unit.Create = function(type, coords) {
	var outObj = {};
	outObj.type = type;
	
	if (type == JH.Unit.Billow) {
		outObj.img = "img/billow.png";
		outObj.hp = [50,50];
		outObj.speed = 70;
		outObj.damage = 15;
		outObj.description = "Billow: A mostly harmless slow chubby meaty thing. Mostly harmless";
		outObj.ai = JH.AI.Create(JH.AI.neutral);
		outObj.loot = [[JH.Item.billowcorpse, 1]];
	} else if (type == JH.Unit.Player) {
		outObj.img = "img/dude.png";
		outObj.hp = [1000, 1000];
		outObj.speed = 15;
		outObj.damage = 5;
		outObj.description = "You: You stare intently at yourself, trying to glean some semblance of insight from the experience";
		outObj.loot = [];
	}
	outObj.armor = 0;
	outObj.range = 1;
	outObj.actionCounter = 0;
	outObj.coords = coords;
	
	if (type != JH.Unit.Player) { JH.TM.RegisterListener(JH.Unit.HandleTurn, outObj); }
	JH.MMgr.AddUnit(coords[0],coords[1], outObj);
	return outObj;
};

JH.Unit.Destroy = function(unit) {
	JH.LootTable.GenerateLoot(unit.loot, unit.coords);
	JH.MMgr.RemoveUnit(unit.coords[0], unit.coords[1], unit);
	JH.UM.Destroy(unit);
	JH.TM.UnregisterListener(JH.Unit.HandleTurn, unit);
	JH.Main.Annotate(unit.type + " has died");
};

JH.Unit.TakeDamage = function(attacker, defender, damage) {
	defender.hp[1] -= attacker.damage;
	if (defender.ai != null) {
		JH.AI.HandleEvent(defender, JH.AI.attacked, attacker);
	} else {
		JH.SM.UpdateDisplay();
	}
	if (defender.hp[1] <= 0) {
		if (attacker.ai != null) {
			JH.AI.HandleEvent(attacker, JH.AI.targetDead, defender);
		} else {
			attacker.target = null;			
		}
		JH.Unit.Destroy(defender);
	}
};

JH.Unit.HandleTurn = function(time, unit) {
	unit.actionCounter += time;
	if (unit.actionCounter > unit.speed) {
		var actions = Math.floor(unit.actionCounter / unit.speed);
		unit.actionCounter %= unit.speed;
		if (unit.ai != null) {
			for (var i=0 ; i<actions ; i++) {
				JH.AI.HandleTurn(unit);
			}
		}
	}
};

JH.Unit.MoveToTile = function(unit, desty, destx) {
	var tile = JH.MMgr.GetTile(unit.coords[0], unit.coords[1]);
	tile.unit = null;
	JH.Tile.Refresh(tile);
	
	tile = JH.MMgr.GetTile(desty, destx);
	tile.unit = unit;
	JH.Tile.Refresh(tile);
	
	unit.coords = [desty, destx];
};


