JH.Unit = {};

JH.Unit.Billow = "Billow";

JH.Unit.Create = function(type, coords) {
	var outobj = {};
	outObj.type == type;
	
	if (type == Billow) {
		outObj.img = "img/billow.png";
		outObj.hp = 800;
		outObj.speed = 70;
		outObj.actionCounter = 0;
		outObj.coords = coords;
	}
	
	JH.TM.RegisterListener(JH.Unit.HandleTurn, outObj);
	return outObj;
};

JH.Unit.HandleTurn = function(unit) {
	if (unit.type == JH.Unit.Billow) {
		// move in a random direction
	}
};

JH.Unit.RandomMove = function(unit) {
	var decider = Math.floor(Math.random() * 4);
	var destX;
	var destY;
	if (decider == 0) {
		destX = unit.coords[1]-1;
		destY = unit.coords[0];
	} else if (decider == 1) {
		destX = unit.coords[1]+1;
		destY = unit.coords[0];
	} else if (decider == 2) {
		destX = unit.coords[1];
		destY = unit.coords[0]-1;
	} else {
		destX = unit.coords[1];
		destY = unit.coords[0]+1;
	}
	
	var destTile = JH.MMgr.GetTile(destY, destX);
	if (destTile != null && destTile.traversable == true) {
		JH.MMgr.MoveToTile(unit, unit.coords[0], unit.coords[1], destY, destX);
		return true;
	} else {
		return false;
	}
};

