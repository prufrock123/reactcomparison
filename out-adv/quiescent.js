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
var o = (function (){var obj24805 = {};
return obj24805;
})();
var seq__24806_24812 = cljs.core.seq(obj);
var chunk__24807_24813 = null;
var count__24808_24814 = (0);
var i__24809_24815 = (0);
while(true){
if((i__24809_24815 < count__24808_24814)){
var vec__24810_24816 = chunk__24807_24813.cljs$core$IIndexed$_nth$arity$2(null,i__24809_24815);
var k_24817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24810_24816,(0),null);
var v_24818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24810_24816,(1),null);
(o[cljs.core.name(k_24817)] = js_props(v_24818));

var G__24819 = seq__24806_24812;
var G__24820 = chunk__24807_24813;
var G__24821 = count__24808_24814;
var G__24822 = (i__24809_24815 + (1));
seq__24806_24812 = G__24819;
chunk__24807_24813 = G__24820;
count__24808_24814 = G__24821;
i__24809_24815 = G__24822;
continue;
} else {
var temp__4126__auto___24823 = cljs.core.seq(seq__24806_24812);
if(temp__4126__auto___24823){
var seq__24806_24824__$1 = temp__4126__auto___24823;
if(cljs.core.chunked_seq_QMARK_(seq__24806_24824__$1)){
var c__4559__auto___24825 = cljs.core.chunk_first(seq__24806_24824__$1);
var G__24826 = cljs.core.chunk_rest(seq__24806_24824__$1);
var G__24827 = c__4559__auto___24825;
var G__24828 = cljs.core.count(c__4559__auto___24825);
var G__24829 = (0);
seq__24806_24812 = G__24826;
chunk__24807_24813 = G__24827;
count__24808_24814 = G__24828;
i__24809_24815 = G__24829;
continue;
} else {
var vec__24811_24830 = cljs.core.first(seq__24806_24824__$1);
var k_24831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24811_24830,(0),null);
var v_24832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24811_24830,(1),null);
(o[cljs.core.name(k_24831)] = js_props(v_24832));

var G__24833 = cljs.core.next(seq__24806_24824__$1);
var G__24834 = null;
var G__24835 = (0);
var G__24836 = (0);
seq__24806_24812 = G__24833;
chunk__24807_24813 = G__24834;
count__24808_24814 = G__24835;
i__24809_24815 = G__24836;
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
var _STAR_component_STAR_24839 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_24839;
}}), "shouldComponentUpdate": (function (next_props,_){
var this$ = this;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((this$.props["value"]),(next_props["value"]));
})});
return ((function (react_component){
return (function() { 
var G__24841__delegate = function (value,static_args){
var G__24840 = {"statics": static_args, "value": value};
return (react_component.cljs$core$IFn$_invoke$arity$1 ? react_component.cljs$core$IFn$_invoke$arity$1(G__24840) : react_component.call(null,G__24840));
};
var G__24841 = function (value,var_args){
var static_args = null;
if (arguments.length > 1) {
var G__24842__i = 0, G__24842__a = new Array(arguments.length -  1);
while (G__24842__i < G__24842__a.length) {G__24842__a[G__24842__i] = arguments[G__24842__i + 1]; ++G__24842__i;}
  static_args = new cljs.core.IndexedSeq(G__24842__a,0);
} 
return G__24841__delegate.call(this,value,static_args);};
G__24841.cljs$lang$maxFixedArity = 1;
G__24841.cljs$lang$applyTo = (function (arglist__24843){
var value = cljs.core.first(arglist__24843);
var static_args = cljs.core.rest(arglist__24843);
return G__24841__delegate(value,static_args);
});
G__24841.cljs$core$IFn$_invoke$arity$variadic = G__24841__delegate;
return G__24841;
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
var _STAR_component_STAR_24850 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_24850;
}} else {
return null;
}
}), "componentWillUpdate": (function (_,___$1){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_24849 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_24849;
}} else {
return null;
}
}), "componentWillMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_24848 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_24848;
}} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_24846 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{var G__24847 = this$.getDOMNode();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24847) : f.call(null,G__24847));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_24846;
}} else {
return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){
var this$ = this;
var temp__4126__auto__ = (this$.props["onUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_24844 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{var G__24845 = this$.getDOMNode();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24845) : f.call(null,G__24845));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_24844;
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
var props = quiescent.js_props(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.array_map,cljs.core.constant$keyword$145,child,kvs));
var temp__4126__auto___24853 = (child.props["key"]);
if(cljs.core.truth_(temp__4126__auto___24853)){
var key_24854 = temp__4126__auto___24853;
(props["key"] = key_24854);
} else {
}

var G__24852 = props;
return (quiescent.WrapperComponent.cljs$core$IFn$_invoke$arity$1 ? quiescent.WrapperComponent.cljs$core$IFn$_invoke$arity$1(G__24852) : quiescent.WrapperComponent.call(null,G__24852));
};
var wrapper = function (child,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__24855__i = 0, G__24855__a = new Array(arguments.length -  1);
while (G__24855__i < G__24855__a.length) {G__24855__a[G__24855__i] = arguments[G__24855__i + 1]; ++G__24855__i;}
  kvs = new cljs.core.IndexedSeq(G__24855__a,0);
} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__24856){
var child = cljs.core.first(arglist__24856);
var kvs = cljs.core.rest(arglist__24856);
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
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$146,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentDidMount lifecycle event.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_mount = (function on_mount(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$147,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentDidMount AND the componentDidUpdate lifecycle events.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_render = (function on_render(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$147,f,cljs.core.constant$keyword$146,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillMount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_mount = (function on_will_mount(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$148,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillUpdate lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_update = (function on_will_update(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$149,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillMount AND the componentWillUpdate lifecycle events.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_render = (function on_will_render(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$148,f,cljs.core.constant$keyword$149,f], 0));
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillUnmount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_unmount = (function on_will_unmount(child,f){
return quiescent.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.constant$keyword$150,f], 0));
});
/**
* Given a ReactJS component, immediately render it, rooted to the
* specified DOM node.
*/
quiescent.render = (function render(component,node){
return React.renderComponent(component,node);
});
