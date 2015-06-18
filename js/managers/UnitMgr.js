JH.UM = {};

JH.UM.units = [];

JH.UM.Init = function() {

};

JH.UM.AddUnit = function(type, location) {
	JH.UM.units.push(JH.Unit.Create(type, location));
};

JH.UM.GetPlayer = function() {
	for (var i=0 ; i<JH.UM.units.length ; i++) {
		if (JH.UM.units[i].type == JH.Unit.Player) {
			return JH.UM.units[i];
		}
	}
};

JH.UM.GetUnitsInSight = function(coord, sightRange) {
	var outArr = [];
	for (var i=0 ; i<JH.UM.units.length ; i++) {
		if (JH.TargetMgr.GetDistance(coord, JH.UM.units[i].coords) <= sightRange) {
			outArr.push(JH.UM.units[i]);
		}
	}
	return outArr;
};

JH.UM.Destroy = function(unit) {
	for (var i=0; i<JH.UM.units.length ; i++) {
		if (JH.UM.units[i] == unit) {
			JH.UM.units.splice(i,1);
		}
	}
};



