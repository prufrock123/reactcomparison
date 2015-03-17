// Compiled by ClojureScript 0.0-2755 {}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function bubble_max_key(k,coll){

var max = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,k,coll);
return cljs.core.cons(max,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (max){
return (function (p1__24953_SHARP_){
return (max === p1__24953_SHARP_);
});})(max))
,coll));
});
/**
* Return a set that is the union of the input sets
* @param {...*} var_args
*/
clojure.set.union = (function() {
var union = null;
var union__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var union__1 = (function (s1){
return s1;
});
var union__2 = (function (s1,s2){
if((cljs.core.count(s1) < cljs.core.count(s2))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,s1,s2);
}
});
var union__3 = (function() { 
var G__24954__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key(cljs.core.count,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sets,s2,cljs.core.array_seq([s1], 0)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.first(bubbled_sets),cljs.core.rest(bubbled_sets));
};
var G__24954 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__24955__i = 0, G__24955__a = new Array(arguments.length -  2);
while (G__24955__i < G__24955__a.length) {G__24955__a[G__24955__i] = arguments[G__24955__i + 2]; ++G__24955__i;}
  sets = new cljs.core.IndexedSeq(G__24955__a,0);
} 
return G__24954__delegate.call(this,s1,s2,sets);};
G__24954.cljs$lang$maxFixedArity = 2;
G__24954.cljs$lang$applyTo = (function (arglist__24956){
var s1 = cljs.core.first(arglist__24956);
arglist__24956 = cljs.core.next(arglist__24956);
var s2 = cljs.core.first(arglist__24956);
var sets = cljs.core.rest(arglist__24956);
return G__24954__delegate(s1,s2,sets);
});
G__24954.cljs$core$IFn$_invoke$arity$variadic = G__24954__delegate;
return G__24954;
})()
;
union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 0:
return union__0.call(this);
case 1:
return union__1.call(this,s1);
case 2:
return union__2.call(this,s1,s2);
default:
var G__24957 = null;
if (arguments.length > 2) {
var G__24958__i = 0, G__24958__a = new Array(arguments.length -  2);
while (G__24958__i < G__24958__a.length) {G__24958__a[G__24958__i] = arguments[G__24958__i + 2]; ++G__24958__i;}
G__24957 = new cljs.core.IndexedSeq(G__24958__a,0);
}
return union__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__24957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
union.cljs$lang$maxFixedArity = 2;
union.cljs$lang$applyTo = union__3.cljs$lang$applyTo;
union.cljs$core$IFn$_invoke$arity$0 = union__0;
union.cljs$core$IFn$_invoke$arity$1 = union__1;
union.cljs$core$IFn$_invoke$arity$2 = union__2;
union.cljs$core$IFn$_invoke$arity$variadic = union__3.cljs$core$IFn$_invoke$arity$variadic;
return union;
})()
;
/**
* Return a set that is the intersection of the input sets
* @param {...*} var_args
*/
clojure.set.intersection = (function() {
var intersection = null;
var intersection__1 = (function (s1){
return s1;
});
var intersection__2 = (function (s1,s2){
while(true){
if((cljs.core.count(s2) < cljs.core.count(s1))){
var G__24960 = s2;
var G__24961 = s1;
s1 = G__24960;
s2 = G__24961;
continue;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_(s2,item)){
return result;
} else {
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});
var intersection__3 = (function() { 
var G__24962__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key((function (p1__24959_SHARP_){
return (- cljs.core.count(p1__24959_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sets,s2,cljs.core.array_seq([s1], 0)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(intersection,cljs.core.first(bubbled_sets),cljs.core.rest(bubbled_sets));
};
var G__24962 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__24963__i = 0, G__24963__a = new Array(arguments.length -  2);
while (G__24963__i < G__24963__a.length) {G__24963__a[G__24963__i] = arguments[G__24963__i + 2]; ++G__24963__i;}
  sets = new cljs.core.IndexedSeq(G__24963__a,0);
} 
return G__24962__delegate.call(this,s1,s2,sets);};
G__24962.cljs$lang$maxFixedArity = 2;
G__24962.cljs$lang$applyTo = (function (arglist__24964){
var s1 = cljs.core.first(arglist__24964);
arglist__24964 = cljs.core.next(arglist__24964);
var s2 = cljs.core.first(arglist__24964);
var sets = cljs.core.rest(arglist__24964);
return G__24962__delegate(s1,s2,sets);
});
G__24962.cljs$core$IFn$_invoke$arity$variadic = G__24962__delegate;
return G__24962;
})()
;
intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return intersection__1.call(this,s1);
case 2:
return intersection__2.call(this,s1,s2);
default:
var G__24965 = null;
if (arguments.length > 2) {
var G__24966__i = 0, G__24966__a = new Array(arguments.length -  2);
while (G__24966__i < G__24966__a.length) {G__24966__a[G__24966__i] = arguments[G__24966__i + 2]; ++G__24966__i;}
G__24965 = new cljs.core.IndexedSeq(G__24966__a,0);
}
return intersection__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__24965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
intersection.cljs$lang$maxFixedArity = 2;
intersection.cljs$lang$applyTo = intersection__3.cljs$lang$applyTo;
intersection.cljs$core$IFn$_invoke$arity$1 = intersection__1;
intersection.cljs$core$IFn$_invoke$arity$2 = intersection__2;
intersection.cljs$core$IFn$_invoke$arity$variadic = intersection__3.cljs$core$IFn$_invoke$arity$variadic;
return intersection;
})()
;
/**
* Return a set that is the first set without elements of the remaining sets
* @param {...*} var_args
*/
clojure.set.difference = (function() {
var difference = null;
var difference__1 = (function (s1){
return s1;
});
var difference__2 = (function (s1,s2){
if((cljs.core.count(s1) < cljs.core.count(s2))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,item){
if(cljs.core.contains_QMARK_(s2,item)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,s1,s2);
}
});
var difference__3 = (function() { 
var G__24967__delegate = function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(difference,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
};
var G__24967 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__24968__i = 0, G__24968__a = new Array(arguments.length -  2);
while (G__24968__i < G__24968__a.length) {G__24968__a[G__24968__i] = arguments[G__24968__i + 2]; ++G__24968__i;}
  sets = new cljs.core.IndexedSeq(G__24968__a,0);
} 
return G__24967__delegate.call(this,s1,s2,sets);};
G__24967.cljs$lang$maxFixedArity = 2;
G__24967.cljs$lang$applyTo = (function (arglist__24969){
var s1 = cljs.core.first(arglist__24969);
arglist__24969 = cljs.core.next(arglist__24969);
var s2 = cljs.core.first(arglist__24969);
var sets = cljs.core.rest(arglist__24969);
return G__24967__delegate(s1,s2,sets);
});
G__24967.cljs$core$IFn$_invoke$arity$variadic = G__24967__delegate;
return G__24967;
})()
;
difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return difference__1.call(this,s1);
case 2:
return difference__2.call(this,s1,s2);
default:
var G__24970 = null;
if (arguments.length > 2) {
var G__24971__i = 0, G__24971__a = new Array(arguments.length -  2);
while (G__24971__i < G__24971__a.length) {G__24971__a[G__24971__i] = arguments[G__24971__i + 2]; ++G__24971__i;}
G__24970 = new cljs.core.IndexedSeq(G__24971__a,0);
}
return difference__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__24970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
difference.cljs$lang$maxFixedArity = 2;
difference.cljs$lang$applyTo = difference__3.cljs$lang$applyTo;
difference.cljs$core$IFn$_invoke$arity$1 = difference__1;
difference.cljs$core$IFn$_invoke$arity$2 = difference__2;
difference.cljs$core$IFn$_invoke$arity$variadic = difference__3.cljs$core$IFn$_invoke$arity$variadic;
return difference;
})()
;
/**
* Returns a set of the elements for which pred is true
*/
clojure.set.select = (function select(pred,xset){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){
if(cljs.core.truth_((function (){var G__24973 = k;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__24973) : pred.call(null,G__24973));
})())){
return s;
} else {
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(s,k);
}
}),xset,xset);
});
/**
* Returns a rel of the elements of xrel with only the keys in ks
*/
clojure.set.project = (function project(xrel,ks){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24974_SHARP_){
return cljs.core.select_keys(p1__24974_SHARP_,ks);
}),xrel));
});
/**
* Returns the map with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename_keys = (function rename_keys(map,kmap){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__24977){
var vec__24978 = p__24977;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24978,(0),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24978,(1),null);
if(cljs.core.contains_QMARK_(map,old)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new$,cljs.core.get.cljs$core$IFn$_invoke$arity$2(map,old));
} else {
return m;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,map,cljs.core.keys(kmap)),kmap);
});
/**
* Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename = (function rename(xrel,kmap){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24979_SHARP_){
return clojure.set.rename_keys(p1__24979_SHARP_,kmap);
}),xrel));
});
/**
* Returns a map of the distinct values of ks in the xrel mapped to a
* set of the maps in xrel with the corresponding values of ks.
*/
clojure.set.index = (function index(xrel,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,x){
var ik = cljs.core.select_keys(x,ks);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,ik,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
* Returns the map with the vals mapped to the keys.
*/
clojure.set.map_invert = (function map_invert(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__24982){
var vec__24983 = p__24982;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24983,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24983,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
* When passed 2 rels, returns the rel corresponding to the natural
* join. When passed an additional keymap, joins on the corresponding
* keys.
*/
clojure.set.join = (function() {
var join = null;
var join__2 = (function (xrel,yrel){
if((cljs.core.seq(xrel)) && (cljs.core.seq(yrel))){
var ks = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs.core.first(xrel))),cljs.core.set(cljs.core.keys(cljs.core.first(yrel))));
var vec__24992 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24992,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24992,(1),null);
var idx = clojure.set.index(r,ks);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks,vec__24992,r,s,idx){
return (function (ret,x){
var found = (function (){var G__24993 = cljs.core.select_keys(x,ks);
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__24993) : idx.call(null,G__24993));
})();
if(cljs.core.truth_(found)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (found,ks,vec__24992,r,s,idx){
return (function (p1__24984_SHARP_,p2__24985_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24984_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__24985_SHARP_,x], 0)));
});})(found,ks,vec__24992,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__24992,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
var join__3 = (function (xrel,yrel,km){
var vec__24994 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert(km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24994,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24994,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24994,(2),null);
var idx = clojure.set.index(r,cljs.core.vals(k));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__24994,r,s,k,idx){
return (function (ret,x){
var found = (function (){var G__24995 = clojure.set.rename_keys(cljs.core.select_keys(x,cljs.core.keys(k)),k);
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__24995) : idx.call(null,G__24995));
})();
if(cljs.core.truth_(found)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (found,vec__24994,r,s,k,idx){
return (function (p1__24986_SHARP_,p2__24987_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24986_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__24987_SHARP_,x], 0)));
});})(found,vec__24994,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__24994,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});
join = function(xrel,yrel,km){
switch(arguments.length){
case 2:
return join__2.call(this,xrel,yrel);
case 3:
return join__3.call(this,xrel,yrel,km);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
join.cljs$core$IFn$_invoke$arity$2 = join__2;
join.cljs$core$IFn$_invoke$arity$3 = join__3;
return join;
})()
;
/**
* Is set1 a subset of set2?
*/
clojure.set.subset_QMARK_ = (function subset_QMARK_(set1,set2){
return ((cljs.core.count(set1) <= cljs.core.count(set2))) && (cljs.core.every_QMARK_((function (p1__24996_SHARP_){
return cljs.core.contains_QMARK_(set2,p1__24996_SHARP_);
}),set1));
});
/**
* Is set1 a superset of set2?
*/
clojure.set.superset_QMARK_ = (function superset_QMARK_(set1,set2){
return ((cljs.core.count(set1) >= cljs.core.count(set2))) && (cljs.core.every_QMARK_((function (p1__24997_SHARP_){
return cljs.core.contains_QMARK_(set1,p1__24997_SHARP_);
}),set2));
});
