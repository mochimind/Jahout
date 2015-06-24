JH.MMgr = {};

JH.MMgr.map = {};
JH.MMgr.spawn = [0,0];
JH.MMgr.biomeDist = 250;
JH.MMgr.biomes = [];

JH.MMgr.Init = function() {
	
};

JH.MMgr.GetTile = function(ycoord, xcoord) {
	var blockY = Math.floor(ycoord / JH.MapBlock.size);
	var blockX = Math.floor(xcoord / JH.MapBlock.size);
	var blockKey = ""+blockY+"|"+blockX;
	// may need to optimize this. create a 4 block buffer in this function that's looked at first before hitting the hashtable
	if (JH.MMgr.map[blockKey] == undefined) {
		// check to see if we need to create a biome
		
		
		
		// create the tile
		JH.MMgr.map[blockKey] = JH.MapBlock.Create();
		JH.MobGenerator.PopulateBlock(JH.MMgr.map[blockKey], blockY, blockX);
	}
	return JH.MapBlock.GetTile(JH.MMgr.map[blockKey], Math.abs(ycoord % JH.MapBlock.size), Math.abs(xcoord % JH.MapBlock.size));
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
