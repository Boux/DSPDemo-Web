const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ModuleWrapper-BaWxFrtM.js","assets/chunk-f7LOQL_L.js","assets/ModuleWrapper-p-ozimvm.css"])))=>i.map(i=>d[i]);
import { n as __exportAll } from "./chunk-f7LOQL_L.js";
//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/* @__NO_SIDE_EFFECTS__ */
function makeMap(str) {
	const map = /* @__PURE__ */ Object.create(null);
	for (const key of str.split(",")) map[key] = 1;
	return (val) => val in map;
}
var EMPTY_OBJ = {};
var EMPTY_ARR = [];
var NOOP = () => {};
var NO = () => false;
var isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
var isModelListener = (key) => key.startsWith("onUpdate:");
var extend = Object.assign;
var remove = (arr, el) => {
	const i = arr.indexOf(el);
	if (i > -1) arr.splice(i, 1);
};
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
var hasOwn$1 = (val, key) => hasOwnProperty$2.call(val, key);
var isArray$2 = Array.isArray;
var isMap = (val) => toTypeString$1(val) === "[object Map]";
var isSet = (val) => toTypeString$1(val) === "[object Set]";
var isDate$1 = (val) => toTypeString$1(val) === "[object Date]";
var isRegExp$1 = (val) => toTypeString$1(val) === "[object RegExp]";
var isFunction$1 = (val) => typeof val === "function";
var isString$1 = (val) => typeof val === "string";
var isSymbol = (val) => typeof val === "symbol";
var isObject$1 = (val) => val !== null && typeof val === "object";
var isPromise$1 = (val) => {
	return (isObject$1(val) || isFunction$1(val)) && isFunction$1(val.then) && isFunction$1(val.catch);
};
var objectToString$1 = Object.prototype.toString;
var toTypeString$1 = (value) => objectToString$1.call(value);
var toRawType = (value) => {
	return toTypeString$1(value).slice(8, -1);
};
var isPlainObject$2 = (val) => toTypeString$1(val) === "[object Object]";
var isIntegerKey = (key) => isString$1(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
var cacheStringFunction = (fn) => {
	const cache = /* @__PURE__ */ Object.create(null);
	return ((str) => {
		return cache[str] || (cache[str] = fn(str));
	});
};
var camelizeRE = /-\w/g;
var camelize = cacheStringFunction((str) => {
	return str.replace(camelizeRE, (c) => c.slice(1).toUpperCase());
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var capitalize$1 = cacheStringFunction((str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
});
var toHandlerKey = cacheStringFunction((str) => {
	return str ? `on${capitalize$1(str)}` : ``;
});
var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
var invokeArrayFns = (fns, ...arg) => {
	for (let i = 0; i < fns.length; i++) fns[i](...arg);
};
var def = (obj, key, value, writable = false) => {
	Object.defineProperty(obj, key, {
		configurable: true,
		enumerable: false,
		writable,
		value
	});
};
var looseToNumber = (val) => {
	const n = parseFloat(val);
	return isNaN(n) ? val : n;
};
var toNumber = (val) => {
	const n = isString$1(val) ? Number(val) : NaN;
	return isNaN(n) ? val : n;
};
var _globalThis$1;
var getGlobalThis$1 = () => {
	return _globalThis$1 || (_globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
var isGloballyAllowed = /* @__PURE__ */ makeMap("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");
function normalizeStyle(value) {
	if (isArray$2(value)) {
		const res = {};
		for (let i = 0; i < value.length; i++) {
			const item = value[i];
			const normalized = isString$1(item) ? parseStringStyle(item) : normalizeStyle(item);
			if (normalized) for (const key in normalized) res[key] = normalized[key];
		}
		return res;
	} else if (isString$1(value) || isObject$1(value)) return value;
}
var listDelimiterRE = /;(?![^(]*\))/g;
var propertyDelimiterRE = /:([^]+)/;
var styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
	const ret = {};
	cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
		if (item) {
			const tmp = item.split(propertyDelimiterRE);
			tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
		}
	});
	return ret;
}
function normalizeClass(value) {
	let res = "";
	if (isString$1(value)) res = value;
	else if (isArray$2(value)) for (let i = 0; i < value.length; i++) {
		const normalized = normalizeClass(value[i]);
		if (normalized) res += normalized + " ";
	}
	else if (isObject$1(value)) {
		for (const name in value) if (value[name]) res += name + " ";
	}
	return res.trim();
}
function normalizeProps(props) {
	if (!props) return null;
	let { class: klass, style } = props;
	if (klass && !isString$1(klass)) props.class = normalizeClass(klass);
	if (style) props.style = normalizeStyle(style);
	return props;
}
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
specialBooleanAttrs + "";
function includeBooleanAttr(value) {
	return !!value || value === "";
}
function looseCompareArrays(a, b) {
	if (a.length !== b.length) return false;
	let equal = true;
	for (let i = 0; equal && i < a.length; i++) equal = looseEqual(a[i], b[i]);
	return equal;
}
function looseEqual(a, b) {
	if (a === b) return true;
	let aValidType = isDate$1(a);
	let bValidType = isDate$1(b);
	if (aValidType || bValidType) return aValidType && bValidType ? a.getTime() === b.getTime() : false;
	aValidType = isSymbol(a);
	bValidType = isSymbol(b);
	if (aValidType || bValidType) return a === b;
	aValidType = isArray$2(a);
	bValidType = isArray$2(b);
	if (aValidType || bValidType) return aValidType && bValidType ? looseCompareArrays(a, b) : false;
	aValidType = isObject$1(a);
	bValidType = isObject$1(b);
	if (aValidType || bValidType) {
		if (!aValidType || !bValidType) return false;
		if (Object.keys(a).length !== Object.keys(b).length) return false;
		for (const key in a) {
			const aHasKey = a.hasOwnProperty(key);
			const bHasKey = b.hasOwnProperty(key);
			if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) return false;
		}
	}
	return String(a) === String(b);
}
function looseIndexOf(arr, val) {
	return arr.findIndex((item) => looseEqual(item, val));
}
var isRef$1 = (val) => {
	return !!(val && val["__v_isRef"] === true);
};
var toDisplayString$1 = (val) => {
	return isString$1(val) ? val : val == null ? "" : isArray$2(val) || isObject$1(val) && (val.toString === objectToString$1 || !isFunction$1(val.toString)) ? isRef$1(val) ? toDisplayString$1(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
var replacer = (_key, val) => {
	if (isRef$1(val)) return replacer(_key, val.value);
	else if (isMap(val)) return { [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2], i) => {
		entries[stringifySymbol(key, i) + " =>"] = val2;
		return entries;
	}, {}) };
	else if (isSet(val)) return { [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v)) };
	else if (isSymbol(val)) return stringifySymbol(val);
	else if (isObject$1(val) && !isArray$2(val) && !isPlainObject$2(val)) return String(val);
	return val;
};
var stringifySymbol = (v, i = "") => {
	var _a;
	return isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v;
};
function normalizeCssVarValue(value) {
	if (value == null) return "initial";
	if (typeof value === "string") return value === "" ? " " : value;
	if (typeof value !== "number" || !Number.isFinite(value)) {}
	return String(value);
}
//#endregion
//#region node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var activeEffectScope;
var EffectScope = class {
	constructor(detached = false) {
		this.detached = detached;
		/**
		* @internal
		*/
		this._active = true;
		/**
		* @internal track `on` calls, allow `on` call multiple times
		*/
		this._on = 0;
		/**
		* @internal
		*/
		this.effects = [];
		/**
		* @internal
		*/
		this.cleanups = [];
		this._isPaused = false;
		this.__v_skip = true;
		this.parent = activeEffectScope;
		if (!detached && activeEffectScope) this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = true;
			let i, l;
			if (this.scopes) for (i = 0, l = this.scopes.length; i < l; i++) this.scopes[i].pause();
			for (i = 0, l = this.effects.length; i < l; i++) this.effects[i].pause();
		}
	}
	/**
	* Resumes the effect scope, including all child scopes and effects.
	*/
	resume() {
		if (this._active) {
			if (this._isPaused) {
				this._isPaused = false;
				let i, l;
				if (this.scopes) for (i = 0, l = this.scopes.length; i < l; i++) this.scopes[i].resume();
				for (i = 0, l = this.effects.length; i < l; i++) this.effects[i].resume();
			}
		}
	}
	run(fn) {
		if (this._active) {
			const currentEffectScope = activeEffectScope;
			try {
				activeEffectScope = this;
				return fn();
			} finally {
				activeEffectScope = currentEffectScope;
			}
		}
	}
	/**
	* This should only be called on non-detached scopes
	* @internal
	*/
	on() {
		if (++this._on === 1) {
			this.prevScope = activeEffectScope;
			activeEffectScope = this;
		}
	}
	/**
	* This should only be called on non-detached scopes
	* @internal
	*/
	off() {
		if (this._on > 0 && --this._on === 0) {
			activeEffectScope = this.prevScope;
			this.prevScope = void 0;
		}
	}
	stop(fromParent) {
		if (this._active) {
			this._active = false;
			let i, l;
			for (i = 0, l = this.effects.length; i < l; i++) this.effects[i].stop();
			this.effects.length = 0;
			for (i = 0, l = this.cleanups.length; i < l; i++) this.cleanups[i]();
			this.cleanups.length = 0;
			if (this.scopes) {
				for (i = 0, l = this.scopes.length; i < l; i++) this.scopes[i].stop(true);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !fromParent) {
				const last = this.parent.scopes.pop();
				if (last && last !== this) {
					this.parent.scopes[this.index] = last;
					last.index = this.index;
				}
			}
			this.parent = void 0;
		}
	}
};
function effectScope(detached) {
	return new EffectScope(detached);
}
function getCurrentScope() {
	return activeEffectScope;
}
function onScopeDispose(fn, failSilently = false) {
	if (activeEffectScope) activeEffectScope.cleanups.push(fn);
}
var activeSub;
var pausedQueueEffects = /* @__PURE__ */ new WeakSet();
var ReactiveEffect = class {
	constructor(fn) {
		this.fn = fn;
		/**
		* @internal
		*/
		this.deps = void 0;
		/**
		* @internal
		*/
		this.depsTail = void 0;
		/**
		* @internal
		*/
		this.flags = 5;
		/**
		* @internal
		*/
		this.next = void 0;
		/**
		* @internal
		*/
		this.cleanup = void 0;
		this.scheduler = void 0;
		if (activeEffectScope && activeEffectScope.active) activeEffectScope.effects.push(this);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		if (this.flags & 64) {
			this.flags &= -65;
			if (pausedQueueEffects.has(this)) {
				pausedQueueEffects.delete(this);
				this.trigger();
			}
		}
	}
	/**
	* @internal
	*/
	notify() {
		if (this.flags & 2 && !(this.flags & 32)) return;
		if (!(this.flags & 8)) batch(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2;
		cleanupEffect(this);
		prepareDeps(this);
		const prevEffect = activeSub;
		const prevShouldTrack = shouldTrack;
		activeSub = this;
		shouldTrack = true;
		try {
			return this.fn();
		} finally {
			cleanupDeps(this);
			activeSub = prevEffect;
			shouldTrack = prevShouldTrack;
			this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let link = this.deps; link; link = link.nextDep) removeSub(link);
			this.deps = this.depsTail = void 0;
			cleanupEffect(this);
			this.onStop && this.onStop();
			this.flags &= -2;
		}
	}
	trigger() {
		if (this.flags & 64) pausedQueueEffects.add(this);
		else if (this.scheduler) this.scheduler();
		else this.runIfDirty();
	}
	/**
	* @internal
	*/
	runIfDirty() {
		if (isDirty(this)) this.run();
	}
	get dirty() {
		return isDirty(this);
	}
};
var batchDepth = 0;
var batchedSub;
var batchedComputed;
function batch(sub, isComputed = false) {
	sub.flags |= 8;
	if (isComputed) {
		sub.next = batchedComputed;
		batchedComputed = sub;
		return;
	}
	sub.next = batchedSub;
	batchedSub = sub;
}
function startBatch() {
	batchDepth++;
}
function endBatch() {
	if (--batchDepth > 0) return;
	if (batchedComputed) {
		let e = batchedComputed;
		batchedComputed = void 0;
		while (e) {
			const next = e.next;
			e.next = void 0;
			e.flags &= -9;
			e = next;
		}
	}
	let error;
	while (batchedSub) {
		let e = batchedSub;
		batchedSub = void 0;
		while (e) {
			const next = e.next;
			e.next = void 0;
			e.flags &= -9;
			if (e.flags & 1) try {
				e.trigger();
			} catch (err) {
				if (!error) error = err;
			}
			e = next;
		}
	}
	if (error) throw error;
}
function prepareDeps(sub) {
	for (let link = sub.deps; link; link = link.nextDep) {
		link.version = -1;
		link.prevActiveLink = link.dep.activeLink;
		link.dep.activeLink = link;
	}
}
function cleanupDeps(sub) {
	let head;
	let tail = sub.depsTail;
	let link = tail;
	while (link) {
		const prev = link.prevDep;
		if (link.version === -1) {
			if (link === tail) tail = prev;
			removeSub(link);
			removeDep(link);
		} else head = link;
		link.dep.activeLink = link.prevActiveLink;
		link.prevActiveLink = void 0;
		link = prev;
	}
	sub.deps = head;
	sub.depsTail = tail;
}
function isDirty(sub) {
	for (let link = sub.deps; link; link = link.nextDep) if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) return true;
	if (sub._dirty) return true;
	return false;
}
function refreshComputed(computed) {
	if (computed.flags & 4 && !(computed.flags & 16)) return;
	computed.flags &= -17;
	if (computed.globalVersion === globalVersion) return;
	computed.globalVersion = globalVersion;
	if (!computed.isSSR && computed.flags & 128 && (!computed.deps && !computed._dirty || !isDirty(computed))) return;
	computed.flags |= 2;
	const dep = computed.dep;
	const prevSub = activeSub;
	const prevShouldTrack = shouldTrack;
	activeSub = computed;
	shouldTrack = true;
	try {
		prepareDeps(computed);
		const value = computed.fn(computed._value);
		if (dep.version === 0 || hasChanged(value, computed._value)) {
			computed.flags |= 128;
			computed._value = value;
			dep.version++;
		}
	} catch (err) {
		dep.version++;
		throw err;
	} finally {
		activeSub = prevSub;
		shouldTrack = prevShouldTrack;
		cleanupDeps(computed);
		computed.flags &= -3;
	}
}
function removeSub(link, soft = false) {
	const { dep, prevSub, nextSub } = link;
	if (prevSub) {
		prevSub.nextSub = nextSub;
		link.prevSub = void 0;
	}
	if (nextSub) {
		nextSub.prevSub = prevSub;
		link.nextSub = void 0;
	}
	if (dep.subs === link) {
		dep.subs = prevSub;
		if (!prevSub && dep.computed) {
			dep.computed.flags &= -5;
			for (let l = dep.computed.deps; l; l = l.nextDep) removeSub(l, true);
		}
	}
	if (!soft && !--dep.sc && dep.map) dep.map.delete(dep.key);
}
function removeDep(link) {
	const { prevDep, nextDep } = link;
	if (prevDep) {
		prevDep.nextDep = nextDep;
		link.prevDep = void 0;
	}
	if (nextDep) {
		nextDep.prevDep = prevDep;
		link.nextDep = void 0;
	}
}
function effect(fn, options) {
	if (fn.effect instanceof ReactiveEffect) fn = fn.effect.fn;
	const e = new ReactiveEffect(fn);
	if (options) extend(e, options);
	try {
		e.run();
	} catch (err) {
		e.stop();
		throw err;
	}
	const runner = e.run.bind(e);
	runner.effect = e;
	return runner;
}
function stop(runner) {
	runner.effect.stop();
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
	trackStack.push(shouldTrack);
	shouldTrack = false;
}
function resetTracking() {
	const last = trackStack.pop();
	shouldTrack = last === void 0 ? true : last;
}
function cleanupEffect(e) {
	const { cleanup } = e;
	e.cleanup = void 0;
	if (cleanup) {
		const prevSub = activeSub;
		activeSub = void 0;
		try {
			cleanup();
		} finally {
			activeSub = prevSub;
		}
	}
}
var globalVersion = 0;
var Link = class {
	constructor(sub, dep) {
		this.sub = sub;
		this.dep = dep;
		this.version = dep.version;
		this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
};
var Dep = class {
	constructor(computed) {
		this.computed = computed;
		this.version = 0;
		/**
		* Link between this dep and the current active effect
		*/
		this.activeLink = void 0;
		/**
		* Doubly linked list representing the subscribing effects (tail)
		*/
		this.subs = void 0;
		/**
		* For object property deps cleanup
		*/
		this.map = void 0;
		this.key = void 0;
		/**
		* Subscriber counter
		*/
		this.sc = 0;
		/**
		* @internal
		*/
		this.__v_skip = true;
	}
	track(debugInfo) {
		if (!activeSub || !shouldTrack || activeSub === this.computed) return;
		let link = this.activeLink;
		if (link === void 0 || link.sub !== activeSub) {
			link = this.activeLink = new Link(activeSub, this);
			if (!activeSub.deps) activeSub.deps = activeSub.depsTail = link;
			else {
				link.prevDep = activeSub.depsTail;
				activeSub.depsTail.nextDep = link;
				activeSub.depsTail = link;
			}
			addSub(link);
		} else if (link.version === -1) {
			link.version = this.version;
			if (link.nextDep) {
				const next = link.nextDep;
				next.prevDep = link.prevDep;
				if (link.prevDep) link.prevDep.nextDep = next;
				link.prevDep = activeSub.depsTail;
				link.nextDep = void 0;
				activeSub.depsTail.nextDep = link;
				activeSub.depsTail = link;
				if (activeSub.deps === link) activeSub.deps = next;
			}
		}
		return link;
	}
	trigger(debugInfo) {
		this.version++;
		globalVersion++;
		this.notify(debugInfo);
	}
	notify(debugInfo) {
		startBatch();
		try {
			for (let link = this.subs; link; link = link.prevSub) if (link.sub.notify()) link.sub.dep.notify();
		} finally {
			endBatch();
		}
	}
};
function addSub(link) {
	link.dep.sc++;
	if (link.sub.flags & 4) {
		const computed = link.dep.computed;
		if (computed && !link.dep.subs) {
			computed.flags |= 20;
			for (let l = computed.deps; l; l = l.nextDep) addSub(l);
		}
		const currentTail = link.dep.subs;
		if (currentTail !== link) {
			link.prevSub = currentTail;
			if (currentTail) currentTail.nextSub = link;
		}
		link.dep.subs = link;
	}
}
var targetMap = /* @__PURE__ */ new WeakMap();
var ITERATE_KEY = /* @__PURE__ */ Symbol("");
var MAP_KEY_ITERATE_KEY = /* @__PURE__ */ Symbol("");
var ARRAY_ITERATE_KEY = /* @__PURE__ */ Symbol("");
function track(target, type, key) {
	if (shouldTrack && activeSub) {
		let depsMap = targetMap.get(target);
		if (!depsMap) targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
		let dep = depsMap.get(key);
		if (!dep) {
			depsMap.set(key, dep = new Dep());
			dep.map = depsMap;
			dep.key = key;
		}
		dep.track();
	}
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
	const depsMap = targetMap.get(target);
	if (!depsMap) {
		globalVersion++;
		return;
	}
	const run = (dep) => {
		if (dep) dep.trigger();
	};
	startBatch();
	if (type === "clear") depsMap.forEach(run);
	else {
		const targetIsArray = isArray$2(target);
		const isArrayIndex = targetIsArray && isIntegerKey(key);
		if (targetIsArray && key === "length") {
			const newLength = Number(newValue);
			depsMap.forEach((dep, key2) => {
				if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol(key2) && key2 >= newLength) run(dep);
			});
		} else {
			if (key !== void 0 || depsMap.has(void 0)) run(depsMap.get(key));
			if (isArrayIndex) run(depsMap.get(ARRAY_ITERATE_KEY));
			switch (type) {
				case "add":
					if (!targetIsArray) {
						run(depsMap.get(ITERATE_KEY));
						if (isMap(target)) run(depsMap.get(MAP_KEY_ITERATE_KEY));
					} else if (isArrayIndex) run(depsMap.get("length"));
					break;
				case "delete":
					if (!targetIsArray) {
						run(depsMap.get(ITERATE_KEY));
						if (isMap(target)) run(depsMap.get(MAP_KEY_ITERATE_KEY));
					}
					break;
				case "set":
					if (isMap(target)) run(depsMap.get(ITERATE_KEY));
					break;
			}
		}
	}
	endBatch();
}
function getDepFromReactive(object, key) {
	const depMap = targetMap.get(object);
	return depMap && depMap.get(key);
}
function reactiveReadArray(array) {
	const raw = /* @__PURE__ */ toRaw(array);
	if (raw === array) return raw;
	track(raw, "iterate", ARRAY_ITERATE_KEY);
	return /* @__PURE__ */ isShallow(array) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
	track(arr = /* @__PURE__ */ toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
	return arr;
}
function toWrapped(target, item) {
	if (/* @__PURE__ */ isReadonly(target)) return /* @__PURE__ */ isReactive(target) ? toReadonly(toReactive(item)) : toReadonly(item);
	return toReactive(item);
}
var arrayInstrumentations = {
	__proto__: null,
	[Symbol.iterator]() {
		return iterator(this, Symbol.iterator, (item) => toWrapped(this, item));
	},
	concat(...args) {
		return reactiveReadArray(this).concat(...args.map((x) => isArray$2(x) ? reactiveReadArray(x) : x));
	},
	entries() {
		return iterator(this, "entries", (value) => {
			value[1] = toWrapped(this, value[1]);
			return value;
		});
	},
	every(fn, thisArg) {
		return apply$1(this, "every", fn, thisArg, void 0, arguments);
	},
	filter(fn, thisArg) {
		return apply$1(this, "filter", fn, thisArg, (v) => v.map((item) => toWrapped(this, item)), arguments);
	},
	find(fn, thisArg) {
		return apply$1(this, "find", fn, thisArg, (item) => toWrapped(this, item), arguments);
	},
	findIndex(fn, thisArg) {
		return apply$1(this, "findIndex", fn, thisArg, void 0, arguments);
	},
	findLast(fn, thisArg) {
		return apply$1(this, "findLast", fn, thisArg, (item) => toWrapped(this, item), arguments);
	},
	findLastIndex(fn, thisArg) {
		return apply$1(this, "findLastIndex", fn, thisArg, void 0, arguments);
	},
	forEach(fn, thisArg) {
		return apply$1(this, "forEach", fn, thisArg, void 0, arguments);
	},
	includes(...args) {
		return searchProxy(this, "includes", args);
	},
	indexOf(...args) {
		return searchProxy(this, "indexOf", args);
	},
	join(separator) {
		return reactiveReadArray(this).join(separator);
	},
	lastIndexOf(...args) {
		return searchProxy(this, "lastIndexOf", args);
	},
	map(fn, thisArg) {
		return apply$1(this, "map", fn, thisArg, void 0, arguments);
	},
	pop() {
		return noTracking(this, "pop");
	},
	push(...args) {
		return noTracking(this, "push", args);
	},
	reduce(fn, ...args) {
		return reduce(this, "reduce", fn, args);
	},
	reduceRight(fn, ...args) {
		return reduce(this, "reduceRight", fn, args);
	},
	shift() {
		return noTracking(this, "shift");
	},
	some(fn, thisArg) {
		return apply$1(this, "some", fn, thisArg, void 0, arguments);
	},
	splice(...args) {
		return noTracking(this, "splice", args);
	},
	toReversed() {
		return reactiveReadArray(this).toReversed();
	},
	toSorted(comparer) {
		return reactiveReadArray(this).toSorted(comparer);
	},
	toSpliced(...args) {
		return reactiveReadArray(this).toSpliced(...args);
	},
	unshift(...args) {
		return noTracking(this, "unshift", args);
	},
	values() {
		return iterator(this, "values", (item) => toWrapped(this, item));
	}
};
function iterator(self, method, wrapValue) {
	const arr = shallowReadArray(self);
	const iter = arr[method]();
	if (arr !== self && !/* @__PURE__ */ isShallow(self)) {
		iter._next = iter.next;
		iter.next = () => {
			const result = iter._next();
			if (!result.done) result.value = wrapValue(result.value);
			return result;
		};
	}
	return iter;
}
var arrayProto = Array.prototype;
function apply$1(self, method, fn, thisArg, wrappedRetFn, args) {
	const arr = shallowReadArray(self);
	const needsWrap = arr !== self && !/* @__PURE__ */ isShallow(self);
	const methodFn = arr[method];
	if (methodFn !== arrayProto[method]) {
		const result2 = methodFn.apply(self, args);
		return needsWrap ? toReactive(result2) : result2;
	}
	let wrappedFn = fn;
	if (arr !== self) {
		if (needsWrap) wrappedFn = function(item, index) {
			return fn.call(this, toWrapped(self, item), index, self);
		};
		else if (fn.length > 2) wrappedFn = function(item, index) {
			return fn.call(this, item, index, self);
		};
	}
	const result = methodFn.call(arr, wrappedFn, thisArg);
	return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self, method, fn, args) {
	const arr = shallowReadArray(self);
	const needsWrap = arr !== self && !/* @__PURE__ */ isShallow(self);
	let wrappedFn = fn;
	let wrapInitialAccumulator = false;
	if (arr !== self) {
		if (needsWrap) {
			wrapInitialAccumulator = args.length === 0;
			wrappedFn = function(acc, item, index) {
				if (wrapInitialAccumulator) {
					wrapInitialAccumulator = false;
					acc = toWrapped(self, acc);
				}
				return fn.call(this, acc, toWrapped(self, item), index, self);
			};
		} else if (fn.length > 3) wrappedFn = function(acc, item, index) {
			return fn.call(this, acc, item, index, self);
		};
	}
	const result = arr[method](wrappedFn, ...args);
	return wrapInitialAccumulator ? toWrapped(self, result) : result;
}
function searchProxy(self, method, args) {
	const arr = /* @__PURE__ */ toRaw(self);
	track(arr, "iterate", ARRAY_ITERATE_KEY);
	const res = arr[method](...args);
	if ((res === -1 || res === false) && /* @__PURE__ */ isProxy(args[0])) {
		args[0] = /* @__PURE__ */ toRaw(args[0]);
		return arr[method](...args);
	}
	return res;
}
function noTracking(self, method, args = []) {
	pauseTracking();
	startBatch();
	const res = (/* @__PURE__ */ toRaw(self))[method].apply(self, args);
	endBatch();
	resetTracking();
	return res;
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol));
function hasOwnProperty$1(key) {
	if (!isSymbol(key)) key = String(key);
	const obj = /* @__PURE__ */ toRaw(this);
	track(obj, "has", key);
	return obj.hasOwnProperty(key);
}
var BaseReactiveHandler = class {
	constructor(_isReadonly = false, _isShallow = false) {
		this._isReadonly = _isReadonly;
		this._isShallow = _isShallow;
	}
	get(target, key, receiver) {
		if (key === "__v_skip") return target["__v_skip"];
		const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
		if (key === "__v_isReactive") return !isReadonly2;
		else if (key === "__v_isReadonly") return isReadonly2;
		else if (key === "__v_isShallow") return isShallow2;
		else if (key === "__v_raw") {
			if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) return target;
			return;
		}
		const targetIsArray = isArray$2(target);
		if (!isReadonly2) {
			let fn;
			if (targetIsArray && (fn = arrayInstrumentations[key])) return fn;
			if (key === "hasOwnProperty") return hasOwnProperty$1;
		}
		const res = Reflect.get(target, key, /* @__PURE__ */ isRef(target) ? target : receiver);
		if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
		if (!isReadonly2) track(target, "get", key);
		if (isShallow2) return res;
		if (/* @__PURE__ */ isRef(res)) {
			const value = targetIsArray && isIntegerKey(key) ? res : res.value;
			return isReadonly2 && isObject$1(value) ? /* @__PURE__ */ readonly(value) : value;
		}
		if (isObject$1(res)) return isReadonly2 ? /* @__PURE__ */ readonly(res) : /* @__PURE__ */ reactive(res);
		return res;
	}
};
var MutableReactiveHandler = class extends BaseReactiveHandler {
	constructor(isShallow2 = false) {
		super(false, isShallow2);
	}
	set(target, key, value, receiver) {
		let oldValue = target[key];
		const isArrayWithIntegerKey = isArray$2(target) && isIntegerKey(key);
		if (!this._isShallow) {
			const isOldValueReadonly = /* @__PURE__ */ isReadonly(oldValue);
			if (!/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) {
				oldValue = /* @__PURE__ */ toRaw(oldValue);
				value = /* @__PURE__ */ toRaw(value);
			}
			if (!isArrayWithIntegerKey && /* @__PURE__ */ isRef(oldValue) && !/* @__PURE__ */ isRef(value)) if (isOldValueReadonly) return true;
			else {
				oldValue.value = value;
				return true;
			}
		}
		const hadKey = isArrayWithIntegerKey ? Number(key) < target.length : hasOwn$1(target, key);
		const result = Reflect.set(target, key, value, /* @__PURE__ */ isRef(target) ? target : receiver);
		if (target === /* @__PURE__ */ toRaw(receiver)) {
			if (!hadKey) trigger(target, "add", key, value);
			else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
		}
		return result;
	}
	deleteProperty(target, key) {
		const hadKey = hasOwn$1(target, key);
		const oldValue = target[key];
		const result = Reflect.deleteProperty(target, key);
		if (result && hadKey) trigger(target, "delete", key, void 0, oldValue);
		return result;
	}
	has(target, key) {
		const result = Reflect.has(target, key);
		if (!isSymbol(key) || !builtInSymbols.has(key)) track(target, "has", key);
		return result;
	}
	ownKeys(target) {
		track(target, "iterate", isArray$2(target) ? "length" : ITERATE_KEY);
		return Reflect.ownKeys(target);
	}
};
var ReadonlyReactiveHandler = class extends BaseReactiveHandler {
	constructor(isShallow2 = false) {
		super(true, isShallow2);
	}
	set(target, key) {
		return true;
	}
	deleteProperty(target, key) {
		return true;
	}
};
var mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
var readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
var shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
var shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
var toShallow = (value) => value;
var getProto = (v) => Reflect.getPrototypeOf(v);
function createIterableMethod(method, isReadonly2, isShallow2) {
	return function(...args) {
		const target = this["__v_raw"];
		const rawTarget = /* @__PURE__ */ toRaw(target);
		const targetIsMap = isMap(rawTarget);
		const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
		const isKeyOnly = method === "keys" && targetIsMap;
		const innerIterator = target[method](...args);
		const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
		!isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
		return extend(Object.create(innerIterator), { next() {
			const { value, done } = innerIterator.next();
			return done ? {
				value,
				done
			} : {
				value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
				done
			};
		} });
	};
}
function createReadonlyMethod(type) {
	return function(...args) {
		return type === "delete" ? false : type === "clear" ? void 0 : this;
	};
}
function createInstrumentations(readonly, shallow) {
	const instrumentations = {
		get(key) {
			const target = this["__v_raw"];
			const rawTarget = /* @__PURE__ */ toRaw(target);
			const rawKey = /* @__PURE__ */ toRaw(key);
			if (!readonly) {
				if (hasChanged(key, rawKey)) track(rawTarget, "get", key);
				track(rawTarget, "get", rawKey);
			}
			const { has } = getProto(rawTarget);
			const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive;
			if (has.call(rawTarget, key)) return wrap(target.get(key));
			else if (has.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
			else if (target !== rawTarget) target.get(key);
		},
		get size() {
			const target = this["__v_raw"];
			!readonly && track(/* @__PURE__ */ toRaw(target), "iterate", ITERATE_KEY);
			return target.size;
		},
		has(key) {
			const target = this["__v_raw"];
			const rawTarget = /* @__PURE__ */ toRaw(target);
			const rawKey = /* @__PURE__ */ toRaw(key);
			if (!readonly) {
				if (hasChanged(key, rawKey)) track(rawTarget, "has", key);
				track(rawTarget, "has", rawKey);
			}
			return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
		},
		forEach(callback, thisArg) {
			const observed = this;
			const target = observed["__v_raw"];
			const rawTarget = /* @__PURE__ */ toRaw(target);
			const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive;
			!readonly && track(rawTarget, "iterate", ITERATE_KEY);
			return target.forEach((value, key) => {
				return callback.call(thisArg, wrap(value), wrap(key), observed);
			});
		}
	};
	extend(instrumentations, readonly ? {
		add: createReadonlyMethod("add"),
		set: createReadonlyMethod("set"),
		delete: createReadonlyMethod("delete"),
		clear: createReadonlyMethod("clear")
	} : {
		add(value) {
			const target = /* @__PURE__ */ toRaw(this);
			const proto = getProto(target);
			const rawValue = /* @__PURE__ */ toRaw(value);
			const valueToAdd = !shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value) ? rawValue : value;
			if (!(proto.has.call(target, valueToAdd) || hasChanged(value, valueToAdd) && proto.has.call(target, value) || hasChanged(rawValue, valueToAdd) && proto.has.call(target, rawValue))) {
				target.add(valueToAdd);
				trigger(target, "add", valueToAdd, valueToAdd);
			}
			return this;
		},
		set(key, value) {
			if (!shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) value = /* @__PURE__ */ toRaw(value);
			const target = /* @__PURE__ */ toRaw(this);
			const { has, get } = getProto(target);
			let hadKey = has.call(target, key);
			if (!hadKey) {
				key = /* @__PURE__ */ toRaw(key);
				hadKey = has.call(target, key);
			}
			const oldValue = get.call(target, key);
			target.set(key, value);
			if (!hadKey) trigger(target, "add", key, value);
			else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
			return this;
		},
		delete(key) {
			const target = /* @__PURE__ */ toRaw(this);
			const { has, get } = getProto(target);
			let hadKey = has.call(target, key);
			if (!hadKey) {
				key = /* @__PURE__ */ toRaw(key);
				hadKey = has.call(target, key);
			}
			const oldValue = get ? get.call(target, key) : void 0;
			const result = target.delete(key);
			if (hadKey) trigger(target, "delete", key, void 0, oldValue);
			return result;
		},
		clear() {
			const target = /* @__PURE__ */ toRaw(this);
			const hadItems = target.size !== 0;
			const oldTarget = void 0;
			const result = target.clear();
			if (hadItems) trigger(target, "clear", void 0, void 0, oldTarget);
			return result;
		}
	});
	[
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((method) => {
		instrumentations[method] = createIterableMethod(method, readonly, shallow);
	});
	return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
	const instrumentations = createInstrumentations(isReadonly2, shallow);
	return (target, key, receiver) => {
		if (key === "__v_isReactive") return !isReadonly2;
		else if (key === "__v_isReadonly") return isReadonly2;
		else if (key === "__v_raw") return target;
		return Reflect.get(hasOwn$1(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
	};
}
var mutableCollectionHandlers = { get: /* @__PURE__ */ createInstrumentationGetter(false, false) };
var shallowCollectionHandlers = { get: /* @__PURE__ */ createInstrumentationGetter(false, true) };
var readonlyCollectionHandlers = { get: /* @__PURE__ */ createInstrumentationGetter(true, false) };
var shallowReadonlyCollectionHandlers = { get: /* @__PURE__ */ createInstrumentationGetter(true, true) };
var reactiveMap = /* @__PURE__ */ new WeakMap();
var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
var readonlyMap = /* @__PURE__ */ new WeakMap();
var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
	switch (rawType) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
function getTargetType(value) {
	return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
/* @__NO_SIDE_EFFECTS__ */
function reactive(target) {
	if (/* @__PURE__ */ isReadonly(target)) return target;
	return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/* @__NO_SIDE_EFFECTS__ */
function shallowReactive(target) {
	return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/* @__NO_SIDE_EFFECTS__ */
function readonly(target) {
	return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/* @__NO_SIDE_EFFECTS__ */
function shallowReadonly(target) {
	return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
	if (!isObject$1(target)) return target;
	if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) return target;
	const targetType = getTargetType(target);
	if (targetType === 0) return target;
	const existingProxy = proxyMap.get(target);
	if (existingProxy) return existingProxy;
	const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
	proxyMap.set(target, proxy);
	return proxy;
}
/* @__NO_SIDE_EFFECTS__ */
function isReactive(value) {
	if (/* @__PURE__ */ isReadonly(value)) return /* @__PURE__ */ isReactive(value["__v_raw"]);
	return !!(value && value["__v_isReactive"]);
}
/* @__NO_SIDE_EFFECTS__ */
function isReadonly(value) {
	return !!(value && value["__v_isReadonly"]);
}
/* @__NO_SIDE_EFFECTS__ */
function isShallow(value) {
	return !!(value && value["__v_isShallow"]);
}
/* @__NO_SIDE_EFFECTS__ */
function isProxy(value) {
	return value ? !!value["__v_raw"] : false;
}
/* @__NO_SIDE_EFFECTS__ */
function toRaw(observed) {
	const raw = observed && observed["__v_raw"];
	return raw ? /* @__PURE__ */ toRaw(raw) : observed;
}
function markRaw(value) {
	if (!hasOwn$1(value, "__v_skip") && Object.isExtensible(value)) def(value, "__v_skip", true);
	return value;
}
var toReactive = (value) => isObject$1(value) ? /* @__PURE__ */ reactive(value) : value;
var toReadonly = (value) => isObject$1(value) ? /* @__PURE__ */ readonly(value) : value;
/* @__NO_SIDE_EFFECTS__ */
function isRef(r) {
	return r ? r["__v_isRef"] === true : false;
}
/* @__NO_SIDE_EFFECTS__ */
function ref(value) {
	return createRef(value, false);
}
/* @__NO_SIDE_EFFECTS__ */
function shallowRef(value) {
	return createRef(value, true);
}
function createRef(rawValue, shallow) {
	if (/* @__PURE__ */ isRef(rawValue)) return rawValue;
	return new RefImpl(rawValue, shallow);
}
var RefImpl = class {
	constructor(value, isShallow2) {
		this.dep = new Dep();
		this["__v_isRef"] = true;
		this["__v_isShallow"] = false;
		this._rawValue = isShallow2 ? value : /* @__PURE__ */ toRaw(value);
		this._value = isShallow2 ? value : toReactive(value);
		this["__v_isShallow"] = isShallow2;
	}
	get value() {
		this.dep.track();
		return this._value;
	}
	set value(newValue) {
		const oldValue = this._rawValue;
		const useDirectValue = this["__v_isShallow"] || /* @__PURE__ */ isShallow(newValue) || /* @__PURE__ */ isReadonly(newValue);
		newValue = useDirectValue ? newValue : /* @__PURE__ */ toRaw(newValue);
		if (hasChanged(newValue, oldValue)) {
			this._rawValue = newValue;
			this._value = useDirectValue ? newValue : toReactive(newValue);
			this.dep.trigger();
		}
	}
};
function triggerRef(ref2) {
	if (ref2.dep) ref2.dep.trigger();
}
function unref(ref2) {
	return /* @__PURE__ */ isRef(ref2) ? ref2.value : ref2;
}
function toValue(source) {
	return isFunction$1(source) ? source() : unref(source);
}
var shallowUnwrapHandlers = {
	get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
	set: (target, key, value, receiver) => {
		const oldValue = target[key];
		if (/* @__PURE__ */ isRef(oldValue) && !/* @__PURE__ */ isRef(value)) {
			oldValue.value = value;
			return true;
		} else return Reflect.set(target, key, value, receiver);
	}
};
function proxyRefs(objectWithRefs) {
	return /* @__PURE__ */ isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
var CustomRefImpl = class {
	constructor(factory) {
		this["__v_isRef"] = true;
		this._value = void 0;
		const dep = this.dep = new Dep();
		const { get, set } = factory(dep.track.bind(dep), dep.trigger.bind(dep));
		this._get = get;
		this._set = set;
	}
	get value() {
		return this._value = this._get();
	}
	set value(newVal) {
		this._set(newVal);
	}
};
function customRef(factory) {
	return new CustomRefImpl(factory);
}
/* @__NO_SIDE_EFFECTS__ */
function toRefs(object) {
	const ret = isArray$2(object) ? new Array(object.length) : {};
	for (const key in object) ret[key] = propertyToRef(object, key);
	return ret;
}
var ObjectRefImpl = class {
	constructor(_object, _key, _defaultValue) {
		this._object = _object;
		this._key = _key;
		this._defaultValue = _defaultValue;
		this["__v_isRef"] = true;
		this._value = void 0;
		this._raw = /* @__PURE__ */ toRaw(_object);
		let shallow = true;
		let obj = _object;
		if (!isArray$2(_object) || !isIntegerKey(String(_key))) do
			shallow = !/* @__PURE__ */ isProxy(obj) || /* @__PURE__ */ isShallow(obj);
		while (shallow && (obj = obj["__v_raw"]));
		this._shallow = shallow;
	}
	get value() {
		let val = this._object[this._key];
		if (this._shallow) val = unref(val);
		return this._value = val === void 0 ? this._defaultValue : val;
	}
	set value(newVal) {
		if (this._shallow && /* @__PURE__ */ isRef(this._raw[this._key])) {
			const nestedRef = this._object[this._key];
			if (/* @__PURE__ */ isRef(nestedRef)) {
				nestedRef.value = newVal;
				return;
			}
		}
		this._object[this._key] = newVal;
	}
	get dep() {
		return getDepFromReactive(this._raw, this._key);
	}
};
var GetterRefImpl = class {
	constructor(_getter) {
		this._getter = _getter;
		this["__v_isRef"] = true;
		this["__v_isReadonly"] = true;
		this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
/* @__NO_SIDE_EFFECTS__ */
function toRef(source, key, defaultValue) {
	if (/* @__PURE__ */ isRef(source)) return source;
	else if (isFunction$1(source)) return new GetterRefImpl(source);
	else if (isObject$1(source) && arguments.length > 1) return propertyToRef(source, key, defaultValue);
	else return /* @__PURE__ */ ref(source);
}
function propertyToRef(source, key, defaultValue) {
	return new ObjectRefImpl(source, key, defaultValue);
}
var ComputedRefImpl = class {
	constructor(fn, setter, isSSR) {
		this.fn = fn;
		this.setter = setter;
		/**
		* @internal
		*/
		this._value = void 0;
		/**
		* @internal
		*/
		this.dep = new Dep(this);
		/**
		* @internal
		*/
		this.__v_isRef = true;
		/**
		* @internal
		*/
		this.deps = void 0;
		/**
		* @internal
		*/
		this.depsTail = void 0;
		/**
		* @internal
		*/
		this.flags = 16;
		/**
		* @internal
		*/
		this.globalVersion = globalVersion - 1;
		/**
		* @internal
		*/
		this.next = void 0;
		this.effect = this;
		this["__v_isReadonly"] = !setter;
		this.isSSR = isSSR;
	}
	/**
	* @internal
	*/
	notify() {
		this.flags |= 16;
		if (!(this.flags & 8) && activeSub !== this) {
			batch(this, true);
			return true;
		}
	}
	get value() {
		const link = this.dep.track();
		refreshComputed(this);
		if (link) link.version = this.dep.version;
		return this._value;
	}
	set value(newValue) {
		if (this.setter) this.setter(newValue);
	}
};
/* @__NO_SIDE_EFFECTS__ */
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
	let getter;
	let setter;
	if (isFunction$1(getterOrOptions)) getter = getterOrOptions;
	else {
		getter = getterOrOptions.get;
		setter = getterOrOptions.set;
	}
	return new ComputedRefImpl(getter, setter, isSSR);
}
var TrackOpTypes = {
	"GET": "get",
	"HAS": "has",
	"ITERATE": "iterate"
};
var TriggerOpTypes = {
	"SET": "set",
	"ADD": "add",
	"DELETE": "delete",
	"CLEAR": "clear"
};
var INITIAL_WATCHER_VALUE = {};
var cleanupMap = /* @__PURE__ */ new WeakMap();
var activeWatcher = void 0;
function getCurrentWatcher() {
	return activeWatcher;
}
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
	if (owner) {
		let cleanups = cleanupMap.get(owner);
		if (!cleanups) cleanupMap.set(owner, cleanups = []);
		cleanups.push(cleanupFn);
	}
}
function watch$1(source, cb, options = EMPTY_OBJ) {
	const { immediate, deep, once, scheduler, augmentJob, call } = options;
	const reactiveGetter = (source2) => {
		if (deep) return source2;
		if (/* @__PURE__ */ isShallow(source2) || deep === false || deep === 0) return traverse(source2, 1);
		return traverse(source2);
	};
	let effect;
	let getter;
	let cleanup;
	let boundCleanup;
	let forceTrigger = false;
	let isMultiSource = false;
	if (/* @__PURE__ */ isRef(source)) {
		getter = () => source.value;
		forceTrigger = /* @__PURE__ */ isShallow(source);
	} else if (/* @__PURE__ */ isReactive(source)) {
		getter = () => reactiveGetter(source);
		forceTrigger = true;
	} else if (isArray$2(source)) {
		isMultiSource = true;
		forceTrigger = source.some((s) => /* @__PURE__ */ isReactive(s) || /* @__PURE__ */ isShallow(s));
		getter = () => source.map((s) => {
			if (/* @__PURE__ */ isRef(s)) return s.value;
			else if (/* @__PURE__ */ isReactive(s)) return reactiveGetter(s);
			else if (isFunction$1(s)) return call ? call(s, 2) : s();
		});
	} else if (isFunction$1(source)) if (cb) getter = call ? () => call(source, 2) : source;
	else getter = () => {
		if (cleanup) {
			pauseTracking();
			try {
				cleanup();
			} finally {
				resetTracking();
			}
		}
		const currentEffect = activeWatcher;
		activeWatcher = effect;
		try {
			return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
		} finally {
			activeWatcher = currentEffect;
		}
	};
	else getter = NOOP;
	if (cb && deep) {
		const baseGetter = getter;
		const depth = deep === true ? Infinity : deep;
		getter = () => traverse(baseGetter(), depth);
	}
	const scope = getCurrentScope();
	const watchHandle = () => {
		effect.stop();
		if (scope && scope.active) remove(scope.effects, effect);
	};
	if (once && cb) {
		const _cb = cb;
		cb = (...args) => {
			_cb(...args);
			watchHandle();
		};
	}
	let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
	const job = (immediateFirstRun) => {
		if (!(effect.flags & 1) || !effect.dirty && !immediateFirstRun) return;
		if (cb) {
			const newValue = effect.run();
			if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue))) {
				if (cleanup) cleanup();
				const currentWatcher = activeWatcher;
				activeWatcher = effect;
				try {
					const args = [
						newValue,
						oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
						boundCleanup
					];
					oldValue = newValue;
					call ? call(cb, 3, args) : cb(...args);
				} finally {
					activeWatcher = currentWatcher;
				}
			}
		} else effect.run();
	};
	if (augmentJob) augmentJob(job);
	effect = new ReactiveEffect(getter);
	effect.scheduler = scheduler ? () => scheduler(job, false) : job;
	boundCleanup = (fn) => onWatcherCleanup(fn, false, effect);
	cleanup = effect.onStop = () => {
		const cleanups = cleanupMap.get(effect);
		if (cleanups) {
			if (call) call(cleanups, 4);
			else for (const cleanup2 of cleanups) cleanup2();
			cleanupMap.delete(effect);
		}
	};
	if (cb) if (immediate) job(true);
	else oldValue = effect.run();
	else if (scheduler) scheduler(job.bind(null, true), true);
	else effect.run();
	watchHandle.pause = effect.pause.bind(effect);
	watchHandle.resume = effect.resume.bind(effect);
	watchHandle.stop = watchHandle;
	return watchHandle;
}
function traverse(value, depth = Infinity, seen) {
	if (depth <= 0 || !isObject$1(value) || value["__v_skip"]) return value;
	seen = seen || /* @__PURE__ */ new Map();
	if ((seen.get(value) || 0) >= depth) return value;
	seen.set(value, depth);
	depth--;
	if (/* @__PURE__ */ isRef(value)) traverse(value.value, depth, seen);
	else if (isArray$2(value)) for (let i = 0; i < value.length; i++) traverse(value[i], depth, seen);
	else if (isSet(value) || isMap(value)) value.forEach((v) => {
		traverse(v, depth, seen);
	});
	else if (isPlainObject$2(value)) {
		for (const key in value) traverse(value[key], depth, seen);
		for (const key of Object.getOwnPropertySymbols(value)) if (Object.prototype.propertyIsEnumerable.call(value, key)) traverse(value[key], depth, seen);
	}
	return value;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var stack = [];
function pushWarningContext(vnode) {
	stack.push(vnode);
}
function popWarningContext() {
	stack.pop();
}
function assertNumber(val, type) {}
var ErrorCodes = {
	"SETUP_FUNCTION": 0,
	"0": "SETUP_FUNCTION",
	"RENDER_FUNCTION": 1,
	"1": "RENDER_FUNCTION",
	"NATIVE_EVENT_HANDLER": 5,
	"5": "NATIVE_EVENT_HANDLER",
	"COMPONENT_EVENT_HANDLER": 6,
	"6": "COMPONENT_EVENT_HANDLER",
	"VNODE_HOOK": 7,
	"7": "VNODE_HOOK",
	"DIRECTIVE_HOOK": 8,
	"8": "DIRECTIVE_HOOK",
	"TRANSITION_HOOK": 9,
	"9": "TRANSITION_HOOK",
	"APP_ERROR_HANDLER": 10,
	"10": "APP_ERROR_HANDLER",
	"APP_WARN_HANDLER": 11,
	"11": "APP_WARN_HANDLER",
	"FUNCTION_REF": 12,
	"12": "FUNCTION_REF",
	"ASYNC_COMPONENT_LOADER": 13,
	"13": "ASYNC_COMPONENT_LOADER",
	"SCHEDULER": 14,
	"14": "SCHEDULER",
	"COMPONENT_UPDATE": 15,
	"15": "COMPONENT_UPDATE",
	"APP_UNMOUNT_CLEANUP": 16,
	"16": "APP_UNMOUNT_CLEANUP"
};
var ErrorTypeStrings$1 = {
	["sp"]: "serverPrefetch hook",
	["bc"]: "beforeCreate hook",
	["c"]: "created hook",
	["bm"]: "beforeMount hook",
	["m"]: "mounted hook",
	["bu"]: "beforeUpdate hook",
	["u"]: "updated",
	["bum"]: "beforeUnmount hook",
	["um"]: "unmounted hook",
	["a"]: "activated hook",
	["da"]: "deactivated hook",
	["ec"]: "errorCaptured hook",
	["rtc"]: "renderTracked hook",
	["rtg"]: "renderTriggered hook",
	[0]: "setup function",
	[1]: "render function",
	[2]: "watcher getter",
	[3]: "watcher callback",
	[4]: "watcher cleanup function",
	[5]: "native event handler",
	[6]: "component event handler",
	[7]: "vnode hook",
	[8]: "directive hook",
	[9]: "transition hook",
	[10]: "app errorHandler",
	[11]: "app warnHandler",
	[12]: "ref function",
	[13]: "async component loader",
	[14]: "scheduler flush",
	[15]: "component update",
	[16]: "app unmount cleanup function"
};
function callWithErrorHandling(fn, instance, type, args) {
	try {
		return args ? fn(...args) : fn();
	} catch (err) {
		handleError(err, instance, type);
	}
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
	if (isFunction$1(fn)) {
		const res = callWithErrorHandling(fn, instance, type, args);
		if (res && isPromise$1(res)) res.catch((err) => {
			handleError(err, instance, type);
		});
		return res;
	}
	if (isArray$2(fn)) {
		const values = [];
		for (let i = 0; i < fn.length; i++) values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
		return values;
	}
}
function handleError(err, instance, type, throwInDev = true) {
	const contextVNode = instance ? instance.vnode : null;
	const { errorHandler, throwUnhandledErrorInProduction } = instance && instance.appContext.config || EMPTY_OBJ;
	if (instance) {
		let cur = instance.parent;
		const exposedInstance = instance.proxy;
		const errorInfo = `https://vuejs.org/error-reference/#runtime-${type}`;
		while (cur) {
			const errorCapturedHooks = cur.ec;
			if (errorCapturedHooks) {
				for (let i = 0; i < errorCapturedHooks.length; i++) if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) return;
			}
			cur = cur.parent;
		}
		if (errorHandler) {
			pauseTracking();
			callWithErrorHandling(errorHandler, null, 10, [
				err,
				exposedInstance,
				errorInfo
			]);
			resetTracking();
			return;
		}
	}
	logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
}
function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
	if (throwInProd) throw err;
	else console.error(err);
}
var queue = [];
var flushIndex = -1;
var pendingPostFlushCbs = [];
var activePostFlushCbs = null;
var postFlushIndex = 0;
var resolvedPromise = /* @__PURE__ */ Promise.resolve();
var currentFlushPromise = null;
function nextTick(fn) {
	const p = currentFlushPromise || resolvedPromise;
	return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
function findInsertionIndex$1(id) {
	let start = flushIndex + 1;
	let end = queue.length;
	while (start < end) {
		const middle = start + end >>> 1;
		const middleJob = queue[middle];
		const middleJobId = getId(middleJob);
		if (middleJobId < id || middleJobId === id && middleJob.flags & 2) start = middle + 1;
		else end = middle;
	}
	return start;
}
function queueJob(job) {
	if (!(job.flags & 1)) {
		const jobId = getId(job);
		const lastJob = queue[queue.length - 1];
		if (!lastJob || !(job.flags & 2) && jobId >= getId(lastJob)) queue.push(job);
		else queue.splice(findInsertionIndex$1(jobId), 0, job);
		job.flags |= 1;
		queueFlush();
	}
}
function queueFlush() {
	if (!currentFlushPromise) currentFlushPromise = resolvedPromise.then(flushJobs);
}
function queuePostFlushCb(cb) {
	if (!isArray$2(cb)) {
		if (activePostFlushCbs && cb.id === -1) activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
		else if (!(cb.flags & 1)) {
			pendingPostFlushCbs.push(cb);
			cb.flags |= 1;
		}
	} else pendingPostFlushCbs.push(...cb);
	queueFlush();
}
function flushPreFlushCbs(instance, seen, i = flushIndex + 1) {
	for (; i < queue.length; i++) {
		const cb = queue[i];
		if (cb && cb.flags & 2) {
			if (instance && cb.id !== instance.uid) continue;
			queue.splice(i, 1);
			i--;
			if (cb.flags & 4) cb.flags &= -2;
			cb();
			if (!(cb.flags & 4)) cb.flags &= -2;
		}
	}
}
function flushPostFlushCbs(seen) {
	if (pendingPostFlushCbs.length) {
		const deduped = [...new Set(pendingPostFlushCbs)].sort((a, b) => getId(a) - getId(b));
		pendingPostFlushCbs.length = 0;
		if (activePostFlushCbs) {
			activePostFlushCbs.push(...deduped);
			return;
		}
		activePostFlushCbs = deduped;
		for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
			const cb = activePostFlushCbs[postFlushIndex];
			if (cb.flags & 4) cb.flags &= -2;
			if (!(cb.flags & 8)) cb();
			cb.flags &= -2;
		}
		activePostFlushCbs = null;
		postFlushIndex = 0;
	}
}
var getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
function flushJobs(seen) {
	try {
		for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
			const job = queue[flushIndex];
			if (job && !(job.flags & 8)) {
				if (job.flags & 4) job.flags &= -2;
				callWithErrorHandling(job, job.i, job.i ? 15 : 14);
				if (!(job.flags & 4)) job.flags &= -2;
			}
		}
	} finally {
		for (; flushIndex < queue.length; flushIndex++) {
			const job = queue[flushIndex];
			if (job) job.flags &= -2;
		}
		flushIndex = -1;
		queue.length = 0;
		flushPostFlushCbs(seen);
		currentFlushPromise = null;
		if (queue.length || pendingPostFlushCbs.length) flushJobs(seen);
	}
}
var devtools$1;
var buffer = [];
function setDevtoolsHook$1(hook, target) {
	var _a, _b;
	devtools$1 = hook;
	if (devtools$1) {
		devtools$1.enabled = true;
		buffer.forEach(({ event, args }) => devtools$1.emit(event, ...args));
		buffer = [];
	} else if (typeof window !== "undefined" && window.HTMLElement && !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))) {
		(target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((newHook) => {
			setDevtoolsHook$1(newHook, target);
		});
		setTimeout(() => {
			if (!devtools$1) {
				target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
				buffer = [];
			}
		}, 3e3);
	} else buffer = [];
}
var currentRenderingInstance = null;
var currentScopeId = null;
function setCurrentRenderingInstance(instance) {
	const prev = currentRenderingInstance;
	currentRenderingInstance = instance;
	currentScopeId = instance && instance.type.__scopeId || null;
	return prev;
}
function pushScopeId(id) {
	currentScopeId = id;
}
function popScopeId() {
	currentScopeId = null;
}
var withScopeId = (_id) => withCtx;
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
	if (!ctx) return fn;
	if (fn._n) return fn;
	const renderFnWithContext = (...args) => {
		if (renderFnWithContext._d) setBlockTracking(-1);
		const prevInstance = setCurrentRenderingInstance(ctx);
		let res;
		try {
			res = fn(...args);
		} finally {
			setCurrentRenderingInstance(prevInstance);
			if (renderFnWithContext._d) setBlockTracking(1);
		}
		return res;
	};
	renderFnWithContext._n = true;
	renderFnWithContext._c = true;
	renderFnWithContext._d = true;
	return renderFnWithContext;
}
function withDirectives(vnode, directives) {
	if (currentRenderingInstance === null) return vnode;
	const instance = getComponentPublicInstance(currentRenderingInstance);
	const bindings = vnode.dirs || (vnode.dirs = []);
	for (let i = 0; i < directives.length; i++) {
		let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
		if (dir) {
			if (isFunction$1(dir)) dir = {
				mounted: dir,
				updated: dir
			};
			if (dir.deep) traverse(value);
			bindings.push({
				dir,
				instance,
				value,
				oldValue: void 0,
				arg,
				modifiers
			});
		}
	}
	return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
	const bindings = vnode.dirs;
	const oldBindings = prevVNode && prevVNode.dirs;
	for (let i = 0; i < bindings.length; i++) {
		const binding = bindings[i];
		if (oldBindings) binding.oldValue = oldBindings[i].value;
		let hook = binding.dir[name];
		if (hook) {
			pauseTracking();
			callWithAsyncErrorHandling(hook, instance, 8, [
				vnode.el,
				binding,
				vnode,
				prevVNode
			]);
			resetTracking();
		}
	}
}
function provide(key, value) {
	if (currentInstance) {
		let provides = currentInstance.provides;
		const parentProvides = currentInstance.parent && currentInstance.parent.provides;
		if (parentProvides === provides) provides = currentInstance.provides = Object.create(parentProvides);
		provides[key] = value;
	}
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
	const instance = getCurrentInstance$1();
	if (instance || currentApp) {
		let provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null || instance.ce ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
		if (provides && key in provides) return provides[key];
		else if (arguments.length > 1) return treatDefaultAsFactory && isFunction$1(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
	}
}
function hasInjectionContext() {
	return !!(getCurrentInstance$1() || currentApp);
}
var ssrContextKey = /* @__PURE__ */ Symbol.for("v-scx");
var useSSRContext = () => {
	{
		const ctx = inject(ssrContextKey);
		if (!ctx) {}
		return ctx;
	}
};
function watchEffect(effect, options) {
	return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
	return doWatch(effect, null, { flush: "post" });
}
function watchSyncEffect(effect, options) {
	return doWatch(effect, null, { flush: "sync" });
}
function watch(source, cb, options) {
	return doWatch(source, cb, options);
}
function doWatch(source, cb, options = EMPTY_OBJ) {
	const { immediate, deep, flush, once } = options;
	const baseWatchOptions = extend({}, options);
	const runsImmediately = cb && immediate || !cb && flush !== "post";
	let ssrCleanup;
	if (isInSSRComponentSetup) {
		if (flush === "sync") {
			const ctx = useSSRContext();
			ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
		} else if (!runsImmediately) {
			const watchStopHandle = () => {};
			watchStopHandle.stop = NOOP;
			watchStopHandle.resume = NOOP;
			watchStopHandle.pause = NOOP;
			return watchStopHandle;
		}
	}
	const instance = currentInstance;
	baseWatchOptions.call = (fn, type, args) => callWithAsyncErrorHandling(fn, instance, type, args);
	let isPre = false;
	if (flush === "post") baseWatchOptions.scheduler = (job) => {
		queuePostRenderEffect(job, instance && instance.suspense);
	};
	else if (flush !== "sync") {
		isPre = true;
		baseWatchOptions.scheduler = (job, isFirstRun) => {
			if (isFirstRun) job();
			else queueJob(job);
		};
	}
	baseWatchOptions.augmentJob = (job) => {
		if (cb) job.flags |= 4;
		if (isPre) {
			job.flags |= 2;
			if (instance) {
				job.id = instance.uid;
				job.i = instance;
			}
		}
	};
	const watchHandle = watch$1(source, cb, baseWatchOptions);
	if (isInSSRComponentSetup) {
		if (ssrCleanup) ssrCleanup.push(watchHandle);
		else if (runsImmediately) watchHandle();
	}
	return watchHandle;
}
function instanceWatch(source, value, options) {
	const publicThis = this.proxy;
	const getter = isString$1(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
	let cb;
	if (isFunction$1(value)) cb = value;
	else {
		cb = value.handler;
		options = value;
	}
	const reset = setCurrentInstance(this);
	const res = doWatch(getter, cb.bind(publicThis), options);
	reset();
	return res;
}
function createPathGetter(ctx, path) {
	const segments = path.split(".");
	return () => {
		let cur = ctx;
		for (let i = 0; i < segments.length && cur; i++) cur = cur[segments[i]];
		return cur;
	};
}
var TeleportEndKey = /* @__PURE__ */ Symbol("_vte");
var isTeleport = (type) => type.__isTeleport;
var isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
var isTeleportDeferred = (props) => props && (props.defer || props.defer === "");
var isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
var isTargetMathML = (target) => typeof MathMLElement === "function" && target instanceof MathMLElement;
var resolveTarget = (props, select) => {
	const targetSelector = props && props.to;
	if (isString$1(targetSelector)) if (!select) return null;
	else return select(targetSelector);
	else return targetSelector;
};
var TeleportImpl = {
	name: "Teleport",
	__isTeleport: true,
	process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
		const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
		const disabled = isTeleportDisabled(n2.props);
		let { shapeFlag, children, dynamicChildren } = n2;
		if (n1 == null) {
			const placeholder = n2.el = createText("");
			const mainAnchor = n2.anchor = createText("");
			insert(placeholder, container, anchor);
			insert(mainAnchor, container, anchor);
			const mount = (container2, anchor2) => {
				if (shapeFlag & 16) mountChildren(children, container2, anchor2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			};
			const mountToTarget = () => {
				const target = n2.target = resolveTarget(n2.props, querySelector);
				const targetAnchor = prepareAnchor(target, n2, createText, insert);
				if (target) {
					if (namespace !== "svg" && isTargetSVG(target)) namespace = "svg";
					else if (namespace !== "mathml" && isTargetMathML(target)) namespace = "mathml";
					if (parentComponent && parentComponent.isCE) (parentComponent.ce._teleportTargets || (parentComponent.ce._teleportTargets = /* @__PURE__ */ new Set())).add(target);
					if (!disabled) {
						mount(target, targetAnchor);
						updateCssVars(n2, false);
					}
				}
			};
			if (disabled) {
				mount(container, mainAnchor);
				updateCssVars(n2, true);
			}
			if (isTeleportDeferred(n2.props)) {
				n2.el.__isMounted = false;
				queuePostRenderEffect(() => {
					mountToTarget();
					delete n2.el.__isMounted;
				}, parentSuspense);
			} else mountToTarget();
		} else {
			if (isTeleportDeferred(n2.props) && n1.el.__isMounted === false) {
				queuePostRenderEffect(() => {
					TeleportImpl.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
				}, parentSuspense);
				return;
			}
			n2.el = n1.el;
			n2.targetStart = n1.targetStart;
			const mainAnchor = n2.anchor = n1.anchor;
			const target = n2.target = n1.target;
			const targetAnchor = n2.targetAnchor = n1.targetAnchor;
			const wasDisabled = isTeleportDisabled(n1.props);
			const currentContainer = wasDisabled ? container : target;
			const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
			if (namespace === "svg" || isTargetSVG(target)) namespace = "svg";
			else if (namespace === "mathml" || isTargetMathML(target)) namespace = "mathml";
			if (dynamicChildren) {
				patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, namespace, slotScopeIds);
				traverseStaticChildren(n1, n2, true);
			} else if (!optimized) patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, false);
			if (disabled) {
				if (!wasDisabled) moveTeleport(n2, container, mainAnchor, internals, 1);
				else if (n2.props && n1.props && n2.props.to !== n1.props.to) n2.props.to = n1.props.to;
			} else if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
				const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
				if (nextTarget) moveTeleport(n2, nextTarget, null, internals, 0);
			} else if (wasDisabled) moveTeleport(n2, target, targetAnchor, internals, 1);
			updateCssVars(n2, disabled);
		}
	},
	remove(vnode, parentComponent, parentSuspense, { um: unmount, o: { remove: hostRemove } }, doRemove) {
		const { shapeFlag, children, anchor, targetStart, targetAnchor, target, props } = vnode;
		if (target) {
			hostRemove(targetStart);
			hostRemove(targetAnchor);
		}
		doRemove && hostRemove(anchor);
		if (shapeFlag & 16) {
			const shouldRemove = doRemove || !isTeleportDisabled(props);
			for (let i = 0; i < children.length; i++) {
				const child = children[i];
				unmount(child, parentComponent, parentSuspense, shouldRemove, !!child.dynamicChildren);
			}
		}
	},
	move: moveTeleport,
	hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
	if (moveType === 0) insert(vnode.targetAnchor, container, parentAnchor);
	const { el, anchor, shapeFlag, children, props } = vnode;
	const isReorder = moveType === 2;
	if (isReorder) insert(el, container, parentAnchor);
	if (!isReorder || isTeleportDisabled(props)) {
		if (shapeFlag & 16) for (let i = 0; i < children.length; i++) move(children[i], container, parentAnchor, 2);
	}
	if (isReorder) insert(anchor, container, parentAnchor);
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector, insert, createText } }, hydrateChildren) {
	function hydrateAnchor(target2, targetNode) {
		let targetAnchor = targetNode;
		while (targetAnchor) {
			if (targetAnchor && targetAnchor.nodeType === 8) {
				if (targetAnchor.data === "teleport start anchor") vnode.targetStart = targetAnchor;
				else if (targetAnchor.data === "teleport anchor") {
					vnode.targetAnchor = targetAnchor;
					target2._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
					break;
				}
			}
			targetAnchor = nextSibling(targetAnchor);
		}
	}
	function hydrateDisabledTeleport(node2, vnode2) {
		vnode2.anchor = hydrateChildren(nextSibling(node2), vnode2, parentNode(node2), parentComponent, parentSuspense, slotScopeIds, optimized);
	}
	const target = vnode.target = resolveTarget(vnode.props, querySelector);
	const disabled = isTeleportDisabled(vnode.props);
	if (target) {
		const targetNode = target._lpa || target.firstChild;
		if (vnode.shapeFlag & 16) if (disabled) {
			hydrateDisabledTeleport(node, vnode);
			hydrateAnchor(target, targetNode);
			if (!vnode.targetAnchor) prepareAnchor(target, vnode, createText, insert, parentNode(node) === target ? node : null);
		} else {
			vnode.anchor = nextSibling(node);
			hydrateAnchor(target, targetNode);
			if (!vnode.targetAnchor) prepareAnchor(target, vnode, createText, insert);
			hydrateChildren(targetNode && nextSibling(targetNode), vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
		}
		updateCssVars(vnode, disabled);
	} else if (disabled) {
		if (vnode.shapeFlag & 16) {
			hydrateDisabledTeleport(node, vnode);
			vnode.targetStart = node;
			vnode.targetAnchor = nextSibling(node);
		}
	}
	return vnode.anchor && nextSibling(vnode.anchor);
}
var Teleport = TeleportImpl;
function updateCssVars(vnode, isDisabled) {
	const ctx = vnode.ctx;
	if (ctx && ctx.ut) {
		let node, anchor;
		if (isDisabled) {
			node = vnode.el;
			anchor = vnode.anchor;
		} else {
			node = vnode.targetStart;
			anchor = vnode.targetAnchor;
		}
		while (node && node !== anchor) {
			if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
			node = node.nextSibling;
		}
		ctx.ut();
	}
}
function prepareAnchor(target, vnode, createText, insert, anchor = null) {
	const targetStart = vnode.targetStart = createText("");
	const targetAnchor = vnode.targetAnchor = createText("");
	targetStart[TeleportEndKey] = targetAnchor;
	if (target) {
		insert(targetStart, target, anchor);
		insert(targetAnchor, target, anchor);
	}
	return targetAnchor;
}
var leaveCbKey = /* @__PURE__ */ Symbol("_leaveCb");
var enterCbKey$1 = /* @__PURE__ */ Symbol("_enterCb");
function useTransitionState() {
	const state = {
		isMounted: false,
		isLeaving: false,
		isUnmounting: false,
		leavingVNodes: /* @__PURE__ */ new Map()
	};
	onMounted(() => {
		state.isMounted = true;
	});
	onBeforeUnmount(() => {
		state.isUnmounting = true;
	});
	return state;
}
var TransitionHookValidator = [Function, Array];
var BaseTransitionPropsValidators = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: TransitionHookValidator,
	onEnter: TransitionHookValidator,
	onAfterEnter: TransitionHookValidator,
	onEnterCancelled: TransitionHookValidator,
	onBeforeLeave: TransitionHookValidator,
	onLeave: TransitionHookValidator,
	onAfterLeave: TransitionHookValidator,
	onLeaveCancelled: TransitionHookValidator,
	onBeforeAppear: TransitionHookValidator,
	onAppear: TransitionHookValidator,
	onAfterAppear: TransitionHookValidator,
	onAppearCancelled: TransitionHookValidator
};
var recursiveGetSubtree = (instance) => {
	const subTree = instance.subTree;
	return subTree.component ? recursiveGetSubtree(subTree.component) : subTree;
};
var BaseTransitionImpl = {
	name: `BaseTransition`,
	props: BaseTransitionPropsValidators,
	setup(props, { slots }) {
		const instance = getCurrentInstance$1();
		const state = useTransitionState();
		return () => {
			const children = slots.default && getTransitionRawChildren(slots.default(), true);
			if (!children || !children.length) return;
			const child = findNonCommentChild(children);
			const rawProps = /* @__PURE__ */ toRaw(props);
			const { mode } = rawProps;
			if (state.isLeaving) return emptyPlaceholder(child);
			const innerChild = getInnerChild$1(child);
			if (!innerChild) return emptyPlaceholder(child);
			let enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance, (hooks) => enterHooks = hooks);
			if (innerChild.type !== Comment) setTransitionHooks(innerChild, enterHooks);
			let oldInnerChild = instance.subTree && getInnerChild$1(instance.subTree);
			if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(oldInnerChild, innerChild) && recursiveGetSubtree(instance).type !== Comment) {
				let leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
				setTransitionHooks(oldInnerChild, leavingHooks);
				if (mode === "out-in" && innerChild.type !== Comment) {
					state.isLeaving = true;
					leavingHooks.afterLeave = () => {
						state.isLeaving = false;
						if (!(instance.job.flags & 8)) instance.update();
						delete leavingHooks.afterLeave;
						oldInnerChild = void 0;
					};
					return emptyPlaceholder(child);
				} else if (mode === "in-out" && innerChild.type !== Comment) leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
					const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
					leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
					el[leaveCbKey] = () => {
						earlyRemove();
						el[leaveCbKey] = void 0;
						delete enterHooks.delayedLeave;
						oldInnerChild = void 0;
					};
					enterHooks.delayedLeave = () => {
						delayedLeave();
						delete enterHooks.delayedLeave;
						oldInnerChild = void 0;
					};
				};
				else oldInnerChild = void 0;
			} else if (oldInnerChild) oldInnerChild = void 0;
			return child;
		};
	}
};
function findNonCommentChild(children) {
	let child = children[0];
	if (children.length > 1) {
		for (const c of children) if (c.type !== Comment) {
			child = c;
			break;
		}
	}
	return child;
}
var BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
	const { leavingVNodes } = state;
	let leavingVNodesCache = leavingVNodes.get(vnode.type);
	if (!leavingVNodesCache) {
		leavingVNodesCache = /* @__PURE__ */ Object.create(null);
		leavingVNodes.set(vnode.type, leavingVNodesCache);
	}
	return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance, postClone) {
	const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
	const key = String(vnode.key);
	const leavingVNodesCache = getLeavingNodesForType(state, vnode);
	const callHook = (hook, args) => {
		hook && callWithAsyncErrorHandling(hook, instance, 9, args);
	};
	const callAsyncHook = (hook, args) => {
		const done = args[1];
		callHook(hook, args);
		if (isArray$2(hook)) {
			if (hook.every((hook2) => hook2.length <= 1)) done();
		} else if (hook.length <= 1) done();
	};
	const hooks = {
		mode,
		persisted,
		beforeEnter(el) {
			let hook = onBeforeEnter;
			if (!state.isMounted) if (appear) hook = onBeforeAppear || onBeforeEnter;
			else return;
			if (el[leaveCbKey]) el[leaveCbKey](true);
			const leavingVNode = leavingVNodesCache[key];
			if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) leavingVNode.el[leaveCbKey]();
			callHook(hook, [el]);
		},
		enter(el) {
			if (leavingVNodesCache[key] === vnode) return;
			let hook = onEnter;
			let afterHook = onAfterEnter;
			let cancelHook = onEnterCancelled;
			if (!state.isMounted) if (appear) {
				hook = onAppear || onEnter;
				afterHook = onAfterAppear || onAfterEnter;
				cancelHook = onAppearCancelled || onEnterCancelled;
			} else return;
			let called = false;
			el[enterCbKey$1] = (cancelled) => {
				if (called) return;
				called = true;
				if (cancelled) callHook(cancelHook, [el]);
				else callHook(afterHook, [el]);
				if (hooks.delayedLeave) hooks.delayedLeave();
				el[enterCbKey$1] = void 0;
			};
			const done = el[enterCbKey$1].bind(null, false);
			if (hook) callAsyncHook(hook, [el, done]);
			else done();
		},
		leave(el, remove) {
			const key2 = String(vnode.key);
			if (el[enterCbKey$1]) el[enterCbKey$1](true);
			if (state.isUnmounting) return remove();
			callHook(onBeforeLeave, [el]);
			let called = false;
			el[leaveCbKey] = (cancelled) => {
				if (called) return;
				called = true;
				remove();
				if (cancelled) callHook(onLeaveCancelled, [el]);
				else callHook(onAfterLeave, [el]);
				el[leaveCbKey] = void 0;
				if (leavingVNodesCache[key2] === vnode) delete leavingVNodesCache[key2];
			};
			const done = el[leaveCbKey].bind(null, false);
			leavingVNodesCache[key2] = vnode;
			if (onLeave) callAsyncHook(onLeave, [el, done]);
			else done();
		},
		clone(vnode2) {
			const hooks2 = resolveTransitionHooks(vnode2, props, state, instance, postClone);
			if (postClone) postClone(hooks2);
			return hooks2;
		}
	};
	return hooks;
}
function emptyPlaceholder(vnode) {
	if (isKeepAlive(vnode)) {
		vnode = cloneVNode(vnode);
		vnode.children = null;
		return vnode;
	}
}
function getInnerChild$1(vnode) {
	if (!isKeepAlive(vnode)) {
		if (isTeleport(vnode.type) && vnode.children) return findNonCommentChild(vnode.children);
		return vnode;
	}
	if (vnode.component) return vnode.component.subTree;
	const { shapeFlag, children } = vnode;
	if (children) {
		if (shapeFlag & 16) return children[0];
		if (shapeFlag & 32 && isFunction$1(children.default)) return children.default();
	}
}
function setTransitionHooks(vnode, hooks) {
	if (vnode.shapeFlag & 6 && vnode.component) {
		vnode.transition = hooks;
		setTransitionHooks(vnode.component.subTree, hooks);
	} else if (vnode.shapeFlag & 128) {
		vnode.ssContent.transition = hooks.clone(vnode.ssContent);
		vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
	} else vnode.transition = hooks;
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
	let ret = [];
	let keyedFragmentCount = 0;
	for (let i = 0; i < children.length; i++) {
		let child = children[i];
		const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
		if (child.type === Fragment) {
			if (child.patchFlag & 128) keyedFragmentCount++;
			ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
		} else if (keepComment || child.type !== Comment) ret.push(key != null ? cloneVNode(child, { key }) : child);
	}
	if (keyedFragmentCount > 1) for (let i = 0; i < ret.length; i++) ret[i].patchFlag = -2;
	return ret;
}
/* @__NO_SIDE_EFFECTS__ */
function defineComponent(options, extraOptions) {
	return isFunction$1(options) ? extend({ name: options.name }, extraOptions, { setup: options }) : options;
}
function useId() {
	const i = getCurrentInstance$1();
	if (i) return (i.appContext.config.idPrefix || "v") + "-" + i.ids[0] + i.ids[1]++;
	return "";
}
function markAsyncBoundary(instance) {
	instance.ids = [
		instance.ids[0] + instance.ids[2]++ + "-",
		0,
		0
	];
}
function useTemplateRef(key) {
	const i = getCurrentInstance$1();
	const r = /* @__PURE__ */ shallowRef(null);
	if (i) {
		const refs = i.refs === EMPTY_OBJ ? i.refs = {} : i.refs;
		Object.defineProperty(refs, key, {
			enumerable: true,
			get: () => r.value,
			set: (val) => r.value = val
		});
	}
	return r;
}
function isTemplateRefKey(refs, key) {
	let desc;
	return !!((desc = Object.getOwnPropertyDescriptor(refs, key)) && !desc.configurable);
}
var pendingSetRefMap = /* @__PURE__ */ new WeakMap();
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
	if (isArray$2(rawRef)) {
		rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray$2(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
		return;
	}
	if (isAsyncWrapper(vnode) && !isUnmount) {
		if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
		return;
	}
	const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
	const value = isUnmount ? null : refValue;
	const { i: owner, r: ref } = rawRef;
	const oldRef = oldRawRef && oldRawRef.r;
	const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
	const setupState = owner.setupState;
	const rawSetupState = /* @__PURE__ */ toRaw(setupState);
	const canSetSetupRef = setupState === EMPTY_OBJ ? NO : (key) => {
		if (isTemplateRefKey(refs, key)) return false;
		return hasOwn$1(rawSetupState, key);
	};
	const canSetRef = (ref2, key) => {
		if (key && isTemplateRefKey(refs, key)) return false;
		return true;
	};
	if (oldRef != null && oldRef !== ref) {
		invalidatePendingSetRef(oldRawRef);
		if (isString$1(oldRef)) {
			refs[oldRef] = null;
			if (canSetSetupRef(oldRef)) setupState[oldRef] = null;
		} else if (/* @__PURE__ */ isRef(oldRef)) {
			const oldRawRefAtom = oldRawRef;
			if (canSetRef(oldRef, oldRawRefAtom.k)) oldRef.value = null;
			if (oldRawRefAtom.k) refs[oldRawRefAtom.k] = null;
		}
	}
	if (isFunction$1(ref)) callWithErrorHandling(ref, owner, 12, [value, refs]);
	else {
		const _isString = isString$1(ref);
		const _isRef = /* @__PURE__ */ isRef(ref);
		if (_isString || _isRef) {
			const doSet = () => {
				if (rawRef.f) {
					const existing = _isString ? canSetSetupRef(ref) ? setupState[ref] : refs[ref] : canSetRef(ref) || !rawRef.k ? ref.value : refs[rawRef.k];
					if (isUnmount) isArray$2(existing) && remove(existing, refValue);
					else if (!isArray$2(existing)) if (_isString) {
						refs[ref] = [refValue];
						if (canSetSetupRef(ref)) setupState[ref] = refs[ref];
					} else {
						const newVal = [refValue];
						if (canSetRef(ref, rawRef.k)) ref.value = newVal;
						if (rawRef.k) refs[rawRef.k] = newVal;
					}
					else if (!existing.includes(refValue)) existing.push(refValue);
				} else if (_isString) {
					refs[ref] = value;
					if (canSetSetupRef(ref)) setupState[ref] = value;
				} else if (_isRef) {
					if (canSetRef(ref, rawRef.k)) ref.value = value;
					if (rawRef.k) refs[rawRef.k] = value;
				}
			};
			if (value) {
				const job = () => {
					doSet();
					pendingSetRefMap.delete(rawRef);
				};
				job.id = -1;
				pendingSetRefMap.set(rawRef, job);
				queuePostRenderEffect(job, parentSuspense);
			} else {
				invalidatePendingSetRef(rawRef);
				doSet();
			}
		}
	}
}
function invalidatePendingSetRef(rawRef) {
	const pendingSetRef = pendingSetRefMap.get(rawRef);
	if (pendingSetRef) {
		pendingSetRef.flags |= 8;
		pendingSetRefMap.delete(rawRef);
	}
}
var hasLoggedMismatchError = false;
var logMismatchError = () => {
	if (hasLoggedMismatchError) return;
	console.error("Hydration completed but contains mismatches.");
	hasLoggedMismatchError = true;
};
var isSVGContainer = (container) => container.namespaceURI.includes("svg") && container.tagName !== "foreignObject";
var isMathMLContainer = (container) => container.namespaceURI.includes("MathML");
var getContainerType = (container) => {
	if (container.nodeType !== 1) return void 0;
	if (isSVGContainer(container)) return "svg";
	if (isMathMLContainer(container)) return "mathml";
};
var isComment = (node) => node.nodeType === 8;
function createHydrationFunctions(rendererInternals) {
	const { mt: mountComponent, p: patch, o: { patchProp, createText, nextSibling, parentNode, remove, insert, createComment } } = rendererInternals;
	const hydrate = (vnode, container) => {
		if (!container.hasChildNodes()) {
			patch(null, vnode, container);
			flushPostFlushCbs();
			container._vnode = vnode;
			return;
		}
		hydrateNode(container.firstChild, vnode, null, null, null);
		flushPostFlushCbs();
		container._vnode = vnode;
	};
	const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
		optimized = optimized || !!vnode.dynamicChildren;
		const isFragmentStart = isComment(node) && node.data === "[";
		const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
		const { type, ref, shapeFlag, patchFlag } = vnode;
		let domType = node.nodeType;
		vnode.el = node;
		if (patchFlag === -2) {
			optimized = false;
			vnode.dynamicChildren = null;
		}
		let nextNode = null;
		switch (type) {
			case Text:
				if (domType !== 3) if (vnode.children === "") {
					insert(vnode.el = createText(""), parentNode(node), node);
					nextNode = node;
				} else nextNode = onMismatch();
				else {
					if (node.data !== vnode.children) {
						logMismatchError();
						node.data = vnode.children;
					}
					nextNode = nextSibling(node);
				}
				break;
			case Comment:
				if (isTemplateNode(node)) {
					nextNode = nextSibling(node);
					replaceNode(vnode.el = node.content.firstChild, node, parentComponent);
				} else if (domType !== 8 || isFragmentStart) nextNode = onMismatch();
				else nextNode = nextSibling(node);
				break;
			case Static:
				if (isFragmentStart) {
					node = nextSibling(node);
					domType = node.nodeType;
				}
				if (domType === 1 || domType === 3) {
					nextNode = node;
					const needToAdoptContent = !vnode.children.length;
					for (let i = 0; i < vnode.staticCount; i++) {
						if (needToAdoptContent) vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
						if (i === vnode.staticCount - 1) vnode.anchor = nextNode;
						nextNode = nextSibling(nextNode);
					}
					return isFragmentStart ? nextSibling(nextNode) : nextNode;
				} else onMismatch();
				break;
			case Fragment:
				if (!isFragmentStart) nextNode = onMismatch();
				else nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
				break;
			default: if (shapeFlag & 1) if ((domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) && !isTemplateNode(node)) nextNode = onMismatch();
			else nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
			else if (shapeFlag & 6) {
				vnode.slotScopeIds = slotScopeIds;
				const container = parentNode(node);
				if (isFragmentStart) nextNode = locateClosingAnchor(node);
				else if (isComment(node) && node.data === "teleport start") nextNode = locateClosingAnchor(node, node.data, "teleport end");
				else nextNode = nextSibling(node);
				mountComponent(vnode, container, null, parentComponent, parentSuspense, getContainerType(container), optimized);
				if (isAsyncWrapper(vnode) && !vnode.type.__asyncResolved) {
					let subTree;
					if (isFragmentStart) {
						subTree = createVNode(Fragment);
						subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
					} else subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
					subTree.el = node;
					vnode.component.subTree = subTree;
				}
			} else if (shapeFlag & 64) if (domType !== 8) nextNode = onMismatch();
			else nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
			else if (shapeFlag & 128) nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, getContainerType(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
		}
		if (ref != null) setRef(ref, null, parentSuspense, vnode);
		return nextNode;
	};
	const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
		optimized = optimized || !!vnode.dynamicChildren;
		const { type, props, patchFlag, shapeFlag, dirs, transition } = vnode;
		const forcePatch = type === "input" || type === "option";
		if (forcePatch || patchFlag !== -1) {
			if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
			let needCallTransitionHooks = false;
			if (isTemplateNode(el)) {
				needCallTransitionHooks = needTransition(null, transition) && parentComponent && parentComponent.vnode.props && parentComponent.vnode.props.appear;
				const content = el.content.firstChild;
				if (needCallTransitionHooks) {
					const cls = content.getAttribute("class");
					if (cls) content.$cls = cls;
					transition.beforeEnter(content);
				}
				replaceNode(content, el, parentComponent);
				vnode.el = el = content;
			}
			if (shapeFlag & 16 && !(props && (props.innerHTML || props.textContent))) {
				let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
				while (next) {
					if (!isMismatchAllowed(el, 1)) logMismatchError();
					const cur = next;
					next = next.nextSibling;
					remove(cur);
				}
			} else if (shapeFlag & 8) {
				let clientText = vnode.children;
				if (clientText[0] === "\n" && (el.tagName === "PRE" || el.tagName === "TEXTAREA")) clientText = clientText.slice(1);
				const { textContent } = el;
				if (textContent !== clientText && textContent !== clientText.replace(/\r\n|\r/g, "\n")) {
					if (!isMismatchAllowed(el, 0)) logMismatchError();
					el.textContent = vnode.children;
				}
			}
			if (props) {
				if (forcePatch || !optimized || patchFlag & 48) {
					const isCustomElement = el.tagName.includes("-");
					for (const key in props) if (forcePatch && (key.endsWith("value") || key === "indeterminate") || isOn(key) && !isReservedProp(key) || key[0] === "." || isCustomElement && !isReservedProp(key)) patchProp(el, key, null, props[key], void 0, parentComponent);
				} else if (props.onClick) patchProp(el, "onClick", null, props.onClick, void 0, parentComponent);
				else if (patchFlag & 4 && /* @__PURE__ */ isReactive(props.style)) for (const key in props.style) props.style[key];
			}
			let vnodeHooks;
			if (vnodeHooks = props && props.onVnodeBeforeMount) invokeVNodeHook(vnodeHooks, parentComponent, vnode);
			if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
			if ((vnodeHooks = props && props.onVnodeMounted) || dirs || needCallTransitionHooks) queueEffectWithSuspense(() => {
				vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
				needCallTransitionHooks && transition.enter(el);
				dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
			}, parentSuspense);
		}
		return el.nextSibling;
	};
	const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
		optimized = optimized || !!parentVNode.dynamicChildren;
		const children = parentVNode.children;
		const l = children.length;
		for (let i = 0; i < l; i++) {
			const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
			const isText = vnode.type === Text;
			if (node) {
				if (isText && !optimized) {
					if (i + 1 < l && normalizeVNode(children[i + 1]).type === Text) {
						insert(createText(node.data.slice(vnode.children.length)), container, nextSibling(node));
						node.data = vnode.children;
					}
				}
				node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
			} else if (isText && !vnode.children) insert(vnode.el = createText(""), container);
			else {
				if (!isMismatchAllowed(container, 1)) logMismatchError();
				patch(null, vnode, container, null, parentComponent, parentSuspense, getContainerType(container), slotScopeIds);
			}
		}
		return node;
	};
	const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
		const { slotScopeIds: fragmentSlotScopeIds } = vnode;
		if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
		const container = parentNode(node);
		const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
		if (next && isComment(next) && next.data === "]") return nextSibling(vnode.anchor = next);
		else {
			logMismatchError();
			insert(vnode.anchor = createComment(`]`), container, next);
			return next;
		}
	};
	const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
		if (!isMismatchAllowed(node.parentElement, 1)) logMismatchError();
		vnode.el = null;
		if (isFragment) {
			const end = locateClosingAnchor(node);
			while (true) {
				const next2 = nextSibling(node);
				if (next2 && next2 !== end) remove(next2);
				else break;
			}
		}
		const next = nextSibling(node);
		const container = parentNode(node);
		remove(node);
		patch(null, vnode, container, next, parentComponent, parentSuspense, getContainerType(container), slotScopeIds);
		if (parentComponent) {
			parentComponent.vnode.el = vnode.el;
			updateHOCHostEl(parentComponent, vnode.el);
		}
		return next;
	};
	const locateClosingAnchor = (node, open = "[", close = "]") => {
		let match = 0;
		while (node) {
			node = nextSibling(node);
			if (node && isComment(node)) {
				if (node.data === open) match++;
				if (node.data === close) if (match === 0) return nextSibling(node);
				else match--;
			}
		}
		return node;
	};
	const replaceNode = (newNode, oldNode, parentComponent) => {
		const parentNode2 = oldNode.parentNode;
		if (parentNode2) parentNode2.replaceChild(newNode, oldNode);
		let parent = parentComponent;
		while (parent) {
			if (parent.vnode.el === oldNode) parent.vnode.el = parent.subTree.el = newNode;
			parent = parent.parent;
		}
	};
	const isTemplateNode = (node) => {
		return node.nodeType === 1 && node.tagName === "TEMPLATE";
	};
	return [hydrate, hydrateNode];
}
var allowMismatchAttr = "data-allow-mismatch";
var MismatchTypeString = {
	[0]: "text",
	[1]: "children",
	[2]: "class",
	[3]: "style",
	[4]: "attribute"
};
function isMismatchAllowed(el, allowedType) {
	if (allowedType === 0 || allowedType === 1) while (el && !el.hasAttribute(allowMismatchAttr)) el = el.parentElement;
	const allowedAttr = el && el.getAttribute(allowMismatchAttr);
	if (allowedAttr == null) return false;
	else if (allowedAttr === "") return true;
	else {
		const list = allowedAttr.split(",");
		if (allowedType === 0 && list.includes("children")) return true;
		return list.includes(MismatchTypeString[allowedType]);
	}
}
var requestIdleCallback = getGlobalThis$1().requestIdleCallback || ((cb) => setTimeout(cb, 1));
var cancelIdleCallback = getGlobalThis$1().cancelIdleCallback || ((id) => clearTimeout(id));
var hydrateOnIdle = (timeout = 1e4) => (hydrate) => {
	const id = requestIdleCallback(hydrate, { timeout });
	return () => cancelIdleCallback(id);
};
function elementIsVisibleInViewport(el) {
	const { top, left, bottom, right } = el.getBoundingClientRect();
	const { innerHeight, innerWidth } = window;
	return (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth);
}
var hydrateOnVisible = (opts) => (hydrate, forEach) => {
	const ob = new IntersectionObserver((entries) => {
		for (const e of entries) {
			if (!e.isIntersecting) continue;
			ob.disconnect();
			hydrate();
			break;
		}
	}, opts);
	forEach((el) => {
		if (!(el instanceof Element)) return;
		if (elementIsVisibleInViewport(el)) {
			hydrate();
			ob.disconnect();
			return false;
		}
		ob.observe(el);
	});
	return () => ob.disconnect();
};
var hydrateOnMediaQuery = (query) => (hydrate) => {
	if (query) {
		const mql = matchMedia(query);
		if (mql.matches) hydrate();
		else {
			mql.addEventListener("change", hydrate, { once: true });
			return () => mql.removeEventListener("change", hydrate);
		}
	}
};
var hydrateOnInteraction = (interactions = []) => (hydrate, forEach) => {
	if (isString$1(interactions)) interactions = [interactions];
	let hasHydrated = false;
	const doHydrate = (e) => {
		if (!hasHydrated) {
			hasHydrated = true;
			teardown();
			hydrate();
			e.target.dispatchEvent(new e.constructor(e.type, e));
		}
	};
	const teardown = () => {
		forEach((el) => {
			for (const i of interactions) el.removeEventListener(i, doHydrate);
		});
	};
	forEach((el) => {
		for (const i of interactions) el.addEventListener(i, doHydrate, { once: true });
	});
	return teardown;
};
function forEachElement(node, cb) {
	if (isComment(node) && node.data === "[") {
		let depth = 1;
		let next = node.nextSibling;
		while (next) {
			if (next.nodeType === 1) {
				if (cb(next) === false) break;
			} else if (isComment(next)) {
				if (next.data === "]") {
					if (--depth === 0) break;
				} else if (next.data === "[") depth++;
			}
			next = next.nextSibling;
		}
	} else cb(node);
}
var isAsyncWrapper = (i) => !!i.type.__asyncLoader;
/* @__NO_SIDE_EFFECTS__ */
function defineAsyncComponent(source) {
	if (isFunction$1(source)) source = { loader: source };
	const { loader, loadingComponent, errorComponent, delay = 200, hydrate: hydrateStrategy, timeout, suspensible = true, onError: userOnError } = source;
	let pendingRequest = null;
	let resolvedComp;
	let retries = 0;
	const retry = () => {
		retries++;
		pendingRequest = null;
		return load();
	};
	const load = () => {
		let thisRequest;
		return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
			err = err instanceof Error ? err : new Error(String(err));
			if (userOnError) return new Promise((resolve, reject) => {
				const userRetry = () => resolve(retry());
				const userFail = () => reject(err);
				userOnError(err, userRetry, userFail, retries + 1);
			});
			else throw err;
		}).then((comp) => {
			if (thisRequest !== pendingRequest && pendingRequest) return pendingRequest;
			if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) comp = comp.default;
			resolvedComp = comp;
			return comp;
		}));
	};
	return /* @__PURE__ */ defineComponent({
		name: "AsyncComponentWrapper",
		__asyncLoader: load,
		__asyncHydrate(el, instance, hydrate) {
			let patched = false;
			(instance.bu || (instance.bu = [])).push(() => patched = true);
			const performHydrate = () => {
				if (patched) return;
				hydrate();
			};
			const doHydrate = hydrateStrategy ? () => {
				const teardown = hydrateStrategy(performHydrate, (cb) => forEachElement(el, cb));
				if (teardown) (instance.bum || (instance.bum = [])).push(teardown);
			} : performHydrate;
			if (resolvedComp) doHydrate();
			else load().then(() => !instance.isUnmounted && doHydrate());
		},
		get __asyncResolved() {
			return resolvedComp;
		},
		setup() {
			const instance = currentInstance;
			markAsyncBoundary(instance);
			if (resolvedComp) return () => createInnerComp(resolvedComp, instance);
			const onError = (err) => {
				pendingRequest = null;
				handleError(err, instance, 13, !errorComponent);
			};
			if (suspensible && instance.suspense || isInSSRComponentSetup) return load().then((comp) => {
				return () => createInnerComp(comp, instance);
			}).catch((err) => {
				onError(err);
				return () => errorComponent ? createVNode(errorComponent, { error: err }) : null;
			});
			const loaded = /* @__PURE__ */ ref(false);
			const error = /* @__PURE__ */ ref();
			const delayed = /* @__PURE__ */ ref(!!delay);
			if (delay) setTimeout(() => {
				delayed.value = false;
			}, delay);
			if (timeout != null) setTimeout(() => {
				if (!loaded.value && !error.value) {
					const err = /* @__PURE__ */ new Error(`Async component timed out after ${timeout}ms.`);
					onError(err);
					error.value = err;
				}
			}, timeout);
			load().then(() => {
				loaded.value = true;
				if (instance.parent && isKeepAlive(instance.parent.vnode)) instance.parent.update();
			}).catch((err) => {
				onError(err);
				error.value = err;
			});
			return () => {
				if (loaded.value && resolvedComp) return createInnerComp(resolvedComp, instance);
				else if (error.value && errorComponent) return createVNode(errorComponent, { error: error.value });
				else if (loadingComponent && !delayed.value) return createInnerComp(loadingComponent, instance);
			};
		}
	});
}
function createInnerComp(comp, parent) {
	const { ref: ref2, props, children, ce } = parent.vnode;
	const vnode = createVNode(comp, props, children);
	vnode.ref = ref2;
	vnode.ce = ce;
	delete parent.vnode.ce;
	return vnode;
}
var isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
var KeepAlive = {
	name: `KeepAlive`,
	__isKeepAlive: true,
	props: {
		include: [
			String,
			RegExp,
			Array
		],
		exclude: [
			String,
			RegExp,
			Array
		],
		max: [String, Number]
	},
	setup(props, { slots }) {
		const instance = getCurrentInstance$1();
		const sharedContext = instance.ctx;
		if (!sharedContext.renderer) return () => {
			const children = slots.default && slots.default();
			return children && children.length === 1 ? children[0] : children;
		};
		const cache = /* @__PURE__ */ new Map();
		const keys = /* @__PURE__ */ new Set();
		let current = null;
		const parentSuspense = instance.suspense;
		const { renderer: { p: patch, m: move, um: _unmount, o: { createElement } } } = sharedContext;
		const storageContainer = createElement("div");
		sharedContext.activate = (vnode, container, anchor, namespace, optimized) => {
			const instance2 = vnode.component;
			move(vnode, container, anchor, 0, parentSuspense);
			patch(instance2.vnode, vnode, container, anchor, instance2, parentSuspense, namespace, vnode.slotScopeIds, optimized);
			queuePostRenderEffect(() => {
				instance2.isDeactivated = false;
				if (instance2.a) invokeArrayFns(instance2.a);
				const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
				if (vnodeHook) invokeVNodeHook(vnodeHook, instance2.parent, vnode);
			}, parentSuspense);
		};
		sharedContext.deactivate = (vnode) => {
			const instance2 = vnode.component;
			invalidateMount(instance2.m);
			invalidateMount(instance2.a);
			move(vnode, storageContainer, null, 1, parentSuspense);
			queuePostRenderEffect(() => {
				if (instance2.da) invokeArrayFns(instance2.da);
				const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
				if (vnodeHook) invokeVNodeHook(vnodeHook, instance2.parent, vnode);
				instance2.isDeactivated = true;
			}, parentSuspense);
		};
		function unmount(vnode) {
			resetShapeFlag(vnode);
			_unmount(vnode, instance, parentSuspense, true);
		}
		function pruneCache(filter) {
			cache.forEach((vnode, key) => {
				const name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : vnode.type);
				if (name && !filter(name)) pruneCacheEntry(key);
			});
		}
		function pruneCacheEntry(key) {
			const cached = cache.get(key);
			if (cached && (!current || !isSameVNodeType(cached, current))) unmount(cached);
			else if (current) resetShapeFlag(current);
			cache.delete(key);
			keys.delete(key);
		}
		watch(() => [props.include, props.exclude], ([include, exclude]) => {
			include && pruneCache((name) => matches(include, name));
			exclude && pruneCache((name) => !matches(exclude, name));
		}, {
			flush: "post",
			deep: true
		});
		let pendingCacheKey = null;
		const cacheSubtree = () => {
			if (pendingCacheKey != null) if (isSuspense(instance.subTree.type)) queuePostRenderEffect(() => {
				cache.set(pendingCacheKey, getInnerChild(instance.subTree));
			}, instance.subTree.suspense);
			else cache.set(pendingCacheKey, getInnerChild(instance.subTree));
		};
		onMounted(cacheSubtree);
		onUpdated(cacheSubtree);
		onBeforeUnmount(() => {
			cache.forEach((cached) => {
				const { subTree, suspense } = instance;
				const vnode = getInnerChild(subTree);
				if (cached.type === vnode.type && cached.key === vnode.key) {
					resetShapeFlag(vnode);
					const da = vnode.component.da;
					da && queuePostRenderEffect(da, suspense);
					return;
				}
				unmount(cached);
			});
		});
		return () => {
			pendingCacheKey = null;
			if (!slots.default) return current = null;
			const children = slots.default();
			const rawVNode = children[0];
			if (children.length > 1) {
				current = null;
				return children;
			} else if (!isVNode$1(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
				current = null;
				return rawVNode;
			}
			let vnode = getInnerChild(rawVNode);
			if (vnode.type === Comment) {
				current = null;
				return vnode;
			}
			const comp = vnode.type;
			const name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
			const { include, exclude, max } = props;
			if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
				vnode.shapeFlag &= -257;
				current = vnode;
				return rawVNode;
			}
			const key = vnode.key == null ? comp : vnode.key;
			const cachedVNode = cache.get(key);
			if (vnode.el) {
				vnode = cloneVNode(vnode);
				if (rawVNode.shapeFlag & 128) rawVNode.ssContent = vnode;
			}
			pendingCacheKey = key;
			if (cachedVNode) {
				vnode.el = cachedVNode.el;
				vnode.component = cachedVNode.component;
				if (vnode.transition) setTransitionHooks(vnode, vnode.transition);
				vnode.shapeFlag |= 512;
				keys.delete(key);
				keys.add(key);
			} else {
				keys.add(key);
				if (max && keys.size > parseInt(max, 10)) pruneCacheEntry(keys.values().next().value);
			}
			vnode.shapeFlag |= 256;
			current = vnode;
			return isSuspense(rawVNode.type) ? rawVNode : vnode;
		};
	}
};
function matches(pattern, name) {
	if (isArray$2(pattern)) return pattern.some((p) => matches(p, name));
	else if (isString$1(pattern)) return pattern.split(",").includes(name);
	else if (isRegExp$1(pattern)) {
		pattern.lastIndex = 0;
		return pattern.test(name);
	}
	return false;
}
function onActivated(hook, target) {
	registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
	registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
	const wrappedHook = hook.__wdc || (hook.__wdc = () => {
		let current = target;
		while (current) {
			if (current.isDeactivated) return;
			current = current.parent;
		}
		return hook();
	});
	injectHook(type, wrappedHook, target);
	if (target) {
		let current = target.parent;
		while (current && current.parent) {
			if (isKeepAlive(current.parent.vnode)) injectToKeepAliveRoot(wrappedHook, type, target, current);
			current = current.parent;
		}
	}
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
	const injected = injectHook(type, hook, keepAliveRoot, true);
	onUnmounted(() => {
		remove(keepAliveRoot[type], injected);
	}, target);
}
function resetShapeFlag(vnode) {
	vnode.shapeFlag &= -257;
	vnode.shapeFlag &= -513;
}
function getInnerChild(vnode) {
	return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
	if (target) {
		const hooks = target[type] || (target[type] = []);
		const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
			pauseTracking();
			const reset = setCurrentInstance(target);
			const res = callWithAsyncErrorHandling(hook, target, type, args);
			reset();
			resetTracking();
			return res;
		});
		if (prepend) hooks.unshift(wrappedHook);
		else hooks.push(wrappedHook);
		return wrappedHook;
	}
}
var createHook = (lifecycle) => (hook, target = currentInstance) => {
	if (!isInSSRComponentSetup || lifecycle === "sp") injectHook(lifecycle, (...args) => hook(...args), target);
};
var onBeforeMount = createHook("bm");
var onMounted = createHook("m");
var onBeforeUpdate = createHook("bu");
var onUpdated = createHook("u");
var onBeforeUnmount = createHook("bum");
var onUnmounted = createHook("um");
var onServerPrefetch = createHook("sp");
var onRenderTriggered = createHook("rtg");
var onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
	injectHook("ec", hook, target);
}
var COMPONENTS = "components";
var DIRECTIVES = "directives";
function resolveComponent(name, maybeSelfReference) {
	return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
var NULL_DYNAMIC_COMPONENT = /* @__PURE__ */ Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
	if (isString$1(component)) return resolveAsset(COMPONENTS, component, false) || component;
	else return component || NULL_DYNAMIC_COMPONENT;
}
function resolveDirective(name) {
	return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
	const instance = currentRenderingInstance || currentInstance;
	if (instance) {
		const Component = instance.type;
		if (type === COMPONENTS) {
			const selfName = getComponentName(Component, false);
			if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize$1(camelize(name)))) return Component;
		}
		const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
		if (!res && maybeSelfReference) return Component;
		return res;
	}
}
function resolve(registry, name) {
	return registry && (registry[name] || registry[camelize(name)] || registry[capitalize$1(camelize(name))]);
}
function renderList(source, renderItem, cache, index) {
	let ret;
	const cached = cache && cache[index];
	const sourceIsArray = isArray$2(source);
	if (sourceIsArray || isString$1(source)) {
		const sourceIsReactiveArray = sourceIsArray && /* @__PURE__ */ isReactive(source);
		let needsWrap = false;
		let isReadonlySource = false;
		if (sourceIsReactiveArray) {
			needsWrap = !/* @__PURE__ */ isShallow(source);
			isReadonlySource = /* @__PURE__ */ isReadonly(source);
			source = shallowReadArray(source);
		}
		ret = new Array(source.length);
		for (let i = 0, l = source.length; i < l; i++) ret[i] = renderItem(needsWrap ? isReadonlySource ? toReadonly(toReactive(source[i])) : toReactive(source[i]) : source[i], i, void 0, cached && cached[i]);
	} else if (typeof source === "number") {
		ret = new Array(source);
		for (let i = 0; i < source; i++) ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
	} else if (isObject$1(source)) if (source[Symbol.iterator]) ret = Array.from(source, (item, i) => renderItem(item, i, void 0, cached && cached[i]));
	else {
		const keys = Object.keys(source);
		ret = new Array(keys.length);
		for (let i = 0, l = keys.length; i < l; i++) {
			const key = keys[i];
			ret[i] = renderItem(source[key], key, i, cached && cached[i]);
		}
	}
	else ret = [];
	if (cache) cache[index] = ret;
	return ret;
}
function createSlots(slots, dynamicSlots) {
	for (let i = 0; i < dynamicSlots.length; i++) {
		const slot = dynamicSlots[i];
		if (isArray$2(slot)) for (let j = 0; j < slot.length; j++) slots[slot[j].name] = slot[j].fn;
		else if (slot) slots[slot.name] = slot.key ? (...args) => {
			const res = slot.fn(...args);
			if (res) res.key = slot.key;
			return res;
		} : slot.fn;
	}
	return slots;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
	if (currentRenderingInstance.ce || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.ce) {
		const hasProps = Object.keys(props).length > 0;
		if (name !== "default") props.name = name;
		return openBlock(), createBlock(Fragment, null, [createVNode("slot", props, fallback && fallback())], hasProps ? -2 : 64);
	}
	let slot = slots[name];
	if (slot && slot._c) slot._d = false;
	openBlock();
	const validSlotContent = slot && ensureValidVNode(slot(props));
	const slotKey = props.key || validSlotContent && validSlotContent.key;
	const rendered = createBlock(Fragment, { key: (slotKey && !isSymbol(slotKey) ? slotKey : `_${name}`) + (!validSlotContent && fallback ? "_fb" : "") }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
	if (!noSlotted && rendered.scopeId) rendered.slotScopeIds = [rendered.scopeId + "-s"];
	if (slot && slot._c) slot._d = true;
	return rendered;
}
function ensureValidVNode(vnodes) {
	return vnodes.some((child) => {
		if (!isVNode$1(child)) return true;
		if (child.type === Comment) return false;
		if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
		return true;
	}) ? vnodes : null;
}
function toHandlers(obj, preserveCaseIfNecessary) {
	const ret = {};
	for (const key in obj) ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : toHandlerKey(key)] = obj[key];
	return ret;
}
var getPublicInstance = (i) => {
	if (!i) return null;
	if (isStatefulComponent(i)) return getComponentPublicInstance(i);
	return getPublicInstance(i.parent);
};
var publicPropertiesMap = /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
	$: (i) => i,
	$el: (i) => i.vnode.el,
	$data: (i) => i.data,
	$props: (i) => i.props,
	$attrs: (i) => i.attrs,
	$slots: (i) => i.slots,
	$refs: (i) => i.refs,
	$parent: (i) => getPublicInstance(i.parent),
	$root: (i) => getPublicInstance(i.root),
	$host: (i) => i.ce,
	$emit: (i) => i.emit,
	$options: (i) => resolveMergedOptions(i),
	$forceUpdate: (i) => i.f || (i.f = () => {
		queueJob(i.update);
	}),
	$nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
	$watch: (i) => instanceWatch.bind(i)
});
var hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn$1(state, key);
var PublicInstanceProxyHandlers = {
	get({ _: instance }, key) {
		if (key === "__v_skip") return true;
		const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
		if (key[0] !== "$") {
			const n = accessCache[key];
			if (n !== void 0) switch (n) {
				case 1: return setupState[key];
				case 2: return data[key];
				case 4: return ctx[key];
				case 3: return props[key];
			}
			else if (hasSetupBinding(setupState, key)) {
				accessCache[key] = 1;
				return setupState[key];
			} else if (data !== EMPTY_OBJ && hasOwn$1(data, key)) {
				accessCache[key] = 2;
				return data[key];
			} else if (hasOwn$1(props, key)) {
				accessCache[key] = 3;
				return props[key];
			} else if (ctx !== EMPTY_OBJ && hasOwn$1(ctx, key)) {
				accessCache[key] = 4;
				return ctx[key];
			} else if (shouldCacheAccess) accessCache[key] = 0;
		}
		const publicGetter = publicPropertiesMap[key];
		let cssModule, globalProperties;
		if (publicGetter) {
			if (key === "$attrs") track(instance.attrs, "get", "");
			return publicGetter(instance);
		} else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) return cssModule;
		else if (ctx !== EMPTY_OBJ && hasOwn$1(ctx, key)) {
			accessCache[key] = 4;
			return ctx[key];
		} else if (globalProperties = appContext.config.globalProperties, hasOwn$1(globalProperties, key)) return globalProperties[key];
	},
	set({ _: instance }, key, value) {
		const { data, setupState, ctx } = instance;
		if (hasSetupBinding(setupState, key)) {
			setupState[key] = value;
			return true;
		} else if (data !== EMPTY_OBJ && hasOwn$1(data, key)) {
			data[key] = value;
			return true;
		} else if (hasOwn$1(instance.props, key)) return false;
		if (key[0] === "$" && key.slice(1) in instance) return false;
		else ctx[key] = value;
		return true;
	},
	has({ _: { data, setupState, accessCache, ctx, appContext, props, type } }, key) {
		let cssModules;
		return !!(accessCache[key] || data !== EMPTY_OBJ && key[0] !== "$" && hasOwn$1(data, key) || hasSetupBinding(setupState, key) || hasOwn$1(props, key) || hasOwn$1(ctx, key) || hasOwn$1(publicPropertiesMap, key) || hasOwn$1(appContext.config.globalProperties, key) || (cssModules = type.__cssModules) && cssModules[key]);
	},
	defineProperty(target, key, descriptor) {
		if (descriptor.get != null) target._.accessCache[key] = 0;
		else if (hasOwn$1(descriptor, "value")) this.set(target, key, descriptor.value, null);
		return Reflect.defineProperty(target, key, descriptor);
	}
};
var RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ extend({}, PublicInstanceProxyHandlers, {
	get(target, key) {
		if (key === Symbol.unscopables) return;
		return PublicInstanceProxyHandlers.get(target, key, target);
	},
	has(_, key) {
		return key[0] !== "_" && !isGloballyAllowed(key);
	}
});
function defineProps() {
	return null;
}
function defineEmits() {
	return null;
}
function defineExpose(exposed) {}
function defineOptions(options) {}
function defineSlots() {
	return null;
}
function defineModel() {}
function withDefaults(props, defaults) {
	return null;
}
function useSlots() {
	return getContext("useSlots").slots;
}
function useAttrs() {
	return getContext("useAttrs").attrs;
}
function getContext(calledFunctionName) {
	const i = getCurrentInstance$1();
	return i.setupContext || (i.setupContext = createSetupContext(i));
}
function normalizePropsOrEmits(props) {
	return isArray$2(props) ? props.reduce((normalized, p) => (normalized[p] = null, normalized), {}) : props;
}
function mergeDefaults(raw, defaults) {
	const props = normalizePropsOrEmits(raw);
	for (const key in defaults) {
		if (key.startsWith("__skip")) continue;
		let opt = props[key];
		if (opt) if (isArray$2(opt) || isFunction$1(opt)) opt = props[key] = {
			type: opt,
			default: defaults[key]
		};
		else opt.default = defaults[key];
		else if (opt === null) opt = props[key] = { default: defaults[key] };
		if (opt && defaults[`__skip_${key}`]) opt.skipFactory = true;
	}
	return props;
}
function mergeModels(a, b) {
	if (!a || !b) return a || b;
	if (isArray$2(a) && isArray$2(b)) return a.concat(b);
	return extend({}, normalizePropsOrEmits(a), normalizePropsOrEmits(b));
}
function createPropsRestProxy(props, excludedKeys) {
	const ret = {};
	for (const key in props) if (!excludedKeys.includes(key)) Object.defineProperty(ret, key, {
		enumerable: true,
		get: () => props[key]
	});
	return ret;
}
function withAsyncContext(getAwaitable) {
	const ctx = getCurrentInstance$1();
	const inSSRSetup = isInSSRComponentSetup;
	let awaitable = getAwaitable();
	unsetCurrentInstance();
	if (inSSRSetup) setInSSRSetupState(false);
	const restore = () => {
		setCurrentInstance(ctx);
		if (inSSRSetup) setInSSRSetupState(true);
	};
	const cleanup = () => {
		if (getCurrentInstance$1() !== ctx) ctx.scope.off();
		unsetCurrentInstance();
		if (inSSRSetup) setInSSRSetupState(false);
	};
	if (isPromise$1(awaitable)) awaitable = awaitable.catch((e) => {
		restore();
		Promise.resolve().then(() => Promise.resolve().then(cleanup));
		throw e;
	});
	return [awaitable, () => {
		restore();
		Promise.resolve().then(cleanup);
	}];
}
var shouldCacheAccess = true;
function applyOptions(instance) {
	const options = resolveMergedOptions(instance);
	const publicThis = instance.proxy;
	const ctx = instance.ctx;
	shouldCacheAccess = false;
	if (options.beforeCreate) callHook$1(options.beforeCreate, instance, "bc");
	const { data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, created, beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured, serverPrefetch, expose, inheritAttrs, components, directives, filters } = options;
	const checkDuplicateProperties = null;
	if (injectOptions) resolveInjections(injectOptions, ctx, checkDuplicateProperties);
	if (methods) for (const key in methods) {
		const methodHandler = methods[key];
		if (isFunction$1(methodHandler)) ctx[key] = methodHandler.bind(publicThis);
	}
	if (dataOptions) {
		const data = dataOptions.call(publicThis, publicThis);
		if (!isObject$1(data)) {} else instance.data = /* @__PURE__ */ reactive(data);
	}
	shouldCacheAccess = true;
	if (computedOptions) for (const key in computedOptions) {
		const opt = computedOptions[key];
		const c = computed({
			get: isFunction$1(opt) ? opt.bind(publicThis, publicThis) : isFunction$1(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP,
			set: !isFunction$1(opt) && isFunction$1(opt.set) ? opt.set.bind(publicThis) : NOOP
		});
		Object.defineProperty(ctx, key, {
			enumerable: true,
			configurable: true,
			get: () => c.value,
			set: (v) => c.value = v
		});
	}
	if (watchOptions) for (const key in watchOptions) createWatcher(watchOptions[key], ctx, publicThis, key);
	if (provideOptions) {
		const provides = isFunction$1(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
		Reflect.ownKeys(provides).forEach((key) => {
			provide(key, provides[key]);
		});
	}
	if (created) callHook$1(created, instance, "c");
	function registerLifecycleHook(register, hook) {
		if (isArray$2(hook)) hook.forEach((_hook) => register(_hook.bind(publicThis)));
		else if (hook) register(hook.bind(publicThis));
	}
	registerLifecycleHook(onBeforeMount, beforeMount);
	registerLifecycleHook(onMounted, mounted);
	registerLifecycleHook(onBeforeUpdate, beforeUpdate);
	registerLifecycleHook(onUpdated, updated);
	registerLifecycleHook(onActivated, activated);
	registerLifecycleHook(onDeactivated, deactivated);
	registerLifecycleHook(onErrorCaptured, errorCaptured);
	registerLifecycleHook(onRenderTracked, renderTracked);
	registerLifecycleHook(onRenderTriggered, renderTriggered);
	registerLifecycleHook(onBeforeUnmount, beforeUnmount);
	registerLifecycleHook(onUnmounted, unmounted);
	registerLifecycleHook(onServerPrefetch, serverPrefetch);
	if (isArray$2(expose)) {
		if (expose.length) {
			const exposed = instance.exposed || (instance.exposed = {});
			expose.forEach((key) => {
				Object.defineProperty(exposed, key, {
					get: () => publicThis[key],
					set: (val) => publicThis[key] = val,
					enumerable: true
				});
			});
		} else if (!instance.exposed) instance.exposed = {};
	}
	if (render && instance.render === NOOP) instance.render = render;
	if (inheritAttrs != null) instance.inheritAttrs = inheritAttrs;
	if (components) instance.components = components;
	if (directives) instance.directives = directives;
	if (serverPrefetch) markAsyncBoundary(instance);
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
	if (isArray$2(injectOptions)) injectOptions = normalizeInject(injectOptions);
	for (const key in injectOptions) {
		const opt = injectOptions[key];
		let injected;
		if (isObject$1(opt)) if ("default" in opt) injected = inject(opt.from || key, opt.default, true);
		else injected = inject(opt.from || key);
		else injected = inject(opt);
		if (/* @__PURE__ */ isRef(injected)) Object.defineProperty(ctx, key, {
			enumerable: true,
			configurable: true,
			get: () => injected.value,
			set: (v) => injected.value = v
		});
		else ctx[key] = injected;
	}
}
function callHook$1(hook, instance, type) {
	callWithAsyncErrorHandling(isArray$2(hook) ? hook.map((h) => h.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
	let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
	if (isString$1(raw)) {
		const handler = ctx[raw];
		if (isFunction$1(handler)) watch(getter, handler);
	} else if (isFunction$1(raw)) watch(getter, raw.bind(publicThis));
	else if (isObject$1(raw)) if (isArray$2(raw)) raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
	else {
		const handler = isFunction$1(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
		if (isFunction$1(handler)) watch(getter, handler, raw);
	}
}
function resolveMergedOptions(instance) {
	const base = instance.type;
	const { mixins, extends: extendsOptions } = base;
	const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
	const cached = cache.get(base);
	let resolved;
	if (cached) resolved = cached;
	else if (!globalMixins.length && !mixins && !extendsOptions) resolved = base;
	else {
		resolved = {};
		if (globalMixins.length) globalMixins.forEach((m) => mergeOptions$1(resolved, m, optionMergeStrategies, true));
		mergeOptions$1(resolved, base, optionMergeStrategies);
	}
	if (isObject$1(base)) cache.set(base, resolved);
	return resolved;
}
function mergeOptions$1(to, from, strats, asMixin = false) {
	const { mixins, extends: extendsOptions } = from;
	if (extendsOptions) mergeOptions$1(to, extendsOptions, strats, true);
	if (mixins) mixins.forEach((m) => mergeOptions$1(to, m, strats, true));
	for (const key in from) if (asMixin && key === "expose") {} else {
		const strat = internalOptionMergeStrats[key] || strats && strats[key];
		to[key] = strat ? strat(to[key], from[key]) : from[key];
	}
	return to;
}
var internalOptionMergeStrats = {
	data: mergeDataFn,
	props: mergeEmitsOrPropsOptions,
	emits: mergeEmitsOrPropsOptions,
	methods: mergeObjectOptions,
	computed: mergeObjectOptions,
	beforeCreate: mergeAsArray,
	created: mergeAsArray,
	beforeMount: mergeAsArray,
	mounted: mergeAsArray,
	beforeUpdate: mergeAsArray,
	updated: mergeAsArray,
	beforeDestroy: mergeAsArray,
	beforeUnmount: mergeAsArray,
	destroyed: mergeAsArray,
	unmounted: mergeAsArray,
	activated: mergeAsArray,
	deactivated: mergeAsArray,
	errorCaptured: mergeAsArray,
	serverPrefetch: mergeAsArray,
	components: mergeObjectOptions,
	directives: mergeObjectOptions,
	watch: mergeWatchOptions,
	provide: mergeDataFn,
	inject: mergeInject
};
function mergeDataFn(to, from) {
	if (!from) return to;
	if (!to) return from;
	return function mergedDataFn() {
		return extend(isFunction$1(to) ? to.call(this, this) : to, isFunction$1(from) ? from.call(this, this) : from);
	};
}
function mergeInject(to, from) {
	return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
	if (isArray$2(raw)) {
		const res = {};
		for (let i = 0; i < raw.length; i++) res[raw[i]] = raw[i];
		return res;
	}
	return raw;
}
function mergeAsArray(to, from) {
	return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
	return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
	if (to) {
		if (isArray$2(to) && isArray$2(from)) return [.../* @__PURE__ */ new Set([...to, ...from])];
		return extend(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(to), normalizePropsOrEmits(from != null ? from : {}));
	} else return from;
}
function mergeWatchOptions(to, from) {
	if (!to) return from;
	if (!from) return to;
	const merged = extend(/* @__PURE__ */ Object.create(null), to);
	for (const key in from) merged[key] = mergeAsArray(to[key], from[key]);
	return merged;
}
function createAppContext() {
	return {
		app: null,
		config: {
			isNativeTag: NO,
			performance: false,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var uid$1 = 0;
function createAppAPI(render, hydrate) {
	return function createApp(rootComponent, rootProps = null) {
		if (!isFunction$1(rootComponent)) rootComponent = extend({}, rootComponent);
		if (rootProps != null && !isObject$1(rootProps)) rootProps = null;
		const context = createAppContext();
		const installedPlugins = /* @__PURE__ */ new WeakSet();
		const pluginCleanupFns = [];
		let isMounted = false;
		const app = context.app = {
			_uid: uid$1++,
			_component: rootComponent,
			_props: rootProps,
			_container: null,
			_context: context,
			_instance: null,
			version,
			get config() {
				return context.config;
			},
			set config(v) {},
			use(plugin, ...options) {
				if (installedPlugins.has(plugin)) {} else if (plugin && isFunction$1(plugin.install)) {
					installedPlugins.add(plugin);
					plugin.install(app, ...options);
				} else if (isFunction$1(plugin)) {
					installedPlugins.add(plugin);
					plugin(app, ...options);
				}
				return app;
			},
			mixin(mixin) {
				if (!context.mixins.includes(mixin)) context.mixins.push(mixin);
				return app;
			},
			component(name, component) {
				if (!component) return context.components[name];
				context.components[name] = component;
				return app;
			},
			directive(name, directive) {
				if (!directive) return context.directives[name];
				context.directives[name] = directive;
				return app;
			},
			mount(rootContainer, isHydrate, namespace) {
				if (!isMounted) {
					const vnode = app._ceVNode || createVNode(rootComponent, rootProps);
					vnode.appContext = context;
					if (namespace === true) namespace = "svg";
					else if (namespace === false) namespace = void 0;
					if (isHydrate && hydrate) hydrate(vnode, rootContainer);
					else render(vnode, rootContainer, namespace);
					isMounted = true;
					app._container = rootContainer;
					rootContainer.__vue_app__ = app;
					return getComponentPublicInstance(vnode.component);
				}
			},
			onUnmount(cleanupFn) {
				pluginCleanupFns.push(cleanupFn);
			},
			unmount() {
				if (isMounted) {
					callWithAsyncErrorHandling(pluginCleanupFns, app._instance, 16);
					render(null, app._container);
					delete app._container.__vue_app__;
				}
			},
			provide(key, value) {
				context.provides[key] = value;
				return app;
			},
			runWithContext(fn) {
				const lastApp = currentApp;
				currentApp = app;
				try {
					return fn();
				} finally {
					currentApp = lastApp;
				}
			}
		};
		return app;
	};
}
var currentApp = null;
function useModel(props, name, options = EMPTY_OBJ) {
	const i = getCurrentInstance$1();
	const camelizedName = camelize(name);
	const hyphenatedName = hyphenate(name);
	const modifiers = getModelModifiers(props, camelizedName);
	const res = customRef((track, trigger) => {
		let localValue;
		let prevSetValue = EMPTY_OBJ;
		let prevEmittedValue;
		watchSyncEffect(() => {
			const propValue = props[camelizedName];
			if (hasChanged(localValue, propValue)) {
				localValue = propValue;
				trigger();
			}
		});
		return {
			get() {
				track();
				return options.get ? options.get(localValue) : localValue;
			},
			set(value) {
				const emittedValue = options.set ? options.set(value) : value;
				if (!hasChanged(emittedValue, localValue) && !(prevSetValue !== EMPTY_OBJ && hasChanged(value, prevSetValue))) return;
				const rawProps = i.vnode.props;
				if (!(rawProps && (name in rawProps || camelizedName in rawProps || hyphenatedName in rawProps) && (`onUpdate:${name}` in rawProps || `onUpdate:${camelizedName}` in rawProps || `onUpdate:${hyphenatedName}` in rawProps))) {
					localValue = value;
					trigger();
				}
				i.emit(`update:${name}`, emittedValue);
				if (hasChanged(value, emittedValue) && hasChanged(value, prevSetValue) && !hasChanged(emittedValue, prevEmittedValue)) trigger();
				prevSetValue = value;
				prevEmittedValue = emittedValue;
			}
		};
	});
	res[Symbol.iterator] = () => {
		let i2 = 0;
		return { next() {
			if (i2 < 2) return {
				value: i2++ ? modifiers || EMPTY_OBJ : res,
				done: false
			};
			else return { done: true };
		} };
	};
	return res;
}
var getModelModifiers = (props, modelName) => {
	return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`];
};
function emit(instance, event, ...rawArgs) {
	if (instance.isUnmounted) return;
	const props = instance.vnode.props || EMPTY_OBJ;
	let args = rawArgs;
	const isModelListener = event.startsWith("update:");
	const modifiers = isModelListener && getModelModifiers(props, event.slice(7));
	if (modifiers) {
		if (modifiers.trim) args = rawArgs.map((a) => isString$1(a) ? a.trim() : a);
		if (modifiers.number) args = rawArgs.map(looseToNumber);
	}
	let handlerName;
	let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
	if (!handler && isModelListener) handler = props[handlerName = toHandlerKey(hyphenate(event))];
	if (handler) callWithAsyncErrorHandling(handler, instance, 6, args);
	const onceHandler = props[handlerName + `Once`];
	if (onceHandler) {
		if (!instance.emitted) instance.emitted = {};
		else if (instance.emitted[handlerName]) return;
		instance.emitted[handlerName] = true;
		callWithAsyncErrorHandling(onceHandler, instance, 6, args);
	}
}
var mixinEmitsCache = /* @__PURE__ */ new WeakMap();
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
	const cache = asMixin ? mixinEmitsCache : appContext.emitsCache;
	const cached = cache.get(comp);
	if (cached !== void 0) return cached;
	const raw = comp.emits;
	let normalized = {};
	let hasExtends = false;
	if (!isFunction$1(comp)) {
		const extendEmits = (raw2) => {
			const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
			if (normalizedFromExtend) {
				hasExtends = true;
				extend(normalized, normalizedFromExtend);
			}
		};
		if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendEmits);
		if (comp.extends) extendEmits(comp.extends);
		if (comp.mixins) comp.mixins.forEach(extendEmits);
	}
	if (!raw && !hasExtends) {
		if (isObject$1(comp)) cache.set(comp, null);
		return null;
	}
	if (isArray$2(raw)) raw.forEach((key) => normalized[key] = null);
	else extend(normalized, raw);
	if (isObject$1(comp)) cache.set(comp, normalized);
	return normalized;
}
function isEmitListener(options, key) {
	if (!options || !isOn(key)) return false;
	key = key.slice(2).replace(/Once$/, "");
	return hasOwn$1(options, key[0].toLowerCase() + key.slice(1)) || hasOwn$1(options, hyphenate(key)) || hasOwn$1(options, key);
}
function renderComponentRoot(instance) {
	const { type: Component, vnode, proxy, withProxy, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, props, data, setupState, ctx, inheritAttrs } = instance;
	const prev = setCurrentRenderingInstance(instance);
	let result;
	let fallthroughAttrs;
	try {
		if (vnode.shapeFlag & 4) {
			const proxyToUse = withProxy || proxy;
			const thisProxy = proxyToUse;
			result = normalizeVNode(render.call(thisProxy, proxyToUse, renderCache, props, setupState, data, ctx));
			fallthroughAttrs = attrs;
		} else {
			const render2 = Component;
			result = normalizeVNode(render2.length > 1 ? render2(props, {
				attrs,
				slots,
				emit
			}) : render2(props, null));
			fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
		}
	} catch (err) {
		blockStack.length = 0;
		handleError(err, instance, 1);
		result = createVNode(Comment);
	}
	let root = result;
	if (fallthroughAttrs && inheritAttrs !== false) {
		const keys = Object.keys(fallthroughAttrs);
		const { shapeFlag } = root;
		if (keys.length) {
			if (shapeFlag & 7) {
				if (propsOptions && keys.some(isModelListener)) fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
				root = cloneVNode(root, fallthroughAttrs, false, true);
			}
		}
	}
	if (vnode.dirs) {
		root = cloneVNode(root, null, false, true);
		root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
	}
	if (vnode.transition) setTransitionHooks(root, vnode.transition);
	result = root;
	setCurrentRenderingInstance(prev);
	return result;
}
function filterSingleRoot(children, recurse = true) {
	let singleRoot;
	for (let i = 0; i < children.length; i++) {
		const child = children[i];
		if (isVNode$1(child)) {
			if (child.type !== Comment || child.children === "v-if") if (singleRoot) return;
			else singleRoot = child;
		} else return;
	}
	return singleRoot;
}
var getFunctionalFallthrough = (attrs) => {
	let res;
	for (const key in attrs) if (key === "class" || key === "style" || isOn(key)) (res || (res = {}))[key] = attrs[key];
	return res;
};
var filterModelListeners = (attrs, props) => {
	const res = {};
	for (const key in attrs) if (!isModelListener(key) || !(key.slice(9) in props)) res[key] = attrs[key];
	return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
	const { props: prevProps, children: prevChildren, component } = prevVNode;
	const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
	const emits = component.emitsOptions;
	if (nextVNode.dirs || nextVNode.transition) return true;
	if (optimized && patchFlag >= 0) {
		if (patchFlag & 1024) return true;
		if (patchFlag & 16) {
			if (!prevProps) return !!nextProps;
			return hasPropsChanged(prevProps, nextProps, emits);
		} else if (patchFlag & 8) {
			const dynamicProps = nextVNode.dynamicProps;
			for (let i = 0; i < dynamicProps.length; i++) {
				const key = dynamicProps[i];
				if (hasPropValueChanged(nextProps, prevProps, key) && !isEmitListener(emits, key)) return true;
			}
		}
	} else {
		if (prevChildren || nextChildren) {
			if (!nextChildren || !nextChildren.$stable) return true;
		}
		if (prevProps === nextProps) return false;
		if (!prevProps) return !!nextProps;
		if (!nextProps) return true;
		return hasPropsChanged(prevProps, nextProps, emits);
	}
	return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
	const nextKeys = Object.keys(nextProps);
	if (nextKeys.length !== Object.keys(prevProps).length) return true;
	for (let i = 0; i < nextKeys.length; i++) {
		const key = nextKeys[i];
		if (hasPropValueChanged(nextProps, prevProps, key) && !isEmitListener(emitsOptions, key)) return true;
	}
	return false;
}
function hasPropValueChanged(nextProps, prevProps, key) {
	const nextProp = nextProps[key];
	const prevProp = prevProps[key];
	if (key === "style" && isObject$1(nextProp) && isObject$1(prevProp)) return !looseEqual(nextProp, prevProp);
	return nextProp !== prevProp;
}
function updateHOCHostEl({ vnode, parent }, el) {
	while (parent) {
		const root = parent.subTree;
		if (root.suspense && root.suspense.activeBranch === vnode) root.el = vnode.el;
		if (root === vnode) {
			(vnode = parent.vnode).el = el;
			parent = parent.parent;
		} else break;
	}
}
var internalObjectProto = {};
var createInternalObject = () => Object.create(internalObjectProto);
var isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
	const props = {};
	const attrs = createInternalObject();
	instance.propsDefaults = /* @__PURE__ */ Object.create(null);
	setFullProps(instance, rawProps, props, attrs);
	for (const key in instance.propsOptions[0]) if (!(key in props)) props[key] = void 0;
	if (isStateful) instance.props = isSSR ? props : /* @__PURE__ */ shallowReactive(props);
	else if (!instance.type.props) instance.props = attrs;
	else instance.props = props;
	instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
	const { props, attrs, vnode: { patchFlag } } = instance;
	const rawCurrentProps = /* @__PURE__ */ toRaw(props);
	const [options] = instance.propsOptions;
	let hasAttrsChanged = false;
	if ((optimized || patchFlag > 0) && !(patchFlag & 16)) {
		if (patchFlag & 8) {
			const propsToUpdate = instance.vnode.dynamicProps;
			for (let i = 0; i < propsToUpdate.length; i++) {
				let key = propsToUpdate[i];
				if (isEmitListener(instance.emitsOptions, key)) continue;
				const value = rawProps[key];
				if (options) if (hasOwn$1(attrs, key)) {
					if (value !== attrs[key]) {
						attrs[key] = value;
						hasAttrsChanged = true;
					}
				} else {
					const camelizedKey = camelize(key);
					props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
				}
				else if (value !== attrs[key]) {
					attrs[key] = value;
					hasAttrsChanged = true;
				}
			}
		}
	} else {
		if (setFullProps(instance, rawProps, props, attrs)) hasAttrsChanged = true;
		let kebabKey;
		for (const key in rawCurrentProps) if (!rawProps || !hasOwn$1(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn$1(rawProps, kebabKey))) if (options) {
			if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
		} else delete props[key];
		if (attrs !== rawCurrentProps) {
			for (const key in attrs) if (!rawProps || !hasOwn$1(rawProps, key) && true) {
				delete attrs[key];
				hasAttrsChanged = true;
			}
		}
	}
	if (hasAttrsChanged) trigger(instance.attrs, "set", "");
}
function setFullProps(instance, rawProps, props, attrs) {
	const [options, needCastKeys] = instance.propsOptions;
	let hasAttrsChanged = false;
	let rawCastValues;
	if (rawProps) for (let key in rawProps) {
		if (isReservedProp(key)) continue;
		const value = rawProps[key];
		let camelKey;
		if (options && hasOwn$1(options, camelKey = camelize(key))) if (!needCastKeys || !needCastKeys.includes(camelKey)) props[camelKey] = value;
		else (rawCastValues || (rawCastValues = {}))[camelKey] = value;
		else if (!isEmitListener(instance.emitsOptions, key)) {
			if (!(key in attrs) || value !== attrs[key]) {
				attrs[key] = value;
				hasAttrsChanged = true;
			}
		}
	}
	if (needCastKeys) {
		const rawCurrentProps = /* @__PURE__ */ toRaw(props);
		const castValues = rawCastValues || EMPTY_OBJ;
		for (let i = 0; i < needCastKeys.length; i++) {
			const key = needCastKeys[i];
			props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn$1(castValues, key));
		}
	}
	return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
	const opt = options[key];
	if (opt != null) {
		const hasDefault = hasOwn$1(opt, "default");
		if (hasDefault && value === void 0) {
			const defaultValue = opt.default;
			if (opt.type !== Function && !opt.skipFactory && isFunction$1(defaultValue)) {
				const { propsDefaults } = instance;
				if (key in propsDefaults) value = propsDefaults[key];
				else {
					const reset = setCurrentInstance(instance);
					value = propsDefaults[key] = defaultValue.call(null, props);
					reset();
				}
			} else value = defaultValue;
			if (instance.ce) instance.ce._setProp(key, value);
		}
		if (opt[0]) {
			if (isAbsent && !hasDefault) value = false;
			else if (opt[1] && (value === "" || value === hyphenate(key))) value = true;
		}
	}
	return value;
}
var mixinPropsCache = /* @__PURE__ */ new WeakMap();
function normalizePropsOptions(comp, appContext, asMixin = false) {
	const cache = asMixin ? mixinPropsCache : appContext.propsCache;
	const cached = cache.get(comp);
	if (cached) return cached;
	const raw = comp.props;
	const normalized = {};
	const needCastKeys = [];
	let hasExtends = false;
	if (!isFunction$1(comp)) {
		const extendProps = (raw2) => {
			hasExtends = true;
			const [props, keys] = normalizePropsOptions(raw2, appContext, true);
			extend(normalized, props);
			if (keys) needCastKeys.push(...keys);
		};
		if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendProps);
		if (comp.extends) extendProps(comp.extends);
		if (comp.mixins) comp.mixins.forEach(extendProps);
	}
	if (!raw && !hasExtends) {
		if (isObject$1(comp)) cache.set(comp, EMPTY_ARR);
		return EMPTY_ARR;
	}
	if (isArray$2(raw)) for (let i = 0; i < raw.length; i++) {
		const normalizedKey = camelize(raw[i]);
		if (validatePropName(normalizedKey)) normalized[normalizedKey] = EMPTY_OBJ;
	}
	else if (raw) for (const key in raw) {
		const normalizedKey = camelize(key);
		if (validatePropName(normalizedKey)) {
			const opt = raw[key];
			const prop = normalized[normalizedKey] = isArray$2(opt) || isFunction$1(opt) ? { type: opt } : extend({}, opt);
			const propType = prop.type;
			let shouldCast = false;
			let shouldCastTrue = true;
			if (isArray$2(propType)) for (let index = 0; index < propType.length; ++index) {
				const type = propType[index];
				const typeName = isFunction$1(type) && type.name;
				if (typeName === "Boolean") {
					shouldCast = true;
					break;
				} else if (typeName === "String") shouldCastTrue = false;
			}
			else shouldCast = isFunction$1(propType) && propType.name === "Boolean";
			prop[0] = shouldCast;
			prop[1] = shouldCastTrue;
			if (shouldCast || hasOwn$1(prop, "default")) needCastKeys.push(normalizedKey);
		}
	}
	const res = [normalized, needCastKeys];
	if (isObject$1(comp)) cache.set(comp, res);
	return res;
}
function validatePropName(key) {
	if (key[0] !== "$" && !isReservedProp(key)) return true;
	return false;
}
var isInternalKey = (key) => key === "_" || key === "_ctx" || key === "$stable";
var normalizeSlotValue = (value) => isArray$2(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
var normalizeSlot$1 = (key, rawSlot, ctx) => {
	if (rawSlot._n) return rawSlot;
	const normalized = withCtx((...args) => {
		return normalizeSlotValue(rawSlot(...args));
	}, ctx);
	normalized._c = false;
	return normalized;
};
var normalizeObjectSlots = (rawSlots, slots, instance) => {
	const ctx = rawSlots._ctx;
	for (const key in rawSlots) {
		if (isInternalKey(key)) continue;
		const value = rawSlots[key];
		if (isFunction$1(value)) slots[key] = normalizeSlot$1(key, value, ctx);
		else if (value != null) {
			const normalized = normalizeSlotValue(value);
			slots[key] = () => normalized;
		}
	}
};
var normalizeVNodeSlots = (instance, children) => {
	const normalized = normalizeSlotValue(children);
	instance.slots.default = () => normalized;
};
var assignSlots = (slots, children, optimized) => {
	for (const key in children) if (optimized || !isInternalKey(key)) slots[key] = children[key];
};
var initSlots = (instance, children, optimized) => {
	const slots = instance.slots = createInternalObject();
	if (instance.vnode.shapeFlag & 32) {
		const type = children._;
		if (type) {
			assignSlots(slots, children, optimized);
			if (optimized) def(slots, "_", type, true);
		} else normalizeObjectSlots(children, slots);
	} else if (children) normalizeVNodeSlots(instance, children);
};
var updateSlots = (instance, children, optimized) => {
	const { vnode, slots } = instance;
	let needDeletionCheck = true;
	let deletionComparisonTarget = EMPTY_OBJ;
	if (vnode.shapeFlag & 32) {
		const type = children._;
		if (type) if (optimized && type === 1) needDeletionCheck = false;
		else assignSlots(slots, children, optimized);
		else {
			needDeletionCheck = !children.$stable;
			normalizeObjectSlots(children, slots);
		}
		deletionComparisonTarget = children;
	} else if (children) {
		normalizeVNodeSlots(instance, children);
		deletionComparisonTarget = { default: 1 };
	}
	if (needDeletionCheck) {
		for (const key in slots) if (!isInternalKey(key) && deletionComparisonTarget[key] == null) delete slots[key];
	}
};
function initFeatureFlags$2() {}
var queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
	return baseCreateRenderer(options);
}
function createHydrationRenderer(options) {
	return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
	initFeatureFlags$2();
	const target = getGlobalThis$1();
	target.__VUE__ = true;
	const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, insertStaticContent: hostInsertStaticContent } = options;
	const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
		if (n1 === n2) return;
		if (n1 && !isSameVNodeType(n1, n2)) {
			anchor = getNextHostNode(n1);
			unmount(n1, parentComponent, parentSuspense, true);
			n1 = null;
		}
		if (n2.patchFlag === -2) {
			optimized = false;
			n2.dynamicChildren = null;
		}
		const { type, ref, shapeFlag } = n2;
		switch (type) {
			case Text:
				processText(n1, n2, container, anchor);
				break;
			case Comment:
				processCommentNode(n1, n2, container, anchor);
				break;
			case Static:
				if (n1 == null) mountStaticNode(n2, container, anchor, namespace);
				break;
			case Fragment:
				processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				break;
			default: if (shapeFlag & 1) processElement(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else if (shapeFlag & 6) processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else if (shapeFlag & 64) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
			else if (shapeFlag & 128) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
		}
		if (ref != null && parentComponent) setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
		else if (ref == null && n1 && n1.ref != null) setRef(n1.ref, null, parentSuspense, n1, true);
	};
	const processText = (n1, n2, container, anchor) => {
		if (n1 == null) hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
		else {
			const el = n2.el = n1.el;
			if (n2.children !== n1.children) hostSetText(el, n2.children);
		}
	};
	const processCommentNode = (n1, n2, container, anchor) => {
		if (n1 == null) hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
		else n2.el = n1.el;
	};
	const mountStaticNode = (n2, container, anchor, namespace) => {
		[n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace, n2.el, n2.anchor);
	};
	const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
		let next;
		while (el && el !== anchor) {
			next = hostNextSibling(el);
			hostInsert(el, container, nextSibling);
			el = next;
		}
		hostInsert(anchor, container, nextSibling);
	};
	const removeStaticNode = ({ el, anchor }) => {
		let next;
		while (el && el !== anchor) {
			next = hostNextSibling(el);
			hostRemove(el);
			el = next;
		}
		hostRemove(anchor);
	};
	const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		if (n2.type === "svg") namespace = "svg";
		else if (n2.type === "math") namespace = "mathml";
		if (n1 == null) mountElement(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		else {
			const customElement = n1.el && n1.el._isVueCE ? n1.el : null;
			try {
				if (customElement) customElement._beginPatch();
				patchElement(n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			} finally {
				if (customElement) customElement._endPatch();
			}
		}
	};
	const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		let el;
		let vnodeHook;
		const { props, shapeFlag, transition, dirs } = vnode;
		el = vnode.el = hostCreateElement(vnode.type, namespace, props && props.is, props);
		if (shapeFlag & 8) hostSetElementText(el, vnode.children);
		else if (shapeFlag & 16) mountChildren(vnode.children, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(vnode, namespace), slotScopeIds, optimized);
		if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
		setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
		if (props) {
			for (const key in props) if (key !== "value" && !isReservedProp(key)) hostPatchProp(el, key, null, props[key], namespace, parentComponent);
			if ("value" in props) hostPatchProp(el, "value", null, props.value, namespace);
			if (vnodeHook = props.onVnodeBeforeMount) invokeVNodeHook(vnodeHook, parentComponent, vnode);
		}
		if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
		const needCallTransitionHooks = needTransition(parentSuspense, transition);
		if (needCallTransitionHooks) transition.beforeEnter(el);
		hostInsert(el, container, anchor);
		if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) queuePostRenderEffect(() => {
			vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
			needCallTransitionHooks && transition.enter(el);
			dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
		}, parentSuspense);
	};
	const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
		if (scopeId) hostSetScopeId(el, scopeId);
		if (slotScopeIds) for (let i = 0; i < slotScopeIds.length; i++) hostSetScopeId(el, slotScopeIds[i]);
		if (parentComponent) {
			let subTree = parentComponent.subTree;
			if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
				const parentVNode = parentComponent.vnode;
				setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
			}
		}
	};
	const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
		for (let i = start; i < children.length; i++) patch(null, children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
	};
	const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		const el = n2.el = n1.el;
		let { patchFlag, dynamicChildren, dirs } = n2;
		patchFlag |= n1.patchFlag & 16;
		const oldProps = n1.props || EMPTY_OBJ;
		const newProps = n2.props || EMPTY_OBJ;
		let vnodeHook;
		parentComponent && toggleRecurse(parentComponent, false);
		if (vnodeHook = newProps.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
		if (dirs) invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
		parentComponent && toggleRecurse(parentComponent, true);
		if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) hostSetElementText(el, "");
		if (dynamicChildren) patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds);
		else if (!optimized) patchChildren(n1, n2, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds, false);
		if (patchFlag > 0) {
			if (patchFlag & 16) patchProps(el, oldProps, newProps, parentComponent, namespace);
			else {
				if (patchFlag & 2) {
					if (oldProps.class !== newProps.class) hostPatchProp(el, "class", null, newProps.class, namespace);
				}
				if (patchFlag & 4) hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
				if (patchFlag & 8) {
					const propsToUpdate = n2.dynamicProps;
					for (let i = 0; i < propsToUpdate.length; i++) {
						const key = propsToUpdate[i];
						const prev = oldProps[key];
						const next = newProps[key];
						if (next !== prev || key === "value") hostPatchProp(el, key, prev, next, namespace, parentComponent);
					}
				}
			}
			if (patchFlag & 1) {
				if (n1.children !== n2.children) hostSetElementText(el, n2.children);
			}
		} else if (!optimized && dynamicChildren == null) patchProps(el, oldProps, newProps, parentComponent, namespace);
		if ((vnodeHook = newProps.onVnodeUpdated) || dirs) queuePostRenderEffect(() => {
			vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
			dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
		}, parentSuspense);
	};
	const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
		for (let i = 0; i < newChildren.length; i++) {
			const oldVNode = oldChildren[i];
			const newVNode = newChildren[i];
			patch(oldVNode, newVNode, oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & 198) ? hostParentNode(oldVNode.el) : fallbackContainer, null, parentComponent, parentSuspense, namespace, slotScopeIds, true);
		}
	};
	const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
		if (oldProps !== newProps) {
			if (oldProps !== EMPTY_OBJ) {
				for (const key in oldProps) if (!isReservedProp(key) && !(key in newProps)) hostPatchProp(el, key, oldProps[key], null, namespace, parentComponent);
			}
			for (const key in newProps) {
				if (isReservedProp(key)) continue;
				const next = newProps[key];
				const prev = oldProps[key];
				if (next !== prev && key !== "value") hostPatchProp(el, key, prev, next, namespace, parentComponent);
			}
			if ("value" in newProps) hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
		}
	};
	const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
		const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
		let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
		if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
		if (n1 == null) {
			hostInsert(fragmentStartAnchor, container, anchor);
			hostInsert(fragmentEndAnchor, container, anchor);
			mountChildren(n2.children || [], container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		} else if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren && n1.dynamicChildren.length === dynamicChildren.length) {
			patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, namespace, slotScopeIds);
			if (n2.key != null || parentComponent && n2 === parentComponent.subTree) traverseStaticChildren(n1, n2, true);
		} else patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
	};
	const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		n2.slotScopeIds = slotScopeIds;
		if (n1 == null) if (n2.shapeFlag & 512) parentComponent.ctx.activate(n2, container, anchor, namespace, optimized);
		else mountComponent(n2, container, anchor, parentComponent, parentSuspense, namespace, optimized);
		else updateComponent(n1, n2, optimized);
	};
	const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
		const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
		if (isKeepAlive(initialVNode)) instance.ctx.renderer = internals;
		setupComponent(instance, false, optimized);
		if (instance.asyncDep) {
			parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
			if (!initialVNode.el) {
				const placeholder = instance.subTree = createVNode(Comment);
				processCommentNode(null, placeholder, container, anchor);
				initialVNode.placeholder = placeholder.el;
			}
		} else setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, namespace, optimized);
	};
	const updateComponent = (n1, n2, optimized) => {
		const instance = n2.component = n1.component;
		if (shouldUpdateComponent(n1, n2, optimized)) if (instance.asyncDep && !instance.asyncResolved) {
			updateComponentPreRender(instance, n2, optimized);
			return;
		} else {
			instance.next = n2;
			instance.update();
		}
		else {
			n2.el = n1.el;
			instance.vnode = n2;
		}
	};
	const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
		const componentUpdateFn = () => {
			if (!instance.isMounted) {
				let vnodeHook;
				const { el, props } = initialVNode;
				const { bm, m, parent, root, type } = instance;
				const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
				toggleRecurse(instance, false);
				if (bm) invokeArrayFns(bm);
				if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) invokeVNodeHook(vnodeHook, parent, initialVNode);
				toggleRecurse(instance, true);
				if (el && hydrateNode) {
					const hydrateSubTree = () => {
						instance.subTree = renderComponentRoot(instance);
						hydrateNode(el, instance.subTree, instance, parentSuspense, null);
					};
					if (isAsyncWrapperVNode && type.__asyncHydrate) type.__asyncHydrate(el, instance, hydrateSubTree);
					else hydrateSubTree();
				} else {
					if (root.ce && root.ce._hasShadowRoot()) root.ce._injectChildStyle(type, instance.parent ? instance.parent.type : void 0);
					const subTree = instance.subTree = renderComponentRoot(instance);
					patch(null, subTree, container, anchor, instance, parentSuspense, namespace);
					initialVNode.el = subTree.el;
				}
				if (m) queuePostRenderEffect(m, parentSuspense);
				if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
					const scopedInitialVNode = initialVNode;
					queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
				}
				if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) instance.a && queuePostRenderEffect(instance.a, parentSuspense);
				instance.isMounted = true;
				initialVNode = container = anchor = null;
			} else {
				let { next, bu, u, parent, vnode } = instance;
				{
					const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
					if (nonHydratedAsyncRoot) {
						if (next) {
							next.el = vnode.el;
							updateComponentPreRender(instance, next, optimized);
						}
						nonHydratedAsyncRoot.asyncDep.then(() => {
							queuePostRenderEffect(() => {
								if (!instance.isUnmounted) update();
							}, parentSuspense);
						});
						return;
					}
				}
				let originNext = next;
				let vnodeHook;
				toggleRecurse(instance, false);
				if (next) {
					next.el = vnode.el;
					updateComponentPreRender(instance, next, optimized);
				} else next = vnode;
				if (bu) invokeArrayFns(bu);
				if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parent, next, vnode);
				toggleRecurse(instance, true);
				const nextTree = renderComponentRoot(instance);
				const prevTree = instance.subTree;
				instance.subTree = nextTree;
				patch(prevTree, nextTree, hostParentNode(prevTree.el), getNextHostNode(prevTree), instance, parentSuspense, namespace);
				next.el = nextTree.el;
				if (originNext === null) updateHOCHostEl(instance, nextTree.el);
				if (u) queuePostRenderEffect(u, parentSuspense);
				if (vnodeHook = next.props && next.props.onVnodeUpdated) queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
			}
		};
		instance.scope.on();
		const effect = instance.effect = new ReactiveEffect(componentUpdateFn);
		instance.scope.off();
		const update = instance.update = effect.run.bind(effect);
		const job = instance.job = effect.runIfDirty.bind(effect);
		job.i = instance;
		job.id = instance.uid;
		effect.scheduler = () => queueJob(job);
		toggleRecurse(instance, true);
		update();
	};
	const updateComponentPreRender = (instance, nextVNode, optimized) => {
		nextVNode.component = instance;
		const prevProps = instance.vnode.props;
		instance.vnode = nextVNode;
		instance.next = null;
		updateProps(instance, nextVNode.props, prevProps, optimized);
		updateSlots(instance, nextVNode.children, optimized);
		pauseTracking();
		flushPreFlushCbs(instance);
		resetTracking();
	};
	const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
		const c1 = n1 && n1.children;
		const prevShapeFlag = n1 ? n1.shapeFlag : 0;
		const c2 = n2.children;
		const { patchFlag, shapeFlag } = n2;
		if (patchFlag > 0) {
			if (patchFlag & 128) {
				patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				return;
			} else if (patchFlag & 256) {
				patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				return;
			}
		}
		if (shapeFlag & 8) {
			if (prevShapeFlag & 16) unmountChildren(c1, parentComponent, parentSuspense);
			if (c2 !== c1) hostSetElementText(container, c2);
		} else if (prevShapeFlag & 16) if (shapeFlag & 16) patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		else unmountChildren(c1, parentComponent, parentSuspense, true);
		else {
			if (prevShapeFlag & 8) hostSetElementText(container, "");
			if (shapeFlag & 16) mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		}
	};
	const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		c1 = c1 || EMPTY_ARR;
		c2 = c2 || EMPTY_ARR;
		const oldLength = c1.length;
		const newLength = c2.length;
		const commonLength = Math.min(oldLength, newLength);
		let i;
		for (i = 0; i < commonLength; i++) {
			const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
			patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
		}
		if (oldLength > newLength) unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
		else mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, commonLength);
	};
	const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
		let i = 0;
		const l2 = c2.length;
		let e1 = c1.length - 1;
		let e2 = l2 - 1;
		while (i <= e1 && i <= e2) {
			const n1 = c1[i];
			const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
			if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else break;
			i++;
		}
		while (i <= e1 && i <= e2) {
			const n1 = c1[e1];
			const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
			if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
			else break;
			e1--;
			e2--;
		}
		if (i > e1) {
			if (i <= e2) {
				const nextPos = e2 + 1;
				const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
				while (i <= e2) {
					patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
					i++;
				}
			}
		} else if (i > e2) while (i <= e1) {
			unmount(c1[i], parentComponent, parentSuspense, true);
			i++;
		}
		else {
			const s1 = i;
			const s2 = i;
			const keyToNewIndexMap = /* @__PURE__ */ new Map();
			for (i = s2; i <= e2; i++) {
				const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
				if (nextChild.key != null) keyToNewIndexMap.set(nextChild.key, i);
			}
			let j;
			let patched = 0;
			const toBePatched = e2 - s2 + 1;
			let moved = false;
			let maxNewIndexSoFar = 0;
			const newIndexToOldIndexMap = new Array(toBePatched);
			for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
			for (i = s1; i <= e1; i++) {
				const prevChild = c1[i];
				if (patched >= toBePatched) {
					unmount(prevChild, parentComponent, parentSuspense, true);
					continue;
				}
				let newIndex;
				if (prevChild.key != null) newIndex = keyToNewIndexMap.get(prevChild.key);
				else for (j = s2; j <= e2; j++) if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
					newIndex = j;
					break;
				}
				if (newIndex === void 0) unmount(prevChild, parentComponent, parentSuspense, true);
				else {
					newIndexToOldIndexMap[newIndex - s2] = i + 1;
					if (newIndex >= maxNewIndexSoFar) maxNewIndexSoFar = newIndex;
					else moved = true;
					patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
					patched++;
				}
			}
			const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
			j = increasingNewIndexSequence.length - 1;
			for (i = toBePatched - 1; i >= 0; i--) {
				const nextIndex = s2 + i;
				const nextChild = c2[nextIndex];
				const anchorVNode = c2[nextIndex + 1];
				const anchor = nextIndex + 1 < l2 ? anchorVNode.el || resolveAsyncComponentPlaceholder(anchorVNode) : parentAnchor;
				if (newIndexToOldIndexMap[i] === 0) patch(null, nextChild, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
				else if (moved) if (j < 0 || i !== increasingNewIndexSequence[j]) move(nextChild, container, anchor, 2);
				else j--;
			}
		}
	};
	const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
		const { el, type, transition, children, shapeFlag } = vnode;
		if (shapeFlag & 6) {
			move(vnode.component.subTree, container, anchor, moveType);
			return;
		}
		if (shapeFlag & 128) {
			vnode.suspense.move(container, anchor, moveType);
			return;
		}
		if (shapeFlag & 64) {
			type.move(vnode, container, anchor, internals);
			return;
		}
		if (type === Fragment) {
			hostInsert(el, container, anchor);
			for (let i = 0; i < children.length; i++) move(children[i], container, anchor, moveType);
			hostInsert(vnode.anchor, container, anchor);
			return;
		}
		if (type === Static) {
			moveStaticNode(vnode, container, anchor);
			return;
		}
		if (moveType !== 2 && shapeFlag & 1 && transition) if (moveType === 0) {
			transition.beforeEnter(el);
			hostInsert(el, container, anchor);
			queuePostRenderEffect(() => transition.enter(el), parentSuspense);
		} else {
			const { leave, delayLeave, afterLeave } = transition;
			const remove2 = () => {
				if (vnode.ctx.isUnmounted) hostRemove(el);
				else hostInsert(el, container, anchor);
			};
			const performLeave = () => {
				if (el._isLeaving) el[leaveCbKey](true);
				leave(el, () => {
					remove2();
					afterLeave && afterLeave();
				});
			};
			if (delayLeave) delayLeave(el, remove2, performLeave);
			else performLeave();
		}
		else hostInsert(el, container, anchor);
	};
	const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
		const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs, cacheIndex } = vnode;
		if (patchFlag === -2) optimized = false;
		if (ref != null) {
			pauseTracking();
			setRef(ref, null, parentSuspense, vnode, true);
			resetTracking();
		}
		if (cacheIndex != null) parentComponent.renderCache[cacheIndex] = void 0;
		if (shapeFlag & 256) {
			parentComponent.ctx.deactivate(vnode);
			return;
		}
		const shouldInvokeDirs = shapeFlag & 1 && dirs;
		const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
		let vnodeHook;
		if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) invokeVNodeHook(vnodeHook, parentComponent, vnode);
		if (shapeFlag & 6) unmountComponent(vnode.component, parentSuspense, doRemove);
		else {
			if (shapeFlag & 128) {
				vnode.suspense.unmount(parentSuspense, doRemove);
				return;
			}
			if (shouldInvokeDirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
			if (shapeFlag & 64) vnode.type.remove(vnode, parentComponent, parentSuspense, internals, doRemove);
			else if (dynamicChildren && !dynamicChildren.hasOnce && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
			else if (type === Fragment && patchFlag & 384 || !optimized && shapeFlag & 16) unmountChildren(children, parentComponent, parentSuspense);
			if (doRemove) remove(vnode);
		}
		if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) queuePostRenderEffect(() => {
			vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
			shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
		}, parentSuspense);
	};
	const remove = (vnode) => {
		const { type, el, anchor, transition } = vnode;
		if (type === Fragment) {
			removeFragment(el, anchor);
			return;
		}
		if (type === Static) {
			removeStaticNode(vnode);
			return;
		}
		const performRemove = () => {
			hostRemove(el);
			if (transition && !transition.persisted && transition.afterLeave) transition.afterLeave();
		};
		if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
			const { leave, delayLeave } = transition;
			const performLeave = () => leave(el, performRemove);
			if (delayLeave) delayLeave(vnode.el, performRemove, performLeave);
			else performLeave();
		} else performRemove();
	};
	const removeFragment = (cur, end) => {
		let next;
		while (cur !== end) {
			next = hostNextSibling(cur);
			hostRemove(cur);
			cur = next;
		}
		hostRemove(end);
	};
	const unmountComponent = (instance, parentSuspense, doRemove) => {
		const { bum, scope, job, subTree, um, m, a } = instance;
		invalidateMount(m);
		invalidateMount(a);
		if (bum) invokeArrayFns(bum);
		scope.stop();
		if (job) {
			job.flags |= 8;
			unmount(subTree, instance, parentSuspense, doRemove);
		}
		if (um) queuePostRenderEffect(um, parentSuspense);
		queuePostRenderEffect(() => {
			instance.isUnmounted = true;
		}, parentSuspense);
	};
	const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
		for (let i = start; i < children.length; i++) unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
	};
	const getNextHostNode = (vnode) => {
		if (vnode.shapeFlag & 6) return getNextHostNode(vnode.component.subTree);
		if (vnode.shapeFlag & 128) return vnode.suspense.next();
		const el = hostNextSibling(vnode.anchor || vnode.el);
		const teleportEnd = el && el[TeleportEndKey];
		return teleportEnd ? hostNextSibling(teleportEnd) : el;
	};
	let isFlushing = false;
	const render = (vnode, container, namespace) => {
		let instance;
		if (vnode == null) {
			if (container._vnode) {
				unmount(container._vnode, null, null, true);
				instance = container._vnode.component;
			}
		} else patch(container._vnode || null, vnode, container, null, null, null, namespace);
		container._vnode = vnode;
		if (!isFlushing) {
			isFlushing = true;
			flushPreFlushCbs(instance);
			flushPostFlushCbs();
			isFlushing = false;
		}
	};
	const internals = {
		p: patch,
		um: unmount,
		m: move,
		r: remove,
		mt: mountComponent,
		mc: mountChildren,
		pc: patchChildren,
		pbc: patchBlockChildren,
		n: getNextHostNode,
		o: options
	};
	let hydrate;
	let hydrateNode;
	if (createHydrationFns) [hydrate, hydrateNode] = createHydrationFns(internals);
	return {
		render,
		hydrate,
		createApp: createAppAPI(render, hydrate)
	};
}
function resolveChildrenNamespace({ type, props }, currentNamespace) {
	return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect, job }, allowed) {
	if (allowed) {
		effect.flags |= 32;
		job.flags |= 4;
	} else {
		effect.flags &= -33;
		job.flags &= -5;
	}
}
function needTransition(parentSuspense, transition) {
	return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
	const ch1 = n1.children;
	const ch2 = n2.children;
	if (isArray$2(ch1) && isArray$2(ch2)) for (let i = 0; i < ch1.length; i++) {
		const c1 = ch1[i];
		let c2 = ch2[i];
		if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
			if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
				c2 = ch2[i] = cloneIfMounted(ch2[i]);
				c2.el = c1.el;
			}
			if (!shallow && c2.patchFlag !== -2) traverseStaticChildren(c1, c2);
		}
		if (c2.type === Text) {
			if (c2.patchFlag === -1) c2 = ch2[i] = cloneIfMounted(c2);
			c2.el = c1.el;
		}
		if (c2.type === Comment && !c2.el) c2.el = c1.el;
	}
}
function getSequence(arr) {
	const p = arr.slice();
	const result = [0];
	let i, j, u, v, c;
	const len = arr.length;
	for (i = 0; i < len; i++) {
		const arrI = arr[i];
		if (arrI !== 0) {
			j = result[result.length - 1];
			if (arr[j] < arrI) {
				p[i] = j;
				result.push(i);
				continue;
			}
			u = 0;
			v = result.length - 1;
			while (u < v) {
				c = u + v >> 1;
				if (arr[result[c]] < arrI) u = c + 1;
				else v = c;
			}
			if (arrI < arr[result[u]]) {
				if (u > 0) p[i] = result[u - 1];
				result[u] = i;
			}
		}
	}
	u = result.length;
	v = result[u - 1];
	while (u-- > 0) {
		result[u] = v;
		v = p[v];
	}
	return result;
}
function locateNonHydratedAsyncRoot(instance) {
	const subComponent = instance.subTree.component;
	if (subComponent) if (subComponent.asyncDep && !subComponent.asyncResolved) return subComponent;
	else return locateNonHydratedAsyncRoot(subComponent);
}
function invalidateMount(hooks) {
	if (hooks) for (let i = 0; i < hooks.length; i++) hooks[i].flags |= 8;
}
function resolveAsyncComponentPlaceholder(anchorVnode) {
	if (anchorVnode.placeholder) return anchorVnode.placeholder;
	const instance = anchorVnode.component;
	if (instance) return resolveAsyncComponentPlaceholder(instance.subTree);
	return null;
}
var isSuspense = (type) => type.__isSuspense;
var suspenseId = 0;
var Suspense = {
	name: "Suspense",
	__isSuspense: true,
	process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
		if (n1 == null) mountSuspense(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals);
		else {
			if (parentSuspense && parentSuspense.deps > 0 && !n1.suspense.isInFallback) {
				n2.suspense = n1.suspense;
				n2.suspense.vnode = n2;
				n2.el = n1.el;
				return;
			}
			patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, rendererInternals);
		}
	},
	hydrate: hydrateSuspense,
	normalize: normalizeSuspenseChildren
};
function triggerEvent(vnode, name) {
	const eventListener = vnode.props && vnode.props[name];
	if (isFunction$1(eventListener)) eventListener();
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
	const { p: patch, o: { createElement } } = rendererInternals;
	const hiddenContainer = createElement("div");
	const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals);
	patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds);
	if (suspense.deps > 0) {
		triggerEvent(vnode, "onPending");
		triggerEvent(vnode, "onFallback");
		patch(null, vnode.ssFallback, container, anchor, parentComponent, null, namespace, slotScopeIds);
		setActiveBranch(suspense, vnode.ssFallback);
	} else suspense.resolve(false, true);
}
function patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
	const suspense = n2.suspense = n1.suspense;
	suspense.vnode = n2;
	n2.el = n1.el;
	const newBranch = n2.ssContent;
	const newFallback = n2.ssFallback;
	const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
	if (pendingBranch) {
		suspense.pendingBranch = newBranch;
		if (isSameVNodeType(pendingBranch, newBranch)) {
			patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
			if (suspense.deps <= 0) suspense.resolve();
			else if (isInFallback) {
				if (!isHydrating) {
					patch(activeBranch, newFallback, container, anchor, parentComponent, null, namespace, slotScopeIds, optimized);
					setActiveBranch(suspense, newFallback);
				}
			}
		} else {
			suspense.pendingId = suspenseId++;
			if (isHydrating) {
				suspense.isHydrating = false;
				suspense.activeBranch = pendingBranch;
			} else unmount(pendingBranch, parentComponent, suspense);
			suspense.deps = 0;
			suspense.effects.length = 0;
			suspense.hiddenContainer = createElement("div");
			if (isInFallback) {
				patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
				if (suspense.deps <= 0) suspense.resolve();
				else {
					patch(activeBranch, newFallback, container, anchor, parentComponent, null, namespace, slotScopeIds, optimized);
					setActiveBranch(suspense, newFallback);
				}
			} else if (activeBranch && isSameVNodeType(activeBranch, newBranch)) {
				patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, namespace, slotScopeIds, optimized);
				suspense.resolve(true);
			} else {
				patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
				if (suspense.deps <= 0) suspense.resolve();
			}
		}
	} else if (activeBranch && isSameVNodeType(activeBranch, newBranch)) {
		patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, namespace, slotScopeIds, optimized);
		setActiveBranch(suspense, newBranch);
	} else {
		triggerEvent(n2, "onPending");
		suspense.pendingBranch = newBranch;
		if (newBranch.shapeFlag & 512) suspense.pendingId = newBranch.component.suspenseId;
		else suspense.pendingId = suspenseId++;
		patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
		if (suspense.deps <= 0) suspense.resolve();
		else {
			const { timeout, pendingId } = suspense;
			if (timeout > 0) setTimeout(() => {
				if (suspense.pendingId === pendingId) suspense.fallback(newFallback);
			}, timeout);
			else if (timeout === 0) suspense.fallback(newFallback);
		}
	}
}
function createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
	const { p: patch, m: move, um: unmount, n: next, o: { parentNode, remove } } = rendererInternals;
	let parentSuspenseId;
	const isSuspensible = isVNodeSuspensible(vnode);
	if (isSuspensible) {
		if (parentSuspense && parentSuspense.pendingBranch) {
			parentSuspenseId = parentSuspense.pendingId;
			parentSuspense.deps++;
		}
	}
	const timeout = vnode.props ? toNumber(vnode.props.timeout) : void 0;
	const initialAnchor = anchor;
	const suspense = {
		vnode,
		parent: parentSuspense,
		parentComponent,
		namespace,
		container,
		hiddenContainer,
		deps: 0,
		pendingId: suspenseId++,
		timeout: typeof timeout === "number" ? timeout : -1,
		activeBranch: null,
		pendingBranch: null,
		isInFallback: !isHydrating,
		isHydrating,
		isUnmounted: false,
		effects: [],
		resolve(resume = false, sync = false) {
			const { vnode: vnode2, activeBranch, pendingBranch, pendingId, effects, parentComponent: parentComponent2, container: container2, isInFallback } = suspense;
			let delayEnter = false;
			if (suspense.isHydrating) suspense.isHydrating = false;
			else if (!resume) {
				delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
				if (delayEnter) activeBranch.transition.afterLeave = () => {
					if (pendingId === suspense.pendingId) {
						move(pendingBranch, container2, anchor === initialAnchor ? next(activeBranch) : anchor, 0);
						queuePostFlushCb(effects);
						if (isInFallback && vnode2.ssFallback) vnode2.ssFallback.el = null;
					}
				};
				if (activeBranch) {
					if (parentNode(activeBranch.el) === container2) anchor = next(activeBranch);
					unmount(activeBranch, parentComponent2, suspense, true);
					if (!delayEnter && isInFallback && vnode2.ssFallback) queuePostRenderEffect(() => vnode2.ssFallback.el = null, suspense);
				}
				if (!delayEnter) move(pendingBranch, container2, anchor, 0);
			}
			setActiveBranch(suspense, pendingBranch);
			suspense.pendingBranch = null;
			suspense.isInFallback = false;
			let parent = suspense.parent;
			let hasUnresolvedAncestor = false;
			while (parent) {
				if (parent.pendingBranch) {
					parent.effects.push(...effects);
					hasUnresolvedAncestor = true;
					break;
				}
				parent = parent.parent;
			}
			if (!hasUnresolvedAncestor && !delayEnter) queuePostFlushCb(effects);
			suspense.effects = [];
			if (isSuspensible) {
				if (parentSuspense && parentSuspense.pendingBranch && parentSuspenseId === parentSuspense.pendingId) {
					parentSuspense.deps--;
					if (parentSuspense.deps === 0 && !sync) parentSuspense.resolve();
				}
			}
			triggerEvent(vnode2, "onResolve");
		},
		fallback(fallbackVNode) {
			if (!suspense.pendingBranch) return;
			const { vnode: vnode2, activeBranch, parentComponent: parentComponent2, container: container2, namespace: namespace2 } = suspense;
			triggerEvent(vnode2, "onFallback");
			const anchor2 = next(activeBranch);
			const mountFallback = () => {
				if (!suspense.isInFallback) return;
				patch(null, fallbackVNode, container2, anchor2, parentComponent2, null, namespace2, slotScopeIds, optimized);
				setActiveBranch(suspense, fallbackVNode);
			};
			const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
			if (delayEnter) activeBranch.transition.afterLeave = mountFallback;
			suspense.isInFallback = true;
			unmount(activeBranch, parentComponent2, null, true);
			if (!delayEnter) mountFallback();
		},
		move(container2, anchor2, type) {
			suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
			suspense.container = container2;
		},
		next() {
			return suspense.activeBranch && next(suspense.activeBranch);
		},
		registerDep(instance, setupRenderEffect, optimized2) {
			const isInPendingSuspense = !!suspense.pendingBranch;
			if (isInPendingSuspense) suspense.deps++;
			const hydratedEl = instance.vnode.el;
			instance.asyncDep.catch((err) => {
				handleError(err, instance, 0);
			}).then((asyncSetupResult) => {
				if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) return;
				instance.asyncResolved = true;
				const { vnode: vnode2 } = instance;
				handleSetupResult(instance, asyncSetupResult, false);
				if (hydratedEl) vnode2.el = hydratedEl;
				const placeholder = !hydratedEl && instance.subTree.el;
				setupRenderEffect(instance, vnode2, parentNode(hydratedEl || instance.subTree.el), hydratedEl ? null : next(instance.subTree), suspense, namespace, optimized2);
				if (placeholder) {
					vnode2.placeholder = null;
					remove(placeholder);
				}
				updateHOCHostEl(instance, vnode2.el);
				if (isInPendingSuspense && --suspense.deps === 0) suspense.resolve();
			});
		},
		unmount(parentSuspense2, doRemove) {
			suspense.isUnmounted = true;
			if (suspense.activeBranch) unmount(suspense.activeBranch, parentComponent, parentSuspense2, doRemove);
			if (suspense.pendingBranch) unmount(suspense.pendingBranch, parentComponent, parentSuspense2, doRemove);
		}
	};
	return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals, hydrateNode) {
	const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement("div"), null, namespace, slotScopeIds, optimized, rendererInternals, true);
	const result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);
	if (suspense.deps === 0) suspense.resolve(false, true);
	return result;
}
function normalizeSuspenseChildren(vnode) {
	const { shapeFlag, children } = vnode;
	const isSlotChildren = shapeFlag & 32;
	vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
	vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}
function normalizeSuspenseSlot(s) {
	let block;
	if (isFunction$1(s)) {
		const trackBlock = isBlockTreeEnabled && s._c;
		if (trackBlock) {
			s._d = false;
			openBlock();
		}
		s = s();
		if (trackBlock) {
			s._d = true;
			block = currentBlock;
			closeBlock();
		}
	}
	if (isArray$2(s)) s = filterSingleRoot(s);
	s = normalizeVNode(s);
	if (block && !s.dynamicChildren) s.dynamicChildren = block.filter((c) => c !== s);
	return s;
}
function queueEffectWithSuspense(fn, suspense) {
	if (suspense && suspense.pendingBranch) if (isArray$2(fn)) suspense.effects.push(...fn);
	else suspense.effects.push(fn);
	else queuePostFlushCb(fn);
}
function setActiveBranch(suspense, branch) {
	suspense.activeBranch = branch;
	const { vnode, parentComponent } = suspense;
	let el = branch.el;
	while (!el && branch.component) {
		branch = branch.component.subTree;
		el = branch.el;
	}
	vnode.el = el;
	if (parentComponent && parentComponent.subTree === vnode) {
		parentComponent.vnode.el = el;
		updateHOCHostEl(parentComponent, el);
	}
}
function isVNodeSuspensible(vnode) {
	const suspensible = vnode.props && vnode.props.suspensible;
	return suspensible != null && suspensible !== false;
}
var Fragment = /* @__PURE__ */ Symbol.for("v-fgt");
var Text = /* @__PURE__ */ Symbol.for("v-txt");
var Comment = /* @__PURE__ */ Symbol.for("v-cmt");
var Static = /* @__PURE__ */ Symbol.for("v-stc");
var blockStack = [];
var currentBlock = null;
function openBlock(disableTracking = false) {
	blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
	blockStack.pop();
	currentBlock = blockStack[blockStack.length - 1] || null;
}
var isBlockTreeEnabled = 1;
function setBlockTracking(value, inVOnce = false) {
	isBlockTreeEnabled += value;
	if (value < 0 && currentBlock && inVOnce) currentBlock.hasOnce = true;
}
function setupBlock(vnode) {
	vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
	closeBlock();
	if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(vnode);
	return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
	return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
	return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode$1(value) {
	return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
	return n1.type === n2.type && n1.key === n2.key;
}
function transformVNodeArgs(transformer) {}
var normalizeKey = ({ key }) => key != null ? key : null;
var normalizeRef = ({ ref, ref_key, ref_for }) => {
	if (typeof ref === "number") ref = "" + ref;
	return ref != null ? isString$1(ref) || /* @__PURE__ */ isRef(ref) || isFunction$1(ref) ? {
		i: currentRenderingInstance,
		r: ref,
		k: ref_key,
		f: !!ref_for
	} : ref : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
	const vnode = {
		__v_isVNode: true,
		__v_skip: true,
		type,
		props,
		key: props && normalizeKey(props),
		ref: props && normalizeRef(props),
		scopeId: currentScopeId,
		slotScopeIds: null,
		children,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag,
		patchFlag,
		dynamicProps,
		dynamicChildren: null,
		appContext: null,
		ctx: currentRenderingInstance
	};
	if (needFullChildrenNormalization) {
		normalizeChildren(vnode, children);
		if (shapeFlag & 128) type.normalize(vnode);
	} else if (children) vnode.shapeFlag |= isString$1(children) ? 8 : 16;
	if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) currentBlock.push(vnode);
	return vnode;
}
var createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
	if (!type || type === NULL_DYNAMIC_COMPONENT) type = Comment;
	if (isVNode$1(type)) {
		const cloned = cloneVNode(type, props, true);
		if (children) normalizeChildren(cloned, children);
		if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) if (cloned.shapeFlag & 6) currentBlock[currentBlock.indexOf(type)] = cloned;
		else currentBlock.push(cloned);
		cloned.patchFlag = -2;
		return cloned;
	}
	if (isClassComponent(type)) type = type.__vccOpts;
	if (props) {
		props = guardReactiveProps(props);
		let { class: klass, style } = props;
		if (klass && !isString$1(klass)) props.class = normalizeClass(klass);
		if (isObject$1(style)) {
			if (/* @__PURE__ */ isProxy(style) && !isArray$2(style)) style = extend({}, style);
			props.style = normalizeStyle(style);
		}
	}
	const shapeFlag = isString$1(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject$1(type) ? 4 : isFunction$1(type) ? 2 : 0;
	return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
	if (!props) return null;
	return /* @__PURE__ */ isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
	const { props, ref, patchFlag, children, transition } = vnode;
	const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
	const cloned = {
		__v_isVNode: true,
		__v_skip: true,
		type: vnode.type,
		props: mergedProps,
		key: mergedProps && normalizeKey(mergedProps),
		ref: extraProps && extraProps.ref ? mergeRef && ref ? isArray$2(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref,
		scopeId: vnode.scopeId,
		slotScopeIds: vnode.slotScopeIds,
		children,
		target: vnode.target,
		targetStart: vnode.targetStart,
		targetAnchor: vnode.targetAnchor,
		staticCount: vnode.staticCount,
		shapeFlag: vnode.shapeFlag,
		patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
		dynamicProps: vnode.dynamicProps,
		dynamicChildren: vnode.dynamicChildren,
		appContext: vnode.appContext,
		dirs: vnode.dirs,
		transition,
		component: vnode.component,
		suspense: vnode.suspense,
		ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
		ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
		placeholder: vnode.placeholder,
		el: vnode.el,
		anchor: vnode.anchor,
		ctx: vnode.ctx,
		ce: vnode.ce
	};
	if (transition && cloneTransition) setTransitionHooks(cloned, transition.clone(cloned));
	return cloned;
}
function createTextVNode(text = " ", flag = 0) {
	return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
	const vnode = createVNode(Static, null, content);
	vnode.staticCount = numberOfNodes;
	return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
	return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
	if (child == null || typeof child === "boolean") return createVNode(Comment);
	else if (isArray$2(child)) return createVNode(Fragment, null, child.slice());
	else if (isVNode$1(child)) return cloneIfMounted(child);
	else return createVNode(Text, null, String(child));
}
function cloneIfMounted(child) {
	return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
	let type = 0;
	const { shapeFlag } = vnode;
	if (children == null) children = null;
	else if (isArray$2(children)) type = 16;
	else if (typeof children === "object") if (shapeFlag & 65) {
		const slot = children.default;
		if (slot) {
			slot._c && (slot._d = false);
			normalizeChildren(vnode, slot());
			slot._c && (slot._d = true);
		}
		return;
	} else {
		type = 32;
		const slotFlag = children._;
		if (!slotFlag && !isInternalObject(children)) children._ctx = currentRenderingInstance;
		else if (slotFlag === 3 && currentRenderingInstance) if (currentRenderingInstance.slots._ === 1) children._ = 1;
		else {
			children._ = 2;
			vnode.patchFlag |= 1024;
		}
	}
	else if (isFunction$1(children)) {
		children = {
			default: children,
			_ctx: currentRenderingInstance
		};
		type = 32;
	} else {
		children = String(children);
		if (shapeFlag & 64) {
			type = 16;
			children = [createTextVNode(children)];
		} else type = 8;
	}
	vnode.children = children;
	vnode.shapeFlag |= type;
}
function mergeProps(...args) {
	const ret = {};
	for (let i = 0; i < args.length; i++) {
		const toMerge = args[i];
		for (const key in toMerge) if (key === "class") {
			if (ret.class !== toMerge.class) ret.class = normalizeClass([ret.class, toMerge.class]);
		} else if (key === "style") ret.style = normalizeStyle([ret.style, toMerge.style]);
		else if (isOn(key)) {
			const existing = ret[key];
			const incoming = toMerge[key];
			if (incoming && existing !== incoming && !(isArray$2(existing) && existing.includes(incoming))) ret[key] = existing ? [].concat(existing, incoming) : incoming;
		} else if (key !== "") ret[key] = toMerge[key];
	}
	return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
	callWithAsyncErrorHandling(hook, instance, 7, [vnode, prevVNode]);
}
var emptyAppContext = createAppContext();
var uid = 0;
function createComponentInstance(vnode, parent, suspense) {
	const type = vnode.type;
	const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
	const instance = {
		uid: uid++,
		vnode,
		type,
		parent,
		appContext,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new EffectScope(true),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: parent ? parent.provides : Object.create(appContext.provides),
		ids: parent ? parent.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: normalizePropsOptions(type, appContext),
		emitsOptions: normalizeEmitsOptions(type, appContext),
		emit: null,
		emitted: null,
		propsDefaults: EMPTY_OBJ,
		inheritAttrs: type.inheritAttrs,
		ctx: EMPTY_OBJ,
		data: EMPTY_OBJ,
		props: EMPTY_OBJ,
		attrs: EMPTY_OBJ,
		slots: EMPTY_OBJ,
		refs: EMPTY_OBJ,
		setupState: EMPTY_OBJ,
		setupContext: null,
		suspense,
		suspenseId: suspense ? suspense.pendingId : 0,
		asyncDep: null,
		asyncResolved: false,
		isMounted: false,
		isUnmounted: false,
		isDeactivated: false,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	instance.ctx = { _: instance };
	instance.root = parent ? parent.root : instance;
	instance.emit = emit.bind(null, instance);
	if (vnode.ce) vnode.ce(instance);
	return instance;
}
var currentInstance = null;
var getCurrentInstance$1 = () => currentInstance || currentRenderingInstance;
var internalSetCurrentInstance;
var setInSSRSetupState;
{
	const g = getGlobalThis$1();
	const registerGlobalSetter = (key, setter) => {
		let setters;
		if (!(setters = g[key])) setters = g[key] = [];
		setters.push(setter);
		return (v) => {
			if (setters.length > 1) setters.forEach((set) => set(v));
			else setters[0](v);
		};
	};
	internalSetCurrentInstance = registerGlobalSetter(`__VUE_INSTANCE_SETTERS__`, (v) => currentInstance = v);
	setInSSRSetupState = registerGlobalSetter(`__VUE_SSR_SETTERS__`, (v) => isInSSRComponentSetup = v);
}
var setCurrentInstance = (instance) => {
	const prev = currentInstance;
	internalSetCurrentInstance(instance);
	instance.scope.on();
	return () => {
		instance.scope.off();
		internalSetCurrentInstance(prev);
	};
};
var unsetCurrentInstance = () => {
	currentInstance && currentInstance.scope.off();
	internalSetCurrentInstance(null);
};
function isStatefulComponent(instance) {
	return instance.vnode.shapeFlag & 4;
}
var isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false, optimized = false) {
	isSSR && setInSSRSetupState(isSSR);
	const { props, children } = instance.vnode;
	const isStateful = isStatefulComponent(instance);
	initProps(instance, props, isStateful, isSSR);
	initSlots(instance, children, optimized || isSSR);
	const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
	isSSR && setInSSRSetupState(false);
	return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
	const Component = instance.type;
	instance.accessCache = /* @__PURE__ */ Object.create(null);
	instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
	const { setup } = Component;
	if (setup) {
		pauseTracking();
		const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
		const reset = setCurrentInstance(instance);
		const setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
		const isAsyncSetup = isPromise$1(setupResult);
		resetTracking();
		reset();
		if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) markAsyncBoundary(instance);
		if (isAsyncSetup) {
			setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
			if (isSSR) return setupResult.then((resolvedResult) => {
				handleSetupResult(instance, resolvedResult, isSSR);
			}).catch((e) => {
				handleError(e, instance, 0);
			});
			else instance.asyncDep = setupResult;
		} else handleSetupResult(instance, setupResult, isSSR);
	} else finishComponentSetup(instance, isSSR);
}
function handleSetupResult(instance, setupResult, isSSR) {
	if (isFunction$1(setupResult)) if (instance.type.__ssrInlineRender) instance.ssrRender = setupResult;
	else instance.render = setupResult;
	else if (isObject$1(setupResult)) instance.setupState = proxyRefs(setupResult);
	finishComponentSetup(instance, isSSR);
}
var compile$2;
var installWithProxy;
function registerRuntimeCompiler(_compile) {
	compile$2 = _compile;
	installWithProxy = (i) => {
		if (i.render._rc) i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
	};
}
var isRuntimeOnly = () => !compile$2;
function finishComponentSetup(instance, isSSR, skipOptions) {
	const Component = instance.type;
	if (!instance.render) {
		if (!isSSR && compile$2 && !Component.render) {
			const template = Component.template || resolveMergedOptions(instance).template;
			if (template) {
				const { isCustomElement, compilerOptions } = instance.appContext.config;
				const { delimiters, compilerOptions: componentCompilerOptions } = Component;
				const finalCompilerOptions = extend(extend({
					isCustomElement,
					delimiters
				}, compilerOptions), componentCompilerOptions);
				Component.render = compile$2(template, finalCompilerOptions);
			}
		}
		instance.render = Component.render || NOOP;
		if (installWithProxy) installWithProxy(instance);
	}
	{
		const reset = setCurrentInstance(instance);
		pauseTracking();
		try {
			applyOptions(instance);
		} finally {
			resetTracking();
			reset();
		}
	}
}
var attrsProxyHandlers = { get(target, key) {
	track(target, "get", "");
	return target[key];
} };
function createSetupContext(instance) {
	const expose = (exposed) => {
		instance.exposed = exposed || {};
	};
	return {
		attrs: new Proxy(instance.attrs, attrsProxyHandlers),
		slots: instance.slots,
		emit: instance.emit,
		expose
	};
}
function getComponentPublicInstance(instance) {
	if (instance.exposed) return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
		get(target, key) {
			if (key in target) return target[key];
			else if (key in publicPropertiesMap) return publicPropertiesMap[key](instance);
		},
		has(target, key) {
			return key in target || key in publicPropertiesMap;
		}
	}));
	else return instance.proxy;
}
function getComponentName(Component, includeInferred = true) {
	return isFunction$1(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function isClassComponent(value) {
	return isFunction$1(value) && "__vccOpts" in value;
}
var computed = (getterOrOptions, debugOptions) => {
	return /* @__PURE__ */ computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
function h(type, propsOrChildren, children) {
	try {
		setBlockTracking(-1);
		const l = arguments.length;
		if (l === 2) if (isObject$1(propsOrChildren) && !isArray$2(propsOrChildren)) {
			if (isVNode$1(propsOrChildren)) return createVNode(type, null, [propsOrChildren]);
			return createVNode(type, propsOrChildren);
		} else return createVNode(type, null, propsOrChildren);
		else {
			if (l > 3) children = Array.prototype.slice.call(arguments, 2);
			else if (l === 3 && isVNode$1(children)) children = [children];
			return createVNode(type, propsOrChildren, children);
		}
	} finally {
		setBlockTracking(1);
	}
}
function initCustomFormatter() {
	return;
	function isKeyOfType(Comp, key, type) {
		const opts = Comp[type];
		if (isArray$2(opts) && opts.includes(key) || isObject$1(opts) && key in opts) return true;
		if (Comp.extends && isKeyOfType(Comp.extends, key, type)) return true;
		if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) return true;
	}
}
function withMemo(memo, render, cache, index) {
	const cached = cache[index];
	if (cached && isMemoSame(cached, memo)) return cached;
	const ret = render();
	ret.memo = memo.slice();
	ret.cacheIndex = index;
	return cache[index] = ret;
}
function isMemoSame(cached, memo) {
	const prev = cached.memo;
	if (prev.length != memo.length) return false;
	for (let i = 0; i < prev.length; i++) if (hasChanged(prev[i], memo[i])) return false;
	if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(cached);
	return true;
}
var version = "3.5.30";
var warn$1 = NOOP;
var ErrorTypeStrings = ErrorTypeStrings$1;
var devtools$2 = devtools$1;
var setDevtoolsHook = setDevtoolsHook$1;
var ssrUtils = {
	createComponentInstance,
	setupComponent,
	renderComponentRoot,
	setCurrentRenderingInstance,
	isVNode: isVNode$1,
	normalizeVNode,
	getComponentPublicInstance,
	ensureValidVNode,
	pushWarningContext,
	popWarningContext
};
//#endregion
//#region node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var policy = void 0;
var tt = typeof window !== "undefined" && window.trustedTypes;
if (tt) try {
	policy = /* @__PURE__ */ tt.createPolicy("vue", { createHTML: (val) => val });
} catch (e) {}
var unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
var svgNS = "http://www.w3.org/2000/svg";
var mathmlNS = "http://www.w3.org/1998/Math/MathML";
var doc = typeof document !== "undefined" ? document : null;
var templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
var nodeOps = {
	insert: (child, parent, anchor) => {
		parent.insertBefore(child, anchor || null);
	},
	remove: (child) => {
		const parent = child.parentNode;
		if (parent) parent.removeChild(child);
	},
	createElement: (tag, namespace, is, props) => {
		const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
		if (tag === "select" && props && props.multiple != null) el.setAttribute("multiple", props.multiple);
		return el;
	},
	createText: (text) => doc.createTextNode(text),
	createComment: (text) => doc.createComment(text),
	setText: (node, text) => {
		node.nodeValue = text;
	},
	setElementText: (el, text) => {
		el.textContent = text;
	},
	parentNode: (node) => node.parentNode,
	nextSibling: (node) => node.nextSibling,
	querySelector: (selector) => doc.querySelector(selector),
	setScopeId(el, id) {
		el.setAttribute(id, "");
	},
	insertStaticContent(content, parent, anchor, namespace, start, end) {
		const before = anchor ? anchor.previousSibling : parent.lastChild;
		if (start && (start === end || start.nextSibling)) while (true) {
			parent.insertBefore(start.cloneNode(true), anchor);
			if (start === end || !(start = start.nextSibling)) break;
		}
		else {
			templateContainer.innerHTML = unsafeToTrustedHTML(namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content);
			const template = templateContainer.content;
			if (namespace === "svg" || namespace === "mathml") {
				const wrapper = template.firstChild;
				while (wrapper.firstChild) template.appendChild(wrapper.firstChild);
				template.removeChild(wrapper);
			}
			parent.insertBefore(template, anchor);
		}
		return [before ? before.nextSibling : parent.firstChild, anchor ? anchor.previousSibling : parent.lastChild];
	}
};
var TRANSITION = "transition";
var ANIMATION = "animation";
var vtcKey = /* @__PURE__ */ Symbol("_vtc");
var DOMTransitionPropsValidators = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: true
	},
	duration: [
		String,
		Number,
		Object
	],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
};
var TransitionPropsValidators = /* @__PURE__ */ extend({}, BaseTransitionPropsValidators, DOMTransitionPropsValidators);
var decorate$1 = (t) => {
	t.displayName = "Transition";
	t.props = TransitionPropsValidators;
	return t;
};
var Transition = /* @__PURE__ */ decorate$1((props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots));
var callHook = (hook, args = []) => {
	if (isArray$2(hook)) hook.forEach((h2) => h2(...args));
	else if (hook) hook(...args);
};
var hasExplicitCallback = (hook) => {
	return hook ? isArray$2(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
	const baseProps = {};
	for (const key in rawProps) if (!(key in DOMTransitionPropsValidators)) baseProps[key] = rawProps[key];
	if (rawProps.css === false) return baseProps;
	const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
	const durations = normalizeDuration(duration);
	const enterDuration = durations && durations[0];
	const leaveDuration = durations && durations[1];
	const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
	const finishEnter = (el, isAppear, done, isCancelled) => {
		el._enterCancelled = isCancelled;
		removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
		removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
		done && done();
	};
	const finishLeave = (el, done) => {
		el._isLeaving = false;
		removeTransitionClass(el, leaveFromClass);
		removeTransitionClass(el, leaveToClass);
		removeTransitionClass(el, leaveActiveClass);
		done && done();
	};
	const makeEnterHook = (isAppear) => {
		return (el, done) => {
			const hook = isAppear ? onAppear : onEnter;
			const resolve = () => finishEnter(el, isAppear, done);
			callHook(hook, [el, resolve]);
			nextFrame(() => {
				removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
				addTransitionClass(el, isAppear ? appearToClass : enterToClass);
				if (!hasExplicitCallback(hook)) whenTransitionEnds(el, type, enterDuration, resolve);
			});
		};
	};
	return extend(baseProps, {
		onBeforeEnter(el) {
			callHook(onBeforeEnter, [el]);
			addTransitionClass(el, enterFromClass);
			addTransitionClass(el, enterActiveClass);
		},
		onBeforeAppear(el) {
			callHook(onBeforeAppear, [el]);
			addTransitionClass(el, appearFromClass);
			addTransitionClass(el, appearActiveClass);
		},
		onEnter: makeEnterHook(false),
		onAppear: makeEnterHook(true),
		onLeave(el, done) {
			el._isLeaving = true;
			const resolve = () => finishLeave(el, done);
			addTransitionClass(el, leaveFromClass);
			if (!el._enterCancelled) {
				forceReflow(el);
				addTransitionClass(el, leaveActiveClass);
			} else {
				addTransitionClass(el, leaveActiveClass);
				forceReflow(el);
			}
			nextFrame(() => {
				if (!el._isLeaving) return;
				removeTransitionClass(el, leaveFromClass);
				addTransitionClass(el, leaveToClass);
				if (!hasExplicitCallback(onLeave)) whenTransitionEnds(el, type, leaveDuration, resolve);
			});
			callHook(onLeave, [el, resolve]);
		},
		onEnterCancelled(el) {
			finishEnter(el, false, void 0, true);
			callHook(onEnterCancelled, [el]);
		},
		onAppearCancelled(el) {
			finishEnter(el, true, void 0, true);
			callHook(onAppearCancelled, [el]);
		},
		onLeaveCancelled(el) {
			finishLeave(el);
			callHook(onLeaveCancelled, [el]);
		}
	});
}
function normalizeDuration(duration) {
	if (duration == null) return null;
	else if (isObject$1(duration)) return [NumberOf(duration.enter), NumberOf(duration.leave)];
	else {
		const n = NumberOf(duration);
		return [n, n];
	}
}
function NumberOf(val) {
	return toNumber(val);
}
function addTransitionClass(el, cls) {
	cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
	(el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
	cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
	const _vtc = el[vtcKey];
	if (_vtc) {
		_vtc.delete(cls);
		if (!_vtc.size) el[vtcKey] = void 0;
	}
}
function nextFrame(cb) {
	requestAnimationFrame(() => {
		requestAnimationFrame(cb);
	});
}
var endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
	const id = el._endId = ++endId;
	const resolveIfNotStale = () => {
		if (id === el._endId) resolve();
	};
	if (explicitTimeout != null) return setTimeout(resolveIfNotStale, explicitTimeout);
	const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
	if (!type) return resolve();
	const endEvent = type + "end";
	let ended = 0;
	const end = () => {
		el.removeEventListener(endEvent, onEnd);
		resolveIfNotStale();
	};
	const onEnd = (e) => {
		if (e.target === el && ++ended >= propCount) end();
	};
	setTimeout(() => {
		if (ended < propCount) end();
	}, timeout + 1);
	el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
	const styles = window.getComputedStyle(el);
	const getStyleProperties = (key) => (styles[key] || "").split(", ");
	const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
	const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
	const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
	const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
	const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
	const animationTimeout = getTimeout(animationDelays, animationDurations);
	let type = null;
	let timeout = 0;
	let propCount = 0;
	if (expectedType === TRANSITION) {
		if (transitionTimeout > 0) {
			type = TRANSITION;
			timeout = transitionTimeout;
			propCount = transitionDurations.length;
		}
	} else if (expectedType === ANIMATION) {
		if (animationTimeout > 0) {
			type = ANIMATION;
			timeout = animationTimeout;
			propCount = animationDurations.length;
		}
	} else {
		timeout = Math.max(transitionTimeout, animationTimeout);
		type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
		propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
	}
	const hasTransform = type === TRANSITION && /\b(?:transform|all)(?:,|$)/.test(getStyleProperties(`${TRANSITION}Property`).toString());
	return {
		type,
		timeout,
		propCount,
		hasTransform
	};
}
function getTimeout(delays, durations) {
	while (delays.length < durations.length) delays = delays.concat(delays);
	return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
	if (s === "auto") return 0;
	return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow(el) {
	return (el ? el.ownerDocument : document).body.offsetHeight;
}
function patchClass(el, value, isSVG) {
	const transitionClasses = el[vtcKey];
	if (transitionClasses) value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
	if (value == null) el.removeAttribute("class");
	else if (isSVG) el.setAttribute("class", value);
	else el.className = value;
}
var vShowOriginalDisplay = /* @__PURE__ */ Symbol("_vod");
var vShowHidden = /* @__PURE__ */ Symbol("_vsh");
var vShow = {
	name: "show",
	beforeMount(el, { value }, { transition }) {
		el[vShowOriginalDisplay] = el.style.display === "none" ? "" : el.style.display;
		if (transition && value) transition.beforeEnter(el);
		else setDisplay(el, value);
	},
	mounted(el, { value }, { transition }) {
		if (transition && value) transition.enter(el);
	},
	updated(el, { value, oldValue }, { transition }) {
		if (!value === !oldValue) return;
		if (transition) if (value) {
			transition.beforeEnter(el);
			setDisplay(el, true);
			transition.enter(el);
		} else transition.leave(el, () => {
			setDisplay(el, false);
		});
		else setDisplay(el, value);
	},
	beforeUnmount(el, { value }) {
		setDisplay(el, value);
	}
};
function setDisplay(el, value) {
	el.style.display = value ? el[vShowOriginalDisplay] : "none";
	el[vShowHidden] = !value;
}
function initVShowForSSR() {
	vShow.getSSRProps = ({ value }) => {
		if (!value) return { style: { display: "none" } };
	};
}
var CSS_VAR_TEXT = /* @__PURE__ */ Symbol("");
function useCssVars(getter) {
	const instance = getCurrentInstance$1();
	if (!instance) return;
	const updateTeleports = instance.ut = (vars = getter(instance.proxy)) => {
		Array.from(document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)).forEach((node) => setVarsOnNode(node, vars));
	};
	const setVars = () => {
		const vars = getter(instance.proxy);
		if (instance.ce) setVarsOnNode(instance.ce, vars);
		else setVarsOnVNode(instance.subTree, vars);
		updateTeleports(vars);
	};
	onBeforeUpdate(() => {
		queuePostFlushCb(setVars);
	});
	onMounted(() => {
		watch(setVars, NOOP, { flush: "post" });
		const ob = new MutationObserver(setVars);
		ob.observe(instance.subTree.el.parentNode, { childList: true });
		onUnmounted(() => ob.disconnect());
	});
}
function setVarsOnVNode(vnode, vars) {
	if (vnode.shapeFlag & 128) {
		const suspense = vnode.suspense;
		vnode = suspense.activeBranch;
		if (suspense.pendingBranch && !suspense.isHydrating) suspense.effects.push(() => {
			setVarsOnVNode(suspense.activeBranch, vars);
		});
	}
	while (vnode.component) vnode = vnode.component.subTree;
	if (vnode.shapeFlag & 1 && vnode.el) setVarsOnNode(vnode.el, vars);
	else if (vnode.type === Fragment) vnode.children.forEach((c) => setVarsOnVNode(c, vars));
	else if (vnode.type === Static) {
		let { el, anchor } = vnode;
		while (el) {
			setVarsOnNode(el, vars);
			if (el === anchor) break;
			el = el.nextSibling;
		}
	}
}
function setVarsOnNode(el, vars) {
	if (el.nodeType === 1) {
		const style = el.style;
		let cssText = "";
		for (const key in vars) {
			const value = normalizeCssVarValue(vars[key]);
			style.setProperty(`--${key}`, value);
			cssText += `--${key}: ${value};`;
		}
		style[CSS_VAR_TEXT] = cssText;
	}
}
var displayRE = /(?:^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
	const style = el.style;
	const isCssString = isString$1(next);
	let hasControlledDisplay = false;
	if (next && !isCssString) {
		if (prev) if (!isString$1(prev)) {
			for (const key in prev) if (next[key] == null) setStyle(style, key, "");
		} else for (const prevStyle of prev.split(";")) {
			const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
			if (next[key] == null) setStyle(style, key, "");
		}
		for (const key in next) {
			if (key === "display") hasControlledDisplay = true;
			setStyle(style, key, next[key]);
		}
	} else if (isCssString) {
		if (prev !== next) {
			const cssVarText = style[CSS_VAR_TEXT];
			if (cssVarText) next += ";" + cssVarText;
			style.cssText = next;
			hasControlledDisplay = displayRE.test(next);
		}
	} else if (prev) el.removeAttribute("style");
	if (vShowOriginalDisplay in el) {
		el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
		if (el[vShowHidden]) style.display = "none";
	}
}
var importantRE = /\s*!important$/;
function setStyle(style, name, val) {
	if (isArray$2(val)) val.forEach((v) => setStyle(style, name, v));
	else {
		if (val == null) val = "";
		if (name.startsWith("--")) style.setProperty(name, val);
		else {
			const prefixed = autoPrefix(style, name);
			if (importantRE.test(val)) style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
			else style[prefixed] = val;
		}
	}
}
var prefixes = [
	"Webkit",
	"Moz",
	"ms"
];
var prefixCache = {};
function autoPrefix(style, rawName) {
	const cached = prefixCache[rawName];
	if (cached) return cached;
	let name = camelize(rawName);
	if (name !== "filter" && name in style) return prefixCache[rawName] = name;
	name = capitalize$1(name);
	for (let i = 0; i < prefixes.length; i++) {
		const prefixed = prefixes[i] + name;
		if (prefixed in style) return prefixCache[rawName] = prefixed;
	}
	return rawName;
}
var xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance, isBoolean = isSpecialBooleanAttr(key)) {
	if (isSVG && key.startsWith("xlink:")) if (value == null) el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
	else el.setAttributeNS(xlinkNS, key, value);
	else if (value == null || isBoolean && !includeBooleanAttr(value)) el.removeAttribute(key);
	else el.setAttribute(key, isBoolean ? "" : isSymbol(value) ? String(value) : value);
}
function patchDOMProp(el, key, value, parentComponent, attrName) {
	if (key === "innerHTML" || key === "textContent") {
		if (value != null) el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
		return;
	}
	const tag = el.tagName;
	if (key === "value" && tag !== "PROGRESS" && !tag.includes("-")) {
		const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
		const newValue = value == null ? el.type === "checkbox" ? "on" : "" : String(value);
		if (oldValue !== newValue || !("_value" in el)) el.value = newValue;
		if (value == null) el.removeAttribute(key);
		el._value = value;
		return;
	}
	let needRemove = false;
	if (value === "" || value == null) {
		const type = typeof el[key];
		if (type === "boolean") value = includeBooleanAttr(value);
		else if (value == null && type === "string") {
			value = "";
			needRemove = true;
		} else if (type === "number") {
			value = 0;
			needRemove = true;
		}
	}
	try {
		el[key] = value;
	} catch (e) {}
	needRemove && el.removeAttribute(attrName || key);
}
function addEventListener(el, event, handler, options) {
	el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
	el.removeEventListener(event, handler, options);
}
var veiKey = /* @__PURE__ */ Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
	const invokers = el[veiKey] || (el[veiKey] = {});
	const existingInvoker = invokers[rawName];
	if (nextValue && existingInvoker) existingInvoker.value = nextValue;
	else {
		const [name, options] = parseName(rawName);
		if (nextValue) addEventListener(el, name, invokers[rawName] = createInvoker(nextValue, instance), options);
		else if (existingInvoker) {
			removeEventListener(el, name, existingInvoker, options);
			invokers[rawName] = void 0;
		}
	}
}
var optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
	let options;
	if (optionsModifierRE.test(name)) {
		options = {};
		let m;
		while (m = name.match(optionsModifierRE)) {
			name = name.slice(0, name.length - m[0].length);
			options[m[0].toLowerCase()] = true;
		}
	}
	return [name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2)), options];
}
var cachedNow = 0;
var p = /* @__PURE__ */ Promise.resolve();
var getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
	const invoker = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= invoker.attached) return;
		callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
	};
	invoker.value = initialValue;
	invoker.attached = getNow();
	return invoker;
}
function patchStopImmediatePropagation(e, value) {
	if (isArray$2(value)) {
		const originalStop = e.stopImmediatePropagation;
		e.stopImmediatePropagation = () => {
			originalStop.call(e);
			e._stopped = true;
		};
		return value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
	} else return value;
}
var isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
var patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
	const isSVG = namespace === "svg";
	if (key === "class") patchClass(el, nextValue, isSVG);
	else if (key === "style") patchStyle(el, prevValue, nextValue);
	else if (isOn(key)) {
		if (!isModelListener(key)) patchEvent(el, key, prevValue, nextValue, parentComponent);
	} else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
		patchDOMProp(el, key, nextValue);
		if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
	} else if (el._isVueCE && (shouldSetAsPropForVueCE(el, key) || el._def.__asyncLoader && (/[A-Z]/.test(key) || !isString$1(nextValue)))) patchDOMProp(el, camelize(key), nextValue, parentComponent, key);
	else {
		if (key === "true-value") el._trueValue = nextValue;
		else if (key === "false-value") el._falseValue = nextValue;
		patchAttr(el, key, nextValue, isSVG);
	}
};
function shouldSetAsProp(el, key, value, isSVG) {
	if (isSVG) {
		if (key === "innerHTML" || key === "textContent") return true;
		if (key in el && isNativeOn(key) && isFunction$1(value)) return true;
		return false;
	}
	if (key === "spellcheck" || key === "draggable" || key === "translate" || key === "autocorrect") return false;
	if (key === "sandbox" && el.tagName === "IFRAME") return false;
	if (key === "form") return false;
	if (key === "list" && el.tagName === "INPUT") return false;
	if (key === "type" && el.tagName === "TEXTAREA") return false;
	if (key === "width" || key === "height") {
		const tag = el.tagName;
		if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") return false;
	}
	if (isNativeOn(key) && isString$1(value)) return false;
	return key in el;
}
function shouldSetAsPropForVueCE(el, key) {
	const props = el._def.props;
	if (!props) return false;
	const camelKey = camelize(key);
	return Array.isArray(props) ? props.some((prop) => camelize(prop) === camelKey) : Object.keys(props).some((prop) => camelize(prop) === camelKey);
}
var REMOVAL = {};
/* @__NO_SIDE_EFFECTS__ */
function defineCustomElement(options, extraOptions, _createApp) {
	let Comp = /* @__PURE__ */ defineComponent(options, extraOptions);
	if (isPlainObject$2(Comp)) Comp = extend({}, Comp, extraOptions);
	class VueCustomElement extends VueElement {
		constructor(initialProps) {
			super(Comp, initialProps, _createApp);
		}
	}
	VueCustomElement.def = Comp;
	return VueCustomElement;
}
var defineSSRCustomElement = /* @__NO_SIDE_EFFECTS__ */ ((options, extraOptions) => {
	return /* @__PURE__ */ defineCustomElement(options, extraOptions, createSSRApp);
});
var BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
var VueElement = class VueElement extends BaseClass {
	constructor(_def, _props = {}, _createApp = createApp) {
		super();
		this._def = _def;
		this._props = _props;
		this._createApp = _createApp;
		this._isVueCE = true;
		/**
		* @internal
		*/
		this._instance = null;
		/**
		* @internal
		*/
		this._app = null;
		/**
		* @internal
		*/
		this._nonce = this._def.nonce;
		this._connected = false;
		this._resolved = false;
		this._patching = false;
		this._dirty = false;
		this._numberProps = null;
		this._styleChildren = /* @__PURE__ */ new WeakSet();
		this._styleAnchors = /* @__PURE__ */ new WeakMap();
		this._ob = null;
		if (this.shadowRoot && _createApp !== createApp) this._root = this.shadowRoot;
		else if (_def.shadowRoot !== false) {
			this.attachShadow(extend({}, _def.shadowRootOptions, { mode: "open" }));
			this._root = this.shadowRoot;
		} else this._root = this;
	}
	connectedCallback() {
		if (!this.isConnected) return;
		if (!this.shadowRoot && !this._resolved) this._parseSlots();
		this._connected = true;
		let parent = this;
		while (parent = parent && (parent.assignedSlot || parent.parentNode || parent.host)) if (parent instanceof VueElement) {
			this._parent = parent;
			break;
		}
		if (!this._instance) if (this._resolved) this._mount(this._def);
		else if (parent && parent._pendingResolve) this._pendingResolve = parent._pendingResolve.then(() => {
			this._pendingResolve = void 0;
			this._resolveDef();
		});
		else this._resolveDef();
	}
	_setParent(parent = this._parent) {
		if (parent) {
			this._instance.parent = parent._instance;
			this._inheritParentContext(parent);
		}
	}
	_inheritParentContext(parent = this._parent) {
		if (parent && this._app) Object.setPrototypeOf(this._app._context.provides, parent._instance.provides);
	}
	disconnectedCallback() {
		this._connected = false;
		nextTick(() => {
			if (!this._connected) {
				if (this._ob) {
					this._ob.disconnect();
					this._ob = null;
				}
				this._app && this._app.unmount();
				if (this._instance) this._instance.ce = void 0;
				this._app = this._instance = null;
				if (this._teleportTargets) {
					this._teleportTargets.clear();
					this._teleportTargets = void 0;
				}
			}
		});
	}
	_processMutations(mutations) {
		for (const m of mutations) this._setAttr(m.attributeName);
	}
	/**
	* resolve inner component definition (handle possible async component)
	*/
	_resolveDef() {
		if (this._pendingResolve) return;
		for (let i = 0; i < this.attributes.length; i++) this._setAttr(this.attributes[i].name);
		this._ob = new MutationObserver(this._processMutations.bind(this));
		this._ob.observe(this, { attributes: true });
		const resolve = (def, isAsync = false) => {
			this._resolved = true;
			this._pendingResolve = void 0;
			const { props, styles } = def;
			let numberProps;
			if (props && !isArray$2(props)) for (const key in props) {
				const opt = props[key];
				if (opt === Number || opt && opt.type === Number) {
					if (key in this._props) this._props[key] = toNumber(this._props[key]);
					(numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[camelize(key)] = true;
				}
			}
			this._numberProps = numberProps;
			this._resolveProps(def);
			if (this.shadowRoot) this._applyStyles(styles);
			this._mount(def);
		};
		const asyncDef = this._def.__asyncLoader;
		if (asyncDef) this._pendingResolve = asyncDef().then((def) => {
			def.configureApp = this._def.configureApp;
			resolve(this._def = def, true);
		});
		else resolve(this._def);
	}
	_mount(def) {
		this._app = this._createApp(def);
		this._inheritParentContext();
		if (def.configureApp) def.configureApp(this._app);
		this._app._ceVNode = this._createVNode();
		this._app.mount(this._root);
		const exposed = this._instance && this._instance.exposed;
		if (!exposed) return;
		for (const key in exposed) if (!hasOwn$1(this, key)) Object.defineProperty(this, key, { get: () => unref(exposed[key]) });
	}
	_resolveProps(def) {
		const { props } = def;
		const declaredPropKeys = isArray$2(props) ? props : Object.keys(props || {});
		for (const key of Object.keys(this)) if (key[0] !== "_" && declaredPropKeys.includes(key)) this._setProp(key, this[key]);
		for (const key of declaredPropKeys.map(camelize)) Object.defineProperty(this, key, {
			get() {
				return this._getProp(key);
			},
			set(val) {
				this._setProp(key, val, true, !this._patching);
			}
		});
	}
	_setAttr(key) {
		if (key.startsWith("data-v-")) return;
		const has = this.hasAttribute(key);
		let value = has ? this.getAttribute(key) : REMOVAL;
		const camelKey = camelize(key);
		if (has && this._numberProps && this._numberProps[camelKey]) value = toNumber(value);
		this._setProp(camelKey, value, false, true);
	}
	/**
	* @internal
	*/
	_getProp(key) {
		return this._props[key];
	}
	/**
	* @internal
	*/
	_setProp(key, val, shouldReflect = true, shouldUpdate = false) {
		if (val !== this._props[key]) {
			this._dirty = true;
			if (val === REMOVAL) delete this._props[key];
			else {
				this._props[key] = val;
				if (key === "key" && this._app) this._app._ceVNode.key = val;
			}
			if (shouldUpdate && this._instance) this._update();
			if (shouldReflect) {
				const ob = this._ob;
				if (ob) {
					this._processMutations(ob.takeRecords());
					ob.disconnect();
				}
				if (val === true) this.setAttribute(hyphenate(key), "");
				else if (typeof val === "string" || typeof val === "number") this.setAttribute(hyphenate(key), val + "");
				else if (!val) this.removeAttribute(hyphenate(key));
				ob && ob.observe(this, { attributes: true });
			}
		}
	}
	_update() {
		const vnode = this._createVNode();
		if (this._app) vnode.appContext = this._app._context;
		render(vnode, this._root);
	}
	_createVNode() {
		const baseProps = {};
		if (!this.shadowRoot) baseProps.onVnodeMounted = baseProps.onVnodeUpdated = this._renderSlots.bind(this);
		const vnode = createVNode(this._def, extend(baseProps, this._props));
		if (!this._instance) vnode.ce = (instance) => {
			this._instance = instance;
			instance.ce = this;
			instance.isCE = true;
			const dispatch = (event, args) => {
				this.dispatchEvent(new CustomEvent(event, isPlainObject$2(args[0]) ? extend({ detail: args }, args[0]) : { detail: args }));
			};
			instance.emit = (event, ...args) => {
				dispatch(event, args);
				if (hyphenate(event) !== event) dispatch(hyphenate(event), args);
			};
			this._setParent();
		};
		return vnode;
	}
	_applyStyles(styles, owner, parentComp) {
		if (!styles) return;
		if (owner) {
			if (owner === this._def || this._styleChildren.has(owner)) return;
			this._styleChildren.add(owner);
		}
		const nonce = this._nonce;
		const root = this.shadowRoot;
		const insertionAnchor = parentComp ? this._getStyleAnchor(parentComp) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(root);
		let last = null;
		for (let i = styles.length - 1; i >= 0; i--) {
			const s = document.createElement("style");
			if (nonce) s.setAttribute("nonce", nonce);
			s.textContent = styles[i];
			root.insertBefore(s, last || insertionAnchor);
			last = s;
			if (i === 0) {
				if (!parentComp) this._styleAnchors.set(this._def, s);
				if (owner) this._styleAnchors.set(owner, s);
			}
		}
	}
	_getStyleAnchor(comp) {
		if (!comp) return null;
		const anchor = this._styleAnchors.get(comp);
		if (anchor && anchor.parentNode === this.shadowRoot) return anchor;
		if (anchor) this._styleAnchors.delete(comp);
		return null;
	}
	_getRootStyleInsertionAnchor(root) {
		for (let i = 0; i < root.childNodes.length; i++) {
			const node = root.childNodes[i];
			if (!(node instanceof HTMLStyleElement)) return node;
		}
		return null;
	}
	/**
	* Only called when shadowRoot is false
	*/
	_parseSlots() {
		const slots = this._slots = {};
		let n;
		while (n = this.firstChild) {
			const slotName = n.nodeType === 1 && n.getAttribute("slot") || "default";
			(slots[slotName] || (slots[slotName] = [])).push(n);
			this.removeChild(n);
		}
	}
	/**
	* Only called when shadowRoot is false
	*/
	_renderSlots() {
		const outlets = this._getSlots();
		const scopeId = this._instance.type.__scopeId;
		for (let i = 0; i < outlets.length; i++) {
			const o = outlets[i];
			const slotName = o.getAttribute("name") || "default";
			const content = this._slots[slotName];
			const parent = o.parentNode;
			if (content) for (const n of content) {
				if (scopeId && n.nodeType === 1) {
					const id = scopeId + "-s";
					const walker = document.createTreeWalker(n, 1);
					n.setAttribute(id, "");
					let child;
					while (child = walker.nextNode()) child.setAttribute(id, "");
				}
				parent.insertBefore(n, o);
			}
			else while (o.firstChild) parent.insertBefore(o.firstChild, o);
			parent.removeChild(o);
		}
	}
	/**
	* @internal
	*/
	_getSlots() {
		const roots = [this];
		if (this._teleportTargets) roots.push(...this._teleportTargets);
		const slots = /* @__PURE__ */ new Set();
		for (const root of roots) {
			const found = root.querySelectorAll("slot");
			for (let i = 0; i < found.length; i++) slots.add(found[i]);
		}
		return Array.from(slots);
	}
	/**
	* @internal
	*/
	_injectChildStyle(comp, parentComp) {
		this._applyStyles(comp.styles, comp, parentComp);
	}
	/**
	* @internal
	*/
	_beginPatch() {
		this._patching = true;
		this._dirty = false;
	}
	/**
	* @internal
	*/
	_endPatch() {
		this._patching = false;
		if (this._dirty && this._instance) this._update();
	}
	/**
	* @internal
	*/
	_hasShadowRoot() {
		return this._def.shadowRoot !== false;
	}
	/**
	* @internal
	*/
	_removeChildStyle(comp) {}
};
function useHost(caller) {
	const instance = getCurrentInstance$1();
	const el = instance && instance.ce;
	if (el) return el;
	return null;
}
function useShadowRoot() {
	const el = useHost();
	return el && el.shadowRoot;
}
function useCssModule(name = "$style") {
	{
		const instance = getCurrentInstance$1();
		if (!instance) return EMPTY_OBJ;
		const modules = instance.type.__cssModules;
		if (!modules) return EMPTY_OBJ;
		const mod = modules[name];
		if (!mod) return EMPTY_OBJ;
		return mod;
	}
}
var positionMap = /* @__PURE__ */ new WeakMap();
var newPositionMap = /* @__PURE__ */ new WeakMap();
var moveCbKey = /* @__PURE__ */ Symbol("_moveCb");
var enterCbKey = /* @__PURE__ */ Symbol("_enterCb");
var decorate = (t) => {
	delete t.props.mode;
	return t;
};
var TransitionGroup = /* @__PURE__ */ decorate({
	name: "TransitionGroup",
	props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
		tag: String,
		moveClass: String
	}),
	setup(props, { slots }) {
		const instance = getCurrentInstance$1();
		const state = useTransitionState();
		let prevChildren;
		let children;
		onUpdated(() => {
			if (!prevChildren.length) return;
			const moveClass = props.moveClass || `${props.name || "v"}-move`;
			if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
				prevChildren = [];
				return;
			}
			prevChildren.forEach(callPendingCbs);
			prevChildren.forEach(recordPosition);
			const movedChildren = prevChildren.filter(applyTranslation);
			forceReflow(instance.vnode.el);
			movedChildren.forEach((c) => {
				const el = c.el;
				const style = el.style;
				addTransitionClass(el, moveClass);
				style.transform = style.webkitTransform = style.transitionDuration = "";
				const cb = el[moveCbKey] = (e) => {
					if (e && e.target !== el) return;
					if (!e || e.propertyName.endsWith("transform")) {
						el.removeEventListener("transitionend", cb);
						el[moveCbKey] = null;
						removeTransitionClass(el, moveClass);
					}
				};
				el.addEventListener("transitionend", cb);
			});
			prevChildren = [];
		});
		return () => {
			const rawProps = /* @__PURE__ */ toRaw(props);
			const cssTransitionProps = resolveTransitionProps(rawProps);
			let tag = rawProps.tag || Fragment;
			prevChildren = [];
			if (children) for (let i = 0; i < children.length; i++) {
				const child = children[i];
				if (child.el && child.el instanceof Element) {
					prevChildren.push(child);
					setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
					positionMap.set(child, getPosition(child.el));
				}
			}
			children = slots.default ? getTransitionRawChildren(slots.default()) : [];
			for (let i = 0; i < children.length; i++) {
				const child = children[i];
				if (child.key != null) setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
			}
			return createVNode(tag, null, children);
		};
	}
});
function callPendingCbs(c) {
	const el = c.el;
	if (el[moveCbKey]) el[moveCbKey]();
	if (el[enterCbKey]) el[enterCbKey]();
}
function recordPosition(c) {
	newPositionMap.set(c, getPosition(c.el));
}
function applyTranslation(c) {
	const oldPos = positionMap.get(c);
	const newPos = newPositionMap.get(c);
	const dx = oldPos.left - newPos.left;
	const dy = oldPos.top - newPos.top;
	if (dx || dy) {
		const el = c.el;
		const s = el.style;
		const rect = el.getBoundingClientRect();
		let scaleX = 1;
		let scaleY = 1;
		if (el.offsetWidth) scaleX = rect.width / el.offsetWidth;
		if (el.offsetHeight) scaleY = rect.height / el.offsetHeight;
		if (!Number.isFinite(scaleX) || scaleX === 0) scaleX = 1;
		if (!Number.isFinite(scaleY) || scaleY === 0) scaleY = 1;
		if (Math.abs(scaleX - 1) < .01) scaleX = 1;
		if (Math.abs(scaleY - 1) < .01) scaleY = 1;
		s.transform = s.webkitTransform = `translate(${dx / scaleX}px,${dy / scaleY}px)`;
		s.transitionDuration = "0s";
		return c;
	}
}
function getPosition(el) {
	const rect = el.getBoundingClientRect();
	return {
		left: rect.left,
		top: rect.top
	};
}
function hasCSSTransform(el, root, moveClass) {
	const clone = el.cloneNode();
	const _vtc = el[vtcKey];
	if (_vtc) _vtc.forEach((cls) => {
		cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
	});
	moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
	clone.style.display = "none";
	const container = root.nodeType === 1 ? root : root.parentNode;
	container.appendChild(clone);
	const { hasTransform } = getTransitionInfo(clone);
	container.removeChild(clone);
	return hasTransform;
}
var getModelAssigner = (vnode) => {
	const fn = vnode.props["onUpdate:modelValue"] || false;
	return isArray$2(fn) ? (value) => invokeArrayFns(fn, value) : fn;
};
function onCompositionStart(e) {
	e.target.composing = true;
}
function onCompositionEnd(e) {
	const target = e.target;
	if (target.composing) {
		target.composing = false;
		target.dispatchEvent(new Event("input"));
	}
}
var assignKey = /* @__PURE__ */ Symbol("_assign");
function castValue(value, trim, number) {
	if (trim) value = value.trim();
	if (number) value = looseToNumber(value);
	return value;
}
var vModelText = {
	created(el, { modifiers: { lazy, trim, number } }, vnode) {
		el[assignKey] = getModelAssigner(vnode);
		const castToNumber = number || vnode.props && vnode.props.type === "number";
		addEventListener(el, lazy ? "change" : "input", (e) => {
			if (e.target.composing) return;
			el[assignKey](castValue(el.value, trim, castToNumber));
		});
		if (trim || castToNumber) addEventListener(el, "change", () => {
			el.value = castValue(el.value, trim, castToNumber);
		});
		if (!lazy) {
			addEventListener(el, "compositionstart", onCompositionStart);
			addEventListener(el, "compositionend", onCompositionEnd);
			addEventListener(el, "change", onCompositionEnd);
		}
	},
	mounted(el, { value }) {
		el.value = value == null ? "" : value;
	},
	beforeUpdate(el, { value, oldValue, modifiers: { lazy, trim, number } }, vnode) {
		el[assignKey] = getModelAssigner(vnode);
		if (el.composing) return;
		const elValue = (number || el.type === "number") && !/^0\d/.test(el.value) ? looseToNumber(el.value) : el.value;
		const newValue = value == null ? "" : value;
		if (elValue === newValue) return;
		if (document.activeElement === el && el.type !== "range") {
			if (lazy && value === oldValue) return;
			if (trim && el.value.trim() === newValue) return;
		}
		el.value = newValue;
	}
};
var vModelCheckbox = {
	deep: true,
	created(el, _, vnode) {
		el[assignKey] = getModelAssigner(vnode);
		addEventListener(el, "change", () => {
			const modelValue = el._modelValue;
			const elementValue = getValue(el);
			const checked = el.checked;
			const assign = el[assignKey];
			if (isArray$2(modelValue)) {
				const index = looseIndexOf(modelValue, elementValue);
				const found = index !== -1;
				if (checked && !found) assign(modelValue.concat(elementValue));
				else if (!checked && found) {
					const filtered = [...modelValue];
					filtered.splice(index, 1);
					assign(filtered);
				}
			} else if (isSet(modelValue)) {
				const cloned = new Set(modelValue);
				if (checked) cloned.add(elementValue);
				else cloned.delete(elementValue);
				assign(cloned);
			} else assign(getCheckboxValue(el, checked));
		});
	},
	mounted: setChecked,
	beforeUpdate(el, binding, vnode) {
		el[assignKey] = getModelAssigner(vnode);
		setChecked(el, binding, vnode);
	}
};
function setChecked(el, { value, oldValue }, vnode) {
	el._modelValue = value;
	let checked;
	if (isArray$2(value)) checked = looseIndexOf(value, vnode.props.value) > -1;
	else if (isSet(value)) checked = value.has(vnode.props.value);
	else {
		if (value === oldValue) return;
		checked = looseEqual(value, getCheckboxValue(el, true));
	}
	if (el.checked !== checked) el.checked = checked;
}
var vModelRadio = {
	created(el, { value }, vnode) {
		el.checked = looseEqual(value, vnode.props.value);
		el[assignKey] = getModelAssigner(vnode);
		addEventListener(el, "change", () => {
			el[assignKey](getValue(el));
		});
	},
	beforeUpdate(el, { value, oldValue }, vnode) {
		el[assignKey] = getModelAssigner(vnode);
		if (value !== oldValue) el.checked = looseEqual(value, vnode.props.value);
	}
};
var vModelSelect = {
	deep: true,
	created(el, { value, modifiers: { number } }, vnode) {
		const isSetModel = isSet(value);
		addEventListener(el, "change", () => {
			const selectedVal = Array.prototype.filter.call(el.options, (o) => o.selected).map((o) => number ? looseToNumber(getValue(o)) : getValue(o));
			el[assignKey](el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
			el._assigning = true;
			nextTick(() => {
				el._assigning = false;
			});
		});
		el[assignKey] = getModelAssigner(vnode);
	},
	mounted(el, { value }) {
		setSelected(el, value);
	},
	beforeUpdate(el, _binding, vnode) {
		el[assignKey] = getModelAssigner(vnode);
	},
	updated(el, { value }) {
		if (!el._assigning) setSelected(el, value);
	}
};
function setSelected(el, value) {
	const isMultiple = el.multiple;
	const isArrayValue = isArray$2(value);
	if (isMultiple && !isArrayValue && !isSet(value)) return;
	for (let i = 0, l = el.options.length; i < l; i++) {
		const option = el.options[i];
		const optionValue = getValue(option);
		if (isMultiple) if (isArrayValue) {
			const optionType = typeof optionValue;
			if (optionType === "string" || optionType === "number") option.selected = value.some((v) => String(v) === String(optionValue));
			else option.selected = looseIndexOf(value, optionValue) > -1;
		} else option.selected = value.has(optionValue);
		else if (looseEqual(getValue(option), value)) {
			if (el.selectedIndex !== i) el.selectedIndex = i;
			return;
		}
	}
	if (!isMultiple && el.selectedIndex !== -1) el.selectedIndex = -1;
}
function getValue(el) {
	return "_value" in el ? el._value : el.value;
}
function getCheckboxValue(el, checked) {
	const key = checked ? "_trueValue" : "_falseValue";
	return key in el ? el[key] : checked;
}
var vModelDynamic = {
	created(el, binding, vnode) {
		callModelHook(el, binding, vnode, null, "created");
	},
	mounted(el, binding, vnode) {
		callModelHook(el, binding, vnode, null, "mounted");
	},
	beforeUpdate(el, binding, vnode, prevVNode) {
		callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
	},
	updated(el, binding, vnode, prevVNode) {
		callModelHook(el, binding, vnode, prevVNode, "updated");
	}
};
function resolveDynamicModel(tagName, type) {
	switch (tagName) {
		case "SELECT": return vModelSelect;
		case "TEXTAREA": return vModelText;
		default: switch (type) {
			case "checkbox": return vModelCheckbox;
			case "radio": return vModelRadio;
			default: return vModelText;
		}
	}
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
	const fn = resolveDynamicModel(el.tagName, vnode.props && vnode.props.type)[hook];
	fn && fn(el, binding, vnode, prevVNode);
}
function initVModelForSSR() {
	vModelText.getSSRProps = ({ value }) => ({ value });
	vModelRadio.getSSRProps = ({ value }, vnode) => {
		if (vnode.props && looseEqual(vnode.props.value, value)) return { checked: true };
	};
	vModelCheckbox.getSSRProps = ({ value }, vnode) => {
		if (isArray$2(value)) {
			if (vnode.props && looseIndexOf(value, vnode.props.value) > -1) return { checked: true };
		} else if (isSet(value)) {
			if (vnode.props && value.has(vnode.props.value)) return { checked: true };
		} else if (value) return { checked: true };
	};
	vModelDynamic.getSSRProps = (binding, vnode) => {
		if (typeof vnode.type !== "string") return;
		const modelToUse = resolveDynamicModel(vnode.type.toUpperCase(), vnode.props && vnode.props.type);
		if (modelToUse.getSSRProps) return modelToUse.getSSRProps(binding, vnode);
	};
}
var systemModifiers = [
	"ctrl",
	"shift",
	"alt",
	"meta"
];
var modifierGuards = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
};
var withModifiers = (fn, modifiers) => {
	if (!fn) return fn;
	const cache = fn._withMods || (fn._withMods = {});
	const cacheKey = modifiers.join(".");
	return cache[cacheKey] || (cache[cacheKey] = ((event, ...args) => {
		for (let i = 0; i < modifiers.length; i++) {
			const guard = modifierGuards[modifiers[i]];
			if (guard && guard(event, modifiers)) return;
		}
		return fn(event, ...args);
	}));
};
var keyNames = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
};
var withKeys = (fn, modifiers) => {
	const cache = fn._withKeys || (fn._withKeys = {});
	const cacheKey = modifiers.join(".");
	return cache[cacheKey] || (cache[cacheKey] = ((event) => {
		if (!("key" in event)) return;
		const eventKey = hyphenate(event.key);
		if (modifiers.some((k) => k === eventKey || keyNames[k] === eventKey)) return fn(event);
	}));
};
var rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
var renderer;
var enabledHydration = false;
function ensureRenderer() {
	return renderer || (renderer = createRenderer(rendererOptions));
}
function ensureHydrationRenderer() {
	renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
	enabledHydration = true;
	return renderer;
}
var render = ((...args) => {
	ensureRenderer().render(...args);
});
var hydrate = ((...args) => {
	ensureHydrationRenderer().hydrate(...args);
});
var createApp = ((...args) => {
	const app = ensureRenderer().createApp(...args);
	const { mount } = app;
	app.mount = (containerOrSelector) => {
		const container = normalizeContainer(containerOrSelector);
		if (!container) return;
		const component = app._component;
		if (!isFunction$1(component) && !component.render && !component.template) component.template = container.innerHTML;
		if (container.nodeType === 1) container.textContent = "";
		const proxy = mount(container, false, resolveRootNamespace(container));
		if (container instanceof Element) {
			container.removeAttribute("v-cloak");
			container.setAttribute("data-v-app", "");
		}
		return proxy;
	};
	return app;
});
var createSSRApp = ((...args) => {
	const app = ensureHydrationRenderer().createApp(...args);
	const { mount } = app;
	app.mount = (containerOrSelector) => {
		const container = normalizeContainer(containerOrSelector);
		if (container) return mount(container, true, resolveRootNamespace(container));
	};
	return app;
});
function resolveRootNamespace(container) {
	if (container instanceof SVGElement) return "svg";
	if (typeof MathMLElement === "function" && container instanceof MathMLElement) return "mathml";
}
function normalizeContainer(container) {
	if (isString$1(container)) return document.querySelector(container);
	return container;
}
var ssrDirectiveInitialized = false;
var initDirectivesForSSR = () => {
	if (!ssrDirectiveInitialized) {
		ssrDirectiveInitialized = true;
		initVModelForSSR();
		initVShowForSSR();
	}
};
//#endregion
//#region node_modules/vue/dist/vue.runtime.esm-bundler.js
var vue_runtime_esm_bundler_exports = /* @__PURE__ */ __exportAll({
	BaseTransition: () => BaseTransition,
	BaseTransitionPropsValidators: () => BaseTransitionPropsValidators,
	Comment: () => Comment,
	DeprecationTypes: () => null,
	EffectScope: () => EffectScope,
	ErrorCodes: () => ErrorCodes,
	ErrorTypeStrings: () => ErrorTypeStrings,
	Fragment: () => Fragment,
	KeepAlive: () => KeepAlive,
	ReactiveEffect: () => ReactiveEffect,
	Static: () => Static,
	Suspense: () => Suspense,
	Teleport: () => Teleport,
	Text: () => Text,
	TrackOpTypes: () => TrackOpTypes,
	Transition: () => Transition,
	TransitionGroup: () => TransitionGroup,
	TriggerOpTypes: () => TriggerOpTypes,
	VueElement: () => VueElement,
	assertNumber: () => assertNumber,
	callWithAsyncErrorHandling: () => callWithAsyncErrorHandling,
	callWithErrorHandling: () => callWithErrorHandling,
	camelize: () => camelize,
	capitalize: () => capitalize$1,
	cloneVNode: () => cloneVNode,
	compatUtils: () => null,
	compile: () => compile$1,
	computed: () => computed,
	createApp: () => createApp,
	createBlock: () => createBlock,
	createCommentVNode: () => createCommentVNode,
	createElementBlock: () => createElementBlock,
	createElementVNode: () => createBaseVNode,
	createHydrationRenderer: () => createHydrationRenderer,
	createPropsRestProxy: () => createPropsRestProxy,
	createRenderer: () => createRenderer,
	createSSRApp: () => createSSRApp,
	createSlots: () => createSlots,
	createStaticVNode: () => createStaticVNode,
	createTextVNode: () => createTextVNode,
	createVNode: () => createVNode,
	customRef: () => customRef,
	defineAsyncComponent: () => defineAsyncComponent,
	defineComponent: () => defineComponent,
	defineCustomElement: () => defineCustomElement,
	defineEmits: () => defineEmits,
	defineExpose: () => defineExpose,
	defineModel: () => defineModel,
	defineOptions: () => defineOptions,
	defineProps: () => defineProps,
	defineSSRCustomElement: () => defineSSRCustomElement,
	defineSlots: () => defineSlots,
	devtools: () => devtools$2,
	effect: () => effect,
	effectScope: () => effectScope,
	getCurrentInstance: () => getCurrentInstance$1,
	getCurrentScope: () => getCurrentScope,
	getCurrentWatcher: () => getCurrentWatcher,
	getTransitionRawChildren: () => getTransitionRawChildren,
	guardReactiveProps: () => guardReactiveProps,
	h: () => h,
	handleError: () => handleError,
	hasInjectionContext: () => hasInjectionContext,
	hydrate: () => hydrate,
	hydrateOnIdle: () => hydrateOnIdle,
	hydrateOnInteraction: () => hydrateOnInteraction,
	hydrateOnMediaQuery: () => hydrateOnMediaQuery,
	hydrateOnVisible: () => hydrateOnVisible,
	initCustomFormatter: () => initCustomFormatter,
	initDirectivesForSSR: () => initDirectivesForSSR,
	inject: () => inject,
	isMemoSame: () => isMemoSame,
	isProxy: () => isProxy,
	isReactive: () => isReactive,
	isReadonly: () => isReadonly,
	isRef: () => isRef,
	isRuntimeOnly: () => isRuntimeOnly,
	isShallow: () => isShallow,
	isVNode: () => isVNode$1,
	markRaw: () => markRaw,
	mergeDefaults: () => mergeDefaults,
	mergeModels: () => mergeModels,
	mergeProps: () => mergeProps,
	nextTick: () => nextTick,
	nodeOps: () => nodeOps,
	normalizeClass: () => normalizeClass,
	normalizeProps: () => normalizeProps,
	normalizeStyle: () => normalizeStyle,
	onActivated: () => onActivated,
	onBeforeMount: () => onBeforeMount,
	onBeforeUnmount: () => onBeforeUnmount,
	onBeforeUpdate: () => onBeforeUpdate,
	onDeactivated: () => onDeactivated,
	onErrorCaptured: () => onErrorCaptured,
	onMounted: () => onMounted,
	onRenderTracked: () => onRenderTracked,
	onRenderTriggered: () => onRenderTriggered,
	onScopeDispose: () => onScopeDispose,
	onServerPrefetch: () => onServerPrefetch,
	onUnmounted: () => onUnmounted,
	onUpdated: () => onUpdated,
	onWatcherCleanup: () => onWatcherCleanup,
	openBlock: () => openBlock,
	patchProp: () => patchProp,
	popScopeId: () => popScopeId,
	provide: () => provide,
	proxyRefs: () => proxyRefs,
	pushScopeId: () => pushScopeId,
	queuePostFlushCb: () => queuePostFlushCb,
	reactive: () => reactive,
	readonly: () => readonly,
	ref: () => ref,
	registerRuntimeCompiler: () => registerRuntimeCompiler,
	render: () => render,
	renderList: () => renderList,
	renderSlot: () => renderSlot,
	resolveComponent: () => resolveComponent,
	resolveDirective: () => resolveDirective,
	resolveDynamicComponent: () => resolveDynamicComponent,
	resolveFilter: () => null,
	resolveTransitionHooks: () => resolveTransitionHooks,
	setBlockTracking: () => setBlockTracking,
	setDevtoolsHook: () => setDevtoolsHook,
	setTransitionHooks: () => setTransitionHooks,
	shallowReactive: () => shallowReactive,
	shallowReadonly: () => shallowReadonly,
	shallowRef: () => shallowRef,
	ssrContextKey: () => ssrContextKey,
	ssrUtils: () => ssrUtils,
	stop: () => stop,
	toDisplayString: () => toDisplayString$1,
	toHandlerKey: () => toHandlerKey,
	toHandlers: () => toHandlers,
	toRaw: () => toRaw,
	toRef: () => toRef,
	toRefs: () => toRefs,
	toValue: () => toValue,
	transformVNodeArgs: () => transformVNodeArgs,
	triggerRef: () => triggerRef,
	unref: () => unref,
	useAttrs: () => useAttrs,
	useCssModule: () => useCssModule,
	useCssVars: () => useCssVars,
	useHost: () => useHost,
	useId: () => useId,
	useModel: () => useModel,
	useSSRContext: () => useSSRContext,
	useShadowRoot: () => useShadowRoot,
	useSlots: () => useSlots,
	useTemplateRef: () => useTemplateRef,
	useTransitionState: () => useTransitionState,
	vModelCheckbox: () => vModelCheckbox,
	vModelDynamic: () => vModelDynamic,
	vModelRadio: () => vModelRadio,
	vModelSelect: () => vModelSelect,
	vModelText: () => vModelText,
	vShow: () => vShow,
	version: () => version,
	warn: () => warn$1,
	watch: () => watch,
	watchEffect: () => watchEffect,
	watchPostEffect: () => watchPostEffect,
	watchSyncEffect: () => watchSyncEffect,
	withAsyncContext: () => withAsyncContext,
	withCtx: () => withCtx,
	withDefaults: () => withDefaults,
	withDirectives: () => withDirectives,
	withKeys: () => withKeys,
	withMemo: () => withMemo,
	withModifiers: () => withModifiers,
	withScopeId: () => withScopeId
});
var compile$1 = () => {};
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
/*!
* pinia v3.0.4
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
var IS_CLIENT = typeof window !== "undefined";
/**
* setActivePinia must be called to handle SSR at the top of functions like
* `fetch`, `setup`, `serverPrefetch` and others
*/
var activePinia;
/**
* Sets or unsets the active pinia. Used in SSR and internally when calling
* actions and getters
*
* @param pinia - Pinia instance
*/
var setActivePinia = (pinia) => activePinia = pinia;
var piniaSymbol = Symbol();
function isPlainObject$1(o) {
	return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
/**
* Possible types for SubscriptionCallback
*/
var MutationType;
(function(MutationType) {
	/**
	* Direct mutation of the state:
	*
	* - `store.name = 'new name'`
	* - `store.$state.name = 'new name'`
	* - `store.list.push('new item')`
	*/
	MutationType["direct"] = "direct";
	/**
	* Mutated the state with `$patch` and an object
	*
	* - `store.$patch({ name: 'newName' })`
	*/
	MutationType["patchObject"] = "patch object";
	/**
	* Mutated the state with `$patch` and a function
	*
	* - `store.$patch(state => state.name = 'newName')`
	*/
	MutationType["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
var _global = typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null };
function bom(blob, { autoBom = false } = {}) {
	if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
	return blob;
}
function download(url, name, opts) {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	xhr.responseType = "blob";
	xhr.onload = function() {
		saveAs(xhr.response, name, opts);
	};
	xhr.onerror = function() {
		console.error("could not download file");
	};
	xhr.send();
}
function corsEnabled(url) {
	const xhr = new XMLHttpRequest();
	xhr.open("HEAD", url, false);
	try {
		xhr.send();
	} catch (e) {}
	return xhr.status >= 200 && xhr.status <= 299;
}
function click(node) {
	try {
		node.dispatchEvent(new MouseEvent("click"));
	} catch (e) {
		const evt = new MouseEvent("click", {
			bubbles: true,
			cancelable: true,
			view: window,
			detail: 0,
			screenX: 80,
			screenY: 20,
			clientX: 80,
			clientY: 20,
			ctrlKey: false,
			altKey: false,
			shiftKey: false,
			metaKey: false,
			button: 0,
			relatedTarget: null
		});
		node.dispatchEvent(evt);
	}
}
var _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
var isMacOSWebView = /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent);
var saveAs = !IS_CLIENT ? () => {} : typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : "msSaveOrOpenBlob" in _navigator ? msSaveAs : fileSaverSaveAs;
function downloadSaveAs(blob, name = "download", opts) {
	const a = document.createElement("a");
	a.download = name;
	a.rel = "noopener";
	if (typeof blob === "string") {
		a.href = blob;
		if (a.origin !== location.origin) if (corsEnabled(a.href)) download(blob, name, opts);
		else {
			a.target = "_blank";
			click(a);
		}
		else click(a);
	} else {
		a.href = URL.createObjectURL(blob);
		setTimeout(function() {
			URL.revokeObjectURL(a.href);
		}, 4e4);
		setTimeout(function() {
			click(a);
		}, 0);
	}
}
function msSaveAs(blob, name = "download", opts) {
	if (typeof blob === "string") if (corsEnabled(blob)) download(blob, name, opts);
	else {
		const a = document.createElement("a");
		a.href = blob;
		a.target = "_blank";
		setTimeout(function() {
			click(a);
		});
	}
	else navigator.msSaveOrOpenBlob(bom(blob, opts), name);
}
function fileSaverSaveAs(blob, name, opts, popup) {
	popup = popup || open("", "_blank");
	if (popup) popup.document.title = popup.document.body.innerText = "downloading...";
	if (typeof blob === "string") return download(blob, name, opts);
	const force = blob.type === "application/octet-stream";
	const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
	const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
		const reader = new FileReader();
		reader.onloadend = function() {
			let url = reader.result;
			if (typeof url !== "string") {
				popup = null;
				throw new Error("Wrong reader.result type");
			}
			url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
			if (popup) popup.location.href = url;
			else location.assign(url);
			popup = null;
		};
		reader.readAsDataURL(blob);
	} else {
		const url = URL.createObjectURL(blob);
		if (popup) popup.location.assign(url);
		else location.href = url;
		popup = null;
		setTimeout(function() {
			URL.revokeObjectURL(url);
		}, 4e4);
	}
}
var { assign: assign$1$1 } = Object;
/**
* Creates a Pinia instance to be used by the application
*/
function createPinia() {
	const scope = effectScope(true);
	const state = scope.run(() => /* @__PURE__ */ ref({}));
	let _p = [];
	let toBeInstalled = [];
	const pinia = markRaw({
		install(app) {
			setActivePinia(pinia);
			pinia._a = app;
			app.provide(piniaSymbol, pinia);
			app.config.globalProperties.$pinia = pinia;
			toBeInstalled.forEach((plugin) => _p.push(plugin));
			toBeInstalled = [];
		},
		use(plugin) {
			if (!this._a) toBeInstalled.push(plugin);
			else _p.push(plugin);
			return this;
		},
		_p,
		_a: null,
		_e: scope,
		_s: /* @__PURE__ */ new Map(),
		state
	});
	return pinia;
}
var noop$1 = () => {};
function addSubscription(subscriptions, callback, detached, onCleanup = noop$1) {
	subscriptions.add(callback);
	const removeSubscription = () => {
		subscriptions.delete(callback) && onCleanup();
	};
	if (!detached && getCurrentScope()) onScopeDispose(removeSubscription);
	return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
	subscriptions.forEach((callback) => {
		callback(...args);
	});
}
var fallbackRunWithContext = (fn) => fn();
/**
* Marks a function as an action for `$onAction`
* @internal
*/
var ACTION_MARKER = Symbol();
/**
* Action name symbol. Allows to add a name to an action after defining it
* @internal
*/
var ACTION_NAME = Symbol();
function mergeReactiveObjects(target, patchToApply) {
	if (target instanceof Map && patchToApply instanceof Map) patchToApply.forEach((value, key) => target.set(key, value));
	else if (target instanceof Set && patchToApply instanceof Set) patchToApply.forEach(target.add, target);
	for (const key in patchToApply) {
		if (!patchToApply.hasOwnProperty(key)) continue;
		const subPatch = patchToApply[key];
		const targetValue = target[key];
		if (isPlainObject$1(targetValue) && isPlainObject$1(subPatch) && target.hasOwnProperty(key) && !/* @__PURE__ */ isRef(subPatch) && !/* @__PURE__ */ isReactive(subPatch)) target[key] = mergeReactiveObjects(targetValue, subPatch);
		else target[key] = subPatch;
	}
	return target;
}
var skipHydrateSymbol = Symbol();
/**
* Returns whether a value should be hydrated
*
* @param obj - target variable
* @returns true if `obj` should be hydrated
*/
function shouldHydrate(obj) {
	return !isPlainObject$1(obj) || !Object.prototype.hasOwnProperty.call(obj, skipHydrateSymbol);
}
var { assign: assign$2 } = Object;
function isComputed(o) {
	return !!(/* @__PURE__ */ isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
	const { state, actions, getters } = options;
	const initialState = pinia.state.value[id];
	let store;
	function setup() {
		if (!initialState && true)
 /* istanbul ignore if */
		pinia.state.value[id] = state ? state() : {};
		return assign$2(/* @__PURE__ */ toRefs(pinia.state.value[id]), actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
			computedGetters[name] = markRaw(computed(() => {
				setActivePinia(pinia);
				const store = pinia._s.get(id);
				return getters[name].call(store, store);
			}));
			return computedGetters;
		}, {}));
	}
	store = createSetupStore(id, setup, options, pinia, hot, true);
	return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
	let scope;
	const optionsForPlugin = assign$2({ actions: {} }, options);
	const $subscribeOptions = { deep: true };
	let isListening;
	let isSyncListening;
	let subscriptions = /* @__PURE__ */ new Set();
	let actionSubscriptions = /* @__PURE__ */ new Set();
	let debuggerEvents;
	const initialState = pinia.state.value[$id];
	if (!isOptionsStore && !initialState && true)
 /* istanbul ignore if */
	pinia.state.value[$id] = {};
	let activeListener;
	function $patch(partialStateOrMutator) {
		let subscriptionMutation;
		isListening = isSyncListening = false;
		if (typeof partialStateOrMutator === "function") {
			partialStateOrMutator(pinia.state.value[$id]);
			subscriptionMutation = {
				type: MutationType.patchFunction,
				storeId: $id,
				events: debuggerEvents
			};
		} else {
			mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
			subscriptionMutation = {
				type: MutationType.patchObject,
				payload: partialStateOrMutator,
				storeId: $id,
				events: debuggerEvents
			};
		}
		const myListenerId = activeListener = Symbol();
		nextTick().then(() => {
			if (activeListener === myListenerId) isListening = true;
		});
		isSyncListening = true;
		triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
	}
	const $reset = isOptionsStore ? function $reset() {
		const { state } = options;
		const newState = state ? state() : {};
		this.$patch(($state) => {
			assign$2($state, newState);
		});
	} : noop$1;
	function $dispose() {
		scope.stop();
		subscriptions.clear();
		actionSubscriptions.clear();
		pinia._s.delete($id);
	}
	/**
	* Helper that wraps function so it can be tracked with $onAction
	* @param fn - action to wrap
	* @param name - name of the action
	*/
	const action = (fn, name = "") => {
		if (ACTION_MARKER in fn) {
			fn[ACTION_NAME] = name;
			return fn;
		}
		const wrappedAction = function() {
			setActivePinia(pinia);
			const args = Array.from(arguments);
			const afterCallbackSet = /* @__PURE__ */ new Set();
			const onErrorCallbackSet = /* @__PURE__ */ new Set();
			function after(callback) {
				afterCallbackSet.add(callback);
			}
			function onError(callback) {
				onErrorCallbackSet.add(callback);
			}
			triggerSubscriptions(actionSubscriptions, {
				args,
				name: wrappedAction[ACTION_NAME],
				store,
				after,
				onError
			});
			let ret;
			try {
				ret = fn.apply(this && this.$id === $id ? this : store, args);
			} catch (error) {
				triggerSubscriptions(onErrorCallbackSet, error);
				throw error;
			}
			if (ret instanceof Promise) return ret.then((value) => {
				triggerSubscriptions(afterCallbackSet, value);
				return value;
			}).catch((error) => {
				triggerSubscriptions(onErrorCallbackSet, error);
				return Promise.reject(error);
			});
			triggerSubscriptions(afterCallbackSet, ret);
			return ret;
		};
		wrappedAction[ACTION_MARKER] = true;
		wrappedAction[ACTION_NAME] = name;
		return wrappedAction;
	};
	const store = /* @__PURE__ */ reactive({
		_p: pinia,
		$id,
		$onAction: addSubscription.bind(null, actionSubscriptions),
		$patch,
		$reset,
		$subscribe(callback, options = {}) {
			const removeSubscription = addSubscription(subscriptions, callback, options.detached, () => stopWatcher());
			const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
				if (options.flush === "sync" ? isSyncListening : isListening) callback({
					storeId: $id,
					type: MutationType.direct,
					events: debuggerEvents
				}, state);
			}, assign$2({}, $subscribeOptions, options)));
			return removeSubscription;
		},
		$dispose
	});
	pinia._s.set($id, store);
	const setupStore = (pinia._a && pinia._a.runWithContext || fallbackRunWithContext)(() => pinia._e.run(() => (scope = effectScope()).run(() => setup({ action }))));
	for (const key in setupStore) {
		const prop = setupStore[key];
		if (/* @__PURE__ */ isRef(prop) && !isComputed(prop) || /* @__PURE__ */ isReactive(prop)) {
			if (!isOptionsStore) {
				if (initialState && shouldHydrate(prop)) if (/* @__PURE__ */ isRef(prop)) prop.value = initialState[key];
				else mergeReactiveObjects(prop, initialState[key]);
				pinia.state.value[$id][key] = prop;
			}
		} else if (typeof prop === "function") {
			setupStore[key] = action(prop, key);
			optionsForPlugin.actions[key] = prop;
		}
	}
	/* istanbul ignore if */
	assign$2(store, setupStore);
	assign$2(/* @__PURE__ */ toRaw(store), setupStore);
	Object.defineProperty(store, "$state", {
		get: () => pinia.state.value[$id],
		set: (state) => {
			$patch(($state) => {
				assign$2($state, state);
			});
		}
	});
	pinia._p.forEach((extender) => {
		assign$2(store, scope.run(() => extender({
			store,
			app: pinia._a,
			pinia,
			options: optionsForPlugin
		})));
	});
	if (initialState && isOptionsStore && options.hydrate) options.hydrate(store.$state, initialState);
	isListening = true;
	isSyncListening = true;
	return store;
}
/*! #__NO_SIDE_EFFECTS__ */
function defineStore(id, setup, setupOptions) {
	let options;
	const isSetupStore = typeof setup === "function";
	options = isSetupStore ? setupOptions : setup;
	function useStore(pinia, hot) {
		const hasContext = hasInjectionContext();
		pinia = pinia || (hasContext ? inject(piniaSymbol, null) : null);
		if (pinia) setActivePinia(pinia);
		pinia = activePinia;
		if (!pinia._s.has(id)) if (isSetupStore) createSetupStore(id, setup, options, pinia);
		else createOptionsStore(id, options, pinia);
		return pinia._s.get(id);
	}
	useStore.$id = id;
	return useStore;
}
/**
* Allows using state and getters from one store without using the composition
* API (`setup()`) by generating an object to be spread in the `computed` field
* of a component.
*
* @param useStore - store to map from
* @param keysOrMapper - array or object
*/
function mapState(useStore, keysOrMapper) {
	return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
		reduced[key] = function() {
			return useStore(this.$pinia)[key];
		};
		return reduced;
	}, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
		reduced[key] = function() {
			const store = useStore(this.$pinia);
			const storeKey = keysOrMapper[key];
			return typeof storeKey === "function" ? storeKey.call(this, store) : store[storeKey];
		};
		return reduced;
	}, {});
}
//#endregion
//#region node_modules/vue-router/dist/useApi-C8XBqGtv.js
var isBrowser = typeof document !== "undefined";
/**
* Allows differentiating lazy components from functional components and vue-class-component
* @internal
*
* @param component
*/
function isRouteComponent(component) {
	return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function isESModule(obj) {
	return obj.__esModule || obj[Symbol.toStringTag] === "Module" || obj.default && isRouteComponent(obj.default);
}
var assign$1 = Object.assign;
function applyToParams(fn, params) {
	const newParams = {};
	for (const key in params) {
		const value = params[key];
		newParams[key] = isArray$1(value) ? value.map(fn) : fn(value);
	}
	return newParams;
}
var noop = () => {};
/**
* Typesafe alternative to Array.isArray
* https://github.com/microsoft/TypeScript/pull/48228
*
* @internal
*/
var isArray$1 = Array.isArray;
function mergeOptions(defaults, partialOptions) {
	const options = {};
	for (const key in defaults) options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
	return options;
}
/**
* Flags so we can combine them when checking for multiple errors. This is the internal version of
* {@link NavigationFailureType}.
*
* @internal
*/
var ErrorTypes = /* @__PURE__ */ function(ErrorTypes) {
	ErrorTypes[ErrorTypes["MATCHER_NOT_FOUND"] = 1] = "MATCHER_NOT_FOUND";
	ErrorTypes[ErrorTypes["NAVIGATION_GUARD_REDIRECT"] = 2] = "NAVIGATION_GUARD_REDIRECT";
	ErrorTypes[ErrorTypes["NAVIGATION_ABORTED"] = 4] = "NAVIGATION_ABORTED";
	ErrorTypes[ErrorTypes["NAVIGATION_CANCELLED"] = 8] = "NAVIGATION_CANCELLED";
	ErrorTypes[ErrorTypes["NAVIGATION_DUPLICATED"] = 16] = "NAVIGATION_DUPLICATED";
	return ErrorTypes;
}({});
var NavigationFailureSymbol = Symbol("");
ErrorTypes.MATCHER_NOT_FOUND, ErrorTypes.NAVIGATION_GUARD_REDIRECT, ErrorTypes.NAVIGATION_ABORTED, ErrorTypes.NAVIGATION_CANCELLED, ErrorTypes.NAVIGATION_DUPLICATED;
/**
* Creates a typed NavigationFailure object.
* @internal
* @param type - NavigationFailureType
* @param params - { from, to }
*/
function createRouterError(type, params) {
	return assign$1(/* @__PURE__ */ new Error(), {
		type,
		[NavigationFailureSymbol]: true
	}, params);
}
function isNavigationFailure(error, type) {
	return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
/**
* RouteRecord being rendered by the closest ancestor Router View. Used for
* `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
* Location Matched
*
* @internal
*/
var matchedRouteKey = Symbol("");
/**
* Allows overriding the router view depth to control which component in
* `matched` is rendered. rvd stands for Router View Depth
*
* @internal
*/
var viewDepthKey = Symbol("");
/**
* Allows overriding the router instance returned by `useRouter` in tests. r
* stands for router
*
* @internal
*/
var routerKey = Symbol("");
/**
* Allows overriding the current route returned by `useRoute` in tests. rl
* stands for route location
*
* @internal
*/
var routeLocationKey = Symbol("");
/**
* Allows overriding the current route used by router-view. Internally this is
* used when the `route` prop is passed.
*
* @internal
*/
var routerViewLocationKey = Symbol("");
//#endregion
//#region node_modules/vue-router/dist/devtools-DUDsFuj9.js
/*!
* vue-router v5.0.4
* (c) 2026 Eduardo San Martin Morote
* @license MIT
*/
/**
* Encoding Rules (␣ = Space)
* - Path: ␣ " < > # ? { }
* - Query: ␣ " < > # & =
* - Hash: ␣ " < > `
*
* On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
* defines some extra characters to be encoded. Most browsers do not encode them
* in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
* also encode `!'()*`. Leaving un-encoded only ASCII alphanumeric(`a-zA-Z0-9`)
* plus `-._~`. This extra safety should be applied to query by patching the
* string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
* should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
* into a `/` if directly typed in. The _backtick_ (`````) should also be
* encoded everywhere because some browsers like FF encode it when directly
* written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
*/
var HASH_RE = /#/g;
var AMPERSAND_RE = /&/g;
var SLASH_RE = /\//g;
var EQUAL_RE = /=/g;
var IM_RE = /\?/g;
var PLUS_RE = /\+/g;
/**
* NOTE: It's not clear to me if we should encode the + symbol in queries, it
* seems to be less flexible than not doing so and I can't find out the legacy
* systems requiring this for regular requests like text/html. In the standard,
* the encoding of the plus character is only mentioned for
* application/x-www-form-urlencoded
* (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
* leave the plus character as is in queries. To be more flexible, we allow the
* plus character on the query, but it can also be manually encoded by the user.
*
* Resources:
* - https://url.spec.whatwg.org/#urlencoded-parsing
* - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
*/
var ENC_BRACKET_OPEN_RE = /%5B/g;
var ENC_BRACKET_CLOSE_RE = /%5D/g;
var ENC_CARET_RE = /%5E/g;
var ENC_BACKTICK_RE = /%60/g;
var ENC_CURLY_OPEN_RE = /%7B/g;
var ENC_PIPE_RE = /%7C/g;
var ENC_CURLY_CLOSE_RE = /%7D/g;
var ENC_SPACE_RE = /%20/g;
/**
* Encode characters that need to be encoded on the path, search and hash
* sections of the URL.
*
* @internal
* @param text - string to encode
* @returns encoded string
*/
function commonEncode(text) {
	return text == null ? "" : encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
/**
* Encode characters that need to be encoded on the hash section of the URL.
*
* @param text - string to encode
* @returns encoded string
*/
function encodeHash(text) {
	return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
/**
* Encode characters that need to be encoded query values on the query
* section of the URL.
*
* @param text - string to encode
* @returns encoded string
*/
function encodeQueryValue(text) {
	return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
/**
* Like `encodeQueryValue` but also encodes the `=` character.
*
* @param text - string to encode
*/
function encodeQueryKey(text) {
	return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
/**
* Encode characters that need to be encoded on the path section of the URL.
*
* @param text - string to encode
* @returns encoded string
*/
function encodePath(text) {
	return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
/**
* Encode characters that need to be encoded on the path section of the URL as a
* param. This function encodes everything {@link encodePath} does plus the
* slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
* string instead.
*
* @param text - string to encode
* @returns encoded string
*/
function encodeParam(text) {
	return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
	if (text == null) return null;
	try {
		return decodeURIComponent("" + text);
	} catch (err) {}
	return "" + text;
}
var TRAILING_SLASH_RE = /\/$/;
var removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
/**
* Transforms a URI into a normalized history location
*
* @param parseQuery
* @param location - URI to normalize
* @param currentLocation - current absolute location. Allows resolving relative
* paths. Must start with `/`. Defaults to `/`
* @returns a normalized history location
*/
function parseURL(parseQuery, location, currentLocation = "/") {
	let path, query = {}, searchString = "", hash = "";
	const hashPos = location.indexOf("#");
	let searchPos = location.indexOf("?");
	searchPos = hashPos >= 0 && searchPos > hashPos ? -1 : searchPos;
	if (searchPos >= 0) {
		path = location.slice(0, searchPos);
		searchString = location.slice(searchPos, hashPos > 0 ? hashPos : location.length);
		query = parseQuery(searchString.slice(1));
	}
	if (hashPos >= 0) {
		path = path || location.slice(0, hashPos);
		hash = location.slice(hashPos, location.length);
	}
	path = resolveRelativePath(path != null ? path : location, currentLocation);
	return {
		fullPath: path + searchString + hash,
		path,
		query,
		hash: decode(hash)
	};
}
/**
* Stringifies a URL object
*
* @param stringifyQuery
* @param location
*/
function stringifyURL(stringifyQuery, location) {
	const query = location.query ? stringifyQuery(location.query) : "";
	return location.path + (query && "?") + query + (location.hash || "");
}
/**
* Strips off the base from the beginning of a location.pathname in a non-case-sensitive way.
*
* @param pathname - location.pathname
* @param base - base to strip off
*/
function stripBase(pathname, base) {
	if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase())) return pathname;
	return pathname.slice(base.length) || "/";
}
/**
* Checks if two RouteLocation are equal. This means that both locations are
* pointing towards the same {@link RouteRecord} and that all `params`, `query`
* parameters and `hash` are the same
*
* @param stringifyQuery - A function that takes a query object of type LocationQueryRaw and returns a string representation of it.
* @param a - first {@link RouteLocation}
* @param b - second {@link RouteLocation}
*/
function isSameRouteLocation(stringifyQuery, a, b) {
	const aLastIndex = a.matched.length - 1;
	const bLastIndex = b.matched.length - 1;
	return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery(a.query) === stringifyQuery(b.query) && a.hash === b.hash;
}
/**
* Check if two `RouteRecords` are equal. Takes into account aliases: they are
* considered equal to the `RouteRecord` they are aliasing.
*
* @param a - first {@link RouteRecord}
* @param b - second {@link RouteRecord}
*/
function isSameRouteRecord(a, b) {
	return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
	if (Object.keys(a).length !== Object.keys(b).length) return false;
	for (var key in a) if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
	return true;
}
function isSameRouteLocationParamsValue(a, b) {
	return isArray$1(a) ? isEquivalentArray(a, b) : isArray$1(b) ? isEquivalentArray(b, a) : (a && a.valueOf()) === (b && b.valueOf());
}
/**
* Check if two arrays are the same or if an array with one single entry is the
* same as another primitive value. Used to check query and parameters
*
* @param a - array of values
* @param b - array of values or a single value
*/
function isEquivalentArray(a, b) {
	return isArray$1(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
}
/**
* Resolves a relative path that starts with `.`.
*
* @param to - path location we are resolving
* @param from - currentLocation.path, should start with `/`
*/
function resolveRelativePath(to, from) {
	if (to.startsWith("/")) return to;
	if (!to) return from;
	const fromSegments = from.split("/");
	const toSegments = to.split("/");
	const lastToSegment = toSegments[toSegments.length - 1];
	if (lastToSegment === ".." || lastToSegment === ".") toSegments.push("");
	let position = fromSegments.length - 1;
	let toPosition;
	let segment;
	for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
		segment = toSegments[toPosition];
		if (segment === ".") continue;
		if (segment === "..") {
			if (position > 1) position--;
		} else break;
	}
	return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition).join("/");
}
/**
* Initial route location where the router is. Can be used in navigation guards
* to differentiate the initial navigation.
*
* @example
* ```js
* import { START_LOCATION } from 'vue-router'
*
* router.beforeEach((to, from) => {
*   if (from === START_LOCATION) {
*     // initial navigation
*   }
* })
* ```
*/
var START_LOCATION_NORMALIZED = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
};
var NavigationType = /* @__PURE__ */ function(NavigationType) {
	NavigationType["pop"] = "pop";
	NavigationType["push"] = "push";
	return NavigationType;
}({});
var NavigationDirection = /* @__PURE__ */ function(NavigationDirection) {
	NavigationDirection["back"] = "back";
	NavigationDirection["forward"] = "forward";
	NavigationDirection["unknown"] = "";
	return NavigationDirection;
}({});
/**
* Normalizes a base by removing any trailing slash and reading the base tag if
* present.
*
* @param base - base to normalize
*/
function normalizeBase(base) {
	if (!base) if (isBrowser) {
		const baseEl = document.querySelector("base");
		base = baseEl && baseEl.getAttribute("href") || "/";
		base = base.replace(/^\w+:\/\/[^\/]+/, "");
	} else base = "/";
	if (base[0] !== "/" && base[0] !== "#") base = "/" + base;
	return removeTrailingSlash(base);
}
var BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location) {
	return base.replace(BEFORE_HASH_RE, "#") + location;
}
function getElementPosition(el, offset) {
	const docRect = document.documentElement.getBoundingClientRect();
	const elRect = el.getBoundingClientRect();
	return {
		behavior: offset.behavior,
		left: elRect.left - docRect.left - (offset.left || 0),
		top: elRect.top - docRect.top - (offset.top || 0)
	};
}
var computeScrollPosition = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function scrollToPosition(position) {
	let scrollToOptions;
	if ("el" in position) {
		const positionEl = position.el;
		const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
		const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
		if (!el) return;
		scrollToOptions = getElementPosition(el, position);
	} else scrollToOptions = position;
	if ("scrollBehavior" in document.documentElement.style) window.scrollTo(scrollToOptions);
	else window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.scrollX, scrollToOptions.top != null ? scrollToOptions.top : window.scrollY);
}
function getScrollKey(path, delta) {
	return (history.state ? history.state.position - delta : -1) + path;
}
var scrollPositions = /* @__PURE__ */ new Map();
function saveScrollPosition(key, scrollPosition) {
	scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
	const scroll = scrollPositions.get(key);
	scrollPositions.delete(key);
	return scroll;
}
/**
* ScrollBehavior instance used by the router to compute and restore the scroll
* position when navigating.
*/
function isRouteLocation(route) {
	return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
	return typeof name === "string" || typeof name === "symbol";
}
/**
* Transforms a queryString into a {@link LocationQuery} object. Accept both, a
* version with the leading `?` and without Should work as URLSearchParams

* @internal
*
* @param search - search string to parse
* @returns a query object
*/
function parseQuery(search) {
	const query = {};
	if (search === "" || search === "?") return query;
	const searchParams = (search[0] === "?" ? search.slice(1) : search).split("&");
	for (let i = 0; i < searchParams.length; ++i) {
		const searchParam = searchParams[i].replace(PLUS_RE, " ");
		const eqPos = searchParam.indexOf("=");
		const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
		const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
		if (key in query) {
			let currentValue = query[key];
			if (!isArray$1(currentValue)) currentValue = query[key] = [currentValue];
			currentValue.push(value);
		} else query[key] = value;
	}
	return query;
}
/**
* Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
* doesn't prepend a `?`
*
* @internal
*
* @param query - query object to stringify
* @returns string version of the query without the leading `?`
*/
function stringifyQuery(query) {
	let search = "";
	for (let key in query) {
		const value = query[key];
		key = encodeQueryKey(key);
		if (value == null) {
			if (value !== void 0) search += (search.length ? "&" : "") + key;
			continue;
		}
		(isArray$1(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)]).forEach((value) => {
			if (value !== void 0) {
				search += (search.length ? "&" : "") + key;
				if (value != null) search += "=" + value;
			}
		});
	}
	return search;
}
/**
* Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
* numbers into strings, removing keys with an undefined value and replacing
* undefined with null in arrays
*
* @param query - query object to normalize
* @returns a normalized query object
*/
function normalizeQuery(query) {
	const normalizedQuery = {};
	for (const key in query) {
		const value = query[key];
		if (value !== void 0) normalizedQuery[key] = isArray$1(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
	}
	return normalizedQuery;
}
/**
* Create a list of callbacks that can be reset. Used to create before and after navigation guards list
*/
function useCallbacks() {
	let handlers = [];
	function add(handler) {
		handlers.push(handler);
		return () => {
			const i = handlers.indexOf(handler);
			if (i > -1) handlers.splice(i, 1);
		};
	}
	function reset() {
		handlers = [];
	}
	return {
		add,
		list: () => handlers.slice(),
		reset
	};
}
function guardToPromiseFn(guard, to, from, record, name, runWithContext = (fn) => fn()) {
	const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
	return () => new Promise((resolve, reject) => {
		const next = (valid) => {
			if (valid === false) reject(createRouterError(ErrorTypes.NAVIGATION_ABORTED, {
				from,
				to
			}));
			else if (valid instanceof Error) reject(valid);
			else if (isRouteLocation(valid)) reject(createRouterError(ErrorTypes.NAVIGATION_GUARD_REDIRECT, {
				from: to,
				to: valid
			}));
			else {
				if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") enterCallbackArray.push(valid);
				resolve();
			}
		};
		const guardReturn = runWithContext(() => guard.call(record && record.instances[name], to, from, next));
		let guardCall = Promise.resolve(guardReturn);
		if (guard.length < 3) guardCall = guardCall.then(next);
		guardCall.catch((err) => reject(err));
	});
}
function extractComponentsGuards(matched, guardType, to, from, runWithContext = (fn) => fn()) {
	const guards = [];
	for (const record of matched) for (const name in record.components) {
		let rawComponent = record.components[name];
		if (guardType !== "beforeRouteEnter" && !record.instances[name]) continue;
		if (isRouteComponent(rawComponent)) {
			const guard = (rawComponent.__vccOpts || rawComponent)[guardType];
			guard && guards.push(guardToPromiseFn(guard, to, from, record, name, runWithContext));
		} else {
			let componentPromise = rawComponent();
			guards.push(() => componentPromise.then((resolved) => {
				if (!resolved) throw new Error(`Couldn't resolve component "${name}" at "${record.path}"`);
				const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
				record.mods[name] = resolved;
				record.components[name] = resolvedComponent;
				const guard = (resolvedComponent.__vccOpts || resolvedComponent)[guardType];
				return guard && guardToPromiseFn(guard, to, from, record, name, runWithContext)();
			}));
		}
	}
	return guards;
}
/**
* Split the leaving, updating, and entering records.
* @internal
*
* @param  to - Location we are navigating to
* @param from - Location we are navigating from
*/
function extractChangingRecords(to, from) {
	const leavingRecords = [];
	const updatingRecords = [];
	const enteringRecords = [];
	const len = Math.max(from.matched.length, to.matched.length);
	for (let i = 0; i < len; i++) {
		const recordFrom = from.matched[i];
		if (recordFrom) if (to.matched.find((record) => isSameRouteRecord(record, recordFrom))) updatingRecords.push(recordFrom);
		else leavingRecords.push(recordFrom);
		const recordTo = to.matched[i];
		if (recordTo) {
			if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) enteringRecords.push(recordTo);
		}
	}
	return [
		leavingRecords,
		updatingRecords,
		enteringRecords
	];
}
//#endregion
//#region node_modules/vue-router/dist/vue-router.js
/*!
* vue-router v5.0.4
* (c) 2026 Eduardo San Martin Morote
* @license MIT
*/
var createBaseLocation = () => location.protocol + "//" + location.host;
/**
* Creates a normalized history location from a window.location object
* @param base - The base path
* @param location - The window.location object
*/
function createCurrentLocation(base, location) {
	const { pathname, search, hash } = location;
	const hashPos = base.indexOf("#");
	if (hashPos > -1) {
		let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
		let pathFromHash = hash.slice(slicePos);
		if (pathFromHash[0] !== "/") pathFromHash = "/" + pathFromHash;
		return stripBase(pathFromHash, "");
	}
	return stripBase(pathname, base) + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
	let listeners = [];
	let teardowns = [];
	let pauseState = null;
	const popStateHandler = ({ state }) => {
		const to = createCurrentLocation(base, location);
		const from = currentLocation.value;
		const fromState = historyState.value;
		let delta = 0;
		if (state) {
			currentLocation.value = to;
			historyState.value = state;
			if (pauseState && pauseState === from) {
				pauseState = null;
				return;
			}
			delta = fromState ? state.position - fromState.position : 0;
		} else replace(to);
		listeners.forEach((listener) => {
			listener(currentLocation.value, from, {
				delta,
				type: NavigationType.pop,
				direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
			});
		});
	};
	function pauseListeners() {
		pauseState = currentLocation.value;
	}
	function listen(callback) {
		listeners.push(callback);
		const teardown = () => {
			const index = listeners.indexOf(callback);
			if (index > -1) listeners.splice(index, 1);
		};
		teardowns.push(teardown);
		return teardown;
	}
	function beforeUnloadListener() {
		if (document.visibilityState === "hidden") {
			const { history } = window;
			if (!history.state) return;
			history.replaceState(assign$1({}, history.state, { scroll: computeScrollPosition() }), "");
		}
	}
	function destroy() {
		for (const teardown of teardowns) teardown();
		teardowns = [];
		window.removeEventListener("popstate", popStateHandler);
		window.removeEventListener("pagehide", beforeUnloadListener);
		document.removeEventListener("visibilitychange", beforeUnloadListener);
	}
	window.addEventListener("popstate", popStateHandler);
	window.addEventListener("pagehide", beforeUnloadListener);
	document.addEventListener("visibilitychange", beforeUnloadListener);
	return {
		pauseListeners,
		listen,
		destroy
	};
}
/**
* Creates a state object
*/
function buildState(back, current, forward, replaced = false, computeScroll = false) {
	return {
		back,
		current,
		forward,
		replaced,
		position: window.history.length,
		scroll: computeScroll ? computeScrollPosition() : null
	};
}
function useHistoryStateNavigation(base) {
	const { history, location } = window;
	const currentLocation = { value: createCurrentLocation(base, location) };
	const historyState = { value: history.state };
	if (!historyState.value) changeLocation(currentLocation.value, {
		back: null,
		current: currentLocation.value,
		forward: null,
		position: history.length - 1,
		replaced: true,
		scroll: null
	}, true);
	function changeLocation(to, state, replace) {
		/**
		* if a base tag is provided, and we are on a normal domain, we have to
		* respect the provided `base` attribute because pushState() will use it and
		* potentially erase anything before the `#` like at
		* https://github.com/vuejs/router/issues/685 where a base of
		* `/folder/#` but a base of `/` would erase the `/folder/` section. If
		* there is no host, the `<base>` tag makes no sense and if there isn't a
		* base tag we can just use everything after the `#`.
		*/
		const hashIndex = base.indexOf("#");
		const url = hashIndex > -1 ? (location.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
		try {
			history[replace ? "replaceState" : "pushState"](state, "", url);
			historyState.value = state;
		} catch (err) {
			console.error(err);
			location[replace ? "replace" : "assign"](url);
		}
	}
	function replace(to, data) {
		changeLocation(to, assign$1({}, history.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position }), true);
		currentLocation.value = to;
	}
	function push(to, data) {
		const currentState = assign$1({}, historyState.value, history.state, {
			forward: to,
			scroll: computeScrollPosition()
		});
		changeLocation(currentState.current, currentState, true);
		changeLocation(to, assign$1({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data), false);
		currentLocation.value = to;
	}
	return {
		location: currentLocation,
		state: historyState,
		push,
		replace
	};
}
/**
* Creates an HTML5 history. Most common history for single page applications.
*
* @param base -
*/
function createWebHistory(base) {
	base = normalizeBase(base);
	const historyNavigation = useHistoryStateNavigation(base);
	const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
	function go(delta, triggerListeners = true) {
		if (!triggerListeners) historyListeners.pauseListeners();
		history.go(delta);
	}
	const routerHistory = assign$1({
		location: "",
		base,
		go,
		createHref: createHref.bind(null, base)
	}, historyNavigation, historyListeners);
	Object.defineProperty(routerHistory, "location", {
		enumerable: true,
		get: () => historyNavigation.location.value
	});
	Object.defineProperty(routerHistory, "state", {
		enumerable: true,
		get: () => historyNavigation.state.value
	});
	return routerHistory;
}
/**
* Creates a hash history. Useful for web applications with no host (e.g. `file://`) or when configuring a server to
* handle any URL is not possible.
*
* @param base - optional base to provide. Defaults to `location.pathname + location.search` If there is a `<base>` tag
* in the `head`, its value will be ignored in favor of this parameter **but note it affects all the history.pushState()
* calls**, meaning that if you use a `<base>` tag, it's `href` value **has to match this parameter** (ignoring anything
* after the `#`).
*
* @example
* ```js
* // at https://example.com/folder
* createWebHashHistory() // gives a url of `https://example.com/folder#`
* createWebHashHistory('/folder/') // gives a url of `https://example.com/folder/#`
* // if the `#` is provided in the base, it won't be added by `createWebHashHistory`
* createWebHashHistory('/folder/#/app/') // gives a url of `https://example.com/folder/#/app/`
* // you should avoid doing this because it changes the original url and breaks copying urls
* createWebHashHistory('/other-folder/') // gives a url of `https://example.com/other-folder/#`
*
* // at file:///usr/etc/folder/index.html
* // for locations with no `host`, the base is ignored
* createWebHashHistory('/iAmIgnored') // gives a url of `file:///usr/etc/folder/index.html#`
* ```
*/
function createWebHashHistory(base) {
	base = location.host ? base || location.pathname + location.search : "";
	if (!base.includes("#")) base += "#";
	return createWebHistory(base);
}
var TokenType = /* @__PURE__ */ function(TokenType) {
	TokenType[TokenType["Static"] = 0] = "Static";
	TokenType[TokenType["Param"] = 1] = "Param";
	TokenType[TokenType["Group"] = 2] = "Group";
	return TokenType;
}({});
var TokenizerState = /* @__PURE__ */ function(TokenizerState) {
	TokenizerState[TokenizerState["Static"] = 0] = "Static";
	TokenizerState[TokenizerState["Param"] = 1] = "Param";
	TokenizerState[TokenizerState["ParamRegExp"] = 2] = "ParamRegExp";
	TokenizerState[TokenizerState["ParamRegExpEnd"] = 3] = "ParamRegExpEnd";
	TokenizerState[TokenizerState["EscapeNext"] = 4] = "EscapeNext";
	return TokenizerState;
}(TokenizerState || {});
var ROOT_TOKEN = {
	type: TokenType.Static,
	value: ""
};
var VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
	if (!path) return [[]];
	if (path === "/") return [[ROOT_TOKEN]];
	if (!path.startsWith("/")) throw new Error(`Invalid path "${path}"`);
	function crash(message) {
		throw new Error(`ERR (${state})/"${buffer}": ${message}`);
	}
	let state = TokenizerState.Static;
	let previousState = state;
	const tokens = [];
	let segment;
	function finalizeSegment() {
		if (segment) tokens.push(segment);
		segment = [];
	}
	let i = 0;
	let char;
	let buffer = "";
	let customRe = "";
	function consumeBuffer() {
		if (!buffer) return;
		if (state === TokenizerState.Static) segment.push({
			type: TokenType.Static,
			value: buffer
		});
		else if (state === TokenizerState.Param || state === TokenizerState.ParamRegExp || state === TokenizerState.ParamRegExpEnd) {
			if (segment.length > 1 && (char === "*" || char === "+")) crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
			segment.push({
				type: TokenType.Param,
				value: buffer,
				regexp: customRe,
				repeatable: char === "*" || char === "+",
				optional: char === "*" || char === "?"
			});
		} else crash("Invalid state to consume buffer");
		buffer = "";
	}
	function addCharToBuffer() {
		buffer += char;
	}
	while (i < path.length) {
		char = path[i++];
		if (char === "\\" && state !== TokenizerState.ParamRegExp) {
			previousState = state;
			state = TokenizerState.EscapeNext;
			continue;
		}
		switch (state) {
			case TokenizerState.Static:
				if (char === "/") {
					if (buffer) consumeBuffer();
					finalizeSegment();
				} else if (char === ":") {
					consumeBuffer();
					state = TokenizerState.Param;
				} else addCharToBuffer();
				break;
			case TokenizerState.EscapeNext:
				addCharToBuffer();
				state = previousState;
				break;
			case TokenizerState.Param:
				if (char === "(") state = TokenizerState.ParamRegExp;
				else if (VALID_PARAM_RE.test(char)) addCharToBuffer();
				else {
					consumeBuffer();
					state = TokenizerState.Static;
					if (char !== "*" && char !== "?" && char !== "+") i--;
				}
				break;
			case TokenizerState.ParamRegExp:
				if (char === ")") if (customRe[customRe.length - 1] == "\\") customRe = customRe.slice(0, -1) + char;
				else state = TokenizerState.ParamRegExpEnd;
				else customRe += char;
				break;
			case TokenizerState.ParamRegExpEnd:
				consumeBuffer();
				state = TokenizerState.Static;
				if (char !== "*" && char !== "?" && char !== "+") i--;
				customRe = "";
				break;
			default:
				crash("Unknown state");
				break;
		}
	}
	if (state === TokenizerState.ParamRegExp) crash(`Unfinished custom RegExp for param "${buffer}"`);
	consumeBuffer();
	finalizeSegment();
	return tokens;
}
var BASE_PARAM_PATTERN = "[^/]+?";
var BASE_PATH_PARSER_OPTIONS = {
	sensitive: false,
	strict: false,
	start: true,
	end: true
};
var PathScore = /* @__PURE__ */ function(PathScore) {
	PathScore[PathScore["_multiplier"] = 10] = "_multiplier";
	PathScore[PathScore["Root"] = 90] = "Root";
	PathScore[PathScore["Segment"] = 40] = "Segment";
	PathScore[PathScore["SubSegment"] = 30] = "SubSegment";
	PathScore[PathScore["Static"] = 40] = "Static";
	PathScore[PathScore["Dynamic"] = 20] = "Dynamic";
	PathScore[PathScore["BonusCustomRegExp"] = 10] = "BonusCustomRegExp";
	PathScore[PathScore["BonusWildcard"] = -50] = "BonusWildcard";
	PathScore[PathScore["BonusRepeatable"] = -20] = "BonusRepeatable";
	PathScore[PathScore["BonusOptional"] = -8] = "BonusOptional";
	PathScore[PathScore["BonusStrict"] = .7000000000000001] = "BonusStrict";
	PathScore[PathScore["BonusCaseSensitive"] = .25] = "BonusCaseSensitive";
	return PathScore;
}(PathScore || {});
var REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
/**
* Creates a path parser from an array of Segments (a segment is an array of Tokens)
*
* @param segments - array of segments returned by tokenizePath
* @param extraOptions - optional options for the regexp
* @returns a PathParser
*/
function tokensToParser(segments, extraOptions) {
	const options = assign$1({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
	const score = [];
	let pattern = options.start ? "^" : "";
	const keys = [];
	for (const segment of segments) {
		const segmentScores = segment.length ? [] : [PathScore.Root];
		if (options.strict && !segment.length) pattern += "/";
		for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
			const token = segment[tokenIndex];
			let subSegmentScore = PathScore.Segment + (options.sensitive ? PathScore.BonusCaseSensitive : 0);
			if (token.type === TokenType.Static) {
				if (!tokenIndex) pattern += "/";
				pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
				subSegmentScore += PathScore.Static;
			} else if (token.type === TokenType.Param) {
				const { value, repeatable, optional, regexp } = token;
				keys.push({
					name: value,
					repeatable,
					optional
				});
				const re = regexp ? regexp : BASE_PARAM_PATTERN;
				if (re !== BASE_PARAM_PATTERN) {
					subSegmentScore += PathScore.BonusCustomRegExp;
					try {
						new RegExp(`(${re})`);
					} catch (err) {
						throw new Error(`Invalid custom RegExp for param "${value}" (${re}): ` + err.message);
					}
				}
				let subPattern = repeatable ? `((?:${re})(?:/(?:${re}))*)` : `(${re})`;
				if (!tokenIndex) subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
				if (optional) subPattern += "?";
				pattern += subPattern;
				subSegmentScore += PathScore.Dynamic;
				if (optional) subSegmentScore += PathScore.BonusOptional;
				if (repeatable) subSegmentScore += PathScore.BonusRepeatable;
				if (re === ".*") subSegmentScore += PathScore.BonusWildcard;
			}
			segmentScores.push(subSegmentScore);
		}
		score.push(segmentScores);
	}
	if (options.strict && options.end) {
		const i = score.length - 1;
		score[i][score[i].length - 1] += PathScore.BonusStrict;
	}
	if (!options.strict) pattern += "/?";
	if (options.end) pattern += "$";
	else if (options.strict && !pattern.endsWith("/")) pattern += "(?:/|$)";
	const re = new RegExp(pattern, options.sensitive ? "" : "i");
	function parse(path) {
		const match = path.match(re);
		const params = {};
		if (!match) return null;
		for (let i = 1; i < match.length; i++) {
			const value = match[i] || "";
			const key = keys[i - 1];
			params[key.name] = value && key.repeatable ? value.split("/") : value;
		}
		return params;
	}
	function stringify(params) {
		let path = "";
		let avoidDuplicatedSlash = false;
		for (const segment of segments) {
			if (!avoidDuplicatedSlash || !path.endsWith("/")) path += "/";
			avoidDuplicatedSlash = false;
			for (const token of segment) if (token.type === TokenType.Static) path += token.value;
			else if (token.type === TokenType.Param) {
				const { value, repeatable, optional } = token;
				const param = value in params ? params[value] : "";
				if (isArray$1(param) && !repeatable) throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
				const text = isArray$1(param) ? param.join("/") : param;
				if (!text) if (optional) {
					if (segment.length < 2) if (path.endsWith("/")) path = path.slice(0, -1);
					else avoidDuplicatedSlash = true;
				} else throw new Error(`Missing required param "${value}"`);
				path += text;
			}
		}
		return path || "/";
	}
	return {
		re,
		score,
		keys,
		parse,
		stringify
	};
}
/**
* Compares an array of numbers as used in PathParser.score and returns a
* number. This function can be used to `sort` an array
*
* @param a - first array of numbers
* @param b - second array of numbers
* @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
* should be sorted first
*/
function compareScoreArray(a, b) {
	let i = 0;
	while (i < a.length && i < b.length) {
		const diff = b[i] - a[i];
		if (diff) return diff;
		i++;
	}
	if (a.length < b.length) return a.length === 1 && a[0] === PathScore.Static + PathScore.Segment ? -1 : 1;
	else if (a.length > b.length) return b.length === 1 && b[0] === PathScore.Static + PathScore.Segment ? 1 : -1;
	return 0;
}
/**
* Compare function that can be used with `sort` to sort an array of PathParser
*
* @param a - first PathParser
* @param b - second PathParser
* @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
*/
function comparePathParserScore(a, b) {
	let i = 0;
	const aScore = a.score;
	const bScore = b.score;
	while (i < aScore.length && i < bScore.length) {
		const comp = compareScoreArray(aScore[i], bScore[i]);
		if (comp) return comp;
		i++;
	}
	if (Math.abs(bScore.length - aScore.length) === 1) {
		if (isLastScoreNegative(aScore)) return 1;
		if (isLastScoreNegative(bScore)) return -1;
	}
	return bScore.length - aScore.length;
}
/**
* This allows detecting splats at the end of a path: /home/:id(.*)*
*
* @param score - score to check
* @returns true if the last entry is negative
*/
function isLastScoreNegative(score) {
	const last = score[score.length - 1];
	return score.length > 0 && last[last.length - 1] < 0;
}
var PATH_PARSER_OPTIONS_DEFAULTS = {
	strict: false,
	end: true,
	sensitive: false
};
function createRouteRecordMatcher(record, parent, options) {
	const matcher = assign$1(tokensToParser(tokenizePath(record.path), options), {
		record,
		parent,
		children: [],
		alias: []
	});
	if (parent) {
		if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
	}
	return matcher;
}
/**
* Creates a Router Matcher.
*
* @internal
* @param routes - array of initial routes
* @param globalOptions - global route options
*/
function createRouterMatcher(routes, globalOptions) {
	const matchers = [];
	const matcherMap = /* @__PURE__ */ new Map();
	globalOptions = mergeOptions(PATH_PARSER_OPTIONS_DEFAULTS, globalOptions);
	function getRecordMatcher(name) {
		return matcherMap.get(name);
	}
	function addRoute(record, parent, originalRecord) {
		const isRootAdd = !originalRecord;
		const mainNormalizedRecord = normalizeRouteRecord(record);
		mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
		const options = mergeOptions(globalOptions, record);
		const normalizedRecords = [mainNormalizedRecord];
		if ("alias" in record) {
			const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
			for (const alias of aliases) normalizedRecords.push(normalizeRouteRecord(assign$1({}, mainNormalizedRecord, {
				components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
				path: alias,
				aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
			})));
		}
		let matcher;
		let originalMatcher;
		for (const normalizedRecord of normalizedRecords) {
			const { path } = normalizedRecord;
			if (parent && path[0] !== "/") {
				const parentPath = parent.record.path;
				const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
				normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
			}
			matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
			if (originalRecord) originalRecord.alias.push(matcher);
			else {
				originalMatcher = originalMatcher || matcher;
				if (originalMatcher !== matcher) originalMatcher.alias.push(matcher);
				if (isRootAdd && record.name && !isAliasRecord(matcher)) removeRoute(record.name);
			}
			if (isMatchable(matcher)) insertMatcher(matcher);
			if (mainNormalizedRecord.children) {
				const children = mainNormalizedRecord.children;
				for (let i = 0; i < children.length; i++) addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
			}
			originalRecord = originalRecord || matcher;
		}
		return originalMatcher ? () => {
			removeRoute(originalMatcher);
		} : noop;
	}
	function removeRoute(matcherRef) {
		if (isRouteName(matcherRef)) {
			const matcher = matcherMap.get(matcherRef);
			if (matcher) {
				matcherMap.delete(matcherRef);
				matchers.splice(matchers.indexOf(matcher), 1);
				matcher.children.forEach(removeRoute);
				matcher.alias.forEach(removeRoute);
			}
		} else {
			const index = matchers.indexOf(matcherRef);
			if (index > -1) {
				matchers.splice(index, 1);
				if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
				matcherRef.children.forEach(removeRoute);
				matcherRef.alias.forEach(removeRoute);
			}
		}
	}
	function getRoutes() {
		return matchers;
	}
	function insertMatcher(matcher) {
		const index = findInsertionIndex(matcher, matchers);
		matchers.splice(index, 0, matcher);
		if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
	}
	function resolve(location, currentLocation) {
		let matcher;
		let params = {};
		let path;
		let name;
		if ("name" in location && location.name) {
			matcher = matcherMap.get(location.name);
			if (!matcher) throw createRouterError(ErrorTypes.MATCHER_NOT_FOUND, { location });
			name = matcher.record.name;
			params = assign$1(pickParams(currentLocation.params, matcher.keys.filter((k) => !k.optional).concat(matcher.parent ? matcher.parent.keys.filter((k) => k.optional) : []).map((k) => k.name)), location.params && pickParams(location.params, matcher.keys.map((k) => k.name)));
			path = matcher.stringify(params);
		} else if (location.path != null) {
			path = location.path;
			matcher = matchers.find((m) => m.re.test(path));
			if (matcher) {
				params = matcher.parse(path);
				name = matcher.record.name;
			}
		} else {
			matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
			if (!matcher) throw createRouterError(ErrorTypes.MATCHER_NOT_FOUND, {
				location,
				currentLocation
			});
			name = matcher.record.name;
			params = assign$1({}, currentLocation.params, location.params);
			path = matcher.stringify(params);
		}
		const matched = [];
		let parentMatcher = matcher;
		while (parentMatcher) {
			matched.unshift(parentMatcher.record);
			parentMatcher = parentMatcher.parent;
		}
		return {
			name,
			path,
			params,
			matched,
			meta: mergeMetaFields(matched)
		};
	}
	routes.forEach((route) => addRoute(route));
	function clearRoutes() {
		matchers.length = 0;
		matcherMap.clear();
	}
	return {
		addRoute,
		resolve,
		removeRoute,
		clearRoutes,
		getRoutes,
		getRecordMatcher
	};
}
/**
* Picks an object param to contain only specified keys.
*
* @param params - params object to pick from
* @param keys - keys to pick
*/
function pickParams(params, keys) {
	const newParams = {};
	for (const key of keys) if (key in params) newParams[key] = params[key];
	return newParams;
}
/**
* Normalizes a RouteRecordRaw. Creates a copy
*
* @param record
* @returns the normalized version
*/
function normalizeRouteRecord(record) {
	const normalized = {
		path: record.path,
		redirect: record.redirect,
		name: record.name,
		meta: record.meta || {},
		aliasOf: record.aliasOf,
		beforeEnter: record.beforeEnter,
		props: normalizeRecordProps(record),
		children: record.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in record ? record.components || null : record.component && { default: record.component }
	};
	Object.defineProperty(normalized, "mods", { value: {} });
	return normalized;
}
/**
* Normalize the optional `props` in a record to always be an object similar to
* components. Also accept a boolean for components.
* @param record
*/
function normalizeRecordProps(record) {
	const propsObject = {};
	const props = record.props || false;
	if ("component" in record) propsObject.default = props;
	else for (const name in record.components) propsObject[name] = typeof props === "object" ? props[name] : props;
	return propsObject;
}
/**
* Checks if a record or any of its parent is an alias
* @param record
*/
function isAliasRecord(record) {
	while (record) {
		if (record.record.aliasOf) return true;
		record = record.parent;
	}
	return false;
}
/**
* Merge meta fields of an array of records
*
* @param matched - array of matched records
*/
function mergeMetaFields(matched) {
	return matched.reduce((meta, record) => assign$1(meta, record.meta), {});
}
/**
* Performs a binary search to find the correct insertion index for a new matcher.
*
* Matchers are primarily sorted by their score. If scores are tied then we also consider parent/child relationships,
* with descendants coming before ancestors. If there's still a tie, new routes are inserted after existing routes.
*
* @param matcher - new matcher to be inserted
* @param matchers - existing matchers
*/
function findInsertionIndex(matcher, matchers) {
	let lower = 0;
	let upper = matchers.length;
	while (lower !== upper) {
		const mid = lower + upper >> 1;
		if (comparePathParserScore(matcher, matchers[mid]) < 0) upper = mid;
		else lower = mid + 1;
	}
	const insertionAncestor = getInsertionAncestor(matcher);
	if (insertionAncestor) upper = matchers.lastIndexOf(insertionAncestor, upper - 1);
	return upper;
}
function getInsertionAncestor(matcher) {
	let ancestor = matcher;
	while (ancestor = ancestor.parent) if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0) return ancestor;
}
/**
* Checks if a matcher can be reachable. This means if it's possible to reach it as a route. For example, routes without
* a component, or name, or redirect, are just used to group other routes.
* @param matcher
* @param matcher.record record of the matcher
* @returns
*/
function isMatchable({ record }) {
	return !!(record.name || record.components && Object.keys(record.components).length || record.redirect);
}
/**
* Returns the internal behavior of a {@link RouterLink} without the rendering part.
*
* @param props - a `to` location and an optional `replace` flag
*/
function useLink(props) {
	const router = inject(routerKey);
	const currentRoute = inject(routeLocationKey);
	const route = computed(() => {
		const to = unref(props.to);
		return router.resolve(to);
	});
	const activeRecordIndex = computed(() => {
		const { matched } = route.value;
		const { length } = matched;
		const routeMatched = matched[length - 1];
		const currentMatched = currentRoute.matched;
		if (!routeMatched || !currentMatched.length) return -1;
		const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
		if (index > -1) return index;
		const parentRecordPath = getOriginalPath(matched[length - 2]);
		return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
	});
	const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
	const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
	function navigate(e = {}) {
		if (guardEvent(e)) {
			const p = router[unref(props.replace) ? "replace" : "push"](unref(props.to)).catch(noop);
			if (props.viewTransition && typeof document !== "undefined" && "startViewTransition" in document) document.startViewTransition(() => p);
			return p;
		}
		return Promise.resolve();
	}
	/**
	* NOTE: update {@link _RouterLinkI}'s `$slots` type when updating this
	*/
	return {
		route,
		href: computed(() => route.value.href),
		isActive,
		isExactActive,
		navigate
	};
}
function preferSingleVNode(vnodes) {
	return vnodes.length === 1 ? vnodes[0] : vnodes;
}
/**
* Component to render a link that triggers a navigation on click.
*/
var RouterLink = /* @__PURE__ */ defineComponent({
	name: "RouterLink",
	compatConfig: { MODE: 3 },
	props: {
		to: {
			type: [String, Object],
			required: true
		},
		replace: Boolean,
		activeClass: String,
		exactActiveClass: String,
		custom: Boolean,
		ariaCurrentValue: {
			type: String,
			default: "page"
		},
		viewTransition: Boolean
	},
	useLink,
	setup(props, { slots }) {
		const link = /* @__PURE__ */ reactive(useLink(props));
		const { options } = inject(routerKey);
		const elClass = computed(() => ({
			[getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
			[getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
		}));
		return () => {
			const children = slots.default && preferSingleVNode(slots.default(link));
			return props.custom ? children : h("a", {
				"aria-current": link.isExactActive ? props.ariaCurrentValue : null,
				href: link.href,
				onClick: link.navigate,
				class: elClass.value
			}, children);
		};
	}
});
function guardEvent(e) {
	if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
	if (e.defaultPrevented) return;
	if (e.button !== void 0 && e.button !== 0) return;
	if (e.currentTarget && e.currentTarget.getAttribute) {
		const target = e.currentTarget.getAttribute("target");
		if (/\b_blank\b/i.test(target)) return;
	}
	if (e.preventDefault) e.preventDefault();
	return true;
}
function includesParams(outer, inner) {
	for (const key in inner) {
		const innerValue = inner[key];
		const outerValue = outer[key];
		if (typeof innerValue === "string") {
			if (innerValue !== outerValue) return false;
		} else if (!isArray$1(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value.valueOf() !== outerValue[i].valueOf())) return false;
	}
	return true;
}
/**
* Get the original path value of a record by following its aliasOf
* @param record
*/
function getOriginalPath(record) {
	return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
/**
* Utility class to get the active class based on defaults.
* @param propClass
* @param globalClass
* @param defaultClass
*/
var getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
var RouterViewImpl = /* @__PURE__ */ defineComponent({
	name: "RouterView",
	inheritAttrs: false,
	props: {
		name: {
			type: String,
			default: "default"
		},
		route: Object
	},
	compatConfig: { MODE: 3 },
	setup(props, { attrs, slots }) {
		const injectedRoute = inject(routerViewLocationKey);
		const routeToDisplay = computed(() => props.route || injectedRoute.value);
		const injectedDepth = inject(viewDepthKey, 0);
		const depth = computed(() => {
			let initialDepth = unref(injectedDepth);
			const { matched } = routeToDisplay.value;
			let matchedRoute;
			while ((matchedRoute = matched[initialDepth]) && !matchedRoute.components) initialDepth++;
			return initialDepth;
		});
		const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth.value]);
		provide(viewDepthKey, computed(() => depth.value + 1));
		provide(matchedRouteKey, matchedRouteRef);
		provide(routerViewLocationKey, routeToDisplay);
		const viewRef = /* @__PURE__ */ ref();
		watch(() => [
			viewRef.value,
			matchedRouteRef.value,
			props.name
		], ([instance, to, name], [oldInstance, from, oldName]) => {
			if (to) {
				to.instances[name] = instance;
				if (from && from !== to && instance && instance === oldInstance) {
					if (!to.leaveGuards.size) to.leaveGuards = from.leaveGuards;
					if (!to.updateGuards.size) to.updateGuards = from.updateGuards;
				}
			}
			if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
		}, { flush: "post" });
		return () => {
			const route = routeToDisplay.value;
			const currentName = props.name;
			const matchedRoute = matchedRouteRef.value;
			const ViewComponent = matchedRoute && matchedRoute.components[currentName];
			if (!ViewComponent) return normalizeSlot(slots.default, {
				Component: ViewComponent,
				route
			});
			const routePropsOption = matchedRoute.props[currentName];
			const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
			const onVnodeUnmounted = (vnode) => {
				if (vnode.component.isUnmounted) matchedRoute.instances[currentName] = null;
			};
			const component = h(ViewComponent, assign$1({}, routeProps, attrs, {
				onVnodeUnmounted,
				ref: viewRef
			}));
			return normalizeSlot(slots.default, {
				Component: component,
				route
			}) || component;
		};
	}
});
function normalizeSlot(slot, data) {
	if (!slot) return null;
	const slotContent = slot(data);
	return slotContent.length === 1 ? slotContent[0] : slotContent;
}
/**
* Component to display the current route the user is at.
*/
var RouterView = RouterViewImpl;
/**
* Creates a Router instance that can be used by a Vue app.
*
* @param options - {@link RouterOptions}
*/
function createRouter(options) {
	const matcher = createRouterMatcher(options.routes, options);
	const parseQuery$1 = options.parseQuery || parseQuery;
	const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
	const routerHistory = options.history;
	const beforeGuards = useCallbacks();
	const beforeResolveGuards = useCallbacks();
	const afterGuards = useCallbacks();
	const currentRoute = /* @__PURE__ */ shallowRef(START_LOCATION_NORMALIZED);
	let pendingLocation = START_LOCATION_NORMALIZED;
	if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) history.scrollRestoration = "manual";
	const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
	const encodeParams = applyToParams.bind(null, encodeParam);
	const decodeParams = applyToParams.bind(null, decode);
	function addRoute(parentOrRoute, route) {
		let parent;
		let record;
		if (isRouteName(parentOrRoute)) {
			parent = matcher.getRecordMatcher(parentOrRoute);
			record = route;
		} else record = parentOrRoute;
		return matcher.addRoute(record, parent);
	}
	function removeRoute(name) {
		const recordMatcher = matcher.getRecordMatcher(name);
		if (recordMatcher) matcher.removeRoute(recordMatcher);
	}
	function getRoutes() {
		return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
	}
	function hasRoute(name) {
		return !!matcher.getRecordMatcher(name);
	}
	function resolve(rawLocation, currentLocation) {
		currentLocation = assign$1({}, currentLocation || currentRoute.value);
		if (typeof rawLocation === "string") {
			const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
			const matchedRoute = matcher.resolve({ path: locationNormalized.path }, currentLocation);
			const href = routerHistory.createHref(locationNormalized.fullPath);
			return assign$1(locationNormalized, matchedRoute, {
				params: decodeParams(matchedRoute.params),
				hash: decode(locationNormalized.hash),
				redirectedFrom: void 0,
				href
			});
		}
		let matcherLocation;
		if (rawLocation.path != null) matcherLocation = assign$1({}, rawLocation, { path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path });
		else {
			const targetParams = assign$1({}, rawLocation.params);
			for (const key in targetParams) if (targetParams[key] == null) delete targetParams[key];
			matcherLocation = assign$1({}, rawLocation, { params: encodeParams(targetParams) });
			currentLocation.params = encodeParams(currentLocation.params);
		}
		const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
		const hash = rawLocation.hash || "";
		matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
		const fullPath = stringifyURL(stringifyQuery$1, assign$1({}, rawLocation, {
			hash: encodeHash(hash),
			path: matchedRoute.path
		}));
		const href = routerHistory.createHref(fullPath);
		return assign$1({
			fullPath,
			hash,
			query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
		}, matchedRoute, {
			redirectedFrom: void 0,
			href
		});
	}
	function locationAsObject(to) {
		return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign$1({}, to);
	}
	function checkCanceledNavigation(to, from) {
		if (pendingLocation !== to) return createRouterError(ErrorTypes.NAVIGATION_CANCELLED, {
			from,
			to
		});
	}
	function push(to) {
		return pushWithRedirect(to);
	}
	function replace(to) {
		return push(assign$1(locationAsObject(to), { replace: true }));
	}
	function handleRedirectRecord(to, from) {
		const lastMatched = to.matched[to.matched.length - 1];
		if (lastMatched && lastMatched.redirect) {
			const { redirect } = lastMatched;
			let newTargetLocation = typeof redirect === "function" ? redirect(to, from) : redirect;
			if (typeof newTargetLocation === "string") {
				newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
				newTargetLocation.params = {};
			}
			return assign$1({
				query: to.query,
				hash: to.hash,
				params: newTargetLocation.path != null ? {} : to.params
			}, newTargetLocation);
		}
	}
	function pushWithRedirect(to, redirectedFrom) {
		const targetLocation = pendingLocation = resolve(to);
		const from = currentRoute.value;
		const data = to.state;
		const force = to.force;
		const replace = to.replace === true;
		const shouldRedirect = handleRedirectRecord(targetLocation, from);
		if (shouldRedirect) return pushWithRedirect(assign$1(locationAsObject(shouldRedirect), {
			state: typeof shouldRedirect === "object" ? assign$1({}, data, shouldRedirect.state) : data,
			force,
			replace
		}), redirectedFrom || targetLocation);
		const toLocation = targetLocation;
		toLocation.redirectedFrom = redirectedFrom;
		let failure;
		if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
			failure = createRouterError(ErrorTypes.NAVIGATION_DUPLICATED, {
				to: toLocation,
				from
			});
			handleScroll(from, from, true, false);
		}
		return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, ErrorTypes.NAVIGATION_GUARD_REDIRECT) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure) => {
			if (failure) {
				if (isNavigationFailure(failure, ErrorTypes.NAVIGATION_GUARD_REDIRECT)) return pushWithRedirect(assign$1({ replace }, locationAsObject(failure.to), {
					state: typeof failure.to === "object" ? assign$1({}, data, failure.to.state) : data,
					force
				}), redirectedFrom || toLocation);
			} else failure = finalizeNavigation(toLocation, from, true, replace, data);
			triggerAfterEach(toLocation, from, failure);
			return failure;
		});
	}
	/**
	* Helper to reject and skip all navigation guards if a new navigation happened
	* @param to
	* @param from
	*/
	function checkCanceledNavigationAndReject(to, from) {
		const error = checkCanceledNavigation(to, from);
		return error ? Promise.reject(error) : Promise.resolve();
	}
	function runWithContext(fn) {
		const app = installedApps.values().next().value;
		return app && typeof app.runWithContext === "function" ? app.runWithContext(fn) : fn();
	}
	function navigate(to, from) {
		let guards;
		const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
		guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
		for (const record of leavingRecords) record.leaveGuards.forEach((guard) => {
			guards.push(guardToPromiseFn(guard, to, from));
		});
		const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
		guards.push(canceledNavigationCheck);
		return runGuardQueue(guards).then(() => {
			guards = [];
			for (const guard of beforeGuards.list()) guards.push(guardToPromiseFn(guard, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
			for (const record of updatingRecords) record.updateGuards.forEach((guard) => {
				guards.push(guardToPromiseFn(guard, to, from));
			});
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = [];
			for (const record of enteringRecords) if (record.beforeEnter) if (isArray$1(record.beforeEnter)) for (const beforeEnter of record.beforeEnter) guards.push(guardToPromiseFn(beforeEnter, to, from));
			else guards.push(guardToPromiseFn(record.beforeEnter, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			to.matched.forEach((record) => record.enterCallbacks = {});
			guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from, runWithContext);
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).then(() => {
			guards = [];
			for (const guard of beforeResolveGuards.list()) guards.push(guardToPromiseFn(guard, to, from));
			guards.push(canceledNavigationCheck);
			return runGuardQueue(guards);
		}).catch((err) => isNavigationFailure(err, ErrorTypes.NAVIGATION_CANCELLED) ? err : Promise.reject(err));
	}
	function triggerAfterEach(to, from, failure) {
		afterGuards.list().forEach((guard) => runWithContext(() => guard(to, from, failure)));
	}
	/**
	* - Cleans up any navigation guards
	* - Changes the url if necessary
	* - Calls the scrollBehavior
	*/
	function finalizeNavigation(toLocation, from, isPush, replace, data) {
		const error = checkCanceledNavigation(toLocation, from);
		if (error) return error;
		const isFirstNavigation = from === START_LOCATION_NORMALIZED;
		const state = !isBrowser ? {} : history.state;
		if (isPush) if (replace || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign$1({ scroll: isFirstNavigation && state && state.scroll }, data));
		else routerHistory.push(toLocation.fullPath, data);
		currentRoute.value = toLocation;
		handleScroll(toLocation, from, isPush, isFirstNavigation);
		markAsReady();
	}
	let removeHistoryListener;
	function setupListeners() {
		if (removeHistoryListener) return;
		removeHistoryListener = routerHistory.listen((to, _from, info) => {
			if (!router.listening) return;
			const toLocation = resolve(to);
			const shouldRedirect = handleRedirectRecord(toLocation, router.currentRoute.value);
			if (shouldRedirect) {
				pushWithRedirect(assign$1(shouldRedirect, {
					replace: true,
					force: true
				}), toLocation).catch(noop);
				return;
			}
			pendingLocation = toLocation;
			const from = currentRoute.value;
			if (isBrowser) saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
			navigate(toLocation, from).catch((error) => {
				if (isNavigationFailure(error, ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_CANCELLED)) return error;
				if (isNavigationFailure(error, ErrorTypes.NAVIGATION_GUARD_REDIRECT)) {
					pushWithRedirect(assign$1(locationAsObject(error.to), { force: true }), toLocation).then((failure) => {
						if (isNavigationFailure(failure, ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_DUPLICATED) && !info.delta && info.type === NavigationType.pop) routerHistory.go(-1, false);
					}).catch(noop);
					return Promise.reject();
				}
				if (info.delta) routerHistory.go(-info.delta, false);
				return triggerError(error, toLocation, from);
			}).then((failure) => {
				failure = failure || finalizeNavigation(toLocation, from, false);
				if (failure) {
					if (info.delta && !isNavigationFailure(failure, ErrorTypes.NAVIGATION_CANCELLED)) routerHistory.go(-info.delta, false);
					else if (info.type === NavigationType.pop && isNavigationFailure(failure, ErrorTypes.NAVIGATION_ABORTED | ErrorTypes.NAVIGATION_DUPLICATED)) routerHistory.go(-1, false);
				}
				triggerAfterEach(toLocation, from, failure);
			}).catch(noop);
		});
	}
	let readyHandlers = useCallbacks();
	let errorListeners = useCallbacks();
	let ready;
	/**
	* Trigger errorListeners added via onError and throws the error as well
	*
	* @param error - error to throw
	* @param to - location we were navigating to when the error happened
	* @param from - location we were navigating from when the error happened
	* @returns the error as a rejected promise
	*/
	function triggerError(error, to, from) {
		markAsReady(error);
		const list = errorListeners.list();
		if (list.length) list.forEach((handler) => handler(error, to, from));
		else console.error(error);
		return Promise.reject(error);
	}
	function isReady() {
		if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
		return new Promise((resolve, reject) => {
			readyHandlers.add([resolve, reject]);
		});
	}
	function markAsReady(err) {
		if (!ready) {
			ready = !err;
			setupListeners();
			readyHandlers.list().forEach(([resolve, reject]) => err ? reject(err) : resolve());
			readyHandlers.reset();
		}
		return err;
	}
	function handleScroll(to, from, isPush, isFirstNavigation) {
		const { scrollBehavior } = options;
		if (!isBrowser || !scrollBehavior) return Promise.resolve();
		const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
		return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
	}
	const go = (delta) => routerHistory.go(delta);
	let started;
	const installedApps = /* @__PURE__ */ new Set();
	const router = {
		currentRoute,
		listening: true,
		addRoute,
		removeRoute,
		clearRoutes: matcher.clearRoutes,
		hasRoute,
		getRoutes,
		resolve,
		options,
		push,
		replace,
		go,
		back: () => go(-1),
		forward: () => go(1),
		beforeEach: beforeGuards.add,
		beforeResolve: beforeResolveGuards.add,
		afterEach: afterGuards.add,
		onError: errorListeners.add,
		isReady,
		install(app) {
			app.component("RouterLink", RouterLink);
			app.component("RouterView", RouterView);
			app.config.globalProperties.$router = router;
			Object.defineProperty(app.config.globalProperties, "$route", {
				enumerable: true,
				get: () => unref(currentRoute)
			});
			if (isBrowser && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
				started = true;
				push(routerHistory.location).catch((err) => {});
			}
			const reactiveRoute = {};
			for (const key in START_LOCATION_NORMALIZED) Object.defineProperty(reactiveRoute, key, {
				get: () => currentRoute.value[key],
				enumerable: true
			});
			app.provide(routerKey, router);
			app.provide(routeLocationKey, /* @__PURE__ */ shallowReactive(reactiveRoute));
			app.provide(routerViewLocationKey, currentRoute);
			const unmountApp = app.unmount;
			installedApps.add(app);
			app.unmount = function() {
				installedApps.delete(app);
				if (installedApps.size < 1) {
					pendingLocation = START_LOCATION_NORMALIZED;
					removeHistoryListener && removeHistoryListener();
					removeHistoryListener = null;
					currentRoute.value = START_LOCATION_NORMALIZED;
					started = false;
					ready = false;
				}
				unmountApp();
			};
		}
	};
	function runGuardQueue(guards) {
		return guards.reduce((promise, guard) => promise.then(() => runWithContext(guard)), Promise.resolve());
	}
	return router;
}
//#endregion
//#region \0vite/preload-helper.js
var scriptRel = "modulepreload";
var assetsURL = function(dep) {
	return "/DSPDemo-Web/" + dep;
};
var seen = {};
var __vitePreload = function preload(baseModule, deps, importerUrl) {
	let promise = Promise.resolve();
	if (deps && deps.length > 0) {
		const links = document.getElementsByTagName("link");
		const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
		const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
		function allSettled(promises) {
			return Promise.all(promises.map((p) => Promise.resolve(p).then((value) => ({
				status: "fulfilled",
				value
			}), (reason) => ({
				status: "rejected",
				reason
			}))));
		}
		promise = allSettled(deps.map((dep) => {
			dep = assetsURL(dep, importerUrl);
			if (dep in seen) return;
			seen[dep] = true;
			const isCss = dep.endsWith(".css");
			const cssSelector = isCss ? "[rel=\"stylesheet\"]" : "";
			if (!!importerUrl) for (let i = links.length - 1; i >= 0; i--) {
				const link = links[i];
				if (link.href === dep && (!isCss || link.rel === "stylesheet")) return;
			}
			else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
			const link = document.createElement("link");
			link.rel = isCss ? "stylesheet" : scriptRel;
			if (!isCss) link.as = "script";
			link.crossOrigin = "";
			link.href = dep;
			if (cspNonce) link.setAttribute("nonce", cspNonce);
			document.head.appendChild(link);
			if (isCss) return new Promise((res, rej) => {
				link.addEventListener("load", res);
				link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
			});
		}));
	}
	function handlePreloadError(err) {
		const e = new Event("vite:preloadError", { cancelable: true });
		e.payload = err;
		window.dispatchEvent(e);
		if (!e.defaultPrevented) throw err;
	}
	return promise.then((res) => {
		for (const item of res || []) {
			if (item.status !== "rejected") continue;
			handlePreloadError(item.reason);
		}
		return baseModule().catch(handlePreloadError);
	});
};
//#endregion
//#region src/router/index.js
var router = createRouter({
	history: createWebHashHistory(),
	routes: [{
		path: "/",
		redirect: "/module/mod-00-sources"
	}, {
		path: "/module/:moduleId",
		name: "module",
		component: () => __vitePreload(() => import("./ModuleWrapper-BaWxFrtM.js"), __vite__mapDeps([0,1,2]))
	}]
});
//#endregion
//#region node_modules/@intlify/shared/dist/shared.mjs
/*!
* shared v11.3.0
* (c) 2026 kazuya kawaguchi
* Released under the MIT License.
*/
function warn(msg, err) {
	if (typeof console !== "undefined") {
		console.warn(`[intlify] ` + msg);
		/* istanbul ignore if */
		if (err) console.warn(err.stack);
	}
}
/**
* Original Utilities
* written by kazuya kawaguchi
*/
var inBrowser = typeof window !== "undefined";
var makeSymbol = (name, shareable = false) => !shareable ? Symbol(name) : Symbol.for(name);
var generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({
	l: locale,
	k: key,
	s: source
});
var friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
var isNumber = (val) => typeof val === "number" && isFinite(val);
var isDate = (val) => toTypeString(val) === "[object Date]";
var isRegExp = (val) => toTypeString(val) === "[object RegExp]";
var isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
var assign = Object.assign;
var _create = Object.create;
var create = (obj = null) => _create(obj);
var _globalThis;
var getGlobalThis = () => {
	return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : create());
};
function escapeHtml(rawText) {
	return rawText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function escapeAttributeValue(value) {
	return value.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function sanitizeTranslatedHtml(html) {
	html = html.replace(/(\w+)\s*=\s*"([^"]*)"/g, (_, attrName, attrValue) => `${attrName}="${escapeAttributeValue(attrValue)}"`);
	html = html.replace(/(\w+)\s*=\s*'([^']*)'/g, (_, attrName, attrValue) => `${attrName}='${escapeAttributeValue(attrValue)}'`);
	if (/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(html)) html = html.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3");
	[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi, /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach((pattern) => {
		html = html.replace(pattern, "$1javascript&#58;");
	});
	return html;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
	return hasOwnProperty.call(obj, key);
}
/**
* Useful Utilities By Evan you
* Modified by kazuya kawaguchi
* MIT License
* https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
* https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
*/
var isArray = Array.isArray;
var isFunction = (val) => typeof val === "function";
var isString = (val) => typeof val === "string";
var isBoolean = (val) => typeof val === "boolean";
var isObject = (val) => val !== null && typeof val === "object";
var isPromise = (val) => {
	return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
var objectToString = Object.prototype.toString;
var toTypeString = (value) => objectToString.call(value);
var isPlainObject = (val) => toTypeString(val) === "[object Object]";
var toDisplayString = (val) => {
	return val == null ? "" : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
function join(items, separator = "") {
	return items.reduce((str, item, index) => index === 0 ? str + item : str + separator + item, "");
}
var isNotObjectOrIsArray = (val) => !isObject(val) || isArray(val);
function deepCopy(src, des) {
	if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) throw new Error("Invalid value");
	const stack = [{
		src,
		des
	}];
	while (stack.length) {
		const { src, des } = stack.pop();
		Object.keys(src).forEach((key) => {
			if (key === "__proto__") return;
			if (isObject(src[key]) && !isObject(des[key])) des[key] = Array.isArray(src[key]) ? [] : create();
			if (isNotObjectOrIsArray(des[key]) || isNotObjectOrIsArray(src[key])) des[key] = src[key];
			else stack.push({
				src: src[key],
				des: des[key]
			});
		});
	}
}
//#endregion
//#region node_modules/@intlify/message-compiler/dist/message-compiler.mjs
/*!
* message-compiler v11.3.0
* (c) 2026 kazuya kawaguchi
* Released under the MIT License.
*/
function createPosition(line, column, offset) {
	return {
		line,
		column,
		offset
	};
}
function createLocation(start, end, source) {
	const loc = {
		start,
		end
	};
	if (source != null) loc.source = source;
	return loc;
}
var CompileErrorCodes = {
	EXPECTED_TOKEN: 1,
	INVALID_TOKEN_IN_PLACEHOLDER: 2,
	UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
	UNKNOWN_ESCAPE_SEQUENCE: 4,
	INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
	UNBALANCED_CLOSING_BRACE: 6,
	UNTERMINATED_CLOSING_BRACE: 7,
	EMPTY_PLACEHOLDER: 8,
	NOT_ALLOW_NEST_PLACEHOLDER: 9,
	INVALID_LINKED_FORMAT: 10,
	MUST_HAVE_MESSAGES_IN_PLURAL: 11,
	UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
	UNEXPECTED_EMPTY_LINKED_KEY: 13,
	UNEXPECTED_LEXICAL_ANALYSIS: 14,
	UNHANDLED_CODEGEN_NODE_TYPE: 15,
	UNHANDLED_MINIFIER_NODE_TYPE: 16
};
CompileErrorCodes.EXPECTED_TOKEN, CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, CompileErrorCodes.UNBALANCED_CLOSING_BRACE, CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, CompileErrorCodes.EMPTY_PLACEHOLDER, CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, CompileErrorCodes.INVALID_LINKED_FORMAT, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, CompileErrorCodes.UNHANDLED_CODEGEN_NODE_TYPE, CompileErrorCodes.UNHANDLED_MINIFIER_NODE_TYPE;
function createCompileError(code, loc, options = {}) {
	const { domain, messages, args } = options;
	const error = new SyntaxError(String(code));
	error.code = code;
	if (loc) error.location = loc;
	error.domain = domain;
	return error;
}
/** @internal */
function defaultOnError(error) {
	throw error;
}
var CHAR_SP = " ";
var CHAR_CR = "\r";
var CHAR_LF = "\n";
var CHAR_LS = String.fromCharCode(8232);
var CHAR_PS = String.fromCharCode(8233);
function createScanner(str) {
	const _buf = str;
	let _index = 0;
	let _line = 1;
	let _column = 1;
	let _peekOffset = 0;
	const isCRLF = (index) => _buf[index] === CHAR_CR && _buf[index + 1] === CHAR_LF;
	const isLF = (index) => _buf[index] === CHAR_LF;
	const isPS = (index) => _buf[index] === CHAR_PS;
	const isLS = (index) => _buf[index] === CHAR_LS;
	const isLineEnd = (index) => isCRLF(index) || isLF(index) || isPS(index) || isLS(index);
	const index = () => _index;
	const line = () => _line;
	const column = () => _column;
	const peekOffset = () => _peekOffset;
	const charAt = (offset) => isCRLF(offset) || isPS(offset) || isLS(offset) ? CHAR_LF : _buf[offset];
	const currentChar = () => charAt(_index);
	const currentPeek = () => charAt(_index + _peekOffset);
	function next() {
		_peekOffset = 0;
		if (isLineEnd(_index)) {
			_line++;
			_column = 0;
		}
		if (isCRLF(_index)) _index++;
		_index++;
		_column++;
		return _buf[_index];
	}
	function peek() {
		if (isCRLF(_index + _peekOffset)) _peekOffset++;
		_peekOffset++;
		return _buf[_index + _peekOffset];
	}
	function reset() {
		_index = 0;
		_line = 1;
		_column = 1;
		_peekOffset = 0;
	}
	function resetPeek(offset = 0) {
		_peekOffset = offset;
	}
	function skipToPeek() {
		const target = _index + _peekOffset;
		while (target !== _index) next();
		_peekOffset = 0;
	}
	return {
		index,
		line,
		column,
		peekOffset,
		charAt,
		currentChar,
		currentPeek,
		next,
		peek,
		reset,
		resetPeek,
		skipToPeek
	};
}
var EOF = void 0;
var DOT = ".";
var LITERAL_DELIMITER = "'";
var ERROR_DOMAIN$3 = "tokenizer";
function createTokenizer(source, options = {}) {
	const location = options.location !== false;
	const _scnr = createScanner(source);
	const currentOffset = () => _scnr.index();
	const currentPosition = () => createPosition(_scnr.line(), _scnr.column(), _scnr.index());
	const _initLoc = currentPosition();
	const _initOffset = currentOffset();
	const _context = {
		currentType: 13,
		offset: _initOffset,
		startLoc: _initLoc,
		endLoc: _initLoc,
		lastType: 13,
		lastOffset: _initOffset,
		lastStartLoc: _initLoc,
		lastEndLoc: _initLoc,
		braceNest: 0,
		inLinked: false,
		text: ""
	};
	const context = () => _context;
	const { onError } = options;
	function emitError(code, pos, offset, ...args) {
		const ctx = context();
		pos.column += offset;
		pos.offset += offset;
		if (onError) onError(createCompileError(code, location ? createLocation(ctx.startLoc, pos) : null, {
			domain: ERROR_DOMAIN$3,
			args
		}));
	}
	function getToken(context, type, value) {
		context.endLoc = currentPosition();
		context.currentType = type;
		const token = { type };
		if (location) token.loc = createLocation(context.startLoc, context.endLoc);
		if (value != null) token.value = value;
		return token;
	}
	const getEndToken = (context) => getToken(context, 13);
	function eat(scnr, ch) {
		if (scnr.currentChar() === ch) {
			scnr.next();
			return ch;
		} else {
			emitError(CompileErrorCodes.EXPECTED_TOKEN, currentPosition(), 0, ch);
			return "";
		}
	}
	function peekSpaces(scnr) {
		let buf = "";
		while (scnr.currentPeek() === CHAR_SP || scnr.currentPeek() === CHAR_LF) {
			buf += scnr.currentPeek();
			scnr.peek();
		}
		return buf;
	}
	function skipSpaces(scnr) {
		const buf = peekSpaces(scnr);
		scnr.skipToPeek();
		return buf;
	}
	function isIdentifierStart(ch) {
		if (ch === EOF) return false;
		const cc = ch.charCodeAt(0);
		return cc >= 97 && cc <= 122 || cc >= 65 && cc <= 90 || cc === 95;
	}
	function isNumberStart(ch) {
		if (ch === EOF) return false;
		const cc = ch.charCodeAt(0);
		return cc >= 48 && cc <= 57;
	}
	function isNamedIdentifierStart(scnr, context) {
		const { currentType } = context;
		if (currentType !== 2) return false;
		peekSpaces(scnr);
		const ret = isIdentifierStart(scnr.currentPeek());
		scnr.resetPeek();
		return ret;
	}
	function isListIdentifierStart(scnr, context) {
		const { currentType } = context;
		if (currentType !== 2) return false;
		peekSpaces(scnr);
		const ret = isNumberStart(scnr.currentPeek() === "-" ? scnr.peek() : scnr.currentPeek());
		scnr.resetPeek();
		return ret;
	}
	function isLiteralStart(scnr, context) {
		const { currentType } = context;
		if (currentType !== 2) return false;
		peekSpaces(scnr);
		const ret = scnr.currentPeek() === LITERAL_DELIMITER;
		scnr.resetPeek();
		return ret;
	}
	function isLinkedDotStart(scnr, context) {
		const { currentType } = context;
		if (currentType !== 7) return false;
		peekSpaces(scnr);
		const ret = scnr.currentPeek() === ".";
		scnr.resetPeek();
		return ret;
	}
	function isLinkedModifierStart(scnr, context) {
		const { currentType } = context;
		if (currentType !== 8) return false;
		peekSpaces(scnr);
		const ret = isIdentifierStart(scnr.currentPeek());
		scnr.resetPeek();
		return ret;
	}
	function isLinkedDelimiterStart(scnr, context) {
		const { currentType } = context;
		if (!(currentType === 7 || currentType === 11)) return false;
		peekSpaces(scnr);
		const ret = scnr.currentPeek() === ":";
		scnr.resetPeek();
		return ret;
	}
	function isLinkedReferStart(scnr, context) {
		const { currentType } = context;
		if (currentType !== 9) return false;
		const fn = () => {
			const ch = scnr.currentPeek();
			if (ch === "{") return isIdentifierStart(scnr.peek());
			else if (ch === "@" || ch === "|" || ch === ":" || ch === "." || ch === CHAR_SP || !ch) return false;
			else if (ch === CHAR_LF) {
				scnr.peek();
				return fn();
			} else return isTextStart(scnr, false);
		};
		const ret = fn();
		scnr.resetPeek();
		return ret;
	}
	function isPluralStart(scnr) {
		peekSpaces(scnr);
		const ret = scnr.currentPeek() === "|";
		scnr.resetPeek();
		return ret;
	}
	function isTextStart(scnr, reset = true) {
		const fn = (hasSpace = false, prev = "") => {
			const ch = scnr.currentPeek();
			if (ch === "{") return hasSpace;
			else if (ch === "@" || !ch) return hasSpace;
			else if (ch === "|") return !(prev === CHAR_SP || prev === CHAR_LF);
			else if (ch === CHAR_SP) {
				scnr.peek();
				return fn(true, CHAR_SP);
			} else if (ch === CHAR_LF) {
				scnr.peek();
				return fn(true, CHAR_LF);
			} else return true;
		};
		const ret = fn();
		reset && scnr.resetPeek();
		return ret;
	}
	function takeChar(scnr, fn) {
		const ch = scnr.currentChar();
		if (ch === EOF) return EOF;
		if (fn(ch)) {
			scnr.next();
			return ch;
		}
		return null;
	}
	function isIdentifier(ch) {
		const cc = ch.charCodeAt(0);
		return cc >= 97 && cc <= 122 || cc >= 65 && cc <= 90 || cc >= 48 && cc <= 57 || cc === 95 || cc === 36;
	}
	function takeIdentifierChar(scnr) {
		return takeChar(scnr, isIdentifier);
	}
	function isNamedIdentifier(ch) {
		const cc = ch.charCodeAt(0);
		return cc >= 97 && cc <= 122 || cc >= 65 && cc <= 90 || cc >= 48 && cc <= 57 || cc === 95 || cc === 36 || cc === 45;
	}
	function takeNamedIdentifierChar(scnr) {
		return takeChar(scnr, isNamedIdentifier);
	}
	function isDigit(ch) {
		const cc = ch.charCodeAt(0);
		return cc >= 48 && cc <= 57;
	}
	function takeDigit(scnr) {
		return takeChar(scnr, isDigit);
	}
	function isHexDigit(ch) {
		const cc = ch.charCodeAt(0);
		return cc >= 48 && cc <= 57 || cc >= 65 && cc <= 70 || cc >= 97 && cc <= 102;
	}
	function takeHexDigit(scnr) {
		return takeChar(scnr, isHexDigit);
	}
	function getDigits(scnr) {
		let ch = "";
		let num = "";
		while (ch = takeDigit(scnr)) num += ch;
		return num;
	}
	function readText(scnr) {
		let buf = "";
		while (true) {
			const ch = scnr.currentChar();
			if (ch === "\\") {
				const nextCh = scnr.peek();
				if (nextCh === "{" || nextCh === "}" || nextCh === "@" || nextCh === "|" || nextCh === "\\") {
					buf += ch + nextCh;
					scnr.next();
					scnr.next();
				} else {
					scnr.resetPeek();
					buf += ch;
					scnr.next();
				}
			} else if (ch === "{" || ch === "}" || ch === "@" || ch === "|" || !ch) break;
			else if (ch === CHAR_SP || ch === CHAR_LF) if (isTextStart(scnr)) {
				buf += ch;
				scnr.next();
			} else if (isPluralStart(scnr)) break;
			else {
				buf += ch;
				scnr.next();
			}
			else {
				buf += ch;
				scnr.next();
			}
		}
		return buf;
	}
	function readNamedIdentifier(scnr) {
		skipSpaces(scnr);
		let ch = "";
		let name = "";
		while (ch = takeNamedIdentifierChar(scnr)) name += ch;
		const currentChar = scnr.currentChar();
		if (currentChar && currentChar !== "}" && currentChar !== EOF && currentChar !== CHAR_SP && currentChar !== CHAR_LF && currentChar !== "　") {
			const invalidPart = readInvalidIdentifier(scnr);
			emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, name + invalidPart);
			return name + invalidPart;
		}
		if (scnr.currentChar() === EOF) emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
		return name;
	}
	function readListIdentifier(scnr) {
		skipSpaces(scnr);
		let value = "";
		if (scnr.currentChar() === "-") {
			scnr.next();
			value += `-${getDigits(scnr)}`;
		} else value += getDigits(scnr);
		if (scnr.currentChar() === EOF) emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
		return value;
	}
	function isLiteral(ch) {
		return ch !== LITERAL_DELIMITER && ch !== CHAR_LF;
	}
	function readLiteral(scnr) {
		skipSpaces(scnr);
		eat(scnr, `\'`);
		let ch = "";
		let literal = "";
		while (ch = takeChar(scnr, isLiteral)) if (ch === "\\") literal += readEscapeSequence(scnr);
		else literal += ch;
		const current = scnr.currentChar();
		if (current === CHAR_LF || current === EOF) {
			emitError(CompileErrorCodes.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, currentPosition(), 0);
			if (current === CHAR_LF) {
				scnr.next();
				eat(scnr, `\'`);
			}
			return literal;
		}
		eat(scnr, `\'`);
		return literal;
	}
	function readEscapeSequence(scnr) {
		const ch = scnr.currentChar();
		switch (ch) {
			case "\\":
			case `\'`:
				scnr.next();
				return `\\${ch}`;
			case "u": return readUnicodeEscapeSequence(scnr, ch, 4);
			case "U": return readUnicodeEscapeSequence(scnr, ch, 6);
			default:
				emitError(CompileErrorCodes.UNKNOWN_ESCAPE_SEQUENCE, currentPosition(), 0, ch);
				return "";
		}
	}
	function readUnicodeEscapeSequence(scnr, unicode, digits) {
		eat(scnr, unicode);
		let sequence = "";
		for (let i = 0; i < digits; i++) {
			const ch = takeHexDigit(scnr);
			if (!ch) {
				emitError(CompileErrorCodes.INVALID_UNICODE_ESCAPE_SEQUENCE, currentPosition(), 0, `\\${unicode}${sequence}${scnr.currentChar()}`);
				break;
			}
			sequence += ch;
		}
		return `\\${unicode}${sequence}`;
	}
	function isInvalidIdentifier(ch) {
		return ch !== "{" && ch !== "}" && ch !== CHAR_SP && ch !== CHAR_LF;
	}
	function readInvalidIdentifier(scnr) {
		skipSpaces(scnr);
		let ch = "";
		let identifiers = "";
		while (ch = takeChar(scnr, isInvalidIdentifier)) identifiers += ch;
		return identifiers;
	}
	function readLinkedModifier(scnr) {
		let ch = "";
		let name = "";
		while (ch = takeIdentifierChar(scnr)) name += ch;
		return name;
	}
	function readLinkedRefer(scnr) {
		const fn = (buf) => {
			const ch = scnr.currentChar();
			if (ch === "{" || ch === "@" || ch === "|" || ch === "(" || ch === ")" || !ch) return buf;
			else if (ch === CHAR_SP) return buf;
			else if (ch === CHAR_LF || ch === DOT) {
				buf += ch;
				scnr.next();
				return fn(buf);
			} else {
				buf += ch;
				scnr.next();
				return fn(buf);
			}
		};
		return fn("");
	}
	function readPlural(scnr) {
		skipSpaces(scnr);
		const plural = eat(scnr, "|");
		skipSpaces(scnr);
		return plural;
	}
	function readTokenInPlaceholder(scnr, context) {
		let token = null;
		switch (scnr.currentChar()) {
			case "{":
				if (context.braceNest >= 1) emitError(CompileErrorCodes.NOT_ALLOW_NEST_PLACEHOLDER, currentPosition(), 0);
				scnr.next();
				token = getToken(context, 2, "{");
				skipSpaces(scnr);
				context.braceNest++;
				return token;
			case "}":
				if (context.braceNest > 0 && context.currentType === 2) emitError(CompileErrorCodes.EMPTY_PLACEHOLDER, currentPosition(), 0);
				scnr.next();
				token = getToken(context, 3, "}");
				context.braceNest--;
				context.braceNest > 0 && skipSpaces(scnr);
				if (context.inLinked && context.braceNest === 0) context.inLinked = false;
				return token;
			case "@":
				if (context.braceNest > 0) emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
				token = readTokenInLinked(scnr, context) || getEndToken(context);
				context.braceNest = 0;
				return token;
			default: {
				let validNamedIdentifier = true;
				let validListIdentifier = true;
				let validLiteral = true;
				if (isPluralStart(scnr)) {
					if (context.braceNest > 0) emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
					token = getToken(context, 1, readPlural(scnr));
					context.braceNest = 0;
					context.inLinked = false;
					return token;
				}
				if (context.braceNest > 0 && (context.currentType === 4 || context.currentType === 5 || context.currentType === 6)) {
					emitError(CompileErrorCodes.UNTERMINATED_CLOSING_BRACE, currentPosition(), 0);
					context.braceNest = 0;
					return readToken(scnr, context);
				}
				if (validNamedIdentifier = isNamedIdentifierStart(scnr, context)) {
					token = getToken(context, 4, readNamedIdentifier(scnr));
					skipSpaces(scnr);
					return token;
				}
				if (validListIdentifier = isListIdentifierStart(scnr, context)) {
					token = getToken(context, 5, readListIdentifier(scnr));
					skipSpaces(scnr);
					return token;
				}
				if (validLiteral = isLiteralStart(scnr, context)) {
					token = getToken(context, 6, readLiteral(scnr));
					skipSpaces(scnr);
					return token;
				}
				if (!validNamedIdentifier && !validListIdentifier && !validLiteral) {
					token = getToken(context, 12, readInvalidIdentifier(scnr));
					emitError(CompileErrorCodes.INVALID_TOKEN_IN_PLACEHOLDER, currentPosition(), 0, token.value);
					skipSpaces(scnr);
					return token;
				}
				break;
			}
		}
		return token;
	}
	function readTokenInLinked(scnr, context) {
		const { currentType } = context;
		let token = null;
		const ch = scnr.currentChar();
		if ((currentType === 7 || currentType === 8 || currentType === 11 || currentType === 9) && (ch === CHAR_LF || ch === CHAR_SP)) emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
		switch (ch) {
			case "@":
				scnr.next();
				token = getToken(context, 7, "@");
				context.inLinked = true;
				return token;
			case ".":
				skipSpaces(scnr);
				scnr.next();
				return getToken(context, 8, ".");
			case ":":
				skipSpaces(scnr);
				scnr.next();
				return getToken(context, 9, ":");
			default:
				if (isPluralStart(scnr)) {
					token = getToken(context, 1, readPlural(scnr));
					context.braceNest = 0;
					context.inLinked = false;
					return token;
				}
				if (isLinkedDotStart(scnr, context) || isLinkedDelimiterStart(scnr, context)) {
					skipSpaces(scnr);
					return readTokenInLinked(scnr, context);
				}
				if (isLinkedModifierStart(scnr, context)) {
					skipSpaces(scnr);
					return getToken(context, 11, readLinkedModifier(scnr));
				}
				if (isLinkedReferStart(scnr, context)) {
					skipSpaces(scnr);
					if (ch === "{") return readTokenInPlaceholder(scnr, context) || token;
					else return getToken(context, 10, readLinkedRefer(scnr));
				}
				if (currentType === 7) emitError(CompileErrorCodes.INVALID_LINKED_FORMAT, currentPosition(), 0);
				context.braceNest = 0;
				context.inLinked = false;
				return readToken(scnr, context);
		}
	}
	function readToken(scnr, context) {
		let token = { type: 13 };
		if (context.braceNest > 0) return readTokenInPlaceholder(scnr, context) || getEndToken(context);
		if (context.inLinked) return readTokenInLinked(scnr, context) || getEndToken(context);
		switch (scnr.currentChar()) {
			case "{": return readTokenInPlaceholder(scnr, context) || getEndToken(context);
			case "}":
				emitError(CompileErrorCodes.UNBALANCED_CLOSING_BRACE, currentPosition(), 0);
				scnr.next();
				return getToken(context, 3, "}");
			case "@": return readTokenInLinked(scnr, context) || getEndToken(context);
			default:
				if (isPluralStart(scnr)) {
					token = getToken(context, 1, readPlural(scnr));
					context.braceNest = 0;
					context.inLinked = false;
					return token;
				}
				if (isTextStart(scnr)) return getToken(context, 0, readText(scnr));
				break;
		}
		return token;
	}
	function nextToken() {
		const { currentType, offset, startLoc, endLoc } = _context;
		_context.lastType = currentType;
		_context.lastOffset = offset;
		_context.lastStartLoc = startLoc;
		_context.lastEndLoc = endLoc;
		_context.offset = currentOffset();
		_context.startLoc = currentPosition();
		if (_scnr.currentChar() === EOF) return getToken(_context, 13);
		return readToken(_scnr, _context);
	}
	return {
		nextToken,
		currentOffset,
		currentPosition,
		context
	};
}
var ERROR_DOMAIN$2 = "parser";
var KNOWN_ESCAPES = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
var TEXT_ESCAPES = /\\([\\@{}|])/g;
function fromTextEscapeSequence(_match, char) {
	return char;
}
function fromEscapeSequence(match, codePoint4, codePoint6) {
	switch (match) {
		case `\\\\`: return `\\`;
		case `\\\'`: return `\'`;
		default: {
			const codePoint = parseInt(codePoint4 || codePoint6, 16);
			if (codePoint <= 55295 || codePoint >= 57344) return String.fromCodePoint(codePoint);
			return "�";
		}
	}
}
function createParser(options = {}) {
	const location = options.location !== false;
	const { onError } = options;
	function emitError(tokenzer, code, start, offset, ...args) {
		const end = tokenzer.currentPosition();
		end.offset += offset;
		end.column += offset;
		if (onError) onError(createCompileError(code, location ? createLocation(start, end) : null, {
			domain: ERROR_DOMAIN$2,
			args
		}));
	}
	function startNode(type, offset, loc) {
		const node = { type };
		if (location) {
			node.start = offset;
			node.end = offset;
			node.loc = {
				start: loc,
				end: loc
			};
		}
		return node;
	}
	function endNode(node, offset, pos, type) {
		if (location) {
			node.end = offset;
			if (node.loc) node.loc.end = pos;
		}
	}
	function parseText(tokenizer, value) {
		const context = tokenizer.context();
		const node = startNode(3, context.offset, context.startLoc);
		node.value = value.replace(TEXT_ESCAPES, fromTextEscapeSequence);
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseList(tokenizer, index) {
		const { lastOffset: offset, lastStartLoc: loc } = tokenizer.context();
		const node = startNode(5, offset, loc);
		node.index = parseInt(index, 10);
		tokenizer.nextToken();
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseNamed(tokenizer, key) {
		const { lastOffset: offset, lastStartLoc: loc } = tokenizer.context();
		const node = startNode(4, offset, loc);
		node.key = key;
		tokenizer.nextToken();
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseLiteral(tokenizer, value) {
		const { lastOffset: offset, lastStartLoc: loc } = tokenizer.context();
		const node = startNode(9, offset, loc);
		node.value = value.replace(KNOWN_ESCAPES, fromEscapeSequence);
		tokenizer.nextToken();
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseLinkedModifier(tokenizer) {
		const token = tokenizer.nextToken();
		const context = tokenizer.context();
		const { lastOffset: offset, lastStartLoc: loc } = context;
		const node = startNode(8, offset, loc);
		if (token.type !== 11) {
			emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_MODIFIER, context.lastStartLoc, 0);
			node.value = "";
			endNode(node, offset, loc);
			return {
				nextConsumeToken: token,
				node
			};
		}
		if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
		node.value = token.value || "";
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return { node };
	}
	function parseLinkedKey(tokenizer, value) {
		const context = tokenizer.context();
		const node = startNode(7, context.offset, context.startLoc);
		node.value = value;
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseLinked(tokenizer) {
		const context = tokenizer.context();
		const linkedNode = startNode(6, context.offset, context.startLoc);
		let token = tokenizer.nextToken();
		if (token.type === 8) {
			const parsed = parseLinkedModifier(tokenizer);
			linkedNode.modifier = parsed.node;
			token = parsed.nextConsumeToken || tokenizer.nextToken();
		}
		if (token.type !== 9) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
		token = tokenizer.nextToken();
		if (token.type === 2) token = tokenizer.nextToken();
		switch (token.type) {
			case 10:
				if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
				linkedNode.key = parseLinkedKey(tokenizer, token.value || "");
				break;
			case 4:
				if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
				linkedNode.key = parseNamed(tokenizer, token.value || "");
				break;
			case 5:
				if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
				linkedNode.key = parseList(tokenizer, token.value || "");
				break;
			case 6:
				if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
				linkedNode.key = parseLiteral(tokenizer, token.value || "");
				break;
			default: {
				emitError(tokenizer, CompileErrorCodes.UNEXPECTED_EMPTY_LINKED_KEY, context.lastStartLoc, 0);
				const nextContext = tokenizer.context();
				const emptyLinkedKeyNode = startNode(7, nextContext.offset, nextContext.startLoc);
				emptyLinkedKeyNode.value = "";
				endNode(emptyLinkedKeyNode, nextContext.offset, nextContext.startLoc);
				linkedNode.key = emptyLinkedKeyNode;
				endNode(linkedNode, nextContext.offset, nextContext.startLoc);
				return {
					nextConsumeToken: token,
					node: linkedNode
				};
			}
		}
		endNode(linkedNode, tokenizer.currentOffset(), tokenizer.currentPosition());
		return { node: linkedNode };
	}
	function parseMessage(tokenizer) {
		const context = tokenizer.context();
		const node = startNode(2, context.currentType === 1 ? tokenizer.currentOffset() : context.offset, context.currentType === 1 ? context.endLoc : context.startLoc);
		node.items = [];
		let nextToken = null;
		do {
			const token = nextToken || tokenizer.nextToken();
			nextToken = null;
			switch (token.type) {
				case 0:
					if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
					node.items.push(parseText(tokenizer, token.value || ""));
					break;
				case 5:
					if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
					node.items.push(parseList(tokenizer, token.value || ""));
					break;
				case 4:
					if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
					node.items.push(parseNamed(tokenizer, token.value || ""));
					break;
				case 6:
					if (token.value == null) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, getTokenCaption(token));
					node.items.push(parseLiteral(tokenizer, token.value || ""));
					break;
				case 7: {
					const parsed = parseLinked(tokenizer);
					node.items.push(parsed.node);
					nextToken = parsed.nextConsumeToken || null;
					break;
				}
			}
		} while (context.currentType !== 13 && context.currentType !== 1);
		endNode(node, context.currentType === 1 ? context.lastOffset : tokenizer.currentOffset(), context.currentType === 1 ? context.lastEndLoc : tokenizer.currentPosition());
		return node;
	}
	function parsePlural(tokenizer, offset, loc, msgNode) {
		const context = tokenizer.context();
		let hasEmptyMessage = msgNode.items.length === 0;
		const node = startNode(1, offset, loc);
		node.cases = [];
		node.cases.push(msgNode);
		do {
			const msg = parseMessage(tokenizer);
			if (!hasEmptyMessage) hasEmptyMessage = msg.items.length === 0;
			node.cases.push(msg);
		} while (context.currentType !== 13);
		if (hasEmptyMessage) emitError(tokenizer, CompileErrorCodes.MUST_HAVE_MESSAGES_IN_PLURAL, loc, 0);
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	function parseResource(tokenizer) {
		const context = tokenizer.context();
		const { offset, startLoc } = context;
		const msgNode = parseMessage(tokenizer);
		if (context.currentType === 13) return msgNode;
		else return parsePlural(tokenizer, offset, startLoc, msgNode);
	}
	function parse(source) {
		const tokenizer = createTokenizer(source, assign({}, options));
		const context = tokenizer.context();
		const node = startNode(0, context.offset, context.startLoc);
		if (location && node.loc) node.loc.source = source;
		node.body = parseResource(tokenizer);
		if (options.onCacheKey) node.cacheKey = options.onCacheKey(source);
		if (context.currentType !== 13) emitError(tokenizer, CompileErrorCodes.UNEXPECTED_LEXICAL_ANALYSIS, context.lastStartLoc, 0, source[context.offset] || "");
		endNode(node, tokenizer.currentOffset(), tokenizer.currentPosition());
		return node;
	}
	return { parse };
}
function getTokenCaption(token) {
	if (token.type === 13) return "EOF";
	const name = (token.value || "").replace(/\r?\n/gu, "\\n");
	return name.length > 10 ? name.slice(0, 9) + "…" : name;
}
function createTransformer(ast, options = {}) {
	const _context = {
		ast,
		helpers: /* @__PURE__ */ new Set()
	};
	const context = () => _context;
	const helper = (name) => {
		_context.helpers.add(name);
		return name;
	};
	return {
		context,
		helper
	};
}
function traverseNodes(nodes, transformer) {
	for (let i = 0; i < nodes.length; i++) traverseNode(nodes[i], transformer);
}
function traverseNode(node, transformer) {
	switch (node.type) {
		case 1:
			traverseNodes(node.cases, transformer);
			transformer.helper("plural");
			break;
		case 2:
			traverseNodes(node.items, transformer);
			break;
		case 6:
			traverseNode(node.key, transformer);
			transformer.helper("linked");
			transformer.helper("type");
			break;
		case 5:
			transformer.helper("interpolate");
			transformer.helper("list");
			break;
		case 4:
			transformer.helper("interpolate");
			transformer.helper("named");
			break;
	}
}
function transform(ast, options = {}) {
	const transformer = createTransformer(ast);
	transformer.helper("normalize");
	ast.body && traverseNode(ast.body, transformer);
	const context = transformer.context();
	ast.helpers = Array.from(context.helpers);
}
function optimize(ast) {
	const body = ast.body;
	if (body.type === 2) optimizeMessageNode(body);
	else body.cases.forEach((c) => optimizeMessageNode(c));
	return ast;
}
function optimizeMessageNode(message) {
	if (message.items.length === 1) {
		const item = message.items[0];
		if (item.type === 3 || item.type === 9) {
			message.static = item.value;
			delete item.value;
		}
	} else {
		const values = [];
		for (let i = 0; i < message.items.length; i++) {
			const item = message.items[i];
			if (!(item.type === 3 || item.type === 9)) break;
			if (item.value == null) break;
			values.push(item.value);
		}
		if (values.length === message.items.length) {
			message.static = join(values);
			for (let i = 0; i < message.items.length; i++) {
				const item = message.items[i];
				if (item.type === 3 || item.type === 9) delete item.value;
			}
		}
	}
}
function minify(node) {
	node.t = node.type;
	switch (node.type) {
		case 0: {
			const resource = node;
			minify(resource.body);
			resource.b = resource.body;
			delete resource.body;
			break;
		}
		case 1: {
			const plural = node;
			const cases = plural.cases;
			for (let i = 0; i < cases.length; i++) minify(cases[i]);
			plural.c = cases;
			delete plural.cases;
			break;
		}
		case 2: {
			const message = node;
			const items = message.items;
			for (let i = 0; i < items.length; i++) minify(items[i]);
			message.i = items;
			delete message.items;
			if (message.static) {
				message.s = message.static;
				delete message.static;
			}
			break;
		}
		case 3:
		case 9:
		case 8:
		case 7: {
			const valueNode = node;
			if (valueNode.value) {
				valueNode.v = valueNode.value;
				delete valueNode.value;
			}
			break;
		}
		case 6: {
			const linked = node;
			minify(linked.key);
			linked.k = linked.key;
			delete linked.key;
			if (linked.modifier) {
				minify(linked.modifier);
				linked.m = linked.modifier;
				delete linked.modifier;
			}
			break;
		}
		case 5: {
			const list = node;
			list.i = list.index;
			delete list.index;
			break;
		}
		case 4: {
			const named = node;
			named.k = named.key;
			delete named.key;
			break;
		}
		default:
	}
	delete node.type;
}
function createCodeGenerator(ast, options) {
	const { sourceMap, filename, breakLineCode, needIndent: _needIndent } = options;
	const location = options.location !== false;
	const _context = {
		filename,
		code: "",
		column: 1,
		line: 1,
		offset: 0,
		map: void 0,
		breakLineCode,
		needIndent: _needIndent,
		indentLevel: 0
	};
	if (location && ast.loc) _context.source = ast.loc.source;
	const context = () => _context;
	function push(code, node) {
		_context.code += code;
	}
	function _newline(n, withBreakLine = true) {
		const _breakLineCode = withBreakLine ? breakLineCode : "";
		push(_needIndent ? _breakLineCode + `  `.repeat(n) : _breakLineCode);
	}
	function indent(withNewLine = true) {
		const level = ++_context.indentLevel;
		withNewLine && _newline(level);
	}
	function deindent(withNewLine = true) {
		const level = --_context.indentLevel;
		withNewLine && _newline(level);
	}
	function newline() {
		_newline(_context.indentLevel);
	}
	const helper = (key) => `_${key}`;
	const needIndent = () => _context.needIndent;
	return {
		context,
		push,
		indent,
		deindent,
		newline,
		helper,
		needIndent
	};
}
function generateLinkedNode(generator, node) {
	const { helper } = generator;
	generator.push(`${helper("linked")}(`);
	generateNode(generator, node.key);
	if (node.modifier) {
		generator.push(`, `);
		generateNode(generator, node.modifier);
		generator.push(`, _type`);
	} else generator.push(`, undefined, _type`);
	generator.push(`)`);
}
function generateMessageNode(generator, node) {
	const { helper, needIndent } = generator;
	generator.push(`${helper("normalize")}([`);
	generator.indent(needIndent());
	const length = node.items.length;
	for (let i = 0; i < length; i++) {
		generateNode(generator, node.items[i]);
		if (i === length - 1) break;
		generator.push(", ");
	}
	generator.deindent(needIndent());
	generator.push("])");
}
function generatePluralNode(generator, node) {
	const { helper, needIndent } = generator;
	if (node.cases.length > 1) {
		generator.push(`${helper("plural")}([`);
		generator.indent(needIndent());
		const length = node.cases.length;
		for (let i = 0; i < length; i++) {
			generateNode(generator, node.cases[i]);
			if (i === length - 1) break;
			generator.push(", ");
		}
		generator.deindent(needIndent());
		generator.push(`])`);
	}
}
function generateResource(generator, node) {
	if (node.body) generateNode(generator, node.body);
	else generator.push("null");
}
function generateNode(generator, node) {
	const { helper } = generator;
	switch (node.type) {
		case 0:
			generateResource(generator, node);
			break;
		case 1:
			generatePluralNode(generator, node);
			break;
		case 2:
			generateMessageNode(generator, node);
			break;
		case 6:
			generateLinkedNode(generator, node);
			break;
		case 8:
			generator.push(JSON.stringify(node.value), node);
			break;
		case 7:
			generator.push(JSON.stringify(node.value), node);
			break;
		case 5:
			generator.push(`${helper("interpolate")}(${helper("list")}(${node.index}))`, node);
			break;
		case 4:
			generator.push(`${helper("interpolate")}(${helper("named")}(${JSON.stringify(node.key)}))`, node);
			break;
		case 9:
			generator.push(JSON.stringify(node.value), node);
			break;
		case 3:
			generator.push(JSON.stringify(node.value), node);
			break;
		default:
	}
}
var generate = (ast, options = {}) => {
	const mode = isString(options.mode) ? options.mode : "normal";
	const filename = isString(options.filename) ? options.filename : "message.intl";
	const sourceMap = !!options.sourceMap;
	const breakLineCode = options.breakLineCode != null ? options.breakLineCode : mode === "arrow" ? ";" : "\n";
	const needIndent = options.needIndent ? options.needIndent : mode !== "arrow";
	const helpers = ast.helpers || [];
	const generator = createCodeGenerator(ast, {
		mode,
		filename,
		sourceMap,
		breakLineCode,
		needIndent
	});
	generator.push(mode === "normal" ? `function __msg__ (ctx) {` : `(ctx) => {`);
	generator.indent(needIndent);
	if (helpers.length > 0) {
		generator.push(`const { ${join(helpers.map((s) => `${s}: _${s}`), ", ")} } = ctx`);
		generator.newline();
	}
	generator.push(`return `);
	generateNode(generator, ast);
	generator.deindent(needIndent);
	generator.push(`}`);
	delete ast.helpers;
	const { code, map } = generator.context();
	return {
		ast,
		code,
		map: map ? map.toJSON() : void 0
	};
};
function baseCompile$1(source, options = {}) {
	const assignedOptions = assign({}, options);
	const jit = !!assignedOptions.jit;
	const enalbeMinify = !!assignedOptions.minify;
	const enambeOptimize = assignedOptions.optimize == null ? true : assignedOptions.optimize;
	const ast = createParser(assignedOptions).parse(source);
	if (!jit) {
		transform(ast, assignedOptions);
		return generate(ast, assignedOptions);
	} else {
		enambeOptimize && optimize(ast);
		enalbeMinify && minify(ast);
		return {
			ast,
			code: ""
		};
	}
}
//#endregion
//#region node_modules/@intlify/core-base/dist/core-base.mjs
/*!
* core-base v11.3.0
* (c) 2026 kazuya kawaguchi
* Released under the MIT License.
*/
/**
* This is only called in esm-bundler builds.
* istanbul-ignore-next
*/
function initFeatureFlags$1() {
	if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
	if (typeof __INTLIFY_DROP_MESSAGE_COMPILER__ !== "boolean") getGlobalThis().__INTLIFY_DROP_MESSAGE_COMPILER__ = false;
}
function isMessageAST(val) {
	return isObject(val) && resolveType(val) === 0 && (hasOwn(val, "b") || hasOwn(val, "body"));
}
var PROPS_BODY = ["b", "body"];
function resolveBody(node) {
	return resolveProps(node, PROPS_BODY);
}
var PROPS_CASES = ["c", "cases"];
function resolveCases(node) {
	return resolveProps(node, PROPS_CASES, []);
}
var PROPS_STATIC = ["s", "static"];
function resolveStatic(node) {
	return resolveProps(node, PROPS_STATIC);
}
var PROPS_ITEMS = ["i", "items"];
function resolveItems(node) {
	return resolveProps(node, PROPS_ITEMS, []);
}
var PROPS_TYPE = ["t", "type"];
function resolveType(node) {
	return resolveProps(node, PROPS_TYPE);
}
var PROPS_VALUE = ["v", "value"];
function resolveValue$1(node, type) {
	const resolved = resolveProps(node, PROPS_VALUE);
	if (resolved != null) return resolved;
	else throw createUnhandleNodeError(type);
}
var PROPS_MODIFIER = ["m", "modifier"];
function resolveLinkedModifier(node) {
	return resolveProps(node, PROPS_MODIFIER);
}
var PROPS_KEY = ["k", "key"];
function resolveLinkedKey(node) {
	const resolved = resolveProps(node, PROPS_KEY);
	if (resolved) return resolved;
	else throw createUnhandleNodeError(6);
}
function resolveProps(node, props, defaultValue) {
	for (let i = 0; i < props.length; i++) {
		const prop = props[i];
		if (hasOwn(node, prop) && node[prop] != null) return node[prop];
	}
	return defaultValue;
}
var AST_NODE_PROPS_KEYS = [
	...PROPS_BODY,
	...PROPS_CASES,
	...PROPS_STATIC,
	...PROPS_ITEMS,
	...PROPS_KEY,
	...PROPS_MODIFIER,
	...PROPS_VALUE,
	...PROPS_TYPE
];
function createUnhandleNodeError(type) {
	return /* @__PURE__ */ new Error(`unhandled node type: ${type}`);
}
function format(ast) {
	const msg = (ctx) => formatParts(ctx, ast);
	return msg;
}
function formatParts(ctx, ast) {
	const body = resolveBody(ast);
	if (body == null) throw createUnhandleNodeError(0);
	if (resolveType(body) === 1) {
		const cases = resolveCases(body);
		return ctx.plural(cases.reduce((messages, c) => [...messages, formatMessageParts(ctx, c)], []));
	} else return formatMessageParts(ctx, body);
}
function formatMessageParts(ctx, node) {
	const static_ = resolveStatic(node);
	if (static_ != null) return ctx.type === "text" ? static_ : ctx.normalize([static_]);
	else {
		const messages = resolveItems(node).reduce((acm, c) => [...acm, formatMessagePart(ctx, c)], []);
		return ctx.normalize(messages);
	}
}
function formatMessagePart(ctx, node) {
	const type = resolveType(node);
	switch (type) {
		case 3: return resolveValue$1(node, type);
		case 9: return resolveValue$1(node, type);
		case 4: {
			const named = node;
			if (hasOwn(named, "k") && named.k) return ctx.interpolate(ctx.named(named.k));
			if (hasOwn(named, "key") && named.key) return ctx.interpolate(ctx.named(named.key));
			throw createUnhandleNodeError(type);
		}
		case 5: {
			const list = node;
			if (hasOwn(list, "i") && isNumber(list.i)) return ctx.interpolate(ctx.list(list.i));
			if (hasOwn(list, "index") && isNumber(list.index)) return ctx.interpolate(ctx.list(list.index));
			throw createUnhandleNodeError(type);
		}
		case 6: {
			const linked = node;
			const modifier = resolveLinkedModifier(linked);
			const key = resolveLinkedKey(linked);
			return ctx.linked(formatMessagePart(ctx, key), modifier ? formatMessagePart(ctx, modifier) : void 0, ctx.type);
		}
		case 7: return resolveValue$1(node, type);
		case 8: return resolveValue$1(node, type);
		default: throw new Error(`unhandled node on format message part: ${type}`);
	}
}
var defaultOnCacheKey = (message) => message;
var compileCache = create();
function baseCompile(message, options = {}) {
	let detectError = false;
	const onError = options.onError || defaultOnError;
	options.onError = (err) => {
		detectError = true;
		onError(err);
	};
	return {
		...baseCompile$1(message, options),
		detectError
	};
}
/* @__NO_SIDE_EFFECTS__ */
function compile(message, context) {
	if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && isString(message)) {
		isBoolean(context.warnHtmlMessage) && context.warnHtmlMessage;
		const cacheKey = (context.onCacheKey || defaultOnCacheKey)(message);
		const cached = compileCache[cacheKey];
		if (cached) return cached;
		const { ast, detectError } = baseCompile(message, {
			...context,
			location: false,
			jit: true
		});
		const msg = format(ast);
		return !detectError ? compileCache[cacheKey] = msg : msg;
	} else {
		const cacheKey = message.cacheKey;
		if (cacheKey) {
			const cached = compileCache[cacheKey];
			if (cached) return cached;
			return compileCache[cacheKey] = format(message);
		} else return format(message);
	}
}
var devtools = null;
function setDevToolsHook(hook) {
	devtools = hook;
}
function initI18nDevTools(i18n, version, meta) {
	devtools && devtools.emit("i18n:init", {
		timestamp: Date.now(),
		i18n,
		version,
		meta
	});
}
var translateDevTools = /* @__PURE__ */ createDevToolsHook("function:translate");
function createDevToolsHook(hook) {
	return (payloads) => devtools && devtools.emit(hook, payloads);
}
var CoreErrorCodes = {
	INVALID_ARGUMENT: 17,
	INVALID_DATE_ARGUMENT: 18,
	INVALID_ISO_DATE_ARGUMENT: 19,
	NOT_SUPPORT_NON_STRING_MESSAGE: 20,
	NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
	NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
	NOT_SUPPORT_LOCALE_TYPE: 23
};
function createCoreError(code) {
	return createCompileError(code, null, void 0);
}
CoreErrorCodes.INVALID_ARGUMENT, CoreErrorCodes.INVALID_DATE_ARGUMENT, CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT, CoreErrorCodes.NOT_SUPPORT_NON_STRING_MESSAGE, CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE, CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION, CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE;
/** @internal */
function getLocale(context, options) {
	return options.locale != null ? resolveLocale(options.locale) : resolveLocale(context.locale);
}
var _resolveLocale;
/** @internal */
function resolveLocale(locale) {
	if (isString(locale)) return locale;
	else if (isFunction(locale)) if (locale.resolvedOnce && _resolveLocale != null) return _resolveLocale;
	else if (locale.constructor.name === "Function") {
		const resolve = locale();
		if (isPromise(resolve)) throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
		return _resolveLocale = resolve;
	} else throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	else throw createCoreError(CoreErrorCodes.NOT_SUPPORT_LOCALE_TYPE);
}
/**
* Fallback with simple implemenation
*
* @remarks
* A fallback locale function implemented with a simple fallback algorithm.
*
* Basically, it returns the value as specified in the `fallbackLocale` props, and is processed with the fallback inside intlify.
*
* @param ctx - A {@link CoreContext | context}
* @param fallback - A {@link FallbackLocale | fallback locale}
* @param start - A starting {@link Locale | locale}
*
* @returns Fallback locales
*
* @VueI18nGeneral
*/
function fallbackWithSimple(ctx, fallback, start) {
	return [...new Set([start, ...isArray(fallback) ? fallback : isObject(fallback) ? Object.keys(fallback) : isString(fallback) ? [fallback] : [start]])];
}
/**
* Fallback with locale chain
*
* @remarks
* A fallback locale function implemented with a fallback chain algorithm. It's used in VueI18n as default.
*
* @param ctx - A {@link CoreContext | context}
* @param fallback - A {@link FallbackLocale | fallback locale}
* @param start - A starting {@link Locale | locale}
*
* @returns Fallback locales
*
* @VueI18nSee [Fallbacking](../guide/essentials/fallback)
*
* @VueI18nGeneral
*/
function fallbackWithLocaleChain(ctx, fallback, start) {
	const startLocale = isString(start) ? start : DEFAULT_LOCALE;
	const context = ctx;
	if (!context.__localeChainCache) context.__localeChainCache = /* @__PURE__ */ new Map();
	let chain = context.__localeChainCache.get(startLocale);
	if (!chain) {
		chain = [];
		let block = [start];
		while (isArray(block)) block = appendBlockToChain(chain, block, fallback);
		const defaults = isArray(fallback) || !isPlainObject(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
		block = isString(defaults) ? [defaults] : defaults;
		if (isArray(block)) appendBlockToChain(chain, block, false);
		context.__localeChainCache.set(startLocale, chain);
	}
	return chain;
}
function appendBlockToChain(chain, block, blocks) {
	let follow = true;
	for (let i = 0; i < block.length && isBoolean(follow); i++) {
		const locale = block[i];
		if (isString(locale)) follow = appendLocaleToChain(chain, block[i], blocks);
	}
	return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
	let follow;
	const tokens = locale.split("-");
	do {
		follow = appendItemToChain(chain, tokens.join("-"), blocks);
		tokens.splice(-1, 1);
	} while (tokens.length && follow === true);
	return follow;
}
function appendItemToChain(chain, target, blocks) {
	let follow = false;
	if (!chain.includes(target)) {
		follow = true;
		if (target) {
			follow = target[target.length - 1] !== "!";
			const locale = target.replace(/!/g, "");
			chain.push(locale);
			if ((isArray(blocks) || isPlainObject(blocks)) && blocks[locale]) follow = blocks[locale];
		}
	}
	return follow;
}
var pathStateMachine = [];
pathStateMachine[0] = {
	["w"]: [0],
	["i"]: [3, 0],
	["["]: [4],
	["o"]: [7]
};
pathStateMachine[1] = {
	["w"]: [1],
	["."]: [2],
	["["]: [4],
	["o"]: [7]
};
pathStateMachine[2] = {
	["w"]: [2],
	["i"]: [3, 0],
	["0"]: [3, 0]
};
pathStateMachine[3] = {
	["i"]: [3, 0],
	["0"]: [3, 0],
	["w"]: [1, 1],
	["."]: [2, 1],
	["["]: [4, 1],
	["o"]: [7, 1]
};
pathStateMachine[4] = {
	["'"]: [5, 0],
	["\""]: [6, 0],
	["["]: [4, 2],
	["]"]: [1, 3],
	["o"]: 8,
	["l"]: [4, 0]
};
pathStateMachine[5] = {
	["'"]: [4, 0],
	["o"]: 8,
	["l"]: [5, 0]
};
pathStateMachine[6] = {
	["\""]: [4, 0],
	["o"]: 8,
	["l"]: [6, 0]
};
/**
* Check if an expression is a literal value.
*/
var literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
	return literalValueRE.test(exp);
}
/**
* Strip quotes from a string
*/
function stripQuotes(str) {
	const a = str.charCodeAt(0);
	return a === str.charCodeAt(str.length - 1) && (a === 34 || a === 39) ? str.slice(1, -1) : str;
}
/**
* Determine the type of a character in a keypath.
*/
function getPathCharType(ch) {
	if (ch === void 0 || ch === null) return "o";
	switch (ch.charCodeAt(0)) {
		case 91:
		case 93:
		case 46:
		case 34:
		case 39: return ch;
		case 95:
		case 36:
		case 45: return "i";
		case 9:
		case 10:
		case 13:
		case 160:
		case 65279:
		case 8232:
		case 8233: return "w";
	}
	return "i";
}
/**
* Format a subPath, return its plain form if it is
* a literal string or number. Otherwise prepend the
* dynamic indicator (*).
*/
function formatSubPath(path) {
	const trimmed = path.trim();
	if (path.charAt(0) === "0" && isNaN(parseInt(path))) return false;
	return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
/**
* Parse a string path into an array of segments
*/
function parse(path) {
	const keys = [];
	let index = -1;
	let mode = 0;
	let subPathDepth = 0;
	let c;
	let key;
	let newChar;
	let type;
	let transition;
	let action;
	let typeMap;
	const actions = [];
	actions[0] = () => {
		if (key === void 0) key = newChar;
		else key += newChar;
	};
	actions[1] = () => {
		if (key !== void 0) {
			keys.push(key);
			key = void 0;
		}
	};
	actions[2] = () => {
		actions[0]();
		subPathDepth++;
	};
	actions[3] = () => {
		if (subPathDepth > 0) {
			subPathDepth--;
			mode = 4;
			actions[0]();
		} else {
			subPathDepth = 0;
			if (key === void 0) return false;
			key = formatSubPath(key);
			if (key === false) return false;
			else actions[1]();
		}
	};
	function maybeUnescapeQuote() {
		const nextChar = path[index + 1];
		if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === "\"") {
			index++;
			newChar = "\\" + nextChar;
			actions[0]();
			return true;
		}
	}
	while (mode !== null) {
		index++;
		c = path[index];
		if (c === "\\" && maybeUnescapeQuote()) continue;
		type = getPathCharType(c);
		typeMap = pathStateMachine[mode];
		transition = typeMap[type] || typeMap["l"] || 8;
		if (transition === 8) return;
		mode = transition[0];
		if (transition[1] !== void 0) {
			action = actions[transition[1]];
			if (action) {
				newChar = c;
				if (action() === false) return;
			}
		}
		if (mode === 7) return keys;
	}
}
var cache = /* @__PURE__ */ new Map();
/**
* key-value message resolver
*
* @remarks
* Resolves messages with the key-value structure. Note that messages with a hierarchical structure such as objects cannot be resolved
*
* @param obj - A target object to be resolved with path
* @param path - A {@link Path | path} to resolve the value of message
*
* @returns A resolved {@link PathValue | path value}
*
* @VueI18nGeneral
*/
function resolveWithKeyValue(obj, path) {
	return isObject(obj) ? obj[path] : null;
}
/**
* message resolver
*
* @remarks
* Resolves messages. messages with a hierarchical structure such as objects can be resolved. This resolver is used in VueI18n as default.
*
* @param obj - A target object to be resolved with path
* @param path - A {@link Path | path} to resolve the value of message
*
* @returns A resolved {@link PathValue | path value}
*
* @VueI18nGeneral
*/
function resolveValue(obj, path) {
	if (!isObject(obj)) return null;
	let hit = cache.get(path);
	if (!hit) {
		hit = parse(path);
		if (hit) cache.set(path, hit);
	}
	if (!hit) return null;
	const len = hit.length;
	let last = obj;
	let i = 0;
	while (i < len) {
		const key = hit[i];
		/**
		* NOTE:
		* if `key` is intlify message format AST node key and `last` is intlify message format AST, skip it.
		* because the AST node is not a key-value structure.
		*/
		if (AST_NODE_PROPS_KEYS.includes(key) && isMessageAST(last)) return null;
		if (!isObject(last)) return null;
		if (!hasOwn(last, key)) return null;
		const val = last[key];
		if (val === void 0) return null;
		if (isFunction(last)) return null;
		last = val;
		i++;
	}
	return last;
}
var CoreWarnCodes = {
	NOT_FOUND_KEY: 1,
	FALLBACK_TO_TRANSLATE: 2,
	CANNOT_FORMAT_NUMBER: 3,
	FALLBACK_TO_NUMBER_FORMAT: 4,
	CANNOT_FORMAT_DATE: 5,
	FALLBACK_TO_DATE_FORMAT: 6,
	EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
	INVALID_NUMBER_ARGUMENT: 8,
	INVALID_DATE_ARGUMENT: 9
};
CoreWarnCodes.NOT_FOUND_KEY, CoreWarnCodes.FALLBACK_TO_TRANSLATE, CoreWarnCodes.CANNOT_FORMAT_NUMBER, CoreWarnCodes.FALLBACK_TO_NUMBER_FORMAT, CoreWarnCodes.CANNOT_FORMAT_DATE, CoreWarnCodes.FALLBACK_TO_DATE_FORMAT, CoreWarnCodes.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER, CoreWarnCodes.INVALID_NUMBER_ARGUMENT, CoreWarnCodes.INVALID_DATE_ARGUMENT;
/**
* Intlify core-base version
* @internal
*/
var VERSION$1 = "11.3.0";
var DEFAULT_LOCALE = "en-US";
var capitalize = (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substr(1)}`;
function getDefaultLinkedModifiers() {
	return {
		upper: (val, type) => {
			return type === "text" && isString(val) ? val.toUpperCase() : type === "vnode" && isObject(val) && "__v_isVNode" in val ? val.children.toUpperCase() : val;
		},
		lower: (val, type) => {
			return type === "text" && isString(val) ? val.toLowerCase() : type === "vnode" && isObject(val) && "__v_isVNode" in val ? val.children.toLowerCase() : val;
		},
		capitalize: (val, type) => {
			return type === "text" && isString(val) ? capitalize(val) : type === "vnode" && isObject(val) && "__v_isVNode" in val ? capitalize(val.children) : val;
		}
	};
}
var _compiler;
function registerMessageCompiler(compiler) {
	_compiler = compiler;
}
var _resolver;
/**
* Register the message resolver
*
* @param resolver - A {@link MessageResolver} function
*
* @VueI18nGeneral
*/
function registerMessageResolver(resolver) {
	_resolver = resolver;
}
var _fallbacker;
/**
* Register the locale fallbacker
*
* @param fallbacker - A {@link LocaleFallbacker} function
*
* @VueI18nGeneral
*/
function registerLocaleFallbacker(fallbacker) {
	_fallbacker = fallbacker;
}
var _additionalMeta = null;
var getAdditionalMeta = /* @__NO_SIDE_EFFECTS__ */ () => _additionalMeta;
var _fallbackContext = null;
var setFallbackContext = (context) => {
	_fallbackContext = context;
};
var getFallbackContext = () => _fallbackContext;
var _cid = 0;
function createCoreContext(options = {}) {
	const onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
	const version = isString(options.version) ? options.version : VERSION$1;
	const locale = isString(options.locale) || isFunction(options.locale) ? options.locale : DEFAULT_LOCALE;
	const _locale = isFunction(locale) ? DEFAULT_LOCALE : locale;
	const fallbackLocale = isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale;
	const messages = isPlainObject(options.messages) ? options.messages : createResources(_locale);
	const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : createResources(_locale);
	const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : createResources(_locale);
	const modifiers = assign(create(), options.modifiers, getDefaultLinkedModifiers());
	const pluralRules = options.pluralRules || create();
	const missing = isFunction(options.missing) ? options.missing : null;
	const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
	const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
	const fallbackFormat = !!options.fallbackFormat;
	const unresolving = !!options.unresolving;
	const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
	const processor = isPlainObject(options.processor) ? options.processor : null;
	const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
	const escapeParameter = !!options.escapeParameter;
	const messageCompiler = isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
	const messageResolver = isFunction(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
	const localeFallbacker = isFunction(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
	const fallbackContext = isObject(options.fallbackContext) ? options.fallbackContext : void 0;
	const internalOptions = options;
	const __datetimeFormatters = isObject(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
	const __numberFormatters = isObject(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
	const __meta = isObject(internalOptions.__meta) ? internalOptions.__meta : {};
	_cid++;
	const context = {
		version,
		cid: _cid,
		locale,
		fallbackLocale,
		messages,
		modifiers,
		pluralRules,
		missing,
		missingWarn,
		fallbackWarn,
		fallbackFormat,
		unresolving,
		postTranslation,
		processor,
		warnHtmlMessage,
		escapeParameter,
		messageCompiler,
		messageResolver,
		localeFallbacker,
		fallbackContext,
		onWarn,
		__meta
	};
	context.datetimeFormats = datetimeFormats;
	context.numberFormats = numberFormats;
	context.__datetimeFormatters = __datetimeFormatters;
	context.__numberFormatters = __numberFormatters;
	if (__INTLIFY_PROD_DEVTOOLS__) initI18nDevTools(context, version, __meta);
	return context;
}
var createResources = (locale) => ({ [locale]: create() });
/** @internal */
function handleMissing(context, key, locale, missingWarn, type) {
	const { missing, onWarn } = context;
	if (missing !== null) {
		const ret = missing(context, locale, key, type);
		return isString(ret) ? ret : key;
	} else return key;
}
/** @internal */
function updateFallbackLocale(ctx, locale, fallback) {
	const context = ctx;
	context.__localeChainCache = /* @__PURE__ */ new Map();
	ctx.localeFallbacker(ctx, fallback, locale);
}
/** @internal */
function isAlmostSameLocale(locale, compareLocale) {
	if (locale === compareLocale) return false;
	return locale.split("-")[0] === compareLocale.split("-")[0];
}
/** @internal */
function isImplicitFallback(targetLocale, locales) {
	const index = locales.indexOf(targetLocale);
	if (index === -1) return false;
	for (let i = index + 1; i < locales.length; i++) if (isAlmostSameLocale(targetLocale, locales[i])) return true;
	return false;
}
var intlDefined = typeof Intl !== "undefined";
intlDefined && Intl.DateTimeFormat, intlDefined && Intl.NumberFormat;
function datetime(context, ...args) {
	const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
	const { __datetimeFormatters } = context;
	if (!isString(args[0]) && !isDate(args[0]) && !isNumber(args[0])) return "";
	const [key, value, options, overrides] = parseDateTimeArgs(...args);
	const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
	isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
	const part = !!options.part;
	const locale = getLocale(context, options);
	const locales = localeFallbacker(context, fallbackLocale, locale);
	if (!isString(key) || key === "") return new Intl.DateTimeFormat(locale.replace(/!/g, ""), overrides).format(value);
	let datetimeFormat = {};
	let targetLocale;
	let format = null;
	const type = "datetime format";
	for (let i = 0; i < locales.length; i++) {
		targetLocale = locales[i];
		datetimeFormat = datetimeFormats[targetLocale] || {};
		format = datetimeFormat[key];
		if (isPlainObject(format)) break;
		handleMissing(context, key, targetLocale, missingWarn, type);
	}
	if (!isPlainObject(format) || !isString(targetLocale)) return unresolving ? -1 : key;
	let id = `${targetLocale}__${key}`;
	if (!isEmptyObject(overrides)) id = `${id}__${JSON.stringify(overrides)}`;
	let formatter = __datetimeFormatters.get(id);
	if (!formatter) {
		formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format, overrides));
		__datetimeFormatters.set(id, formatter);
	}
	return !part ? formatter.format(value) : formatter.formatToParts(value);
}
/** @internal */
var DATETIME_FORMAT_OPTIONS_KEYS = [
	"localeMatcher",
	"weekday",
	"era",
	"year",
	"month",
	"day",
	"hour",
	"minute",
	"second",
	"timeZoneName",
	"formatMatcher",
	"hour12",
	"timeZone",
	"dateStyle",
	"timeStyle",
	"calendar",
	"dayPeriod",
	"numberingSystem",
	"hourCycle",
	"fractionalSecondDigits"
];
/** @internal */
function parseDateTimeArgs(...args) {
	const [arg1, arg2, arg3, arg4] = args;
	const options = create();
	let overrides = create();
	let value;
	if (isString(arg1)) {
		const matches = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
		if (!matches) throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
		const dateTime = matches[3] ? matches[3].trim().startsWith("T") ? `${matches[1].trim()}${matches[3].trim()}` : `${matches[1].trim()}T${matches[3].trim()}` : matches[1].trim();
		value = new Date(dateTime);
		try {
			value.toISOString();
		} catch {
			throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
		}
	} else if (isDate(arg1)) {
		if (isNaN(arg1.getTime())) throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
		value = arg1;
	} else if (isNumber(arg1)) value = arg1;
	else throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
	if (isString(arg2)) options.key = arg2;
	else if (isPlainObject(arg2)) Object.keys(arg2).forEach((key) => {
		if (DATETIME_FORMAT_OPTIONS_KEYS.includes(key)) overrides[key] = arg2[key];
		else options[key] = arg2[key];
	});
	if (isString(arg3)) options.locale = arg3;
	else if (isPlainObject(arg3)) overrides = arg3;
	if (isPlainObject(arg4)) overrides = arg4;
	return [
		options.key || "",
		value,
		options,
		overrides
	];
}
/** @internal */
function clearDateTimeFormat(ctx, locale, format) {
	const context = ctx;
	for (const key in format) {
		const id = `${locale}__${key}`;
		if (!context.__datetimeFormatters.has(id)) continue;
		context.__datetimeFormatters.delete(id);
	}
}
function number(context, ...args) {
	const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
	const { __numberFormatters } = context;
	if (!isNumber(args[0])) return "";
	const [key, value, options, overrides] = parseNumberArgs(...args);
	const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
	isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
	const part = !!options.part;
	const locale = getLocale(context, options);
	const locales = localeFallbacker(context, fallbackLocale, locale);
	if (!isString(key) || key === "") return new Intl.NumberFormat(locale.replace(/!/g, ""), overrides).format(value);
	let numberFormat = {};
	let targetLocale;
	let format = null;
	const type = "number format";
	for (let i = 0; i < locales.length; i++) {
		targetLocale = locales[i];
		numberFormat = numberFormats[targetLocale] || {};
		format = numberFormat[key];
		if (isPlainObject(format)) break;
		handleMissing(context, key, targetLocale, missingWarn, type);
	}
	if (!isPlainObject(format) || !isString(targetLocale)) return unresolving ? -1 : key;
	let id = `${targetLocale}__${key}`;
	if (!isEmptyObject(overrides)) id = `${id}__${JSON.stringify(overrides)}`;
	let formatter = __numberFormatters.get(id);
	if (!formatter) {
		formatter = new Intl.NumberFormat(targetLocale, assign({}, format, overrides));
		__numberFormatters.set(id, formatter);
	}
	return !part ? formatter.format(value) : formatter.formatToParts(value);
}
/** @internal */
var NUMBER_FORMAT_OPTIONS_KEYS = [
	"localeMatcher",
	"style",
	"currency",
	"currencyDisplay",
	"currencySign",
	"useGrouping",
	"minimumIntegerDigits",
	"minimumFractionDigits",
	"maximumFractionDigits",
	"minimumSignificantDigits",
	"maximumSignificantDigits",
	"compactDisplay",
	"notation",
	"signDisplay",
	"unit",
	"unitDisplay",
	"roundingMode",
	"roundingPriority",
	"roundingIncrement",
	"trailingZeroDisplay"
];
/** @internal */
function parseNumberArgs(...args) {
	const [arg1, arg2, arg3, arg4] = args;
	const options = create();
	let overrides = create();
	if (!isNumber(arg1)) throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
	const value = arg1;
	if (isString(arg2)) options.key = arg2;
	else if (isPlainObject(arg2)) Object.keys(arg2).forEach((key) => {
		if (NUMBER_FORMAT_OPTIONS_KEYS.includes(key)) overrides[key] = arg2[key];
		else options[key] = arg2[key];
	});
	if (isString(arg3)) options.locale = arg3;
	else if (isPlainObject(arg3)) overrides = arg3;
	if (isPlainObject(arg4)) overrides = arg4;
	return [
		options.key || "",
		value,
		options,
		overrides
	];
}
/** @internal */
function clearNumberFormat(ctx, locale, format) {
	const context = ctx;
	for (const key in format) {
		const id = `${locale}__${key}`;
		if (!context.__numberFormatters.has(id)) continue;
		context.__numberFormatters.delete(id);
	}
}
var DEFAULT_MODIFIER = (str) => str;
var DEFAULT_MESSAGE = (ctx) => "";
var DEFAULT_MESSAGE_DATA_TYPE = "text";
var DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : join(values);
var DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
	choice = Math.abs(choice);
	if (choicesLength === 2) return choice === 1 ? 0 : 1;
	return Math.min(choice, 2);
}
function getPluralIndex(options) {
	const index = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
	return isNumber(options.named?.count) ? options.named.count : isNumber(options.named?.n) ? options.named.n : index;
}
function createMessageContext(options = {}) {
	const locale = options.locale;
	const pluralIndex = getPluralIndex(options);
	const pluralRule = isString(locale) && isFunction(options.pluralRules?.[locale]) ? options.pluralRules[locale] : pluralDefault;
	const orgPluralRule = pluralRule === pluralDefault ? void 0 : pluralDefault;
	const plural = (messages) => messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
	const _list = options.list || [];
	const list = (index) => _list[index];
	const _named = options.named || create();
	if (isNumber(options.pluralIndex)) {
		_named.count ||= options.pluralIndex;
		_named.n ||= options.pluralIndex;
	}
	const named = (key) => _named[key];
	function message(key, useLinked) {
		const msg = isFunction(options.messages) ? options.messages(key, !!useLinked) : isObject(options.messages) ? options.messages[key] : false;
		return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
	}
	const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
	const normalize = isFunction(options.processor?.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
	const interpolate = isFunction(options.processor?.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
	const type = isString(options.processor?.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
	const linked = (key, ...args) => {
		const [arg1, arg2] = args;
		let type = "text";
		let modifier = "";
		if (args.length === 1) {
			if (isObject(arg1)) {
				modifier = arg1.modifier || modifier;
				type = arg1.type || type;
			} else if (isString(arg1)) modifier = arg1 || modifier;
		} else if (args.length === 2) {
			if (isString(arg1)) modifier = arg1 || modifier;
			if (isString(arg2)) type = arg2 || type;
		}
		const ret = message(key, true)(ctx);
		const resolved = ret === "" || ret === void 0 ? key : ret;
		const msg = type === "vnode" && isArray(resolved) && modifier ? resolved[0] : resolved;
		return modifier ? _modifier(modifier)(msg, type) : msg;
	};
	const ctx = {
		["list"]: list,
		["named"]: named,
		["plural"]: plural,
		["linked"]: linked,
		["message"]: message,
		["type"]: type,
		["interpolate"]: interpolate,
		["normalize"]: normalize,
		["values"]: assign(create(), _list, _named)
	};
	return ctx;
}
var NOOP_MESSAGE_FUNCTION = () => "";
var isMessageFunction = (val) => isFunction(val);
function translate(context, ...args) {
	const { fallbackFormat, postTranslation, unresolving, messageCompiler, fallbackLocale, messages } = context;
	const [key, options] = parseTranslateArgs(...args);
	const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
	const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
	const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
	const resolvedMessage = !!options.resolvedMessage;
	const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : !messageCompiler ? () => key : key : fallbackFormat ? !messageCompiler ? () => key : key : null;
	const enableDefaultMsg = fallbackFormat || defaultMsgOrKey != null && (isString(defaultMsgOrKey) || isFunction(defaultMsgOrKey));
	const locale = getLocale(context, options);
	escapeParameter && escapeParams(options);
	let [formatScope, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
		key,
		locale,
		messages[locale] || create()
	];
	let format = formatScope;
	let cacheBaseKey = key;
	if (!resolvedMessage && !(isString(format) || isMessageAST(format) || isMessageFunction(format))) {
		if (enableDefaultMsg) {
			format = defaultMsgOrKey;
			cacheBaseKey = format;
		}
	}
	if (!resolvedMessage && (!(isString(format) || isMessageAST(format) || isMessageFunction(format)) || !isString(targetLocale))) return unresolving ? -1 : key;
	let occurred = false;
	const onError = () => {
		occurred = true;
	};
	const msg = !isMessageFunction(format) ? compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, onError) : format;
	if (occurred) return format;
	const messaged = evaluateMessage(context, msg, createMessageContext(getMessageContextOptions(context, targetLocale, message, options)));
	let ret = postTranslation ? postTranslation(messaged, key) : messaged;
	if (escapeParameter && isString(ret)) ret = sanitizeTranslatedHtml(ret);
	if (__INTLIFY_PROD_DEVTOOLS__) {
		const payloads = {
			timestamp: Date.now(),
			key: isString(key) ? key : isMessageFunction(format) ? format.key : "",
			locale: targetLocale || (isMessageFunction(format) ? format.locale : ""),
			format: isString(format) ? format : isMessageFunction(format) ? format.source : "",
			message: ret
		};
		payloads.meta = assign({}, context.__meta, /* @__PURE__ */ getAdditionalMeta() || {});
		translateDevTools(payloads);
	}
	return ret;
}
function escapeParams(options) {
	if (isArray(options.list)) options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
	else if (isObject(options.named)) Object.keys(options.named).forEach((key) => {
		if (isString(options.named[key])) options.named[key] = escapeHtml(options.named[key]);
	});
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
	const { messages, onWarn, messageResolver: resolveValue, localeFallbacker } = context;
	const locales = localeFallbacker(context, fallbackLocale, locale);
	let message = create();
	let targetLocale;
	let format = null;
	const type = "translate";
	for (let i = 0; i < locales.length; i++) {
		targetLocale = locales[i];
		message = messages[targetLocale] || create();
		if ((format = resolveValue(message, key)) === null) format = message[key];
		if (isString(format) || isMessageAST(format) || isMessageFunction(format)) break;
		if (!isImplicitFallback(targetLocale, locales)) {
			const missingRet = handleMissing(context, key, targetLocale, missingWarn, type);
			if (missingRet !== key) format = missingRet;
		}
	}
	return [
		format,
		targetLocale,
		message
	];
}
function compileMessageFormat(context, key, targetLocale, format, cacheBaseKey, onError) {
	const { messageCompiler, warnHtmlMessage } = context;
	if (isMessageFunction(format)) {
		const msg = format;
		msg.locale = msg.locale || targetLocale;
		msg.key = msg.key || key;
		return msg;
	}
	if (messageCompiler == null) {
		const msg = (() => format);
		msg.locale = targetLocale;
		msg.key = key;
		return msg;
	}
	const msg = messageCompiler(format, getCompileContext(context, targetLocale, cacheBaseKey, format, warnHtmlMessage, onError));
	msg.locale = targetLocale;
	msg.key = key;
	msg.source = format;
	return msg;
}
function evaluateMessage(context, msg, msgCtx) {
	return msg(msgCtx);
}
/** @internal */
function parseTranslateArgs(...args) {
	const [arg1, arg2, arg3] = args;
	const options = create();
	if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1) && !isMessageAST(arg1)) throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
	const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
	if (isNumber(arg2)) options.plural = arg2;
	else if (isString(arg2)) options.default = arg2;
	else if (isPlainObject(arg2) && !isEmptyObject(arg2)) options.named = arg2;
	else if (isArray(arg2)) options.list = arg2;
	if (isNumber(arg3)) options.plural = arg3;
	else if (isString(arg3)) options.default = arg3;
	else if (isPlainObject(arg3)) assign(options, arg3);
	return [key, options];
}
function getCompileContext(context, locale, key, source, warnHtmlMessage, onError) {
	return {
		locale,
		key,
		warnHtmlMessage,
		onError: (err) => {
			onError && onError(err);
			throw err;
		},
		onCacheKey: (source) => generateFormatCacheKey(locale, key, source)
	};
}
function getMessageContextOptions(context, locale, message, options) {
	const { modifiers, pluralRules, messageResolver: resolveValue, fallbackLocale, fallbackWarn, missingWarn, fallbackContext } = context;
	const resolveMessage = (key, useLinked) => {
		let val = resolveValue(message, key);
		if (val == null && (fallbackContext || useLinked)) {
			const [, , message] = resolveMessageFormat(fallbackContext || context, key, locale, fallbackLocale, fallbackWarn, missingWarn);
			val = resolveValue(message, key);
		}
		if (isString(val) || isMessageAST(val)) {
			let occurred = false;
			const onError = () => {
				occurred = true;
			};
			const msg = compileMessageFormat(context, key, locale, val, key, onError);
			return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
		} else if (isMessageFunction(val)) return val;
		else return NOOP_MESSAGE_FUNCTION;
	};
	const ctxOptions = {
		locale,
		modifiers,
		pluralRules,
		messages: resolveMessage
	};
	if (context.processor) ctxOptions.processor = context.processor;
	if (options.list) ctxOptions.list = options.list;
	if (options.named) ctxOptions.named = options.named;
	if (isNumber(options.plural)) ctxOptions.pluralIndex = options.plural;
	return ctxOptions;
}
initFeatureFlags$1();
//#endregion
//#region node_modules/vue-i18n/dist/vue-i18n.mjs
/*!
* vue-i18n v11.3.0
* (c) 2026 kazuya kawaguchi
* Released under the MIT License.
*/
/**
* Vue I18n Version
*
* @remarks
* Semver format. Same format as the package.json `version` field.
*
* @VueI18nGeneral
*/
var VERSION = "11.3.0";
/**
* This is only called in esm-bundler builds.
* istanbul-ignore-next
*/
function initFeatureFlags() {
	if (typeof __VUE_I18N_FULL_INSTALL__ !== "boolean") getGlobalThis().__VUE_I18N_FULL_INSTALL__ = true;
	if (typeof __VUE_I18N_LEGACY_API__ !== "boolean") getGlobalThis().__VUE_I18N_LEGACY_API__ = true;
	if (typeof __INTLIFY_DROP_MESSAGE_COMPILER__ !== "boolean") getGlobalThis().__INTLIFY_DROP_MESSAGE_COMPILER__ = false;
	if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
}
var I18nErrorCodes = {
	UNEXPECTED_RETURN_TYPE: 24,
	INVALID_ARGUMENT: 25,
	MUST_BE_CALL_SETUP_TOP: 26,
	NOT_INSTALLED: 27,
	REQUIRED_VALUE: 28,
	INVALID_VALUE: 29,
	CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
	NOT_INSTALLED_WITH_PROVIDE: 31,
	UNEXPECTED_ERROR: 32,
	NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
	NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
};
function createI18nError(code, ...args) {
	return createCompileError(code, null, void 0);
}
I18nErrorCodes.UNEXPECTED_RETURN_TYPE, I18nErrorCodes.INVALID_ARGUMENT, I18nErrorCodes.MUST_BE_CALL_SETUP_TOP, I18nErrorCodes.NOT_INSTALLED, I18nErrorCodes.UNEXPECTED_ERROR, I18nErrorCodes.REQUIRED_VALUE, I18nErrorCodes.INVALID_VALUE, I18nErrorCodes.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN, I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE, I18nErrorCodes.NOT_COMPATIBLE_LEGACY_VUE_I18N, I18nErrorCodes.NOT_AVAILABLE_COMPOSITION_IN_LEGACY;
var TranslateVNodeSymbol = /* @__PURE__ */ makeSymbol("__translateVNode");
var DatetimePartsSymbol = /* @__PURE__ */ makeSymbol("__datetimeParts");
var NumberPartsSymbol = /* @__PURE__ */ makeSymbol("__numberParts");
var SetPluralRulesSymbol = makeSymbol("__setPluralRules");
makeSymbol("__intlifyMeta");
var InejctWithOptionSymbol = /* @__PURE__ */ makeSymbol("__injectWithOption");
var DisposeSymbol = /* @__PURE__ */ makeSymbol("__dispose");
var I18nWarnCodes = {
	FALLBACK_TO_ROOT: 10,
	NOT_FOUND_PARENT_SCOPE: 11,
	IGNORE_OBJ_FLATTEN: 12,
	DEPRECATE_LEGACY_MODE: 13,
	DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 14,
	DUPLICATE_USE_I18N_CALLING: 15
};
I18nWarnCodes.FALLBACK_TO_ROOT, I18nWarnCodes.NOT_FOUND_PARENT_SCOPE, I18nWarnCodes.IGNORE_OBJ_FLATTEN, I18nWarnCodes.DEPRECATE_LEGACY_MODE, I18nWarnCodes.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE, I18nWarnCodes.DUPLICATE_USE_I18N_CALLING;
/**
* Transform flat json in obj to normal json in obj
*/
function handleFlatJson(obj) {
	if (!isObject(obj)) return obj;
	if (isMessageAST(obj)) return obj;
	for (const key in obj) {
		if (!hasOwn(obj, key)) continue;
		if (!key.includes(".")) {
			if (isObject(obj[key])) handleFlatJson(obj[key]);
		} else {
			const subKeys = key.split(".");
			const lastIndex = subKeys.length - 1;
			let currentObj = obj;
			let hasStringValue = false;
			for (let i = 0; i < lastIndex; i++) {
				if (subKeys[i] === "__proto__") throw new Error(`unsafe key: ${subKeys[i]}`);
				if (!(subKeys[i] in currentObj)) currentObj[subKeys[i]] = create();
				if (!isObject(currentObj[subKeys[i]])) {
					hasStringValue = true;
					break;
				}
				currentObj = currentObj[subKeys[i]];
			}
			if (!hasStringValue) {
				if (!isMessageAST(currentObj)) {
					currentObj[subKeys[lastIndex]] = obj[key];
					delete obj[key];
				} else if (!AST_NODE_PROPS_KEYS.includes(subKeys[lastIndex])) delete obj[key];
			}
			if (!isMessageAST(currentObj)) {
				const target = currentObj[subKeys[lastIndex]];
				if (isObject(target)) handleFlatJson(target);
			}
		}
	}
	return obj;
}
function getLocaleMessages(locale, options) {
	const { messages, __i18n, messageResolver, flatJson } = options;
	const ret = isPlainObject(messages) ? messages : isArray(__i18n) ? create() : { [locale]: create() };
	if (isArray(__i18n)) __i18n.forEach((custom) => {
		if ("locale" in custom && "resource" in custom) {
			const { locale, resource } = custom;
			if (locale) {
				ret[locale] = ret[locale] || create();
				deepCopy(resource, ret[locale]);
			} else deepCopy(resource, ret);
		} else isString(custom) && deepCopy(JSON.parse(custom), ret);
	});
	if (messageResolver == null && flatJson) {
		for (const key in ret) if (hasOwn(ret, key)) handleFlatJson(ret[key]);
	}
	return ret;
}
function getComponentOptions(instance) {
	return instance.type;
}
function adjustI18nResources(gl, options, componentOptions) {
	let messages = isObject(options.messages) ? options.messages : create();
	if ("__i18nGlobal" in componentOptions) messages = getLocaleMessages(gl.locale.value, {
		messages,
		__i18n: componentOptions.__i18nGlobal
	});
	const locales = Object.keys(messages);
	if (locales.length) locales.forEach((locale) => {
		gl.mergeLocaleMessage(locale, messages[locale]);
	});
	if (isObject(options.datetimeFormats)) {
		const locales = Object.keys(options.datetimeFormats);
		if (locales.length) locales.forEach((locale) => {
			gl.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
		});
	}
	if (isObject(options.numberFormats)) {
		const locales = Object.keys(options.numberFormats);
		if (locales.length) locales.forEach((locale) => {
			gl.mergeNumberFormat(locale, options.numberFormats[locale]);
		});
	}
}
function createTextNode(key) {
	return createVNode(Text, null, key, 0);
}
function getCurrentInstance() {
	const key = "currentInstance";
	if (key in vue_runtime_esm_bundler_exports) return vue_runtime_esm_bundler_exports[key];
	else return getCurrentInstance$1();
}
var NOOP_RETURN_ARRAY = () => [];
var NOOP_RETURN_FALSE = () => false;
var composerID = 0;
function defineCoreMissingHandler(missing) {
	return ((ctx, locale, key, type) => {
		return missing(locale, key, getCurrentInstance() || void 0, type);
	});
}
/**
* Create composer interface factory
*
* @internal
*/
function createComposer(options = {}) {
	const { __root, __injectWithOption } = options;
	const _isGlobal = __root === void 0;
	const flatJson = options.flatJson;
	const _ref = inBrowser ? ref : shallowRef;
	let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
	const _locale = _ref(__root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : DEFAULT_LOCALE);
	const _fallbackLocale = _ref(__root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value);
	const _messages = _ref(getLocaleMessages(_locale.value, options));
	const _datetimeFormats = _ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
	const _numberFormats = _ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
	let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
	let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
	let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
	let _fallbackFormat = !!options.fallbackFormat;
	let _missing = isFunction(options.missing) ? options.missing : null;
	let _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
	let _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
	let _warnHtmlMessage = __root ? __root.warnHtmlMessage : isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
	let _escapeParameter = !!options.escapeParameter;
	const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
	let _pluralRules = options.pluralRules || __root && __root.pluralRules;
	let _context;
	const getCoreContext = () => {
		_isGlobal && setFallbackContext(null);
		const ctxOptions = {
			version: VERSION,
			locale: _locale.value,
			fallbackLocale: _fallbackLocale.value,
			messages: _messages.value,
			modifiers: _modifiers,
			pluralRules: _pluralRules,
			missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
			missingWarn: _missingWarn,
			fallbackWarn: _fallbackWarn,
			fallbackFormat: _fallbackFormat,
			unresolving: true,
			postTranslation: _postTranslation === null ? void 0 : _postTranslation,
			warnHtmlMessage: _warnHtmlMessage,
			escapeParameter: _escapeParameter,
			messageResolver: options.messageResolver,
			messageCompiler: options.messageCompiler,
			__meta: { framework: "vue" }
		};
		ctxOptions.datetimeFormats = _datetimeFormats.value;
		ctxOptions.numberFormats = _numberFormats.value;
		ctxOptions.__datetimeFormatters = isPlainObject(_context) ? _context.__datetimeFormatters : void 0;
		ctxOptions.__numberFormatters = isPlainObject(_context) ? _context.__numberFormatters : void 0;
		const ctx = createCoreContext(ctxOptions);
		_isGlobal && setFallbackContext(ctx);
		return ctx;
	};
	_context = getCoreContext();
	updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
	function trackReactivityValues() {
		return [
			_locale.value,
			_fallbackLocale.value,
			_messages.value,
			_datetimeFormats.value,
			_numberFormats.value
		];
	}
	const locale = computed({
		get: () => _locale.value,
		set: (val) => {
			_context.locale = val;
			_locale.value = val;
		}
	});
	const fallbackLocale = computed({
		get: () => _fallbackLocale.value,
		set: (val) => {
			_context.fallbackLocale = val;
			_fallbackLocale.value = val;
			updateFallbackLocale(_context, _locale.value, val);
		}
	});
	const messages = computed(() => _messages.value);
	const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
	const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
	function getPostTranslationHandler() {
		return isFunction(_postTranslation) ? _postTranslation : null;
	}
	function setPostTranslationHandler(handler) {
		_postTranslation = handler;
		_context.postTranslation = handler;
	}
	function getMissingHandler() {
		return _missing;
	}
	function setMissingHandler(handler) {
		if (handler !== null) _runtimeMissing = defineCoreMissingHandler(handler);
		_missing = handler;
		_context.missing = _runtimeMissing;
	}
	const wrapWithDeps = (fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) => {
		trackReactivityValues();
		let ret;
		try {
			if (__INTLIFY_PROD_DEVTOOLS__);
			if (!_isGlobal) _context.fallbackContext = __root ? getFallbackContext() : void 0;
			ret = fn(_context);
		} finally {
			if (__INTLIFY_PROD_DEVTOOLS__);
			if (!_isGlobal) _context.fallbackContext = void 0;
		}
		if (warnType !== "translate exists" && isNumber(ret) && ret === -1 || warnType === "translate exists" && !ret) {
			const [key, arg2] = argumentParser();
			return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
		} else if (successCondition(ret)) return ret;
		else
 /* istanbul ignore next */
		throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
	};
	function t(...args) {
		return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root) => Reflect.apply(root.t, root, [...args]), (key) => key, (val) => isString(val));
	}
	function rt(...args) {
		const [arg1, arg2, arg3] = args;
		if (arg3 && !isObject(arg3)) throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
		return t(...[
			arg1,
			arg2,
			assign({ resolvedMessage: true }, arg3 || {})
		]);
	}
	function d(...args) {
		return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => Reflect.apply(root.d, root, [...args]), () => "", (val) => isString(val) || isArray(val));
	}
	function n(...args) {
		return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => Reflect.apply(root.n, root, [...args]), () => "", (val) => isString(val) || isArray(val));
	}
	function normalize(values) {
		return values.map((val) => isString(val) || isNumber(val) || isBoolean(val) ? createTextNode(String(val)) : val);
	}
	const interpolate = (val) => val;
	const processor = {
		normalize,
		interpolate,
		type: "vnode"
	};
	function translateVNode(...args) {
		return wrapWithDeps((context) => {
			let ret;
			const _context = context;
			try {
				_context.processor = processor;
				ret = Reflect.apply(translate, null, [_context, ...args]);
			} finally {
				_context.processor = null;
			}
			return ret;
		}, () => parseTranslateArgs(...args), "translate", (root) => root[TranslateVNodeSymbol](...args), (key) => [createTextNode(key)], (val) => isArray(val));
	}
	function numberParts(...args) {
		return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root) => root[NumberPartsSymbol](...args), NOOP_RETURN_ARRAY, (val) => isString(val) || isArray(val));
	}
	function datetimeParts(...args) {
		return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root) => root[DatetimePartsSymbol](...args), NOOP_RETURN_ARRAY, (val) => isString(val) || isArray(val));
	}
	function setPluralRules(rules) {
		_pluralRules = rules;
		_context.pluralRules = _pluralRules;
	}
	function te(key, locale) {
		return wrapWithDeps(() => {
			if (!key) return false;
			const targetLocale = isString(locale) ? locale : _locale.value;
			const locales = isString(locale) ? [targetLocale] : fallbackWithLocaleChain(_context, _fallbackLocale.value, targetLocale);
			for (let i = 0; i < locales.length; i++) {
				const message = getLocaleMessage(locales[i]);
				let resolved = _context.messageResolver(message, key);
				if (resolved === null) resolved = message[key];
				if (isMessageAST(resolved) || isMessageFunction(resolved) || isString(resolved)) return true;
			}
			return false;
		}, () => [key], "translate exists", (root) => {
			return Reflect.apply(root.te, root, [key, locale]);
		}, NOOP_RETURN_FALSE, (val) => isBoolean(val));
	}
	function resolveMessages(key) {
		let messages = null;
		const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
		for (let i = 0; i < locales.length; i++) {
			const targetLocaleMessages = _messages.value[locales[i]] || {};
			const messageValue = _context.messageResolver(targetLocaleMessages, key);
			if (messageValue != null) {
				messages = messageValue;
				break;
			}
		}
		return messages;
	}
	function tm(key) {
		const messages = resolveMessages(key);
		return messages != null ? messages : __root ? __root.tm(key) || {} : {};
	}
	function getLocaleMessage(locale) {
		return _messages.value[locale] || {};
	}
	function setLocaleMessage(locale, message) {
		if (flatJson) {
			const _message = { [locale]: message };
			for (const key in _message) if (hasOwn(_message, key)) handleFlatJson(_message[key]);
			message = _message[locale];
		}
		_messages.value[locale] = message;
		_context.messages = _messages.value;
	}
	function mergeLocaleMessage(locale, message) {
		_messages.value[locale] = _messages.value[locale] || {};
		const _message = { [locale]: message };
		if (flatJson) {
			for (const key in _message) if (hasOwn(_message, key)) handleFlatJson(_message[key]);
		}
		message = _message[locale];
		deepCopy(message, _messages.value[locale]);
		_context.messages = _messages.value;
	}
	function getDateTimeFormat(locale) {
		return _datetimeFormats.value[locale] || {};
	}
	function setDateTimeFormat(locale, format) {
		_datetimeFormats.value[locale] = format;
		_context.datetimeFormats = _datetimeFormats.value;
		clearDateTimeFormat(_context, locale, format);
	}
	function mergeDateTimeFormat(locale, format) {
		_datetimeFormats.value[locale] = assign(_datetimeFormats.value[locale] || {}, format);
		_context.datetimeFormats = _datetimeFormats.value;
		clearDateTimeFormat(_context, locale, format);
	}
	function getNumberFormat(locale) {
		return _numberFormats.value[locale] || {};
	}
	function setNumberFormat(locale, format) {
		_numberFormats.value[locale] = format;
		_context.numberFormats = _numberFormats.value;
		clearNumberFormat(_context, locale, format);
	}
	function mergeNumberFormat(locale, format) {
		_numberFormats.value[locale] = assign(_numberFormats.value[locale] || {}, format);
		_context.numberFormats = _numberFormats.value;
		clearNumberFormat(_context, locale, format);
	}
	composerID++;
	if (__root && inBrowser) {
		watch(__root.locale, (val) => {
			if (_inheritLocale) {
				_locale.value = val;
				_context.locale = val;
				updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
			}
		});
		watch(__root.fallbackLocale, (val) => {
			if (_inheritLocale) {
				_fallbackLocale.value = val;
				_context.fallbackLocale = val;
				updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
			}
		});
	}
	const composer = {
		id: composerID,
		locale,
		fallbackLocale,
		get inheritLocale() {
			return _inheritLocale;
		},
		set inheritLocale(val) {
			_inheritLocale = val;
			if (val && __root) {
				_locale.value = __root.locale.value;
				_fallbackLocale.value = __root.fallbackLocale.value;
				updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
			}
		},
		get availableLocales() {
			return Object.keys(_messages.value).sort();
		},
		messages,
		get modifiers() {
			return _modifiers;
		},
		get pluralRules() {
			return _pluralRules || {};
		},
		get isGlobal() {
			return _isGlobal;
		},
		get missingWarn() {
			return _missingWarn;
		},
		set missingWarn(val) {
			_missingWarn = val;
			_context.missingWarn = _missingWarn;
		},
		get fallbackWarn() {
			return _fallbackWarn;
		},
		set fallbackWarn(val) {
			_fallbackWarn = val;
			_context.fallbackWarn = _fallbackWarn;
		},
		get fallbackRoot() {
			return _fallbackRoot;
		},
		set fallbackRoot(val) {
			_fallbackRoot = val;
		},
		get fallbackFormat() {
			return _fallbackFormat;
		},
		set fallbackFormat(val) {
			_fallbackFormat = val;
			_context.fallbackFormat = _fallbackFormat;
		},
		get warnHtmlMessage() {
			return _warnHtmlMessage;
		},
		set warnHtmlMessage(val) {
			_warnHtmlMessage = val;
			_context.warnHtmlMessage = val;
		},
		get escapeParameter() {
			return _escapeParameter;
		},
		set escapeParameter(val) {
			_escapeParameter = val;
			_context.escapeParameter = val;
		},
		t,
		getLocaleMessage,
		setLocaleMessage,
		mergeLocaleMessage,
		getPostTranslationHandler,
		setPostTranslationHandler,
		getMissingHandler,
		setMissingHandler,
		[SetPluralRulesSymbol]: setPluralRules
	};
	composer.datetimeFormats = datetimeFormats;
	composer.numberFormats = numberFormats;
	composer.rt = rt;
	composer.te = te;
	composer.tm = tm;
	composer.d = d;
	composer.n = n;
	composer.getDateTimeFormat = getDateTimeFormat;
	composer.setDateTimeFormat = setDateTimeFormat;
	composer.mergeDateTimeFormat = mergeDateTimeFormat;
	composer.getNumberFormat = getNumberFormat;
	composer.setNumberFormat = setNumberFormat;
	composer.mergeNumberFormat = mergeNumberFormat;
	composer[InejctWithOptionSymbol] = __injectWithOption;
	composer[TranslateVNodeSymbol] = translateVNode;
	composer[DatetimePartsSymbol] = datetimeParts;
	composer[NumberPartsSymbol] = numberParts;
	return composer;
}
/**
* Convert to I18n Composer Options from VueI18n Options
*
* @internal
*/
function convertComposerOptions(options) {
	const locale = isString(options.locale) ? options.locale : DEFAULT_LOCALE;
	const fallbackLocale = isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
	const missing = isFunction(options.missing) ? options.missing : void 0;
	const missingWarn = isBoolean(options.silentTranslationWarn) || isRegExp(options.silentTranslationWarn) ? !options.silentTranslationWarn : true;
	const fallbackWarn = isBoolean(options.silentFallbackWarn) || isRegExp(options.silentFallbackWarn) ? !options.silentFallbackWarn : true;
	const fallbackRoot = isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
	const fallbackFormat = !!options.formatFallbackMessages;
	const modifiers = isPlainObject(options.modifiers) ? options.modifiers : {};
	const pluralizationRules = options.pluralizationRules;
	const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : void 0;
	const warnHtmlMessage = isString(options.warnHtmlInMessage) ? options.warnHtmlInMessage !== "off" : true;
	const escapeParameter = !!options.escapeParameterHtml;
	const inheritLocale = isBoolean(options.sync) ? options.sync : true;
	let messages = options.messages;
	if (isPlainObject(options.sharedMessages)) {
		const sharedMessages = options.sharedMessages;
		messages = Object.keys(sharedMessages).reduce((messages, locale) => {
			assign(messages[locale] || (messages[locale] = {}), sharedMessages[locale]);
			return messages;
		}, messages || {});
	}
	const { __i18n, __root, __injectWithOption } = options;
	const datetimeFormats = options.datetimeFormats;
	const numberFormats = options.numberFormats;
	const flatJson = options.flatJson;
	return {
		locale,
		fallbackLocale,
		messages,
		flatJson,
		datetimeFormats,
		numberFormats,
		missing,
		missingWarn,
		fallbackWarn,
		fallbackRoot,
		fallbackFormat,
		modifiers,
		pluralRules: pluralizationRules,
		postTranslation,
		warnHtmlMessage,
		escapeParameter,
		messageResolver: options.messageResolver,
		inheritLocale,
		__i18n,
		__root,
		__injectWithOption
	};
}
/**
* create VueI18n interface factory
*
* @internal
*
* @deprecated will be removed at vue-i18n v12
*/
function createVueI18n(options = {}) {
	const composer = createComposer(convertComposerOptions(options));
	const { __extender } = options;
	const vueI18n = {
		id: composer.id,
		get locale() {
			return composer.locale.value;
		},
		set locale(val) {
			composer.locale.value = val;
		},
		get fallbackLocale() {
			return composer.fallbackLocale.value;
		},
		set fallbackLocale(val) {
			composer.fallbackLocale.value = val;
		},
		get messages() {
			return composer.messages.value;
		},
		get datetimeFormats() {
			return composer.datetimeFormats.value;
		},
		get numberFormats() {
			return composer.numberFormats.value;
		},
		get availableLocales() {
			return composer.availableLocales;
		},
		get missing() {
			return composer.getMissingHandler();
		},
		set missing(handler) {
			composer.setMissingHandler(handler);
		},
		get silentTranslationWarn() {
			return isBoolean(composer.missingWarn) ? !composer.missingWarn : composer.missingWarn;
		},
		set silentTranslationWarn(val) {
			composer.missingWarn = isBoolean(val) ? !val : val;
		},
		get silentFallbackWarn() {
			return isBoolean(composer.fallbackWarn) ? !composer.fallbackWarn : composer.fallbackWarn;
		},
		set silentFallbackWarn(val) {
			composer.fallbackWarn = isBoolean(val) ? !val : val;
		},
		get modifiers() {
			return composer.modifiers;
		},
		get formatFallbackMessages() {
			return composer.fallbackFormat;
		},
		set formatFallbackMessages(val) {
			composer.fallbackFormat = val;
		},
		get postTranslation() {
			return composer.getPostTranslationHandler();
		},
		set postTranslation(handler) {
			composer.setPostTranslationHandler(handler);
		},
		get sync() {
			return composer.inheritLocale;
		},
		set sync(val) {
			composer.inheritLocale = val;
		},
		get warnHtmlInMessage() {
			return composer.warnHtmlMessage ? "warn" : "off";
		},
		set warnHtmlInMessage(val) {
			composer.warnHtmlMessage = val !== "off";
		},
		get escapeParameterHtml() {
			return composer.escapeParameter;
		},
		set escapeParameterHtml(val) {
			composer.escapeParameter = val;
		},
		get pluralizationRules() {
			return composer.pluralRules || {};
		},
		__composer: composer,
		t(...args) {
			return Reflect.apply(composer.t, composer, [...args]);
		},
		rt(...args) {
			return Reflect.apply(composer.rt, composer, [...args]);
		},
		te(key, locale) {
			return composer.te(key, locale);
		},
		tm(key) {
			return composer.tm(key);
		},
		getLocaleMessage(locale) {
			return composer.getLocaleMessage(locale);
		},
		setLocaleMessage(locale, message) {
			composer.setLocaleMessage(locale, message);
		},
		mergeLocaleMessage(locale, message) {
			composer.mergeLocaleMessage(locale, message);
		},
		d(...args) {
			return Reflect.apply(composer.d, composer, [...args]);
		},
		getDateTimeFormat(locale) {
			return composer.getDateTimeFormat(locale);
		},
		setDateTimeFormat(locale, format) {
			composer.setDateTimeFormat(locale, format);
		},
		mergeDateTimeFormat(locale, format) {
			composer.mergeDateTimeFormat(locale, format);
		},
		n(...args) {
			return Reflect.apply(composer.n, composer, [...args]);
		},
		getNumberFormat(locale) {
			return composer.getNumberFormat(locale);
		},
		setNumberFormat(locale, format) {
			composer.setNumberFormat(locale, format);
		},
		mergeNumberFormat(locale, format) {
			composer.mergeNumberFormat(locale, format);
		}
	};
	vueI18n.__extender = __extender;
	return vueI18n;
}
/**
* Supports compatibility for legacy vue-i18n APIs
* This mixin is used when we use vue-i18n@v9.x or later
*/
function defineMixin(vuei18n, composer, i18n) {
	return {
		beforeCreate() {
			const instance = getCurrentInstance();
			/* istanbul ignore if */
			if (!instance) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
			const options = this.$options;
			if (options.i18n) {
				const optionsI18n = options.i18n;
				if (options.__i18n) optionsI18n.__i18n = options.__i18n;
				optionsI18n.__root = composer;
				if (this === this.$root) this.$i18n = mergeToGlobal(vuei18n, optionsI18n);
				else {
					optionsI18n.__injectWithOption = true;
					optionsI18n.__extender = i18n.__vueI18nExtend;
					this.$i18n = createVueI18n(optionsI18n);
					const _vueI18n = this.$i18n;
					if (_vueI18n.__extender) _vueI18n.__disposer = _vueI18n.__extender(this.$i18n);
				}
			} else if (options.__i18n) if (this === this.$root) this.$i18n = mergeToGlobal(vuei18n, options);
			else {
				this.$i18n = createVueI18n({
					__i18n: options.__i18n,
					__injectWithOption: true,
					__extender: i18n.__vueI18nExtend,
					__root: composer
				});
				const _vueI18n = this.$i18n;
				if (_vueI18n.__extender) _vueI18n.__disposer = _vueI18n.__extender(this.$i18n);
			}
			else this.$i18n = vuei18n;
			if (options.__i18nGlobal) adjustI18nResources(composer, options, options);
			this.$t = (...args) => this.$i18n.t(...args);
			this.$rt = (...args) => this.$i18n.rt(...args);
			this.$te = (key, locale) => this.$i18n.te(key, locale);
			this.$d = (...args) => this.$i18n.d(...args);
			this.$n = (...args) => this.$i18n.n(...args);
			this.$tm = (key) => this.$i18n.tm(key);
			i18n.__setInstance(instance, this.$i18n);
		},
		mounted() {},
		unmounted() {
			const instance = getCurrentInstance();
			/* istanbul ignore if */
			if (!instance) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
			const _vueI18n = this.$i18n;
			delete this.$t;
			delete this.$rt;
			delete this.$te;
			delete this.$d;
			delete this.$n;
			delete this.$tm;
			if (_vueI18n.__disposer) {
				_vueI18n.__disposer();
				delete _vueI18n.__disposer;
				delete _vueI18n.__extender;
			}
			i18n.__deleteInstance(instance);
			delete this.$i18n;
		}
	};
}
function mergeToGlobal(g, options) {
	g.locale = options.locale || g.locale;
	g.fallbackLocale = options.fallbackLocale || g.fallbackLocale;
	g.missing = options.missing || g.missing;
	g.silentTranslationWarn = options.silentTranslationWarn || g.silentFallbackWarn;
	g.silentFallbackWarn = options.silentFallbackWarn || g.silentFallbackWarn;
	g.formatFallbackMessages = options.formatFallbackMessages || g.formatFallbackMessages;
	g.postTranslation = options.postTranslation || g.postTranslation;
	g.warnHtmlInMessage = options.warnHtmlInMessage || g.warnHtmlInMessage;
	g.escapeParameterHtml = options.escapeParameterHtml || g.escapeParameterHtml;
	g.sync = options.sync || g.sync;
	g.__composer[SetPluralRulesSymbol](options.pluralizationRules || g.pluralizationRules);
	const messages = getLocaleMessages(g.locale, {
		messages: options.messages,
		__i18n: options.__i18n
	});
	Object.keys(messages).forEach((locale) => g.mergeLocaleMessage(locale, messages[locale]));
	if (options.datetimeFormats) Object.keys(options.datetimeFormats).forEach((locale) => g.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
	if (options.numberFormats) Object.keys(options.numberFormats).forEach((locale) => g.mergeNumberFormat(locale, options.numberFormats[locale]));
	return g;
}
var baseFormatProps = {
	tag: { type: [String, Object] },
	locale: { type: String },
	scope: {
		type: String,
		validator: (val) => val === "parent" || val === "global",
		default: "parent"
	},
	i18n: { type: Object }
};
function getInterpolateArg({ slots }, keys) {
	if (keys.length === 1 && keys[0] === "default") return (slots.default ? slots.default() : []).reduce((slot, current) => {
		return [...slot, ...current.type === Fragment ? current.children : [current]];
	}, []);
	else return keys.reduce((arg, key) => {
		const slot = slots[key];
		if (slot) arg[key] = slot();
		return arg;
	}, create());
}
function getFragmentableTag() {
	return Fragment;
}
/**
* export the public type for h/tsx inference
* also to avoid inline import() in generated d.ts files
*/
/**
* Translation Component
*
* @remarks
* See the following items for property about details
*
* @VueI18nSee [TranslationProps](component#translationprops)
* @VueI18nSee [BaseFormatProps](component#baseformatprops)
* @VueI18nSee [Component Interpolation](../guide/advanced/component)
*
* @example
* ```html
* <div id="app">
*   <!-- ... -->
*   <i18n keypath="term" tag="label" for="tos">
*     <a :href="url" target="_blank">{{ $t('tos') }}</a>
*   </i18n>
*   <!-- ... -->
* </div>
* ```
* ```js
* import { createApp } from 'vue'
* import { createI18n } from 'vue-i18n'
*
* const messages = {
*   en: {
*     tos: 'Term of Service',
*     term: 'I accept xxx {0}.'
*   },
*   ja: {
*     tos: '利用規約',
*     term: '私は xxx の{0}に同意します。'
*   }
* }
*
* const i18n = createI18n({
*   locale: 'en',
*   messages
* })
*
* const app = createApp({
*   data: {
*     url: '/term'
*   }
* }).use(i18n).mount('#app')
* ```
*
* @VueI18nComponent
*/
var Translation = /* @__PURE__ */ defineComponent({
	name: "i18n-t",
	props: assign({
		keypath: {
			type: String,
			required: true
		},
		plural: {
			type: [Number, String],
			validator: (val) => isNumber(val) || !isNaN(val)
		}
	}, baseFormatProps),
	setup(props, context) {
		const { slots, attrs } = context;
		const i18n = props.i18n || useI18n({
			useScope: props.scope,
			__useComponent: true
		});
		return () => {
			const keys = Object.keys(slots).filter((key) => key[0] !== "_");
			const options = create();
			if (props.locale) options.locale = props.locale;
			if (props.plural !== void 0) options.plural = isString(props.plural) ? +props.plural : props.plural;
			const arg = getInterpolateArg(context, keys);
			const children = i18n[TranslateVNodeSymbol](props.keypath, arg, options);
			const assignedAttrs = assign(create(), attrs);
			return h(isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag(), assignedAttrs, children);
		};
	}
});
function isVNode(target) {
	return isArray(target) && !isString(target[0]);
}
function renderFormatter(props, context, slotKeys, partFormatter) {
	const { slots, attrs } = context;
	return () => {
		const options = { part: true };
		let overrides = create();
		if (props.locale) options.locale = props.locale;
		if (isString(props.format)) options.key = props.format;
		else if (isObject(props.format)) {
			if (isString(props.format.key)) options.key = props.format.key;
			overrides = Object.keys(props.format).reduce((options, prop) => {
				return slotKeys.includes(prop) ? assign(create(), options, { [prop]: props.format[prop] }) : options;
			}, create());
		}
		const parts = partFormatter(...[
			props.value,
			options,
			overrides
		]);
		let children = [options.key];
		if (isArray(parts)) children = parts.map((part, index) => {
			const slot = slots[part.type];
			const node = slot ? slot({
				[part.type]: part.value,
				index,
				parts
			}) : [part.value];
			if (isVNode(node)) node[0].key = `${part.type}-${index}`;
			return node;
		});
		else if (isString(parts)) children = [parts];
		const assignedAttrs = assign(create(), attrs);
		return h(isString(props.tag) || isObject(props.tag) ? props.tag : getFragmentableTag(), assignedAttrs, children);
	};
}
/**
* export the public type for h/tsx inference
* also to avoid inline import() in generated d.ts files
*/
/**
* Number Format Component
*
* @remarks
* See the following items for property about details
*
* @VueI18nSee [FormattableProps](component#formattableprops)
* @VueI18nSee [BaseFormatProps](component#baseformatprops)
* @VueI18nSee [Custom Formatting](../guide/essentials/number#custom-formatting)
*
* @VueI18nDanger
* Not supported IE, due to no support `Intl.NumberFormat#formatToParts` in [IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts)
*
* If you want to use it, you need to use [polyfill](https://github.com/formatjs/formatjs/tree/main/packages/intl-numberformat)
*
* @VueI18nComponent
*/
var NumberFormat = /* @__PURE__ */ defineComponent({
	name: "i18n-n",
	props: assign({
		value: {
			type: Number,
			required: true
		},
		format: { type: [String, Object] }
	}, baseFormatProps),
	setup(props, context) {
		const i18n = props.i18n || useI18n({
			useScope: props.scope,
			__useComponent: true
		});
		return renderFormatter(props, context, NUMBER_FORMAT_OPTIONS_KEYS, (...args) => i18n[NumberPartsSymbol](...args));
	}
});
function getComposer$1(i18n, instance) {
	const i18nInternal = i18n;
	if (i18n.mode === "composition") return i18nInternal.__getInstance(instance) || i18n.global;
	else {
		const vueI18n = i18nInternal.__getInstance(instance);
		return vueI18n != null ? vueI18n.__composer : i18n.global.__composer;
	}
}
/**
* @deprecated will be removed at vue-i18n v12
*/
function vTDirective(i18n) {
	const _process = (binding) => {
		const { instance, value } = binding;
		/* istanbul ignore if */
		if (!instance || !instance.$) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
		const composer = getComposer$1(i18n, instance.$);
		const parsedValue = parseValue(value);
		return [Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]), composer];
	};
	const register = (el, binding) => {
		const [textContent, composer] = _process(binding);
		if (inBrowser) el.__i18nWatcher = watch(composer.locale, () => {
			binding.instance && binding.instance.$forceUpdate();
		});
		el.__composer = composer;
		el.textContent = textContent;
	};
	const unregister = (el) => {
		if (inBrowser && el.__i18nWatcher) {
			el.__i18nWatcher();
			el.__i18nWatcher = void 0;
			delete el.__i18nWatcher;
		}
		if (el.__composer) {
			el.__composer = void 0;
			delete el.__composer;
		}
	};
	const update = (el, { value }) => {
		if (el.__composer) {
			const composer = el.__composer;
			const parsedValue = parseValue(value);
			el.textContent = Reflect.apply(composer.t, composer, [...makeParams(parsedValue)]);
		}
	};
	const getSSRProps = (binding) => {
		const [textContent] = _process(binding);
		return { textContent };
	};
	return {
		created: register,
		unmounted: unregister,
		beforeUpdate: update,
		getSSRProps
	};
}
function parseValue(value) {
	if (isString(value)) return { path: value };
	else if (isPlainObject(value)) {
		if (!("path" in value)) throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
		return value;
	} else throw createI18nError(I18nErrorCodes.INVALID_VALUE);
}
function makeParams(value) {
	const { path, locale, args, choice, plural } = value;
	const options = {};
	const named = args || {};
	if (isString(locale)) options.locale = locale;
	if (isNumber(choice)) options.plural = choice;
	if (isNumber(plural)) options.plural = plural;
	return [
		path,
		named,
		options
	];
}
function apply(app, i18n, ...options) {
	const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
	if (isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true) {
		[Translation.name, "I18nT"].forEach((name) => app.component(name, Translation));
		[NumberFormat.name, "I18nN"].forEach((name) => app.component(name, NumberFormat));
		[DatetimeFormat.name, "I18nD"].forEach((name) => app.component(name, DatetimeFormat));
	}
	app.directive("t", vTDirective(i18n));
}
/**
* Injection key for {@link useI18n}
*
* @remarks
* The global injection key for I18n instances with `useI18n`. this injection key is used in Web Components.
* Specify the i18n instance created by {@link createI18n} together with `provide` function.
*
* @VueI18nGeneral
*/
var I18nInjectionKey = /* @__PURE__ */ makeSymbol("global-vue-i18n");
function createI18n(options = {}) {
	const __legacyMode = __VUE_I18N_LEGACY_API__ && isBoolean(options.legacy) ? options.legacy : __VUE_I18N_LEGACY_API__;
	const __globalInjection = isBoolean(options.globalInjection) ? options.globalInjection : true;
	const __instances = /* @__PURE__ */ new Map();
	const [globalScope, __global] = createGlobal(options, __legacyMode);
	const symbol = /* @__PURE__ */ makeSymbol("");
	function __getInstance(component) {
		return __instances.get(component) || null;
	}
	function __setInstance(component, instance) {
		__instances.set(component, instance);
	}
	function __deleteInstance(component) {
		__instances.delete(component);
	}
	const i18n = {
		get mode() {
			return __VUE_I18N_LEGACY_API__ && __legacyMode ? "legacy" : "composition";
		},
		async install(app, ...options) {
			app.__VUE_I18N_SYMBOL__ = symbol;
			app.provide(app.__VUE_I18N_SYMBOL__, i18n);
			if (isPlainObject(options[0])) {
				const opts = options[0];
				i18n.__composerExtend = opts.__composerExtend;
				i18n.__vueI18nExtend = opts.__vueI18nExtend;
			}
			let globalReleaseHandler = null;
			if (!__legacyMode && __globalInjection) globalReleaseHandler = injectGlobalFields(app, i18n.global);
			if (__VUE_I18N_FULL_INSTALL__) apply(app, i18n, ...options);
			if (__VUE_I18N_LEGACY_API__ && __legacyMode) app.mixin(defineMixin(__global, __global.__composer, i18n));
			const unmountApp = app.unmount;
			app.unmount = () => {
				globalReleaseHandler && globalReleaseHandler();
				i18n.dispose();
				unmountApp();
			};
		},
		get global() {
			return __global;
		},
		dispose() {
			globalScope.stop();
		},
		__instances,
		__getInstance,
		__setInstance,
		__deleteInstance
	};
	return i18n;
}
function useI18n(options = {}) {
	const instance = getCurrentInstance();
	if (instance == null) throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
	if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) throw createI18nError(I18nErrorCodes.NOT_INSTALLED);
	const i18n = getI18nInstance(instance);
	const gl = getGlobalComposer(i18n);
	const componentOptions = getComponentOptions(instance);
	const scope = getScope(options, componentOptions);
	if (scope === "global") {
		adjustI18nResources(gl, options, componentOptions);
		return gl;
	}
	if (scope === "parent") {
		let composer = getComposer(i18n, instance, options.__useComponent);
		if (composer == null) composer = gl;
		return composer;
	}
	const i18nInternal = i18n;
	let composer = i18nInternal.__getInstance(instance);
	if (composer == null) {
		const composerOptions = assign({}, options);
		if ("__i18n" in componentOptions) composerOptions.__i18n = componentOptions.__i18n;
		if (gl) composerOptions.__root = gl;
		composer = createComposer(composerOptions);
		if (i18nInternal.__composerExtend) composer[DisposeSymbol] = i18nInternal.__composerExtend(composer);
		setupLifeCycle(i18nInternal, instance, composer);
		i18nInternal.__setInstance(instance, composer);
	}
	return composer;
}
function createGlobal(options, legacyMode) {
	const scope = effectScope();
	const obj = __VUE_I18N_LEGACY_API__ && legacyMode ? scope.run(() => createVueI18n(options)) : scope.run(() => createComposer(options));
	if (obj == null) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
	return [scope, obj];
}
function getI18nInstance(instance) {
	const i18n = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
	/* istanbul ignore if */
	if (!i18n) throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSTALLED_WITH_PROVIDE);
	return i18n;
}
function getScope(options, componentOptions) {
	return isEmptyObject(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n) {
	return i18n.mode === "composition" ? i18n.global : i18n.global.__composer;
}
function getComposer(i18n, target, useComponent = false) {
	let composer = null;
	const root = target.root;
	let current = getParentComponentInstance(target, useComponent);
	while (current != null) {
		const i18nInternal = i18n;
		if (i18n.mode === "composition") composer = i18nInternal.__getInstance(current);
		else if (__VUE_I18N_LEGACY_API__) {
			const vueI18n = i18nInternal.__getInstance(current);
			if (vueI18n != null) {
				composer = vueI18n.__composer;
				if (useComponent && composer && !composer[InejctWithOptionSymbol]) composer = null;
			}
		}
		if (composer != null) break;
		if (root === current) break;
		current = current.parent;
	}
	return composer;
}
function getParentComponentInstance(target, useComponent = false) {
	if (target == null) return null;
	return !useComponent ? target.parent : target.vnode.ctx || target.parent;
}
function setupLifeCycle(i18n, target, composer) {
	onMounted(() => {}, target);
	onUnmounted(() => {
		const _composer = composer;
		i18n.__deleteInstance(target);
		const dispose = _composer[DisposeSymbol];
		if (dispose) {
			dispose();
			delete _composer[DisposeSymbol];
		}
	}, target);
}
var globalExportProps = [
	"locale",
	"fallbackLocale",
	"availableLocales"
];
var globalExportMethods = [
	"t",
	"rt",
	"d",
	"n",
	"tm",
	"te"
];
function injectGlobalFields(app, composer) {
	const i18n = Object.create(null);
	globalExportProps.forEach((prop) => {
		const desc = Object.getOwnPropertyDescriptor(composer, prop);
		if (!desc) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
		const wrap = /* @__PURE__ */ isRef(desc.value) ? {
			get() {
				return desc.value.value;
			},
			set(val) {
				desc.value.value = val;
			}
		} : { get() {
			return desc.get && desc.get();
		} };
		Object.defineProperty(i18n, prop, wrap);
	});
	app.config.globalProperties.$i18n = i18n;
	globalExportMethods.forEach((method) => {
		const desc = Object.getOwnPropertyDescriptor(composer, method);
		if (!desc || !desc.value) throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
		Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
	});
	const dispose = () => {
		delete app.config.globalProperties.$i18n;
		globalExportMethods.forEach((method) => {
			delete app.config.globalProperties[`$${method}`];
		});
	};
	return dispose;
}
/**
* Datetime Format Component
*
* @remarks
* See the following items for property about details
*
* @VueI18nSee [FormattableProps](component#formattableprops)
* @VueI18nSee [BaseFormatProps](component#baseformatprops)
* @VueI18nSee [Custom Formatting](../guide/essentials/datetime#custom-formatting)
*
* @VueI18nDanger
* Not supported IE, due to no support `Intl.DateTimeFormat#formatToParts` in [IE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts)
*
* If you want to use it, you need to use [polyfill](https://github.com/formatjs/formatjs/tree/main/packages/intl-datetimeformat)
*
* @VueI18nComponent
*/
var DatetimeFormat = /* @__PURE__ */ defineComponent({
	name: "i18n-d",
	props: assign({
		value: {
			type: [Number, Date],
			required: true
		},
		format: { type: [String, Object] }
	}, baseFormatProps),
	setup(props, context) {
		const i18n = props.i18n || useI18n({
			useScope: props.scope,
			__useComponent: true
		});
		return renderFormatter(props, context, DATETIME_FORMAT_OPTIONS_KEYS, (...args) => i18n[DatetimePartsSymbol](...args));
	}
});
initFeatureFlags();
registerMessageCompiler(compile);
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
if (__INTLIFY_PROD_DEVTOOLS__) {
	const target = getGlobalThis();
	target.__INTLIFY__ = true;
	setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
var fr_default = {
	app: {
		"title": "DSPDemo",
		"language": "Langue"
	},
	menu: {
		"file": "Fichier",
		"modules": "Modules",
		"help": "Aide",
		"about": "À propos",
		"quit": "Quitter"
	},
	controls: {
		"audioControls": "Contrôles Audio",
		"enable": "Activer",
		"disable": "Désactiver",
		"record": "Enregistrer",
		"stopRecord": "Arrêter",
		"audioOutput": "Sortie Audio",
		"volume": "Volume (dB)"
	},
	visualization: {
		"spectrogram": "Spectrogramme",
		"oscilloscope": "Oscilloscope",
		"freqLog": "Freq Log",
		"magLog": "Mag Log",
		"windowSize": "Taille de la fenêtre (ms)",
		"amplitude": "Amplitude",
		"autoNormalize": "Auto-normaliser",
		"forceSync": "Sync"
	},
	categories: {
		"sources": "00 - Sources",
		"sampling": "01 - Échantillonnage",
		"filtering": "02 - Filtrage",
		"delay": "03 - Délai",
		"spatialization": "04 - Spatialisation",
		"dynamics": "05 - Dynamique",
		"spectral": "06 - Domaine Spectral",
		"granulation": "07 - Granulation",
		"synthesis": "08 - Synthèse",
		"modulation": "09 - Modulation",
		"distortion": "10 - Distorsion"
	}
};
var en_default = {
	app: {
		"title": "DSPDemo",
		"language": "Language"
	},
	menu: {
		"file": "File",
		"modules": "Modules",
		"help": "Help",
		"about": "About",
		"quit": "Quit"
	},
	controls: {
		"audioControls": "Audio Controls",
		"enable": "Enable",
		"disable": "Disable",
		"record": "Record",
		"stopRecord": "Stop",
		"audioOutput": "Audio Output",
		"volume": "Volume (dB)"
	},
	visualization: {
		"spectrogram": "Spectrogram",
		"oscilloscope": "Oscilloscope",
		"freqLog": "Freq Log",
		"magLog": "Mag Log",
		"windowSize": "Window size (ms)",
		"amplitude": "Amplitude",
		"autoNormalize": "Auto-normalize",
		"forceSync": "Sync"
	},
	categories: {
		"sources": "00 - Sources",
		"sampling": "01 - Sampling",
		"filtering": "02 - Filtering",
		"delay": "03 - Delay",
		"spatialization": "04 - Spatialization",
		"dynamics": "05 - Dynamics",
		"spectral": "06 - Spectral Domain",
		"granulation": "07 - Granulation",
		"synthesis": "08 - Synthesis",
		"modulation": "09 - Modulation",
		"distortion": "10 - Distortion"
	}
};
//#endregion
//#region src/utils/settings.js
var STORAGE_KEY = "dspdemo-settings";
var DEFAULTS = {
	locale: "fr",
	volumeDb: -6,
	spectrum: null,
	scope: null
};
function loadSettings() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (raw) return {
			...DEFAULTS,
			...JSON.parse(raw)
		};
	} catch (e) {}
	return { ...DEFAULTS };
}
function saveSetting(key, value) {
	const settings = loadSettings();
	settings[key] = value;
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
	} catch (e) {}
}
//#endregion
//#region src/i18n/index.js
var i18n = createI18n({
	legacy: true,
	locale: loadSettings().locale,
	fallbackLocale: "en",
	messages: {
		fr: fr_default,
		en: en_default
	}
});
//#endregion
//#region src/stores/moduleRegistry.js
var MODULE_CATEGORIES = [
	{
		id: "sources",
		modules: ["mod-00-sources"]
	},
	{
		id: "sampling",
		modules: ["mod-01-resampling", "mod-01-quantize"]
	},
	{
		id: "filtering",
		modules: ["mod-02-filters"]
	},
	{
		id: "delay",
		modules: [
			"mod-03-fixed-delay",
			"mod-03-variable-delay",
			"mod-03-phasing",
			"mod-03-transpose",
			"mod-03-reverb"
		]
	},
	{
		id: "spatialization",
		modules: ["mod-04-panning", "mod-04-binaural"]
	},
	{
		id: "dynamics",
		modules: [
			"mod-05-peak-rms",
			"mod-05-env-follower",
			"mod-05-gate",
			"mod-05-compressor",
			"mod-05-mb-compressor"
		]
	},
	{
		id: "spectral",
		modules: [
			"mod-06-vocoder",
			"mod-06-spectral-filter",
			"mod-06-cross-synth",
			"mod-06-spectral-playback",
			"mod-06-spectral-delay"
		]
	},
	{
		id: "granulation",
		modules: ["mod-07-granular-playback", "mod-07-granular-reorg"]
	},
	{
		id: "synthesis",
		modules: [
			"mod-08-additive-fixed",
			"mod-08-additive-var",
			"mod-08-pwm",
			"mod-08-osc-sync"
		]
	},
	{
		id: "modulation",
		modules: [
			"mod-09-amp-mod",
			"mod-09-freq-mod",
			"mod-09-auto-mod"
		]
	},
	{
		id: "distortion",
		modules: ["mod-10-chebyshev", "mod-10-distortion"]
	}
];
var MODULE_DEFINITIONS = {
	"mod-00-sources": {
		id: "mod-00-sources",
		name: {
			fr: "00-Sources",
			en: "00-Sources"
		},
		category: "sources",
		component: "Mod00Sources"
	},
	"mod-02-filters": {
		id: "mod-02-filters",
		name: {
			fr: "02-Filtrage - Comparaison des filtres",
			en: "02-Filtering - Filter Comparison"
		},
		category: "filtering",
		component: "Mod02Filters"
	},
	"mod-03-fixed-delay": {
		id: "mod-03-fixed-delay",
		name: {
			fr: "03-Délai - Délais fixes",
			en: "03-Delay - Fixed Delays"
		},
		category: "delay",
		component: "Mod03FixedDelay"
	},
	"mod-03-variable-delay": {
		id: "mod-03-variable-delay",
		name: {
			fr: "03-Délai - Délais variables",
			en: "03-Delay - Variable Delays"
		},
		category: "delay",
		component: "Mod03VariableDelay"
	},
	"mod-03-phasing": {
		id: "mod-03-phasing",
		name: {
			fr: "03-Délai - Phasing",
			en: "03-Delay - Phasing"
		},
		category: "delay",
		component: "Mod03Phasing"
	},
	"mod-04-panning": {
		id: "mod-04-panning",
		name: {
			fr: "04-Spatialisation - Panoramisation",
			en: "04-Spatialization - Panning"
		},
		category: "spatialization",
		component: "Mod04Panning"
	},
	"mod-05-peak-rms": {
		id: "mod-05-peak-rms",
		name: {
			fr: "05-Dynamique - Valeur crête vs RMS",
			en: "05-Dynamics - Peak vs RMS"
		},
		category: "dynamics",
		component: "Mod05PeakRMS"
	},
	"mod-09-amp-mod": {
		id: "mod-09-amp-mod",
		name: {
			fr: "09-Modulation - Modulation de l'amplitude",
			en: "09-Modulation - Amplitude Modulation"
		},
		category: "modulation",
		component: "Mod09AmpMod"
	},
	"mod-09-freq-mod": {
		id: "mod-09-freq-mod",
		name: {
			fr: "09-Modulation - Modulation de fréquence",
			en: "09-Modulation - Frequency Modulation"
		},
		category: "modulation",
		component: "Mod09FreqMod"
	},
	"mod-01-resampling": {
		id: "mod-01-resampling",
		name: {
			fr: "01-Échantillonnage - Fréquence d'échantillonnage",
			en: "01-Sampling - Sample Rate"
		},
		category: "sampling",
		component: "Mod01Resampling"
	},
	"mod-01-quantize": {
		id: "mod-01-quantize",
		name: {
			fr: "01-Échantillonnage - Quantification",
			en: "01-Sampling - Quantization"
		},
		category: "sampling",
		component: "Mod01Quantize"
	},
	"mod-05-env-follower": {
		id: "mod-05-env-follower",
		name: {
			fr: "05-Dynamique - Suivi d'amplitude",
			en: "05-Dynamics - Envelope Follower"
		},
		category: "dynamics",
		component: "Mod05EnvFollower"
	},
	"mod-05-gate": {
		id: "mod-05-gate",
		name: {
			fr: "05-Dynamique - Porte de bruit",
			en: "05-Dynamics - Noise Gate"
		},
		category: "dynamics",
		component: "Mod05Gate"
	},
	"mod-05-compressor": {
		id: "mod-05-compressor",
		name: {
			fr: "05-Dynamique - Compresseur",
			en: "05-Dynamics - Compressor"
		},
		category: "dynamics",
		component: "Mod05Compress"
	},
	"mod-09-auto-mod": {
		id: "mod-09-auto-mod",
		name: {
			fr: "09-Modulation - Auto-modulation",
			en: "09-Modulation - Self-Modulation"
		},
		category: "modulation",
		component: "Mod09AutoMod"
	},
	"mod-10-chebyshev": {
		id: "mod-10-chebyshev",
		name: {
			fr: "10-Distorsion - Fonctions de Chebychev",
			en: "10-Distortion - Chebyshev Functions"
		},
		category: "distortion",
		component: "Mod10Chebyshev"
	},
	"mod-10-distortion": {
		id: "mod-10-distortion",
		name: {
			fr: "10-Distorsion - Algorithmes de distorsion",
			en: "10-Distortion - Distortion Algorithms"
		},
		category: "distortion",
		component: "Mod10Distortion"
	},
	"mod-03-transpose": {
		id: "mod-03-transpose",
		name: {
			fr: "03-Délai - Transposition",
			en: "03-Delay - Transposition"
		},
		category: "delay",
		component: "Mod03Transpose"
	},
	"mod-03-reverb": {
		id: "mod-03-reverb",
		name: {
			fr: "03-Délai - Réverbération",
			en: "03-Delay - Reverberation"
		},
		category: "delay",
		component: "Mod03Reverb"
	},
	"mod-06-vocoder": {
		id: "mod-06-vocoder",
		name: {
			fr: "06-Domaine Spectral - Vocodeur",
			en: "06-Spectral Domain - Vocoder"
		},
		category: "spectral",
		component: "Mod06Vocoder"
	},
	"mod-06-spectral-filter": {
		id: "mod-06-spectral-filter",
		name: {
			fr: "06-Domaine Spectral - Filtrage",
			en: "06-Spectral Domain - Filtering"
		},
		category: "spectral",
		component: "Mod06SpectralFilter"
	},
	"mod-06-cross-synth": {
		id: "mod-06-cross-synth",
		name: {
			fr: "06-Domaine Spectral - Synthèse croisée",
			en: "06-Spectral Domain - Cross Synthesis"
		},
		category: "spectral",
		component: "Mod06CrossSynth"
	},
	"mod-06-spectral-playback": {
		id: "mod-06-spectral-playback",
		name: {
			fr: "06-Domaine Spectral - Vitesse et Hauteur Indépendantes",
			en: "06-Spectral Domain - Independent Speed & Pitch"
		},
		category: "spectral",
		component: "Mod06SpectralPlayback"
	},
	"mod-06-spectral-delay": {
		id: "mod-06-spectral-delay",
		name: {
			fr: "06-Domaine Spectral - Délai Spectral",
			en: "06-Spectral Domain - Spectral Delay"
		},
		category: "spectral",
		component: "Mod06SpectralDelay"
	},
	"mod-08-additive-fixed": {
		id: "mod-08-additive-fixed",
		name: {
			fr: "08-Synthèse Additive - Sommation de sinusoïdes",
			en: "08-Additive Synthesis - Sine Summation"
		},
		category: "synthesis",
		component: "Mod08AddSynthFix"
	},
	"mod-08-additive-var": {
		id: "mod-08-additive-var",
		name: {
			fr: "08-Synthèse Additive - Synthèse Additive",
			en: "08-Additive Synthesis - Variable Additive"
		},
		category: "synthesis",
		component: "Mod08AddSynthVar"
	},
	"mod-08-pwm": {
		id: "mod-08-pwm",
		name: {
			fr: "08-Oscillateurs - Modulation de largeur d'impulsion",
			en: "08-Oscillators - Pulse Width Modulation"
		},
		category: "synthesis",
		component: "Mod08PWM"
	},
	"mod-08-osc-sync": {
		id: "mod-08-osc-sync",
		name: {
			fr: "08-Oscillateurs - Oscillateur synchronisé",
			en: "08-Oscillators - Oscillator Sync"
		},
		category: "synthesis",
		component: "Mod08OscSync"
	},
	"mod-07-granular-playback": {
		id: "mod-07-granular-playback",
		name: {
			fr: "07-Granulation - Vitesse et Hauteur Indépendantes",
			en: "07-Granulation - Independent Speed & Pitch"
		},
		category: "granulation",
		component: "Mod07GranularPlayback"
	},
	"mod-07-granular-reorg": {
		id: "mod-07-granular-reorg",
		name: {
			fr: "07-Granulation - Réorganisation temporelle",
			en: "07-Granulation - Temporal Reorganization"
		},
		category: "granulation",
		component: "Mod07GranularReorg"
	},
	"mod-04-binaural": {
		id: "mod-04-binaural",
		name: {
			fr: "04-Spatialisation - Spatialisation binaurale en 3D",
			en: "04-Spatialization - 3D Binaural"
		},
		category: "spatialization",
		component: "Mod04Binaural"
	},
	"mod-05-mb-compressor": {
		id: "mod-05-mb-compressor",
		name: {
			fr: "05-Dynamique - Compresseur Multi-Bande",
			en: "05-Dynamics - Multiband Compressor"
		},
		category: "dynamics",
		component: "Mod05MBCompress"
	}
};
var useModuleRegistryStore = defineStore("moduleRegistry", {
	state() {
		return {
			activeModuleId: "mod-00-sources",
			modules: MODULE_DEFINITIONS,
			categories: MODULE_CATEGORIES
		};
	},
	getters: {
		activeModule(state) {
			return state.modules[state.activeModuleId] || null;
		},
		availableModules(state) {
			return Object.values(state.modules);
		},
		categorizedModules(state) {
			return state.categories.map((cat) => ({
				...cat,
				modules: cat.modules.filter((id) => state.modules[id]).map((id) => state.modules[id])
			})).filter((cat) => cat.modules.length > 0);
		}
	},
	actions: { setActiveModule(moduleId) {
		if (this.modules[moduleId]) this.activeModuleId = moduleId;
	} }
});
//#endregion
//#region \0plugin-vue:export-helper
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
//#endregion
//#region src/components/layout/AppHeader.vue
var _sfc_main$18 = {
	name: "AppHeader",
	data() {
		return {
			menuOpen: false,
			showAbout: false
		};
	},
	computed: {
		categorizedModules() {
			return useModuleRegistryStore().categorizedModules;
		},
		activeModuleId() {
			return useModuleRegistryStore().activeModuleId;
		}
	},
	mounted() {
		this._onClickOutside = (e) => {
			if (this.menuOpen && this.$refs.menuRoot && !this.$refs.menuRoot.contains(e.target)) this.menuOpen = false;
		};
		document.addEventListener("mousedown", this._onClickOutside);
	},
	beforeUnmount() {
		document.removeEventListener("mousedown", this._onClickOutside);
	},
	methods: {
		selectModule(moduleId) {
			this.menuOpen = false;
			useModuleRegistryStore().setActiveModule(moduleId);
			this.$router.push({
				name: "module",
				params: { moduleId }
			});
		},
		setLocale(locale) {
			this.$i18n.locale = locale;
			saveSetting("locale", locale);
		}
	}
};
var _hoisted_1$18 = { class: "app-header" };
var _hoisted_2$14 = { class: "app-header__nav" };
var _hoisted_3$7 = {
	class: "module-menu",
	ref: "menuRoot"
};
var _hoisted_4$6 = {
	key: 0,
	class: "module-menu__dropdown"
};
var _hoisted_5$6 = { class: "module-menu__category-label" };
var _hoisted_6$4 = ["onClick"];
var _hoisted_7$3 = { class: "app-header__lang" };
var _hoisted_8$1 = { class: "about-dialog" };
var _hoisted_9 = { class: "about-dialog__text" };
var _hoisted_10 = { class: "about-dialog__text about-dialog__text--small" };
var _hoisted_11 = { class: "about-dialog__credits" };
var _hoisted_12 = { class: "about-dialog__credit-label" };
function _sfc_render$18(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("header", _hoisted_1$18, [
		_cache[12] || (_cache[12] = createStaticVNode("<svg class=\"app-header__icon\" width=\"22\" height=\"22\" viewBox=\"0 0 32 32\"><rect width=\"32\" height=\"32\" rx=\"6\" fill=\"#1e1e22\"></rect><path d=\"M4 16 Q8 4, 12 16 Q16 28, 20 16 Q24 4, 28 16\" stroke=\"#4ade80\" stroke-width=\"2.5\" stroke-linecap=\"round\" fill=\"none\"></path><path d=\"M4 16 Q8 4, 12 16 Q16 28, 20 16 Q24 4, 28 16\" stroke=\"#4ade80\" stroke-width=\"2.5\" stroke-linecap=\"round\" fill=\"none\" opacity=\"0.3\" transform=\"translate(0 -3)\"></path><path d=\"M4 16 Q8 4, 12 16 Q16 28, 20 16 Q24 4, 28 16\" stroke=\"#5b8af5\" stroke-width=\"1.5\" stroke-linecap=\"round\" fill=\"none\" opacity=\"0.5\" transform=\"translate(0 3)\"></path></svg><span class=\"app-header__title\">DSPDemo</span>", 2)),
		createBaseVNode("nav", _hoisted_2$14, [createBaseVNode("div", _hoisted_3$7, [createBaseVNode("button", {
			class: "module-menu__trigger",
			onClick: _cache[0] || (_cache[0] = ($event) => $data.menuOpen = !$data.menuOpen)
		}, toDisplayString$1(_ctx.$t("menu.modules")), 1), $data.menuOpen ? (openBlock(), createElementBlock("div", _hoisted_4$6, [(openBlock(true), createElementBlock(Fragment, null, renderList($options.categorizedModules, (cat) => {
			return openBlock(), createElementBlock("div", {
				key: cat.id,
				class: "module-menu__category"
			}, [createBaseVNode("div", _hoisted_5$6, toDisplayString$1(_ctx.$t("categories." + cat.id)), 1), (openBlock(true), createElementBlock(Fragment, null, renderList(cat.modules, (mod) => {
				return openBlock(), createElementBlock("button", {
					key: mod.id,
					class: normalizeClass(["module-menu__item", { "module-menu__item--active": mod.id === $options.activeModuleId }]),
					onClick: ($event) => $options.selectModule(mod.id)
				}, toDisplayString$1(mod.name[_ctx.$i18n.locale] || mod.name.fr), 11, _hoisted_6$4);
			}), 128))]);
		}), 128))])) : createCommentVNode("", true)], 512)]),
		_cache[13] || (_cache[13] = createBaseVNode("div", { class: "app-header__spacer" }, null, -1)),
		createBaseVNode("div", _hoisted_7$3, [createBaseVNode("button", {
			class: normalizeClass(["lang-btn", { active: _ctx.$i18n.locale === "fr" }]),
			onClick: _cache[1] || (_cache[1] = ($event) => $options.setLocale("fr"))
		}, "FR", 2), createBaseVNode("button", {
			class: normalizeClass(["lang-btn", { active: _ctx.$i18n.locale === "en" }]),
			onClick: _cache[2] || (_cache[2] = ($event) => $options.setLocale("en"))
		}, "EN", 2)]),
		createBaseVNode("button", {
			class: "app-header__info-btn",
			onClick: _cache[3] || (_cache[3] = ($event) => $data.showAbout = true),
			title: "About"
		}, [..._cache[6] || (_cache[6] = [createBaseVNode("svg", {
			width: "16",
			height: "16",
			viewBox: "0 0 16 16",
			fill: "none"
		}, [createBaseVNode("circle", {
			cx: "8",
			cy: "8",
			r: "7",
			stroke: "currentColor",
			"stroke-width": "1.5"
		}), createBaseVNode("text", {
			x: "8",
			y: "11.5",
			"text-anchor": "middle",
			fill: "currentColor",
			"font-size": "10",
			"font-weight": "600"
		}, "i")], -1)])]),
		$data.showAbout ? (openBlock(), createElementBlock("div", {
			key: 0,
			class: "about-overlay",
			onClick: _cache[5] || (_cache[5] = withModifiers(($event) => $data.showAbout = false, ["self"]))
		}, [createBaseVNode("div", _hoisted_8$1, [
			createBaseVNode("button", {
				class: "about-dialog__close",
				onClick: _cache[4] || (_cache[4] = ($event) => $data.showAbout = false)
			}, "×"),
			_cache[9] || (_cache[9] = createBaseVNode("h2", { class: "about-dialog__title" }, "DSPDemo Web", -1)),
			_cache[10] || (_cache[10] = createBaseVNode("p", { class: "about-dialog__version" }, "v0.1.0", -1)),
			createBaseVNode("p", _hoisted_9, toDisplayString$1(_ctx.$i18n.locale === "fr" ? "Application interactive pour l'apprentissage du traitement numérique du signal audio. Visualisez la physique et les mathématiques derrière le son." : "Interactive application for learning digital audio signal processing. Visualize the physics and mathematics behind sound."), 1),
			createBaseVNode("p", _hoisted_10, toDisplayString$1(_ctx.$i18n.locale === "fr" ? "Réécriture web utilisant Vue 3, Web Audio API et AudioWorklet." : "Web rewrite using Vue 3, Web Audio API and AudioWorklet."), 1),
			_cache[11] || (_cache[11] = createBaseVNode("a", {
				class: "about-dialog__link",
				href: "https://github.com/boux/DSPDemo-Web",
				target: "_blank",
				rel: "noopener",
				style: {
					"display": "block",
					"margin-bottom": "var(--sp-3)"
				}
			}, "github.com/boux/DSPDemo-Web", -1)),
			createBaseVNode("div", _hoisted_11, [
				createBaseVNode("p", _hoisted_12, toDisplayString$1(_ctx.$i18n.locale === "fr" ? "Basé sur le projet original de" : "Based on the original project by"), 1),
				_cache[7] || (_cache[7] = createBaseVNode("p", { class: "about-dialog__credit-name" }, "Olivier Bélanger (2016-2020)", -1)),
				_cache[8] || (_cache[8] = createBaseVNode("a", {
					class: "about-dialog__link",
					href: "https://github.com/belangeo/dspdemo",
					target: "_blank",
					rel: "noopener"
				}, "github.com/belangeo/dspdemo", -1))
			])
		])])) : createCommentVNode("", true)
	]);
}
var AppHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$18, [["render", _sfc_render$18]]);
//#endregion
//#region src/audio/nodes/SourcePanel.js
var SourcePanelAudio = class {
	constructor(audioContext) {
		this.ctx = audioContext;
		this.output = this.ctx.createGain();
		this.output.gain.value = 1;
		this.sourceGains = {};
		this.activeSource = null;
		this.noiseWorkletReady = false;
		this.currentFrequency = 172;
		this.lfo = null;
		this.lfoGain = this.ctx.createGain();
		this.lfoGain.gain.value = 0;
		this.lfoGain.connect(this.output);
		this.blOsc = null;
		this.blGain = this.ctx.createGain();
		this.blGain.gain.value = 0;
		this.blGain.connect(this.output);
		this.fileSource = null;
		this.fileBuffer = null;
		this.fileGain = this.ctx.createGain();
		this.fileGain.gain.value = 0;
		this.fileGain.connect(this.output);
		this.noiseNode = null;
		this.noiseGain = this.ctx.createGain();
		this.noiseGain.gain.value = 0;
		this.noiseGain.connect(this.output);
		this.sourceGains = {
			lfo: this.lfoGain,
			bandlimited: this.blGain,
			file: this.fileGain,
			noise: this.noiseGain
		};
	}
	async init() {
		this.lfo = this.ctx.createOscillator();
		this.lfo.type = "sine";
		this.lfo.frequency.value = 172;
		this.lfo.connect(this.lfoGain);
		this.lfo.start();
		this.blOsc = this.ctx.createOscillator();
		this.blOsc.frequency.value = 172;
		this._updateBLWaveform(.25, .5);
		this.blOsc.connect(this.blGain);
		this.blOsc.start();
		try {
			await this.ctx.audioWorklet.addModule(new URL("data:text/javascript;base64,Y2xhc3MgTm9pc2VHZW5lcmF0b3JQcm9jZXNzb3IgZXh0ZW5kcyBBdWRpb1dvcmtsZXRQcm9jZXNzb3IgewogIGNvbnN0cnVjdG9yKCkgewogICAgc3VwZXIoKQogICAgdGhpcy50eXBlID0gMCAvLyAwPXdoaXRlLCAxPXBpbmssIDI9YnJvd24KICAgIC8vIFBpbmsgbm9pc2UgZmlsdGVyIHN0YXRlIChQYXVsIEtlbGxldCdzIGFsZ29yaXRobSkKICAgIHRoaXMuYjAgPSAwOyB0aGlzLmIxID0gMDsgdGhpcy5iMiA9IDAKICAgIHRoaXMuYjMgPSAwOyB0aGlzLmI0ID0gMDsgdGhpcy5iNSA9IDA7IHRoaXMuYjYgPSAwCiAgICAvLyBCcm93biBub2lzZSBzdGF0ZQogICAgdGhpcy5sYXN0QnJvd24gPSAwCgogICAgdGhpcy5wb3J0Lm9ubWVzc2FnZSA9IChlKSA9PiB7CiAgICAgIGlmIChlLmRhdGEudHlwZSAhPT0gdW5kZWZpbmVkKSB0aGlzLnR5cGUgPSBlLmRhdGEudHlwZQogICAgfQogIH0KCiAgcHJvY2VzcyhpbnB1dHMsIG91dHB1dHMpIHsKICAgIGNvbnN0IG91dHB1dCA9IG91dHB1dHNbMF0KICAgIGNvbnN0IGNoYW5uZWwgPSBvdXRwdXRbMF0KICAgIGlmICghY2hhbm5lbCkgcmV0dXJuIHRydWUKCiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYW5uZWwubGVuZ3RoOyBpKyspIHsKICAgICAgY29uc3Qgd2hpdGUgPSBNYXRoLnJhbmRvbSgpICogMiAtIDEKCiAgICAgIGlmICh0aGlzLnR5cGUgPT09IDApIHsKICAgICAgICAvLyBXaGl0ZSBub2lzZQogICAgICAgIGNoYW5uZWxbaV0gPSB3aGl0ZQogICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gMSkgewogICAgICAgIC8vIFBpbmsgbm9pc2UgKC0zZEIvb2N0YXZlKSAtIFBhdWwgS2VsbGV0J3MgcmVmaW5lZCBtZXRob2QKICAgICAgICB0aGlzLmIwID0gMC45OTg4NiAqIHRoaXMuYjAgKyB3aGl0ZSAqIDAuMDU1NTE3OQogICAgICAgIHRoaXMuYjEgPSAwLjk5MzMyICogdGhpcy5iMSArIHdoaXRlICogMC4wNzUwNzU5CiAgICAgICAgdGhpcy5iMiA9IDAuOTY5MDAgKiB0aGlzLmIyICsgd2hpdGUgKiAwLjE1Mzg1MjAKICAgICAgICB0aGlzLmIzID0gMC44NjY1MCAqIHRoaXMuYjMgKyB3aGl0ZSAqIDAuMzEwNDg1NgogICAgICAgIHRoaXMuYjQgPSAwLjU1MDAwICogdGhpcy5iNCArIHdoaXRlICogMC41MzI5NTIyCiAgICAgICAgdGhpcy5iNSA9IC0wLjc2MTYgKiB0aGlzLmI1IC0gd2hpdGUgKiAwLjAxNjg5ODAKICAgICAgICBjaGFubmVsW2ldID0gKHRoaXMuYjAgKyB0aGlzLmIxICsgdGhpcy5iMiArIHRoaXMuYjMgKyB0aGlzLmI0ICsgdGhpcy5iNSArIHRoaXMuYjYgKyB3aGl0ZSAqIDAuNTM2MikgKiAwLjExCiAgICAgICAgdGhpcy5iNiA9IHdoaXRlICogMC4xMTU5MjYKICAgICAgfSBlbHNlIHsKICAgICAgICAvLyBCcm93biBub2lzZSAoLTZkQi9vY3RhdmUpIC0gaW50ZWdyYXRlZCB3aGl0ZSBub2lzZQogICAgICAgIHRoaXMubGFzdEJyb3duID0gKHRoaXMubGFzdEJyb3duICsgKDAuMDIgKiB3aGl0ZSkpIC8gMS4wMgogICAgICAgIGNoYW5uZWxbaV0gPSB0aGlzLmxhc3RCcm93biAqIDMuNQogICAgICB9CiAgICB9CgogICAgLy8gQ29weSB0byBhbGwgb3V0cHV0IGNoYW5uZWxzIChtb25vIC0+IHN0ZXJlbykKICAgIGZvciAobGV0IGNoID0gMTsgY2ggPCBvdXRwdXQubGVuZ3RoOyBjaCsrKSB7CiAgICAgIG91dHB1dFtjaF0uc2V0KGNoYW5uZWwpCiAgICB9CgogICAgcmV0dXJuIHRydWUKICB9Cn0KCnJlZ2lzdGVyUHJvY2Vzc29yKCdub2lzZS1nZW5lcmF0b3InLCBOb2lzZUdlbmVyYXRvclByb2Nlc3NvcikK", "" + import.meta.url));
			this.noiseNode = new AudioWorkletNode(this.ctx, "noise-generator");
			this.noiseNode.connect(this.noiseGain);
			this.noiseWorkletReady = true;
		} catch (e) {
			console.warn("Noise worklet failed to load:", e);
		}
		this.switchSource("lfo");
	}
	switchSource(name) {
		const t = this.ctx.currentTime;
		const fadeTime = .1;
		for (const [key, gain] of Object.entries(this.sourceGains)) gain.gain.setTargetAtTime(0, t, fadeTime / 3);
		if (this.sourceGains[name]) this.sourceGains[name].gain.setTargetAtTime(1, t + fadeTime * .5, fadeTime / 3);
		this.activeSource = name;
		if (name === "lfo") this.currentFrequency = this.lfo.frequency.value;
		else if (name === "bandlimited") this.currentFrequency = this.blOsc.frequency.value;
		else this.currentFrequency = 0;
	}
	setLFOType(type) {
		const typeMap = [
			"sine",
			"sawtooth",
			"sawtooth",
			"square",
			"triangle",
			"square",
			"square"
		];
		this.lfo.type = typeMap[type] || "sine";
	}
	setLFOFrequency(freq) {
		this.lfo.frequency.setTargetAtTime(freq, this.ctx.currentTime, .05);
		this.currentFrequency = freq;
	}
	setBLFrequency(freq) {
		this.blOsc.frequency.setTargetAtTime(freq, this.ctx.currentTime, .05);
		this.currentFrequency = freq;
	}
	setBLParams(shape, bright) {
		this._updateBLWaveform(shape, bright);
	}
	_updateBLWaveform(shape, bright) {
		const numHarmonics = Math.max(1, Math.floor(bright * 64));
		const real = new Float32Array(numHarmonics + 1);
		const imag = new Float32Array(numHarmonics + 1);
		real[0] = 0;
		imag[0] = 0;
		for (let n = 1; n <= numHarmonics; n++) {
			let amp = 0;
			if (shape <= .25) {
				const t = shape / .25;
				const impulseAmp = 1 / numHarmonics;
				const sawAmp = 1 / n;
				amp = impulseAmp * (1 - t) + sawAmp * t;
			} else if (shape <= .7) {
				const t = (shape - .25) / .45;
				const sawAmp = 1 / n;
				const sqrAmp = n % 2 === 1 ? 1 / n : 0;
				amp = sawAmp * (1 - t) + sqrAmp * t;
			} else {
				const t = (shape - .7) / .3;
				const sqrAmp = n % 2 === 1 ? 1 / n : 0;
				const triAmp = n % 2 === 1 ? ((n - 1) / 2 % 2 === 0 ? 1 : -1) / (n * n) : 0;
				amp = sqrAmp * (1 - t) + triAmp * t;
			}
			imag[n] = amp;
		}
		const wave = this.ctx.createPeriodicWave(real, imag, { disableNormalization: false });
		this.blOsc.setPeriodicWave(wave);
	}
	setNoiseType(type) {
		if (this.noiseNode) this.noiseNode.port.postMessage({ type });
	}
	async loadFile(file) {
		const arrayBuffer = await file.arrayBuffer();
		this.fileBuffer = await this.ctx.decodeAudioData(arrayBuffer);
	}
	playFile(loop = false, speed = 1) {
		this.stopFile();
		if (!this.fileBuffer) return;
		this.fileSource = this.ctx.createBufferSource();
		this.fileSource.buffer = this.fileBuffer;
		this.fileSource.loop = loop;
		this.fileSource.playbackRate.value = speed;
		this.fileSource.connect(this.fileGain);
		this.fileSource.start();
	}
	stopFile() {
		if (this.fileSource) {
			try {
				this.fileSource.stop();
			} catch (e) {}
			try {
				this.fileSource.disconnect();
			} catch (e) {}
			this.fileSource = null;
		}
	}
	setFileSpeed(speed) {
		if (this.fileSource) this.fileSource.playbackRate.setTargetAtTime(speed, this.ctx.currentTime, .05);
	}
	setFileLoop(loop) {
		if (this.fileSource) this.fileSource.loop = loop;
	}
	destroy() {
		if (this.lfo) {
			this.lfo.stop();
			this.lfo.disconnect();
		}
		if (this.blOsc) {
			this.blOsc.stop();
			this.blOsc.disconnect();
		}
		if (this.noiseNode) this.noiseNode.disconnect();
		this.stopFile();
		this.lfoGain.disconnect();
		this.blGain.disconnect();
		this.fileGain.disconnect();
		this.noiseGain.disconnect();
		this.output.disconnect();
	}
};
//#endregion
//#region src/stores/audioEngine.js
var settings$1 = loadSettings();
var useAudioEngineStore = defineStore("audioEngine", {
	state() {
		return {
			context: null,
			masterGain: null,
			analyserSpectrum: null,
			analyserScope: null,
			analyserVu: null,
			sourcePanel: null,
			isRunning: false,
			isRecording: false,
			sampleRate: 44100,
			volumeDb: settings$1.volumeDb,
			sourceReady: false,
			mediaRecorder: null,
			recordedChunks: []
		};
	},
	actions: {
		init() {
			if (this._initPromise) return this._initPromise;
			this._initPromise = this._doInit();
			return this._initPromise;
		},
		async _doInit() {
			this.context = new AudioContext();
			this.sampleRate = this.context.sampleRate;
			this.masterGain = this.context.createGain();
			this.masterGain.gain.value = Math.pow(10, this.volumeDb * .05);
			this.masterGain.connect(this.context.destination);
			this.analyserSpectrum = this.context.createAnalyser();
			this.analyserSpectrum.fftSize = 2048;
			this.analyserSpectrum.smoothingTimeConstant = .8;
			this.analyserScope = this.context.createAnalyser();
			this.analyserScope.fftSize = 2048;
			this.analyserScope.smoothingTimeConstant = 0;
			this.analyserVu = this.context.createAnalyser();
			this.analyserVu.fftSize = 256;
			this.analyserVu.smoothingTimeConstant = .8;
			this.masterGain.connect(this.analyserSpectrum);
			this.masterGain.connect(this.analyserScope);
			this.masterGain.connect(this.analyserVu);
			this.sourcePanel = new SourcePanelAudio(this.context);
			await this.sourcePanel.init();
			this.sourcePanel.output.connect(this.masterGain);
			this.sourceReady = true;
			if (this.context.state === "running") await this.context.suspend();
		},
		async start() {
			await this.init();
			await this.context.resume();
			this.isRunning = true;
		},
		async stop() {
			if (this.context) await this.context.suspend();
			this.isRunning = false;
			if (this.isRecording) this.stopRecording();
		},
		setVolume(db) {
			this.volumeDb = db;
			saveSetting("volumeDb", db);
			if (this.masterGain) this.masterGain.gain.setTargetAtTime(Math.pow(10, db * .05), this.context.currentTime, .02);
		},
		startRecording() {
			if (!this.context || !this.masterGain) return;
			const dest = this.context.createMediaStreamDestination();
			this.masterGain.connect(dest);
			this.recordedChunks = [];
			const mimeType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus") ? "audio/webm;codecs=opus" : "audio/webm";
			this.mediaRecorder = new MediaRecorder(dest.stream, { mimeType });
			this.mediaRecorder.ondataavailable = (e) => {
				if (e.data.size > 0) this.recordedChunks.push(e.data);
			};
			this.mediaRecorder.onstop = () => {
				const blob = new Blob(this.recordedChunks, { type: mimeType });
				const url = URL.createObjectURL(blob);
				const a = document.createElement("a");
				a.href = url;
				a.download = "dspdemo-recording." + (mimeType.includes("webm") ? "webm" : "ogg");
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
				URL.revokeObjectURL(url);
				this.recordedChunks = [];
			};
			this.mediaRecorder.start();
			this.isRecording = true;
		},
		stopRecording() {
			if (this.mediaRecorder && this.mediaRecorder.state !== "inactive") this.mediaRecorder.stop();
			this.mediaRecorder = null;
			this.isRecording = false;
		},
		connectSource(sourceNode) {
			if (sourceNode && this.masterGain) sourceNode.connect(this.masterGain);
		},
		disconnectSource(sourceNode) {
			if (sourceNode) try {
				sourceNode.disconnect(this.masterGain);
			} catch (e) {}
		}
	}
});
//#endregion
//#region src/components/layout/AudioControls.vue
var _sfc_main$17 = {
	name: "AudioControls",
	computed: {
		isRunning() {
			return useAudioEngineStore().isRunning;
		},
		isRecording() {
			return useAudioEngineStore().isRecording;
		}
	},
	methods: {
		async toggleAudio() {
			const engine = useAudioEngineStore();
			if (engine.isRunning) await engine.stop();
			else await engine.start();
		},
		toggleRecord() {
			const engine = useAudioEngineStore();
			if (engine.isRecording) engine.stopRecording();
			else engine.startRecording();
		}
	}
};
var _hoisted_1$17 = { class: "section-head" };
var _hoisted_2$13 = { class: "section-body" };
var _hoisted_3$6 = { class: "control-row" };
var _hoisted_4$5 = ["disabled"];
var _hoisted_5$5 = {
	key: 0,
	class: "recording-indicator"
};
function _sfc_render$17(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", null, [createBaseVNode("div", _hoisted_1$17, toDisplayString$1(_ctx.$t("controls.audioControls")), 1), createBaseVNode("div", _hoisted_2$13, [createBaseVNode("div", _hoisted_3$6, [createBaseVNode("button", {
		class: normalizeClass(["toggle-btn", { active: $options.isRunning }]),
		onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleAudio && $options.toggleAudio(...args))
	}, toDisplayString$1($options.isRunning ? _ctx.$t("controls.disable") : _ctx.$t("controls.enable")), 3), createBaseVNode("button", {
		class: normalizeClass(["toggle-btn", { active: $options.isRecording }]),
		disabled: !$options.isRunning,
		onClick: _cache[1] || (_cache[1] = (...args) => $options.toggleRecord && $options.toggleRecord(...args))
	}, toDisplayString$1($options.isRecording ? _ctx.$t("controls.stopRecord") : _ctx.$t("controls.record")), 11, _hoisted_4$5)]), $options.isRecording ? (openBlock(), createElementBlock("div", _hoisted_5$5, toDisplayString$1(_ctx.$i18n.locale === "fr" ? "Enregistrement en cours..." : "Recording..."), 1)) : createCommentVNode("", true)])]);
}
var AudioControls_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$17, [["render", _sfc_render$17]]);
//#endregion
//#region src/components/controls/VuMeter.vue
var _sfc_main$16 = {
	name: "VuMeter",
	props: { channels: {
		type: Number,
		default: 2
	} },
	data() {
		return {
			levels: new Array(this.channels).fill(0),
			animFrameId: null,
			splitter: null,
			analysers: []
		};
	},
	computed: { ...mapState(useAudioEngineStore, ["isRunning", "sourceReady"]) },
	watch: { sourceReady(ready) {
		if (ready) {
			this.cleanupAnalysers();
			this.setupAnalysers();
		}
	} },
	mounted() {
		this.setupAnalysers();
		this.startMeter();
	},
	beforeUnmount() {
		if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
		this.cleanupAnalysers();
	},
	methods: {
		setupAnalysers() {
			const engine = useAudioEngineStore();
			if (!engine.context || !engine.masterGain) return;
			this.splitter = engine.context.createChannelSplitter(this.channels);
			engine.masterGain.connect(this.splitter);
			this.analysers = [];
			for (let i = 0; i < this.channels; i++) {
				const analyser = engine.context.createAnalyser();
				analyser.fftSize = 256;
				analyser.smoothingTimeConstant = .8;
				this.splitter.connect(analyser, i);
				this.analysers.push(analyser);
			}
		},
		cleanupAnalysers() {
			if (this.splitter) try {
				this.splitter.disconnect();
			} catch (e) {}
			this.analysers.forEach((a) => {
				try {
					a.disconnect();
				} catch (e) {}
			});
			this.analysers = [];
			this.splitter = null;
		},
		startMeter() {
			const update = () => {
				if (this.isRunning && this.analysers.length > 0) for (let ch = 0; ch < this.analysers.length; ch++) {
					const data = new Float32Array(this.analysers[ch].fftSize);
					this.analysers[ch].getFloatTimeDomainData(data);
					let peak = 0;
					for (let i = 0; i < data.length; i++) {
						const abs = Math.abs(data[i]);
						if (abs > peak) peak = abs;
					}
					this.levels[ch] = Math.min(1, peak);
				}
				else this.levels.fill(0);
				this.animFrameId = requestAnimationFrame(update);
			};
			update();
		},
		meterStyle(level) {
			const pct = level * 100;
			let color = "var(--vu-green)";
			if (level > .9) color = "var(--vu-red)";
			else if (level > .7) color = "var(--vu-yellow)";
			return {
				width: pct + "%",
				background: color
			};
		}
	}
};
var _hoisted_1$16 = { class: "vu-meter" };
var _hoisted_2$12 = { class: "vu-meter__track" };
function _sfc_render$16(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1$16, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.levels, (level, i) => {
		return openBlock(), createElementBlock("div", {
			key: i,
			class: "vu-meter__channel"
		}, [createBaseVNode("div", _hoisted_2$12, [createBaseVNode("div", {
			class: "vu-meter__fill",
			style: normalizeStyle($options.meterStyle(level))
		}, null, 4)])]);
	}), 128))]);
}
//#endregion
//#region src/components/layout/OutputControls.vue
var _sfc_main$15 = {
	name: "OutputControls",
	components: { VuMeter: /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$16, [["render", _sfc_render$16]]) },
	computed: { volumeDb() {
		return useAudioEngineStore().volumeDb;
	} },
	methods: { onVolumeChange(e) {
		useAudioEngineStore().setVolume(parseFloat(e.target.value));
	} }
};
var _hoisted_1$15 = { class: "section-head" };
var _hoisted_2$11 = { class: "section-body" };
var _hoisted_3$5 = { class: "control-label" };
var _hoisted_4$4 = { class: "output-controls__row" };
var _hoisted_5$4 = ["value"];
var _hoisted_6$3 = { class: "output-controls__value" };
function _sfc_render$15(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_VuMeter = resolveComponent("VuMeter");
	return openBlock(), createElementBlock("div", null, [createBaseVNode("div", _hoisted_1$15, toDisplayString$1(_ctx.$t("controls.audioOutput")), 1), createBaseVNode("div", _hoisted_2$11, [
		createBaseVNode("label", _hoisted_3$5, toDisplayString$1(_ctx.$t("controls.volume")), 1),
		createBaseVNode("div", _hoisted_4$4, [createBaseVNode("input", {
			type: "range",
			min: -60,
			max: 18,
			step: .5,
			value: $options.volumeDb,
			onInput: _cache[0] || (_cache[0] = (...args) => $options.onVolumeChange && $options.onVolumeChange(...args))
		}, null, 40, _hoisted_5$4), createBaseVNode("span", _hoisted_6$3, toDisplayString$1($options.volumeDb.toFixed(1)) + " dB", 1)]),
		createVNode(_component_VuMeter, { channels: 2 })
	])]);
}
//#endregion
//#region src/components/layout/LeftPanel.vue
var _sfc_main$14 = {
	name: "LeftPanel",
	components: {
		AudioControls: AudioControls_default,
		OutputControls: /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$15, [["render", _sfc_render$15]])
	}
};
var _hoisted_1$14 = { class: "left-panel" };
var _hoisted_2$10 = { class: "module-area" };
function _sfc_render$14(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_AudioControls = resolveComponent("AudioControls");
	const _component_router_view = resolveComponent("router-view");
	const _component_OutputControls = resolveComponent("OutputControls");
	return openBlock(), createElementBlock("aside", _hoisted_1$14, [
		createVNode(_component_AudioControls),
		createBaseVNode("div", _hoisted_2$10, [createVNode(_component_router_view)]),
		createVNode(_component_OutputControls)
	]);
}
var LeftPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$14, [["render", _sfc_render$14]]);
//#endregion
//#region src/stores/uiState.js
var WINDOW_CHOICES = [
	"Rectangular",
	"Hamming",
	"Hanning",
	"Bartlett",
	"Blackman 3-term",
	"Blackman-Harris 4",
	"Blackman-Harris 7",
	"Tuckey",
	"Half-sine"
];
var FFT_SIZE_CHOICES = [
	64,
	128,
	256,
	512,
	1024,
	2048,
	4096,
	8192
];
var SPECTRUM_DEFAULTS = {
	freqLog: false,
	magLog: true,
	windowType: 2,
	fftSize: 4,
	amplitude: .5,
	zoomMin: 0,
	zoomMax: .5
};
var WATERFALL_DEFAULTS = {
	freqLog: false,
	windowType: 2,
	fftSize: 4,
	amplitude: .5,
	scrollSpeed: 1,
	zoomMin: 0,
	zoomMax: .5
};
var SCOPE_DEFAULTS = {
	windowLength: 50,
	amplitude: .5,
	autoNormalize: true,
	forceSync: true
};
var XY_DEFAULTS = {
	windowLength: 50,
	amplitude: .5,
	autoNormalize: true,
	phase: .25
};
var settings = loadSettings();
var useUiStateStore = defineStore("uiState", {
	state() {
		return {
			spectrum: {
				...SPECTRUM_DEFAULTS,
				...settings.spectrum || {}
			},
			waterfall: {
				...WATERFALL_DEFAULTS,
				...settings.waterfall || {}
			},
			scope: {
				...SCOPE_DEFAULTS,
				...settings.scope || {}
			},
			xy: {
				...XY_DEFAULTS,
				...settings.xy || {}
			}
		};
	},
	getters: {
		spectrumFftSize(state) {
			return FFT_SIZE_CHOICES[state.spectrum.fftSize];
		},
		spectrumWindowName(state) {
			return WINDOW_CHOICES[state.spectrum.windowType];
		}
	},
	actions: { saveState() {
		saveSetting("spectrum", { ...this.spectrum });
		saveSetting("waterfall", { ...this.waterfall });
		saveSetting("scope", { ...this.scope });
		saveSetting("xy", { ...this.xy });
	} }
});
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/errors/external-error.js
/** @public */
var ExternalError = class extends Error {
	/** @internal */
	constructor(type, message) {
		super(message);
		this.type = type;
	}
};
/** @public */
var ConfigurationError = class extends ExternalError {
	/** @internal */
	constructor(message, node) {
		super("Configuration", message);
		this.node = node;
	}
};
/** @public */
var PopoutBlockedError = class extends ExternalError {
	/** @internal */
	constructor(message) {
		super("PopoutBlocked", message);
	}
};
/** @public */
var ApiError = class extends ExternalError {
	/** @internal */
	constructor(message) {
		super("API", message);
	}
};
/** @public */
var BindError = class extends ExternalError {
	/** @internal */
	constructor(message) {
		super("Bind", message);
	}
};
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/errors/internal-error.js
/** @internal */
var InternalError = class extends Error {
	constructor(type, code, message) {
		super(`${type}: ${code}${message === void 0 ? "" : ": " + message}`);
	}
};
/** @internal */
var AssertError = class extends InternalError {
	constructor(code, message) {
		super("Assert", code, message);
	}
};
/** @internal */
var UnreachableCaseError = class extends InternalError {
	constructor(code, variableValue, message) {
		super("UnreachableCase", code, `${variableValue}${message === void 0 ? "" : ": " + message}`);
	}
};
/** @internal */
var UnexpectedNullError = class extends InternalError {
	constructor(code, message) {
		super("UnexpectedNull", code, message);
	}
};
/** @internal */
var UnexpectedUndefinedError = class extends InternalError {
	constructor(code, message) {
		super("UnexpectedUndefined", code, message);
	}
};
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/utils/i18n-strings.js
/** @public */
var I18nStrings;
(function(I18nStrings) {
	/** @internal */
	let initialised = false;
	/** @internal */
	const infosObject = {
		PopoutCannotBeCreatedWithGroundItemConfig: {
			id: 0,
			default: "Popout cannot be created with ground ItemConfig"
		},
		PleaseRegisterAConstructorFunction: {
			id: 1,
			default: "Please register a constructor function"
		},
		ComponentTypeNotRegisteredAndBindComponentEventHandlerNotAssigned: {
			id: 2,
			default: "Component type not registered and BindComponentEvent handler not assigned"
		},
		ComponentIsAlreadyRegistered: {
			id: 3,
			default: "Component is already registered"
		},
		ComponentIsNotVirtuable: {
			id: 4,
			default: "Component is not virtuable. Requires rootHtmlElement field/getter"
		},
		VirtualComponentDoesNotHaveRootHtmlElement: {
			id: 5,
			default: "Virtual component does not have getter \"rootHtmlElement\""
		},
		ItemConfigIsNotTypeComponent: {
			id: 6,
			default: "ItemConfig is not of type component"
		},
		InvalidNumberPartInSizeString: {
			id: 7,
			default: "Invalid number part in size string"
		},
		UnknownUnitInSizeString: {
			id: 8,
			default: "Unknown unit in size string"
		},
		UnsupportedUnitInSizeString: {
			id: 9,
			default: "Unsupported unit in size string"
		}
	};
	I18nStrings.idCount = Object.keys(infosObject).length;
	/** @internal */
	const infos = Object.values(infosObject);
	function checkInitialise() {
		if (!initialised) for (let i = 0; i < I18nStrings.idCount; i++) {
			const info = infos[i];
			if (info.id !== i) throw new AssertError("INSI00110", `${i}: ${info.id}`);
			else i18nStrings[i] = info.default;
		}
		initialised = true;
	}
	I18nStrings.checkInitialise = checkInitialise;
})(I18nStrings || (I18nStrings = {}));
/** @public */
var i18nStrings = new Array(I18nStrings.idCount);
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/utils/style-constants.js
/** @public */
var StyleConstants;
(function(StyleConstants) {
	StyleConstants.defaultComponentBaseZIndex = "auto";
	StyleConstants.defaultComponentDragZIndex = "32";
	StyleConstants.defaultComponentStackMaximisedZIndex = "41";
})(StyleConstants || (StyleConstants = {}));
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/utils/types.js
/** @internal */
var WidthOrHeightPropertyName;
(function(WidthOrHeightPropertyName) {
	WidthOrHeightPropertyName.width = "width";
	WidthOrHeightPropertyName.height = "height";
})(WidthOrHeightPropertyName || (WidthOrHeightPropertyName = {}));
/** @public */
var Side;
(function(Side) {
	Side.top = "top";
	Side.left = "left";
	Side.right = "right";
	Side.bottom = "bottom";
})(Side || (Side = {}));
/** @public */
var LogicalZIndex;
(function(LogicalZIndex) {
	LogicalZIndex.base = "base";
	LogicalZIndex.drag = "drag";
	LogicalZIndex.stackMaximised = "stackMaximised";
})(LogicalZIndex || (LogicalZIndex = {}));
/** @public */
var LogicalZIndexToDefaultMap = {
	base: StyleConstants.defaultComponentBaseZIndex,
	drag: StyleConstants.defaultComponentDragZIndex,
	stackMaximised: StyleConstants.defaultComponentStackMaximisedZIndex
};
/** @public */
var JsonValue;
(function(JsonValue) {
	function isJson(value) {
		return isJsonObject(value);
	}
	JsonValue.isJson = isJson;
	function isJsonObject(value) {
		return !Array.isArray(value) && value !== null && typeof value === "object";
	}
	JsonValue.isJsonObject = isJsonObject;
})(JsonValue || (JsonValue = {}));
/** @public */
var ItemType;
(function(ItemType) {
	ItemType.ground = "ground";
	ItemType.row = "row";
	ItemType.column = "column";
	ItemType.stack = "stack";
	ItemType.component = "component";
})(ItemType || (ItemType = {}));
/** @public */
var ResponsiveMode;
(function(ResponsiveMode) {
	ResponsiveMode.none = "none";
	ResponsiveMode.always = "always";
	ResponsiveMode.onload = "onload";
})(ResponsiveMode || (ResponsiveMode = {}));
/** @public */
var SizeUnitEnum;
(function(SizeUnitEnum) {
	SizeUnitEnum["Pixel"] = "px";
	SizeUnitEnum["Percent"] = "%";
	SizeUnitEnum["Fractional"] = "fr";
	SizeUnitEnum["Em"] = "em";
})(SizeUnitEnum || (SizeUnitEnum = {}));
/** @public */
(function(SizeUnitEnum) {
	function tryParse(value) {
		switch (value) {
			case SizeUnitEnum.Pixel: return SizeUnitEnum.Pixel;
			case SizeUnitEnum.Percent: return SizeUnitEnum.Percent;
			case SizeUnitEnum.Fractional: return SizeUnitEnum.Fractional;
			case SizeUnitEnum.Em: return SizeUnitEnum.Em;
			default: return;
		}
	}
	SizeUnitEnum.tryParse = tryParse;
	function format(value) {
		switch (value) {
			case SizeUnitEnum.Pixel: return SizeUnitEnum.Pixel;
			case SizeUnitEnum.Percent: return SizeUnitEnum.Percent;
			case SizeUnitEnum.Fractional: return SizeUnitEnum.Fractional;
			case SizeUnitEnum.Em: return SizeUnitEnum.Em;
			default: throw new UnreachableCaseError("SUEF44998", value);
		}
	}
	SizeUnitEnum.format = format;
})(SizeUnitEnum || (SizeUnitEnum = {}));
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/utils/utils.js
/** @internal */
function numberToPixels(value) {
	return value.toString(10) + "px";
}
/** @internal */
function pixelsToNumber(value) {
	const numberStr = value.replace("px", "");
	return parseFloat(numberStr);
}
/** @internal */
function splitStringAtFirstNonNumericChar(value) {
	value = value.trimStart();
	const length = value.length;
	if (length === 0) return {
		numericPart: "",
		firstNonNumericCharPart: ""
	};
	else {
		let firstNonDigitPartIndex = length;
		let gotDecimalPoint = false;
		for (let i = 0; i < length; i++) {
			const char = value[i];
			if (!isDigit(char)) if (char !== ".") {
				firstNonDigitPartIndex = i;
				break;
			} else if (gotDecimalPoint) {
				firstNonDigitPartIndex = i;
				break;
			} else gotDecimalPoint = true;
		}
		return {
			numericPart: value.substring(0, firstNonDigitPartIndex),
			firstNonNumericCharPart: value.substring(firstNonDigitPartIndex).trim()
		};
	}
}
/** @internal */
function isDigit(char) {
	return char >= "0" && char <= "9";
}
/** @internal */
function getElementWidth(element) {
	return element.offsetWidth;
}
/** @internal */
function setElementWidth(element, width) {
	const widthAsPixels = numberToPixels(width);
	element.style.width = widthAsPixels;
}
/** @internal */
function getElementHeight(element) {
	return element.offsetHeight;
}
/** @internal */
function setElementHeight(element, height) {
	const heightAsPixels = numberToPixels(height);
	element.style.height = heightAsPixels;
}
/** @internal */
function getElementWidthAndHeight(element) {
	return {
		width: element.offsetWidth,
		height: element.offsetHeight
	};
}
/** @internal */
function setElementDisplayVisibility(element, visible) {
	if (visible) element.style.display = "";
	else element.style.display = "none";
}
/** @internal */
function ensureElementPositionAbsolute(element) {
	const absolutePosition = "absolute";
	if (element.style.position !== absolutePosition) element.style.position = absolutePosition;
}
/**
* Replacement for JQuery $.extend(true, target, obj)
* @internal
*/
function deepExtend(target, obj) {
	if (obj !== void 0) {
		for (const key in obj) if (obj.hasOwnProperty(key)) {
			const value = obj[key];
			const existingTarget = target[key];
			target[key] = deepExtendValue(existingTarget, value);
		}
	}
	return target;
}
/** @internal */
function deepExtendValue(existingTarget, value) {
	if (typeof value !== "object") return value;
	else if (Array.isArray(value)) {
		const length = value.length;
		const targetArray = new Array(length);
		for (let i = 0; i < length; i++) {
			const element = value[i];
			targetArray[i] = deepExtendValue({}, element);
		}
		return targetArray;
	} else if (value === null) return null;
	else {
		const valueObj = value;
		if (existingTarget === void 0) return deepExtend({}, valueObj);
		else if (typeof existingTarget !== "object") return deepExtend({}, valueObj);
		else if (Array.isArray(existingTarget)) return deepExtend({}, valueObj);
		else if (existingTarget === null) return deepExtend({}, valueObj);
		else return deepExtend(existingTarget, valueObj);
	}
}
/** @internal */
function removeFromArray(item, array) {
	const index = array.indexOf(item);
	if (index === -1) throw new Error("Can't remove item from array. Item is not in the array");
	array.splice(index, 1);
}
/** @internal */
function getUniqueId() {
	return (Math.random() * 0x38d7ea4c68000).toString(36).replace(".", "");
}
/** @internal */
function getErrorMessage(e) {
	if (e instanceof Error) return e.message;
	else if (typeof e === "string") return e;
	else return "Unknown Error";
}
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/utils/config-minifier.js
/**
* Minifies and unminifies configs by replacing frequent keys
* and values with one letter substitutes. Config options must
* retain array position/index, add new options at the end.
* @internal
*/
var ConfigMinifier;
(function(ConfigMinifier) {
	const keys = [
		"settings",
		"hasHeaders",
		"constrainDragToContainer",
		"selectionEnabled",
		"dimensions",
		"borderWidth",
		"minItemHeight",
		"minItemWidth",
		"headerHeight",
		"dragProxyWidth",
		"dragProxyHeight",
		"labels",
		"close",
		"maximise",
		"minimise",
		"popout",
		"content",
		"componentType",
		"componentState",
		"id",
		"width",
		"type",
		"height",
		"isClosable",
		"title",
		"popoutWholeStack",
		"openPopouts",
		"parentId",
		"activeItemIndex",
		"reorderEnabled",
		"borderGrabWidth"
	];
	const values = [
		true,
		false,
		"row",
		"column",
		"stack",
		"component",
		"close",
		"maximise",
		"minimise",
		"open in new window"
	];
	function checkInitialise() {
		if (keys.length > 36) throw new Error("Too many keys in config minifier map");
	}
	ConfigMinifier.checkInitialise = checkInitialise;
	function translateObject(from, minify) {
		const to = {};
		for (const key in from) if (from.hasOwnProperty(key)) {
			let translatedKey;
			if (minify) translatedKey = minifyKey(key);
			else translatedKey = unminifyKey(key);
			const fromValue = from[key];
			to[translatedKey] = translateValue(fromValue, minify);
		}
		return to;
	}
	ConfigMinifier.translateObject = translateObject;
	function translateArray(from, minify) {
		const length = from.length;
		const to = new Array(length);
		for (let i = 0; i < length; i++) {
			const fromValue = from[i];
			to[i] = translateValue(fromValue, minify);
		}
		return to;
	}
	function translateValue(from, minify) {
		if (typeof from === "object") if (from === null) return null;
		else if (Array.isArray(from)) return translateArray(from, minify);
		else return translateObject(from, minify);
		else if (minify) return minifyValue(from);
		else return unminifyValue(from);
	}
	function minifyKey(value) {
		/**
		* If a value actually is a single character, prefix it
		* with ___ to avoid mistaking it for a minification code
		*/
		if (typeof value === "string" && value.length === 1) return "___" + value;
		const index = indexOfKey(value);
		/**
		* value not found in the dictionary, return it unmodified
		*/
		if (index === -1) return value;
		else return index.toString(36);
	}
	function unminifyKey(key) {
		/**
		* value is a single character. Assume that it's a translation
		* and return the original value from the dictionary
		*/
		if (key.length === 1) return keys[parseInt(key, 36)];
		/**
		* value originally was a single character and was prefixed with ___
		* to avoid mistaking it for a translation. Remove the prefix
		* and return the original character
		*/
		if (key.substr(0, 3) === "___") return key[3];
		/**
		* value was not minified
		*/
		return key;
	}
	function minifyValue(value) {
		/**
		* If a value actually is a single character, prefix it
		* with ___ to avoid mistaking it for a minification code
		*/
		if (typeof value === "string" && value.length === 1) return "___" + value;
		const index = indexOfValue(value);
		/**
		* value not found in the dictionary, return it unmodified
		*/
		if (index === -1) return value;
		else return index.toString(36);
	}
	function unminifyValue(value) {
		/**
		* value is a single character. Assume that it's a translation
		* and return the original value from the dictionary
		*/
		if (typeof value === "string" && value.length === 1) return values[parseInt(value, 36)];
		/**
		* value originally was a single character and was prefixed with ___
		* to avoid mistaking it for a translation. Remove the prefix
		* and return the original character
		*/
		if (typeof value === "string" && value.substr(0, 3) === "___") return value[3];
		/**
		* value was not minified
		*/
		return value;
	}
	function indexOfKey(key) {
		for (let i = 0; i < keys.length; i++) if (keys[i] === key) return i;
		return -1;
	}
	function indexOfValue(value) {
		for (let i = 0; i < values.length; i++) if (values[i] === value) return i;
		return -1;
	}
})(ConfigMinifier || (ConfigMinifier = {}));
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/config/resolved-config.js
/** @public */
var ResolvedItemConfig;
(function(ResolvedItemConfig) {
	ResolvedItemConfig.defaults = {
		type: ItemType.ground,
		content: [],
		size: 1,
		sizeUnit: SizeUnitEnum.Fractional,
		minSize: void 0,
		minSizeUnit: SizeUnitEnum.Pixel,
		id: "",
		isClosable: true
	};
	/** Creates a copy of the original ResolvedItemConfig using an alternative content if specified */
	function createCopy(original, content) {
		switch (original.type) {
			case ItemType.ground:
			case ItemType.row:
			case ItemType.column: return ResolvedRowOrColumnItemConfig.createCopy(original, content);
			case ItemType.stack: return ResolvedStackItemConfig.createCopy(original, content);
			case ItemType.component: return ResolvedComponentItemConfig.createCopy(original);
			default: throw new UnreachableCaseError("CICC91354", original.type, "Invalid Config Item type specified");
		}
	}
	ResolvedItemConfig.createCopy = createCopy;
	function createDefault(type) {
		switch (type) {
			case ItemType.ground: throw new AssertError("CICCDR91562");
			case ItemType.row:
			case ItemType.column: return ResolvedRowOrColumnItemConfig.createDefault(type);
			case ItemType.stack: return ResolvedStackItemConfig.createDefault();
			case ItemType.component: return ResolvedComponentItemConfig.createDefault();
			default: throw new UnreachableCaseError("CICCDD91563", type, "Invalid Config Item type specified");
		}
	}
	ResolvedItemConfig.createDefault = createDefault;
	function isComponentItem(itemConfig) {
		return itemConfig.type === ItemType.component;
	}
	ResolvedItemConfig.isComponentItem = isComponentItem;
	function isStackItem(itemConfig) {
		return itemConfig.type === ItemType.stack;
	}
	ResolvedItemConfig.isStackItem = isStackItem;
	/** @internal */
	function isGroundItem(itemConfig) {
		return itemConfig.type === ItemType.ground;
	}
	ResolvedItemConfig.isGroundItem = isGroundItem;
})(ResolvedItemConfig || (ResolvedItemConfig = {}));
/** @public */
var ResolvedHeaderedItemConfig;
(function(ResolvedHeaderedItemConfig) {
	ResolvedHeaderedItemConfig.defaultMaximised = false;
	(function(Header) {
		function createCopy(original, show) {
			if (original === void 0) return;
			else return {
				show: show !== null && show !== void 0 ? show : original.show,
				popout: original.popout,
				close: original.close,
				maximise: original.maximise,
				minimise: original.minimise,
				tabDropdown: original.tabDropdown
			};
		}
		Header.createCopy = createCopy;
	})(ResolvedHeaderedItemConfig.Header || (ResolvedHeaderedItemConfig.Header = {}));
})(ResolvedHeaderedItemConfig || (ResolvedHeaderedItemConfig = {}));
/** @public */
var ResolvedStackItemConfig;
(function(ResolvedStackItemConfig) {
	ResolvedStackItemConfig.defaultActiveItemIndex = 0;
	function createCopy(original, content) {
		return {
			type: original.type,
			content: content !== void 0 ? copyContent(content) : copyContent(original.content),
			size: original.size,
			sizeUnit: original.sizeUnit,
			minSize: original.minSize,
			minSizeUnit: original.minSizeUnit,
			id: original.id,
			maximised: original.maximised,
			isClosable: original.isClosable,
			activeItemIndex: original.activeItemIndex,
			header: ResolvedHeaderedItemConfig.Header.createCopy(original.header)
		};
	}
	ResolvedStackItemConfig.createCopy = createCopy;
	function copyContent(original) {
		const count = original.length;
		const result = new Array(count);
		for (let i = 0; i < count; i++) result[i] = ResolvedItemConfig.createCopy(original[i]);
		return result;
	}
	ResolvedStackItemConfig.copyContent = copyContent;
	function createDefault() {
		return {
			type: ItemType.stack,
			content: [],
			size: ResolvedItemConfig.defaults.size,
			sizeUnit: ResolvedItemConfig.defaults.sizeUnit,
			minSize: ResolvedItemConfig.defaults.minSize,
			minSizeUnit: ResolvedItemConfig.defaults.minSizeUnit,
			id: ResolvedItemConfig.defaults.id,
			maximised: ResolvedHeaderedItemConfig.defaultMaximised,
			isClosable: ResolvedItemConfig.defaults.isClosable,
			activeItemIndex: ResolvedStackItemConfig.defaultActiveItemIndex,
			header: void 0
		};
	}
	ResolvedStackItemConfig.createDefault = createDefault;
})(ResolvedStackItemConfig || (ResolvedStackItemConfig = {}));
/** @public */
var ResolvedComponentItemConfig;
(function(ResolvedComponentItemConfig) {
	ResolvedComponentItemConfig.defaultReorderEnabled = true;
	function resolveComponentTypeName(itemConfig) {
		const componentType = itemConfig.componentType;
		if (typeof componentType === "string") return componentType;
		else return;
	}
	ResolvedComponentItemConfig.resolveComponentTypeName = resolveComponentTypeName;
	function createCopy(original) {
		return {
			type: original.type,
			content: [],
			size: original.size,
			sizeUnit: original.sizeUnit,
			minSize: original.minSize,
			minSizeUnit: original.minSizeUnit,
			id: original.id,
			maximised: original.maximised,
			isClosable: original.isClosable,
			reorderEnabled: original.reorderEnabled,
			title: original.title,
			header: ResolvedHeaderedItemConfig.Header.createCopy(original.header),
			componentType: original.componentType,
			componentState: deepExtendValue(void 0, original.componentState)
		};
	}
	ResolvedComponentItemConfig.createCopy = createCopy;
	function createDefault(componentType = "", componentState, title = "") {
		return {
			type: ItemType.component,
			content: [],
			size: ResolvedItemConfig.defaults.size,
			sizeUnit: ResolvedItemConfig.defaults.sizeUnit,
			minSize: ResolvedItemConfig.defaults.minSize,
			minSizeUnit: ResolvedItemConfig.defaults.minSizeUnit,
			id: ResolvedItemConfig.defaults.id,
			maximised: ResolvedHeaderedItemConfig.defaultMaximised,
			isClosable: ResolvedItemConfig.defaults.isClosable,
			reorderEnabled: ResolvedComponentItemConfig.defaultReorderEnabled,
			title,
			header: void 0,
			componentType,
			componentState
		};
	}
	ResolvedComponentItemConfig.createDefault = createDefault;
	function copyComponentType(componentType) {
		return deepExtendValue({}, componentType);
	}
	ResolvedComponentItemConfig.copyComponentType = copyComponentType;
})(ResolvedComponentItemConfig || (ResolvedComponentItemConfig = {}));
/** @public */
var ResolvedRowOrColumnItemConfig;
(function(ResolvedRowOrColumnItemConfig) {
	function isChildItemConfig(itemConfig) {
		switch (itemConfig.type) {
			case ItemType.row:
			case ItemType.column:
			case ItemType.stack:
			case ItemType.component: return true;
			case ItemType.ground: return false;
			default: throw new UnreachableCaseError("CROCOSPCICIC13687", itemConfig.type);
		}
	}
	ResolvedRowOrColumnItemConfig.isChildItemConfig = isChildItemConfig;
	function createCopy(original, content) {
		return {
			type: original.type,
			content: content !== void 0 ? copyContent(content) : copyContent(original.content),
			size: original.size,
			sizeUnit: original.sizeUnit,
			minSize: original.minSize,
			minSizeUnit: original.minSizeUnit,
			id: original.id,
			isClosable: original.isClosable
		};
	}
	ResolvedRowOrColumnItemConfig.createCopy = createCopy;
	function copyContent(original) {
		const count = original.length;
		const result = new Array(count);
		for (let i = 0; i < count; i++) result[i] = ResolvedItemConfig.createCopy(original[i]);
		return result;
	}
	ResolvedRowOrColumnItemConfig.copyContent = copyContent;
	function createDefault(type) {
		return {
			type,
			content: [],
			size: ResolvedItemConfig.defaults.size,
			sizeUnit: ResolvedItemConfig.defaults.sizeUnit,
			minSize: ResolvedItemConfig.defaults.minSize,
			minSizeUnit: ResolvedItemConfig.defaults.minSizeUnit,
			id: ResolvedItemConfig.defaults.id,
			isClosable: ResolvedItemConfig.defaults.isClosable
		};
	}
	ResolvedRowOrColumnItemConfig.createDefault = createDefault;
})(ResolvedRowOrColumnItemConfig || (ResolvedRowOrColumnItemConfig = {}));
/** @public */
var ResolvedRootItemConfig;
(function(ResolvedRootItemConfig) {
	function createCopy(config) {
		return ResolvedItemConfig.createCopy(config);
	}
	ResolvedRootItemConfig.createCopy = createCopy;
	function isRootItemConfig(itemConfig) {
		switch (itemConfig.type) {
			case ItemType.row:
			case ItemType.column:
			case ItemType.stack:
			case ItemType.component: return true;
			case ItemType.ground: return false;
			default: throw new UnreachableCaseError("CROCOSPCICIC13687", itemConfig.type);
		}
	}
	ResolvedRootItemConfig.isRootItemConfig = isRootItemConfig;
})(ResolvedRootItemConfig || (ResolvedRootItemConfig = {}));
/** @internal */
var ResolvedGroundItemConfig;
(function(ResolvedGroundItemConfig) {
	function create(rootItemConfig) {
		const content = rootItemConfig === void 0 ? [] : [rootItemConfig];
		return {
			type: ItemType.ground,
			content,
			size: 100,
			sizeUnit: SizeUnitEnum.Percent,
			minSize: 0,
			minSizeUnit: SizeUnitEnum.Pixel,
			id: "",
			isClosable: false,
			title: "",
			reorderEnabled: false
		};
	}
	ResolvedGroundItemConfig.create = create;
})(ResolvedGroundItemConfig || (ResolvedGroundItemConfig = {}));
/** @public */
var ResolvedLayoutConfig;
(function(ResolvedLayoutConfig) {
	(function(Settings) {
		Settings.defaults = {
			constrainDragToContainer: true,
			reorderEnabled: true,
			popoutWholeStack: false,
			blockedPopoutsThrowError: true,
			closePopoutsOnUnload: true,
			responsiveMode: ResponsiveMode.none,
			tabOverlapAllowance: 0,
			reorderOnTabMenuClick: true,
			tabControlOffset: 10,
			popInOnClose: false
		};
		function createCopy(original) {
			return {
				constrainDragToContainer: original.constrainDragToContainer,
				reorderEnabled: original.reorderEnabled,
				popoutWholeStack: original.popoutWholeStack,
				blockedPopoutsThrowError: original.blockedPopoutsThrowError,
				closePopoutsOnUnload: original.closePopoutsOnUnload,
				responsiveMode: original.responsiveMode,
				tabOverlapAllowance: original.tabOverlapAllowance,
				reorderOnTabMenuClick: original.reorderOnTabMenuClick,
				tabControlOffset: original.tabControlOffset,
				popInOnClose: original.popInOnClose
			};
		}
		Settings.createCopy = createCopy;
	})(ResolvedLayoutConfig.Settings || (ResolvedLayoutConfig.Settings = {}));
	(function(Dimensions) {
		function createCopy(original) {
			return {
				borderWidth: original.borderWidth,
				borderGrabWidth: original.borderGrabWidth,
				defaultMinItemHeight: original.defaultMinItemHeight,
				defaultMinItemHeightUnit: original.defaultMinItemHeightUnit,
				defaultMinItemWidth: original.defaultMinItemWidth,
				defaultMinItemWidthUnit: original.defaultMinItemWidthUnit,
				headerHeight: original.headerHeight,
				dragProxyWidth: original.dragProxyWidth,
				dragProxyHeight: original.dragProxyHeight
			};
		}
		Dimensions.createCopy = createCopy;
		Dimensions.defaults = {
			borderWidth: 5,
			borderGrabWidth: 5,
			defaultMinItemHeight: 0,
			defaultMinItemHeightUnit: SizeUnitEnum.Pixel,
			defaultMinItemWidth: 10,
			defaultMinItemWidthUnit: SizeUnitEnum.Pixel,
			headerHeight: 20,
			dragProxyWidth: 300,
			dragProxyHeight: 200
		};
	})(ResolvedLayoutConfig.Dimensions || (ResolvedLayoutConfig.Dimensions = {}));
	(function(Header) {
		function createCopy(original) {
			return {
				show: original.show,
				popout: original.popout,
				dock: original.dock,
				close: original.close,
				maximise: original.maximise,
				minimise: original.minimise,
				tabDropdown: original.tabDropdown
			};
		}
		Header.createCopy = createCopy;
		Header.defaults = {
			show: Side.top,
			popout: "open in new window",
			dock: "dock",
			maximise: "maximise",
			minimise: "minimise",
			close: "close",
			tabDropdown: "additional tabs"
		};
	})(ResolvedLayoutConfig.Header || (ResolvedLayoutConfig.Header = {}));
	function isPopout(config) {
		return "parentId" in config;
	}
	ResolvedLayoutConfig.isPopout = isPopout;
	function createDefault() {
		return {
			root: void 0,
			openPopouts: [],
			dimensions: ResolvedLayoutConfig.Dimensions.defaults,
			settings: ResolvedLayoutConfig.Settings.defaults,
			header: ResolvedLayoutConfig.Header.defaults,
			resolved: true
		};
	}
	ResolvedLayoutConfig.createDefault = createDefault;
	function createCopy(config) {
		if (isPopout(config)) return ResolvedPopoutLayoutConfig.createCopy(config);
		else return {
			root: config.root === void 0 ? void 0 : ResolvedRootItemConfig.createCopy(config.root),
			openPopouts: ResolvedLayoutConfig.copyOpenPopouts(config.openPopouts),
			settings: ResolvedLayoutConfig.Settings.createCopy(config.settings),
			dimensions: ResolvedLayoutConfig.Dimensions.createCopy(config.dimensions),
			header: ResolvedLayoutConfig.Header.createCopy(config.header),
			resolved: config.resolved
		};
	}
	ResolvedLayoutConfig.createCopy = createCopy;
	function copyOpenPopouts(original) {
		const count = original.length;
		const result = new Array(count);
		for (let i = 0; i < count; i++) result[i] = ResolvedPopoutLayoutConfig.createCopy(original[i]);
		return result;
	}
	ResolvedLayoutConfig.copyOpenPopouts = copyOpenPopouts;
	/**
	* Takes a GoldenLayout configuration object and
	* replaces its keys and values recursively with
	* one letter counterparts
	*/
	function minifyConfig(layoutConfig) {
		return ConfigMinifier.translateObject(layoutConfig, true);
	}
	ResolvedLayoutConfig.minifyConfig = minifyConfig;
	/**
	* Takes a configuration Object that was previously minified
	* using minifyConfig and returns its original version
	*/
	function unminifyConfig(minifiedConfig) {
		return ConfigMinifier.translateObject(minifiedConfig, false);
	}
	ResolvedLayoutConfig.unminifyConfig = unminifyConfig;
})(ResolvedLayoutConfig || (ResolvedLayoutConfig = {}));
/** @public */
var ResolvedPopoutLayoutConfig;
(function(ResolvedPopoutLayoutConfig) {
	(function(Window) {
		function createCopy(original) {
			return {
				width: original.width,
				height: original.height,
				left: original.left,
				top: original.top
			};
		}
		Window.createCopy = createCopy;
		Window.defaults = {
			width: null,
			height: null,
			left: null,
			top: null
		};
	})(ResolvedPopoutLayoutConfig.Window || (ResolvedPopoutLayoutConfig.Window = {}));
	function createCopy(original) {
		return {
			root: original.root === void 0 ? void 0 : ResolvedRootItemConfig.createCopy(original.root),
			openPopouts: ResolvedLayoutConfig.copyOpenPopouts(original.openPopouts),
			settings: ResolvedLayoutConfig.Settings.createCopy(original.settings),
			dimensions: ResolvedLayoutConfig.Dimensions.createCopy(original.dimensions),
			header: ResolvedLayoutConfig.Header.createCopy(original.header),
			parentId: original.parentId,
			indexInParent: original.indexInParent,
			window: ResolvedPopoutLayoutConfig.Window.createCopy(original.window),
			resolved: original.resolved
		};
	}
	ResolvedPopoutLayoutConfig.createCopy = createCopy;
})(ResolvedPopoutLayoutConfig || (ResolvedPopoutLayoutConfig = {}));
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/config/config.js
/** @public */
var ItemConfig;
(function(ItemConfig) {
	/** @internal */
	function resolve(itemConfig, rowAndColumnChildLegacySizeDefault) {
		switch (itemConfig.type) {
			case ItemType.ground: throw new ConfigurationError("ItemConfig cannot specify type ground", JSON.stringify(itemConfig));
			case ItemType.row:
			case ItemType.column: return RowOrColumnItemConfig.resolve(itemConfig, rowAndColumnChildLegacySizeDefault);
			case ItemType.stack: return StackItemConfig.resolve(itemConfig, rowAndColumnChildLegacySizeDefault);
			case ItemType.component: return ComponentItemConfig.resolve(itemConfig, rowAndColumnChildLegacySizeDefault);
			default: throw new UnreachableCaseError("UCUICR55499", itemConfig.type);
		}
	}
	ItemConfig.resolve = resolve;
	/** @internal */
	function resolveContent(content) {
		if (content === void 0) return [];
		else {
			const count = content.length;
			const result = new Array(count);
			for (let i = 0; i < count; i++) result[i] = ItemConfig.resolve(content[i], false);
			return result;
		}
	}
	ItemConfig.resolveContent = resolveContent;
	/** @internal */
	function resolveId(id) {
		if (id === void 0) return ResolvedItemConfig.defaults.id;
		else if (Array.isArray(id)) if (id.length === 0) return ResolvedItemConfig.defaults.id;
		else return id[0];
		else return id;
	}
	ItemConfig.resolveId = resolveId;
	/** @internal */
	function resolveSize(size, width, height, rowAndColumnChildLegacySizeDefault) {
		if (size !== void 0) return parseSize(size, [SizeUnitEnum.Percent, SizeUnitEnum.Fractional]);
		else if (width !== void 0 || height !== void 0) if (width !== void 0) return {
			size: width,
			sizeUnit: SizeUnitEnum.Percent
		};
		else if (height !== void 0) return {
			size: height,
			sizeUnit: SizeUnitEnum.Percent
		};
		else throw new UnexpectedUndefinedError("CRS33390");
		else if (rowAndColumnChildLegacySizeDefault) return {
			size: 50,
			sizeUnit: SizeUnitEnum.Percent
		};
		else return {
			size: ResolvedItemConfig.defaults.size,
			sizeUnit: ResolvedItemConfig.defaults.sizeUnit
		};
	}
	ItemConfig.resolveSize = resolveSize;
	/** @internal */
	function resolveMinSize(minSize, minWidth, minHeight) {
		if (minSize !== void 0) return parseSize(minSize, [SizeUnitEnum.Pixel]);
		else {
			const minWidthDefined = minWidth !== void 0;
			if (minWidthDefined || minHeight !== void 0) if (minWidthDefined) return {
				size: minWidth,
				sizeUnit: SizeUnitEnum.Pixel
			};
			else return {
				size: minHeight,
				sizeUnit: SizeUnitEnum.Pixel
			};
			else return {
				size: ResolvedItemConfig.defaults.minSize,
				sizeUnit: ResolvedItemConfig.defaults.minSizeUnit
			};
		}
	}
	ItemConfig.resolveMinSize = resolveMinSize;
	/** @internal */
	function calculateSizeWidthHeightSpecificationType(config) {
		if (config.size !== void 0) return 1;
		else if (config.width !== void 0 || config.height !== void 0) return 2;
		else return 0;
	}
	ItemConfig.calculateSizeWidthHeightSpecificationType = calculateSizeWidthHeightSpecificationType;
	function isGround(config) {
		return config.type === ItemType.ground;
	}
	ItemConfig.isGround = isGround;
	function isRow(config) {
		return config.type === ItemType.row;
	}
	ItemConfig.isRow = isRow;
	function isColumn(config) {
		return config.type === ItemType.column;
	}
	ItemConfig.isColumn = isColumn;
	function isStack(config) {
		return config.type === ItemType.stack;
	}
	ItemConfig.isStack = isStack;
	function isComponent(config) {
		return config.type === ItemType.component;
	}
	ItemConfig.isComponent = isComponent;
})(ItemConfig || (ItemConfig = {}));
/** @public */
var HeaderedItemConfig;
(function(HeaderedItemConfig) {
	const legacyMaximisedId = "__glMaximised";
	(function(Header) {
		function resolve(header, hasHeaders) {
			var _a;
			if (header === void 0 && hasHeaders === void 0) return;
			else return {
				show: (_a = header === null || header === void 0 ? void 0 : header.show) !== null && _a !== void 0 ? _a : hasHeaders === void 0 ? void 0 : hasHeaders ? ResolvedLayoutConfig.Header.defaults.show : false,
				popout: header === null || header === void 0 ? void 0 : header.popout,
				maximise: header === null || header === void 0 ? void 0 : header.maximise,
				close: header === null || header === void 0 ? void 0 : header.close,
				minimise: header === null || header === void 0 ? void 0 : header.minimise,
				tabDropdown: header === null || header === void 0 ? void 0 : header.tabDropdown
			};
		}
		Header.resolve = resolve;
	})(HeaderedItemConfig.Header || (HeaderedItemConfig.Header = {}));
	/** @internal */
	function resolveIdAndMaximised(config) {
		let id;
		let legacyId = config.id;
		let legacyMaximised = false;
		if (legacyId === void 0) id = ResolvedItemConfig.defaults.id;
		else if (Array.isArray(legacyId)) {
			const idx = legacyId.findIndex((id) => id === legacyMaximisedId);
			if (idx > 0) {
				legacyMaximised = true;
				legacyId = legacyId.splice(idx, 1);
			}
			if (legacyId.length > 0) id = legacyId[0];
			else id = ResolvedItemConfig.defaults.id;
		} else id = legacyId;
		let maximised;
		if (config.maximised !== void 0) maximised = config.maximised;
		else maximised = legacyMaximised;
		return {
			id,
			maximised
		};
	}
	HeaderedItemConfig.resolveIdAndMaximised = resolveIdAndMaximised;
})(HeaderedItemConfig || (HeaderedItemConfig = {}));
/** @public */
var StackItemConfig;
(function(StackItemConfig) {
	/** @internal */
	function resolve(itemConfig, rowAndColumnChildLegacySizeDefault) {
		var _a, _b;
		const { id, maximised } = HeaderedItemConfig.resolveIdAndMaximised(itemConfig);
		const { size, sizeUnit } = ItemConfig.resolveSize(itemConfig.size, itemConfig.width, itemConfig.height, rowAndColumnChildLegacySizeDefault);
		const { size: minSize, sizeUnit: minSizeUnit } = ItemConfig.resolveMinSize(itemConfig.minSize, itemConfig.minWidth, itemConfig.minHeight);
		return {
			type: ItemType.stack,
			content: resolveContent(itemConfig.content),
			size,
			sizeUnit,
			minSize,
			minSizeUnit,
			id,
			maximised,
			isClosable: (_a = itemConfig.isClosable) !== null && _a !== void 0 ? _a : ResolvedItemConfig.defaults.isClosable,
			activeItemIndex: (_b = itemConfig.activeItemIndex) !== null && _b !== void 0 ? _b : ResolvedStackItemConfig.defaultActiveItemIndex,
			header: HeaderedItemConfig.Header.resolve(itemConfig.header, itemConfig.hasHeaders)
		};
	}
	StackItemConfig.resolve = resolve;
	/** @internal */
	function fromResolved(resolvedConfig) {
		return {
			type: ItemType.stack,
			content: fromResolvedContent(resolvedConfig.content),
			size: formatSize(resolvedConfig.size, resolvedConfig.sizeUnit),
			minSize: formatUndefinableSize(resolvedConfig.minSize, resolvedConfig.minSizeUnit),
			id: resolvedConfig.id,
			maximised: resolvedConfig.maximised,
			isClosable: resolvedConfig.isClosable,
			activeItemIndex: resolvedConfig.activeItemIndex,
			header: ResolvedHeaderedItemConfig.Header.createCopy(resolvedConfig.header)
		};
	}
	StackItemConfig.fromResolved = fromResolved;
	/** @internal */
	function resolveContent(content) {
		if (content === void 0) return [];
		else {
			const count = content.length;
			const result = new Array(count);
			for (let i = 0; i < count; i++) {
				const childItemConfig = content[i];
				const itemConfig = ItemConfig.resolve(childItemConfig, false);
				if (!ResolvedItemConfig.isComponentItem(itemConfig)) throw new AssertError("UCUSICRC91114", JSON.stringify(itemConfig));
				else result[i] = itemConfig;
			}
			return result;
		}
	}
	/** @internal */
	function fromResolvedContent(resolvedContent) {
		const count = resolvedContent.length;
		const result = new Array(count);
		for (let i = 0; i < count; i++) {
			const resolvedContentConfig = resolvedContent[i];
			result[i] = ComponentItemConfig.fromResolved(resolvedContentConfig);
		}
		return result;
	}
})(StackItemConfig || (StackItemConfig = {}));
/** @public */
var ComponentItemConfig;
(function(ComponentItemConfig) {
	/** @internal */
	function resolve(itemConfig, rowAndColumnChildLegacySizeDefault) {
		var _a, _b, _c;
		let componentType = itemConfig.componentType;
		if (componentType === void 0) componentType = itemConfig.componentName;
		if (componentType === void 0) throw new Error("ComponentItemConfig.componentType is undefined");
		else {
			const { id, maximised } = HeaderedItemConfig.resolveIdAndMaximised(itemConfig);
			let title;
			if (itemConfig.title === void 0 || itemConfig.title === "") title = ComponentItemConfig.componentTypeToTitle(componentType);
			else title = itemConfig.title;
			const { size, sizeUnit } = ItemConfig.resolveSize(itemConfig.size, itemConfig.width, itemConfig.height, rowAndColumnChildLegacySizeDefault);
			const { size: minSize, sizeUnit: minSizeUnit } = ItemConfig.resolveMinSize(itemConfig.minSize, itemConfig.minWidth, itemConfig.minHeight);
			return {
				type: itemConfig.type,
				content: [],
				size,
				sizeUnit,
				minSize,
				minSizeUnit,
				id,
				maximised,
				isClosable: (_a = itemConfig.isClosable) !== null && _a !== void 0 ? _a : ResolvedItemConfig.defaults.isClosable,
				reorderEnabled: (_b = itemConfig.reorderEnabled) !== null && _b !== void 0 ? _b : ResolvedComponentItemConfig.defaultReorderEnabled,
				title,
				header: HeaderedItemConfig.Header.resolve(itemConfig.header, itemConfig.hasHeaders),
				componentType,
				componentState: (_c = itemConfig.componentState) !== null && _c !== void 0 ? _c : {}
			};
		}
	}
	ComponentItemConfig.resolve = resolve;
	/** @internal */
	function fromResolved(resolvedConfig) {
		return {
			type: ItemType.component,
			size: formatSize(resolvedConfig.size, resolvedConfig.sizeUnit),
			minSize: formatUndefinableSize(resolvedConfig.minSize, resolvedConfig.minSizeUnit),
			id: resolvedConfig.id,
			maximised: resolvedConfig.maximised,
			isClosable: resolvedConfig.isClosable,
			reorderEnabled: resolvedConfig.reorderEnabled,
			title: resolvedConfig.title,
			header: ResolvedHeaderedItemConfig.Header.createCopy(resolvedConfig.header),
			componentType: resolvedConfig.componentType,
			componentState: deepExtendValue(void 0, resolvedConfig.componentState)
		};
	}
	ComponentItemConfig.fromResolved = fromResolved;
	function componentTypeToTitle(componentType) {
		switch (typeof componentType) {
			case "string": return componentType;
			case "number": return componentType.toString();
			case "boolean": return componentType.toString();
			default: return "";
		}
	}
	ComponentItemConfig.componentTypeToTitle = componentTypeToTitle;
})(ComponentItemConfig || (ComponentItemConfig = {}));
/** @public */
var RowOrColumnItemConfig;
(function(RowOrColumnItemConfig) {
	function isChildItemConfig(itemConfig) {
		switch (itemConfig.type) {
			case ItemType.row:
			case ItemType.column:
			case ItemType.stack:
			case ItemType.component: return true;
			case ItemType.ground: return false;
			default: throw new UnreachableCaseError("UROCOSPCICIC13687", itemConfig.type);
		}
	}
	RowOrColumnItemConfig.isChildItemConfig = isChildItemConfig;
	/** @internal */
	function resolve(itemConfig, rowAndColumnChildLegacySizeDefault) {
		var _a;
		const { size, sizeUnit } = ItemConfig.resolveSize(itemConfig.size, itemConfig.width, itemConfig.height, rowAndColumnChildLegacySizeDefault);
		const { size: minSize, sizeUnit: minSizeUnit } = ItemConfig.resolveMinSize(itemConfig.minSize, itemConfig.minWidth, itemConfig.minHeight);
		return {
			type: itemConfig.type,
			content: RowOrColumnItemConfig.resolveContent(itemConfig.content),
			size,
			sizeUnit,
			minSize,
			minSizeUnit,
			id: ItemConfig.resolveId(itemConfig.id),
			isClosable: (_a = itemConfig.isClosable) !== null && _a !== void 0 ? _a : ResolvedItemConfig.defaults.isClosable
		};
	}
	RowOrColumnItemConfig.resolve = resolve;
	/** @internal */
	function fromResolved(resolvedConfig) {
		return {
			type: resolvedConfig.type,
			content: fromResolvedContent(resolvedConfig.content),
			size: formatSize(resolvedConfig.size, resolvedConfig.sizeUnit),
			minSize: formatUndefinableSize(resolvedConfig.minSize, resolvedConfig.minSizeUnit),
			id: resolvedConfig.id,
			isClosable: resolvedConfig.isClosable
		};
	}
	RowOrColumnItemConfig.fromResolved = fromResolved;
	/** @internal */
	function resolveContent(content) {
		if (content === void 0) return [];
		else {
			const count = content.length;
			const childItemConfigs = new Array(count);
			let widthOrHeightSpecifiedAtLeastOnce = false;
			let sizeSpecifiedAtLeastOnce = false;
			for (let i = 0; i < count; i++) {
				const childItemConfig = content[i];
				if (!RowOrColumnItemConfig.isChildItemConfig(childItemConfig)) throw new ConfigurationError("ItemConfig is not Row, Column or Stack", childItemConfig);
				else {
					if (!sizeSpecifiedAtLeastOnce) {
						const sizeWidthHeightSpecificationType = ItemConfig.calculateSizeWidthHeightSpecificationType(childItemConfig);
						switch (sizeWidthHeightSpecificationType) {
							case 0: break;
							case 2:
								widthOrHeightSpecifiedAtLeastOnce = true;
								break;
							case 1:
								sizeSpecifiedAtLeastOnce = true;
								break;
							default: throw new UnreachableCaseError("ROCICRC87556", sizeWidthHeightSpecificationType);
						}
					}
					childItemConfigs[i] = childItemConfig;
				}
			}
			let legacySizeDefault;
			if (sizeSpecifiedAtLeastOnce) legacySizeDefault = false;
			else if (widthOrHeightSpecifiedAtLeastOnce) legacySizeDefault = true;
			else legacySizeDefault = false;
			const result = new Array(count);
			for (let i = 0; i < count; i++) {
				const childItemConfig = childItemConfigs[i];
				const resolvedChildItemConfig = ItemConfig.resolve(childItemConfig, legacySizeDefault);
				if (!ResolvedRowOrColumnItemConfig.isChildItemConfig(resolvedChildItemConfig)) throw new AssertError("UROCOSPIC99512", JSON.stringify(resolvedChildItemConfig));
				else result[i] = resolvedChildItemConfig;
			}
			return result;
		}
	}
	RowOrColumnItemConfig.resolveContent = resolveContent;
	/** @internal */
	function fromResolvedContent(resolvedContent) {
		const count = resolvedContent.length;
		const result = new Array(count);
		for (let i = 0; i < count; i++) {
			const resolvedContentConfig = resolvedContent[i];
			const type = resolvedContentConfig.type;
			let contentConfig;
			switch (type) {
				case ItemType.row:
				case ItemType.column:
					contentConfig = RowOrColumnItemConfig.fromResolved(resolvedContentConfig);
					break;
				case ItemType.stack:
					contentConfig = StackItemConfig.fromResolved(resolvedContentConfig);
					break;
				case ItemType.component:
					contentConfig = ComponentItemConfig.fromResolved(resolvedContentConfig);
					break;
				default: throw new UnreachableCaseError("ROCICFRC44797", type);
			}
			result[i] = contentConfig;
		}
		return result;
	}
})(RowOrColumnItemConfig || (RowOrColumnItemConfig = {}));
/** @public */
var RootItemConfig;
(function(RootItemConfig) {
	function isRootItemConfig(itemConfig) {
		switch (itemConfig.type) {
			case ItemType.row:
			case ItemType.column:
			case ItemType.stack:
			case ItemType.component: return true;
			case ItemType.ground: return false;
			default: throw new UnreachableCaseError("URICIR23687", itemConfig.type);
		}
	}
	RootItemConfig.isRootItemConfig = isRootItemConfig;
	/** @internal */
	function resolve(itemConfig) {
		if (itemConfig === void 0) return;
		else {
			const result = ItemConfig.resolve(itemConfig, false);
			if (!ResolvedRootItemConfig.isRootItemConfig(result)) throw new ConfigurationError("ItemConfig is not Row, Column or Stack", JSON.stringify(itemConfig));
			else return result;
		}
	}
	RootItemConfig.resolve = resolve;
	/** @internal */
	function fromResolvedOrUndefined(resolvedItemConfig) {
		if (resolvedItemConfig === void 0) return;
		else {
			const type = resolvedItemConfig.type;
			switch (type) {
				case ItemType.row:
				case ItemType.column: return RowOrColumnItemConfig.fromResolved(resolvedItemConfig);
				case ItemType.stack: return StackItemConfig.fromResolved(resolvedItemConfig);
				case ItemType.component: return ComponentItemConfig.fromResolved(resolvedItemConfig);
				default: throw new UnreachableCaseError("RICFROU89921", type);
			}
		}
	}
	RootItemConfig.fromResolvedOrUndefined = fromResolvedOrUndefined;
})(RootItemConfig || (RootItemConfig = {}));
/** Use to specify LayoutConfig with defaults or deserialise a LayoutConfig.
* Deserialisation will handle backwards compatibility.
* Note that LayoutConfig should be used for serialisation (not LayoutConfig)
* @public
*/
var LayoutConfig;
(function(LayoutConfig) {
	(function(Settings) {
		function resolve(settings) {
			var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
			return {
				constrainDragToContainer: (_a = settings === null || settings === void 0 ? void 0 : settings.constrainDragToContainer) !== null && _a !== void 0 ? _a : ResolvedLayoutConfig.Settings.defaults.constrainDragToContainer,
				reorderEnabled: (_b = settings === null || settings === void 0 ? void 0 : settings.reorderEnabled) !== null && _b !== void 0 ? _b : ResolvedLayoutConfig.Settings.defaults.reorderEnabled,
				popoutWholeStack: (_c = settings === null || settings === void 0 ? void 0 : settings.popoutWholeStack) !== null && _c !== void 0 ? _c : ResolvedLayoutConfig.Settings.defaults.popoutWholeStack,
				blockedPopoutsThrowError: (_d = settings === null || settings === void 0 ? void 0 : settings.blockedPopoutsThrowError) !== null && _d !== void 0 ? _d : ResolvedLayoutConfig.Settings.defaults.blockedPopoutsThrowError,
				closePopoutsOnUnload: (_e = settings === null || settings === void 0 ? void 0 : settings.closePopoutsOnUnload) !== null && _e !== void 0 ? _e : ResolvedLayoutConfig.Settings.defaults.closePopoutsOnUnload,
				responsiveMode: (_f = settings === null || settings === void 0 ? void 0 : settings.responsiveMode) !== null && _f !== void 0 ? _f : ResolvedLayoutConfig.Settings.defaults.responsiveMode,
				tabOverlapAllowance: (_g = settings === null || settings === void 0 ? void 0 : settings.tabOverlapAllowance) !== null && _g !== void 0 ? _g : ResolvedLayoutConfig.Settings.defaults.tabOverlapAllowance,
				reorderOnTabMenuClick: (_h = settings === null || settings === void 0 ? void 0 : settings.reorderOnTabMenuClick) !== null && _h !== void 0 ? _h : ResolvedLayoutConfig.Settings.defaults.reorderOnTabMenuClick,
				tabControlOffset: (_j = settings === null || settings === void 0 ? void 0 : settings.tabControlOffset) !== null && _j !== void 0 ? _j : ResolvedLayoutConfig.Settings.defaults.tabControlOffset,
				popInOnClose: (_k = settings === null || settings === void 0 ? void 0 : settings.popInOnClose) !== null && _k !== void 0 ? _k : ResolvedLayoutConfig.Settings.defaults.popInOnClose
			};
		}
		Settings.resolve = resolve;
	})(LayoutConfig.Settings || (LayoutConfig.Settings = {}));
	(function(Dimensions) {
		/** @internal */
		function resolve(dimensions) {
			var _a, _b, _c, _d, _e;
			const { size: defaultMinItemHeight, sizeUnit: defaultMinItemHeightUnit } = Dimensions.resolveDefaultMinItemHeight(dimensions);
			const { size: defaultMinItemWidth, sizeUnit: defaultMinItemWidthUnit } = Dimensions.resolveDefaultMinItemWidth(dimensions);
			return {
				borderWidth: (_a = dimensions === null || dimensions === void 0 ? void 0 : dimensions.borderWidth) !== null && _a !== void 0 ? _a : ResolvedLayoutConfig.Dimensions.defaults.borderWidth,
				borderGrabWidth: (_b = dimensions === null || dimensions === void 0 ? void 0 : dimensions.borderGrabWidth) !== null && _b !== void 0 ? _b : ResolvedLayoutConfig.Dimensions.defaults.borderGrabWidth,
				defaultMinItemHeight,
				defaultMinItemHeightUnit,
				defaultMinItemWidth,
				defaultMinItemWidthUnit,
				headerHeight: (_c = dimensions === null || dimensions === void 0 ? void 0 : dimensions.headerHeight) !== null && _c !== void 0 ? _c : ResolvedLayoutConfig.Dimensions.defaults.headerHeight,
				dragProxyWidth: (_d = dimensions === null || dimensions === void 0 ? void 0 : dimensions.dragProxyWidth) !== null && _d !== void 0 ? _d : ResolvedLayoutConfig.Dimensions.defaults.dragProxyWidth,
				dragProxyHeight: (_e = dimensions === null || dimensions === void 0 ? void 0 : dimensions.dragProxyHeight) !== null && _e !== void 0 ? _e : ResolvedLayoutConfig.Dimensions.defaults.dragProxyHeight
			};
		}
		Dimensions.resolve = resolve;
		/** @internal */
		function fromResolved(resolvedDimensions) {
			return {
				borderWidth: resolvedDimensions.borderWidth,
				borderGrabWidth: resolvedDimensions.borderGrabWidth,
				defaultMinItemHeight: formatSize(resolvedDimensions.defaultMinItemHeight, resolvedDimensions.defaultMinItemHeightUnit),
				defaultMinItemWidth: formatSize(resolvedDimensions.defaultMinItemWidth, resolvedDimensions.defaultMinItemWidthUnit),
				headerHeight: resolvedDimensions.headerHeight,
				dragProxyWidth: resolvedDimensions.dragProxyWidth,
				dragProxyHeight: resolvedDimensions.dragProxyHeight
			};
		}
		Dimensions.fromResolved = fromResolved;
		/** @internal */
		function resolveDefaultMinItemHeight(dimensions) {
			const height = dimensions === null || dimensions === void 0 ? void 0 : dimensions.defaultMinItemHeight;
			if (height === void 0) return {
				size: ResolvedLayoutConfig.Dimensions.defaults.defaultMinItemHeight,
				sizeUnit: ResolvedLayoutConfig.Dimensions.defaults.defaultMinItemHeightUnit
			};
			else return parseSize(height, [SizeUnitEnum.Pixel]);
		}
		Dimensions.resolveDefaultMinItemHeight = resolveDefaultMinItemHeight;
		/** @internal */
		function resolveDefaultMinItemWidth(dimensions) {
			const width = dimensions === null || dimensions === void 0 ? void 0 : dimensions.defaultMinItemWidth;
			if (width === void 0) return {
				size: ResolvedLayoutConfig.Dimensions.defaults.defaultMinItemWidth,
				sizeUnit: ResolvedLayoutConfig.Dimensions.defaults.defaultMinItemWidthUnit
			};
			else return parseSize(width, [SizeUnitEnum.Pixel]);
		}
		Dimensions.resolveDefaultMinItemWidth = resolveDefaultMinItemWidth;
	})(LayoutConfig.Dimensions || (LayoutConfig.Dimensions = {}));
	(function(Header) {
		/** @internal */
		function resolve(header, settings, labels) {
			var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
			let show;
			if ((header === null || header === void 0 ? void 0 : header.show) !== void 0) show = header.show;
			else if (settings !== void 0 && settings.hasHeaders !== void 0) show = settings.hasHeaders ? ResolvedLayoutConfig.Header.defaults.show : false;
			else show = ResolvedLayoutConfig.Header.defaults.show;
			return {
				show,
				popout: (_b = (_a = header === null || header === void 0 ? void 0 : header.popout) !== null && _a !== void 0 ? _a : labels === null || labels === void 0 ? void 0 : labels.popout) !== null && _b !== void 0 ? _b : (settings === null || settings === void 0 ? void 0 : settings.showPopoutIcon) === false ? false : ResolvedLayoutConfig.Header.defaults.popout,
				dock: (_d = (_c = header === null || header === void 0 ? void 0 : header.popin) !== null && _c !== void 0 ? _c : labels === null || labels === void 0 ? void 0 : labels.popin) !== null && _d !== void 0 ? _d : ResolvedLayoutConfig.Header.defaults.dock,
				maximise: (_f = (_e = header === null || header === void 0 ? void 0 : header.maximise) !== null && _e !== void 0 ? _e : labels === null || labels === void 0 ? void 0 : labels.maximise) !== null && _f !== void 0 ? _f : (settings === null || settings === void 0 ? void 0 : settings.showMaximiseIcon) === false ? false : ResolvedLayoutConfig.Header.defaults.maximise,
				close: (_h = (_g = header === null || header === void 0 ? void 0 : header.close) !== null && _g !== void 0 ? _g : labels === null || labels === void 0 ? void 0 : labels.close) !== null && _h !== void 0 ? _h : (settings === null || settings === void 0 ? void 0 : settings.showCloseIcon) === false ? false : ResolvedLayoutConfig.Header.defaults.close,
				minimise: (_k = (_j = header === null || header === void 0 ? void 0 : header.minimise) !== null && _j !== void 0 ? _j : labels === null || labels === void 0 ? void 0 : labels.minimise) !== null && _k !== void 0 ? _k : ResolvedLayoutConfig.Header.defaults.minimise,
				tabDropdown: (_m = (_l = header === null || header === void 0 ? void 0 : header.tabDropdown) !== null && _l !== void 0 ? _l : labels === null || labels === void 0 ? void 0 : labels.tabDropdown) !== null && _m !== void 0 ? _m : ResolvedLayoutConfig.Header.defaults.tabDropdown
			};
		}
		Header.resolve = resolve;
	})(LayoutConfig.Header || (LayoutConfig.Header = {}));
	function isPopout(config) {
		return "parentId" in config || "indexInParent" in config || "window" in config;
	}
	LayoutConfig.isPopout = isPopout;
	/** @internal */
	function resolve(layoutConfig) {
		if (isPopout(layoutConfig)) return PopoutLayoutConfig.resolve(layoutConfig);
		else {
			let root;
			if (layoutConfig.root !== void 0) root = layoutConfig.root;
			else if (layoutConfig.content !== void 0 && layoutConfig.content.length > 0) root = layoutConfig.content[0];
			else root = void 0;
			return {
				resolved: true,
				root: RootItemConfig.resolve(root),
				openPopouts: LayoutConfig.resolveOpenPopouts(layoutConfig.openPopouts),
				dimensions: LayoutConfig.Dimensions.resolve(layoutConfig.dimensions),
				settings: LayoutConfig.Settings.resolve(layoutConfig.settings),
				header: LayoutConfig.Header.resolve(layoutConfig.header, layoutConfig.settings, layoutConfig.labels)
			};
		}
	}
	LayoutConfig.resolve = resolve;
	function fromResolved(config) {
		return {
			root: RootItemConfig.fromResolvedOrUndefined(config.root),
			openPopouts: PopoutLayoutConfig.fromResolvedArray(config.openPopouts),
			settings: ResolvedLayoutConfig.Settings.createCopy(config.settings),
			dimensions: LayoutConfig.Dimensions.fromResolved(config.dimensions),
			header: ResolvedLayoutConfig.Header.createCopy(config.header)
		};
	}
	LayoutConfig.fromResolved = fromResolved;
	function isResolved(configOrResolvedConfig) {
		const config = configOrResolvedConfig;
		return config.resolved !== void 0 && config.resolved === true;
	}
	LayoutConfig.isResolved = isResolved;
	/** @internal */
	function resolveOpenPopouts(popoutConfigs) {
		if (popoutConfigs === void 0) return [];
		else {
			const count = popoutConfigs.length;
			const result = new Array(count);
			for (let i = 0; i < count; i++) result[i] = PopoutLayoutConfig.resolve(popoutConfigs[i]);
			return result;
		}
	}
	LayoutConfig.resolveOpenPopouts = resolveOpenPopouts;
})(LayoutConfig || (LayoutConfig = {}));
/** @public */
var PopoutLayoutConfig;
(function(PopoutLayoutConfig) {
	(function(Window) {
		/** @internal */
		function resolve(window, dimensions) {
			var _a, _b, _c, _d, _e, _f, _g, _h;
			let result;
			const defaults = ResolvedPopoutLayoutConfig.Window.defaults;
			if (window !== void 0) result = {
				width: (_a = window.width) !== null && _a !== void 0 ? _a : defaults.width,
				height: (_b = window.height) !== null && _b !== void 0 ? _b : defaults.height,
				left: (_c = window.left) !== null && _c !== void 0 ? _c : defaults.left,
				top: (_d = window.top) !== null && _d !== void 0 ? _d : defaults.top
			};
			else result = {
				width: (_e = dimensions === null || dimensions === void 0 ? void 0 : dimensions.width) !== null && _e !== void 0 ? _e : defaults.width,
				height: (_f = dimensions === null || dimensions === void 0 ? void 0 : dimensions.height) !== null && _f !== void 0 ? _f : defaults.height,
				left: (_g = dimensions === null || dimensions === void 0 ? void 0 : dimensions.left) !== null && _g !== void 0 ? _g : defaults.left,
				top: (_h = dimensions === null || dimensions === void 0 ? void 0 : dimensions.top) !== null && _h !== void 0 ? _h : defaults.top
			};
			return result;
		}
		Window.resolve = resolve;
		/** @internal */
		function fromResolved(resolvedWindow) {
			return {
				width: resolvedWindow.width === null ? void 0 : resolvedWindow.width,
				height: resolvedWindow.height === null ? void 0 : resolvedWindow.height,
				left: resolvedWindow.left === null ? void 0 : resolvedWindow.left,
				top: resolvedWindow.top === null ? void 0 : resolvedWindow.top
			};
		}
		Window.fromResolved = fromResolved;
	})(PopoutLayoutConfig.Window || (PopoutLayoutConfig.Window = {}));
	/** @internal */
	function resolve(popoutConfig) {
		var _a, _b;
		let root;
		if (popoutConfig.root !== void 0) root = popoutConfig.root;
		else if (popoutConfig.content !== void 0 && popoutConfig.content.length > 0) root = popoutConfig.content[0];
		else root = void 0;
		return {
			root: RootItemConfig.resolve(root),
			openPopouts: LayoutConfig.resolveOpenPopouts(popoutConfig.openPopouts),
			dimensions: LayoutConfig.Dimensions.resolve(popoutConfig.dimensions),
			settings: LayoutConfig.Settings.resolve(popoutConfig.settings),
			header: LayoutConfig.Header.resolve(popoutConfig.header, popoutConfig.settings, popoutConfig.labels),
			parentId: (_a = popoutConfig.parentId) !== null && _a !== void 0 ? _a : null,
			indexInParent: (_b = popoutConfig.indexInParent) !== null && _b !== void 0 ? _b : null,
			window: PopoutLayoutConfig.Window.resolve(popoutConfig.window, popoutConfig.dimensions),
			resolved: true
		};
	}
	PopoutLayoutConfig.resolve = resolve;
	/** @internal */
	function fromResolved(resolvedConfig) {
		return {
			root: RootItemConfig.fromResolvedOrUndefined(resolvedConfig.root),
			openPopouts: fromResolvedArray(resolvedConfig.openPopouts),
			dimensions: LayoutConfig.Dimensions.fromResolved(resolvedConfig.dimensions),
			settings: ResolvedLayoutConfig.Settings.createCopy(resolvedConfig.settings),
			header: ResolvedLayoutConfig.Header.createCopy(resolvedConfig.header),
			parentId: resolvedConfig.parentId,
			indexInParent: resolvedConfig.indexInParent,
			window: PopoutLayoutConfig.Window.fromResolved(resolvedConfig.window)
		};
	}
	PopoutLayoutConfig.fromResolved = fromResolved;
	/** @internal */
	function fromResolvedArray(resolvedArray) {
		const resolvedOpenPopoutCount = resolvedArray.length;
		const result = new Array(resolvedOpenPopoutCount);
		for (let i = 0; i < resolvedOpenPopoutCount; i++) {
			const resolvedOpenPopout = resolvedArray[i];
			result[i] = PopoutLayoutConfig.fromResolved(resolvedOpenPopout);
		}
		return result;
	}
	PopoutLayoutConfig.fromResolvedArray = fromResolvedArray;
})(PopoutLayoutConfig || (PopoutLayoutConfig = {}));
/** @internal */
function parseSize(sizeString, allowableSizeUnits) {
	const { numericPart: digitsPart, firstNonNumericCharPart: firstNonDigitPart } = splitStringAtFirstNonNumericChar(sizeString);
	const size = Number.parseInt(digitsPart, 10);
	if (isNaN(size)) throw new ConfigurationError(`${i18nStrings[7]}: ${sizeString}`);
	else {
		const sizeUnit = SizeUnitEnum.tryParse(firstNonDigitPart);
		if (sizeUnit === void 0) throw new ConfigurationError(`${i18nStrings[8]}: ${sizeString}`);
		else if (!allowableSizeUnits.includes(sizeUnit)) throw new ConfigurationError(`${i18nStrings[9]}: ${sizeString}`);
		else return {
			size,
			sizeUnit
		};
	}
}
/** @internal */
function formatSize(size, sizeUnit) {
	return size.toString(10) + SizeUnitEnum.format(sizeUnit);
}
/** @internal */
function formatUndefinableSize(size, sizeUnit) {
	if (size === void 0) return;
	else return size.toString(10) + SizeUnitEnum.format(sizeUnit);
}
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/utils/event-emitter.js
/**
* A generic and very fast EventEmitter implementation. On top of emitting the actual event it emits an
* {@link (EventEmitter:namespace).ALL_EVENT} event for every event triggered. This allows to hook into it and proxy events forwards
* @public
*/
var EventEmitter = class EventEmitter {
	constructor() {
		/** @internal */
		this._allEventSubscriptions = [];
		/** @internal */
		this._subscriptionsMap = /* @__PURE__ */ new Map();
		/**
		* Alias for off
		*/
		this.unbind = this.removeEventListener;
		/**
		* Alias for emit
		*/
		this.trigger = this.emit;
	}
	tryBubbleEvent(name, args) {}
	/**
	* Emit an event and notify listeners
	*
	* @param eventName - The name of the event
	* @param args - Additional arguments that will be passed to the listener
	*/
	emit(eventName, ...args) {
		let subcriptions = this._subscriptionsMap.get(eventName);
		if (subcriptions !== void 0) {
			subcriptions = subcriptions.slice();
			for (let i = 0; i < subcriptions.length; i++) {
				const subscription = subcriptions[i];
				subscription(...args);
			}
		}
		this.emitAllEvent(eventName, args);
		this.tryBubbleEvent(eventName, args);
	}
	/** @internal */
	emitUnknown(eventName, ...args) {
		let subs = this._subscriptionsMap.get(eventName);
		if (subs !== void 0) {
			subs = subs.slice();
			for (let i = 0; i < subs.length; i++) subs[i](...args);
		}
		this.emitAllEvent(eventName, args);
		this.tryBubbleEvent(eventName, args);
	}
	emitBaseBubblingEvent(eventName) {
		const event = new EventEmitter.BubblingEvent(eventName, this);
		this.emitUnknown(eventName, event);
	}
	/** @internal */
	emitUnknownBubblingEvent(eventName) {
		const event = new EventEmitter.BubblingEvent(eventName, this);
		this.emitUnknown(eventName, event);
	}
	/**
	* Removes a listener for an event.
	* @param eventName - The name of the event
	* @param callback - The previously registered callback method (optional)
	*/
	removeEventListener(eventName, callback) {
		const unknownCallback = callback;
		this.removeUnknownEventListener(eventName, unknownCallback);
	}
	off(eventName, callback) {
		this.removeEventListener(eventName, callback);
	}
	/**
	* Listen for events
	*
	* @param eventName - The name of the event to listen to
	* @param callback - The callback to execute when the event occurs
	*/
	addEventListener(eventName, callback) {
		const unknownCallback = callback;
		this.addUnknownEventListener(eventName, unknownCallback);
	}
	on(eventName, callback) {
		this.addEventListener(eventName, callback);
	}
	/** @internal */
	addUnknownEventListener(eventName, callback) {
		if (eventName === EventEmitter.ALL_EVENT) this._allEventSubscriptions.push(callback);
		else {
			let subscriptions = this._subscriptionsMap.get(eventName);
			if (subscriptions !== void 0) subscriptions.push(callback);
			else {
				subscriptions = [callback];
				this._subscriptionsMap.set(eventName, subscriptions);
			}
		}
	}
	/** @internal */
	removeUnknownEventListener(eventName, callback) {
		if (eventName === EventEmitter.ALL_EVENT) this.removeSubscription(eventName, this._allEventSubscriptions, callback);
		else {
			const subscriptions = this._subscriptionsMap.get(eventName);
			if (subscriptions === void 0) throw new Error("No subscribtions to unsubscribe for event " + eventName);
			else this.removeSubscription(eventName, subscriptions, callback);
		}
	}
	/** @internal */
	removeSubscription(eventName, subscriptions, callback) {
		const idx = subscriptions.indexOf(callback);
		if (idx < 0) throw new Error("Nothing to unbind for " + eventName);
		else subscriptions.splice(idx, 1);
	}
	/** @internal */
	emitAllEvent(eventName, args) {
		const allEventSubscriptionsCount = this._allEventSubscriptions.length;
		if (allEventSubscriptionsCount > 0) {
			const unknownArgs = args.slice();
			unknownArgs.unshift(eventName);
			const allEventSubcriptions = this._allEventSubscriptions.slice();
			for (let i = 0; i < allEventSubscriptionsCount; i++) allEventSubcriptions[i](...unknownArgs);
		}
	}
};
/** @public */
(function(EventEmitter) {
	/**
	* The name of the event that's triggered for every event
	*/
	EventEmitter.ALL_EVENT = "__all";
	EventEmitter.headerClickEventName = "stackHeaderClick";
	EventEmitter.headerTouchStartEventName = "stackHeaderTouchStart";
	class BubblingEvent {
		/** @internal */
		constructor(_name, _target) {
			this._name = _name;
			this._target = _target;
			/** @internal */
			this._isPropagationStopped = false;
		}
		get name() {
			return this._name;
		}
		get target() {
			return this._target;
		}
		/** @deprecated Use {@link (EventEmitter:namespace).(BubblingEvent:class).target} instead */
		get origin() {
			return this._target;
		}
		get isPropagationStopped() {
			return this._isPropagationStopped;
		}
		stopPropagation() {
			this._isPropagationStopped = true;
		}
	}
	EventEmitter.BubblingEvent = BubblingEvent;
	class ClickBubblingEvent extends BubblingEvent {
		/** @internal */
		constructor(name, target, _mouseEvent) {
			super(name, target);
			this._mouseEvent = _mouseEvent;
		}
		get mouseEvent() {
			return this._mouseEvent;
		}
	}
	EventEmitter.ClickBubblingEvent = ClickBubblingEvent;
	class TouchStartBubblingEvent extends BubblingEvent {
		/** @internal */
		constructor(name, target, _touchEvent) {
			super(name, target);
			this._touchEvent = _touchEvent;
		}
		get touchEvent() {
			return this._touchEvent;
		}
	}
	EventEmitter.TouchStartBubblingEvent = TouchStartBubblingEvent;
})(EventEmitter || (EventEmitter = {}));
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/container/component-container.js
/** @public */
var ComponentContainer = class extends EventEmitter {
	/** @internal */
	constructor(_config, _parent, _layoutManager, _element, _updateItemConfigEvent, _showEvent, _hideEvent, _focusEvent, _blurEvent) {
		super();
		this._config = _config;
		this._parent = _parent;
		this._layoutManager = _layoutManager;
		this._element = _element;
		this._updateItemConfigEvent = _updateItemConfigEvent;
		this._showEvent = _showEvent;
		this._hideEvent = _hideEvent;
		this._focusEvent = _focusEvent;
		this._blurEvent = _blurEvent;
		/** @internal */
		this._stackMaximised = false;
		this._width = 0;
		this._height = 0;
		this._visible = true;
		this._isShownWithZeroDimensions = true;
		this._componentType = _config.componentType;
		this._isClosable = _config.isClosable;
		this._initialState = _config.componentState;
		this._state = this._initialState;
		this._boundComponent = this.layoutManager.bindComponent(this, _config);
		this.updateElementPositionPropertyFromBoundComponent();
	}
	get width() {
		return this._width;
	}
	get height() {
		return this._height;
	}
	get parent() {
		return this._parent;
	}
	/** @internal @deprecated use {@link (ComponentContainer:class).componentType} */
	get componentName() {
		return this._componentType;
	}
	get componentType() {
		return this._componentType;
	}
	get virtual() {
		return this._boundComponent.virtual;
	}
	get component() {
		return this._boundComponent.component;
	}
	get tab() {
		return this._tab;
	}
	get title() {
		return this._parent.title;
	}
	get layoutManager() {
		return this._layoutManager;
	}
	get isHidden() {
		return !this._visible;
	}
	get visible() {
		return this._visible;
	}
	get state() {
		return this._state;
	}
	/** Return the initial component state */
	get initialState() {
		return this._initialState;
	}
	/** The inner DOM element where the container's content is intended to live in */
	get element() {
		return this._element;
	}
	/** @internal */
	destroy() {
		this.releaseComponent();
		this.stateRequestEvent = void 0;
		this.emit("destroy");
	}
	/** @deprecated use {@link (ComponentContainer:class).element } */
	getElement() {
		return this._element;
	}
	/**
	* Hides the container's component item (and hence, the container) if not already hidden.
	* Emits hide event prior to hiding the container.
	*/
	hide() {
		this._hideEvent();
	}
	/**
	* Shows the container's component item (and hence, the container) if not visible.
	* Emits show event prior to hiding the container.
	*/
	show() {
		this._showEvent();
	}
	/**
	* Focus this component in Layout.
	*/
	focus(suppressEvent = false) {
		this._focusEvent(suppressEvent);
	}
	/**
	* Remove focus from this component in Layout.
	*/
	blur(suppressEvent = false) {
		this._blurEvent(suppressEvent);
	}
	/**
	* Set the size from within the container. Traverses up
	* the item tree until it finds a row or column element
	* and resizes its items accordingly.
	*
	* If this container isn't a descendant of a row or column
	* it returns false
	* @param width - The new width in pixel
	* @param height - The new height in pixel
	*
	* @returns resizeSuccesful
	*
	* @internal
	*/
	setSize(width, height) {
		let ancestorItem = this._parent;
		if (ancestorItem.isColumn || ancestorItem.isRow || ancestorItem.parent === null) throw new AssertError("ICSSPRC", "ComponentContainer cannot have RowColumn Parent");
		else {
			let ancestorChildItem;
			do {
				ancestorChildItem = ancestorItem;
				ancestorItem = ancestorItem.parent;
			} while (ancestorItem !== null && !ancestorItem.isColumn && !ancestorItem.isRow);
			if (ancestorItem === null) return false;
			else {
				const direction = ancestorItem.isColumn ? "height" : "width";
				const currentSize = this[direction];
				if (currentSize === null) throw new UnexpectedNullError("ICSSCS11194");
				else {
					const percentage = (direction === "height" ? height : width) / (currentSize * (1 / (ancestorChildItem.size / 100))) * 100;
					const delta = (ancestorChildItem.size - percentage) / (ancestorItem.contentItems.length - 1);
					for (let i = 0; i < ancestorItem.contentItems.length; i++) {
						const ancestorItemContentItem = ancestorItem.contentItems[i];
						if (ancestorItemContentItem === ancestorChildItem) ancestorItemContentItem.size = percentage;
						else ancestorItemContentItem.size += delta;
					}
					ancestorItem.updateSize(false);
					return true;
				}
			}
		}
	}
	/**
	* Closes the container if it is closable. Can be called by
	* both the component within at as well as the contentItem containing
	* it. Emits a close event before the container itself is closed.
	*/
	close() {
		if (this._isClosable) {
			this.emit("close");
			this._parent.close();
		}
	}
	/** Replaces component without affecting layout */
	replaceComponent(itemConfig) {
		this.releaseComponent();
		if (!ItemConfig.isComponent(itemConfig)) throw new Error("ReplaceComponent not passed a component ItemConfig");
		else {
			const config = ComponentItemConfig.resolve(itemConfig, false);
			this._initialState = config.componentState;
			this._state = this._initialState;
			this._componentType = config.componentType;
			this._updateItemConfigEvent(config);
			this._boundComponent = this.layoutManager.bindComponent(this, config);
			this.updateElementPositionPropertyFromBoundComponent();
			if (this._boundComponent.virtual) {
				if (this.virtualVisibilityChangeRequiredEvent !== void 0) this.virtualVisibilityChangeRequiredEvent(this, this._visible);
				if (this.virtualRectingRequiredEvent !== void 0) {
					this._layoutManager.fireBeforeVirtualRectingEvent(1);
					try {
						this.virtualRectingRequiredEvent(this, this._width, this._height);
					} finally {
						this._layoutManager.fireAfterVirtualRectingEvent();
					}
				}
				this.setBaseLogicalZIndex();
			}
			this.emit("stateChanged");
		}
	}
	/**
	* Returns the initial component state or the latest passed in setState()
	* @returns state
	* @deprecated Use {@link (ComponentContainer:class).initialState}
	*/
	getState() {
		return this._state;
	}
	/**
	* Merges the provided state into the current one
	* @deprecated Use {@link (ComponentContainer:class).stateRequestEvent}
	*/
	extendState(state) {
		const extendedState = deepExtend(this._state, state);
		this.setState(extendedState);
	}
	/**
	* Sets the component state
	* @deprecated Use {@link (ComponentContainer:class).stateRequestEvent}
	*/
	setState(state) {
		this._state = state;
		this._parent.emitBaseBubblingEvent("stateChanged");
	}
	/**
	* Set's the components title
	*/
	setTitle(title) {
		this._parent.setTitle(title);
	}
	/** @internal */
	setTab(tab) {
		this._tab = tab;
		this.emit("tab", tab);
	}
	/** @internal */
	setVisibility(value) {
		if (this._boundComponent.virtual) {
			if (this.virtualVisibilityChangeRequiredEvent !== void 0) this.virtualVisibilityChangeRequiredEvent(this, value);
		}
		if (value) {
			if (!this._visible) {
				this._visible = true;
				if (this._height === 0 && this._width === 0) this._isShownWithZeroDimensions = true;
				else {
					this._isShownWithZeroDimensions = false;
					this.setSizeToNodeSize(this._width, this._height, true);
					this.emitShow();
				}
			} else if (this._isShownWithZeroDimensions && (this._height !== 0 || this._width !== 0)) {
				this._isShownWithZeroDimensions = false;
				this.setSizeToNodeSize(this._width, this._height, true);
				this.emitShow();
			}
		} else if (this._visible) {
			this._visible = false;
			this._isShownWithZeroDimensions = false;
			this.emitHide();
		}
	}
	setBaseLogicalZIndex() {
		this.setLogicalZIndex(LogicalZIndex.base);
	}
	setLogicalZIndex(logicalZIndex) {
		if (logicalZIndex !== this._logicalZIndex) {
			this._logicalZIndex = logicalZIndex;
			this.notifyVirtualZIndexChangeRequired();
		}
	}
	/**
	* Set the container's size, but considered temporary (for dragging)
	* so don't emit any events.
	* @internal
	*/
	enterDragMode(width, height) {
		this._width = width;
		this._height = height;
		setElementWidth(this._element, width);
		setElementHeight(this._element, height);
		this.setLogicalZIndex(LogicalZIndex.drag);
		this.drag();
	}
	/** @internal */
	exitDragMode() {
		this.setBaseLogicalZIndex();
	}
	/** @internal */
	enterStackMaximised() {
		this._stackMaximised = true;
		this.setLogicalZIndex(LogicalZIndex.stackMaximised);
	}
	/** @internal */
	exitStackMaximised() {
		this.setBaseLogicalZIndex();
		this._stackMaximised = false;
	}
	/** @internal */
	drag() {
		if (this._boundComponent.virtual) {
			if (this.virtualRectingRequiredEvent !== void 0) {
				this._layoutManager.fireBeforeVirtualRectingEvent(1);
				try {
					this.virtualRectingRequiredEvent(this, this._width, this._height);
				} finally {
					this._layoutManager.fireAfterVirtualRectingEvent();
				}
			}
		}
	}
	/**
	* Sets the container's size. Called by the container's component item.
	* To instead set the size programmatically from within the component itself,
	* use the public setSize method
	* @param width - in px
	* @param height - in px
	* @param force - set even if no change
	* @internal
	*/
	setSizeToNodeSize(width, height, force) {
		if (width !== this._width || height !== this._height || force) {
			this._width = width;
			this._height = height;
			setElementWidth(this._element, width);
			setElementHeight(this._element, height);
			if (this._boundComponent.virtual) this.addVirtualSizedContainerToLayoutManager();
			else {
				this.emit("resize");
				this.checkShownFromZeroDimensions();
			}
		}
	}
	/** @internal */
	notifyVirtualRectingRequired() {
		if (this.virtualRectingRequiredEvent !== void 0) {
			this.virtualRectingRequiredEvent(this, this._width, this._height);
			this.emit("resize");
			this.checkShownFromZeroDimensions();
		}
	}
	/** @internal */
	notifyVirtualZIndexChangeRequired() {
		if (this.virtualZIndexChangeRequiredEvent !== void 0) {
			const logicalZIndex = this._logicalZIndex;
			const defaultZIndex = LogicalZIndexToDefaultMap[logicalZIndex];
			this.virtualZIndexChangeRequiredEvent(this, logicalZIndex, defaultZIndex);
		}
	}
	/** @internal */
	updateElementPositionPropertyFromBoundComponent() {
		if (this._boundComponent.virtual) this._element.style.position = "static";
		else this._element.style.position = "";
	}
	/** @internal */
	addVirtualSizedContainerToLayoutManager() {
		this._layoutManager.beginVirtualSizedContainerAdding();
		try {
			this._layoutManager.addVirtualSizedContainer(this);
		} finally {
			this._layoutManager.endVirtualSizedContainerAdding();
		}
	}
	/** @internal */
	checkShownFromZeroDimensions() {
		if (this._isShownWithZeroDimensions && (this._height !== 0 || this._width !== 0)) {
			this._isShownWithZeroDimensions = false;
			this.emitShow();
		}
	}
	/** @internal */
	emitShow() {
		this.emit("shown");
		this.emit("show");
	}
	/** @internal */
	emitHide() {
		this.emit("hide");
	}
	/** @internal */
	releaseComponent() {
		if (this._stackMaximised) this.exitStackMaximised();
		this.emit("beforeComponentRelease", this._boundComponent.component);
		this.layoutManager.unbindComponent(this, this._boundComponent.virtual, this._boundComponent.component);
	}
};
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/controls/browser-popout.js
/**
* Pops a content item out into a new browser window.
* This is achieved by
*
*    - Creating a new configuration with the content item as root element
*    - Serializing and minifying the configuration
*    - Opening the current window's URL with the configuration as a GET parameter
*    - GoldenLayout when opened in the new window will look for the GET parameter
*      and use it instead of the provided configuration
* @public
*/
var BrowserPopout = class extends EventEmitter {
	/**
	* @param _config - GoldenLayout item config
	* @param _initialWindowSize - A map with width, height, top and left
	* @internal
	*/
	constructor(_config, _initialWindowSize, _layoutManager) {
		super();
		this._config = _config;
		this._initialWindowSize = _initialWindowSize;
		this._layoutManager = _layoutManager;
		this._isInitialised = false;
		this._popoutWindow = null;
		this.createWindow();
	}
	toConfig() {
		var _a, _b;
		if (this._isInitialised === false) throw new Error("Can't create config, layout not yet initialised");
		const glInstanceConfig = this.getGlInstance().saveLayout();
		let left;
		let top;
		if (this._popoutWindow === null) {
			left = null;
			top = null;
		} else {
			left = (_a = this._popoutWindow.screenX) !== null && _a !== void 0 ? _a : this._popoutWindow.screenLeft;
			top = (_b = this._popoutWindow.screenY) !== null && _b !== void 0 ? _b : this._popoutWindow.screenTop;
		}
		const window = {
			width: this.getGlInstance().width,
			height: this.getGlInstance().height,
			left,
			top
		};
		return {
			root: glInstanceConfig.root,
			openPopouts: glInstanceConfig.openPopouts,
			settings: glInstanceConfig.settings,
			dimensions: glInstanceConfig.dimensions,
			header: glInstanceConfig.header,
			window,
			parentId: this._config.parentId,
			indexInParent: this._config.indexInParent,
			resolved: true
		};
	}
	getGlInstance() {
		if (this._popoutWindow === null) throw new UnexpectedNullError("BPGGI24693");
		return this._popoutWindow.__glInstance;
	}
	/**
	* Retrieves the native BrowserWindow backing this popout.
	* Might throw an UnexpectedNullError exception when the window is not initialized yet.
	* @public
	*/
	getWindow() {
		if (this._popoutWindow === null) throw new UnexpectedNullError("BPGW087215");
		return this._popoutWindow;
	}
	close() {
		if (this.getGlInstance()) this.getGlInstance().closeWindow();
		else try {
			this.getWindow().close();
		} catch (e) {}
	}
	/**
	* Returns the popped out item to its original position. If the original
	* parent isn't available anymore it falls back to the layout's topmost element
	*/
	popIn() {
		let parentItem;
		let index = this._config.indexInParent;
		if (!this._config.parentId) return;
		const copiedRoot = deepExtend({}, this.getGlInstance().saveLayout()).root;
		if (copiedRoot === void 0) throw new UnexpectedUndefinedError("BPPIR19998");
		const groundItem = this._layoutManager.groundItem;
		if (groundItem === void 0) throw new UnexpectedUndefinedError("BPPIG34972");
		parentItem = groundItem.getItemsByPopInParentId(this._config.parentId)[0];
		if (!parentItem) {
			if (groundItem.contentItems.length > 0) parentItem = groundItem.contentItems[0];
			else parentItem = groundItem;
			index = 0;
		}
		const newContentItem = this._layoutManager.createAndInitContentItem(copiedRoot, parentItem);
		parentItem.addChild(newContentItem, index);
		if (this._layoutManager.layoutConfig.settings.popInOnClose) this._onClose();
		else this.close();
	}
	/**
	* Creates the URL and window parameter
	* and opens a new window
	* @internal
	*/
	createWindow() {
		const url = this.createUrl();
		/**
		* Bogus title to prevent re-usage of existing window with the
		* same title. The actual title will be set by the new window's
		* GoldenLayout instance if it detects that it is in subWindowMode
		*/
		const target = Math.floor(Math.random() * 1e6).toString(36);
		/**
		* The options as used in the window.open string
		*/
		const features = this.serializeWindowFeatures({
			width: this._initialWindowSize.width,
			height: this._initialWindowSize.height,
			innerWidth: this._initialWindowSize.width,
			innerHeight: this._initialWindowSize.height,
			menubar: "no",
			toolbar: "no",
			location: "no",
			personalbar: "no",
			resizable: "yes",
			scrollbars: "no",
			status: "no"
		});
		this._popoutWindow = globalThis.open(url, target, features);
		if (!this._popoutWindow) if (this._layoutManager.layoutConfig.settings.blockedPopoutsThrowError === true) throw new PopoutBlockedError("Popout blocked");
		else return;
		this._popoutWindow.addEventListener("load", () => this.positionWindow(), { passive: true });
		this._popoutWindow.addEventListener("beforeunload", () => {
			if (this._layoutManager.layoutConfig.settings.popInOnClose) this.popIn();
			else this._onClose();
		}, { passive: true });
		/**
		* Polling the childwindow to find out if GoldenLayout has been initialised
		* doesn't seem optimal, but the alternatives - adding a callback to the parent
		* window or raising an event on the window object - both would introduce knowledge
		* about the parent to the child window which we'd rather avoid
		*/
		this._checkReadyInterval = setInterval(() => this.checkReady(), 10);
	}
	/** @internal */
	checkReady() {
		if (this._popoutWindow === null) throw new UnexpectedNullError("BPCR01844");
		else if (this._popoutWindow.__glInstance && this._popoutWindow.__glInstance.isInitialised) {
			this.onInitialised();
			if (this._checkReadyInterval !== void 0) {
				clearInterval(this._checkReadyInterval);
				this._checkReadyInterval = void 0;
			}
		}
	}
	/**
	* Serialises a map of key:values to a window options string
	*
	* @param windowOptions -
	*
	* @returns serialised window options
	* @internal
	*/
	serializeWindowFeatures(windowOptions) {
		const windowOptionsString = [];
		for (const key in windowOptions) windowOptionsString.push(key + "=" + windowOptions[key].toString());
		return windowOptionsString.join(",");
	}
	/**
	* Creates the URL for the new window, including the
	* config GET parameter
	*
	* @returns URL
	* @internal
	*/
	createUrl() {
		const storageKey = "gl-window-config-" + getUniqueId();
		const config = ResolvedLayoutConfig.minifyConfig(this._config);
		try {
			localStorage.setItem(storageKey, JSON.stringify(config));
		} catch (e) {
			throw new Error("Error while writing to localStorage " + getErrorMessage(e));
		}
		const url = new URL(location.href);
		url.searchParams.set("gl-window", storageKey);
		return url.toString();
	}
	/**
	* Move the newly created window roughly to
	* where the component used to be.
	* @internal
	*/
	positionWindow() {
		if (this._popoutWindow === null) throw new Error("BrowserPopout.positionWindow: null popoutWindow");
		else {
			this._popoutWindow.moveTo(this._initialWindowSize.left, this._initialWindowSize.top);
			this._popoutWindow.focus();
		}
	}
	/**
	* Callback when the new window is opened and the GoldenLayout instance
	* within it is initialised
	* @internal
	*/
	onInitialised() {
		this._isInitialised = true;
		this.getGlInstance().on("popIn", () => this.popIn());
		this.emit("initialised");
	}
	/**
	* Invoked 50ms after the window unload event
	* @internal
	*/
	_onClose() {
		setTimeout(() => this.emit("closed"), 50);
	}
};
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/items/content-item.js
/**
* This is the baseclass that all content items inherit from.
* Most methods provide a subset of what the sub-classes do.
*
* It also provides a number of functions for tree traversal
* @public
*/
var ContentItem = class extends EventEmitter {
	/** @internal */
	constructor(layoutManager, config, _parent, _element) {
		super();
		this.layoutManager = layoutManager;
		this._parent = _parent;
		this._element = _element;
		/** @internal */
		this._popInParentIds = [];
		this._type = config.type;
		this._id = config.id;
		this._isInitialised = false;
		this.isGround = false;
		this.isRow = false;
		this.isColumn = false;
		this.isStack = false;
		this.isComponent = false;
		this.size = config.size;
		this.sizeUnit = config.sizeUnit;
		this.minSize = config.minSize;
		this.minSizeUnit = config.minSizeUnit;
		this._isClosable = config.isClosable;
		this._pendingEventPropagations = {};
		this._throttledEvents = ["stateChanged"];
		this._contentItems = this.createContentItems(config.content);
	}
	get type() {
		return this._type;
	}
	get id() {
		return this._id;
	}
	set id(value) {
		this._id = value;
	}
	/** @internal */
	get popInParentIds() {
		return this._popInParentIds;
	}
	get parent() {
		return this._parent;
	}
	get contentItems() {
		return this._contentItems;
	}
	get isClosable() {
		return this._isClosable;
	}
	get element() {
		return this._element;
	}
	get isInitialised() {
		return this._isInitialised;
	}
	static isStack(item) {
		return item.isStack;
	}
	static isComponentItem(item) {
		return item.isComponent;
	}
	static isComponentParentableItem(item) {
		return item.isStack || item.isGround;
	}
	/**
	* Removes a child node (and its children) from the tree
	* @param contentItem - The child item to remove
	* @param keepChild - Whether to destroy the removed item
	*/
	removeChild(contentItem, keepChild = false) {
		const index = this._contentItems.indexOf(contentItem);
		if (index === -1) throw new Error("Can't remove child item. Unknown content item");
		/**
		* Call destroy on the content item.
		* All children are destroyed as well
		*/
		if (!keepChild) this._contentItems[index].destroy();
		/**
		* Remove the content item from this nodes array of children
		*/
		this._contentItems.splice(index, 1);
		/**
		* If this node still contains other content items, adjust their size
		*/
		if (this._contentItems.length > 0) this.updateSize(false);
		else if (!this.isGround && this._isClosable === true) if (this._parent === null) throw new UnexpectedNullError("CIUC00874");
		else this._parent.removeChild(this);
	}
	/**
	* Sets up the tree structure for the newly added child
	* The responsibility for the actual DOM manipulations lies
	* with the concrete item
	*
	* @param contentItem -
	* @param index - If omitted item will be appended
	* @param suspendResize - Used by descendent implementations
	*/
	addChild(contentItem, index, suspendResize) {
		index !== null && index !== void 0 || (index = this._contentItems.length);
		this._contentItems.splice(index, 0, contentItem);
		contentItem.setParent(this);
		if (this._isInitialised === true && contentItem._isInitialised === false) contentItem.init();
		return index;
	}
	/**
	* Replaces oldChild with newChild
	* @param oldChild -
	* @param newChild -
	* @internal
	*/
	replaceChild(oldChild, newChild, destroyOldChild = false) {
		const index = this._contentItems.indexOf(oldChild);
		const parentNode = oldChild._element.parentNode;
		if (index === -1) throw new AssertError("CIRCI23232", "Can't replace child. oldChild is not child of this");
		if (parentNode === null) throw new UnexpectedNullError("CIRCP23232");
		else {
			parentNode.replaceChild(newChild._element, oldChild._element);
			if (destroyOldChild === true) {
				oldChild._parent = null;
				oldChild.destroy();
			}
			this._contentItems[index] = newChild;
			newChild.setParent(this);
			newChild.size = oldChild.size;
			newChild.sizeUnit = oldChild.sizeUnit;
			newChild.minSize = oldChild.minSize;
			newChild.minSizeUnit = oldChild.minSizeUnit;
			if (newChild._parent === null) throw new UnexpectedNullError("CIRCNC45699");
			else {
				if (newChild._parent._isInitialised === true && newChild._isInitialised === false) newChild.init();
				this.updateSize(false);
			}
		}
	}
	/**
	* Convenience method.
	* Shorthand for this.parent.removeChild( this )
	*/
	remove() {
		if (this._parent === null) throw new UnexpectedNullError("CIR11110");
		else this._parent.removeChild(this);
	}
	/**
	* Removes the component from the layout and creates a new
	* browser window with the component and its children inside
	*/
	popout() {
		const parentId = getUniqueId();
		const browserPopout = this.layoutManager.createPopoutFromContentItem(this, void 0, parentId, void 0);
		this.emitBaseBubblingEvent("stateChanged");
		return browserPopout;
	}
	/** @internal */
	calculateConfigContent() {
		const contentItems = this._contentItems;
		const count = contentItems.length;
		const result = new Array(count);
		for (let i = 0; i < count; i++) result[i] = contentItems[i].toConfig();
		return result;
	}
	/** @internal */
	highlightDropZone(x, y, area) {
		const dropTargetIndicator = this.layoutManager.dropTargetIndicator;
		if (dropTargetIndicator === null) throw new UnexpectedNullError("ACIHDZ5593");
		else dropTargetIndicator.highlightArea(area, 1);
	}
	/** @internal */
	onDrop(contentItem, area) {
		this.addChild(contentItem);
	}
	/** @internal */
	show() {
		this.layoutManager.beginSizeInvalidation();
		try {
			setElementDisplayVisibility(this._element, true);
			for (let i = 0; i < this._contentItems.length; i++) this._contentItems[i].show();
		} finally {
			this.layoutManager.endSizeInvalidation();
		}
	}
	/**
	* Destroys this item ands its children
	* @internal
	*/
	destroy() {
		for (let i = 0; i < this._contentItems.length; i++) this._contentItems[i].destroy();
		this._contentItems = [];
		this.emitBaseBubblingEvent("beforeItemDestroyed");
		this._element.remove();
		this.emitBaseBubblingEvent("itemDestroyed");
	}
	/**
	* Returns the area the component currently occupies
	* @internal
	*/
	getElementArea(element) {
		element = element !== null && element !== void 0 ? element : this._element;
		const rect = element.getBoundingClientRect();
		const top = rect.top + document.body.scrollTop;
		const left = rect.left + document.body.scrollLeft;
		const width = rect.width;
		const height = rect.height;
		return {
			x1: left,
			y1: top,
			x2: left + width,
			y2: top + height,
			surface: width * height,
			contentItem: this
		};
	}
	/**
	* The tree of content items is created in two steps: First all content items are instantiated,
	* then init is called recursively from top to bottem. This is the basic init function,
	* it can be used, extended or overwritten by the content items
	*
	* Its behaviour depends on the content item
	* @internal
	*/
	init() {
		this._isInitialised = true;
		this.emitBaseBubblingEvent("itemCreated");
		this.emitUnknownBubblingEvent(this.type + "Created");
	}
	/** @internal */
	setParent(parent) {
		this._parent = parent;
	}
	/** @internal */
	addPopInParentId(id) {
		if (!this.popInParentIds.includes(id)) this.popInParentIds.push(id);
	}
	/** @internal */
	initContentItems() {
		for (let i = 0; i < this._contentItems.length; i++) this._contentItems[i].init();
	}
	/** @internal */
	hide() {
		this.layoutManager.beginSizeInvalidation();
		try {
			setElementDisplayVisibility(this._element, false);
		} finally {
			this.layoutManager.endSizeInvalidation();
		}
	}
	/** @internal */
	updateContentItemsSize(force) {
		for (let i = 0; i < this._contentItems.length; i++) this._contentItems[i].updateSize(force);
	}
	/**
	* creates all content items for this node at initialisation time
	* PLEASE NOTE, please see addChild for adding contentItems at runtime
	* @internal
	*/
	createContentItems(content) {
		const count = content.length;
		const result = new Array(count);
		for (let i = 0; i < content.length; i++) result[i] = this.layoutManager.createContentItem(content[i], this);
		return result;
	}
	/**
	* Called for every event on the item tree. Decides whether the event is a bubbling
	* event and propagates it to its parent
	*
	* @param name - The name of the event
	* @param event -
	* @internal
	*/
	propagateEvent(name, args) {
		if (args.length === 1) {
			const event = args[0];
			if (event instanceof EventEmitter.BubblingEvent && event.isPropagationStopped === false && this._isInitialised === true)
 /**
			* In some cases (e.g. if an element is created from a DragSource) it
			* doesn't have a parent and is not a child of GroundItem. If that's the case
			* propagate the bubbling event from the top level of the substree directly
			* to the layoutManager
			*/
			if (this.isGround === false && this._parent) this._parent.emitUnknown(name, event);
			else this.scheduleEventPropagationToLayoutManager(name, event);
		}
	}
	tryBubbleEvent(name, args) {
		if (args.length === 1) {
			const event = args[0];
			if (event instanceof EventEmitter.BubblingEvent && event.isPropagationStopped === false && this._isInitialised === true)
 /**
			* In some cases (e.g. if an element is created from a DragSource) it
			* doesn't have a parent and is not a child of GroundItem. If that's the case
			* propagate the bubbling event from the top level of the substree directly
			* to the layoutManager
			*/
			if (this.isGround === false && this._parent) this._parent.emitUnknown(name, event);
			else this.scheduleEventPropagationToLayoutManager(name, event);
		}
	}
	/**
	* All raw events bubble up to the Ground element. Some events that
	* are propagated to - and emitted by - the layoutManager however are
	* only string-based, batched and sanitized to make them more usable
	*
	* @param name - The name of the event
	* @internal
	*/
	scheduleEventPropagationToLayoutManager(name, event) {
		if (this._throttledEvents.indexOf(name) === -1) this.layoutManager.emitUnknown(name, event);
		else if (this._pendingEventPropagations[name] !== true) {
			this._pendingEventPropagations[name] = true;
			globalThis.requestAnimationFrame(() => this.propagateEventToLayoutManager(name, event));
		}
	}
	/**
	* Callback for events scheduled by _scheduleEventPropagationToLayoutManager
	*
	* @param name - The name of the event
	* @internal
	*/
	propagateEventToLayoutManager(name, event) {
		this._pendingEventPropagations[name] = false;
		this.layoutManager.emitUnknown(name, event);
	}
};
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/items/component-item.js
/** @public */
var ComponentItem = class extends ContentItem {
	/** @internal */
	constructor(layoutManager, config, _parentItem) {
		super(layoutManager, config, _parentItem, document.createElement("div"));
		this._parentItem = _parentItem;
		/** @internal */
		this._focused = false;
		this.isComponent = true;
		this._reorderEnabled = config.reorderEnabled;
		this.applyUpdatableConfig(config);
		this._initialWantMaximise = config.maximised;
		const containerElement = document.createElement("div");
		containerElement.classList.add("lm_content");
		this.element.appendChild(containerElement);
		this._container = new ComponentContainer(config, this, layoutManager, containerElement, (itemConfig) => this.handleUpdateItemConfigEvent(itemConfig), () => this.show(), () => this.hide(), (suppressEvent) => this.focus(suppressEvent), (suppressEvent) => this.blur(suppressEvent));
	}
	/** @internal @deprecated use {@link (ComponentItem:class).componentType} */
	get componentName() {
		return this._container.componentType;
	}
	get componentType() {
		return this._container.componentType;
	}
	get reorderEnabled() {
		return this._reorderEnabled;
	}
	/** @internal */
	get initialWantMaximise() {
		return this._initialWantMaximise;
	}
	get component() {
		return this._container.component;
	}
	get container() {
		return this._container;
	}
	get parentItem() {
		return this._parentItem;
	}
	get headerConfig() {
		return this._headerConfig;
	}
	get title() {
		return this._title;
	}
	get tab() {
		return this._tab;
	}
	get focused() {
		return this._focused;
	}
	/** @internal */
	destroy() {
		this._container.destroy();
		super.destroy();
	}
	applyUpdatableConfig(config) {
		this.setTitle(config.title);
		this._headerConfig = config.header;
	}
	toConfig() {
		const stateRequestEvent = this._container.stateRequestEvent;
		const state = stateRequestEvent === void 0 ? this._container.state : stateRequestEvent();
		return {
			type: ItemType.component,
			content: [],
			size: this.size,
			sizeUnit: this.sizeUnit,
			minSize: this.minSize,
			minSizeUnit: this.minSizeUnit,
			id: this.id,
			maximised: false,
			isClosable: this.isClosable,
			reorderEnabled: this._reorderEnabled,
			title: this._title,
			header: ResolvedHeaderedItemConfig.Header.createCopy(this._headerConfig),
			componentType: ResolvedComponentItemConfig.copyComponentType(this.componentType),
			componentState: state
		};
	}
	close() {
		if (this.parent === null) throw new UnexpectedNullError("CIC68883");
		else this.parent.removeChild(this, false);
	}
	/** @internal */
	enterDragMode(width, height) {
		setElementWidth(this.element, width);
		setElementHeight(this.element, height);
		this._container.enterDragMode(width, height);
	}
	/** @internal */
	exitDragMode() {
		this._container.exitDragMode();
	}
	/** @internal */
	enterStackMaximised() {
		this._container.enterStackMaximised();
	}
	/** @internal */
	exitStackMaximised() {
		this._container.exitStackMaximised();
	}
	/** @internal */
	drag() {
		this._container.drag();
	}
	/** @internal */
	updateSize(force) {
		this.updateNodeSize(force);
	}
	/** @internal */
	init() {
		this.updateNodeSize(false);
		super.init();
		this._container.emit("open");
		this.initContentItems();
	}
	/**
	* Set this component's title
	*
	* @public
	* @param title -
	*/
	setTitle(title) {
		this._title = title;
		this.emit("titleChanged", title);
		this.emit("stateChanged");
	}
	setTab(tab) {
		this._tab = tab;
		this.emit("tab", tab);
		this._container.setTab(tab);
	}
	/** @internal */
	hide() {
		super.hide();
		this._container.setVisibility(false);
	}
	/** @internal */
	show() {
		super.show();
		this._container.setVisibility(true);
	}
	/**
	* Focuses the item if it is not already focused
	*/
	focus(suppressEvent = false) {
		this.parentItem.setActiveComponentItem(this, true, suppressEvent);
	}
	/** @internal */
	setFocused(suppressEvent) {
		this._focused = true;
		this.tab.setFocused();
		if (!suppressEvent) this.emitBaseBubblingEvent("focus");
	}
	/**
	* Blurs (defocuses) the item if it is focused
	*/
	blur(suppressEvent = false) {
		if (this._focused) this.layoutManager.setFocusedComponentItem(void 0, suppressEvent);
	}
	/** @internal */
	setBlurred(suppressEvent) {
		this._focused = false;
		this.tab.setBlurred();
		if (!suppressEvent) this.emitBaseBubblingEvent("blur");
	}
	/** @internal */
	setParent(parent) {
		this._parentItem = parent;
		super.setParent(parent);
	}
	/** @internal */
	handleUpdateItemConfigEvent(itemConfig) {
		this.applyUpdatableConfig(itemConfig);
	}
	/** @internal */
	updateNodeSize(force) {
		if (this.element.style.display !== "none") {
			const { width, height } = getElementWidthAndHeight(this.element);
			this._container.setSizeToNodeSize(width, height, force);
		}
	}
};
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/items/component-parentable-item.js
var ComponentParentableItem = class extends ContentItem {
	constructor() {
		super(...arguments);
		/** @internal */
		this._focused = false;
	}
	get focused() {
		return this._focused;
	}
	/** @internal */
	setFocusedValue(value) {
		this._focused = value;
	}
};
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/utils/drag-listener.js
/** @internal */
var DragListener = class extends EventEmitter {
	constructor(_eElement, extraAllowableChildTargets) {
		super();
		this._eElement = _eElement;
		this._pointerTracking = false;
		this._pointerDownEventListener = (ev) => this.onPointerDown(ev);
		this._pointerMoveEventListener = (ev) => this.onPointerMove(ev);
		this._pointerUpEventListener = (ev) => this.onPointerUp(ev);
		this._timeout = void 0;
		this._allowableTargets = [_eElement, ...extraAllowableChildTargets];
		this._oDocument = document;
		this._eBody = document.body;
		/**
		* The delay after which to start the drag in milliseconds
		* Do NOT make too short (previous value of 200 was not long enough for my touchpad)
		* Should generally rely on the mouse move to start drag.  Not this delay.
		*/
		this._nDelay = 1800;
		/**
		* The distance the mouse needs to be moved to qualify as a drag
		* Previous comment: works better with delay only
		* ???
		* Probably somehow needs tuning for different devices
		*/
		this._nDistance = 10;
		this._nX = 0;
		this._nY = 0;
		this._nOriginalX = 0;
		this._nOriginalY = 0;
		this._dragging = false;
		this._eElement.addEventListener("pointerdown", this._pointerDownEventListener, { passive: true });
	}
	destroy() {
		this.checkRemovePointerTrackingEventListeners();
		this._eElement.removeEventListener("pointerdown", this._pointerDownEventListener);
	}
	cancelDrag() {
		this.processDragStop(void 0);
	}
	onPointerDown(oEvent) {
		if (this._allowableTargets.includes(oEvent.target) && oEvent.isPrimary) {
			const coordinates = this.getPointerCoordinates(oEvent);
			this.processPointerDown(coordinates);
		}
	}
	processPointerDown(coordinates) {
		this._nOriginalX = coordinates.x;
		this._nOriginalY = coordinates.y;
		this._oDocument.addEventListener("pointermove", this._pointerMoveEventListener);
		this._oDocument.addEventListener("pointerup", this._pointerUpEventListener, { passive: true });
		this._pointerTracking = true;
		this._timeout = setTimeout(() => {
			try {
				this.startDrag();
			} catch (err) {
				console.error(err);
				throw err;
			}
		}, this._nDelay);
	}
	onPointerMove(oEvent) {
		if (this._pointerTracking) {
			this.processDragMove(oEvent);
			oEvent.preventDefault();
		}
	}
	processDragMove(dragEvent) {
		this._nX = dragEvent.pageX - this._nOriginalX;
		this._nY = dragEvent.pageY - this._nOriginalY;
		if (this._dragging === false) {
			if (Math.abs(this._nX) > this._nDistance || Math.abs(this._nY) > this._nDistance) this.startDrag();
		}
		if (this._dragging) this.emit("drag", this._nX, this._nY, dragEvent);
	}
	onPointerUp(oEvent) {
		this.processDragStop(oEvent);
	}
	processDragStop(dragEvent) {
		var _a;
		if (this._timeout !== void 0) {
			clearTimeout(this._timeout);
			this._timeout = void 0;
		}
		this.checkRemovePointerTrackingEventListeners();
		if (this._dragging === true) {
			this._eBody.classList.remove("lm_dragging");
			this._eElement.classList.remove("lm_dragging");
			(_a = this._oDocument.querySelector("iframe")) === null || _a === void 0 || _a.style.setProperty("pointer-events", "");
			this._dragging = false;
			this.emit("dragStop", dragEvent);
		}
	}
	checkRemovePointerTrackingEventListeners() {
		if (this._pointerTracking) {
			this._oDocument.removeEventListener("pointermove", this._pointerMoveEventListener);
			this._oDocument.removeEventListener("pointerup", this._pointerUpEventListener);
			this._pointerTracking = false;
		}
	}
	startDrag() {
		var _a;
		if (this._timeout !== void 0) {
			clearTimeout(this._timeout);
			this._timeout = void 0;
		}
		this._dragging = true;
		this._eBody.classList.add("lm_dragging");
		this._eElement.classList.add("lm_dragging");
		(_a = this._oDocument.querySelector("iframe")) === null || _a === void 0 || _a.style.setProperty("pointer-events", "none");
		this.emit("dragStart", this._nOriginalX, this._nOriginalY);
	}
	getPointerCoordinates(event) {
		return {
			x: event.pageX,
			y: event.pageY
		};
	}
};
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/controls/splitter.js
/** @internal */
var Splitter = class {
	constructor(_isVertical, _size, grabSize) {
		this._isVertical = _isVertical;
		this._size = _size;
		this._grabSize = grabSize < this._size ? this._size : grabSize;
		this._element = document.createElement("div");
		this._element.classList.add("lm_splitter");
		const dragHandleElement = document.createElement("div");
		dragHandleElement.classList.add("lm_drag_handle");
		const handleExcessSize = this._grabSize - this._size;
		const handleExcessPos = handleExcessSize / 2;
		if (this._isVertical) {
			dragHandleElement.style.top = numberToPixels(-handleExcessPos);
			dragHandleElement.style.height = numberToPixels(this._size + handleExcessSize);
			this._element.classList.add("lm_vertical");
			this._element.style.height = numberToPixels(this._size);
		} else {
			dragHandleElement.style.left = numberToPixels(-handleExcessPos);
			dragHandleElement.style.width = numberToPixels(this._size + handleExcessSize);
			this._element.classList.add("lm_horizontal");
			this._element.style.width = numberToPixels(this._size);
		}
		this._element.appendChild(dragHandleElement);
		this._dragListener = new DragListener(this._element, [dragHandleElement]);
	}
	get element() {
		return this._element;
	}
	destroy() {
		this._element.remove();
	}
	on(eventName, callback) {
		this._dragListener.on(eventName, callback);
	}
};
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/items/row-or-column.js
/** @public */
var RowOrColumn = class RowOrColumn extends ContentItem {
	/** @internal */
	constructor(isColumn, layoutManager, config, _rowOrColumnParent) {
		super(layoutManager, config, _rowOrColumnParent, RowOrColumn.createElement(document, isColumn));
		this._rowOrColumnParent = _rowOrColumnParent;
		/** @internal */
		this._splitter = [];
		this.isRow = !isColumn;
		this.isColumn = isColumn;
		this._childElementContainer = this.element;
		this._splitterSize = layoutManager.layoutConfig.dimensions.borderWidth;
		this._splitterGrabSize = layoutManager.layoutConfig.dimensions.borderGrabWidth;
		this._isColumn = isColumn;
		this._dimension = isColumn ? "height" : "width";
		this._splitterPosition = null;
		this._splitterMinPosition = null;
		this._splitterMaxPosition = null;
		switch (config.type) {
			case ItemType.row:
			case ItemType.column:
				this._configType = config.type;
				break;
			default: throw new AssertError("ROCCCT00925");
		}
	}
	newComponent(componentType, componentState, title, index) {
		const itemConfig = {
			type: "component",
			componentType,
			componentState,
			title
		};
		return this.newItem(itemConfig, index);
	}
	addComponent(componentType, componentState, title, index) {
		const itemConfig = {
			type: "component",
			componentType,
			componentState,
			title
		};
		return this.addItem(itemConfig, index);
	}
	newItem(itemConfig, index) {
		index = this.addItem(itemConfig, index);
		const createdItem = this.contentItems[index];
		if (ContentItem.isStack(createdItem) && ItemConfig.isComponent(itemConfig)) return createdItem.contentItems[0];
		else return createdItem;
	}
	addItem(itemConfig, index) {
		this.layoutManager.checkMinimiseMaximisedStack();
		const resolvedItemConfig = ItemConfig.resolve(itemConfig, false);
		const contentItem = this.layoutManager.createAndInitContentItem(resolvedItemConfig, this);
		return this.addChild(contentItem, index, false);
	}
	/**
	* Add a new contentItem to the Row or Column
	*
	* @param contentItem -
	* @param index - The position of the new item within the Row or Column.
	*                If no index is provided the item will be added to the end
	* @param suspendResize - If true the items won't be resized. This will leave the item in
	*                        an inconsistent state and is only intended to be used if multiple
	*                        children need to be added in one go and resize is called afterwards
	*
	* @returns
	*/
	addChild(contentItem, index, suspendResize) {
		if (index === void 0) index = this.contentItems.length;
		if (this.contentItems.length > 0) {
			const splitterElement = this.createSplitter(Math.max(0, index - 1)).element;
			if (index > 0) {
				this.contentItems[index - 1].element.insertAdjacentElement("afterend", splitterElement);
				splitterElement.insertAdjacentElement("afterend", contentItem.element);
			} else {
				this.contentItems[0].element.insertAdjacentElement("beforebegin", splitterElement);
				splitterElement.insertAdjacentElement("beforebegin", contentItem.element);
			}
		} else this._childElementContainer.appendChild(contentItem.element);
		super.addChild(contentItem, index);
		const newItemSize = 1 / this.contentItems.length * 100;
		if (suspendResize === true) {
			this.emitBaseBubblingEvent("stateChanged");
			return index;
		}
		for (let i = 0; i < this.contentItems.length; i++) {
			const indexedContentItem = this.contentItems[i];
			if (indexedContentItem === contentItem) contentItem.size = newItemSize;
			else indexedContentItem.size = indexedContentItem.size *= (100 - newItemSize) / 100;
		}
		this.updateSize(false);
		this.emitBaseBubblingEvent("stateChanged");
		return index;
	}
	/**
	* Removes a child of this element
	*
	* @param contentItem -
	* @param keepChild - If true the child will be removed, but not destroyed
	*
	*/
	removeChild(contentItem, keepChild) {
		const index = this.contentItems.indexOf(contentItem);
		const splitterIndex = Math.max(index - 1, 0);
		if (index === -1) throw new Error("Can't remove child. ContentItem is not child of this Row or Column");
		/**
		* Remove the splitter before the item or after if the item happens
		* to be the first in the row/column
		*/
		if (this._splitter[splitterIndex]) {
			this._splitter[splitterIndex].destroy();
			this._splitter.splice(splitterIndex, 1);
		}
		super.removeChild(contentItem, keepChild);
		if (this.contentItems.length === 1 && this.isClosable === true) {
			const childItem = this.contentItems[0];
			this.contentItems.length = 0;
			this._rowOrColumnParent.replaceChild(this, childItem, true);
		} else {
			this.updateSize(false);
			this.emitBaseBubblingEvent("stateChanged");
		}
	}
	/**
	* Replaces a child of this Row or Column with another contentItem
	*/
	replaceChild(oldChild, newChild) {
		const size = oldChild.size;
		super.replaceChild(oldChild, newChild);
		newChild.size = size;
		this.updateSize(false);
		this.emitBaseBubblingEvent("stateChanged");
	}
	/**
	* Called whenever the dimensions of this item or one of its parents change
	*/
	updateSize(force) {
		this.layoutManager.beginVirtualSizedContainerAdding();
		try {
			this.updateNodeSize();
			this.updateContentItemsSize(force);
		} finally {
			this.layoutManager.endVirtualSizedContainerAdding();
		}
	}
	/**
	* Invoked recursively by the layout manager. ContentItem.init appends
	* the contentItem's DOM elements to the container, RowOrColumn init adds splitters
	* in between them
	* @internal
	*/
	init() {
		if (this.isInitialised === true) return;
		this.updateNodeSize();
		for (let i = 0; i < this.contentItems.length; i++) this._childElementContainer.appendChild(this.contentItems[i].element);
		super.init();
		for (let i = 0; i < this.contentItems.length - 1; i++) this.contentItems[i].element.insertAdjacentElement("afterend", this.createSplitter(i).element);
		this.initContentItems();
	}
	toConfig() {
		return {
			type: this.type,
			content: this.calculateConfigContent(),
			size: this.size,
			sizeUnit: this.sizeUnit,
			minSize: this.minSize,
			minSizeUnit: this.minSizeUnit,
			id: this.id,
			isClosable: this.isClosable
		};
	}
	/** @internal */
	setParent(parent) {
		this._rowOrColumnParent = parent;
		super.setParent(parent);
	}
	/** @internal */
	updateNodeSize() {
		if (this.contentItems.length > 0) {
			this.calculateRelativeSizes();
			this.setAbsoluteSizes();
		}
		this.emitBaseBubblingEvent("stateChanged");
		this.emit("resize");
	}
	/**
	* Turns the relative sizes calculated by calculateRelativeSizes into
	* absolute pixel values and applies them to the children's DOM elements
	*
	* Assigns additional pixels to counteract Math.floor
	* @internal
	*/
	setAbsoluteSizes() {
		const absoluteSizes = this.calculateAbsoluteSizes();
		for (let i = 0; i < this.contentItems.length; i++) {
			if (absoluteSizes.additionalPixel - i > 0) absoluteSizes.itemSizes[i]++;
			if (this._isColumn) {
				setElementWidth(this.contentItems[i].element, absoluteSizes.crossAxisSize);
				setElementHeight(this.contentItems[i].element, absoluteSizes.itemSizes[i]);
			} else {
				setElementWidth(this.contentItems[i].element, absoluteSizes.itemSizes[i]);
				setElementHeight(this.contentItems[i].element, absoluteSizes.crossAxisSize);
			}
		}
	}
	/**
	* Calculates the absolute sizes of all of the children of this Item.
	* @returns Set with absolute sizes and additional pixels.
	* @internal
	*/
	calculateAbsoluteSizes() {
		const totalSplitterSize = (this.contentItems.length - 1) * this._splitterSize;
		const { width: elementWidth, height: elementHeight } = getElementWidthAndHeight(this.element);
		let totalSize;
		let crossAxisSize;
		if (this._isColumn) {
			totalSize = elementHeight - totalSplitterSize;
			crossAxisSize = elementWidth;
		} else {
			totalSize = elementWidth - totalSplitterSize;
			crossAxisSize = elementHeight;
		}
		let totalAssigned = 0;
		const itemSizes = [];
		for (let i = 0; i < this.contentItems.length; i++) {
			const contentItem = this.contentItems[i];
			let itemSize;
			if (contentItem.sizeUnit === SizeUnitEnum.Percent) itemSize = Math.floor(totalSize * (contentItem.size / 100));
			else throw new AssertError("ROCCAS6692");
			totalAssigned += itemSize;
			itemSizes.push(itemSize);
		}
		return {
			itemSizes,
			additionalPixel: Math.floor(totalSize - totalAssigned),
			totalSize,
			crossAxisSize
		};
	}
	/**
	* Calculates the relative sizes of all children of this Item. The logic
	* is as follows:
	*
	* - Add up the total size of all items that have a configured size
	*
	* - If the total == 100 (check for floating point errors)
	*        Excellent, job done
	*
	* - If the total is \> 100,
	*        set the size of items without set dimensions to 1/3 and add this to the total
	*        set the size off all items so that the total is hundred relative to their original size
	*
	* - If the total is \< 100
	*        If there are items without set dimensions, distribute the remainder to 100 evenly between them
	*        If there are no items without set dimensions, increase all items sizes relative to
	*        their original size so that they add up to 100
	*
	* @internal
	*/
	calculateRelativeSizes() {
		let total = 0;
		const itemsWithFractionalSize = [];
		let totalFractionalSize = 0;
		for (let i = 0; i < this.contentItems.length; i++) {
			const contentItem = this.contentItems[i];
			switch (contentItem.sizeUnit) {
				case SizeUnitEnum.Percent:
					total += contentItem.size;
					break;
				case SizeUnitEnum.Fractional:
					itemsWithFractionalSize.push(contentItem);
					totalFractionalSize += contentItem.size;
					break;
				default: throw new AssertError("ROCCRS49110", JSON.stringify(contentItem));
			}
		}
		/**
		* Everything adds up to hundred, all good :-)
		*/
		if (Math.round(total) === 100) {
			this.respectMinItemSize();
			return;
		} else if (Math.round(total) < 100 && itemsWithFractionalSize.length > 0) {
			const fractionalAllocatedSize = 100 - total;
			for (let i = 0; i < itemsWithFractionalSize.length; i++) {
				const contentItem = itemsWithFractionalSize[i];
				contentItem.size = fractionalAllocatedSize * (contentItem.size / totalFractionalSize);
				contentItem.sizeUnit = SizeUnitEnum.Percent;
			}
			this.respectMinItemSize();
			return;
		} else {
			/**
			* If the total is > 100, but there are also items with a fractional size, assign another 50%
			* to the fractional items
			*
			* This will be reset in the next step
			*/
			if (Math.round(total) > 100 && itemsWithFractionalSize.length > 0) {
				for (let i = 0; i < itemsWithFractionalSize.length; i++) {
					const contentItem = itemsWithFractionalSize[i];
					contentItem.size = 50 * (contentItem.size / totalFractionalSize);
					contentItem.sizeUnit = SizeUnitEnum.Percent;
				}
				total += 50;
			}
			/**
			* Set every items size relative to 100 relative to its size to total
			*/
			for (let i = 0; i < this.contentItems.length; i++) {
				const contentItem = this.contentItems[i];
				contentItem.size = contentItem.size / total * 100;
			}
			this.respectMinItemSize();
		}
	}
	/**
	* Adjusts the column widths to respect the dimensions minItemWidth if set.
	* @internal
	*/
	respectMinItemSize() {
		const minItemSize = this.calculateContentItemMinSize(this);
		if (minItemSize <= 0 || this.contentItems.length <= 1) return;
		else {
			let totalOverMin = 0;
			let totalUnderMin = 0;
			const entriesOverMin = [];
			const allEntries = [];
			const absoluteSizes = this.calculateAbsoluteSizes();
			/**
			* Figure out how much we are under the min item size total and how much room we have to use.
			*/
			for (let i = 0; i < absoluteSizes.itemSizes.length; i++) {
				const itemSize = absoluteSizes.itemSizes[i];
				let entry;
				if (itemSize < minItemSize) {
					totalUnderMin += minItemSize - itemSize;
					entry = { size: minItemSize };
				} else {
					totalOverMin += itemSize - minItemSize;
					entry = { size: itemSize };
					entriesOverMin.push(entry);
				}
				allEntries.push(entry);
			}
			/**
			* If there is nothing under min, or there is not enough over to make up the difference, do nothing.
			*/
			if (totalUnderMin === 0 || totalUnderMin > totalOverMin) return;
			else {
				/**
				* Evenly reduce all columns that are over the min item width to make up the difference.
				*/
				const reducePercent = totalUnderMin / totalOverMin;
				let remainingSize = totalUnderMin;
				for (let i = 0; i < entriesOverMin.length; i++) {
					const entry = entriesOverMin[i];
					const reducedSize = Math.round((entry.size - minItemSize) * reducePercent);
					remainingSize -= reducedSize;
					entry.size -= reducedSize;
				}
				/**
				* Take anything remaining from the last item.
				*/
				if (remainingSize !== 0) allEntries[allEntries.length - 1].size -= remainingSize;
				/**
				* Set every items size relative to 100 relative to its size to total
				*/
				for (let i = 0; i < this.contentItems.length; i++) {
					const contentItem = this.contentItems[i];
					contentItem.size = allEntries[i].size / absoluteSizes.totalSize * 100;
				}
			}
		}
	}
	/**
	* Instantiates a new Splitter, binds events to it and adds
	* it to the array of splitters at the position specified as the index argument
	*
	* What it doesn't do though is append the splitter to the DOM
	*
	* @param index - The position of the splitter
	*
	* @returns
	* @internal
	*/
	createSplitter(index) {
		const splitter = new Splitter(this._isColumn, this._splitterSize, this._splitterGrabSize);
		splitter.on("drag", (offsetX, offsetY) => this.onSplitterDrag(splitter, offsetX, offsetY));
		splitter.on("dragStop", () => this.onSplitterDragStop(splitter));
		splitter.on("dragStart", () => this.onSplitterDragStart(splitter));
		this._splitter.splice(index, 0, splitter);
		return splitter;
	}
	/**
	* Locates the instance of Splitter in the array of
	* registered splitters and returns a map containing the contentItem
	* before and after the splitters, both of which are affected if the
	* splitter is moved
	*
	* @returns A map of contentItems that the splitter affects
	* @internal
	*/
	getSplitItems(splitter) {
		const index = this._splitter.indexOf(splitter);
		return {
			before: this.contentItems[index],
			after: this.contentItems[index + 1]
		};
	}
	calculateContentItemMinSize(contentItem) {
		const minSize = contentItem.minSize;
		if (minSize !== void 0) if (contentItem.minSizeUnit === SizeUnitEnum.Pixel) return minSize;
		else throw new AssertError("ROCGMD98831", JSON.stringify(contentItem));
		else {
			const dimensions = this.layoutManager.layoutConfig.dimensions;
			return this._isColumn ? dimensions.defaultMinItemHeight : dimensions.defaultMinItemWidth;
		}
	}
	/**
	* Gets the minimum dimensions for the given item configuration array
	* @internal
	*/
	calculateContentItemsTotalMinSize(contentItems) {
		let totalMinSize = 0;
		for (const contentItem of contentItems) totalMinSize += this.calculateContentItemMinSize(contentItem);
		return totalMinSize;
	}
	/**
	* Invoked when a splitter's dragListener fires dragStart. Calculates the splitters
	* movement area once (so that it doesn't need calculating on every mousemove event)
	* @internal
	*/
	onSplitterDragStart(splitter) {
		const items = this.getSplitItems(splitter);
		const beforeWidth = pixelsToNumber(items.before.element.style[this._dimension]);
		const afterSize = pixelsToNumber(items.after.element.style[this._dimension]);
		const beforeMinSize = this.calculateContentItemsTotalMinSize(items.before.contentItems);
		const afterMinSize = this.calculateContentItemsTotalMinSize(items.after.contentItems);
		this._splitterPosition = 0;
		this._splitterMinPosition = -1 * (beforeWidth - beforeMinSize);
		this._splitterMaxPosition = afterSize - afterMinSize;
	}
	/**
	* Invoked when a splitter's DragListener fires drag. Updates the splitter's DOM position,
	* but not the sizes of the elements the splitter controls in order to minimize resize events
	*
	* @param splitter -
	* @param offsetX - Relative pixel values to the splitter's original position. Can be negative
	* @param offsetY - Relative pixel values to the splitter's original position. Can be negative
	* @internal
	*/
	onSplitterDrag(splitter, offsetX, offsetY) {
		let offset = this._isColumn ? offsetY : offsetX;
		if (this._splitterMinPosition === null || this._splitterMaxPosition === null) throw new UnexpectedNullError("ROCOSD59226");
		offset = Math.max(offset, this._splitterMinPosition);
		offset = Math.min(offset, this._splitterMaxPosition);
		this._splitterPosition = offset;
		const offsetPixels = numberToPixels(offset);
		if (this._isColumn) splitter.element.style.top = offsetPixels;
		else splitter.element.style.left = offsetPixels;
	}
	/**
	* Invoked when a splitter's DragListener fires dragStop. Resets the splitters DOM position,
	* and applies the new sizes to the elements before and after the splitter and their children
	* on the next animation frame
	* @internal
	*/
	onSplitterDragStop(splitter) {
		if (this._splitterPosition === null) throw new UnexpectedNullError("ROCOSDS66932");
		else {
			const items = this.getSplitItems(splitter);
			const sizeBefore = pixelsToNumber(items.before.element.style[this._dimension]);
			const sizeAfter = pixelsToNumber(items.after.element.style[this._dimension]);
			const splitterPositionInRange = (this._splitterPosition + sizeBefore) / (sizeBefore + sizeAfter);
			const totalRelativeSize = items.before.size + items.after.size;
			items.before.size = splitterPositionInRange * totalRelativeSize;
			items.after.size = (1 - splitterPositionInRange) * totalRelativeSize;
			splitter.element.style.top = numberToPixels(0);
			splitter.element.style.left = numberToPixels(0);
			globalThis.requestAnimationFrame(() => this.updateSize(false));
		}
	}
};
/** @public */
(function(RowOrColumn) {
	/** @internal */
	function getElementDimensionSize(element, dimension) {
		if (dimension === "width") return getElementWidth(element);
		else return getElementHeight(element);
	}
	RowOrColumn.getElementDimensionSize = getElementDimensionSize;
	/** @internal */
	function setElementDimensionSize(element, dimension, value) {
		if (dimension === "width") return setElementWidth(element, value);
		else return setElementHeight(element, value);
	}
	RowOrColumn.setElementDimensionSize = setElementDimensionSize;
	/** @internal */
	function createElement(document, isColumn) {
		const element = document.createElement("div");
		element.classList.add("lm_item");
		if (isColumn) element.classList.add("lm_column");
		else element.classList.add("lm_row");
		return element;
	}
	RowOrColumn.createElement = createElement;
})(RowOrColumn || (RowOrColumn = {}));
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/items/ground-item.js
/**
* GroundItem is the ContentItem whose one child is the root ContentItem (Root is planted in Ground).
* (Previously it was called root however this was incorrect as its child is the root item)
* There is only one instance of GroundItem and it is automatically created by the Layout Manager
* @internal
*/
var GroundItem = class GroundItem extends ComponentParentableItem {
	constructor(layoutManager, rootItemConfig, containerElement) {
		super(layoutManager, ResolvedGroundItemConfig.create(rootItemConfig), null, GroundItem.createElement(document));
		this.isGround = true;
		this._childElementContainer = this.element;
		this._containerElement = containerElement;
		let before = null;
		while (true) {
			const prev = before ? before.previousSibling : this._containerElement.lastChild;
			if (prev instanceof Element && prev.classList.contains("lm_content")) before = prev;
			else break;
		}
		this._containerElement.insertBefore(this.element, before);
	}
	init() {
		if (this.isInitialised === true) return;
		this.updateNodeSize();
		for (let i = 0; i < this.contentItems.length; i++) this._childElementContainer.appendChild(this.contentItems[i].element);
		super.init();
		this.initContentItems();
	}
	/**
	* Loads a new Layout
	* Internal only.  To load a new layout with API, use {@link (LayoutManager:class).loadLayout}
	*/
	loadRoot(rootItemConfig) {
		this.clearRoot();
		if (rootItemConfig !== void 0) {
			const rootContentItem = this.layoutManager.createAndInitContentItem(rootItemConfig, this);
			this.addChild(rootContentItem, 0);
		}
	}
	clearRoot() {
		const contentItems = this.contentItems;
		switch (contentItems.length) {
			case 0: return;
			case 1:
				contentItems[0].remove();
				return;
			default: throw new AssertError("GILR07721");
		}
	}
	/**
	* Adds a ContentItem child to root ContentItem.
	* Internal only.  To load a add with API, use {@link (LayoutManager:class).addItem}
	* @returns -1 if added as root otherwise index in root ContentItem's content
	*/
	addItem(itemConfig, index) {
		this.layoutManager.checkMinimiseMaximisedStack();
		const resolvedItemConfig = ItemConfig.resolve(itemConfig, false);
		let parent;
		if (this.contentItems.length > 0) parent = this.contentItems[0];
		else parent = this;
		if (parent.isComponent) throw new Error("Cannot add item as child to ComponentItem");
		else {
			const contentItem = this.layoutManager.createAndInitContentItem(resolvedItemConfig, parent);
			index = parent.addChild(contentItem, index);
			return parent === this ? -1 : index;
		}
	}
	loadComponentAsRoot(itemConfig) {
		this.clearRoot();
		const resolvedItemConfig = ItemConfig.resolve(itemConfig, false);
		if (resolvedItemConfig.maximised) throw new Error("Root Component cannot be maximised");
		else {
			const rootContentItem = new ComponentItem(this.layoutManager, resolvedItemConfig, this);
			rootContentItem.init();
			this.addChild(rootContentItem, 0);
		}
	}
	/**
	* Adds a Root ContentItem.
	* Internal only.  To replace Root ContentItem with API, use {@link (LayoutManager:class).loadLayout}
	*/
	addChild(contentItem, index) {
		if (this.contentItems.length > 0) throw new Error("Ground node can only have a single child");
		else {
			this._childElementContainer.appendChild(contentItem.element);
			index = super.addChild(contentItem, index);
			this.updateSize(false);
			this.emitBaseBubblingEvent("stateChanged");
			return index;
		}
	}
	/** @internal */
	calculateConfigContent() {
		const contentItems = this.contentItems;
		const count = contentItems.length;
		const result = new Array(count);
		for (let i = 0; i < count; i++) {
			const itemConfig = contentItems[i].toConfig();
			if (ResolvedRootItemConfig.isRootItemConfig(itemConfig)) result[i] = itemConfig;
			else throw new AssertError("RCCC66832");
		}
		return result;
	}
	/** @internal */
	setSize(width, height) {
		if (width === void 0 || height === void 0) this.updateSize(false);
		else {
			setElementWidth(this.element, width);
			setElementHeight(this.element, height);
			if (this.contentItems.length > 0) {
				setElementWidth(this.contentItems[0].element, width);
				setElementHeight(this.contentItems[0].element, height);
			}
			this.updateContentItemsSize(false);
		}
	}
	/**
	* Adds a Root ContentItem.
	* Internal only.  To replace Root ContentItem with API, use {@link (LayoutManager:class).updateRootSize}
	*/
	updateSize(force) {
		this.layoutManager.beginVirtualSizedContainerAdding();
		try {
			this.updateNodeSize();
			this.updateContentItemsSize(force);
		} finally {
			this.layoutManager.endVirtualSizedContainerAdding();
		}
	}
	createSideAreas() {
		const areaSize = 50;
		const oppositeSides = GroundItem.Area.oppositeSides;
		const result = new Array(Object.keys(oppositeSides).length);
		let idx = 0;
		for (const key in oppositeSides) {
			const side = key;
			const area = this.getElementArea();
			if (area === null) throw new UnexpectedNullError("RCSA77553");
			else {
				area.side = side;
				if (oppositeSides[side][1] === "2") area[side] = area[oppositeSides[side]] - areaSize;
				else area[side] = area[oppositeSides[side]] + areaSize;
				area.surface = (area.x2 - area.x1) * (area.y2 - area.y1);
				result[idx++] = area;
			}
		}
		return result;
	}
	highlightDropZone(x, y, area) {
		this.layoutManager.tabDropPlaceholder.remove();
		super.highlightDropZone(x, y, area);
	}
	onDrop(contentItem, area) {
		if (contentItem.isComponent) {
			const itemConfig = ResolvedStackItemConfig.createDefault();
			const component = contentItem;
			itemConfig.header = ResolvedHeaderedItemConfig.Header.createCopy(component.headerConfig);
			const stack = this.layoutManager.createAndInitContentItem(itemConfig, this);
			stack.addChild(contentItem);
			contentItem = stack;
		}
		if (this.contentItems.length === 0) this.addChild(contentItem);
		else {
			if (contentItem.type === ItemType.row || contentItem.type === ItemType.column) {
				const itemConfig = ResolvedStackItemConfig.createDefault();
				const stack = this.layoutManager.createContentItem(itemConfig, this);
				stack.addChild(contentItem);
				contentItem = stack;
			}
			const type = area.side[0] == "x" ? ItemType.row : ItemType.column;
			const insertBefore = area.side[1] == "2";
			const column = this.contentItems[0];
			if (!(column instanceof RowOrColumn) || column.type !== type) {
				const itemConfig = ResolvedItemConfig.createDefault(type);
				const rowOrColumn = this.layoutManager.createContentItem(itemConfig, this);
				this.replaceChild(column, rowOrColumn);
				rowOrColumn.addChild(contentItem, insertBefore ? 0 : void 0, true);
				rowOrColumn.addChild(column, insertBefore ? void 0 : 0, true);
				column.size = 50;
				contentItem.size = 50;
				contentItem.sizeUnit = SizeUnitEnum.Percent;
				rowOrColumn.updateSize(false);
			} else {
				const sibling = column.contentItems[insertBefore ? 0 : column.contentItems.length - 1];
				column.addChild(contentItem, insertBefore ? 0 : void 0, true);
				sibling.size *= .5;
				contentItem.size = sibling.size;
				contentItem.sizeUnit = SizeUnitEnum.Percent;
				column.updateSize(false);
			}
		}
	}
	dock() {
		throw new AssertError("GID87731");
	}
	validateDocking() {
		throw new AssertError("GIVD87732");
	}
	getAllContentItems() {
		const result = [this];
		this.deepGetAllContentItems(this.contentItems, result);
		return result;
	}
	getConfigMaximisedItems() {
		const result = [];
		this.deepFilterContentItems(this.contentItems, result, (item) => {
			if (ContentItem.isStack(item) && item.initialWantMaximise) return true;
			else if (ContentItem.isComponentItem(item) && item.initialWantMaximise) return true;
			else return false;
		});
		return result;
	}
	getItemsByPopInParentId(popInParentId) {
		const result = [];
		this.deepFilterContentItems(this.contentItems, result, (item) => item.popInParentIds.includes(popInParentId));
		return result;
	}
	toConfig() {
		throw new Error("Cannot generate GroundItem config");
	}
	setActiveComponentItem(item, focus, suppressFocusEvent) {}
	updateNodeSize() {
		const { width, height } = getElementWidthAndHeight(this._containerElement);
		setElementWidth(this.element, width);
		setElementHeight(this.element, height);
		if (this.contentItems.length > 0) {
			setElementWidth(this.contentItems[0].element, width);
			setElementHeight(this.contentItems[0].element, height);
		}
	}
	deepGetAllContentItems(content, result) {
		for (let i = 0; i < content.length; i++) {
			const contentItem = content[i];
			result.push(contentItem);
			this.deepGetAllContentItems(contentItem.contentItems, result);
		}
	}
	deepFilterContentItems(content, result, checkAcceptFtn) {
		for (let i = 0; i < content.length; i++) {
			const contentItem = content[i];
			if (checkAcceptFtn(contentItem)) result.push(contentItem);
			this.deepFilterContentItems(contentItem.contentItems, result, checkAcceptFtn);
		}
	}
};
/** @internal */
(function(GroundItem) {
	(function(Area) {
		Area.oppositeSides = {
			y2: "y1",
			x2: "x1",
			y1: "y2",
			x1: "x2"
		};
	})(GroundItem.Area || (GroundItem.Area = {}));
	function createElement(document) {
		const element = document.createElement("div");
		element.classList.add("lm_goldenlayout");
		element.classList.add("lm_item");
		element.classList.add("lm_root");
		return element;
	}
	GroundItem.createElement = createElement;
})(GroundItem || (GroundItem = {}));
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/controls/header-button.js
/** @internal */
var HeaderButton = class {
	constructor(_header, label, cssClass, _pushEvent) {
		this._header = _header;
		this._pushEvent = _pushEvent;
		this._clickEventListener = (ev) => this.onClick(ev);
		this._touchStartEventListener = (ev) => this.onTouchStart(ev);
		this._element = document.createElement("div");
		this._element.classList.add(cssClass);
		this._element.title = label;
		this._header.on("destroy", () => this.destroy());
		this._element.addEventListener("click", this._clickEventListener, { passive: true });
		this._element.addEventListener("touchstart", this._touchStartEventListener, { passive: true });
		this._header.controlsContainerElement.appendChild(this._element);
	}
	get element() {
		return this._element;
	}
	destroy() {
		var _a;
		this._element.removeEventListener("click", this._clickEventListener);
		this._element.removeEventListener("touchstart", this._touchStartEventListener);
		(_a = this._element.parentNode) === null || _a === void 0 || _a.removeChild(this._element);
	}
	onClick(ev) {
		this._pushEvent(ev);
	}
	onTouchStart(ev) {
		this._pushEvent(ev);
	}
};
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/controls/tab.js
/**
* Represents an individual tab within a Stack's header
* @public
*/
var Tab = class {
	/** @internal */
	constructor(_layoutManager, _componentItem, _closeEvent, _focusEvent, _dragStartEvent) {
		var _a;
		this._layoutManager = _layoutManager;
		this._componentItem = _componentItem;
		this._closeEvent = _closeEvent;
		this._focusEvent = _focusEvent;
		this._dragStartEvent = _dragStartEvent;
		/** @internal */
		this._isActive = false;
		/** @internal */
		this._tabClickListener = (ev) => this.onTabClickDown(ev);
		/** @internal */
		this._tabTouchStartListener = (ev) => this.onTabTouchStart(ev);
		/** @internal */
		this._closeClickListener = () => this.onCloseClick();
		/** @internal */
		this._closeTouchStartListener = () => this.onCloseTouchStart();
		/** @internal */
		this._dragStartListener = (x, y) => this.onDragStart(x, y);
		/** @internal */
		this._contentItemDestroyListener = () => this.onContentItemDestroy();
		/** @internal */
		this._tabTitleChangedListener = (title) => this.setTitle(title);
		this._element = document.createElement("div");
		this._element.classList.add("lm_tab");
		this._titleElement = document.createElement("span");
		this._titleElement.classList.add("lm_title");
		this._closeElement = document.createElement("div");
		this._closeElement.classList.add("lm_close_tab");
		this._element.appendChild(this._titleElement);
		this._element.appendChild(this._closeElement);
		if (_componentItem.isClosable) this._closeElement.style.display = "";
		else this._closeElement.style.display = "none";
		this.setTitle(_componentItem.title);
		this._componentItem.on("titleChanged", this._tabTitleChangedListener);
		if ((_a = _componentItem.reorderEnabled) !== null && _a !== void 0 ? _a : this._layoutManager.layoutConfig.settings.reorderEnabled) this.enableReorder();
		this._element.addEventListener("click", this._tabClickListener, { passive: true });
		this._element.addEventListener("touchstart", this._tabTouchStartListener, { passive: true });
		if (this._componentItem.isClosable) {
			this._closeElement.addEventListener("click", this._closeClickListener, { passive: true });
			this._closeElement.addEventListener("touchstart", this._closeTouchStartListener, { passive: true });
		} else {
			this._closeElement.remove();
			this._closeElement = void 0;
		}
		this._componentItem.setTab(this);
		this._layoutManager.emit("tabCreated", this);
	}
	get isActive() {
		return this._isActive;
	}
	get componentItem() {
		return this._componentItem;
	}
	/** @deprecated use {@link (Tab:class).componentItem} */
	get contentItem() {
		return this._componentItem;
	}
	get element() {
		return this._element;
	}
	get titleElement() {
		return this._titleElement;
	}
	get closeElement() {
		return this._closeElement;
	}
	get reorderEnabled() {
		return this._dragListener !== void 0;
	}
	set reorderEnabled(value) {
		if (value !== this.reorderEnabled) if (value) this.enableReorder();
		else this.disableReorder();
	}
	/**
	* Sets the tab's title to the provided string and sets
	* its title attribute to a pure text representation (without
	* html tags) of the same string.
	*/
	setTitle(title) {
		this._titleElement.innerText = title;
		this._element.title = title;
	}
	/**
	* Sets this tab's active state. To programmatically
	* switch tabs, use Stack.setActiveComponentItem( item ) instead.
	*/
	setActive(isActive) {
		if (isActive === this._isActive) return;
		this._isActive = isActive;
		if (isActive) this._element.classList.add("lm_active");
		else this._element.classList.remove("lm_active");
	}
	/**
	* Destroys the tab
	* @internal
	*/
	destroy() {
		var _a, _b;
		this._closeEvent = void 0;
		this._focusEvent = void 0;
		this._dragStartEvent = void 0;
		this._element.removeEventListener("click", this._tabClickListener);
		this._element.removeEventListener("touchstart", this._tabTouchStartListener);
		(_a = this._closeElement) === null || _a === void 0 || _a.removeEventListener("click", this._closeClickListener);
		(_b = this._closeElement) === null || _b === void 0 || _b.removeEventListener("touchstart", this._closeTouchStartListener);
		this._componentItem.off("titleChanged", this._tabTitleChangedListener);
		if (this.reorderEnabled) this.disableReorder();
		this._element.remove();
	}
	/** @internal */
	setBlurred() {
		this._element.classList.remove("lm_focused");
		this._titleElement.classList.remove("lm_focused");
	}
	/** @internal */
	setFocused() {
		this._element.classList.add("lm_focused");
		this._titleElement.classList.add("lm_focused");
	}
	/**
	* Callback for the DragListener
	* @param x - The tabs absolute x position
	* @param y - The tabs absolute y position
	* @internal
	*/
	onDragStart(x, y) {
		if (this._dragListener === void 0) throw new UnexpectedUndefinedError("TODSDLU10093");
		else if (this._dragStartEvent === void 0) throw new UnexpectedUndefinedError("TODS23309");
		else this._dragStartEvent(x, y, this._dragListener, this.componentItem);
	}
	/** @internal */
	onContentItemDestroy() {
		if (this._dragListener !== void 0) {
			this._dragListener.destroy();
			this._dragListener = void 0;
		}
	}
	/**
	* Callback when the tab is clicked
	* @internal
	*/
	onTabClickDown(event) {
		const target = event.target;
		if (target === this._element || target === this._titleElement) {
			if (event.button === 0) this.notifyFocus();
			else if (event.button === 1 && this._componentItem.isClosable) this.notifyClose();
		}
	}
	/** @internal */
	onTabTouchStart(event) {
		if (event.target === this._element) this.notifyFocus();
	}
	/**
	* Callback when the tab's close button is clicked
	* @internal
	*/
	onCloseClick() {
		this.notifyClose();
	}
	/** @internal */
	onCloseTouchStart() {
		this.notifyClose();
	}
	/**
	* Callback to capture tab close button mousedown
	* to prevent tab from activating.
	* @internal
	*/
	/** @internal */
	notifyClose() {
		if (this._closeEvent === void 0) throw new UnexpectedUndefinedError("TNC15007");
		else this._closeEvent(this._componentItem);
	}
	/** @internal */
	notifyFocus() {
		if (this._focusEvent === void 0) throw new UnexpectedUndefinedError("TNA15007");
		else this._focusEvent(this._componentItem);
	}
	/** @internal */
	enableReorder() {
		this._dragListener = new DragListener(this._element, [this._titleElement]);
		this._dragListener.on("dragStart", this._dragStartListener);
		this._componentItem.on("destroy", this._contentItemDestroyListener);
	}
	/** @internal */
	disableReorder() {
		if (this._dragListener === void 0) throw new UnexpectedUndefinedError("TDR87745");
		else {
			this._componentItem.off("destroy", this._contentItemDestroyListener);
			this._dragListener.off("dragStart", this._dragStartListener);
			this._dragListener = void 0;
		}
	}
};
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/controls/tabs-container.js
/** @internal */
var TabsContainer = class {
	constructor(_layoutManager, _componentRemoveEvent, _componentFocusEvent, _componentDragStartEvent, _dropdownActiveChangedEvent) {
		this._layoutManager = _layoutManager;
		this._componentRemoveEvent = _componentRemoveEvent;
		this._componentFocusEvent = _componentFocusEvent;
		this._componentDragStartEvent = _componentDragStartEvent;
		this._dropdownActiveChangedEvent = _dropdownActiveChangedEvent;
		this._tabs = [];
		this._lastVisibleTabIndex = -1;
		this._dropdownActive = false;
		this._element = document.createElement("section");
		this._element.classList.add("lm_tabs");
		this._dropdownElement = document.createElement("section");
		this._dropdownElement.classList.add("lm_tabdropdown_list");
		this._dropdownElement.style.display = "none";
	}
	get tabs() {
		return this._tabs;
	}
	get tabCount() {
		return this._tabs.length;
	}
	get lastVisibleTabIndex() {
		return this._lastVisibleTabIndex;
	}
	get element() {
		return this._element;
	}
	get dropdownElement() {
		return this._dropdownElement;
	}
	get dropdownActive() {
		return this._dropdownActive;
	}
	destroy() {
		for (let i = 0; i < this._tabs.length; i++) this._tabs[i].destroy();
	}
	/**
	* Creates a new tab and associates it with a contentItem
	* @param index - The position of the tab
	*/
	createTab(componentItem, index) {
		for (let i = 0; i < this._tabs.length; i++) if (this._tabs[i].componentItem === componentItem) return;
		const tab = new Tab(this._layoutManager, componentItem, (item) => this.handleTabCloseEvent(item), (item) => this.handleTabFocusEvent(item), (x, y, dragListener, item) => this.handleTabDragStartEvent(x, y, dragListener, item));
		if (index === void 0) index = this._tabs.length;
		this._tabs.splice(index, 0, tab);
		if (index < this._element.childNodes.length) this._element.insertBefore(tab.element, this._element.childNodes[index]);
		else this._element.appendChild(tab.element);
	}
	removeTab(componentItem) {
		for (let i = 0; i < this._tabs.length; i++) if (this._tabs[i].componentItem === componentItem) {
			this._tabs[i].destroy();
			this._tabs.splice(i, 1);
			return;
		}
		throw new Error("contentItem is not controlled by this header");
	}
	processActiveComponentChanged(newActiveComponentItem) {
		let activeIndex = -1;
		for (let i = 0; i < this._tabs.length; i++) {
			const isActive = this._tabs[i].componentItem === newActiveComponentItem;
			this._tabs[i].setActive(isActive);
			if (isActive) activeIndex = i;
		}
		if (activeIndex < 0) throw new AssertError("HSACI56632");
		else if (this._layoutManager.layoutConfig.settings.reorderOnTabMenuClick) {
			/**
			* If the tab selected was in the dropdown, move everything down one to make way for this one to be the first.
			* This will make sure the most used tabs stay visible.
			*/
			if (this._lastVisibleTabIndex !== -1 && activeIndex > this._lastVisibleTabIndex) {
				const activeTab = this._tabs[activeIndex];
				for (let j = activeIndex; j > 0; j--) this._tabs[j] = this._tabs[j - 1];
				this._tabs[0] = activeTab;
			}
		}
	}
	/**
	* Pushes the tabs to the tab dropdown if the available space is not sufficient
	*/
	updateTabSizes(availableWidth, activeComponentItem) {
		let dropDownActive = false;
		if (!this.tryUpdateTabSizes(dropDownActive, availableWidth, activeComponentItem)) {
			dropDownActive = true;
			this.tryUpdateTabSizes(dropDownActive, availableWidth, activeComponentItem);
		}
		if (dropDownActive !== this._dropdownActive) {
			this._dropdownActive = dropDownActive;
			this._dropdownActiveChangedEvent();
		}
	}
	tryUpdateTabSizes(dropdownActive, availableWidth, activeComponentItem) {
		if (this._tabs.length > 0) {
			if (activeComponentItem === void 0) throw new Error("non-empty tabs must have active component item");
			let cumulativeTabWidth = 0;
			let tabOverlapAllowanceExceeded = false;
			const tabOverlapAllowance = this._layoutManager.layoutConfig.settings.tabOverlapAllowance;
			const activeIndex = this._tabs.indexOf(activeComponentItem.tab);
			const activeTab = this._tabs[activeIndex];
			this._lastVisibleTabIndex = -1;
			for (let i = 0; i < this._tabs.length; i++) {
				const tabElement = this._tabs[i].element;
				if (tabElement.parentElement !== this._element) this._element.appendChild(tabElement);
				const tabMarginRightPixels = getComputedStyle(activeTab.element).marginRight;
				const tabMarginRight = pixelsToNumber(tabMarginRightPixels);
				const tabWidth = tabElement.offsetWidth + tabMarginRight;
				cumulativeTabWidth += tabWidth;
				let visibleTabWidth = 0;
				if (activeIndex <= i) visibleTabWidth = cumulativeTabWidth;
				else {
					const activeTabMarginRightPixels = getComputedStyle(activeTab.element).marginRight;
					const activeTabMarginRight = pixelsToNumber(activeTabMarginRightPixels);
					visibleTabWidth = cumulativeTabWidth + activeTab.element.offsetWidth + activeTabMarginRight;
				}
				if (visibleTabWidth > availableWidth) {
					if (!tabOverlapAllowanceExceeded) {
						let overlap;
						if (activeIndex > 0 && activeIndex <= i) overlap = (visibleTabWidth - availableWidth) / (i - 1);
						else overlap = (visibleTabWidth - availableWidth) / i;
						if (overlap < tabOverlapAllowance) {
							for (let j = 0; j <= i; j++) {
								const marginLeft = j !== activeIndex && j !== 0 ? "-" + numberToPixels(overlap) : "";
								this._tabs[j].element.style.zIndex = numberToPixels(i - j);
								this._tabs[j].element.style.marginLeft = marginLeft;
							}
							this._lastVisibleTabIndex = i;
							if (tabElement.parentElement !== this._element) this._element.appendChild(tabElement);
						} else tabOverlapAllowanceExceeded = true;
					} else if (i === activeIndex) {
						tabElement.style.zIndex = "auto";
						tabElement.style.marginLeft = "";
						if (tabElement.parentElement !== this._element) this._element.appendChild(tabElement);
					}
					if (tabOverlapAllowanceExceeded && i !== activeIndex) if (dropdownActive) {
						tabElement.style.zIndex = "auto";
						tabElement.style.marginLeft = "";
						if (tabElement.parentElement !== this._dropdownElement) this._dropdownElement.appendChild(tabElement);
					} else return false;
				} else {
					this._lastVisibleTabIndex = i;
					tabElement.style.zIndex = "auto";
					tabElement.style.marginLeft = "";
					if (tabElement.parentElement !== this._element) this._element.appendChild(tabElement);
				}
			}
		}
		return true;
	}
	/**
	* Shows drop down for additional tabs when there are too many to display.
	*/
	showAdditionalTabsDropdown() {
		this._dropdownElement.style.display = "";
	}
	/**
	* Hides drop down for additional tabs when there are too many to display.
	*/
	hideAdditionalTabsDropdown() {
		this._dropdownElement.style.display = "none";
	}
	handleTabCloseEvent(componentItem) {
		this._componentRemoveEvent(componentItem);
	}
	handleTabFocusEvent(componentItem) {
		this._componentFocusEvent(componentItem);
	}
	handleTabDragStartEvent(x, y, dragListener, componentItem) {
		this._componentDragStartEvent(x, y, dragListener, componentItem);
	}
};
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/controls/header.js
/**
* This class represents a header above a Stack ContentItem.
* @public
*/
var Header = class extends EventEmitter {
	/** @internal */
	constructor(_layoutManager, _parent, settings, _configClosable, _getActiveComponentItemEvent, closeEvent, _popoutEvent, _maximiseToggleEvent, _clickEvent, _touchStartEvent, _componentRemoveEvent, _componentFocusEvent, _componentDragStartEvent) {
		super();
		this._layoutManager = _layoutManager;
		this._parent = _parent;
		this._configClosable = _configClosable;
		this._getActiveComponentItemEvent = _getActiveComponentItemEvent;
		this._popoutEvent = _popoutEvent;
		this._maximiseToggleEvent = _maximiseToggleEvent;
		this._clickEvent = _clickEvent;
		this._touchStartEvent = _touchStartEvent;
		this._componentRemoveEvent = _componentRemoveEvent;
		this._componentFocusEvent = _componentFocusEvent;
		this._componentDragStartEvent = _componentDragStartEvent;
		/** @internal */
		this._clickListener = (ev) => this.onClick(ev);
		/** @internal */
		this._touchStartListener = (ev) => this.onTouchStart(ev);
		/** @internal */
		this._rowColumnClosable = true;
		/** @internal */
		this._closeButton = null;
		/** @internal */
		this._popoutButton = null;
		this._tabsContainer = new TabsContainer(this._layoutManager, (item) => this.handleTabInitiatedComponentRemoveEvent(item), (item) => this.handleTabInitiatedComponentFocusEvent(item), (x, y, dragListener, item) => this.handleTabInitiatedDragStartEvent(x, y, dragListener, item), () => this.processTabDropdownActiveChanged());
		this._show = settings.show;
		this._popoutEnabled = settings.popoutEnabled;
		this._popoutLabel = settings.popoutLabel;
		this._maximiseEnabled = settings.maximiseEnabled;
		this._maximiseLabel = settings.maximiseLabel;
		this._minimiseEnabled = settings.minimiseEnabled;
		this._minimiseLabel = settings.minimiseLabel;
		this._closeEnabled = settings.closeEnabled;
		this._closeLabel = settings.closeLabel;
		this._tabDropdownEnabled = settings.tabDropdownEnabled;
		this._tabDropdownLabel = settings.tabDropdownLabel;
		this.setSide(settings.side);
		this._canRemoveComponent = this._configClosable;
		this._element = document.createElement("section");
		this._element.classList.add("lm_header");
		this._controlsContainerElement = document.createElement("section");
		this._controlsContainerElement.classList.add("lm_controls");
		this._element.appendChild(this._tabsContainer.element);
		this._element.appendChild(this._controlsContainerElement);
		this._element.appendChild(this._tabsContainer.dropdownElement);
		this._element.addEventListener("click", this._clickListener, { passive: true });
		this._element.addEventListener("touchstart", this._touchStartListener, { passive: true });
		this._documentMouseUpListener = () => this._tabsContainer.hideAdditionalTabsDropdown();
		globalThis.document.addEventListener("mouseup", this._documentMouseUpListener, { passive: true });
		this._tabControlOffset = this._layoutManager.layoutConfig.settings.tabControlOffset;
		if (this._tabDropdownEnabled) this._tabDropdownButton = new HeaderButton(this, this._tabDropdownLabel, "lm_tabdropdown", () => this._tabsContainer.showAdditionalTabsDropdown());
		if (this._popoutEnabled) this._popoutButton = new HeaderButton(this, this._popoutLabel, "lm_popout", () => this.handleButtonPopoutEvent());
		/**
		* Maximise control - set the component to the full size of the layout
		*/
		if (this._maximiseEnabled) this._maximiseButton = new HeaderButton(this, this._maximiseLabel, "lm_maximise", (ev) => this.handleButtonMaximiseToggleEvent(ev));
		/**
		* Close button
		*/
		if (this._configClosable) this._closeButton = new HeaderButton(this, this._closeLabel, "lm_close", () => closeEvent());
		this.processTabDropdownActiveChanged();
	}
	get show() {
		return this._show;
	}
	get side() {
		return this._side;
	}
	get leftRightSided() {
		return this._leftRightSided;
	}
	get layoutManager() {
		return this._layoutManager;
	}
	get parent() {
		return this._parent;
	}
	get tabs() {
		return this._tabsContainer.tabs;
	}
	get lastVisibleTabIndex() {
		return this._tabsContainer.lastVisibleTabIndex;
	}
	get element() {
		return this._element;
	}
	get tabsContainerElement() {
		return this._tabsContainer.element;
	}
	get controlsContainerElement() {
		return this._controlsContainerElement;
	}
	/**
	* Destroys the entire header
	* @internal
	*/
	destroy() {
		this.emit("destroy");
		this._popoutEvent = void 0;
		this._maximiseToggleEvent = void 0;
		this._clickEvent = void 0;
		this._touchStartEvent = void 0;
		this._componentRemoveEvent = void 0;
		this._componentFocusEvent = void 0;
		this._componentDragStartEvent = void 0;
		this._tabsContainer.destroy();
		globalThis.document.removeEventListener("mouseup", this._documentMouseUpListener);
		this._element.remove();
	}
	/**
	* Creates a new tab and associates it with a contentItem
	* @param index - The position of the tab
	* @internal
	*/
	createTab(componentItem, index) {
		this._tabsContainer.createTab(componentItem, index);
	}
	/**
	* Finds a tab based on the contentItem its associated with and removes it.
	* Cannot remove tab if it has the active ComponentItem
	* @internal
	*/
	removeTab(componentItem) {
		this._tabsContainer.removeTab(componentItem);
	}
	/** @internal */
	processActiveComponentChanged(newActiveComponentItem) {
		this._tabsContainer.processActiveComponentChanged(newActiveComponentItem);
		this.updateTabSizes();
	}
	/** @internal */
	setSide(value) {
		this._side = value;
		this._leftRightSided = [Side.right, Side.left].includes(this._side);
	}
	/**
	* Programmatically set closability.
	* @param value - Whether to enable/disable closability.
	* @returns Whether the action was successful
	* @internal
	*/
	setRowColumnClosable(value) {
		this._rowColumnClosable = value;
		this.updateClosability();
	}
	/**
	* Updates the header's closability. If a stack/header is able
	* to close, but has a non closable component added to it, the stack is no
	* longer closable until all components are closable.
	* @internal
	*/
	updateClosability() {
		let isClosable;
		if (!this._configClosable) isClosable = false;
		else if (!this._rowColumnClosable) isClosable = false;
		else {
			isClosable = true;
			const len = this.tabs.length;
			for (let i = 0; i < len; i++) if (!this._tabsContainer.tabs[i].componentItem.isClosable) {
				isClosable = false;
				break;
			}
		}
		if (this._closeButton !== null) setElementDisplayVisibility(this._closeButton.element, isClosable);
		if (this._popoutButton !== null) setElementDisplayVisibility(this._popoutButton.element, isClosable);
		this._canRemoveComponent = isClosable || this._tabsContainer.tabCount > 1;
	}
	/** @internal */
	applyFocusedValue(value) {
		if (value) this._element.classList.add("lm_focused");
		else this._element.classList.remove("lm_focused");
	}
	/** @internal */
	processMaximised() {
		if (this._maximiseButton === void 0) throw new UnexpectedUndefinedError("HPMAX16997");
		else this._maximiseButton.element.setAttribute("title", this._minimiseLabel);
	}
	/** @internal */
	processMinimised() {
		if (this._maximiseButton === void 0) throw new UnexpectedUndefinedError("HPMIN16997");
		else this._maximiseButton.element.setAttribute("title", this._maximiseLabel);
	}
	/**
	* Pushes the tabs to the tab dropdown if the available space is not sufficient
	* @internal
	*/
	updateTabSizes() {
		if (this._tabsContainer.tabCount > 0) {
			const headerHeight = this._show ? this._layoutManager.layoutConfig.dimensions.headerHeight : 0;
			if (this._leftRightSided) {
				this._element.style.height = "";
				this._element.style.width = numberToPixels(headerHeight);
			} else {
				this._element.style.width = "";
				this._element.style.height = numberToPixels(headerHeight);
			}
			let availableWidth;
			if (this._leftRightSided) availableWidth = this._element.offsetHeight - this._controlsContainerElement.offsetHeight - this._tabControlOffset;
			else availableWidth = this._element.offsetWidth - this._controlsContainerElement.offsetWidth - this._tabControlOffset;
			this._tabsContainer.updateTabSizes(availableWidth, this._getActiveComponentItemEvent());
		}
	}
	/** @internal */
	handleTabInitiatedComponentRemoveEvent(componentItem) {
		if (this._canRemoveComponent) if (this._componentRemoveEvent === void 0) throw new UnexpectedUndefinedError("HHTCE22294");
		else this._componentRemoveEvent(componentItem);
	}
	/** @internal */
	handleTabInitiatedComponentFocusEvent(componentItem) {
		if (this._componentFocusEvent === void 0) throw new UnexpectedUndefinedError("HHTAE22294");
		else this._componentFocusEvent(componentItem);
	}
	/** @internal */
	handleTabInitiatedDragStartEvent(x, y, dragListener, componentItem) {
		if (!this._canRemoveComponent) dragListener.cancelDrag();
		else if (this._componentDragStartEvent === void 0) throw new UnexpectedUndefinedError("HHTDSE22294");
		else this._componentDragStartEvent(x, y, dragListener, componentItem);
	}
	/** @internal */
	processTabDropdownActiveChanged() {
		if (this._tabDropdownButton !== void 0) setElementDisplayVisibility(this._tabDropdownButton.element, this._tabsContainer.dropdownActive);
	}
	/** @internal */
	handleButtonPopoutEvent() {
		if (this._layoutManager.layoutConfig.settings.popoutWholeStack) if (this._popoutEvent === void 0) throw new UnexpectedUndefinedError("HHBPOE17834");
		else this._popoutEvent();
		else {
			const activeComponentItem = this._getActiveComponentItemEvent();
			if (activeComponentItem) activeComponentItem.popout();
		}
	}
	/** @internal */
	handleButtonMaximiseToggleEvent(ev) {
		if (this._maximiseToggleEvent === void 0) throw new UnexpectedUndefinedError("HHBMTE16834");
		else this._maximiseToggleEvent();
	}
	/**
	* Invoked when the header's background is clicked (not it's tabs or controls)
	* @internal
	*/
	onClick(event) {
		if (event.target === this._element) this.notifyClick(event);
	}
	/**
	* Invoked when the header's background is touched (not it's tabs or controls)
	* @internal
	*/
	onTouchStart(event) {
		if (event.target === this._element) this.notifyTouchStart(event);
	}
	/** @internal */
	notifyClick(ev) {
		if (this._clickEvent === void 0) throw new UnexpectedUndefinedError("HNHC46834");
		else this._clickEvent(ev);
	}
	/** @internal */
	notifyTouchStart(ev) {
		if (this._touchStartEvent === void 0) throw new UnexpectedUndefinedError("HNHTS46834");
		else this._touchStartEvent(ev);
	}
};
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/items/stack.js
/** @public */
var Stack = class Stack extends ComponentParentableItem {
	/** @internal */
	constructor(layoutManager, config, parent) {
		var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
		super(layoutManager, config, parent, Stack.createElement(document));
		/** @internal */
		this._headerSideChanged = false;
		/** @internal */
		this._resizeListener = () => this.handleResize();
		/** @internal */
		this._maximisedListener = () => this.handleMaximised();
		/** @internal */
		this._minimisedListener = () => this.handleMinimised();
		this._headerConfig = config.header;
		const layoutHeaderConfig = layoutManager.layoutConfig.header;
		const configContent = config.content;
		let componentHeaderConfig;
		if (configContent.length !== 1) componentHeaderConfig = void 0;
		else componentHeaderConfig = configContent[0].header;
		this._initialWantMaximise = config.maximised;
		this._initialActiveItemIndex = (_a = config.activeItemIndex) !== null && _a !== void 0 ? _a : 0;
		const show = (_d = (_c = (_b = this._headerConfig) === null || _b === void 0 ? void 0 : _b.show) !== null && _c !== void 0 ? _c : componentHeaderConfig === null || componentHeaderConfig === void 0 ? void 0 : componentHeaderConfig.show) !== null && _d !== void 0 ? _d : layoutHeaderConfig.show;
		const popout = (_g = (_f = (_e = this._headerConfig) === null || _e === void 0 ? void 0 : _e.popout) !== null && _f !== void 0 ? _f : componentHeaderConfig === null || componentHeaderConfig === void 0 ? void 0 : componentHeaderConfig.popout) !== null && _g !== void 0 ? _g : layoutHeaderConfig.popout;
		const maximise = (_k = (_j = (_h = this._headerConfig) === null || _h === void 0 ? void 0 : _h.maximise) !== null && _j !== void 0 ? _j : componentHeaderConfig === null || componentHeaderConfig === void 0 ? void 0 : componentHeaderConfig.maximise) !== null && _k !== void 0 ? _k : layoutHeaderConfig.maximise;
		const close = (_o = (_m = (_l = this._headerConfig) === null || _l === void 0 ? void 0 : _l.close) !== null && _m !== void 0 ? _m : componentHeaderConfig === null || componentHeaderConfig === void 0 ? void 0 : componentHeaderConfig.close) !== null && _o !== void 0 ? _o : layoutHeaderConfig.close;
		const minimise = (_r = (_q = (_p = this._headerConfig) === null || _p === void 0 ? void 0 : _p.minimise) !== null && _q !== void 0 ? _q : componentHeaderConfig === null || componentHeaderConfig === void 0 ? void 0 : componentHeaderConfig.minimise) !== null && _r !== void 0 ? _r : layoutHeaderConfig.minimise;
		const tabDropdown = (_u = (_t = (_s = this._headerConfig) === null || _s === void 0 ? void 0 : _s.tabDropdown) !== null && _t !== void 0 ? _t : componentHeaderConfig === null || componentHeaderConfig === void 0 ? void 0 : componentHeaderConfig.tabDropdown) !== null && _u !== void 0 ? _u : layoutHeaderConfig.tabDropdown;
		this._maximisedEnabled = maximise !== false;
		const headerSettings = {
			show: show !== false,
			side: show === false ? Side.top : show,
			popoutEnabled: popout !== false,
			popoutLabel: popout === false ? "" : popout,
			maximiseEnabled: this._maximisedEnabled,
			maximiseLabel: maximise === false ? "" : maximise,
			closeEnabled: close !== false,
			closeLabel: close === false ? "" : close,
			minimiseEnabled: true,
			minimiseLabel: minimise,
			tabDropdownEnabled: tabDropdown !== false,
			tabDropdownLabel: tabDropdown === false ? "" : tabDropdown
		};
		this._header = new Header(layoutManager, this, headerSettings, config.isClosable && close !== false, () => this.getActiveComponentItem(), () => this.remove(), () => this.handlePopoutEvent(), () => this.toggleMaximise(), (ev) => this.handleHeaderClickEvent(ev), (ev) => this.handleHeaderTouchStartEvent(ev), (item) => this.handleHeaderComponentRemoveEvent(item), (item) => this.handleHeaderComponentFocusEvent(item), (x, y, dragListener, item) => this.handleHeaderComponentStartDragEvent(x, y, dragListener, item));
		this.isStack = true;
		this._childElementContainer = document.createElement("section");
		this._childElementContainer.classList.add("lm_items");
		this.on("resize", this._resizeListener);
		if (this._maximisedEnabled) {
			this.on("maximised", this._maximisedListener);
			this.on("minimised", this._minimisedListener);
		}
		this.element.appendChild(this._header.element);
		this.element.appendChild(this._childElementContainer);
		this.setupHeaderPosition();
		this._header.updateClosability();
	}
	get childElementContainer() {
		return this._childElementContainer;
	}
	get header() {
		return this._header;
	}
	get headerShow() {
		return this._header.show;
	}
	get headerSide() {
		return this._header.side;
	}
	get headerLeftRightSided() {
		return this._header.leftRightSided;
	}
	/** @internal */
	get contentAreaDimensions() {
		return this._contentAreaDimensions;
	}
	/** @internal */
	get initialWantMaximise() {
		return this._initialWantMaximise;
	}
	get isMaximised() {
		return this === this.layoutManager.maximisedStack;
	}
	get stackParent() {
		if (!this.parent) throw new Error("Stack should always have a parent");
		return this.parent;
	}
	/** @internal */
	updateSize(force) {
		this.layoutManager.beginVirtualSizedContainerAdding();
		try {
			this.updateNodeSize();
			this.updateContentItemsSize(force);
		} finally {
			this.layoutManager.endVirtualSizedContainerAdding();
		}
	}
	/** @internal */
	init() {
		if (this.isInitialised === true) return;
		this.updateNodeSize();
		for (let i = 0; i < this.contentItems.length; i++) this._childElementContainer.appendChild(this.contentItems[i].element);
		super.init();
		const contentItems = this.contentItems;
		const contentItemCount = contentItems.length;
		if (contentItemCount > 0) if (this._initialActiveItemIndex < 0 || this._initialActiveItemIndex >= contentItemCount) throw new Error(`ActiveItemIndex out of range: ${this._initialActiveItemIndex} id: ${this.id}`);
		else {
			for (let i = 0; i < contentItemCount; i++) {
				const contentItem = contentItems[i];
				if (!(contentItem instanceof ComponentItem)) throw new Error(`Stack Content Item is not of type ComponentItem: ${i} id: ${this.id}`);
				else {
					this._header.createTab(contentItem, i);
					contentItem.hide();
					contentItem.container.setBaseLogicalZIndex();
				}
			}
			this.setActiveComponentItem(contentItems[this._initialActiveItemIndex], false);
			this._header.updateTabSizes();
		}
		this._header.updateClosability();
		this.initContentItems();
	}
	/** @deprecated Use {@link (Stack:class).setActiveComponentItem} */
	setActiveContentItem(item) {
		if (!ContentItem.isComponentItem(item)) throw new Error("Stack.setActiveContentItem: item is not a ComponentItem");
		else this.setActiveComponentItem(item, false);
	}
	setActiveComponentItem(componentItem, focus, suppressFocusEvent = false) {
		if (this._activeComponentItem !== componentItem) if (this.contentItems.indexOf(componentItem) === -1) throw new Error("componentItem is not a child of this stack");
		else {
			this.layoutManager.beginSizeInvalidation();
			try {
				if (this._activeComponentItem !== void 0) this._activeComponentItem.hide();
				this._activeComponentItem = componentItem;
				this._header.processActiveComponentChanged(componentItem);
				componentItem.show();
			} finally {
				this.layoutManager.endSizeInvalidation();
			}
			this.emit("activeContentItemChanged", componentItem);
			this.layoutManager.emit("activeContentItemChanged", componentItem);
			this.emitStateChangedEvent();
		}
		if (this.focused || focus) this.layoutManager.setFocusedComponentItem(componentItem, suppressFocusEvent);
	}
	/** @deprecated Use {@link (Stack:class).getActiveComponentItem} */
	getActiveContentItem() {
		var _a;
		return (_a = this.getActiveComponentItem()) !== null && _a !== void 0 ? _a : null;
	}
	getActiveComponentItem() {
		return this._activeComponentItem;
	}
	/** @internal */
	focusActiveContentItem() {
		var _a;
		(_a = this._activeComponentItem) === null || _a === void 0 || _a.focus();
	}
	/** @internal */
	setFocusedValue(value) {
		this._header.applyFocusedValue(value);
		super.setFocusedValue(value);
	}
	/** @internal */
	setRowColumnClosable(value) {
		this._header.setRowColumnClosable(value);
	}
	newComponent(componentType, componentState, title, index) {
		const itemConfig = {
			type: "component",
			componentType,
			componentState,
			title
		};
		return this.newItem(itemConfig, index);
	}
	addComponent(componentType, componentState, title, index) {
		const itemConfig = {
			type: "component",
			componentType,
			componentState,
			title
		};
		return this.addItem(itemConfig, index);
	}
	newItem(itemConfig, index) {
		index = this.addItem(itemConfig, index);
		return this.contentItems[index];
	}
	addItem(itemConfig, index) {
		this.layoutManager.checkMinimiseMaximisedStack();
		const resolvedItemConfig = ItemConfig.resolve(itemConfig, false);
		const contentItem = this.layoutManager.createAndInitContentItem(resolvedItemConfig, this);
		return this.addChild(contentItem, index);
	}
	addChild(contentItem, index, focus = false) {
		if (index !== void 0 && index > this.contentItems.length) {
			index -= 1;
			throw new AssertError("SAC99728");
		}
		if (!(contentItem instanceof ComponentItem)) throw new AssertError("SACC88532");
		else {
			index = super.addChild(contentItem, index);
			this._childElementContainer.appendChild(contentItem.element);
			this._header.createTab(contentItem, index);
			this.setActiveComponentItem(contentItem, focus);
			this._header.updateTabSizes();
			this.updateSize(false);
			contentItem.container.setBaseLogicalZIndex();
			this._header.updateClosability();
			this.emitStateChangedEvent();
			return index;
		}
	}
	removeChild(contentItem, keepChild) {
		const componentItem = contentItem;
		const index = this.contentItems.indexOf(componentItem);
		const stackWillBeDeleted = this.contentItems.length === 1;
		if (this._activeComponentItem === componentItem) {
			if (componentItem.focused) componentItem.blur();
			if (!stackWillBeDeleted) {
				const newActiveComponentIdx = index === 0 ? 1 : index - 1;
				this.setActiveComponentItem(this.contentItems[newActiveComponentIdx], false);
			}
		}
		this._header.removeTab(componentItem);
		super.removeChild(componentItem, keepChild);
		if (!stackWillBeDeleted) this._header.updateClosability();
		this.emitStateChangedEvent();
	}
	/**
	* Maximises the Item or minimises it if it is already maximised
	*/
	toggleMaximise() {
		if (this.isMaximised) this.minimise();
		else this.maximise();
	}
	maximise() {
		if (!this.isMaximised) {
			this.layoutManager.setMaximisedStack(this);
			const contentItems = this.contentItems;
			const contentItemCount = contentItems.length;
			for (let i = 0; i < contentItemCount; i++) {
				const contentItem = contentItems[i];
				if (contentItem instanceof ComponentItem) contentItem.enterStackMaximised();
				else throw new AssertError("SMAXI87773");
			}
			this.emitStateChangedEvent();
		}
	}
	minimise() {
		if (this.isMaximised) {
			this.layoutManager.setMaximisedStack(void 0);
			const contentItems = this.contentItems;
			const contentItemCount = contentItems.length;
			for (let i = 0; i < contentItemCount; i++) {
				const contentItem = contentItems[i];
				if (contentItem instanceof ComponentItem) contentItem.exitStackMaximised();
				else throw new AssertError("SMINI87773");
			}
			this.emitStateChangedEvent();
		}
	}
	/** @internal */
	destroy() {
		var _a;
		if ((_a = this._activeComponentItem) === null || _a === void 0 ? void 0 : _a.focused) this._activeComponentItem.blur();
		super.destroy();
		this.off("resize", this._resizeListener);
		if (this._maximisedEnabled) {
			this.off("maximised", this._maximisedListener);
			this.off("minimised", this._minimisedListener);
		}
		this._header.destroy();
	}
	toConfig() {
		let activeItemIndex;
		if (this._activeComponentItem) {
			activeItemIndex = this.contentItems.indexOf(this._activeComponentItem);
			if (activeItemIndex < 0) throw new Error("active component item not found in stack");
		}
		if (this.contentItems.length > 0 && activeItemIndex === void 0) throw new Error("expected non-empty stack to have an active component item");
		else return {
			type: "stack",
			content: this.calculateConfigContent(),
			size: this.size,
			sizeUnit: this.sizeUnit,
			minSize: this.minSize,
			minSizeUnit: this.minSizeUnit,
			id: this.id,
			isClosable: this.isClosable,
			maximised: this.isMaximised,
			header: this.createHeaderConfig(),
			activeItemIndex
		};
	}
	/**
	* Ok, this one is going to be the tricky one: The user has dropped a {@link (ContentItem:class)} onto this stack.
	*
	* It was dropped on either the stacks header or the top, right, bottom or left bit of the content area
	* (which one of those is stored in this._dropSegment). Now, if the user has dropped on the header the case
	* is relatively clear: We add the item to the existing stack... job done (might be good to have
	* tab reordering at some point, but lets not sweat it right now)
	*
	* If the item was dropped on the content part things are a bit more complicated. If it was dropped on either the
	* top or bottom region we need to create a new column and place the items accordingly.
	* Unless, of course if the stack is already within a column... in which case we want
	* to add the newly created item to the existing column...
	* either prepend or append it, depending on wether its top or bottom.
	*
	* Same thing for rows and left / right drop segments... so in total there are 9 things that can potentially happen
	* (left, top, right, bottom) * is child of the right parent (row, column) + header drop
	*
	* @internal
	*/
	onDrop(contentItem, area) {
		if (this._dropSegment === "header") {
			this.resetHeaderDropZone();
			if (this._dropIndex === void 0) throw new UnexpectedUndefinedError("SODDI68990");
			else {
				this.addChild(contentItem, this._dropIndex);
				return;
			}
		}
		if (this._dropSegment === "body") {
			this.addChild(contentItem, 0, true);
			return;
		}
		const isVertical = this._dropSegment === "top" || this._dropSegment === "bottom";
		const isHorizontal = this._dropSegment === "left" || this._dropSegment === "right";
		const insertBefore = this._dropSegment === "top" || this._dropSegment === "left";
		const hasCorrectParent = isVertical && this.stackParent.isColumn || isHorizontal && this.stackParent.isRow;
		if (contentItem.isComponent) {
			const itemConfig = ResolvedStackItemConfig.createDefault();
			itemConfig.header = this.createHeaderConfig();
			const stack = this.layoutManager.createAndInitContentItem(itemConfig, this);
			stack.addChild(contentItem);
			contentItem = stack;
		}
		if (contentItem.type === ItemType.row || contentItem.type === ItemType.column) {
			const itemConfig = ResolvedStackItemConfig.createDefault();
			itemConfig.header = this.createHeaderConfig();
			const stack = this.layoutManager.createContentItem(itemConfig, this);
			stack.addChild(contentItem);
			contentItem = stack;
		}
		if (hasCorrectParent) {
			const index = this.stackParent.contentItems.indexOf(this);
			this.stackParent.addChild(contentItem, insertBefore ? index : index + 1, true);
			this.size *= .5;
			contentItem.size = this.size;
			contentItem.sizeUnit = this.sizeUnit;
			this.stackParent.updateSize(false);
		} else {
			const type = isVertical ? ItemType.column : ItemType.row;
			const itemConfig = ResolvedItemConfig.createDefault(type);
			const rowOrColumn = this.layoutManager.createContentItem(itemConfig, this);
			this.stackParent.replaceChild(this, rowOrColumn);
			rowOrColumn.addChild(contentItem, insertBefore ? 0 : void 0, true);
			rowOrColumn.addChild(this, insertBefore ? void 0 : 0, true);
			this.size = 50;
			contentItem.size = 50;
			contentItem.sizeUnit = SizeUnitEnum.Percent;
			rowOrColumn.updateSize(false);
		}
	}
	/**
	* If the user hovers above the header part of the stack, indicate drop positions for tabs.
	* otherwise indicate which segment of the body the dragged item would be dropped on
	*
	* @param x - Absolute Screen X
	* @param y - Absolute Screen Y
	* @internal
	*/
	highlightDropZone(x, y) {
		for (const key in this._contentAreaDimensions) {
			const segment = key;
			const area = this._contentAreaDimensions[segment].hoverArea;
			if (area.x1 < x && area.x2 > x && area.y1 < y && area.y2 > y) {
				if (segment === "header") {
					this._dropSegment = "header";
					this.highlightHeaderDropZone(this._header.leftRightSided ? y : x);
				} else {
					this.resetHeaderDropZone();
					this.highlightBodyDropZone(segment);
				}
				return;
			}
		}
	}
	/** @internal */
	getArea() {
		if (this.element.style.display === "none") return null;
		const headerArea = super.getElementArea(this._header.element);
		const contentArea = super.getElementArea(this._childElementContainer);
		if (headerArea === null || contentArea === null) throw new UnexpectedNullError("SGAHC13086");
		const contentWidth = contentArea.x2 - contentArea.x1;
		const contentHeight = contentArea.y2 - contentArea.y1;
		this._contentAreaDimensions = { header: {
			hoverArea: {
				x1: headerArea.x1,
				y1: headerArea.y1,
				x2: headerArea.x2,
				y2: headerArea.y2
			},
			highlightArea: {
				x1: headerArea.x1,
				y1: headerArea.y1,
				x2: headerArea.x2,
				y2: headerArea.y2
			}
		} };
		/**
		* Highlight the entire body if the stack is empty
		*/
		if (this.contentItems.length === 0) {
			this._contentAreaDimensions.body = {
				hoverArea: {
					x1: contentArea.x1,
					y1: contentArea.y1,
					x2: contentArea.x2,
					y2: contentArea.y2
				},
				highlightArea: {
					x1: contentArea.x1,
					y1: contentArea.y1,
					x2: contentArea.x2,
					y2: contentArea.y2
				}
			};
			return super.getElementArea(this.element);
		} else {
			this._contentAreaDimensions.left = {
				hoverArea: {
					x1: contentArea.x1,
					y1: contentArea.y1,
					x2: contentArea.x1 + contentWidth * .25,
					y2: contentArea.y2
				},
				highlightArea: {
					x1: contentArea.x1,
					y1: contentArea.y1,
					x2: contentArea.x1 + contentWidth * .5,
					y2: contentArea.y2
				}
			};
			this._contentAreaDimensions.top = {
				hoverArea: {
					x1: contentArea.x1 + contentWidth * .25,
					y1: contentArea.y1,
					x2: contentArea.x1 + contentWidth * .75,
					y2: contentArea.y1 + contentHeight * .5
				},
				highlightArea: {
					x1: contentArea.x1,
					y1: contentArea.y1,
					x2: contentArea.x2,
					y2: contentArea.y1 + contentHeight * .5
				}
			};
			this._contentAreaDimensions.right = {
				hoverArea: {
					x1: contentArea.x1 + contentWidth * .75,
					y1: contentArea.y1,
					x2: contentArea.x2,
					y2: contentArea.y2
				},
				highlightArea: {
					x1: contentArea.x1 + contentWidth * .5,
					y1: contentArea.y1,
					x2: contentArea.x2,
					y2: contentArea.y2
				}
			};
			this._contentAreaDimensions.bottom = {
				hoverArea: {
					x1: contentArea.x1 + contentWidth * .25,
					y1: contentArea.y1 + contentHeight * .5,
					x2: contentArea.x1 + contentWidth * .75,
					y2: contentArea.y2
				},
				highlightArea: {
					x1: contentArea.x1,
					y1: contentArea.y1 + contentHeight * .5,
					x2: contentArea.x2,
					y2: contentArea.y2
				}
			};
			return super.getElementArea(this.element);
		}
	}
	/**
	* Programmatically operate with header position.
	*
	* @param position -
	*
	* @returns previous header position
	* @internal
	*/
	positionHeader(position) {
		if (this._header.side !== position) {
			this._header.setSide(position);
			this._headerSideChanged = true;
			this.setupHeaderPosition();
		}
	}
	/** @internal */
	updateNodeSize() {
		if (this.element.style.display !== "none") {
			const content = getElementWidthAndHeight(this.element);
			if (this._header.show) {
				const dimension = this._header.leftRightSided ? WidthOrHeightPropertyName.width : WidthOrHeightPropertyName.height;
				content[dimension] -= this.layoutManager.layoutConfig.dimensions.headerHeight;
			}
			this._childElementContainer.style.width = numberToPixels(content.width);
			this._childElementContainer.style.height = numberToPixels(content.height);
			for (let i = 0; i < this.contentItems.length; i++) {
				this.contentItems[i].element.style.width = numberToPixels(content.width);
				this.contentItems[i].element.style.height = numberToPixels(content.height);
			}
			this.emit("resize");
			this.emitStateChangedEvent();
		}
	}
	/** @internal */
	highlightHeaderDropZone(x) {
		const visibleTabsLength = this._header.lastVisibleTabIndex + 1;
		const tabsContainerElementChildNodes = this._header.tabsContainerElement.childNodes;
		const visibleTabElements = new Array(visibleTabsLength);
		let tabIndex = 0;
		let tabCount = 0;
		while (tabCount < visibleTabsLength) {
			const visibleTabElement = tabsContainerElementChildNodes[tabIndex++];
			if (visibleTabElement !== this.layoutManager.tabDropPlaceholder) visibleTabElements[tabCount++] = visibleTabElement;
		}
		const dropTargetIndicator = this.layoutManager.dropTargetIndicator;
		if (dropTargetIndicator === null) throw new UnexpectedNullError("SHHDZDTI97110");
		let area;
		if (visibleTabsLength === 0) {
			const headerRect = this._header.element.getBoundingClientRect();
			const headerTop = headerRect.top + document.body.scrollTop;
			const headerLeft = headerRect.left + document.body.scrollLeft;
			area = {
				x1: headerLeft,
				x2: headerLeft + 100,
				y1: headerTop + headerRect.height - 20,
				y2: headerTop + headerRect.height
			};
			this._dropIndex = 0;
		} else {
			let tabIndex = 0;
			let isAboveTab = false;
			let tabTop;
			let tabLeft;
			let tabWidth;
			let tabElement;
			do {
				tabElement = visibleTabElements[tabIndex];
				const tabRect = tabElement.getBoundingClientRect();
				const tabRectTop = tabRect.top + document.body.scrollTop;
				const tabRectLeft = tabRect.left + document.body.scrollLeft;
				if (this._header.leftRightSided) {
					tabLeft = tabRectTop;
					tabTop = tabRectLeft;
					tabWidth = tabRect.height;
				} else {
					tabLeft = tabRectLeft;
					tabTop = tabRectTop;
					tabWidth = tabRect.width;
				}
				if (x >= tabLeft && x < tabLeft + tabWidth) isAboveTab = true;
				else tabIndex++;
			} while (tabIndex < visibleTabsLength && !isAboveTab);
			if (isAboveTab === false && x < tabLeft) return;
			if (x < tabLeft + tabWidth / 2) {
				this._dropIndex = tabIndex;
				tabElement.insertAdjacentElement("beforebegin", this.layoutManager.tabDropPlaceholder);
			} else {
				this._dropIndex = Math.min(tabIndex + 1, visibleTabsLength);
				tabElement.insertAdjacentElement("afterend", this.layoutManager.tabDropPlaceholder);
			}
			const tabDropPlaceholderRect = this.layoutManager.tabDropPlaceholder.getBoundingClientRect();
			const tabDropPlaceholderRectTop = tabDropPlaceholderRect.top + document.body.scrollTop;
			const tabDropPlaceholderRectLeft = tabDropPlaceholderRect.left + document.body.scrollLeft;
			const tabDropPlaceholderRectWidth = tabDropPlaceholderRect.width;
			if (this._header.leftRightSided) {
				const placeHolderTop = tabDropPlaceholderRectTop;
				area = {
					x1: tabTop,
					x2: tabTop + tabElement.clientHeight,
					y1: placeHolderTop,
					y2: placeHolderTop + tabDropPlaceholderRectWidth
				};
			} else {
				const placeHolderLeft = tabDropPlaceholderRectLeft;
				area = {
					x1: placeHolderLeft,
					x2: placeHolderLeft + tabDropPlaceholderRectWidth,
					y1: tabTop,
					y2: tabTop + tabElement.clientHeight
				};
			}
		}
		dropTargetIndicator.highlightArea(area, 0);
	}
	/** @internal */
	resetHeaderDropZone() {
		this.layoutManager.tabDropPlaceholder.remove();
	}
	/** @internal */
	setupHeaderPosition() {
		setElementDisplayVisibility(this._header.element, this._header.show);
		this.element.classList.remove("lm_left", "lm_right", "lm_bottom");
		if (this._header.leftRightSided) this.element.classList.add("lm_" + this._header.side);
		this.updateSize(false);
	}
	/** @internal */
	highlightBodyDropZone(segment) {
		if (this._contentAreaDimensions === void 0) throw new UnexpectedUndefinedError("SHBDZC82265");
		else {
			const highlightArea = this._contentAreaDimensions[segment].highlightArea;
			const dropTargetIndicator = this.layoutManager.dropTargetIndicator;
			if (dropTargetIndicator === null) throw new UnexpectedNullError("SHBDZD96110");
			else {
				dropTargetIndicator.highlightArea(highlightArea, 1);
				this._dropSegment = segment;
			}
		}
	}
	/** @internal */
	handleResize() {
		this._header.updateTabSizes();
	}
	/** @internal */
	handleMaximised() {
		this._header.processMaximised();
	}
	/** @internal */
	handleMinimised() {
		this._header.processMinimised();
	}
	/** @internal */
	handlePopoutEvent() {
		this.popout();
	}
	/** @internal */
	handleHeaderClickEvent(ev) {
		const eventName = EventEmitter.headerClickEventName;
		const bubblingEvent = new EventEmitter.ClickBubblingEvent(eventName, this, ev);
		this.emit(eventName, bubblingEvent);
	}
	/** @internal */
	handleHeaderTouchStartEvent(ev) {
		const eventName = EventEmitter.headerTouchStartEventName;
		const bubblingEvent = new EventEmitter.TouchStartBubblingEvent(eventName, this, ev);
		this.emit(eventName, bubblingEvent);
	}
	/** @internal */
	handleHeaderComponentRemoveEvent(item) {
		this.removeChild(item, false);
	}
	/** @internal */
	handleHeaderComponentFocusEvent(item) {
		this.setActiveComponentItem(item, true);
	}
	/** @internal */
	handleHeaderComponentStartDragEvent(x, y, dragListener, componentItem) {
		if (this.isMaximised === true) this.toggleMaximise();
		this.layoutManager.startComponentDrag(x, y, dragListener, componentItem, this);
	}
	/** @internal */
	createHeaderConfig() {
		if (!this._headerSideChanged) return ResolvedHeaderedItemConfig.Header.createCopy(this._headerConfig);
		else {
			const show = this._header.show ? this._header.side : false;
			let result = ResolvedHeaderedItemConfig.Header.createCopy(this._headerConfig, show);
			if (result === void 0) result = {
				show,
				popout: void 0,
				maximise: void 0,
				close: void 0,
				minimise: void 0,
				tabDropdown: void 0
			};
			return result;
		}
	}
	/** @internal */
	emitStateChangedEvent() {
		this.emitBaseBubblingEvent("stateChanged");
	}
};
/** @public */
(function(Stack) {
	/** @internal */
	function createElement(document) {
		const element = document.createElement("div");
		element.classList.add("lm_item");
		element.classList.add("lm_stack");
		return element;
	}
	Stack.createElement = createElement;
})(Stack || (Stack = {}));
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/controls/drag-proxy.js
/**
* This class creates a temporary container
* for the component whilst it is being dragged
* and handles drag events
* @internal
*/
var DragProxy = class extends EventEmitter {
	/**
	* @param x - The initial x position
	* @param y - The initial y position
	* @internal
	*/
	constructor(x, y, _dragListener, _layoutManager, _componentItem, _originalParent) {
		super();
		this._dragListener = _dragListener;
		this._layoutManager = _layoutManager;
		this._componentItem = _componentItem;
		this._originalParent = _originalParent;
		this._area = null;
		this._lastValidArea = null;
		this._dragListener.on("drag", (offsetX, offsetY, event) => this.onDrag(offsetX, offsetY, event));
		this._dragListener.on("dragStop", () => this.onDrop());
		this.createDragProxyElements(x, y);
		if (this._componentItem.parent === null) throw new UnexpectedNullError("DPC10097");
		this._componentItemFocused = this._componentItem.focused;
		if (this._componentItemFocused) this._componentItem.blur();
		this._componentItem.parent.removeChild(this._componentItem, true);
		this.setDimensions();
		document.body.appendChild(this._element);
		this.determineMinMaxXY();
		this._layoutManager.calculateItemAreas();
		this.setDropPosition(x, y);
	}
	get element() {
		return this._element;
	}
	/** Create Stack-like structure to contain the dragged component */
	createDragProxyElements(initialX, initialY) {
		this._element = document.createElement("div");
		this._element.classList.add("lm_dragProxy");
		const headerElement = document.createElement("div");
		headerElement.classList.add("lm_header");
		const tabsElement = document.createElement("div");
		tabsElement.classList.add("lm_tabs");
		const tabElement = document.createElement("div");
		tabElement.classList.add("lm_tab");
		const titleElement = document.createElement("span");
		titleElement.classList.add("lm_title");
		tabElement.appendChild(titleElement);
		tabsElement.appendChild(tabElement);
		headerElement.appendChild(tabsElement);
		this._proxyContainerElement = document.createElement("div");
		this._proxyContainerElement.classList.add("lm_content");
		this._element.appendChild(headerElement);
		this._element.appendChild(this._proxyContainerElement);
		if (this._originalParent instanceof Stack && this._originalParent.headerShow) {
			this._sided = this._originalParent.headerLeftRightSided;
			this._element.classList.add("lm_" + this._originalParent.headerSide);
			if ([Side.right, Side.bottom].indexOf(this._originalParent.headerSide) >= 0) this._proxyContainerElement.insertAdjacentElement("afterend", headerElement);
		}
		this._element.style.left = numberToPixels(initialX);
		this._element.style.top = numberToPixels(initialY);
		tabElement.setAttribute("title", this._componentItem.title);
		titleElement.insertAdjacentText("afterbegin", this._componentItem.title);
		this._proxyContainerElement.appendChild(this._componentItem.element);
	}
	determineMinMaxXY() {
		const groundItem = this._layoutManager.groundItem;
		if (groundItem === void 0) throw new UnexpectedUndefinedError("DPDMMXY73109");
		else {
			const rect = groundItem.element.getBoundingClientRect();
			this._minX = rect.left + document.body.scrollLeft;
			this._minY = rect.top + document.body.scrollTop;
			this._maxX = this._minX + rect.width;
			this._maxY = this._minY + rect.height;
		}
	}
	/**
	* Callback on every mouseMove event during a drag. Determines if the drag is
	* still within the valid drag area and calls the layoutManager to highlight the
	* current drop area
	*
	* @param offsetX - The difference from the original x position in px
	* @param offsetY - The difference from the original y position in px
	* @param event -
	* @internal
	*/
	onDrag(offsetX, offsetY, event) {
		const x = event.pageX;
		const y = event.pageY;
		this.setDropPosition(x, y);
		this._componentItem.drag();
	}
	/**
	* Sets the target position, highlighting the appropriate area
	*
	* @param x - The x position in px
	* @param y - The y position in px
	*
	* @internal
	*/
	setDropPosition(x, y) {
		if (this._layoutManager.layoutConfig.settings.constrainDragToContainer) {
			if (x <= this._minX) x = Math.ceil(this._minX);
			else if (x >= this._maxX) x = Math.floor(this._maxX);
			if (y <= this._minY) y = Math.ceil(this._minY);
			else if (y >= this._maxY) y = Math.floor(this._maxY);
		}
		this._element.style.left = numberToPixels(x);
		this._element.style.top = numberToPixels(y);
		this._area = this._layoutManager.getArea(x, y);
		if (this._area !== null) {
			this._lastValidArea = this._area;
			this._area.contentItem.highlightDropZone(x, y, this._area);
		}
	}
	/**
	* Callback when the drag has finished. Determines the drop area
	* and adds the child to it
	* @internal
	*/
	onDrop() {
		const dropTargetIndicator = this._layoutManager.dropTargetIndicator;
		if (dropTargetIndicator === null) throw new UnexpectedNullError("DPOD30011");
		else dropTargetIndicator.hide();
		this._componentItem.exitDragMode();
		let droppedComponentItem;
		if (this._area !== null) {
			droppedComponentItem = this._componentItem;
			this._area.contentItem.onDrop(droppedComponentItem, this._area);
		} else if (this._lastValidArea !== null) {
			droppedComponentItem = this._componentItem;
			this._lastValidArea.contentItem.onDrop(droppedComponentItem, this._lastValidArea);
		} else if (this._originalParent) {
			droppedComponentItem = this._componentItem;
			this._originalParent.addChild(droppedComponentItem);
		} else this._componentItem.destroy();
		this._element.remove();
		this._layoutManager.emit("itemDropped", this._componentItem);
		if (this._componentItemFocused && droppedComponentItem !== void 0) droppedComponentItem.focus();
	}
	/**
	* Updates the Drag Proxy's dimensions
	* @internal
	*/
	setDimensions() {
		const dimensions = this._layoutManager.layoutConfig.dimensions;
		if (dimensions === void 0) throw new Error("DragProxy.setDimensions: dimensions undefined");
		let width = dimensions.dragProxyWidth;
		let height = dimensions.dragProxyHeight;
		if (width === void 0 || height === void 0) throw new Error("DragProxy.setDimensions: width and/or height undefined");
		const headerHeight = this._layoutManager.layoutConfig.header.show === false ? 0 : dimensions.headerHeight;
		this._element.style.width = numberToPixels(width);
		this._element.style.height = numberToPixels(height);
		width -= this._sided ? headerHeight : 0;
		height -= !this._sided ? headerHeight : 0;
		this._proxyContainerElement.style.width = numberToPixels(width);
		this._proxyContainerElement.style.height = numberToPixels(height);
		this._componentItem.enterDragMode(width, height);
		this._componentItem.show();
	}
};
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/controls/drag-source.js
/**
* Allows for any DOM item to create a component on drag
* start to be dragged into the Layout
* @public
*/
var DragSource = class DragSource {
	/** @internal */
	constructor(_layoutManager, _element, _extraAllowableChildTargets, _componentTypeOrFtn, _componentState, _title, _id) {
		this._layoutManager = _layoutManager;
		this._element = _element;
		this._extraAllowableChildTargets = _extraAllowableChildTargets;
		this._componentTypeOrFtn = _componentTypeOrFtn;
		this._componentState = _componentState;
		this._title = _title;
		this._id = _id;
		this._dragListener = null;
		this._dummyGroundContainer = document.createElement("div");
		const dummyRootItemConfig = ResolvedRowOrColumnItemConfig.createDefault("row");
		this._dummyGroundContentItem = new GroundItem(this._layoutManager, dummyRootItemConfig, this._dummyGroundContainer);
		this.createDragListener();
	}
	/**
	* Disposes of the drag listeners so the drag source is not usable any more.
	* @internal
	*/
	destroy() {
		this.removeDragListener();
	}
	/**
	* Called initially and after every drag
	* @internal
	*/
	createDragListener() {
		this.removeDragListener();
		this._dragListener = new DragListener(this._element, this._extraAllowableChildTargets);
		this._dragListener.on("dragStart", (x, y) => this.onDragStart(x, y));
		this._dragListener.on("dragStop", () => this.onDragStop());
	}
	/**
	* Callback for the DragListener's dragStart event
	*
	* @param x - The x position of the mouse on dragStart
	* @param y - The x position of the mouse on dragStart
	* @internal
	*/
	onDragStart(x, y) {
		var _a;
		const type = "component";
		let dragSourceItemConfig;
		if (typeof this._componentTypeOrFtn === "function") {
			const ftnDragSourceItemConfig = this._componentTypeOrFtn();
			if (DragSource.isDragSourceComponentItemConfig(ftnDragSourceItemConfig)) dragSourceItemConfig = {
				type,
				componentState: ftnDragSourceItemConfig.state,
				componentType: ftnDragSourceItemConfig.type,
				title: (_a = ftnDragSourceItemConfig.title) !== null && _a !== void 0 ? _a : this._title
			};
			else dragSourceItemConfig = ftnDragSourceItemConfig;
		} else dragSourceItemConfig = {
			type,
			componentState: this._componentState,
			componentType: this._componentTypeOrFtn,
			title: this._title,
			id: this._id
		};
		const resolvedItemConfig = ComponentItemConfig.resolve(dragSourceItemConfig, false);
		const componentItem = new ComponentItem(this._layoutManager, resolvedItemConfig, this._dummyGroundContentItem);
		this._dummyGroundContentItem.contentItems.push(componentItem);
		if (this._dragListener === null) throw new UnexpectedNullError("DSODSD66746");
		else {
			const dragProxy = new DragProxy(x, y, this._dragListener, this._layoutManager, componentItem, this._dummyGroundContentItem);
			const transitionIndicator = this._layoutManager.transitionIndicator;
			if (transitionIndicator === null) throw new UnexpectedNullError("DSODST66746");
			else transitionIndicator.transitionElements(this._element, dragProxy.element);
		}
	}
	/** @internal */
	onDragStop() {
		this.createDragListener();
	}
	/**
	* Called after every drag and when the drag source is being disposed of.
	* @internal
	*/
	removeDragListener() {
		if (this._dragListener !== null) {
			this._dragListener.destroy();
			this._dragListener = null;
		}
	}
};
/** @public */
(function(DragSource) {
	/** @deprecated remove in version 3 */
	function isDragSourceComponentItemConfig(config) {
		return !("componentType" in config);
	}
	DragSource.isDragSourceComponentItemConfig = isDragSourceComponentItemConfig;
})(DragSource || (DragSource = {}));
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/controls/drop-target-indicator.js
/** @internal */
var DropTargetIndicator = class {
	constructor() {
		this._element = document.createElement("div");
		this._element.classList.add("lm_dropTargetIndicator");
		const innerElement = document.createElement("div");
		innerElement.classList.add("lm_inner");
		this._element.appendChild(innerElement);
		document.body.appendChild(this._element);
	}
	destroy() {
		this._element.remove();
	}
	highlightArea(area, margin) {
		this._element.style.left = numberToPixels(area.x1 + margin);
		this._element.style.top = numberToPixels(area.y1 + margin);
		this._element.style.width = numberToPixels(area.x2 - area.x1 - margin);
		this._element.style.height = numberToPixels(area.y2 - area.y1 - margin);
		this._element.style.display = "block";
	}
	hide() {
		setElementDisplayVisibility(this._element, false);
	}
};
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/controls/transition-indicator.js
/** @internal @deprecated To be removed */
var TransitionIndicator = class {
	constructor() {
		this._element = document.createElement("div");
		this._element.classList.add("lm_transition_indicator");
		document.body.appendChild(this._element);
		this._toElement = null;
		this._fromDimensions = null;
		this._totalAnimationDuration = 200;
		this._animationStartTime = null;
	}
	destroy() {
		this._element.remove();
	}
	transitionElements(fromElement, toElement) {}
	nextAnimationFrame() {}
	measure(element) {
		const rect = element.getBoundingClientRect();
		return {
			left: rect.left,
			top: rect.top,
			width: element.offsetWidth,
			height: element.offsetHeight
		};
	}
};
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/utils/event-hub.js
/**
* An EventEmitter singleton that propagates events
* across multiple windows. This is a little bit trickier since
* windows are allowed to open childWindows in their own right.
*
* This means that we deal with a tree of windows. Therefore, we do the event propagation in two phases:
*
* - Propagate events from this layout to the parent layout
*   - Repeat until the event arrived at the root layout
* - Propagate events to this layout and to all children
*   - Repeat until all layouts got the event
*
* **WARNING**: Only userBroadcast events are propagated between windows.
* This means the you have to take care of propagating state changes between windows yourself.
*
* @public
*/
var EventHub = class EventHub extends EventEmitter {
	/**
	* Creates a new EventHub instance
	* @param _layoutManager - the layout manager to synchronize between the windows
	* @internal
	*/
	constructor(_layoutManager) {
		super();
		this._layoutManager = _layoutManager;
		/** @internal */
		this._childEventListener = (childEvent) => this.onEventFromChild(childEvent);
		globalThis.addEventListener(EventHub.ChildEventName, this._childEventListener, { passive: true });
	}
	/**
	* Emit an event and notify listeners
	*
	* @param eventName - The name of the event
	* @param args - Additional arguments that will be passed to the listener
	* @public
	*/
	emit(eventName, ...args) {
		if (eventName === "userBroadcast") this.emitUserBroadcast(...args);
		else super.emit(eventName, ...args);
	}
	/**
	* Broadcasts a message to all other currently opened windows.
	* @public
	*/
	emitUserBroadcast(...args) {
		this.handleUserBroadcastEvent("userBroadcast", args);
	}
	/**
	* Destroys the EventHub
	* @internal
	*/
	destroy() {
		globalThis.removeEventListener(EventHub.ChildEventName, this._childEventListener);
	}
	/**
	* Internal processor to process local events.
	* @internal
	*/
	handleUserBroadcastEvent(eventName, args) {
		if (this._layoutManager.isSubWindow) this.propagateToParent(eventName, args);
		else this.propagateToThisAndSubtree(eventName, args);
	}
	/**
	* Callback for child events raised on the window
	* @internal
	*/
	onEventFromChild(event) {
		const detail = event.detail;
		this.handleUserBroadcastEvent(detail.eventName, detail.args);
	}
	/**
	* Propagates the event to the parent by emitting
	* it on the parent's DOM window
	* @internal
	*/
	propagateToParent(eventName, args) {
		const eventInit = {
			bubbles: true,
			cancelable: true,
			detail: {
				layoutManager: this._layoutManager,
				eventName,
				args
			}
		};
		const event = new CustomEvent(EventHub.ChildEventName, eventInit);
		const opener = globalThis.opener;
		if (opener === null) throw new UnexpectedNullError("EHPTP15778");
		opener.dispatchEvent(event);
	}
	/**
	* Propagate events to the whole subtree under this event hub.
	* @internal
	*/
	propagateToThisAndSubtree(eventName, args) {
		this.emitUnknown(eventName, ...args);
		for (let i = 0; i < this._layoutManager.openPopouts.length; i++) {
			const childGl = this._layoutManager.openPopouts[i].getGlInstance();
			if (childGl) childGl.eventHub.propagateToThisAndSubtree(eventName, args);
		}
	}
};
/** @public */
(function(EventHub) {
	/** @internal */
	EventHub.ChildEventName = "gl_child_event";
})(EventHub || (EventHub = {}));
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/layout-manager.js
/**
* The main class that will be exposed as GoldenLayout.
*/
/** @public */
var LayoutManager = class LayoutManager extends EventEmitter {
	/**
	* @param container - A Dom HTML element. Defaults to body
	* @internal
	*/
	constructor(parameters) {
		super();
		/** Whether the layout will be automatically be resized to container whenever the container's size is changed
		* Default is true if <body> is the container otherwise false
		* Default will be changed to true for any container in the future
		*/
		this.resizeWithContainerAutomatically = false;
		/** The debounce interval (in milliseconds) used whenever a layout is automatically resized.  0 means next tick */
		this.resizeDebounceInterval = 100;
		/** Extend the current debounce delay time period if it is triggered during the delay.
		* If this is true, the layout will only resize when its container has stopped being resized.
		* If it is false, the layout will resize at intervals while its container is being resized.
		*/
		this.resizeDebounceExtendedWhenPossible = true;
		/** @internal */
		this._isInitialised = false;
		/** @internal */
		this._groundItem = void 0;
		/** @internal */
		this._openPopouts = [];
		/** @internal */
		this._dropTargetIndicator = null;
		/** @internal */
		this._transitionIndicator = null;
		/** @internal */
		this._itemAreas = [];
		/** @internal */
		this._maximisePlaceholder = LayoutManager.createMaximisePlaceElement(document);
		/** @internal */
		this._tabDropPlaceholder = LayoutManager.createTabDropPlaceholderElement(document);
		/** @internal */
		this._dragSources = [];
		/** @internal */
		this._updatingColumnsResponsive = false;
		/** @internal */
		this._firstLoad = true;
		/** @internal */
		this._eventHub = new EventHub(this);
		/** @internal */
		this._width = null;
		/** @internal */
		this._height = null;
		/** @internal */
		this._virtualSizedContainers = [];
		/** @internal */
		this._virtualSizedContainerAddingBeginCount = 0;
		/** @internal */
		this._sizeInvalidationBeginCount = 0;
		/** @internal */
		this._resizeObserver = new ResizeObserver(() => this.handleContainerResize());
		/** @internal @deprecated to be removed in version 3 */
		this._windowBeforeUnloadListener = () => this.onBeforeUnload();
		/** @internal @deprecated to be removed in version 3 */
		this._windowBeforeUnloadListening = false;
		/** @internal */
		this._maximisedStackBeforeDestroyedListener = (ev) => this.cleanupBeforeMaximisedStackDestroyed(ev);
		this.isSubWindow = parameters.isSubWindow;
		this._constructorOrSubWindowLayoutConfig = parameters.constructorOrSubWindowLayoutConfig;
		I18nStrings.checkInitialise();
		ConfigMinifier.checkInitialise();
		if (parameters.containerElement !== void 0) this._containerElement = parameters.containerElement;
	}
	get container() {
		return this._containerElement;
	}
	get isInitialised() {
		return this._isInitialised;
	}
	/** @internal */
	get groundItem() {
		return this._groundItem;
	}
	/** @internal @deprecated use {@link (LayoutManager:class).groundItem} instead */
	get root() {
		return this._groundItem;
	}
	get openPopouts() {
		return this._openPopouts;
	}
	/** @internal */
	get dropTargetIndicator() {
		return this._dropTargetIndicator;
	}
	/** @internal @deprecated To be removed */
	get transitionIndicator() {
		return this._transitionIndicator;
	}
	get width() {
		return this._width;
	}
	get height() {
		return this._height;
	}
	/**
	* Retrieves the {@link (EventHub:class)} instance associated with this layout manager.
	* This can be used to propagate events between the windows
	* @public
	*/
	get eventHub() {
		return this._eventHub;
	}
	get rootItem() {
		if (this._groundItem === void 0) throw new Error("Cannot access rootItem before init");
		else if (this._groundItem.contentItems.length === 0) return;
		else return this._groundItem.contentItems[0];
	}
	get focusedComponentItem() {
		return this._focusedComponentItem;
	}
	/** @internal */
	get tabDropPlaceholder() {
		return this._tabDropPlaceholder;
	}
	get maximisedStack() {
		return this._maximisedStack;
	}
	/** @deprecated indicates deprecated constructor use */
	get deprecatedConstructor() {
		return !this.isSubWindow && this._constructorOrSubWindowLayoutConfig !== void 0;
	}
	/**
	* Destroys the LayoutManager instance itself as well as every ContentItem
	* within it. After this is called nothing should be left of the LayoutManager.
	*
	* This function only needs to be called if an application wishes to destroy the Golden Layout object while
	* a page remains loaded. When a page is unloaded, all resources claimed by Golden Layout will automatically
	* be released.
	*/
	destroy() {
		if (this._isInitialised) {
			if (this._windowBeforeUnloadListening) {
				globalThis.removeEventListener("beforeunload", this._windowBeforeUnloadListener);
				this._windowBeforeUnloadListening = false;
			}
			if (this.layoutConfig.settings.closePopoutsOnUnload === true) this.closeAllOpenPopouts();
			this._resizeObserver.disconnect();
			this.checkClearResizeTimeout();
			if (this._groundItem !== void 0) this._groundItem.destroy();
			this._tabDropPlaceholder.remove();
			if (this._dropTargetIndicator !== null) this._dropTargetIndicator.destroy();
			if (this._transitionIndicator !== null) this._transitionIndicator.destroy();
			this._eventHub.destroy();
			for (const dragSource of this._dragSources) dragSource.destroy();
			this._dragSources = [];
			this._isInitialised = false;
		}
	}
	/**
	* Takes a GoldenLayout configuration object and
	* replaces its keys and values recursively with
	* one letter codes
	* @deprecated use {@link (ResolvedLayoutConfig:namespace).minifyConfig} instead
	*/
	minifyConfig(config) {
		return ResolvedLayoutConfig.minifyConfig(config);
	}
	/**
	* Takes a configuration Object that was previously minified
	* using minifyConfig and returns its original version
	* @deprecated use {@link (ResolvedLayoutConfig:namespace).unminifyConfig} instead
	*/
	unminifyConfig(config) {
		return ResolvedLayoutConfig.unminifyConfig(config);
	}
	/**
	* Called from GoldenLayout class. Finishes of init
	* @internal
	*/
	init() {
		this.setContainer();
		this._dropTargetIndicator = new DropTargetIndicator();
		this._transitionIndicator = new TransitionIndicator();
		this.updateSizeFromContainer();
		let subWindowRootConfig;
		if (this.isSubWindow) if (this._constructorOrSubWindowLayoutConfig === void 0) throw new UnexpectedUndefinedError("LMIU07155");
		else {
			const root = this._constructorOrSubWindowLayoutConfig.root;
			if (root === void 0) throw new AssertError("LMIC07156");
			else if (ItemConfig.isComponent(root)) subWindowRootConfig = root;
			else throw new AssertError("LMIC07157");
			const resolvedLayoutConfig = LayoutConfig.resolve(this._constructorOrSubWindowLayoutConfig);
			this.layoutConfig = Object.assign(Object.assign({}, resolvedLayoutConfig), { root: void 0 });
		}
		else if (this._constructorOrSubWindowLayoutConfig === void 0) this.layoutConfig = ResolvedLayoutConfig.createDefault();
		else this.layoutConfig = LayoutConfig.resolve(this._constructorOrSubWindowLayoutConfig);
		const layoutConfig = this.layoutConfig;
		this._groundItem = new GroundItem(this, layoutConfig.root, this._containerElement);
		this._groundItem.init();
		this.checkLoadedLayoutMaximiseItem();
		this._resizeObserver.observe(this._containerElement);
		this._isInitialised = true;
		this.adjustColumnsResponsive();
		this.emit("initialised");
		if (subWindowRootConfig !== void 0) this.loadComponentAsRoot(subWindowRootConfig);
	}
	/**
	* Loads a new layout
	* @param layoutConfig - New layout to be loaded
	*/
	loadLayout(layoutConfig) {
		if (!this.isInitialised) throw new Error("GoldenLayout: Need to call init() if LayoutConfig with defined root passed to constructor");
		else if (this._groundItem === void 0) throw new UnexpectedUndefinedError("LMLL11119");
		else {
			this.createSubWindows();
			this.layoutConfig = LayoutConfig.resolve(layoutConfig);
			this._groundItem.loadRoot(this.layoutConfig.root);
			this.checkLoadedLayoutMaximiseItem();
			this.adjustColumnsResponsive();
		}
	}
	/**
	* Creates a layout configuration object based on the the current state
	*
	* @public
	* @returns GoldenLayout configuration
	*/
	saveLayout() {
		if (this._isInitialised === false) throw new Error("Can't create config, layout not yet initialised");
		else if (this._groundItem === void 0) throw new UnexpectedUndefinedError("LMTC18244");
		else {
			const groundContent = this._groundItem.calculateConfigContent();
			let rootItemConfig;
			if (groundContent.length !== 1) rootItemConfig = void 0;
			else rootItemConfig = groundContent[0];
			this.reconcilePopoutWindows();
			const openPopouts = [];
			for (let i = 0; i < this._openPopouts.length; i++) openPopouts.push(this._openPopouts[i].toConfig());
			return {
				root: rootItemConfig,
				openPopouts,
				settings: ResolvedLayoutConfig.Settings.createCopy(this.layoutConfig.settings),
				dimensions: ResolvedLayoutConfig.Dimensions.createCopy(this.layoutConfig.dimensions),
				header: ResolvedLayoutConfig.Header.createCopy(this.layoutConfig.header),
				resolved: true
			};
		}
	}
	/**
	* Removes any existing layout. Effectively, an empty layout will be loaded.
	*/
	clear() {
		if (this._groundItem === void 0) throw new UnexpectedUndefinedError("LMCL11129");
		else this._groundItem.clearRoot();
	}
	/**
	* @deprecated Use {@link (LayoutManager:class).saveLayout}
	*/
	toConfig() {
		return this.saveLayout();
	}
	/**
	* Adds a new ComponentItem.  Will use default location selectors to ensure a location is found and
	* component is successfully added
	* @param componentTypeName - Name of component type to be created.
	* @param state - Optional initial state to be assigned to component
	* @returns New ComponentItem created.
	*/
	newComponent(componentType, componentState, title) {
		const componentItem = this.newComponentAtLocation(componentType, componentState, title);
		if (componentItem === void 0) throw new AssertError("LMNC65588");
		else return componentItem;
	}
	/**
	* Adds a ComponentItem at the first valid selector location.
	* @param componentTypeName - Name of component type to be created.
	* @param state - Optional initial state to be assigned to component
	* @param locationSelectors - Array of location selectors used to find location in layout where component
	* will be added. First location in array which is valid will be used. If locationSelectors is undefined,
	* {@link (LayoutManager:namespace).defaultLocationSelectors} will be used
	* @returns New ComponentItem created or undefined if no valid location selector was in array.
	*/
	newComponentAtLocation(componentType, componentState, title, locationSelectors) {
		if (this._groundItem === void 0) throw new Error("Cannot add component before init");
		else {
			const location = this.addComponentAtLocation(componentType, componentState, title, locationSelectors);
			if (location === void 0) return;
			else {
				const createdItem = location.parentItem.contentItems[location.index];
				if (!ContentItem.isComponentItem(createdItem)) throw new AssertError("LMNC992877533");
				else return createdItem;
			}
		}
	}
	/**
	* Adds a new ComponentItem.  Will use default location selectors to ensure a location is found and
	* component is successfully added
	* @param componentType - Type of component to be created.
	* @param state - Optional initial state to be assigned to component
	* @returns Location of new ComponentItem created.
	*/
	addComponent(componentType, componentState, title) {
		const location = this.addComponentAtLocation(componentType, componentState, title);
		if (location === void 0) throw new AssertError("LMAC99943");
		else return location;
	}
	/**
	* Adds a ComponentItem at the first valid selector location.
	* @param componentType - Type of component to be created.
	* @param state - Optional initial state to be assigned to component
	* @param locationSelectors - Array of location selectors used to find determine location in layout where component
	* will be added. First location in array which is valid will be used. If undefined,
	* {@link (LayoutManager:namespace).defaultLocationSelectors} will be used.
	* @returns Location of new ComponentItem created or undefined if no valid location selector was in array.
	*/
	addComponentAtLocation(componentType, componentState, title, locationSelectors) {
		const itemConfig = {
			type: "component",
			componentType,
			componentState,
			title
		};
		return this.addItemAtLocation(itemConfig, locationSelectors);
	}
	/**
	* Adds a new ContentItem.  Will use default location selectors to ensure a location is found and
	* component is successfully added
	* @param itemConfig - ResolvedItemConfig of child to be added.
	* @returns New ContentItem created.
	*/
	newItem(itemConfig) {
		const contentItem = this.newItemAtLocation(itemConfig);
		if (contentItem === void 0) throw new AssertError("LMNC65588");
		else return contentItem;
	}
	/**
	* Adds a new child ContentItem under the root ContentItem.  If a root does not exist, then create root ContentItem instead
	* @param itemConfig - ResolvedItemConfig of child to be added.
	* @param locationSelectors - Array of location selectors used to find determine location in layout where ContentItem
	* will be added. First location in array which is valid will be used. If undefined,
	* {@link (LayoutManager:namespace).defaultLocationSelectors} will be used.
	* @returns New ContentItem created or undefined if no valid location selector was in array. */
	newItemAtLocation(itemConfig, locationSelectors) {
		if (this._groundItem === void 0) throw new Error("Cannot add component before init");
		else {
			const location = this.addItemAtLocation(itemConfig, locationSelectors);
			if (location === void 0) return;
			else return location.parentItem.contentItems[location.index];
		}
	}
	/**
	* Adds a new ContentItem.  Will use default location selectors to ensure a location is found and
	* component is successfully added.
	* @param itemConfig - ResolvedItemConfig of child to be added.
	* @returns Location of new ContentItem created. */
	addItem(itemConfig) {
		const location = this.addItemAtLocation(itemConfig);
		if (location === void 0) throw new AssertError("LMAI99943");
		else return location;
	}
	/**
	* Adds a ContentItem at the first valid selector location.
	* @param itemConfig - ResolvedItemConfig of child to be added.
	* @param locationSelectors - Array of location selectors used to find determine location in layout where ContentItem
	* will be added. First location in array which is valid will be used. If undefined,
	* {@link (LayoutManager:namespace).defaultLocationSelectors} will be used.
	* @returns Location of new ContentItem created or undefined if no valid location selector was in array. */
	addItemAtLocation(itemConfig, locationSelectors) {
		if (this._groundItem === void 0) throw new Error("Cannot add component before init");
		else {
			if (locationSelectors === void 0) locationSelectors = LayoutManager.defaultLocationSelectors;
			const location = this.findFirstLocation(locationSelectors);
			if (location === void 0) return;
			else {
				let parentItem = location.parentItem;
				let addIdx;
				switch (parentItem.type) {
					case ItemType.ground:
						addIdx = parentItem.addItem(itemConfig, location.index);
						if (addIdx >= 0) parentItem = this._groundItem.contentItems[0];
						else addIdx = 0;
						break;
					case ItemType.row:
					case ItemType.column:
						addIdx = parentItem.addItem(itemConfig, location.index);
						break;
					case ItemType.stack: if (!ItemConfig.isComponent(itemConfig)) throw Error(i18nStrings[6]);
					else {
						addIdx = parentItem.addItem(itemConfig, location.index);
						break;
					}
					case ItemType.component: throw new AssertError("LMAIALC87444602");
					default: throw new UnreachableCaseError("LMAIALU98881733", parentItem.type);
				}
				if (ItemConfig.isComponent(itemConfig)) {
					const item = parentItem.contentItems[addIdx];
					if (ContentItem.isStack(item)) {
						parentItem = item;
						addIdx = 0;
					}
				}
				location.parentItem = parentItem;
				location.index = addIdx;
				return location;
			}
		}
	}
	/** Loads the specified component ResolvedItemConfig as root.
	* This can be used to display a Component all by itself.  The layout cannot be changed other than having another new layout loaded.
	* Note that, if this layout is saved and reloaded, it will reload with the Component as a child of a Stack.
	*/
	loadComponentAsRoot(itemConfig) {
		if (this._groundItem === void 0) throw new Error("Cannot add item before init");
		else this._groundItem.loadComponentAsRoot(itemConfig);
	}
	/** @deprecated Use {@link (LayoutManager:class).setSize} */
	updateSize(width, height) {
		this.setSize(width, height);
	}
	/**
	* Updates the layout managers size
	*
	* @param width - Width in pixels
	* @param height - Height in pixels
	*/
	setSize(width, height) {
		this._width = width;
		this._height = height;
		if (this._isInitialised === true) if (this._groundItem === void 0) throw new UnexpectedUndefinedError("LMUS18881");
		else {
			this._groundItem.setSize(this._width, this._height);
			if (this._maximisedStack) {
				const { width, height } = getElementWidthAndHeight(this._containerElement);
				setElementWidth(this._maximisedStack.element, width);
				setElementHeight(this._maximisedStack.element, height);
				this._maximisedStack.updateSize(false);
			}
			this.adjustColumnsResponsive();
		}
	}
	/** @internal */
	beginSizeInvalidation() {
		this._sizeInvalidationBeginCount++;
	}
	/** @internal */
	endSizeInvalidation() {
		if (--this._sizeInvalidationBeginCount === 0) this.updateSizeFromContainer();
	}
	/** @internal */
	updateSizeFromContainer() {
		const { width, height } = getElementWidthAndHeight(this._containerElement);
		this.setSize(width, height);
	}
	/**
	* Update the size of the root ContentItem.  This will update the size of all contentItems in the tree
	* @param force - In some cases the size is not updated if it has not changed. In this case, events
	* (such as ComponentContainer.virtualRectingRequiredEvent) are not fired. Setting force to true, ensures the size is updated regardless, and
	* the respective events are fired. This is sometimes necessary when a component's size has not changed but it has become visible, and the
	* relevant events need to be fired.
	*/
	updateRootSize(force = false) {
		if (this._groundItem === void 0) throw new UnexpectedUndefinedError("LMURS28881");
		else this._groundItem.updateSize(force);
	}
	/** @public */
	createAndInitContentItem(config, parent) {
		const newItem = this.createContentItem(config, parent);
		newItem.init();
		return newItem;
	}
	/**
	* Recursively creates new item tree structures based on a provided
	* ItemConfiguration object
	*
	* @param config - ResolvedItemConfig
	* @param parent - The item the newly created item should be a child of
	* @internal
	*/
	createContentItem(config, parent) {
		if (typeof config.type !== "string") throw new ConfigurationError("Missing parameter 'type'", JSON.stringify(config));
		/**
		* We add an additional stack around every component that's not within a stack anyways.
		*/
		if (ResolvedItemConfig.isComponentItem(config) && !(parent instanceof Stack) && !!parent && !(this.isSubWindow === true && parent instanceof GroundItem)) config = {
			type: ItemType.stack,
			content: [config],
			size: config.size,
			sizeUnit: config.sizeUnit,
			minSize: config.minSize,
			minSizeUnit: config.minSizeUnit,
			id: config.id,
			maximised: config.maximised,
			isClosable: config.isClosable,
			activeItemIndex: 0,
			header: void 0
		};
		return this.createContentItemFromConfig(config, parent);
	}
	findFirstComponentItemById(id) {
		if (this._groundItem === void 0) throw new UnexpectedUndefinedError("LMFFCIBI82446");
		else return this.findFirstContentItemTypeByIdRecursive(ItemType.component, id, this._groundItem);
	}
	/**
	* Creates a popout window with the specified content at the specified position
	*
	* @param itemConfigOrContentItem - The content of the popout window's layout manager derived from either
	* a {@link (ContentItem:class)} or {@link (ItemConfig:interface)} or ResolvedItemConfig content (array of {@link (ItemConfig:interface)})
	* @param positionAndSize - The width, height, left and top of Popout window
	* @param parentId -The id of the element this item will be appended to when popIn is called
	* @param indexInParent - The position of this item within its parent element
	*/
	createPopout(itemConfigOrContentItem, positionAndSize, parentId, indexInParent) {
		if (itemConfigOrContentItem instanceof ContentItem) return this.createPopoutFromContentItem(itemConfigOrContentItem, positionAndSize, parentId, indexInParent);
		else return this.createPopoutFromItemConfig(itemConfigOrContentItem, positionAndSize, parentId, indexInParent);
	}
	/** @internal */
	createPopoutFromContentItem(item, window, parentId, indexInParent) {
		/**
		* If the item is the only component within a stack or for some
		* other reason the only child of its parent the parent will be destroyed
		* when the child is removed.
		*
		* In order to support this we move up the tree until we find something
		* that will remain after the item is being popped out
		*/
		let parent = item.parent;
		let child = item;
		while (parent !== null && parent.contentItems.length === 1 && !parent.isGround) {
			child = parent;
			parent = parent.parent;
		}
		if (parent === null) throw new UnexpectedNullError("LMCPFCI00834");
		else {
			if (indexInParent === void 0) indexInParent = parent.contentItems.indexOf(child);
			if (parentId !== null) parent.addPopInParentId(parentId);
			if (window === void 0) {
				const windowLeft = globalThis.screenX || globalThis.screenLeft;
				const windowTop = globalThis.screenY || globalThis.screenTop;
				const offsetLeft = item.element.offsetLeft;
				const offsetTop = item.element.offsetTop;
				const { width, height } = getElementWidthAndHeight(item.element);
				window = {
					left: windowLeft + offsetLeft,
					top: windowTop + offsetTop,
					width,
					height
				};
			}
			const itemConfig = item.toConfig();
			item.remove();
			if (!ResolvedRootItemConfig.isRootItemConfig(itemConfig)) throw new Error(`${i18nStrings[0]}`);
			else return this.createPopoutFromItemConfig(itemConfig, window, parentId, indexInParent);
		}
	}
	/** @internal */
	beginVirtualSizedContainerAdding() {
		if (++this._virtualSizedContainerAddingBeginCount === 0) this._virtualSizedContainers.length = 0;
	}
	/** @internal */
	addVirtualSizedContainer(container) {
		this._virtualSizedContainers.push(container);
	}
	/** @internal */
	endVirtualSizedContainerAdding() {
		if (--this._virtualSizedContainerAddingBeginCount === 0) {
			const count = this._virtualSizedContainers.length;
			if (count > 0) {
				this.fireBeforeVirtualRectingEvent(count);
				for (let i = 0; i < count; i++) this._virtualSizedContainers[i].notifyVirtualRectingRequired();
				this.fireAfterVirtualRectingEvent();
				this._virtualSizedContainers.length = 0;
			}
		}
	}
	/** @internal */
	fireBeforeVirtualRectingEvent(count) {
		if (this.beforeVirtualRectingEvent !== void 0) this.beforeVirtualRectingEvent(count);
	}
	/** @internal */
	fireAfterVirtualRectingEvent() {
		if (this.afterVirtualRectingEvent !== void 0) this.afterVirtualRectingEvent();
	}
	/** @internal */
	createPopoutFromItemConfig(rootItemConfig, window, parentId, indexInParent) {
		const layoutConfig = this.toConfig();
		const popoutLayoutConfig = {
			root: rootItemConfig,
			openPopouts: [],
			settings: layoutConfig.settings,
			dimensions: layoutConfig.dimensions,
			header: layoutConfig.header,
			window,
			parentId,
			indexInParent,
			resolved: true
		};
		return this.createPopoutFromPopoutLayoutConfig(popoutLayoutConfig);
	}
	/** @internal */
	createPopoutFromPopoutLayoutConfig(config) {
		var _a, _b, _c, _d;
		const configWindow = config.window;
		const browserPopout = new BrowserPopout(config, {
			left: (_a = configWindow.left) !== null && _a !== void 0 ? _a : globalThis.screenX || globalThis.screenLeft + 20,
			top: (_b = configWindow.top) !== null && _b !== void 0 ? _b : globalThis.screenY || globalThis.screenTop + 20,
			width: (_c = configWindow.width) !== null && _c !== void 0 ? _c : 500,
			height: (_d = configWindow.height) !== null && _d !== void 0 ? _d : 309
		}, this);
		browserPopout.on("initialised", () => this.emit("windowOpened", browserPopout));
		browserPopout.on("closed", () => this.reconcilePopoutWindows());
		this._openPopouts.push(browserPopout);
		if (this.layoutConfig.settings.closePopoutsOnUnload && !this._windowBeforeUnloadListening) {
			globalThis.addEventListener("beforeunload", this._windowBeforeUnloadListener, { passive: true });
			this._windowBeforeUnloadListening = true;
		}
		return browserPopout;
	}
	/**
	* Closes all Open Popouts
	* Applications can call this method when a page is unloaded to remove its open popouts
	*/
	closeAllOpenPopouts() {
		for (let i = 0; i < this._openPopouts.length; i++) this._openPopouts[i].close();
		this._openPopouts.length = 0;
		if (this._windowBeforeUnloadListening) {
			globalThis.removeEventListener("beforeunload", this._windowBeforeUnloadListener);
			this._windowBeforeUnloadListening = false;
		}
	}
	newDragSource(element, componentTypeOrItemConfigCallback, componentState, title, id) {
		const dragSource = new DragSource(this, element, [], componentTypeOrItemConfigCallback, componentState, title, id);
		this._dragSources.push(dragSource);
		return dragSource;
	}
	/**
	* Removes a DragListener added by createDragSource() so the corresponding
	* DOM element is not a drag source any more.
	*/
	removeDragSource(dragSource) {
		removeFromArray(dragSource, this._dragSources);
		dragSource.destroy();
	}
	/** @internal */
	startComponentDrag(x, y, dragListener, componentItem, stack) {
		new DragProxy(x, y, dragListener, this, componentItem, stack);
	}
	/**
	* Programmatically focuses an item. This focuses the specified component item
	* and the item emits a focus event
	*
	* @param item - The component item to be focused
	* @param suppressEvent - Whether to emit focus event
	*/
	focusComponent(item, suppressEvent = false) {
		item.focus(suppressEvent);
	}
	/**
	* Programmatically blurs (defocuses) the currently focused component.
	* If a component item is focused, then it is blurred and and the item emits a blur event
	*
	* @param item - The component item to be blurred
	* @param suppressEvent - Whether to emit blur event
	*/
	clearComponentFocus(suppressEvent = false) {
		this.setFocusedComponentItem(void 0, suppressEvent);
	}
	/**
	* Programmatically focuses a component item or removes focus (blurs) from an existing focused component item.
	*
	* @param item - If defined, specifies the component item to be given focus.  If undefined, clear component focus.
	* @param suppressEvents - Whether to emit focus and blur events
	* @internal
	*/
	setFocusedComponentItem(item, suppressEvents = false) {
		if (item !== this._focusedComponentItem) {
			let newFocusedParentItem;
			if (item === void 0) {} else newFocusedParentItem = item.parentItem;
			if (this._focusedComponentItem !== void 0) {
				const oldFocusedItem = this._focusedComponentItem;
				this._focusedComponentItem = void 0;
				oldFocusedItem.setBlurred(suppressEvents);
				const oldFocusedParentItem = oldFocusedItem.parentItem;
				if (newFocusedParentItem === oldFocusedParentItem) newFocusedParentItem = void 0;
				else oldFocusedParentItem.setFocusedValue(false);
			}
			if (item !== void 0) {
				this._focusedComponentItem = item;
				item.setFocused(suppressEvents);
				if (newFocusedParentItem !== void 0) newFocusedParentItem.setFocusedValue(true);
			}
		}
	}
	/** @internal */
	createContentItemFromConfig(config, parent) {
		switch (config.type) {
			case ItemType.ground: throw new AssertError("LMCCIFC68871");
			case ItemType.row: return new RowOrColumn(false, this, config, parent);
			case ItemType.column: return new RowOrColumn(true, this, config, parent);
			case ItemType.stack: return new Stack(this, config, parent);
			case ItemType.component: return new ComponentItem(this, config, parent);
			default: throw new UnreachableCaseError("CCC913564", config.type, "Invalid Config Item type specified");
		}
	}
	/**
	* This should only be called from stack component.
	* Stack will look after docking processing associated with maximise/minimise
	* @internal
	**/
	setMaximisedStack(stack) {
		if (stack === void 0) {
			if (this._maximisedStack !== void 0) this.processMinimiseMaximisedStack();
		} else if (stack !== this._maximisedStack) {
			if (this._maximisedStack !== void 0) this.processMinimiseMaximisedStack();
			this.processMaximiseStack(stack);
		}
	}
	checkMinimiseMaximisedStack() {
		if (this._maximisedStack !== void 0) this._maximisedStack.minimise();
	}
	/** @internal */
	cleanupBeforeMaximisedStackDestroyed(event) {
		if (this._maximisedStack !== null && this._maximisedStack === event.target) {
			this._maximisedStack.off("beforeItemDestroyed", this._maximisedStackBeforeDestroyedListener);
			this._maximisedStack = void 0;
		}
	}
	/**
	* This method is used to get around sandboxed iframe restrictions.
	* If 'allow-top-navigation' is not specified in the iframe's 'sandbox' attribute
	* (as is the case with codepens) the parent window is forbidden from calling certain
	* methods on the child, such as window.close() or setting document.location.href.
	*
	* This prevented GoldenLayout popouts from popping in in codepens. The fix is to call
	* _$closeWindow on the child window's gl instance which (after a timeout to disconnect
	* the invoking method from the close call) closes itself.
	*
	* @internal
	*/
	closeWindow() {
		globalThis.setTimeout(() => globalThis.close(), 1);
	}
	/** @internal */
	getArea(x, y) {
		let matchingArea = null;
		let smallestSurface = Infinity;
		for (let i = 0; i < this._itemAreas.length; i++) {
			const area = this._itemAreas[i];
			if (x >= area.x1 && x < area.x2 && y >= area.y1 && y < area.y2 && smallestSurface > area.surface) {
				smallestSurface = area.surface;
				matchingArea = area;
			}
		}
		return matchingArea;
	}
	/** @internal */
	calculateItemAreas() {
		const allContentItems = this.getAllContentItems();
		/**
		* If the last item is dragged out, highlight the entire container size to
		* allow to re-drop it. this.ground.contentiItems.length === 0 at this point
		*
		* Don't include ground into the possible drop areas though otherwise since it
		* will used for every gap in the layout, e.g. splitters
		*/
		const groundItem = this._groundItem;
		if (groundItem === void 0) throw new UnexpectedUndefinedError("LMCIAR44365");
		else if (allContentItems.length === 1) {
			const groundArea = groundItem.getElementArea();
			if (groundArea === null) throw new UnexpectedNullError("LMCIARA44365");
			else this._itemAreas = [groundArea];
			return;
		} else {
			if (groundItem.contentItems[0].isStack) this._itemAreas = [];
			else this._itemAreas = groundItem.createSideAreas();
			for (let i = 0; i < allContentItems.length; i++) {
				const stack = allContentItems[i];
				if (ContentItem.isStack(stack)) {
					const area = stack.getArea();
					if (area === null) continue;
					else {
						this._itemAreas.push(area);
						const stackContentAreaDimensions = stack.contentAreaDimensions;
						if (stackContentAreaDimensions === void 0) throw new UnexpectedUndefinedError("LMCIASC45599");
						else {
							const highlightArea = stackContentAreaDimensions.header.highlightArea;
							const surface = (highlightArea.x2 - highlightArea.x1) * (highlightArea.y2 - highlightArea.y1);
							const header = {
								x1: highlightArea.x1,
								x2: highlightArea.x2,
								y1: highlightArea.y1,
								y2: highlightArea.y2,
								contentItem: stack,
								surface
							};
							this._itemAreas.push(header);
						}
					}
				}
			}
		}
	}
	/**
	* Called as part of loading a new layout (including initial init()).
	* Checks to see layout has a maximised item. If so, it maximises that item.
	* @internal
	*/
	checkLoadedLayoutMaximiseItem() {
		if (this._groundItem === void 0) throw new UnexpectedUndefinedError("LMCLLMI43432");
		else {
			const configMaximisedItems = this._groundItem.getConfigMaximisedItems();
			if (configMaximisedItems.length > 0) {
				let item = configMaximisedItems[0];
				if (ContentItem.isComponentItem(item)) {
					const stack = item.parent;
					if (stack === null) throw new UnexpectedNullError("LMXLLMI69999");
					else item = stack;
				}
				if (!ContentItem.isStack(item)) throw new AssertError("LMCLLMI19993");
				else item.maximise();
			}
		}
	}
	/** @internal */
	processMaximiseStack(stack) {
		this._maximisedStack = stack;
		stack.on("beforeItemDestroyed", this._maximisedStackBeforeDestroyedListener);
		stack.element.classList.add("lm_maximised");
		stack.element.insertAdjacentElement("afterend", this._maximisePlaceholder);
		if (this._groundItem === void 0) throw new UnexpectedUndefinedError("LMMXI19993");
		else {
			this._groundItem.element.prepend(stack.element);
			const { width, height } = getElementWidthAndHeight(this._containerElement);
			setElementWidth(stack.element, width);
			setElementHeight(stack.element, height);
			stack.updateSize(true);
			stack.focusActiveContentItem();
			this._maximisedStack.emit("maximised");
			this.emit("stateChanged");
		}
	}
	/** @internal */
	processMinimiseMaximisedStack() {
		if (this._maximisedStack === void 0) throw new AssertError("LMMMS74422");
		else {
			const stack = this._maximisedStack;
			if (stack.parent === null) throw new UnexpectedNullError("LMMI13668");
			else {
				stack.element.classList.remove("lm_maximised");
				this._maximisePlaceholder.insertAdjacentElement("afterend", stack.element);
				this._maximisePlaceholder.remove();
				this.updateRootSize(true);
				this._maximisedStack = void 0;
				stack.off("beforeItemDestroyed", this._maximisedStackBeforeDestroyedListener);
				stack.emit("minimised");
				this.emit("stateChanged");
			}
		}
	}
	/**
	* Iterates through the array of open popout windows and removes the ones
	* that are effectively closed. This is necessary due to the lack of reliably
	* listening for window.close / unload events in a cross browser compatible fashion.
	* @internal
	*/
	reconcilePopoutWindows() {
		const openPopouts = [];
		for (let i = 0; i < this._openPopouts.length; i++) if (this._openPopouts[i].getWindow().closed === false) openPopouts.push(this._openPopouts[i]);
		else this.emit("windowClosed", this._openPopouts[i]);
		if (this._openPopouts.length !== openPopouts.length) {
			this._openPopouts = openPopouts;
			this.emit("stateChanged");
		}
	}
	/**
	* Returns a flattened array of all content items,
	* regardles of level or type
	* @internal
	*/
	getAllContentItems() {
		if (this._groundItem === void 0) throw new UnexpectedUndefinedError("LMGACI13130");
		else return this._groundItem.getAllContentItems();
	}
	/**
	* Creates Subwindows (if there are any). Throws an error
	* if popouts are blocked.
	* @internal
	*/
	createSubWindows() {
		for (let i = 0; i < this.layoutConfig.openPopouts.length; i++) {
			const popoutConfig = this.layoutConfig.openPopouts[i];
			this.createPopoutFromPopoutLayoutConfig(popoutConfig);
		}
	}
	/**
	* Debounces resize events
	* @internal
	*/
	handleContainerResize() {
		if (this.resizeWithContainerAutomatically) this.processResizeWithDebounce();
	}
	/**
	* Debounces resize events
	* @internal
	*/
	processResizeWithDebounce() {
		if (this.resizeDebounceExtendedWhenPossible) this.checkClearResizeTimeout();
		if (this._resizeTimeoutId === void 0) this._resizeTimeoutId = setTimeout(() => {
			this._resizeTimeoutId = void 0;
			this.beginSizeInvalidation();
			this.endSizeInvalidation();
		}, this.resizeDebounceInterval);
	}
	checkClearResizeTimeout() {
		if (this._resizeTimeoutId !== void 0) {
			clearTimeout(this._resizeTimeoutId);
			this._resizeTimeoutId = void 0;
		}
	}
	/**
	* Determines what element the layout will be created in
	* @internal
	*/
	setContainer() {
		var _a;
		const bodyElement = document.body;
		const containerElement = (_a = this._containerElement) !== null && _a !== void 0 ? _a : bodyElement;
		if (containerElement === bodyElement) {
			this.resizeWithContainerAutomatically = true;
			const documentElement = document.documentElement;
			documentElement.style.height = "100%";
			documentElement.style.margin = "0";
			documentElement.style.padding = "0";
			documentElement.style.overflow = "clip";
			bodyElement.style.height = "100%";
			bodyElement.style.margin = "0";
			bodyElement.style.padding = "0";
			bodyElement.style.overflow = "clip";
		}
		this._containerElement = containerElement;
	}
	/**
	* Called when the window is closed or the user navigates away
	* from the page
	* @internal
	* @deprecated to be removed in version 3
	*/
	onBeforeUnload() {
		this.destroy();
	}
	/**
	* Adjusts the number of columns to be lower to fit the screen and still maintain minItemWidth.
	* @internal
	*/
	adjustColumnsResponsive() {
		if (this._groundItem === void 0) throw new UnexpectedUndefinedError("LMACR20883");
		else {
			this._firstLoad = false;
			if (this.useResponsiveLayout() && !this._updatingColumnsResponsive && this._groundItem.contentItems.length > 0 && this._groundItem.contentItems[0].isRow) if (this._groundItem === void 0 || this._width === null) throw new UnexpectedUndefinedError("LMACR77412");
			else {
				const columnCount = this._groundItem.contentItems[0].contentItems.length;
				if (columnCount <= 1) return;
				else {
					const minItemWidth = this.layoutConfig.dimensions.defaultMinItemWidth;
					if (columnCount * minItemWidth <= this._width) return;
					else {
						this._updatingColumnsResponsive = true;
						const stackColumnCount = columnCount - Math.max(Math.floor(this._width / minItemWidth), 1);
						const rootContentItem = this._groundItem.contentItems[0];
						const allStacks = this.getAllStacks();
						if (allStacks.length === 0) throw new AssertError("LMACRS77413");
						else {
							const firstStackContainer = allStacks[0];
							for (let i = 0; i < stackColumnCount; i++) {
								const column = rootContentItem.contentItems[rootContentItem.contentItems.length - 1];
								this.addChildContentItemsToContainer(firstStackContainer, column);
							}
							this._updatingColumnsResponsive = false;
						}
					}
				}
			}
		}
	}
	/**
	* Determines if responsive layout should be used.
	*
	* @returns True if responsive layout should be used; otherwise false.
	* @internal
	*/
	useResponsiveLayout() {
		const settings = this.layoutConfig.settings;
		const alwaysResponsiveMode = settings.responsiveMode === ResponsiveMode.always;
		const onLoadResponsiveModeAndFirst = settings.responsiveMode === ResponsiveMode.onload && this._firstLoad;
		return alwaysResponsiveMode || onLoadResponsiveModeAndFirst;
	}
	/**
	* Adds all children of a node to another container recursively.
	* @param container - Container to add child content items to.
	* @param node - Node to search for content items.
	* @internal
	*/
	addChildContentItemsToContainer(container, node) {
		const contentItems = node.contentItems;
		if (node instanceof Stack) for (let i = 0; i < contentItems.length; i++) {
			const item = contentItems[i];
			node.removeChild(item, true);
			container.addChild(item);
		}
		else for (let i = 0; i < contentItems.length; i++) {
			const item = contentItems[i];
			this.addChildContentItemsToContainer(container, item);
		}
	}
	/**
	* Finds all the stacks.
	* @returns The found stack containers.
	* @internal
	*/
	getAllStacks() {
		if (this._groundItem === void 0) throw new UnexpectedUndefinedError("LMFASC52778");
		else {
			const stacks = [];
			this.findAllStacksRecursive(stacks, this._groundItem);
			return stacks;
		}
	}
	/** @internal */
	findFirstContentItemType(type) {
		if (this._groundItem === void 0) throw new UnexpectedUndefinedError("LMFFCIT82446");
		else return this.findFirstContentItemTypeRecursive(type, this._groundItem);
	}
	/** @internal */
	findFirstContentItemTypeRecursive(type, node) {
		const contentItems = node.contentItems;
		const contentItemCount = contentItems.length;
		if (contentItemCount === 0) return;
		else {
			for (let i = 0; i < contentItemCount; i++) {
				const contentItem = contentItems[i];
				if (contentItem.type === type) return contentItem;
			}
			for (let i = 0; i < contentItemCount; i++) {
				const contentItem = contentItems[i];
				const foundContentItem = this.findFirstContentItemTypeRecursive(type, contentItem);
				if (foundContentItem !== void 0) return foundContentItem;
			}
			return;
		}
	}
	/** @internal */
	findFirstContentItemTypeByIdRecursive(type, id, node) {
		const contentItems = node.contentItems;
		const contentItemCount = contentItems.length;
		if (contentItemCount === 0) return;
		else {
			for (let i = 0; i < contentItemCount; i++) {
				const contentItem = contentItems[i];
				if (contentItem.type === type && contentItem.id === id) return contentItem;
			}
			for (let i = 0; i < contentItemCount; i++) {
				const contentItem = contentItems[i];
				const foundContentItem = this.findFirstContentItemTypeByIdRecursive(type, id, contentItem);
				if (foundContentItem !== void 0) return foundContentItem;
			}
			return;
		}
	}
	/**
	* Finds all the stack containers.
	*
	* @param stacks - Set of containers to populate.
	* @param node - Current node to process.
	* @internal
	*/
	findAllStacksRecursive(stacks, node) {
		const contentItems = node.contentItems;
		for (let i = 0; i < contentItems.length; i++) {
			const item = contentItems[i];
			if (item instanceof Stack) stacks.push(item);
			else if (!item.isComponent) this.findAllStacksRecursive(stacks, item);
		}
	}
	/** @internal */
	findFirstLocation(selectors) {
		const count = selectors.length;
		for (let i = 0; i < count; i++) {
			const selector = selectors[i];
			const location = this.findLocation(selector);
			if (location !== void 0) return location;
		}
	}
	/** @internal */
	findLocation(selector) {
		const selectorIndex = selector.index;
		switch (selector.typeId) {
			case 0: if (this._focusedComponentItem === void 0) return;
			else {
				const parentItem = this._focusedComponentItem.parentItem;
				const parentContentItems = parentItem.contentItems;
				const parentContentItemCount = parentContentItems.length;
				if (selectorIndex === void 0) return {
					parentItem,
					index: parentContentItemCount
				};
				else {
					const index = parentContentItems.indexOf(this._focusedComponentItem) + selectorIndex;
					if (index < 0 || index > parentContentItemCount) return;
					else return {
						parentItem,
						index
					};
				}
			}
			case 1: if (this._focusedComponentItem === void 0) return;
			else {
				const parentItem = this._focusedComponentItem.parentItem;
				return this.tryCreateLocationFromParentItem(parentItem, selectorIndex);
			}
			case 2: {
				const parentItem = this.findFirstContentItemType(ItemType.stack);
				if (parentItem === void 0) return;
				else return this.tryCreateLocationFromParentItem(parentItem, selectorIndex);
			}
			case 3: {
				let parentItem = this.findFirstContentItemType(ItemType.row);
				if (parentItem !== void 0) return this.tryCreateLocationFromParentItem(parentItem, selectorIndex);
				else {
					parentItem = this.findFirstContentItemType(ItemType.column);
					if (parentItem !== void 0) return this.tryCreateLocationFromParentItem(parentItem, selectorIndex);
					else return;
				}
			}
			case 4: {
				const parentItem = this.findFirstContentItemType(ItemType.row);
				if (parentItem === void 0) return;
				else return this.tryCreateLocationFromParentItem(parentItem, selectorIndex);
			}
			case 5: {
				const parentItem = this.findFirstContentItemType(ItemType.column);
				if (parentItem === void 0) return;
				else return this.tryCreateLocationFromParentItem(parentItem, selectorIndex);
			}
			case 6: if (this._groundItem === void 0) throw new UnexpectedUndefinedError("LMFLRIF18244");
			else if (this.rootItem !== void 0) return;
			else if (selectorIndex === void 0 || selectorIndex === 0) return {
				parentItem: this._groundItem,
				index: 0
			};
			else return;
			case 7: if (this._groundItem === void 0) throw new UnexpectedUndefinedError("LMFLF18244");
			else {
				const groundContentItems = this._groundItem.contentItems;
				if (groundContentItems.length === 0) if (selectorIndex === void 0 || selectorIndex === 0) return {
					parentItem: this._groundItem,
					index: 0
				};
				else return;
				else {
					const parentItem = groundContentItems[0];
					return this.tryCreateLocationFromParentItem(parentItem, selectorIndex);
				}
			}
		}
	}
	/** @internal */
	tryCreateLocationFromParentItem(parentItem, selectorIndex) {
		const parentContentItemCount = parentItem.contentItems.length;
		if (selectorIndex === void 0) return {
			parentItem,
			index: parentContentItemCount
		};
		else if (selectorIndex < 0 || selectorIndex > parentContentItemCount) return;
		else return {
			parentItem,
			index: selectorIndex
		};
	}
};
/** @public */
(function(LayoutManager) {
	/** @internal */
	function createMaximisePlaceElement(document) {
		const element = document.createElement("div");
		element.classList.add("lm_maximise_place");
		return element;
	}
	LayoutManager.createMaximisePlaceElement = createMaximisePlaceElement;
	/** @internal */
	function createTabDropPlaceholderElement(document) {
		const element = document.createElement("div");
		element.classList.add("lm_drop_tab_placeholder");
		return element;
	}
	LayoutManager.createTabDropPlaceholderElement = createTabDropPlaceholderElement;
	/**
	* Default LocationSelectors array used if none is specified.  Will always find a location.
	* @public
	*/
	LayoutManager.defaultLocationSelectors = [
		{
			typeId: 1,
			index: void 0
		},
		{
			typeId: 2,
			index: void 0
		},
		{
			typeId: 3,
			index: void 0
		},
		{
			typeId: 7,
			index: void 0
		}
	];
	/**
	* LocationSelectors to try to get location next to existing focused item
	* @public
	*/
	LayoutManager.afterFocusedItemIfPossibleLocationSelectors = [
		{
			typeId: 0,
			index: 1
		},
		{
			typeId: 2,
			index: void 0
		},
		{
			typeId: 3,
			index: void 0
		},
		{
			typeId: 7,
			index: void 0
		}
	];
})(LayoutManager || (LayoutManager = {}));
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/virtual-layout.js
/** @public */
var VirtualLayout = class VirtualLayout extends LayoutManager {
	/** @internal */
	constructor(configOrOptionalContainer, containerOrBindComponentEventHandler, unbindComponentEventHandler, skipInit) {
		super(VirtualLayout.createLayoutManagerConstructorParameters(configOrOptionalContainer, containerOrBindComponentEventHandler));
		/** @internal @deprecated use while constructor is not determinate */
		this._bindComponentEventHanlderPassedInConstructor = false;
		/** @internal  @deprecated use while constructor is not determinate */
		this._creationTimeoutPassed = false;
		if (containerOrBindComponentEventHandler !== void 0) {
			if (typeof containerOrBindComponentEventHandler === "function") {
				this.bindComponentEvent = containerOrBindComponentEventHandler;
				this._bindComponentEventHanlderPassedInConstructor = true;
				if (unbindComponentEventHandler !== void 0) this.unbindComponentEvent = unbindComponentEventHandler;
			}
		}
		if (!this._bindComponentEventHanlderPassedInConstructor) {
			if (this.isSubWindow) if (this._constructorOrSubWindowLayoutConfig === void 0) throw new UnexpectedUndefinedError("VLC98823");
			else {
				const resolvedLayoutConfig = LayoutConfig.resolve(this._constructorOrSubWindowLayoutConfig);
				this.layoutConfig = Object.assign(Object.assign({}, resolvedLayoutConfig), { root: void 0 });
			}
		}
		if (skipInit !== true) {
			if (!this.deprecatedConstructor) this.init();
		}
	}
	destroy() {
		this.bindComponentEvent = void 0;
		this.unbindComponentEvent = void 0;
		super.destroy();
	}
	/**
	* Creates the actual layout. Must be called after all initial components
	* are registered. Recurses through the configuration and sets up
	* the item tree.
	*
	* If called before the document is ready it adds itself as a listener
	* to the document.ready event
	* @deprecated LayoutConfig should not be loaded in {@link (LayoutManager:class)} constructor, but rather in a
	* {@link (LayoutManager:class).loadLayout} call.  If LayoutConfig is not specified in {@link (LayoutManager:class)} constructor,
	* then init() will be automatically called internally and should not be called externally.
	*/
	init() {
		/**
		* If the document isn't ready yet, wait for it.
		*/
		if (!this._bindComponentEventHanlderPassedInConstructor && (document.readyState === "loading" || document.body === null)) {
			document.addEventListener("DOMContentLoaded", () => this.init(), { passive: true });
			return;
		}
		/**
		* If this is a subwindow, wait a few milliseconds for the original
		* page's js calls to be executed, then replace the bodies content
		* with GoldenLayout
		*/
		if (!this._bindComponentEventHanlderPassedInConstructor && this.isSubWindow === true && !this._creationTimeoutPassed) {
			setTimeout(() => this.init(), 7);
			this._creationTimeoutPassed = true;
			return;
		}
		if (this.isSubWindow === true) {
			if (!this._bindComponentEventHanlderPassedInConstructor) this.clearHtmlAndAdjustStylesForSubWindow();
			window.__glInstance = this;
		}
		super.init();
	}
	/**
	* Clears existing HTML and adjusts style to make window suitable to be a popout sub window
	* Curently is automatically called when window is a subWindow and bindComponentEvent is not passed in the constructor
	* If bindComponentEvent is not passed in the constructor, the application must either call this function explicitly or
	* (preferably) make the window suitable as a subwindow.
	* In the future, it is planned that this function is NOT automatically called in any circumstances.  Applications will
	* need to determine whether a window is a Golden Layout popout window and either call this function explicitly or
	* hide HTML not relevant to the popout.
	* See apitest for an example of how HTML is hidden when popout windows are displayed
	*/
	clearHtmlAndAdjustStylesForSubWindow() {
		const headElement = document.head;
		const appendNodeLists = new Array(4);
		appendNodeLists[0] = document.querySelectorAll("body link");
		appendNodeLists[1] = document.querySelectorAll("body style");
		appendNodeLists[2] = document.querySelectorAll("template");
		appendNodeLists[3] = document.querySelectorAll(".gl_keep");
		for (let listIdx = 0; listIdx < appendNodeLists.length; listIdx++) {
			const appendNodeList = appendNodeLists[listIdx];
			for (let nodeIdx = 0; nodeIdx < appendNodeList.length; nodeIdx++) {
				const node = appendNodeList[nodeIdx];
				headElement.appendChild(node);
			}
		}
		const bodyElement = document.body;
		bodyElement.innerHTML = "";
		bodyElement.style.visibility = "visible";
		this.checkAddDefaultPopinButton();
		document.body.offsetHeight;
	}
	/**
	* Will add button if not popinOnClose specified in settings
	* @returns true if added otherwise false
	*/
	checkAddDefaultPopinButton() {
		if (this.layoutConfig.settings.popInOnClose) return false;
		else {
			const popInButtonElement = document.createElement("div");
			popInButtonElement.classList.add("lm_popin");
			popInButtonElement.setAttribute("title", this.layoutConfig.header.dock);
			const iconElement = document.createElement("div");
			iconElement.classList.add("lm_icon");
			const bgElement = document.createElement("div");
			bgElement.classList.add("lm_bg");
			popInButtonElement.appendChild(iconElement);
			popInButtonElement.appendChild(bgElement);
			popInButtonElement.addEventListener("click", () => this.emit("popIn"));
			document.body.appendChild(popInButtonElement);
			return true;
		}
	}
	/** @internal */
	bindComponent(container, itemConfig) {
		if (this.bindComponentEvent !== void 0) return this.bindComponentEvent(container, itemConfig);
		else if (this.getComponentEvent !== void 0) return {
			virtual: false,
			component: this.getComponentEvent(container, itemConfig)
		};
		else throw new BindError(`${i18nStrings[2]}: ${JSON.stringify(itemConfig)}`);
	}
	/** @internal */
	unbindComponent(container, virtual, component) {
		if (this.unbindComponentEvent !== void 0) this.unbindComponentEvent(container);
		else if (!virtual && this.releaseComponentEvent !== void 0) if (component === void 0) throw new UnexpectedUndefinedError("VCUCRCU333998");
		else this.releaseComponentEvent(container, component);
	}
};
/** @public */
(function(VirtualLayout) {
	/** @internal
	* Veriable to hold the state whether we already checked if we are running in a sub window.
	* Fixes popout and creation of nested golden-layouts.
	*/
	let subWindowChecked = false;
	/** @internal */
	function createLayoutManagerConstructorParameters(configOrOptionalContainer, containerOrBindComponentEventHandler) {
		const windowConfigKey = subWindowChecked ? null : new URL(document.location.href).searchParams.get("gl-window");
		subWindowChecked = true;
		const isSubWindow = windowConfigKey !== null;
		let containerElement;
		let config;
		if (windowConfigKey !== null) {
			const windowConfigStr = localStorage.getItem(windowConfigKey);
			if (windowConfigStr === null) throw new Error("Null gl-window Config");
			localStorage.removeItem(windowConfigKey);
			const minifiedWindowConfig = JSON.parse(windowConfigStr);
			const resolvedConfig = ResolvedLayoutConfig.unminifyConfig(minifiedWindowConfig);
			config = LayoutConfig.fromResolved(resolvedConfig);
			if (configOrOptionalContainer instanceof HTMLElement) containerElement = configOrOptionalContainer;
		} else {
			if (configOrOptionalContainer === void 0) config = void 0;
			else if (configOrOptionalContainer instanceof HTMLElement) {
				config = void 0;
				containerElement = configOrOptionalContainer;
			} else config = configOrOptionalContainer;
			if (containerElement === void 0) {
				if (containerOrBindComponentEventHandler instanceof HTMLElement) containerElement = containerOrBindComponentEventHandler;
			}
		}
		return {
			constructorOrSubWindowLayoutConfig: config,
			isSubWindow,
			containerElement
		};
	}
	VirtualLayout.createLayoutManagerConstructorParameters = createLayoutManagerConstructorParameters;
})(VirtualLayout || (VirtualLayout = {}));
//#endregion
//#region node_modules/golden-layout/dist/esm/ts/golden-layout.js
/** @public */
var GoldenLayout = class extends VirtualLayout {
	/** @internal */
	constructor(configOrOptionalContainer, containerOrBindComponentEventHandler, unbindComponentEventHandler) {
		super(configOrOptionalContainer, containerOrBindComponentEventHandler, unbindComponentEventHandler, true);
		/** @internal */
		this._componentTypesMap = /* @__PURE__ */ new Map();
		/** @internal */
		this._registeredComponentMap = /* @__PURE__ */ new Map();
		/** @internal */
		this._virtuableComponentMap = /* @__PURE__ */ new Map();
		/** @internal */
		this._containerVirtualRectingRequiredEventListener = (container, width, height) => this.handleContainerVirtualRectingRequiredEvent(container, width, height);
		/** @internal */
		this._containerVirtualVisibilityChangeRequiredEventListener = (container, visible) => this.handleContainerVirtualVisibilityChangeRequiredEvent(container, visible);
		/** @internal */
		this._containerVirtualZIndexChangeRequiredEventListener = (container, logicalZIndex, defaultZIndex) => this.handleContainerVirtualZIndexChangeRequiredEvent(container, logicalZIndex, defaultZIndex);
		if (!this.deprecatedConstructor) this.init();
	}
	/**
	* Register a new component type with the layout manager.
	*
	* @deprecated See {@link https://stackoverflow.com/questions/40922531/how-to-check-if-a-javascript-function-is-a-constructor}
	* instead use {@link (GoldenLayout:class).registerComponentConstructor}
	* or {@link (GoldenLayout:class).registerComponentFactoryFunction}
	*/
	registerComponent(name, componentConstructorOrFactoryFtn, virtual = false) {
		if (typeof componentConstructorOrFactoryFtn !== "function") throw new ApiError("registerComponent() componentConstructorOrFactoryFtn parameter is not a function");
		else if (componentConstructorOrFactoryFtn.hasOwnProperty("prototype")) {
			const componentConstructor = componentConstructorOrFactoryFtn;
			this.registerComponentConstructor(name, componentConstructor, virtual);
		} else {
			const componentFactoryFtn = componentConstructorOrFactoryFtn;
			this.registerComponentFactoryFunction(name, componentFactoryFtn, virtual);
		}
	}
	/**
	* Register a new component type with the layout manager.
	*/
	registerComponentConstructor(typeName, componentConstructor, virtual = false) {
		if (typeof componentConstructor !== "function") throw new Error(i18nStrings[1]);
		if (this._componentTypesMap.get(typeName) !== void 0) throw new BindError(`${i18nStrings[3]}: ${typeName}`);
		this._componentTypesMap.set(typeName, {
			constructor: componentConstructor,
			factoryFunction: void 0,
			virtual
		});
	}
	/**
	* Register a new component with the layout manager.
	*/
	registerComponentFactoryFunction(typeName, componentFactoryFunction, virtual = false) {
		if (typeof componentFactoryFunction !== "function") throw new BindError("Please register a constructor function");
		if (this._componentTypesMap.get(typeName) !== void 0) throw new BindError(`${i18nStrings[3]}: ${typeName}`);
		this._componentTypesMap.set(typeName, {
			constructor: void 0,
			factoryFunction: componentFactoryFunction,
			virtual
		});
	}
	/**
	* Register a component function with the layout manager. This function should
	* return a constructor for a component based on a config.
	* This function will be called if a component type with the required name is not already registered.
	* It is recommended that applications use the {@link (VirtualLayout:class).getComponentEvent} and
	* {@link (VirtualLayout:class).releaseComponentEvent} instead of registering a constructor callback
	* @deprecated use {@link (GoldenLayout:class).registerGetComponentConstructorCallback}
	*/
	registerComponentFunction(callback) {
		this.registerGetComponentConstructorCallback(callback);
	}
	/**
	* Register a callback closure with the layout manager which supplies a Component Constructor.
	* This callback should return a constructor for a component based on a config.
	* This function will be called if a component type with the required name is not already registered.
	* It is recommended that applications use the {@link (VirtualLayout:class).getComponentEvent} and
	* {@link (VirtualLayout:class).releaseComponentEvent} instead of registering a constructor callback
	*/
	registerGetComponentConstructorCallback(callback) {
		if (typeof callback !== "function") throw new Error("Please register a callback function");
		if (this._getComponentConstructorFtn !== void 0) console.warn("Multiple component functions are being registered.  Only the final registered function will be used.");
		this._getComponentConstructorFtn = callback;
	}
	getRegisteredComponentTypeNames() {
		const typeNamesIterableIterator = this._componentTypesMap.keys();
		return Array.from(typeNamesIterableIterator);
	}
	/**
	* Returns a previously registered component instantiator.  Attempts to utilize registered
	* component type by first, then falls back to the component constructor callback function (if registered).
	* If neither gets an instantiator, then returns `undefined`.
	* Note that `undefined` will return if config.componentType is not a string
	*
	* @param config - The item config
	* @public
	*/
	getComponentInstantiator(config) {
		let instantiator;
		const typeName = ResolvedComponentItemConfig.resolveComponentTypeName(config);
		if (typeName !== void 0) instantiator = this._componentTypesMap.get(typeName);
		if (instantiator === void 0) {
			if (this._getComponentConstructorFtn !== void 0) instantiator = {
				constructor: this._getComponentConstructorFtn(config),
				factoryFunction: void 0,
				virtual: false
			};
		}
		return instantiator;
	}
	/** @internal */
	bindComponent(container, itemConfig) {
		let instantiator;
		const typeName = ResolvedComponentItemConfig.resolveComponentTypeName(itemConfig);
		if (typeName !== void 0) instantiator = this._componentTypesMap.get(typeName);
		if (instantiator === void 0) {
			if (this._getComponentConstructorFtn !== void 0) instantiator = {
				constructor: this._getComponentConstructorFtn(itemConfig),
				factoryFunction: void 0,
				virtual: false
			};
		}
		let result;
		if (instantiator !== void 0) {
			const virtual = instantiator.virtual;
			let componentState;
			if (itemConfig.componentState === void 0) componentState = void 0;
			else componentState = deepExtendValue({}, itemConfig.componentState);
			let component;
			const componentConstructor = instantiator.constructor;
			if (componentConstructor !== void 0) component = new componentConstructor(container, componentState, virtual);
			else {
				const factoryFunction = instantiator.factoryFunction;
				if (factoryFunction !== void 0) component = factoryFunction(container, componentState, virtual);
				else throw new AssertError("LMBCFFU10008");
			}
			if (virtual) if (component === void 0) throw new UnexpectedUndefinedError("GLBCVCU988774");
			else {
				const virtuableComponent = component;
				const componentRootElement = virtuableComponent.rootHtmlElement;
				if (componentRootElement === void 0) throw new BindError(`${i18nStrings[5]}: ${typeName}`);
				else {
					ensureElementPositionAbsolute(componentRootElement);
					this.container.appendChild(componentRootElement);
					this._virtuableComponentMap.set(container, virtuableComponent);
					container.virtualRectingRequiredEvent = this._containerVirtualRectingRequiredEventListener;
					container.virtualVisibilityChangeRequiredEvent = this._containerVirtualVisibilityChangeRequiredEventListener;
					container.virtualZIndexChangeRequiredEvent = this._containerVirtualZIndexChangeRequiredEventListener;
				}
			}
			this._registeredComponentMap.set(container, component);
			result = {
				virtual: instantiator.virtual,
				component
			};
		} else result = super.bindComponent(container, itemConfig);
		return result;
	}
	/** @internal */
	unbindComponent(container, virtual, component) {
		if (this._registeredComponentMap.get(container) === void 0) super.unbindComponent(container, virtual, component);
		else {
			const virtuableComponent = this._virtuableComponentMap.get(container);
			if (virtuableComponent !== void 0) {
				const componentRootElement = virtuableComponent.rootHtmlElement;
				if (componentRootElement === void 0) throw new AssertError("GLUC77743", container.title);
				else {
					this.container.removeChild(componentRootElement);
					this._virtuableComponentMap.delete(container);
				}
			}
		}
	}
	fireBeforeVirtualRectingEvent(count) {
		this._goldenLayoutBoundingClientRect = this.container.getBoundingClientRect();
		super.fireBeforeVirtualRectingEvent(count);
	}
	/** @internal */
	handleContainerVirtualRectingRequiredEvent(container, width, height) {
		const virtuableComponent = this._virtuableComponentMap.get(container);
		if (virtuableComponent === void 0) throw new UnexpectedUndefinedError("GLHCSCE55933");
		else {
			const rootElement = virtuableComponent.rootHtmlElement;
			if (rootElement === void 0) throw new BindError(i18nStrings[4] + " " + container.title);
			else {
				const containerBoundingClientRect = container.element.getBoundingClientRect();
				const left = containerBoundingClientRect.left - this._goldenLayoutBoundingClientRect.left;
				rootElement.style.left = numberToPixels(left);
				const top = containerBoundingClientRect.top - this._goldenLayoutBoundingClientRect.top;
				rootElement.style.top = numberToPixels(top);
				setElementWidth(rootElement, width);
				setElementHeight(rootElement, height);
			}
		}
	}
	/** @internal */
	handleContainerVirtualVisibilityChangeRequiredEvent(container, visible) {
		const virtuableComponent = this._virtuableComponentMap.get(container);
		if (virtuableComponent === void 0) throw new UnexpectedUndefinedError("GLHCVVCRE55934");
		else {
			const rootElement = virtuableComponent.rootHtmlElement;
			if (rootElement === void 0) throw new BindError(i18nStrings[4] + " " + container.title);
			else setElementDisplayVisibility(rootElement, visible);
		}
	}
	/** @internal */
	handleContainerVirtualZIndexChangeRequiredEvent(container, logicalZIndex, defaultZIndex) {
		const virtuableComponent = this._virtuableComponentMap.get(container);
		if (virtuableComponent === void 0) throw new UnexpectedUndefinedError("GLHCVZICRE55935");
		else {
			const rootElement = virtuableComponent.rootHtmlElement;
			if (rootElement === void 0) throw new BindError(i18nStrings[4] + " " + container.title);
			else rootElement.style.zIndex = defaultZIndex;
		}
	}
};
//#endregion
//#region src/components/visualization/SpectrumAnalyzer.vue
var _sfc_main$13 = {
	name: "SpectrumAnalyzer",
	props: { storeKey: {
		type: String,
		default: "spectrum"
	} },
	data() {
		return { animFrameId: null };
	},
	mounted() {
		this.resizeCanvas();
		this._resizeObserver = new ResizeObserver(() => this.resizeCanvas());
		if (this.$refs.canvas) this._resizeObserver.observe(this.$refs.canvas.parentElement);
		this.startRenderLoop();
	},
	beforeUnmount() {
		if (this._resizeObserver) this._resizeObserver.disconnect();
		if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
	},
	methods: {
		resizeCanvas() {
			const canvas = this.$refs.canvas;
			if (!canvas) return;
			const rect = canvas.parentElement.getBoundingClientRect();
			canvas.width = Math.floor(rect.width);
			canvas.height = Math.floor(rect.height);
		},
		startRenderLoop() {
			const render = () => {
				this.draw();
				this.animFrameId = requestAnimationFrame(render);
			};
			render();
		},
		draw() {
			const canvas = this.$refs.canvas;
			if (!canvas) return;
			const ctx = canvas.getContext("2d");
			const w = canvas.width;
			const h = canvas.height;
			ctx.fillStyle = "#0a0a0e";
			ctx.fillRect(0, 0, w, h);
			ctx.strokeStyle = "#1a1a24";
			ctx.lineWidth = .5;
			for (let i = 1; i < 10; i++) {
				const y = i / 10 * h;
				ctx.beginPath();
				ctx.moveTo(0, y);
				ctx.lineTo(w, y);
				ctx.stroke();
			}
			const engine = useAudioEngineStore();
			if (!engine.analyserSpectrum || !engine.isRunning) return;
			const ui = useUiStateStore();
			const analyser = engine.analyserSpectrum;
			const fftSize = FFT_SIZE_CHOICES[ui[this.storeKey].fftSize];
			if (analyser.fftSize !== fftSize) analyser.fftSize = fftSize;
			const bufLen = analyser.frequencyBinCount;
			const data = new Float32Array(bufLen);
			analyser.getFloatFrequencyData(data);
			const nyquist = engine.sampleRate / 2;
			const freqLog = ui[this.storeKey].freqLog;
			const magLog = ui[this.storeKey].magLog;
			const gainDb = (ui[this.storeKey].amplitude - .5) * 48;
			const minDb = -100;
			const maxDb = 0;
			ctx.strokeStyle = "#4ade80";
			ctx.lineWidth = 1.5;
			ctx.beginPath();
			let started = false;
			for (let i = 1; i < bufLen; i++) {
				const freq = i / bufLen * nyquist;
				const normFreq = freq / nyquist;
				if (normFreq < ui[this.storeKey].zoomMin * 2 || normFreq > ui[this.storeKey].zoomMax * 2) continue;
				let x;
				if (freqLog) {
					const minF = Math.max(20, ui[this.storeKey].zoomMin * 2 * nyquist);
					const maxF = ui[this.storeKey].zoomMax * 2 * nyquist;
					if (freq < minF) continue;
					x = (Math.log10(freq) - Math.log10(minF)) / (Math.log10(maxF) - Math.log10(minF)) * w;
				} else {
					const minF = ui[this.storeKey].zoomMin * 2 * nyquist;
					const maxF = ui[this.storeKey].zoomMax * 2 * nyquist;
					x = (freq - minF) / (maxF - minF) * w;
				}
				let y;
				if (magLog) y = h - (Math.max(minDb, Math.min(maxDb, data[i] + gainDb)) - minDb) / (maxDb - minDb) * h;
				else {
					const lin = Math.pow(10, (data[i] + gainDb) / 20);
					y = h - Math.min(1, lin) * h;
				}
				if (!started) {
					ctx.moveTo(x, y);
					started = true;
				} else ctx.lineTo(x, y);
			}
			ctx.stroke();
		}
	}
};
var _hoisted_1$13 = { class: "spectrum-analyzer" };
var _hoisted_2$9 = {
	ref: "canvas",
	class: "spectrum-analyzer__canvas"
};
function _sfc_render$13(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1$13, [createBaseVNode("canvas", _hoisted_2$9, null, 512)]);
}
var SpectrumAnalyzer_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$13, [["render", _sfc_render$13]]);
//#endregion
//#region src/utils/dspMath.js
function interpFloat(t, v1, v2) {
	return (v2 - v1) * t + v1;
}
function tFromValue(value, v1, v2) {
	if (v2 - v1 === 0) return 1;
	return (value - v1) / (v2 - v1);
}
function clamp(v, minv, maxv) {
	return Math.max(minv, Math.min(maxv, v));
}
function toLog(t, v1, v2) {
	return Math.log10(t / v1) / Math.log10(v2 / v1);
}
function toExp(t, v1, v2) {
	return Math.pow(10, t * (Math.log10(v2) - Math.log10(v1)) + Math.log10(v1));
}
function rescale(value, ymin = 0, ymax = 1, ylog = false) {
	if (ylog) {
		const logMin = Math.log(ymin);
		return Math.exp(logMin + value * (Math.log(ymax) - logMin));
	}
	return ymin + value * (ymax - ymin);
}
function formatValue(val, integer = false) {
	if (integer) return String(Math.round(val));
	const abs = Math.abs(val);
	if (abs >= 1e3) return val.toFixed(0);
	if (abs >= 100) return val.toFixed(1);
	if (abs >= 10) return val.toFixed(2);
	return val.toFixed(3);
}
//#endregion
//#region src/components/controls/RotaryKnob.vue
var TWO_PI = Math.PI * 2;
var ANCHOR1 = Math.PI * (4.5 / 6);
var ANCHOR2 = Math.PI * (1.5 / 6);
var ANC_RANGE = TWO_PI - ANCHOR1 + ANCHOR2;
var _sfc_main$12 = {
	name: "RotaryKnob",
	props: {
		modelValue: {
			type: Number,
			default: .5
		},
		size: {
			type: Number,
			default: 26
		}
	},
	emits: ["update:modelValue"],
	data() {
		return {
			lastPos: null,
			baseValue: .5,
			tempValue: .5,
			fine: false
		};
	},
	watch: { modelValue: {
		immediate: true,
		handler(val) {
			this.baseValue = val;
			this.tempValue = val;
			this.draw();
		}
	} },
	mounted() {
		this.draw();
	},
	methods: {
		onMouseDown(e) {
			this.lastPos = {
				x: e.clientX,
				y: e.clientY
			};
			this.fine = e.shiftKey;
			document.addEventListener("mousemove", this.onMouseMove);
			document.addEventListener("mouseup", this.onMouseUp);
			e.preventDefault();
		},
		onMouseMove(e) {
			if (!this.lastPos) return;
			const dx = e.clientX - this.lastPos.x;
			const dy = this.lastPos.y - e.clientY;
			this.lastPos = {
				x: e.clientX,
				y: e.clientY
			};
			const rawDelta = dy + dx * .3;
			const absDelta = Math.abs(rawDelta);
			let accel;
			if (absDelta < 5) accel = 1;
			else accel = 1 + (absDelta - 5) * .08;
			const sensitivity = this.fine ? 3e-4 : .003;
			const delta = Math.sign(rawDelta) * absDelta * accel * sensitivity;
			this.tempValue = clamp(this.tempValue + delta, 0, 1);
			this.baseValue = this.tempValue;
			this.$emit("update:modelValue", this.tempValue);
			this.draw();
		},
		onMouseUp() {
			this.baseValue = this.tempValue;
			this.lastPos = null;
			document.removeEventListener("mousemove", this.onMouseMove);
			document.removeEventListener("mouseup", this.onMouseUp);
		},
		onKeyDown(e) {
			const step = e.shiftKey ? .001 : .02;
			if (e.key === "ArrowUp" || e.key === "ArrowRight") {
				e.preventDefault();
				this.tempValue = clamp(this.tempValue + step, 0, 1);
				this.baseValue = this.tempValue;
				this.$emit("update:modelValue", this.tempValue);
				this.draw();
			} else if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
				e.preventDefault();
				this.tempValue = clamp(this.tempValue - step, 0, 1);
				this.baseValue = this.tempValue;
				this.$emit("update:modelValue", this.tempValue);
				this.draw();
			} else if (e.key === "Home") {
				e.preventDefault();
				this.tempValue = 0;
				this.baseValue = 0;
				this.$emit("update:modelValue", 0);
				this.draw();
			} else if (e.key === "End") {
				e.preventDefault();
				this.tempValue = 1;
				this.baseValue = 1;
				this.$emit("update:modelValue", 1);
				this.draw();
			}
		},
		onWheel(e) {
			const step = e.shiftKey ? .001 : .01;
			const delta = e.deltaY < 0 ? step : -step;
			this.tempValue = clamp(this.tempValue + delta, 0, 1);
			this.baseValue = this.tempValue;
			this.$emit("update:modelValue", this.tempValue);
			this.draw();
		},
		draw() {
			const canvas = this.$refs.canvas;
			if (!canvas) return;
			const ctx = canvas.getContext("2d");
			const w = canvas.width;
			const h = canvas.height;
			const cx = w / 2;
			const cy = h / 2 + 2;
			const r = Math.min(w, h) / 2 - 2;
			ctx.clearRect(0, 0, w, h);
			ctx.beginPath();
			ctx.arc(cx, cy, r, ANCHOR1, ANCHOR2 + TWO_PI, false);
			ctx.strokeStyle = "#555";
			ctx.lineWidth = 2.5;
			ctx.lineCap = "round";
			ctx.stroke();
			let endAngle = this.tempValue * ANC_RANGE + ANCHOR1;
			if (endAngle > TWO_PI) endAngle -= TWO_PI;
			ctx.beginPath();
			ctx.arc(cx, cy, r, ANCHOR1, endAngle, false);
			ctx.strokeStyle = "#5b8af5";
			ctx.lineWidth = 2.5;
			ctx.lineCap = "round";
			ctx.stroke();
			if (canvas === document.activeElement) {
				ctx.beginPath();
				ctx.arc(cx, cy, r + 2, 0, TWO_PI);
				ctx.strokeStyle = "#4488FF";
				ctx.lineWidth = 1;
				ctx.stroke();
			}
		}
	}
};
var _hoisted_1$12 = [
	"width",
	"height",
	"aria-valuenow"
];
function _sfc_render$12(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("canvas", {
		ref: "canvas",
		width: $props.size,
		height: $props.size,
		class: "rotary-knob",
		tabindex: "0",
		role: "slider",
		"aria-valuenow": $data.tempValue,
		"aria-valuemin": "0",
		"aria-valuemax": "1",
		onMousedown: _cache[0] || (_cache[0] = (...args) => $options.onMouseDown && $options.onMouseDown(...args)),
		onKeydown: _cache[1] || (_cache[1] = (...args) => $options.onKeyDown && $options.onKeyDown(...args)),
		onWheel: _cache[2] || (_cache[2] = withModifiers((...args) => $options.onWheel && $options.onWheel(...args), ["prevent"]))
	}, null, 40, _hoisted_1$12);
}
var RotaryKnob_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$12, [["render", _sfc_render$12]]);
//#endregion
//#region src/components/controls/EditableValue.vue
var _sfc_main$11 = {
	name: "EditableValue",
	props: {
		display: {
			type: String,
			required: true
		},
		inputType: {
			type: String,
			default: "text"
		},
		parse: {
			type: Function,
			default: (v) => parseFloat(v)
		}
	},
	emits: ["submit", "reset"],
	data() {
		return {
			editing: false,
			editText: ""
		};
	},
	methods: {
		startEdit() {
			this.editText = this.display;
			this.editing = true;
			this.$nextTick(() => {
				const input = this.$refs.input;
				if (input) {
					input.focus();
					input.select();
				}
			});
		},
		commit() {
			if (!this.editing) return;
			const parsed = this.parse(this.editText);
			if (parsed !== null && parsed !== void 0 && !isNaN(parsed)) this.$emit("submit", parsed);
			this.editing = false;
		},
		cancel() {
			this.editing = false;
		}
	}
};
var _hoisted_1$11 = ["type", "value"];
function _sfc_render$11(_ctx, _cache, $props, $setup, $data, $options) {
	return $data.editing ? (openBlock(), createElementBlock("input", {
		key: 0,
		ref: "input",
		type: $props.inputType,
		class: "editable-value editable-value--editing",
		value: $data.editText,
		onInput: _cache[0] || (_cache[0] = ($event) => $data.editText = $event.target.value),
		onKeydown: [_cache[1] || (_cache[1] = withKeys((...args) => $options.commit && $options.commit(...args), ["enter"])), _cache[2] || (_cache[2] = withKeys((...args) => $options.cancel && $options.cancel(...args), ["escape"]))],
		onBlur: _cache[3] || (_cache[3] = (...args) => $options.commit && $options.commit(...args))
	}, null, 40, _hoisted_1$11)) : (openBlock(), createElementBlock("span", {
		key: 1,
		class: "editable-value",
		onClick: _cache[4] || (_cache[4] = (...args) => $options.startEdit && $options.startEdit(...args)),
		onDblclick: _cache[5] || (_cache[5] = withModifiers(($event) => _ctx.$emit("reset"), ["stop"]))
	}, toDisplayString$1($props.display), 33));
}
var EditableValue_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$11, [["render", _sfc_render$11]]);
//#endregion
//#region src/components/controls/LabelKnob.vue
var _sfc_main$10 = {
	name: "LabelKnob",
	components: {
		RotaryKnob: RotaryKnob_default,
		EditableValue: EditableValue_default
	},
	props: {
		label: {
			type: String,
			default: ""
		},
		modelValue: {
			type: Number,
			default: 0
		},
		mini: {
			type: Number,
			default: 0
		},
		maxi: {
			type: Number,
			default: 1
		},
		init: {
			type: Number,
			default: null
		},
		log: {
			type: Boolean,
			default: false
		},
		integer: {
			type: Boolean,
			default: false
		},
		defaultValue: {
			type: Number,
			default: null
		}
	},
	emits: ["update:modelValue"],
	computed: {
		knobValue() {
			if (this.log) return toLog(this.modelValue, this.mini, this.maxi);
			return tFromValue(this.modelValue, this.mini, this.maxi);
		},
		displayValue() {
			return formatValue(this.modelValue, this.integer);
		}
	},
	methods: {
		onKnobChange(knobVal) {
			let realVal;
			if (this.log) realVal = toExp(knobVal, this.mini, this.maxi);
			else realVal = interpFloat(knobVal, this.mini, this.maxi);
			if (this.integer) realVal = Math.round(realVal);
			this.$emit("update:modelValue", realVal);
		},
		onTextSubmit(parsed) {
			let val = clamp(parsed, this.mini, this.maxi);
			if (this.integer) val = Math.round(val);
			this.$emit("update:modelValue", val);
		},
		resetToDefault() {
			const def = this.defaultValue !== null ? this.defaultValue : this.init;
			if (def !== null) this.$emit("update:modelValue", def);
		}
	}
};
var _hoisted_1$10 = { class: "label-knob" };
var _hoisted_2$8 = { class: "label-knob__label" };
function _sfc_render$10(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RotaryKnob = resolveComponent("RotaryKnob");
	const _component_EditableValue = resolveComponent("EditableValue");
	return openBlock(), createElementBlock("div", _hoisted_1$10, [
		createBaseVNode("span", _hoisted_2$8, toDisplayString$1($props.label), 1),
		createVNode(_component_RotaryKnob, {
			modelValue: $options.knobValue,
			size: 28,
			"onUpdate:modelValue": $options.onKnobChange,
			onDblclick: $options.resetToDefault
		}, null, 8, [
			"modelValue",
			"onUpdate:modelValue",
			"onDblclick"
		]),
		createVNode(_component_EditableValue, {
			display: $options.displayValue,
			onSubmit: $options.onTextSubmit,
			onReset: $options.resetToDefault
		}, null, 8, [
			"display",
			"onSubmit",
			"onReset"
		])
	]);
}
var LabelKnob_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$10, [["render", _sfc_render$10]]);
//#endregion
//#region src/components/dock/SpectrumPanel.vue
var _sfc_main$9 = {
	name: "SpectrumPanel",
	components: {
		SpectrumAnalyzer: SpectrumAnalyzer_default,
		LabelKnob: LabelKnob_default
	},
	data() {
		return {
			windowChoices: WINDOW_CHOICES,
			fftSizeChoices: FFT_SIZE_CHOICES
		};
	},
	computed: { spectrum() {
		return useUiStateStore().spectrum;
	} }
};
var _hoisted_1$9 = { class: "dock-panel" };
var _hoisted_2$7 = { class: "dock-panel__controls" };
var _hoisted_3$4 = ["value"];
var _hoisted_4$3 = ["value"];
var _hoisted_5$3 = { class: "dock-panel__canvas" };
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_LabelKnob = resolveComponent("LabelKnob");
	const _component_SpectrumAnalyzer = resolveComponent("SpectrumAnalyzer");
	return openBlock(), createElementBlock("div", _hoisted_1$9, [createBaseVNode("div", _hoisted_2$7, [
		createBaseVNode("button", {
			class: normalizeClass(["toggle-btn", { active: $options.spectrum.freqLog }]),
			onClick: _cache[0] || (_cache[0] = ($event) => $options.spectrum.freqLog = !$options.spectrum.freqLog)
		}, toDisplayString$1(_ctx.$t("visualization.freqLog")), 3),
		createBaseVNode("button", {
			class: normalizeClass(["toggle-btn", { active: $options.spectrum.magLog }]),
			onClick: _cache[1] || (_cache[1] = ($event) => $options.spectrum.magLog = !$options.spectrum.magLog)
		}, toDisplayString$1(_ctx.$t("visualization.magLog")), 3),
		withDirectives(createBaseVNode("select", { "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $options.spectrum.windowType = $event) }, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.windowChoices, (w, i) => {
			return openBlock(), createElementBlock("option", {
				key: i,
				value: i
			}, toDisplayString$1(w), 9, _hoisted_3$4);
		}), 128))], 512), [[
			vModelSelect,
			$options.spectrum.windowType,
			void 0,
			{ number: true }
		]]),
		withDirectives(createBaseVNode("select", { "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $options.spectrum.fftSize = $event) }, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.fftSizeChoices, (s, i) => {
			return openBlock(), createElementBlock("option", {
				key: i,
				value: i
			}, toDisplayString$1(s), 9, _hoisted_4$3);
		}), 128))], 512), [[
			vModelSelect,
			$options.spectrum.fftSize,
			void 0,
			{ number: true }
		]]),
		createVNode(_component_LabelKnob, {
			label: _ctx.$t("visualization.amplitude"),
			modelValue: $options.spectrum.amplitude,
			"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $options.spectrum.amplitude = $event),
			mini: 0,
			maxi: 1
		}, null, 8, ["label", "modelValue"])
	]), createBaseVNode("div", _hoisted_5$3, [createVNode(_component_SpectrumAnalyzer)])]);
}
var SpectrumPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$9, [["render", _sfc_render$9]]);
//#endregion
//#region src/components/visualization/Spectrogram.vue
var COLORMAP = new Uint32Array(256);
{
	const stops = [
		[
			0,
			0,
			0,
			0
		],
		[
			.15,
			0,
			20,
			80
		],
		[
			.35,
			0,
			180,
			30
		],
		[
			.55,
			220,
			220,
			0
		],
		[
			.7,
			255,
			140,
			0
		],
		[
			.85,
			220,
			20,
			10
		],
		[
			1,
			255,
			255,
			255
		]
	];
	for (let i = 0; i < 256; i++) {
		const t = i / 255;
		let lo = 0;
		for (let s = 1; s < stops.length; s++) if (stops[s][0] >= t) {
			lo = s - 1;
			break;
		}
		const hi = lo + 1;
		const range = stops[hi][0] - stops[lo][0];
		const s = range > 0 ? (t - stops[lo][0]) / range : 0;
		const r = Math.round(stops[lo][1] + s * (stops[hi][1] - stops[lo][1]));
		const g = Math.round(stops[lo][2] + s * (stops[hi][2] - stops[lo][2]));
		COLORMAP[i] = 255 << 24 | Math.round(stops[lo][3] + s * (stops[hi][3] - stops[lo][3])) << 16 | g << 8 | r;
	}
}
function dbToColor(db, minDb, maxDb) {
	const t = (db - minDb) / (maxDb - minDb);
	return COLORMAP[Math.max(0, Math.min(255, Math.round(t * 255)))];
}
var _sfc_main$8 = {
	name: "Spectrogram",
	props: { storeKey: {
		type: String,
		default: "waterfall"
	} },
	data() {
		return {
			animFrameId: null,
			scrollCanvas: null,
			scrollCtx: null
		};
	},
	mounted() {
		this.initScrollBuffer();
		this.initAnalyser();
		this.resizeCanvas();
		this._resizeObserver = new ResizeObserver(() => this.resizeCanvas());
		if (this.$refs.canvas) this._resizeObserver.observe(this.$refs.canvas.parentElement);
		this.startRenderLoop();
	},
	beforeUnmount() {
		if (this._resizeObserver) this._resizeObserver.disconnect();
		if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
		if (this._analyser) {
			try {
				this._analyser.disconnect();
			} catch (e) {}
			this._analyser = null;
		}
	},
	methods: {
		initScrollBuffer() {
			this.scrollCanvas = document.createElement("canvas");
			this.scrollCtx = this.scrollCanvas.getContext("2d");
		},
		initAnalyser() {
			const engine = useAudioEngineStore();
			if (!engine.context || !engine.masterGain) return;
			this._analyser = engine.context.createAnalyser();
			this._analyser.fftSize = 2048;
			this._analyser.smoothingTimeConstant = .8;
			engine.masterGain.connect(this._analyser);
		},
		resizeCanvas() {
			const canvas = this.$refs.canvas;
			if (!canvas) return;
			const rect = canvas.parentElement.getBoundingClientRect();
			const w = Math.floor(rect.width);
			const h = Math.floor(rect.height);
			if (w === canvas.width && h === canvas.height) return;
			canvas.width = w;
			canvas.height = h;
			const oldW = this.scrollCanvas.width;
			const oldH = this.scrollCanvas.height;
			let saved = null;
			if (oldW > 0 && oldH > 0) saved = this.scrollCtx.getImageData(0, 0, oldW, oldH);
			this.scrollCanvas.width = w;
			this.scrollCanvas.height = h;
			this.scrollCtx.fillStyle = "#0a0a0e";
			this.scrollCtx.fillRect(0, 0, w, h);
			if (saved) this.scrollCtx.putImageData(saved, w - oldW, 0);
		},
		startRenderLoop() {
			const render = () => {
				this.draw();
				this.animFrameId = requestAnimationFrame(render);
			};
			render();
		},
		draw() {
			const canvas = this.$refs.canvas;
			if (!canvas) return;
			const ctx = canvas.getContext("2d");
			const w = canvas.width;
			const h = canvas.height;
			if (w === 0 || h === 0) return;
			const engine = useAudioEngineStore();
			if (!this._analyser || !engine.isRunning) {
				ctx.drawImage(this.scrollCanvas, 0, 0);
				return;
			}
			const ui = useUiStateStore();
			const analyser = this._analyser;
			const fftSize = FFT_SIZE_CHOICES[ui[this.storeKey].fftSize];
			if (analyser.fftSize !== fftSize) analyser.fftSize = fftSize;
			const bufLen = analyser.frequencyBinCount;
			const data = new Float32Array(bufLen);
			analyser.getFloatFrequencyData(data);
			const nyquist = engine.sampleRate / 2;
			const freqLog = ui[this.storeKey].freqLog;
			const gainDb = (ui[this.storeKey].amplitude - .5) * 48;
			const minDb = -60;
			const maxDb = 0;
			const speed = Math.max(1, Math.round(ui[this.storeKey].scrollSpeed || 1));
			const sc = this.scrollCtx;
			sc.drawImage(this.scrollCanvas, -speed, 0);
			sc.fillStyle = "#0a0a0e";
			sc.fillRect(w - speed, 0, speed, h);
			const col = sc.createImageData(1, h);
			const pixels = new Uint32Array(col.data.buffer);
			for (let y = 0; y < h; y++) {
				const normY = 1 - y / h;
				let freq;
				if (freqLog) {
					const minF = Math.max(20, ui[this.storeKey].zoomMin * 2 * nyquist);
					const maxF = ui[this.storeKey].zoomMax * 2 * nyquist;
					freq = minF * Math.pow(maxF / minF, normY);
				} else {
					const minF = ui[this.storeKey].zoomMin * 2 * nyquist;
					freq = minF + normY * (ui[this.storeKey].zoomMax * 2 * nyquist - minF);
				}
				const bin = Math.round(freq / nyquist * bufLen);
				if (bin < 0 || bin >= bufLen) {
					pixels[y] = 255 << 24;
					continue;
				}
				pixels[y] = dbToColor(Math.max(minDb, Math.min(maxDb, data[bin] + gainDb)), minDb, maxDb);
			}
			for (let s = 0; s < speed; s++) sc.putImageData(col, w - speed + s, 0);
			ctx.drawImage(this.scrollCanvas, 0, 0);
		}
	}
};
var _hoisted_1$8 = { class: "scope-canvas" };
var _hoisted_2$6 = {
	ref: "canvas",
	class: "scope-canvas__el"
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1$8, [createBaseVNode("canvas", _hoisted_2$6, null, 512)]);
}
//#endregion
//#region src/components/dock/WaterfallPanel.vue
var _sfc_main$7 = {
	name: "WaterfallPanel",
	components: {
		Spectrogram: /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$8, [["render", _sfc_render$8]]),
		LabelKnob: LabelKnob_default
	},
	data() {
		return {
			windowChoices: WINDOW_CHOICES,
			fftSizeChoices: FFT_SIZE_CHOICES
		};
	},
	computed: { waterfall() {
		return useUiStateStore().waterfall;
	} }
};
var _hoisted_1$7 = { class: "dock-panel" };
var _hoisted_2$5 = { class: "dock-panel__controls" };
var _hoisted_3$3 = ["value"];
var _hoisted_4$2 = ["value"];
var _hoisted_5$2 = { class: "control-label" };
var _hoisted_6$2 = { class: "viz-controls__value" };
var _hoisted_7$2 = { class: "dock-panel__canvas" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_LabelKnob = resolveComponent("LabelKnob");
	const _component_Spectrogram = resolveComponent("Spectrogram");
	return openBlock(), createElementBlock("div", _hoisted_1$7, [createBaseVNode("div", _hoisted_2$5, [
		createBaseVNode("button", {
			class: normalizeClass(["toggle-btn", { active: $options.waterfall.freqLog }]),
			onClick: _cache[0] || (_cache[0] = ($event) => $options.waterfall.freqLog = !$options.waterfall.freqLog)
		}, toDisplayString$1(_ctx.$t("visualization.freqLog")), 3),
		withDirectives(createBaseVNode("select", { "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $options.waterfall.windowType = $event) }, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.windowChoices, (w, i) => {
			return openBlock(), createElementBlock("option", {
				key: i,
				value: i
			}, toDisplayString$1(w), 9, _hoisted_3$3);
		}), 128))], 512), [[
			vModelSelect,
			$options.waterfall.windowType,
			void 0,
			{ number: true }
		]]),
		withDirectives(createBaseVNode("select", { "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $options.waterfall.fftSize = $event) }, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.fftSizeChoices, (s, i) => {
			return openBlock(), createElementBlock("option", {
				key: i,
				value: i
			}, toDisplayString$1(s), 9, _hoisted_4$2);
		}), 128))], 512), [[
			vModelSelect,
			$options.waterfall.fftSize,
			void 0,
			{ number: true }
		]]),
		createVNode(_component_LabelKnob, {
			label: _ctx.$t("visualization.amplitude"),
			modelValue: $options.waterfall.amplitude,
			"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $options.waterfall.amplitude = $event),
			mini: 0,
			maxi: 1
		}, null, 8, ["label", "modelValue"]),
		createBaseVNode("label", _hoisted_5$2, toDisplayString$1(_ctx.$i18n.locale === "fr" ? "Vitesse" : "Speed"), 1),
		withDirectives(createBaseVNode("input", {
			type: "range",
			class: "viz-controls__slider viz-controls__slider--short",
			min: 1,
			max: 8,
			step: 1,
			"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $options.waterfall.scrollSpeed = $event)
		}, null, 512), [[
			vModelText,
			$options.waterfall.scrollSpeed,
			void 0,
			{ number: true }
		]]),
		createBaseVNode("span", _hoisted_6$2, toDisplayString$1($options.waterfall.scrollSpeed) + "x", 1)
	]), createBaseVNode("div", _hoisted_7$2, [createVNode(_component_Spectrogram)])]);
}
var WaterfallPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$7, [["render", _sfc_render$7]]);
//#endregion
//#region src/mixins/scopeCanvas.js
var scopeCanvasMixin = {
	data() {
		return { animFrameId: null };
	},
	mounted() {
		this.resizeCanvas();
		this._resizeObserver = new ResizeObserver(() => this.resizeCanvas());
		if (this.$refs.canvas) this._resizeObserver.observe(this.$refs.canvas.parentElement);
		this.startRenderLoop();
	},
	beforeUnmount() {
		if (this._resizeObserver) this._resizeObserver.disconnect();
		if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
	},
	methods: {
		resizeCanvas() {
			const canvas = this.$refs.canvas;
			if (!canvas) return;
			const rect = canvas.parentElement.getBoundingClientRect();
			canvas.width = Math.floor(rect.width);
			canvas.height = Math.floor(rect.height);
		},
		startRenderLoop() {
			const render = () => {
				const canvas = this.$refs.canvas;
				if (canvas) {
					const ctx = canvas.getContext("2d");
					const w = canvas.width;
					const h = canvas.height;
					ctx.fillStyle = "#0a0a0e";
					ctx.fillRect(0, 0, w, h);
					this.draw(ctx, w, h);
				}
				this.animFrameId = requestAnimationFrame(render);
			};
			render();
		},
		getScopeData() {
			const engine = useAudioEngineStore();
			if (!engine.analyserScope || !engine.isRunning) return null;
			const ui = useUiStateStore();
			const analyser = engine.analyserScope;
			const samplesNeeded = Math.floor(engine.sampleRate * ui[this.storeKey].windowLength / 1e3);
			const samplesWithMargin = samplesNeeded * 2;
			let fftSize = 2;
			while (fftSize < samplesWithMargin && fftSize < 32768) fftSize *= 2;
			fftSize = Math.max(512, Math.min(32768, fftSize));
			if (analyser.fftSize !== fftSize) analyser.fftSize = fftSize;
			const bufLen = analyser.fftSize;
			const data = new Float32Array(bufLen);
			analyser.getFloatTimeDomainData(data);
			const samplesToShow = Math.min(bufLen - 1, samplesNeeded);
			const userGain = rescale(ui[this.storeKey].amplitude, .04, 10, true);
			let displayGain = userGain;
			if (ui[this.storeKey].autoNormalize) {
				let peak = 0;
				for (let i = 0; i < bufLen; i++) {
					const abs = Math.abs(data[i]);
					if (abs > peak) peak = abs;
				}
				displayGain = (peak > .001 ? .8 / peak : 1) * userGain;
			}
			return {
				engine,
				ui,
				data,
				bufLen,
				samplesToShow,
				displayGain
			};
		},
		draw() {}
	}
};
//#endregion
//#region src/components/visualization/Oscilloscope.vue
var _sfc_main$6 = {
	name: "Oscilloscope",
	mixins: [scopeCanvasMixin],
	props: { storeKey: {
		type: String,
		default: "scope"
	} },
	data() {
		return { refSnippet: null };
	},
	methods: {
		findTriggerByCorrelation(data, samplesToShow) {
			const ref = this.refSnippet;
			if (!ref || ref.length === 0) return 0;
			const refLen = ref.length;
			const searchEnd = Math.min(data.length - samplesToShow, Math.floor(data.length / 2));
			if (searchEnd <= 0) return 0;
			let bestOffset = 0;
			let bestCorr = -Infinity;
			for (let offset = 0; offset < searchEnd; offset++) {
				let sum = 0;
				for (let j = 0; j < refLen; j++) sum += ref[j] * data[offset + j];
				if (sum > bestCorr) {
					bestCorr = sum;
					bestOffset = offset;
				}
			}
			return bestOffset;
		},
		draw(c, w, h) {
			c.strokeStyle = "#1a1a24";
			c.lineWidth = .5;
			for (let i = 1; i < 4; i++) {
				const y = i / 4 * h;
				c.beginPath();
				c.moveTo(0, y);
				c.lineTo(w, y);
				c.stroke();
			}
			c.strokeStyle = "#252530";
			c.beginPath();
			c.moveTo(0, h / 2);
			c.lineTo(w, h / 2);
			c.stroke();
			const sd = this.getScopeData();
			if (!sd) return;
			const { engine, ui, data, bufLen, samplesToShow, displayGain } = sd;
			let triggerOffset = 0;
			if (ui[this.storeKey].forceSync) {
				const sourceFreq = engine.sourcePanel ? engine.sourcePanel.currentFrequency : 0;
				let refLength;
				if (sourceFreq > 0) refLength = Math.round(engine.sampleRate / sourceFreq);
				else refLength = Math.min(256, Math.floor(samplesToShow / 4));
				refLength = Math.max(16, Math.min(refLength, Math.floor(bufLen / 4)));
				if (this.refSnippet && this.refSnippet.length === refLength) triggerOffset = this.findTriggerByCorrelation(data, samplesToShow);
				this.refSnippet = data.slice(triggerOffset, triggerOffset + refLength);
			} else this.refSnippet = null;
			c.strokeStyle = "#4ade80";
			c.lineWidth = 1.5;
			c.beginPath();
			const end = Math.min(samplesToShow, bufLen - triggerOffset);
			for (let i = 0; i < end; i++) {
				const x = i / samplesToShow * w;
				const y = (1 - data[triggerOffset + i] * displayGain) * h / 2;
				if (i === 0) c.moveTo(x, y);
				else c.lineTo(x, y);
			}
			c.stroke();
		}
	}
};
var _hoisted_1$6 = { class: "scope-canvas" };
var _hoisted_2$4 = {
	ref: "canvas",
	class: "scope-canvas__el"
};
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1$6, [createBaseVNode("canvas", _hoisted_2$4, null, 512)]);
}
//#endregion
//#region src/components/dock/OscilloscopePanel.vue
var _sfc_main$5 = {
	name: "OscilloscopePanel",
	components: {
		Oscilloscope: /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$6, [["render", _sfc_render$6]]),
		LabelKnob: LabelKnob_default
	},
	computed: {
		scope() {
			return useUiStateStore().scope;
		},
		sliderValue() {
			return Math.log10(this.scope.windowLength / 10) / Math.log10(100);
		}
	},
	methods: { onWindowChange(e) {
		const t = parseFloat(e.target.value);
		this.scope.windowLength = Math.round(10 * Math.pow(100, t));
	} }
};
var _hoisted_1$5 = { class: "dock-panel" };
var _hoisted_2$3 = { class: "dock-panel__controls" };
var _hoisted_3$2 = { class: "control-label" };
var _hoisted_4$1 = ["value"];
var _hoisted_5$1 = { class: "viz-controls__value" };
var _hoisted_6$1 = { class: "viz-controls__checkbox" };
var _hoisted_7$1 = { class: "viz-controls__checkbox" };
var _hoisted_8 = { class: "dock-panel__canvas" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_LabelKnob = resolveComponent("LabelKnob");
	const _component_Oscilloscope = resolveComponent("Oscilloscope");
	return openBlock(), createElementBlock("div", _hoisted_1$5, [createBaseVNode("div", _hoisted_2$3, [
		createBaseVNode("label", _hoisted_3$2, toDisplayString$1(_ctx.$t("visualization.windowSize")), 1),
		createBaseVNode("input", {
			type: "range",
			class: "viz-controls__slider",
			min: 0,
			max: 1,
			step: .001,
			value: $options.sliderValue,
			onInput: _cache[0] || (_cache[0] = (...args) => $options.onWindowChange && $options.onWindowChange(...args))
		}, null, 40, _hoisted_4$1),
		createBaseVNode("span", _hoisted_5$1, toDisplayString$1($options.scope.windowLength) + " ms", 1),
		createVNode(_component_LabelKnob, {
			label: _ctx.$t("visualization.amplitude"),
			modelValue: $options.scope.amplitude,
			"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $options.scope.amplitude = $event),
			mini: 0,
			maxi: 1
		}, null, 8, ["label", "modelValue"]),
		createBaseVNode("label", _hoisted_6$1, [withDirectives(createBaseVNode("input", {
			type: "checkbox",
			"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $options.scope.autoNormalize = $event)
		}, null, 512), [[vModelCheckbox, $options.scope.autoNormalize]]), createTextVNode(toDisplayString$1(_ctx.$t("visualization.autoNormalize")), 1)]),
		createBaseVNode("label", _hoisted_7$1, [withDirectives(createBaseVNode("input", {
			type: "checkbox",
			"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $options.scope.forceSync = $event)
		}, null, 512), [[vModelCheckbox, $options.scope.forceSync]]), createTextVNode(toDisplayString$1(_ctx.$t("visualization.forceSync")), 1)])
	]), createBaseVNode("div", _hoisted_8, [createVNode(_component_Oscilloscope)])]);
}
var OscilloscopePanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$5, [["render", _sfc_render$5]]);
//#endregion
//#region src/components/visualization/XYScope.vue
var _sfc_main$4 = {
	name: "XYScope",
	mixins: [scopeCanvasMixin],
	props: { storeKey: {
		type: String,
		default: "xy"
	} },
	methods: { draw(c, w, h) {
		c.strokeStyle = "#1a1a24";
		c.lineWidth = .5;
		for (let i = 1; i < 4; i++) {
			const y = i / 4 * h;
			c.beginPath();
			c.moveTo(0, y);
			c.lineTo(w, y);
			c.stroke();
			const x = i / 4 * w;
			c.beginPath();
			c.moveTo(x, 0);
			c.lineTo(x, h);
			c.stroke();
		}
		c.strokeStyle = "#252530";
		c.beginPath();
		c.moveTo(0, h / 2);
		c.lineTo(w, h / 2);
		c.stroke();
		c.beginPath();
		c.moveTo(w / 2, 0);
		c.lineTo(w / 2, h);
		c.stroke();
		const sd = this.getScopeData();
		if (!sd) return;
		const { engine, data, bufLen, samplesToShow, displayGain } = sd;
		const phase = useUiStateStore()[this.storeKey].phase ?? .25;
		const sourceFreq = engine.sourcePanel ? engine.sourcePanel.currentFrequency : 0;
		let phaseOffset;
		if (sourceFreq > 0) phaseOffset = Math.round(engine.sampleRate / sourceFreq * phase);
		else phaseOffset = Math.round(samplesToShow * phase);
		phaseOffset = Math.max(1, Math.min(phaseOffset, Math.floor(bufLen / 3)));
		const count = Math.min(samplesToShow, bufLen - phaseOffset);
		const dim = Math.min(w, h);
		const cx = w / 2;
		const cy = h / 2;
		c.strokeStyle = "#4ade80";
		c.lineWidth = 1.5;
		c.globalAlpha = .8;
		c.beginPath();
		for (let i = 0; i < count; i++) {
			const xSample = data[i] * displayGain;
			const ySample = data[i + phaseOffset] * displayGain;
			const px = cx + xSample * dim / 2;
			const py = cy - ySample * dim / 2;
			if (i === 0) c.moveTo(px, py);
			else c.lineTo(px, py);
		}
		c.stroke();
		c.globalAlpha = 1;
	} }
};
var _hoisted_1$4 = { class: "scope-canvas" };
var _hoisted_2$2 = {
	ref: "canvas",
	class: "scope-canvas__el"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1$4, [createBaseVNode("canvas", _hoisted_2$2, null, 512)]);
}
//#endregion
//#region src/components/dock/XYPanel.vue
var _sfc_main$3 = {
	name: "XYPanel",
	components: {
		XYScope: /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$4, [["render", _sfc_render$4]]),
		LabelKnob: LabelKnob_default
	},
	computed: {
		xy() {
			return useUiStateStore().xy;
		},
		sliderValue() {
			return Math.log10(this.xy.windowLength / 10) / Math.log10(100);
		},
		phaseDeg() {
			return Math.round((this.xy.phase ?? .25) * 360);
		}
	},
	methods: {
		onWindowChange(e) {
			const t = parseFloat(e.target.value);
			this.xy.windowLength = Math.round(10 * Math.pow(100, t));
		},
		onPhaseChange(deg) {
			this.xy.phase = deg / 360;
		}
	}
};
var _hoisted_1$3 = { class: "dock-panel" };
var _hoisted_2$1 = { class: "dock-panel__controls" };
var _hoisted_3$1 = { class: "control-label" };
var _hoisted_4 = ["value"];
var _hoisted_5 = { class: "viz-controls__value" };
var _hoisted_6 = { class: "viz-controls__checkbox" };
var _hoisted_7 = { class: "dock-panel__canvas" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_LabelKnob = resolveComponent("LabelKnob");
	const _component_XYScope = resolveComponent("XYScope");
	return openBlock(), createElementBlock("div", _hoisted_1$3, [createBaseVNode("div", _hoisted_2$1, [
		createBaseVNode("label", _hoisted_3$1, toDisplayString$1(_ctx.$t("visualization.windowSize")), 1),
		createBaseVNode("input", {
			type: "range",
			class: "viz-controls__slider",
			min: 0,
			max: 1,
			step: .001,
			value: $options.sliderValue,
			onInput: _cache[0] || (_cache[0] = (...args) => $options.onWindowChange && $options.onWindowChange(...args))
		}, null, 40, _hoisted_4),
		createBaseVNode("span", _hoisted_5, toDisplayString$1($options.xy.windowLength) + " ms", 1),
		createVNode(_component_LabelKnob, {
			label: _ctx.$t("visualization.amplitude"),
			modelValue: $options.xy.amplitude,
			"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $options.xy.amplitude = $event),
			mini: 0,
			maxi: 1
		}, null, 8, ["label", "modelValue"]),
		createVNode(_component_LabelKnob, {
			label: "Phase",
			modelValue: $options.phaseDeg,
			"onUpdate:modelValue": $options.onPhaseChange,
			mini: 0,
			maxi: 360,
			integer: true,
			defaultValue: 90
		}, null, 8, ["modelValue", "onUpdate:modelValue"]),
		createBaseVNode("label", _hoisted_6, [withDirectives(createBaseVNode("input", {
			type: "checkbox",
			"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $options.xy.autoNormalize = $event)
		}, null, 512), [[vModelCheckbox, $options.xy.autoNormalize]]), createTextVNode(toDisplayString$1(_ctx.$t("visualization.autoNormalize")), 1)])
	]), createBaseVNode("div", _hoisted_7, [createVNode(_component_XYScope)])]);
}
var XYPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$3, [["render", _sfc_render$3]]);
//#endregion
//#region src/components/dock/DockLayout.vue
var PANEL_COMPONENTS = {
	spectrum: markRaw(SpectrumPanel_default),
	waterfall: markRaw(WaterfallPanel_default),
	oscilloscope: markRaw(OscilloscopePanel_default),
	xy: markRaw(XYPanel_default)
};
var DEFAULT_LAYOUT = { root: {
	type: "column",
	content: [{
		type: "stack",
		content: [{
			type: "component",
			componentType: "spectrum",
			title: "Spectrum"
		}, {
			type: "component",
			componentType: "waterfall",
			title: "Waterfall"
		}]
	}, {
		type: "stack",
		content: [{
			type: "component",
			componentType: "oscilloscope",
			title: "Oscilloscope"
		}, {
			type: "component",
			componentType: "xy",
			title: "XY"
		}]
	}]
} };
var panelIdCounter = 0;
var _sfc_main$2 = {
	name: "DockLayout",
	data() {
		return {
			panels: [],
			panelComponents: PANEL_COMPONENTS,
			gl: null
		};
	},
	mounted() {
		this.initLayout();
		this._resizeObserver = new ResizeObserver(() => {
			if (this.gl) this.gl.updateRootSize();
		});
		this._resizeObserver.observe(this.$refs.container);
		this._onReset = () => this.resetLayout();
		document.addEventListener("reset-dock-layout", this._onReset);
	},
	beforeUnmount() {
		document.removeEventListener("reset-dock-layout", this._onReset);
		if (this._resizeObserver) this._resizeObserver.disconnect();
		if (this._saveTimer) clearTimeout(this._saveTimer);
		if (this.gl) {
			this.gl.destroy();
			this.gl = null;
		}
	},
	methods: {
		initLayout() {
			const container = this.$refs.container;
			if (!container) return;
			const gl = new GoldenLayout(container, this.handleBind.bind(this), this.handleUnbind.bind(this));
			this.gl = gl;
			gl.on("stateChanged", () => this.debouncedSave());
			const saved = loadSettings().dockLayout;
			if (saved && saved.root) try {
				gl.loadLayout(saved);
			} catch (e) {
				console.warn("Failed to load saved dock layout, using default:", e);
				gl.loadLayout(DEFAULT_LAYOUT);
			}
			else gl.loadLayout(DEFAULT_LAYOUT);
		},
		handleBind(container, itemConfig) {
			const type = itemConfig.componentType;
			const id = ++panelIdCounter;
			if (!this._containerMap) this._containerMap = /* @__PURE__ */ new Map();
			this._containerMap.set(id, container);
			this.panels.push({
				id,
				type,
				element: container.element
			});
			return {
				component: void 0,
				virtual: true
			};
		},
		handleUnbind(container) {
			const idx = this.panels.findIndex((p) => {
				return this._containerMap.get(p.id) === container;
			});
			if (idx !== -1) {
				const panel = this.panels[idx];
				this._containerMap.delete(panel.id);
				this.panels.splice(idx, 1);
			}
		},
		resetLayout() {
			if (!this.gl) return;
			this.panels = [];
			if (this._containerMap) this._containerMap.clear();
			this.gl.clear();
			this.gl.loadLayout(DEFAULT_LAYOUT);
			saveSetting("dockLayout", null);
		},
		debouncedSave() {
			clearTimeout(this._saveTimer);
			this._saveTimer = setTimeout(() => {
				if (this.gl) {
					const resolved = this.gl.saveLayout();
					saveSetting("dockLayout", LayoutConfig.fromResolved(resolved));
				}
			}, 500);
		}
	}
};
var _hoisted_1$2 = { class: "dock-layout-wrap" };
var _hoisted_2 = ["title"];
var _hoisted_3 = {
	ref: "container",
	class: "dock-layout"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock(Fragment, null, [createBaseVNode("div", _hoisted_1$2, [createBaseVNode("button", {
		class: "dock-reset-btn",
		title: _ctx.$i18n.locale === "fr" ? "Réinitialiser la disposition" : "Reset layout",
		onClick: _cache[0] || (_cache[0] = (...args) => $options.resetLayout && $options.resetLayout(...args))
	}, [..._cache[1] || (_cache[1] = [createBaseVNode("svg", {
		width: "12",
		height: "12",
		viewBox: "0 0 16 16",
		fill: "none"
	}, [createBaseVNode("path", {
		d: "M2 8a6 6 0 0 1 10.3-4.2L11 5h4V1l-1.6 1.6A7.9 7.9 0 0 0 8 0a8 8 0 1 0 8 8h-2a6 6 0 0 1-12 0z",
		fill: "currentColor"
	})], -1)])], 8, _hoisted_2), createBaseVNode("div", _hoisted_3, null, 512)]), (openBlock(true), createElementBlock(Fragment, null, renderList($data.panels, (panel) => {
		return openBlock(), createElementBlock(Fragment, { key: panel.id }, [panel.element ? (openBlock(), createBlock(Teleport, {
			key: 0,
			to: panel.element
		}, [(openBlock(), createBlock(resolveDynamicComponent($data.panelComponents[panel.type])))], 8, ["to"])) : createCommentVNode("", true)], 64);
	}), 128))], 64);
}
//#endregion
//#region src/components/layout/RightPanel.vue
var _sfc_main$1 = {
	name: "RightPanel",
	components: { DockLayout: /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$2, [["render", _sfc_render$2]]) },
	data() {
		return { _saveTimer: null };
	},
	watch: {
		spectrum: {
			deep: true,
			handler() {
				this.debouncedSave();
			}
		},
		waterfall: {
			deep: true,
			handler() {
				this.debouncedSave();
			}
		},
		scope: {
			deep: true,
			handler() {
				this.debouncedSave();
			}
		},
		xy: {
			deep: true,
			handler() {
				this.debouncedSave();
			}
		}
	},
	computed: {
		spectrum() {
			return useUiStateStore().spectrum;
		},
		waterfall() {
			return useUiStateStore().waterfall;
		},
		scope() {
			return useUiStateStore().scope;
		},
		xy() {
			return useUiStateStore().xy;
		}
	},
	methods: { debouncedSave() {
		clearTimeout(this._saveTimer);
		this._saveTimer = setTimeout(() => useUiStateStore().saveState(), 500);
	} }
};
var _hoisted_1$1 = { class: "right-panel" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_DockLayout = resolveComponent("DockLayout");
	return openBlock(), createElementBlock("main", _hoisted_1$1, [createVNode(_component_DockLayout)]);
}
//#endregion
//#region src/App.vue
var _sfc_main = {
	name: "App",
	components: {
		AppHeader: AppHeader_default,
		LeftPanel: LeftPanel_default,
		RightPanel: /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$1, [["render", _sfc_render$1]])
	},
	created() {
		useAudioEngineStore().init();
	}
};
var _hoisted_1 = { class: "app-body" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_AppHeader = resolveComponent("AppHeader");
	const _component_LeftPanel = resolveComponent("LeftPanel");
	const _component_RightPanel = resolveComponent("RightPanel");
	return openBlock(), createElementBlock(Fragment, null, [createVNode(_component_AppHeader), createBaseVNode("div", _hoisted_1, [createVNode(_component_LeftPanel), createVNode(_component_RightPanel)])], 64);
}
//#endregion
//#region src/main.js
var app = createApp(/* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]));
app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount("#app");
//#endregion
export { renderList as C, normalizeClass as D, withDirectives as E, toDisplayString$1 as O, openBlock as S, resolveDynamicComponent as T, createBlock as _, interpFloat as a, createTextVNode as b, toLog as c, useModuleRegistryStore as d, __vitePreload as f, createBaseVNode as g, Fragment as h, formatValue as i, useAudioEngineStore as l, vModelSelect as m, EditableValue_default as n, tFromValue as o, vModelCheckbox as p, clamp as r, toExp as s, LabelKnob_default as t, _plugin_vue_export_helper_default as u, createCommentVNode as v, resolveComponent as w, createVNode as x, createElementBlock as y };
