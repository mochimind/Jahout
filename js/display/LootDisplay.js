JH.LootDisp = {};

JH.LootDisp.HandleTile = function(desty, destx) {
	var destTile = JH.MMgr.GetTile(desty, destx);
	if (destTile.loot.length == 0 && JH.LootDisp.lootKey != undefined) {
		JH.ActionMgr.RemoveAction(JH.LootDisp.lootKey);
		JH.LootDisp.lootKey = undefined;
	} else if (destTile.loot.length > 0 && JH.LootDisp.lootKey == undefined){
		JH.LootDisp.lootKey = JH.ActionMgr.AddAction("loot", JH.LootDisp.HandleLoot, destTile);
	}
};

JH.LootDisp.HandleLoot = function(tile) {
	var i = 0;
	while (i < tile.loot.length) {
		tile.loot[i][1] -= JH.InvMgr.Add(tile.loot[i][0], tile.loot[i][1]);
		if (tile.loot[i][1] == 0) {
			tile.loot.splice(i,1);
		} else {
			i++;
		}
	}
	
	if (i == 0) {
		JH.ActionMgr.RemoveAction(JH.LootDisp.lootKey);
		JH.LootDisp.lootKey = undefined;
	}
};






