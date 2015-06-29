JH.ConstructMgr = {};

JH.ConstructMgr.BuildNew = function(building) {
	var playerTile = JH.MD.GetUserGlobalTile();
	
	playerTile.building = JH.Building.CreateBlueprint(building);
	JH.TM.PlayerAction();
};

JH.ConstructMgr.Build = function(tile) {
	var building = tile.building;
	if (building.type != JH.Building.blueprint) { return; }
	// check if all the resources are already in place
	for (var i=0 ; i<building.resources.length ; i++) {
		console.log("numbers: " + building.resources[i][1] + "||" + building.resources[i][2]);
		building.resources[i][2] += JH.ConstructMgr.RemoveResources(building.resources[i][0], building.resources[i][1] - building.resources[i][2]);
		if (building.resources[i][1] != building.resources[i][2]) {
			JH.Main.Annotate("You don't have enough " + building.resources[i][0] + " to start building");
			return;
		}
	}
	building.buildTime--;
	if (building.buildTime == 0) {
		//tile.building = JH.Building.Create(building.type);
		JH.Main.Annotate("At long last you finish building the " + tile.building.blueprint);
		tile.building = JH.Building.Create(tile.building.blueprint);
	} else {
		JH.Main.Annotate("You hammer away at the building for a long while. It seems significantly more complete");		
	}
	JH.TM.PlayerAction();
};

JH.ConstructMgr.RemoveResources = function(type, quantity) {
	if (quantity == 0) { return 0; }
	var removed = JH.EM.Remove(type);
	if (removed < quantity) {
		removed += JH.InvMgr.Remove(type, quantity - removed);
	}
	
	JH.Main.Annotate("You put " + removed + " " + type + " into the construction site");
	
	return removed;
};



