JH.EM = {};

JH.EM.pack = [];
JH.EM.equipment = [];

JH.EM.Init = function() {
	for (var i=0 ; i<Object.keys(JH.Item.slot).length ; i++) {
		JH.EM.equipment.push(null);
	}
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
	if (slotNumber == JH.EM.weapon) {
		JH.EM.holster = null;
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
