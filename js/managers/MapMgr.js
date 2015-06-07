JH.MMgr = {};

JH.MMgr.map = [];
JH.MMgr.spawn = [];
JH.MMgr.mapSize = [1000,1000];

JH.MMgr.Init = function() {
	for (var i=0 ; i<JH.MMgr.mapSize[0] ; i++) {
		JH.MMgr.map.push([]);
		for (var j=0 ; j<JH.MMgr.mapSize[1] ; j++) {
			var picker = Math.floor(Math.random() * 100);
			var tileType;
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
	JH.MMgr.spawn = [20,20];
};

JH.MMgr.GetTile = function(ycoord, xcoord) {
	if (ycoord < 0 || ycoord >= JH.MMgr.map.length) { return null; }
	if (xcoord < 0 || xcoord >= JH.MMgr.map[0].length) { return null; }
	return JH.MMgr.map[ycoord][xcoord];
};


