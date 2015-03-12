(ns reactcomparison.core
  (:require 
    cljsjs.jquery
    cljsjs.react
    [quiescent :include-macros true]
    [sablono.core :as sablono :include-macros true]
    [clojure.browser.repl :as repl]
    [goog.events :as gevents]))

;; (repl/connect "http://localhost:9000/repl")

(def $ js/jQuery)
(def click goog.events.EventType.CLICK)
(enable-console-print!)

;;------------------------------------------------------------------------------
;; Logging
;;------------------------------------------------------------------------------

(defn log
  "Log a Clojure thing."
  [clj-thing]
  (js/console.log (pr-str clj-thing)))

(defn js-log
  "Log a JavaScript thing."
  [js-thing]
  (js/console.log js-thing))

;;------------------------------------------------------------------------------
;; Some Native DOM Helper Functions
;;------------------------------------------------------------------------------

(defn by-id [id]
  (.getElementById js/document id))

(defn set-html! [id html]
  (aset (by-id id) "innerHTML" html))


;;------------------------------------------------------------------------------
;; Ipsum Ajax
;;------------------------------------------------------------------------------

; (defn- get-ipsum []
;   (.ajax $ (js-obj
;     "url" "http://loripsum.net/api/1/short/"
;     "dataType" "json"
;     "success" return data object)))

;;------------------------------------------------------------------------------
;; an Atom
;;------------------------------------------------------------------------------

(def commentData (atom [
    {:author "Pete Hunt"
     :text "Comment 1"}
    {:author "Jordan Walke"
     :text "Comment 2"}
  ]))

;;------------------------------------------------------------------------------
;; QuieBlono
;;------------------------------------------------------------------------------

(defn- load-comments-from-server [url]
  )

; (doall (map log @commentData))

; (defn- on-comment-submit []
;   ;; fetch your data here and assign it to my-new-data
;   (swap! state assoc :data my-new-data)
;   )

; (sablono/defhtml my-tab [active?]
;   [:div {:class (str "tab" (when active? " active-tab"))}]
;   )

(sablono/defhtml Comment [data]
  [:div.comment
    [:h2.commentAuthor
      (:author data)]
    [:span 
      (:text data)]])


(sablono/defhtml CommentForm [url]
  [:form.commentForm 
    [:input {:type "text" :placeholder "Your name"}]
    [:input {:type "text" :placeholder "Say something..."}]
    [:input 
      ; {:on-click (I-need-a-defn the-atom)
       {:type "submit"}]
  ]
)


(sablono/defhtml CommentList [the-atom]
  [:div.commentList
    (doall (map Comment @the-atom))
  ]
)

(sablono/defhtml CommentBox [the-atom]
  [:div.CommentBox.example
    [:h1 "Comments CLJS version"]
    (CommentList the-atom)
    (CommentForm)
  ]
)


;;------------------------------------------------------------------------------
;; Div element with nested p tag.
;;------------------------------------------------------------------------------

(sablono/defhtml DivExample []
  [:div {:class "divExample example"}
    [:p "Here is a sample div with a nested p tag."]]
)

;;------------------------------------------------------------------------------
;; Header tags
;;------------------------------------------------------------------------------

(sablono/defhtml HeaderExample []
  [:div {:class "headerExample example"}
    [:h1 "Header 1"]
    [:h2 "Header 2"]
    [:h3 "Header 3"]
    [:h4 "Header 4"]
    [:h5 "Header 5"]
    [:h6 "Header 6"]
    ])

;;------------------------------------------------------------------------------
;; Tabs
;;------------------------------------------------------------------------------


(def tab-data {
  "managers" [
      {:dude "President Business"
       :followers "1 billion"}
      {:dude "Dilbert"
       :followers "2"}
      {:dude "Gordon Gecko"
       :followers "$$$"}
       ]
  "designers" [
      {:dude "Frank Llyod Wright"
       :followers "100"}
      {:dude "Andy Warhol"
       :followers "200"}
      {:dude "Kim Kardashian"
       :followers "25"}
       ]
  "developers" [
      {:dude "Kevin"
       :followers "1 million"}
      {:dude "Lesley"
       :followers "1 million"}
      {:dude "Scott"
       :followers "1 million"}
       ]
})

(def tab-state-atom (atom
  {:active-tab "managers"}))


(sablono/defhtml Tabs [active-tab]
  [:ul.tabs
    [:li#managers
      {:class (str "tab" (when (= active-tab "managers") " active"))
       :on-click #(swap! tab-state-atom assoc :active-tab "managers")}
      [:a.tab-link {:href "#managers"} "Managers"]]
    [:li#designers 
      {:class (str "tab" (when (=  active-tab "designers") " active"))
       :on-click #(swap! tab-state-atom assoc :active-tab "designers")}
      [:a.tab-link {:href "#designers"} "Designers"]]
    [:li#developers
      {:class (str "tab" (when (=  active-tab "developers") " active"))
       :on-click #(swap! tab-state-atom assoc :active-tab "developers")}
        [:a.tab-link {:href "#developers"} "Developers"]]])

(sablono/defhtml TabList [active-tab]
  [:ol {:class "tabList"}
    (map TabListItems (get tab-data active-tab))])

(sablono/defhtml TabListItems [data]
  [:li
    [:a {:class "tab-list-link"}
      [:img {:src "http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon"}]
      (:dude data) [:span " Followers: "(:followers data)]]])

(sablono/defhtml TabsExample [state]
  [:div.tabsExample
    (Tabs (:active-tab state)) 
    (TabList (:active-tab state))
    ])  


;;------------------------------------------------------------------------------
;; Root Component
;;------------------------------------------------------------------------------

(quiescent/defcomponent RootComponent [state]
  (sablono/html
    [:div
      (CommentBox commentData)
      (DivExample)
      (HeaderExample)
      (TabsExample state)]))

;;------------------------------------------------------------------------------
;; Render
;;------------------------------------------------------------------------------

(def container-el (by-id "contentQuiescentSablono"))

(defn- on-change-state [_keyword the-atom old-state new-state]
  (quiescent/render (RootComponent new-state) container-el))

(add-watch tab-state-atom :tab-change on-change-state)

;; trigger the first render
(swap! tab-state-atom identity)














