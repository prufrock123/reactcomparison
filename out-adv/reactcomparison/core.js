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
var G__67561 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clj_thing], 0));
return console.log(G__67561);
});
/**
* Log a JavaScript thing.
*/
reactcomparison.core.js_log = (function js_log(js_thing){
var G__67563 = js_thing;
return console.log(G__67563);
});
reactcomparison.core.by_id = (function by_id(id){
return document.getElementById(id);
});
reactcomparison.core.set_html_BANG_ = (function set_html_BANG_(id,html){
return (reactcomparison.core.by_id(id)["innerHTML"] = html);
});
reactcomparison.core.commentData = (function (){var G__67564 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$151,"Pete Hunt",cljs.core.constant$keyword$152,"Comment 1"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$151,"Jordan Walke",cljs.core.constant$keyword$152,"Comment 2"], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__67564) : cljs.core.atom.call(null,G__67564));
})();
reactcomparison.core.load_comments_from_server = (function load_comments_from_server(url){
return null;
});
reactcomparison.core.Comment = (function Comment(data){
var G__67572 = {"className": "comment"};
var G__67573 = (function (){var attrs67570 = cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs67570))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commentAuthor"], null)], null),attrs67570], 0))):{"className": "commentAuthor"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67570))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67570)], null))));
})();
var G__67574 = (function (){var attrs67571 = cljs.core.constant$keyword$152.cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs67571))?sablono.interpreter.attributes(attrs67571):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67571))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67571)], null))));
})();
return React.DOM.div(G__67572,G__67573,G__67574);
});
reactcomparison.core.CommentForm = (function CommentForm(url){
var G__67586 = {"className": "commentForm"};
var G__67587 = (function (){var G__67590 = {"type": "text"};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__67590) : sablono.interpreter.input.call(null,G__67590));
})();
var G__67588 = (function (){var G__67591 = {"type": "text"};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__67591) : sablono.interpreter.input.call(null,G__67591));
})();
var G__67589 = (function (){var G__67592 = {"type": "submit"};
return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__67592) : sablono.interpreter.input.call(null,G__67592));
})();
return React.DOM.form(G__67586,G__67587,G__67588,G__67589);
});
reactcomparison.core.CommentList = (function CommentList(the_atom){
var attrs67595 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.Comment,(function (){var G__67596 = the_atom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__67596) : cljs.core.deref.call(null,G__67596));
})()));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs67595))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commentList"], null)], null),attrs67595], 0))):{"className": "commentList"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67595))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(reactcomparison.core.CommentForm())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67595),sablono.interpreter.interpret(reactcomparison.core.CommentForm())], null))));
});
reactcomparison.core.CommentBox = (function CommentBox(the_atom){
var G__67606 = {"className": "CommentBox example"};
var G__67607 = (function (){var G__67609 = null;
var G__67610 = "Comments CLJS version";
return React.DOM.h1(G__67609,G__67610);
})();
var G__67608 = sablono.interpreter.interpret(reactcomparison.core.CommentList(the_atom));
return React.DOM.div(G__67606,G__67607,G__67608);
});
reactcomparison.core.DivExample = (function DivExample(){
var G__67619 = {"className": "divExample example"};
var G__67620 = (function (){var G__67621 = null;
var G__67622 = "Here is a sample div with a nested p tag.";
return React.DOM.p(G__67621,G__67622);
})();
return React.DOM.div(G__67619,G__67620);
});
reactcomparison.core.HeaderExample = (function HeaderExample(){
var G__67646 = {"className": "headerExample example"};
var G__67647 = (function (){var G__67653 = null;
var G__67654 = "Header 1";
return React.DOM.h1(G__67653,G__67654);
})();
var G__67648 = (function (){var G__67655 = null;
var G__67656 = "Header 2";
return React.DOM.h2(G__67655,G__67656);
})();
var G__67649 = (function (){var G__67657 = null;
var G__67658 = "Header 3";
return React.DOM.h3(G__67657,G__67658);
})();
var G__67650 = (function (){var G__67659 = null;
var G__67660 = "Header 4";
return React.DOM.h4(G__67659,G__67660);
})();
var G__67651 = (function (){var G__67661 = null;
var G__67662 = "Header 5";
return React.DOM.h5(G__67661,G__67662);
})();
var G__67652 = (function (){var G__67663 = null;
var G__67664 = "Header 6";
return React.DOM.h6(G__67663,G__67664);
})();
return React.DOM.div(G__67646,G__67647,G__67648,G__67649,G__67650,G__67651,G__67652);
});
reactcomparison.core.tab_data = new cljs.core.PersistentArrayMap(null, 3, ["managers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$155,"President Business",cljs.core.constant$keyword$156,"1 billion"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$155,"Dilbert",cljs.core.constant$keyword$156,"2"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$155,"Gordon Gecko",cljs.core.constant$keyword$156,"$$$"], null)], null),"designers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$155,"Frank Llyod Wright",cljs.core.constant$keyword$156,"100"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$155,"Andy Warhol",cljs.core.constant$keyword$156,"200"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$155,"Kim Kardashian",cljs.core.constant$keyword$156,"25"], null)], null),"developers",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$155,"Kevin",cljs.core.constant$keyword$156,"1 million"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$155,"Lesley",cljs.core.constant$keyword$156,"1 million"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$155,"Scott",cljs.core.constant$keyword$156,"1 million"], null)], null)], null);
reactcomparison.core.tab_state_atom = (function (){var G__67665 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$166,"managers"], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__67665) : cljs.core.atom.call(null,G__67665));
})();
reactcomparison.core.Tabs = (function Tabs(active_tab){
var G__67694 = {"className": "tabs"};
var G__67695 = (function (){var G__67698 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"managers"))?" active":null))].join(''), "id": "managers", "onClick": ((function (G__67694){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.tab_state_atom,cljs.core.assoc,cljs.core.constant$keyword$166,"managers");
});})(G__67694))
};
var G__67699 = (function (){var G__67700 = {"className": "tab-link", "href": "#managers"};
var G__67701 = "Managers";
return React.DOM.a(G__67700,G__67701);
})();
return React.DOM.li(G__67698,G__67699);
})();
var G__67696 = (function (){var G__67702 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"designers"))?" active":null))].join(''), "id": "designers", "onClick": ((function (G__67694,G__67695){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.tab_state_atom,cljs.core.assoc,cljs.core.constant$keyword$166,"designers");
});})(G__67694,G__67695))
};
var G__67703 = (function (){var G__67704 = {"className": "tab-link", "href": "#designers"};
var G__67705 = "Designers";
return React.DOM.a(G__67704,G__67705);
})();
return React.DOM.li(G__67702,G__67703);
})();
var G__67697 = (function (){var G__67706 = {"className": [cljs.core.str("tab"),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab,"developers"))?" active":null))].join(''), "id": "developers", "onClick": ((function (G__67694,G__67695,G__67696){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reactcomparison.core.tab_state_atom,cljs.core.assoc,cljs.core.constant$keyword$166,"developers");
});})(G__67694,G__67695,G__67696))
};
var G__67707 = (function (){var G__67708 = {"className": "tab-link", "href": "#developers"};
var G__67709 = "Developers";
return React.DOM.a(G__67708,G__67709);
})();
return React.DOM.li(G__67706,G__67707);
})();
return React.DOM.ul(G__67694,G__67695,G__67696,G__67697);
});
reactcomparison.core.TabList = (function TabList(active_tab){
var G__67712 = {"className": "tabList"};
var G__67713 = sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.TabListItems,cljs.core.get.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.tab_data,active_tab)));
return React.DOM.ol(G__67712,G__67713);
});
reactcomparison.core.TabListItems = (function TabListItems(data){
var G__67728 = null;
var G__67729 = (function (){var G__67730 = {"className": "tab-list-link"};
var G__67731 = (function (){var G__67734 = {"src": "http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon"};
return React.DOM.img(G__67734);
})();
var G__67732 = sablono.interpreter.interpret(cljs.core.constant$keyword$155.cljs$core$IFn$_invoke$arity$1(data));
var G__67733 = (function (){var G__67735 = null;
var G__67736 = " Followers: ";
var G__67737 = sablono.interpreter.interpret(cljs.core.constant$keyword$156.cljs$core$IFn$_invoke$arity$1(data));
return React.DOM.span(G__67735,G__67736,G__67737);
})();
return React.DOM.a(G__67730,G__67731,G__67732,G__67733);
})();
return React.DOM.li(G__67728,G__67729);
});
reactcomparison.core.TabsExample = (function TabsExample(state){
var attrs67739 = reactcomparison.core.Tabs(cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs67739))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$114,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tabsExample"], null)], null),attrs67739], 0))):{"className": "tabsExample"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67739))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(reactcomparison.core.TabList(cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(state)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67739),sablono.interpreter.interpret(reactcomparison.core.TabList(cljs.core.constant$keyword$166.cljs$core$IFn$_invoke$arity$1(state)))], null))));
});
/**
* 
*/
reactcomparison.core.RootComponent = quiescent.component((function (state){
var attrs67740 = reactcomparison.core.CommentBox(reactcomparison.core.commentData);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs67740))?sablono.interpreter.attributes(attrs67740):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs67740))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(reactcomparison.core.DivExample()),sablono.interpreter.interpret(reactcomparison.core.HeaderExample()),sablono.interpreter.interpret(reactcomparison.core.TabsExample(state))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs67740),sablono.interpreter.interpret(reactcomparison.core.DivExample()),sablono.interpreter.interpret(reactcomparison.core.HeaderExample()),sablono.interpreter.interpret(reactcomparison.core.TabsExample(state))], null))));
}));
reactcomparison.core.container_el = reactcomparison.core.by_id("contentQuiescentSablono");
reactcomparison.core.on_change_state = (function on_change_state(_keyword,the_atom,old_state,new_state){
return quiescent.render((function (){var G__67742 = new_state;
return (reactcomparison.core.RootComponent.cljs$core$IFn$_invoke$arity$1 ? reactcomparison.core.RootComponent.cljs$core$IFn$_invoke$arity$1(G__67742) : reactcomparison.core.RootComponent.call(null,G__67742));
})(),reactcomparison.core.container_el);
});
cljs.core.add_watch(reactcomparison.core.tab_state_atom,cljs.core.constant$keyword$160,reactcomparison.core.on_change_state);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reactcomparison.core.tab_state_atom,cljs.core.identity);
