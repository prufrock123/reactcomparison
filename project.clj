(defproject reactcomparison "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2755"]
                 [cljsjs/jquery "1.9.0-0"]
                 [cljsjs/react "0.12.2-5"]
                 [quiescent "0.1.4"]
                 [sablono "0.3.1"]
                 ]

  :node-dependencies [[source-map-support "0.2.8"]]

  :plugins [[lein-cljsbuild "1.0.4"]
            [lein-npm "0.4.0"]]

  :source-paths ["src" "target/classes"]

  :clean-targets ["out" "out-adv"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {
                :main reactcomparison.core
                :output-to "out/reactcomparison.js"
                :output-dir "out"
                :optimizations :none
                :cache-analysis true
                :source-map true}}
             {:id "release"
              :source-paths ["src"]
              :compiler {
                :main reactcomparison.core
                :output-to "out-adv/reactcomparison.min.js"
                :output-dir "out-adv"
                :optimizations :advanced
                :pretty-print false}}]})
