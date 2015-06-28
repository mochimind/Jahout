JH.EM = {};

JH.EM.pack = [];
JH.EM.equipment = [];

JH.EM.Init = function() {
	for (var i=0 ; i<Object.keys(JH.Item.slot).length ; i++) {
		JH.EM.equipment.push(null);
	}
};

// pick up puts it into the player's hands, not pack. The player can pick up anything
JH.EM.Pickup = function(type) {
	console.log("got: " + type);
	JH.EM.Unequip(JH.Item.slot.hand);
	JH.EM.equipment[JH.Item.slot.hand] = JH.Item.Create(type);
	JH.ItemD.Update();
};

JH.EM.Equip = function(item) {
	if (item.slot == JH.Item.slot.weapon) {
		if (JH.EM.holster != undefined) {
			JH.EM.Unequip(JH.Item.slot.weapon);
		}
		if (JH.EM.equipment[JH.Item.slot.hand] != null) {
			JH.EM.holster = item;
		} else {
			JH.EM.equipment[JH.Item.slot.hand] = item;
		}		
	} else {
		if (JH.EM.equipment[item.slot] != null) {
			JH.EM.Unequip(item.slot);
		}
		JH.EM.equipment[item.slot] = item;
	}
	JH.ItemD.Update();
};

JH.EM.Unequip = function(slotNumber) {
	var removeObj = JH.EM.GetItem(slotNumber);
	if (removeObj == null) { return; }
	
	if (slotNumber == JH.Item.slot.weapon) {
		JH.EM.holster = null;
	} else if (slotNumber == JH.Item.slot.hand) {
		if (removeObj.slot == JH.Item.slot.weapon) {
			var weapon = JH.EM.GetItem(JH.Item.slot.weapon);
			if (weapon != null) {
				JH.EM.holster = removeObj;
				removeObj = weapon;
			}
		}
		JH.EM.equipment[slotNumber] = null;			
	} else {
		JH.EM.equipment[slotNumber] = null;
	}
	
	JH.InvMgr.ForceAdd(removeObj.type, 1);
	JH.ItemD.Update();
};

JH.EM.GetItem = function(slotNumber) {
	if (slotNumber == JH.EM.weapon) {
		return JH.EM.holster;
	}
	return JH.EM.equipment[slotNumber];
};

JH.EM.Remove = function(type) {
	for (var i=0 ; i<JH.EM.equipment.length ; i++) {
		if (JH.EM.equipment[i] != null && JH.EM.equipment[i].type == type) {
			JH.EM.equipment[i] = null;
			JH.ItemD.Update();
			return 1;
		}
	}
	
	if (JH.EM.holster != null && JH.EM.holster.type == type) {
		JH.EM.holster = null;
		JH.ItemD.Update();
		return 1;
	}
	
	return 0;
};
