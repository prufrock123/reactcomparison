// Compiled by ClojureScript 0.0-2755 {}
goog.provide('clojure.browser.event');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.events.EventTarget');
goog.require('goog.events');

clojure.browser.event.IEventType = (function (){var obj18509 = {};
return obj18509;
})();

clojure.browser.event.event_types = (function event_types(this$){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.clojure$browser$event$IEventType$event_types$arity$1;
} else {
return and__3760__auto__;
}
})()){
return this$.clojure$browser$event$IEventType$event_types$arity$1(this$);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (clojure.browser.event.event_types[(function (){var G__18513 = x__4416__auto__;
return goog.typeOf(G__18513);
})()]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (clojure.browser.event.event_types["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol("IEventType.event-types",this$);
}
}
})().call(null,this$);
}
});

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$ = true;

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__18514){
var vec__18515 = p__18514;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18515,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18515,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.EventType)], 0))));
});
if(typeof Element !== 'undefined'){
Element.prototype.clojure$browser$event$IEventType$ = true;

Element.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__18516){
var vec__18517 = p__18516;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18517,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18517,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.EventType)], 0))));
});
} else {
}
clojure.browser.event.listen = (function() {
var listen = null;
var listen__3 = (function (src,type,fn){
return listen.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});
var listen__4 = (function (src,type,fn,capture_QMARK_){
var G__18526 = src;
var G__18527 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__18528 = fn;
var G__18529 = capture_QMARK_;
return goog.events.listen(G__18526,G__18527,G__18528,G__18529);
});
listen = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return listen__3.call(this,src,type,fn);
case 4:
return listen__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen.cljs$core$IFn$_invoke$arity$3 = listen__3;
listen.cljs$core$IFn$_invoke$arity$4 = listen__4;
return listen;
})()
;
clojure.browser.event.listen_once = (function() {
var listen_once = null;
var listen_once__3 = (function (src,type,fn){
return listen_once.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});
var listen_once__4 = (function (src,type,fn,capture_QMARK_){
var G__18538 = src;
var G__18539 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__18540 = fn;
var G__18541 = capture_QMARK_;
return goog.events.listenOnce(G__18538,G__18539,G__18540,G__18541);
});
listen_once = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return listen_once__3.call(this,src,type,fn);
case 4:
return listen_once__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once.cljs$core$IFn$_invoke$arity$3 = listen_once__3;
listen_once.cljs$core$IFn$_invoke$arity$4 = listen_once__4;
return listen_once;
})()
;
clojure.browser.event.unlisten = (function() {
var unlisten = null;
var unlisten__3 = (function (src,type,fn){
return unlisten.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});
var unlisten__4 = (function (src,type,fn,capture_QMARK_){
var G__18550 = src;
var G__18551 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__18552 = fn;
var G__18553 = capture_QMARK_;
return goog.events.unlisten(G__18550,G__18551,G__18552,G__18553);
});
unlisten = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return unlisten__3.call(this,src,type,fn);
case 4:
return unlisten__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten.cljs$core$IFn$_invoke$arity$3 = unlisten__3;
unlisten.cljs$core$IFn$_invoke$arity$4 = unlisten__4;
return unlisten;
})()
;
clojure.browser.event.unlisten_by_key = (function unlisten_by_key(key){
var G__18555 = key;
return goog.events.unlistenByKey(G__18555);
});
clojure.browser.event.dispatch_event = (function dispatch_event(src,event){
var G__18558 = src;
var G__18559 = event;
return goog.events.dispatchEvent(G__18558,G__18559);
});
clojure.browser.event.expose = (function expose(e){
var G__18561 = e;
return goog.events.expose(G__18561);
});
clojure.browser.event.fire_listeners = (function fire_listeners(obj,type,capture,event){
return null;
});
clojure.browser.event.total_listener_count = (function total_listener_count(){
return goog.events.getTotalListenerCount();
});
clojure.browser.event.get_listener = (function get_listener(src,type,listener,opt_capt,opt_handler){
return null;
});
clojure.browser.event.all_listeners = (function all_listeners(obj,type,capture){
return null;
});
clojure.browser.event.unique_event_id = (function unique_event_id(event_type){
return null;
});
clojure.browser.event.has_listener = (function has_listener(obj,opt_type,opt_capture){
return null;
});
clojure.browser.event.remove_all = (function remove_all(opt_obj,opt_type,opt_capt){
return null;
});
