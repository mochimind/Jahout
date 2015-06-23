JH.ItemD = {};

JH.ItemD.Init = function() {
	JH.ItemD.Update();
	JH.ActionMgr.AddAction("Equipment", JH.ItemD.TogglePanel);
};

JH.ItemD.ShowPanel = function() {
	$("#equipment").show();
};

JH.ItemD.HidePanel = function() {
	$("#equipment").hide();
};

JH.ItemD.TogglePanel = function() {
	if ($("#equipment").is(":visible")) {
		JH.ItemD.HidePanel();
	} else {
		JH.ItemD.ShowPanel();
	}
};

JH.ItemD.Update = function() {
	var token = JH.EM.GetItem(JH.Item.slot.head);
	if (token != null) {
		$("#inv_head").html(token.type);
	} else {
		$("#inv_head").html("none");
	}
	
	token = JH.EM.GetItem(JH.Item.slot.clothes);
	if (token != null) {
		$("#inv_clothes").html(token.type);
	} else {
		$("#inv_clothes").html("none");
	}

	token = JH.EM.GetItem(JH.Item.slot.armor);
	if (token != null) {
		$("#inv_armor").html(token.type);
	} else {
		$("#inv_armor").html("none");
	}

	token = JH.EM.GetItem(JH.Item.slot.pack);
	if (token != null) {
		$("#inv_pack").html(token.type);
	} else {
		$("#inv_pack").html("none");
	}

	token = JH.EM.GetItem(JH.Item.slot.utility);
	if (token != null) {
		$("#inv_utility").html(token.type);
	} else {
		$("#inv_utility").html("none");
	}

	token = JH.EM.GetItem(JH.Item.slot.hand);
	if (token != null) {
		$("#inv_hand").html(token.type);
	} else {
		$("#inv_hand").html("none");
	}

	token = JH.EM.GetItem(JH.Item.slot.weapon);
	if (token != null) {
		$("#inv_holster").html(token.type);
	} else {
		$("#inv_holster").html("none");
	}
};



