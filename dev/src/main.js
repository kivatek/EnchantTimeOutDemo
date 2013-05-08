enchant();

var core;

window.onload = function() {
	core = new Core(320, 320);
	core.fps = 24;
	core.touched = false;
	core.preload([
		'images/chara1.png'
	]);

	core.onload = function() {
		core.currentScene.backgroundColor = 'rgb(239, 228, 202)';
		
		// クマ１の表示
		var bear1 = new Sprite(32, 32);
		bear1.image = core.assets['images/chara1.png'];
		bear1.x = 48;
		bear1.y = 64;
		core.currentScene.addChild(bear1);

		// クマ２の表示
		var bear2 = new Sprite(32, 32);
		bear2.image = core.assets['images/chara1.png'];
		bear2.x = 48;
		bear2.y = 144;
		bear2.frame = 5;
		// タイムラインの機能を使って一定フレーム経過後に処理を実行します。
		// このサンプルではfps基準で３秒待つ想定の処理ですがフレーム単位での実行となるため、setTimeoutとは微妙にタイミングがずれます。
		bear2.tl.delay(core.fps * 3)
			.then(function(){
				this.x = 240;
			});
		core.currentScene.addChild(bear2);

		var caption = new Label();
		caption.x = 4;
		caption.y = 4;
		caption.color = 'blue';
		caption.text = '３秒経過後にクマがワープします';
		core.currentScene.addChild(caption);

		setTimeout(function(){
			bear1.x = 240;
			caption.color = 'red';
			caption.text = 'ワープ完了';
		}, 1000 * 3);	// setTimeoutの待機時間はミリ秒つまり1/1000秒単位。なので3秒待つ場合は3000秒を指定する。

		var bear1Caption = new Label();
		bear1Caption.x = 4;
		bear1Caption.y = 40;
		bear1Caption.text = '茶色クマはsetTimeoutを使用';
		core.currentScene.addChild(bear1Caption);

		var bear2Caption = new Label();
		bear2Caption.x = 4;
		bear2Caption.y = 120;
		bear2Caption.text = 'シロクマはenchant.jsのタイムライン機能を使用';
		core.currentScene.addChild(bear2Caption);
		
		var description = new Label();
		description.x = 4;
		description.y = 200;
		description.color = 'gray';
		description.text = 'enchant.jsのタイムライン機能を使用した場合は３秒待った後の「フレーム」で実行されるため、setTimeoutを使って３秒待つ処理とは微妙にずれることがあります。';
		core.currentScene.addChild(description);
	};

	core.start();
};
