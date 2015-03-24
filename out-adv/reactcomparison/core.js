// Compiled by ClojureScript 0.0-2755 {}
goog.provide('reactcomparison.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('clojure.browser.repl');
goog.require('sablono.core');
goog.require('quiescent');
reactcomparison.core.$ = jQuery;
reactcomparison.core.click = goog.events.EventType.CLICK;
cljs.core.enable_console_print_BANG_();
/**
* Log a Clojure thing.
*/
reactcomparison.core.log = (function log(clj_thing){
var G__67420 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clj_thing], 0));
return console.log(G__67420);
});
/**
* Log a JavaScript thing.
*/
reactcomparison.core.js_log = (function js_log(js_thing){
var G__67422 = js_thing;
return console.log(G__67422);
});
reactcomparison.core.by_id = (function by_id(id){
return document.getElementById(id);
});
reactcomparison.core.set_html_BANG_ = (function set_html_BANG_(id,html){
return (reactcomparison.core.by_id(id)["innerHTML"] = html);
});
reactcomparison.core.commentData = (function (){var G__67423 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$159,"Pete Hunt",cljs.core.constant$keyword$160,"Comment 1"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$159,"Jordan Walke",cljs.core.constant$keyword$160,"Comment 2"], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__67423) : cljs.core.atom.call(null,G__67423));
})();
reactcomparison.core.load_comments_from_server = (function load_comments_from_server(url){
return null;
});
reactcomparison.core.Comment = (function Comment(data){
var G__67431 = {"className": "comment"};
var G__67432 = (function (){var attrs67429 = cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs67429))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commentAuthor"], null)], null),attrs67429], 0))):{"className": "commentAuthor"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67429))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67429)], null))));
})();
var G__67433 = (function (){var attrs67430 = cljs.core.constant$keyword$160.cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs67430))?sablono.interpreter.attributes(attrs67430):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67430))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67430)], null))));
})();
return React.DOM.div(G__67431,G__67432,G__67433);
});
reactcomparison.core.CommentForm = (function CommentForm(url){
var G__67445 = {"className": "commentForm"};
var G__67446 = (function (){var G__67449 = {"type": "text", "placeholder": "Your name"};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__67449) : sablono.interpreter.input.call(null,G__67449));
})();
var G__67447 = (function (){var G__67450 = {"type": "text", "placeholder": "Say something..."};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__67450) : sablono.interpreter.input.call(null,G__67450));
})();
var G__67448 = (function (){var G__67451 = {"type": "submit"};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__67451) : sablono.interpreter.input.call(null,G__67451));
})();
return React.DOM.form(G__67445,G__67446,G__67447,G__67448);
});
reactcomparison.core.CommentList = (function CommentList(the_atom){
var attrs67454 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.Comment,(function (){var G__67455 = the_atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67455) : cljs.core.deref.call(null,G__67455));
})()));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs67454))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commentList"], null)], null),attrs67454], 0))):{"className": "commentList"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67454))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67454)], null))));
});
reactcomparison.core.CommentBox = (function CommentBox(the_atom){
var attrs67457 = reactcomparison.core.CommentList(the_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs67457))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CommentBox","example"], null)], null),attrs67457], 0))):{"className": "CommentBox example"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67457))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(reactcomparison.core.CommentForm())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67457),sablono.interpreter.interpret(reactcomparison.core.CommentForm())], null))));
});
reactcomparison.core.DivExample = (function DivExample(){
var G__67466 = {"className": "divExample example"};
var G__67467 = (function (){var G__67468 = null;
var G__67469 = "Here is a sample div with a nested p tag.";
return React.DOM.p(G__67468,G__67469);
})();
return React.DOM.div(G__67466,G__67467);
});
reactcomparison.core.HeaderExample = (function HeaderExample(){
var G__67493 = {"className": "headerExample example"};
var G__67494 = (function (){var G__67500 = null;
var G__67501 = "Header 1";
return React.DOM.h1(G__67500,G__67501);
})();
var G__67495 = (function (){var G__67502 = null;
var G__67503 = "Header 2";
return React.DOM.h2(G__67502,G__67503);
})();
var G__67496 = (function (){var G__67504 = null;
var G__67505 = "Header 3";
return React.DOM.h3(G__67504,G__67505);
})();
var G__67497 = (function (){var G__67506 = null;
var G__67507 = "Header 4";
return React.DOM.h4(G__67506,G__67507);
})();
var G__67498 = (function (){var G__67508 = null;
var G__67509 = "Header 5";
return React.DOM.h5(G__67508,G__67509);
})();
var G__67499 = (function (){var G__67510 = null;
var G__67511 = "Header 6";
return React.DOM.h6(G__67510,G__67511);
})();
return React.DOM.div(G__67493,G__67494,G__67495,G__67496,G__67497,G__67498,G__67499);
});
reactcomparison.core.tab_data = new cljs.core.PersistentArrayMap(null, 3, ["managers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"President Business",cljs.core.constant$keyword$162,"1 billion"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Dilbert",cljs.core.constant$keyword$162,"2"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Gordon Gecko",cljs.core.constant$keyword$162,"$$$"], null)], null),"designers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Frank Llyod Wright",cljs.core.constant$keyword$162,"100"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Andy Warhol",cljs.core.constant$keyword$162,"200"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Kim Kardashian",cljs.core.constant$keyword$162,"25"], null)], null),"developers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Kevin",cljs.core.constant$keyword$162,"1 million"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Lesley",cljs.core.constant$keyword$162,"1 million"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Scott",cljs.core.constant$keyword$162,"1 million"], null)], null)], null);
reactcomparison.core.click_tab = (function click_tab(js_evt,value){
js_evt.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.application_state_atom,cljs.core.assoc,cljs.core.constant$keyword$163,value);
});
reactcomparison.core.Tabs = (function Tabs(active_tab){
var G__67543 = {"className": "tabs"};
var G__67544 = (function (){var G__67547 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"managers"))?" active":null))].join(''), "id": "managers", "onClick": ((function (G__67543){
return (function (p1__67512_SHARP_){
return reactcomparison.core.click_tab(p1__67512_SHARP_,"managers");
});})(G__67543))
};
var G__67548 = (function (){var G__67549 = {"className": "tab-link", "href": "#managers"};
var G__67550 = "Managers";
return React.DOM.a(G__67549,G__67550);
})();
return React.DOM.li(G__67547,G__67548);
})();
var G__67545 = (function (){var G__67551 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"designers"))?" active":null))].join(''), "id": "designers", "onClick": ((function (G__67543,G__67544){
return (function (p1__67513_SHARP_){
return reactcomparison.core.click_tab(p1__67513_SHARP_,"designers");
});})(G__67543,G__67544))
};
var G__67552 = (function (){var G__67553 = {"className": "tab-link", "href": "#designers"};
var G__67554 = "Designers";
return React.DOM.a(G__67553,G__67554);
})();
return React.DOM.li(G__67551,G__67552);
})();
var G__67546 = (function (){var G__67555 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"developers"))?" active":null))].join(''), "id": "developers", "onClick": ((function (G__67543,G__67544,G__67545){
return (function (p1__67514_SHARP_){
return reactcomparison.core.click_tab(p1__67514_SHARP_,"developers");
});})(G__67543,G__67544,G__67545))
};
var G__67556 = (function (){var G__67557 = {"className": "tab-link", "href": "#developers"};
var G__67558 = "Developers";
return React.DOM.a(G__67557,G__67558);
})();
return React.DOM.li(G__67555,G__67556);
})();
return React.DOM.ul(G__67543,G__67544,G__67545,G__67546);
});
reactcomparison.core.TabList = (function TabList(active_tab){
var G__67561 = {"className": "tabList"};
var G__67562 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.TabListItems,cljs.core.get.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.tab_data,active_tab)));
return React.DOM.ol(G__67561,G__67562);
});
reactcomparison.core.TabListItems = (function TabListItems(data){
var G__67577 = null;
var G__67578 = (function (){var G__67579 = {"className": "tab-list-link"};
var G__67580 = (function (){var G__67583 = {"src": "http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon"};
return React.DOM.img(G__67583);
})();
var G__67581 = sablono.interpreter.interpret(cljs.core.constant$keyword$161.cljs$core$IFn$_invoke$arity$1(data));
var G__67582 = (function (){var G__67584 = null;
var G__67585 = " Followers: ";
var G__67586 = sablono.interpreter.interpret(cljs.core.constant$keyword$162.cljs$core$IFn$_invoke$arity$1(data));
return React.DOM.span(G__67584,G__67585,G__67586);
})();
return React.DOM.a(G__67579,G__67580,G__67581,G__67582);
})();
return React.DOM.li(G__67577,G__67578);
});
reactcomparison.core.TabsExample = (function TabsExample(state){
var attrs67588 = reactcomparison.core.Tabs(cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs67588))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tabsExample"], null)], null),attrs67588], 0))):{"className": "tabsExample"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67588))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(reactcomparison.core.TabList(cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(state)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67588),sablono.interpreter.interpret(reactcomparison.core.TabList(cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(state)))], null))));
});
reactcomparison.core.click_like = (function click_like(e){
var liked_QMARK_ = cljs.core.constant$keyword$164.cljs$core$IFn$_invoke$arity$1((function (){var G__67590 = reactcomparison.core.application_state_atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67590) : cljs.core.deref.call(null,G__67590));
})());
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.application_state_atom,cljs.core.assoc,cljs.core.constant$keyword$164,cljs.core.not(liked_QMARK_));
});
/**
* 
*/
reactcomparison.core.LikeButton = quiescent.component((function (state){
var G__67592 = {"onClick": (function (p1__67591_SHARP_){
return reactcomparison.core.click_like(p1__67591_SHARP_);
})};
var G__67593 = sablono.interpreter.interpret([cljs.core.str("You "),cljs.core.str(((cljs.core.constant$keyword$164.cljs$core$IFn$_invoke$arity$1(state) === true)?"like ":"haven't liked ")),cljs.core.str("this")].join(''));
return React.DOM.p(G__67592,G__67593);
}));
reactcomparison.core.F__GT_C = (function F__GT_C(tf){
return (((5) / (9)) * (tf - (32)));
});
reactcomparison.core.F__GT_K = (function F__GT_K(tf){
return (((tf - (32)) / 1.8) + 273.15);
});
reactcomparison.core.C__GT_F = (function C__GT_F(tc){
return ((((9) / (5)) * tc) + (32));
});
reactcomparison.core.C__GT_K = (function C__GT_K(tc){
return (273.15 + tc);
});
reactcomparison.core.K__GT_C = (function K__GT_C(tk){
return (tk - 273.15);
});
reactcomparison.core.K__GT_F = (function K__GT_F(tk){
return (((tk - 273.15) * 1.8) + (32));
});
/**
* Given a keyword 'kwd' of :C, :F, or :K, returns a map of temperature 'v' for all temperature formats.
*/
reactcomparison.core.convert_temps = (function convert_temps(kwd,v){
var G__67595 = (((kwd instanceof cljs.core.Keyword))?kwd.fqn:null);
switch (G__67595) {
case "K":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$165,v,cljs.core.constant$keyword$166,reactcomparison.core.K__GT_F(v),cljs.core.constant$keyword$167,reactcomparison.core.K__GT_C(v)], null);

break;
case "F":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$166,v,cljs.core.constant$keyword$167,reactcomparison.core.F__GT_C(v),cljs.core.constant$keyword$165,reactcomparison.core.F__GT_K(v)], null);

