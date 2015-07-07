JH.ActionMgr = {};

JH.ActionMgr.actions = [];
JH.ActionMgr.key = 0;
JH.ActionMgr.repeatable = true;
JH.ActionMgr.activeAction = null;

JH.ActionMgr.AddAction = function(name, callback, args) {
	JH.ActionMgr.actions.push([name, callback, args, JH.ActionMgr.key]);
	JH.ActionDisp.Update();
	return JH.ActionMgr.key++;
};

JH.ActionMgr.RemoveAction = function(key) {
	for (var i=0 ; i<JH.ActionMgr.actions.length ; i++) {
		if (JH.ActionMgr.actions[i][3] == key) {
			JH.ActionMgr.actions.splice(i, 1);
			JH.ActionDisp.Update();
			if (JH.ActionMgr.activeAction != null && key == JH.ActionMgr.activeAction[3]) {
				JH.activeAction = null;
				JH.ActionMgr.Interrupt();
			}
			return true;
		}
	}
	return false;
};

JH.ActionMgr.SetActiveAction = function(key) {
	for (var i=0 ; i<JH.ActionMgr.actions.length ; i++) {
		if (JH.ActionMgr.actions[i][3] == key) {
			JH.ActionMgr.activeAction = JH.ActionMgr.actions[i];
			return;
		}
	}
	JH.ActionMgr.activeAction = null;
};

JH.ActionMgr.Interrupt = function() {
	// makes the current action no longer repeatable
	JH.ActionMgr.repeatable = false;
};

JH.ActionMgr.ResetContinualAction = function() {
	JH.ActionMgr.repeatable = true;
};

JH.ActionMgr.RepeatAction = function() {
	if (JH.ActionMgr.repeatable == false || JH.ActionMgr.activeAction == null) { return; }
	JH.ActionMgr.activeAction[1](JH.ActionMgr.activeAction[2]);
};




