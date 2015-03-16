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
var o = (function (){var obj25178 = {};
return obj25178;
})();
var seq__25179_25185 = cljs.core.seq(obj);
var chunk__25180_25186 = null;
var count__25181_25187 = (0);
var i__25182_25188 = (0);
while(true){
if((i__25182_25188 < count__25181_25187)){
var vec__25183_25189 = chunk__25180_25186.cljs$core$IIndexed$_nth$arity$2(null,i__25182_25188);
var k_25190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25183_25189,(0),null);
var v_25191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25183_25189,(1),null);
(o[cljs.core.name(k_25190)] = js_props(v_25191));

var G__25192 = seq__25179_25185;
var G__25193 = chunk__25180_25186;
var G__25194 = count__25181_25187;
var G__25195 = (i__25182_25188 + (1));
seq__25179_25185 = G__25192;
chunk__25180_25186 = G__25193;
count__25181_25187 = G__25194;
i__25182_25188 = G__25195;
continue;
} else {
var temp__4126__auto___25196 = cljs.core.seq(seq__25179_25185);
if(temp__4126__auto___25196){
var seq__25179_25197__$1 = temp__4126__auto___25196;
if(cljs.core.chunked_seq_QMARK_(seq__25179_25197__$1)){
var c__4559__auto___25198 = cljs.core.chunk_first(seq__25179_25197__$1);
var G__25199 = cljs.core.chunk_rest(seq__25179_25197__$1);
var G__25200 = c__4559__auto___25198;
var G__25201 = cljs.core.count(c__4559__auto___25198);
var G__25202 = (0);
seq__25179_25185 = G__25199;
chunk__25180_25186 = G__25200;
count__25181_25187 = G__25201;
i__25182_25188 = G__25202;
continue;
} else {
var vec__25184_25203 = cljs.core.first(seq__25179_25197__$1);
var k_25204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25184_25203,(0),null);
var v_25205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25184_25203,(1),null);
(o[cljs.core.name(k_25204)] = js_props(v_25205));

var G__25206 = cljs.core.next(seq__25179_25197__$1);
var G__25207 = null;
var G__25208 = (0);
var G__25209 = (0);
seq__25179_25185 = G__25206;
chunk__25180_25186 = G__25207;
count__25181_25187 = G__25208;
i__25182_25188 = G__25209;
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
var _STAR_component_STAR_25212 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_25212;
}}), "shouldComponentUpdate": (function (next_props,_){
var this$ = this;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((this$.props["value"]),(next_props["value"]));
})});
return ((function (react_component){
return (function() { 
var G__25214__delegate = function (value,static_args){
var G__25213 = {"statics": static_args, "value": value};
return (react_component.cljs$core$IFn$_invoke$arity$1 ? react_component.cljs$core$IFn$_invoke$arity$1(G__25213) : react_component.call(null,G__25213));
};
var G__25214 = function (value,var_args){
var static_args = null;
if (arguments.length > 1) {
var G__25215__i = 0, G__25215__a = new Array(arguments.length -  1);
while (G__25215__i < G__25215__a.length) {G__25215__a[G__25215__i] = arguments[G__25215__i + 1]; ++G__25215__i;}
  static_args = new cljs.core.IndexedSeq(G__25215__a,0);
} 
return G__25214__delegate.call(this,value,static_args);};
G__25214.cljs$lang$maxFixedArity = 1;
G__25214.cljs$lang$applyTo = (function (arglist__25216){
var value = cljs.core.first(arglist__25216);
var static_args = cljs.core.rest(arglist__25216);
return G__25214__delegate(value,static_args);
});
G__25214.cljs$core$IFn$_invoke$arity$variadic = G__25214__delegate;
return G__25214;
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
var _STAR_component_STAR_25223 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_25223;
}} else {
return null;
}
}), "componentWillUpdate": (function (_,___$1){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_25222 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_25222;
}} else {
return null;
}
}), "componentWillMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_25221 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_25221;
}} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_25219 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{var G__25220 = this$.getDOMNode();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25220) : f.call(null,G__25220));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_25219;
}} else {
return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){
var this$ = this;
var temp__4126__auto__ = (this$.props["onUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_25217 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{var G__25218 = this$.getDOMNode();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25218) : f.call(null,G__25218));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_25217;
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
var props = quiescent.js_props(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.array_map,cljs.core.constant$keyword$148,child,kvs));
var temp__4126__auto___25226 = (child.props["key"]);
if(cljs.core.truth_(temp__4126__auto___25226)){
var key_25227 = temp__4126__auto___25226;
(props["key"] = key_25227);
} else {
}

var G__25225 = props;
return (quiescent.WrapperComponent.cljs$core$IFn$_invoke$arity$1 ? quiescent.WrapperComponent.cljs$core$IFn$_invoke$arity$1(G__25225) : quiescent.WrapperComponent.call(null,G__25225));
};
var wrapper = function (child,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__25228__i = 0, G__25228__a = new Array(arguments.length -  1);
while (G__25228__i < G__25228__a.length) {G__25228__a[G__25228__i] = arguments[G__25228__i + 1]; ++G__25228__i;}
  kvs = new cljs.core.IndexedSeq(G__25228__a,0);
} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__25229){
var child = cljs.core.first(arglist__25229);
var kvs = cljs.core.rest(arglist__25229);
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
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$149,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentDidMount lifecycle event.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_mount = (function on_mount(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$150,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentDidMount AND the componentDidUpdate lifecycle events.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_render = (function on_render(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$150,f,cljs.core.constant$keyword$149,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillMount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_mount = (function on_will_mount(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$151,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillUpdate lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_update = (function on_will_update(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$152,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillMount AND the componentWillUpdate lifecycle events.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_render = (function on_will_render(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$151,f,cljs.core.constant$keyword$152,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillUnmount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_unmount = (function on_will_unmount(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$153,f], 0));
});
/**
* Given a ReactJS component, immediately render it, rooted to the
* specified DOM node.
*/
quiescent.render = (function render(component,node){
return React.renderComponent(component,node);
});
