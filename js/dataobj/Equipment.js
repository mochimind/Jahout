JH.Equipment = {};

JH.Equipment.slot = {};
JH.Equipment.slot.head = 1;
JH.Equipment.slot.armor = 2;
JH.Equipment.slot.clothes = 3;
JH.Equipment.slot.utility = 4;
JH.Equipment.slot.pack = 5;
JH.Equipment.slot.hand = 0;

JH.Equipment.citizen = "USF Citizen";
JH.Equipment.dsevest = "DSE Vest";
JH.Equipment.spacesuit = "Pressurized Space Suit";
JH.Equipment.dsehelmet = "DSE Helmet";
JH.Equipment.dsemule = "DSE Mule";
JH.Equipment.msdoc = "MedServ Doc";
JH.Equipment.echef = "Everyman Chef";

JH.Equipment.Create = function(type) {
	console.log("creating: " + type);
	
	var obj = {};
	obj.type = type;
	if (type == JH.Equipment.citizen) {
		obj.slot = JH.Equipment.slot.hand;
	} else if (type == JH.Equipment.dsevest) {
		obj.slot = JH.Equipment.slot.armor;
	} else if (type == JH.Equipment.spacesuit) {
		obj.slot = JH.Equipment.slot.clothes;
	} else if (type == JH.Equipment.dsehelmet) {
		obj.slot = JH.Equipment.slot.head;
	} else if (type == JH.Equipment.dsemule) {
		obj.slot = JH.Equipment.slot.pack;
	} else if (type == JH.Equipment.msdoc) {
		obj.slot = JH.Equipment.slot.utility;
	} else if (type == JH.Equipment.echef) {
		obj.slot = JH.Equipment.slot.utility;
	} else {
		return null;
	}
	
	return obj;
};

