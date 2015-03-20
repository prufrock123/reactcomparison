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
var G__25123 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clj_thing], 0));
return console.log(G__25123);
});
/**
* Log a JavaScript thing.
*/
reactcomparison.core.js_log = (function js_log(js_thing){
var G__25125 = js_thing;
return console.log(G__25125);
});
reactcomparison.core.by_id = (function by_id(id){
return document.getElementById(id);
});
reactcomparison.core.set_html_BANG_ = (function set_html_BANG_(id,html){
return (reactcomparison.core.by_id(id)["innerHTML"] = html);
});
reactcomparison.core.commentData = (function (){var G__25126 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$159,"Pete Hunt",cljs.core.constant$keyword$160,"Comment 1"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$159,"Jordan Walke",cljs.core.constant$keyword$160,"Comment 2"], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25126) : cljs.core.atom.call(null,G__25126));
})();
reactcomparison.core.load_comments_from_server = (function load_comments_from_server(url){
return null;
});
reactcomparison.core.Comment = (function Comment(data){
var G__25134 = {"className": "comment"};
var G__25135 = (function (){var attrs25132 = cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs25132))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commentAuthor"], null)], null),attrs25132], 0))):{"className": "commentAuthor"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs25132))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25132)], null))));
})();
var G__25136 = (function (){var attrs25133 = cljs.core.constant$keyword$160.cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs25133))?sablono.interpreter.attributes(attrs25133):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs25133))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25133)], null))));
})();
return React.DOM.div(G__25134,G__25135,G__25136);
});
reactcomparison.core.CommentForm = (function CommentForm(url){
var G__25148 = {"className": "commentForm"};
var G__25149 = (function (){var G__25152 = {"type": "text", "placeholder": "Your name"};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__25152) : sablono.interpreter.input.call(null,G__25152));
})();
var G__25150 = (function (){var G__25153 = {"type": "text", "placeholder": "Say something..."};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__25153) : sablono.interpreter.input.call(null,G__25153));
})();
var G__25151 = (function (){var G__25154 = {"type": "submit"};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__25154) : sablono.interpreter.input.call(null,G__25154));
})();
return React.DOM.form(G__25148,G__25149,G__25150,G__25151);
});
reactcomparison.core.CommentList = (function CommentList(the_atom){
var attrs25157 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.Comment,(function (){var G__25158 = the_atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25158) : cljs.core.deref.call(null,G__25158));
})()));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs25157))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commentList"], null)], null),attrs25157], 0))):{"className": "commentList"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs25157))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25157)], null))));
});
reactcomparison.core.CommentBox = (function CommentBox(the_atom){
var attrs25160 = reactcomparison.core.CommentList(the_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs25160))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CommentBox","example"], null)], null),attrs25160], 0))):{"className": "CommentBox example"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs25160))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(reactcomparison.core.CommentForm())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25160),sablono.interpreter.interpret(reactcomparison.core.CommentForm())], null))));
});
reactcomparison.core.DivExample = (function DivExample(){
var G__25169 = {"className": "divExample example"};
var G__25170 = (function (){var G__25171 = null;
var G__25172 = "Here is a sample div with a nested p tag.";
return React.DOM.p(G__25171,G__25172);
})();
return React.DOM.div(G__25169,G__25170);
});
reactcomparison.core.HeaderExample = (function HeaderExample(){
var G__25196 = {"className": "headerExample example"};
var G__25197 = (function (){var G__25203 = null;
var G__25204 = "Header 1";
return React.DOM.h1(G__25203,G__25204);
})();
var G__25198 = (function (){var G__25205 = null;
var G__25206 = "Header 2";
return React.DOM.h2(G__25205,G__25206);
})();
var G__25199 = (function (){var G__25207 = null;
var G__25208 = "Header 3";
return React.DOM.h3(G__25207,G__25208);
})();
var G__25200 = (function (){var G__25209 = null;
var G__25210 = "Header 4";
return React.DOM.h4(G__25209,G__25210);
})();
var G__25201 = (function (){var G__25211 = null;
var G__25212 = "Header 5";
return React.DOM.h5(G__25211,G__25212);
})();
var G__25202 = (function (){var G__25213 = null;
var G__25214 = "Header 6";
return React.DOM.h6(G__25213,G__25214);
})();
return React.DOM.div(G__25196,G__25197,G__25198,G__25199,G__25200,G__25201,G__25202);
});
reactcomparison.core.tab_data = new cljs.core.PersistentArrayMap(null, 3, ["managers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"President Business",cljs.core.constant$keyword$162,"1 billion"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Dilbert",cljs.core.constant$keyword$162,"2"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Gordon Gecko",cljs.core.constant$keyword$162,"$$$"], null)], null),"designers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Frank Llyod Wright",cljs.core.constant$keyword$162,"100"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Andy Warhol",cljs.core.constant$keyword$162,"200"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Kim Kardashian",cljs.core.constant$keyword$162,"25"], null)], null),"developers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Kevin",cljs.core.constant$keyword$162,"1 million"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Lesley",cljs.core.constant$keyword$162,"1 million"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Scott",cljs.core.constant$keyword$162,"1 million"], null)], null)], null);
reactcomparison.core.Tabs = (function Tabs(active_tab){
var G__25243 = {"className": "tabs"};
var G__25244 = (function (){var G__25247 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"managers"))?" active":null))].join(''), "id": "managers", "onClick": ((function (G__25243){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.application_state_atom,cljs.core.assoc,cljs.core.constant$keyword$163,"managers");
});})(G__25243))
};
var G__25248 = (function (){var G__25249 = {"className": "tab-link", "href": "#managers"};
var G__25250 = "Managers";
return React.DOM.a(G__25249,G__25250);
})();
return React.DOM.li(G__25247,G__25248);
})();
var G__25245 = (function (){var G__25251 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"designers"))?" active":null))].join(''), "id": "designers", "onClick": ((function (G__25243,G__25244){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.application_state_atom,cljs.core.assoc,cljs.core.constant$keyword$163,"designers");
});})(G__25243,G__25244))
};
var G__25252 = (function (){var G__25253 = {"className": "tab-link", "href": "#designers"};
var G__25254 = "Designers";
return React.DOM.a(G__25253,G__25254);
})();
return React.DOM.li(G__25251,G__25252);
})();
var G__25246 = (function (){var G__25255 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"developers"))?" active":null))].join(''), "id": "developers", "onClick": ((function (G__25243,G__25244,G__25245){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.application_state_atom,cljs.core.assoc,cljs.core.constant$keyword$163,"developers");
});})(G__25243,G__25244,G__25245))
};
var G__25256 = (function (){var G__25257 = {"className": "tab-link", "href": "#developers"};
var G__25258 = "Developers";
return React.DOM.a(G__25257,G__25258);
})();
return React.DOM.li(G__25255,G__25256);
})();
return React.DOM.ul(G__25243,G__25244,G__25245,G__25246);
});
reactcomparison.core.TabList = (function TabList(active_tab){
var G__25261 = {"className": "tabList"};
var G__25262 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.TabListItems,cljs.core.get.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.tab_data,active_tab)));
return React.DOM.ol(G__25261,G__25262);
});
reactcomparison.core.TabListItems = (function TabListItems(data){
var G__25277 = null;
var G__25278 = (function (){var G__25279 = {"className": "tab-list-link"};
var G__25280 = (function (){var G__25283 = {"src": "http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon"};
return React.DOM.img(G__25283);
})();
var G__25281 = sablono.interpreter.interpret(cljs.core.constant$keyword$161.cljs$core$IFn$_invoke$arity$1(data));
var G__25282 = (function (){var G__25284 = null;
var G__25285 = " Followers: ";
var G__25286 = sablono.interpreter.interpret(cljs.core.constant$keyword$162.cljs$core$IFn$_invoke$arity$1(data));
return React.DOM.span(G__25284,G__25285,G__25286);
})();
return React.DOM.a(G__25279,G__25280,G__25281,G__25282);
})();
return React.DOM.li(G__25277,G__25278);
});
reactcomparison.core.TabsExample = (function TabsExample(state){
var attrs25288 = reactcomparison.core.Tabs(cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs25288))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tabsExample"], null)], null),attrs25288], 0))):{"className": "tabsExample"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs25288))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(reactcomparison.core.TabList(cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(state)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25288),sablono.interpreter.interpret(reactcomparison.core.TabList(cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(state)))], null))));
});
reactcomparison.core.click_like = (function click_like(e){
var liked_QMARK_ = cljs.core.constant$keyword$164.cljs$core$IFn$_invoke$arity$1((function (){var G__25290 = reactcomparison.core.application_state_atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25290) : cljs.core.deref.call(null,G__25290));
})());
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.application_state_atom,cljs.core.assoc,cljs.core.constant$keyword$164,cljs.core.not(liked_QMARK_));
});
/**
* 
*/
reactcomparison.core.LikeButton = quiescent.component((function (state){
var G__25292 = {"onClick": (function (p1__25291_SHARP_){
return reactcomparison.core.click_like(p1__25291_SHARP_);
})};
var G__25293 = sablono.interpreter.interpret([cljs.core.str("You "),cljs.core.str(((cljs.core.constant$keyword$164.cljs$core$IFn$_invoke$arity$1(state) === true)?"like ":"haven't liked ")),cljs.core.str("this")].join(''));
return React.DOM.p(G__25292,G__25293);
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
var G__25295 = (((kwd instanceof cljs.core.Keyword))?kwd.fqn:null);
switch (G__25295) {
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
var new_value1 = (function (){var G__25299 = (js_evt["currentTarget"]["value"]);
return parseFloat(G__25299);
})();
var new_value2 = (cljs.core.truth_((function (){var G__25300 = new_value1;
return isNaN(G__25300);
})())?(0):new_value1);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reactcomparison.core.application_state_atom,cljs.core.merge,reactcomparison.core.convert_temps(temp_kwd,new_value2));
});
/**
* 
*/
reactcomparison.core.TextInput = quiescent.component((function (p__25302){
var vec__25303 = p__25302;
var temp_kwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25303,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25303,(1),null);
var attrs25304 = [cljs.core.str(cljs.core.name(temp_kwd)),cljs.core.str(": ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,((cljs.core.map_QMARK_(attrs25304))?sablono.interpreter.attributes(attrs25304):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs25304))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25305 = {"onChange": ((function (attrs25304,vec__25303,temp_kwd,v){
return (function (p1__25301_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__25301_SHARP_);
});})(attrs25304,vec__25303,temp_kwd,v))
, "type": "text", "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__25305) : sablono.interpreter.input.call(null,G__25305));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25304),(function (){var G__25306 = {"onChange": ((function (attrs25304,vec__25303,temp_kwd,v){
return (function (p1__25301_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__25301_SHARP_);
});})(attrs25304,vec__25303,temp_kwd,v))
, "type": "text", "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__25306) : sablono.interpreter.input.call(null,G__25306));
})()], null))));
}));
/**
* 
*/
reactcomparison.core.RangeInput = quiescent.component((function (p__25308){
var vec__25309 = p__25308;
var temp_kwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25309,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25309,(1),null);
var attrs25310 = [cljs.core.str(cljs.core.name(temp_kwd)),cljs.core.str(": ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,((cljs.core.map_QMARK_(attrs25310))?sablono.interpreter.attributes(attrs25310):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs25310))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25311 = {"min": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(temp_kwd,cljs.core.constant$keyword$165))?(0):(-450)), "max": (1000), "type": "range", "onChange": ((function (attrs25310,vec__25309,temp_kwd,v){
return (function (p1__25307_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__25307_SHARP_);
});})(attrs25310,vec__25309,temp_kwd,v))
, "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__25311) : sablono.interpreter.input.call(null,G__25311));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25310),(function (){var G__25312 = {"min": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(temp_kwd,cljs.core.constant$keyword$165))?(0):(-450)), "max": (1000), "type": "range", "onChange": ((function (attrs25310,vec__25309,temp_kwd,v){
return (function (p1__25307_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__25307_SHARP_);
});})(attrs25310,vec__25309,temp_kwd,v))
, "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__25312) : sablono.interpreter.input.call(null,G__25312));
})()], null))));
}));
/**
* 
*/
reactcomparison.core.TempCalcForm = quiescent.component((function (temps){
var G__25315 = null;
var G__25316 = (function (){var attrs25313 = (function (){var G__25318 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$167,cljs.core.constant$keyword$167.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__25318) : reactcomparison.core.TextInput.call(null,G__25318));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.fieldset,((cljs.core.map_QMARK_(attrs25313))?sablono.interpreter.attributes(attrs25313):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs25313))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__25319 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__25319) : reactcomparison.core.TextInput.call(null,G__25319));
})()),sablono.interpreter.interpret((function (){var G__25320 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__25320) : reactcomparison.core.TextInput.call(null,G__25320));
})())], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25313),sablono.interpreter.interpret((function (){var G__25321 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__25321) : reactcomparison.core.TextInput.call(null,G__25321));
})()),sablono.interpreter.interpret((function (){var G__25322 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__25322) : reactcomparison.core.TextInput.call(null,G__25322));
})())], null))));
})();
var G__25317 = (function (){var attrs25314 = (function (){var G__25323 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$167,cljs.core.constant$keyword$167.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__25323) : reactcomparison.core.RangeInput.call(null,G__25323));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.fieldset,((cljs.core.map_QMARK_(attrs25314))?sablono.interpreter.attributes(attrs25314):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs25314))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__25324 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__25324) : reactcomparison.core.RangeInput.call(null,G__25324));
})()),sablono.interpreter.interpret((function (){var G__25325 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__25325) : reactcomparison.core.RangeInput.call(null,G__25325));
})())], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25314),sablono.interpreter.interpret((function (){var G__25326 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__25326) : reactcomparison.core.RangeInput.call(null,G__25326));
})()),sablono.interpreter.interpret((function (){var G__25327 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__25327) : reactcomparison.core.RangeInput.call(null,G__25327));
})())], null))));
})();
return React.DOM.div(G__25315,G__25316,G__25317);
}));
/**
* 
*/
reactcomparison.core.TempCalcContainer = quiescent.component((function (state){
var attrs25328 = (function (){var G__25329 = state;
return (reactcomparison.core.TempCalcForm.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TempCalcForm.cljs$core$IFn$_invoke$arity$1(G__25329) : reactcomparison.core.TempCalcForm.call(null,G__25329));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs25328))?sablono.interpreter.attributes(attrs25328):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs25328))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25328)], null))));
}));
/**
* 
*/
reactcomparison.core.RootComponent = quiescent.component((function (state){
var G__25332 = null;
var G__25333 = (function (){var G__25340 = {"className": "title"};
var G__25341 = "CLJS Version";
return React.DOM.h1(G__25340,G__25341);
})();
var G__25334 = sablono.interpreter.interpret(reactcomparison.core.CommentBox(reactcomparison.core.commentData));
var G__25335 = sablono.interpreter.interpret(reactcomparison.core.DivExample());
var G__25336 = sablono.interpreter.interpret(reactcomparison.core.HeaderExample());
var G__25337 = sablono.interpreter.interpret((function (){var G__25342 = state;
return (reactcomparison.core.LikeButton.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.LikeButton.cljs$core$IFn$_invoke$arity$1(G__25342) : reactcomparison.core.LikeButton.call(null,G__25342));
})());
var G__25338 = sablono.interpreter.interpret(reactcomparison.core.TabsExample(state));
var G__25339 = sablono.interpreter.interpret((function (){var G__25343 = state;
return (reactcomparison.core.TempCalcContainer.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TempCalcContainer.cljs$core$IFn$_invoke$arity$1(G__25343) : reactcomparison.core.TempCalcContainer.call(null,G__25343));
})());
return React.DOM.div(G__25332,G__25333,G__25334,G__25335,G__25336,G__25337,G__25338,G__25339);
}));
reactcomparison.core.application_state_atom = (function (){var G__25344 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$163,"managers",cljs.core.constant$keyword$164,false], null),reactcomparison.core.convert_temps(cljs.core.constant$keyword$167,(0))], 0));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25344) : cljs.core.atom.call(null,G__25344));
})();
reactcomparison.core.container_el = reactcomparison.core.by_id("contentQuiescentSablono");
reactcomparison.core.on_change_state = (function on_change_state(_keyword,the_atom,old_state,new_state){
return quiescent.render((function (){var G__25346 = new_state;
return (reactcomparison.core.RootComponent.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RootComponent.cljs$core$IFn$_invoke$arity$1(G__25346) : reactcomparison.core.RootComponent.call(null,G__25346));
})(),reactcomparison.core.container_el);
});
cljs.core.add_watch(reactcomparison.core.application_state_atom,cljs.core.constant$keyword$168,reactcomparison.core.on_change_state);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.application_state_atom,cljs.core.identity);
