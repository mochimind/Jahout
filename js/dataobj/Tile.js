JH.Tile = {};
JH.Tile.GravelTerrain = "Gravel";
JH.Tile.RockyTerrain = "Rocky";
JH.Tile.MountainTerrain = "Mountain";
JH.Tile.GrassTerrain = "Grass";
JH.Tile.SandTerrain = "Sand";
JH.Tile.WaterTerrain = "Water";

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
	if (tile.terrain == JH.Tile.MountainTerrain || tile.terrain == JH.Tile.WaterTerrain || tile['unit'] != null) {
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
	} else if (tile.terrain == JH.Tile.MountainTerrain) {
		return "img/mountain.png";
	} else if (tile.terrain == JH.Tile.GrassTerrain) {
		return "img/grass.png";
	} else if (tile.terrain == JH.Tile.SandTerrain) {
		return "img/sand.png";
	} else if (tile.terrain == JH.Tile.WaterTerrain) {
		return "img/water.png";
	}
};

JH.Tile.GetDescription = function(tile) {
	if (tile.unit != null) { return tile.unit.description; }
	if (tile.terrain == JH.Tile.GravelTerrain) {
		return "Gravel Terrain: A nondescript patch of dirty dirt. Useful if you like dirt";
	} else if (tile.terrain == JH.Tile.RockyTerrain) {
		return "Rocky Terrain: There are some scattered rocks here. May come in handy if someone's trying to blow a hole through you";
	} else if (tile.terrain == JH.Tile.MountainTerrain) {
		return "Mountain: A coincidental meeting of a large group of rocks, too high level for you to defeat";
	} else if (tile.terrain == JH.Tile.GrassTerrain) {
		return "Grass: Here a patch of exotic alien grass has sprung from the ground like the hair of the planet";
	} else if (tile.terrain == JH.Tile.SandTerrain) {
		return "Sand: A giant pile of tiny tiny tiny rocks";
	} else if (tile.terrain == JH.Tile.WaterTerrain) {
		return "Water: A pool of fluid that resembles water back from home except with a billion times more alien goo. Probably shouldn't drink it straight up.";
	}
};

JH.Tile.AddLoot = function(tile, loot, count) {
	tile.loot.push([loot, count]);
};
