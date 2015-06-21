JH.TargetD = {};

JH.TargetD.HandleClick = function(i, j) {
	var tile = JH.MD.GetUniversalTile(i,j);
	$("#targetPicture").attr("src",JH.Tile.GetImg(tile));
	$("#targetText").text(JH.Tile.GetDescription(tile));
	JH.TargetMgr.SetTarget(JH.MD.player, tile.unit);
	
	if (tile.unit !== null && tile.unit.ai != null) {
		JH.TargetD.actionKey = JH.ActionMgr.AddAction("Attack", JH.TargetD.HandleAttack);		
	} else if (JH.TargetD.actionKey != null) {
		JH.ActionMgr.RemoveAction(JH.TargetD.actionKey);
	}
};

JH.TargetD.ClearTargeting = function() {
	$("#targetPicture").attr("src","");
	$("#targetText").text("");
	JH.TargetMgr.SetTarget(JH.MD.player, null);
	
	if (JH.TargetD.actionKey != null) {
		JH.ActionMgr.RemoveAction(JH.TargetD.actionKey);		
	}
};

JH.TargetD.HandleAttack = function() {
	if (JH.TargetD.player == null) {
		JH.TargetD.player = JH.UM.GetPlayer();
	}
	if (JH.TargetD.player.target == null) {
		JH.Main.Annotate("You don't have a target");
		return;
	}
	
	if (JH.TargetMgr.CanAttack(JH.TargetD.player)) {
		JH.TargetMgr.Attack(JH.TargetD.player);
		if (JH.TargetD.player.target == null) {
			JH.TargetD.ClearTargeting();
		}
		JH.TM.PlayerAction();
	} else {
		JH.Main.Annotate("You are too far away to hit the " + JH.TargetD.player.target.type);
	}
};

