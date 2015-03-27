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
var G__24759__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__24758 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24758,(0),null);
var body = cljs.core.nthnext(vec__24758,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__24759 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24760__i = 0, G__24760__a = new Array(arguments.length -  0);
while (G__24760__i < G__24760__a.length) {G__24760__a[G__24760__i] = arguments[G__24760__i + 0]; ++G__24760__i;}
  args = new cljs.core.IndexedSeq(G__24760__a,0);
} 
return G__24759__delegate.call(this,args);};
G__24759.cljs$lang$maxFixedArity = 0;
G__24759.cljs$lang$applyTo = (function (arglist__24761){
var args = cljs.core.seq(arglist__24761);
return G__24759__delegate(args);
});
G__24759.cljs$core$IFn$_invoke$arity$variadic = G__24759__delegate;
return G__24759;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4528__auto__ = (function iter__24768(s__24769){
return (new cljs.core.LazySeq(null,(function (){
var s__24769__$1 = s__24769;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24769__$1);
if(temp__4126__auto__){
var s__24769__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24769__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24769__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24771 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24770 = (0);
while(true){
if((i__24770 < size__4527__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24770);
cljs.core.chunk_append(b__24771,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__24774 = (i__24770 + (1));
i__24770 = G__24774;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24771),iter__24768(cljs.core.chunk_rest(s__24769__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24771),null);
}
} else {
var args = cljs.core.first(s__24769__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__24768(cljs.core.rest(s__24769__$2)));
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
var G__24776 = element;
return React.renderToString(G__24776);
} else {
return null;
}
});
/**
* Render `element` as HTML string, without React internal attributes.
*/
sablono.core.render_static = (function render_static(element){
if(cljs.core.truth_(element)){
var G__24778 = element;
return React.renderToStaticMarkup(G__24778);
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
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24787);
cljs.core.chunk_append(b__24788,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$113,"text/css",cljs.core.constant$keyword$132,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$133,"stylesheet"], null)], null));

var G__24791 = (i__24787 + (1));
i__24787 = G__24791;
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
var style = cljs.core.first(s__24786__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$113,"text/css",cljs.core.constant$keyword$132,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$133,"stylesheet"], null)], null),iter__24785(cljs.core.rest(s__24786__$2)));
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
var G__24792__i = 0, G__24792__a = new Array(arguments.length -  0);
while (G__24792__i < G__24792__a.length) {G__24792__a[G__24792__i] = arguments[G__24792__i + 0]; ++G__24792__i;}
  styles = new cljs.core.IndexedSeq(G__24792__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__24793){
var styles = cljs.core.seq(arglist__24793);
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
var G__24798 = (function (){return goog.dom.getDocument();
})().body;
var G__24799 = (function (){var G__24800 = "script";
var G__24801 = {"src": src};
return goog.dom.createDom(G__24800,G__24801);
})();
return goog.dom.appendChild(G__24798,G__24799);
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
sablono.core.link_to24802 = (function() { 
var link_to24802__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$132,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to24802 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__24803__i = 0, G__24803__a = new Array(arguments.length -  1);
while (G__24803__i < G__24803__a.length) {G__24803__a[G__24803__i] = arguments[G__24803__i + 1]; ++G__24803__i;}
  content = new cljs.core.IndexedSeq(G__24803__a,0);
} 
return link_to24802__delegate.call(this,url,content);};
link_to24802.cljs$lang$maxFixedArity = 1;
link_to24802.cljs$lang$applyTo = (function (arglist__24804){
var url = cljs.core.first(arglist__24804);
var content = cljs.core.rest(arglist__24804);
return link_to24802__delegate(url,content);
});
link_to24802.cljs$core$IFn$_invoke$arity$variadic = link_to24802__delegate;
return link_to24802;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to24802);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to24805 = (function() { 
var mail_to24805__delegate = function (e_mail,p__24806){
var vec__24808 = p__24806;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24808,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$132,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3772__auto__ = content;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to24805 = function (e_mail,var_args){
var p__24806 = null;
if (arguments.length > 1) {
var G__24809__i = 0, G__24809__a = new Array(arguments.length -  1);
while (G__24809__i < G__24809__a.length) {G__24809__a[G__24809__i] = arguments[G__24809__i + 1]; ++G__24809__i;}
  p__24806 = new cljs.core.IndexedSeq(G__24809__a,0);
} 
return mail_to24805__delegate.call(this,e_mail,p__24806);};
mail_to24805.cljs$lang$maxFixedArity = 1;
mail_to24805.cljs$lang$applyTo = (function (arglist__24810){
var e_mail = cljs.core.first(arglist__24810);
var p__24806 = cljs.core.rest(arglist__24810);
return mail_to24805__delegate(e_mail,p__24806);
});
mail_to24805.cljs$core$IFn$_invoke$arity$variadic = mail_to24805__delegate;
return mail_to24805;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to24805);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list24811 = (function unordered_list24811(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$135,(function (){var iter__4528__auto__ = (function iter__24818(s__24819){
return (new cljs.core.LazySeq(null,(function (){
var s__24819__$1 = s__24819;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24819__$1);
if(temp__4126__auto__){
var s__24819__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24819__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24819__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24821 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24820 = (0);
while(true){
if((i__24820 < size__4527__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24820);
cljs.core.chunk_append(b__24821,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,x], null));

var G__24824 = (i__24820 + (1));
i__24820 = G__24824;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24821),iter__24818(cljs.core.chunk_rest(s__24819__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24821),null);
}
} else {
var x = cljs.core.first(s__24819__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,x], null),iter__24818(cljs.core.rest(s__24819__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list24811);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list24825 = (function ordered_list24825(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$137,(function (){var iter__4528__auto__ = (function iter__24832(s__24833){
return (new cljs.core.LazySeq(null,(function (){
var s__24833__$1 = s__24833;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24833__$1);
if(temp__4126__auto__){
var s__24833__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24833__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24833__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24835 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24834 = (0);
while(true){
if((i__24834 < size__4527__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24834);
cljs.core.chunk_append(b__24835,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,x], null));

var G__24838 = (i__24834 + (1));
i__24834 = G__24838;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24835),iter__24832(cljs.core.chunk_rest(s__24833__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24835),null);
}
} else {
var x = cljs.core.first(s__24833__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,x], null),iter__24832(cljs.core.rest(s__24833__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list24825);
/**
* Create an image element.
*/
sablono.core.image24839 = (function() {
var image24839 = null;
var image24839__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$139,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image24839__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$139,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$140,alt], null)], null);
});
image24839 = function(src,alt){
switch(arguments.length){
case 1:
return image24839__1.call(this,src);
case 2:
return image24839__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image24839.cljs$core$IFn$_invoke$arity$1 = image24839__1;
image24839.cljs$core$IFn$_invoke$arity$2 = image24839__2;
return image24839;
})()
;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image24839);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24840_SHARP_,p2__24841_SHARP_){
return [cljs.core.str(p1__24840_SHARP_),cljs.core.str("["),cljs.core.str(p2__24841_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24842_SHARP_,p2__24843_SHARP_){
return [cljs.core.str(p1__24842_SHARP_),cljs.core.str("-"),cljs.core.str(p2__24843_SHARP_)].join('');
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
sablono.core.color_field24844 = (function() {
var color_field24844 = null;
var color_field24844__1 = (function (name__5883__auto__){
return color_field24844.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var color_field24844__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__5883__auto__,value__5884__auto__);
});
color_field24844 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return color_field24844__1.call(this,name__5883__auto__);
case 2:
return color_field24844__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field24844.cljs$core$IFn$_invoke$arity$1 = color_field24844__1;
color_field24844.cljs$core$IFn$_invoke$arity$2 = color_field24844__2;
return color_field24844;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field24844);

/**
* Creates a date input field.
*/
sablono.core.date_field24847 = (function() {
var date_field24847 = null;
var date_field24847__1 = (function (name__5883__auto__){
return date_field24847.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var date_field24847__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__5883__auto__,value__5884__auto__);
});
date_field24847 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return date_field24847__1.call(this,name__5883__auto__);
case 2:
return date_field24847__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field24847.cljs$core$IFn$_invoke$arity$1 = date_field24847__1;
date_field24847.cljs$core$IFn$_invoke$arity$2 = date_field24847__2;
return date_field24847;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field24847);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field24850 = (function() {
var datetime_field24850 = null;
var datetime_field24850__1 = (function (name__5883__auto__){
return datetime_field24850.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var datetime_field24850__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__5883__auto__,value__5884__auto__);
});
datetime_field24850 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return datetime_field24850__1.call(this,name__5883__auto__);
case 2:
return datetime_field24850__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field24850.cljs$core$IFn$_invoke$arity$1 = datetime_field24850__1;
datetime_field24850.cljs$core$IFn$_invoke$arity$2 = datetime_field24850__2;
return datetime_field24850;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field24850);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field24853 = (function() {
var datetime_local_field24853 = null;
var datetime_local_field24853__1 = (function (name__5883__auto__){
return datetime_local_field24853.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var datetime_local_field24853__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__5883__auto__,value__5884__auto__);
});
datetime_local_field24853 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return datetime_local_field24853__1.call(this,name__5883__auto__);
case 2:
return datetime_local_field24853__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field24853.cljs$core$IFn$_invoke$arity$1 = datetime_local_field24853__1;
datetime_local_field24853.cljs$core$IFn$_invoke$arity$2 = datetime_local_field24853__2;
return datetime_local_field24853;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field24853);

/**
* Creates a email input field.
*/
sablono.core.email_field24856 = (function() {
var email_field24856 = null;
var email_field24856__1 = (function (name__5883__auto__){
return email_field24856.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var email_field24856__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__5883__auto__,value__5884__auto__);
});
email_field24856 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return email_field24856__1.call(this,name__5883__auto__);
case 2:
return email_field24856__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field24856.cljs$core$IFn$_invoke$arity$1 = email_field24856__1;
email_field24856.cljs$core$IFn$_invoke$arity$2 = email_field24856__2;
return email_field24856;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field24856);

/**
* Creates a file input field.
*/
sablono.core.file_field24859 = (function() {
var file_field24859 = null;
var file_field24859__1 = (function (name__5883__auto__){
return file_field24859.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var file_field24859__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__5883__auto__,value__5884__auto__);
});
file_field24859 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return file_field24859__1.call(this,name__5883__auto__);
case 2:
return file_field24859__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field24859.cljs$core$IFn$_invoke$arity$1 = file_field24859__1;
file_field24859.cljs$core$IFn$_invoke$arity$2 = file_field24859__2;
return file_field24859;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field24859);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field24862 = (function() {
var hidden_field24862 = null;
var hidden_field24862__1 = (function (name__5883__auto__){
return hidden_field24862.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var hidden_field24862__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__5883__auto__,value__5884__auto__);
});
hidden_field24862 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return hidden_field24862__1.call(this,name__5883__auto__);
case 2:
return hidden_field24862__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field24862.cljs$core$IFn$_invoke$arity$1 = hidden_field24862__1;
hidden_field24862.cljs$core$IFn$_invoke$arity$2 = hidden_field24862__2;
return hidden_field24862;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field24862);

/**
* Creates a month input field.
*/
sablono.core.month_field24865 = (function() {
var month_field24865 = null;
var month_field24865__1 = (function (name__5883__auto__){
return month_field24865.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var month_field24865__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__5883__auto__,value__5884__auto__);
});
month_field24865 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return month_field24865__1.call(this,name__5883__auto__);
case 2:
return month_field24865__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field24865.cljs$core$IFn$_invoke$arity$1 = month_field24865__1;
month_field24865.cljs$core$IFn$_invoke$arity$2 = month_field24865__2;
return month_field24865;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field24865);

/**
* Creates a number input field.
*/
sablono.core.number_field24868 = (function() {
var number_field24868 = null;
var number_field24868__1 = (function (name__5883__auto__){
return number_field24868.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var number_field24868__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__5883__auto__,value__5884__auto__);
});
number_field24868 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return number_field24868__1.call(this,name__5883__auto__);
case 2:
return number_field24868__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field24868.cljs$core$IFn$_invoke$arity$1 = number_field24868__1;
number_field24868.cljs$core$IFn$_invoke$arity$2 = number_field24868__2;
return number_field24868;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field24868);

/**
* Creates a password input field.
*/
sablono.core.password_field24871 = (function() {
var password_field24871 = null;
var password_field24871__1 = (function (name__5883__auto__){
return password_field24871.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var password_field24871__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__5883__auto__,value__5884__auto__);
});
password_field24871 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return password_field24871__1.call(this,name__5883__auto__);
case 2:
return password_field24871__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field24871.cljs$core$IFn$_invoke$arity$1 = password_field24871__1;
password_field24871.cljs$core$IFn$_invoke$arity$2 = password_field24871__2;
return password_field24871;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field24871);

/**
* Creates a range input field.
*/
sablono.core.range_field24874 = (function() {
var range_field24874 = null;
var range_field24874__1 = (function (name__5883__auto__){
return range_field24874.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var range_field24874__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__5883__auto__,value__5884__auto__);
});
range_field24874 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return range_field24874__1.call(this,name__5883__auto__);
case 2:
return range_field24874__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field24874.cljs$core$IFn$_invoke$arity$1 = range_field24874__1;
range_field24874.cljs$core$IFn$_invoke$arity$2 = range_field24874__2;
return range_field24874;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field24874);

/**
* Creates a search input field.
*/
sablono.core.search_field24877 = (function() {
var search_field24877 = null;
var search_field24877__1 = (function (name__5883__auto__){
return search_field24877.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var search_field24877__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__5883__auto__,value__5884__auto__);
});
search_field24877 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return search_field24877__1.call(this,name__5883__auto__);
case 2:
return search_field24877__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field24877.cljs$core$IFn$_invoke$arity$1 = search_field24877__1;
search_field24877.cljs$core$IFn$_invoke$arity$2 = search_field24877__2;
return search_field24877;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field24877);

/**
* Creates a tel input field.
*/
sablono.core.tel_field24880 = (function() {
var tel_field24880 = null;
var tel_field24880__1 = (function (name__5883__auto__){
return tel_field24880.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var tel_field24880__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__5883__auto__,value__5884__auto__);
});
tel_field24880 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return tel_field24880__1.call(this,name__5883__auto__);
case 2:
return tel_field24880__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field24880.cljs$core$IFn$_invoke$arity$1 = tel_field24880__1;
tel_field24880.cljs$core$IFn$_invoke$arity$2 = tel_field24880__2;
return tel_field24880;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field24880);

/**
* Creates a text input field.
*/
sablono.core.text_field24883 = (function() {
var text_field24883 = null;
var text_field24883__1 = (function (name__5883__auto__){
return text_field24883.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var text_field24883__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__5883__auto__,value__5884__auto__);
});
text_field24883 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return text_field24883__1.call(this,name__5883__auto__);
case 2:
return text_field24883__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field24883.cljs$core$IFn$_invoke$arity$1 = text_field24883__1;
text_field24883.cljs$core$IFn$_invoke$arity$2 = text_field24883__2;
return text_field24883;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field24883);

/**
* Creates a time input field.
*/
sablono.core.time_field24886 = (function() {
var time_field24886 = null;
var time_field24886__1 = (function (name__5883__auto__){
return time_field24886.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var time_field24886__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__5883__auto__,value__5884__auto__);
});
time_field24886 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return time_field24886__1.call(this,name__5883__auto__);
case 2:
return time_field24886__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field24886.cljs$core$IFn$_invoke$arity$1 = time_field24886__1;
time_field24886.cljs$core$IFn$_invoke$arity$2 = time_field24886__2;
return time_field24886;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field24886);

/**
* Creates a url input field.
*/
sablono.core.url_field24889 = (function() {
var url_field24889 = null;
var url_field24889__1 = (function (name__5883__auto__){
return url_field24889.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var url_field24889__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__5883__auto__,value__5884__auto__);
});
url_field24889 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return url_field24889__1.call(this,name__5883__auto__);
case 2:
return url_field24889__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field24889.cljs$core$IFn$_invoke$arity$1 = url_field24889__1;
url_field24889.cljs$core$IFn$_invoke$arity$2 = url_field24889__2;
return url_field24889;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field24889);

/**
* Creates a week input field.
*/
sablono.core.week_field24892 = (function() {
var week_field24892 = null;
var week_field24892__1 = (function (name__5883__auto__){
return week_field24892.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var week_field24892__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__5883__auto__,value__5884__auto__);
});
week_field24892 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return week_field24892__1.call(this,name__5883__auto__);
case 2:
return week_field24892__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field24892.cljs$core$IFn$_invoke$arity$1 = week_field24892__1;
week_field24892.cljs$core$IFn$_invoke$arity$2 = week_field24892__2;
return week_field24892;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field24892);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box24895 = (function() {
var check_box24895 = null;
var check_box24895__1 = (function (name){
return check_box24895.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box24895__2 = (function (name,checked_QMARK_){
return check_box24895.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box24895__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$113,"checkbox",cljs.core.constant$keyword$141,sablono.core.make_name(name),cljs.core.constant$keyword$127,sablono.core.make_id(name),cljs.core.constant$keyword$108,value,cljs.core.constant$keyword$142,checked_QMARK_], null)], null);
});
check_box24895 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box24895__1.call(this,name);
case 2:
return check_box24895__2.call(this,name,checked_QMARK_);
case 3:
return check_box24895__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box24895.cljs$core$IFn$_invoke$arity$1 = check_box24895__1;
check_box24895.cljs$core$IFn$_invoke$arity$2 = check_box24895__2;
check_box24895.cljs$core$IFn$_invoke$arity$3 = check_box24895__3;
return check_box24895;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box24895);
/**
* Creates a radio button.
*/
sablono.core.radio_button24901 = (function() {
var radio_button24901 = null;
var radio_button24901__1 = (function (group){
return radio_button24901.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button24901__2 = (function (group,checked_QMARK_){
return radio_button24901.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button24901__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$113,"radio",cljs.core.constant$keyword$141,sablono.core.make_name(group),cljs.core.constant$keyword$127,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$108,value,cljs.core.constant$keyword$142,checked_QMARK_], null)], null);
});
radio_button24901 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button24901__1.call(this,group);
case 2:
return radio_button24901__2.call(this,group,checked_QMARK_);
case 3:
return radio_button24901__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button24901.cljs$core$IFn$_invoke$arity$1 = radio_button24901__1;
radio_button24901.cljs$core$IFn$_invoke$arity$2 = radio_button24901__2;
radio_button24901.cljs$core$IFn$_invoke$arity$3 = radio_button24901__3;
return radio_button24901;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button24901);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options24907 = (function() {
var select_options24907 = null;
var select_options24907__1 = (function (coll){
return select_options24907.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options24907__2 = (function (coll,selected){
var iter__4528__auto__ = (function iter__24928(s__24929){
return (new cljs.core.LazySeq(null,(function (){
var s__24929__$1 = s__24929;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24929__$1);
if(temp__4126__auto__){
var s__24929__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24929__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24929__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24931 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24930 = (0);
while(true){
if((i__24930 < size__4527__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24930);
cljs.core.chunk_append(b__24931,((cljs.core.sequential_QMARK_(x))?(function (){var vec__24936 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24936,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24936,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24936,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$144,text], null),select_options24907.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$108,val,cljs.core.constant$keyword$145,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$146,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$145,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__24938 = (i__24930 + (1));
i__24930 = G__24938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24931),iter__24928(cljs.core.chunk_rest(s__24929__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24931),null);
}
} else {
var x = cljs.core.first(s__24929__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__24937 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24937,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24937,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24937,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$144,text], null),select_options24907.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$108,val,cljs.core.constant$keyword$145,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$146,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$145,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__24928(cljs.core.rest(s__24929__$2)));
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
select_options24907 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options24907__1.call(this,coll);
case 2:
return select_options24907__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options24907.cljs$core$IFn$_invoke$arity$1 = select_options24907__1;
select_options24907.cljs$core$IFn$_invoke$arity$2 = select_options24907__2;
return select_options24907;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options24907);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down24939 = (function() {
var drop_down24939 = null;
var drop_down24939__2 = (function (name,options){
return drop_down24939.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down24939__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$147,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$141,sablono.core.make_name(name),cljs.core.constant$keyword$127,sablono.core.make_id(name)], null),(function (){var G__24945 = options;
var G__24946 = selected;
return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__24945,G__24946) : sablono.core.select_options.call(null,G__24945,G__24946));
})()], null);
});
drop_down24939 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down24939__2.call(this,name,options);
case 3:
return drop_down24939__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down24939.cljs$core$IFn$_invoke$arity$2 = drop_down24939__2;
drop_down24939.cljs$core$IFn$_invoke$arity$3 = drop_down24939__3;
return drop_down24939;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down24939);
/**
* Creates a text area element.
*/
sablono.core.text_area24947 = (function() {
var text_area24947 = null;
var text_area24947__1 = (function (name){
return text_area24947.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area24947__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$141,sablono.core.make_name(name),cljs.core.constant$keyword$127,sablono.core.make_id(name),cljs.core.constant$keyword$108,value], null)], null);
});
text_area24947 = function(name,value){
switch(arguments.length){
case 1:
return text_area24947__1.call(this,name);
case 2:
return text_area24947__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area24947.cljs$core$IFn$_invoke$arity$1 = text_area24947__1;
text_area24947.cljs$core$IFn$_invoke$arity$2 = text_area24947__2;
return text_area24947;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area24947);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label24950 = (function label24950(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$125,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label24950);
/**
* Creates a submit button.
*/
sablono.core.submit_button24951 = (function submit_button24951(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$113,"submit",cljs.core.constant$keyword$108,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button24951);
/**
* Creates a form reset button.
*/
sablono.core.reset_button24952 = (function reset_button24952(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$113,"reset",cljs.core.constant$keyword$108,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button24952);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to24953 = (function() { 
var form_to24953__delegate = function (p__24954,body){
var vec__24958 = p__24954;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24958,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24958,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$148,null,cljs.core.constant$keyword$149,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$151,method_str,cljs.core.constant$keyword$152,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$151,"POST",cljs.core.constant$keyword$152,action_uri], null),(function (){var G__24959 = "_method";
var G__24960 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__24959,G__24960) : sablono.core.hidden_field.call(null,G__24959,G__24960));
})()], null)),body));
};
var form_to24953 = function (p__24954,var_args){
var body = null;
if (arguments.length > 1) {
var G__24961__i = 0, G__24961__a = new Array(arguments.length -  1);
while (G__24961__i < G__24961__a.length) {G__24961__a[G__24961__i] = arguments[G__24961__i + 1]; ++G__24961__i;}
  body = new cljs.core.IndexedSeq(G__24961__a,0);
} 
return form_to24953__delegate.call(this,p__24954,body);};
form_to24953.cljs$lang$maxFixedArity = 1;
form_to24953.cljs$lang$applyTo = (function (arglist__24962){
var p__24954 = cljs.core.first(arglist__24962);
var body = cljs.core.rest(arglist__24962);
return form_to24953__delegate(p__24954,body);
});
form_to24953.cljs$core$IFn$_invoke$arity$variadic = form_to24953__delegate;
return form_to24953;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to24953);
