JH.ActionMgr = {};

JH.ActionMgr.actions = [];
JH.ActionMgr.key = 0;

JH.ActionMgr.AddAction = function(name, callback, args) {
	JH.ActionMgr.actions.push([name, callback, args, JH.ActionMgr.key]);
	JH.ActionDisp.Update();
	return JH.ActionMgr.key++;
};

JH.ActionMgr.RemoveAction = function(lootKey) {
	for (var i=0 ; i<JH.ActionMgr.actions.length ; i++) {
		if (JH.ActionMgr.actions[i][3] == lootKey) {
			JH.ActionMgr.actions.splice(i, 1);
			JH.ActionDisp.Update();
			return true;
		}
	}
	return false;
};


