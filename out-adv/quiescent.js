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
var o = (function (){var obj24951 = {};
return obj24951;
})();
var seq__24952_24958 = cljs.core.seq(obj);
var chunk__24953_24959 = null;
var count__24954_24960 = (0);
var i__24955_24961 = (0);
while(true){
if((i__24955_24961 < count__24954_24960)){
var vec__24956_24962 = chunk__24953_24959.cljs$core$IIndexed$_nth$arity$2(null,i__24955_24961);
var k_24963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24956_24962,(0),null);
var v_24964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24956_24962,(1),null);
(o[cljs.core.name(k_24963)] = js_props(v_24964));

var G__24965 = seq__24952_24958;
var G__24966 = chunk__24953_24959;
var G__24967 = count__24954_24960;
var G__24968 = (i__24955_24961 + (1));
seq__24952_24958 = G__24965;
chunk__24953_24959 = G__24966;
count__24954_24960 = G__24967;
i__24955_24961 = G__24968;
continue;
} else {
var temp__4126__auto___24969 = cljs.core.seq(seq__24952_24958);
if(temp__4126__auto___24969){
var seq__24952_24970__$1 = temp__4126__auto___24969;
if(cljs.core.chunked_seq_QMARK_(seq__24952_24970__$1)){
var c__4559__auto___24971 = cljs.core.chunk_first(seq__24952_24970__$1);
var G__24972 = cljs.core.chunk_rest(seq__24952_24970__$1);
var G__24973 = c__4559__auto___24971;
var G__24974 = cljs.core.count(c__4559__auto___24971);
var G__24975 = (0);
seq__24952_24958 = G__24972;
chunk__24953_24959 = G__24973;
count__24954_24960 = G__24974;
i__24955_24961 = G__24975;
continue;
} else {
var vec__24957_24976 = cljs.core.first(seq__24952_24970__$1);
var k_24977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24957_24976,(0),null);
var v_24978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24957_24976,(1),null);
(o[cljs.core.name(k_24977)] = js_props(v_24978));

var G__24979 = cljs.core.next(seq__24952_24970__$1);
var G__24980 = null;
var G__24981 = (0);
var G__24982 = (0);
seq__24952_24958 = G__24979;
chunk__24953_24959 = G__24980;
count__24954_24960 = G__24981;
i__24955_24961 = G__24982;
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
var _STAR_component_STAR_24985 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_24985;
}}), "shouldComponentUpdate": (function (next_props,_){
var this$ = this;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((this$.props["value"]),(next_props["value"]));
})});
return ((function (react_component){
return (function() { 
var G__24987__delegate = function (value,static_args){
var G__24986 = {"statics": static_args, "value": value};
return (react_component.cljs$core$IFn$_invoke$arity$1 ? react_component.cljs$core$IFn$_invoke$arity$1(G__24986) : react_component.call(null,G__24986));
};
var G__24987 = function (value,var_args){
var static_args = null;
if (arguments.length > 1) {
var G__24988__i = 0, G__24988__a = new Array(arguments.length -  1);
while (G__24988__i < G__24988__a.length) {G__24988__a[G__24988__i] = arguments[G__24988__i + 1]; ++G__24988__i;}
  static_args = new cljs.core.IndexedSeq(G__24988__a,0);
} 
return G__24987__delegate.call(this,value,static_args);};
G__24987.cljs$lang$maxFixedArity = 1;
G__24987.cljs$lang$applyTo = (function (arglist__24989){
var value = cljs.core.first(arglist__24989);
var static_args = cljs.core.rest(arglist__24989);
return G__24987__delegate(value,static_args);
});
G__24987.cljs$core$IFn$_invoke$arity$variadic = G__24987__delegate;
return G__24987;
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
var _STAR_component_STAR_24996 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_24996;
}} else {
return null;
}
}), "componentWillUpdate": (function (_,___$1){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_24995 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_24995;
}} else {
return null;
}
}), "componentWillMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_24994 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_24994;
}} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_24992 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{var G__24993 = this$.getDOMNode();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24993) : f.call(null,G__24993));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_24992;
}} else {
return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){
var this$ = this;
var temp__4126__auto__ = (this$.props["onUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_24990 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{var G__24991 = this$.getDOMNode();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24991) : f.call(null,G__24991));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_24990;
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
var props = quiescent.js_props(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.array_map,cljs.core.constant$keyword$149,child,kvs));
var temp__4126__auto___24999 = (child.props["key"]);
if(cljs.core.truth_(temp__4126__auto___24999)){
var key_25000 = temp__4126__auto___24999;
(props["key"] = key_25000);
} else {
}

var G__24998 = props;
return (quiescent.WrapperComponent.cljs$core$IFn$_invoke$arity$1 ? quiescent.WrapperComponent.cljs$core$IFn$_invoke$arity$1(G__24998) : quiescent.WrapperComponent.call(null,G__24998));
};
var wrapper = function (child,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__25001__i = 0, G__25001__a = new Array(arguments.length -  1);
while (G__25001__i < G__25001__a.length) {G__25001__a[G__25001__i] = arguments[G__25001__i + 1]; ++G__25001__i;}
  kvs = new cljs.core.IndexedSeq(G__25001__a,0);
} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__25002){
var child = cljs.core.first(arglist__25002);
var kvs = cljs.core.rest(arglist__25002);
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
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$150,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentDidMount lifecycle event.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_mount = (function on_mount(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$151,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentDidMount AND the componentDidUpdate lifecycle events.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_render = (function on_render(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$151,f,cljs.core.constant$keyword$150,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillMount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_mount = (function on_will_mount(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$152,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillUpdate lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_update = (function on_will_update(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$153,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillMount AND the componentWillUpdate lifecycle events.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_render = (function on_will_render(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$152,f,cljs.core.constant$keyword$153,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillUnmount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_unmount = (function on_will_unmount(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$154,f], 0));
});
/**
* Given a ReactJS component, immediately render it, rooted to the
* specified DOM node.
*/
quiescent.render = (function render(component,node){
return React.renderComponent(component,node);
});
