JH.Building = {};

JH.Building.tree = "tree";
JH.Building.sawmill = "sawmill";
JH.Building.butcher = "butcher table";
JH.Building.blueprint = "blueprint";

JH.Building.Create = function(type) {
	var obj = {};
	obj.type = type;
	if (type == JH.Building.tree) {
		obj.description = "A weird looking alien tree. You could probably build something nice from it though";
		obj.img = "img/tree.png";
		obj.chops = 3;
	} else if (type == JH.Building.sawmill) {
		obj.description = "This simple setup cuts logs into flat, usable pieces for your construction projects";
		obj.img = "img/sawmill.png";
		obj.planksPerLog = 3;
	}
	
	return obj;
};

JH.Building.CreateBlueprint = function(type) {
	var obj = {};
	obj.type = JH.Building.blueprint;
	obj.blueprint = type;
	if (type == JH.Building.sawmill) {
		obj.buildTime = 5;
		obj.resources = [[JH.Item.plank, 5, 0]];
	} else if (type == JH.Building.butcher) {
		obj.buildTime = 4;
		obj.resources = [[JH.Item.plank, 4, 0]];
	}
	obj.description = "This " + type + " is still being built";
	obj.img = "img/blueprint.png";
	return obj;
};

JH.Building.GetActionName = function(building) {
	if (building == null) { return null; }
	if (building.type == JH.Building.tree) {
		return "chop";
	} else if (building.type == JH.Building.sawmill) {
		return "saw log";
	}
};

JH.Building.GetAction = function(building, tile) {
	if (building == null) { return null; }
	if (building.type == JH.Building.tree) {
		return function() {
			building.chops--;
			if (building.chops == 0) {
				tile.building = null;
				JH.Tile.AddLoot(tile, JH.Item.log, 3);				
				JH.Main.Annotate("The tree succumbs to your onslaught");
				JH.BuildingDisp.RemoveActions();
			} else {
				JH.Main.Annotate("You valiantly strike the tree with all your might but it does not yield");
			}
			JH.TM.PlayerAction();
		};
	} else if (building.type == JH.Building.sawmill) {
		return function() {
			console.log("sawing log");
			if (JH.EM.Remove(JH.Item.log) == 1 || JH.InvMgr.Remove(JH.Item.log, 1) == 1) {
				JH.Tile.AddLoot(tile, JH.Item.plank, building.planksPerLog);
			}
			JH.TM.PlayerAction();
		};
	}
};


