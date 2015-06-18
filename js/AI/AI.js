JH.AI = {};

// personalities
JH.AI.passive = 1;
JH.AI.neutral = 2;
JH.AI.aggressive = 3;

// event codes
JH.AI.attacked = 1001;
JH.AI.seeUnit = 1002;
JH.AI.targetDead = 1003;

// current state
JH.AI.attacking = 2001;
JH.AI.fleeing = 2002;
JH.AI.defense = 2003;
JH.AI.rest = 2004;
JH.AI.moving = 2005;

JH.AI.directionLeft = 3001;
JH.AI.directionRight = 3002;
JH.AI.directionUp = 3003;
JH.AI.directionDown = 3004;

// consts
JH.AI.sightRange = 10;

JH.AI.Create = function(type) {
	var outObj = {};
	outObj.type = type;
	outObj.attackers = [];
	outObj.state = JH.AI.rest;
	
	return outObj;
};

JH.AI.HandleEvent = function(unit, event, args) {
	console.log("handling event: " + event);
	switch (event) {
	case JH.AI.attacked:
		if (unit.ai.type != JH.AI.passive) {
			unit.ai.attackers.push(args);
			JH.AI.UpdateTarget(unit);
			unit.ai.state = JH.AI.attacking;
		}
		break;
	case JH.AI.seeUnit:
		if (unit.ai.type == JH.AI.aggressive) {
			outObj.attackers.push(args);
			JH.AI.UpdateTarget(unit);
			unit.ai.state = JH.AI.attacking;
		}
		break;
	case JH.AI.targetDead:
		JH.AI.RemoveTarget(unit.ai, args);
		if (unit.ai.attackers.length == 0) {
			unit.ai.state = JH.AI.rest;
		} else {
			JH.AI.UpdateTarget(unit);
			unit.ai.state = JH.AI.attacking;
		}
		break;
	}
};

JH.AI.RemoveTarget = function(ai, target) {
	for (var i=0 ; i<ai.attackers.length ; i++) {
		if (ai.attackers[i] == target) {
			ai.attackers.splice(i,1);
		}
	}
};

JH.AI.UpdateTarget = function(unit) {
	if (unit.ai.attackers.length == 0) {
		unit.ai.state = JH.AI.rest;
	}
	unit.target = unit.ai.attackers[0];
};

JH.AI.HandleTurn = function(unit) {
	console.log("handling turn: " + unit.ai.state + "||" + unit.target);
	switch(unit.ai.state) {
	case JH.AI.attacking:
		if (JH.TargetMgr.CanAttack(unit)) {
			JH.TargetMgr.Attack(unit);
		} else {
			JH.AI.MoveTowards(unit, unit.target.coords);
		}
		break;
	case JH.AI.rest:
		JH.AI.RandomMove(unit);
		break;
	}
};

JH.AI.MoveTowards = function(unit, coords) {
	console.log("got: " + unit + "||" + coords[0] + "||" + coords[1]);
	var xdiff = unit.coords[1] - coords[1];
	var ydiff = unit.coords[0] - coords[0];
	console.log("differences: " + xdiff + "||" + ydiff);
	if (Math.abs(xdiff) > Math.abs(ydiff)) {
		if (xdiff > 0) {
			if (JH.AI.MoveInDirection(unit, JH.AI.directionLeft)) { return true; }
		} else if (xdiff < 0){
			if (JH.AI.MoveInDirection(unit, JH.AI.directionRight)) { return true; }
		}
		if (ydiff > 0) {
			if (JH.AI.MoveInDirection(unit, JH.AI.directionUp)) { return true; }
		} else if (ydiff < 0){
			if (JH.AI.MoveInDirection(unit, JH.AI.directionDown)) { return true; }
		}
	} else {
		if (ydiff > 0) {
			if (JH.AI.MoveInDirection(unit, JH.AI.directionUp)) { return true; }
		} else if (ydiff < 0){
			if (JH.AI.MoveInDirection(unit, JH.AI.directionDown)) { return true; }
		}
		if (xdiff > 0) {
			if (JH.AI.MoveInDirection(unit, JH.AI.directionLeft)) { return true; }
		} else if (xdiff < 0){
			if (JH.AI.MoveInDirection(unit, JH.AI.directionRight)) { return true; }
		}
	}
	
	return false;
};

JH.AI.MoveInDirection = function(unit, direction) {
	console.log("moving in direction" + "||" + direction);
	var destX;
	var destY;
	switch(direction) {
	case JH.AI.directionLeft:
		destX = unit.coords[1]-1;
		destY = unit.coords[0];
		break;
	case JH.AI.directionRight:
		destX = unit.coords[1]+1;
		destY = unit.coords[0];
		break;
	case JH.AI.directionUp:
		destX = unit.coords[1];
		destY = unit.coords[0]-1;
		break;
	case JH.AI.directionDown:
		destX = unit.coords[1];
		destY = unit.coords[0]+1;
		break;
	}
	
	var destTile = JH.MMgr.GetTile(destY, destX);
	if (destTile != null && destTile.traversable == true) {
		JH.Unit.MoveToTile(unit, destY, destX);
		return true;
	} else {
		return false;
	}
};

JH.AI.RandomMove = function(unit) {
	var decider = Math.floor(Math.random() * 4);
	if (decider == 0) {
		JH.AI.MoveInDirection(unit, JH.AI.directionLeft);
	} else if (decider == 1) {
		JH.AI.MoveInDirection(unit, JH.AI.directionRight);
	} else if (decider == 2) {
		JH.AI.MoveInDirection(unit, JH.AI.directionUp);
	} else {
		JH.AI.MoveInDirection(unit, JH.AI.directionDown);
	}
};


