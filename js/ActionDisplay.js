JH.Actions = {};
JH.Actions.cells = [];

JH.Actions.Init = function() {
	var container = $("#actions");
	for (var i=0 ; i<4 ; i++) {
		JH.Actions.cells.push([]);
		var row = $("<tr style='padding: 0px; margin: 0px'></tr>");
		for (var j=0 ; j<4 ; j++) {
			var img = $("<img class='actionTile'>");
			row.append($("<td></td>").append(img));
			JH.Actions.cells[i].push(img);
		}
		container.append(row);
	}
};



