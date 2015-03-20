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
var G__37160 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clj_thing], 0));
return console.log(G__37160);
});
/**
* Log a JavaScript thing.
*/
reactcomparison.core.js_log = (function js_log(js_thing){
var G__37162 = js_thing;
return console.log(G__37162);
});
reactcomparison.core.by_id = (function by_id(id){
return document.getElementById(id);
});
reactcomparison.core.set_html_BANG_ = (function set_html_BANG_(id,html){
return (reactcomparison.core.by_id(id)["innerHTML"] = html);
});
reactcomparison.core.commentData = (function (){var G__37163 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$159,"Pete Hunt",cljs.core.constant$keyword$160,"Comment 1"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$159,"Jordan Walke",cljs.core.constant$keyword$160,"Comment 2"], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37163) : cljs.core.atom.call(null,G__37163));
})();
reactcomparison.core.load_comments_from_server = (function load_comments_from_server(url){
return null;
});
reactcomparison.core.Comment = (function Comment(data){
var G__37171 = {"className": "comment"};
var G__37172 = (function (){var attrs37169 = cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs37169))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commentAuthor"], null)], null),attrs37169], 0))):{"className": "commentAuthor"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37169))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37169)], null))));
})();
var G__37173 = (function (){var attrs37170 = cljs.core.constant$keyword$160.cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs37170))?sablono.interpreter.attributes(attrs37170):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37170))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37170)], null))));
})();
return React.DOM.div(G__37171,G__37172,G__37173);
});
reactcomparison.core.CommentForm = (function CommentForm(url){
var G__37185 = {"className": "commentForm"};
var G__37186 = (function (){var G__37189 = {"type": "text", "placeholder": "Your name"};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__37189) : sablono.interpreter.input.call(null,G__37189));
})();
var G__37187 = (function (){var G__37190 = {"type": "text", "placeholder": "Say something..."};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__37190) : sablono.interpreter.input.call(null,G__37190));
})();
var G__37188 = (function (){var G__37191 = {"type": "submit"};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__37191) : sablono.interpreter.input.call(null,G__37191));
})();
return React.DOM.form(G__37185,G__37186,G__37187,G__37188);
});
reactcomparison.core.CommentList = (function CommentList(the_atom){
var attrs37194 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.Comment,(function (){var G__37195 = the_atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37195) : cljs.core.deref.call(null,G__37195));
})()));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs37194))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commentList"], null)], null),attrs37194], 0))):{"className": "commentList"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37194))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37194)], null))));
});
reactcomparison.core.CommentBox = (function CommentBox(the_atom){
var attrs37197 = reactcomparison.core.CommentList(the_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs37197))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CommentBox","example"], null)], null),attrs37197], 0))):{"className": "CommentBox example"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37197))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(reactcomparison.core.CommentForm())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37197),sablono.interpreter.interpret(reactcomparison.core.CommentForm())], null))));
});
reactcomparison.core.DivExample = (function DivExample(){
var G__37206 = {"className": "divExample example"};
var G__37207 = (function (){var G__37208 = null;
var G__37209 = "Here is a sample div with a nested p tag.";
return React.DOM.p(G__37208,G__37209);
})();
return React.DOM.div(G__37206,G__37207);
});
reactcomparison.core.HeaderExample = (function HeaderExample(){
var G__37233 = {"className": "headerExample example"};
var G__37234 = (function (){var G__37240 = null;
var G__37241 = "Header 1";
return React.DOM.h1(G__37240,G__37241);
})();
var G__37235 = (function (){var G__37242 = null;
var G__37243 = "Header 2";
return React.DOM.h2(G__37242,G__37243);
})();
var G__37236 = (function (){var G__37244 = null;
var G__37245 = "Header 3";
return React.DOM.h3(G__37244,G__37245);
})();
var G__37237 = (function (){var G__37246 = null;
var G__37247 = "Header 4";
return React.DOM.h4(G__37246,G__37247);
})();
var G__37238 = (function (){var G__37248 = null;
var G__37249 = "Header 5";
return React.DOM.h5(G__37248,G__37249);
})();
var G__37239 = (function (){var G__37250 = null;
var G__37251 = "Header 6";
return React.DOM.h6(G__37250,G__37251);
})();
return React.DOM.div(G__37233,G__37234,G__37235,G__37236,G__37237,G__37238,G__37239);
});
reactcomparison.core.tab_data = new cljs.core.PersistentArrayMap(null, 3, ["managers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"President Business",cljs.core.constant$keyword$162,"1 billion"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Dilbert",cljs.core.constant$keyword$162,"2"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Gordon Gecko",cljs.core.constant$keyword$162,"$$$"], null)], null),"designers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Frank Llyod Wright",cljs.core.constant$keyword$162,"100"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Andy Warhol",cljs.core.constant$keyword$162,"200"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Kim Kardashian",cljs.core.constant$keyword$162,"25"], null)], null),"developers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Kevin",cljs.core.constant$keyword$162,"1 million"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Lesley",cljs.core.constant$keyword$162,"1 million"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Scott",cljs.core.constant$keyword$162,"1 million"], null)], null)], null);
reactcomparison.core.click_tab = (function click_tab(js_evt,value){
js_evt.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.application_state_atom,cljs.core.assoc,cljs.core.constant$keyword$163,value);
});
reactcomparison.core.Tabs = (function Tabs(active_tab){
var G__37283 = {"className": "tabs"};
var G__37284 = (function (){var G__37287 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"managers"))?" active":null))].join(''), "id": "managers", "onClick": ((function (G__37283){
return (function (p1__37252_SHARP_){
return reactcomparison.core.click_tab(p1__37252_SHARP_,"managers");
});})(G__37283))
};
var G__37288 = (function (){var G__37289 = {"className": "tab-link", "href": "#managers"};
var G__37290 = "Managers";
return React.DOM.a(G__37289,G__37290);
})();
return React.DOM.li(G__37287,G__37288);
})();
var G__37285 = (function (){var G__37291 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"designers"))?" active":null))].join(''), "id": "designers", "onClick": ((function (G__37283,G__37284){
return (function (p1__37253_SHARP_){
return reactcomparison.core.click_tab(p1__37253_SHARP_,"designers");
});})(G__37283,G__37284))
};
var G__37292 = (function (){var G__37293 = {"className": "tab-link", "href": "#designers"};
var G__37294 = "Designers";
return React.DOM.a(G__37293,G__37294);
})();
return React.DOM.li(G__37291,G__37292);
})();
var G__37286 = (function (){var G__37295 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"developers"))?" active":null))].join(''), "id": "developers", "onClick": ((function (G__37283,G__37284,G__37285){
return (function (p1__37254_SHARP_){
return reactcomparison.core.click_tab(p1__37254_SHARP_,"developers");
});})(G__37283,G__37284,G__37285))
};
var G__37296 = (function (){var G__37297 = {"className": "tab-link", "href": "#developers"};
var G__37298 = "Developers";
return React.DOM.a(G__37297,G__37298);
})();
return React.DOM.li(G__37295,G__37296);
})();
return React.DOM.ul(G__37283,G__37284,G__37285,G__37286);
});
reactcomparison.core.TabList = (function TabList(active_tab){
var G__37301 = {"className": "tabList"};
var G__37302 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.TabListItems,cljs.core.get.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.tab_data,active_tab)));
return React.DOM.ol(G__37301,G__37302);
});
reactcomparison.core.TabListItems = (function TabListItems(data){
var G__37317 = null;
var G__37318 = (function (){var G__37319 = {"className": "tab-list-link"};
var G__37320 = (function (){var G__37323 = {"src": "http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon"};
return React.DOM.img(G__37323);
})();
var G__37321 = sablono.interpreter.interpret(cljs.core.constant$keyword$161.cljs$core$IFn$_invoke$arity$1(data));
var G__37322 = (function (){var G__37324 = null;
var G__37325 = " Followers: ";
var G__37326 = sablono.interpreter.interpret(cljs.core.constant$keyword$162.cljs$core$IFn$_invoke$arity$1(data));
return React.DOM.span(G__37324,G__37325,G__37326);
})();
return React.DOM.a(G__37319,G__37320,G__37321,G__37322);
})();
return React.DOM.li(G__37317,G__37318);
});
reactcomparison.core.TabsExample = (function TabsExample(state){
var attrs37328 = reactcomparison.core.Tabs(cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs37328))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tabsExample"], null)], null),attrs37328], 0))):{"className": "tabsExample"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37328))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(reactcomparison.core.TabList(cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(state)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37328),sablono.interpreter.interpret(reactcomparison.core.TabList(cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(state)))], null))));
});
reactcomparison.core.click_like = (function click_like(e){
var liked_QMARK_ = cljs.core.constant$keyword$164.cljs$core$IFn$_invoke$arity$1((function (){var G__37330 = reactcomparison.core.application_state_atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37330) : cljs.core.deref.call(null,G__37330));
})());
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.application_state_atom,cljs.core.assoc,cljs.core.constant$keyword$164,cljs.core.not(liked_QMARK_));
});
/**
* 
*/
reactcomparison.core.LikeButton = quiescent.component((function (state){
var G__37332 = {"onClick": (function (p1__37331_SHARP_){
return reactcomparison.core.click_like(p1__37331_SHARP_);
})};
var G__37333 = sablono.interpreter.interpret([cljs.core.str("You "),cljs.core.str(((cljs.core.constant$keyword$164.cljs$core$IFn$_invoke$arity$1(state) === true)?"like ":"haven't liked ")),cljs.core.str("this")].join(''));
return React.DOM.p(G__37332,G__37333);
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
var G__37335 = (((kwd instanceof cljs.core.Keyword))?kwd.fqn:null);
switch (G__37335) {
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
var new_value1 = (function (){var G__37339 = (js_evt["currentTarget"]["value"]);
return parseFloat(G__37339);
})();
var new_value2 = (cljs.core.truth_((function (){var G__37340 = new_value1;
return isNaN(G__37340);
})())?(0):new_value1);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reactcomparison.core.application_state_atom,cljs.core.merge,reactcomparison.core.convert_temps(temp_kwd,new_value2));
});
/**
* 
*/
reactcomparison.core.TextInput = quiescent.component((function (p__37342){
var vec__37343 = p__37342;
var temp_kwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37343,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37343,(1),null);
var attrs37344 = [cljs.core.str(cljs.core.name(temp_kwd)),cljs.core.str(": ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,((cljs.core.map_QMARK_(attrs37344))?sablono.interpreter.attributes(attrs37344):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37344))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37345 = {"onChange": ((function (attrs37344,vec__37343,temp_kwd,v){
return (function (p1__37341_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__37341_SHARP_);
});})(attrs37344,vec__37343,temp_kwd,v))
, "type": "text", "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__37345) : sablono.interpreter.input.call(null,G__37345));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37344),(function (){var G__37346 = {"onChange": ((function (attrs37344,vec__37343,temp_kwd,v){
return (function (p1__37341_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__37341_SHARP_);
});})(attrs37344,vec__37343,temp_kwd,v))
, "type": "text", "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__37346) : sablono.interpreter.input.call(null,G__37346));
})()], null))));
}));
/**
* 
*/
reactcomparison.core.RangeInput = quiescent.component((function (p__37348){
var vec__37349 = p__37348;
var temp_kwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37349,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37349,(1),null);
var attrs37350 = [cljs.core.str(cljs.core.name(temp_kwd)),cljs.core.str(": ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,((cljs.core.map_QMARK_(attrs37350))?sablono.interpreter.attributes(attrs37350):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37350))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37351 = {"min": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(temp_kwd,cljs.core.constant$keyword$165))?(0):(-450)), "max": (1000), "type": "range", "onChange": ((function (attrs37350,vec__37349,temp_kwd,v){
return (function (p1__37347_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__37347_SHARP_);
});})(attrs37350,vec__37349,temp_kwd,v))
, "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__37351) : sablono.interpreter.input.call(null,G__37351));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37350),(function (){var G__37352 = {"min": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(temp_kwd,cljs.core.constant$keyword$165))?(0):(-450)), "max": (1000), "type": "range", "onChange": ((function (attrs37350,vec__37349,temp_kwd,v){
return (function (p1__37347_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__37347_SHARP_);
});})(attrs37350,vec__37349,temp_kwd,v))
, "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__37352) : sablono.interpreter.input.call(null,G__37352));
})()], null))));
}));
/**
* 
*/
reactcomparison.core.TempCalcForm = quiescent.component((function (temps){
var G__37355 = null;
var G__37356 = (function (){var attrs37353 = (function (){var G__37358 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$167,cljs.core.constant$keyword$167.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__37358) : reactcomparison.core.TextInput.call(null,G__37358));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.fieldset,((cljs.core.map_QMARK_(attrs37353))?sablono.interpreter.attributes(attrs37353):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37353))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__37359 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__37359) : reactcomparison.core.TextInput.call(null,G__37359));
})()),sablono.interpreter.interpret((function (){var G__37360 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__37360) : reactcomparison.core.TextInput.call(null,G__37360));
})())], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37353),sablono.interpreter.interpret((function (){var G__37361 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__37361) : reactcomparison.core.TextInput.call(null,G__37361));
})()),sablono.interpreter.interpret((function (){var G__37362 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__37362) : reactcomparison.core.TextInput.call(null,G__37362));
})())], null))));
})();
var G__37357 = (function (){var attrs37354 = (function (){var G__37363 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$167,cljs.core.constant$keyword$167.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__37363) : reactcomparison.core.RangeInput.call(null,G__37363));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.fieldset,((cljs.core.map_QMARK_(attrs37354))?sablono.interpreter.attributes(attrs37354):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37354))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__37364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__37364) : reactcomparison.core.RangeInput.call(null,G__37364));
})()),sablono.interpreter.interpret((function (){var G__37365 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__37365) : reactcomparison.core.RangeInput.call(null,G__37365));
})())], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37354),sablono.interpreter.interpret((function (){var G__37366 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__37366) : reactcomparison.core.RangeInput.call(null,G__37366));
})()),sablono.interpreter.interpret((function (){var G__37367 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__37367) : reactcomparison.core.RangeInput.call(null,G__37367));
})())], null))));
})();
return React.DOM.div(G__37355,G__37356,G__37357);
}));
/**
* 
*/
reactcomparison.core.TempCalcContainer = quiescent.component((function (state){
var attrs37368 = (function (){var G__37369 = state;
return (reactcomparison.core.TempCalcForm.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TempCalcForm.cljs$core$IFn$_invoke$arity$1(G__37369) : reactcomparison.core.TempCalcForm.call(null,G__37369));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs37368))?sablono.interpreter.attributes(attrs37368):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37368))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37368)], null))));
}));
/**
* 
*/
reactcomparison.core.RootComponent = quiescent.component((function (state){
var G__37406 = null;
var G__37407 = (function (){var G__37413 = {"className": "componentCLJS", "id": ""};
var G__37414 = (function (){var G__37418 = null;
return React.DOM.hr(G__37418);
})();
var G__37415 = (function (){var G__37419 = null;
var G__37420 = "Comment Component";
return React.DOM.h4(G__37419,G__37420);
})();
var G__37416 = (function (){var G__37421 = null;
return React.DOM.hr(G__37421);
})();
var G__37417 = sablono.interpreter.interpret(reactcomparison.core.CommentBox(reactcomparison.core.commentData));
return React.DOM.div(G__37413,G__37414,G__37415,G__37416,G__37417);
})();
var G__37408 = (function (){var G__37422 = {"className": "componentCLJS", "id": ""};
var G__37423 = (function (){var G__37427 = null;
return React.DOM.hr(G__37427);
})();
var G__37424 = (function (){var G__37428 = null;
var G__37429 = "Simple Div Component";
return React.DOM.h4(G__37428,G__37429);
})();
var G__37425 = (function (){var G__37430 = null;
return React.DOM.hr(G__37430);
})();
var G__37426 = sablono.interpreter.interpret(reactcomparison.core.DivExample());
return React.DOM.div(G__37422,G__37423,G__37424,G__37425,G__37426);
})();
var G__37409 = (function (){var G__37431 = {"className": "componentCLJS", "id": ""};
var G__37432 = (function (){var G__37436 = null;
return React.DOM.hr(G__37436);
})();
var G__37433 = (function (){var G__37437 = null;
var G__37438 = "Header Component";
return React.DOM.h4(G__37437,G__37438);
})();
var G__37434 = (function (){var G__37439 = null;
return React.DOM.hr(G__37439);
})();
var G__37435 = sablono.interpreter.interpret(reactcomparison.core.HeaderExample());
return React.DOM.div(G__37431,G__37432,G__37433,G__37434,G__37435);
})();
var G__37410 = (function (){var G__37440 = {"className": "componentCLJS", "id": ""};
var G__37441 = (function (){var G__37445 = null;
return React.DOM.hr(G__37445);
})();
var G__37442 = (function (){var G__37446 = null;
var G__37447 = "Like Button Component";
return React.DOM.h4(G__37446,G__37447);
})();
var G__37443 = (function (){var G__37448 = null;
return React.DOM.hr(G__37448);
})();
var G__37444 = sablono.interpreter.interpret((function (){var G__37449 = state;
return (reactcomparison.core.LikeButton.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.LikeButton.cljs$core$IFn$_invoke$arity$1(G__37449) : reactcomparison.core.LikeButton.call(null,G__37449));
})());
return React.DOM.div(G__37440,G__37441,G__37442,G__37443,G__37444);
})();
var G__37411 = (function (){var G__37450 = {"className": "componentCLJS", "id": ""};
var G__37451 = (function (){var G__37455 = null;
return React.DOM.hr(G__37455);
})();
var G__37452 = (function (){var G__37456 = null;
var G__37457 = "Tab Component";
return React.DOM.h4(G__37456,G__37457);
})();
var G__37453 = (function (){var G__37458 = null;
return React.DOM.hr(G__37458);
})();
var G__37454 = sablono.interpreter.interpret(reactcomparison.core.TabsExample(state));
return React.DOM.div(G__37450,G__37451,G__37452,G__37453,G__37454);
})();
var G__37412 = (function (){var G__37459 = {"className": "componentCLJS", "id": ""};
var G__37460 = (function (){var G__37464 = null;
return React.DOM.hr(G__37464);
})();
var G__37461 = (function (){var G__37465 = null;
var G__37466 = "Temp Calc Component";
return React.DOM.h4(G__37465,G__37466);
})();
var G__37462 = (function (){var G__37467 = null;
return React.DOM.hr(G__37467);
})();
var G__37463 = sablono.interpreter.interpret((function (){var G__37468 = state;
return (reactcomparison.core.TempCalcContainer.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TempCalcContainer.cljs$core$IFn$_invoke$arity$1(G__37468) : reactcomparison.core.TempCalcContainer.call(null,G__37468));
})());
return React.DOM.div(G__37459,G__37460,G__37461,G__37462,G__37463);
})();
return React.DOM.div(G__37406,G__37407,G__37408,G__37409,G__37410,G__37411,G__37412);
}));
reactcomparison.core.application_state_atom = (function (){var G__37469 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$163,"managers",cljs.core.constant$keyword$164,false], null),reactcomparison.core.convert_temps(cljs.core.constant$keyword$167,(0))], 0));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__37469) : cljs.core.atom.call(null,G__37469));
})();
reactcomparison.core.container_el = reactcomparison.core.by_id("contentQuiescentSablono");
reactcomparison.core.on_change_state = (function on_change_state(_keyword,the_atom,old_state,new_state){
return quiescent.render((function (){var G__37471 = new_state;
return (reactcomparison.core.RootComponent.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RootComponent.cljs$core$IFn$_invoke$arity$1(G__37471) : reactcomparison.core.RootComponent.call(null,G__37471));
})(),reactcomparison.core.container_el);
});
cljs.core.add_watch(reactcomparison.core.application_state_atom,cljs.core.constant$keyword$168,reactcomparison.core.on_change_state);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.application_state_atom,cljs.core.identity);
