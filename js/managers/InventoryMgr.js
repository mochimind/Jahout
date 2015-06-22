JH.InvMgr = {};
JH.InvMgr.maxBulk = 50;
JH.InvMgr.curWeight = 0;
JH.InvMgr.curBulk = 0;
JH.InvMgr.items = [];

JH.InvMgr.Add = function(type, count) {
	var obj = JH.Item.Create(type);
	if (JH.InvMgr.curBulk + obj.bulk > JH.InvMgr.maxBulk) {
		JH.Main.Annotate("This item won't fit in your bag!");
		return 0;
	}
	var addCount = Math.min(count, (JH.InvMgr.maxBulk - JH.InvMgr.curBulk) % obj.bulk);
	var added = false;
	for (var i=0 ; i<JH.InvMgr.items.length ; i++) {
		if (JH.InvMgr.items[i][0].type == obj.type) {
			JH.InvMgr.items[i][1]+= addcount;
			added = true;
		}
	}

	if (!added) {
		JH.InvMgr.items.push([obj, addCount]);	
	}
	
	JH.InvMgr.curBulk += obj.bulk * addCount;
	JH.InvMgr.curweight += obj.weight * addCount;
	JH.InvDisp.Update();
	return addCount;
};

JH.InvMgr.ForceAdd = function(obj, count) {
	var added = JH.InvMgr.Add(obj, count);
	if (added == count) { return; }
	
	// can't add all of it into the pack, we need to drop the remainder on the ground
	var playerCoord = JH.MD.GetUserGlobalTile();
	JH.Tile.AddLoot(JH.MMgr.GetTile(playerCoord[0], playerCoord[1]), obj, count);
};

JH.InvMgr.Remove = function(type, count) {
	var obj = JH.Item.Create(type);
	for (var i=0 ; i<JH.InvMgr.items.length ; i++) {
		if (JH.InvMgr.items[i][0] == type) {
			var removeCount = Math.min(count, JH.InvMgr.items[i][1]);
			JH.InvMgr.items[i][1] -= removeCount;
			JH.InvMgr.curBulk -= obj.bulk * removeCount;
			JH.InvMgr.curweight -= obj.weight * removeCount;

			if (JH.InvMgr.items[i][1] == 0) {
				JH.InvMgr.items.splice(i, 1);
			}
			JH.InvDisp.Update();
		}
	}
};


