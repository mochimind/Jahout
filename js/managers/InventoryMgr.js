JH.IM = {};

JH.IM.pack = [];
JH.IM.equipment = [];

JH.IM.slot = {};
JH.IM.slot.head= 0;
JH.IM.slot.armor = 1;
JH.IM.slot.clothes = 2;
JH.IM.slot.pack = 3;
JH.IM.slot.utility1 = 4;
JH.IM.slot.utility2 = 5;
JH.IM.slot.lefthand = 7;
JH.IM.slot.righthand = 8;

JH.IM.Init = function() {
	for (var i=0 ; i<Object.keys(JH.IM.slot).length ; i++) {
		JH.IM.equipment.push(null);
	}
};

JH.IM.Equip = function(item) {
	switch(item.slot) {
	case JH.Equipment.slot.head:
		if (JH.IM.equipment[JH.IM.slot.head] != null) {
			JH.IM.Unequip(JH.IM.slot.head);
		}
		JH.IM.equipment[JH.IM.slot.head] = item;
		break;
	case JH.Equipment.slot.armor:
		if (JH.IM.equipment[JH.IM.slot.armor] != null) {
			JH.IM.Unequip(JH.IM.slot.armor);
		}
		JH.IM.equipment[JH.IM.slot.armor] = item;
		break;
	case JH.Equipment.slot.clothes:
		if (JH.IM.equipment[JH.IM.slot.clothes] != null) {
			JH.IM.Unequip(JH.IM.slot.clothes);
		}
		JH.IM.equipment[JH.IM.slot.clothes] = item;
		break;
	case JH.Equipment.slot.pack:
		if (JH.IM.equipment[JH.IM.slot.pack] != null) {
			JH.IM.Unequip(JH.IM.slot.pack);
		}
		JH.IM.equipment[JH.IM.slot.pack] = item;
		break;
	case JH.Equipment.slot.utility:
		if (JH.IM.equipment[JH.IM.slot.utility1] != null) {
			if (JH.IM.equipment[JH.IM.slot.utility2] != null) {
				JH.IM.Unequip(JH.IM.slot.utility1);
				JH.IM.equipment[JH.IM.slot.utility1] = item;
			} else {
				JH.IM.equipment[JH.IM.slot.utility2] = item;
			}
		} else {
			JH.IM.equipment[JH.IM.slot.utility1] = item;			
		}
		break;
	case JH.Equipment.slot.hand:
		if (JH.IM.equipment[JH.IM.slot.lefthand] != null) {
			if (JH.IM.equipment[JH.IM.slot.righthand] != null) {
				JH.IM.Unequip(JH.IM.slot.lefthand);
				JH.IM.equipment[JH.IM.slot.lefthand] = item;
			} else {
				JH.IM.equipment[JH.IM.slot.righthand] = item;
			}
		} else {
			JH.IM.equipment[JH.IM.slot.lefthand] = item;			
		}
		break;
	}
	JH.Inventory.Update();
};

JH.IM.Unequip = function(slotNumber) {
	if (JH.IM.equipment[slotNumber] != null) {
		JH.IM.pack.push(JH.IM.equipment[slotNumber]);
		JH.IM.equipment[slotNumber] = null;
	}
	JH.Inventory.Update();
};

JH.IM.GetItem = function(slotNumber) {
	return JH.IM.equipment[slotNumber];
};




