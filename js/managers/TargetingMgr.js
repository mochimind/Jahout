JH.TargetMgr = {};

JH.TargetMgr.SetTarget = function(unit, target) {
	unit.target = target;
};

// this function doesn't do error checking! it assumes that anyone attack has already called CanAttack
JH.TargetMgr.Attack = function(unit) {
	unit.target.hp[1] -= unit.damage;
	if (unit.target.hp[1] <= 0) {
		JH.Unit.Destroy(unit.target);
		unit.target = null;
	}
};

JH.TargetMgr.CanAttack = function(unit) {
	if (unit.target == null) { return false; }
	if (unit.range >= JH.TargetMgr.GetDistance(unit, unit.target)) {
		return true;
	}
	return false;
};

JH.TargetMgr.GetDistance = function(unit1, unit2) {
	return Math.abs(unit1.coords[0] - unit2.coords[0]) + Math.abs(unit1.coords[1] - unit2.coords[1]);	
};
