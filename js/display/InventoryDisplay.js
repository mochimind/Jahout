JH.Inventory = {};

JH.Inventory.Init = function() {
	JH.Inventory.Update();
};

JH.Inventory.ShowPanel = function() {
	$("#map").hide();
	$("#inventory").show();
};

JH.Inventory.HidePanel = function() {
	$("#map").show();
	$("#inventory").hide();
};

JH.Inventory.TogglePanel = function() {
	if ($("#map").is(":visible")) {
		JH.Inventory.ShowPanel();
	} else {
		JH.Inventory.HidePanel();
	}
};

JH.Inventory.Update = function() {
	var token = JH.IM.GetItem(JH.IM.slot.head);
	if (token != null) {
		$("#inv_head").html(token.type);
	} else {
		$("#inv_head").html("none");
	}
	
	token = JH.IM.GetItem(JH.IM.slot.clothes);
	if (token != null) {
		$("#inv_clothes").html(token.type);
	} else {
		$("#inv_clothes").html("none");
	}

	token = JH.IM.GetItem(JH.IM.slot.armor);
	if (token != null) {
		$("#inv_armor").html(token.type);
	} else {
		$("#inv_armor").html("none");
	}

	token = JH.IM.GetItem(JH.IM.slot.pack);
	if (token != null) {
		$("#inv_pack").html(token.type);
	} else {
		$("#inv_pack").html("none");
	}

	token = JH.IM.GetItem(JH.IM.slot.utility1);
	if (token != null) {
		$("#inv_utility1").html(token.type);
	} else {
		$("#inv_utility1").html("none");
	}

	token = JH.IM.GetItem(JH.IM.slot.utility2);
	if (token != null) {
		$("#inv_utility2").html(token.type);
	} else {
		$("#inv_utility2").html("none");
	}

	token = JH.IM.GetItem(JH.IM.slot.lefthand);
	if (token != null) {
		$("#inv_lefthand").html(token.type);
	} else {
		$("#inv_lefthand").html("none");
	}

	token = JH.IM.GetItem(JH.IM.slot.righthand);
	if (token != null) {
		$("#inv_righthand").html(token.type);
	} else {
		$("#inv_righthand").html("none");
	}
};



