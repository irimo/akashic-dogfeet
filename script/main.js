"use strict";
// import { SnakeGameMainParameterObject } from "./config/ParameterObject";
// import { sessionParameter } from "./config/defaultParameter";
// // import { StateManager, feetInfo } from "./StateManager";
// import { StateManager} from "./StateManager";
var lodash_1 = require("lodash");
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
var field = [
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
];
var FEETMINO_BOU_DEF = [
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];
var FEETMINO_YAMA_DEF = [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];
var FEETMINO_LL_DEF = [
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];
var FEETMINO_LR_DEF = [
    [0, 0, 1, 0],
    [1, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];
var FEETMINO_DAN_DEF = [
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
];
var FEETMINO_DEF = [
    FEETMINO_BOU_DEF,
    FEETMINO_YAMA_DEF,
    FEETMINO_LL_DEF,
    FEETMINO_LR_DEF,
    FEETMINO_DAN_DEF,
];
function main() {
    var scene = new g.Scene({
        game: g.game,
        assetIds: ["feet"]
    });
    var feetImageAsset;
    var feet;
    var feets;
    var feetmino_size = 50;
    scene.onLoad.add(function () {
        feetImageAsset = scene.asset.getImageById("feet");
        // ?????????????????????????????????
        feet = new g.Sprite({
            scene: scene,
            src: feetImageAsset,
            width: feetImageAsset.width,
            height: feetImageAsset.height
        });
        feets[0] = lodash_1.default.cloneDeep(feet); // ?????????
        for (var i = 1; i < (field.length * field[0].length); i++) {
            feets.push(lodash_1.default.cloneDeep(feet));
            scene.append(feets[i]);
        }
        // for (let i:number = 0; i < (field.length * field[0].length); i++) {
        // 	scene.append(feets[i]);
        // }
        // });
        // // ????????? feetId ?????????????????????????????????????????????????????????????????????
        // scene.onUpdate.add(() => {
        // ?????????????????????????????????????????????????????????????????????
        feet.x = (g.game.width - feet.width) / 2;
        feet.y = (g.game.height - feet.height) / 2;
        feet.onUpdate.add(function () {
            var mino_no = Math.floor(g.game.random.generate() * 5);
            var feetmino_current = FEETMINO_DEF[mino_no];
            for (var xx = 0; xx < 4; xx++) {
                field[0][xx + 4] = feetmino_current[0][xx];
            }
            var i = 0;
            for (var yy = 0; yy < field.length; yy++) {
                for (var xx = 0; xx < field[0].length; xx++) {
                    if (field[yy][xx] === 1) {
                        feets[i].x = feetmino_size * xx;
                        feets[i].y = feetmino_size * yy;
                        feets[i].modified();
                        i++;
                    }
                }
            }
            while (i < (field.length * field[0].length)) {
                feets[i].x = -feetmino_size;
                feets[i].y = -feetmino_size;
                feets[i].modified();
            }
            // ??????????????????Y?????????????????????????????????????????????????????????????????????????????????
            // ????????????Math.sin??????????????????????????????????????????????????????g.game.age?????????????????????
            // feet.y = (g.game.height - feet.height) / 2 + Math.sin(g.game.age % (g.game.fps * 10) / 4) * 10;
            // ?????????????????????????????????????????????????????? modified() ???????????????????????????????????????????????????
            // feet.modified();
        });
        // if (broadcasterfeet && sessionParameter) {
        // start();
        // }
    });
    g.game.pushScene(scene);
}
;
module.exports = main;
