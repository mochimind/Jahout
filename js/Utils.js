JH.Utils = {};

JH.Utils.GetDist = function(coord1, coord2) {
	return Math.floor(Math.sqrt((coord1[0] - coord2[0])^2 + (coord1[1] - coord2[1])^2));
};


