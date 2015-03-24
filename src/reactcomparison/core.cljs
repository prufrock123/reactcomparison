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

  (defn- click-tab [js-evt value]
    (.preventDefault js-evt)
    (swap! application-state-atom assoc :active-tab value))

  (sablono/defhtml Tabs [active-tab]
    [:ul.tabs
      [:li#managers
        {:class (str "tab" (when (= active-tab "managers") " active"))
         :on-click #(click-tab %1 "managers")}
        [:a.tab-link {:href "#managers"} "Managers"]]
      [:li#designers 
        {:class (str "tab" (when (=  active-tab "designers") " active"))
         :on-click #(click-tab %1 "designers")}
        [:a.tab-link {:href "#designers"} "Designers"]]
      [:li#developers
        {:class (str "tab" (when (=  active-tab "developers") " active"))
         :on-click #(click-tab %1 "developers")}
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
;; Simple LikeButton Component
;;------------------------------------------------------------------------------

  (defn- click-like [e]
    (let [liked? (:liked @application-state-atom)]
     (swap! application-state-atom assoc :liked (not liked?))))

  (quiescent/defcomponent LikeButton [state]
    (sablono/html
      [:p {:onClick #(click-like %)}
        (str "You "(if (true? (:liked state)) "like " "haven't liked ")"this")]))


;;------------------------------------------------------------------------------
;; Temp Calculator
;;------------------------------------------------------------------------------

  ;;----------------------------------------------------------------------------
  ;; Temp Conversions
  ;;----------------------------------------------------------------------------

    ;; Fahrenheit
    (defn F->C [tf]
      (* (/ 5 9) (- tf 32)))

    (defn F->K [tf]
      (+ (/ (- tf 32) 1.8) 273.15))

    ;; Celsius
    (defn C->F [tc]
      (+ (* (/ 9 5) tc) 32))

    (defn C->K [tc]
      (+ 273.15 tc))

    ;; Kelvin
    (defn K->C [tk]
      (- tk 273.15))

    (defn K->F [tk]
      (+ (* (- tk 273.15) 1.8) 32))

    (defn convert-temps
      "Given a keyword 'kwd' of :C, :F, or :K, returns a map of temperature 'v' for all temperature formats."
      [kwd v]
      (case kwd
        :C {:C v
            :F (C->F v)
            :K (C->K v)}
        :F {:F v
            :C (F->C v)
            :K (F->K v)}
        :K {:K v
            :F (K->F v)
            :C (K->C v)}))

  ;;----------------------------------------------------------------------------
  ;; React Events
  ;;----------------------------------------------------------------------------

    (defn- on-change-input [temp-kwd js-evt]
      (let [new-value1 (js/parseFloat (aget js-evt "currentTarget" "value"))
            new-value2 (if (js/isNaN new-value1) 0 new-value1)]
        (swap! application-state-atom merge (convert-temps temp-kwd new-value2))))

  ;;----------------------------------------------------------------------------
  ;; Temp Calc Quiescent Components
  ;;----------------------------------------------------------------------------

    (quiescent/defcomponent TextInput [[temp-kwd v]]
      (sablono/html
        [:label (str (name temp-kwd) ": ")
          [:input {:on-change #(on-change-input temp-kwd %)
                   :type "text"
                   :value v}]]))

    (quiescent/defcomponent RangeInput [[temp-kwd v]]
      (sablono/html
        [:label (str (name temp-kwd) ": ")
          [:input {:min (if (= temp-kwd :K) 0 -450)
                   :max 1000
                   :type "range"
                   :on-change #(on-change-input temp-kwd %)
                   :value v}]]))


    (quiescent/defcomponent TempCalcForm [temps]
      (sablono/html
        [:div
          [:fieldset
            (TextInput [:C (:C temps)])
            (TextInput [:F (:F temps)])
            (TextInput [:K (:K temps)])]
          [:fieldset
            (RangeInput [:C (:C temps)])
            (RangeInput [:F (:F temps)])
            (RangeInput [:K (:K temps)])
            ]]))

    (quiescent/defcomponent TempCalcContainer [state]
      (sablono/html
        [:div
          (TempCalcForm state)]))


;;------------------------------------------------------------------------------
;; Root Component
;;------------------------------------------------------------------------------

(def prism-object
  (aget js/window "Prism"))

(def comment-component
  (aget (by-id "CLJScommentComponent") "innerHTML"))

(def simple-div-component
  (aget (by-id "CLJSsimpleDivComponent") "innerHTML"))

(def header-component
  (aget (by-id "CLJSheaderComponent") "innerHTML"))

(def like-button-component
  (aget (by-id "CLJSlikeButtonComponent") "innerHTML"))

(def tab-component
  (aget (by-id "CLJStabComponent") "innerHTML"))

(def temp-calc-component
  (aget (by-id "CLJStempCalcComponent") "innerHTML"))

;; SNIPPETS


(def comment-component-snippet
  (.highlight prism-object comment-component (aget js/window "Prism" "languages" "clojure")))

(def simple-div-component-snippet
  (.highlight prism-object simple-div-component (aget js/window "Prism" "languages" "clojure")))

(def header-component-snippet
  (.highlight prism-object header-component (aget js/window "Prism" "languages" "clojure")))

(def like-button-component-snippet
  (.highlight prism-object like-button-component (aget js/window "Prism" "languages" "clojure")))

(def tab-component-snippet
  (.highlight prism-object tab-component (aget js/window "Prism" "languages" "clojure")))

(def temp-calc-component-snippet
  (.highlight prism-object temp-calc-component (aget js/window "Prism" "languages" "clojure")))




  (quiescent/defcomponent RootComponent [state]

    (sablono/html
      [:div
        ; [:h1 {:class "title"} "CLJS"]

        [:div {:class "componentCLJS"
               :id ""}
                 [:hr]
        [:h4 "Comment Component"]
        [:hr]
        (CommentBox commentData)
          [:pre {:class "language-clojure"}
          [:code {:class "language-clojure"
                  :dangerouslySetInnerHTML {:__html comment-component-snippet}}
                  ]]]



        [:div {:class "componentCLJS"
               :id ""}
        [:hr]
        [:h4 "Simple Div Component"]
        [:hr]               
        (DivExample)
          [:pre {:class "language-clojure"}
          [:code {:class "language-clojure"
                  :dangerouslySetInnerHTML {:__html simple-div-component-snippet}}
                  ]]]


        [:div {:class "componentCLJS"
               :id ""}        
        [:hr]
        [:h4 "Header Component"]
        [:hr]             
        (HeaderExample)
          [:pre {:class "language-clojure"}
          [:code {:class "language-clojure"
                  :dangerouslySetInnerHTML {:__html header-component-snippet}}
                  ]]]


        [:div {:class "componentCLJS"
               :id ""}
        [:hr]
        [:h4 "Like Button Component"]
        [:hr]     
        (LikeButton state)
          [:pre {:class "language-clojure"}
          [:code {:class "language-clojure"
                  :dangerouslySetInnerHTML {:__html like-button-component-snippet}}
                  ]]]


        [:div {:class "componentCLJS"
               :id ""}
        [:hr]
        [:h4 "Tab Component"]
        [:hr]            
        (TabsExample state)
         [:pre {:class "language-clojure"}
          [:code {:class "language-clojure"
                  :dangerouslySetInnerHTML {:__html tab-component-snippet}}
                  ]]]


        [:div {:class "componentCLJS"
               :id ""}
        [:hr]
        [:h4 "Temp Calc Component"]
        [:hr]              
        (TempCalcContainer state)          
          [:pre {:class "language-clojure"}
          [:code {:class "language-clojure"
                  :dangerouslySetInnerHTML {:__html temp-calc-component-snippet}}
                  ]]]



        ]))


;;------------------------------------------------------------------------------
;; The Application State Atom
;;------------------------------------------------------------------------------

  (def application-state-atom (atom
    (merge {:active-tab "managers"
            :liked false} (convert-temps :C 0))))

;;------------------------------------------------------------------------------
;; Render
;;------------------------------------------------------------------------------

  (def container-el (by-id "contentQuiescentSablono"))

  (defn- on-change-state [_keyword the-atom old-state new-state]
    (quiescent/render (RootComponent new-state) container-el))

  (add-watch application-state-atom :atom-change on-change-state)

  ;; trigger the first render
  (swap! application-state-atom identity)














