var ppt5 = ppt.extend({

    onEnter:function () {

        this._super();

        cc.log("I am ppt5.Quick Development");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width/2, size.height / 2));
        this.addChild(backGround, 0);

        var game1 = cc.Sprite.create(s_game1);
        game1.setAnchorPoint(cc.p(0.5, 0.5));
        game1.setScale(0.7);
        game1.setPosition(cc.p(size.width-280, size.height / 2));
        this.addChild(game1, 1);

        // show sky fighter and shejuhua
        var game21 = cc.Sprite.create(s_game21);
        game21.setAnchorPoint(cc.p(0, 0.5));
        game21.setPosition(cc.p(50, size.height/2 + 180));
        this.addChild(game21, 1);
        var game22 = cc.Sprite.create(s_game22);
        game22.setAnchorPoint(cc.p(0, 0.5));
        game22.setPosition(cc.p(100, size.height / 2 -20 ));
        this.addChild(game22, 1);
        var game23 = cc.Sprite.create(s_game23);
        game23.setAnchorPoint(cc.p(0, 0.5));
        game23.setPosition(cc.p(150, size.height/2 -220));
        this.addChild(game23, 1);

    }
});

ppt5.scene = function(){
    var ret = cc.Scene.create();
    var layer = new ppt5();
    layer.init();
    ret.addChild(layer);
    return ret;
};