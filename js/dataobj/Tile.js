JH.Tile = {};
JH.Tile.GravelTerrain = "Gravel";
JH.Tile.RockyTerrain = "Rocky";
JH.Tile.ImpassableTerrain = "Impassable";

JH.Tile.Create = function (terrain, building, unit) {
	var outObj = {};
	outObj.terrain = terrain;
	outObj.building = building;
	outObj.unit = unit;
	outObj.loot = [];
	
	JH.Tile.Refresh(outObj);	
	return outObj;
};

JH.Tile.Refresh = function(tile) {
	if (tile.terrain == JH.Tile.ImpassableTerrain || tile['unit'] != null) {
		tile['traversable'] = false;
	} else {
		tile['traversable'] = true;
	}
};

JH.Tile.GetImg = function(tile) {
	if (tile.unit != null) { return tile.unit.img; }
	if (tile.loot.length != 0) {
		return "img/loot.png";
	} else if (tile.terrain == JH.Tile.GravelTerrain) {
		return "img/gravel.png";
	} else if (tile.terrain == JH.Tile.RockyTerrain) {
		return "img/rocky.png";
	} else if (tile.terrain == JH.Tile.ImpassableTerrain) {
		return "img/impassable.png";
	}
};

JH.Tile.GetDescription = function(tile) {
	if (tile.unit != null) { return tile.unit.description; }
	if (tile.terrain == JH.Tile.GravelTerrain) {
		return "Gravel Terrain: A nondescript patch of dirty dirt. Useful if you like dirt";
	} else if (tile.terrain == JH.Tile.RockyTerrain) {
		return "Rocky Terrain: There are some scattered rocks here. May come in handy if someone's trying to blow a hole through you";
	} else if (tile.terrain == JH.Tile.ImpassableTerrain) {
		return "Impassable Terrain: The terrain here is just not suited for moving through. Don't ask why";
	}
};

JH.Tile.AddLoot = function(tile, loot) {
	tile.loot.push(loot);
};
