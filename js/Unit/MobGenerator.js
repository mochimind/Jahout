JH.MobGenerator = {};

JH.MobGenerator.Init = function() {
	
};

JH.MobGenerator.HandleTurn = function() {
	
};

JH.MobGenerator.PopulateBlock = function(block, referenceY, referenceX) {
	for (var i=0 ; i<block.length ; i++) {
		for (var j=0 ; j<block[i].length ; j++) {
			if (block[i][j].terrain == JH.Tile.GrassTerrain && block[i][j].building == null && block[i][j].unit == null) {
				if (Math.random() * 100 < 0.5) {
					JH.Unit.Create(JH.Unit.Billow, [referenceY*JH.MapBlock.size + i, referenceX*JH.MapBlock.size + j]);
				}
			}
		}
	}
};


