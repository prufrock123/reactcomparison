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
var G__66987 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clj_thing], 0));
return console.log(G__66987);
});
/**
* Log a JavaScript thing.
*/
reactcomparison.core.js_log = (function js_log(js_thing){
var G__66989 = js_thing;
return console.log(G__66989);
});
reactcomparison.core.by_id = (function by_id(id){
return document.getElementById(id);
});
reactcomparison.core.set_html_BANG_ = (function set_html_BANG_(id,html){
return (reactcomparison.core.by_id(id)["innerHTML"] = html);
});
reactcomparison.core.commentData = (function (){var G__66990 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$159,"Pete Hunt",cljs.core.constant$keyword$160,"Comment 1"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$159,"Jordan Walke",cljs.core.constant$keyword$160,"Comment 2"], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__66990) : cljs.core.atom.call(null,G__66990));
})();
reactcomparison.core.load_comments_from_server = (function load_comments_from_server(url){
return null;
});
reactcomparison.core.Comment = (function Comment(data){
var G__66998 = {"className": "comment"};
var G__66999 = (function (){var attrs66996 = cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs66996))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commentAuthor"], null)], null),attrs66996], 0))):{"className": "commentAuthor"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs66996))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs66996)], null))));
})();
var G__67000 = (function (){var attrs66997 = cljs.core.constant$keyword$160.cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs66997))?sablono.interpreter.attributes(attrs66997):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs66997))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs66997)], null))));
})();
return React.DOM.div(G__66998,G__66999,G__67000);
});
reactcomparison.core.CommentForm = (function CommentForm(url){
var G__67012 = {"className": "commentForm"};
var G__67013 = (function (){var G__67016 = {"type": "text", "placeholder": "Your name"};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__67016) : sablono.interpreter.input.call(null,G__67016));
})();
var G__67014 = (function (){var G__67017 = {"type": "text", "placeholder": "Say something..."};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__67017) : sablono.interpreter.input.call(null,G__67017));
})();
var G__67015 = (function (){var G__67018 = {"type": "submit"};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__67018) : sablono.interpreter.input.call(null,G__67018));
})();
return React.DOM.form(G__67012,G__67013,G__67014,G__67015);
});
reactcomparison.core.CommentList = (function CommentList(the_atom){
var attrs67021 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.Comment,(function (){var G__67022 = the_atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67022) : cljs.core.deref.call(null,G__67022));
})()));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs67021))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commentList"], null)], null),attrs67021], 0))):{"className": "commentList"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67021))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67021)], null))));
});
reactcomparison.core.CommentBox = (function CommentBox(the_atom){
var attrs67024 = reactcomparison.core.CommentList(the_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs67024))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CommentBox","example"], null)], null),attrs67024], 0))):{"className": "CommentBox example"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67024))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(reactcomparison.core.CommentForm())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67024),sablono.interpreter.interpret(reactcomparison.core.CommentForm())], null))));
});
reactcomparison.core.DivExample = (function DivExample(){
var G__67033 = {"className": "divExample example"};
var G__67034 = (function (){var G__67035 = null;
var G__67036 = "Here is a sample div with a nested p tag.";
return React.DOM.p(G__67035,G__67036);
})();
return React.DOM.div(G__67033,G__67034);
});
reactcomparison.core.HeaderExample = (function HeaderExample(){
var G__67060 = {"className": "headerExample example"};
var G__67061 = (function (){var G__67067 = null;
var G__67068 = "Header 1";
return React.DOM.h1(G__67067,G__67068);
})();
var G__67062 = (function (){var G__67069 = null;
var G__67070 = "Header 2";
return React.DOM.h2(G__67069,G__67070);
})();
var G__67063 = (function (){var G__67071 = null;
var G__67072 = "Header 3";
return React.DOM.h3(G__67071,G__67072);
})();
var G__67064 = (function (){var G__67073 = null;
var G__67074 = "Header 4";
return React.DOM.h4(G__67073,G__67074);
})();
var G__67065 = (function (){var G__67075 = null;
var G__67076 = "Header 5";
return React.DOM.h5(G__67075,G__67076);
})();
var G__67066 = (function (){var G__67077 = null;
var G__67078 = "Header 6";
return React.DOM.h6(G__67077,G__67078);
})();
return React.DOM.div(G__67060,G__67061,G__67062,G__67063,G__67064,G__67065,G__67066);
});
reactcomparison.core.tab_data = new cljs.core.PersistentArrayMap(null, 3, ["managers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"President Business",cljs.core.constant$keyword$162,"1 billion"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Dilbert",cljs.core.constant$keyword$162,"2"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Gordon Gecko",cljs.core.constant$keyword$162,"$$$"], null)], null),"designers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Frank Llyod Wright",cljs.core.constant$keyword$162,"100"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Andy Warhol",cljs.core.constant$keyword$162,"200"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Kim Kardashian",cljs.core.constant$keyword$162,"25"], null)], null),"developers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Kevin",cljs.core.constant$keyword$162,"1 million"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Lesley",cljs.core.constant$keyword$162,"1 million"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Scott",cljs.core.constant$keyword$162,"1 million"], null)], null)], null);
reactcomparison.core.click_tab = (function click_tab(js_evt,value){
js_evt.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.application_state_atom,cljs.core.assoc,cljs.core.constant$keyword$163,value);
});
reactcomparison.core.Tabs = (function Tabs(active_tab){
var G__67110 = {"className": "tabs"};
var G__67111 = (function (){var G__67114 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"managers"))?" active":null))].join(''), "id": "managers", "onClick": ((function (G__67110){
return (function (p1__67079_SHARP_){
return reactcomparison.core.click_tab(p1__67079_SHARP_,"managers");
});})(G__67110))
};
var G__67115 = (function (){var G__67116 = {"className": "tab-link", "href": "#managers"};
var G__67117 = "Managers";
return React.DOM.a(G__67116,G__67117);
})();
return React.DOM.li(G__67114,G__67115);
})();
var G__67112 = (function (){var G__67118 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"designers"))?" active":null))].join(''), "id": "designers", "onClick": ((function (G__67110,G__67111){
return (function (p1__67080_SHARP_){
return reactcomparison.core.click_tab(p1__67080_SHARP_,"designers");
});})(G__67110,G__67111))
};
var G__67119 = (function (){var G__67120 = {"className": "tab-link", "href": "#designers"};
var G__67121 = "Designers";
return React.DOM.a(G__67120,G__67121);
})();
return React.DOM.li(G__67118,G__67119);
})();
var G__67113 = (function (){var G__67122 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"developers"))?" active":null))].join(''), "id": "developers", "onClick": ((function (G__67110,G__67111,G__67112){
return (function (p1__67081_SHARP_){
return reactcomparison.core.click_tab(p1__67081_SHARP_,"developers");
});})(G__67110,G__67111,G__67112))
};
var G__67123 = (function (){var G__67124 = {"className": "tab-link", "href": "#developers"};
var G__67125 = "Developers";
return React.DOM.a(G__67124,G__67125);
})();
return React.DOM.li(G__67122,G__67123);
})();
return React.DOM.ul(G__67110,G__67111,G__67112,G__67113);
});
reactcomparison.core.TabList = (function TabList(active_tab){
var G__67128 = {"className": "tabList"};
var G__67129 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.TabListItems,cljs.core.get.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.tab_data,active_tab)));
return React.DOM.ol(G__67128,G__67129);
});
reactcomparison.core.TabListItems = (function TabListItems(data){
var G__67144 = null;
var G__67145 = (function (){var G__67146 = {"className": "tab-list-link"};
var G__67147 = (function (){var G__67150 = {"src": "http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon"};
return React.DOM.img(G__67150);
})();
var G__67148 = sablono.interpreter.interpret(cljs.core.constant$keyword$161.cljs$core$IFn$_invoke$arity$1(data));
var G__67149 = (function (){var G__67151 = null;
var G__67152 = " Followers: ";
var G__67153 = sablono.interpreter.interpret(cljs.core.constant$keyword$162.cljs$core$IFn$_invoke$arity$1(data));
return React.DOM.span(G__67151,G__67152,G__67153);
})();
return React.DOM.a(G__67146,G__67147,G__67148,G__67149);
})();
return React.DOM.li(G__67144,G__67145);
});
reactcomparison.core.TabsExample = (function TabsExample(state){
var attrs67155 = reactcomparison.core.Tabs(cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs67155))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tabsExample"], null)], null),attrs67155], 0))):{"className": "tabsExample"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67155))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(reactcomparison.core.TabList(cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(state)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67155),sablono.interpreter.interpret(reactcomparison.core.TabList(cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(state)))], null))));
});
reactcomparison.core.click_like = (function click_like(e){
var liked_QMARK_ = cljs.core.constant$keyword$164.cljs$core$IFn$_invoke$arity$1((function (){var G__67157 = reactcomparison.core.application_state_atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67157) : cljs.core.deref.call(null,G__67157));
})());
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.application_state_atom,cljs.core.assoc,cljs.core.constant$keyword$164,cljs.core.not(liked_QMARK_));
});
/**
* 
*/
reactcomparison.core.LikeButton = quiescent.component((function (state){
var G__67159 = {"onClick": (function (p1__67158_SHARP_){
return reactcomparison.core.click_like(p1__67158_SHARP_);
})};
var G__67160 = sablono.interpreter.interpret([cljs.core.str("You "),cljs.core.str(((cljs.core.constant$keyword$164.cljs$core$IFn$_invoke$arity$1(state) === true)?"like ":"haven't liked ")),cljs.core.str("this")].join(''));
return React.DOM.p(G__67159,G__67160);
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
var G__67162 = (((kwd instanceof cljs.core.Keyword))?kwd.fqn:null);
switch (G__67162) {
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
var new_value1 = (function (){var G__67166 = (js_evt["currentTarget"]["value"]);
return parseFloat(G__67166);
})();
var new_value2 = (cljs.core.truth_((function (){var G__67167 = new_value1;
return isNaN(G__67167);
})())?(0):new_value1);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reactcomparison.core.application_state_atom,cljs.core.merge,reactcomparison.core.convert_temps(temp_kwd,new_value2));
});
/**
* 
*/
reactcomparison.core.TextInput = quiescent.component((function (p__67169){
var vec__67170 = p__67169;
var temp_kwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67170,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67170,(1),null);
var attrs67171 = [cljs.core.str(cljs.core.name(temp_kwd)),cljs.core.str(": ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,((cljs.core.map_QMARK_(attrs67171))?sablono.interpreter.attributes(attrs67171):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67171))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67172 = {"onChange": ((function (attrs67171,vec__67170,temp_kwd,v){
return (function (p1__67168_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__67168_SHARP_);
});})(attrs67171,vec__67170,temp_kwd,v))
, "type": "text", "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__67172) : sablono.interpreter.input.call(null,G__67172));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67171),(function (){var G__67173 = {"onChange": ((function (attrs67171,vec__67170,temp_kwd,v){
return (function (p1__67168_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__67168_SHARP_);
});})(attrs67171,vec__67170,temp_kwd,v))
, "type": "text", "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__67173) : sablono.interpreter.input.call(null,G__67173));
})()], null))));
}));
/**
* 
*/
reactcomparison.core.RangeInput = quiescent.component((function (p__67175){
var vec__67176 = p__67175;
var temp_kwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67176,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67176,(1),null);
var attrs67177 = [cljs.core.str(cljs.core.name(temp_kwd)),cljs.core.str(": ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,((cljs.core.map_QMARK_(attrs67177))?sablono.interpreter.attributes(attrs67177):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67177))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67178 = {"min": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(temp_kwd,cljs.core.constant$keyword$165))?(0):(-450)), "max": (1000), "type": "range", "onChange": ((function (attrs67177,vec__67176,temp_kwd,v){
return (function (p1__67174_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__67174_SHARP_);
});})(attrs67177,vec__67176,temp_kwd,v))
, "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__67178) : sablono.interpreter.input.call(null,G__67178));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67177),(function (){var G__67179 = {"min": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(temp_kwd,cljs.core.constant$keyword$165))?(0):(-450)), "max": (1000), "type": "range", "onChange": ((function (attrs67177,vec__67176,temp_kwd,v){
return (function (p1__67174_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__67174_SHARP_);
});})(attrs67177,vec__67176,temp_kwd,v))
, "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__67179) : sablono.interpreter.input.call(null,G__67179));
})()], null))));
}));
/**
* 
*/
reactcomparison.core.TempCalcForm = quiescent.component((function (temps){
var G__67182 = null;
var G__67183 = (function (){var attrs67180 = (function (){var G__67185 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$167,cljs.core.constant$keyword$167.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__67185) : reactcomparison.core.TextInput.call(null,G__67185));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.fieldset,((cljs.core.map_QMARK_(attrs67180))?sablono.interpreter.attributes(attrs67180):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67180))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__67186 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__67186) : reactcomparison.core.TextInput.call(null,G__67186));
})()),sablono.interpreter.interpret((function (){var G__67187 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__67187) : reactcomparison.core.TextInput.call(null,G__67187));
})())], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67180),sablono.interpreter.interpret((function (){var G__67188 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__67188) : reactcomparison.core.TextInput.call(null,G__67188));
})()),sablono.interpreter.interpret((function (){var G__67189 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__67189) : reactcomparison.core.TextInput.call(null,G__67189));
})())], null))));
})();
var G__67184 = (function (){var attrs67181 = (function (){var G__67190 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$167,cljs.core.constant$keyword$167.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__67190) : reactcomparison.core.RangeInput.call(null,G__67190));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.fieldset,((cljs.core.map_QMARK_(attrs67181))?sablono.interpreter.attributes(attrs67181):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67181))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__67191 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__67191) : reactcomparison.core.RangeInput.call(null,G__67191));
})()),sablono.interpreter.interpret((function (){var G__67192 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__67192) : reactcomparison.core.RangeInput.call(null,G__67192));
})())], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67181),sablono.interpreter.interpret((function (){var G__67193 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__67193) : reactcomparison.core.RangeInput.call(null,G__67193));
})()),sablono.interpreter.interpret((function (){var G__67194 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__67194) : reactcomparison.core.RangeInput.call(null,G__67194));
})())], null))));
})();
return React.DOM.div(G__67182,G__67183,G__67184);
}));
/**
* 
*/
reactcomparison.core.TempCalcContainer = quiescent.component((function (state){
var attrs67195 = (function (){var G__67196 = state;
return (reactcomparison.core.TempCalcForm.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TempCalcForm.cljs$core$IFn$_invoke$arity$1(G__67196) : reactcomparison.core.TempCalcForm.call(null,G__67196));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs67195))?sablono.interpreter.attributes(attrs67195):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67195))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67195)], null))));
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
var G__67233 = null;
var G__67234 = (function (){var G__67240 = {"className": "componentCLJS", "id": ""};
var G__67241 = (function (){var G__67246 = null;
return React.DOM.hr(G__67246);
})();
var G__67242 = (function (){var G__67247 = null;
var G__67248 = "Comment Component";
return React.DOM.h4(G__67247,G__67248);
})();
var G__67243 = (function (){var G__67249 = null;
return React.DOM.hr(G__67249);
})();
var G__67244 = sablono.interpreter.interpret(reactcomparison.core.CommentBox(reactcomparison.core.commentData));
var G__67245 = (function (){var G__67250 = {"className": "language-clojure"};
var G__67251 = (function (){var G__67252 = {"className": "language-clojure", "dangerouslySetInnerHTML": {"__html": reactcomparison.core.comment_component_snippet}};
return React.DOM.code(G__67252);
})();
return React.DOM.pre(G__67250,G__67251);
})();
return React.DOM.div(G__67240,G__67241,G__67242,G__67243,G__67244,G__67245);
})();
var G__67235 = (function (){var G__67253 = {"className": "componentCLJS", "id": ""};
var G__67254 = (function (){var G__67259 = null;
return React.DOM.hr(G__67259);
})();
var G__67255 = (function (){var G__67260 = null;
var G__67261 = "Simple Div Component";
return React.DOM.h4(G__67260,G__67261);
})();
var G__67256 = (function (){var G__67262 = null;
return React.DOM.hr(G__67262);
})();
var G__67257 = sablono.interpreter.interpret(reactcomparison.core.DivExample());
var G__67258 = (function (){var G__67263 = {"className": "language-clojure"};
var G__67264 = (function (){var G__67265 = {"className": "language-clojure", "dangerouslySetInnerHTML": {"__html": reactcomparison.core.simple_div_component_snippet}};
return React.DOM.code(G__67265);
})();
return React.DOM.pre(G__67263,G__67264);
})();
return React.DOM.div(G__67253,G__67254,G__67255,G__67256,G__67257,G__67258);
})();
var G__67236 = (function (){var G__67266 = {"className": "componentCLJS", "id": ""};
var G__67267 = (function (){var G__67272 = null;
return React.DOM.hr(G__67272);
})();
var G__67268 = (function (){var G__67273 = null;
var G__67274 = "Header Component";
return React.DOM.h4(G__67273,G__67274);
})();
var G__67269 = (function (){var G__67275 = null;
return React.DOM.hr(G__67275);
})();
var G__67270 = sablono.interpreter.interpret(reactcomparison.core.HeaderExample());
var G__67271 = (function (){var G__67276 = {"className": "language-clojure"};
var G__67277 = (function (){var G__67278 = {"className": "language-clojure", "dangerouslySetInnerHTML": {"__html": reactcomparison.core.header_component_snippet}};
return React.DOM.code(G__67278);
})();
return React.DOM.pre(G__67276,G__67277);
})();
return React.DOM.div(G__67266,G__67267,G__67268,G__67269,G__67270,G__67271);
})();
var G__67237 = (function (){var G__67279 = {"className": "componentCLJS", "id": ""};
var G__67280 = (function (){var G__67285 = null;
return React.DOM.hr(G__67285);
})();
var G__67281 = (function (){var G__67286 = null;
var G__67287 = "Like Button Component";
return React.DOM.h4(G__67286,G__67287);
})();
var G__67282 = (function (){var G__67288 = null;
return React.DOM.hr(G__67288);
})();
var G__67283 = sablono.interpreter.interpret((function (){var G__67289 = state;
return (reactcomparison.core.LikeButton.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.LikeButton.cljs$core$IFn$_invoke$arity$1(G__67289) : reactcomparison.core.LikeButton.call(null,G__67289));
})());
var G__67284 = (function (){var G__67290 = {"className": "language-clojure"};
var G__67291 = (function (){var G__67292 = {"className": "language-clojure", "dangerouslySetInnerHTML": {"__html": reactcomparison.core.like_button_component_snippet}};
return React.DOM.code(G__67292);
})();
return React.DOM.pre(G__67290,G__67291);
})();
return React.DOM.div(G__67279,G__67280,G__67281,G__67282,G__67283,G__67284);
})();
var G__67238 = (function (){var G__67293 = {"className": "componentCLJS", "id": ""};
var G__67294 = (function (){var G__67299 = null;
return React.DOM.hr(G__67299);
})();
var G__67295 = (function (){var G__67300 = null;
var G__67301 = "Tab Component";
return React.DOM.h4(G__67300,G__67301);
})();
var G__67296 = (function (){var G__67302 = null;
return React.DOM.hr(G__67302);
})();
var G__67297 = sablono.interpreter.interpret(reactcomparison.core.TabsExample(state));
var G__67298 = (function (){var G__67303 = {"className": "language-clojure"};
var G__67304 = (function (){var G__67305 = {"className": "language-clojure", "dangerouslySetInnerHTML": {"__html": reactcomparison.core.tab_component_snippet}};
return React.DOM.code(G__67305);
})();
return React.DOM.pre(G__67303,G__67304);
})();
return React.DOM.div(G__67293,G__67294,G__67295,G__67296,G__67297,G__67298);
})();
var G__67239 = (function (){var G__67306 = {"className": "componentCLJS", "id": ""};
var G__67307 = (function (){var G__67312 = null;
return React.DOM.hr(G__67312);
})();
var G__67308 = (function (){var G__67313 = null;
var G__67314 = "Temp Calc Component";
return React.DOM.h4(G__67313,G__67314);
})();
var G__67309 = (function (){var G__67315 = null;
return React.DOM.hr(G__67315);
})();
var G__67310 = sablono.interpreter.interpret((function (){var G__67316 = state;
return (reactcomparison.core.TempCalcContainer.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TempCalcContainer.cljs$core$IFn$_invoke$arity$1(G__67316) : reactcomparison.core.TempCalcContainer.call(null,G__67316));
})());
var G__67311 = (function (){var G__67317 = {"className": "language-clojure"};
var G__67318 = (function (){var G__67319 = {"className": "language-clojure", "dangerouslySetInnerHTML": {"__html": reactcomparison.core.temp_calc_component_snippet}};
return React.DOM.code(G__67319);
})();
return React.DOM.pre(G__67317,G__67318);
})();
return React.DOM.div(G__67306,G__67307,G__67308,G__67309,G__67310,G__67311);
})();
return React.DOM.div(G__67233,G__67234,G__67235,G__67236,G__67237,G__67238,G__67239);
}));
reactcomparison.core.application_state_atom = (function (){var G__67320 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$163,"managers",cljs.core.constant$keyword$164,false], null),reactcomparison.core.convert_temps(cljs.core.constant$keyword$167,(0))], 0));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__67320) : cljs.core.atom.call(null,G__67320));
})();
reactcomparison.core.container_el = reactcomparison.core.by_id("contentQuiescentSablono");
reactcomparison.core.on_change_state = (function on_change_state(_keyword,the_atom,old_state,new_state){
return quiescent.render((function (){var G__67322 = new_state;
return (reactcomparison.core.RootComponent.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RootComponent.cljs$core$IFn$_invoke$arity$1(G__67322) : reactcomparison.core.RootComponent.call(null,G__67322));
})(),reactcomparison.core.container_el);
});
cljs.core.add_watch(reactcomparison.core.application_state_atom,cljs.core.constant$keyword$168,reactcomparison.core.on_change_state);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.application_state_atom,cljs.core.identity);
