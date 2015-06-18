JH.EM = {};

JH.EM.pack = [];
JH.EM.equipment = [];

JH.EM.slot = {};
JH.EM.slot.head= 0;
JH.EM.slot.armor = 1;
JH.EM.slot.clothes = 2;
JH.EM.slot.pack = 3;
JH.EM.slot.utility1 = 4;
JH.EM.slot.utility2 = 5;
JH.EM.slot.lefthand = 7;
JH.EM.slot.righthand = 8;

JH.EM.Init = function() {
	for (var i=0 ; i<Object.keys(JH.EM.slot).length ; i++) {
		JH.EM.equipment.push(null);
	}
};

JH.EM.Equip = function(item) {
	switch(item.slot) {
	case JH.Item.slot.head:
		if (JH.EM.equipment[JH.EM.slot.head] != null) {
			JH.EM.Unequip(JH.EM.slot.head);
		}
		JH.EM.equipment[JH.EM.slot.head] = item;
		break;
	case JH.Item.slot.armor:
		if (JH.EM.equipment[JH.EM.slot.armor] != null) {
			JH.EM.Unequip(JH.EM.slot.armor);
		}
		JH.EM.equipment[JH.EM.slot.armor] = item;
		break;
	case JH.Item.slot.clothes:
		if (JH.EM.equipment[JH.EM.slot.clothes] != null) {
			JH.EM.Unequip(JH.EM.slot.clothes);
		}
		JH.EM.equipment[JH.EM.slot.clothes] = item;
		break;
	case JH.Item.slot.pack:
		if (JH.EM.equipment[JH.EM.slot.pack] != null) {
			JH.EM.Unequip(JH.EM.slot.pack);
		}
		JH.EM.equipment[JH.EM.slot.pack] = item;
		break;
	case JH.Item.slot.utility:
		if (JH.EM.equipment[JH.EM.slot.utility1] != null) {
			if (JH.EM.equipment[JH.EM.slot.utility2] != null) {
				JH.EM.Unequip(JH.EM.slot.utility1);
				JH.EM.equipment[JH.EM.slot.utility1] = item;
			} else {
				JH.EM.equipment[JH.EM.slot.utility2] = item;
			}
		} else {
			JH.EM.equipment[JH.EM.slot.utility1] = item;			
		}
		break;
	case JH.Item.slot.hand:
		if (JH.EM.equipment[JH.EM.slot.lefthand] != null) {
			if (JH.EM.equipment[JH.EM.slot.righthand] != null) {
				JH.EM.Unequip(JH.EM.slot.lefthand);
				JH.EM.equipment[JH.EM.slot.lefthand] = item;
			} else {
				JH.EM.equipment[JH.EM.slot.righthand] = item;
			}
		} else {
			JH.EM.equipment[JH.EM.slot.lefthand] = item;			
		}
		break;
	}
	JH.ItemD.Update();
};

JH.EM.Unequip = function(slotNumber) {
	if (JH.EM.equipment[slotNumber] != null) {
		JH.EM.pack.push(JH.EM.equipment[slotNumber]);
		JH.EM.equipment[slotNumber] = null;
	}
	JH.ItemD.Update();
};

JH.EM.GetItem = function(slotNumber) {
	return JH.EM.equipment[slotNumber];
};




