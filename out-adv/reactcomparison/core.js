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
var G__25049 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clj_thing], 0));
return console.log(G__25049);
});
/**
* Log a JavaScript thing.
*/
reactcomparison.core.js_log = (function js_log(js_thing){
var G__25051 = js_thing;
return console.log(G__25051);
});
reactcomparison.core.by_id = (function by_id(id){
return document.getElementById(id);
});
reactcomparison.core.set_html_BANG_ = (function set_html_BANG_(id,html){
return (reactcomparison.core.by_id(id)["innerHTML"] = html);
});
reactcomparison.core.commentData = (function (){var G__25052 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$155,"Pete Hunt",cljs.core.constant$keyword$156,"Comment 1"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$155,"Jordan Walke",cljs.core.constant$keyword$156,"Comment 2"], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25052) : cljs.core.atom.call(null,G__25052));
})();
reactcomparison.core.load_comments_from_server = (function load_comments_from_server(url){
return null;
});
reactcomparison.core.Comment = (function Comment(data){
var G__25060 = {"className": "comment"};
var G__25061 = (function (){var attrs25058 = cljs.core.constant$keyword$155.cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs25058))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$118,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commentAuthor"], null)], null),attrs25058], 0))):{"className": "commentAuthor"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs25058))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25058)], null))));
})();
var G__25062 = (function (){var attrs25059 = cljs.core.constant$keyword$156.cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs25059))?sablono.interpreter.attributes(attrs25059):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs25059))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25059)], null))));
})();
return React.DOM.div(G__25060,G__25061,G__25062);
});
reactcomparison.core.CommentForm = (function CommentForm(url){
var G__25074 = {"className": "commentForm"};
var G__25075 = (function (){var G__25078 = {"type": "text", "placeholder": "Your name"};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__25078) : sablono.interpreter.input.call(null,G__25078));
})();
var G__25076 = (function (){var G__25079 = {"type": "text", "placeholder": "Say something..."};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__25079) : sablono.interpreter.input.call(null,G__25079));
})();
var G__25077 = (function (){var G__25080 = {"type": "submit"};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__25080) : sablono.interpreter.input.call(null,G__25080));
})();
return React.DOM.form(G__25074,G__25075,G__25076,G__25077);
});
reactcomparison.core.CommentList = (function CommentList(the_atom){
var attrs25083 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.Comment,(function (){var G__25084 = the_atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25084) : cljs.core.deref.call(null,G__25084));
})()));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs25083))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$118,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commentList"], null)], null),attrs25083], 0))):{"className": "commentList"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs25083))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25083)], null))));
});
reactcomparison.core.CommentBox = (function CommentBox(the_atom){
var G__25095 = {"className": "CommentBox example"};
var G__25096 = (function (){var G__25099 = null;
var G__25100 = "Comments CLJS version";
return React.DOM.h1(G__25099,G__25100);
})();
var G__25097 = sablono.interpreter.interpret(reactcomparison.core.CommentList(the_atom));
var G__25098 = sablono.interpreter.interpret(reactcomparison.core.CommentForm());
return React.DOM.div(G__25095,G__25096,G__25097,G__25098);
});
reactcomparison.core.DivExample = (function DivExample(){
var G__25109 = {"className": "divExample example"};
var G__25110 = (function (){var G__25111 = null;
var G__25112 = "Here is a sample div with a nested p tag.";
return React.DOM.p(G__25111,G__25112);
})();
return React.DOM.div(G__25109,G__25110);
});
reactcomparison.core.HeaderExample = (function HeaderExample(){
var G__25136 = {"className": "headerExample example"};
var G__25137 = (function (){var G__25143 = null;
var G__25144 = "Header 1";
return React.DOM.h1(G__25143,G__25144);
})();
var G__25138 = (function (){var G__25145 = null;
var G__25146 = "Header 2";
return React.DOM.h2(G__25145,G__25146);
})();
var G__25139 = (function (){var G__25147 = null;
var G__25148 = "Header 3";
return React.DOM.h3(G__25147,G__25148);
})();
var G__25140 = (function (){var G__25149 = null;
var G__25150 = "Header 4";
return React.DOM.h4(G__25149,G__25150);
})();
var G__25141 = (function (){var G__25151 = null;
var G__25152 = "Header 5";
return React.DOM.h5(G__25151,G__25152);
})();
var G__25142 = (function (){var G__25153 = null;
var G__25154 = "Header 6";
return React.DOM.h6(G__25153,G__25154);
})();
return React.DOM.div(G__25136,G__25137,G__25138,G__25139,G__25140,G__25141,G__25142);
});
reactcomparison.core.tab_data = new cljs.core.PersistentArrayMap(null, 3, ["managers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$157,"President Business",cljs.core.constant$keyword$158,"1 billion"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$157,"Dilbert",cljs.core.constant$keyword$158,"2"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$157,"Gordon Gecko",cljs.core.constant$keyword$158,"$$$"], null)], null),"designers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$157,"Frank Llyod Wright",cljs.core.constant$keyword$158,"100"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$157,"Andy Warhol",cljs.core.constant$keyword$158,"200"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$157,"Kim Kardashian",cljs.core.constant$keyword$158,"25"], null)], null),"developers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$157,"Kevin",cljs.core.constant$keyword$158,"1 million"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$157,"Lesley",cljs.core.constant$keyword$158,"1 million"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$157,"Scott",cljs.core.constant$keyword$158,"1 million"], null)], null)], null);
reactcomparison.core.tab_state_atom = (function (){var G__25155 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$159,"managers"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25155) : cljs.core.atom.call(null,G__25155));
})();
reactcomparison.core.Tabs = (function Tabs(active_tab){
var G__25184 = {"className": "tabs"};
var G__25185 = (function (){var G__25188 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"managers"))?" active":null))].join(''), "id": "managers", "onClick": ((function (G__25184){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.tab_state_atom,cljs.core.assoc,cljs.core.constant$keyword$159,"managers");
});})(G__25184))
};
var G__25189 = (function (){var G__25190 = {"className": "tab-link", "href": "#managers"};
var G__25191 = "Managers";
return React.DOM.a(G__25190,G__25191);
})();
return React.DOM.li(G__25188,G__25189);
})();
var G__25186 = (function (){var G__25192 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"designers"))?" active":null))].join(''), "id": "designers", "onClick": ((function (G__25184,G__25185){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.tab_state_atom,cljs.core.assoc,cljs.core.constant$keyword$159,"designers");
});})(G__25184,G__25185))
};
var G__25193 = (function (){var G__25194 = {"className": "tab-link", "href": "#designers"};
var G__25195 = "Designers";
return React.DOM.a(G__25194,G__25195);
})();
return React.DOM.li(G__25192,G__25193);
})();
var G__25187 = (function (){var G__25196 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"developers"))?" active":null))].join(''), "id": "developers", "onClick": ((function (G__25184,G__25185,G__25186){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.tab_state_atom,cljs.core.assoc,cljs.core.constant$keyword$159,"developers");
});})(G__25184,G__25185,G__25186))
};
var G__25197 = (function (){var G__25198 = {"className": "tab-link", "href": "#developers"};
var G__25199 = "Developers";
return React.DOM.a(G__25198,G__25199);
})();
return React.DOM.li(G__25196,G__25197);
})();
return React.DOM.ul(G__25184,G__25185,G__25186,G__25187);
});
reactcomparison.core.TabList = (function TabList(active_tab){
var G__25202 = {"className": "tabList"};
var G__25203 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.TabListItems,cljs.core.get.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.tab_data,active_tab)));
return React.DOM.ol(G__25202,G__25203);
});
reactcomparison.core.TabListItems = (function TabListItems(data){
var G__25218 = null;
var G__25219 = (function (){var G__25220 = {"className": "tab-list-link"};
var G__25221 = (function (){var G__25224 = {"src": "http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon"};
return React.DOM.img(G__25224);
})();
var G__25222 = sablono.interpreter.interpret(cljs.core.constant$keyword$157.cljs$core$IFn$_invoke$arity$1(data));
var G__25223 = (function (){var G__25225 = null;
var G__25226 = " Followers: ";
var G__25227 = sablono.interpreter.interpret(cljs.core.constant$keyword$158.cljs$core$IFn$_invoke$arity$1(data));
return React.DOM.span(G__25225,G__25226,G__25227);
})();
return React.DOM.a(G__25220,G__25221,G__25222,G__25223);
})();
return React.DOM.li(G__25218,G__25219);
});
reactcomparison.core.TabsExample = (function TabsExample(state){
var attrs25229 = reactcomparison.core.Tabs(cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs25229))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$118,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tabsExample"], null)], null),attrs25229], 0))):{"className": "tabsExample"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs25229))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(reactcomparison.core.TabList(cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(state)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25229),sablono.interpreter.interpret(reactcomparison.core.TabList(cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(state)))], null))));
});
/**
* 
*/
reactcomparison.core.RootComponent = quiescent.component((function (state){
var attrs25230 = reactcomparison.core.CommentBox(reactcomparison.core.commentData);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs25230))?sablono.interpreter.attributes(attrs25230):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs25230))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(reactcomparison.core.DivExample()),sablono.interpreter.interpret(reactcomparison.core.HeaderExample()),sablono.interpreter.interpret(reactcomparison.core.TabsExample(state))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25230),sablono.interpreter.interpret(reactcomparison.core.DivExample()),sablono.interpreter.interpret(reactcomparison.core.HeaderExample()),sablono.interpreter.interpret(reactcomparison.core.TabsExample(state))], null))));
}));
reactcomparison.core.container_el = reactcomparison.core.by_id("contentQuiescentSablono");
reactcomparison.core.on_change_state = (function on_change_state(_keyword,the_atom,old_state,new_state){
return quiescent.render((function (){var G__25232 = new_state;
return (reactcomparison.core.RootComponent.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RootComponent.cljs$core$IFn$_invoke$arity$1(G__25232) : reactcomparison.core.RootComponent.call(null,G__25232));
})(),reactcomparison.core.container_el);
});
cljs.core.add_watch(reactcomparison.core.tab_state_atom,cljs.core.constant$keyword$160,reactcomparison.core.on_change_state);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.tab_state_atom,cljs.core.identity);
