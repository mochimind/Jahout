JH.Item = {};

JH.Item.slot = {};
JH.Item.slot.head = 1;
JH.Item.slot.armor = 2;
JH.Item.slot.clothes = 3;
JH.Item.slot.utility = 4;
JH.Item.slot.pack = 5;
JH.Item.slot.hand = 0;
JH.Item.slot.weapon = -1;

JH.Item.type = {};
JH.Item.type.equipment = 0;
JH.Item.type.consumable = 1;
JH.Item.type.resource = 2;
JH.Item.type.furniture = 3;

JH.Item.citizen = "USF Citizen";
JH.Item.dsevest = "DSE Vest";
JH.Item.spacesuit = "Pressurized Space Suit";
JH.Item.dsehelmet = "DSE Helmet";
JH.Item.dsemule = "DSE Mule";
JH.Item.msdoc = "MedServ Doc";
JH.Item.echef = "Everyman Chef";
JH.Item.cutter = "Utility Cutter";

JH.Item.rawmeat = "Mystery Meat";
JH.Item.rawwater = "Alien Water";
JH.Item.billowcorpse = "Billow Corpse";
JH.Item.wheelbarrow = "Wheel Barrow";
JH.Item.logs = "Logs";


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
		obj.bulk = 8;
		obj.weight = 3;
	} else if (type == JH.Item.dsevest) {
		obj.slot = JH.Item.slot.armor;
		obj.onEquip = function() { JH.SM.AddArmor(10); };
		obj.onUnequip = function() { JH.SM.AddArmor(-10); };
		obj.bulk = 30;
		obj.weight = 15;
	} else if (type == JH.Item.spacesuit) {
		obj.slot = JH.Item.slot.clothes;
		obj.bulk = 25;
		obj.weight = 20;
	} else if (type == JH.Item.dsehelmet) {		
		obj.slot = JH.Item.slot.head;
		obj.onEquip = function() { JH.SM.AddArmor(3); };
		obj.onUnequip = function() { JH.SM.AddArmor(-3); };
		obj.bulk = 35;
		obj.weight = 15;
	} else if (type == JH.Item.dsemule) {
		obj.slot = JH.Item.slot.pack;
		obj.bulk = 15;
		obj.weight = 8;
	} else if (type == JH.Item.msdoc) {
		obj.slot = JH.Item.slot.utility;
		obj.bulk = 9;
		obj.weight = 12;
	} else if (type == JH.Item.echef) {
		obj.slot = JH.Item.slot.utility;
		obj.bulk = 6;
		obj.weight = 8;
	} else if (type == JH.Item.cutter) {
		obj.slot = JH.Item.weapon;
		obj.bulk = 10;
		obj.weight = 9;
	} else if (type == JH.Item.billowcorpse) {
		obj.bulk = 500;
		obj.weight = 300;
	} else if (type == JH.Item.logs) {
		obj.bulk = 300;
		obj.weight = 200;
	} else {
		return null;
	}
	
	return obj;
};

