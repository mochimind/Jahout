JH.LootDisp = {};

JH.LootDisp.HandleTile = function(destTile) {
	if (destTile.loot.length == 0 && JH.LootDisp.lootKey != undefined) {
		JH.ActionMgr.RemoveAction(JH.LootDisp.lootKey);
		JH.ActionMgr.RemoveAction(JH.LootDisp.pickupKey);
		JH.LootDisp.lootKey = undefined;
		JH.LootDisp.pickupKey = undefined;
	} else if (destTile.loot.length > 0 && JH.LootDisp.lootKey == undefined){
		JH.LootDisp.lootKey = JH.ActionMgr.AddAction("loot", JH.LootDisp.HandleLoot, destTile);
		JH.LootDisp.pickupKey = JH.ActionMgr.AddAction("pickup", JH.LootDisp.HandlePickup, destTile);
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

JH.LootDisp.HandlePickup = function(tile) {
	console.log("we have: " + tile.loot[0]);
	JH.EM.Pickup(tile.loot[0][0]);
	tile.loot[0][1]--;
	if (tile.loot[0][1] == 0) {
		tile.loot.splice(0, 1);
	}
};






