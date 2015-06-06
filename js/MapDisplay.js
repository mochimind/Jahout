JH.MD = {};
JH.MD.cells = [];
JH.MD.userTile = [];
JH.MD.tilesAroundUser = 8;
// 1,1 represents the block the user is currently on

JH.MD.Init = function() {
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
			JH.MD.SetIMGSrc(JH.MMgr.GetTile(i+JH.MMgr.spawn[0]-JH.MD.tilesAroundUser,j+JH.MMgr.spawn[1]-JH.MD.tilesAroundUser), i, j);
		}
		JH.MD.container.append(tr);
	}
	
	JH.MD.userTile = JH.MMgr.spawn;
	JH.MD.DrawPlayer(JH.MD.GetPlayerTile());
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

// Gets the on screen player coords
JH.MD.GetPlayerTile = function() {
	var outCoords = [0,0];
	if (JH.MD.userTile[0] < JH.MD.tilesAroundUser) {
		outCoords[0] = JH.MD.userTile[0];
	} else if (JH.MMgr.mapSize[0] - JH.MD.userTile[0] < JH.MD.tilesAroundUser) {
		outCoords[0] = JH.MMgr.mapSize[0] - JH.MD.userTile[0];
	} else {
		outCoords[0] = JH.MD.tilesAroundUser;
	}
	
	if (JH.MD.userTile[1] < JH.MD.tilesAroundUser) {
		outCoords[1] = JH.MD.userTile[1];
	} else if (JH.MMgr.mapSize[1] - JH.MD.userTile[1] < JH.MD.tilesAroundUser) {
		outCoords[1] = JH.MMgr.mapSize[1] - JH.MD.userTile[1];
	} else {
		outCoords[1] = JH.MD.tilesAroundUser;
	}

	return outCoords;
};

JH.MD.DrawPlayer = function(coords) {
	JH.MD.cells[coords[0]][coords[1]].attr("src", "img/dude.png");
};

JH.MD.MoveLeft = function() {
	if (JH.MD.userTile[1] == 0) { return; }
	if (!JH.MMgr.GetTile(JH.MD.userTile[0], JH.MD.userTile[1]-1).traversable) { return;}
	var playerCoords = JH.MD.GetPlayerTile();
	JH.MD.SetIMGSrc(JH.MMgr.GetTile(JH.MD.userTile[0], JH.MD.userTile[1]), playerCoords[0], playerCoords[1]);
	JH.MD.userTile[1]--;
	
	if (playerCoords[1] == JH.MD.tilesAroundUser) {
		// we need to shift all cells to the bottom
		for (var i=0 ; i<JH.MD.cells.length ; i++) {
			for (var j=JH.MD.cells[0].length-1 ; j>0 ; j--) {
				JH.MD.cells[i][j].attr("src", JH.MD.cells[i][j-1].attr("src"));
			}
		}
		
		// new row of data on left side
		for (var i=0 ; i<JH.MD.cells.length ; i++) {
			JH.MD.SetIMGSrc(JH.MMgr.GetTile(JH.MD.userTile[0]+i-JH.MD.tilesAroundUser,JH.MD.userTile[1]-JH.MD.tilesAroundUser),
					i,0);
		}
	}
	
	playerCoords = JH.MD.GetPlayerTile();
	JH.MD.DrawPlayer(playerCoords);
	JH.TM.PlayerMove();
};

