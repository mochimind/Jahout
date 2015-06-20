JH.MD = {};
JH.MD.cells = [];
JH.MD.userTile = [];
JH.MD.referenceTile = [];
JH.MD.tilesAroundUser = 8;
JH.MD.activeTarget;
JH.MD.lootKey = undefined;
// 1,1 represents the block the user is currently on

JH.MD.Init = function() {
	JH.MD.referenceTile = [JH.MMgr.spawn[0]-JH.MD.tilesAroundUser, JH.MMgr.spawn[1]-JH.MD.tilesAroundUser];
	JH.MD.player = JH.UM.GetPlayer();
	
	JH.MD.container = $("#map");
	for (var i=0 ; i<1+2*JH.MD.tilesAroundUser ; i++) {
		JH.MD.cells.push([]);
		var tr = $("<tr></tr>");
		for (var j=0 ; j<1+2*JH.MD.tilesAroundUser ; j++) {
			var td = $("<td></td>");
			tr.append(td);
			var img = $("<img class='maptile'>");
			img.click(function(a, b) {
				return function() { JH.TargetD.HandleClick(a, b); };
			}(i, j));
			td.append(img);
			JH.MD.cells[i].push(img);
			JH.MD.cells[i][j].attr("src", JH.Tile.GetImg(JH.MD.GetUniversalTile(i,j)));
		}
		JH.MD.container.append(tr);
	}
};

JH.MD.Redraw = function() {
	for (var i=0 ; i<JH.MD.cells.length ; i++) {
		for (var j=0 ; j<JH.MD.cells[0].length ; j++) {
			JH.MD.cells[i][j].attr("src", JH.Tile.GetImg(JH.MD.GetUniversalTile(i,j)));
		}
	}
};

JH.MD.MoveLeft = function() {
	var desty = JH.MD.referenceTile[0]+JH.MD.tilesAroundUser;
	var destx = JH.MD.referenceTile[1]+JH.MD.tilesAroundUser-1;
	if (!JH.MMgr.GetTile(desty, destx).traversable) { return;}
	JH.MD.UpdateTileActions(desty, destx);
	JH.Unit.MoveToTile(JH.MD.player, desty, destx);
	JH.MD.referenceTile[1] -= 1;
	JH.TM.PlayerAction();
};

JH.MD.MoveUp = function() {
	var desty = JH.MD.referenceTile[0]+JH.MD.tilesAroundUser-1;
	var destx = JH.MD.referenceTile[1]+JH.MD.tilesAroundUser;
	if (!JH.MMgr.GetTile(desty, destx).traversable) { return;}
	JH.MD.UpdateTileActions(desty, destx);
	JH.Unit.MoveToTile(JH.MD.player, desty, destx);
	JH.MD.referenceTile[0] -= 1;
	JH.TM.PlayerAction();
};

JH.MD.MoveRight = function() {
	var desty = JH.MD.referenceTile[0]+JH.MD.tilesAroundUser;
	var destx = JH.MD.referenceTile[1]+JH.MD.tilesAroundUser+1;
	if (!JH.MMgr.GetTile(desty, destx).traversable) { return;}
	JH.MD.UpdateTileActions(desty, destx);
	JH.Unit.MoveToTile(JH.MD.player, desty, destx);
	JH.MD.referenceTile[1] += 1;
	JH.TM.PlayerAction();
};

JH.MD.MoveDown = function() {
	var desty = JH.MD.referenceTile[0]+JH.MD.tilesAroundUser+1;
	var destx = JH.MD.referenceTile[1]+JH.MD.tilesAroundUser;
	if (!JH.MMgr.GetTile(desty, destx).traversable) { return;}
	JH.MD.UpdateTileActions(desty, destx);
	JH.Unit.MoveToTile(JH.MD.player, desty, destx);
	JH.MD.referenceTile[0] += 1;
	JH.TM.PlayerAction();
};

JH.MD.UpdateTileActions = function(desty, destx) {
	var destTile = JH.MMgr.GetTile(desty, destx);
	if (destTile.loot.length == 0 && JH.MD.lootKey != undefined) {
		JH.ActionMgr.RemoveAction(JH.MD.lootKey);
		JH.MD.lootKey = undefined;
	} else if (destTile.loot.length > 0 && JH.MD.lootKey == undefined){
		JH.MD.lootKey = JH.ActionMgr.AddAction("loot", JH.MD.HandleLoot, destTile);
	}
};

JH.MD.HandleLoot = function() {
	console.log("handling loot!");
};

JH.MD.GetUniversalTile = function(i, j) {
	return JH.MMgr.GetTile(JH.MD.referenceTile[0] + i, JH.MD.referenceTile[1] + j);
};
