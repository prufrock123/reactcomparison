// Compiled by ClojureScript 0.0-2755 {}
goog.provide('clojure.walk');
goog.require('cljs.core');
/**
* Traverses form, an arbitrary data structure.  inner and outer are
* functions.  Applies inner to each element of form, building up a
* data structure of the same type, then applies outer to the result.
* Recognizes all Clojure data structures. Consumes seqs as with doall.
*/
clojure.walk.walk = (function walk(inner,outer,form){
if(cljs.core.seq_QMARK_(form)){
var G__24825 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__24825) : outer.call(null,G__24825));
} else {
if(cljs.core.coll_QMARK_(form)){
var G__24826 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__24826) : outer.call(null,G__24826));
} else {
var G__24827 = form;
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__24827) : outer.call(null,G__24827));

}
}
});
/**
* Performs a depth-first, post-order traversal of form.  Calls f on
* each sub-form, uses f's return value in place of the original.
* Recognizes all Clojure data structures. Consumes seqs as with doall.
*/
clojure.walk.postwalk = (function postwalk(f,form){
return clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(postwalk,f),f,form);
});
/**
* Like postwalk, but does pre-order traversal.
*/
clojure.walk.prewalk = (function prewalk(f,form){
return clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(prewalk,f),cljs.core.identity,(function (){var G__24829 = form;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24829) : f.call(null,G__24829));
})());
});
/**
* Recursively transforms all map keys from strings to keywords.
*/
clojure.walk.keywordize_keys = (function keywordize_keys(m){
var f = (function (p__24832){
var vec__24833 = p__24832;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24833,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24833,(1),null);
if(typeof k === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});
return clojure.walk.postwalk(((function (f){
return (function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,x));
} else {
return x;
}
});})(f))
,m);
});
/**
* Recursively transforms all map keys from keywords to strings.
*/
clojure.walk.stringify_keys = (function stringify_keys(m){
var f = (function (p__24836){
var vec__24837 = p__24836;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24837,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24837,(1),null);
if((k instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(k),v], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
});
return clojure.walk.postwalk(((function (f){
return (function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,x));
} else {
return x;
}
});})(f))
,m);
});
/**
* Recursively transforms form by replacing keys in smap with their
* values.  Like clojure/replace but works on any data structure.  Does
* replacement at the root of the tree first.
*/
clojure.walk.prewalk_replace = (function prewalk_replace(smap,form){
return clojure.walk.prewalk((function (x){
if(cljs.core.contains_QMARK_(smap,x)){
var G__24839 = x;
return (smap.cljs$core$IFn$_invoke$arity$1 ? smap.cljs$core$IFn$_invoke$arity$1(G__24839) : smap.call(null,G__24839));
} else {
return x;
}
}),form);
});
/**
* Recursively transforms form by replacing keys in smap with their
* values.  Like clojure/replace but works on any data structure.  Does
* replacement at the leaves of the tree first.
*/
clojure.walk.postwalk_replace = (function postwalk_replace(smap,form){
return clojure.walk.postwalk((function (x){
if(cljs.core.contains_QMARK_(smap,x)){
var G__24841 = x;
return (smap.cljs$core$IFn$_invoke$arity$1 ? smap.cljs$core$IFn$_invoke$arity$1(G__24841) : smap.call(null,G__24841));
} else {
return x;
}
}),form);
});
