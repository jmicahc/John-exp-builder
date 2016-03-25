(defproject exp-builder "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

 :dependencies [[org.clojure/clojure "1.7.0"]
                [org.clojure/clojurescript "1.7.170"]
                [org.omcljs/om "1.0.0-alpha28"]
                [org.clojure/core.match "0.3.0-alpha4"]
                [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                [com.stuartsierra/component "0.3.1"]
                [sablono "0.5.1" :exclusions [cljsjs/react]]
                [cljsjs/react "0.14.3-0"]
                [cljsjs/react-dom "0.14.3-1"]
                [cljsjs/react-dom-server "0.14.3-0"]
                [com.rpl/specter "0.7.1"]
                [com.lucasbradstreet/cljs-uuid-utils "1.0.2"]]

  :plugins [[lein-cljsbuild "1.1.2"]
            [lein-figwheel "0.5.0-4"]]

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]

              :figwheel { :on-jsload "exp-builder.core/on-js-reload" }

              :compiler {:main exp-builder.core
                         :asset-path "js/compiled/out"
                         :output-to "resources/public/js/compiled/exp_builder.js"
                         :output-dir "resources/public/js/compiled/out"
                         :source-map-timestamp true}}
             {:id "min"
              :source-paths ["src"]
              :compiler {:output-to "app.js"
                         :main exp-builder.core
                         :optimizations :advanced
                         :pretty-print false}}]}

  :figwheel {
             ;; :http-server-root "public" ;; default and assumes "resources" 
             :server-port 3450 ;; default
             ;;:server-ip "169.233.18.59" 
             :css-dirs ["resources/public/css"] ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
             ;; :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this
             ;; doesn't work for you just run your own server :)
             ;; :ring-handler hello_world.server/handler

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log" 
             })
