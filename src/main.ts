// import { SnakeGameMainParameterObject } from "./config/ParameterObject";
// import { sessionParameter } from "./config/defaultParameter";
// // import { StateManager, PlayerInfo } from "./StateManager";
// import { StateManager} from "./StateManager";

// export function main(param: SnakeGameMainParameterObject): void {
// 	const userSessionParameter= param.sessionParameter;
// 	if (userSessionParameter) {
// 		assign(sessionParameter, userSessionParameter);
// 	}

// 	const stateManager = new StateManager({
// 		sessionParameter: sessionParameter,
// 		broadcaster: param.broadcasterPlayer
// 	});

	// if (!!stateManager.sessionParameter.config.debug &&
	// 	stateManager.sessionParameter.config.debug.skipLottery){
	// 	stateManager.playerList = {};
	// 	stateManager.playerList[stateManager.broadcaster.id] = new PlayerInfo({
	// 		player: stateManager.broadcaster,
	// 		user: {
	// 			name: "debug",
	// 			id: "000000000",
	// 			isPremium: false
	// 		},
	// 		isBroadcaster: true,
	// 		snakeType: "A"
	// 	});
    // stateManager.randomGenerator = new g.XorshiftRandomGenerator(2525);
    // stateManager.changeMainGameScene();
	// } else {
	// 	stateManager.changeTitleScene();
	// }
// }

// function assign(target: any, _: any): void {
// 	const to = Object(target);

// 	for (let index = 1; index < arguments.length; index++) {
// 		const nextSource = arguments[index];

// 		if (nextSource != null) {
// 			for (const nextKey in nextSource) {
// 				if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
// 					if (nextSource[nextKey] != null && typeof nextSource[nextKey] === "object") {
// 						to[nextKey] = assign(to[nextKey], nextSource[nextKey]);
// 					} else {
// 						to[nextKey] = nextSource[nextKey];
// 					}
// 				}
// 			}
// 		}
// 	}
// 	return to;
// }

// let param: object = {"hoge": 1, "fuga": 2}

function main(): void {
    // const param: any = {} as SnakeGameMainParameterObject;
	// Object.keys(originalParam).forEach((key) => {
	// 	param[key] = (originalParam as any)[key];
	// });
	// param.sessionParameter = {};

	// let sessionParameter: SnakeGameSessionParameter;
	// let broadcasterPlayer: g.Player;

	const scene = new g.Scene({
		game: g.game,
        assetIds: ["player"]
	});
	// function start(): void {
	// 	// param.sessionParameter = sessionParameter;
	// 	g.game.popScene();
	// 	// main(param);
	// }

	// g.game.onJoin.add((event) => {
	// 	broadcasterPlayer = event.player;
	// 	param.broadcasterPlayer = broadcasterPlayer;
	// });

	// scene.onMessage.add((message) => {
	// 	if (message.data && message.data.type === "start" && message.data.parameters) {
	// 		sessionParameter = message.data.parameters;
	// 	}
	// });
    let playerImageAsset;
    let player: g.Sprite;
	scene.onLoad.add(() => {
        playerImageAsset = scene.asset.getImageById("player");
        // プレイヤーを生成します
        player = new g.Sprite({
            scene: scene,
            src: playerImageAsset,
            width: playerImageAsset.width,
            height: playerImageAsset.height
        });
    // });
	// // 生主の playerId 確定とセッションパラメータが揃ったらゲーム開始
	// scene.onUpdate.add(() => {
        // プレイヤーの初期座標を、画面の中心に設定します
        player.x = (g.game.width - player.width) / 2;
        player.y = (g.game.height - player.height) / 2;
        player.onUpdate.add(function () {
            // 毎フレームでY座標を再計算し、プレイヤーの飛んでいる動きを表現します
            // ここではMath.sinを利用して、時間経過によって増加するg.game.ageと組み合わせて
            player.y = (g.game.height - player.height) / 2 + Math.sin(g.game.age % (g.game.fps * 10) / 4) * 10;
            // プレイヤーの座標に変更があった場合、 modified() を実行して変更をゲームに通知します
            player.modified();
        });
        scene.append(player);
		// if (broadcasterPlayer && sessionParameter) {
        // start();
		// }
	});

	g.game.pushScene(scene);
};

export = main;
