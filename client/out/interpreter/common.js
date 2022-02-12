"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlgoRange = exports.setAlgoRange = exports.getScript = exports.setScript = exports.tabTypes_get = exports.tabTypes_rem = exports.tabTypes_add = exports.tabTypes_clear = exports.tabVars_get = exports.tabVars_rem = exports.tabVars_add = exports.tabVars_clear = exports.tabFuncs_get = exports.tabFuncs_rem = exports.tabFuncs_add = exports.tabFuncs_clear = exports.Variable = exports.Function = exports.Attribute = exports.Type = exports.Error = exports.Range = exports.FTANT_KEYWORD = exports.TANT_KEYWORD = exports.FPOUR_KEYWORD = exports.POUR_KEYWORD = exports.FIN_KEYWORD = exports.DEBUT_KEYWORD = void 0;
class Range {
    constructor(start = 0, end = 0) {
        this.start = start;
        this.end = end;
    }
    isZero() {
        return this.start == 0 && this.end == 0;
    }
    toString() {
        return `Range{start: ${this.start}, end: ${this.end}}`;
    }
}
exports.Range = Range;
class Error {
    constructor(message = "", line = 0, range = new Range()) {
        this.message = message;
        this.line = line;
        this.range = range;
    }
    static HasFailed(err) {
        return err.line >= 0;
    }
    toString() {
        return `Erreur ligne ${this.line + 1} : ${this.message}`;
    }
}
exports.Error = Error;
Error.NO_ERROR = new Error("", -1);
class Type {
    constructor(name = "", desc = "", subtype = null) {
        this.id = Type.ID_COUNTER++;
        this.name = name;
        this.subtype = subtype;
        this.desc = desc;
    }
    static FromString(str) {
        let res = Type.UNKNOWN;
        this.INTERNAL_TYPES.concat(tab_types).forEach(t => {
            if (t.name == str)
                res = t;
        });
        return res;
    }
    toString() {
        return `Type{name: ${this.name}, desc: ${this.desc}}`;
    }
}
exports.Type = Type;
Type.ID_COUNTER = 1;
Type.UNKNOWN = new Type("Inconnu", "// Type inconnu");
Type.INT = new Type("entier", "// Nombre entier");
Type.FLOAT = new Type("reel", "// Nombre reel");
Type.STRING = new Type("chaine", "// Chaine de caracteres");
Type.CHAR = new Type("caractere", "// Caractere informatique");
Type.BOOL = new Type("booleen", "// Valeur booleenne");
Type.INTERNAL_TYPES = [Type.UNKNOWN, Type.INT, Type.FLOAT, Type.STRING, Type.CHAR, Type.BOOL];
class Attribute {
    constructor(name = "", type = new Type()) {
        this.id = Attribute.ID_COUNTER++;
        this.name = name;
        this.type = type;
    }
    toString() {
        return `Attribute{name: ${this.name}, type: ${this.type}}`;
    }
}
exports.Attribute = Attribute;
Attribute.ID_COUNTER = 1;
class Function {
    constructor(name = "", args = [], type = new Type(), body = new Range()) {
        this.id = Function.ID_COUNTER++;
        this.name = name;
        this.args = args;
        this.type = type;
        this.body = body;
    }
    toString() {
        return `Function{name: ${this.name}, args: ${this.args.length}, type: ${this.type}, body: ${this.body}}`;
    }
}
exports.Function = Function;
Function.ID_COUNTER = 1;
class Variable {
    constructor(name = "", type = new Type(), value = null, scope = new Range()) {
        this.id = Variable.ID_COUNTER++;
        this.name = name;
        this.type = type;
        this.value = value;
        this.scope = scope;
    }
}
exports.Variable = Variable;
Variable.ID_COUNTER = 1;
let tab_funcs = [];
let tab_vars = [];
let tab_types = [];
let script = [];
let algoRange = new Range();
function tabFuncs_clear() {
    tab_funcs = [];
}
exports.tabFuncs_clear = tabFuncs_clear;
function tabVars_clear() {
    tab_vars = [];
}
exports.tabVars_clear = tabVars_clear;
function tabTypes_clear() {
    tab_types = [];
}
exports.tabTypes_clear = tabTypes_clear;
function tabFuncs_add(f) {
    tab_funcs.push(f);
}
exports.tabFuncs_add = tabFuncs_add;
function tabVars_add(v) {
    tab_vars.push(v);
}
exports.tabVars_add = tabVars_add;
function tabTypes_add(t) {
    tab_types.push(t);
}
exports.tabTypes_add = tabTypes_add;
function tabFuncs_rem(f) {
    for (let i = 0; i < tab_funcs.length; i++)
        if (tab_funcs[i].id == f.id) {
            tab_funcs.splice(i, 1);
            break;
        }
}
exports.tabFuncs_rem = tabFuncs_rem;
function tabVars_rem(v) {
    for (let i = 0; i < tab_vars.length; i++)
        if (tab_vars[i].id == v.id) {
            tab_vars.splice(i, 1);
            break;
        }
}
exports.tabVars_rem = tabVars_rem;
function tabTypes_rem(t) {
    for (let i = 0; i < tab_vars.length; i++)
        if (tab_vars[i].id == t.id) {
            tab_vars.splice(i, 1);
            break;
        }
}
exports.tabTypes_rem = tabTypes_rem;
function tabVars_get() {
    return tab_vars;
}
exports.tabVars_get = tabVars_get;
function tabFuncs_get() {
    return tab_funcs;
}
exports.tabFuncs_get = tabFuncs_get;
function tabTypes_get() {
    return tab_types;
}
exports.tabTypes_get = tabTypes_get;
function setScript(s) {
    script = s;
}
exports.setScript = setScript;
function getScript() {
    return script;
}
exports.getScript = getScript;
function setAlgoRange(range) {
    algoRange = range;
}
exports.setAlgoRange = setAlgoRange;
function getAlgoRange() {
    return algoRange;
}
exports.getAlgoRange = getAlgoRange;
exports.DEBUT_KEYWORD = "debut";
exports.FIN_KEYWORD = "fin";
exports.POUR_KEYWORD = "pour";
exports.FPOUR_KEYWORD = "fpour";
exports.TANT_KEYWORD = "tant";
exports.FTANT_KEYWORD = "ftant";
//# sourceMappingURL=common.js.map