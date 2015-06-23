JH.Building = {};

JH.Building.tree = "tree";

JH.Building.Create = function(type) {
	var obj = {};
	if (type == JH.Building.tree) {
		obj.description = "A weird looking alien tree. You could probably build something nice from it though";
		obj.img = "img/tree.png";
	}
	
	return obj;
};

JH.Building.Blueprint = function (type, xcood, ycoord) {
	
};

