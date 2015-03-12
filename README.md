# reactcomparison

React JSX/CLJS comparison.

## Overview

This project aims to provide an approximate synonym comparison between React JSX and React with a Quiescent/Sablono ClojureScript (CLJS) wrapper.  The final result will look something like https://kanaka.github.io/clojurescript/web/synonym.html.

## Setup

For most purposes, after cloning the repository, you need to follow 3 steps:

1. Type 'npm install' on the command line.
2. Type 'lein clean && lein cljsbuild auto' on the command line.
3. Type 'node server.js'

Then navigate to http://localhost:3000/.

For more detailed instructions about CLJS, continue reading below:

#####First-time Clojurescript developers, add the following to your bash .profile:

    export LEIN_FAST_TRAMPOLINE=y
    alias cljsbuild="lein trampoline cljsbuild $@"

To avoid compiling ClojureScript for each build, AOT Clojurescript locally in your project with the following:

    ./scripts/compile_cljsc

Subsequent dev builds can use:

    lein cljsbuild auto dev

To start a Node REPL (requires rlwrap):

    ./scripts/repl

To get source map support in the Node REPL:

    lein npm install

Clean project specific out:

    lein clean
     
Optimized builds:

    lein cljsbuild once release     

For more info on Cljs compilation, read [Waitin'](http://swannodette.github.io/2014/12/22/waitin/).

## License

Copyright © 2015 

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
