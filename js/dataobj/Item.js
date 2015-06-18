JH.Item = {};

JH.Item.slot = {};
JH.Item.slot.head = 1;
JH.Item.slot.armor = 2;
JH.Item.slot.clothes = 3;
JH.Item.slot.utility = 4;
JH.Item.slot.pack = 5;
JH.Item.slot.hand = 0;

JH.Item.citizen = "USF Citizen";
JH.Item.dsevest = "DSE Vest";
JH.Item.spacesuit = "Pressurized Space Suit";
JH.Item.dsehelmet = "DSE Helmet";
JH.Item.dsemule = "DSE Mule";
JH.Item.msdoc = "MedServ Doc";
JH.Item.echef = "Everyman Chef";

JH.Item.Create = function(type) {
	
	var obj = {};
	obj.type = type;
	if (type == JH.Item.citizen) {
		obj.slot = JH.Item.slot.hand;
		obj.onEquip = function() {
			// TODO: this is a hack, if we want to implement real dual wielding, we need to think about ranges
			JH.SM.SetWeapon(3, 5);
		};
		obj.onUnequip = function() { JH.SM.SetWeapon(); };
	} else if (type == JH.Item.dsevest) {
		obj.slot = JH.Item.slot.armor;
		obj.onEquip = function() { JH.SM.AddArmor(10); };
		obj.onUnequip = function() { JH.SM.AddArmor(-10); };
	} else if (type == JH.Item.spacesuit) {
		obj.slot = JH.Item.slot.clothes;
	} else if (type == JH.Item.dsehelmet) {		
		obj.slot = JH.Item.slot.head;
		obj.onEquip = function() { JH.SM.AddArmor(3); };
		obj.onUnequip = function() { JH.SM.AddArmor(-3); };
	} else if (type == JH.Item.dsemule) {
		obj.slot = JH.Item.slot.pack;
	} else if (type == JH.Item.msdoc) {
		obj.slot = JH.Item.slot.utility;
	} else if (type == JH.Item.echef) {
		obj.slot = JH.Item.slot.utility;
	} else {
		return null;
	}
	
	return obj;
};

