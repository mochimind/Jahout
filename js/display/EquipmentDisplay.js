JH.ItemD = {};

JH.ItemD.Init = function() {
	JH.ItemD.Update();
};

JH.ItemD.ShowPanel = function() {
	$("#map").hide();
	$("#inventory").show();
};

JH.ItemD.HidePanel = function() {
	$("#map").show();
	$("#inventory").hide();
};

JH.ItemD.TogglePanel = function() {
	if ($("#map").is(":visible")) {
		JH.ItemD.ShowPanel();
	} else {
		JH.ItemD.HidePanel();
	}
};

JH.ItemD.Update = function() {
	var token = JH.EM.GetItem(JH.EM.slot.head);
	if (token != null) {
		$("#inv_head").html(token.type);
	} else {
		$("#inv_head").html("none");
	}
	
	token = JH.EM.GetItem(JH.EM.slot.clothes);
	if (token != null) {
		$("#inv_clothes").html(token.type);
	} else {
		$("#inv_clothes").html("none");
	}

	token = JH.EM.GetItem(JH.EM.slot.armor);
	if (token != null) {
		$("#inv_armor").html(token.type);
	} else {
		$("#inv_armor").html("none");
	}

	token = JH.EM.GetItem(JH.EM.slot.pack);
	if (token != null) {
		$("#inv_pack").html(token.type);
	} else {
		$("#inv_pack").html("none");
	}

	token = JH.EM.GetItem(JH.EM.slot.utility1);
	if (token != null) {
		$("#inv_utility1").html(token.type);
	} else {
		$("#inv_utility1").html("none");
	}

	token = JH.EM.GetItem(JH.EM.slot.utility2);
	if (token != null) {
		$("#inv_utility2").html(token.type);
	} else {
		$("#inv_utility2").html("none");
	}

	token = JH.EM.GetItem(JH.EM.slot.lefthand);
	if (token != null) {
		$("#inv_lefthand").html(token.type);
	} else {
		$("#inv_lefthand").html("none");
	}

	token = JH.EM.GetItem(JH.EM.slot.righthand);
	if (token != null) {
		$("#inv_righthand").html(token.type);
	} else {
		$("#inv_righthand").html("none");
	}
};



