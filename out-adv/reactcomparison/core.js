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
var G__43115 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clj_thing], 0));
return console.log(G__43115);
});
/**
* Log a JavaScript thing.
*/
reactcomparison.core.js_log = (function js_log(js_thing){
var G__43117 = js_thing;
return console.log(G__43117);
});
reactcomparison.core.by_id = (function by_id(id){
return document.getElementById(id);
});
reactcomparison.core.set_html_BANG_ = (function set_html_BANG_(id,html){
return (reactcomparison.core.by_id(id)["innerHTML"] = html);
});
reactcomparison.core.commentData = (function (){var G__43118 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$154,"Pete Hunt",cljs.core.constant$keyword$155,"Comment 1"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$154,"Jordan Walke",cljs.core.constant$keyword$155,"Comment 2"], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__43118) : cljs.core.atom.call(null,G__43118));
})();
reactcomparison.core.load_comments_from_server = (function load_comments_from_server(url){
return null;
});
reactcomparison.core.Comment = (function Comment(data){
var G__43126 = {"className": "comment"};
var G__43127 = (function (){var attrs43124 = cljs.core.constant$keyword$154.cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs43124))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$117,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commentAuthor"], null)], null),attrs43124], 0))):{"className": "commentAuthor"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43124))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43124)], null))));
})();
var G__43128 = (function (){var attrs43125 = cljs.core.constant$keyword$155.cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs43125))?sablono.interpreter.attributes(attrs43125):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43125))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43125)], null))));
})();
return React.DOM.div(G__43126,G__43127,G__43128);
});
reactcomparison.core.CommentForm = (function CommentForm(url){
var G__43140 = {"className": "commentForm"};
var G__43141 = (function (){var G__43144 = {"type": "text", "placeholder": "Your name"};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__43144) : sablono.interpreter.input.call(null,G__43144));
})();
var G__43142 = (function (){var G__43145 = {"type": "text", "placeholder": "Say something..."};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__43145) : sablono.interpreter.input.call(null,G__43145));
})();
var G__43143 = (function (){var G__43146 = {"type": "submit"};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__43146) : sablono.interpreter.input.call(null,G__43146));
})();
return React.DOM.form(G__43140,G__43141,G__43142,G__43143);
});
reactcomparison.core.CommentList = (function CommentList(the_atom){
var attrs43149 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.Comment,(function (){var G__43150 = the_atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__43150) : cljs.core.deref.call(null,G__43150));
})()));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs43149))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$117,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commentList"], null)], null),attrs43149], 0))):{"className": "commentList"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43149))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43149)], null))));
});
reactcomparison.core.CommentBox = (function CommentBox(the_atom){
var G__43161 = {"className": "CommentBox example"};
var G__43162 = (function (){var G__43165 = null;
var G__43166 = "Comments CLJS version";
return React.DOM.h1(G__43165,G__43166);
})();
var G__43163 = sablono.interpreter.interpret(reactcomparison.core.CommentList(the_atom));
var G__43164 = sablono.interpreter.interpret(reactcomparison.core.CommentForm());
return React.DOM.div(G__43161,G__43162,G__43163,G__43164);
});
reactcomparison.core.DivExample = (function DivExample(){
var G__43175 = {"className": "divExample example"};
var G__43176 = (function (){var G__43177 = null;
var G__43178 = "Here is a sample div with a nested p tag.";
return React.DOM.p(G__43177,G__43178);
})();
return React.DOM.div(G__43175,G__43176);
});
reactcomparison.core.HeaderExample = (function HeaderExample(){
var G__43202 = {"className": "headerExample example"};
var G__43203 = (function (){var G__43209 = null;
var G__43210 = "Header 1";
return React.DOM.h1(G__43209,G__43210);
})();
var G__43204 = (function (){var G__43211 = null;
var G__43212 = "Header 2";
return React.DOM.h2(G__43211,G__43212);
})();
var G__43205 = (function (){var G__43213 = null;
var G__43214 = "Header 3";
return React.DOM.h3(G__43213,G__43214);
})();
var G__43206 = (function (){var G__43215 = null;
var G__43216 = "Header 4";
return React.DOM.h4(G__43215,G__43216);
})();
var G__43207 = (function (){var G__43217 = null;
var G__43218 = "Header 5";
return React.DOM.h5(G__43217,G__43218);
})();
var G__43208 = (function (){var G__43219 = null;
var G__43220 = "Header 6";
return React.DOM.h6(G__43219,G__43220);
})();
return React.DOM.div(G__43202,G__43203,G__43204,G__43205,G__43206,G__43207,G__43208);
});
reactcomparison.core.tab_data = new cljs.core.PersistentArrayMap(null, 3, ["managers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$156,"President Business",cljs.core.constant$keyword$157,"1 billion"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$156,"Dilbert",cljs.core.constant$keyword$157,"2"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$156,"Gordon Gecko",cljs.core.constant$keyword$157,"$$$"], null)], null),"designers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$156,"Frank Llyod Wright",cljs.core.constant$keyword$157,"100"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$156,"Andy Warhol",cljs.core.constant$keyword$157,"200"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$156,"Kim Kardashian",cljs.core.constant$keyword$157,"25"], null)], null),"developers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$156,"Kevin",cljs.core.constant$keyword$157,"1 million"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$156,"Lesley",cljs.core.constant$keyword$157,"1 million"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$156,"Scott",cljs.core.constant$keyword$157,"1 million"], null)], null)], null);
reactcomparison.core.Tabs = (function Tabs(active_tab){
var G__43249 = {"className": "tabs"};
var G__43250 = (function (){var G__43253 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"managers"))?" active":null))].join(''), "id": "managers", "onClick": ((function (G__43249){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.application_state_atom,cljs.core.assoc,cljs.core.constant$keyword$158,"managers");
});})(G__43249))
};
var G__43254 = (function (){var G__43255 = {"className": "tab-link", "href": "#managers"};
var G__43256 = "Managers";
return React.DOM.a(G__43255,G__43256);
})();
return React.DOM.li(G__43253,G__43254);
})();
var G__43251 = (function (){var G__43257 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"designers"))?" active":null))].join(''), "id": "designers", "onClick": ((function (G__43249,G__43250){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.application_state_atom,cljs.core.assoc,cljs.core.constant$keyword$158,"designers");
});})(G__43249,G__43250))
};
var G__43258 = (function (){var G__43259 = {"className": "tab-link", "href": "#designers"};
var G__43260 = "Designers";
return React.DOM.a(G__43259,G__43260);
})();
return React.DOM.li(G__43257,G__43258);
})();
var G__43252 = (function (){var G__43261 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"developers"))?" active":null))].join(''), "id": "developers", "onClick": ((function (G__43249,G__43250,G__43251){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.application_state_atom,cljs.core.assoc,cljs.core.constant$keyword$158,"developers");
});})(G__43249,G__43250,G__43251))
};
var G__43262 = (function (){var G__43263 = {"className": "tab-link", "href": "#developers"};
var G__43264 = "Developers";
return React.DOM.a(G__43263,G__43264);
})();
return React.DOM.li(G__43261,G__43262);
})();
return React.DOM.ul(G__43249,G__43250,G__43251,G__43252);
});
reactcomparison.core.TabList = (function TabList(active_tab){
var G__43267 = {"className": "tabList"};
var G__43268 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.TabListItems,cljs.core.get.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.tab_data,active_tab)));
return React.DOM.ol(G__43267,G__43268);
});
reactcomparison.core.TabListItems = (function TabListItems(data){
var G__43283 = null;
var G__43284 = (function (){var G__43285 = {"className": "tab-list-link"};
var G__43286 = (function (){var G__43289 = {"src": "http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon"};
return React.DOM.img(G__43289);
})();
var G__43287 = sablono.interpreter.interpret(cljs.core.constant$keyword$156.cljs$core$IFn$_invoke$arity$1(data));
var G__43288 = (function (){var G__43290 = null;
var G__43291 = " Followers: ";
var G__43292 = sablono.interpreter.interpret(cljs.core.constant$keyword$157.cljs$core$IFn$_invoke$arity$1(data));
return React.DOM.span(G__43290,G__43291,G__43292);
})();
return React.DOM.a(G__43285,G__43286,G__43287,G__43288);
})();
return React.DOM.li(G__43283,G__43284);
});
reactcomparison.core.TabsExample = (function TabsExample(state){
var attrs43294 = reactcomparison.core.Tabs(cljs.core.constant$keyword$158.cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs43294))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$117,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tabsExample"], null)], null),attrs43294], 0))):{"className": "tabsExample"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43294))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(reactcomparison.core.TabList(cljs.core.constant$keyword$158.cljs$core$IFn$_invoke$arity$1(state)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43294),sablono.interpreter.interpret(reactcomparison.core.TabList(cljs.core.constant$keyword$158.cljs$core$IFn$_invoke$arity$1(state)))], null))));
});
reactcomparison.core.click_like = (function click_like(e){
var liked_QMARK_ = cljs.core.constant$keyword$161.cljs$core$IFn$_invoke$arity$1((function (){var G__43296 = reactcomparison.core.application_state_atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__43296) : cljs.core.deref.call(null,G__43296));
})());
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.application_state_atom,cljs.core.assoc,cljs.core.constant$keyword$161,cljs.core.not(liked_QMARK_));
});
/**
* 
*/
reactcomparison.core.LikeButton = quiescent.component((function (state){
var G__43298 = {"onClick": (function (p1__43297_SHARP_){
return reactcomparison.core.click_like(p1__43297_SHARP_);
})};
var G__43299 = sablono.interpreter.interpret([cljs.core.str("You "),cljs.core.str(((cljs.core.constant$keyword$161.cljs$core$IFn$_invoke$arity$1(state) === true)?"like ":"haven't liked ")),cljs.core.str("this")].join(''));
return React.DOM.p(G__43298,G__43299);
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
var G__43301 = (((kwd instanceof cljs.core.Keyword))?kwd.fqn:null);
switch (G__43301) {
case "K":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$168,v,cljs.core.constant$keyword$167,reactcomparison.core.K__GT_F(v),cljs.core.constant$keyword$166,reactcomparison.core.K__GT_C(v)], null);

break;
case "F":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$167,v,cljs.core.constant$keyword$166,reactcomparison.core.F__GT_C(v),cljs.core.constant$keyword$168,reactcomparison.core.F__GT_K(v)], null);

