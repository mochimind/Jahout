JH.Unit = {};

JH.Unit.Billow = "Billow";
JH.Unit.Player = "player";

JH.Unit.Create = function(type, coords) {
	var outObj = {};
	outObj.type = type;
	
	if (type == JH.Unit.Billow) {
		outObj.img = "img/billow.png";
		outObj.hp = 800;
		outObj.speed = 70;
		outObj.actionCounter = 0;
		outObj.coords = coords;
	} else if (type == JH.Unit.Player) {
		outObj.img = "img/dude.png";
		outObj.hp = 1000;
		outObj.speed = 15;
		outObj.actionCounter = 0;
		outObj.coords = coords;
	}
	
	if (type != JH.Unit.Player) { JH.TM.RegisterListener(JH.Unit.HandleTurn, outObj); }
	JH.MMgr.GetTile(coords[0],coords[1]).unit = outObj;
	return outObj;
};

JH.Unit.HandleTurn = function(time, unit) {
	unit.actionCounter += time;
	if (unit.actionCounter > unit.speed) {
		var actions = Math.floor(unit.actionCounter / unit.speed);
		unit.actionCounter %= unit.speed;
		if (unit.type == JH.Unit.Billow) {
			// move in a random direction
			for (var i=0 ; i<actions ; i++) {
				JH.Unit.RandomMove(unit);
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
		JH.Unit.MoveToTile(unit, destY, destX);
		return true;
	} else {
		return false;
	}
};

