// Compiled by ClojureScript 0.0-2755 {}
goog.provide('quiescent');
goog.require('cljs.core');
/**
* Utility function. Takes an object which is (possibly) a
* ClojureScript map. If the value is a ClojureScript map, convert it
* to a JavaScript properties object. Otherwise, return the argument
* unchanged.
*/
quiescent.js_props = (function js_props(obj){
if(cljs.core.map_QMARK_(obj)){
var o = (function (){var obj25011 = {};
return obj25011;
})();
var seq__25012_25018 = cljs.core.seq(obj);
var chunk__25013_25019 = null;
var count__25014_25020 = (0);
var i__25015_25021 = (0);
while(true){
if((i__25015_25021 < count__25014_25020)){
var vec__25016_25022 = chunk__25013_25019.cljs$core$IIndexed$_nth$arity$2(null,i__25015_25021);
var k_25023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25016_25022,(0),null);
var v_25024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25016_25022,(1),null);
(o[cljs.core.name(k_25023)] = js_props(v_25024));

var G__25025 = seq__25012_25018;
var G__25026 = chunk__25013_25019;
var G__25027 = count__25014_25020;
var G__25028 = (i__25015_25021 + (1));
seq__25012_25018 = G__25025;
chunk__25013_25019 = G__25026;
count__25014_25020 = G__25027;
i__25015_25021 = G__25028;
continue;
} else {
var temp__4126__auto___25029 = cljs.core.seq(seq__25012_25018);
if(temp__4126__auto___25029){
var seq__25012_25030__$1 = temp__4126__auto___25029;
if(cljs.core.chunked_seq_QMARK_(seq__25012_25030__$1)){
var c__4559__auto___25031 = cljs.core.chunk_first(seq__25012_25030__$1);
var G__25032 = cljs.core.chunk_rest(seq__25012_25030__$1);
var G__25033 = c__4559__auto___25031;
var G__25034 = cljs.core.count(c__4559__auto___25031);
var G__25035 = (0);
seq__25012_25018 = G__25032;
chunk__25013_25019 = G__25033;
count__25014_25020 = G__25034;
i__25015_25021 = G__25035;
continue;
} else {
var vec__25017_25036 = cljs.core.first(seq__25012_25030__$1);
var k_25037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25017_25036,(0),null);
var v_25038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25017_25036,(1),null);
(o[cljs.core.name(k_25037)] = js_props(v_25038));

var G__25039 = cljs.core.next(seq__25012_25030__$1);
var G__25040 = null;
var G__25041 = (0);
var G__25042 = (0);
seq__25012_25018 = G__25039;
chunk__25013_25019 = G__25040;
count__25014_25020 = G__25041;
i__25015_25021 = G__25042;
continue;
}
} else {
}
}
break;
}

