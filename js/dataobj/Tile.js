JH.Tile = {};
JH.Tile.GravelTerrain = "Gravel";
JH.Tile.RockyTerrain = "Rocky";
JH.Tile.ImpassableTerrain = "Impassable";

JH.Tile.Create = function (terrain, building, unit) {
	var outObj = {};
	outObj['terrain'] = terrain;
	outObj['building'] = building;
	outObj['unit'] = unit;
	
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


