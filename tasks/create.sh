#!/bin/sh

work() {
    cp -R dist/source dist/$dir/

    mv dist/$dir/manifest.$dir.json  dist/$dir/manifest.json
    mv dist/$dir/main.$dir.js  dist/$dir/main.js

    rm dist/$dir/manifest.$none.json
    rm dist/$dir/main.$none.js
}


# create firefox
dir="firefox"
none="chrome"

work

# create chrome
dir="chrome"
none="firefox"

work
