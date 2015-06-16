JH.MMgr = {};

JH.MMgr.map = [];
JH.MMgr.spawn = [20,20];
JH.MMgr.mapSize = [1000,1000];

JH.MMgr.Init = function() {
	for (var i=0 ; i<JH.MMgr.mapSize[0] ; i++) {
		JH.MMgr.map.push([]);
		for (var j=0 ; j<JH.MMgr.mapSize[1] ; j++) {
			var picker = Math.floor(Math.random() * 100);
			var tileType;
			var description;
			if (picker < 75) {
				tileType = JH.Tile.GravelTerrain;
			} else if (picker < 90) {
				tileType = JH.Tile.RockyTerrain;
			} else {
				tileType = JH.Tile.ImpassableTerrain;
			}
			JH.MMgr.map[i].push(JH.Tile.Create(tileType, null, null));
		}
	}
};

JH.MMgr.GetTile = function(ycoord, xcoord) {
	if (ycoord < 0 || ycoord >= JH.MMgr.map.length) { return null; }
	if (xcoord < 0 || xcoord >= JH.MMgr.map[0].length) { return null; }
	return JH.MMgr.map[ycoord][xcoord];
};

JH.MMgr.AddUnit = function(y, x, unit) {
	var tile = JH.MMgr.GetTile(y, x);
	if (tile.unit != null) { return false; }
	tile.unit = unit;
	JH.Tile.Refresh(tile);
	return true;
};

JH.MMgr.RemoveUnit = function(y, x, unit) {
	var tile = JH.MMgr.GetTile(y,x);
	if (tile.unit == null) { return false; }
	tile.unit = null;
	JH.Tile.Refresh(tile);
	return true;
};
