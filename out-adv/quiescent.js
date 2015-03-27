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
var o = (function (){var obj25154 = {};
return obj25154;
})();
var seq__25155_25161 = cljs.core.seq(obj);
var chunk__25156_25162 = null;
var count__25157_25163 = (0);
var i__25158_25164 = (0);
while(true){
if((i__25158_25164 < count__25157_25163)){
var vec__25159_25165 = chunk__25156_25162.cljs$core$IIndexed$_nth$arity$2(null,i__25158_25164);
var k_25166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25159_25165,(0),null);
var v_25167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25159_25165,(1),null);
(o[cljs.core.name(k_25166)] = js_props(v_25167));

var G__25168 = seq__25155_25161;
var G__25169 = chunk__25156_25162;
var G__25170 = count__25157_25163;
var G__25171 = (i__25158_25164 + (1));
seq__25155_25161 = G__25168;
chunk__25156_25162 = G__25169;
count__25157_25163 = G__25170;
i__25158_25164 = G__25171;
continue;
} else {
var temp__4126__auto___25172 = cljs.core.seq(seq__25155_25161);
if(temp__4126__auto___25172){
var seq__25155_25173__$1 = temp__4126__auto___25172;
if(cljs.core.chunked_seq_QMARK_(seq__25155_25173__$1)){
var c__4559__auto___25174 = cljs.core.chunk_first(seq__25155_25173__$1);
var G__25175 = cljs.core.chunk_rest(seq__25155_25173__$1);
var G__25176 = c__4559__auto___25174;
var G__25177 = cljs.core.count(c__4559__auto___25174);
var G__25178 = (0);
seq__25155_25161 = G__25175;
chunk__25156_25162 = G__25176;
count__25157_25163 = G__25177;
i__25158_25164 = G__25178;
continue;
} else {
var vec__25160_25179 = cljs.core.first(seq__25155_25173__$1);
var k_25180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25160_25179,(0),null);
var v_25181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25160_25179,(1),null);
(o[cljs.core.name(k_25180)] = js_props(v_25181));

var G__25182 = cljs.core.next(seq__25155_25173__$1);
var G__25183 = null;
var G__25184 = (0);
var G__25185 = (0);
seq__25155_25161 = G__25182;
chunk__25156_25162 = G__25183;
count__25157_25163 = G__25184;
i__25158_25164 = G__25185;
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
var _STAR_component_STAR_25188 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_25188;
}}), "shouldComponentUpdate": (function (next_props,_){
var this$ = this;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((this$.props["value"]),(next_props["value"]));
})});
return ((function (react_component){
return (function() { 
var G__25190__delegate = function (value,static_args){
var G__25189 = {"statics": static_args, "value": value};
return (react_component.cljs$core$IFn$_invoke$arity$1 ? react_component.cljs$core$IFn$_invoke$arity$1(G__25189) : react_component.call(null,G__25189));
};
var G__25190 = function (value,var_args){
var static_args = null;
if (arguments.length > 1) {
var G__25191__i = 0, G__25191__a = new Array(arguments.length -  1);
while (G__25191__i < G__25191__a.length) {G__25191__a[G__25191__i] = arguments[G__25191__i + 1]; ++G__25191__i;}
  static_args = new cljs.core.IndexedSeq(G__25191__a,0);
} 
return G__25190__delegate.call(this,value,static_args);};
G__25190.cljs$lang$maxFixedArity = 1;
G__25190.cljs$lang$applyTo = (function (arglist__25192){
var value = cljs.core.first(arglist__25192);
var static_args = cljs.core.rest(arglist__25192);
return G__25190__delegate(value,static_args);
});
G__25190.cljs$core$IFn$_invoke$arity$variadic = G__25190__delegate;
return G__25190;
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
var _STAR_component_STAR_25199 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_25199;
}} else {
return null;
}
}), "componentWillUpdate": (function (_,___$1){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_25198 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_25198;
}} else {
return null;
}
}), "componentWillMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_25197 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_25197;
}} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_25195 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{var G__25196 = this$.getDOMNode();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25196) : f.call(null,G__25196));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_25195;
}} else {
return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){
var this$ = this;
var temp__4126__auto__ = (this$.props["onUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_25193 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{var G__25194 = this$.getDOMNode();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25194) : f.call(null,G__25194));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_25193;
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
var temp__4126__auto___25202 = (child.props["key"]);
if(cljs.core.truth_(temp__4126__auto___25202)){
var key_25203 = temp__4126__auto___25202;
(props["key"] = key_25203);
} else {
}

var G__25201 = props;
return (quiescent.WrapperComponent.cljs$core$IFn$_invoke$arity$1 ? quiescent.WrapperComponent.cljs$core$IFn$_invoke$arity$1(G__25201) : quiescent.WrapperComponent.call(null,G__25201));
};
var wrapper = function (child,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__25204__i = 0, G__25204__a = new Array(arguments.length -  1);
while (G__25204__i < G__25204__a.length) {G__25204__a[G__25204__i] = arguments[G__25204__i + 1]; ++G__25204__i;}
  kvs = new cljs.core.IndexedSeq(G__25204__a,0);
} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__25205){
var child = cljs.core.first(arglist__25205);
var kvs = cljs.core.rest(arglist__25205);
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
