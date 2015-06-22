var JH = {};
JH.Main = {};

$(function(){
	JH.UM.Init();
	JH.MMgr.Init();

	JH.UM.AddUnit(JH.Unit.Player, JH.MMgr.spawn);
	JH.UM.AddUnit(JH.Unit.Billow, [25,25]);

	
	JH.MD.Init();
	JH.EM.Init();
	JH.SM.Init();
	
	JH.ItemD.Init();
	JH.InvDisp.Init();
	JH.KeyMgr.Init();

	JH.Main.Annotate("Welcome to Jahout");
	
	
	JH.EM.Equip(JH.Item.Create(JH.Item.citizen));
	JH.EM.Equip(JH.Item.Create(JH.Item.dsevest));
	JH.EM.Equip(JH.Item.Create(JH.Item.spacesuit));
	JH.EM.Equip(JH.Item.Create(JH.Item.dsehelmet));
	JH.EM.Equip(JH.Item.Create(JH.Item.dsemule));
	JH.EM.Equip(JH.Item.Create(JH.Item.msdoc));
	JH.EM.Equip(JH.Item.Create(JH.Item.echef));
});

JH.Main.Annotate = function(str) {
	$("#notes").append(str + "\n");
	$("#notes").scrollTop($("#notes")[0].scrollHeight - $("#notes").height());
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