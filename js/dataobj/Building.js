JH.Building = {};

JH.Building.tree = "tree";

JH.Building.Create = function(type) {
	var obj = {};
	obj.type = type;
	if (type == JH.Building.tree) {
		obj.description = "A weird looking alien tree. You could probably build something nice from it though";
		obj.img = "img/tree.png";
		obj.chops = 3;
	}
	
	return obj;
};

JH.Building.GetActionName = function(building) {
	if (building == null) { return null; }
	if (building.type == JH.Building.tree) {
		return "chop";
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
				JH.TM.PlayerAction();
			} else {
				JH.Main.Annotate("You valiantly strike the tree with all your might but it does not yield");
			}
		};
	}
};

JH.Building.Blueprint = function (type, xcood, ycoord) {
	
};

