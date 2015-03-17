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
var G__24616__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__24615 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24615,(0),null);
var body = cljs.core.nthnext(vec__24615,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__24616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24617__i = 0, G__24617__a = new Array(arguments.length -  0);
while (G__24617__i < G__24617__a.length) {G__24617__a[G__24617__i] = arguments[G__24617__i + 0]; ++G__24617__i;}
  args = new cljs.core.IndexedSeq(G__24617__a,0);
} 
return G__24616__delegate.call(this,args);};
G__24616.cljs$lang$maxFixedArity = 0;
G__24616.cljs$lang$applyTo = (function (arglist__24618){
var args = cljs.core.seq(arglist__24618);
return G__24616__delegate(args);
});
G__24616.cljs$core$IFn$_invoke$arity$variadic = G__24616__delegate;
return G__24616;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4528__auto__ = (function iter__24625(s__24626){
return (new cljs.core.LazySeq(null,(function (){
var s__24626__$1 = s__24626;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24626__$1);
if(temp__4126__auto__){
var s__24626__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24626__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24626__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24628 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24627 = (0);
while(true){
if((i__24627 < size__4527__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24627);
cljs.core.chunk_append(b__24628,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__24631 = (i__24627 + (1));
i__24627 = G__24631;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24628),iter__24625(cljs.core.chunk_rest(s__24626__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24628),null);
}
} else {
var args = cljs.core.first(s__24626__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__24625(cljs.core.rest(s__24626__$2)));
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
var G__24633 = element;
return React.renderToString(G__24633);
} else {
return null;
}
});
/**
* Render `element` as HTML string, without React internal attributes.
*/
sablono.core.render_static = (function render_static(element){
if(cljs.core.truth_(element)){
var G__24635 = element;
return React.renderToStaticMarkup(G__24635);
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
var iter__4528__auto__ = (function iter__24642(s__24643){
return (new cljs.core.LazySeq(null,(function (){
var s__24643__$1 = s__24643;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24643__$1);
if(temp__4126__auto__){
var s__24643__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24643__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24643__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24645 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24644 = (0);
while(true){
if((i__24644 < size__4527__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24644);
cljs.core.chunk_append(b__24645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$113,"text/css",cljs.core.constant$keyword$132,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$133,"stylesheet"], null)], null));

var G__24648 = (i__24644 + (1));
i__24644 = G__24648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24645),iter__24642(cljs.core.chunk_rest(s__24643__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24645),null);
}
} else {
var style = cljs.core.first(s__24643__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$113,"text/css",cljs.core.constant$keyword$132,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$133,"stylesheet"], null)], null),iter__24642(cljs.core.rest(s__24643__$2)));
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
var G__24649__i = 0, G__24649__a = new Array(arguments.length -  0);
while (G__24649__i < G__24649__a.length) {G__24649__a[G__24649__i] = arguments[G__24649__i + 0]; ++G__24649__i;}
  styles = new cljs.core.IndexedSeq(G__24649__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__24650){
var styles = cljs.core.seq(arglist__24650);
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
var G__24655 = (function (){return goog.dom.getDocument();
})().body;
var G__24656 = (function (){var G__24657 = "script";
var G__24658 = {"src": src};
return goog.dom.createDom(G__24657,G__24658);
})();
return goog.dom.appendChild(G__24655,G__24656);
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
sablono.core.link_to24659 = (function() { 
var link_to24659__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$132,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to24659 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__24660__i = 0, G__24660__a = new Array(arguments.length -  1);
while (G__24660__i < G__24660__a.length) {G__24660__a[G__24660__i] = arguments[G__24660__i + 1]; ++G__24660__i;}
  content = new cljs.core.IndexedSeq(G__24660__a,0);
} 
return link_to24659__delegate.call(this,url,content);};
link_to24659.cljs$lang$maxFixedArity = 1;
link_to24659.cljs$lang$applyTo = (function (arglist__24661){
var url = cljs.core.first(arglist__24661);
var content = cljs.core.rest(arglist__24661);
return link_to24659__delegate(url,content);
});
link_to24659.cljs$core$IFn$_invoke$arity$variadic = link_to24659__delegate;
return link_to24659;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to24659);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to24662 = (function() { 
var mail_to24662__delegate = function (e_mail,p__24663){
var vec__24665 = p__24663;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24665,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$132,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3772__auto__ = content;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to24662 = function (e_mail,var_args){
var p__24663 = null;
if (arguments.length > 1) {
var G__24666__i = 0, G__24666__a = new Array(arguments.length -  1);
while (G__24666__i < G__24666__a.length) {G__24666__a[G__24666__i] = arguments[G__24666__i + 1]; ++G__24666__i;}
  p__24663 = new cljs.core.IndexedSeq(G__24666__a,0);
} 
return mail_to24662__delegate.call(this,e_mail,p__24663);};
mail_to24662.cljs$lang$maxFixedArity = 1;
mail_to24662.cljs$lang$applyTo = (function (arglist__24667){
var e_mail = cljs.core.first(arglist__24667);
var p__24663 = cljs.core.rest(arglist__24667);
return mail_to24662__delegate(e_mail,p__24663);
});
mail_to24662.cljs$core$IFn$_invoke$arity$variadic = mail_to24662__delegate;
return mail_to24662;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to24662);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list24668 = (function unordered_list24668(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$135,(function (){var iter__4528__auto__ = (function iter__24675(s__24676){
return (new cljs.core.LazySeq(null,(function (){
var s__24676__$1 = s__24676;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24676__$1);
if(temp__4126__auto__){
var s__24676__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24676__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24676__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24678 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24677 = (0);
while(true){
if((i__24677 < size__4527__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24677);
cljs.core.chunk_append(b__24678,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,x], null));

var G__24681 = (i__24677 + (1));
i__24677 = G__24681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24678),iter__24675(cljs.core.chunk_rest(s__24676__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24678),null);
}
} else {
var x = cljs.core.first(s__24676__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,x], null),iter__24675(cljs.core.rest(s__24676__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list24668);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list24682 = (function ordered_list24682(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$137,(function (){var iter__4528__auto__ = (function iter__24689(s__24690){
return (new cljs.core.LazySeq(null,(function (){
var s__24690__$1 = s__24690;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24690__$1);
if(temp__4126__auto__){
var s__24690__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24690__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24690__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24692 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24691 = (0);
while(true){
if((i__24691 < size__4527__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24691);
cljs.core.chunk_append(b__24692,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,x], null));

var G__24695 = (i__24691 + (1));
i__24691 = G__24695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24692),iter__24689(cljs.core.chunk_rest(s__24690__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24692),null);
}
} else {
var x = cljs.core.first(s__24690__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,x], null),iter__24689(cljs.core.rest(s__24690__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list24682);
/**
* Create an image element.
*/
sablono.core.image24696 = (function() {
var image24696 = null;
var image24696__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$139,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image24696__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$139,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$140,alt], null)], null);
});
image24696 = function(src,alt){
switch(arguments.length){
case 1:
return image24696__1.call(this,src);
case 2:
return image24696__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image24696.cljs$core$IFn$_invoke$arity$1 = image24696__1;
image24696.cljs$core$IFn$_invoke$arity$2 = image24696__2;
return image24696;
})()
;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image24696);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24697_SHARP_,p2__24698_SHARP_){
return [cljs.core.str(p1__24697_SHARP_),cljs.core.str("["),cljs.core.str(p2__24698_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24699_SHARP_,p2__24700_SHARP_){
return [cljs.core.str(p1__24699_SHARP_),cljs.core.str("-"),cljs.core.str(p2__24700_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$113,type,cljs.core.constant$keyword$141,sablono.core.make_name(name),cljs.core.constant$keyword$127,sablono.core.make_id(name),cljs.core.constant$keyword$108,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field24701 = (function() {
var color_field24701 = null;
var color_field24701__1 = (function (name__5883__auto__){
return color_field24701.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var color_field24701__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__5883__auto__,value__5884__auto__);
});
color_field24701 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return color_field24701__1.call(this,name__5883__auto__);
case 2:
return color_field24701__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field24701.cljs$core$IFn$_invoke$arity$1 = color_field24701__1;
color_field24701.cljs$core$IFn$_invoke$arity$2 = color_field24701__2;
return color_field24701;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field24701);

/**
* Creates a date input field.
*/
sablono.core.date_field24704 = (function() {
var date_field24704 = null;
var date_field24704__1 = (function (name__5883__auto__){
return date_field24704.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var date_field24704__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__5883__auto__,value__5884__auto__);
});
date_field24704 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return date_field24704__1.call(this,name__5883__auto__);
case 2:
return date_field24704__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field24704.cljs$core$IFn$_invoke$arity$1 = date_field24704__1;
date_field24704.cljs$core$IFn$_invoke$arity$2 = date_field24704__2;
return date_field24704;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field24704);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field24707 = (function() {
var datetime_field24707 = null;
var datetime_field24707__1 = (function (name__5883__auto__){
return datetime_field24707.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var datetime_field24707__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__5883__auto__,value__5884__auto__);
});
datetime_field24707 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return datetime_field24707__1.call(this,name__5883__auto__);
case 2:
return datetime_field24707__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field24707.cljs$core$IFn$_invoke$arity$1 = datetime_field24707__1;
datetime_field24707.cljs$core$IFn$_invoke$arity$2 = datetime_field24707__2;
return datetime_field24707;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field24707);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field24710 = (function() {
var datetime_local_field24710 = null;
var datetime_local_field24710__1 = (function (name__5883__auto__){
return datetime_local_field24710.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var datetime_local_field24710__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__5883__auto__,value__5884__auto__);
});
datetime_local_field24710 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return datetime_local_field24710__1.call(this,name__5883__auto__);
case 2:
return datetime_local_field24710__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field24710.cljs$core$IFn$_invoke$arity$1 = datetime_local_field24710__1;
datetime_local_field24710.cljs$core$IFn$_invoke$arity$2 = datetime_local_field24710__2;
return datetime_local_field24710;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field24710);

/**
* Creates a email input field.
*/
sablono.core.email_field24713 = (function() {
var email_field24713 = null;
var email_field24713__1 = (function (name__5883__auto__){
return email_field24713.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var email_field24713__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__5883__auto__,value__5884__auto__);
});
email_field24713 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return email_field24713__1.call(this,name__5883__auto__);
case 2:
return email_field24713__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field24713.cljs$core$IFn$_invoke$arity$1 = email_field24713__1;
email_field24713.cljs$core$IFn$_invoke$arity$2 = email_field24713__2;
return email_field24713;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field24713);

/**
* Creates a file input field.
*/
sablono.core.file_field24716 = (function() {
var file_field24716 = null;
var file_field24716__1 = (function (name__5883__auto__){
return file_field24716.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var file_field24716__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__5883__auto__,value__5884__auto__);
});
file_field24716 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return file_field24716__1.call(this,name__5883__auto__);
case 2:
return file_field24716__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field24716.cljs$core$IFn$_invoke$arity$1 = file_field24716__1;
file_field24716.cljs$core$IFn$_invoke$arity$2 = file_field24716__2;
return file_field24716;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field24716);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field24719 = (function() {
var hidden_field24719 = null;
var hidden_field24719__1 = (function (name__5883__auto__){
return hidden_field24719.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var hidden_field24719__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__5883__auto__,value__5884__auto__);
});
hidden_field24719 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return hidden_field24719__1.call(this,name__5883__auto__);
case 2:
return hidden_field24719__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field24719.cljs$core$IFn$_invoke$arity$1 = hidden_field24719__1;
hidden_field24719.cljs$core$IFn$_invoke$arity$2 = hidden_field24719__2;
return hidden_field24719;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field24719);

/**
* Creates a month input field.
*/
sablono.core.month_field24722 = (function() {
var month_field24722 = null;
var month_field24722__1 = (function (name__5883__auto__){
return month_field24722.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var month_field24722__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__5883__auto__,value__5884__auto__);
});
month_field24722 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return month_field24722__1.call(this,name__5883__auto__);
case 2:
return month_field24722__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field24722.cljs$core$IFn$_invoke$arity$1 = month_field24722__1;
month_field24722.cljs$core$IFn$_invoke$arity$2 = month_field24722__2;
return month_field24722;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field24722);

/**
* Creates a number input field.
*/
sablono.core.number_field24725 = (function() {
var number_field24725 = null;
var number_field24725__1 = (function (name__5883__auto__){
return number_field24725.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var number_field24725__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__5883__auto__,value__5884__auto__);
});
number_field24725 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return number_field24725__1.call(this,name__5883__auto__);
case 2:
return number_field24725__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field24725.cljs$core$IFn$_invoke$arity$1 = number_field24725__1;
number_field24725.cljs$core$IFn$_invoke$arity$2 = number_field24725__2;
return number_field24725;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field24725);

/**
* Creates a password input field.
*/
sablono.core.password_field24728 = (function() {
var password_field24728 = null;
var password_field24728__1 = (function (name__5883__auto__){
return password_field24728.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var password_field24728__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__5883__auto__,value__5884__auto__);
});
password_field24728 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return password_field24728__1.call(this,name__5883__auto__);
case 2:
return password_field24728__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field24728.cljs$core$IFn$_invoke$arity$1 = password_field24728__1;
password_field24728.cljs$core$IFn$_invoke$arity$2 = password_field24728__2;
return password_field24728;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field24728);

/**
* Creates a range input field.
*/
sablono.core.range_field24731 = (function() {
var range_field24731 = null;
var range_field24731__1 = (function (name__5883__auto__){
return range_field24731.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var range_field24731__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__5883__auto__,value__5884__auto__);
});
range_field24731 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return range_field24731__1.call(this,name__5883__auto__);
case 2:
return range_field24731__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field24731.cljs$core$IFn$_invoke$arity$1 = range_field24731__1;
range_field24731.cljs$core$IFn$_invoke$arity$2 = range_field24731__2;
return range_field24731;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field24731);

/**
* Creates a search input field.
*/
sablono.core.search_field24734 = (function() {
var search_field24734 = null;
var search_field24734__1 = (function (name__5883__auto__){
return search_field24734.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var search_field24734__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__5883__auto__,value__5884__auto__);
});
search_field24734 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return search_field24734__1.call(this,name__5883__auto__);
case 2:
return search_field24734__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field24734.cljs$core$IFn$_invoke$arity$1 = search_field24734__1;
search_field24734.cljs$core$IFn$_invoke$arity$2 = search_field24734__2;
return search_field24734;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field24734);

/**
* Creates a tel input field.
*/
sablono.core.tel_field24737 = (function() {
var tel_field24737 = null;
var tel_field24737__1 = (function (name__5883__auto__){
return tel_field24737.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var tel_field24737__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__5883__auto__,value__5884__auto__);
});
tel_field24737 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return tel_field24737__1.call(this,name__5883__auto__);
case 2:
return tel_field24737__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field24737.cljs$core$IFn$_invoke$arity$1 = tel_field24737__1;
tel_field24737.cljs$core$IFn$_invoke$arity$2 = tel_field24737__2;
return tel_field24737;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field24737);

/**
* Creates a text input field.
*/
sablono.core.text_field24740 = (function() {
var text_field24740 = null;
var text_field24740__1 = (function (name__5883__auto__){
return text_field24740.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var text_field24740__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__5883__auto__,value__5884__auto__);
});
text_field24740 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return text_field24740__1.call(this,name__5883__auto__);
case 2:
return text_field24740__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field24740.cljs$core$IFn$_invoke$arity$1 = text_field24740__1;
text_field24740.cljs$core$IFn$_invoke$arity$2 = text_field24740__2;
return text_field24740;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field24740);

/**
* Creates a time input field.
*/
sablono.core.time_field24743 = (function() {
var time_field24743 = null;
var time_field24743__1 = (function (name__5883__auto__){
return time_field24743.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var time_field24743__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__5883__auto__,value__5884__auto__);
});
time_field24743 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return time_field24743__1.call(this,name__5883__auto__);
case 2:
return time_field24743__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field24743.cljs$core$IFn$_invoke$arity$1 = time_field24743__1;
time_field24743.cljs$core$IFn$_invoke$arity$2 = time_field24743__2;
return time_field24743;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field24743);

/**
* Creates a url input field.
*/
sablono.core.url_field24746 = (function() {
var url_field24746 = null;
var url_field24746__1 = (function (name__5883__auto__){
return url_field24746.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var url_field24746__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__5883__auto__,value__5884__auto__);
});
url_field24746 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return url_field24746__1.call(this,name__5883__auto__);
case 2:
return url_field24746__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field24746.cljs$core$IFn$_invoke$arity$1 = url_field24746__1;
url_field24746.cljs$core$IFn$_invoke$arity$2 = url_field24746__2;
return url_field24746;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field24746);

/**
* Creates a week input field.
*/
sablono.core.week_field24749 = (function() {
var week_field24749 = null;
var week_field24749__1 = (function (name__5883__auto__){
return week_field24749.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var week_field24749__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__5883__auto__,value__5884__auto__);
});
week_field24749 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return week_field24749__1.call(this,name__5883__auto__);
case 2:
return week_field24749__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field24749.cljs$core$IFn$_invoke$arity$1 = week_field24749__1;
week_field24749.cljs$core$IFn$_invoke$arity$2 = week_field24749__2;
return week_field24749;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field24749);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box24752 = (function() {
var check_box24752 = null;
var check_box24752__1 = (function (name){
return check_box24752.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box24752__2 = (function (name,checked_QMARK_){
return check_box24752.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box24752__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$113,"checkbox",cljs.core.constant$keyword$141,sablono.core.make_name(name),cljs.core.constant$keyword$127,sablono.core.make_id(name),cljs.core.constant$keyword$108,value,cljs.core.constant$keyword$142,checked_QMARK_], null)], null);
});
check_box24752 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box24752__1.call(this,name);
case 2:
return check_box24752__2.call(this,name,checked_QMARK_);
case 3:
return check_box24752__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box24752.cljs$core$IFn$_invoke$arity$1 = check_box24752__1;
check_box24752.cljs$core$IFn$_invoke$arity$2 = check_box24752__2;
check_box24752.cljs$core$IFn$_invoke$arity$3 = check_box24752__3;
return check_box24752;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box24752);
/**
* Creates a radio button.
*/
sablono.core.radio_button24758 = (function() {
var radio_button24758 = null;
var radio_button24758__1 = (function (group){
return radio_button24758.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button24758__2 = (function (group,checked_QMARK_){
return radio_button24758.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button24758__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$113,"radio",cljs.core.constant$keyword$141,sablono.core.make_name(group),cljs.core.constant$keyword$127,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$108,value,cljs.core.constant$keyword$142,checked_QMARK_], null)], null);
});
radio_button24758 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button24758__1.call(this,group);
case 2:
return radio_button24758__2.call(this,group,checked_QMARK_);
case 3:
return radio_button24758__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button24758.cljs$core$IFn$_invoke$arity$1 = radio_button24758__1;
radio_button24758.cljs$core$IFn$_invoke$arity$2 = radio_button24758__2;
radio_button24758.cljs$core$IFn$_invoke$arity$3 = radio_button24758__3;
return radio_button24758;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button24758);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options24764 = (function() {
var select_options24764 = null;
var select_options24764__1 = (function (coll){
return select_options24764.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options24764__2 = (function (coll,selected){
var iter__4528__auto__ = (function iter__24785(s__24786){
return (new cljs.core.LazySeq(null,(function (){
var s__24786__$1 = s__24786;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24786__$1);
if(temp__4126__auto__){
var s__24786__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24786__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24786__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24788 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24787 = (0);
while(true){
if((i__24787 < size__4527__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24787);
cljs.core.chunk_append(b__24788,((cljs.core.sequential_QMARK_(x))?(function (){var vec__24793 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24793,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24793,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24793,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$144,text], null),select_options24764.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$108,val,cljs.core.constant$keyword$145,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$146,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$145,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__24795 = (i__24787 + (1));
i__24787 = G__24795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24788),iter__24785(cljs.core.chunk_rest(s__24786__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24788),null);
}
} else {
var x = cljs.core.first(s__24786__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__24794 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24794,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24794,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24794,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$144,text], null),select_options24764.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$108,val,cljs.core.constant$keyword$145,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$146,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$145,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__24785(cljs.core.rest(s__24786__$2)));
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
select_options24764 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options24764__1.call(this,coll);
case 2:
return select_options24764__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options24764.cljs$core$IFn$_invoke$arity$1 = select_options24764__1;
select_options24764.cljs$core$IFn$_invoke$arity$2 = select_options24764__2;
return select_options24764;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options24764);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down24796 = (function() {
var drop_down24796 = null;
var drop_down24796__2 = (function (name,options){
return drop_down24796.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down24796__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$147,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$141,sablono.core.make_name(name),cljs.core.constant$keyword$127,sablono.core.make_id(name)], null),(function (){var G__24802 = options;
var G__24803 = selected;
return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__24802,G__24803) : sablono.core.select_options.call(null,G__24802,G__24803));
})()], null);
});
drop_down24796 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down24796__2.call(this,name,options);
case 3:
return drop_down24796__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down24796.cljs$core$IFn$_invoke$arity$2 = drop_down24796__2;
drop_down24796.cljs$core$IFn$_invoke$arity$3 = drop_down24796__3;
return drop_down24796;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down24796);
/**
* Creates a text area element.
*/
sablono.core.text_area24804 = (function() {
var text_area24804 = null;
var text_area24804__1 = (function (name){
return text_area24804.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area24804__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$141,sablono.core.make_name(name),cljs.core.constant$keyword$127,sablono.core.make_id(name),cljs.core.constant$keyword$108,value], null)], null);
});
text_area24804 = function(name,value){
switch(arguments.length){
case 1:
return text_area24804__1.call(this,name);
case 2:
return text_area24804__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area24804.cljs$core$IFn$_invoke$arity$1 = text_area24804__1;
text_area24804.cljs$core$IFn$_invoke$arity$2 = text_area24804__2;
return text_area24804;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area24804);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label24807 = (function label24807(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$125,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label24807);
/**
* Creates a submit button.
*/
sablono.core.submit_button24808 = (function submit_button24808(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$113,"submit",cljs.core.constant$keyword$108,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button24808);
/**
* Creates a form reset button.
*/
sablono.core.reset_button24809 = (function reset_button24809(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$113,"reset",cljs.core.constant$keyword$108,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button24809);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to24810 = (function() { 
var form_to24810__delegate = function (p__24811,body){
var vec__24815 = p__24811;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24815,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24815,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$148,null,cljs.core.constant$keyword$149,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$151,method_str,cljs.core.constant$keyword$152,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$151,"POST",cljs.core.constant$keyword$152,action_uri], null),(function (){var G__24816 = "_method";
var G__24817 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__24816,G__24817) : sablono.core.hidden_field.call(null,G__24816,G__24817));
})()], null)),body));
};
var form_to24810 = function (p__24811,var_args){
var body = null;
if (arguments.length > 1) {
var G__24818__i = 0, G__24818__a = new Array(arguments.length -  1);
while (G__24818__i < G__24818__a.length) {G__24818__a[G__24818__i] = arguments[G__24818__i + 1]; ++G__24818__i;}
  body = new cljs.core.IndexedSeq(G__24818__a,0);
} 
return form_to24810__delegate.call(this,p__24811,body);};
form_to24810.cljs$lang$maxFixedArity = 1;
form_to24810.cljs$lang$applyTo = (function (arglist__24819){
var p__24811 = cljs.core.first(arglist__24819);
var body = cljs.core.rest(arglist__24819);
return form_to24810__delegate(p__24811,body);
});
form_to24810.cljs$core$IFn$_invoke$arity$variadic = form_to24810__delegate;
return form_to24810;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to24810);