break;
case "C":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$167,v,cljs.core.constant$keyword$166,reactcomparison.core.C__GT_F(v),cljs.core.constant$keyword$165,reactcomparison.core.C__GT_K(v)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(kwd)].join('')));

}
});
reactcomparison.core.on_change_input = (function on_change_input(temp_kwd,js_evt){
var new_value1 = (function (){var G__67599 = (js_evt["currentTarget"]["value"]);
return parseFloat(G__67599);
})();
var new_value2 = (cljs.core.truth_((function (){var G__67600 = new_value1;
return isNaN(G__67600);
})())?(0):new_value1);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reactcomparison.core.application_state_atom,cljs.core.merge,reactcomparison.core.convert_temps(temp_kwd,new_value2));
});
/**
* 
*/
reactcomparison.core.TextInput = quiescent.component((function (p__67602){
var vec__67603 = p__67602;
var temp_kwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67603,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67603,(1),null);
var attrs67604 = [cljs.core.str(cljs.core.name(temp_kwd)),cljs.core.str(": ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,((cljs.core.map_QMARK_(attrs67604))?sablono.interpreter.attributes(attrs67604):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67604))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67605 = {"onChange": ((function (attrs67604,vec__67603,temp_kwd,v){
return (function (p1__67601_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__67601_SHARP_);
});})(attrs67604,vec__67603,temp_kwd,v))
, "type": "text", "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__67605) : sablono.interpreter.input.call(null,G__67605));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67604),(function (){var G__67606 = {"onChange": ((function (attrs67604,vec__67603,temp_kwd,v){
return (function (p1__67601_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__67601_SHARP_);
});})(attrs67604,vec__67603,temp_kwd,v))
, "type": "text", "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__67606) : sablono.interpreter.input.call(null,G__67606));
})()], null))));
}));
/**
* 
*/
reactcomparison.core.RangeInput = quiescent.component((function (p__67608){
var vec__67609 = p__67608;
var temp_kwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67609,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67609,(1),null);
var attrs67610 = [cljs.core.str(cljs.core.name(temp_kwd)),cljs.core.str(": ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,((cljs.core.map_QMARK_(attrs67610))?sablono.interpreter.attributes(attrs67610):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67610))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67611 = {"min": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(temp_kwd,cljs.core.constant$keyword$165))?(0):(-450)), "max": (1000), "type": "range", "onChange": ((function (attrs67610,vec__67609,temp_kwd,v){
return (function (p1__67607_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__67607_SHARP_);
});})(attrs67610,vec__67609,temp_kwd,v))
, "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__67611) : sablono.interpreter.input.call(null,G__67611));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67610),(function (){var G__67612 = {"min": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(temp_kwd,cljs.core.constant$keyword$165))?(0):(-450)), "max": (1000), "type": "range", "onChange": ((function (attrs67610,vec__67609,temp_kwd,v){
return (function (p1__67607_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__67607_SHARP_);
});})(attrs67610,vec__67609,temp_kwd,v))
, "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__67612) : sablono.interpreter.input.call(null,G__67612));
})()], null))));
}));
/**
* 
*/
reactcomparison.core.TempCalcForm = quiescent.component((function (temps){
var G__67615 = null;
var G__67616 = (function (){var attrs67613 = (function (){var G__67618 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$167,cljs.core.constant$keyword$167.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__67618) : reactcomparison.core.TextInput.call(null,G__67618));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.fieldset,((cljs.core.map_QMARK_(attrs67613))?sablono.interpreter.attributes(attrs67613):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67613))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__67619 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__67619) : reactcomparison.core.TextInput.call(null,G__67619));
})()),sablono.interpreter.interpret((function (){var G__67620 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__67620) : reactcomparison.core.TextInput.call(null,G__67620));
})())], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67613),sablono.interpreter.interpret((function (){var G__67621 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__67621) : reactcomparison.core.TextInput.call(null,G__67621));
})()),sablono.interpreter.interpret((function (){var G__67622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__67622) : reactcomparison.core.TextInput.call(null,G__67622));
})())], null))));
})();
var G__67617 = (function (){var attrs67614 = (function (){var G__67623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$167,cljs.core.constant$keyword$167.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__67623) : reactcomparison.core.RangeInput.call(null,G__67623));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.fieldset,((cljs.core.map_QMARK_(attrs67614))?sablono.interpreter.attributes(attrs67614):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67614))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__67624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__67624) : reactcomparison.core.RangeInput.call(null,G__67624));
})()),sablono.interpreter.interpret((function (){var G__67625 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__67625) : reactcomparison.core.RangeInput.call(null,G__67625));
})())], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67614),sablono.interpreter.interpret((function (){var G__67626 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__67626) : reactcomparison.core.RangeInput.call(null,G__67626));
})()),sablono.interpreter.interpret((function (){var G__67627 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__67627) : reactcomparison.core.RangeInput.call(null,G__67627));
})())], null))));
})();
return React.DOM.div(G__67615,G__67616,G__67617);
}));
/**
* 
*/
reactcomparison.core.TempCalcContainer = quiescent.component((function (state){
var attrs67628 = (function (){var G__67629 = state;
return (reactcomparison.core.TempCalcForm.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TempCalcForm.cljs$core$IFn$_invoke$arity$1(G__67629) : reactcomparison.core.TempCalcForm.call(null,G__67629));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs67628))?sablono.interpreter.attributes(attrs67628):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67628))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67628)], null))));
}));
reactcomparison.core.prism_object = (window["Prism"]);
reactcomparison.core.comment_component = (reactcomparison.core.by_id("CLJScommentComponent")["innerHTML"]);
reactcomparison.core.simple_div_component = (reactcomparison.core.by_id("CLJSsimpleDivComponent")["innerHTML"]);
reactcomparison.core.header_component = (reactcomparison.core.by_id("CLJSheaderComponent")["innerHTML"]);
reactcomparison.core.like_button_component = (reactcomparison.core.by_id("CLJSlikeButtonComponent")["innerHTML"]);
reactcomparison.core.tab_component = (reactcomparison.core.by_id("CLJStabComponent")["innerHTML"]);
reactcomparison.core.temp_calc_component = (reactcomparison.core.by_id("CLJStempCalcComponent")["innerHTML"]);
reactcomparison.core.comment_component_snippet = reactcomparison.core.prism_object.highlight(reactcomparison.core.comment_component,(window["Prism"]["languages"]["clojure"]));
reactcomparison.core.simple_div_component_snippet = reactcomparison.core.prism_object.highlight(reactcomparison.core.simple_div_component,(window["Prism"]["languages"]["clojure"]));
reactcomparison.core.header_component_snippet = reactcomparison.core.prism_object.highlight(reactcomparison.core.header_component,(window["Prism"]["languages"]["clojure"]));
reactcomparison.core.like_button_component_snippet = reactcomparison.core.prism_object.highlight(reactcomparison.core.like_button_component,(window["Prism"]["languages"]["clojure"]));
reactcomparison.core.tab_component_snippet = reactcomparison.core.prism_object.highlight(reactcomparison.core.tab_component,(window["Prism"]["languages"]["clojure"]));
reactcomparison.core.temp_calc_component_snippet = reactcomparison.core.prism_object.highlight(reactcomparison.core.temp_calc_component,(window["Prism"]["languages"]["clojure"]));
/**
* 
*/
reactcomparison.core.RootComponent = quiescent.component((function (state){
var G__67666 = null;
var G__67667 = (function (){var G__67673 = {"className": "componentCLJS", "id": "CLJScommentComponentRender"};
var G__67674 = (function (){var G__67679 = null;
return React.DOM.hr(G__67679);
})();
var G__67675 = (function (){var G__67680 = null;
var G__67681 = "Comment Component";
return React.DOM.h4(G__67680,G__67681);
})();
var G__67676 = (function (){var G__67682 = null;
return React.DOM.hr(G__67682);
})();
var G__67677 = sablono.interpreter.interpret(reactcomparison.core.CommentBox(reactcomparison.core.commentData));
var G__67678 = (function (){var G__67683 = {"className": "language-clojure"};
var G__67684 = (function (){var G__67685 = {"className": "language-clojure", "dangerouslySetInnerHTML": {"__html": reactcomparison.core.comment_component_snippet}};
return React.DOM.code(G__67685);
})();
return React.DOM.pre(G__67683,G__67684);
})();
return React.DOM.div(G__67673,G__67674,G__67675,G__67676,G__67677,G__67678);
})();
var G__67668 = (function (){var G__67686 = {"className": "componentCLJS", "id": "CLJSsimpleDivComponentRender"};
var G__67687 = (function (){var G__67692 = null;
return React.DOM.hr(G__67692);
})();
var G__67688 = (function (){var G__67693 = null;
var G__67694 = "Simple Div Component";
return React.DOM.h4(G__67693,G__67694);
})();
var G__67689 = (function (){var G__67695 = null;
return React.DOM.hr(G__67695);
})();
var G__67690 = sablono.interpreter.interpret(reactcomparison.core.DivExample());
var G__67691 = (function (){var G__67696 = {"className": "language-clojure"};
var G__67697 = (function (){var G__67698 = {"className": "language-clojure", "dangerouslySetInnerHTML": {"__html": reactcomparison.core.simple_div_component_snippet}};
return React.DOM.code(G__67698);
})();
return React.DOM.pre(G__67696,G__67697);
})();
return React.DOM.div(G__67686,G__67687,G__67688,G__67689,G__67690,G__67691);
})();
var G__67669 = (function (){var G__67699 = {"className": "componentCLJS", "id": "CLJSheaderComponentRender"};
var G__67700 = (function (){var G__67705 = null;
return React.DOM.hr(G__67705);
})();
var G__67701 = (function (){var G__67706 = null;
var G__67707 = "Header Component";
return React.DOM.h4(G__67706,G__67707);
})();
var G__67702 = (function (){var G__67708 = null;
return React.DOM.hr(G__67708);
})();
var G__67703 = sablono.interpreter.interpret(reactcomparison.core.HeaderExample());
var G__67704 = (function (){var G__67709 = {"className": "language-clojure"};
var G__67710 = (function (){var G__67711 = {"className": "language-clojure", "dangerouslySetInnerHTML": {"__html": reactcomparison.core.header_component_snippet}};
return React.DOM.code(G__67711);
})();
return React.DOM.pre(G__67709,G__67710);
})();
return React.DOM.div(G__67699,G__67700,G__67701,G__67702,G__67703,G__67704);
})();
var G__67670 = (function (){var G__67712 = {"className": "componentCLJS", "id": "CLJSlikeButtonComponentRender"};
var G__67713 = (function (){var G__67718 = null;
return React.DOM.hr(G__67718);
})();
var G__67714 = (function (){var G__67719 = null;
var G__67720 = "Like Button Component";
return React.DOM.h4(G__67719,G__67720);
})();
var G__67715 = (function (){var G__67721 = null;
return React.DOM.hr(G__67721);
})();
var G__67716 = sablono.interpreter.interpret((function (){var G__67722 = state;
return (reactcomparison.core.LikeButton.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.LikeButton.cljs$core$IFn$_invoke$arity$1(G__67722) : reactcomparison.core.LikeButton.call(null,G__67722));
})());
var G__67717 = (function (){var G__67723 = {"className": "language-clojure"};
var G__67724 = (function (){var G__67725 = {"className": "language-clojure", "dangerouslySetInnerHTML": {"__html": reactcomparison.core.like_button_component_snippet}};
return React.DOM.code(G__67725);
})();
return React.DOM.pre(G__67723,G__67724);
})();
return React.DOM.div(G__67712,G__67713,G__67714,G__67715,G__67716,G__67717);
})();
var G__67671 = (function (){var G__67726 = {"className": "componentCLJS", "id": "CLJStabComponentRender"};
var G__67727 = (function (){var G__67732 = null;
return React.DOM.hr(G__67732);
})();
var G__67728 = (function (){var G__67733 = null;
var G__67734 = "Tab Component";
return React.DOM.h4(G__67733,G__67734);
})();
var G__67729 = (function (){var G__67735 = null;
return React.DOM.hr(G__67735);
})();
var G__67730 = sablono.interpreter.interpret(reactcomparison.core.TabsExample(state));
var G__67731 = (function (){var G__67736 = {"className": "language-clojure"};
var G__67737 = (function (){var G__67738 = {"className": "language-clojure", "dangerouslySetInnerHTML": {"__html": reactcomparison.core.tab_component_snippet}};
return React.DOM.code(G__67738);
})();
return React.DOM.pre(G__67736,G__67737);
})();
return React.DOM.div(G__67726,G__67727,G__67728,G__67729,G__67730,G__67731);
})();
var G__67672 = (function (){var G__67739 = {"className": "componentCLJS", "id": "CLJStempCalcComponentRender"};
var G__67740 = (function (){var G__67745 = null;
return React.DOM.hr(G__67745);
})();
var G__67741 = (function (){var G__67746 = null;
var G__67747 = "Temp Calc Component";
return React.DOM.h4(G__67746,G__67747);
})();
var G__67742 = (function (){var G__67748 = null;
return React.DOM.hr(G__67748);
})();
var G__67743 = sablono.interpreter.interpret((function (){var G__67749 = state;
return (reactcomparison.core.TempCalcContainer.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TempCalcContainer.cljs$core$IFn$_invoke$arity$1(G__67749) : reactcomparison.core.TempCalcContainer.call(null,G__67749));
})());
var G__67744 = (function (){var G__67750 = {"className": "language-clojure"};
var G__67751 = (function (){var G__67752 = {"className": "language-clojure", "dangerouslySetInnerHTML": {"__html": reactcomparison.core.temp_calc_component_snippet}};
return React.DOM.code(G__67752);
})();
return React.DOM.pre(G__67750,G__67751);
})();
return React.DOM.div(G__67739,G__67740,G__67741,G__67742,G__67743,G__67744);
})();
return React.DOM.div(G__67666,G__67667,G__67668,G__67669,G__67670,G__67671,G__67672);
}));
reactcomparison.core.application_state_atom = (function (){var G__67753 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$163,"managers",cljs.core.constant$keyword$164,false], null),reactcomparison.core.convert_temps(cljs.core.constant$keyword$167,(0))], 0));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__67753) : cljs.core.atom.call(null,G__67753));
})();
reactcomparison.core.container_el = reactcomparison.core.by_id("contentQuiescentSablono");
reactcomparison.core.on_change_state = (function on_change_state(_keyword,the_atom,old_state,new_state){
return quiescent.render((function (){var G__67755 = new_state;
return (reactcomparison.core.RootComponent.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RootComponent.cljs$core$IFn$_invoke$arity$1(G__67755) : reactcomparison.core.RootComponent.call(null,G__67755));
})(),reactcomparison.core.container_el);
});
cljs.core.add_watch(reactcomparison.core.application_state_atom,cljs.core.constant$keyword$168,reactcomparison.core.on_change_state);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.application_state_atom,cljs.core.identity);
