JH.LootTable = {};

JH.LootTable.GenerateLoot = function(lootTable, coords) {
	for (var i=0 ; i<lootTable.length ; i++) {
		if (Math.random() < lootTable[i][1]) {
			JH.Tile.AddLoot(JH.MMgr.GetTile(coords[0], coords[1]), lootTable[i][0], 1);
		}
	}
};


