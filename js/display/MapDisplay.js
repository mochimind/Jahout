JH.MD = {};
JH.MD.cells = [];
JH.MD.userTile = [];
JH.MD.referenceTile = [];
JH.MD.tilesAroundUser = 8;
// 1,1 represents the block the user is currently on

JH.MD.Init = function() {
	JH.MD.referenceTile = [JH.MMgr.spawn[0]-JH.MD.tilesAroundUser, JH.MMgr.spawn[1]-JH.MD.tilesAroundUser];
	JH.MD.player = JH.Unit.Create(JH.Unit.Player, JH.MMgr.spawn);
	
	JH.MD.container = $("#map");
	for (var i=0 ; i<1+2*JH.MD.tilesAroundUser ; i++) {
		JH.MD.cells.push([]);
		var tr = $("<tr></tr>");
		for (var j=0 ; j<1+2*JH.MD.tilesAroundUser ; j++) {
			var td = $("<td></td>");
			tr.append(td);
			var img = $("<img class='maptile'>");
			td.append(img);
			JH.MD.cells[i].push(img);
			JH.MD.SetIMGSrc(JH.MMgr.GetTile(JH.MD.referenceTile[0]+i, JH.MD.referenceTile[1]+j), i, j);
		}
		JH.MD.container.append(tr);
	}
};

JH.MD.SetIMGSrc = function(tile, x, y) {
	if (tile.unit != null) {
		JH.MD.cells[x][y].attr("src", tile.unit.img);
		return;
	}
	if (tile.terrain == JH.Tile.GravelTerrain) {
		JH.MD.cells[x][y].attr("src", "img/gravel.png");
	} else if (tile.terrain == JH.Tile.RockyTerrain) {
		JH.MD.cells[x][y].attr("src", "img/rocky.png");
	} else if (tile.terrain == JH.Tile.ImpassableTerrain) {
		JH.MD.cells[x][y].attr("src", "img/impassable.png");
	}
};

JH.MD.Redraw = function() {
	for (var i=0 ; i<JH.MD.cells.length ; i++) {
		for (var j=0 ; j<JH.MD.cells[0].length ; j++) {
			JH.MD.SetIMGSrc(JH.MMgr.GetTile(JH.MD.referenceTile[0]+i, JH.MD.referenceTile[1]+j), i, j);
		}
	}
};

JH.MD.MoveLeft = function() {
	var desty = JH.MD.referenceTile[0]+JH.MD.tilesAroundUser;
	var destx = JH.MD.referenceTile[1]+JH.MD.tilesAroundUser-1;
	if (!JH.MMgr.GetTile(desty, destx).traversable) { return;}
	JH.Unit.MoveToTile(JH.MD.player, desty, destx);
	JH.MD.referenceTile[1] -= 1;
	JH.MD.Redraw();
	JH.TM.PlayerMove();
};

JH.MD.MoveUp = function() {
	var desty = JH.MD.referenceTile[0]+JH.MD.tilesAroundUser-1;
	var destx = JH.MD.referenceTile[1]+JH.MD.tilesAroundUser;
	if (!JH.MMgr.GetTile(desty, destx).traversable) { return;}
	JH.Unit.MoveToTile(JH.MD.player, desty, destx);
	JH.MD.referenceTile[0] -= 1;
	JH.MD.Redraw();
	JH.TM.PlayerMove();
};

JH.MD.MoveRight = function() {
	var desty = JH.MD.referenceTile[0]+JH.MD.tilesAroundUser;
	var destx = JH.MD.referenceTile[1]+JH.MD.tilesAroundUser+1;
	if (!JH.MMgr.GetTile(desty, destx).traversable) { return;}
	JH.Unit.MoveToTile(JH.MD.player, desty, destx);
	JH.MD.referenceTile[1] += 1;
	JH.MD.Redraw();
	JH.TM.PlayerMove();
};

JH.MD.MoveDown = function() {
	var desty = JH.MD.referenceTile[0]+JH.MD.tilesAroundUser+1;
	var destx = JH.MD.referenceTile[1]+JH.MD.tilesAroundUser;
	if (!JH.MMgr.GetTile(desty, destx).traversable) { return;}
	JH.Unit.MoveToTile(JH.MD.player, desty, destx);
	JH.MD.referenceTile[0] += 1;
	JH.MD.Redraw();
	JH.TM.PlayerMove();
};