break;
case "C":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$166,v,cljs.core.constant$keyword$167,reactcomparison.core.C__GT_F(v),cljs.core.constant$keyword$168,reactcomparison.core.C__GT_K(v)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(kwd)].join('')));

}
});
reactcomparison.core.on_change_input = (function on_change_input(temp_kwd,js_evt){
var new_value1 = (function (){var G__43305 = (js_evt["currentTarget"]["value"]);
return parseFloat(G__43305);
})();
var new_value2 = (cljs.core.truth_((function (){var G__43306 = new_value1;
return isNaN(G__43306);
})())?(0):new_value1);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reactcomparison.core.application_state_atom,cljs.core.merge,reactcomparison.core.convert_temps(temp_kwd,new_value2));
});
/**
* 
*/
reactcomparison.core.TextInput = quiescent.component((function (p__43308){
var vec__43309 = p__43308;
var temp_kwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43309,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43309,(1),null);
var attrs43310 = [cljs.core.str(cljs.core.name(temp_kwd)),cljs.core.str(": ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,((cljs.core.map_QMARK_(attrs43310))?sablono.interpreter.attributes(attrs43310):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43310))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__43311 = {"onChange": ((function (attrs43310,vec__43309,temp_kwd,v){
return (function (p1__43307_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__43307_SHARP_);
});})(attrs43310,vec__43309,temp_kwd,v))
, "type": "text", "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__43311) : sablono.interpreter.input.call(null,G__43311));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43310),(function (){var G__43312 = {"onChange": ((function (attrs43310,vec__43309,temp_kwd,v){
return (function (p1__43307_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__43307_SHARP_);
});})(attrs43310,vec__43309,temp_kwd,v))
, "type": "text", "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__43312) : sablono.interpreter.input.call(null,G__43312));
})()], null))));
}));
/**
* 
*/
reactcomparison.core.RangeInput = quiescent.component((function (p__43314){
var vec__43315 = p__43314;
var temp_kwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43315,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43315,(1),null);
var attrs43316 = [cljs.core.str(cljs.core.name(temp_kwd)),cljs.core.str(": ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,((cljs.core.map_QMARK_(attrs43316))?sablono.interpreter.attributes(attrs43316):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43316))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__43317 = {"min": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(temp_kwd,cljs.core.constant$keyword$168))?(0):(-450)), "max": (1000), "type": "range", "onChange": ((function (attrs43316,vec__43315,temp_kwd,v){
return (function (p1__43313_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__43313_SHARP_);
});})(attrs43316,vec__43315,temp_kwd,v))
, "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__43317) : sablono.interpreter.input.call(null,G__43317));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43316),(function (){var G__43318 = {"min": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(temp_kwd,cljs.core.constant$keyword$168))?(0):(-450)), "max": (1000), "type": "range", "onChange": ((function (attrs43316,vec__43315,temp_kwd,v){
return (function (p1__43313_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__43313_SHARP_);
});})(attrs43316,vec__43315,temp_kwd,v))
, "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__43318) : sablono.interpreter.input.call(null,G__43318));
})()], null))));
}));
/**
* 
*/
reactcomparison.core.TempCalcForm = quiescent.component((function (temps){
var G__43321 = null;
var G__43322 = (function (){var attrs43319 = (function (){var G__43324 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__43324) : reactcomparison.core.TextInput.call(null,G__43324));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.fieldset,((cljs.core.map_QMARK_(attrs43319))?sablono.interpreter.attributes(attrs43319):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43319))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__43325 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$167,cljs.core.constant$keyword$167.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__43325) : reactcomparison.core.TextInput.call(null,G__43325));
})()),sablono.interpreter.interpret((function (){var G__43326 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$168,cljs.core.constant$keyword$168.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__43326) : reactcomparison.core.TextInput.call(null,G__43326));
})())], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43319),sablono.interpreter.interpret((function (){var G__43327 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$167,cljs.core.constant$keyword$167.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__43327) : reactcomparison.core.TextInput.call(null,G__43327));
})()),sablono.interpreter.interpret((function (){var G__43328 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$168,cljs.core.constant$keyword$168.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__43328) : reactcomparison.core.TextInput.call(null,G__43328));
})())], null))));
})();
var G__43323 = (function (){var attrs43320 = (function (){var G__43329 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__43329) : reactcomparison.core.RangeInput.call(null,G__43329));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.fieldset,((cljs.core.map_QMARK_(attrs43320))?sablono.interpreter.attributes(attrs43320):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43320))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__43330 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$167,cljs.core.constant$keyword$167.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__43330) : reactcomparison.core.RangeInput.call(null,G__43330));
})()),sablono.interpreter.interpret((function (){var G__43331 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$168,cljs.core.constant$keyword$168.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__43331) : reactcomparison.core.RangeInput.call(null,G__43331));
})())], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43320),sablono.interpreter.interpret((function (){var G__43332 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$167,cljs.core.constant$keyword$167.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__43332) : reactcomparison.core.RangeInput.call(null,G__43332));
})()),sablono.interpreter.interpret((function (){var G__43333 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$168,cljs.core.constant$keyword$168.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__43333) : reactcomparison.core.RangeInput.call(null,G__43333));
})())], null))));
})();
return React.DOM.div(G__43321,G__43322,G__43323);
}));
/**
* 
*/
reactcomparison.core.TempCalcContainer = quiescent.component((function (state){
var attrs43334 = (function (){var G__43335 = state;
return (reactcomparison.core.TempCalcForm.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TempCalcForm.cljs$core$IFn$_invoke$arity$1(G__43335) : reactcomparison.core.TempCalcForm.call(null,G__43335));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs43334))?sablono.interpreter.attributes(attrs43334):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43334))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43334)], null))));
}));
/**
* 
*/
reactcomparison.core.RootComponent = quiescent.component((function (state){
var attrs43336 = reactcomparison.core.CommentBox(reactcomparison.core.commentData);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs43336))?sablono.interpreter.attributes(attrs43336):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43336))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(reactcomparison.core.DivExample()),sablono.interpreter.interpret(reactcomparison.core.HeaderExample()),sablono.interpreter.interpret((function (){var G__43337 = state;
return (reactcomparison.core.LikeButton.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.LikeButton.cljs$core$IFn$_invoke$arity$1(G__43337) : reactcomparison.core.LikeButton.call(null,G__43337));
})()),sablono.interpreter.interpret(reactcomparison.core.TabsExample(state)),sablono.interpreter.interpret((function (){var G__43338 = state;
return (reactcomparison.core.TempCalcContainer.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TempCalcContainer.cljs$core$IFn$_invoke$arity$1(G__43338) : reactcomparison.core.TempCalcContainer.call(null,G__43338));
})())], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43336),sablono.interpreter.interpret(reactcomparison.core.DivExample()),sablono.interpreter.interpret(reactcomparison.core.HeaderExample()),sablono.interpreter.interpret((function (){var G__43339 = state;
return (reactcomparison.core.LikeButton.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.LikeButton.cljs$core$IFn$_invoke$arity$1(G__43339) : reactcomparison.core.LikeButton.call(null,G__43339));
})()),sablono.interpreter.interpret(reactcomparison.core.TabsExample(state)),sablono.interpreter.interpret((function (){var G__43340 = state;
return (reactcomparison.core.TempCalcContainer.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TempCalcContainer.cljs$core$IFn$_invoke$arity$1(G__43340) : reactcomparison.core.TempCalcContainer.call(null,G__43340));
})())], null))));
}));
reactcomparison.core.application_state_atom = (function (){var G__43341 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$158,"managers",cljs.core.constant$keyword$161,false], null),reactcomparison.core.convert_temps(cljs.core.constant$keyword$166,(0))], 0));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__43341) : cljs.core.atom.call(null,G__43341));
})();
reactcomparison.core.container_el = reactcomparison.core.by_id("contentQuiescentSablono");
reactcomparison.core.on_change_state = (function on_change_state(_keyword,the_atom,old_state,new_state){
return quiescent.render((function (){var G__43343 = new_state;
return (reactcomparison.core.RootComponent.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RootComponent.cljs$core$IFn$_invoke$arity$1(G__43343) : reactcomparison.core.RootComponent.call(null,G__43343));
})(),reactcomparison.core.container_el);
});
cljs.core.add_watch(reactcomparison.core.application_state_atom,cljs.core.constant$keyword$170,reactcomparison.core.on_change_state);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.application_state_atom,cljs.core.identity);
