JH.ConstructDisp = {};
JH.ConstructDisp.panelVisible = false;

JH.ConstructDisp.Init = function() {
	JH.ConstructDisp.AddBuildable(JH.Building.sawmill);
	JH.ConstructDisp.AddBuildable(JH.Building.butcher);
	
};

JH.ConstructDisp.HandleTile = function(tile) {
	if (JH.ConstructDisp.buildKey != null) { JH.ActionMgr.RemoveAction(JH.ConstructDisp.buildKey); }
	// TODO: we may want to reuse build keys here, otherwise, we're going to hit a interger overflow eventually
	if (tile.building == null) {
		JH.ConstructDisp.buildKey = JH.ActionMgr.AddAction("Blueprint", JH.ConstructDisp.ToggleBuildPanel);
	} else if (tile.building.type == JH.Building.blueprint) {
		JH.ConstructDisp.buildKey = JH.ActionMgr.AddAction("Build", JH.ConstructMgr.Build, tile);
	}
};

JH.ConstructDisp.ToggleBuildPanel = function() {
	if (JH.ConstructDisp.panelVisible) {
		JH.ConstructDisp.panelVisible = false;
		$(".popup").hide();
		JH.KeyMgr.EnableKeyboard();
	} else {
		$(".popup").hide();
		$("#construction").show();
		JH.ConstructDisp.panelVisible = true;
		JH.KeyMgr.DisableKeyboard();
	}
};

JH.ConstructDisp.AddBuildable = function(name) {
	var buildable = $("<li>" + name + "</li>");
	buildable.click(function() {
		JH.ConstructMgr.BuildNew(name);
		JH.ConstructDisp.ToggleBuildPanel();
	});
	$("#construction").append(buildable);
	
};


