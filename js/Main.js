var JH = {};
JH.Main = {};

$(function(){
	JH.MMgr.Init();
	JH.MD.Init();
	JH.SM.Init();
	JH.Actions.Init();
	JH.UM.Init();

	JH.Main.Annotate("Welcome to Jahout");
	
	$(document).keyup(function(e) {
		//console.log("keydown: " + e.keyCode);
		if (e.keyCode == 37) {
			JH.MD.MoveLeft();
		} else if (e.keyCode == 38) {
			JH.MD.MoveUp();
		} else if (e.keyCode == 39) {
			JH.MD.MoveRight();
		} else if (e.keyCode == 40) {
			JH.MD.MoveDown();
		} 
	});
});

JH.Main.Annotate = function(str) {
	$("#notes").append(str + "\n");
};

JH.Main.PrintObj = function(obj) {
	var str = '{';
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str += "[" + p + ',' + obj[p] + "]";
        }
    }
    str += "}";
    console.log (str);
};