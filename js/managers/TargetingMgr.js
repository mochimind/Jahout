JH.TargetMgr = {};

JH.TargetMgr.SetTarget = function(unit, target) {
	unit.target = target;
};

// this function doesn't do error checking! it assumes that anyone attack has already called CanAttack
JH.TargetMgr.Attack = function(unit) {
	JH.Main.Annotate(unit.type + " hit the " + unit.target.type + " for " + unit.damage + " damage");
	JH.Unit.TakeDamage(unit, unit.target);
};

JH.TargetMgr.CanAttack = function(unit) {
	if (unit.target == null) { return false; }
	if (unit.range >= JH.TargetMgr.GetDistance(unit.coords, unit.target.coords)) {
		return true;
	}
	return false;
};

JH.TargetMgr.GetDistance = function(coord1, coord2) {
	return Math.abs(coord1[0] - coord2[0]) + Math.abs(coord1[1] - coord2[1]);	
};
