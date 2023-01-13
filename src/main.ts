// import { SnakeGameMainParameterObject } from "./config/ParameterObject";
// import { sessionParameter } from "./config/defaultParameter";
// // import { StateManager, feetInfo } from "./StateManager";
// import { StateManager} from "./StateManager";

// export function main(param: SnakeGameMainParameterObject): void {
// 	const userSessionParameter= param.sessionParameter;
// 	if (userSessionParameter) {
// 		assign(sessionParameter, userSessionParameter);
// 	}

// 	const stateManager = new StateManager({
// 		sessionParameter: sessionParameter,
// 		broadcaster: param.broadcasterfeet
// 	});

	// if (!!stateManager.sessionParameter.config.debug &&
	// 	stateManager.sessionParameter.config.debug.skipLottery){
	// 	stateManager.feetList = {};
	// 	stateManager.feetList[stateManager.broadcaster.id] = new feetInfo({
	// 		feet: stateManager.broadcaster,
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

let field: number[][] = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const FEETMINO_BOU: number = 1;
const FEETMINO_YAMA: number = 2;
const FEETMINO_LL: number = 3;
const FEETMINO_LR: number = 4;
const FEETMINO_DAN: number = 5;

const FEETMINO_BOU_DEF: number[][] = [
	[1, 1, 1, 1],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
]

const FEETMINO_YAMA_DEF: number[][] = [
	[0, 1, 0, 0],
	[1, 1, 1, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
]

const FEETMINO_LL_DEF: number[][] = [
	[1, 0, 0, 0],
	[1, 1, 1, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
]

const FEETMINO_LR_DEF: number[][] = [
	[0, 0, 1, 0],
	[1, 1, 1, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
]

const FEETMINO_DAN_DEF: number[][] = [
	[0, 0, 1, 0],
	[0, 1, 1, 0],
	[0, 1, 0, 0],
	[0, 0, 0, 0],
]

function main(): void {
	const scene = new g.Scene({
		game: g.game,
        assetIds: ["feet"]
	});

    let feetImageAsset;
    let feet: g.Sprite;
	scene.onLoad.add(() => {
        feetImageAsset = scene.asset.getImageById("feet");
        // プレイヤーを生成します
        feet = new g.Sprite({
            scene: scene,
            src: feetImageAsset,
            width: feetImageAsset.width,
            height: feetImageAsset.height
        });
    // });
	// // 生主の feetId 確定とセッションパラメータが揃ったらゲーム開始
	// scene.onUpdate.add(() => {
        // プレイヤーの初期座標を、画面の中心に設定します
        feet.x = (g.game.width - feet.width) / 2;
        feet.y = (g.game.height - feet.height) / 2;
        feet.onUpdate.add(function () {
            // 毎フレームでY座標を再計算し、プレイヤーの飛んでいる動きを表現します
            // ここではMath.sinを利用して、時間経過によって増加するg.game.ageと組み合わせて
            feet.y = (g.game.height - feet.height) / 2 + Math.sin(g.game.age % (g.game.fps * 10) / 4) * 10;
            // プレイヤーの座標に変更があった場合、 modified() を実行して変更をゲームに通知します
            feet.modified();
        });
        scene.append(feet);
		// if (broadcasterfeet && sessionParameter) {
        // start();
		// }
	});

	g.game.pushScene(scene);
};

export = main;
