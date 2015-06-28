JH.ConstructMgr = {};

JH.ConstructMgr.BuildNew = function(building) {
	var playerTile = JH.MD.GetUserGlobalTile();
	
	playerTile.building = JH.Building.CreateBlueprint(building);
	JH.TM.PlayerAction();
};