return o;
} else {
return obj;
}
});
/**
* Within a component render function, will be bound to the raw
* ReactJS component.
*/
quiescent._STAR_component_STAR_ = null;
/**
* Return a function that will return a ReactJS component, using the
* provided function as the implementation for React's 'render' method
* on the component.
* 
* The given render function should take a single immutable value as
* its first argument, and return a single ReactJS component.
* Additional arguments to the component constructor will be passed as
* additional arguments to the render function whenever it is invoked,
* but will *not* be included in any calculations regarding whether the
* component should re-render.
*/
quiescent.component = (function component(renderer){
var react_component = React.createClass({"render": (function (){
var this$ = this;
var _STAR_component_STAR_25045 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_25045;
}}), "shouldComponentUpdate": (function (next_props,_){
var this$ = this;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((this$.props["value"]),(next_props["value"]));
})});
return ((function (react_component){
return (function() { 
var G__25047__delegate = function (value,static_args){
var G__25046 = {"statics": static_args, "value": value};
return (react_component.cljs$core$IFn$_invoke$arity$1 ? react_component.cljs$core$IFn$_invoke$arity$1(G__25046) : react_component.call(null,G__25046));
};
var G__25047 = function (value,var_args){
var static_args = null;
if (arguments.length > 1) {
var G__25048__i = 0, G__25048__a = new Array(arguments.length -  1);
while (G__25048__i < G__25048__a.length) {G__25048__a[G__25048__i] = arguments[G__25048__i + 1]; ++G__25048__i;}
  static_args = new cljs.core.IndexedSeq(G__25048__a,0);
} 
return G__25047__delegate.call(this,value,static_args);};
G__25047.cljs$lang$maxFixedArity = 1;
G__25047.cljs$lang$applyTo = (function (arglist__25049){
var value = cljs.core.first(arglist__25049);
var static_args = cljs.core.rest(arglist__25049);
return G__25047__delegate(value,static_args);
});
G__25047.cljs$core$IFn$_invoke$arity$variadic = G__25047__delegate;
return G__25047;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillUnmount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_25056 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_25056;
}} else {
return null;
}
}), "componentWillUpdate": (function (_,___$1){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_25055 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_25055;
}} else {
return null;
}
}), "componentWillMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_25054 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_25054;
}} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_25052 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{var G__25053 = this$.getDOMNode();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25053) : f.call(null,G__25053));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_25052;
}} else {
return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){
var this$ = this;
var temp__4126__auto__ = (this$.props["onUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_25050 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{var G__25051 = this$.getDOMNode();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25051) : f.call(null,G__25051));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_25050;
}} else {
return null;
}
}), "render": (function (){
var this$ = this;
return (this$.props["wrappee"]);
})});
/**
* Create a wrapper function for a compoment implementing multiple
* lifecycle functions. Lifecycle functions are specified as any number
* of additional key-value pairs passed as arguments to this function.
* 
* Valid keys and values include:
* 
* :onUpdate - will call the provided function,
* passing the rendered DOM node as a single arg
* :onMount - will call the provided function,
* passing the rendered DOM node as a single arg
* :onWillUpdate - will call the provided function with no arguments
* :onWillMount - will call the provided function with no arguments
* :onWillUnmount - will call the provided function with no arguments
* @param {...*} var_args
*/
quiescent.wrapper = (function() { 
var wrapper__delegate = function (child,kvs){
var props = quiescent.js_props(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.array_map,cljs.core.constant$keyword$153,child,kvs));
var temp__4126__auto___25059 = (child.props["key"]);
if(cljs.core.truth_(temp__4126__auto___25059)){
var key_25060 = temp__4126__auto___25059;
(props["key"] = key_25060);
} else {
}

var G__25058 = props;
return (quiescent.WrapperComponent.cljs$core$IFn$_invoke$arity$1 ? quiescent.WrapperComponent.cljs$core$IFn$_invoke$arity$1(G__25058) : quiescent.WrapperComponent.call(null,G__25058));
};
var wrapper = function (child,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__25061__i = 0, G__25061__a = new Array(arguments.length -  1);
while (G__25061__i < G__25061__a.length) {G__25061__a[G__25061__i] = arguments[G__25061__i + 1]; ++G__25061__i;}
  kvs = new cljs.core.IndexedSeq(G__25061__a,0);
} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__25062){
var child = cljs.core.first(arglist__25062);
var kvs = cljs.core.rest(arglist__25062);
return wrapper__delegate(child,kvs);
});
wrapper.cljs$core$IFn$_invoke$arity$variadic = wrapper__delegate;
return wrapper;
})()
;
/**
* Wrap a component, specifying a function to be called on the
* componentDidUpdate lifecycle event.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_update = (function on_update(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$154,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentDidMount lifecycle event.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_mount = (function on_mount(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$155,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentDidMount AND the componentDidUpdate lifecycle events.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_render = (function on_render(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$155,f,cljs.core.constant$keyword$154,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillMount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_mount = (function on_will_mount(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$156,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillUpdate lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_update = (function on_will_update(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$157,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillMount AND the componentWillUpdate lifecycle events.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_render = (function on_will_render(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$156,f,cljs.core.constant$keyword$157,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillUnmount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_unmount = (function on_will_unmount(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$158,f], 0));
});
/**
* Given a ReactJS component, immediately render it, rooted to the
* specified DOM node.
*/
quiescent.render = (function render(component,node){
return React.renderComponent(component,node);
});
