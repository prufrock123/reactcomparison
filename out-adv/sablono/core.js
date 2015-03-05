// Compiled by ClojureScript 0.0-2755 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){
return (function() { 
var G__24410__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__24409 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24409,(0),null);
var body = cljs.core.nthnext(vec__24409,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__24410 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24411__i = 0, G__24411__a = new Array(arguments.length -  0);
while (G__24411__i < G__24411__a.length) {G__24411__a[G__24411__i] = arguments[G__24411__i + 0]; ++G__24411__i;}
  args = new cljs.core.IndexedSeq(G__24411__a,0);
} 
return G__24410__delegate.call(this,args);};
G__24410.cljs$lang$maxFixedArity = 0;
G__24410.cljs$lang$applyTo = (function (arglist__24412){
var args = cljs.core.seq(arglist__24412);
return G__24410__delegate(args);
});
G__24410.cljs$core$IFn$_invoke$arity$variadic = G__24410__delegate;
return G__24410;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4528__auto__ = (function iter__24419(s__24420){
return (new cljs.core.LazySeq(null,(function (){
var s__24420__$1 = s__24420;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24420__$1);
if(temp__4126__auto__){
var s__24420__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24420__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24420__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24422 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24421 = (0);
while(true){
if((i__24421 < size__4527__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24421);
cljs.core.chunk_append(b__24422,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__24425 = (i__24421 + (1));
i__24421 = G__24425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24422),iter__24419(cljs.core.chunk_rest(s__24420__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24422),null);
}
} else {
var args = cljs.core.first(s__24420__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__24419(cljs.core.rest(s__24420__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4528__auto__(arglists);
});
/**
* Render `element` as HTML string.
*/
sablono.core.render = (function render(element){
if(cljs.core.truth_(element)){
var G__24427 = element;
return React.renderToString(G__24427);
} else {
return null;
}
});
/**
* Render `element` as HTML string, without React internal attributes.
*/
sablono.core.render_static = (function render_static(element){
if(cljs.core.truth_(element)){
var G__24429 = element;
return React.renderToStaticMarkup(G__24429);
} else {
return null;
}
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){
var iter__4528__auto__ = (function iter__24436(s__24437){
return (new cljs.core.LazySeq(null,(function (){
var s__24437__$1 = s__24437;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24437__$1);
if(temp__4126__auto__){
var s__24437__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24437__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24437__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24439 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24438 = (0);
while(true){
if((i__24438 < size__4527__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24438);
cljs.core.chunk_append(b__24439,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$105,"text/css",cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$125,"stylesheet"], null)], null));

var G__24442 = (i__24438 + (1));
i__24438 = G__24442;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24439),iter__24436(cljs.core.chunk_rest(s__24437__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24439),null);
}
} else {
var style = cljs.core.first(s__24437__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$105,"text/css",cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$125,"stylesheet"], null)], null),iter__24436(cljs.core.rest(s__24437__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4528__auto__(styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
var G__24443__i = 0, G__24443__a = new Array(arguments.length -  0);
while (G__24443__i < G__24443__a.length) {G__24443__a[G__24443__i] = arguments[G__24443__i + 0]; ++G__24443__i;}
  styles = new cljs.core.IndexedSeq(G__24443__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__24444){
var styles = cljs.core.seq(arglist__24444);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){
var G__24449 = (function (){return goog.dom.getDocument();
})().body;
var G__24450 = (function (){var G__24451 = "script";
var G__24452 = {"src": src};
return goog.dom.createDom(G__24451,G__24452);
})();
return goog.dom.appendChild(G__24449,G__24450);
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to24453 = (function() { 
var link_to24453__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to24453 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__24454__i = 0, G__24454__a = new Array(arguments.length -  1);
while (G__24454__i < G__24454__a.length) {G__24454__a[G__24454__i] = arguments[G__24454__i + 1]; ++G__24454__i;}
  content = new cljs.core.IndexedSeq(G__24454__a,0);
} 
return link_to24453__delegate.call(this,url,content);};
link_to24453.cljs$lang$maxFixedArity = 1;
link_to24453.cljs$lang$applyTo = (function (arglist__24455){
var url = cljs.core.first(arglist__24455);
var content = cljs.core.rest(arglist__24455);
return link_to24453__delegate(url,content);
});
link_to24453.cljs$core$IFn$_invoke$arity$variadic = link_to24453__delegate;
return link_to24453;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to24453);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to24456 = (function() { 
var mail_to24456__delegate = function (e_mail,p__24457){
var vec__24459 = p__24457;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24459,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$124,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3772__auto__ = content;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to24456 = function (e_mail,var_args){
var p__24457 = null;
if (arguments.length > 1) {
var G__24460__i = 0, G__24460__a = new Array(arguments.length -  1);
while (G__24460__i < G__24460__a.length) {G__24460__a[G__24460__i] = arguments[G__24460__i + 1]; ++G__24460__i;}
  p__24457 = new cljs.core.IndexedSeq(G__24460__a,0);
} 
return mail_to24456__delegate.call(this,e_mail,p__24457);};
mail_to24456.cljs$lang$maxFixedArity = 1;
mail_to24456.cljs$lang$applyTo = (function (arglist__24461){
var e_mail = cljs.core.first(arglist__24461);
var p__24457 = cljs.core.rest(arglist__24461);
return mail_to24456__delegate(e_mail,p__24457);
});
mail_to24456.cljs$core$IFn$_invoke$arity$variadic = mail_to24456__delegate;
return mail_to24456;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to24456);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list24462 = (function unordered_list24462(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127,(function (){var iter__4528__auto__ = (function iter__24469(s__24470){
return (new cljs.core.LazySeq(null,(function (){
var s__24470__$1 = s__24470;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24470__$1);
if(temp__4126__auto__){
var s__24470__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24470__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24470__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24472 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24471 = (0);
while(true){
if((i__24471 < size__4527__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24471);
cljs.core.chunk_append(b__24472,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null));

var G__24475 = (i__24471 + (1));
i__24471 = G__24475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24472),iter__24469(cljs.core.chunk_rest(s__24470__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24472),null);
}
} else {
var x = cljs.core.first(s__24470__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null),iter__24469(cljs.core.rest(s__24470__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4528__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list24462);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list24476 = (function ordered_list24476(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,(function (){var iter__4528__auto__ = (function iter__24483(s__24484){
return (new cljs.core.LazySeq(null,(function (){
var s__24484__$1 = s__24484;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24484__$1);
if(temp__4126__auto__){
var s__24484__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24484__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24484__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24486 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24485 = (0);
while(true){
if((i__24485 < size__4527__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24485);
cljs.core.chunk_append(b__24486,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null));

var G__24489 = (i__24485 + (1));
i__24485 = G__24489;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24486),iter__24483(cljs.core.chunk_rest(s__24484__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24486),null);
}
} else {
var x = cljs.core.first(s__24484__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,x], null),iter__24483(cljs.core.rest(s__24484__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4528__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list24476);
/**
* Create an image element.
*/
sablono.core.image24490 = (function() {
var image24490 = null;
var image24490__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$131,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image24490__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$131,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$132,alt], null)], null);
});
image24490 = function(src,alt){
switch(arguments.length){
case 1:
return image24490__1.call(this,src);
case 2:
return image24490__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image24490.cljs$core$IFn$_invoke$arity$1 = image24490__1;
image24490.cljs$core$IFn$_invoke$arity$2 = image24490__2;
return image24490;
})()
;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image24490);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24491_SHARP_,p2__24492_SHARP_){
return [cljs.core.str(p1__24491_SHARP_),cljs.core.str("["),cljs.core.str(p2__24492_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24493_SHARP_,p2__24494_SHARP_){
return [cljs.core.str(p1__24493_SHARP_),cljs.core.str("-"),cljs.core.str(p2__24494_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$105,type,cljs.core.constant$keyword$133,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name),cljs.core.constant$keyword$100,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field24495 = (function() {
var color_field24495 = null;
var color_field24495__1 = (function (name__5883__auto__){
return color_field24495.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var color_field24495__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__5883__auto__,value__5884__auto__);
});
color_field24495 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return color_field24495__1.call(this,name__5883__auto__);
case 2:
return color_field24495__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field24495.cljs$core$IFn$_invoke$arity$1 = color_field24495__1;
color_field24495.cljs$core$IFn$_invoke$arity$2 = color_field24495__2;
return color_field24495;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field24495);

/**
* Creates a date input field.
*/
sablono.core.date_field24498 = (function() {
var date_field24498 = null;
var date_field24498__1 = (function (name__5883__auto__){
return date_field24498.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var date_field24498__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__5883__auto__,value__5884__auto__);
});
date_field24498 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return date_field24498__1.call(this,name__5883__auto__);
case 2:
return date_field24498__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field24498.cljs$core$IFn$_invoke$arity$1 = date_field24498__1;
date_field24498.cljs$core$IFn$_invoke$arity$2 = date_field24498__2;
return date_field24498;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field24498);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field24501 = (function() {
var datetime_field24501 = null;
var datetime_field24501__1 = (function (name__5883__auto__){
return datetime_field24501.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var datetime_field24501__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__5883__auto__,value__5884__auto__);
});
datetime_field24501 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return datetime_field24501__1.call(this,name__5883__auto__);
case 2:
return datetime_field24501__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field24501.cljs$core$IFn$_invoke$arity$1 = datetime_field24501__1;
datetime_field24501.cljs$core$IFn$_invoke$arity$2 = datetime_field24501__2;
return datetime_field24501;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field24501);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field24504 = (function() {
var datetime_local_field24504 = null;
var datetime_local_field24504__1 = (function (name__5883__auto__){
return datetime_local_field24504.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var datetime_local_field24504__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__5883__auto__,value__5884__auto__);
});
datetime_local_field24504 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return datetime_local_field24504__1.call(this,name__5883__auto__);
case 2:
return datetime_local_field24504__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field24504.cljs$core$IFn$_invoke$arity$1 = datetime_local_field24504__1;
datetime_local_field24504.cljs$core$IFn$_invoke$arity$2 = datetime_local_field24504__2;
return datetime_local_field24504;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field24504);

/**
* Creates a email input field.
*/
sablono.core.email_field24507 = (function() {
var email_field24507 = null;
var email_field24507__1 = (function (name__5883__auto__){
return email_field24507.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var email_field24507__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__5883__auto__,value__5884__auto__);
});
email_field24507 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return email_field24507__1.call(this,name__5883__auto__);
case 2:
return email_field24507__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field24507.cljs$core$IFn$_invoke$arity$1 = email_field24507__1;
email_field24507.cljs$core$IFn$_invoke$arity$2 = email_field24507__2;
return email_field24507;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field24507);

/**
* Creates a file input field.
*/
sablono.core.file_field24510 = (function() {
var file_field24510 = null;
var file_field24510__1 = (function (name__5883__auto__){
return file_field24510.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var file_field24510__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__5883__auto__,value__5884__auto__);
});
file_field24510 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return file_field24510__1.call(this,name__5883__auto__);
case 2:
return file_field24510__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field24510.cljs$core$IFn$_invoke$arity$1 = file_field24510__1;
file_field24510.cljs$core$IFn$_invoke$arity$2 = file_field24510__2;
return file_field24510;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field24510);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field24513 = (function() {
var hidden_field24513 = null;
var hidden_field24513__1 = (function (name__5883__auto__){
return hidden_field24513.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var hidden_field24513__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__5883__auto__,value__5884__auto__);
});
hidden_field24513 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return hidden_field24513__1.call(this,name__5883__auto__);
case 2:
return hidden_field24513__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field24513.cljs$core$IFn$_invoke$arity$1 = hidden_field24513__1;
hidden_field24513.cljs$core$IFn$_invoke$arity$2 = hidden_field24513__2;
return hidden_field24513;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field24513);

/**
* Creates a month input field.
*/
sablono.core.month_field24516 = (function() {
var month_field24516 = null;
var month_field24516__1 = (function (name__5883__auto__){
return month_field24516.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var month_field24516__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__5883__auto__,value__5884__auto__);
});
month_field24516 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return month_field24516__1.call(this,name__5883__auto__);
case 2:
return month_field24516__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field24516.cljs$core$IFn$_invoke$arity$1 = month_field24516__1;
month_field24516.cljs$core$IFn$_invoke$arity$2 = month_field24516__2;
return month_field24516;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field24516);

/**
* Creates a number input field.
*/
sablono.core.number_field24519 = (function() {
var number_field24519 = null;
var number_field24519__1 = (function (name__5883__auto__){
return number_field24519.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var number_field24519__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__5883__auto__,value__5884__auto__);
});
number_field24519 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return number_field24519__1.call(this,name__5883__auto__);
case 2:
return number_field24519__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field24519.cljs$core$IFn$_invoke$arity$1 = number_field24519__1;
number_field24519.cljs$core$IFn$_invoke$arity$2 = number_field24519__2;
return number_field24519;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field24519);

/**
* Creates a password input field.
*/
sablono.core.password_field24522 = (function() {
var password_field24522 = null;
var password_field24522__1 = (function (name__5883__auto__){
return password_field24522.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var password_field24522__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__5883__auto__,value__5884__auto__);
});
password_field24522 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return password_field24522__1.call(this,name__5883__auto__);
case 2:
return password_field24522__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field24522.cljs$core$IFn$_invoke$arity$1 = password_field24522__1;
password_field24522.cljs$core$IFn$_invoke$arity$2 = password_field24522__2;
return password_field24522;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field24522);

/**
* Creates a range input field.
*/
sablono.core.range_field24525 = (function() {
var range_field24525 = null;
var range_field24525__1 = (function (name__5883__auto__){
return range_field24525.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var range_field24525__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__5883__auto__,value__5884__auto__);
});
range_field24525 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return range_field24525__1.call(this,name__5883__auto__);
case 2:
return range_field24525__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field24525.cljs$core$IFn$_invoke$arity$1 = range_field24525__1;
range_field24525.cljs$core$IFn$_invoke$arity$2 = range_field24525__2;
return range_field24525;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field24525);

/**
* Creates a search input field.
*/
sablono.core.search_field24528 = (function() {
var search_field24528 = null;
var search_field24528__1 = (function (name__5883__auto__){
return search_field24528.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var search_field24528__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__5883__auto__,value__5884__auto__);
});
search_field24528 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return search_field24528__1.call(this,name__5883__auto__);
case 2:
return search_field24528__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field24528.cljs$core$IFn$_invoke$arity$1 = search_field24528__1;
search_field24528.cljs$core$IFn$_invoke$arity$2 = search_field24528__2;
return search_field24528;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field24528);

/**
* Creates a tel input field.
*/
sablono.core.tel_field24531 = (function() {
var tel_field24531 = null;
var tel_field24531__1 = (function (name__5883__auto__){
return tel_field24531.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var tel_field24531__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__5883__auto__,value__5884__auto__);
});
tel_field24531 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return tel_field24531__1.call(this,name__5883__auto__);
case 2:
return tel_field24531__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field24531.cljs$core$IFn$_invoke$arity$1 = tel_field24531__1;
tel_field24531.cljs$core$IFn$_invoke$arity$2 = tel_field24531__2;
return tel_field24531;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field24531);

/**
* Creates a text input field.
*/
sablono.core.text_field24534 = (function() {
var text_field24534 = null;
var text_field24534__1 = (function (name__5883__auto__){
return text_field24534.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var text_field24534__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__5883__auto__,value__5884__auto__);
});
text_field24534 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return text_field24534__1.call(this,name__5883__auto__);
case 2:
return text_field24534__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field24534.cljs$core$IFn$_invoke$arity$1 = text_field24534__1;
text_field24534.cljs$core$IFn$_invoke$arity$2 = text_field24534__2;
return text_field24534;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field24534);

/**
* Creates a time input field.
*/
sablono.core.time_field24537 = (function() {
var time_field24537 = null;
var time_field24537__1 = (function (name__5883__auto__){
return time_field24537.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var time_field24537__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__5883__auto__,value__5884__auto__);
});
time_field24537 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return time_field24537__1.call(this,name__5883__auto__);
case 2:
return time_field24537__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field24537.cljs$core$IFn$_invoke$arity$1 = time_field24537__1;
time_field24537.cljs$core$IFn$_invoke$arity$2 = time_field24537__2;
return time_field24537;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field24537);

/**
* Creates a url input field.
*/
sablono.core.url_field24540 = (function() {
var url_field24540 = null;
var url_field24540__1 = (function (name__5883__auto__){
return url_field24540.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var url_field24540__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__5883__auto__,value__5884__auto__);
});
url_field24540 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return url_field24540__1.call(this,name__5883__auto__);
case 2:
return url_field24540__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field24540.cljs$core$IFn$_invoke$arity$1 = url_field24540__1;
url_field24540.cljs$core$IFn$_invoke$arity$2 = url_field24540__2;
return url_field24540;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field24540);

/**
* Creates a week input field.
*/
sablono.core.week_field24543 = (function() {
var week_field24543 = null;
var week_field24543__1 = (function (name__5883__auto__){
return week_field24543.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var week_field24543__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__5883__auto__,value__5884__auto__);
});
week_field24543 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return week_field24543__1.call(this,name__5883__auto__);
case 2:
return week_field24543__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field24543.cljs$core$IFn$_invoke$arity$1 = week_field24543__1;
week_field24543.cljs$core$IFn$_invoke$arity$2 = week_field24543__2;
return week_field24543;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field24543);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box24546 = (function() {
var check_box24546 = null;
var check_box24546__1 = (function (name){
return check_box24546.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box24546__2 = (function (name,checked_QMARK_){
return check_box24546.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box24546__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$105,"checkbox",cljs.core.constant$keyword$133,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name),cljs.core.constant$keyword$100,value,cljs.core.constant$keyword$134,checked_QMARK_], null)], null);
});
check_box24546 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box24546__1.call(this,name);
case 2:
return check_box24546__2.call(this,name,checked_QMARK_);
case 3:
return check_box24546__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box24546.cljs$core$IFn$_invoke$arity$1 = check_box24546__1;
check_box24546.cljs$core$IFn$_invoke$arity$2 = check_box24546__2;
check_box24546.cljs$core$IFn$_invoke$arity$3 = check_box24546__3;
return check_box24546;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box24546);
/**
* Creates a radio button.
*/
sablono.core.radio_button24552 = (function() {
var radio_button24552 = null;
var radio_button24552__1 = (function (group){
return radio_button24552.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button24552__2 = (function (group,checked_QMARK_){
return radio_button24552.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button24552__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$105,"radio",cljs.core.constant$keyword$133,sablono.core.make_name(group),cljs.core.constant$keyword$119,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$100,value,cljs.core.constant$keyword$134,checked_QMARK_], null)], null);
});
radio_button24552 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button24552__1.call(this,group);
case 2:
return radio_button24552__2.call(this,group,checked_QMARK_);
case 3:
return radio_button24552__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button24552.cljs$core$IFn$_invoke$arity$1 = radio_button24552__1;
radio_button24552.cljs$core$IFn$_invoke$arity$2 = radio_button24552__2;
radio_button24552.cljs$core$IFn$_invoke$arity$3 = radio_button24552__3;
return radio_button24552;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button24552);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options24558 = (function() {
var select_options24558 = null;
var select_options24558__1 = (function (coll){
return select_options24558.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options24558__2 = (function (coll,selected){
var iter__4528__auto__ = (function iter__24579(s__24580){
return (new cljs.core.LazySeq(null,(function (){
var s__24580__$1 = s__24580;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24580__$1);
if(temp__4126__auto__){
var s__24580__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24580__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24580__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24582 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24581 = (0);
while(true){
if((i__24581 < size__4527__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24581);
cljs.core.chunk_append(b__24582,((cljs.core.sequential_QMARK_(x))?(function (){var vec__24587 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24587,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24587,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24587,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$135,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$136,text], null),select_options24558.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$100,val,cljs.core.constant$keyword$137,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$138,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$137,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__24589 = (i__24581 + (1));
i__24581 = G__24589;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24582),iter__24579(cljs.core.chunk_rest(s__24580__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24582),null);
}
} else {
var x = cljs.core.first(s__24580__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__24588 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24588,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24588,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24588,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$135,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$136,text], null),select_options24558.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$100,val,cljs.core.constant$keyword$137,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$138,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$137,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__24579(cljs.core.rest(s__24580__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4528__auto__(coll);
});
select_options24558 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options24558__1.call(this,coll);
case 2:
return select_options24558__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options24558.cljs$core$IFn$_invoke$arity$1 = select_options24558__1;
select_options24558.cljs$core$IFn$_invoke$arity$2 = select_options24558__2;
return select_options24558;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options24558);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down24590 = (function() {
var drop_down24590 = null;
var drop_down24590__2 = (function (name,options){
return drop_down24590.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down24590__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$139,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$133,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name)], null),(function (){var G__24596 = options;
var G__24597 = selected;
return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__24596,G__24597) : sablono.core.select_options.call(null,G__24596,G__24597));
})()], null);
});
drop_down24590 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down24590__2.call(this,name,options);
case 3:
return drop_down24590__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down24590.cljs$core$IFn$_invoke$arity$2 = drop_down24590__2;
drop_down24590.cljs$core$IFn$_invoke$arity$3 = drop_down24590__3;
return drop_down24590;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down24590);
/**
* Creates a text area element.
*/
sablono.core.text_area24598 = (function() {
var text_area24598 = null;
var text_area24598__1 = (function (name){
return text_area24598.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area24598__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$120,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$133,sablono.core.make_name(name),cljs.core.constant$keyword$119,sablono.core.make_id(name),cljs.core.constant$keyword$100,value], null)], null);
});
text_area24598 = function(name,value){
switch(arguments.length){
case 1:
return text_area24598__1.call(this,name);
case 2:
return text_area24598__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area24598.cljs$core$IFn$_invoke$arity$1 = text_area24598__1;
text_area24598.cljs$core$IFn$_invoke$arity$2 = text_area24598__2;
return text_area24598;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area24598);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label24601 = (function label24601(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$117,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label24601);
/**
* Creates a submit button.
*/
sablono.core.submit_button24602 = (function submit_button24602(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$105,"submit",cljs.core.constant$keyword$100,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button24602);
/**
* Creates a form reset button.
*/
sablono.core.reset_button24603 = (function reset_button24603(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$105,"reset",cljs.core.constant$keyword$100,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button24603);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to24604 = (function() { 
var form_to24604__delegate = function (p__24605,body){
var vec__24609 = p__24605;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24609,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24609,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$140,null,cljs.core.constant$keyword$141,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$142,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$143,method_str,cljs.core.constant$keyword$144,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$142,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$143,"POST",cljs.core.constant$keyword$144,action_uri], null),(function (){var G__24610 = "_method";
var G__24611 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__24610,G__24611) : sablono.core.hidden_field.call(null,G__24610,G__24611));
})()], null)),body));
};
var form_to24604 = function (p__24605,var_args){
var body = null;
if (arguments.length > 1) {
var G__24612__i = 0, G__24612__a = new Array(arguments.length -  1);
while (G__24612__i < G__24612__a.length) {G__24612__a[G__24612__i] = arguments[G__24612__i + 1]; ++G__24612__i;}
  body = new cljs.core.IndexedSeq(G__24612__a,0);
} 
return form_to24604__delegate.call(this,p__24605,body);};
form_to24604.cljs$lang$maxFixedArity = 1;
form_to24604.cljs$lang$applyTo = (function (arglist__24613){
var p__24605 = cljs.core.first(arglist__24613);
var body = cljs.core.rest(arglist__24613);
return form_to24604__delegate(p__24605,body);
});
form_to24604.cljs$core$IFn$_invoke$arity$variadic = form_to24604__delegate;
return form_to24604;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to24604);
