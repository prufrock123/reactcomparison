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
var G__24783__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__24782 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24782,(0),null);
var body = cljs.core.nthnext(vec__24782,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__24783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24784__i = 0, G__24784__a = new Array(arguments.length -  0);
while (G__24784__i < G__24784__a.length) {G__24784__a[G__24784__i] = arguments[G__24784__i + 0]; ++G__24784__i;}
  args = new cljs.core.IndexedSeq(G__24784__a,0);
} 
return G__24783__delegate.call(this,args);};
G__24783.cljs$lang$maxFixedArity = 0;
G__24783.cljs$lang$applyTo = (function (arglist__24785){
var args = cljs.core.seq(arglist__24785);
return G__24783__delegate(args);
});
G__24783.cljs$core$IFn$_invoke$arity$variadic = G__24783__delegate;
return G__24783;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4528__auto__ = (function iter__24792(s__24793){
return (new cljs.core.LazySeq(null,(function (){
var s__24793__$1 = s__24793;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24793__$1);
if(temp__4126__auto__){
var s__24793__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24793__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24793__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24795 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24794 = (0);
while(true){
if((i__24794 < size__4527__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24794);
cljs.core.chunk_append(b__24795,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__24798 = (i__24794 + (1));
i__24794 = G__24798;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24795),iter__24792(cljs.core.chunk_rest(s__24793__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24795),null);
}
} else {
var args = cljs.core.first(s__24793__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__24792(cljs.core.rest(s__24793__$2)));
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
var G__24800 = element;
return React.renderToString(G__24800);
} else {
return null;
}
});
/**
* Render `element` as HTML string, without React internal attributes.
*/
sablono.core.render_static = (function render_static(element){
if(cljs.core.truth_(element)){
var G__24802 = element;
return React.renderToStaticMarkup(G__24802);
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
var iter__4528__auto__ = (function iter__24809(s__24810){
return (new cljs.core.LazySeq(null,(function (){
var s__24810__$1 = s__24810;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24810__$1);
if(temp__4126__auto__){
var s__24810__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24810__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24810__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24812 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24811 = (0);
while(true){
if((i__24811 < size__4527__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24811);
cljs.core.chunk_append(b__24812,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$108,"text/css",cljs.core.constant$keyword$127,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$128,"stylesheet"], null)], null));

var G__24815 = (i__24811 + (1));
i__24811 = G__24815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24812),iter__24809(cljs.core.chunk_rest(s__24810__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24812),null);
}
} else {
var style = cljs.core.first(s__24810__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$108,"text/css",cljs.core.constant$keyword$127,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$128,"stylesheet"], null)], null),iter__24809(cljs.core.rest(s__24810__$2)));
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
var G__24816__i = 0, G__24816__a = new Array(arguments.length -  0);
while (G__24816__i < G__24816__a.length) {G__24816__a[G__24816__i] = arguments[G__24816__i + 0]; ++G__24816__i;}
  styles = new cljs.core.IndexedSeq(G__24816__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__24817){
var styles = cljs.core.seq(arglist__24817);
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
var G__24822 = (function (){return goog.dom.getDocument();
})().body;
var G__24823 = (function (){var G__24824 = "script";
var G__24825 = {"src": src};
return goog.dom.createDom(G__24824,G__24825);
})();
return goog.dom.appendChild(G__24822,G__24823);
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
sablono.core.link_to24826 = (function() { 
var link_to24826__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$127,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to24826 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__24827__i = 0, G__24827__a = new Array(arguments.length -  1);
while (G__24827__i < G__24827__a.length) {G__24827__a[G__24827__i] = arguments[G__24827__i + 1]; ++G__24827__i;}
  content = new cljs.core.IndexedSeq(G__24827__a,0);
} 
return link_to24826__delegate.call(this,url,content);};
link_to24826.cljs$lang$maxFixedArity = 1;
link_to24826.cljs$lang$applyTo = (function (arglist__24828){
var url = cljs.core.first(arglist__24828);
var content = cljs.core.rest(arglist__24828);
return link_to24826__delegate(url,content);
});
link_to24826.cljs$core$IFn$_invoke$arity$variadic = link_to24826__delegate;
return link_to24826;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to24826);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to24829 = (function() { 
var mail_to24829__delegate = function (e_mail,p__24830){
var vec__24832 = p__24830;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24832,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$127,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3772__auto__ = content;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to24829 = function (e_mail,var_args){
var p__24830 = null;
if (arguments.length > 1) {
var G__24833__i = 0, G__24833__a = new Array(arguments.length -  1);
while (G__24833__i < G__24833__a.length) {G__24833__a[G__24833__i] = arguments[G__24833__i + 1]; ++G__24833__i;}
  p__24830 = new cljs.core.IndexedSeq(G__24833__a,0);
} 
return mail_to24829__delegate.call(this,e_mail,p__24830);};
mail_to24829.cljs$lang$maxFixedArity = 1;
mail_to24829.cljs$lang$applyTo = (function (arglist__24834){
var e_mail = cljs.core.first(arglist__24834);
var p__24830 = cljs.core.rest(arglist__24834);
return mail_to24829__delegate(e_mail,p__24830);
});
mail_to24829.cljs$core$IFn$_invoke$arity$variadic = mail_to24829__delegate;
return mail_to24829;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to24829);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list24835 = (function unordered_list24835(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,(function (){var iter__4528__auto__ = (function iter__24842(s__24843){
return (new cljs.core.LazySeq(null,(function (){
var s__24843__$1 = s__24843;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24843__$1);
if(temp__4126__auto__){
var s__24843__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24843__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24843__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24845 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24844 = (0);
while(true){
if((i__24844 < size__4527__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24844);
cljs.core.chunk_append(b__24845,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131,x], null));

var G__24848 = (i__24844 + (1));
i__24844 = G__24848;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24845),iter__24842(cljs.core.chunk_rest(s__24843__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24845),null);
}
} else {
var x = cljs.core.first(s__24843__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131,x], null),iter__24842(cljs.core.rest(s__24843__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list24835);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list24849 = (function ordered_list24849(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,(function (){var iter__4528__auto__ = (function iter__24856(s__24857){
return (new cljs.core.LazySeq(null,(function (){
var s__24857__$1 = s__24857;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24857__$1);
if(temp__4126__auto__){
var s__24857__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24857__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24857__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24859 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24858 = (0);
while(true){
if((i__24858 < size__4527__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24858);
cljs.core.chunk_append(b__24859,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131,x], null));

var G__24862 = (i__24858 + (1));
i__24858 = G__24862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24859),iter__24856(cljs.core.chunk_rest(s__24857__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24859),null);
}
} else {
var x = cljs.core.first(s__24857__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131,x], null),iter__24856(cljs.core.rest(s__24857__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list24849);
/**
* Create an image element.
*/
sablono.core.image24863 = (function() {
var image24863 = null;
var image24863__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$133,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$134,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image24863__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$133,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$134,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$135,alt], null)], null);
});
image24863 = function(src,alt){
switch(arguments.length){
case 1:
return image24863__1.call(this,src);
case 2:
return image24863__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image24863.cljs$core$IFn$_invoke$arity$1 = image24863__1;
image24863.cljs$core$IFn$_invoke$arity$2 = image24863__2;
return image24863;
})()
;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image24863);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24864_SHARP_,p2__24865_SHARP_){
return [cljs.core.str(p1__24864_SHARP_),cljs.core.str("["),cljs.core.str(p2__24865_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24866_SHARP_,p2__24867_SHARP_){
return [cljs.core.str(p1__24866_SHARP_),cljs.core.str("-"),cljs.core.str(p2__24867_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$108,type,cljs.core.constant$keyword$136,sablono.core.make_name(name),cljs.core.constant$keyword$122,sablono.core.make_id(name),cljs.core.constant$keyword$103,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field24868 = (function() {
var color_field24868 = null;
var color_field24868__1 = (function (name__5883__auto__){
return color_field24868.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var color_field24868__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__5883__auto__,value__5884__auto__);
});
color_field24868 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return color_field24868__1.call(this,name__5883__auto__);
case 2:
return color_field24868__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field24868.cljs$core$IFn$_invoke$arity$1 = color_field24868__1;
color_field24868.cljs$core$IFn$_invoke$arity$2 = color_field24868__2;
return color_field24868;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field24868);

/**
* Creates a date input field.
*/
sablono.core.date_field24871 = (function() {
var date_field24871 = null;
var date_field24871__1 = (function (name__5883__auto__){
return date_field24871.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var date_field24871__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__5883__auto__,value__5884__auto__);
});
date_field24871 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return date_field24871__1.call(this,name__5883__auto__);
case 2:
return date_field24871__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field24871.cljs$core$IFn$_invoke$arity$1 = date_field24871__1;
date_field24871.cljs$core$IFn$_invoke$arity$2 = date_field24871__2;
return date_field24871;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field24871);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field24874 = (function() {
var datetime_field24874 = null;
var datetime_field24874__1 = (function (name__5883__auto__){
return datetime_field24874.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var datetime_field24874__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__5883__auto__,value__5884__auto__);
});
datetime_field24874 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return datetime_field24874__1.call(this,name__5883__auto__);
case 2:
return datetime_field24874__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field24874.cljs$core$IFn$_invoke$arity$1 = datetime_field24874__1;
datetime_field24874.cljs$core$IFn$_invoke$arity$2 = datetime_field24874__2;
return datetime_field24874;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field24874);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field24877 = (function() {
var datetime_local_field24877 = null;
var datetime_local_field24877__1 = (function (name__5883__auto__){
return datetime_local_field24877.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var datetime_local_field24877__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__5883__auto__,value__5884__auto__);
});
datetime_local_field24877 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return datetime_local_field24877__1.call(this,name__5883__auto__);
case 2:
return datetime_local_field24877__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field24877.cljs$core$IFn$_invoke$arity$1 = datetime_local_field24877__1;
datetime_local_field24877.cljs$core$IFn$_invoke$arity$2 = datetime_local_field24877__2;
return datetime_local_field24877;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field24877);

/**
* Creates a email input field.
*/
sablono.core.email_field24880 = (function() {
var email_field24880 = null;
var email_field24880__1 = (function (name__5883__auto__){
return email_field24880.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var email_field24880__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__5883__auto__,value__5884__auto__);
});
email_field24880 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return email_field24880__1.call(this,name__5883__auto__);
case 2:
return email_field24880__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field24880.cljs$core$IFn$_invoke$arity$1 = email_field24880__1;
email_field24880.cljs$core$IFn$_invoke$arity$2 = email_field24880__2;
return email_field24880;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field24880);

/**
* Creates a file input field.
*/
sablono.core.file_field24883 = (function() {
var file_field24883 = null;
var file_field24883__1 = (function (name__5883__auto__){
return file_field24883.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var file_field24883__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__5883__auto__,value__5884__auto__);
});
file_field24883 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return file_field24883__1.call(this,name__5883__auto__);
case 2:
return file_field24883__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field24883.cljs$core$IFn$_invoke$arity$1 = file_field24883__1;
file_field24883.cljs$core$IFn$_invoke$arity$2 = file_field24883__2;
return file_field24883;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field24883);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field24886 = (function() {
var hidden_field24886 = null;
var hidden_field24886__1 = (function (name__5883__auto__){
return hidden_field24886.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var hidden_field24886__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__5883__auto__,value__5884__auto__);
});
hidden_field24886 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return hidden_field24886__1.call(this,name__5883__auto__);
case 2:
return hidden_field24886__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field24886.cljs$core$IFn$_invoke$arity$1 = hidden_field24886__1;
hidden_field24886.cljs$core$IFn$_invoke$arity$2 = hidden_field24886__2;
return hidden_field24886;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field24886);

/**
* Creates a month input field.
*/
sablono.core.month_field24889 = (function() {
var month_field24889 = null;
var month_field24889__1 = (function (name__5883__auto__){
return month_field24889.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var month_field24889__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__5883__auto__,value__5884__auto__);
});
month_field24889 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return month_field24889__1.call(this,name__5883__auto__);
case 2:
return month_field24889__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field24889.cljs$core$IFn$_invoke$arity$1 = month_field24889__1;
month_field24889.cljs$core$IFn$_invoke$arity$2 = month_field24889__2;
return month_field24889;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field24889);

/**
* Creates a number input field.
*/
sablono.core.number_field24892 = (function() {
var number_field24892 = null;
var number_field24892__1 = (function (name__5883__auto__){
return number_field24892.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var number_field24892__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__5883__auto__,value__5884__auto__);
});
number_field24892 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return number_field24892__1.call(this,name__5883__auto__);
case 2:
return number_field24892__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field24892.cljs$core$IFn$_invoke$arity$1 = number_field24892__1;
number_field24892.cljs$core$IFn$_invoke$arity$2 = number_field24892__2;
return number_field24892;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field24892);

/**
* Creates a password input field.
*/
sablono.core.password_field24895 = (function() {
var password_field24895 = null;
var password_field24895__1 = (function (name__5883__auto__){
return password_field24895.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var password_field24895__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__5883__auto__,value__5884__auto__);
});
password_field24895 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return password_field24895__1.call(this,name__5883__auto__);
case 2:
return password_field24895__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field24895.cljs$core$IFn$_invoke$arity$1 = password_field24895__1;
password_field24895.cljs$core$IFn$_invoke$arity$2 = password_field24895__2;
return password_field24895;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field24895);

/**
* Creates a range input field.
*/
sablono.core.range_field24898 = (function() {
var range_field24898 = null;
var range_field24898__1 = (function (name__5883__auto__){
return range_field24898.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var range_field24898__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__5883__auto__,value__5884__auto__);
});
range_field24898 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return range_field24898__1.call(this,name__5883__auto__);
case 2:
return range_field24898__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field24898.cljs$core$IFn$_invoke$arity$1 = range_field24898__1;
range_field24898.cljs$core$IFn$_invoke$arity$2 = range_field24898__2;
return range_field24898;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field24898);

/**
* Creates a search input field.
*/
sablono.core.search_field24901 = (function() {
var search_field24901 = null;
var search_field24901__1 = (function (name__5883__auto__){
return search_field24901.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var search_field24901__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__5883__auto__,value__5884__auto__);
});
search_field24901 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return search_field24901__1.call(this,name__5883__auto__);
case 2:
return search_field24901__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field24901.cljs$core$IFn$_invoke$arity$1 = search_field24901__1;
search_field24901.cljs$core$IFn$_invoke$arity$2 = search_field24901__2;
return search_field24901;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field24901);

/**
* Creates a tel input field.
*/
sablono.core.tel_field24904 = (function() {
var tel_field24904 = null;
var tel_field24904__1 = (function (name__5883__auto__){
return tel_field24904.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var tel_field24904__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__5883__auto__,value__5884__auto__);
});
tel_field24904 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return tel_field24904__1.call(this,name__5883__auto__);
case 2:
return tel_field24904__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field24904.cljs$core$IFn$_invoke$arity$1 = tel_field24904__1;
tel_field24904.cljs$core$IFn$_invoke$arity$2 = tel_field24904__2;
return tel_field24904;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field24904);

/**
* Creates a text input field.
*/
sablono.core.text_field24907 = (function() {
var text_field24907 = null;
var text_field24907__1 = (function (name__5883__auto__){
return text_field24907.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var text_field24907__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__5883__auto__,value__5884__auto__);
});
text_field24907 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return text_field24907__1.call(this,name__5883__auto__);
case 2:
return text_field24907__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field24907.cljs$core$IFn$_invoke$arity$1 = text_field24907__1;
text_field24907.cljs$core$IFn$_invoke$arity$2 = text_field24907__2;
return text_field24907;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field24907);

/**
* Creates a time input field.
*/
sablono.core.time_field24910 = (function() {
var time_field24910 = null;
var time_field24910__1 = (function (name__5883__auto__){
return time_field24910.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var time_field24910__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__5883__auto__,value__5884__auto__);
});
time_field24910 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return time_field24910__1.call(this,name__5883__auto__);
case 2:
return time_field24910__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field24910.cljs$core$IFn$_invoke$arity$1 = time_field24910__1;
time_field24910.cljs$core$IFn$_invoke$arity$2 = time_field24910__2;
return time_field24910;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field24910);

/**
* Creates a url input field.
*/
sablono.core.url_field24913 = (function() {
var url_field24913 = null;
var url_field24913__1 = (function (name__5883__auto__){
return url_field24913.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var url_field24913__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__5883__auto__,value__5884__auto__);
});
url_field24913 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return url_field24913__1.call(this,name__5883__auto__);
case 2:
return url_field24913__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field24913.cljs$core$IFn$_invoke$arity$1 = url_field24913__1;
url_field24913.cljs$core$IFn$_invoke$arity$2 = url_field24913__2;
return url_field24913;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field24913);

/**
* Creates a week input field.
*/
sablono.core.week_field24916 = (function() {
var week_field24916 = null;
var week_field24916__1 = (function (name__5883__auto__){
return week_field24916.cljs$core$IFn$_invoke$arity$2(name__5883__auto__,null);
});
var week_field24916__2 = (function (name__5883__auto__,value__5884__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__5883__auto__,value__5884__auto__);
});
week_field24916 = function(name__5883__auto__,value__5884__auto__){
switch(arguments.length){
case 1:
return week_field24916__1.call(this,name__5883__auto__);
case 2:
return week_field24916__2.call(this,name__5883__auto__,value__5884__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field24916.cljs$core$IFn$_invoke$arity$1 = week_field24916__1;
week_field24916.cljs$core$IFn$_invoke$arity$2 = week_field24916__2;
return week_field24916;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field24916);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box24919 = (function() {
var check_box24919 = null;
var check_box24919__1 = (function (name){
return check_box24919.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box24919__2 = (function (name,checked_QMARK_){
return check_box24919.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box24919__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$108,"checkbox",cljs.core.constant$keyword$136,sablono.core.make_name(name),cljs.core.constant$keyword$122,sablono.core.make_id(name),cljs.core.constant$keyword$103,value,cljs.core.constant$keyword$137,checked_QMARK_], null)], null);
});
check_box24919 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box24919__1.call(this,name);
case 2:
return check_box24919__2.call(this,name,checked_QMARK_);
case 3:
return check_box24919__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box24919.cljs$core$IFn$_invoke$arity$1 = check_box24919__1;
check_box24919.cljs$core$IFn$_invoke$arity$2 = check_box24919__2;
check_box24919.cljs$core$IFn$_invoke$arity$3 = check_box24919__3;
return check_box24919;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box24919);
/**
* Creates a radio button.
*/
sablono.core.radio_button24925 = (function() {
var radio_button24925 = null;
var radio_button24925__1 = (function (group){
return radio_button24925.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button24925__2 = (function (group,checked_QMARK_){
return radio_button24925.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button24925__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$108,"radio",cljs.core.constant$keyword$136,sablono.core.make_name(group),cljs.core.constant$keyword$122,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$103,value,cljs.core.constant$keyword$137,checked_QMARK_], null)], null);
});
radio_button24925 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button24925__1.call(this,group);
case 2:
return radio_button24925__2.call(this,group,checked_QMARK_);
case 3:
return radio_button24925__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button24925.cljs$core$IFn$_invoke$arity$1 = radio_button24925__1;
radio_button24925.cljs$core$IFn$_invoke$arity$2 = radio_button24925__2;
radio_button24925.cljs$core$IFn$_invoke$arity$3 = radio_button24925__3;
return radio_button24925;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button24925);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options24931 = (function() {
var select_options24931 = null;
var select_options24931__1 = (function (coll){
return select_options24931.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options24931__2 = (function (coll,selected){
var iter__4528__auto__ = (function iter__24952(s__24953){
return (new cljs.core.LazySeq(null,(function (){
var s__24953__$1 = s__24953;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24953__$1);
if(temp__4126__auto__){
var s__24953__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24953__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__24953__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__24955 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__24954 = (0);
while(true){
if((i__24954 < size__4527__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__24954);
cljs.core.chunk_append(b__24955,((cljs.core.sequential_QMARK_(x))?(function (){var vec__24960 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24960,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24960,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24960,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$139,text], null),select_options24931.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$103,val,cljs.core.constant$keyword$140,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$141,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$140,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__24962 = (i__24954 + (1));
i__24954 = G__24962;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24955),iter__24952(cljs.core.chunk_rest(s__24953__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24955),null);
}
} else {
var x = cljs.core.first(s__24953__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__24961 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24961,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24961,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24961,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$139,text], null),select_options24931.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$103,val,cljs.core.constant$keyword$140,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$141,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$140,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__24952(cljs.core.rest(s__24953__$2)));
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
select_options24931 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options24931__1.call(this,coll);
case 2:
return select_options24931__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options24931.cljs$core$IFn$_invoke$arity$1 = select_options24931__1;
select_options24931.cljs$core$IFn$_invoke$arity$2 = select_options24931__2;
return select_options24931;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options24931);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down24963 = (function() {
var drop_down24963 = null;
var drop_down24963__2 = (function (name,options){
return drop_down24963.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down24963__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$142,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$136,sablono.core.make_name(name),cljs.core.constant$keyword$122,sablono.core.make_id(name)], null),(function (){var G__24969 = options;
var G__24970 = selected;
return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__24969,G__24970) : sablono.core.select_options.call(null,G__24969,G__24970));
})()], null);
});
drop_down24963 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down24963__2.call(this,name,options);
case 3:
return drop_down24963__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down24963.cljs$core$IFn$_invoke$arity$2 = drop_down24963__2;
drop_down24963.cljs$core$IFn$_invoke$arity$3 = drop_down24963__3;
return drop_down24963;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down24963);
/**
* Creates a text area element.
*/
sablono.core.text_area24971 = (function() {
var text_area24971 = null;
var text_area24971__1 = (function (name){
return text_area24971.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area24971__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$123,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$136,sablono.core.make_name(name),cljs.core.constant$keyword$122,sablono.core.make_id(name),cljs.core.constant$keyword$103,value], null)], null);
});
text_area24971 = function(name,value){
switch(arguments.length){
case 1:
return text_area24971__1.call(this,name);
case 2:
return text_area24971__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area24971.cljs$core$IFn$_invoke$arity$1 = text_area24971__1;
text_area24971.cljs$core$IFn$_invoke$arity$2 = text_area24971__2;
return text_area24971;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area24971);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label24974 = (function label24974(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$139,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$120,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label24974);
/**
* Creates a submit button.
*/
sablono.core.submit_button24975 = (function submit_button24975(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$108,"submit",cljs.core.constant$keyword$103,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button24975);
/**
* Creates a form reset button.
*/
sablono.core.reset_button24976 = (function reset_button24976(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$108,"reset",cljs.core.constant$keyword$103,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button24976);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to24977 = (function() { 
var form_to24977__delegate = function (p__24978,body){
var vec__24982 = p__24978;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24982,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24982,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$143,null,cljs.core.constant$keyword$144,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$146,method_str,cljs.core.constant$keyword$147,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$146,"POST",cljs.core.constant$keyword$147,action_uri], null),(function (){var G__24983 = "_method";
var G__24984 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__24983,G__24984) : sablono.core.hidden_field.call(null,G__24983,G__24984));
})()], null)),body));
};
var form_to24977 = function (p__24978,var_args){
var body = null;
if (arguments.length > 1) {
var G__24985__i = 0, G__24985__a = new Array(arguments.length -  1);
while (G__24985__i < G__24985__a.length) {G__24985__a[G__24985__i] = arguments[G__24985__i + 1]; ++G__24985__i;}
  body = new cljs.core.IndexedSeq(G__24985__a,0);
} 
return form_to24977__delegate.call(this,p__24978,body);};
form_to24977.cljs$lang$maxFixedArity = 1;
form_to24977.cljs$lang$applyTo = (function (arglist__24986){
var p__24978 = cljs.core.first(arglist__24986);
var body = cljs.core.rest(arglist__24986);
return form_to24977__delegate(p__24978,body);
});
form_to24977.cljs$core$IFn$_invoke$arity$variadic = form_to24977__delegate;
return form_to24977;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to24977);
