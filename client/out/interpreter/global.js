"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectAlgoRange = void 0;
const algo = require("./common");
function detectAlgoRange() {
    let script = algo.getScript();
    for (let i = 0; i < script.length; i++) {
        const line = script[i].trim();
        if (line.trim().toLowerCase().startsWith("Algorithme")) {
            let start = i, end = i;
            for (let j = i; j < script.length; j++) {
                const subline = script[j].trim().split(" ");
                if (subline.length > 0 && subline[0].toLowerCase() == algo.DEBUT_KEYWORD)
                    if (start == i)
                        start = j;
                if (subline.length > 0 && subline[0].toLowerCase() == algo.FIN_KEYWORD)
                    if (end == i)
                        end = j;
                if (start != i && end != i)
                    break;
            }
            if (start == i)
                return new algo.Error("Impossible de trouver le debut de l'algorithme", i, new algo.Range(0, line.length));
            if (end == i)
                return new algo.Error("Impossible de trouver la fin de l'algorithme", i, new algo.Range(0, line.length));
            algo.setAlgoRange(new algo.Range(start, end));
        }
    }
    return algo.Error.NO_ERROR;
}
exports.detectAlgoRange = detectAlgoRange;
//# sourceMappingURL=global.js.map