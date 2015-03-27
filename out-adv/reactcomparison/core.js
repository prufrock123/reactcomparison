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
var G__18150 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clj_thing], 0));
return console.log(G__18150);
});
/**
* Log a JavaScript thing.
*/
reactcomparison.core.js_log = (function js_log(js_thing){
var G__18152 = js_thing;
return console.log(G__18152);
});
reactcomparison.core.by_id = (function by_id(id){
return document.getElementById(id);
});
reactcomparison.core.set_html_BANG_ = (function set_html_BANG_(id,html){
return (reactcomparison.core.by_id(id)["innerHTML"] = html);
});
reactcomparison.core.commentData = (function (){var G__18153 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$159,"Pete Hunt",cljs.core.constant$keyword$160,"Comment 1"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$159,"Jordan Walke",cljs.core.constant$keyword$160,"Comment 2"], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18153) : cljs.core.atom.call(null,G__18153));
})();
reactcomparison.core.load_comments_from_server = (function load_comments_from_server(url){
return null;
});
reactcomparison.core.Comment = (function Comment(data){
var G__18161 = {"className": "comment"};
var G__18162 = (function (){var attrs18159 = cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs18159))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commentAuthor"], null)], null),attrs18159], 0))):{"className": "commentAuthor"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18159))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18159)], null))));
})();
var G__18163 = (function (){var attrs18160 = cljs.core.constant$keyword$160.cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs18160))?sablono.interpreter.attributes(attrs18160):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18160))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18160)], null))));
})();
return React.DOM.div(G__18161,G__18162,G__18163);
});
reactcomparison.core.CommentForm = (function CommentForm(url){
var G__18175 = {"className": "commentForm"};
var G__18176 = (function (){var G__18179 = {"type": "text", "placeholder": "Your name"};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__18179) : sablono.interpreter.input.call(null,G__18179));
})();
var G__18177 = (function (){var G__18180 = {"type": "text", "placeholder": "Say something..."};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__18180) : sablono.interpreter.input.call(null,G__18180));
})();
var G__18178 = (function (){var G__18181 = {"type": "submit"};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__18181) : sablono.interpreter.input.call(null,G__18181));
})();
return React.DOM.form(G__18175,G__18176,G__18177,G__18178);
});
reactcomparison.core.CommentList = (function CommentList(the_atom){
var attrs18184 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.Comment,(function (){var G__18185 = the_atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18185) : cljs.core.deref.call(null,G__18185));
})()));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs18184))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commentList"], null)], null),attrs18184], 0))):{"className": "commentList"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18184))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18184)], null))));
});
reactcomparison.core.CommentBox = (function CommentBox(the_atom){
var attrs18187 = reactcomparison.core.CommentList(the_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs18187))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CommentBox","example"], null)], null),attrs18187], 0))):{"className": "CommentBox example"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18187))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(reactcomparison.core.CommentForm())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18187),sablono.interpreter.interpret(reactcomparison.core.CommentForm())], null))));
});
reactcomparison.core.DivExample = (function DivExample(){
var G__18196 = {"className": "divExample example"};
var G__18197 = (function (){var G__18198 = null;
var G__18199 = "Here is a sample div with a nested p tag.";
return React.DOM.p(G__18198,G__18199);
})();
return React.DOM.div(G__18196,G__18197);
});
reactcomparison.core.HeaderExample = (function HeaderExample(){
var G__18223 = {"className": "headerExample example"};
var G__18224 = (function (){var G__18230 = null;
var G__18231 = "Header 1";
return React.DOM.h1(G__18230,G__18231);
})();
var G__18225 = (function (){var G__18232 = null;
var G__18233 = "Header 2";
return React.DOM.h2(G__18232,G__18233);
})();
var G__18226 = (function (){var G__18234 = null;
var G__18235 = "Header 3";
return React.DOM.h3(G__18234,G__18235);
})();
var G__18227 = (function (){var G__18236 = null;
var G__18237 = "Header 4";
return React.DOM.h4(G__18236,G__18237);
})();
var G__18228 = (function (){var G__18238 = null;
var G__18239 = "Header 5";
return React.DOM.h5(G__18238,G__18239);
})();
var G__18229 = (function (){var G__18240 = null;
var G__18241 = "Header 6";
return React.DOM.h6(G__18240,G__18241);
})();
return React.DOM.div(G__18223,G__18224,G__18225,G__18226,G__18227,G__18228,G__18229);
});
reactcomparison.core.tab_data = new cljs.core.PersistentArrayMap(null, 3, ["managers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"President Business",cljs.core.constant$keyword$162,"1 billion"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Dilbert",cljs.core.constant$keyword$162,"2"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Gordon Gecko",cljs.core.constant$keyword$162,"$$$"], null)], null),"designers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Frank Llyod Wright",cljs.core.constant$keyword$162,"100"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Andy Warhol",cljs.core.constant$keyword$162,"200"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Kim Kardashian",cljs.core.constant$keyword$162,"25"], null)], null),"developers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Kevin",cljs.core.constant$keyword$162,"1 million"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Lesley",cljs.core.constant$keyword$162,"1 million"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$161,"Scott",cljs.core.constant$keyword$162,"1 million"], null)], null)], null);
reactcomparison.core.click_tab = (function click_tab(js_evt,value){
js_evt.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.application_state_atom,cljs.core.assoc,cljs.core.constant$keyword$163,value);
});
reactcomparison.core.Tabs = (function Tabs(active_tab){
var G__18273 = {"className": "tabs"};
var G__18274 = (function (){var G__18277 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"managers"))?" active":null))].join(''), "id": "managers", "onClick": ((function (G__18273){
return (function (p1__18242_SHARP_){
return reactcomparison.core.click_tab(p1__18242_SHARP_,"managers");
});})(G__18273))
};
var G__18278 = (function (){var G__18279 = {"className": "tab-link", "href": "#managers"};
var G__18280 = "Managers";
return React.DOM.a(G__18279,G__18280);
})();
return React.DOM.li(G__18277,G__18278);
})();
var G__18275 = (function (){var G__18281 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"designers"))?" active":null))].join(''), "id": "designers", "onClick": ((function (G__18273,G__18274){
return (function (p1__18243_SHARP_){
return reactcomparison.core.click_tab(p1__18243_SHARP_,"designers");
});})(G__18273,G__18274))
};
var G__18282 = (function (){var G__18283 = {"className": "tab-link", "href": "#designers"};
var G__18284 = "Designers";
return React.DOM.a(G__18283,G__18284);
})();
return React.DOM.li(G__18281,G__18282);
})();
var G__18276 = (function (){var G__18285 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"developers"))?" active":null))].join(''), "id": "developers", "onClick": ((function (G__18273,G__18274,G__18275){
return (function (p1__18244_SHARP_){
return reactcomparison.core.click_tab(p1__18244_SHARP_,"developers");
});})(G__18273,G__18274,G__18275))
};
var G__18286 = (function (){var G__18287 = {"className": "tab-link", "href": "#developers"};
var G__18288 = "Developers";
return React.DOM.a(G__18287,G__18288);
})();
return React.DOM.li(G__18285,G__18286);
})();
return React.DOM.ul(G__18273,G__18274,G__18275,G__18276);
});
reactcomparison.core.TabList = (function TabList(active_tab){
var G__18291 = {"className": "tabList"};
var G__18292 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.TabListItems,cljs.core.get.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.tab_data,active_tab)));
return React.DOM.ol(G__18291,G__18292);
});
reactcomparison.core.TabListItems = (function TabListItems(data){
var G__18307 = null;
var G__18308 = (function (){var G__18309 = {"className": "tab-list-link"};
var G__18310 = (function (){var G__18313 = {"src": "http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon"};
return React.DOM.img(G__18313);
})();
var G__18311 = sablono.interpreter.interpret(cljs.core.constant$keyword$161.cljs$core$IFn$_invoke$arity$1(data));
var G__18312 = (function (){var G__18314 = null;
var G__18315 = " Followers: ";
var G__18316 = sablono.interpreter.interpret(cljs.core.constant$keyword$162.cljs$core$IFn$_invoke$arity$1(data));
return React.DOM.span(G__18314,G__18315,G__18316);
})();
return React.DOM.a(G__18309,G__18310,G__18311,G__18312);
})();
return React.DOM.li(G__18307,G__18308);
});
reactcomparison.core.TabsExample = (function TabsExample(state){
var attrs18318 = reactcomparison.core.Tabs(cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs18318))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$122,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tabsExample"], null)], null),attrs18318], 0))):{"className": "tabsExample"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18318))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(reactcomparison.core.TabList(cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(state)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18318),sablono.interpreter.interpret(reactcomparison.core.TabList(cljs.core.constant$keyword$163.cljs$core$IFn$_invoke$arity$1(state)))], null))));
});
reactcomparison.core.click_like = (function click_like(e){
var liked_QMARK_ = cljs.core.constant$keyword$164.cljs$core$IFn$_invoke$arity$1((function (){var G__18320 = reactcomparison.core.application_state_atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18320) : cljs.core.deref.call(null,G__18320));
})());
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.application_state_atom,cljs.core.assoc,cljs.core.constant$keyword$164,cljs.core.not(liked_QMARK_));
});
/**
* 
*/
reactcomparison.core.LikeButton = quiescent.component((function (state){
var G__18322 = {"onClick": (function (p1__18321_SHARP_){
return reactcomparison.core.click_like(p1__18321_SHARP_);
})};
var G__18323 = sablono.interpreter.interpret([cljs.core.str("You "),cljs.core.str(((cljs.core.constant$keyword$164.cljs$core$IFn$_invoke$arity$1(state) === true)?"like ":"haven't liked ")),cljs.core.str("this")].join(''));
return React.DOM.p(G__18322,G__18323);
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
var G__18325 = (((kwd instanceof cljs.core.Keyword))?kwd.fqn:null);
switch (G__18325) {
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
var new_value1 = (function (){var G__18329 = (js_evt["currentTarget"]["value"]);
return parseFloat(G__18329);
})();
var new_value2 = (cljs.core.truth_((function (){var G__18330 = new_value1;
return isNaN(G__18330);
})())?(0):new_value1);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reactcomparison.core.application_state_atom,cljs.core.merge,reactcomparison.core.convert_temps(temp_kwd,new_value2));
});
/**
* 
*/
reactcomparison.core.TextInput = quiescent.component((function (p__18332){
var vec__18333 = p__18332;
var temp_kwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18333,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18333,(1),null);
var attrs18334 = [cljs.core.str(cljs.core.name(temp_kwd)),cljs.core.str(": ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,((cljs.core.map_QMARK_(attrs18334))?sablono.interpreter.attributes(attrs18334):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18334))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18335 = {"onChange": ((function (attrs18334,vec__18333,temp_kwd,v){
return (function (p1__18331_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__18331_SHARP_);
});})(attrs18334,vec__18333,temp_kwd,v))
, "type": "text", "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__18335) : sablono.interpreter.input.call(null,G__18335));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18334),(function (){var G__18336 = {"onChange": ((function (attrs18334,vec__18333,temp_kwd,v){
return (function (p1__18331_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__18331_SHARP_);
});})(attrs18334,vec__18333,temp_kwd,v))
, "type": "text", "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__18336) : sablono.interpreter.input.call(null,G__18336));
})()], null))));
}));
/**
* 
*/
reactcomparison.core.RangeInput = quiescent.component((function (p__18338){
var vec__18339 = p__18338;
var temp_kwd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18339,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18339,(1),null);
var attrs18340 = [cljs.core.str(cljs.core.name(temp_kwd)),cljs.core.str(": ")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,((cljs.core.map_QMARK_(attrs18340))?sablono.interpreter.attributes(attrs18340):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18340))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18341 = {"min": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(temp_kwd,cljs.core.constant$keyword$165))?(0):(-450)), "max": (1000), "type": "range", "onChange": ((function (attrs18340,vec__18339,temp_kwd,v){
return (function (p1__18337_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__18337_SHARP_);
});})(attrs18340,vec__18339,temp_kwd,v))
, "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__18341) : sablono.interpreter.input.call(null,G__18341));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18340),(function (){var G__18342 = {"min": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(temp_kwd,cljs.core.constant$keyword$165))?(0):(-450)), "max": (1000), "type": "range", "onChange": ((function (attrs18340,vec__18339,temp_kwd,v){
return (function (p1__18337_SHARP_){
return reactcomparison.core.on_change_input(temp_kwd,p1__18337_SHARP_);
});})(attrs18340,vec__18339,temp_kwd,v))
, "value": v};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__18342) : sablono.interpreter.input.call(null,G__18342));
})()], null))));
}));
/**
* 
*/
reactcomparison.core.TempCalcForm = quiescent.component((function (temps){
var G__18345 = null;
var G__18346 = (function (){var attrs18343 = (function (){var G__18348 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$167,cljs.core.constant$keyword$167.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__18348) : reactcomparison.core.TextInput.call(null,G__18348));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.fieldset,((cljs.core.map_QMARK_(attrs18343))?sablono.interpreter.attributes(attrs18343):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18343))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__18349 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__18349) : reactcomparison.core.TextInput.call(null,G__18349));
})()),sablono.interpreter.interpret((function (){var G__18350 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__18350) : reactcomparison.core.TextInput.call(null,G__18350));
})())], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18343),sablono.interpreter.interpret((function (){var G__18351 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__18351) : reactcomparison.core.TextInput.call(null,G__18351));
})()),sablono.interpreter.interpret((function (){var G__18352 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TextInput.cljs$core$IFn$_invoke$arity$1(G__18352) : reactcomparison.core.TextInput.call(null,G__18352));
})())], null))));
})();
var G__18347 = (function (){var attrs18344 = (function (){var G__18353 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$167,cljs.core.constant$keyword$167.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__18353) : reactcomparison.core.RangeInput.call(null,G__18353));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.fieldset,((cljs.core.map_QMARK_(attrs18344))?sablono.interpreter.attributes(attrs18344):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18344))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((function (){var G__18354 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__18354) : reactcomparison.core.RangeInput.call(null,G__18354));
})()),sablono.interpreter.interpret((function (){var G__18355 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__18355) : reactcomparison.core.RangeInput.call(null,G__18355));
})())], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18344),sablono.interpreter.interpret((function (){var G__18356 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__18356) : reactcomparison.core.RangeInput.call(null,G__18356));
})()),sablono.interpreter.interpret((function (){var G__18357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,cljs.core.constant$keyword$165.cljs$core$IFn$_invoke$arity$1(temps)], null);
return (reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RangeInput.cljs$core$IFn$_invoke$arity$1(G__18357) : reactcomparison.core.RangeInput.call(null,G__18357));
})())], null))));
})();
return React.DOM.div(G__18345,G__18346,G__18347);
}));
/**
* 
*/
reactcomparison.core.TempCalcContainer = quiescent.component((function (state){
var attrs18358 = (function (){var G__18359 = state;
return (reactcomparison.core.TempCalcForm.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TempCalcForm.cljs$core$IFn$_invoke$arity$1(G__18359) : reactcomparison.core.TempCalcForm.call(null,G__18359));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs18358))?sablono.interpreter.attributes(attrs18358):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs18358))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs18358)], null))));
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
var G__18396 = null;
var G__18397 = (function (){var G__18403 = {"className": "componentCLJS", "id": "CLJScommentComponentRender"};
var G__18404 = (function (){var G__18409 = null;
return React.DOM.hr(G__18409);
})();
var G__18405 = (function (){var G__18410 = null;
var G__18411 = "Comment Component";
return React.DOM.h4(G__18410,G__18411);
})();
var G__18406 = (function (){var G__18412 = null;
return React.DOM.hr(G__18412);
})();
var G__18407 = sablono.interpreter.interpret(reactcomparison.core.CommentBox(reactcomparison.core.commentData));
var G__18408 = (function (){var G__18413 = {"className": "language-clojure"};
var G__18414 = (function (){var G__18415 = {"className": "language-clojure", "dangerouslySetInnerHTML": {"__html": reactcomparison.core.comment_component_snippet}};
return React.DOM.code(G__18415);
})();
return React.DOM.pre(G__18413,G__18414);
})();
return React.DOM.div(G__18403,G__18404,G__18405,G__18406,G__18407,G__18408);
})();
var G__18398 = (function (){var G__18416 = {"className": "componentCLJS", "id": "CLJSsimpleDivComponentRender"};
var G__18417 = (function (){var G__18422 = null;
return React.DOM.hr(G__18422);
})();
var G__18418 = (function (){var G__18423 = null;
var G__18424 = "Simple Div Component";
return React.DOM.h4(G__18423,G__18424);
})();
var G__18419 = (function (){var G__18425 = null;
return React.DOM.hr(G__18425);
})();
var G__18420 = sablono.interpreter.interpret(reactcomparison.core.DivExample());
var G__18421 = (function (){var G__18426 = {"className": "language-clojure"};
var G__18427 = (function (){var G__18428 = {"className": "language-clojure", "dangerouslySetInnerHTML": {"__html": reactcomparison.core.simple_div_component_snippet}};
return React.DOM.code(G__18428);
})();
return React.DOM.pre(G__18426,G__18427);
})();
return React.DOM.div(G__18416,G__18417,G__18418,G__18419,G__18420,G__18421);
})();
var G__18399 = (function (){var G__18429 = {"className": "componentCLJS", "id": "CLJSheaderComponentRender"};
var G__18430 = (function (){var G__18435 = null;
return React.DOM.hr(G__18435);
})();
var G__18431 = (function (){var G__18436 = null;
var G__18437 = "Header Component";
return React.DOM.h4(G__18436,G__18437);
})();
var G__18432 = (function (){var G__18438 = null;
return React.DOM.hr(G__18438);
})();
var G__18433 = sablono.interpreter.interpret(reactcomparison.core.HeaderExample());
var G__18434 = (function (){var G__18439 = {"className": "language-clojure"};
var G__18440 = (function (){var G__18441 = {"className": "language-clojure", "dangerouslySetInnerHTML": {"__html": reactcomparison.core.header_component_snippet}};
return React.DOM.code(G__18441);
})();
return React.DOM.pre(G__18439,G__18440);
})();
return React.DOM.div(G__18429,G__18430,G__18431,G__18432,G__18433,G__18434);
})();
var G__18400 = (function (){var G__18442 = {"className": "componentCLJS", "id": "CLJSlikeButtonComponentRender"};
var G__18443 = (function (){var G__18448 = null;
return React.DOM.hr(G__18448);
})();
var G__18444 = (function (){var G__18449 = null;
var G__18450 = "Like Button Component";
return React.DOM.h4(G__18449,G__18450);
})();
var G__18445 = (function (){var G__18451 = null;
return React.DOM.hr(G__18451);
})();
var G__18446 = sablono.interpreter.interpret((function (){var G__18452 = state;
return (reactcomparison.core.LikeButton.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.LikeButton.cljs$core$IFn$_invoke$arity$1(G__18452) : reactcomparison.core.LikeButton.call(null,G__18452));
})());
var G__18447 = (function (){var G__18453 = {"className": "language-clojure"};
var G__18454 = (function (){var G__18455 = {"className": "language-clojure", "dangerouslySetInnerHTML": {"__html": reactcomparison.core.like_button_component_snippet}};
return React.DOM.code(G__18455);
})();
return React.DOM.pre(G__18453,G__18454);
})();
return React.DOM.div(G__18442,G__18443,G__18444,G__18445,G__18446,G__18447);
})();
var G__18401 = (function (){var G__18456 = {"className": "componentCLJS", "id": "CLJStabComponentRender"};
var G__18457 = (function (){var G__18462 = null;
return React.DOM.hr(G__18462);
})();
var G__18458 = (function (){var G__18463 = null;
var G__18464 = "Tab Component";
return React.DOM.h4(G__18463,G__18464);
})();
var G__18459 = (function (){var G__18465 = null;
return React.DOM.hr(G__18465);
})();
var G__18460 = sablono.interpreter.interpret(reactcomparison.core.TabsExample(state));
var G__18461 = (function (){var G__18466 = {"className": "language-clojure"};
var G__18467 = (function (){var G__18468 = {"className": "language-clojure", "dangerouslySetInnerHTML": {"__html": reactcomparison.core.tab_component_snippet}};
return React.DOM.code(G__18468);
})();
return React.DOM.pre(G__18466,G__18467);
})();
return React.DOM.div(G__18456,G__18457,G__18458,G__18459,G__18460,G__18461);
})();
var G__18402 = (function (){var G__18469 = {"className": "componentCLJS", "id": "CLJStempCalcComponentRender"};
var G__18470 = (function (){var G__18475 = null;
return React.DOM.hr(G__18475);
})();
var G__18471 = (function (){var G__18476 = null;
var G__18477 = "Temp Calc Component";
return React.DOM.h4(G__18476,G__18477);
})();
var G__18472 = (function (){var G__18478 = null;
return React.DOM.hr(G__18478);
})();
var G__18473 = sablono.interpreter.interpret((function (){var G__18479 = state;
return (reactcomparison.core.TempCalcContainer.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.TempCalcContainer.cljs$core$IFn$_invoke$arity$1(G__18479) : reactcomparison.core.TempCalcContainer.call(null,G__18479));
})());
var G__18474 = (function (){var G__18480 = {"className": "language-clojure"};
var G__18481 = (function (){var G__18482 = {"className": "language-clojure", "dangerouslySetInnerHTML": {"__html": reactcomparison.core.temp_calc_component_snippet}};
return React.DOM.code(G__18482);
})();
return React.DOM.pre(G__18480,G__18481);
})();
return React.DOM.div(G__18469,G__18470,G__18471,G__18472,G__18473,G__18474);
})();
return React.DOM.div(G__18396,G__18397,G__18398,G__18399,G__18400,G__18401,G__18402);
}));
reactcomparison.core.application_state_atom = (function (){var G__18483 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$163,"managers",cljs.core.constant$keyword$164,false], null),reactcomparison.core.convert_temps(cljs.core.constant$keyword$167,(0))], 0));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18483) : cljs.core.atom.call(null,G__18483));
})();
reactcomparison.core.container_el = reactcomparison.core.by_id("contentQuiescentSablono");
reactcomparison.core.on_change_state = (function on_change_state(_keyword,the_atom,old_state,new_state){
return quiescent.render((function (){var G__18485 = new_state;
return (reactcomparison.core.RootComponent.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RootComponent.cljs$core$IFn$_invoke$arity$1(G__18485) : reactcomparison.core.RootComponent.call(null,G__18485));
})(),reactcomparison.core.container_el);
});
cljs.core.add_watch(reactcomparison.core.application_state_atom,cljs.core.constant$keyword$168,reactcomparison.core.on_change_state);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.application_state_atom,cljs.core.identity);
