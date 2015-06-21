JH.MapBlock = {};
JH.MapBlock.size = 50;

JH.MapBlock.Create = function() {
	var obj = [];
	for (var i=0 ; i<JH.MapBlock.size ; i++) {
		obj.push([]);
		for (var j=0 ; j<JH.MapBlock.size ; j++) {
			obj[i].push(JH.MapBlock.GenerateTile());
		}
	}
	return obj;
};

JH.MapBlock.GetTile = function(block, ycoord, xcoord) {
	return block[ycoord][xcoord];
};

JH.MapBlock.GenerateTile = function() {
	var picker = Math.random() * 1000;
	var tileType;
	var building;
	
	if (picker < 180) {
		tileType = JH.Tile.GravelTerrain;
	} else if (picker < 700) {
		tileType = JH.Tile.GrassTerrain;
	} else if (picker < 800) {
		tileType = JH.Tile.SandTerrain;
	} else if (picker < 870) {
		tileType = JH.Tile.RockyTerrain;
	}  else if (picker < 930) {
		tileType = JH.Tile.WaterTerrain;
	} else {
		tileType = JH.Tile.MountainTerrain;
	}
	
	// now determine terrain features
	picker = Math.random() * 100;
	if (picker < 15) {
		
	}
	return JH.Tile.Create(tileType, null, null);
};