JH.MD.MoveUp = function() {
	if (JH.MD.userTile[0] == 0) { return; }
	if (!JH.MMgr.GetTile(JH.MD.userTile[0]-1, JH.MD.userTile[1]).traversable) { return;}
	var playerCoords = JH.MD.GetPlayerTile();	
	JH.MD.SetIMGSrc(JH.MMgr.GetTile(JH.MD.userTile[0], JH.MD.userTile[1]), playerCoords[0], playerCoords[1]);
	JH.MD.userTile[0]--;
	
	if (playerCoords[0] == JH.MD.tilesAroundUser) {
		// we need to shift all cells to the right
		for (var i=JH.MD.cells.length-1 ; i>0 ; i--) {
			for (var j=0 ; j<JH.MD.cells[0].length ; j++) {
				JH.MD.cells[i][j].attr("src", JH.MD.cells[i-1][j].attr("src"));
			}
		}
		
		// new row of data on left side
		for (var j=0 ; j<JH.MD.cells[0].length ; j++) {
			JH.MD.SetIMGSrc(JH.MMgr.GetTile(JH.MD.userTile[0]-JH.MD.tilesAroundUser,JH.MD.userTile[1]-JH.MD.tilesAroundUser+j),
					0,j);
		}
	}
	
	playerCoords = JH.MD.GetPlayerTile();
	JH.MD.DrawPlayer(playerCoords);
	JH.TM.PlayerMove();
};

JH.MD.MoveRight = function() {
	if (JH.MD.userTile[1] == JH.MMgr.mapSize[0]-1) { return; }
	if (!JH.MMgr.GetTile(JH.MD.userTile[0], JH.MD.userTile[1]+1).traversable) { return;}
	var playerCoords = JH.MD.GetPlayerTile();
	JH.MD.SetIMGSrc(JH.MMgr.GetTile(JH.MD.userTile[0], JH.MD.userTile[1]), playerCoords[0], playerCoords[1]);
	JH.MD.userTile[1]++;
	
	if (playerCoords[1] == JH.MD.tilesAroundUser) {
		// we need to shift all cells to the left
		for (var i=0 ; i<JH.MD.cells.length ; i++) {
			for (var j=0 ; j<JH.MD.cells[0].length-1 ; j++) {
				JH.MD.cells[i][j].attr("src", JH.MD.cells[i][j+1].attr("src"));
			}
		}
		
		// new row of data on left side
		for (var i=0 ; i<JH.MD.cells.length ; i++) {
			JH.MD.SetIMGSrc(JH.MMgr.GetTile(JH.MD.userTile[0]+i-JH.MD.tilesAroundUser,JH.MD.userTile[1]+JH.MD.tilesAroundUser),
					i,JH.MD.cells.length-1);
		}
	}
	
	playerCoords = JH.MD.GetPlayerTile();
	JH.MD.DrawPlayer(playerCoords);
	JH.TM.PlayerMove();
};

JH.MD.MoveDown = function() {
	if (JH.MD.userTile[0] == JH.MMgr.mapSize[1]-1) { return; }
	if (!JH.MMgr.GetTile(JH.MD.userTile[0]+1, JH.MD.userTile[1]).traversable) { return;}
	var playerCoords = JH.MD.GetPlayerTile();
	JH.MD.SetIMGSrc(JH.MMgr.GetTile(JH.MD.userTile[0], JH.MD.userTile[1]), playerCoords[0], playerCoords[1]);
	JH.MD.userTile[0]++;
	
	if (playerCoords[0] == JH.MD.tilesAroundUser) {
		// we need to shift all cells to the top
		for (var i=0 ; i<JH.MD.cells.length-1 ; i++) {
			for (var j=0 ; j<JH.MD.cells[0].length ; j++) {
				JH.MD.cells[i][j].attr("src", JH.MD.cells[i+1][j].attr("src"));
			}
		}
		
		// new row of data on left side
		for (var j=0 ; j<JH.MD.cells[0].length ; j++) {
			JH.MD.SetIMGSrc(JH.MMgr.GetTile(JH.MD.userTile[0]+JH.MD.tilesAroundUser,JH.MD.userTile[1]-JH.MD.tilesAroundUser+j),
					JH.MD.cells.length-1,j);
		}
	}
	
	playerCoords = JH.MD.GetPlayerTile();
	JH.MD.DrawPlayer(playerCoords);
	JH.TM.PlayerMove();
};

