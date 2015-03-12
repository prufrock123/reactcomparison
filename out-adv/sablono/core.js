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
var G__24556__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__24555 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24555,(0),null);
var body = cljs.core.nthnext(vec__24555,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__24556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24557__i = 0, G__24557__a = new Array(arguments.length -  0);
while (G__24557__i < G__24557__a.length) {G__24557__a[G__24557__i] = arguments[G__24557__i + 0]; ++G__24557__i;}
  args = new cljs.core.IndexedSeq(G__24557__a,0);
} 
return G__24556__delegate.call(this,args);};
G__24556.cljs$lang$maxFixedArity = 0;
G__24556.cljs$lang$applyTo = (function (arglist__24558){
var args = cljs.core.seq(arglist__24558);
return G__24556__delegate(args);
});
G__24556.cljs$core$IFn$_invoke$arity$variadic = G__24556__delegate;
return G__24556;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4528__auto__ = (function iter__24565(s__24566){
return (new cljs.core.LazySeq(null,(function (){
var s__24566__$1 = s__24566;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24566__$1);
if(temp__4126__auto__){
var s__24566__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24566__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24566__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24568 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24567 = (0);
while(true){
if((i__24567 < size__4527__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24567);
cljs.core.chunk_append(b__24568,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__24571 = (i__24567 + (1));
i__24567 = G__24571;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24568),iter__24565(cljs.core.chunk_rest(s__24566__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24568),null);
}
} else {
var args = cljs.core.first(s__24566__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__24565(cljs.core.rest(s__24566__$2)));
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
var G__24573 = element;
return React.renderToString(G__24573);
} else {
return null;
}
});
/**
* Render `element` as HTML string, without React internal attributes.
*/
sablono.core.render_static = (function render_static(element){
if(cljs.core.truth_(element)){
var G__24575 = element;
return React.renderToStaticMarkup(G__24575);
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
var iter__4528__auto__ = (function iter__24582(s__24583){
return (new cljs.core.LazySeq(null,(function (){
var s__24583__$1 = s__24583;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24583__$1);
if(temp__4126__auto__){
var s__24583__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24583__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24583__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24585 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24584 = (0);
while(true){
if((i__24584 < size__4527__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24584);
cljs.core.chunk_append(b__24585,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$109,"text/css",cljs.core.constant$keyword$128,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$129,"stylesheet"], null)], null));

var G__24588 = (i__24584 + (1));
i__24584 = G__24588;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24585),iter__24582(cljs.core.chunk_rest(s__24583__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24585),null);
}
} else {
var style = cljs.core.first(s__24583__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$109,"text/css",cljs.core.constant$keyword$128,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$129,"stylesheet"], null)], null),iter__24582(cljs.core.rest(s__24583__$2)));
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
var G__24589__i = 0, G__24589__a = new Array(arguments.length -  0);
while (G__24589__i < G__24589__a.length) {G__24589__a[G__24589__i] = arguments[G__24589__i + 0]; ++G__24589__i;}
  styles = new cljs.core.IndexedSeq(G__24589__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__24590){
var styles = cljs.core.seq(arglist__24590);
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
var G__24595 = (function (){return goog.dom.getDocument();
})().body;
var G__24596 = (function (){var G__24597 = "script";
var G__24598 = {"src": src};
return goog.dom.createDom(G__24597,G__24598);
})();
return goog.dom.appendChild(G__24595,G__24596);
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
sablono.core.link_to24599 = (function() { 
var link_to24599__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$128,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to24599 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__24600__i = 0, G__24600__a = new Array(arguments.length -  1);
while (G__24600__i < G__24600__a.length) {G__24600__a[G__24600__i] = arguments[G__24600__i + 1]; ++G__24600__i;}
  content = new cljs.core.IndexedSeq(G__24600__a,0);
} 
return link_to24599__delegate.call(this,url,content);};
link_to24599.cljs$lang$maxFixedArity = 1;
link_to24599.cljs$lang$applyTo = (function (arglist__24601){
var url = cljs.core.first(arglist__24601);
var content = cljs.core.rest(arglist__24601);
return link_to24599__delegate(url,content);
});
link_to24599.cljs$core$IFn$_invoke$arity$variadic = link_to24599__delegate;
return link_to24599;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to24599);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to24602 = (function() { 
var mail_to24602__delegate = function (e_mail,p__24603){
var vec__24605 = p__24603;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24605,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$128,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3772__auto__ = content;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to24602 = function (e_mail,var_args){
var p__24603 = null;
if (arguments.length > 1) {
var G__24606__i = 0, G__24606__a = new Array(arguments.length -  1);
while (G__24606__i < G__24606__a.length) {G__24606__a[G__24606__i] = arguments[G__24606__i + 1]; ++G__24606__i;}
  p__24603 = new cljs.core.IndexedSeq(G__24606__a,0);
} 
return mail_to24602__delegate.call(this,e_mail,p__24603);};
mail_to24602.cljs$lang$maxFixedArity = 1;
mail_to24602.cljs$lang$applyTo = (function (arglist__24607){
var e_mail = cljs.core.first(arglist__24607);
var p__24603 = cljs.core.rest(arglist__24607);
return mail_to24602__delegate(e_mail,p__24603);
});
mail_to24602.cljs$core$IFn$_invoke$arity$variadic = mail_to24602__delegate;
return mail_to24602;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to24602);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list24608 = (function unordered_list24608(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131,(function (){var iter__4528__auto__ = (function iter__24615(s__24616){
return (new cljs.core.LazySeq(null,(function (){
var s__24616__$1 = s__24616;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24616__$1);
if(temp__4126__auto__){
var s__24616__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24616__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24616__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24618 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24617 = (0);
while(true){
if((i__24617 < size__4527__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24617);
cljs.core.chunk_append(b__24618,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,x], null));

var G__24621 = (i__24617 + (1));
i__24617 = G__24621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24618),iter__24615(cljs.core.chunk_rest(s__24616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24618),null);
}
} else {
var x = cljs.core.first(s__24616__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,x], null),iter__24615(cljs.core.rest(s__24616__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list24608);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list24622 = (function ordered_list24622(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$133,(function (){var iter__4528__auto__ = (function iter__24629(s__24630){
return (new cljs.core.LazySeq(null,(function (){
var s__24630__$1 = s__24630;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24630__$1);
if(temp__4126__auto__){
var s__24630__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24630__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24630__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24632 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24631 = (0);
while(true){
if((i__24631 < size__4527__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24631);
cljs.core.chunk_append(b__24632,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,x], null));

var G__24635 = (i__24631 + (1));
i__24631 = G__24635;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24632),iter__24629(cljs.core.chunk_rest(s__24630__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24632),null);
}
} else {
var x = cljs.core.first(s__24630__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,x], null),iter__24629(cljs.core.rest(s__24630__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list24622);
/**
* Create an image element.
*/
sablono.core.image24636 = (function() {
var image24636 = null;
var image24636__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$135,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image24636__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$135,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$136,alt], null)], null);
});
image24636 = function(src,alt){
switch(arguments.length){
case 1:
return image24636__1.call(this,src);
case 2:
return image24636__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image24636.cljs$core$IFn$_invoke$arity$1 = image24636__1;
image24636.cljs$core$IFn$_invoke$arity$2 = image24636__2;
return image24636;
})()
;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image24636);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24637_SHARP_,p2__24638_SHARP_){
return [cljs.core.str(p1__24637_SHARP_),cljs.core.str("["),cljs.core.str(p2__24638_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24639_SHARP_,p2__24640_SHARP_){
return [cljs.core.str(p1__24639_SHARP_),cljs.core.str("-"),cljs.core.str(p2__24640_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$109,type,cljs.core.constant$keyword$137,sablono.core.make_name(name),cljs.core.constant$keyword$123,sablono.core.make_id(name),cljs.core.constant$keyword$104,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field24641 = (function() {
var color_field24641 = null;
var color_field24641__1 = (function (name__5883__auto__){
return color_field24641.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var color_field24641__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__5883__auto__,value__5884__auto__);
});
color_field24641 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return color_field24641__1.call(this,name__5883__auto__);
case 2:
return color_field24641__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field24641.cljs$core$IFn$_invoke$arity$1 = color_field24641__1;
color_field24641.cljs$core$IFn$_invoke$arity$2 = color_field24641__2;
return color_field24641;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field24641);

/**
* Creates a date input field.
*/
sablono.core.date_field24644 = (function() {
var date_field24644 = null;
var date_field24644__1 = (function (name__5883__auto__){
return date_field24644.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var date_field24644__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__5883__auto__,value__5884__auto__);
});
date_field24644 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return date_field24644__1.call(this,name__5883__auto__);
case 2:
return date_field24644__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field24644.cljs$core$IFn$_invoke$arity$1 = date_field24644__1;
date_field24644.cljs$core$IFn$_invoke$arity$2 = date_field24644__2;
return date_field24644;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field24644);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field24647 = (function() {
var datetime_field24647 = null;
var datetime_field24647__1 = (function (name__5883__auto__){
return datetime_field24647.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var datetime_field24647__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__5883__auto__,value__5884__auto__);
});
datetime_field24647 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return datetime_field24647__1.call(this,name__5883__auto__);
case 2:
return datetime_field24647__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field24647.cljs$core$IFn$_invoke$arity$1 = datetime_field24647__1;
datetime_field24647.cljs$core$IFn$_invoke$arity$2 = datetime_field24647__2;
return datetime_field24647;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field24647);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field24650 = (function() {
var datetime_local_field24650 = null;
var datetime_local_field24650__1 = (function (name__5883__auto__){
return datetime_local_field24650.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var datetime_local_field24650__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__5883__auto__,value__5884__auto__);
});
datetime_local_field24650 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return datetime_local_field24650__1.call(this,name__5883__auto__);
case 2:
return datetime_local_field24650__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field24650.cljs$core$IFn$_invoke$arity$1 = datetime_local_field24650__1;
datetime_local_field24650.cljs$core$IFn$_invoke$arity$2 = datetime_local_field24650__2;
return datetime_local_field24650;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field24650);

/**
* Creates a email input field.
*/
sablono.core.email_field24653 = (function() {
var email_field24653 = null;
var email_field24653__1 = (function (name__5883__auto__){
return email_field24653.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var email_field24653__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__5883__auto__,value__5884__auto__);
});
email_field24653 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return email_field24653__1.call(this,name__5883__auto__);
case 2:
return email_field24653__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field24653.cljs$core$IFn$_invoke$arity$1 = email_field24653__1;
email_field24653.cljs$core$IFn$_invoke$arity$2 = email_field24653__2;
return email_field24653;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field24653);

/**
* Creates a file input field.
*/
sablono.core.file_field24656 = (function() {
var file_field24656 = null;
var file_field24656__1 = (function (name__5883__auto__){
return file_field24656.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var file_field24656__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__5883__auto__,value__5884__auto__);
});
file_field24656 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return file_field24656__1.call(this,name__5883__auto__);
case 2:
return file_field24656__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field24656.cljs$core$IFn$_invoke$arity$1 = file_field24656__1;
file_field24656.cljs$core$IFn$_invoke$arity$2 = file_field24656__2;
return file_field24656;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field24656);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field24659 = (function() {
var hidden_field24659 = null;
var hidden_field24659__1 = (function (name__5883__auto__){
return hidden_field24659.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var hidden_field24659__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__5883__auto__,value__5884__auto__);
});
hidden_field24659 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return hidden_field24659__1.call(this,name__5883__auto__);
case 2:
return hidden_field24659__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field24659.cljs$core$IFn$_invoke$arity$1 = hidden_field24659__1;
hidden_field24659.cljs$core$IFn$_invoke$arity$2 = hidden_field24659__2;
return hidden_field24659;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field24659);

/**
* Creates a month input field.
*/
sablono.core.month_field24662 = (function() {
var month_field24662 = null;
var month_field24662__1 = (function (name__5883__auto__){
return month_field24662.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var month_field24662__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__5883__auto__,value__5884__auto__);
});
month_field24662 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return month_field24662__1.call(this,name__5883__auto__);
case 2:
return month_field24662__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field24662.cljs$core$IFn$_invoke$arity$1 = month_field24662__1;
month_field24662.cljs$core$IFn$_invoke$arity$2 = month_field24662__2;
return month_field24662;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field24662);

/**
* Creates a number input field.
*/
sablono.core.number_field24665 = (function() {
var number_field24665 = null;
var number_field24665__1 = (function (name__5883__auto__){
return number_field24665.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var number_field24665__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__5883__auto__,value__5884__auto__);
});
number_field24665 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return number_field24665__1.call(this,name__5883__auto__);
case 2:
return number_field24665__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field24665.cljs$core$IFn$_invoke$arity$1 = number_field24665__1;
number_field24665.cljs$core$IFn$_invoke$arity$2 = number_field24665__2;
return number_field24665;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field24665);

/**
* Creates a password input field.
*/
sablono.core.password_field24668 = (function() {
var password_field24668 = null;
var password_field24668__1 = (function (name__5883__auto__){
return password_field24668.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var password_field24668__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__5883__auto__,value__5884__auto__);
});
password_field24668 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return password_field24668__1.call(this,name__5883__auto__);
case 2:
return password_field24668__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field24668.cljs$core$IFn$_invoke$arity$1 = password_field24668__1;
password_field24668.cljs$core$IFn$_invoke$arity$2 = password_field24668__2;
return password_field24668;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field24668);

/**
* Creates a range input field.
*/
sablono.core.range_field24671 = (function() {
var range_field24671 = null;
var range_field24671__1 = (function (name__5883__auto__){
return range_field24671.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var range_field24671__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__5883__auto__,value__5884__auto__);
});
range_field24671 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return range_field24671__1.call(this,name__5883__auto__);
case 2:
return range_field24671__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field24671.cljs$core$IFn$_invoke$arity$1 = range_field24671__1;
range_field24671.cljs$core$IFn$_invoke$arity$2 = range_field24671__2;
return range_field24671;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field24671);

/**
* Creates a search input field.
*/
sablono.core.search_field24674 = (function() {
var search_field24674 = null;
var search_field24674__1 = (function (name__5883__auto__){
return search_field24674.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var search_field24674__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__5883__auto__,value__5884__auto__);
});
search_field24674 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return search_field24674__1.call(this,name__5883__auto__);
case 2:
return search_field24674__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field24674.cljs$core$IFn$_invoke$arity$1 = search_field24674__1;
search_field24674.cljs$core$IFn$_invoke$arity$2 = search_field24674__2;
return search_field24674;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field24674);

/**
* Creates a tel input field.
*/
sablono.core.tel_field24677 = (function() {
var tel_field24677 = null;
var tel_field24677__1 = (function (name__5883__auto__){
return tel_field24677.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var tel_field24677__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__5883__auto__,value__5884__auto__);
});
tel_field24677 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return tel_field24677__1.call(this,name__5883__auto__);
case 2:
return tel_field24677__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field24677.cljs$core$IFn$_invoke$arity$1 = tel_field24677__1;
tel_field24677.cljs$core$IFn$_invoke$arity$2 = tel_field24677__2;
return tel_field24677;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field24677);

/**
* Creates a text input field.
*/
sablono.core.text_field24680 = (function() {
var text_field24680 = null;
var text_field24680__1 = (function (name__5883__auto__){
return text_field24680.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var text_field24680__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__5883__auto__,value__5884__auto__);
});
text_field24680 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return text_field24680__1.call(this,name__5883__auto__);
case 2:
return text_field24680__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field24680.cljs$core$IFn$_invoke$arity$1 = text_field24680__1;
text_field24680.cljs$core$IFn$_invoke$arity$2 = text_field24680__2;
return text_field24680;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field24680);

/**
* Creates a time input field.
*/
sablono.core.time_field24683 = (function() {
var time_field24683 = null;
var time_field24683__1 = (function (name__5883__auto__){
return time_field24683.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var time_field24683__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__5883__auto__,value__5884__auto__);
});
time_field24683 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return time_field24683__1.call(this,name__5883__auto__);
case 2:
return time_field24683__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field24683.cljs$core$IFn$_invoke$arity$1 = time_field24683__1;
time_field24683.cljs$core$IFn$_invoke$arity$2 = time_field24683__2;
return time_field24683;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field24683);

/**
* Creates a url input field.
*/
sablono.core.url_field24686 = (function() {
var url_field24686 = null;
var url_field24686__1 = (function (name__5883__auto__){
return url_field24686.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var url_field24686__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__5883__auto__,value__5884__auto__);
});
url_field24686 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return url_field24686__1.call(this,name__5883__auto__);
case 2:
return url_field24686__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field24686.cljs$core$IFn$_invoke$arity$1 = url_field24686__1;
url_field24686.cljs$core$IFn$_invoke$arity$2 = url_field24686__2;
return url_field24686;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field24686);

/**
* Creates a week input field.
*/
sablono.core.week_field24689 = (function() {
var week_field24689 = null;
var week_field24689__1 = (function (name__5883__auto__){
return week_field24689.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var week_field24689__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__5883__auto__,value__5884__auto__);
});
week_field24689 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return week_field24689__1.call(this,name__5883__auto__);
case 2:
return week_field24689__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field24689.cljs$core$IFn$_invoke$arity$1 = week_field24689__1;
week_field24689.cljs$core$IFn$_invoke$arity$2 = week_field24689__2;
return week_field24689;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field24689);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box24692 = (function() {
var check_box24692 = null;
var check_box24692__1 = (function (name){
return check_box24692.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box24692__2 = (function (name,checked_QMARK_){
return check_box24692.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box24692__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$109,"checkbox",cljs.core.constant$keyword$137,sablono.core.make_name(name),cljs.core.constant$keyword$123,sablono.core.make_id(name),cljs.core.constant$keyword$104,value,cljs.core.constant$keyword$138,checked_QMARK_], null)], null);
});
check_box24692 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box24692__1.call(this,name);
case 2:
return check_box24692__2.call(this,name,checked_QMARK_);
case 3:
return check_box24692__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box24692.cljs$core$IFn$_invoke$arity$1 = check_box24692__1;
check_box24692.cljs$core$IFn$_invoke$arity$2 = check_box24692__2;
check_box24692.cljs$core$IFn$_invoke$arity$3 = check_box24692__3;
return check_box24692;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box24692);
/**
* Creates a radio button.
*/
sablono.core.radio_button24698 = (function() {
var radio_button24698 = null;
var radio_button24698__1 = (function (group){
return radio_button24698.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button24698__2 = (function (group,checked_QMARK_){
return radio_button24698.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button24698__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$109,"radio",cljs.core.constant$keyword$137,sablono.core.make_name(group),cljs.core.constant$keyword$123,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$104,value,cljs.core.constant$keyword$138,checked_QMARK_], null)], null);
});
radio_button24698 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button24698__1.call(this,group);
case 2:
return radio_button24698__2.call(this,group,checked_QMARK_);
case 3:
return radio_button24698__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button24698.cljs$core$IFn$_invoke$arity$1 = radio_button24698__1;
radio_button24698.cljs$core$IFn$_invoke$arity$2 = radio_button24698__2;
radio_button24698.cljs$core$IFn$_invoke$arity$3 = radio_button24698__3;
return radio_button24698;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button24698);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options24704 = (function() {
var select_options24704 = null;
var select_options24704__1 = (function (coll){
return select_options24704.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options24704__2 = (function (coll,selected){
var iter__4528__auto__ = (function iter__24725(s__24726){
return (new cljs.core.LazySeq(null,(function (){
var s__24726__$1 = s__24726;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24726__$1);
if(temp__4126__auto__){
var s__24726__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24726__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24726__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24728 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24727 = (0);
while(true){
if((i__24727 < size__4527__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24727);
cljs.core.chunk_append(b__24728,((cljs.core.sequential_QMARK_(x))?(function (){var vec__24733 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24733,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24733,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24733,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$139,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$140,text], null),select_options24704.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$104,val,cljs.core.constant$keyword$141,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$142,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$141,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__24735 = (i__24727 + (1));
i__24727 = G__24735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24728),iter__24725(cljs.core.chunk_rest(s__24726__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24728),null);
}
} else {
var x = cljs.core.first(s__24726__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__24734 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24734,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24734,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24734,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$139,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$140,text], null),select_options24704.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$104,val,cljs.core.constant$keyword$141,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$142,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$141,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__24725(cljs.core.rest(s__24726__$2)));
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
select_options24704 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options24704__1.call(this,coll);
case 2:
return select_options24704__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options24704.cljs$core$IFn$_invoke$arity$1 = select_options24704__1;
select_options24704.cljs$core$IFn$_invoke$arity$2 = select_options24704__2;
return select_options24704;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options24704);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down24736 = (function() {
var drop_down24736 = null;
var drop_down24736__2 = (function (name,options){
return drop_down24736.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down24736__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$137,sablono.core.make_name(name),cljs.core.constant$keyword$123,sablono.core.make_id(name)], null),(function (){var G__24742 = options;
var G__24743 = selected;
return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__24742,G__24743) : sablono.core.select_options.call(null,G__24742,G__24743));
})()], null);
});
drop_down24736 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down24736__2.call(this,name,options);
case 3:
return drop_down24736__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down24736.cljs$core$IFn$_invoke$arity$2 = drop_down24736__2;
drop_down24736.cljs$core$IFn$_invoke$arity$3 = drop_down24736__3;
return drop_down24736;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down24736);
/**
* Creates a text area element.
*/
sablono.core.text_area24744 = (function() {
var text_area24744 = null;
var text_area24744__1 = (function (name){
return text_area24744.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area24744__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$137,sablono.core.make_name(name),cljs.core.constant$keyword$123,sablono.core.make_id(name),cljs.core.constant$keyword$104,value], null)], null);
});
text_area24744 = function(name,value){
switch(arguments.length){
case 1:
return text_area24744__1.call(this,name);
case 2:
return text_area24744__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area24744.cljs$core$IFn$_invoke$arity$1 = text_area24744__1;
text_area24744.cljs$core$IFn$_invoke$arity$2 = text_area24744__2;
return text_area24744;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area24744);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label24747 = (function label24747(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$140,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$121,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label24747);
/**
* Creates a submit button.
*/
sablono.core.submit_button24748 = (function submit_button24748(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$109,"submit",cljs.core.constant$keyword$104,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button24748);
/**
* Creates a form reset button.
*/
sablono.core.reset_button24749 = (function reset_button24749(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$109,"reset",cljs.core.constant$keyword$104,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button24749);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to24750 = (function() { 
var form_to24750__delegate = function (p__24751,body){
var vec__24755 = p__24751;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24755,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24755,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$144,null,cljs.core.constant$keyword$145,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$146,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$147,method_str,cljs.core.constant$keyword$148,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$146,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$147,"POST",cljs.core.constant$keyword$148,action_uri], null),(function (){var G__24756 = "_method";
var G__24757 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__24756,G__24757) : sablono.core.hidden_field.call(null,G__24756,G__24757));
})()], null)),body));
};
var form_to24750 = function (p__24751,var_args){
var body = null;
if (arguments.length > 1) {
var G__24758__i = 0, G__24758__a = new Array(arguments.length -  1);
while (G__24758__i < G__24758__a.length) {G__24758__a[G__24758__i] = arguments[G__24758__i + 1]; ++G__24758__i;}
  body = new cljs.core.IndexedSeq(G__24758__a,0);
} 
return form_to24750__delegate.call(this,p__24751,body);};
form_to24750.cljs$lang$maxFixedArity = 1;
form_to24750.cljs$lang$applyTo = (function (arglist__24759){
var p__24751 = cljs.core.first(arglist__24759);
var body = cljs.core.rest(arglist__24759);
return form_to24750__delegate(p__24751,body);
});
form_to24750.cljs$core$IFn$_invoke$arity$variadic = form_to24750__delegate;
return form_to24750;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to24750);
