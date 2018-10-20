Last login: Mon Jun 26 11:48:00 on console
umount: /Users/jsheth/JshethDesktop: not currently mounted
^C
acbc32a00421:~ jsheth$ ls
AndroidStudioProjects				RSP
Applications					RetailSearchADP
Certificate of Completion.pdf			RetailSearchPageletGroup
Desktop						RetailSearchShared
Documents					Screen Shot 2017-04-18 at 9.02.16 PM.png
Downloads					SearchExperienceShared
Library						Sites
Movies						Ubuntu
Music						brazil-pkg-cache
PersonalWebsiteConfig				desktop-workspace
PersonalWebsiteConfig.zip			local
Pictures					search.rendering.app.xml
Public						zshrc.rtf
acbc32a00421:~ jsheth$ pwd
/Users/jsheth
acbc32a00421:~ jsheth$ mkdir webdevcon
acbc32a00421:~ jsheth$ ls
AndroidStudioProjects				RetailSearchADP
Applications					RetailSearchPageletGroup
Certificate of Completion.pdf			RetailSearchShared
Desktop						Screen Shot 2017-04-18 at 9.02.16 PM.png
Documents					SearchExperienceShared
Downloads					Sites
Library						Ubuntu
Movies						brazil-pkg-cache
Music						desktop-workspace
PersonalWebsiteConfig				local
PersonalWebsiteConfig.zip			search.rendering.app.xml
Pictures					webdevcon
Public						zshrc.rtf
RSP
acbc32a00421:~ jsheth$ cd webdevcon/
acbc32a00421:webdevcon jsheth$ npm install -g create-react-native-app
npm WARN deprecated fs-promise@1.0.0: Use mz or fs-extra^3.0 with Promise Support
/usr/local/bin/create-react-native-app -> /usr/local/lib/node_modules/create-react-native-app/build/index.js
/usr/local/lib
└─┬ create-react-native-app@0.0.6 
  ├─┬ babel-runtime@6.23.0 
  │ ├── core-js@2.4.1 
  │ └── regenerator-runtime@0.10.5 
  ├─┬ chalk@1.1.3 
  │ ├── ansi-styles@2.2.1 
  │ ├── escape-string-regexp@1.0.5 
  │ ├─┬ has-ansi@2.0.0 
  │ │ └── ansi-regex@2.1.1 
  │ ├── strip-ansi@3.0.1 
  │ └── supports-color@2.0.0 
  ├─┬ cross-spawn@4.0.2 
  │ ├─┬ lru-cache@4.1.1 
  │ │ ├── pseudomap@1.0.2 
  │ │ └── yallist@2.1.2 
  │ └─┬ which@1.2.14 
  │   └── isexe@2.0.0 
  ├─┬ fs-promise@1.0.0 
  │ ├── any-promise@1.3.0 
  │ ├─┬ fs-extra@1.0.0 
  │ │ ├── graceful-fs@4.1.11 
  │ │ ├── jsonfile@2.4.0 
  │ │ └── klaw@1.3.1 
  │ ├─┬ mz@2.6.0 
  │ │ └── object-assign@4.1.1 
  │ └─┬ thenify-all@1.6.0 
  │   └── thenify@3.3.0 
  ├── minimist@1.2.0 
  ├─┬ path-exists@2.1.0 
  │ └─┬ pinkie-promise@2.0.1 
  │   └── pinkie@2.0.4 
  ├── semver@5.3.0 
  └─┬ source-map-support@0.4.15 
    └── source-map@0.5.6 

acbc32a00421:webdevcon jsheth$ create-react-native-app my-app
Creating a new React Native app in /Users/jsheth/webdevcon/my-app.

Installing packages. This might take a couple minutes.
Installing react-native-scripts...

npm WARN deprecated @exponent/spawn-async@1.2.8: Please switch to @expo/spawn-async, the new name of this package. It's the same code with our new name.

> dtrace-provider@0.8.3 install /Users/jsheth/webdevcon/my-app/node_modules/dtrace-provider
> node scripts/install.js


> @exponent/ngrok@2.2.7 postinstall /Users/jsheth/webdevcon/my-app/node_modules/@exponent/ngrok
> node ./postinstall.js

ngrok - binary unpacked.
my-app@0.1.0 /Users/jsheth/webdevcon/my-app
└─┬ react-native-scripts@0.0.40 
  ├─┬ babel-runtime@6.23.0 
  │ ├── core-js@2.4.1 
  │ └── regenerator-runtime@0.10.5 
  ├─┬ chalk@1.1.3 
  │ ├── ansi-styles@2.2.1 
  │ ├── escape-string-regexp@1.0.5 
  │ ├─┬ has-ansi@2.0.0 
  │ │ └── ansi-regex@2.1.1 
  │ ├── strip-ansi@3.0.1 
  │ └── supports-color@2.0.0 
  ├─┬ cross-spawn@5.1.0 
  │ ├─┬ lru-cache@4.1.1 
  │ │ ├── pseudomap@1.0.2 
  │ │ └── yallist@2.1.2 
  │ ├─┬ shebang-command@1.2.0 
  │ │ └── shebang-regex@1.0.0 
  │ └─┬ which@1.2.14 
  │   └── isexe@2.0.0 
  ├─┬ fs-extra@3.0.1 
  │ ├── graceful-fs@4.1.11 
  │ ├── jsonfile@3.0.0 
  │ └── universalify@0.1.0 
  ├── indent-string@3.1.0 
  ├─┬ inquirer@3.1.1 
  │ ├── ansi-escapes@2.0.0 
  │ ├─┬ cli-cursor@2.1.0 
  │ │ └─┬ restore-cursor@2.0.0 
  │ │   ├─┬ onetime@2.0.1 
  │ │   │ └── mimic-fn@1.1.0 
  │ │   └── signal-exit@3.0.2 
  │ ├── cli-width@2.1.0 
  │ ├─┬ external-editor@2.0.4 
  │ │ ├── iconv-lite@0.4.18 
  │ │ ├── jschardet@1.4.2 
  │ │ └─┬ tmp@0.0.31 
  │ │   └── os-tmpdir@1.0.2 
  │ ├── figures@2.0.0 
  │ ├── lodash@4.17.4 
  │ ├── mute-stream@0.0.7 
  │ ├─┬ run-async@2.3.0 
  │ │ └── is-promise@2.1.0 
  │ ├── rx-lite@4.0.8 
  │ ├── rx-lite-aggregates@4.0.8 
  │ ├─┬ string-width@2.1.0 
  │ │ ├── is-fullwidth-code-point@2.0.0 
  │ │ └─┬ strip-ansi@4.0.0 
  │ │   └── ansi-regex@3.0.0 
  │ └── through@2.3.8 
  ├─┬ match-require@2.1.0 
  │ └── uuid@3.1.0 
  ├── minimist@1.2.0 
  ├── path-exists@3.0.0 
  ├── progress@2.0.0 
  ├── qrcode-terminal@0.11.0 
  ├── UNMET PEER DEPENDENCY react@16.0.0-alpha.12
  └─┬ xdl@42.0.0 
    ├─┬ @ccheever/crayon@5.0.0 
    │ ├── has-color@0.1.7 
    │ └─┬ strip-ansi@0.2.2 
    │   └── ansi-regex@0.1.0 
    ├─┬ @exponent/json-file@5.3.0 
    │ └── json5@0.5.1 
    ├─┬ @exponent/ngrok@2.2.7 
    │ ├── async@0.9.2 
    │ ├─┬ decompress-zip@0.3.0 
    │ │ ├─┬ binary@0.3.0 
    │ │ │ ├── buffers@0.1.1 
    │ │ │ └─┬ chainsaw@0.1.0 
    │ │ │   └── traverse@0.3.9 
    │ │ ├── mkpath@0.1.0 
    │ │ ├─┬ nopt@3.0.6 
    │ │ │ └── abbrev@1.1.0 
    │ │ ├── q@1.5.0 
    │ │ ├─┬ readable-stream@1.1.14 
    │ │ │ ├── isarray@0.0.1 
    │ │ │ └── string_decoder@0.10.31 
    │ │ └─┬ touch@0.0.3 
    │ │   └── nopt@1.0.10 
    │ └── lock@0.1.3 
    ├─┬ @exponent/node-auth0@2.6.0 
    │ ├── bluebird@2.11.0 
    │ ├─┬ rest-facade@1.5.0 
    │ │ ├── bluebird@2.11.0 
    │ │ └─┬ change-case@2.3.1 
    │ │   ├── camel-case@1.2.2 
    │ │   ├── constant-case@1.1.2 
    │ │   ├── dot-case@1.1.2 
    │ │   ├── is-lower-case@1.1.3 
    │ │   ├── is-upper-case@1.1.2 
    │ │   ├── lower-case@1.1.4 
    │ │   ├── lower-case-first@1.0.2 
    │ │   ├── param-case@1.1.2 
    │ │   ├── pascal-case@1.1.2 
    │ │   ├── path-case@1.1.2 
    │ │   ├── sentence-case@1.1.3 
    │ │   ├── snake-case@1.1.2 
    │ │   ├── swap-case@1.1.2 
    │ │   ├── title-case@1.1.2 
    │ │   ├── upper-case@1.1.3 
    │ │   └── upper-case-first@1.1.2 
    │ └── url-join@0.0.1 
    ├─┬ @exponent/osascript@1.6.4 
    │ └─┬ babel-runtime@5.8.38 
    │   └── core-js@1.2.7 
    ├─┬ @exponent/spawn-async@1.2.8 
    │ └── cross-spawn@4.0.2 
    ├─┬ analytics-node@2.4.1 
    │ ├─┬ @segment/loosely-validate-event@1.1.2 
    │ │ ├── component-type@1.2.1 
    │ │ └── join-component@1.1.0 
    │ ├── clone@2.1.1 
    │ ├─┬ commander@2.10.0 
    │ │ └── graceful-readlink@1.0.1 
    │ ├── crypto-token@1.0.1 
    │ ├── debug@2.6.8 
    │ ├── remove-trailing-slash@0.1.0 
    │ ├─┬ superagent@3.5.2 
    │ │ ├── component-emitter@1.2.1 
    │ │ ├── cookiejar@2.1.1 
    │ │ ├── formidable@1.1.1 
    │ │ ├── mime@1.3.6 
    │ │ └─┬ readable-stream@2.3.2 
    │ │   ├── isarray@1.0.0 
    │ │   └── string_decoder@1.0.3 
    │ └── superagent-retry@0.6.0 
    ├─┬ auth0-js@7.6.1 
    │ ├── Base64@0.1.4 
    │ ├── json-fallback@0.0.1 
    │ ├── jsonp@0.0.4 
    │ ├── qs@6.4.0 
    │ ├── reqwest@2.0.5 
    │ ├── trim@0.0.1 
    │ ├── winchan@0.1.4 
    │ └─┬ xtend@2.1.2 
    │   └── object-keys@0.4.0 
    ├─┬ axios@0.16.2 
    │ ├── follow-redirects@1.2.4 
    │ └── is-buffer@1.1.5 
    ├── bluebird@3.5.0 
    ├─┬ body-parser@1.17.2 
    │ ├── bytes@2.4.0 
    │ ├── content-type@1.0.2 
    │ ├── debug@2.6.7 
    │ ├── depd@1.1.0 
    │ ├── http-errors@1.6.1 
    │ ├── iconv-lite@0.4.15 
    │ ├─┬ on-finished@2.3.0 
    │ │ └── ee-first@1.1.1 
    │ ├─┬ raw-body@2.2.0 
    │ │ ├── iconv-lite@0.4.15 
    │ │ └── unpipe@1.0.0 
    │ └─┬ type-is@1.6.15 
    │   └── media-typer@0.3.0 
    ├─┬ bunyan@1.8.10 
    │ ├─┬ dtrace-provider@0.8.3 
    │ │ └── nan@2.6.2 
    │ ├── moment@2.18.1 
    │ ├── mv@2.1.1 
    │ └── safe-json-stringify@1.0.4 
    ├─┬ concat-stream@1.6.0 
    │ ├── inherits@2.0.3 
    │ ├─┬ readable-stream@2.3.2 
    │ │ ├── core-util-is@1.0.2 
    │ │ ├── isarray@1.0.0 
    │ │ ├── process-nextick-args@1.0.7 
    │ │ ├── string_decoder@1.0.3 
    │ │ └── util-deprecate@1.0.2 
    │ └── typedarray@0.0.6 
    ├─┬ decache@4.1.0 
    │ └── callsite@1.0.0 
    ├── delay-async@1.1.0 
    ├── es6-error@4.0.2 
    ├── exec-async@2.2.0 
    ├── exists-async@2.0.0 
    ├─┬ express@4.15.3 
    │ ├─┬ accepts@1.3.3 
    │ │ └── negotiator@0.6.1 
    │ ├── array-flatten@1.1.1 
    │ ├── content-disposition@0.5.2 
    │ ├── cookie@0.3.1 
    │ ├── cookie-signature@1.0.6 
    │ ├── debug@2.6.7 
    │ ├── encodeurl@1.0.1 
    │ ├── escape-html@1.0.3 
    │ ├── etag@1.8.0 
    │ ├─┬ finalhandler@1.0.3 
    │ │ └── debug@2.6.7 
    │ ├── fresh@0.5.0 
    │ ├── merge-descriptors@1.0.1 
    │ ├── methods@1.1.2 
    │ ├── parseurl@1.3.1 
    │ ├── path-to-regexp@0.1.7 
    │ ├─┬ proxy-addr@1.1.4 
    │ │ ├── forwarded@0.1.0 
    │ │ └── ipaddr.js@1.3.0 
    │ ├── range-parser@1.2.0 
    │ ├─┬ send@0.15.3 
    │ │ ├── debug@2.6.7 
    │ │ ├── destroy@1.0.4 
    │ │ └── mime@1.3.4 
    │ ├── serve-static@1.12.3 
    │ ├── setprototypeof@1.0.3 
    │ ├── statuses@1.3.1 
    │ ├── utils-merge@1.0.0 
    │ └── vary@1.1.1 
    ├── file-type@4.4.0 
    ├─┬ form-data@2.2.0 
    │ ├── asynckit@0.4.0 
    │ ├─┬ combined-stream@1.0.5 
    │ │ └── delayed-stream@1.0.0 
    │ └─┬ mime-types@2.1.15 
    │   └── mime-db@1.27.0 
    ├── freeport-async@1.1.1 
    ├─┬ fs-extra@0.30.0 
    │ ├── klaw@1.3.1 
    │ └─┬ rimraf@2.4.5 
    │   └── glob@6.0.4 
    ├─┬ glob@7.1.2 
    │ ├── fs.realpath@1.0.0 
    │ ├─┬ inflight@1.0.6 
    │ │ └── wrappy@1.0.2 
    │ ├─┬ minimatch@3.0.4 
    │ │ └─┬ brace-expansion@1.1.8 
    │ │   ├── balanced-match@1.0.0 
    │ │   └── concat-map@0.0.1 
    │ ├── once@1.4.0 
    │ └── path-is-absolute@1.0.1 
    ├─┬ hasbin@1.2.3 
    │ └── async@1.5.2 
    ├── home-dir@1.0.0 
    ├── instapromise@2.0.7-rc.1 
    ├── ip@1.1.5 
    ├─┬ joi@10.6.0 
    │ ├── hoek@4.1.1 
    │ ├── isemail@2.2.1 
    │ ├── items@2.1.1 
    │ └─┬ topo@2.0.2 
    │   └── hoek@4.1.1 
    ├── jsonfile@2.4.0 
    ├── jsonschema@1.1.1 
    ├─┬ jsonwebtoken@7.4.1 
    │ ├─┬ joi@6.10.1 
    │ │ ├── hoek@2.16.3 
    │ │ ├── isemail@1.2.0 
    │ │ └── topo@1.1.0 
    │ ├─┬ jws@3.1.4 
    │ │ ├── base64url@2.0.0 
    │ │ └─┬ jwa@1.1.5 
    │ │   ├── buffer-equal-constant-time@1.0.1 
    │ │   └── ecdsa-sig-formatter@1.0.9 
    │ ├── lodash.once@4.1.1 
    │ ├── ms@2.0.0 
    │ └── xtend@4.0.1 
    ├── md5hex@1.0.0 
    ├─┬ mkdirp@0.5.1 
    │ └── minimist@0.0.8 
    ├── mkdirp-promise@5.0.1 
    ├─┬ mz@2.6.0 
    │ ├── any-promise@1.3.0 
    │ ├── object-assign@4.1.1 
    │ └─┬ thenify-all@1.6.0 
    │   └── thenify@3.3.0 
    ├── ncp@2.0.0 
    ├─┬ opn@4.0.2 
    │ └─┬ pinkie-promise@2.0.1 
    │   └── pinkie@2.0.4 
    ├── promise-props@1.0.0 
    ├── querystring@0.2.0 
    ├── UNMET PEER DEPENDENCY react@^0.14.0 || ^15.0.0-0 || ^16.0.0-0
    ├─┬ react-redux@5.0.5 
    │ ├─┬ create-react-class@15.6.0 
    │ │ └─┬ fbjs@0.8.12 
    │ │   ├── core-js@1.2.7 
    │ │   ├─┬ isomorphic-fetch@2.2.1 
    │ │   │ ├─┬ node-fetch@1.7.1 
    │ │   │ │ ├── encoding@0.1.12 
    │ │   │ │ └── is-stream@1.1.0 
    │ │   │ └── whatwg-fetch@2.0.3 
    │ │   ├─┬ promise@7.3.1 
    │ │   │ └── asap@2.0.5 
    │ │   ├── setimmediate@1.0.5 
    │ │   └── ua-parser-js@0.7.13 
    │ ├── hoist-non-react-statics@1.2.0 
    │ ├── invariant@2.2.2 
    │ ├── lodash-es@4.17.4 
    │ ├─┬ loose-envify@1.3.1 
    │ │ └── js-tokens@3.0.1 
    │ └── prop-types@15.5.10 
    ├─┬ read-chunk@2.0.0 
    │ └── pify@2.3.0 
    ├─┬ redux@3.7.1 
    │ └── symbol-observable@1.0.4 
    ├─┬ redux-logger@2.10.2 
    │ └── deep-diff@0.3.4 
    ├─┬ request@2.81.0 
    │ ├── aws-sign2@0.6.0 
    │ ├── aws4@1.6.0 
    │ ├── caseless@0.12.0 
    │ ├── extend@3.0.1 
    │ ├── forever-agent@0.6.1 
    │ ├── form-data@2.1.4 
    │ ├─┬ har-validator@4.2.1 
    │ │ ├─┬ ajv@4.11.8 
    │ │ │ ├── co@4.6.0 
    │ │ │ └─┬ json-stable-stringify@1.0.1 
    │ │ │   └── jsonify@0.0.0 
    │ │ └── har-schema@1.0.5 
    │ ├─┬ hawk@3.1.3 
    │ │ ├── boom@2.10.1 
    │ │ ├── cryptiles@2.0.5 
    │ │ └── sntp@1.0.9 
    │ ├─┬ http-signature@1.1.1 
    │ │ ├── assert-plus@0.2.0 
    │ │ ├─┬ jsprim@1.4.0 
    │ │ │ ├── assert-plus@1.0.0 
    │ │ │ ├── extsprintf@1.0.2 
    │ │ │ ├── json-schema@0.2.3 
    │ │ │ └── verror@1.3.6 
    │ │ └─┬ sshpk@1.13.1 
    │ │   ├── asn1@0.2.3 
    │ │   ├── assert-plus@1.0.0 
    │ │   ├── bcrypt-pbkdf@1.0.1 
    │ │   ├─┬ dashdash@1.14.1 
    │ │   │ └── assert-plus@1.0.0 
    │ │   ├── ecc-jsbn@0.1.1 
    │ │   ├─┬ getpass@0.1.7 
    │ │   │ └── assert-plus@1.0.0 
    │ │   ├── jsbn@0.1.1 
    │ │   └── tweetnacl@0.14.5 
    │ ├── is-typedarray@1.0.0 
    │ ├── isstream@0.1.2 
    │ ├── json-stringify-safe@5.0.1 
    │ ├── oauth-sign@0.8.2 
    │ ├── performance-now@0.2.0 
    │ ├── safe-buffer@5.1.1 
    │ ├── stringstream@0.0.5 
    │ ├─┬ tough-cookie@2.3.2 
    │ │ └── punycode@1.4.1 
    │ └── tunnel-agent@0.6.0 
    ├─┬ request-progress@3.0.0 
    │ └── throttleit@1.0.0 
    ├── semver@5.3.0 
    ├─┬ slugid@1.1.0 
    │ └── uuid@2.0.3 
    ├── slugify@1.1.0 
    ├─┬ source-map-support@0.4.15 
    │ └── source-map@0.5.6 
    ├─┬ tar.gz@1.0.5 
    │ ├── bluebird@2.11.0 
    │ ├── fstream@1.0.11 
    │ ├── mout@0.11.1 
    │ └─┬ tar@2.2.1 
    │   └── block-stream@0.0.9 
    ├── tree-kill@1.1.0 
    ├─┬ url@0.11.0 
    │ └── punycode@1.3.2 
    ├── xhr2@0.1.4 
    └── yesno@0.0.1 

npm WARN xdl@42.0.0 requires a peer of react@16.0.0-alpha.12 but none was installed.
npm WARN react-redux@5.0.5 requires a peer of react@^0.14.0 || ^15.0.0-0 || ^16.0.0-0 but none was installed.
You are currently running Node v5.10.1 but create-react-native-app requires >=6. Please use a supported version of Node.

acbc32a00421:webdevcon jsheth$ node -v
v5.10.1
acbc32a00421:webdevcon jsheth$ brew update
/usr/local/Library/Homebrew/cmd/update.sh: line 6: /usr/local/Library/ENV/scm/git: No such file or directory
/usr/local/Library/Homebrew/cmd/update.sh: line 6: /usr/local/Library/ENV/scm/git: No such file or directory
/usr/local/Library/Homebrew/cmd/update.sh: line 6: /usr/local/Library/ENV/scm/git: No such file or directory
/usr/local/Library/Homebrew/cmd/update.sh: line 6: /usr/local/Library/ENV/scm/git: No such file or directory
/usr/local/Library/Homebrew/cmd/update.sh: line 6: /usr/local/Library/ENV/scm/git: No such file or directory
/usr/local/Library/Homebrew/cmd/update.sh: line 6: /usr/local/Library/ENV/scm/git: No such file or directory
/usr/local/Library/Homebrew/cmd/update.sh: line 6: /usr/local/Library/ENV/scm/git: No such file or directory
/usr/local/Library/Homebrew/cmd/update.sh: line 6: /usr/local/Library/ENV/scm/git: No such file or directory
/usr/local/Library/Homebrew/cmd/update.sh: line 6: /usr/local/Library/ENV/scm/git: No such file or directory
==> Homebrew has enabled anonymous aggregate user behaviour analytics.
Read the analytics documentation (and how to opt-out) here:
  http://docs.brew.sh/Analytics.html

Error: update-report should not be called directly!
acbc32a00421:webdevcon jsheth$ npm install -g n
/usr/local/bin/n -> /usr/local/lib/node_modules/n/bin/n
/usr/local/lib
└── n@2.1.7 

acbc32a00421:webdevcon jsheth$ node -v
v5.10.1
acbc32a00421:webdevcon jsheth$ ls
my-app
acbc32a00421:webdevcon jsheth$ create-react-native-app my-app
The directory `my-app` contains file(s) that could conflict. Aborting.
acbc32a00421:webdevcon jsheth$ pwd
/Users/jsheth/webdevcon
acbc32a00421:webdevcon jsheth$ ls
my-app
acbc32a00421:webdevcon jsheth$ rm -rf my-app
acbc32a00421:webdevcon jsheth$ ls
acbc32a00421:webdevcon jsheth$ create-react-native-app my-app
Creating a new React Native app in /Users/jsheth/webdevcon/my-app.

Installing packages. This might take a couple minutes.
Installing react-native-scripts...

npm WARN deprecated @exponent/spawn-async@1.2.8: Please switch to @expo/spawn-async, the new name of this package. It's the same code with our new name.

> dtrace-provider@0.8.3 install /Users/jsheth/webdevcon/my-app/node_modules/dtrace-provider
> node scripts/install.js


> @exponent/ngrok@2.2.7 postinstall /Users/jsheth/webdevcon/my-app/node_modules/@exponent/ngrok
> node ./postinstall.js

ngrok - binary unpacked.
my-app@0.1.0 /Users/jsheth/webdevcon/my-app
└─┬ react-native-scripts@0.0.40 
  ├─┬ babel-runtime@6.23.0 
  │ ├── core-js@2.4.1 
  │ └── regenerator-runtime@0.10.5 
  ├─┬ chalk@1.1.3 
  │ ├── ansi-styles@2.2.1 
  │ ├── escape-string-regexp@1.0.5 
  │ ├─┬ has-ansi@2.0.0 
  │ │ └── ansi-regex@2.1.1 
  │ ├── strip-ansi@3.0.1 
  │ └── supports-color@2.0.0 
  ├─┬ cross-spawn@5.1.0 
  │ ├─┬ lru-cache@4.1.1 
  │ │ ├── pseudomap@1.0.2 
  │ │ └── yallist@2.1.2 
  │ ├─┬ shebang-command@1.2.0 
  │ │ └── shebang-regex@1.0.0 
  │ └─┬ which@1.2.14 
  │   └── isexe@2.0.0 
  ├─┬ fs-extra@3.0.1 
  │ ├── graceful-fs@4.1.11 
  │ ├── jsonfile@3.0.0 
  │ └── universalify@0.1.0 
  ├── indent-string@3.1.0 
  ├─┬ inquirer@3.1.1 
  │ ├── ansi-escapes@2.0.0 
  │ ├─┬ cli-cursor@2.1.0 
  │ │ └─┬ restore-cursor@2.0.0 
  │ │   ├─┬ onetime@2.0.1 
  │ │   │ └── mimic-fn@1.1.0 
  │ │   └── signal-exit@3.0.2 
  │ ├── cli-width@2.1.0 
  │ ├─┬ external-editor@2.0.4 
  │ │ ├── iconv-lite@0.4.18 
  │ │ ├── jschardet@1.4.2 
  │ │ └─┬ tmp@0.0.31 
  │ │   └── os-tmpdir@1.0.2 
  │ ├── figures@2.0.0 
  │ ├── lodash@4.17.4 
  │ ├── mute-stream@0.0.7 
  │ ├─┬ run-async@2.3.0 
  │ │ └── is-promise@2.1.0 
  │ ├── rx-lite@4.0.8 
  │ ├── rx-lite-aggregates@4.0.8 
  │ ├─┬ string-width@2.1.0 
  │ │ ├── is-fullwidth-code-point@2.0.0 
  │ │ └─┬ strip-ansi@4.0.0 
  │ │   └── ansi-regex@3.0.0 
  │ └── through@2.3.8 
  ├─┬ match-require@2.1.0 
  │ └── uuid@3.1.0 
  ├── minimist@1.2.0 
  ├── path-exists@3.0.0 
  ├── progress@2.0.0 
  ├── qrcode-terminal@0.11.0 
  ├── UNMET PEER DEPENDENCY react@16.0.0-alpha.12
  └─┬ xdl@42.0.0 
    ├─┬ @ccheever/crayon@5.0.0 
    │ ├── has-color@0.1.7 
    │ └─┬ strip-ansi@0.2.2 
    │   └── ansi-regex@0.1.0 
    ├─┬ @exponent/json-file@5.3.0 
    │ └── json5@0.5.1 
    ├─┬ @exponent/ngrok@2.2.7 
    │ ├── async@0.9.2 
    │ ├─┬ decompress-zip@0.3.0 
    │ │ ├─┬ binary@0.3.0 
    │ │ │ ├── buffers@0.1.1 
    │ │ │ └─┬ chainsaw@0.1.0 
    │ │ │   └── traverse@0.3.9 
    │ │ ├── mkpath@0.1.0 
    │ │ ├─┬ nopt@3.0.6 
    │ │ │ └── abbrev@1.1.0 
    │ │ ├── q@1.5.0 
    │ │ ├─┬ readable-stream@1.1.14 
    │ │ │ ├── isarray@0.0.1 
    │ │ │ └── string_decoder@0.10.31 
    │ │ └─┬ touch@0.0.3 
    │ │   └── nopt@1.0.10 
    │ └── lock@0.1.3 
    ├─┬ @exponent/node-auth0@2.6.0 
    │ ├── bluebird@2.11.0 
    │ ├─┬ rest-facade@1.5.0 
    │ │ ├── bluebird@2.11.0 
    │ │ └─┬ change-case@2.3.1 
    │ │   ├── camel-case@1.2.2 
    │ │   ├── constant-case@1.1.2 
    │ │   ├── dot-case@1.1.2 
    │ │   ├── is-lower-case@1.1.3 
    │ │   ├── is-upper-case@1.1.2 
    │ │   ├── lower-case@1.1.4 
    │ │   ├── lower-case-first@1.0.2 
    │ │   ├── param-case@1.1.2 
    │ │   ├── pascal-case@1.1.2 
    │ │   ├── path-case@1.1.2 
    │ │   ├── sentence-case@1.1.3 
    │ │   ├── snake-case@1.1.2 
    │ │   ├── swap-case@1.1.2 
    │ │   ├── title-case@1.1.2 
    │ │   ├── upper-case@1.1.3 
    │ │   └── upper-case-first@1.1.2 
    │ └── url-join@0.0.1 
    ├─┬ @exponent/osascript@1.6.4 
    │ └─┬ babel-runtime@5.8.38 
    │   └── core-js@1.2.7 
    ├─┬ @exponent/spawn-async@1.2.8 
    │ └── cross-spawn@4.0.2 
    ├─┬ analytics-node@2.4.1 
    │ ├─┬ @segment/loosely-validate-event@1.1.2 
    │ │ ├── component-type@1.2.1 
    │ │ └── join-component@1.1.0 
    │ ├── clone@2.1.1 
    │ ├─┬ commander@2.10.0 
    │ │ └── graceful-readlink@1.0.1 
    │ ├── crypto-token@1.0.1 
    │ ├── debug@2.6.8 
    │ ├── remove-trailing-slash@0.1.0 
    │ ├─┬ superagent@3.5.2 
    │ │ ├── component-emitter@1.2.1 
    │ │ ├── cookiejar@2.1.1 
    │ │ ├── formidable@1.1.1 
    │ │ ├── mime@1.3.6 
    │ │ └─┬ readable-stream@2.3.2 
    │ │   ├── isarray@1.0.0 
    │ │   └── string_decoder@1.0.3 
    │ └── superagent-retry@0.6.0 
    ├─┬ auth0-js@7.6.1 
    │ ├── Base64@0.1.4 
    │ ├── json-fallback@0.0.1 
    │ ├── jsonp@0.0.4 
    │ ├── qs@6.4.0 
    │ ├── reqwest@2.0.5 
    │ ├── trim@0.0.1 
    │ ├── winchan@0.1.4 
    │ └─┬ xtend@2.1.2 
    │   └── object-keys@0.4.0 
    ├─┬ axios@0.16.2 
    │ ├── follow-redirects@1.2.4 
    │ └── is-buffer@1.1.5 
    ├── bluebird@3.5.0 
    ├─┬ body-parser@1.17.2 
    │ ├── bytes@2.4.0 
    │ ├── content-type@1.0.2 
    │ ├── debug@2.6.7 
    │ ├── depd@1.1.0 
    │ ├── http-errors@1.6.1 
    │ ├── iconv-lite@0.4.15 
    │ ├─┬ on-finished@2.3.0 
    │ │ └── ee-first@1.1.1 
    │ ├─┬ raw-body@2.2.0 
    │ │ ├── iconv-lite@0.4.15 
    │ │ └── unpipe@1.0.0 
    │ └─┬ type-is@1.6.15 
    │   └── media-typer@0.3.0 
    ├─┬ bunyan@1.8.10 
    │ ├─┬ dtrace-provider@0.8.3 
    │ │ └── nan@2.6.2 
    │ ├── moment@2.18.1 
    │ ├── mv@2.1.1 
    │ └── safe-json-stringify@1.0.4 
    ├─┬ concat-stream@1.6.0 
    │ ├── inherits@2.0.3 
    │ ├─┬ readable-stream@2.3.2 
    │ │ ├── core-util-is@1.0.2 
    │ │ ├── isarray@1.0.0 
    │ │ ├── process-nextick-args@1.0.7 
    │ │ ├── string_decoder@1.0.3 
    │ │ └── util-deprecate@1.0.2 
    │ └── typedarray@0.0.6 
    ├─┬ decache@4.1.0 
    │ └── callsite@1.0.0 
    ├── delay-async@1.1.0 
    ├── es6-error@4.0.2 
    ├── exec-async@2.2.0 
    ├── exists-async@2.0.0 
    ├─┬ express@4.15.3 
    │ ├─┬ accepts@1.3.3 
    │ │ └── negotiator@0.6.1 
    │ ├── array-flatten@1.1.1 
    │ ├── content-disposition@0.5.2 
    │ ├── cookie@0.3.1 
    │ ├── cookie-signature@1.0.6 
    │ ├── debug@2.6.7 
    │ ├── encodeurl@1.0.1 
    │ ├── escape-html@1.0.3 
    │ ├── etag@1.8.0 
    │ ├─┬ finalhandler@1.0.3 
    │ │ └── debug@2.6.7 
    │ ├── fresh@0.5.0 
    │ ├── merge-descriptors@1.0.1 
    │ ├── methods@1.1.2 
    │ ├── parseurl@1.3.1 
    │ ├── path-to-regexp@0.1.7 
    │ ├─┬ proxy-addr@1.1.4 
    │ │ ├── forwarded@0.1.0 
    │ │ └── ipaddr.js@1.3.0 
    │ ├── range-parser@1.2.0 
    │ ├─┬ send@0.15.3 
    │ │ ├── debug@2.6.7 
    │ │ ├── destroy@1.0.4 
    │ │ └── mime@1.3.4 
    │ ├── serve-static@1.12.3 
    │ ├── setprototypeof@1.0.3 
    │ ├── statuses@1.3.1 
    │ ├── utils-merge@1.0.0 
    │ └── vary@1.1.1 
    ├── file-type@4.4.0 
    ├─┬ form-data@2.2.0 
    │ ├── asynckit@0.4.0 
    │ ├─┬ combined-stream@1.0.5 
    │ │ └── delayed-stream@1.0.0 
    │ └─┬ mime-types@2.1.15 
    │   └── mime-db@1.27.0 
    ├── freeport-async@1.1.1 
    ├─┬ fs-extra@0.30.0 
    │ ├── klaw@1.3.1 
    │ └─┬ rimraf@2.4.5 
    │   └── glob@6.0.4 
    ├─┬ glob@7.1.2 
    │ ├── fs.realpath@1.0.0 
    │ ├─┬ inflight@1.0.6 
    │ │ └── wrappy@1.0.2 
    │ ├─┬ minimatch@3.0.4 
    │ │ └─┬ brace-expansion@1.1.8 
    │ │   ├── balanced-match@1.0.0 
    │ │   └── concat-map@0.0.1 
    │ ├── once@1.4.0 
    │ └── path-is-absolute@1.0.1 
    ├─┬ hasbin@1.2.3 
    │ └── async@1.5.2 
    ├── home-dir@1.0.0 
    ├── instapromise@2.0.7-rc.1 
    ├── ip@1.1.5 
    ├─┬ joi@10.6.0 
    │ ├── hoek@4.1.1 
    │ ├── isemail@2.2.1 
    │ ├── items@2.1.1 
    │ └─┬ topo@2.0.2 
    │   └── hoek@4.1.1 
    ├── jsonfile@2.4.0 
    ├── jsonschema@1.1.1 
    ├─┬ jsonwebtoken@7.4.1 
    │ ├─┬ joi@6.10.1 
    │ │ ├── hoek@2.16.3 
    │ │ ├── isemail@1.2.0 
    │ │ └── topo@1.1.0 
    │ ├─┬ jws@3.1.4 
    │ │ ├── base64url@2.0.0 
    │ │ └─┬ jwa@1.1.5 
    │ │   ├── buffer-equal-constant-time@1.0.1 
    │ │   └── ecdsa-sig-formatter@1.0.9 
    │ ├── lodash.once@4.1.1 
    │ ├── ms@2.0.0 
    │ └── xtend@4.0.1 
    ├── md5hex@1.0.0 
    ├─┬ mkdirp@0.5.1 
    │ └── minimist@0.0.8 
    ├── mkdirp-promise@5.0.1 
    ├─┬ mz@2.6.0 
    │ ├── any-promise@1.3.0 
    │ ├── object-assign@4.1.1 
    │ └─┬ thenify-all@1.6.0 
    │   └── thenify@3.3.0 
    ├── ncp@2.0.0 
    ├─┬ opn@4.0.2 
    │ └─┬ pinkie-promise@2.0.1 
    │   └── pinkie@2.0.4 
    ├── promise-props@1.0.0 
    ├── querystring@0.2.0 
    ├── UNMET PEER DEPENDENCY react@^0.14.0 || ^15.0.0-0 || ^16.0.0-0
    ├─┬ react-redux@5.0.5 
    │ ├─┬ create-react-class@15.6.0 
    │ │ └─┬ fbjs@0.8.12 
    │ │   ├── core-js@1.2.7 
    │ │   ├─┬ isomorphic-fetch@2.2.1 
    │ │   │ ├─┬ node-fetch@1.7.1 
    │ │   │ │ ├── encoding@0.1.12 
    │ │   │ │ └── is-stream@1.1.0 
    │ │   │ └── whatwg-fetch@2.0.3 
    │ │   ├─┬ promise@7.3.1 
    │ │   │ └── asap@2.0.5 
    │ │   ├── setimmediate@1.0.5 
    │ │   └── ua-parser-js@0.7.13 
    │ ├── hoist-non-react-statics@1.2.0 
    │ ├── invariant@2.2.2 
    │ ├── lodash-es@4.17.4 
    │ ├─┬ loose-envify@1.3.1 
    │ │ └── js-tokens@3.0.1 
    │ └── prop-types@15.5.10 
    ├─┬ read-chunk@2.0.0 
    │ └── pify@2.3.0 
    ├─┬ redux@3.7.1 
    │ └── symbol-observable@1.0.4 
    ├─┬ redux-logger@2.10.2 
    │ └── deep-diff@0.3.4 
    ├─┬ request@2.81.0 
    │ ├── aws-sign2@0.6.0 
    │ ├── aws4@1.6.0 
    │ ├── caseless@0.12.0 
    │ ├── extend@3.0.1 
    │ ├── forever-agent@0.6.1 
    │ ├── form-data@2.1.4 
    │ ├─┬ har-validator@4.2.1 
    │ │ ├─┬ ajv@4.11.8 
    │ │ │ ├── co@4.6.0 
    │ │ │ └─┬ json-stable-stringify@1.0.1 
    │ │ │   └── jsonify@0.0.0 
    │ │ └── har-schema@1.0.5 
    │ ├─┬ hawk@3.1.3 
    │ │ ├── boom@2.10.1 
    │ │ ├── cryptiles@2.0.5 
    │ │ └── sntp@1.0.9 
    │ ├─┬ http-signature@1.1.1 
    │ │ ├── assert-plus@0.2.0 
    │ │ ├─┬ jsprim@1.4.0 
    │ │ │ ├── assert-plus@1.0.0 
    │ │ │ ├── extsprintf@1.0.2 
    │ │ │ ├── json-schema@0.2.3 
    │ │ │ └── verror@1.3.6 
    │ │ └─┬ sshpk@1.13.1 
    │ │   ├── asn1@0.2.3 
    │ │   ├── assert-plus@1.0.0 
    │ │   ├── bcrypt-pbkdf@1.0.1 
    │ │   ├─┬ dashdash@1.14.1 
    │ │   │ └── assert-plus@1.0.0 
    │ │   ├── ecc-jsbn@0.1.1 
    │ │   ├─┬ getpass@0.1.7 
    │ │   │ └── assert-plus@1.0.0 
    │ │   ├── jsbn@0.1.1 
    │ │   └── tweetnacl@0.14.5 
    │ ├── is-typedarray@1.0.0 
    │ ├── isstream@0.1.2 
    │ ├── json-stringify-safe@5.0.1 
    │ ├── oauth-sign@0.8.2 
    │ ├── performance-now@0.2.0 
    │ ├── safe-buffer@5.1.1 
    │ ├── stringstream@0.0.5 
    │ ├─┬ tough-cookie@2.3.2 
    │ │ └── punycode@1.4.1 
    │ └── tunnel-agent@0.6.0 
    ├─┬ request-progress@3.0.0 
    │ └── throttleit@1.0.0 
    ├── semver@5.3.0 
    ├─┬ slugid@1.1.0 
    │ └── uuid@2.0.3 
    ├── slugify@1.1.0 
    ├─┬ source-map-support@0.4.15 
    │ └── source-map@0.5.6 
    ├─┬ tar.gz@1.0.5 
    │ ├── bluebird@2.11.0 
    │ ├── fstream@1.0.11 
    │ ├── mout@0.11.1 
    │ └─┬ tar@2.2.1 
    │   └── block-stream@0.0.9 
    ├── tree-kill@1.1.0 
    ├─┬ url@0.11.0 
    │ └── punycode@1.3.2 
    ├── xhr2@0.1.4 
    └── yesno@0.0.1 

npm WARN xdl@42.0.0 requires a peer of react@16.0.0-alpha.12 but none was installed.
npm WARN react-redux@5.0.5 requires a peer of react@^0.14.0 || ^15.0.0-0 || ^16.0.0-0 but none was installed.
Installing dependencies using npm...

my-app@0.1.0 /Users/jsheth/webdevcon/my-app
├─┬ expo@18.0.4 
│ ├─┬ @expo/vector-icons@5.0.0 
│ │ └── react-native-vector-icons@4.1.1 
│ ├─┬ babel-preset-airbnb@2.3.3 
│ │ ├─┬ babel-plugin-transform-es2015-modules-commonjs@6.24.1 
│ │ │ └── babel-plugin-transform-strict-mode@6.24.1 
│ │ ├── babel-plugin-transform-es2015-template-literals@6.22.0 
│ │ ├── babel-plugin-transform-es3-member-expression-literals@6.22.0 
│ │ ├── babel-plugin-transform-es3-property-literals@6.22.0 
│ │ ├─┬ babel-plugin-transform-exponentiation-operator@6.24.1 
│ │ │ ├─┬ babel-helper-builder-binary-assignment-operator-visitor@6.24.1 
│ │ │ │ └── babel-helper-explode-assignable-expression@6.24.1 
│ │ │ └── babel-plugin-syntax-exponentiation-operator@6.13.0 
│ │ ├── babel-plugin-transform-jscript@6.22.0 
│ │ ├─┬ babel-preset-env@1.5.2 
│ │ │ ├── babel-plugin-transform-async-to-generator@6.24.1 
│ │ │ ├── babel-plugin-transform-es2015-duplicate-keys@6.24.1 
│ │ │ ├── babel-plugin-transform-es2015-modules-amd@6.24.1 
│ │ │ ├─┬ babel-plugin-transform-es2015-modules-systemjs@6.24.1 
│ │ │ │ └── babel-helper-hoist-variables@6.24.1 
│ │ │ ├── babel-plugin-transform-es2015-modules-umd@6.24.1 
│ │ │ ├── babel-plugin-transform-es2015-typeof-symbol@6.23.0 
│ │ │ └─┬ browserslist@2.1.5 
│ │ │   ├── caniuse-lite@1.0.30000696 
│ │ │   └── electron-to-chromium@1.3.14 
│ │ ├─┬ babel-preset-react@6.24.1 
│ │ │ ├── babel-plugin-transform-react-jsx-self@6.22.0 
│ │ │ └── babel-preset-flow@6.23.0 
│ │ └─┬ object.assign@4.0.4 
│ │   ├─┬ define-properties@1.1.2 
│ │   │ ├── foreach@2.0.5 
│ │   │ └── object-keys@1.0.11 
│ │   ├── function-bind@1.1.0 
│ │   └── object-keys@1.0.11 
│ ├─┬ babel-preset-expo@2.0.0 
│ │ ├─┬ babel-plugin-module-resolver@2.5.0 
│ │ │ ├── find-babel-config@1.1.0 
│ │ │ └─┬ resolve@1.3.3 
│ │ │   └── path-parse@1.0.5 
│ │ ├─┬ babel-plugin-transform-decorators-legacy@1.3.4 
│ │ │ └── babel-plugin-syntax-decorators@6.13.0 
│ │ └─┬ babel-preset-react-native-stage-0@1.0.1 
│ │   ├─┬ babel-plugin-transform-class-constructor-call@6.24.1 
│ │   │ └── babel-plugin-syntax-class-constructor-call@6.18.0 
│ │   ├─┬ babel-plugin-transform-do-expressions@6.22.0 
│ │   │ └── babel-plugin-syntax-do-expressions@6.13.0 
│ │   ├─┬ babel-plugin-transform-export-extensions@6.22.0 
│ │   │ └── babel-plugin-syntax-export-extensions@6.13.0 
│ │   └─┬ babel-plugin-transform-function-bind@6.22.0 
│ │     └── babel-plugin-syntax-function-bind@6.13.0 
│ ├── fbemitter@2.1.1 
│ ├── lodash.map@4.6.0 
│ ├── lodash.zipobject@4.1.3 
│ ├─┬ lottie-react-native@1.1.1 
│ │ ├── lottie-ios@1.5.2 
│ │ └─┬ react-native-safe-module@1.2.0 
│ │   └── dedent@0.6.0 
│ ├── md5-file@3.1.1 
│ ├─┬ pretty-format@20.0.3 
│ │ └─┬ ansi-styles@3.1.0 
│ │   └─┬ color-convert@1.9.0 
│ │     └── color-name@1.1.2 
│ ├── UNMET PEER DEPENDENCY react@>=15.3.1
│ ├── react-native-branch@2.0.0-beta.3 
│ ├─┬ react-native-fbads@4.1.0 
│ │ └── eventemitter3@2.0.3 
│ ├── react-native-maps@0.15.2 
│ ├─┬ react-native-svg@5.2.0 
│ │ └─┬ color@0.11.4 
│ │   ├── clone@1.0.2 
│ │   └── color-string@0.3.0 
│ ├── uuid-js@0.7.5 
│ └─┬ websql@0.4.4  (git://github.com/expo/node-websql.git#e364fa65146a9e2157a19e5c719e7702c2b6b87a)
│   ├── argsarray@0.0.1 
│   ├── immediate@3.2.3 
│   ├── noop-fn@1.0.0 
│   ├── pouchdb-collections@1.0.1 
│   └── tiny-queue@0.2.1 
├─┬ jest-expo@18.0.0 
│ ├─┬ babel-jest@19.0.0 
│ │ ├─┬ babel-plugin-istanbul@4.1.4 
│ │ │ ├─┬ find-up@2.1.0 
│ │ │ │ └─┬ locate-path@2.0.0 
│ │ │ │   └─┬ p-locate@2.0.0 
│ │ │ │     └── p-limit@1.1.0 
│ │ │ ├── istanbul-lib-instrument@1.7.3 
│ │ │ └─┬ test-exclude@4.1.1 
│ │ │   └── arrify@1.0.1 
│ │ └─┬ babel-preset-jest@19.0.0 
│ │   └── babel-plugin-jest-hoist@19.0.0 
│ ├─┬ jest@19.0.2 
│ │ └─┬ jest-cli@19.0.2 
│ │   ├── ansi-escapes@1.4.0 
│ │   ├── callsites@2.0.0 
│ │   ├─┬ is-ci@1.0.10 
│ │   │ └── ci-info@1.0.0 
│ │   ├─┬ istanbul-api@1.1.10 
│ │   │ ├── async@2.5.0 
│ │   │ ├── fileset@2.0.3 
│ │   │ ├─┬ istanbul-lib-hook@1.0.7 
│ │   │ │ └─┬ append-transform@0.4.0 
│ │   │ │   └── default-require-extensions@1.0.0 
│ │   │ ├─┬ istanbul-lib-report@1.1.1 
│ │   │ │ └─┬ supports-color@3.2.3 
│ │   │ │   └── has-flag@1.0.0 
│ │   │ ├─┬ istanbul-lib-source-maps@1.2.1 
│ │   │ │ └── rimraf@2.6.1 
│ │   │ ├─┬ istanbul-reports@1.1.1 
│ │   │ │ └─┬ handlebars@4.0.10 
│ │   │ │   ├── async@1.5.2 
│ │   │ │   └─┬ source-map@0.4.4 
│ │   │ │     └── amdefine@1.0.1 
│ │   │ └─┬ js-yaml@3.8.4 
│ │   │   ├─┬ argparse@1.0.9 
│ │   │   │ └── sprintf-js@1.0.3 
│ │   │   └── esprima@3.1.3 
│ │   ├── istanbul-lib-coverage@1.1.1 
│ │   ├── jest-changed-files@19.0.2 
│ │   ├─┬ jest-environment-jsdom@19.0.2 
│ │   │ └─┬ jsdom@9.12.0 
│ │   │   ├── abab@1.0.3 
│ │   │   ├── acorn@4.0.13 
│ │   │   ├── acorn-globals@3.1.0 
│ │   │   ├── array-equal@1.0.0 
│ │   │   ├── content-type-parser@1.0.1 
│ │   │   ├── cssom@0.3.2 
│ │   │   ├── cssstyle@0.2.37 
│ │   │   ├─┬ escodegen@1.8.1 
│ │   │   │ ├── esprima@2.7.3 
│ │   │   │ ├── estraverse@1.9.3 
│ │   │   │ ├─┬ optionator@0.8.2 
│ │   │   │ │ ├── deep-is@0.1.3 
│ │   │   │ │ ├── fast-levenshtein@2.0.6 
│ │   │   │ │ ├── levn@0.3.0 
│ │   │   │ │ ├── prelude-ls@1.1.2 
│ │   │   │ │ └── type-check@0.3.2 
│ │   │   │ └── source-map@0.2.0 
│ │   │   ├── html-encoding-sniffer@1.0.1 
│ │   │   ├── nwmatcher@1.4.1 
│ │   │   ├── parse5@1.5.1 
│ │   │   ├── sax@1.2.4 
│ │   │   ├── symbol-tree@3.2.2 
│ │   │   ├── webidl-conversions@4.0.1 
│ │   │   ├─┬ whatwg-encoding@1.0.1 
│ │   │   │ └── iconv-lite@0.4.13 
│ │   │   ├─┬ whatwg-url@4.8.0 
│ │   │   │ ├── tr46@0.0.3 
│ │   │   │ └── webidl-conversions@3.0.1 
│ │   │   └── xml-name-validator@2.0.1 
│ │   ├─┬ jest-haste-map@19.0.2 
│ │   │ └─┬ sane@1.5.0 
│ │   │   └─┬ fb-watchman@1.9.2 
│ │   │     └── bser@1.0.2 
│ │   ├─┬ jest-jasmine2@19.0.2 
│ │   │ ├─┬ jest-matcher-utils@19.0.0 
│ │   │ │ └─┬ pretty-format@19.0.0 
│ │   │ │   └── ansi-styles@3.1.0 
│ │   │ └── jest-matchers@19.0.0 
│ │   ├── jest-message-util@19.0.0 
│ │   ├── jest-resolve-dependencies@19.0.0 
│ │   ├─┬ jest-snapshot@19.0.2 
│ │   │ ├─┬ jest-diff@19.0.0 
│ │   │ │ ├── diff@3.2.0 
│ │   │ │ └─┬ pretty-format@19.0.0 
│ │   │ │   └── ansi-styles@3.1.0 
│ │   │ ├── natural-compare@1.4.0 
│ │   │ └─┬ pretty-format@19.0.0 
│ │   │   └── ansi-styles@3.1.0 
│ │   ├─┬ node-notifier@5.1.2 
│ │   │ ├── growly@1.3.0 
│ │   │ └── shellwords@0.1.0 
│ │   └── string-length@1.0.1 
│ ├─┬ jest-repl@19.0.2 
│ │ ├─┬ jest-util@19.0.2 
│ │ │ ├── jest-mock@19.0.0 
│ │ │ ├─┬ jest-validate@19.0.2 
│ │ │ │ └─┬ pretty-format@19.0.0 
│ │ │ │   └── ansi-styles@3.1.0 
│ │ │ └── leven@2.1.0 
│ │ └── repl@0.1.3 
│ └─┬ jest-runtime@19.0.4 
│   ├─┬ jest-config@19.0.4 
│   │ ├── jest-environment-node@19.0.2 
│   │ └─┬ pretty-format@19.0.0 
│   │   └── ansi-styles@3.1.0 
│   ├── jest-file-exists@19.0.0 
│   ├─┬ jest-haste-map@19.0.2 
│   │ └─┬ sane@1.5.0 
│   │   └─┬ fb-watchman@1.9.2 
│   │     └── bser@1.0.2 
│   ├── jest-regex-util@19.0.0 
│   ├─┬ jest-resolve@19.0.2 
│   │ ├─┬ browser-resolve@1.11.2 
│   │ │ └── resolve@1.1.7 
│   │ └─┬ jest-haste-map@19.0.2 
│   │   └─┬ sane@1.5.0 
│   │     └─┬ fb-watchman@1.9.2 
│   │       └── bser@1.0.2 
│   ├─┬ micromatch@2.3.11 
│   │ ├─┬ arr-diff@2.0.0 
│   │ │ └── arr-flatten@1.0.3 
│   │ ├── array-unique@0.2.1 
│   │ ├─┬ braces@1.8.5 
│   │ │ ├─┬ expand-range@1.8.2 
│   │ │ │ └─┬ fill-range@2.2.3 
│   │ │ │   ├── is-number@2.1.0 
│   │ │ │   ├─┬ isobject@2.1.0 
│   │ │ │   │ └── isarray@1.0.0 
│   │ │ │   ├─┬ randomatic@1.1.7 
│   │ │ │   │ ├─┬ is-number@3.0.0 
│   │ │ │   │ │ └── kind-of@3.2.2 
│   │ │ │   │ └── kind-of@4.0.0 
│   │ │ │   └── repeat-string@1.6.1 
│   │ │ ├── preserve@0.2.0 
│   │ │ └── repeat-element@1.1.2 
│   │ ├─┬ expand-brackets@0.1.5 
│   │ │ └── is-posix-bracket@0.1.1 
│   │ ├── extglob@0.3.2 
│   │ ├── filename-regex@2.0.1 
│   │ ├── is-extglob@1.0.0 
│   │ ├── is-glob@2.0.1 
│   │ ├── kind-of@3.2.2 
│   │ ├─┬ normalize-path@2.1.1 
│   │ │ └── remove-trailing-separator@1.0.2 
│   │ ├─┬ object.omit@2.0.1 
│   │ │ ├─┬ for-own@0.1.5 
│   │ │ │ └── for-in@1.0.2 
│   │ │ └── is-extendable@0.1.1 
│   │ ├─┬ parse-glob@3.0.4 
│   │ │ ├─┬ glob-base@0.3.0 
│   │ │ │ └── glob-parent@2.0.0 
│   │ │ └── is-dotfile@1.0.3 
│   │ └─┬ regex-cache@0.4.3 
│   │   ├── is-equal-shallow@0.1.3 
│   │   └── is-primitive@2.0.0 
│   └── strip-bom@3.0.0 
├── react@16.0.0-alpha.12 
├─┬ react-native@0.45.1 
│ ├── absolute-path@0.0.0 
│ ├── art@0.10.1 
│ ├── async@2.5.0 
│ ├─┬ babel-core@6.25.0 
│ │ ├── babel-code-frame@6.22.0 
│ │ ├── babel-helpers@6.24.1 
│ │ ├── babel-messages@6.23.0 
│ │ ├── babel-template@6.25.0 
│ │ ├── convert-source-map@1.5.0 
│ │ ├── private@0.1.7 
│ │ └── slash@1.0.0 
│ ├─┬ babel-generator@6.25.0 
│ │ ├─┬ detect-indent@4.0.0 
│ │ │ └─┬ repeating@2.0.1 
│ │ │   └── is-finite@1.0.2 
│ │ ├── jsesc@1.3.0 
│ │ └── trim-right@1.0.1 
│ ├── babel-plugin-external-helpers@6.22.0 
│ ├── babel-plugin-syntax-trailing-function-commas@6.22.0 
│ ├─┬ babel-plugin-transform-async-to-generator@6.16.0 
│ │ └── babel-helper-remap-async-to-generator@6.24.1 
│ ├─┬ babel-plugin-transform-flow-strip-types@6.22.0 
│ │ └── babel-plugin-syntax-flow@6.18.0 
│ ├─┬ babel-plugin-transform-object-rest-spread@6.23.0 
│ │ └── babel-plugin-syntax-object-rest-spread@6.13.0 
│ ├── babel-polyfill@6.23.0 
│ ├─┬ babel-preset-es2015-node@6.1.1 
│ │ ├── babel-plugin-transform-es2015-destructuring@6.23.0 
│ │ ├─┬ babel-plugin-transform-es2015-function-name@6.24.1 
│ │ │ └── babel-helper-function-name@6.24.1 
│ │ ├─┬ babel-plugin-transform-es2015-parameters@6.24.1 
│ │ │ ├── babel-helper-call-delegate@6.24.1 
│ │ │ └── babel-helper-get-function-arity@6.24.1 
│ │ ├── babel-plugin-transform-es2015-shorthand-properties@6.24.1 
│ │ ├── babel-plugin-transform-es2015-spread@6.22.0 
│ │ ├─┬ babel-plugin-transform-es2015-sticky-regex@6.24.1 
│ │ │ └── babel-helper-regex@6.24.1 
│ │ └─┬ babel-plugin-transform-es2015-unicode-regex@6.24.1 
│ │   └─┬ regexpu-core@2.0.0 
│ │     ├── regenerate@1.3.2 
│ │     ├── regjsgen@0.2.0 
│ │     └─┬ regjsparser@0.1.5 
│ │       └── jsesc@0.5.0 
│ ├─┬ babel-preset-fbjs@2.1.4 
│ │ ├── babel-plugin-check-es2015-constants@6.22.0 
│ │ ├── babel-plugin-syntax-class-properties@6.13.0 
│ │ ├── babel-plugin-syntax-jsx@6.18.0 
│ │ ├── babel-plugin-transform-class-properties@6.24.1 
│ │ ├── babel-plugin-transform-es2015-arrow-functions@6.22.0 
│ │ ├── babel-plugin-transform-es2015-block-scoped-functions@6.22.0 
│ │ ├── babel-plugin-transform-es2015-block-scoping@6.24.1 
│ │ ├─┬ babel-plugin-transform-es2015-classes@6.24.1 
│ │ │ ├── babel-helper-define-map@6.24.1 
│ │ │ ├── babel-helper-optimise-call-expression@6.24.1 
│ │ │ └── babel-helper-replace-supers@6.24.1 
│ │ ├── babel-plugin-transform-es2015-computed-properties@6.24.1 
│ │ ├── babel-plugin-transform-es2015-for-of@6.23.0 
│ │ ├── babel-plugin-transform-es2015-literals@6.22.0 
│ │ ├── babel-plugin-transform-es2015-object-super@6.24.1 
│ │ ├── babel-plugin-transform-react-display-name@6.25.0 
│ │ └─┬ babel-plugin-transform-react-jsx@6.24.1 
│ │   └── babel-helper-builder-react-jsx@6.24.1 
│ ├─┬ babel-preset-react-native@1.9.2 
│ │ ├── babel-plugin-react-transform@2.0.2 
│ │ ├── babel-plugin-syntax-async-functions@6.13.0 
│ │ ├── babel-plugin-transform-object-assign@6.22.0 
│ │ ├── babel-plugin-transform-react-jsx-source@6.22.0 
│ │ └─┬ babel-plugin-transform-regenerator@6.24.1 
│ │   └── regenerator-transform@0.9.11 
│ ├─┬ babel-register@6.24.1 
│ │ └─┬ home-or-tmp@2.0.0 
│ │   └── os-homedir@1.0.2 
│ ├─┬ babel-traverse@6.25.0 
│ │ └── globals@9.18.0 
│ ├─┬ babel-types@6.25.0 
│ │ ├── esutils@2.0.2 
│ │ └── to-fast-properties@1.0.3 
│ ├── babylon@6.17.4 
│ ├── base64-js@1.2.1 
│ ├─┬ bser@1.0.3 
│ │ └── node-int64@0.4.0 
│ ├─┬ connect@2.30.2 
│ │ ├── basic-auth-connect@1.0.0 
│ │ ├─┬ body-parser@1.13.3 
│ │ │ ├── iconv-lite@0.4.11 
│ │ │ └─┬ raw-body@2.1.7 
│ │ │   ├── bytes@2.4.0 
│ │ │   └── iconv-lite@0.4.13 
│ │ ├── bytes@2.1.0 
│ │ ├─┬ compression@1.5.2 
│ │ │ ├─┬ accepts@1.2.13 
│ │ │ │ └── negotiator@0.5.3 
│ │ │ ├── bytes@2.1.0 
│ │ │ ├── compressible@2.0.10 
│ │ │ ├─┬ debug@2.2.0 
│ │ │ │ └── ms@0.7.1 
│ │ │ └── vary@1.0.1 
│ │ ├─┬ connect-timeout@1.6.2 
│ │ │ ├── debug@2.2.0 
│ │ │ ├── http-errors@1.3.1 
│ │ │ └── ms@0.7.1 
│ │ ├── cookie@0.1.3 
│ │ ├─┬ cookie-parser@1.3.5 
│ │ │ └── cookie@0.1.3 
│ │ ├─┬ csurf@1.8.3 
│ │ │ ├── cookie@0.1.3 
│ │ │ ├─┬ csrf@3.0.6 
│ │ │ │ ├── rndm@1.2.0 
│ │ │ │ ├── tsscmp@1.0.5 
│ │ │ │ └─┬ uid-safe@2.1.4 
│ │ │ │   └── random-bytes@1.0.0 
│ │ │ └── http-errors@1.3.1 
│ │ ├─┬ debug@2.2.0 
│ │ │ └── ms@0.7.1 
│ │ ├── depd@1.0.1 
│ │ ├── errorhandler@1.4.3 
│ │ ├─┬ express-session@1.11.3 
│ │ │ ├── cookie@0.1.3 
│ │ │ ├── crc@3.3.0 
│ │ │ ├─┬ debug@2.2.0 
│ │ │ │ └── ms@0.7.1 
│ │ │ ├── depd@1.0.1 
│ │ │ └─┬ uid-safe@2.0.0 
│ │ │   └── base64-url@1.2.1 
│ │ ├─┬ finalhandler@0.4.0 
│ │ │ └── escape-html@1.0.2 
│ │ ├── fresh@0.3.0 
│ │ ├── http-errors@1.3.1 
│ │ ├── method-override@2.3.9 
│ │ ├─┬ morgan@1.6.1 
│ │ │ ├── basic-auth@1.0.4 
│ │ │ ├─┬ debug@2.2.0 
│ │ │ │ └── ms@0.7.1 
│ │ │ └── depd@1.0.1 
│ │ ├─┬ multiparty@3.3.2 
│ │ │ └── stream-counter@0.2.0 
│ │ ├── on-headers@1.0.1 
│ │ ├── pause@0.1.0 
│ │ ├── qs@4.0.0 
│ │ ├── response-time@2.3.2 
│ │ ├─┬ serve-favicon@2.3.2 
│ │ │ ├── etag@1.7.0 
│ │ │ ├── fresh@0.3.0 
│ │ │ └── ms@0.7.2 
│ │ ├─┬ serve-index@1.7.3 
│ │ │ ├─┬ accepts@1.2.13 
│ │ │ │ └── negotiator@0.5.3 
│ │ │ ├── batch@0.5.3 
│ │ │ ├─┬ debug@2.2.0 
│ │ │ │ └── ms@0.7.1 
│ │ │ └── http-errors@1.3.1 
│ │ ├─┬ serve-static@1.10.3 
│ │ │ ├── escape-html@1.0.3 
│ │ │ └─┬ send@0.13.2 
│ │ │   ├── depd@1.1.0 
│ │ │   ├── escape-html@1.0.3 
│ │ │   ├── etag@1.7.0 
│ │ │   ├── mime@1.3.4 
│ │ │   ├── range-parser@1.0.3 
│ │ │   └── statuses@1.2.1 
│ │ └── vhost@3.0.2 
│ ├── denodeify@1.2.1 
│ ├─┬ errno@0.1.4 
│ │ └── prr@0.0.0 
│ ├── event-target-shim@1.1.1 
│ ├─┬ fbjs-scripts@0.7.1 
│ │ ├── babel-preset-fbjs@1.0.0 
│ │ ├── core-js@1.2.7 
│ │ ├── cross-spawn@3.0.1 
│ │ ├─┬ gulp-util@3.0.8 
│ │ │ ├── array-differ@1.0.0 
│ │ │ ├── array-uniq@1.0.3 
│ │ │ ├── beeper@1.1.1 
│ │ │ ├── dateformat@2.0.0 
│ │ │ ├─┬ fancy-log@1.3.0 
│ │ │ │ └── time-stamp@1.1.0 
│ │ │ ├─┬ gulplog@1.0.0 
│ │ │ │ └── glogg@1.0.0 
│ │ │ ├─┬ has-gulplog@0.1.0 
│ │ │ │ └── sparkles@1.0.0 
│ │ │ ├── lodash._reescape@3.0.0 
│ │ │ ├── lodash._reevaluate@3.0.0 
│ │ │ ├── lodash._reinterpolate@3.0.0 
│ │ │ ├─┬ lodash.template@3.6.2 
│ │ │ │ ├── lodash._basecopy@3.0.1 
│ │ │ │ ├── lodash._basetostring@3.0.1 
│ │ │ │ ├── lodash._basevalues@3.0.0 
│ │ │ │ ├── lodash._isiterateecall@3.0.9 
│ │ │ │ ├─┬ lodash.escape@3.2.0 
│ │ │ │ │ └── lodash._root@3.0.1 
│ │ │ │ ├─┬ lodash.keys@3.1.2 
│ │ │ │ │ ├── lodash._getnative@3.9.1 
│ │ │ │ │ ├── lodash.isarguments@3.1.0 
│ │ │ │ │ └── lodash.isarray@3.0.4 
│ │ │ │ ├── lodash.restparam@3.6.1 
│ │ │ │ └── lodash.templatesettings@3.1.1 
│ │ │ ├─┬ multipipe@0.1.2 
│ │ │ │ └── duplexer2@0.0.2 
│ │ │ ├── object-assign@3.0.0 
│ │ │ ├── replace-ext@0.0.1 
│ │ │ └─┬ vinyl@0.5.3 
│ │ │   ├── clone@1.0.2 
│ │ │   └── clone-stats@0.0.1 
│ │ └─┬ through2@2.0.3 
│ │   ├─┬ readable-stream@2.3.2 
│ │   │ ├── isarray@1.0.0 
│ │   │ └── string_decoder@1.0.3 
│ │   └── xtend@4.0.1 
│ ├─┬ fs-extra@1.0.0 
│ │ └── jsonfile@2.4.0 
│ ├── image-size@0.3.5 
│ ├─┬ inquirer@0.12.0 
│ │ ├── ansi-escapes@1.4.0 
│ │ ├─┬ cli-cursor@1.0.2 
│ │ │ └─┬ restore-cursor@1.0.1 
│ │ │   ├── exit-hook@1.1.1 
│ │ │   └── onetime@1.1.0 
│ │ ├── figures@1.7.0 
│ │ ├─┬ readline2@1.0.1 
│ │ │ ├── is-fullwidth-code-point@1.0.0 
│ │ │ └── mute-stream@0.0.5 
│ │ ├── run-async@0.1.0 
│ │ ├── rx-lite@3.1.2 
│ │ └─┬ string-width@1.0.2 
│ │   ├── code-point-at@1.1.0 
│ │   └─┬ is-fullwidth-code-point@1.0.0 
│ │     └── number-is-nan@1.0.1 
│ ├─┬ jest-haste-map@20.0.4 
│ │ ├─┬ fb-watchman@2.0.0 
│ │ │ └── bser@2.0.0 
│ │ ├── jest-docblock@20.0.3 
│ │ ├─┬ sane@1.6.0 
│ │ │ ├── anymatch@1.3.0 
│ │ │ └─┬ fb-watchman@1.9.2 
│ │ │   └── bser@1.0.2 
│ │ └─┬ worker-farm@1.3.1 
│ │   └── xtend@4.0.1 
│ ├─┬ joi@6.10.1 
│ │ ├── isemail@1.2.0 
│ │ └── topo@1.1.0 
│ ├── json5@0.4.0 
│ ├── left-pad@1.1.3 
│ ├─┬ merge-stream@1.0.1 
│ │ └─┬ readable-stream@2.3.2 
│ │   ├── isarray@1.0.0 
│ │   └── string_decoder@1.0.3 
│ ├─┬ mime-types@2.1.11 
│ │ └── mime-db@1.23.0 
│ ├─┬ npmlog@2.0.4 
│ │ ├── ansi@0.3.1 
│ │ ├─┬ are-we-there-yet@1.1.4 
│ │ │ ├── delegates@1.0.0 
│ │ │ └─┬ readable-stream@2.3.2 
│ │ │   ├── isarray@1.0.0 
│ │ │   └── string_decoder@1.0.3 
│ │ └─┬ gauge@1.2.7 
│ │   ├── has-unicode@2.0.1 
│ │   ├── lodash.pad@4.5.1 
│ │   ├── lodash.padend@4.6.1 
│ │   └── lodash.padstart@4.6.1 
│ ├── opn@3.0.3 
│ ├─┬ optimist@0.6.1 
│ │ ├── minimist@0.0.10 
│ │ └── wordwrap@0.0.3 
│ ├─┬ plist@1.2.0 
│ │ ├── base64-js@0.0.8 
│ │ ├─┬ xmlbuilder@4.0.0 
│ │ │ └── lodash@3.10.1 
│ │ └── xmldom@0.1.27 
│ ├── pretty-format@4.3.1 
│ ├── react-clone-referenced-element@1.0.1 
│ ├─┬ react-devtools-core@2.3.3 
│ │ └─┬ ws@2.3.1 
│ │   ├── safe-buffer@5.0.1 
│ │   └── ultron@1.1.0 
│ ├── react-timer-mixin@0.13.3 
│ ├─┬ react-transform-hmr@1.0.4 
│ │ ├─┬ global@4.3.2 
│ │ │ ├─┬ min-document@2.19.0 
│ │ │ │ └── dom-walk@0.1.1 
│ │ │ └── process@0.5.2 
│ │ └─┬ react-proxy@1.1.8 
│ │   └── react-deep-force-update@1.0.1 
│ ├── rebound@0.0.13 
│ ├── regenerator-runtime@0.9.6 
│ ├── rimraf@2.6.1 
│ ├─┬ sane@1.4.1 
│ │ ├─┬ exec-sh@0.2.0 
│ │ │ └── merge@1.2.0 
│ │ ├─┬ fb-watchman@1.9.2 
│ │ │ └── bser@1.0.2 
│ │ ├─┬ walker@1.0.7 
│ │ │ └─┬ makeerror@1.0.11 
│ │ │   └── tmpl@1.0.4 
│ │ └── watch@0.10.0 
│ ├─┬ shell-quote@1.6.1 
│ │ ├── array-filter@0.0.1 
│ │ ├── array-map@0.0.0 
│ │ └── array-reduce@0.0.0 
│ ├── stacktrace-parser@0.1.4 
│ ├─┬ temp@0.8.3 
│ │ └── rimraf@2.2.8 
│ ├── throat@3.2.0 
│ ├─┬ uglify-js@2.7.5 
│ │ ├── async@0.2.10 
│ │ ├── uglify-to-browserify@1.0.2 
│ │ └─┬ yargs@3.10.0 
│ │   ├── camelcase@1.2.1 
│ │   ├─┬ cliui@2.1.0 
│ │   │ ├─┬ center-align@0.1.3 
│ │   │ │ ├─┬ align-text@0.1.4 
│ │   │ │ │ └── longest@1.0.1 
│ │   │ │ └── lazy-cache@1.0.4 
│ │   │ ├── right-align@0.1.3 
│ │   │ └── wordwrap@0.0.2 
│ │   └── window-size@0.1.0 
│ ├── whatwg-fetch@1.1.1 
│ ├── wordwrap@1.0.0 
│ ├─┬ write-file-atomic@1.3.4 
│ │ ├── imurmurhash@0.1.4 
│ │ └── slide@1.1.6 
│ ├─┬ ws@1.1.4 
│ │ ├── options@0.0.6 
│ │ └── ultron@1.0.2 
│ ├─┬ xcode@0.9.3 
│ │ ├── pegjs@0.10.0 
│ │ ├─┬ simple-plist@0.2.1 
│ │ │ ├─┬ bplist-creator@0.0.7 
│ │ │ │ └── stream-buffers@2.2.0 
│ │ │ ├─┬ bplist-parser@0.1.1 
│ │ │ │ └── big-integer@1.6.23 
│ │ │ └─┬ plist@2.0.1 
│ │ │   ├── base64-js@1.1.2 
│ │ │   └── xmlbuilder@8.2.2 
│ │ └── uuid@3.0.1 
│ ├─┬ xmldoc@0.4.0 
│ │ └── sax@1.1.6 
│ ├── xpipe@1.0.5 
│ ├── xtend@4.0.1 
│ └─┬ yargs@6.6.0 
│   ├── camelcase@3.0.0 
│   ├─┬ cliui@3.2.0 
│   │ ├─┬ string-width@1.0.2 
│   │ │ └── is-fullwidth-code-point@1.0.0 
│   │ └─┬ wrap-ansi@2.1.0 
│   │   └─┬ string-width@1.0.2 
│   │     └── is-fullwidth-code-point@1.0.0 
│   ├── decamelize@1.2.0 
│   ├── get-caller-file@1.0.2 
│   ├─┬ os-locale@1.4.0 
│   │ └─┬ lcid@1.0.0 
│   │   └── invert-kv@1.0.0 
│   ├─┬ read-pkg-up@1.0.1 
│   │ ├─┬ find-up@1.1.2 
│   │ │ └── path-exists@2.1.0 
│   │ └─┬ read-pkg@1.1.0 
│   │   ├─┬ load-json-file@1.1.0 
│   │   │ ├─┬ parse-json@2.2.0 
│   │   │ │ └─┬ error-ex@1.3.1 
│   │   │ │   └── is-arrayish@0.2.1 
│   │   │ └─┬ strip-bom@2.0.0 
│   │   │   └── is-utf8@0.2.1 
│   │   ├─┬ normalize-package-data@2.4.0 
│   │   │ ├── hosted-git-info@2.5.0 
│   │   │ ├─┬ is-builtin-module@1.0.0 
│   │   │ │ └── builtin-modules@1.1.1 
│   │   │ └─┬ validate-npm-package-license@3.0.1 
│   │   │   ├─┬ spdx-correct@1.0.2 
│   │   │   │ └── spdx-license-ids@1.2.2 
│   │   │   └── spdx-expression-parse@1.0.4 
│   │   └── path-type@1.1.0 
│   ├── require-directory@2.1.1 
│   ├── require-main-filename@1.0.1 
│   ├── set-blocking@2.0.0 
│   ├─┬ string-width@1.0.2 
│   │ └── is-fullwidth-code-point@1.0.0 
│   ├── which-module@1.0.0 
│   ├── y18n@3.2.1 
│   └── yargs-parser@4.2.1 
└── react-test-renderer@16.0.0-alpha.12 

npm WARN react-native-maps@0.15.2 requires a peer of react@>=15.4.0 but none was installed.
npm WARN react-native-branch@2.0.0-beta.3 requires a peer of react@>=15.4.0 but none was installed.
npm WARN lottie-react-native@1.1.1 requires a peer of react@>=15.3.1 but none was installed.


Success! Created my-app at /Users/jsheth/webdevcon/my-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server so you can open your app in the Expo
    app on your phone.

  npm run ios
    (Mac only, requires Xcode)
    Starts the development server and loads your app in an iOS simulator.

  npm run android
    (Requires Android build tools)
    Starts the development server and loads your app on a connected Android
    device or emulator.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-app
  npm start

Happy hacking!
acbc32a00421:webdevcon jsheth$ npm start
npm ERR! Darwin 15.6.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "start"
npm ERR! node v6.11.0
npm ERR! npm  v3.10.10
npm ERR! path /Users/jsheth/webdevcon/package.json
npm ERR! code ENOENT
npm ERR! errno -2
npm ERR! syscall open

npm ERR! enoent ENOENT: no such file or directory, open '/Users/jsheth/webdevcon/package.json'
npm ERR! enoent ENOENT: no such file or directory, open '/Users/jsheth/webdevcon/package.json'
npm ERR! enoent This is most likely not a problem with npm itself
npm ERR! enoent and is related to npm not being able to find a file.
npm ERR! enoent 

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/jsheth/webdevcon/npm-debug.log
acbc32a00421:webdevcon jsheth$ cd my-app/
acbc32a00421:my-app jsheth$ npm start

> my-app@0.1.0 start /Users/jsheth/webdevcon/my-app
> react-native-scripts start

1:41:55 AM: Starting packager...
Packager started!

To view your app with live reloading, point the Expo app to this QR code.
You'll find the QR scanner on the Projects tab of the app.

                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        

Or enter this address in the Expo app's search bar:

  exp://192.168.1.73:19000

Your phone will need to be on the same local network as this computer.

For links to install the Expo app, please visit https://expo.io.

Logs from serving your app will appear here. Press Ctrl+C at any time to stop.

^C1:45:39 AM: Stopping packager...

acbc32a00421:my-app jsheth$ 1:45:39 AM: Packager stopped.
ls
App.js		App.test.js	README.md	app.json	node_modules	package.json
acbc32a00421:my-app jsheth$ pwd
/Users/jsheth/webdevcon/my-app
acbc32a00421:my-app jsheth$ cd ..
acbc32a00421:webdevcon jsheth$ ls
my-app		npm-debug.log
acbc32a00421:webdevcon jsheth$ npm install --save react-native-swipe-cards
npm WARN saveError ENOENT: no such file or directory, open '/Users/jsheth/webdevcon/package.json'
/Users/jsheth/webdevcon
└─┬ react-native-swipe-cards@0.1.0 
  └── clamp@1.0.1 

npm WARN enoent ENOENT: no such file or directory, open '/Users/jsheth/webdevcon/package.json'
npm WARN webdevcon No description
npm WARN webdevcon No repository field.
npm WARN webdevcon No README data
npm WARN webdevcon No license field.
acbc32a00421:webdevcon jsheth$ pwd
/Users/jsheth/webdevcon
acbc32a00421:webdevcon jsheth$ pwd
/Users/jsheth/webdevcon
acbc32a00421:webdevcon jsheth$ npm install --save react-native-swipe-cards
npm WARN saveError ENOENT: no such file or directory, open '/Users/jsheth/webdevcon/package.json'
/Users/jsheth/webdevcon
└── react-native-swipe-cards@0.1.0 

npm WARN enoent ENOENT: no such file or directory, open '/Users/jsheth/webdevcon/package.json'
npm WARN webdevcon No description
npm WARN webdevcon No repository field.
npm WARN webdevcon No README data
npm WARN webdevcon No license field.
acbc32a00421:webdevcon jsheth$ ls
my-app						react-native-tinder-swipe-cards-master
node_modules					react-native-tinder-swipe-cards-master.zip
acbc32a00421:webdevcon jsheth$ npm install --save react-native-swipe-cards-master
npm ERR! Darwin 15.6.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "install" "--save" "react-native-swipe-cards-master"
npm ERR! node v6.11.0
npm ERR! npm  v3.10.10
npm ERR! code E404

npm ERR! 404 Registry returned 404 for GET on https://registry.npmjs.org/react-native-swipe-cards-master
npm ERR! 404 
npm ERR! 404  'react-native-swipe-cards-master' is not in the npm registry.
npm ERR! 404 You should bug the author to publish it (or use the name yourself!)
npm ERR! 404 
npm ERR! 404 Note that you can also install from a
npm ERR! 404 tarball, folder, http url, or git url.

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/jsheth/webdevcon/npm-debug.log
acbc32a00421:webdevcon jsheth$ npm install --save react-native-swipe-cards
npm WARN saveError ENOENT: no such file or directory, open '/Users/jsheth/webdevcon/package.json'
/Users/jsheth/webdevcon
└── react-native-swipe-cards@0.1.0 

npm WARN enoent ENOENT: no such file or directory, open '/Users/jsheth/webdevcon/package.json'
npm WARN webdevcon No description
npm WARN webdevcon No repository field.
npm WARN webdevcon No README data
npm WARN webdevcon No license field.
acbc32a00421:webdevcon jsheth$ ls
my-app						react-native-tinder-swipe-cards
node_modules					react-native-tinder-swipe-cards-master.zip
acbc32a00421:webdevcon jsheth$ cd react-native-tinder-swipe-cards
acbc32a00421:react-native-tinder-swipe-cards jsheth$ npm install --save react-native-swipe-cards
npm ERR! Darwin 15.6.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "install" "--save" "react-native-swipe-cards"
npm ERR! node v6.11.0
npm ERR! npm  v3.10.10
npm ERR! code ENOSELF

npm ERR! Refusing to install react-native-swipe-cards as a dependency of itself
npm ERR! 
npm ERR! If you need help, you may report this error at:
npm ERR!     <https://github.com/npm/npm/issues>

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/npm-debug.log
acbc32a00421:react-native-tinder-swipe-cards jsheth$ cd ..
acbc32a00421:webdevcon jsheth$ npm install --save react-native-swipe-cards
npm WARN saveError ENOENT: no such file or directory, open '/Users/jsheth/webdevcon/package.json'
/Users/jsheth/webdevcon
└── react-native-swipe-cards@0.1.0 

npm WARN enoent ENOENT: no such file or directory, open '/Users/jsheth/webdevcon/package.json'
npm WARN webdevcon No description
npm WARN webdevcon No repository field.
npm WARN webdevcon No README data
npm WARN webdevcon No license field.
acbc32a00421:webdevcon jsheth$ ls
my-app						react-native-tinder-swipe-cards
node_modules					react-native-tinder-swipe-cards-master.zip
acbc32a00421:webdevcon jsheth$ ls
my-app						react-native-tinder-swipe-cards
node_modules					react-native-tinder-swipe-cards-master.zip
acbc32a00421:webdevcon jsheth$ ls
my-app						react-native-tinder-swipe-cards
node_modules					react-native-tinder-swipe-cards-master.zip
acbc32a00421:webdevcon jsheth$ cd ..
acbc32a00421:~ jsheth$ s
-bash: s: command not found
acbc32a00421:~ jsheth$ ls
AndroidStudioProjects				RetailSearchADP
Applications					RetailSearchPageletGroup
Certificate of Completion.pdf			RetailSearchShared
Desktop						Screen Shot 2017-04-18 at 9.02.16 PM.png
Documents					SearchExperienceShared
Downloads					Sites
Library						Ubuntu
Movies						brazil-pkg-cache
Music						desktop-workspace
PersonalWebsiteConfig				local
PersonalWebsiteConfig.zip			search.rendering.app.xml
Pictures					webdevcon
Public						zshrc.rtf
RSP
acbc32a00421:~ jsheth$ cd webdevcon/
acbc32a00421:webdevcon jsheth$ ls
my-app						react-native-tinder-swipe-cards
node_modules					react-native-tinder-swipe-cards-master.zip
acbc32a00421:webdevcon jsheth$ cd my-app
acbc32a00421:my-app jsheth$ ls
App.js		App.test.js	README.md	app.json	node_modules	package.json
acbc32a00421:my-app jsheth$ cd ..
acbc32a00421:webdevcon jsheth$ ls
my-app						react-native-tinder-swipe-cards
node_modules					react-native-tinder-swipe-cards-master.zip
acbc32a00421:webdevcon jsheth$ cd react-native-tinder-swipe-cards
acbc32a00421:react-native-tinder-swipe-cards jsheth$ ls
Defaults.js	LICENSE		README.md	SwipeCards.js	npm-debug.log	package.json	screenshots
acbc32a00421:react-native-tinder-swipe-cards jsheth$ npm install --save react-native-swipe-cards
npm ERR! Darwin 15.6.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "install" "--save" "react-native-swipe-cards"
npm ERR! node v6.11.0
npm ERR! npm  v3.10.10
npm ERR! code ENOSELF

npm ERR! Refusing to install react-native-swipe-cards as a dependency of itself
npm ERR! 
npm ERR! If you need help, you may report this error at:
npm ERR!     <https://github.com/npm/npm/issues>

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/npm-debug.log
acbc32a00421:react-native-tinder-swipe-cards jsheth$ create-react-native-app react-native-tinder-swipe-cards
Creating a new React Native app in /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards.

Installing packages. This might take a couple minutes.
Installing react-native-scripts...

npm WARN deprecated @exponent/spawn-async@1.2.8: Please switch to @expo/spawn-async, the new name of this package. It's the same code with our new name.

> dtrace-provider@0.8.3 install /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards/node_modules/dtrace-provider
> node scripts/install.js


> @exponent/ngrok@2.2.7 postinstall /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards/node_modules/@exponent/ngrok
> node ./postinstall.js

ngrok - binary unpacked.
react-native-tinder-swipe-cards@0.1.0 /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards
└─┬ react-native-scripts@0.0.40 
  ├─┬ babel-runtime@6.23.0 
  │ ├── core-js@2.4.1 
  │ └── regenerator-runtime@0.10.5 
  ├─┬ chalk@1.1.3 
  │ ├── ansi-styles@2.2.1 
  │ ├── escape-string-regexp@1.0.5 
  │ ├─┬ has-ansi@2.0.0 
  │ │ └── ansi-regex@2.1.1 
  │ ├── strip-ansi@3.0.1 
  │ └── supports-color@2.0.0 
  ├─┬ cross-spawn@5.1.0 
  │ ├─┬ lru-cache@4.1.1 
  │ │ ├── pseudomap@1.0.2 
  │ │ └── yallist@2.1.2 
  │ ├─┬ shebang-command@1.2.0 
  │ │ └── shebang-regex@1.0.0 
  │ └─┬ which@1.2.14 
  │   └── isexe@2.0.0 
  ├─┬ fs-extra@3.0.1 
  │ ├── graceful-fs@4.1.11 
  │ ├── jsonfile@3.0.0 
  │ └── universalify@0.1.0 
  ├── indent-string@3.1.0 
  ├─┬ inquirer@3.1.1 
  │ ├── ansi-escapes@2.0.0 
  │ ├─┬ cli-cursor@2.1.0 
  │ │ └─┬ restore-cursor@2.0.0 
  │ │   ├─┬ onetime@2.0.1 
  │ │   │ └── mimic-fn@1.1.0 
  │ │   └── signal-exit@3.0.2 
  │ ├── cli-width@2.1.0 
  │ ├─┬ external-editor@2.0.4 
  │ │ ├── iconv-lite@0.4.18 
  │ │ ├── jschardet@1.4.2 
  │ │ └─┬ tmp@0.0.31 
  │ │   └── os-tmpdir@1.0.2 
  │ ├── figures@2.0.0 
  │ ├── lodash@4.17.4 
  │ ├── mute-stream@0.0.7 
  │ ├─┬ run-async@2.3.0 
  │ │ └── is-promise@2.1.0 
  │ ├── rx-lite@4.0.8 
  │ ├── rx-lite-aggregates@4.0.8 
  │ ├─┬ string-width@2.1.0 
  │ │ ├── is-fullwidth-code-point@2.0.0 
  │ │ └─┬ strip-ansi@4.0.0 
  │ │   └── ansi-regex@3.0.0 
  │ └── through@2.3.8 
  ├─┬ match-require@2.1.0 
  │ └── uuid@3.1.0 
  ├── minimist@1.2.0 
  ├── path-exists@3.0.0 
  ├── progress@2.0.0 
  ├── qrcode-terminal@0.11.0 
  ├── UNMET PEER DEPENDENCY react@16.0.0-alpha.12
  └─┬ xdl@42.0.0 
    ├─┬ @ccheever/crayon@5.0.0 
    │ ├── has-color@0.1.7 
    │ └─┬ strip-ansi@0.2.2 
    │   └── ansi-regex@0.1.0 
    ├─┬ @exponent/json-file@5.3.0 
    │ └── json5@0.5.1 
    ├─┬ @exponent/ngrok@2.2.7 
    │ ├── async@0.9.2 
    │ ├─┬ decompress-zip@0.3.0 
    │ │ ├─┬ binary@0.3.0 
    │ │ │ ├── buffers@0.1.1 
    │ │ │ └─┬ chainsaw@0.1.0 
    │ │ │   └── traverse@0.3.9 
    │ │ ├── mkpath@0.1.0 
    │ │ ├─┬ nopt@3.0.6 
    │ │ │ └── abbrev@1.1.0 
    │ │ ├── q@1.5.0 
    │ │ ├─┬ readable-stream@1.1.14 
    │ │ │ ├── isarray@0.0.1 
    │ │ │ └── string_decoder@0.10.31 
    │ │ └─┬ touch@0.0.3 
    │ │   └── nopt@1.0.10 
    │ └── lock@0.1.3 
    ├─┬ @exponent/node-auth0@2.6.0 
    │ ├── bluebird@2.11.0 
    │ ├─┬ rest-facade@1.5.0 
    │ │ ├── bluebird@2.11.0 
    │ │ └─┬ change-case@2.3.1 
    │ │   ├── camel-case@1.2.2 
    │ │   ├── constant-case@1.1.2 
    │ │   ├── dot-case@1.1.2 
    │ │   ├── is-lower-case@1.1.3 
    │ │   ├── is-upper-case@1.1.2 
    │ │   ├── lower-case@1.1.4 
    │ │   ├── lower-case-first@1.0.2 
    │ │   ├── param-case@1.1.2 
    │ │   ├── pascal-case@1.1.2 
    │ │   ├── path-case@1.1.2 
    │ │   ├── sentence-case@1.1.3 
    │ │   ├── snake-case@1.1.2 
    │ │   ├── swap-case@1.1.2 
    │ │   ├── title-case@1.1.2 
    │ │   ├── upper-case@1.1.3 
    │ │   └── upper-case-first@1.1.2 
    │ └── url-join@0.0.1 
    ├─┬ @exponent/osascript@1.6.4 
    │ └─┬ babel-runtime@5.8.38 
    │   └── core-js@1.2.7 
    ├─┬ @exponent/spawn-async@1.2.8 
    │ └── cross-spawn@4.0.2 
    ├─┬ analytics-node@2.4.1 
    │ ├─┬ @segment/loosely-validate-event@1.1.2 
    │ │ ├── component-type@1.2.1 
    │ │ └── join-component@1.1.0 
    │ ├── clone@2.1.1 
    │ ├─┬ commander@2.10.0 
    │ │ └── graceful-readlink@1.0.1 
    │ ├── crypto-token@1.0.1 
    │ ├── debug@2.6.8 
    │ ├── remove-trailing-slash@0.1.0 
    │ ├─┬ superagent@3.5.2 
    │ │ ├── component-emitter@1.2.1 
    │ │ ├── cookiejar@2.1.1 
    │ │ ├── formidable@1.1.1 
    │ │ ├── mime@1.3.6 
    │ │ └─┬ readable-stream@2.3.2 
    │ │   ├── isarray@1.0.0 
    │ │   └── string_decoder@1.0.3 
    │ └── superagent-retry@0.6.0 
    ├─┬ auth0-js@7.6.1 
    │ ├── Base64@0.1.4 
    │ ├── json-fallback@0.0.1 
    │ ├── jsonp@0.0.4 
    │ ├── qs@6.4.0 
    │ ├── reqwest@2.0.5 
    │ ├── trim@0.0.1 
    │ ├── winchan@0.1.4 
    │ └─┬ xtend@2.1.2 
    │   └── object-keys@0.4.0 
    ├─┬ axios@0.16.2 
    │ ├── follow-redirects@1.2.4 
    │ └── is-buffer@1.1.5 
    ├── bluebird@3.5.0 
    ├─┬ body-parser@1.17.2 
    │ ├── bytes@2.4.0 
    │ ├── content-type@1.0.2 
    │ ├── debug@2.6.7 
    │ ├── depd@1.1.0 
    │ ├── http-errors@1.6.1 
    │ ├── iconv-lite@0.4.15 
    │ ├─┬ on-finished@2.3.0 
    │ │ └── ee-first@1.1.1 
    │ ├─┬ raw-body@2.2.0 
    │ │ ├── iconv-lite@0.4.15 
    │ │ └── unpipe@1.0.0 
    │ └─┬ type-is@1.6.15 
    │   └── media-typer@0.3.0 
    ├─┬ bunyan@1.8.10 
    │ ├─┬ dtrace-provider@0.8.3 
    │ │ └── nan@2.6.2 
    │ ├── moment@2.18.1 
    │ ├── mv@2.1.1 
    │ └── safe-json-stringify@1.0.4 
    ├─┬ concat-stream@1.6.0 
    │ ├── inherits@2.0.3 
    │ ├─┬ readable-stream@2.3.2 
    │ │ ├── core-util-is@1.0.2 
    │ │ ├── isarray@1.0.0 
    │ │ ├── process-nextick-args@1.0.7 
    │ │ ├── string_decoder@1.0.3 
    │ │ └── util-deprecate@1.0.2 
    │ └── typedarray@0.0.6 
    ├─┬ decache@4.1.0 
    │ └── callsite@1.0.0 
    ├── delay-async@1.1.0 
    ├── es6-error@4.0.2 
    ├── exec-async@2.2.0 
    ├── exists-async@2.0.0 
    ├─┬ express@4.15.3 
    │ ├─┬ accepts@1.3.3 
    │ │ └── negotiator@0.6.1 
    │ ├── array-flatten@1.1.1 
    │ ├── content-disposition@0.5.2 
    │ ├── cookie@0.3.1 
    │ ├── cookie-signature@1.0.6 
    │ ├── debug@2.6.7 
    │ ├── encodeurl@1.0.1 
    │ ├── escape-html@1.0.3 
    │ ├── etag@1.8.0 
    │ ├─┬ finalhandler@1.0.3 
    │ │ └── debug@2.6.7 
    │ ├── fresh@0.5.0 
    │ ├── merge-descriptors@1.0.1 
    │ ├── methods@1.1.2 
    │ ├── parseurl@1.3.1 
    │ ├── path-to-regexp@0.1.7 
    │ ├─┬ proxy-addr@1.1.4 
    │ │ ├── forwarded@0.1.0 
    │ │ └── ipaddr.js@1.3.0 
    │ ├── range-parser@1.2.0 
    │ ├─┬ send@0.15.3 
    │ │ ├── debug@2.6.7 
    │ │ ├── destroy@1.0.4 
    │ │ └── mime@1.3.4 
    │ ├── serve-static@1.12.3 
    │ ├── setprototypeof@1.0.3 
    │ ├── statuses@1.3.1 
    │ ├── utils-merge@1.0.0 
    │ └── vary@1.1.1 
    ├── file-type@4.4.0 
    ├─┬ form-data@2.2.0 
    │ ├── asynckit@0.4.0 
    │ ├─┬ combined-stream@1.0.5 
    │ │ └── delayed-stream@1.0.0 
    │ └─┬ mime-types@2.1.15 
    │   └── mime-db@1.27.0 
    ├── freeport-async@1.1.1 
    ├─┬ fs-extra@0.30.0 
    │ ├── klaw@1.3.1 
    │ └─┬ rimraf@2.4.5 
    │   └── glob@6.0.4 
    ├─┬ glob@7.1.2 
    │ ├── fs.realpath@1.0.0 
    │ ├─┬ inflight@1.0.6 
    │ │ └── wrappy@1.0.2 
    │ ├─┬ minimatch@3.0.4 
    │ │ └─┬ brace-expansion@1.1.8 
    │ │   ├── balanced-match@1.0.0 
    │ │   └── concat-map@0.0.1 
    │ ├── once@1.4.0 
    │ └── path-is-absolute@1.0.1 
    ├─┬ hasbin@1.2.3 
    │ └── async@1.5.2 
    ├── home-dir@1.0.0 
    ├── instapromise@2.0.7-rc.1 
    ├── ip@1.1.5 
    ├─┬ joi@10.6.0 
    │ ├── hoek@4.1.1 
    │ ├── isemail@2.2.1 
    │ ├── items@2.1.1 
    │ └─┬ topo@2.0.2 
    │   └── hoek@4.1.1 
    ├── jsonfile@2.4.0 
    ├── jsonschema@1.1.1 
    ├─┬ jsonwebtoken@7.4.1 
    │ ├─┬ joi@6.10.1 
    │ │ ├── hoek@2.16.3 
    │ │ ├── isemail@1.2.0 
    │ │ └── topo@1.1.0 
    │ ├─┬ jws@3.1.4 
    │ │ ├── base64url@2.0.0 
    │ │ └─┬ jwa@1.1.5 
    │ │   ├── buffer-equal-constant-time@1.0.1 
    │ │   └── ecdsa-sig-formatter@1.0.9 
    │ ├── lodash.once@4.1.1 
    │ ├── ms@2.0.0 
    │ └── xtend@4.0.1 
    ├── md5hex@1.0.0 
    ├─┬ mkdirp@0.5.1 
    │ └── minimist@0.0.8 
    ├── mkdirp-promise@5.0.1 
    ├─┬ mz@2.6.0 
    │ ├── any-promise@1.3.0 
    │ ├── object-assign@4.1.1 
    │ └─┬ thenify-all@1.6.0 
    │   └── thenify@3.3.0 
    ├── ncp@2.0.0 
    ├─┬ opn@4.0.2 
    │ └─┬ pinkie-promise@2.0.1 
    │   └── pinkie@2.0.4 
    ├── promise-props@1.0.0 
    ├── querystring@0.2.0 
    ├── UNMET PEER DEPENDENCY react@^0.14.0 || ^15.0.0-0 || ^16.0.0-0
    ├─┬ react-redux@5.0.5 
    │ ├─┬ create-react-class@15.6.0 
    │ │ └─┬ fbjs@0.8.12 
    │ │   ├── core-js@1.2.7 
    │ │   ├─┬ isomorphic-fetch@2.2.1 
    │ │   │ ├─┬ node-fetch@1.7.1 
    │ │   │ │ ├── encoding@0.1.12 
    │ │   │ │ └── is-stream@1.1.0 
    │ │   │ └── whatwg-fetch@2.0.3 
    │ │   ├─┬ promise@7.3.1 
    │ │   │ └── asap@2.0.5 
    │ │   ├── setimmediate@1.0.5 
    │ │   └── ua-parser-js@0.7.13 
    │ ├── hoist-non-react-statics@1.2.0 
    │ ├── invariant@2.2.2 
    │ ├── lodash-es@4.17.4 
    │ ├─┬ loose-envify@1.3.1 
    │ │ └── js-tokens@3.0.1 
    │ └── prop-types@15.5.10 
    ├─┬ read-chunk@2.0.0 
    │ └── pify@2.3.0 
    ├─┬ redux@3.7.1 
    │ └── symbol-observable@1.0.4 
    ├─┬ redux-logger@2.10.2 
    │ └── deep-diff@0.3.4 
    ├─┬ request@2.81.0 
    │ ├── aws-sign2@0.6.0 
    │ ├── aws4@1.6.0 
    │ ├── caseless@0.12.0 
    │ ├── extend@3.0.1 
    │ ├── forever-agent@0.6.1 
    │ ├── form-data@2.1.4 
    │ ├─┬ har-validator@4.2.1 
    │ │ ├─┬ ajv@4.11.8 
    │ │ │ ├── co@4.6.0 
    │ │ │ └─┬ json-stable-stringify@1.0.1 
    │ │ │   └── jsonify@0.0.0 
    │ │ └── har-schema@1.0.5 
    │ ├─┬ hawk@3.1.3 
    │ │ ├── boom@2.10.1 
    │ │ ├── cryptiles@2.0.5 
    │ │ └── sntp@1.0.9 
    │ ├─┬ http-signature@1.1.1 
    │ │ ├── assert-plus@0.2.0 
    │ │ ├─┬ jsprim@1.4.0 
    │ │ │ ├── assert-plus@1.0.0 
    │ │ │ ├── extsprintf@1.0.2 
    │ │ │ ├── json-schema@0.2.3 
    │ │ │ └── verror@1.3.6 
    │ │ └─┬ sshpk@1.13.1 
    │ │   ├── asn1@0.2.3 
    │ │   ├── assert-plus@1.0.0 
    │ │   ├── bcrypt-pbkdf@1.0.1 
    │ │   ├─┬ dashdash@1.14.1 
    │ │   │ └── assert-plus@1.0.0 
    │ │   ├── ecc-jsbn@0.1.1 
    │ │   ├─┬ getpass@0.1.7 
    │ │   │ └── assert-plus@1.0.0 
    │ │   ├── jsbn@0.1.1 
    │ │   └── tweetnacl@0.14.5 
    │ ├── is-typedarray@1.0.0 
    │ ├── isstream@0.1.2 
    │ ├── json-stringify-safe@5.0.1 
    │ ├── oauth-sign@0.8.2 
    │ ├── performance-now@0.2.0 
    │ ├── safe-buffer@5.1.1 
    │ ├── stringstream@0.0.5 
    │ ├─┬ tough-cookie@2.3.2 
    │ │ └── punycode@1.4.1 
    │ └── tunnel-agent@0.6.0 
    ├─┬ request-progress@3.0.0 
    │ └── throttleit@1.0.0 
    ├── semver@5.3.0 
    ├─┬ slugid@1.1.0 
    │ └── uuid@2.0.3 
    ├── slugify@1.1.0 
    ├─┬ source-map-support@0.4.15 
    │ └── source-map@0.5.6 
    ├─┬ tar.gz@1.0.5 
    │ ├── bluebird@2.11.0 
    │ ├── fstream@1.0.11 
    │ ├── mout@0.11.1 
    │ └─┬ tar@2.2.1 
    │   └── block-stream@0.0.9 
    ├── tree-kill@1.1.0 
    ├─┬ url@0.11.0 
    │ └── punycode@1.3.2 
    ├── xhr2@0.1.4 
    └── yesno@0.0.1 

npm WARN xdl@42.0.0 requires a peer of react@16.0.0-alpha.12 but none was installed.
npm WARN react-redux@5.0.5 requires a peer of react@^0.14.0 || ^15.0.0-0 || ^16.0.0-0 but none was installed.
Installing dependencies using npm...

react-native-tinder-swipe-cards@0.1.0 /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards
├─┬ expo@18.0.4 
│ ├─┬ @expo/vector-icons@5.0.0 
│ │ └── react-native-vector-icons@4.1.1 
│ ├─┬ babel-preset-airbnb@2.3.3 
│ │ ├─┬ babel-plugin-transform-es2015-modules-commonjs@6.24.1 
│ │ │ └── babel-plugin-transform-strict-mode@6.24.1 
│ │ ├── babel-plugin-transform-es2015-template-literals@6.22.0 
│ │ ├── babel-plugin-transform-es3-member-expression-literals@6.22.0 
│ │ ├── babel-plugin-transform-es3-property-literals@6.22.0 
│ │ ├─┬ babel-plugin-transform-exponentiation-operator@6.24.1 
│ │ │ ├─┬ babel-helper-builder-binary-assignment-operator-visitor@6.24.1 
│ │ │ │ └── babel-helper-explode-assignable-expression@6.24.1 
│ │ │ └── babel-plugin-syntax-exponentiation-operator@6.13.0 
│ │ ├── babel-plugin-transform-jscript@6.22.0 
│ │ ├─┬ babel-preset-env@1.5.2 
│ │ │ ├── babel-plugin-transform-async-to-generator@6.24.1 
│ │ │ ├── babel-plugin-transform-es2015-duplicate-keys@6.24.1 
│ │ │ ├── babel-plugin-transform-es2015-modules-amd@6.24.1 
│ │ │ ├─┬ babel-plugin-transform-es2015-modules-systemjs@6.24.1 
│ │ │ │ └── babel-helper-hoist-variables@6.24.1 
│ │ │ ├── babel-plugin-transform-es2015-modules-umd@6.24.1 
│ │ │ ├── babel-plugin-transform-es2015-typeof-symbol@6.23.0 
│ │ │ └─┬ browserslist@2.1.5 
│ │ │   ├── caniuse-lite@1.0.30000696 
│ │ │   └── electron-to-chromium@1.3.14 
│ │ ├─┬ babel-preset-react@6.24.1 
│ │ │ ├── babel-plugin-transform-react-jsx-self@6.22.0 
│ │ │ └── babel-preset-flow@6.23.0 
│ │ └─┬ object.assign@4.0.4 
│ │   ├─┬ define-properties@1.1.2 
│ │   │ ├── foreach@2.0.5 
│ │   │ └── object-keys@1.0.11 
│ │   ├── function-bind@1.1.0 
│ │   └── object-keys@1.0.11 
│ ├─┬ babel-preset-expo@2.0.0 
│ │ ├─┬ babel-plugin-module-resolver@2.5.0 
│ │ │ ├── find-babel-config@1.1.0 
│ │ │ └─┬ resolve@1.3.3 
│ │ │   └── path-parse@1.0.5 
│ │ ├─┬ babel-plugin-transform-decorators-legacy@1.3.4 
│ │ │ └── babel-plugin-syntax-decorators@6.13.0 
│ │ └─┬ babel-preset-react-native-stage-0@1.0.1 
│ │   ├─┬ babel-plugin-transform-class-constructor-call@6.24.1 
│ │   │ └── babel-plugin-syntax-class-constructor-call@6.18.0 
│ │   ├─┬ babel-plugin-transform-do-expressions@6.22.0 
│ │   │ └── babel-plugin-syntax-do-expressions@6.13.0 
│ │   ├─┬ babel-plugin-transform-export-extensions@6.22.0 
│ │   │ └── babel-plugin-syntax-export-extensions@6.13.0 
│ │   └─┬ babel-plugin-transform-function-bind@6.22.0 
│ │     └── babel-plugin-syntax-function-bind@6.13.0 
│ ├── fbemitter@2.1.1 
│ ├── lodash.map@4.6.0 
│ ├── lodash.zipobject@4.1.3 
│ ├─┬ lottie-react-native@1.1.1 
│ │ ├── lottie-ios@1.5.2 
│ │ └─┬ react-native-safe-module@1.2.0 
│ │   └── dedent@0.6.0 
│ ├── md5-file@3.1.1 
│ ├─┬ pretty-format@20.0.3 
│ │ └─┬ ansi-styles@3.1.0 
│ │   └─┬ color-convert@1.9.0 
│ │     └── color-name@1.1.2 
│ ├── UNMET PEER DEPENDENCY react@>=15.3.1
│ ├── react-native-branch@2.0.0-beta.3 
│ ├─┬ react-native-fbads@4.1.0 
│ │ └── eventemitter3@2.0.3 
│ ├── react-native-maps@0.15.2 
│ ├─┬ react-native-svg@5.2.0 
│ │ └─┬ color@0.11.4 
│ │   ├── clone@1.0.2 
│ │   └── color-string@0.3.0 
│ ├── uuid-js@0.7.5 
│ └─┬ websql@0.4.4  (git://github.com/expo/node-websql.git#e364fa65146a9e2157a19e5c719e7702c2b6b87a)
│   ├── argsarray@0.0.1 
│   ├── immediate@3.2.3 
│   ├── noop-fn@1.0.0 
│   ├── pouchdb-collections@1.0.1 
│   └── tiny-queue@0.2.1 
├─┬ jest-expo@18.0.0 
│ ├─┬ babel-jest@19.0.0 
│ │ ├─┬ babel-plugin-istanbul@4.1.4 
│ │ │ ├─┬ find-up@2.1.0 
│ │ │ │ └─┬ locate-path@2.0.0 
│ │ │ │   └─┬ p-locate@2.0.0 
│ │ │ │     └── p-limit@1.1.0 
│ │ │ ├── istanbul-lib-instrument@1.7.3 
│ │ │ └─┬ test-exclude@4.1.1 
│ │ │   └── arrify@1.0.1 
│ │ └─┬ babel-preset-jest@19.0.0 
│ │   └── babel-plugin-jest-hoist@19.0.0 
│ ├─┬ jest@19.0.2 
│ │ └─┬ jest-cli@19.0.2 
│ │   ├── ansi-escapes@1.4.0 
│ │   ├── callsites@2.0.0 
│ │   ├─┬ is-ci@1.0.10 
│ │   │ └── ci-info@1.0.0 
│ │   ├─┬ istanbul-api@1.1.10 
│ │   │ ├── async@2.5.0 
│ │   │ ├── fileset@2.0.3 
│ │   │ ├─┬ istanbul-lib-hook@1.0.7 
│ │   │ │ └─┬ append-transform@0.4.0 
│ │   │ │   └── default-require-extensions@1.0.0 
│ │   │ ├─┬ istanbul-lib-report@1.1.1 
│ │   │ │ └─┬ supports-color@3.2.3 
│ │   │ │   └── has-flag@1.0.0 
│ │   │ ├─┬ istanbul-lib-source-maps@1.2.1 
│ │   │ │ └── rimraf@2.6.1 
│ │   │ ├─┬ istanbul-reports@1.1.1 
│ │   │ │ └─┬ handlebars@4.0.10 
│ │   │ │   ├── async@1.5.2 
│ │   │ │   └─┬ source-map@0.4.4 
│ │   │ │     └── amdefine@1.0.1 
│ │   │ └─┬ js-yaml@3.8.4 
│ │   │   ├─┬ argparse@1.0.9 
│ │   │   │ └── sprintf-js@1.0.3 
│ │   │   └── esprima@3.1.3 
│ │   ├── istanbul-lib-coverage@1.1.1 
│ │   ├── jest-changed-files@19.0.2 
│ │   ├─┬ jest-environment-jsdom@19.0.2 
│ │   │ └─┬ jsdom@9.12.0 
│ │   │   ├── abab@1.0.3 
│ │   │   ├── acorn@4.0.13 
│ │   │   ├── acorn-globals@3.1.0 
│ │   │   ├── array-equal@1.0.0 
│ │   │   ├── content-type-parser@1.0.1 
│ │   │   ├── cssom@0.3.2 
│ │   │   ├── cssstyle@0.2.37 
│ │   │   ├─┬ escodegen@1.8.1 
│ │   │   │ ├── esprima@2.7.3 
│ │   │   │ ├── estraverse@1.9.3 
│ │   │   │ ├─┬ optionator@0.8.2 
│ │   │   │ │ ├── deep-is@0.1.3 
│ │   │   │ │ ├── fast-levenshtein@2.0.6 
│ │   │   │ │ ├── levn@0.3.0 
│ │   │   │ │ ├── prelude-ls@1.1.2 
│ │   │   │ │ └── type-check@0.3.2 
│ │   │   │ └── source-map@0.2.0 
│ │   │   ├── html-encoding-sniffer@1.0.1 
│ │   │   ├── nwmatcher@1.4.1 
│ │   │   ├── parse5@1.5.1 
│ │   │   ├── sax@1.2.4 
│ │   │   ├── symbol-tree@3.2.2 
│ │   │   ├── webidl-conversions@4.0.1 
│ │   │   ├─┬ whatwg-encoding@1.0.1 
│ │   │   │ └── iconv-lite@0.4.13 
│ │   │   ├─┬ whatwg-url@4.8.0 
│ │   │   │ ├── tr46@0.0.3 
│ │   │   │ └── webidl-conversions@3.0.1 
│ │   │   └── xml-name-validator@2.0.1 
│ │   ├─┬ jest-haste-map@19.0.2 
│ │   │ └─┬ sane@1.5.0 
│ │   │   └─┬ fb-watchman@1.9.2 
│ │   │     └── bser@1.0.2 
│ │   ├─┬ jest-jasmine2@19.0.2 
│ │   │ ├─┬ jest-matcher-utils@19.0.0 
│ │   │ │ └─┬ pretty-format@19.0.0 
│ │   │ │   └── ansi-styles@3.1.0 
│ │   │ └── jest-matchers@19.0.0 
│ │   ├── jest-message-util@19.0.0 
│ │   ├── jest-resolve-dependencies@19.0.0 
│ │   ├─┬ jest-snapshot@19.0.2 
│ │   │ ├─┬ jest-diff@19.0.0 
│ │   │ │ ├── diff@3.2.0 
│ │   │ │ └─┬ pretty-format@19.0.0 
│ │   │ │   └── ansi-styles@3.1.0 
│ │   │ ├── natural-compare@1.4.0 
│ │   │ └─┬ pretty-format@19.0.0 
│ │   │   └── ansi-styles@3.1.0 
│ │   ├─┬ node-notifier@5.1.2 
│ │   │ ├── growly@1.3.0 
│ │   │ └── shellwords@0.1.0 
│ │   └── string-length@1.0.1 
│ ├─┬ jest-repl@19.0.2 
│ │ ├─┬ jest-util@19.0.2 
│ │ │ ├── jest-mock@19.0.0 
│ │ │ ├─┬ jest-validate@19.0.2 
│ │ │ │ └─┬ pretty-format@19.0.0 
│ │ │ │   └── ansi-styles@3.1.0 
│ │ │ └── leven@2.1.0 
│ │ └── repl@0.1.3 
│ └─┬ jest-runtime@19.0.4 
│   ├─┬ jest-config@19.0.4 
│   │ ├── jest-environment-node@19.0.2 
│   │ └─┬ pretty-format@19.0.0 
│   │   └── ansi-styles@3.1.0 
│   ├── jest-file-exists@19.0.0 
│   ├─┬ jest-haste-map@19.0.2 
│   │ └─┬ sane@1.5.0 
│   │   └─┬ fb-watchman@1.9.2 
│   │     └── bser@1.0.2 
│   ├── jest-regex-util@19.0.0 
│   ├─┬ jest-resolve@19.0.2 
│   │ ├─┬ browser-resolve@1.11.2 
│   │ │ └── resolve@1.1.7 
│   │ └─┬ jest-haste-map@19.0.2 
│   │   └─┬ sane@1.5.0 
│   │     └─┬ fb-watchman@1.9.2 
│   │       └── bser@1.0.2 
│   ├─┬ micromatch@2.3.11 
│   │ ├─┬ arr-diff@2.0.0 
│   │ │ └── arr-flatten@1.0.3 
│   │ ├── array-unique@0.2.1 
│   │ ├─┬ braces@1.8.5 
│   │ │ ├─┬ expand-range@1.8.2 
│   │ │ │ └─┬ fill-range@2.2.3 
│   │ │ │   ├── is-number@2.1.0 
│   │ │ │   ├─┬ isobject@2.1.0 
│   │ │ │   │ └── isarray@1.0.0 
│   │ │ │   ├─┬ randomatic@1.1.7 
│   │ │ │   │ ├─┬ is-number@3.0.0 
│   │ │ │   │ │ └── kind-of@3.2.2 
│   │ │ │   │ └── kind-of@4.0.0 
│   │ │ │   └── repeat-string@1.6.1 
│   │ │ ├── preserve@0.2.0 
│   │ │ └── repeat-element@1.1.2 
│   │ ├─┬ expand-brackets@0.1.5 
│   │ │ └── is-posix-bracket@0.1.1 
│   │ ├── extglob@0.3.2 
│   │ ├── filename-regex@2.0.1 
│   │ ├── is-extglob@1.0.0 
│   │ ├── is-glob@2.0.1 
│   │ ├── kind-of@3.2.2 
│   │ ├─┬ normalize-path@2.1.1 
│   │ │ └── remove-trailing-separator@1.0.2 
│   │ ├─┬ object.omit@2.0.1 
│   │ │ ├─┬ for-own@0.1.5 
│   │ │ │ └── for-in@1.0.2 
│   │ │ └── is-extendable@0.1.1 
│   │ ├─┬ parse-glob@3.0.4 
│   │ │ ├─┬ glob-base@0.3.0 
│   │ │ │ └── glob-parent@2.0.0 
│   │ │ └── is-dotfile@1.0.3 
│   │ └─┬ regex-cache@0.4.3 
│   │   ├── is-equal-shallow@0.1.3 
│   │   └── is-primitive@2.0.0 
│   └── strip-bom@3.0.0 
├── react@16.0.0-alpha.12 
├─┬ react-native@0.45.1 
│ ├── absolute-path@0.0.0 
│ ├── art@0.10.1 
│ ├── async@2.5.0 
│ ├─┬ babel-core@6.25.0 
│ │ ├── babel-code-frame@6.22.0 
│ │ ├── babel-helpers@6.24.1 
│ │ ├── babel-messages@6.23.0 
│ │ ├── babel-template@6.25.0 
│ │ ├── convert-source-map@1.5.0 
│ │ ├── private@0.1.7 
│ │ └── slash@1.0.0 
│ ├─┬ babel-generator@6.25.0 
│ │ ├─┬ detect-indent@4.0.0 
│ │ │ └─┬ repeating@2.0.1 
│ │ │   └── is-finite@1.0.2 
│ │ ├── jsesc@1.3.0 
│ │ └── trim-right@1.0.1 
│ ├── babel-plugin-external-helpers@6.22.0 
│ ├── babel-plugin-syntax-trailing-function-commas@6.22.0 
│ ├─┬ babel-plugin-transform-async-to-generator@6.16.0 
│ │ └── babel-helper-remap-async-to-generator@6.24.1 
│ ├─┬ babel-plugin-transform-flow-strip-types@6.22.0 
│ │ └── babel-plugin-syntax-flow@6.18.0 
│ ├─┬ babel-plugin-transform-object-rest-spread@6.23.0 
│ │ └── babel-plugin-syntax-object-rest-spread@6.13.0 
│ ├── babel-polyfill@6.23.0 
│ ├─┬ babel-preset-es2015-node@6.1.1 
│ │ ├── babel-plugin-transform-es2015-destructuring@6.23.0 
│ │ ├─┬ babel-plugin-transform-es2015-function-name@6.24.1 
│ │ │ └── babel-helper-function-name@6.24.1 
│ │ ├─┬ babel-plugin-transform-es2015-parameters@6.24.1 
│ │ │ ├── babel-helper-call-delegate@6.24.1 
│ │ │ └── babel-helper-get-function-arity@6.24.1 
│ │ ├── babel-plugin-transform-es2015-shorthand-properties@6.24.1 
│ │ ├── babel-plugin-transform-es2015-spread@6.22.0 
│ │ ├─┬ babel-plugin-transform-es2015-sticky-regex@6.24.1 
│ │ │ └── babel-helper-regex@6.24.1 
│ │ └─┬ babel-plugin-transform-es2015-unicode-regex@6.24.1 
│ │   └─┬ regexpu-core@2.0.0 
│ │     ├── regenerate@1.3.2 
│ │     ├── regjsgen@0.2.0 
│ │     └─┬ regjsparser@0.1.5 
│ │       └── jsesc@0.5.0 
│ ├─┬ babel-preset-fbjs@2.1.4 
│ │ ├── babel-plugin-check-es2015-constants@6.22.0 
│ │ ├── babel-plugin-syntax-class-properties@6.13.0 
│ │ ├── babel-plugin-syntax-jsx@6.18.0 
│ │ ├── babel-plugin-transform-class-properties@6.24.1 
│ │ ├── babel-plugin-transform-es2015-arrow-functions@6.22.0 
│ │ ├── babel-plugin-transform-es2015-block-scoped-functions@6.22.0 
│ │ ├── babel-plugin-transform-es2015-block-scoping@6.24.1 
│ │ ├─┬ babel-plugin-transform-es2015-classes@6.24.1 
│ │ │ ├── babel-helper-define-map@6.24.1 
│ │ │ ├── babel-helper-optimise-call-expression@6.24.1 
│ │ │ └── babel-helper-replace-supers@6.24.1 
│ │ ├── babel-plugin-transform-es2015-computed-properties@6.24.1 
│ │ ├── babel-plugin-transform-es2015-for-of@6.23.0 
│ │ ├── babel-plugin-transform-es2015-literals@6.22.0 
│ │ ├── babel-plugin-transform-es2015-object-super@6.24.1 
│ │ ├── babel-plugin-transform-react-display-name@6.25.0 
│ │ └─┬ babel-plugin-transform-react-jsx@6.24.1 
│ │   └── babel-helper-builder-react-jsx@6.24.1 
│ ├─┬ babel-preset-react-native@1.9.2 
│ │ ├── babel-plugin-react-transform@2.0.2 
│ │ ├── babel-plugin-syntax-async-functions@6.13.0 
│ │ ├── babel-plugin-transform-object-assign@6.22.0 
│ │ ├── babel-plugin-transform-react-jsx-source@6.22.0 
│ │ └─┬ babel-plugin-transform-regenerator@6.24.1 
│ │   └── regenerator-transform@0.9.11 
│ ├─┬ babel-register@6.24.1 
│ │ └─┬ home-or-tmp@2.0.0 
│ │   └── os-homedir@1.0.2 
│ ├─┬ babel-traverse@6.25.0 
│ │ └── globals@9.18.0 
│ ├─┬ babel-types@6.25.0 
│ │ ├── esutils@2.0.2 
│ │ └── to-fast-properties@1.0.3 
│ ├── babylon@6.17.4 
│ ├── base64-js@1.2.1 
│ ├─┬ bser@1.0.3 
│ │ └── node-int64@0.4.0 
│ ├─┬ connect@2.30.2 
│ │ ├── basic-auth-connect@1.0.0 
│ │ ├─┬ body-parser@1.13.3 
│ │ │ ├── iconv-lite@0.4.11 
│ │ │ └─┬ raw-body@2.1.7 
│ │ │   ├── bytes@2.4.0 
│ │ │   └── iconv-lite@0.4.13 
│ │ ├── bytes@2.1.0 
│ │ ├─┬ compression@1.5.2 
│ │ │ ├─┬ accepts@1.2.13 
│ │ │ │ └── negotiator@0.5.3 
│ │ │ ├── bytes@2.1.0 
│ │ │ ├── compressible@2.0.10 
│ │ │ ├─┬ debug@2.2.0 
│ │ │ │ └── ms@0.7.1 
│ │ │ └── vary@1.0.1 
│ │ ├─┬ connect-timeout@1.6.2 
│ │ │ ├── debug@2.2.0 
│ │ │ ├── http-errors@1.3.1 
│ │ │ └── ms@0.7.1 
│ │ ├── cookie@0.1.3 
│ │ ├─┬ cookie-parser@1.3.5 
│ │ │ └── cookie@0.1.3 
│ │ ├─┬ csurf@1.8.3 
│ │ │ ├── cookie@0.1.3 
│ │ │ ├─┬ csrf@3.0.6 
│ │ │ │ ├── rndm@1.2.0 
│ │ │ │ ├── tsscmp@1.0.5 
│ │ │ │ └─┬ uid-safe@2.1.4 
│ │ │ │   └── random-bytes@1.0.0 
│ │ │ └── http-errors@1.3.1 
│ │ ├─┬ debug@2.2.0 
│ │ │ └── ms@0.7.1 
│ │ ├── depd@1.0.1 
│ │ ├── errorhandler@1.4.3 
│ │ ├─┬ express-session@1.11.3 
│ │ │ ├── cookie@0.1.3 
│ │ │ ├── crc@3.3.0 
│ │ │ ├─┬ debug@2.2.0 
│ │ │ │ └── ms@0.7.1 
│ │ │ ├── depd@1.0.1 
│ │ │ └─┬ uid-safe@2.0.0 
│ │ │   └── base64-url@1.2.1 
│ │ ├─┬ finalhandler@0.4.0 
│ │ │ └── escape-html@1.0.2 
│ │ ├── fresh@0.3.0 
│ │ ├── http-errors@1.3.1 
│ │ ├── method-override@2.3.9 
│ │ ├─┬ morgan@1.6.1 
│ │ │ ├── basic-auth@1.0.4 
│ │ │ ├─┬ debug@2.2.0 
│ │ │ │ └── ms@0.7.1 
│ │ │ └── depd@1.0.1 
│ │ ├─┬ multiparty@3.3.2 
│ │ │ └── stream-counter@0.2.0 
│ │ ├── on-headers@1.0.1 
│ │ ├── pause@0.1.0 
│ │ ├── qs@4.0.0 
│ │ ├── response-time@2.3.2 
│ │ ├─┬ serve-favicon@2.3.2 
│ │ │ ├── etag@1.7.0 
│ │ │ ├── fresh@0.3.0 
│ │ │ └── ms@0.7.2 
│ │ ├─┬ serve-index@1.7.3 
│ │ │ ├─┬ accepts@1.2.13 
│ │ │ │ └── negotiator@0.5.3 
│ │ │ ├── batch@0.5.3 
│ │ │ ├─┬ debug@2.2.0 
│ │ │ │ └── ms@0.7.1 
│ │ │ └── http-errors@1.3.1 
│ │ ├─┬ serve-static@1.10.3 
│ │ │ ├── escape-html@1.0.3 
│ │ │ └─┬ send@0.13.2 
│ │ │   ├── depd@1.1.0 
│ │ │   ├── escape-html@1.0.3 
│ │ │   ├── etag@1.7.0 
│ │ │   ├── mime@1.3.4 
│ │ │   ├── range-parser@1.0.3 
│ │ │   └── statuses@1.2.1 
│ │ └── vhost@3.0.2 
│ ├── denodeify@1.2.1 
│ ├─┬ errno@0.1.4 
│ │ └── prr@0.0.0 
│ ├── event-target-shim@1.1.1 
│ ├─┬ fbjs-scripts@0.7.1 
│ │ ├── babel-preset-fbjs@1.0.0 
│ │ ├── core-js@1.2.7 
│ │ ├── cross-spawn@3.0.1 
│ │ ├─┬ gulp-util@3.0.8 
│ │ │ ├── array-differ@1.0.0 
│ │ │ ├── array-uniq@1.0.3 
│ │ │ ├── beeper@1.1.1 
│ │ │ ├── dateformat@2.0.0 
│ │ │ ├─┬ fancy-log@1.3.0 
│ │ │ │ └── time-stamp@1.1.0 
│ │ │ ├─┬ gulplog@1.0.0 
│ │ │ │ └── glogg@1.0.0 
│ │ │ ├─┬ has-gulplog@0.1.0 
│ │ │ │ └── sparkles@1.0.0 
│ │ │ ├── lodash._reescape@3.0.0 
│ │ │ ├── lodash._reevaluate@3.0.0 
│ │ │ ├── lodash._reinterpolate@3.0.0 
│ │ │ ├─┬ lodash.template@3.6.2 
│ │ │ │ ├── lodash._basecopy@3.0.1 
│ │ │ │ ├── lodash._basetostring@3.0.1 
│ │ │ │ ├── lodash._basevalues@3.0.0 
│ │ │ │ ├── lodash._isiterateecall@3.0.9 
│ │ │ │ ├─┬ lodash.escape@3.2.0 
│ │ │ │ │ └── lodash._root@3.0.1 
│ │ │ │ ├─┬ lodash.keys@3.1.2 
│ │ │ │ │ ├── lodash._getnative@3.9.1 
│ │ │ │ │ ├── lodash.isarguments@3.1.0 
│ │ │ │ │ └── lodash.isarray@3.0.4 
│ │ │ │ ├── lodash.restparam@3.6.1 
│ │ │ │ └── lodash.templatesettings@3.1.1 
│ │ │ ├─┬ multipipe@0.1.2 
│ │ │ │ └── duplexer2@0.0.2 
│ │ │ ├── object-assign@3.0.0 
│ │ │ ├── replace-ext@0.0.1 
│ │ │ └─┬ vinyl@0.5.3 
│ │ │   ├── clone@1.0.2 
│ │ │   └── clone-stats@0.0.1 
│ │ └─┬ through2@2.0.3 
│ │   ├─┬ readable-stream@2.3.2 
│ │   │ ├── isarray@1.0.0 
│ │   │ └── string_decoder@1.0.3 
│ │   └── xtend@4.0.1 
│ ├─┬ fs-extra@1.0.0 
│ │ └── jsonfile@2.4.0 
│ ├── image-size@0.3.5 
│ ├─┬ inquirer@0.12.0 
│ │ ├── ansi-escapes@1.4.0 
│ │ ├─┬ cli-cursor@1.0.2 
│ │ │ └─┬ restore-cursor@1.0.1 
│ │ │   ├── exit-hook@1.1.1 
│ │ │   └── onetime@1.1.0 
│ │ ├── figures@1.7.0 
│ │ ├─┬ readline2@1.0.1 
│ │ │ ├── is-fullwidth-code-point@1.0.0 
│ │ │ └── mute-stream@0.0.5 
│ │ ├── run-async@0.1.0 
│ │ ├── rx-lite@3.1.2 
│ │ └─┬ string-width@1.0.2 
│ │   ├── code-point-at@1.1.0 
│ │   └─┬ is-fullwidth-code-point@1.0.0 
│ │     └── number-is-nan@1.0.1 
│ ├─┬ jest-haste-map@20.0.4 
│ │ ├─┬ fb-watchman@2.0.0 
│ │ │ └── bser@2.0.0 
│ │ ├── jest-docblock@20.0.3 
│ │ ├─┬ sane@1.6.0 
│ │ │ ├── anymatch@1.3.0 
│ │ │ └─┬ fb-watchman@1.9.2 
│ │ │   └── bser@1.0.2 
│ │ └─┬ worker-farm@1.3.1 
│ │   └── xtend@4.0.1 
│ ├─┬ joi@6.10.1 
│ │ ├── isemail@1.2.0 
│ │ └── topo@1.1.0 
│ ├── json5@0.4.0 
│ ├── left-pad@1.1.3 
│ ├─┬ merge-stream@1.0.1 
│ │ └─┬ readable-stream@2.3.2 
│ │   ├── isarray@1.0.0 
│ │   └── string_decoder@1.0.3 
│ ├─┬ mime-types@2.1.11 
│ │ └── mime-db@1.23.0 
│ ├─┬ npmlog@2.0.4 
│ │ ├── ansi@0.3.1 
│ │ ├─┬ are-we-there-yet@1.1.4 
│ │ │ ├── delegates@1.0.0 
│ │ │ └─┬ readable-stream@2.3.2 
│ │ │   ├── isarray@1.0.0 
│ │ │   └── string_decoder@1.0.3 
│ │ └─┬ gauge@1.2.7 
│ │   ├── has-unicode@2.0.1 
│ │   ├── lodash.pad@4.5.1 
│ │   ├── lodash.padend@4.6.1 
│ │   └── lodash.padstart@4.6.1 
│ ├── opn@3.0.3 
│ ├─┬ optimist@0.6.1 
│ │ ├── minimist@0.0.10 
│ │ └── wordwrap@0.0.3 
│ ├─┬ plist@1.2.0 
│ │ ├── base64-js@0.0.8 
│ │ ├─┬ xmlbuilder@4.0.0 
│ │ │ └── lodash@3.10.1 
│ │ └── xmldom@0.1.27 
│ ├── pretty-format@4.3.1 
│ ├── react-clone-referenced-element@1.0.1 
│ ├─┬ react-devtools-core@2.3.3 
│ │ └─┬ ws@2.3.1 
│ │   ├── safe-buffer@5.0.1 
│ │   └── ultron@1.1.0 
│ ├── react-timer-mixin@0.13.3 
│ ├─┬ react-transform-hmr@1.0.4 
│ │ ├─┬ global@4.3.2 
│ │ │ ├─┬ min-document@2.19.0 
│ │ │ │ └── dom-walk@0.1.1 
│ │ │ └── process@0.5.2 
│ │ └─┬ react-proxy@1.1.8 
│ │   └── react-deep-force-update@1.0.1 
│ ├── rebound@0.0.13 
│ ├── regenerator-runtime@0.9.6 
│ ├── rimraf@2.6.1 
│ ├─┬ sane@1.4.1 
│ │ ├─┬ exec-sh@0.2.0 
│ │ │ └── merge@1.2.0 
│ │ ├─┬ fb-watchman@1.9.2 
│ │ │ └── bser@1.0.2 
│ │ ├─┬ walker@1.0.7 
│ │ │ └─┬ makeerror@1.0.11 
│ │ │   └── tmpl@1.0.4 
│ │ └── watch@0.10.0 
│ ├─┬ shell-quote@1.6.1 
│ │ ├── array-filter@0.0.1 
│ │ ├── array-map@0.0.0 
│ │ └── array-reduce@0.0.0 
│ ├── stacktrace-parser@0.1.4 
│ ├─┬ temp@0.8.3 
│ │ └── rimraf@2.2.8 
│ ├── throat@3.2.0 
│ ├─┬ uglify-js@2.7.5 
│ │ ├── async@0.2.10 
│ │ ├── uglify-to-browserify@1.0.2 
│ │ └─┬ yargs@3.10.0 
│ │   ├── camelcase@1.2.1 
│ │   ├─┬ cliui@2.1.0 
│ │   │ ├─┬ center-align@0.1.3 
│ │   │ │ ├─┬ align-text@0.1.4 
│ │   │ │ │ └── longest@1.0.1 
│ │   │ │ └── lazy-cache@1.0.4 
│ │   │ ├── right-align@0.1.3 
│ │   │ └── wordwrap@0.0.2 
│ │   └── window-size@0.1.0 
│ ├── whatwg-fetch@1.1.1 
│ ├── wordwrap@1.0.0 
│ ├─┬ write-file-atomic@1.3.4 
│ │ ├── imurmurhash@0.1.4 
│ │ └── slide@1.1.6 
│ ├─┬ ws@1.1.4 
│ │ ├── options@0.0.6 
│ │ └── ultron@1.0.2 
│ ├─┬ xcode@0.9.3 
│ │ ├── pegjs@0.10.0 
│ │ ├─┬ simple-plist@0.2.1 
│ │ │ ├─┬ bplist-creator@0.0.7 
│ │ │ │ └── stream-buffers@2.2.0 
│ │ │ ├─┬ bplist-parser@0.1.1 
│ │ │ │ └── big-integer@1.6.23 
│ │ │ └─┬ plist@2.0.1 
│ │ │   ├── base64-js@1.1.2 
│ │ │   └── xmlbuilder@8.2.2 
│ │ └── uuid@3.0.1 
│ ├─┬ xmldoc@0.4.0 
│ │ └── sax@1.1.6 
│ ├── xpipe@1.0.5 
│ ├── xtend@4.0.1 
│ └─┬ yargs@6.6.0 
│   ├── camelcase@3.0.0 
│   ├─┬ cliui@3.2.0 
│   │ ├─┬ string-width@1.0.2 
│   │ │ └── is-fullwidth-code-point@1.0.0 
│   │ └─┬ wrap-ansi@2.1.0 
│   │   └─┬ string-width@1.0.2 
│   │     └── is-fullwidth-code-point@1.0.0 
│   ├── decamelize@1.2.0 
│   ├── get-caller-file@1.0.2 
│   ├─┬ os-locale@1.4.0 
│   │ └─┬ lcid@1.0.0 
│   │   └── invert-kv@1.0.0 
│   ├─┬ read-pkg-up@1.0.1 
│   │ ├─┬ find-up@1.1.2 
│   │ │ └── path-exists@2.1.0 
│   │ └─┬ read-pkg@1.1.0 
│   │   ├─┬ load-json-file@1.1.0 
│   │   │ ├─┬ parse-json@2.2.0 
│   │   │ │ └─┬ error-ex@1.3.1 
│   │   │ │   └── is-arrayish@0.2.1 
│   │   │ └─┬ strip-bom@2.0.0 
│   │   │   └── is-utf8@0.2.1 
│   │   ├─┬ normalize-package-data@2.4.0 
│   │   │ ├── hosted-git-info@2.5.0 
│   │   │ ├─┬ is-builtin-module@1.0.0 
│   │   │ │ └── builtin-modules@1.1.1 
│   │   │ └─┬ validate-npm-package-license@3.0.1 
│   │   │   ├─┬ spdx-correct@1.0.2 
│   │   │   │ └── spdx-license-ids@1.2.2 
│   │   │   └── spdx-expression-parse@1.0.4 
│   │   └── path-type@1.1.0 
│   ├── require-directory@2.1.1 
│   ├── require-main-filename@1.0.1 
│   ├── set-blocking@2.0.0 
│   ├─┬ string-width@1.0.2 
│   │ └── is-fullwidth-code-point@1.0.0 
│   ├── which-module@1.0.0 
│   ├── y18n@3.2.1 
│   └── yargs-parser@4.2.1 
└── react-test-renderer@16.0.0-alpha.12 

npm WARN react-native-branch@2.0.0-beta.3 requires a peer of react@>=15.4.0 but none was installed.
npm WARN react-native-maps@0.15.2 requires a peer of react@>=15.4.0 but none was installed.
npm WARN lottie-react-native@1.1.1 requires a peer of react@>=15.3.1 but none was installed.


Success! Created react-native-tinder-swipe-cards at /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards
Inside that directory, you can run several commands:

  npm start
    Starts the development server so you can open your app in the Expo
    app on your phone.

  npm run ios
    (Mac only, requires Xcode)
    Starts the development server and loads your app in an iOS simulator.

  npm run android
    (Requires Android build tools)
    Starts the development server and loads your app on a connected Android
    device or emulator.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd react-native-tinder-swipe-cards
  npm start

Happy hacking!
acbc32a00421:react-native-tinder-swipe-cards jsheth$ cd react-native-tinder-swipe-cards
acbc32a00421:react-native-tinder-swipe-cards jsheth$ npm start

> react-native-tinder-swipe-cards@0.1.0 start /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards
> react-native-scripts start

2:35:41 AM: Starting packager...
Packager started!

To view your app with live reloading, point the Expo app to this QR code.
You'll find the QR scanner on the Projects tab of the app.

                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        

Or enter this address in the Expo app's search bar:

  exp://192.168.1.73:19000

Your phone will need to be on the same local network as this computer.

For links to install the Expo app, please visit https://expo.io.

Logs from serving your app will appear here. Press Ctrl+C at any time to stop.

^C2:38:24 AM: Stopping packager...

acbc32a00421:react-native-tinder-swipe-cards jsheth$ 2:38:24 AM: Packager stopped.
ls
App.js		App.test.js	README.md	app.json	node_modules	package.json
acbc32a00421:react-native-tinder-swipe-cards jsheth$ npm start

> react-native-tinder-swipe-cards@0.1.0 start /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards
> react-native-scripts start

2:38:33 AM: Starting packager...
Packager started!

To view your app with live reloading, point the Expo app to this QR code.
You'll find the QR scanner on the Projects tab of the app.

                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        

Or enter this address in the Expo app's search bar:

  exp://172.20.10.8:19000

Your phone will need to be on the same local network as this computer.

For links to install the Expo app, please visit https://expo.io.

Logs from serving your app will appear here. Press Ctrl+C at any time to stop.

^C2:46:46 AM: Stopping packager...

acbc32a00421:react-native-tinder-swipe-cards jsheth$ 2:46:47 AM: Packager stopped.
ls
App.js		App.test.js	README.md	app.json	node_modules	package.json
acbc32a00421:react-native-tinder-swipe-cards jsheth$ npm install -g exp
npm WARN deprecated lodash-node@3.10.2: This package is discontinued. Use lodash@^4.0.0.
npm WARN deprecated @exponent/spawn-async@1.2.8: Please switch to @expo/spawn-async, the new name of this package. It's the same code with our new name.
/usr/local/bin/exp -> /usr/local/lib/node_modules/exp/bin/exp.js

> dtrace-provider@0.8.3 install /usr/local/lib/node_modules/exp/node_modules/dtrace-provider
> node scripts/install.js


> spawn-sync@1.0.15 postinstall /usr/local/lib/node_modules/exp/node_modules/spawn-sync
> node postinstall


> @exponent/ngrok@2.2.7 postinstall /usr/local/lib/node_modules/exp/node_modules/@exponent/ngrok
> node ./postinstall.js

ngrok - binary unpacked.
/usr/local/lib
└─┬ exp@42.1.0 
  ├─┬ @ccheever/crayon@5.0.0 
  │ ├── has-color@0.1.7 
  │ └─┬ strip-ansi@0.2.2 
  │   └── ansi-regex@0.1.0 
  ├─┬ @exponent/json-file@5.3.0 
  │ ├── json5@0.5.1 
  │ └── lodash@4.17.4 
  ├── @exponent/md5hex@1.0.0 
  ├── @exponent/simple-spinner@1.0.2 
  ├─┬ babel-runtime@6.23.0 
  │ ├── core-js@2.4.1 
  │ └── regenerator-runtime@0.10.5 
  ├─┬ bunyan@1.8.10 
  │ ├─┬ dtrace-provider@0.8.3 
  │ │ └── nan@2.6.2 
  │ ├── moment@2.18.1 
  │ ├─┬ mv@2.1.1 
  │ │ └─┬ rimraf@2.4.5 
  │ │   └── glob@6.0.4 
  │ └── safe-json-stringify@1.0.4 
  ├─┬ chalk@1.1.3 
  │ ├── ansi-styles@2.2.1 
  │ ├── escape-string-regexp@1.0.5 
  │ ├─┬ has-ansi@2.0.0 
  │ │ └── ansi-regex@2.1.1 
  │ ├─┬ strip-ansi@3.0.1 
  │ │ └── ansi-regex@2.1.1 
  │ └── supports-color@2.0.0 
  ├─┬ commander@2.10.0 
  │ └── graceful-readlink@1.0.1 
  ├── delay-async@1.1.0 
  ├── es6-error@3.2.0 
  ├── freeport-async@1.1.1 
  ├─┬ glob@7.1.2 
  │ ├── fs.realpath@1.0.0 
  │ ├─┬ inflight@1.0.6 
  │ │ └── wrappy@1.0.2 
  │ ├── inherits@2.0.3 
  │ ├─┬ minimatch@3.0.4 
  │ │ └─┬ brace-expansion@1.1.8 
  │ │   ├── balanced-match@1.0.0 
  │ │   └── concat-map@0.0.1 
  │ ├── once@1.4.0 
  │ └── path-is-absolute@1.0.1 
  ├── indent-string@3.1.0 
  ├─┬ inquirer@2.0.0 
  │ ├── ansi-escapes@1.4.0 
  │ ├─┬ cli-cursor@1.0.2 
  │ │ └─┬ restore-cursor@1.0.1 
  │ │   ├── exit-hook@1.1.1 
  │ │   └── onetime@1.1.0 
  │ ├── cli-width@2.1.0 
  │ ├─┬ external-editor@1.1.1 
  │ │ ├── extend@3.0.1 
  │ │ ├─┬ spawn-sync@1.0.15 
  │ │ │ ├─┬ concat-stream@1.6.0 
  │ │ │ │ └── typedarray@0.0.6 
  │ │ │ └── os-shim@0.1.3 
  │ │ └─┬ tmp@0.0.29 
  │ │   └── os-tmpdir@1.0.2 
  │ ├── figures@2.0.0 
  │ ├── mute-stream@0.0.6 
  │ ├─┬ pinkie-promise@2.0.1 
  │ │ └── pinkie@2.0.4 
  │ ├─┬ run-async@2.3.0 
  │ │ └── is-promise@2.1.0 
  │ ├── rx@4.1.0 
  │ ├─┬ string-width@2.1.0 
  │ │ ├── is-fullwidth-code-point@2.0.0 
  │ │ └─┬ strip-ansi@4.0.0 
  │ │   └── ansi-regex@3.0.0 
  │ ├─┬ strip-ansi@3.0.1 
  │ │ └── ansi-regex@2.1.1 
  │ └── through@2.3.8 
  ├─┬ inquirer-async@1.1.0 
  │ ├─┬ @ccheever/inquirer@0.9.5 
  │ │ ├── ansi-regex@1.1.1 
  │ │ ├── cli-width@1.1.1 
  │ │ ├── figures@1.7.0 
  │ │ ├── lodash@3.10.1 
  │ │ ├─┬ readline2@0.1.1 
  │ │ │ ├── mute-stream@0.0.4 
  │ │ │ └─┬ strip-ansi@2.0.1 
  │ │ │   └── ansi-regex@1.1.1 
  │ │ ├── rx@2.5.3 
  │ │ └── window-size@0.1.4 
  │ ├─┬ babel-runtime@5.8.38 
  │ │ └── core-js@1.2.7 
  │ ├── co@4.6.0 
  │ └─┬ inquirer@0.8.5 
  │   ├── ansi-regex@1.1.1 
  │   ├── cli-width@1.1.1 
  │   ├── figures@1.7.0 
  │   ├── lodash@3.10.1 
  │   └── rx@2.5.3 
  ├── instapromise@2.0.7-rc.1 
  ├── lodash-node@3.10.2 
  ├─┬ mz@2.6.0 
  │ ├── any-promise@1.3.0 
  │ ├── object-assign@4.1.1 
  │ └─┬ thenify-all@1.6.0 
  │   └── thenify@3.3.0 
  ├── progress@2.0.0 
  ├── qrcode-terminal@0.11.0 
  ├── UNMET PEER DEPENDENCY react@16.0.0-alpha.12
  ├── semver@5.3.0 
  ├─┬ source-map-support@0.4.15 
  │ └── source-map@0.5.6 
  ├── untildify@3.0.2 
  └─┬ xdl@42.3.0 
    ├─┬ @exponent/ngrok@2.2.7 
    │ ├── async@0.9.2 
    │ ├─┬ decompress-zip@0.3.0 
    │ │ ├─┬ binary@0.3.0 
    │ │ │ ├── buffers@0.1.1 
    │ │ │ └─┬ chainsaw@0.1.0 
    │ │ │   └── traverse@0.3.9 
    │ │ ├── mkpath@0.1.0 
    │ │ ├─┬ nopt@3.0.6 
    │ │ │ └── abbrev@1.1.0 
    │ │ ├── q@1.5.0 
    │ │ ├─┬ readable-stream@1.1.14 
    │ │ │ ├── core-util-is@1.0.2 
    │ │ │ ├── isarray@0.0.1 
    │ │ │ └── string_decoder@0.10.31 
    │ │ └─┬ touch@0.0.3 
    │ │   └── nopt@1.0.10 
    │ └── lock@0.1.3 
    ├─┬ @exponent/node-auth0@2.6.0 
    │ ├── bluebird@2.11.0 
    │ ├─┬ rest-facade@1.5.0 
    │ │ ├── bluebird@2.11.0 
    │ │ └─┬ change-case@2.3.1 
    │ │   ├── camel-case@1.2.2 
    │ │   ├── constant-case@1.1.2 
    │ │   ├── dot-case@1.1.2 
    │ │   ├── is-lower-case@1.1.3 
    │ │   ├── is-upper-case@1.1.2 
    │ │   ├── lower-case@1.1.4 
    │ │   ├── lower-case-first@1.0.2 
    │ │   ├── param-case@1.1.2 
    │ │   ├── pascal-case@1.1.2 
    │ │   ├── path-case@1.1.2 
    │ │   ├── sentence-case@1.1.3 
    │ │   ├── snake-case@1.1.2 
    │ │   ├── swap-case@1.1.2 
    │ │   ├── title-case@1.1.2 
    │ │   ├── upper-case@1.1.3 
    │ │   └── upper-case-first@1.1.2 
    │ └── url-join@0.0.1 
    ├─┬ @exponent/osascript@1.6.4 
    │ └─┬ babel-runtime@5.8.38 
    │   └── core-js@1.2.7 
    ├─┬ @exponent/spawn-async@1.2.8 
    │ └─┬ cross-spawn@4.0.2 
    │   ├─┬ lru-cache@4.1.1 
    │   │ ├── pseudomap@1.0.2 
    │   │ └── yallist@2.1.2 
    │   └─┬ which@1.2.14 
    │     └── isexe@2.0.0 
    ├─┬ analytics-node@2.4.1 
    │ ├─┬ @segment/loosely-validate-event@1.1.2 
    │ │ ├── component-type@1.2.1 
    │ │ └── join-component@1.1.0 
    │ ├── clone@2.1.1 
    │ ├── crypto-token@1.0.1 
    │ ├── debug@2.6.8 
    │ ├── remove-trailing-slash@0.1.0 
    │ ├─┬ superagent@3.5.2 
    │ │ ├── component-emitter@1.2.1 
    │ │ ├── cookiejar@2.1.1 
    │ │ ├── formidable@1.1.1 
    │ │ ├── mime@1.3.6 
    │ │ └─┬ readable-stream@2.3.2 
    │ │   ├── isarray@1.0.0 
    │ │   ├── process-nextick-args@1.0.7 
    │ │   ├── string_decoder@1.0.3 
    │ │   └── util-deprecate@1.0.2 
    │ └── superagent-retry@0.6.0 
    ├─┬ auth0-js@7.6.1 
    │ ├── Base64@0.1.4 
    │ ├── json-fallback@0.0.1 
    │ ├── jsonp@0.0.4 
    │ ├── qs@6.4.0 
    │ ├── reqwest@2.0.5 
    │ ├── trim@0.0.1 
    │ ├── winchan@0.1.4 
    │ └─┬ xtend@2.1.2 
    │   └── object-keys@0.4.0 
    ├── bluebird@3.5.0 
    ├─┬ body-parser@1.17.2 
    │ ├── bytes@2.4.0 
    │ ├── content-type@1.0.2 
    │ ├── debug@2.6.7 
    │ ├── depd@1.1.0 
    │ ├── http-errors@1.6.1 
    │ ├── iconv-lite@0.4.15 
    │ ├─┬ on-finished@2.3.0 
    │ │ └── ee-first@1.1.1 
    │ ├─┬ raw-body@2.2.0 
    │ │ └── unpipe@1.0.0 
    │ └─┬ type-is@1.6.15 
    │   └── media-typer@0.3.0 
    ├─┬ decache@4.1.0 
    │ └── callsite@1.0.0 
    ├── es6-error@4.0.2 
    ├── exec-async@2.2.0 
    ├── exists-async@2.0.0 
    ├─┬ express@4.15.3 
    │ ├─┬ accepts@1.3.3 
    │ │ └── negotiator@0.6.1 
    │ ├── array-flatten@1.1.1 
    │ ├── content-disposition@0.5.2 
    │ ├── cookie@0.3.1 
    │ ├── cookie-signature@1.0.6 
    │ ├── debug@2.6.7 
    │ ├── encodeurl@1.0.1 
    │ ├── escape-html@1.0.3 
    │ ├── etag@1.8.0 
    │ ├─┬ finalhandler@1.0.3 
    │ │ └── debug@2.6.7 
    │ ├── fresh@0.5.0 
    │ ├── merge-descriptors@1.0.1 
    │ ├── methods@1.1.2 
    │ ├── parseurl@1.3.1 
    │ ├── path-to-regexp@0.1.7 
    │ ├─┬ proxy-addr@1.1.4 
    │ │ ├── forwarded@0.1.0 
    │ │ └── ipaddr.js@1.3.0 
    │ ├── range-parser@1.2.0 
    │ ├─┬ send@0.15.3 
    │ │ ├── debug@2.6.7 
    │ │ ├── destroy@1.0.4 
    │ │ └── mime@1.3.4 
    │ ├── serve-static@1.12.3 
    │ ├── setprototypeof@1.0.3 
    │ ├── statuses@1.3.1 
    │ ├── utils-merge@1.0.0 
    │ └── vary@1.1.1 
    ├── file-type@4.4.0 
    ├─┬ fs-extra@0.30.0 
    │ ├── graceful-fs@4.1.11 
    │ └── klaw@1.3.1 
    ├─┬ hasbin@1.2.3 
    │ └── async@1.5.2 
    ├── home-dir@1.0.0 
    ├── ip@1.1.5 
    ├─┬ joi@10.6.0 
    │ ├── hoek@4.1.1 
    │ ├── isemail@2.2.1 
    │ ├── items@2.1.1 
    │ └─┬ topo@2.0.2 
    │   └── hoek@4.1.1 
    ├── jsonfile@2.4.0 
    ├── jsonschema@1.1.1 
    ├─┬ jsonwebtoken@7.4.1 
    │ ├─┬ joi@6.10.1 
    │ │ ├── hoek@2.16.3 
    │ │ ├── isemail@1.2.0 
    │ │ └── topo@1.1.0 
    │ ├─┬ jws@3.1.4 
    │ │ ├── base64url@2.0.0 
    │ │ └─┬ jwa@1.1.5 
    │ │   ├── buffer-equal-constant-time@1.0.1 
    │ │   └── ecdsa-sig-formatter@1.0.9 
    │ ├── lodash.once@4.1.1 
    │ ├── ms@2.0.0 
    │ └── xtend@4.0.1 
    ├── md5hex@1.0.0 
    ├── minimist@1.2.0 
    ├─┬ mkdirp@0.5.1 
    │ └── minimist@0.0.8 
    ├── mkdirp-promise@5.0.1 
    ├── ncp@2.0.0 
    ├── opn@4.0.2 
    ├── promise-props@1.0.0 
    ├── querystring@0.2.0 
    ├── UNMET PEER DEPENDENCY react@^0.14.0 || ^15.0.0-0 || ^16.0.0-0
    ├─┬ react-redux@5.0.5 
    │ ├─┬ create-react-class@15.6.0 
    │ │ └─┬ fbjs@0.8.12 
    │ │   ├── core-js@1.2.7 
    │ │   ├─┬ isomorphic-fetch@2.2.1 
    │ │   │ ├─┬ node-fetch@1.7.1 
    │ │   │ │ ├── encoding@0.1.12 
    │ │   │ │ └── is-stream@1.1.0 
    │ │   │ └── whatwg-fetch@2.0.3 
    │ │   ├─┬ promise@7.3.1 
    │ │   │ └── asap@2.0.5 
    │ │   ├── setimmediate@1.0.5 
    │ │   └── ua-parser-js@0.7.13 
    │ ├── hoist-non-react-statics@1.2.0 
    │ ├── invariant@2.2.2 
    │ ├── lodash-es@4.17.4 
    │ ├─┬ loose-envify@1.3.1 
    │ │ └── js-tokens@3.0.1 
    │ └── prop-types@15.5.10 
    ├─┬ read-chunk@2.0.0 
    │ └── pify@2.3.0 
    ├─┬ redux@3.7.1 
    │ └── symbol-observable@1.0.4 
    ├─┬ redux-logger@2.10.2 
    │ └── deep-diff@0.3.4 
    ├─┬ request@2.81.0 
    │ ├── aws-sign2@0.6.0 
    │ ├── aws4@1.6.0 
    │ ├── caseless@0.12.0 
    │ ├─┬ combined-stream@1.0.5 
    │ │ └── delayed-stream@1.0.0 
    │ ├── forever-agent@0.6.1 
    │ ├─┬ form-data@2.1.4 
    │ │ └── asynckit@0.4.0 
    │ ├─┬ har-validator@4.2.1 
    │ │ ├─┬ ajv@4.11.8 
    │ │ │ └─┬ json-stable-stringify@1.0.1 
    │ │ │   └── jsonify@0.0.0 
    │ │ └── har-schema@1.0.5 
    │ ├─┬ hawk@3.1.3 
    │ │ ├── boom@2.10.1 
    │ │ ├── cryptiles@2.0.5 
    │ │ └── sntp@1.0.9 
    │ ├─┬ http-signature@1.1.1 
    │ │ ├── assert-plus@0.2.0 
    │ │ ├─┬ jsprim@1.4.0 
    │ │ │ ├── assert-plus@1.0.0 
    │ │ │ ├── extsprintf@1.0.2 
    │ │ │ ├── json-schema@0.2.3 
    │ │ │ └── verror@1.3.6 
    │ │ └─┬ sshpk@1.13.1 
    │ │   ├── asn1@0.2.3 
    │ │   ├── assert-plus@1.0.0 
    │ │   ├── bcrypt-pbkdf@1.0.1 
    │ │   ├─┬ dashdash@1.14.1 
    │ │   │ └── assert-plus@1.0.0 
    │ │   ├── ecc-jsbn@0.1.1 
    │ │   ├─┬ getpass@0.1.7 
    │ │   │ └── assert-plus@1.0.0 
    │ │   ├── jsbn@0.1.1 
    │ │   └── tweetnacl@0.14.5 
    │ ├── is-typedarray@1.0.0 
    │ ├── isstream@0.1.2 
    │ ├── json-stringify-safe@5.0.1 
    │ ├─┬ mime-types@2.1.15 
    │ │ └── mime-db@1.27.0 
    │ ├── oauth-sign@0.8.2 
    │ ├── performance-now@0.2.0 
    │ ├── safe-buffer@5.1.1 
    │ ├── stringstream@0.0.5 
    │ ├─┬ tough-cookie@2.3.2 
    │ │ └── punycode@1.4.1 
    │ └── tunnel-agent@0.6.0 
    ├─┬ request-progress@3.0.0 
    │ └── throttleit@1.0.0 
    ├─┬ slugid@1.1.0 
    │ └── uuid@2.0.3 
    ├── slugify@1.1.0 
    ├─┬ tar.gz@1.0.5 
    │ ├── bluebird@2.11.0 
    │ ├── fstream@1.0.11 
    │ ├── mout@0.11.1 
    │ └─┬ tar@2.2.1 
    │   └── block-stream@0.0.9 
    ├── tree-kill@1.1.0 
    ├─┬ url@0.11.0 
    │ └── punycode@1.3.2 
    ├── uuid@3.1.0 
    ├── xhr2@0.1.4 
    └── yesno@0.0.1 

npm WARN xdl@42.3.0 requires a peer of react@16.0.0-alpha.12 but none was installed.
npm WARN react-redux@5.0.5 requires a peer of react@^0.14.0 || ^15.0.0-0 || ^16.0.0-0 but none was installed.
acbc32a00421:react-native-tinder-swipe-cards jsheth$ react-native run-ios
-bash: react-native: command not found
acbc32a00421:react-native-tinder-swipe-cards jsheth$ npm start

> react-native-tinder-swipe-cards@0.1.0 start /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards
> react-native-scripts start

2:52:41 AM: Starting packager...
Packager started!

To view your app with live reloading, point the Expo app to this QR code.
You'll find the QR scanner on the Projects tab of the app.

                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        

Or enter this address in the Expo app's search bar:

  exp://172.20.10.8:19000

Your phone will need to be on the same local network as this computer.

For links to install the Expo app, please visit https://expo.io.

Logs from serving your app will appear here. Press Ctrl+C at any time to stop.

^C2:53:06 AM: Stopping packager...

acbc32a00421:react-native-tinder-swipe-cards jsheth$ 2:53:06 AM: Packager stopped.
expo login
-bash: expo: command not found
acbc32a00421:react-native-tinder-swipe-cards jsheth$ exp login
? Username/Email Address: jaysheth
? Password: ********

Success.
acbc32a00421:react-native-tinder-swipe-cards jsheth$ ls
App.js		App.test.js	README.md	app.json	node_modules	package.json
acbc32a00421:react-native-tinder-swipe-cards jsheth$ vi package.json 
acbc32a00421:react-native-tinder-swipe-cards jsheth$ ls
App.js		App.test.js	README.md	app.json	node_modules	package.json
acbc32a00421:react-native-tinder-swipe-cards jsheth$ ls
App.js		App.test.js	README.md	app.json	node_modules	package.json
acbc32a00421:react-native-tinder-swipe-cards jsheth$ vi app.json
acbc32a00421:react-native-tinder-swipe-cards jsheth$ ls
App.js		App.test.js	README.md	app.json	node_modules	package.json
acbc32a00421:react-native-tinder-swipe-cards jsheth$ cd node_modules/
acbc32a00421:node_modules jsheth$ ls
@ccheever						istanbul-lib-report
@expo							istanbul-lib-source-maps
@exponent						istanbul-reports
@segment						items
Base64							jest
abab							jest-changed-files
abbrev							jest-config
absolute-path						jest-diff
accepts							jest-docblock
acorn							jest-environment-jsdom
acorn-globals						jest-environment-node
ajv							jest-expo
align-text						jest-file-exists
amdefine						jest-haste-map
analytics-node						jest-jasmine2
ansi							jest-matcher-utils
ansi-escapes						jest-matchers
ansi-regex						jest-message-util
ansi-styles						jest-mock
any-promise						jest-regex-util
anymatch						jest-repl
append-transform					jest-resolve
are-we-there-yet					jest-resolve-dependencies
argparse						jest-runtime
argsarray						jest-snapshot
arr-diff						jest-util
arr-flatten						jest-validate
array-differ						joi
array-equal						join-component
array-filter						js-tokens
array-flatten						js-yaml
array-map						jsbn
array-reduce						jschardet
array-uniq						jsdom
array-unique						jsesc
arrify							json-fallback
art							json-schema
asap							json-stable-stringify
asn1							json-stringify-safe
assert-plus						json5
async							jsonfile
asynckit						jsonify
auth0-js						jsonp
aws-sign2						jsonschema
aws4							jsonwebtoken
axios							jsprim
babel-code-frame					jwa
babel-core						jws
babel-generator						kind-of
babel-helper-builder-binary-assignment-operator-visitor	klaw
babel-helper-builder-react-jsx				lazy-cache
babel-helper-call-delegate				lcid
babel-helper-define-map					left-pad
babel-helper-explode-assignable-expression		leven
babel-helper-function-name				levn
babel-helper-get-function-arity				load-json-file
babel-helper-hoist-variables				locate-path
babel-helper-optimise-call-expression			lock
babel-helper-regex					lodash
babel-helper-remap-async-to-generator			lodash-es
babel-helper-replace-supers				lodash._basecopy
babel-helpers						lodash._basetostring
babel-jest						lodash._basevalues
babel-messages						lodash._getnative
babel-plugin-check-es2015-constants			lodash._isiterateecall
babel-plugin-external-helpers				lodash._reescape
babel-plugin-istanbul					lodash._reevaluate
babel-plugin-jest-hoist					lodash._reinterpolate
babel-plugin-module-resolver				lodash._root
babel-plugin-react-transform				lodash.escape
babel-plugin-syntax-async-functions			lodash.isarguments
babel-plugin-syntax-class-constructor-call		lodash.isarray
babel-plugin-syntax-class-properties			lodash.keys
babel-plugin-syntax-decorators				lodash.map
babel-plugin-syntax-do-expressions			lodash.once
babel-plugin-syntax-exponentiation-operator		lodash.pad
babel-plugin-syntax-export-extensions			lodash.padend
babel-plugin-syntax-flow				lodash.padstart
babel-plugin-syntax-function-bind			lodash.restparam
babel-plugin-syntax-jsx					lodash.template
babel-plugin-syntax-object-rest-spread			lodash.templatesettings
babel-plugin-syntax-trailing-function-commas		lodash.zipobject
babel-plugin-transform-async-to-generator		longest
babel-plugin-transform-class-constructor-call		loose-envify
babel-plugin-transform-class-properties			lottie-ios
babel-plugin-transform-decorators-legacy		lottie-react-native
babel-plugin-transform-do-expressions			lower-case
babel-plugin-transform-es2015-arrow-functions		lower-case-first
babel-plugin-transform-es2015-block-scoped-functions	lru-cache
babel-plugin-transform-es2015-block-scoping		makeerror
babel-plugin-transform-es2015-classes			match-require
babel-plugin-transform-es2015-computed-properties	md5-file
babel-plugin-transform-es2015-destructuring		md5hex
babel-plugin-transform-es2015-duplicate-keys		media-typer
babel-plugin-transform-es2015-for-of			merge
babel-plugin-transform-es2015-function-name		merge-descriptors
babel-plugin-transform-es2015-literals			merge-stream
babel-plugin-transform-es2015-modules-amd		method-override
babel-plugin-transform-es2015-modules-commonjs		methods
babel-plugin-transform-es2015-modules-systemjs		micromatch
babel-plugin-transform-es2015-modules-umd		mime
babel-plugin-transform-es2015-object-super		mime-db
babel-plugin-transform-es2015-parameters		mime-types
babel-plugin-transform-es2015-shorthand-properties	mimic-fn
babel-plugin-transform-es2015-spread			min-document
babel-plugin-transform-es2015-sticky-regex		minimatch
babel-plugin-transform-es2015-template-literals		minimist
babel-plugin-transform-es2015-typeof-symbol		mkdirp
babel-plugin-transform-es2015-unicode-regex		mkdirp-promise
babel-plugin-transform-es3-member-expression-literals	mkpath
babel-plugin-transform-es3-property-literals		moment
babel-plugin-transform-exponentiation-operator		morgan
babel-plugin-transform-export-extensions		mout
babel-plugin-transform-flow-strip-types			ms
babel-plugin-transform-function-bind			multiparty
babel-plugin-transform-jscript				multipipe
babel-plugin-transform-object-assign			mute-stream
babel-plugin-transform-object-rest-spread		mv
babel-plugin-transform-react-display-name		mz
babel-plugin-transform-react-jsx			nan
babel-plugin-transform-react-jsx-self			natural-compare
babel-plugin-transform-react-jsx-source			ncp
babel-plugin-transform-regenerator			negotiator
babel-plugin-transform-strict-mode			node-fetch
babel-polyfill						node-int64
babel-preset-airbnb					node-notifier
babel-preset-env					noop-fn
babel-preset-es2015-node				nopt
babel-preset-expo					normalize-package-data
babel-preset-fbjs					normalize-path
babel-preset-flow					npmlog
babel-preset-jest					number-is-nan
babel-preset-react					nwmatcher
babel-preset-react-native				oauth-sign
babel-preset-react-native-stage-0			object-assign
babel-register						object-keys
babel-runtime						object.assign
babel-template						object.omit
babel-traverse						on-finished
babel-types						on-headers
babylon							once
balanced-match						onetime
base64-js						opn
base64-url						optimist
base64url						optionator
basic-auth						options
basic-auth-connect					os-homedir
batch							os-locale
bcrypt-pbkdf						os-tmpdir
beeper							p-limit
big-integer						p-locate
binary							param-case
block-stream						parse-glob
bluebird						parse-json
body-parser						parse5
boom							parseurl
bplist-creator						pascal-case
bplist-parser						path-case
brace-expansion						path-exists
braces							path-is-absolute
browser-resolve						path-parse
browserslist						path-to-regexp
bser							path-type
buffer-equal-constant-time				pause
buffers							pegjs
builtin-modules						performance-now
bunyan							pify
bytes							pinkie
callsite						pinkie-promise
callsites						plist
camel-case						pouchdb-collections
camelcase						prelude-ls
caniuse-lite						preserve
caseless						pretty-format
center-align						private
chainsaw						process
chalk							process-nextick-args
change-case						progress
ci-info							promise
cli-cursor						promise-props
cli-width						prop-types
cliui							proxy-addr
clone							prr
clone-stats						pseudomap
co							punycode
code-point-at						q
color							qrcode-terminal
color-convert						qs
color-name						querystring
color-string						random-bytes
combined-stream						randomatic
commander						range-parser
component-emitter					raw-body
component-type						react
compressible						react-clone-referenced-element
compression						react-deep-force-update
concat-map						react-devtools-core
concat-stream						react-native
connect							react-native-branch
connect-timeout						react-native-fbads
constant-case						react-native-maps
content-disposition					react-native-safe-module
content-type						react-native-scripts
content-type-parser					react-native-svg
convert-source-map					react-native-vector-icons
cookie							react-proxy
cookie-parser						react-redux
cookie-signature					react-test-renderer
cookiejar						react-timer-mixin
core-js							react-transform-hmr
core-util-is						read-chunk
crc							read-pkg
create-react-class					read-pkg-up
cross-spawn						readable-stream
cryptiles						readline2
crypto-token						rebound
csrf							redux
cssom							redux-logger
cssstyle						regenerate
csurf							regenerator-runtime
dashdash						regenerator-transform
dateformat						regex-cache
debug							regexpu-core
decache							regjsgen
decamelize						regjsparser
decompress-zip						remove-trailing-separator
dedent							remove-trailing-slash
deep-diff						repeat-element
deep-is							repeat-string
default-require-extensions				repeating
define-properties					repl
delay-async						replace-ext
delayed-stream						request
delegates						request-progress
denodeify						require-directory
depd							require-main-filename
destroy							reqwest
detect-indent						resolve
diff							response-time
dom-walk						rest-facade
dot-case						restore-cursor
dtrace-provider						right-align
duplexer2						rimraf
ecc-jsbn						rndm
ecdsa-sig-formatter					run-async
ee-first						rx-lite
electron-to-chromium					rx-lite-aggregates
encodeurl						safe-buffer
encoding						safe-json-stringify
errno							sane
error-ex						sax
errorhandler						semver
es6-error						send
escape-html						sentence-case
escape-string-regexp					serve-favicon
escodegen						serve-index
esprima							serve-static
estraverse						set-blocking
esutils							setimmediate
etag							setprototypeof
event-target-shim					shebang-command
eventemitter3						shebang-regex
exec-async						shell-quote
exec-sh							shellwords
exists-async						signal-exit
exit-hook						simple-plist
expand-brackets						slash
expand-range						slide
expo							slugid
express							slugify
express-session						snake-case
extend							sntp
external-editor						source-map
extglob							source-map-support
extsprintf						sparkles
fancy-log						spdx-correct
fast-levenshtein					spdx-expression-parse
fb-watchman						spdx-license-ids
fbemitter						sprintf-js
fbjs							sshpk
fbjs-scripts						stacktrace-parser
figures							statuses
file-type						stream-buffers
filename-regex						stream-counter
fileset							string-length
fill-range						string-width
finalhandler						string_decoder
find-babel-config					stringstream
find-up							strip-ansi
follow-redirects					strip-bom
for-in							superagent
for-own							superagent-retry
foreach							supports-color
forever-agent						swap-case
form-data						symbol-observable
formidable						symbol-tree
forwarded						tar
freeport-async						tar.gz
fresh							temp
fs-extra						test-exclude
fs.realpath						thenify
fstream							thenify-all
function-bind						throat
gauge							throttleit
get-caller-file						through
getpass							through2
glob							time-stamp
glob-base						tiny-queue
glob-parent						title-case
global							tmp
globals							tmpl
glogg							to-fast-properties
graceful-fs						topo
graceful-readlink					touch
growly							tough-cookie
gulp-util						tr46
gulplog							traverse
handlebars						tree-kill
har-schema						trim
har-validator						trim-right
has-ansi						tsscmp
has-color						tunnel-agent
has-flag						tweetnacl
has-gulplog						type-check
has-unicode						type-is
hasbin							typedarray
hawk							ua-parser-js
hoek							uglify-js
hoist-non-react-statics					uglify-to-browserify
home-dir						uid-safe
home-or-tmp						ultron
hosted-git-info						universalify
html-encoding-sniffer					unpipe
http-errors						upper-case
http-signature						upper-case-first
iconv-lite						url
image-size						url-join
immediate						util-deprecate
imurmurhash						utils-merge
indent-string						uuid
inflight						uuid-js
inherits						validate-npm-package-license
inquirer						vary
instapromise						verror
invariant						vhost
invert-kv						vinyl
ip							walker
ipaddr.js						watch
is-arrayish						webidl-conversions
is-buffer						websql
is-builtin-module					whatwg-encoding
is-ci							whatwg-fetch
is-dotfile						whatwg-url
is-equal-shallow					which
is-extendable						which-module
is-extglob						winchan
is-finite						window-size
is-fullwidth-code-point					wordwrap
is-glob							worker-farm
is-lower-case						wrap-ansi
is-number						wrappy
is-posix-bracket					write-file-atomic
is-primitive						ws
is-promise						xcode
is-stream						xdl
is-typedarray						xhr2
is-upper-case						xml-name-validator
is-utf8							xmlbuilder
isarray							xmldoc
isemail							xmldom
isexe							xpipe
isobject						xtend
isomorphic-fetch					y18n
isstream						yallist
istanbul-api						yargs
istanbul-lib-coverage					yargs-parser
istanbul-lib-hook					yesno
istanbul-lib-instrument
acbc32a00421:node_modules jsheth$ cd expo
acbc32a00421:expo jsheth$ ls
AppEntry.js	jsconfig.json	src		yarn-error.log
README.md	package.json	tools		yarn.lock
acbc32a00421:expo jsheth$ cd ..
acbc32a00421:node_modules jsheth$ ls
@ccheever						istanbul-lib-report
@expo							istanbul-lib-source-maps
@exponent						istanbul-reports
@segment						items
Base64							jest
abab							jest-changed-files
abbrev							jest-config
absolute-path						jest-diff
accepts							jest-docblock
acorn							jest-environment-jsdom
acorn-globals						jest-environment-node
ajv							jest-expo
align-text						jest-file-exists
amdefine						jest-haste-map
analytics-node						jest-jasmine2
ansi							jest-matcher-utils
ansi-escapes						jest-matchers
ansi-regex						jest-message-util
ansi-styles						jest-mock
any-promise						jest-regex-util
anymatch						jest-repl
append-transform					jest-resolve
are-we-there-yet					jest-resolve-dependencies
argparse						jest-runtime
argsarray						jest-snapshot
arr-diff						jest-util
arr-flatten						jest-validate
array-differ						joi
array-equal						join-component
array-filter						js-tokens
array-flatten						js-yaml
array-map						jsbn
array-reduce						jschardet
array-uniq						jsdom
array-unique						jsesc
arrify							json-fallback
art							json-schema
asap							json-stable-stringify
asn1							json-stringify-safe
assert-plus						json5
async							jsonfile
asynckit						jsonify
auth0-js						jsonp
aws-sign2						jsonschema
aws4							jsonwebtoken
axios							jsprim
babel-code-frame					jwa
babel-core						jws
babel-generator						kind-of
babel-helper-builder-binary-assignment-operator-visitor	klaw
babel-helper-builder-react-jsx				lazy-cache
babel-helper-call-delegate				lcid
babel-helper-define-map					left-pad
babel-helper-explode-assignable-expression		leven
babel-helper-function-name				levn
babel-helper-get-function-arity				load-json-file
babel-helper-hoist-variables				locate-path
babel-helper-optimise-call-expression			lock
babel-helper-regex					lodash
babel-helper-remap-async-to-generator			lodash-es
babel-helper-replace-supers				lodash._basecopy
babel-helpers						lodash._basetostring
babel-jest						lodash._basevalues
babel-messages						lodash._getnative
babel-plugin-check-es2015-constants			lodash._isiterateecall
babel-plugin-external-helpers				lodash._reescape
babel-plugin-istanbul					lodash._reevaluate
babel-plugin-jest-hoist					lodash._reinterpolate
babel-plugin-module-resolver				lodash._root
babel-plugin-react-transform				lodash.escape
babel-plugin-syntax-async-functions			lodash.isarguments
babel-plugin-syntax-class-constructor-call		lodash.isarray
babel-plugin-syntax-class-properties			lodash.keys
babel-plugin-syntax-decorators				lodash.map
babel-plugin-syntax-do-expressions			lodash.once
babel-plugin-syntax-exponentiation-operator		lodash.pad
babel-plugin-syntax-export-extensions			lodash.padend
babel-plugin-syntax-flow				lodash.padstart
babel-plugin-syntax-function-bind			lodash.restparam
babel-plugin-syntax-jsx					lodash.template
babel-plugin-syntax-object-rest-spread			lodash.templatesettings
babel-plugin-syntax-trailing-function-commas		lodash.zipobject
babel-plugin-transform-async-to-generator		longest
babel-plugin-transform-class-constructor-call		loose-envify
babel-plugin-transform-class-properties			lottie-ios
babel-plugin-transform-decorators-legacy		lottie-react-native
babel-plugin-transform-do-expressions			lower-case
babel-plugin-transform-es2015-arrow-functions		lower-case-first
babel-plugin-transform-es2015-block-scoped-functions	lru-cache
babel-plugin-transform-es2015-block-scoping		makeerror
babel-plugin-transform-es2015-classes			match-require
babel-plugin-transform-es2015-computed-properties	md5-file
babel-plugin-transform-es2015-destructuring		md5hex
babel-plugin-transform-es2015-duplicate-keys		media-typer
babel-plugin-transform-es2015-for-of			merge
babel-plugin-transform-es2015-function-name		merge-descriptors
babel-plugin-transform-es2015-literals			merge-stream
babel-plugin-transform-es2015-modules-amd		method-override
babel-plugin-transform-es2015-modules-commonjs		methods
babel-plugin-transform-es2015-modules-systemjs		micromatch
babel-plugin-transform-es2015-modules-umd		mime
babel-plugin-transform-es2015-object-super		mime-db
babel-plugin-transform-es2015-parameters		mime-types
babel-plugin-transform-es2015-shorthand-properties	mimic-fn
babel-plugin-transform-es2015-spread			min-document
babel-plugin-transform-es2015-sticky-regex		minimatch
babel-plugin-transform-es2015-template-literals		minimist
babel-plugin-transform-es2015-typeof-symbol		mkdirp
babel-plugin-transform-es2015-unicode-regex		mkdirp-promise
babel-plugin-transform-es3-member-expression-literals	mkpath
babel-plugin-transform-es3-property-literals		moment
babel-plugin-transform-exponentiation-operator		morgan
babel-plugin-transform-export-extensions		mout
babel-plugin-transform-flow-strip-types			ms
babel-plugin-transform-function-bind			multiparty
babel-plugin-transform-jscript				multipipe
babel-plugin-transform-object-assign			mute-stream
babel-plugin-transform-object-rest-spread		mv
babel-plugin-transform-react-display-name		mz
babel-plugin-transform-react-jsx			nan
babel-plugin-transform-react-jsx-self			natural-compare
babel-plugin-transform-react-jsx-source			ncp
babel-plugin-transform-regenerator			negotiator
babel-plugin-transform-strict-mode			node-fetch
babel-polyfill						node-int64
babel-preset-airbnb					node-notifier
babel-preset-env					noop-fn
babel-preset-es2015-node				nopt
babel-preset-expo					normalize-package-data
babel-preset-fbjs					normalize-path
babel-preset-flow					npmlog
babel-preset-jest					number-is-nan
babel-preset-react					nwmatcher
babel-preset-react-native				oauth-sign
babel-preset-react-native-stage-0			object-assign
babel-register						object-keys
babel-runtime						object.assign
babel-template						object.omit
babel-traverse						on-finished
babel-types						on-headers
babylon							once
balanced-match						onetime
base64-js						opn
base64-url						optimist
base64url						optionator
basic-auth						options
basic-auth-connect					os-homedir
batch							os-locale
bcrypt-pbkdf						os-tmpdir
beeper							p-limit
big-integer						p-locate
binary							param-case
block-stream						parse-glob
bluebird						parse-json
body-parser						parse5
boom							parseurl
bplist-creator						pascal-case
bplist-parser						path-case
brace-expansion						path-exists
braces							path-is-absolute
browser-resolve						path-parse
browserslist						path-to-regexp
bser							path-type
buffer-equal-constant-time				pause
buffers							pegjs
builtin-modules						performance-now
bunyan							pify
bytes							pinkie
callsite						pinkie-promise
callsites						plist
camel-case						pouchdb-collections
camelcase						prelude-ls
caniuse-lite						preserve
caseless						pretty-format
center-align						private
chainsaw						process
chalk							process-nextick-args
change-case						progress
ci-info							promise
cli-cursor						promise-props
cli-width						prop-types
cliui							proxy-addr
clone							prr
clone-stats						pseudomap
co							punycode
code-point-at						q
color							qrcode-terminal
color-convert						qs
color-name						querystring
color-string						random-bytes
combined-stream						randomatic
commander						range-parser
component-emitter					raw-body
component-type						react
compressible						react-clone-referenced-element
compression						react-deep-force-update
concat-map						react-devtools-core
concat-stream						react-native
connect							react-native-branch
connect-timeout						react-native-fbads
constant-case						react-native-maps
content-disposition					react-native-safe-module
content-type						react-native-scripts
content-type-parser					react-native-svg
convert-source-map					react-native-vector-icons
cookie							react-proxy
cookie-parser						react-redux
cookie-signature					react-test-renderer
cookiejar						react-timer-mixin
core-js							react-transform-hmr
core-util-is						read-chunk
crc							read-pkg
create-react-class					read-pkg-up
cross-spawn						readable-stream
cryptiles						readline2
crypto-token						rebound
csrf							redux
cssom							redux-logger
cssstyle						regenerate
csurf							regenerator-runtime
dashdash						regenerator-transform
dateformat						regex-cache
debug							regexpu-core
decache							regjsgen
decamelize						regjsparser
decompress-zip						remove-trailing-separator
dedent							remove-trailing-slash
deep-diff						repeat-element
deep-is							repeat-string
default-require-extensions				repeating
define-properties					repl
delay-async						replace-ext
delayed-stream						request
delegates						request-progress
denodeify						require-directory
depd							require-main-filename
destroy							reqwest
detect-indent						resolve
diff							response-time
dom-walk						rest-facade
dot-case						restore-cursor
dtrace-provider						right-align
duplexer2						rimraf
ecc-jsbn						rndm
ecdsa-sig-formatter					run-async
ee-first						rx-lite
electron-to-chromium					rx-lite-aggregates
encodeurl						safe-buffer
encoding						safe-json-stringify
errno							sane
error-ex						sax
errorhandler						semver
es6-error						send
escape-html						sentence-case
escape-string-regexp					serve-favicon
escodegen						serve-index
esprima							serve-static
estraverse						set-blocking
esutils							setimmediate
etag							setprototypeof
event-target-shim					shebang-command
eventemitter3						shebang-regex
exec-async						shell-quote
exec-sh							shellwords
exists-async						signal-exit
exit-hook						simple-plist
expand-brackets						slash
expand-range						slide
expo							slugid
express							slugify
express-session						snake-case
extend							sntp
external-editor						source-map
extglob							source-map-support
extsprintf						sparkles
fancy-log						spdx-correct
fast-levenshtein					spdx-expression-parse
fb-watchman						spdx-license-ids
fbemitter						sprintf-js
fbjs							sshpk
fbjs-scripts						stacktrace-parser
figures							statuses
file-type						stream-buffers
filename-regex						stream-counter
fileset							string-length
fill-range						string-width
finalhandler						string_decoder
find-babel-config					stringstream
find-up							strip-ansi
follow-redirects					strip-bom
for-in							superagent
for-own							superagent-retry
foreach							supports-color
forever-agent						swap-case
form-data						symbol-observable
formidable						symbol-tree
forwarded						tar
freeport-async						tar.gz
fresh							temp
fs-extra						test-exclude
fs.realpath						thenify
fstream							thenify-all
function-bind						throat
gauge							throttleit
get-caller-file						through
getpass							through2
glob							time-stamp
glob-base						tiny-queue
glob-parent						title-case
global							tmp
globals							tmpl
glogg							to-fast-properties
graceful-fs						topo
graceful-readlink					touch
growly							tough-cookie
gulp-util						tr46
gulplog							traverse
handlebars						tree-kill
har-schema						trim
har-validator						trim-right
has-ansi						tsscmp
has-color						tunnel-agent
has-flag						tweetnacl
has-gulplog						type-check
has-unicode						type-is
hasbin							typedarray
hawk							ua-parser-js
hoek							uglify-js
hoist-non-react-statics					uglify-to-browserify
home-dir						uid-safe
home-or-tmp						ultron
hosted-git-info						universalify
html-encoding-sniffer					unpipe
http-errors						upper-case
http-signature						upper-case-first
iconv-lite						url
image-size						url-join
immediate						util-deprecate
imurmurhash						utils-merge
indent-string						uuid
inflight						uuid-js
inherits						validate-npm-package-license
inquirer						vary
instapromise						verror
invariant						vhost
invert-kv						vinyl
ip							walker
ipaddr.js						watch
is-arrayish						webidl-conversions
is-buffer						websql
is-builtin-module					whatwg-encoding
is-ci							whatwg-fetch
is-dotfile						whatwg-url
is-equal-shallow					which
is-extendable						which-module
is-extglob						winchan
is-finite						window-size
is-fullwidth-code-point					wordwrap
is-glob							worker-farm
is-lower-case						wrap-ansi
is-number						wrappy
is-posix-bracket					write-file-atomic
is-primitive						ws
is-promise						xcode
is-stream						xdl
is-typedarray						xhr2
is-upper-case						xml-name-validator
is-utf8							xmlbuilder
isarray							xmldoc
isemail							xmldom
isexe							xpipe
isobject						xtend
isomorphic-fetch					y18n
isstream						yallist
istanbul-api						yargs
istanbul-lib-coverage					yargs-parser
istanbul-lib-hook					yesno
istanbul-lib-instrument
acbc32a00421:node_modules jsheth$ cd expo
acbc32a00421:expo jsheth$ ls
AppEntry.js	jsconfig.json	src		yarn-error.log
README.md	package.json	tools		yarn.lock
acbc32a00421:expo jsheth$ cd src
acbc32a00421:src jsheth$ ls
AV.js				FacebookAds			Notifications.js
Accelerometer.js		Font.js				Pedometer.js
AppLoading.android.js		GLView.js			Permissions.js
AppLoading.ios.js		Google.js			SQLite.js
Asset.js			Gyroscope.js			ScreenOrientation.js
Audio.js			Icon.js				Svg.js
BarCodeScanner.js		ImagePicker.js			Video.js
BlurView.android.js		IntentLauncherAndroid.js	__tests__
BlurView.ios.js			KeepAwake.js			apisAreAvailable.js
Constants.js			LegacyAsyncStorage.android.js	createTHREEViewClass.js
Contacts.js			LegacyAsyncStorage.ios.js	lib
DangerZone.js			LinearGradient.android.js	registerRootComponent.js
DocumentPicker.js		LinearGradient.ios.js		takeSnapshotAsync.js
Expo.js				Location.js
Facebook.js			Logs.js
acbc32a00421:src jsheth$ cd ..
acbc32a00421:expo jsheth$ ls
AppEntry.js	jsconfig.json	src		yarn-error.log
README.md	package.json	tools		yarn.lock
acbc32a00421:expo jsheth$ cd ..
acbc32a00421:node_modules jsheth$ ls
@ccheever						istanbul-lib-report
@expo							istanbul-lib-source-maps
@exponent						istanbul-reports
@segment						items
Base64							jest
abab							jest-changed-files
abbrev							jest-config
absolute-path						jest-diff
accepts							jest-docblock
acorn							jest-environment-jsdom
acorn-globals						jest-environment-node
ajv							jest-expo
align-text						jest-file-exists
amdefine						jest-haste-map
analytics-node						jest-jasmine2
ansi							jest-matcher-utils
ansi-escapes						jest-matchers
ansi-regex						jest-message-util
ansi-styles						jest-mock
any-promise						jest-regex-util
anymatch						jest-repl
append-transform					jest-resolve
are-we-there-yet					jest-resolve-dependencies
argparse						jest-runtime
argsarray						jest-snapshot
arr-diff						jest-util
arr-flatten						jest-validate
array-differ						joi
array-equal						join-component
array-filter						js-tokens
array-flatten						js-yaml
array-map						jsbn
array-reduce						jschardet
array-uniq						jsdom
array-unique						jsesc
arrify							json-fallback
art							json-schema
asap							json-stable-stringify
asn1							json-stringify-safe
assert-plus						json5
async							jsonfile
asynckit						jsonify
auth0-js						jsonp
aws-sign2						jsonschema
aws4							jsonwebtoken
axios							jsprim
babel-code-frame					jwa
babel-core						jws
babel-generator						kind-of
babel-helper-builder-binary-assignment-operator-visitor	klaw
babel-helper-builder-react-jsx				lazy-cache
babel-helper-call-delegate				lcid
babel-helper-define-map					left-pad
babel-helper-explode-assignable-expression		leven
babel-helper-function-name				levn
babel-helper-get-function-arity				load-json-file
babel-helper-hoist-variables				locate-path
babel-helper-optimise-call-expression			lock
babel-helper-regex					lodash
babel-helper-remap-async-to-generator			lodash-es
babel-helper-replace-supers				lodash._basecopy
babel-helpers						lodash._basetostring
babel-jest						lodash._basevalues
babel-messages						lodash._getnative
babel-plugin-check-es2015-constants			lodash._isiterateecall
babel-plugin-external-helpers				lodash._reescape
babel-plugin-istanbul					lodash._reevaluate
babel-plugin-jest-hoist					lodash._reinterpolate
babel-plugin-module-resolver				lodash._root
babel-plugin-react-transform				lodash.escape
babel-plugin-syntax-async-functions			lodash.isarguments
babel-plugin-syntax-class-constructor-call		lodash.isarray
babel-plugin-syntax-class-properties			lodash.keys
babel-plugin-syntax-decorators				lodash.map
babel-plugin-syntax-do-expressions			lodash.once
babel-plugin-syntax-exponentiation-operator		lodash.pad
babel-plugin-syntax-export-extensions			lodash.padend
babel-plugin-syntax-flow				lodash.padstart
babel-plugin-syntax-function-bind			lodash.restparam
babel-plugin-syntax-jsx					lodash.template
babel-plugin-syntax-object-rest-spread			lodash.templatesettings
babel-plugin-syntax-trailing-function-commas		lodash.zipobject
babel-plugin-transform-async-to-generator		longest
babel-plugin-transform-class-constructor-call		loose-envify
babel-plugin-transform-class-properties			lottie-ios
babel-plugin-transform-decorators-legacy		lottie-react-native
babel-plugin-transform-do-expressions			lower-case
babel-plugin-transform-es2015-arrow-functions		lower-case-first
babel-plugin-transform-es2015-block-scoped-functions	lru-cache
babel-plugin-transform-es2015-block-scoping		makeerror
babel-plugin-transform-es2015-classes			match-require
babel-plugin-transform-es2015-computed-properties	md5-file
babel-plugin-transform-es2015-destructuring		md5hex
babel-plugin-transform-es2015-duplicate-keys		media-typer
babel-plugin-transform-es2015-for-of			merge
babel-plugin-transform-es2015-function-name		merge-descriptors
babel-plugin-transform-es2015-literals			merge-stream
babel-plugin-transform-es2015-modules-amd		method-override
babel-plugin-transform-es2015-modules-commonjs		methods
babel-plugin-transform-es2015-modules-systemjs		micromatch
babel-plugin-transform-es2015-modules-umd		mime
babel-plugin-transform-es2015-object-super		mime-db
babel-plugin-transform-es2015-parameters		mime-types
babel-plugin-transform-es2015-shorthand-properties	mimic-fn
babel-plugin-transform-es2015-spread			min-document
babel-plugin-transform-es2015-sticky-regex		minimatch
babel-plugin-transform-es2015-template-literals		minimist
babel-plugin-transform-es2015-typeof-symbol		mkdirp
babel-plugin-transform-es2015-unicode-regex		mkdirp-promise
babel-plugin-transform-es3-member-expression-literals	mkpath
babel-plugin-transform-es3-property-literals		moment
babel-plugin-transform-exponentiation-operator		morgan
babel-plugin-transform-export-extensions		mout
babel-plugin-transform-flow-strip-types			ms
babel-plugin-transform-function-bind			multiparty
babel-plugin-transform-jscript				multipipe
babel-plugin-transform-object-assign			mute-stream
babel-plugin-transform-object-rest-spread		mv
babel-plugin-transform-react-display-name		mz
babel-plugin-transform-react-jsx			nan
babel-plugin-transform-react-jsx-self			natural-compare
babel-plugin-transform-react-jsx-source			ncp
babel-plugin-transform-regenerator			negotiator
babel-plugin-transform-strict-mode			node-fetch
babel-polyfill						node-int64
babel-preset-airbnb					node-notifier
babel-preset-env					noop-fn
babel-preset-es2015-node				nopt
babel-preset-expo					normalize-package-data
babel-preset-fbjs					normalize-path
babel-preset-flow					npmlog
babel-preset-jest					number-is-nan
babel-preset-react					nwmatcher
babel-preset-react-native				oauth-sign
babel-preset-react-native-stage-0			object-assign
babel-register						object-keys
babel-runtime						object.assign
babel-template						object.omit
babel-traverse						on-finished
babel-types						on-headers
babylon							once
balanced-match						onetime
base64-js						opn
base64-url						optimist
base64url						optionator
basic-auth						options
basic-auth-connect					os-homedir
batch							os-locale
bcrypt-pbkdf						os-tmpdir
beeper							p-limit
big-integer						p-locate
binary							param-case
block-stream						parse-glob
bluebird						parse-json
body-parser						parse5
boom							parseurl
bplist-creator						pascal-case
bplist-parser						path-case
brace-expansion						path-exists
braces							path-is-absolute
browser-resolve						path-parse
browserslist						path-to-regexp
bser							path-type
buffer-equal-constant-time				pause
buffers							pegjs
builtin-modules						performance-now
bunyan							pify
bytes							pinkie
callsite						pinkie-promise
callsites						plist
camel-case						pouchdb-collections
camelcase						prelude-ls
caniuse-lite						preserve
caseless						pretty-format
center-align						private
chainsaw						process
chalk							process-nextick-args
change-case						progress
ci-info							promise
cli-cursor						promise-props
cli-width						prop-types
cliui							proxy-addr
clone							prr
clone-stats						pseudomap
co							punycode
code-point-at						q
color							qrcode-terminal
color-convert						qs
color-name						querystring
color-string						random-bytes
combined-stream						randomatic
commander						range-parser
component-emitter					raw-body
component-type						react
compressible						react-clone-referenced-element
compression						react-deep-force-update
concat-map						react-devtools-core
concat-stream						react-native
connect							react-native-branch
connect-timeout						react-native-fbads
constant-case						react-native-maps
content-disposition					react-native-safe-module
content-type						react-native-scripts
content-type-parser					react-native-svg
convert-source-map					react-native-vector-icons
cookie							react-proxy
cookie-parser						react-redux
cookie-signature					react-test-renderer
cookiejar						react-timer-mixin
core-js							react-transform-hmr
core-util-is						read-chunk
crc							read-pkg
create-react-class					read-pkg-up
cross-spawn						readable-stream
cryptiles						readline2
crypto-token						rebound
csrf							redux
cssom							redux-logger
cssstyle						regenerate
csurf							regenerator-runtime
dashdash						regenerator-transform
dateformat						regex-cache
debug							regexpu-core
decache							regjsgen
decamelize						regjsparser
decompress-zip						remove-trailing-separator
dedent							remove-trailing-slash
deep-diff						repeat-element
deep-is							repeat-string
default-require-extensions				repeating
define-properties					repl
delay-async						replace-ext
delayed-stream						request
delegates						request-progress
denodeify						require-directory
depd							require-main-filename
destroy							reqwest
detect-indent						resolve
diff							response-time
dom-walk						rest-facade
dot-case						restore-cursor
dtrace-provider						right-align
duplexer2						rimraf
ecc-jsbn						rndm
ecdsa-sig-formatter					run-async
ee-first						rx-lite
electron-to-chromium					rx-lite-aggregates
encodeurl						safe-buffer
encoding						safe-json-stringify
errno							sane
error-ex						sax
errorhandler						semver
es6-error						send
escape-html						sentence-case
escape-string-regexp					serve-favicon
escodegen						serve-index
esprima							serve-static
estraverse						set-blocking
esutils							setimmediate
etag							setprototypeof
event-target-shim					shebang-command
eventemitter3						shebang-regex
exec-async						shell-quote
exec-sh							shellwords
exists-async						signal-exit
exit-hook						simple-plist
expand-brackets						slash
expand-range						slide
expo							slugid
express							slugify
express-session						snake-case
extend							sntp
external-editor						source-map
extglob							source-map-support
extsprintf						sparkles
fancy-log						spdx-correct
fast-levenshtein					spdx-expression-parse
fb-watchman						spdx-license-ids
fbemitter						sprintf-js
fbjs							sshpk
fbjs-scripts						stacktrace-parser
figures							statuses
file-type						stream-buffers
filename-regex						stream-counter
fileset							string-length
fill-range						string-width
finalhandler						string_decoder
find-babel-config					stringstream
find-up							strip-ansi
follow-redirects					strip-bom
for-in							superagent
for-own							superagent-retry
foreach							supports-color
forever-agent						swap-case
form-data						symbol-observable
formidable						symbol-tree
forwarded						tar
freeport-async						tar.gz
fresh							temp
fs-extra						test-exclude
fs.realpath						thenify
fstream							thenify-all
function-bind						throat
gauge							throttleit
get-caller-file						through
getpass							through2
glob							time-stamp
glob-base						tiny-queue
glob-parent						title-case
global							tmp
globals							tmpl
glogg							to-fast-properties
graceful-fs						topo
graceful-readlink					touch
growly							tough-cookie
gulp-util						tr46
gulplog							traverse
handlebars						tree-kill
har-schema						trim
har-validator						trim-right
has-ansi						tsscmp
has-color						tunnel-agent
has-flag						tweetnacl
has-gulplog						type-check
has-unicode						type-is
hasbin							typedarray
hawk							ua-parser-js
hoek							uglify-js
hoist-non-react-statics					uglify-to-browserify
home-dir						uid-safe
home-or-tmp						ultron
hosted-git-info						universalify
html-encoding-sniffer					unpipe
http-errors						upper-case
http-signature						upper-case-first
iconv-lite						url
image-size						url-join
immediate						util-deprecate
imurmurhash						utils-merge
indent-string						uuid
inflight						uuid-js
inherits						validate-npm-package-license
inquirer						vary
instapromise						verror
invariant						vhost
invert-kv						vinyl
ip							walker
ipaddr.js						watch
is-arrayish						webidl-conversions
is-buffer						websql
is-builtin-module					whatwg-encoding
is-ci							whatwg-fetch
is-dotfile						whatwg-url
is-equal-shallow					which
is-extendable						which-module
is-extglob						winchan
is-finite						window-size
is-fullwidth-code-point					wordwrap
is-glob							worker-farm
is-lower-case						wrap-ansi
is-number						wrappy
is-posix-bracket					write-file-atomic
is-primitive						ws
is-promise						xcode
is-stream						xdl
is-typedarray						xhr2
is-upper-case						xml-name-validator
is-utf8							xmlbuilder
isarray							xmldoc
isemail							xmldom
isexe							xpipe
isobject						xtend
isomorphic-fetch					y18n
isstream						yallist
istanbul-api						yargs
istanbul-lib-coverage					yargs-parser
istanbul-lib-hook					yesno
istanbul-lib-instrument
acbc32a00421:node_modules jsheth$ cd ..
acbc32a00421:react-native-tinder-swipe-cards jsheth$ ls
App.js		App.test.js	README.md	app.json	node_modules	package.json
acbc32a00421:react-native-tinder-swipe-cards jsheth$ cd ..
acbc32a00421:react-native-tinder-swipe-cards jsheth$ ls
Defaults.js			SwipeCards.js			react-native-tinder-swipe-cards
LICENSE				npm-debug.log			screenshots
README.md			package.json
acbc32a00421:react-native-tinder-swipe-cards jsheth$ cd ..
acbc32a00421:webdevcon jsheth$ ls
my-app						react-native-tinder-swipe-cards
node_modules					react-native-tinder-swipe-cards-master.zip
acbc32a00421:webdevcon jsheth$ cd ..
acbc32a00421:~ jsheth$ ls
AndroidStudioProjects				RetailSearchADP
Applications					RetailSearchPageletGroup
Certificate of Completion.pdf			RetailSearchShared
Desktop						Screen Shot 2017-04-18 at 9.02.16 PM.png
Documents					SearchExperienceShared
Downloads					Sites
Library						Ubuntu
Movies						brazil-pkg-cache
Music						desktop-workspace
PersonalWebsiteConfig				local
PersonalWebsiteConfig.zip			search.rendering.app.xml
Pictures					webdevcon
Public						zshrc.rtf
RSP
acbc32a00421:~ jsheth$ cd webdevcon/
acbc32a00421:webdevcon jsheth$ ls
my-app						react-native-tinder-swipe-cards
node_modules					react-native-tinder-swipe-cards-master.zip
acbc32a00421:webdevcon jsheth$ cd react-native-tinder-swipe-cards
acbc32a00421:react-native-tinder-swipe-cards jsheth$ ls
Defaults.js			SwipeCards.js			react-native-tinder-swipe-cards
LICENSE				npm-debug.log			screenshots
README.md			package.json
acbc32a00421:react-native-tinder-swipe-cards jsheth$ cd react-native-tinder-swipe-cards/
acbc32a00421:react-native-tinder-swipe-cards jsheth$ exp start
^C
acbc32a00421:react-native-tinder-swipe-cards jsheth$ cd ..
acbc32a00421:react-native-tinder-swipe-cards jsheth$ ls
Defaults.js			SwipeCards.js			react-native-tinder-swipe-cards
LICENSE				npm-debug.log			screenshots
README.md			package.json
acbc32a00421:react-native-tinder-swipe-cards jsheth$ exp start
[exp] getaddrinfo ENOTFOUND exponent.auth0.com exponent.auth0.com:443

An Expo user account is required to proceed.

? How would you like to authenticate? Log in with an existing Expo account
? Username/Email Address: jaysheth
? Password: ********

Success.
[exp] Making sure project is set up correctly...
|[exp] Error: Missing exp.json. See https://docs.expo.io/
-[exp] There is an error with your project. See above logs for information.
Error: There is an error with your project. See above logs for information.
    at Command._callee2$ (/Users/jesseruder/exponent/universe/dev/exp/src/exp.js:203:15)
    at tryCatch (/usr/local/lib/node_modules/exp/node_modules/regenerator-runtime/runtime.js:65:40)
    at GeneratorFunctionPrototype.invoke [as _invoke] (/usr/local/lib/node_modules/exp/node_modules/regenerator-runtime/runtime.js:303:22)
    at GeneratorFunctionPrototype.prototype.(anonymous function) [as next] (/usr/local/lib/node_modules/exp/node_modules/regenerator-runtime/runtime.js:117:21)
    at step (/usr/local/lib/node_modules/exp/node_modules/babel-runtime/helpers/asyncToGenerator.js:17:30)
    at /usr/local/lib/node_modules/exp/node_modules/babel-runtime/helpers/asyncToGenerator.js:28:13
    at process._tickCallback (internal/process/next_tick.js:109:7)
acbc32a00421:react-native-tinder-swipe-cards jsheth$ ls
Defaults.js			SwipeCards.js			react-native-tinder-swipe-cards
LICENSE				npm-debug.log			screenshots
README.md			package.json
acbc32a00421:react-native-tinder-swipe-cards jsheth$ cd react-native-tinder-swipe-cards/
acbc32a00421:react-native-tinder-swipe-cards jsheth$ ls
App.js		App.test.js	README.md	app.json	node_modules	package.json
acbc32a00421:react-native-tinder-swipe-cards jsheth$ vi app.json 
acbc32a00421:react-native-tinder-swipe-cards jsheth$ exp start
[exp] Making sure project is set up correctly...
\[exp] Warning: Not using the Expo fork of react-native. See https://docs.expo.io/.
[exp] Your project looks good!
[exp] Using project at /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards
[exp] Warning: Not using the Expo fork of react-native. See https://docs.expo.io/.
[exp] Starting React Native packager...
[exp] Scanning 756 folders for symlinks in /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards/node_modules (7ms)
[exp] Loading dependency graph.
[exp] Running packager on port 19001.
[exp] Dependency graph loaded.
[exp] Expo is ready.
[exp] You can scan this QR code:

                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        

[exp] Your URL is

exp://zj-tp2.jaysheth.react-native-tinder-swipe-cards.exp.direct:80

[exp] Logs for your project will appear below. Press Ctrl+C to exit.
[exp] Warning: Not using the Expo fork of react-native. See https://docs.expo.io/.
[exp] Finished building JavaScript bundle in 39515ms.
[exp] Warning: PropTypes has been moved to a separate package. Accessing React.PropTypes is no longer supported and will be removed completely in React 16. Use the prop-types package on npm instead. (https://fb.me/migrating-from-react-proptypes)
[exp] Warning: React.createClass is no longer supported. Use a plain JavaScript class instead. If you're not yet ready to migrate, create-react-class is available on npm as a drop-in replacement. (https://fb.me/migrating-from-react-create-class)
[exp] Running application "main" with appParams: {"rootTag":1,"initialProps":{"exp":{"manifest":{"id":"@jaysheth/react-native-tinder-swipe-cards","sdkVersion":"18.0.0","version":"0.1.0","packagerOpts":{"lanType":"ip","strict":false,"minify":false,"urlRandomness":"zj-tp2","hostType":"tunnel","urlType":"exp","dev":true},"mainModuleName":"./node_modules/react-native-scripts/build/bin/crna-entry","isVerified":true,"xde":true,"slug":"react-native-tinder-swipe-cards","debuggerHost":"packager.zj-tp2.jaysheth.react-native-tinder-swipe-cards.exp.direct:80","developer":{"tool":"exp"},"env":{},"bundleUrl":"http://packager.zj-tp2.jaysheth.react-native-tinder-swipe-cards.exp.direct:80/./node_modules/react-native-scripts/build/bin/crna-entry.bundle?platform=ios&dev=true&strict=false&minify=false&hot=false&assetPlugin=expo/tools/hashAssetFiles","logUrl":"http://zj-tp2.jaysheth.react-native-tinder-swipe-cards.exp.direct:80/logs","name":"react-native-tinder-swipe-cards"},"appOwnership":"expo","initialUri":"exp://zj-tp2.jaysheth.react-native-tinder-swipe-cards.exp.direct","shell":false}}}. __DEV__ === true, development-level warning are ON, performance optimizations are OFF
[exp] Warning: Not using the Expo fork of react-native. See https://docs.expo.io/.
[exp] Warning: PropTypes has been moved to a separate package. Accessing React.PropTypes is no longer supported and will be removed completely in React 16. Use the prop-types package on npm instead. (https://fb.me/migrating-from-react-proptypes)
[exp] Warning: React.createClass is no longer supported. Use a plain JavaScript class instead. If you're not yet ready to migrate, create-react-class is available on npm as a drop-in replacement. (https://fb.me/migrating-from-react-create-class)
[exp] Running application "main" with appParams: {"rootTag":1,"initialProps":{"exp":{"manifest":{"id":"@jaysheth/react-native-tinder-swipe-cards","sdkVersion":"18.0.0","version":"0.1.0","packagerOpts":{"lanType":"ip","strict":false,"minify":false,"urlRandomness":"zj-tp2","hostType":"tunnel","urlType":"exp","dev":true},"mainModuleName":"./node_modules/react-native-scripts/build/bin/crna-entry","isVerified":true,"xde":true,"slug":"react-native-tinder-swipe-cards","debuggerHost":"packager.zj-tp2.jaysheth.react-native-tinder-swipe-cards.exp.direct:80","developer":{"tool":"exp"},"env":{},"bundleUrl":"http://packager.zj-tp2.jaysheth.react-native-tinder-swipe-cards.exp.direct:80/./node_modules/react-native-scripts/build/bin/crna-entry.bundle?platform=ios&dev=true&strict=false&minify=false&hot=false&assetPlugin=expo/tools/hashAssetFiles","logUrl":"http://zj-tp2.jaysheth.react-native-tinder-swipe-cards.exp.direct:80/logs","name":"react-native-tinder-swipe-cards"},"appOwnership":"expo","initialUri":"exp://zj-tp2.jaysheth.react-native-tinder-swipe-cards.exp.direct","shell":false}}}. __DEV__ === true, development-level warning are ON, performance optimizations are OFF
^C
Stopping packager...
Packager stopped.
acbc32a00421:react-native-tinder-swipe-cards jsheth$ ls
App.js		App.test.js	README.md	app.json	node_modules	package.json
acbc32a00421:react-native-tinder-swipe-cards jsheth$ vi App.js
acbc32a00421:react-native-tinder-swipe-cards jsheth$ exp start
[exp] Making sure project is set up correctly...
-[exp] Warning: Not using the Expo fork of react-native. See https://docs.expo.io/.
[exp] Your project looks good!
[exp] Using project at /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards
[exp] Warning: Not using the Expo fork of react-native. See https://docs.expo.io/.
[exp] Starting React Native packager...
[exp] Scanning 756 folders for symlinks in /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards/node_modules (7ms)
[exp] Loading dependency graph.
[exp] Running packager on port 19001.
[exp] Dependency graph loaded.
[exp] Expo is ready.
[exp] You can scan this QR code:

                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        

[exp] Your URL is

exp://zj-tp2.jaysheth.react-native-tinder-swipe-cards.exp.direct:80

[exp] Logs for your project will appear below. Press Ctrl+C to exit.
[exp] Warning: Not using the Expo fork of react-native. See https://docs.expo.io/.
[exp] Restarted watchman.
Building JavaScript bundle [=================================================================================== ] 99^C
Stopping packager...
Packager stopped.
acbc32a00421:react-native-tinder-swipe-cards jsheth$ ls
App.js		App.test.js	README.md	app.json	node_modules	package.json
acbc32a00421:react-native-tinder-swipe-cards jsheth$ pwd
/Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards
acbc32a00421:react-native-tinder-swipe-cards jsheth$ cd ..
acbc32a00421:react-native-tinder-swipe-cards jsheth$ ls
Defaults.js			SwipeCards.js			react-native-tinder-swipe-cards
LICENSE				npm-debug.log			screenshots
README.md			package.json
acbc32a00421:react-native-tinder-swipe-cards jsheth$ ls
Defaults.js			SwipeCards.js			react-native-tinder-swipe-cards
LICENSE				npm-debug.log			screenshots
README.md			package.json
acbc32a00421:react-native-tinder-swipe-cards jsheth$ pwd
/Users/jsheth/webdevcon/react-native-tinder-swipe-cards
acbc32a00421:react-native-tinder-swipe-cards jsheth$ cd react-native-tinder-swipe-cards/
acbc32a00421:react-native-tinder-swipe-cards jsheth$ ls
App.js		Defaults.js	SwipeCards.js	node_modules	screenshots
App.test.js	README.md	app.json	package.json
acbc32a00421:react-native-tinder-swipe-cards jsheth$ exp start
[exp] Making sure project is set up correctly...
\[exp] Warning: Can't find react-native in package.json dependencies
/[exp] Warning: 'clamp' dependency is not installed.
[exp] 
[exp] If there is an issue running your project, please run `npm install` in /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards and restart.
[exp] Your project looks good!
[exp] Using project at /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards
[exp] Warning: Can't find react-native in package.json dependencies
[exp] Warning: 'clamp' dependency is not installed.
[exp] 
[exp] If there is an issue running your project, please run `npm install` in /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards and restart.
[exp] Starting React Native packager...
[exp] Scanning 756 folders for symlinks in /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards/node_modules (11ms)
[exp] Loading dependency graph.
[exp] Running packager on port 19001.
[exp] Dependency graph loaded.
[exp] Expo is ready.
[exp] You can scan this QR code:

                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        

[exp] Your URL is

exp://zj-tp2.jaysheth.react-native-tinder-swipe-cards.exp.direct:80

[exp] Logs for your project will appear below. Press Ctrl+C to exit.
[exp] Finished building JavaScript bundle in 3218ms.
[exp] Warning: Can't find react-native in package.json dependencies
[exp] Finished building JavaScript bundle in 225ms.
[exp] Warning: 'clamp' dependency is not installed.
[exp] 
[exp] If there is an issue running your project, please run `npm install` in /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards and restart.
^C
Stopping packager...
Packager stopped.
acbc32a00421:react-native-tinder-swipe-cards jsheth$ npm install
react-native-swipe-cards@0.1.0 /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards
└── clamp@1.0.1 

npm WARN lottie-react-native@1.1.1 requires a peer of react@>=15.3.1 but none was installed.
npm WARN react-native-branch@2.0.0-beta.3 requires a peer of react@>=15.4.0 but none was installed.
npm WARN react-native-maps@0.15.2 requires a peer of react@>=15.4.0 but none was installed.
acbc32a00421:react-native-tinder-swipe-cards jsheth$ exp start
[exp] Making sure project is set up correctly...
\[exp] Warning: Can't find react-native in package.json dependencies
[exp] Your project looks good!
[exp] Using project at /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards
[exp] Warning: Can't find react-native in package.json dependencies
[exp] Starting React Native packager...
[exp] Scanning 757 folders for symlinks in /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/react-native-tinder-swipe-cards/node_modules (11ms)
[exp] Loading dependency graph.
[exp] Running packager on port 19001.
[exp] Dependency graph loaded.
[exp] Expo is ready.
[exp] You can scan this QR code:

                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        

[exp] Your URL is

exp://zj-tp2.jaysheth.react-native-tinder-swipe-cards.exp.direct:80

[exp] Logs for your project will appear below. Press Ctrl+C to exit.
[exp] Warning: Can't find react-native in package.json dependencies
[exp] Finished building JavaScript bundle in 1017ms.
^C
Stopping packager...
Packager stopped.
acbc32a00421:react-native-tinder-swipe-cards jsheth$ cd ..
acbc32a00421:react-native-tinder-swipe-cards jsheth$ cd ..
acbc32a00421:webdevcon jsheth$ ls
my-app						react-native-tinder-swipe-cards
node_modules					react-native-tinder-swipe-cards-master.zip
acbc32a00421:webdevcon jsheth$ cd..
-bash: cd..: command not found
acbc32a00421:webdevcon jsheth$ ls
my-app						react-native-tinder-swipe-cards
node_modules					react-native-tinder-swipe-cards-master.zip
acbc32a00421:webdevcon jsheth$ create-react-native-app grinder
Creating a new React Native app in /Users/jsheth/webdevcon/grinder.

Installing packages. This might take a couple minutes.
Installing react-native-scripts...

npm WARN deprecated @exponent/spawn-async@1.2.8: Please switch to @expo/spawn-async, the new name of this package. It's the same code with our new name.

> dtrace-provider@0.8.3 install /Users/jsheth/webdevcon/grinder/node_modules/dtrace-provider
> node scripts/install.js


> @exponent/ngrok@2.2.7 postinstall /Users/jsheth/webdevcon/grinder/node_modules/@exponent/ngrok
> node ./postinstall.js

ngrok - binary unpacked.
grinder@0.1.0 /Users/jsheth/webdevcon/grinder
└─┬ react-native-scripts@0.0.40 
  ├─┬ babel-runtime@6.23.0 
  │ ├── core-js@2.4.1 
  │ └── regenerator-runtime@0.10.5 
  ├─┬ chalk@1.1.3 
  │ ├── ansi-styles@2.2.1 
  │ ├── escape-string-regexp@1.0.5 
  │ ├─┬ has-ansi@2.0.0 
  │ │ └── ansi-regex@2.1.1 
  │ ├── strip-ansi@3.0.1 
  │ └── supports-color@2.0.0 
  ├─┬ cross-spawn@5.1.0 
  │ ├─┬ lru-cache@4.1.1 
  │ │ ├── pseudomap@1.0.2 
  │ │ └── yallist@2.1.2 
  │ ├─┬ shebang-command@1.2.0 
  │ │ └── shebang-regex@1.0.0 
  │ └─┬ which@1.2.14 
  │   └── isexe@2.0.0 
  ├─┬ fs-extra@3.0.1 
  │ ├── graceful-fs@4.1.11 
  │ ├── jsonfile@3.0.0 
  │ └── universalify@0.1.0 
  ├── indent-string@3.1.0 
  ├─┬ inquirer@3.1.1 
  │ ├── ansi-escapes@2.0.0 
  │ ├─┬ cli-cursor@2.1.0 
  │ │ └─┬ restore-cursor@2.0.0 
  │ │   ├─┬ onetime@2.0.1 
  │ │   │ └── mimic-fn@1.1.0 
  │ │   └── signal-exit@3.0.2 
  │ ├── cli-width@2.1.0 
  │ ├─┬ external-editor@2.0.4 
  │ │ ├── iconv-lite@0.4.18 
  │ │ ├── jschardet@1.4.2 
  │ │ └─┬ tmp@0.0.31 
  │ │   └── os-tmpdir@1.0.2 
  │ ├── figures@2.0.0 
  │ ├── lodash@4.17.4 
  │ ├── mute-stream@0.0.7 
  │ ├─┬ run-async@2.3.0 
  │ │ └── is-promise@2.1.0 
  │ ├── rx-lite@4.0.8 
  │ ├── rx-lite-aggregates@4.0.8 
  │ ├─┬ string-width@2.1.0 
  │ │ ├── is-fullwidth-code-point@2.0.0 
  │ │ └─┬ strip-ansi@4.0.0 
  │ │   └── ansi-regex@3.0.0 
  │ └── through@2.3.8 
  ├─┬ match-require@2.1.0 
  │ └── uuid@3.1.0 
  ├── minimist@1.2.0 
  ├── path-exists@3.0.0 
  ├── progress@2.0.0 
  ├── qrcode-terminal@0.11.0 
  ├── UNMET PEER DEPENDENCY react@16.0.0-alpha.12
  └─┬ xdl@42.0.0 
    ├─┬ @ccheever/crayon@5.0.0 
    │ ├── has-color@0.1.7 
    │ └─┬ strip-ansi@0.2.2 
    │   └── ansi-regex@0.1.0 
    ├─┬ @exponent/json-file@5.3.0 
    │ └── json5@0.5.1 
    ├─┬ @exponent/ngrok@2.2.7 
    │ ├── async@0.9.2 
    │ ├─┬ decompress-zip@0.3.0 
    │ │ ├─┬ binary@0.3.0 
    │ │ │ ├── buffers@0.1.1 
    │ │ │ └─┬ chainsaw@0.1.0 
    │ │ │   └── traverse@0.3.9 
    │ │ ├── mkpath@0.1.0 
    │ │ ├─┬ nopt@3.0.6 
    │ │ │ └── abbrev@1.1.0 
    │ │ ├── q@1.5.0 
    │ │ ├─┬ readable-stream@1.1.14 
    │ │ │ ├── isarray@0.0.1 
    │ │ │ └── string_decoder@0.10.31 
    │ │ └─┬ touch@0.0.3 
    │ │   └── nopt@1.0.10 
    │ └── lock@0.1.3 
    ├─┬ @exponent/node-auth0@2.6.0 
    │ ├── bluebird@2.11.0 
    │ ├─┬ rest-facade@1.5.0 
    │ │ ├── bluebird@2.11.0 
    │ │ └─┬ change-case@2.3.1 
    │ │   ├── camel-case@1.2.2 
    │ │   ├── constant-case@1.1.2 
    │ │   ├── dot-case@1.1.2 
    │ │   ├── is-lower-case@1.1.3 
    │ │   ├── is-upper-case@1.1.2 
    │ │   ├── lower-case@1.1.4 
    │ │   ├── lower-case-first@1.0.2 
    │ │   ├── param-case@1.1.2 
    │ │   ├── pascal-case@1.1.2 
    │ │   ├── path-case@1.1.2 
    │ │   ├── sentence-case@1.1.3 
    │ │   ├── snake-case@1.1.2 
    │ │   ├── swap-case@1.1.2 
    │ │   ├── title-case@1.1.2 
    │ │   ├── upper-case@1.1.3 
    │ │   └── upper-case-first@1.1.2 
    │ └── url-join@0.0.1 
    ├─┬ @exponent/osascript@1.6.4 
    │ └─┬ babel-runtime@5.8.38 
    │   └── core-js@1.2.7 
    ├─┬ @exponent/spawn-async@1.2.8 
    │ └── cross-spawn@4.0.2 
    ├─┬ analytics-node@2.4.1 
    │ ├─┬ @segment/loosely-validate-event@1.1.2 
    │ │ ├── component-type@1.2.1 
    │ │ └── join-component@1.1.0 
    │ ├── clone@2.1.1 
    │ ├─┬ commander@2.10.0 
    │ │ └── graceful-readlink@1.0.1 
    │ ├── crypto-token@1.0.1 
    │ ├── debug@2.6.8 
    │ ├── remove-trailing-slash@0.1.0 
    │ ├─┬ superagent@3.5.2 
    │ │ ├── component-emitter@1.2.1 
    │ │ ├── cookiejar@2.1.1 
    │ │ ├── formidable@1.1.1 
    │ │ ├── mime@1.3.6 
    │ │ └─┬ readable-stream@2.3.2 
    │ │   ├── isarray@1.0.0 
    │ │   └── string_decoder@1.0.3 
    │ └── superagent-retry@0.6.0 
    ├─┬ auth0-js@7.6.1 
    │ ├── Base64@0.1.4 
    │ ├── json-fallback@0.0.1 
    │ ├── jsonp@0.0.4 
    │ ├── qs@6.4.0 
    │ ├── reqwest@2.0.5 
    │ ├── trim@0.0.1 
    │ ├── winchan@0.1.4 
    │ └─┬ xtend@2.1.2 
    │   └── object-keys@0.4.0 
    ├─┬ axios@0.16.2 
    │ ├── follow-redirects@1.2.4 
    │ └── is-buffer@1.1.5 
    ├── bluebird@3.5.0 
    ├─┬ body-parser@1.17.2 
    │ ├── bytes@2.4.0 
    │ ├── content-type@1.0.2 
    │ ├── debug@2.6.7 
    │ ├── depd@1.1.0 
    │ ├── http-errors@1.6.1 
    │ ├── iconv-lite@0.4.15 
    │ ├─┬ on-finished@2.3.0 
    │ │ └── ee-first@1.1.1 
    │ ├─┬ raw-body@2.2.0 
    │ │ ├── iconv-lite@0.4.15 
    │ │ └── unpipe@1.0.0 
    │ └─┬ type-is@1.6.15 
    │   └── media-typer@0.3.0 
    ├─┬ bunyan@1.8.10 
    │ ├─┬ dtrace-provider@0.8.3 
    │ │ └── nan@2.6.2 
    │ ├── moment@2.18.1 
    │ ├── mv@2.1.1 
    │ └── safe-json-stringify@1.0.4 
    ├─┬ concat-stream@1.6.0 
    │ ├── inherits@2.0.3 
    │ ├─┬ readable-stream@2.3.2 
    │ │ ├── core-util-is@1.0.2 
    │ │ ├── isarray@1.0.0 
    │ │ ├── process-nextick-args@1.0.7 
    │ │ ├── string_decoder@1.0.3 
    │ │ └── util-deprecate@1.0.2 
    │ └── typedarray@0.0.6 
    ├─┬ decache@4.1.0 
    │ └── callsite@1.0.0 
    ├── delay-async@1.1.0 
    ├── es6-error@4.0.2 
    ├── exec-async@2.2.0 
    ├── exists-async@2.0.0 
    ├─┬ express@4.15.3 
    │ ├─┬ accepts@1.3.3 
    │ │ └── negotiator@0.6.1 
    │ ├── array-flatten@1.1.1 
    │ ├── content-disposition@0.5.2 
    │ ├── cookie@0.3.1 
    │ ├── cookie-signature@1.0.6 
    │ ├── debug@2.6.7 
    │ ├── encodeurl@1.0.1 
    │ ├── escape-html@1.0.3 
    │ ├── etag@1.8.0 
    │ ├─┬ finalhandler@1.0.3 
    │ │ └── debug@2.6.7 
    │ ├── fresh@0.5.0 
    │ ├── merge-descriptors@1.0.1 
    │ ├── methods@1.1.2 
    │ ├── parseurl@1.3.1 
    │ ├── path-to-regexp@0.1.7 
    │ ├─┬ proxy-addr@1.1.4 
    │ │ ├── forwarded@0.1.0 
    │ │ └── ipaddr.js@1.3.0 
    │ ├── range-parser@1.2.0 
    │ ├─┬ send@0.15.3 
    │ │ ├── debug@2.6.7 
    │ │ ├── destroy@1.0.4 
    │ │ └── mime@1.3.4 
    │ ├── serve-static@1.12.3 
    │ ├── setprototypeof@1.0.3 
    │ ├── statuses@1.3.1 
    │ ├── utils-merge@1.0.0 
    │ └── vary@1.1.1 
    ├── file-type@4.4.0 
    ├─┬ form-data@2.2.0 
    │ ├── asynckit@0.4.0 
    │ ├─┬ combined-stream@1.0.5 
    │ │ └── delayed-stream@1.0.0 
    │ └─┬ mime-types@2.1.15 
    │   └── mime-db@1.27.0 
    ├── freeport-async@1.1.1 
    ├─┬ fs-extra@0.30.0 
    │ ├── klaw@1.3.1 
    │ └─┬ rimraf@2.4.5 
    │   └── glob@6.0.4 
    ├─┬ glob@7.1.2 
    │ ├── fs.realpath@1.0.0 
    │ ├─┬ inflight@1.0.6 
    │ │ └── wrappy@1.0.2 
    │ ├─┬ minimatch@3.0.4 
    │ │ └─┬ brace-expansion@1.1.8 
    │ │   ├── balanced-match@1.0.0 
    │ │   └── concat-map@0.0.1 
    │ ├── once@1.4.0 
    │ └── path-is-absolute@1.0.1 
    ├─┬ hasbin@1.2.3 
    │ └── async@1.5.2 
    ├── home-dir@1.0.0 
    ├── instapromise@2.0.7-rc.1 
    ├── ip@1.1.5 
    ├─┬ joi@10.6.0 
    │ ├── hoek@4.1.1 
    │ ├── isemail@2.2.1 
    │ ├── items@2.1.1 
    │ └─┬ topo@2.0.2 
    │   └── hoek@4.1.1 
    ├── jsonfile@2.4.0 
    ├── jsonschema@1.1.1 
    ├─┬ jsonwebtoken@7.4.1 
    │ ├─┬ joi@6.10.1 
    │ │ ├── hoek@2.16.3 
    │ │ ├── isemail@1.2.0 
    │ │ └── topo@1.1.0 
    │ ├─┬ jws@3.1.4 
    │ │ ├── base64url@2.0.0 
    │ │ └─┬ jwa@1.1.5 
    │ │   ├── buffer-equal-constant-time@1.0.1 
    │ │   └── ecdsa-sig-formatter@1.0.9 
    │ ├── lodash.once@4.1.1 
    │ ├── ms@2.0.0 
    │ └── xtend@4.0.1 
    ├── md5hex@1.0.0 
    ├─┬ mkdirp@0.5.1 
    │ └── minimist@0.0.8 
    ├── mkdirp-promise@5.0.1 
    ├─┬ mz@2.6.0 
    │ ├── any-promise@1.3.0 
    │ ├── object-assign@4.1.1 
    │ └─┬ thenify-all@1.6.0 
    │   └── thenify@3.3.0 
    ├── ncp@2.0.0 
    ├─┬ opn@4.0.2 
    │ └─┬ pinkie-promise@2.0.1 
    │   └── pinkie@2.0.4 
    ├── promise-props@1.0.0 
    ├── querystring@0.2.0 
    ├── UNMET PEER DEPENDENCY react@^0.14.0 || ^15.0.0-0 || ^16.0.0-0
    ├─┬ react-redux@5.0.5 
    │ ├─┬ create-react-class@15.6.0 
    │ │ └─┬ fbjs@0.8.12 
    │ │   ├── core-js@1.2.7 
    │ │   ├─┬ isomorphic-fetch@2.2.1 
    │ │   │ ├─┬ node-fetch@1.7.1 
    │ │   │ │ ├── encoding@0.1.12 
    │ │   │ │ └── is-stream@1.1.0 
    │ │   │ └── whatwg-fetch@2.0.3 
    │ │   ├─┬ promise@7.3.1 
    │ │   │ └── asap@2.0.5 
    │ │   ├── setimmediate@1.0.5 
    │ │   └── ua-parser-js@0.7.13 
    │ ├── hoist-non-react-statics@1.2.0 
    │ ├── invariant@2.2.2 
    │ ├── lodash-es@4.17.4 
    │ ├─┬ loose-envify@1.3.1 
    │ │ └── js-tokens@3.0.1 
    │ └── prop-types@15.5.10 
    ├─┬ read-chunk@2.0.0 
    │ └── pify@2.3.0 
    ├─┬ redux@3.7.1 
    │ └── symbol-observable@1.0.4 
    ├─┬ redux-logger@2.10.2 
    │ └── deep-diff@0.3.4 
    ├─┬ request@2.81.0 
    │ ├── aws-sign2@0.6.0 
    │ ├── aws4@1.6.0 
    │ ├── caseless@0.12.0 
    │ ├── extend@3.0.1 
    │ ├── forever-agent@0.6.1 
    │ ├── form-data@2.1.4 
    │ ├─┬ har-validator@4.2.1 
    │ │ ├─┬ ajv@4.11.8 
    │ │ │ ├── co@4.6.0 
    │ │ │ └─┬ json-stable-stringify@1.0.1 
    │ │ │   └── jsonify@0.0.0 
    │ │ └── har-schema@1.0.5 
    │ ├─┬ hawk@3.1.3 
    │ │ ├── boom@2.10.1 
    │ │ ├── cryptiles@2.0.5 
    │ │ └── sntp@1.0.9 
    │ ├─┬ http-signature@1.1.1 
    │ │ ├── assert-plus@0.2.0 
    │ │ ├─┬ jsprim@1.4.0 
    │ │ │ ├── assert-plus@1.0.0 
    │ │ │ ├── extsprintf@1.0.2 
    │ │ │ ├── json-schema@0.2.3 
    │ │ │ └── verror@1.3.6 
    │ │ └─┬ sshpk@1.13.1 
    │ │   ├── asn1@0.2.3 
    │ │   ├── assert-plus@1.0.0 
    │ │   ├── bcrypt-pbkdf@1.0.1 
    │ │   ├─┬ dashdash@1.14.1 
    │ │   │ └── assert-plus@1.0.0 
    │ │   ├── ecc-jsbn@0.1.1 
    │ │   ├─┬ getpass@0.1.7 
    │ │   │ └── assert-plus@1.0.0 
    │ │   ├── jsbn@0.1.1 
    │ │   └── tweetnacl@0.14.5 
    │ ├── is-typedarray@1.0.0 
    │ ├── isstream@0.1.2 
    │ ├── json-stringify-safe@5.0.1 
    │ ├── oauth-sign@0.8.2 
    │ ├── performance-now@0.2.0 
    │ ├── safe-buffer@5.1.1 
    │ ├── stringstream@0.0.5 
    │ ├─┬ tough-cookie@2.3.2 
    │ │ └── punycode@1.4.1 
    │ └── tunnel-agent@0.6.0 
    ├─┬ request-progress@3.0.0 
    │ └── throttleit@1.0.0 
    ├── semver@5.3.0 
    ├─┬ slugid@1.1.0 
    │ └── uuid@2.0.3 
    ├── slugify@1.1.0 
    ├─┬ source-map-support@0.4.15 
    │ └── source-map@0.5.6 
    ├─┬ tar.gz@1.0.5 
    │ ├── bluebird@2.11.0 
    │ ├── fstream@1.0.11 
    │ ├── mout@0.11.1 
    │ └─┬ tar@2.2.1 
    │   └── block-stream@0.0.9 
    ├── tree-kill@1.1.0 
    ├─┬ url@0.11.0 
    │ └── punycode@1.3.2 
    ├── xhr2@0.1.4 
    └── yesno@0.0.1 

npm WARN xdl@42.0.0 requires a peer of react@16.0.0-alpha.12 but none was installed.
npm WARN react-redux@5.0.5 requires a peer of react@^0.14.0 || ^15.0.0-0 || ^16.0.0-0 but none was installed.
Installing dependencies using npm...

grinder@0.1.0 /Users/jsheth/webdevcon/grinder
├─┬ expo@18.0.4 
│ ├─┬ @expo/vector-icons@5.0.0 
│ │ └── react-native-vector-icons@4.1.1 
│ ├─┬ babel-preset-airbnb@2.3.3 
│ │ ├─┬ babel-plugin-transform-es2015-modules-commonjs@6.24.1 
│ │ │ └── babel-plugin-transform-strict-mode@6.24.1 
│ │ ├── babel-plugin-transform-es2015-template-literals@6.22.0 
│ │ ├── babel-plugin-transform-es3-member-expression-literals@6.22.0 
│ │ ├── babel-plugin-transform-es3-property-literals@6.22.0 
│ │ ├─┬ babel-plugin-transform-exponentiation-operator@6.24.1 
│ │ │ ├─┬ babel-helper-builder-binary-assignment-operator-visitor@6.24.1 
│ │ │ │ └── babel-helper-explode-assignable-expression@6.24.1 
│ │ │ └── babel-plugin-syntax-exponentiation-operator@6.13.0 
│ │ ├── babel-plugin-transform-jscript@6.22.0 
│ │ ├─┬ babel-preset-env@1.5.2 
│ │ │ ├── babel-plugin-transform-async-to-generator@6.24.1 
│ │ │ ├── babel-plugin-transform-es2015-duplicate-keys@6.24.1 
│ │ │ ├── babel-plugin-transform-es2015-modules-amd@6.24.1 
│ │ │ ├─┬ babel-plugin-transform-es2015-modules-systemjs@6.24.1 
│ │ │ │ └── babel-helper-hoist-variables@6.24.1 
│ │ │ ├── babel-plugin-transform-es2015-modules-umd@6.24.1 
│ │ │ ├── babel-plugin-transform-es2015-typeof-symbol@6.23.0 
│ │ │ └─┬ browserslist@2.1.5 
│ │ │   ├── caniuse-lite@1.0.30000696 
│ │ │   └── electron-to-chromium@1.3.14 
│ │ ├─┬ babel-preset-react@6.24.1 
│ │ │ ├── babel-plugin-transform-react-jsx-self@6.22.0 
│ │ │ └── babel-preset-flow@6.23.0 
│ │ └─┬ object.assign@4.0.4 
│ │   ├─┬ define-properties@1.1.2 
│ │   │ ├── foreach@2.0.5 
│ │   │ └── object-keys@1.0.11 
│ │   ├── function-bind@1.1.0 
│ │   └── object-keys@1.0.11 
│ ├─┬ babel-preset-expo@2.0.0 
│ │ ├─┬ babel-plugin-module-resolver@2.5.0 
│ │ │ ├── find-babel-config@1.1.0 
│ │ │ └─┬ resolve@1.3.3 
│ │ │   └── path-parse@1.0.5 
│ │ ├─┬ babel-plugin-transform-decorators-legacy@1.3.4 
│ │ │ └── babel-plugin-syntax-decorators@6.13.0 
│ │ └─┬ babel-preset-react-native-stage-0@1.0.1 
│ │   ├─┬ babel-plugin-transform-class-constructor-call@6.24.1 
│ │   │ └── babel-plugin-syntax-class-constructor-call@6.18.0 
│ │   ├─┬ babel-plugin-transform-do-expressions@6.22.0 
│ │   │ └── babel-plugin-syntax-do-expressions@6.13.0 
│ │   ├─┬ babel-plugin-transform-export-extensions@6.22.0 
│ │   │ └── babel-plugin-syntax-export-extensions@6.13.0 
│ │   └─┬ babel-plugin-transform-function-bind@6.22.0 
│ │     └── babel-plugin-syntax-function-bind@6.13.0 
│ ├── fbemitter@2.1.1 
│ ├── lodash.map@4.6.0 
│ ├── lodash.zipobject@4.1.3 
│ ├─┬ lottie-react-native@1.1.1 
│ │ ├── lottie-ios@1.5.2 
│ │ └─┬ react-native-safe-module@1.2.0 
│ │   └── dedent@0.6.0 
│ ├── md5-file@3.1.1 
│ ├─┬ pretty-format@20.0.3 
│ │ └─┬ ansi-styles@3.1.0 
│ │   └─┬ color-convert@1.9.0 
│ │     └── color-name@1.1.2 
│ ├── UNMET PEER DEPENDENCY react@>=15.3.1
│ ├── react-native-branch@2.0.0-beta.3 
│ ├─┬ react-native-fbads@4.1.0 
│ │ └── eventemitter3@2.0.3 
│ ├── react-native-maps@0.15.2 
│ ├─┬ react-native-svg@5.2.0 
│ │ └─┬ color@0.11.4 
│ │   ├── clone@1.0.2 
│ │   └── color-string@0.3.0 
│ ├── uuid-js@0.7.5 
│ └─┬ websql@0.4.4  (git://github.com/expo/node-websql.git#e364fa65146a9e2157a19e5c719e7702c2b6b87a)
│   ├── argsarray@0.0.1 
│   ├── immediate@3.2.3 
│   ├── noop-fn@1.0.0 
│   ├── pouchdb-collections@1.0.1 
│   └── tiny-queue@0.2.1 
├─┬ jest-expo@18.0.0 
│ ├─┬ babel-jest@19.0.0 
│ │ ├─┬ babel-plugin-istanbul@4.1.4 
│ │ │ ├─┬ find-up@2.1.0 
│ │ │ │ └─┬ locate-path@2.0.0 
│ │ │ │   └─┬ p-locate@2.0.0 
│ │ │ │     └── p-limit@1.1.0 
│ │ │ ├── istanbul-lib-instrument@1.7.3 
│ │ │ └─┬ test-exclude@4.1.1 
│ │ │   └── arrify@1.0.1 
│ │ └─┬ babel-preset-jest@19.0.0 
│ │   └── babel-plugin-jest-hoist@19.0.0 
│ ├─┬ jest@19.0.2 
│ │ └─┬ jest-cli@19.0.2 
│ │   ├── ansi-escapes@1.4.0 
│ │   ├── callsites@2.0.0 
│ │   ├─┬ is-ci@1.0.10 
│ │   │ └── ci-info@1.0.0 
│ │   ├─┬ istanbul-api@1.1.10 
│ │   │ ├── async@2.5.0 
│ │   │ ├── fileset@2.0.3 
│ │   │ ├─┬ istanbul-lib-hook@1.0.7 
│ │   │ │ └─┬ append-transform@0.4.0 
│ │   │ │   └── default-require-extensions@1.0.0 
│ │   │ ├─┬ istanbul-lib-report@1.1.1 
│ │   │ │ └─┬ supports-color@3.2.3 
│ │   │ │   └── has-flag@1.0.0 
│ │   │ ├─┬ istanbul-lib-source-maps@1.2.1 
│ │   │ │ └── rimraf@2.6.1 
│ │   │ ├─┬ istanbul-reports@1.1.1 
│ │   │ │ └─┬ handlebars@4.0.10 
│ │   │ │   ├── async@1.5.2 
│ │   │ │   └─┬ source-map@0.4.4 
│ │   │ │     └── amdefine@1.0.1 
│ │   │ └─┬ js-yaml@3.8.4 
│ │   │   ├─┬ argparse@1.0.9 
│ │   │   │ └── sprintf-js@1.0.3 
│ │   │   └── esprima@3.1.3 
│ │   ├── istanbul-lib-coverage@1.1.1 
│ │   ├── jest-changed-files@19.0.2 
│ │   ├─┬ jest-environment-jsdom@19.0.2 
│ │   │ └─┬ jsdom@9.12.0 
│ │   │   ├── abab@1.0.3 
│ │   │   ├── acorn@4.0.13 
│ │   │   ├── acorn-globals@3.1.0 
│ │   │   ├── array-equal@1.0.0 
│ │   │   ├── content-type-parser@1.0.1 
│ │   │   ├── cssom@0.3.2 
│ │   │   ├── cssstyle@0.2.37 
│ │   │   ├─┬ escodegen@1.8.1 
│ │   │   │ ├── esprima@2.7.3 
│ │   │   │ ├── estraverse@1.9.3 
│ │   │   │ ├─┬ optionator@0.8.2 
│ │   │   │ │ ├── deep-is@0.1.3 
│ │   │   │ │ ├── fast-levenshtein@2.0.6 
│ │   │   │ │ ├── levn@0.3.0 
│ │   │   │ │ ├── prelude-ls@1.1.2 
│ │   │   │ │ └── type-check@0.3.2 
│ │   │   │ └── source-map@0.2.0 
│ │   │   ├── html-encoding-sniffer@1.0.1 
│ │   │   ├── nwmatcher@1.4.1 
│ │   │   ├── parse5@1.5.1 
│ │   │   ├── sax@1.2.4 
│ │   │   ├── symbol-tree@3.2.2 
│ │   │   ├── webidl-conversions@4.0.1 
│ │   │   ├─┬ whatwg-encoding@1.0.1 
│ │   │   │ └── iconv-lite@0.4.13 
│ │   │   ├─┬ whatwg-url@4.8.0 
│ │   │   │ ├── tr46@0.0.3 
│ │   │   │ └── webidl-conversions@3.0.1 
│ │   │   └── xml-name-validator@2.0.1 
│ │   ├─┬ jest-haste-map@19.0.2 
│ │   │ └─┬ sane@1.5.0 
│ │   │   └─┬ fb-watchman@1.9.2 
│ │   │     └── bser@1.0.2 
│ │   ├─┬ jest-jasmine2@19.0.2 
│ │   │ ├─┬ jest-matcher-utils@19.0.0 
│ │   │ │ └─┬ pretty-format@19.0.0 
│ │   │ │   └── ansi-styles@3.1.0 
│ │   │ └── jest-matchers@19.0.0 
│ │   ├── jest-message-util@19.0.0 
│ │   ├── jest-resolve-dependencies@19.0.0 
│ │   ├─┬ jest-snapshot@19.0.2 
│ │   │ ├─┬ jest-diff@19.0.0 
│ │   │ │ ├── diff@3.2.0 
│ │   │ │ └─┬ pretty-format@19.0.0 
│ │   │ │   └── ansi-styles@3.1.0 
│ │   │ ├── natural-compare@1.4.0 
│ │   │ └─┬ pretty-format@19.0.0 
│ │   │   └── ansi-styles@3.1.0 
│ │   ├─┬ node-notifier@5.1.2 
│ │   │ ├── growly@1.3.0 
│ │   │ └── shellwords@0.1.0 
│ │   └── string-length@1.0.1 
│ ├─┬ jest-repl@19.0.2 
│ │ ├─┬ jest-util@19.0.2 
│ │ │ ├── jest-mock@19.0.0 
│ │ │ ├─┬ jest-validate@19.0.2 
│ │ │ │ └─┬ pretty-format@19.0.0 
│ │ │ │   └── ansi-styles@3.1.0 
│ │ │ └── leven@2.1.0 
│ │ └── repl@0.1.3 
│ └─┬ jest-runtime@19.0.4 
│   ├─┬ jest-config@19.0.4 
│   │ ├── jest-environment-node@19.0.2 
│   │ └─┬ pretty-format@19.0.0 
│   │   └── ansi-styles@3.1.0 
│   ├── jest-file-exists@19.0.0 
│   ├─┬ jest-haste-map@19.0.2 
│   │ └─┬ sane@1.5.0 
│   │   └─┬ fb-watchman@1.9.2 
│   │     └── bser@1.0.2 
│   ├── jest-regex-util@19.0.0 
│   ├─┬ jest-resolve@19.0.2 
│   │ ├─┬ browser-resolve@1.11.2 
│   │ │ └── resolve@1.1.7 
│   │ └─┬ jest-haste-map@19.0.2 
│   │   └─┬ sane@1.5.0 
│   │     └─┬ fb-watchman@1.9.2 
│   │       └── bser@1.0.2 
│   ├─┬ micromatch@2.3.11 
│   │ ├─┬ arr-diff@2.0.0 
│   │ │ └── arr-flatten@1.0.3 
│   │ ├── array-unique@0.2.1 
│   │ ├─┬ braces@1.8.5 
│   │ │ ├─┬ expand-range@1.8.2 
│   │ │ │ └─┬ fill-range@2.2.3 
│   │ │ │   ├── is-number@2.1.0 
│   │ │ │   ├─┬ isobject@2.1.0 
│   │ │ │   │ └── isarray@1.0.0 
│   │ │ │   ├─┬ randomatic@1.1.7 
│   │ │ │   │ ├─┬ is-number@3.0.0 
│   │ │ │   │ │ └── kind-of@3.2.2 
│   │ │ │   │ └── kind-of@4.0.0 
│   │ │ │   └── repeat-string@1.6.1 
│   │ │ ├── preserve@0.2.0 
│   │ │ └── repeat-element@1.1.2 
│   │ ├─┬ expand-brackets@0.1.5 
│   │ │ └── is-posix-bracket@0.1.1 
│   │ ├── extglob@0.3.2 
│   │ ├── filename-regex@2.0.1 
│   │ ├── is-extglob@1.0.0 
│   │ ├── is-glob@2.0.1 
│   │ ├── kind-of@3.2.2 
│   │ ├─┬ normalize-path@2.1.1 
│   │ │ └── remove-trailing-separator@1.0.2 
│   │ ├─┬ object.omit@2.0.1 
│   │ │ ├─┬ for-own@0.1.5 
│   │ │ │ └── for-in@1.0.2 
│   │ │ └── is-extendable@0.1.1 
│   │ ├─┬ parse-glob@3.0.4 
│   │ │ ├─┬ glob-base@0.3.0 
│   │ │ │ └── glob-parent@2.0.0 
│   │ │ └── is-dotfile@1.0.3 
│   │ └─┬ regex-cache@0.4.3 
│   │   ├── is-equal-shallow@0.1.3 
│   │   └── is-primitive@2.0.0 
│   └── strip-bom@3.0.0 
├── react@16.0.0-alpha.12 
├─┬ react-native@0.45.1 
│ ├── absolute-path@0.0.0 
│ ├── art@0.10.1 
│ ├── async@2.5.0 
│ ├─┬ babel-core@6.25.0 
│ │ ├── babel-code-frame@6.22.0 
│ │ ├── babel-helpers@6.24.1 
│ │ ├── babel-messages@6.23.0 
│ │ ├── babel-template@6.25.0 
│ │ ├── convert-source-map@1.5.0 
│ │ ├── private@0.1.7 
│ │ └── slash@1.0.0 
│ ├─┬ babel-generator@6.25.0 
│ │ ├─┬ detect-indent@4.0.0 
│ │ │ └─┬ repeating@2.0.1 
│ │ │   └── is-finite@1.0.2 
│ │ ├── jsesc@1.3.0 
│ │ └── trim-right@1.0.1 
│ ├── babel-plugin-external-helpers@6.22.0 
│ ├── babel-plugin-syntax-trailing-function-commas@6.22.0 
│ ├─┬ babel-plugin-transform-async-to-generator@6.16.0 
│ │ └── babel-helper-remap-async-to-generator@6.24.1 
│ ├─┬ babel-plugin-transform-flow-strip-types@6.22.0 
│ │ └── babel-plugin-syntax-flow@6.18.0 
│ ├─┬ babel-plugin-transform-object-rest-spread@6.23.0 
│ │ └── babel-plugin-syntax-object-rest-spread@6.13.0 
│ ├── babel-polyfill@6.23.0 
│ ├─┬ babel-preset-es2015-node@6.1.1 
│ │ ├── babel-plugin-transform-es2015-destructuring@6.23.0 
│ │ ├─┬ babel-plugin-transform-es2015-function-name@6.24.1 
│ │ │ └── babel-helper-function-name@6.24.1 
│ │ ├─┬ babel-plugin-transform-es2015-parameters@6.24.1 
│ │ │ ├── babel-helper-call-delegate@6.24.1 
│ │ │ └── babel-helper-get-function-arity@6.24.1 
│ │ ├── babel-plugin-transform-es2015-shorthand-properties@6.24.1 
│ │ ├── babel-plugin-transform-es2015-spread@6.22.0 
│ │ ├─┬ babel-plugin-transform-es2015-sticky-regex@6.24.1 
│ │ │ └── babel-helper-regex@6.24.1 
│ │ └─┬ babel-plugin-transform-es2015-unicode-regex@6.24.1 
│ │   └─┬ regexpu-core@2.0.0 
│ │     ├── regenerate@1.3.2 
│ │     ├── regjsgen@0.2.0 
│ │     └─┬ regjsparser@0.1.5 
│ │       └── jsesc@0.5.0 
│ ├─┬ babel-preset-fbjs@2.1.4 
│ │ ├── babel-plugin-check-es2015-constants@6.22.0 
│ │ ├── babel-plugin-syntax-class-properties@6.13.0 
│ │ ├── babel-plugin-syntax-jsx@6.18.0 
│ │ ├── babel-plugin-transform-class-properties@6.24.1 
│ │ ├── babel-plugin-transform-es2015-arrow-functions@6.22.0 
│ │ ├── babel-plugin-transform-es2015-block-scoped-functions@6.22.0 
│ │ ├── babel-plugin-transform-es2015-block-scoping@6.24.1 
│ │ ├─┬ babel-plugin-transform-es2015-classes@6.24.1 
│ │ │ ├── babel-helper-define-map@6.24.1 
│ │ │ ├── babel-helper-optimise-call-expression@6.24.1 
│ │ │ └── babel-helper-replace-supers@6.24.1 
│ │ ├── babel-plugin-transform-es2015-computed-properties@6.24.1 
│ │ ├── babel-plugin-transform-es2015-for-of@6.23.0 
│ │ ├── babel-plugin-transform-es2015-literals@6.22.0 
│ │ ├── babel-plugin-transform-es2015-object-super@6.24.1 
│ │ ├── babel-plugin-transform-react-display-name@6.25.0 
│ │ └─┬ babel-plugin-transform-react-jsx@6.24.1 
│ │   └── babel-helper-builder-react-jsx@6.24.1 
│ ├─┬ babel-preset-react-native@1.9.2 
│ │ ├── babel-plugin-react-transform@2.0.2 
│ │ ├── babel-plugin-syntax-async-functions@6.13.0 
│ │ ├── babel-plugin-transform-object-assign@6.22.0 
│ │ ├── babel-plugin-transform-react-jsx-source@6.22.0 
│ │ └─┬ babel-plugin-transform-regenerator@6.24.1 
│ │   └── regenerator-transform@0.9.11 
│ ├─┬ babel-register@6.24.1 
│ │ └─┬ home-or-tmp@2.0.0 
│ │   └── os-homedir@1.0.2 
│ ├─┬ babel-traverse@6.25.0 
│ │ └── globals@9.18.0 
│ ├─┬ babel-types@6.25.0 
│ │ ├── esutils@2.0.2 
│ │ └── to-fast-properties@1.0.3 
│ ├── babylon@6.17.4 
│ ├── base64-js@1.2.1 
│ ├─┬ bser@1.0.3 
│ │ └── node-int64@0.4.0 
│ ├─┬ connect@2.30.2 
│ │ ├── basic-auth-connect@1.0.0 
│ │ ├─┬ body-parser@1.13.3 
│ │ │ ├── iconv-lite@0.4.11 
│ │ │ └─┬ raw-body@2.1.7 
│ │ │   ├── bytes@2.4.0 
│ │ │   └── iconv-lite@0.4.13 
│ │ ├── bytes@2.1.0 
│ │ ├─┬ compression@1.5.2 
│ │ │ ├─┬ accepts@1.2.13 
│ │ │ │ └── negotiator@0.5.3 
│ │ │ ├── bytes@2.1.0 
│ │ │ ├── compressible@2.0.10 
│ │ │ ├─┬ debug@2.2.0 
│ │ │ │ └── ms@0.7.1 
│ │ │ └── vary@1.0.1 
│ │ ├─┬ connect-timeout@1.6.2 
│ │ │ ├── debug@2.2.0 
│ │ │ ├── http-errors@1.3.1 
│ │ │ └── ms@0.7.1 
│ │ ├── cookie@0.1.3 
│ │ ├─┬ cookie-parser@1.3.5 
│ │ │ └── cookie@0.1.3 
│ │ ├─┬ csurf@1.8.3 
│ │ │ ├── cookie@0.1.3 
│ │ │ ├─┬ csrf@3.0.6 
│ │ │ │ ├── rndm@1.2.0 
│ │ │ │ ├── tsscmp@1.0.5 
│ │ │ │ └─┬ uid-safe@2.1.4 
│ │ │ │   └── random-bytes@1.0.0 
│ │ │ └── http-errors@1.3.1 
│ │ ├─┬ debug@2.2.0 
│ │ │ └── ms@0.7.1 
│ │ ├── depd@1.0.1 
│ │ ├── errorhandler@1.4.3 
│ │ ├─┬ express-session@1.11.3 
│ │ │ ├── cookie@0.1.3 
│ │ │ ├── crc@3.3.0 
│ │ │ ├─┬ debug@2.2.0 
│ │ │ │ └── ms@0.7.1 
│ │ │ ├── depd@1.0.1 
│ │ │ └─┬ uid-safe@2.0.0 
│ │ │   └── base64-url@1.2.1 
│ │ ├─┬ finalhandler@0.4.0 
│ │ │ └── escape-html@1.0.2 
│ │ ├── fresh@0.3.0 
│ │ ├── http-errors@1.3.1 
│ │ ├── method-override@2.3.9 
│ │ ├─┬ morgan@1.6.1 
│ │ │ ├── basic-auth@1.0.4 
│ │ │ ├─┬ debug@2.2.0 
│ │ │ │ └── ms@0.7.1 
│ │ │ └── depd@1.0.1 
│ │ ├─┬ multiparty@3.3.2 
│ │ │ └── stream-counter@0.2.0 
│ │ ├── on-headers@1.0.1 
│ │ ├── pause@0.1.0 
│ │ ├── qs@4.0.0 
│ │ ├── response-time@2.3.2 
│ │ ├─┬ serve-favicon@2.3.2 
│ │ │ ├── etag@1.7.0 
│ │ │ ├── fresh@0.3.0 
│ │ │ └── ms@0.7.2 
│ │ ├─┬ serve-index@1.7.3 
│ │ │ ├─┬ accepts@1.2.13 
│ │ │ │ └── negotiator@0.5.3 
│ │ │ ├── batch@0.5.3 
│ │ │ ├─┬ debug@2.2.0 
│ │ │ │ └── ms@0.7.1 
│ │ │ └── http-errors@1.3.1 
│ │ ├─┬ serve-static@1.10.3 
│ │ │ ├── escape-html@1.0.3 
│ │ │ └─┬ send@0.13.2 
│ │ │   ├── depd@1.1.0 
│ │ │   ├── escape-html@1.0.3 
│ │ │   ├── etag@1.7.0 
│ │ │   ├── mime@1.3.4 
│ │ │   ├── range-parser@1.0.3 
│ │ │   └── statuses@1.2.1 
│ │ └── vhost@3.0.2 
│ ├── denodeify@1.2.1 
│ ├─┬ errno@0.1.4 
│ │ └── prr@0.0.0 
│ ├── event-target-shim@1.1.1 
│ ├─┬ fbjs-scripts@0.7.1 
│ │ ├── babel-preset-fbjs@1.0.0 
│ │ ├── core-js@1.2.7 
│ │ ├── cross-spawn@3.0.1 
│ │ ├─┬ gulp-util@3.0.8 
│ │ │ ├── array-differ@1.0.0 
│ │ │ ├── array-uniq@1.0.3 
│ │ │ ├── beeper@1.1.1 
│ │ │ ├── dateformat@2.0.0 
│ │ │ ├─┬ fancy-log@1.3.0 
│ │ │ │ └── time-stamp@1.1.0 
│ │ │ ├─┬ gulplog@1.0.0 
│ │ │ │ └── glogg@1.0.0 
│ │ │ ├─┬ has-gulplog@0.1.0 
│ │ │ │ └── sparkles@1.0.0 
│ │ │ ├── lodash._reescape@3.0.0 
│ │ │ ├── lodash._reevaluate@3.0.0 
│ │ │ ├── lodash._reinterpolate@3.0.0 
│ │ │ ├─┬ lodash.template@3.6.2 
│ │ │ │ ├── lodash._basecopy@3.0.1 
│ │ │ │ ├── lodash._basetostring@3.0.1 
│ │ │ │ ├── lodash._basevalues@3.0.0 
│ │ │ │ ├── lodash._isiterateecall@3.0.9 
│ │ │ │ ├─┬ lodash.escape@3.2.0 
│ │ │ │ │ └── lodash._root@3.0.1 
│ │ │ │ ├─┬ lodash.keys@3.1.2 
│ │ │ │ │ ├── lodash._getnative@3.9.1 
│ │ │ │ │ ├── lodash.isarguments@3.1.0 
│ │ │ │ │ └── lodash.isarray@3.0.4 
│ │ │ │ ├── lodash.restparam@3.6.1 
│ │ │ │ └── lodash.templatesettings@3.1.1 
│ │ │ ├─┬ multipipe@0.1.2 
│ │ │ │ └── duplexer2@0.0.2 
│ │ │ ├── object-assign@3.0.0 
│ │ │ ├── replace-ext@0.0.1 
│ │ │ └─┬ vinyl@0.5.3 
│ │ │   ├── clone@1.0.2 
│ │ │   └── clone-stats@0.0.1 
│ │ └─┬ through2@2.0.3 
│ │   ├─┬ readable-stream@2.3.2 
│ │   │ ├── isarray@1.0.0 
│ │   │ └── string_decoder@1.0.3 
│ │   └── xtend@4.0.1 
│ ├─┬ fs-extra@1.0.0 
│ │ └── jsonfile@2.4.0 
│ ├── image-size@0.3.5 
│ ├─┬ inquirer@0.12.0 
│ │ ├── ansi-escapes@1.4.0 
│ │ ├─┬ cli-cursor@1.0.2 
│ │ │ └─┬ restore-cursor@1.0.1 
│ │ │   ├── exit-hook@1.1.1 
│ │ │   └── onetime@1.1.0 
│ │ ├── figures@1.7.0 
│ │ ├─┬ readline2@1.0.1 
│ │ │ ├── is-fullwidth-code-point@1.0.0 
│ │ │ └── mute-stream@0.0.5 
│ │ ├── run-async@0.1.0 
│ │ ├── rx-lite@3.1.2 
│ │ └─┬ string-width@1.0.2 
│ │   ├── code-point-at@1.1.0 
│ │   └─┬ is-fullwidth-code-point@1.0.0 
│ │     └── number-is-nan@1.0.1 
│ ├─┬ jest-haste-map@20.0.4 
│ │ ├─┬ fb-watchman@2.0.0 
│ │ │ └── bser@2.0.0 
│ │ ├── jest-docblock@20.0.3 
│ │ ├─┬ sane@1.6.0 
│ │ │ ├── anymatch@1.3.0 
│ │ │ └─┬ fb-watchman@1.9.2 
│ │ │   └── bser@1.0.2 
│ │ └─┬ worker-farm@1.3.1 
│ │   └── xtend@4.0.1 
│ ├─┬ joi@6.10.1 
│ │ ├── isemail@1.2.0 
│ │ └── topo@1.1.0 
│ ├── json5@0.4.0 
│ ├── left-pad@1.1.3 
│ ├─┬ merge-stream@1.0.1 
│ │ └─┬ readable-stream@2.3.2 
│ │   ├── isarray@1.0.0 
│ │   └── string_decoder@1.0.3 
│ ├─┬ mime-types@2.1.11 
│ │ └── mime-db@1.23.0 
│ ├─┬ npmlog@2.0.4 
│ │ ├── ansi@0.3.1 
│ │ ├─┬ are-we-there-yet@1.1.4 
│ │ │ ├── delegates@1.0.0 
│ │ │ └─┬ readable-stream@2.3.2 
│ │ │   ├── isarray@1.0.0 
│ │ │   └── string_decoder@1.0.3 
│ │ └─┬ gauge@1.2.7 
│ │   ├── has-unicode@2.0.1 
│ │   ├── lodash.pad@4.5.1 
│ │   ├── lodash.padend@4.6.1 
│ │   └── lodash.padstart@4.6.1 
│ ├── opn@3.0.3 
│ ├─┬ optimist@0.6.1 
│ │ ├── minimist@0.0.10 
│ │ └── wordwrap@0.0.3 
│ ├─┬ plist@1.2.0 
│ │ ├── base64-js@0.0.8 
│ │ ├─┬ xmlbuilder@4.0.0 
│ │ │ └── lodash@3.10.1 
│ │ └── xmldom@0.1.27 
│ ├── pretty-format@4.3.1 
│ ├── react-clone-referenced-element@1.0.1 
│ ├─┬ react-devtools-core@2.3.3 
│ │ └─┬ ws@2.3.1 
│ │   ├── safe-buffer@5.0.1 
│ │   └── ultron@1.1.0 
│ ├── react-timer-mixin@0.13.3 
│ ├─┬ react-transform-hmr@1.0.4 
│ │ ├─┬ global@4.3.2 
│ │ │ ├─┬ min-document@2.19.0 
│ │ │ │ └── dom-walk@0.1.1 
│ │ │ └── process@0.5.2 
│ │ └─┬ react-proxy@1.1.8 
│ │   └── react-deep-force-update@1.0.1 
│ ├── rebound@0.0.13 
│ ├── regenerator-runtime@0.9.6 
│ ├── rimraf@2.6.1 
│ ├─┬ sane@1.4.1 
│ │ ├─┬ exec-sh@0.2.0 
│ │ │ └── merge@1.2.0 
│ │ ├─┬ fb-watchman@1.9.2 
│ │ │ └── bser@1.0.2 
│ │ ├─┬ walker@1.0.7 
│ │ │ └─┬ makeerror@1.0.11 
│ │ │   └── tmpl@1.0.4 
│ │ └── watch@0.10.0 
│ ├─┬ shell-quote@1.6.1 
│ │ ├── array-filter@0.0.1 
│ │ ├── array-map@0.0.0 
│ │ └── array-reduce@0.0.0 
│ ├── stacktrace-parser@0.1.4 
│ ├─┬ temp@0.8.3 
│ │ └── rimraf@2.2.8 
│ ├── throat@3.2.0 
│ ├─┬ uglify-js@2.7.5 
│ │ ├── async@0.2.10 
│ │ ├── uglify-to-browserify@1.0.2 
│ │ └─┬ yargs@3.10.0 
│ │   ├── camelcase@1.2.1 
│ │   ├─┬ cliui@2.1.0 
│ │   │ ├─┬ center-align@0.1.3 
│ │   │ │ ├─┬ align-text@0.1.4 
│ │   │ │ │ └── longest@1.0.1 
│ │   │ │ └── lazy-cache@1.0.4 
│ │   │ ├── right-align@0.1.3 
│ │   │ └── wordwrap@0.0.2 
│ │   └── window-size@0.1.0 
│ ├── whatwg-fetch@1.1.1 
│ ├── wordwrap@1.0.0 
│ ├─┬ write-file-atomic@1.3.4 
│ │ ├── imurmurhash@0.1.4 
│ │ └── slide@1.1.6 
│ ├─┬ ws@1.1.4 
│ │ ├── options@0.0.6 
│ │ └── ultron@1.0.2 
│ ├─┬ xcode@0.9.3 
│ │ ├── pegjs@0.10.0 
│ │ ├─┬ simple-plist@0.2.1 
│ │ │ ├─┬ bplist-creator@0.0.7 
│ │ │ │ └── stream-buffers@2.2.0 
│ │ │ ├─┬ bplist-parser@0.1.1 
│ │ │ │ └── big-integer@1.6.23 
│ │ │ └─┬ plist@2.0.1 
│ │ │   ├── base64-js@1.1.2 
│ │ │   └── xmlbuilder@8.2.2 
│ │ └── uuid@3.0.1 
│ ├─┬ xmldoc@0.4.0 
│ │ └── sax@1.1.6 
│ ├── xpipe@1.0.5 
│ ├── xtend@4.0.1 
│ └─┬ yargs@6.6.0 
│   ├── camelcase@3.0.0 
│   ├─┬ cliui@3.2.0 
│   │ ├─┬ string-width@1.0.2 
│   │ │ └── is-fullwidth-code-point@1.0.0 
│   │ └─┬ wrap-ansi@2.1.0 
│   │   └─┬ string-width@1.0.2 
│   │     └── is-fullwidth-code-point@1.0.0 
│   ├── decamelize@1.2.0 
│   ├── get-caller-file@1.0.2 
│   ├─┬ os-locale@1.4.0 
│   │ └─┬ lcid@1.0.0 
│   │   └── invert-kv@1.0.0 
│   ├─┬ read-pkg-up@1.0.1 
│   │ ├─┬ find-up@1.1.2 
│   │ │ └── path-exists@2.1.0 
│   │ └─┬ read-pkg@1.1.0 
│   │   ├─┬ load-json-file@1.1.0 
│   │   │ ├─┬ parse-json@2.2.0 
│   │   │ │ └─┬ error-ex@1.3.1 
│   │   │ │   └── is-arrayish@0.2.1 
│   │   │ └─┬ strip-bom@2.0.0 
│   │   │   └── is-utf8@0.2.1 
│   │   ├─┬ normalize-package-data@2.4.0 
│   │   │ ├── hosted-git-info@2.5.0 
│   │   │ ├─┬ is-builtin-module@1.0.0 
│   │   │ │ └── builtin-modules@1.1.1 
│   │   │ └─┬ validate-npm-package-license@3.0.1 
│   │   │   ├─┬ spdx-correct@1.0.2 
│   │   │   │ └── spdx-license-ids@1.2.2 
│   │   │   └── spdx-expression-parse@1.0.4 
│   │   └── path-type@1.1.0 
│   ├── require-directory@2.1.1 
│   ├── require-main-filename@1.0.1 
│   ├── set-blocking@2.0.0 
│   ├─┬ string-width@1.0.2 
│   │ └── is-fullwidth-code-point@1.0.0 
│   ├── which-module@1.0.0 
│   ├── y18n@3.2.1 
│   └── yargs-parser@4.2.1 
└── react-test-renderer@16.0.0-alpha.12 

npm WARN react-native-branch@2.0.0-beta.3 requires a peer of react@>=15.4.0 but none was installed.
npm WARN react-native-maps@0.15.2 requires a peer of react@>=15.4.0 but none was installed.
npm WARN lottie-react-native@1.1.1 requires a peer of react@>=15.3.1 but none was installed.


Success! Created grinder at /Users/jsheth/webdevcon/grinder
Inside that directory, you can run several commands:

  npm start
    Starts the development server so you can open your app in the Expo
    app on your phone.

  npm run ios
    (Mac only, requires Xcode)
    Starts the development server and loads your app in an iOS simulator.

  npm run android
    (Requires Android build tools)
    Starts the development server and loads your app on a connected Android
    device or emulator.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd grinder
  npm start

Happy hacking!
acbc32a00421:webdevcon jsheth$ cd grinder
acbc32a00421:grinder jsheth$ exp start
[exp] Making sure project is set up correctly...
\[exp] Warning: Can't find react-native in package.json dependencies
-[exp] Warning: 'clamp' dependency is not installed.
[exp] 
[exp] If there is an issue running your project, please run `npm install` in /Users/jsheth/webdevcon/grinder and restart.
[exp] Your project looks good!
[exp] Using project at /Users/jsheth/webdevcon/grinder
[exp] Warning: Can't find react-native in package.json dependencies
[exp] Warning: 'clamp' dependency is not installed.
[exp] 
[exp] If there is an issue running your project, please run `npm install` in /Users/jsheth/webdevcon/grinder and restart.
[exp] Starting React Native packager...
[exp] Scanning 756 folders for symlinks in /Users/jsheth/webdevcon/grinder/node_modules (7ms)
[exp] Loading dependency graph.
[exp] Running packager on port 19001.
[exp] Dependency graph loaded.
[exp] Expo is ready.
[exp] You can scan this QR code:

                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                

[exp] Your URL is

exp://ff-54y.jaysheth.grinder.exp.direct:80

[exp] Logs for your project will appear below. Press Ctrl+C to exit.
[exp] Warning: Can't find react-native in package.json dependencies
[exp] Failed building JavaScript bundle.
[exp] Warning: 'clamp' dependency is not installed.
[exp] 
[exp] If there is an issue running your project, please run `npm install` in /Users/jsheth/webdevcon/grinder and restart.
[exp] Warning: Can't find react-native in package.json dependencies
[exp] Warning: 'clamp' dependency is not installed.
[exp] 
[exp] If there is an issue running your project, please run `npm install` in /Users/jsheth/webdevcon/grinder and restart.
[exp] Finished building JavaScript bundle in 20278ms.
^C
Stopping packager...
Packager stopped.
acbc32a00421:grinder jsheth$ exp start
[exp] Making sure project is set up correctly...
-[exp] Warning: Not using the Expo fork of react-native. See https://docs.expo.io/.
[exp] Your project looks good!
[exp] Using project at /Users/jsheth/webdevcon/grinder
[exp] Warning: Not using the Expo fork of react-native. See https://docs.expo.io/.
[exp] Starting React Native packager...
[exp] Scanning 756 folders for symlinks in /Users/jsheth/webdevcon/grinder/node_modules (5ms)
[exp] Loading dependency graph.
[exp] Running packager on port 19001.
[exp] Dependency graph loaded.
[exp] Expo is ready.
[exp] You can scan this QR code:

                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                

[exp] Your URL is

exp://ff-54y.jaysheth.grinder.exp.direct:80

[exp] Logs for your project will appear below. Press Ctrl+C to exit.
[exp] Warning: Not using the Expo fork of react-native. See https://docs.expo.io/.
[exp] Finished building JavaScript bundle in 1232ms.
^C
Stopping packager...
Packager stopped.
acbc32a00421:grinder jsheth$ npm install
npm WARN lottie-react-native@1.1.1 requires a peer of react@>=15.3.1 but none was installed.
npm WARN react-native-branch@2.0.0-beta.3 requires a peer of react@>=15.4.0 but none was installed.
npm WARN react-native-maps@0.15.2 requires a peer of react@>=15.4.0 but none was installed.
acbc32a00421:grinder jsheth$ rm -rf ~/.npm
acbc32a00421:grinder jsheth$ npm cache clear
acbc32a00421:grinder jsheth$ npm start
npm ERR! Darwin 15.6.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "start"
npm ERR! node v6.11.0
npm ERR! npm  v3.10.10

npm ERR! missing script: start
npm ERR! 
npm ERR! If you need help, you may report this error at:
npm ERR!     <https://github.com/npm/npm/issues>

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/jsheth/webdevcon/grinder/npm-debug.log
acbc32a00421:grinder jsheth$ ls
App.js			README.md		node_modules		package_generated.json
App.test.js		SwipeCards.js		npm-debug.log		screenshots
Defaults.js		app.json		package.json
acbc32a00421:grinder jsheth$ pwd
/Users/jsheth/webdevcon/grinder
acbc32a00421:grinder jsheth$ ls
App.js			README.md		node_modules		package_generated.json
App.test.js		SwipeCards.js		npm-debug.log		screenshots
Defaults.js		app.json		package.json
acbc32a00421:grinder jsheth$ npm start
npm ERR! Darwin 15.6.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "start"
npm ERR! node v6.11.0
npm ERR! npm  v3.10.10

npm ERR! missing script: start
npm ERR! 
npm ERR! If you need help, you may report this error at:
npm ERR!     <https://github.com/npm/npm/issues>

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/jsheth/webdevcon/grinder/npm-debug.log
acbc32a00421:grinder jsheth$ pwd
/Users/jsheth/webdevcon/grinder
acbc32a00421:grinder jsheth$ ls
App.js			README.md		node_modules		package_generated.json
App.test.js		SwipeCards.js		npm-debug.log		screenshots
Defaults.js		app.json		package.json
acbc32a00421:grinder jsheth$ exp start
[exp] Making sure project is set up correctly...
|[exp] Warning: Not using the Expo fork of react-native. See https://docs.expo.io/.
[exp] Your project looks good!
[exp] Using project at /Users/jsheth/webdevcon/grinder
[exp] Warning: Not using the Expo fork of react-native. See https://docs.expo.io/.
[exp] Starting React Native packager...
[exp] Scanning 756 folders for symlinks in /Users/jsheth/webdevcon/grinder/node_modules (10ms)
[exp] Loading dependency graph.
[exp] Running packager on port 19001.
[exp] Dependency graph loaded.
[exp] Expo is ready.
[exp] You can scan this QR code:

                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                
                                                                

[exp] Your URL is

exp://ff-54y.jaysheth.grinder.exp.direct:80

[exp] Logs for your project will appear below. Press Ctrl+C to exit.
^C
Stopping packager...
Packager stopped.
acbc32a00421:grinder jsheth$ npm start
npm ERR! Darwin 15.6.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "start"
npm ERR! node v6.11.0
npm ERR! npm  v3.10.10

npm ERR! missing script: start
npm ERR! 
npm ERR! If you need help, you may report this error at:
npm ERR!     <https://github.com/npm/npm/issues>

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/jsheth/webdevcon/grinder/npm-debug.log
acbc32a00421:grinder jsheth$ npm update
react-native-swipe-cards@0.1.0 /Users/jsheth/webdevcon/grinder
└── expo@18.0.6 

npm WARN react-native-maps@0.15.2 requires a peer of react@>=15.4.0 but none was installed.
npm WARN react-native-branch@2.0.0-beta.3 requires a peer of react@>=15.4.0 but none was installed.
npm WARN lottie-react-native@1.1.1 requires a peer of react@>=15.3.1 but none was installed.
acbc32a00421:grinder jsheth$ npm start
npm ERR! Darwin 15.6.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "start"
npm ERR! node v6.11.0
npm ERR! npm  v3.10.10

npm ERR! missing script: start
npm ERR! 
npm ERR! If you need help, you may report this error at:
npm ERR!     <https://github.com/npm/npm/issues>

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/jsheth/webdevcon/grinder/npm-debug.log
acbc32a00421:grinder jsheth$ ls
App.js			README.md		node_modules		package_generated.json
App.test.js		SwipeCards.js		npm-debug.log		screenshots
Defaults.js		app.json		package.json
acbc32a00421:grinder jsheth$ cd ..
acbc32a00421:webdevcon jsheth$ ls
grinder						react-native-tinder-swipe-cards
my-app						react-native-tinder-swipe-cards-master.zip
node_modules
acbc32a00421:webdevcon jsheth$ npm start
npm ERR! Darwin 15.6.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "start"
npm ERR! node v6.11.0
npm ERR! npm  v3.10.10
npm ERR! path /Users/jsheth/webdevcon/package.json
npm ERR! code ENOENT
npm ERR! errno -2
npm ERR! syscall open

npm ERR! enoent ENOENT: no such file or directory, open '/Users/jsheth/webdevcon/package.json'
npm ERR! enoent ENOENT: no such file or directory, open '/Users/jsheth/webdevcon/package.json'
npm ERR! enoent This is most likely not a problem with npm itself
npm ERR! enoent and is related to npm not being able to find a file.
npm ERR! enoent 

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/jsheth/webdevcon/npm-debug.log
acbc32a00421:webdevcon jsheth$ cd grinder
acbc32a00421:grinder jsheth$ ls
App.js			README.md		node_modules		package_generated.json
App.test.js		SwipeCards.js		npm-debug.log		screenshots
Defaults.js		app.json		package.json
acbc32a00421:grinder jsheth$ npm start
npm ERR! Darwin 15.6.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "start"
npm ERR! node v6.11.0
npm ERR! npm  v3.10.10

npm ERR! missing script: start
npm ERR! 
npm ERR! If you need help, you may report this error at:
npm ERR!     <https://github.com/npm/npm/issues>

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/jsheth/webdevcon/grinder/npm-debug.log
acbc32a00421:grinder jsheth$ sudo lsof -i :8081
Password:
Sorry, try again.
Password:
acbc32a00421:grinder jsheth$ ls
App.js			README.md		node_modules		package_generated.json
App.test.js		SwipeCards.js		npm-debug.log		screenshots
Defaults.js		app.json		package.json
acbc32a00421:grinder jsheth$ pwd
/Users/jsheth/webdevcon/grinder
acbc32a00421:grinder jsheth$ cd ..
acbc32a00421:webdevcon jsheth$ create-react-native-app grinder2
Creating a new React Native app in /Users/jsheth/webdevcon/grinder2.

Installing packages. This might take a couple minutes.
Installing react-native-scripts...

npm WARN deprecated @exponent/spawn-async@1.2.8: Please switch to @expo/spawn-async, the new name of this package. It's the same code with our new name.

> dtrace-provider@0.8.3 install /Users/jsheth/webdevcon/grinder2/node_modules/dtrace-provider
> node scripts/install.js


> @exponent/ngrok@2.2.7 postinstall /Users/jsheth/webdevcon/grinder2/node_modules/@exponent/ngrok
> node ./postinstall.js

ngrok - binary unpacked.
grinder2@0.1.0 /Users/jsheth/webdevcon/grinder2
└─┬ react-native-scripts@0.0.40 
  ├─┬ babel-runtime@6.23.0 
  │ ├── core-js@2.4.1 
  │ └── regenerator-runtime@0.10.5 
  ├─┬ chalk@1.1.3 
  │ ├── ansi-styles@2.2.1 
  │ ├── escape-string-regexp@1.0.5 
  │ ├─┬ has-ansi@2.0.0 
  │ │ └── ansi-regex@2.1.1 
  │ ├── strip-ansi@3.0.1 
  │ └── supports-color@2.0.0 
  ├─┬ cross-spawn@5.1.0 
  │ ├─┬ lru-cache@4.1.1 
  │ │ ├── pseudomap@1.0.2 
  │ │ └── yallist@2.1.2 
  │ ├─┬ shebang-command@1.2.0 
  │ │ └── shebang-regex@1.0.0 
  │ └─┬ which@1.2.14 
  │   └── isexe@2.0.0 
  ├─┬ fs-extra@3.0.1 
  │ ├── graceful-fs@4.1.11 
  │ ├── jsonfile@3.0.0 
  │ └── universalify@0.1.0 
  ├── indent-string@3.1.0 
  ├─┬ inquirer@3.1.1 
  │ ├── ansi-escapes@2.0.0 
  │ ├─┬ cli-cursor@2.1.0 
  │ │ └─┬ restore-cursor@2.0.0 
  │ │   ├─┬ onetime@2.0.1 
  │ │   │ └── mimic-fn@1.1.0 
  │ │   └── signal-exit@3.0.2 
  │ ├── cli-width@2.1.0 
  │ ├─┬ external-editor@2.0.4 
  │ │ ├── iconv-lite@0.4.18 
  │ │ ├── jschardet@1.4.2 
  │ │ └─┬ tmp@0.0.31 
  │ │   └── os-tmpdir@1.0.2 
  │ ├── figures@2.0.0 
  │ ├── lodash@4.17.4 
  │ ├── mute-stream@0.0.7 
  │ ├─┬ run-async@2.3.0 
  │ │ └── is-promise@2.1.0 
  │ ├── rx-lite@4.0.8 
  │ ├── rx-lite-aggregates@4.0.8 
  │ ├─┬ string-width@2.1.0 
  │ │ ├── is-fullwidth-code-point@2.0.0 
  │ │ └─┬ strip-ansi@4.0.0 
  │ │   └── ansi-regex@3.0.0 
  │ └── through@2.3.8 
  ├─┬ match-require@2.1.0 
  │ └── uuid@3.1.0 
  ├── minimist@1.2.0 
  ├── path-exists@3.0.0 
  ├── progress@2.0.0 
  ├── qrcode-terminal@0.11.0 
  ├── UNMET PEER DEPENDENCY react@16.0.0-alpha.12
  └─┬ xdl@42.0.0 
    ├─┬ @ccheever/crayon@5.0.0 
    │ ├── has-color@0.1.7 
    │ └─┬ strip-ansi@0.2.2 
    │   └── ansi-regex@0.1.0 
    ├─┬ @exponent/json-file@5.3.0 
    │ └── json5@0.5.1 
    ├─┬ @exponent/ngrok@2.2.7 
    │ ├── async@0.9.2 
    │ ├─┬ decompress-zip@0.3.0 
    │ │ ├─┬ binary@0.3.0 
    │ │ │ ├── buffers@0.1.1 
    │ │ │ └─┬ chainsaw@0.1.0 
    │ │ │   └── traverse@0.3.9 
    │ │ ├── mkpath@0.1.0 
    │ │ ├─┬ nopt@3.0.6 
    │ │ │ └── abbrev@1.1.0 
    │ │ ├── q@1.5.0 
    │ │ ├─┬ readable-stream@1.1.14 
    │ │ │ ├── isarray@0.0.1 
    │ │ │ └── string_decoder@0.10.31 
    │ │ └─┬ touch@0.0.3 
    │ │   └── nopt@1.0.10 
    │ └── lock@0.1.3 
    ├─┬ @exponent/node-auth0@2.6.0 
    │ ├── bluebird@2.11.0 
    │ ├─┬ rest-facade@1.5.0 
    │ │ ├── bluebird@2.11.0 
    │ │ └─┬ change-case@2.3.1 
    │ │   ├── camel-case@1.2.2 
    │ │   ├── constant-case@1.1.2 
    │ │   ├── dot-case@1.1.2 
    │ │   ├── is-lower-case@1.1.3 
    │ │   ├── is-upper-case@1.1.2 
    │ │   ├── lower-case@1.1.4 
    │ │   ├── lower-case-first@1.0.2 
    │ │   ├── param-case@1.1.2 
    │ │   ├── pascal-case@1.1.2 
    │ │   ├── path-case@1.1.2 
    │ │   ├── sentence-case@1.1.3 
    │ │   ├── snake-case@1.1.2 
    │ │   ├── swap-case@1.1.2 
    │ │   ├── title-case@1.1.2 
    │ │   ├── upper-case@1.1.3 
    │ │   └── upper-case-first@1.1.2 
    │ └── url-join@0.0.1 
    ├─┬ @exponent/osascript@1.6.4 
    │ └─┬ babel-runtime@5.8.38 
    │   └── core-js@1.2.7 
    ├─┬ @exponent/spawn-async@1.2.8 
    │ └── cross-spawn@4.0.2 
    ├─┬ analytics-node@2.4.1 
    │ ├─┬ @segment/loosely-validate-event@1.1.2 
    │ │ ├── component-type@1.2.1 
    │ │ └── join-component@1.1.0 
    │ ├── clone@2.1.1 
    │ ├─┬ commander@2.10.0 
    │ │ └── graceful-readlink@1.0.1 
    │ ├── crypto-token@1.0.1 
    │ ├── debug@2.6.8 
    │ ├── remove-trailing-slash@0.1.0 
    │ ├─┬ superagent@3.5.2 
    │ │ ├── component-emitter@1.2.1 
    │ │ ├── cookiejar@2.1.1 
    │ │ ├── formidable@1.1.1 
    │ │ ├── mime@1.3.6 
    │ │ └─┬ readable-stream@2.3.3 
    │ │   ├── isarray@1.0.0 
    │ │   └── string_decoder@1.0.3 
    │ └── superagent-retry@0.6.0 
    ├─┬ auth0-js@7.6.1 
    │ ├── Base64@0.1.4 
    │ ├── json-fallback@0.0.1 
    │ ├── jsonp@0.0.4 
    │ ├── qs@6.4.0 
    │ ├── reqwest@2.0.5 
    │ ├── trim@0.0.1 
    │ ├── winchan@0.1.4 
    │ └─┬ xtend@2.1.2 
    │   └── object-keys@0.4.0 
    ├─┬ axios@0.16.2 
    │ ├── follow-redirects@1.2.4 
    │ └── is-buffer@1.1.5 
    ├── bluebird@3.5.0 
    ├─┬ body-parser@1.17.2 
    │ ├── bytes@2.4.0 
    │ ├── content-type@1.0.2 
    │ ├── debug@2.6.7 
    │ ├── depd@1.1.0 
    │ ├── http-errors@1.6.1 
    │ ├── iconv-lite@0.4.15 
    │ ├─┬ on-finished@2.3.0 
    │ │ └── ee-first@1.1.1 
    │ ├─┬ raw-body@2.2.0 
    │ │ ├── iconv-lite@0.4.15 
    │ │ └── unpipe@1.0.0 
    │ └─┬ type-is@1.6.15 
    │   └── media-typer@0.3.0 
    ├─┬ bunyan@1.8.10 
    │ ├─┬ dtrace-provider@0.8.3 
    │ │ └── nan@2.6.2 
    │ ├── moment@2.18.1 
    │ ├── mv@2.1.1 
    │ └── safe-json-stringify@1.0.4 
    ├─┬ concat-stream@1.6.0 
    │ ├── inherits@2.0.3 
    │ ├─┬ readable-stream@2.3.3 
    │ │ ├── core-util-is@1.0.2 
    │ │ ├── isarray@1.0.0 
    │ │ ├── process-nextick-args@1.0.7 
    │ │ ├── string_decoder@1.0.3 
    │ │ └── util-deprecate@1.0.2 
    │ └── typedarray@0.0.6 
    ├─┬ decache@4.1.0 
    │ └── callsite@1.0.0 
    ├── delay-async@1.1.0 
    ├── es6-error@4.0.2 
    ├── exec-async@2.2.0 
    ├── exists-async@2.0.0 
    ├─┬ express@4.15.3 
    │ ├─┬ accepts@1.3.3 
    │ │ └── negotiator@0.6.1 
    │ ├── array-flatten@1.1.1 
    │ ├── content-disposition@0.5.2 
    │ ├── cookie@0.3.1 
    │ ├── cookie-signature@1.0.6 
    │ ├── debug@2.6.7 
    │ ├── encodeurl@1.0.1 
    │ ├── escape-html@1.0.3 
    │ ├── etag@1.8.0 
    │ ├─┬ finalhandler@1.0.3 
    │ │ └── debug@2.6.7 
    │ ├── fresh@0.5.0 
    │ ├── merge-descriptors@1.0.1 
    │ ├── methods@1.1.2 
    │ ├── parseurl@1.3.1 
    │ ├── path-to-regexp@0.1.7 
    │ ├─┬ proxy-addr@1.1.4 
    │ │ ├── forwarded@0.1.0 
    │ │ └── ipaddr.js@1.3.0 
    │ ├── range-parser@1.2.0 
    │ ├─┬ send@0.15.3 
    │ │ ├── debug@2.6.7 
    │ │ ├── destroy@1.0.4 
    │ │ └── mime@1.3.4 
    │ ├── serve-static@1.12.3 
    │ ├── setprototypeof@1.0.3 
    │ ├── statuses@1.3.1 
    │ ├── utils-merge@1.0.0 
    │ └── vary@1.1.1 
    ├── file-type@4.4.0 
    ├─┬ form-data@2.2.0 
    │ ├── asynckit@0.4.0 
    │ ├─┬ combined-stream@1.0.5 
    │ │ └── delayed-stream@1.0.0 
    │ └─┬ mime-types@2.1.15 
    │   └── mime-db@1.27.0 
    ├── freeport-async@1.1.1 
    ├─┬ fs-extra@0.30.0 
    │ ├── klaw@1.3.1 
    │ └─┬ rimraf@2.4.5 
    │   └── glob@6.0.4 
    ├─┬ glob@7.1.2 
    │ ├── fs.realpath@1.0.0 
    │ ├─┬ inflight@1.0.6 
    │ │ └── wrappy@1.0.2 
    │ ├─┬ minimatch@3.0.4 
    │ │ └─┬ brace-expansion@1.1.8 
    │ │   ├── balanced-match@1.0.0 
    │ │   └── concat-map@0.0.1 
    │ ├── once@1.4.0 
    │ └── path-is-absolute@1.0.1 
    ├─┬ hasbin@1.2.3 
    │ └── async@1.5.2 
    ├── home-dir@1.0.0 
    ├── instapromise@2.0.7-rc.1 
    ├── ip@1.1.5 
    ├─┬ joi@10.6.0 
    │ ├── hoek@4.1.1 
    │ ├── isemail@2.2.1 
    │ ├── items@2.1.1 
    │ └─┬ topo@2.0.2 
    │   └── hoek@4.1.1 
    ├── jsonfile@2.4.0 
    ├── jsonschema@1.1.1 
    ├─┬ jsonwebtoken@7.4.1 
    │ ├─┬ joi@6.10.1 
    │ │ ├── hoek@2.16.3 
    │ │ ├── isemail@1.2.0 
    │ │ └── topo@1.1.0 
    │ ├─┬ jws@3.1.4 
    │ │ ├── base64url@2.0.0 
    │ │ └─┬ jwa@1.1.5 
    │ │   ├── buffer-equal-constant-time@1.0.1 
    │ │   └── ecdsa-sig-formatter@1.0.9 
    │ ├── lodash.once@4.1.1 
    │ ├── ms@2.0.0 
    │ └── xtend@4.0.1 
    ├── md5hex@1.0.0 
    ├─┬ mkdirp@0.5.1 
    │ └── minimist@0.0.8 
    ├── mkdirp-promise@5.0.1 
    ├─┬ mz@2.6.0 
    │ ├── any-promise@1.3.0 
    │ ├── object-assign@4.1.1 
    │ └─┬ thenify-all@1.6.0 
    │   └── thenify@3.3.0 
    ├── ncp@2.0.0 
    ├─┬ opn@4.0.2 
    │ └─┬ pinkie-promise@2.0.1 
    │   └── pinkie@2.0.4 
    ├── promise-props@1.0.0 
    ├── querystring@0.2.0 
    ├── UNMET PEER DEPENDENCY react@^0.14.0 || ^15.0.0-0 || ^16.0.0-0
    ├─┬ react-redux@5.0.5 
    │ ├─┬ create-react-class@15.6.0 
    │ │ └─┬ fbjs@0.8.12 
    │ │   ├── core-js@1.2.7 
    │ │   ├─┬ isomorphic-fetch@2.2.1 
    │ │   │ ├─┬ node-fetch@1.7.1 
    │ │   │ │ ├── encoding@0.1.12 
    │ │   │ │ └── is-stream@1.1.0 
    │ │   │ └── whatwg-fetch@2.0.3 
    │ │   ├─┬ promise@7.3.1 
    │ │   │ └── asap@2.0.5 
    │ │   ├── setimmediate@1.0.5 
    │ │   └── ua-parser-js@0.7.13 
    │ ├── hoist-non-react-statics@1.2.0 
    │ ├── invariant@2.2.2 
    │ ├── lodash-es@4.17.4 
    │ ├─┬ loose-envify@1.3.1 
    │ │ └── js-tokens@3.0.2 
    │ └── prop-types@15.5.10 
    ├─┬ read-chunk@2.0.0 
    │ └── pify@2.3.0 
    ├─┬ redux@3.7.1 
    │ └── symbol-observable@1.0.4 
    ├─┬ redux-logger@2.10.2 
    │ └── deep-diff@0.3.4 
    ├─┬ request@2.81.0 
    │ ├── aws-sign2@0.6.0 
    │ ├── aws4@1.6.0 
    │ ├── caseless@0.12.0 
    │ ├── extend@3.0.1 
    │ ├── forever-agent@0.6.1 
    │ ├── form-data@2.1.4 
    │ ├─┬ har-validator@4.2.1 
    │ │ ├─┬ ajv@4.11.8 
    │ │ │ ├── co@4.6.0 
    │ │ │ └─┬ json-stable-stringify@1.0.1 
    │ │ │   └── jsonify@0.0.0 
    │ │ └── har-schema@1.0.5 
    │ ├─┬ hawk@3.1.3 
    │ │ ├── boom@2.10.1 
    │ │ ├── cryptiles@2.0.5 
    │ │ └── sntp@1.0.9 
    │ ├─┬ http-signature@1.1.1 
    │ │ ├── assert-plus@0.2.0 
    │ │ ├─┬ jsprim@1.4.0 
    │ │ │ ├── assert-plus@1.0.0 
    │ │ │ ├── extsprintf@1.0.2 
    │ │ │ ├── json-schema@0.2.3 
    │ │ │ └── verror@1.3.6 
    │ │ └─┬ sshpk@1.13.1 
    │ │   ├── asn1@0.2.3 
    │ │   ├── assert-plus@1.0.0 
    │ │   ├── bcrypt-pbkdf@1.0.1 
    │ │   ├─┬ dashdash@1.14.1 
    │ │   │ └── assert-plus@1.0.0 
    │ │   ├── ecc-jsbn@0.1.1 
    │ │   ├─┬ getpass@0.1.7 
    │ │   │ └── assert-plus@1.0.0 
    │ │   ├── jsbn@0.1.1 
    │ │   └── tweetnacl@0.14.5 
    │ ├── is-typedarray@1.0.0 
    │ ├── isstream@0.1.2 
    │ ├── json-stringify-safe@5.0.1 
    │ ├── oauth-sign@0.8.2 
    │ ├── performance-now@0.2.0 
    │ ├── safe-buffer@5.1.1 
    │ ├── stringstream@0.0.5 
    │ ├─┬ tough-cookie@2.3.2 
    │ │ └── punycode@1.4.1 
    │ └── tunnel-agent@0.6.0 
    ├─┬ request-progress@3.0.0 
    │ └── throttleit@1.0.0 
    ├── semver@5.3.0 
    ├─┬ slugid@1.1.0 
    │ └── uuid@2.0.3 
    ├── slugify@1.1.0 
    ├─┬ source-map-support@0.4.15 
    │ └── source-map@0.5.6 
    ├─┬ tar.gz@1.0.5 
    │ ├── bluebird@2.11.0 
    │ ├── fstream@1.0.11 
    │ ├── mout@0.11.1 
    │ └─┬ tar@2.2.1 
    │   └── block-stream@0.0.9 
    ├── tree-kill@1.1.0 
    ├─┬ url@0.11.0 
    │ └── punycode@1.3.2 
    ├── xhr2@0.1.4 
    └── yesno@0.0.1 

npm WARN xdl@42.0.0 requires a peer of react@16.0.0-alpha.12 but none was installed.
npm WARN react-redux@5.0.5 requires a peer of react@^0.14.0 || ^15.0.0-0 || ^16.0.0-0 but none was installed.
Installing dependencies using npm...

grinder2@0.1.0 /Users/jsheth/webdevcon/grinder2
├─┬ expo@18.0.6 
│ ├─┬ @expo/vector-icons@5.0.0 
│ │ └── react-native-vector-icons@4.1.1 
│ ├─┬ babel-preset-airbnb@2.4.0 
│ │ ├─┬ babel-plugin-transform-es2015-modules-commonjs@6.24.1 
│ │ │ └── babel-plugin-transform-strict-mode@6.24.1 
│ │ ├── babel-plugin-transform-es2015-template-literals@6.22.0 
│ │ ├── babel-plugin-transform-es3-member-expression-literals@6.22.0 
│ │ ├── babel-plugin-transform-es3-property-literals@6.22.0 
│ │ ├─┬ babel-plugin-transform-exponentiation-operator@6.24.1 
│ │ │ ├─┬ babel-helper-builder-binary-assignment-operator-visitor@6.24.1 
│ │ │ │ └── babel-helper-explode-assignable-expression@6.24.1 
│ │ │ └── babel-plugin-syntax-exponentiation-operator@6.13.0 
│ │ ├── babel-plugin-transform-jscript@6.22.0 
│ │ ├─┬ babel-preset-env@1.5.2 
│ │ │ ├── babel-plugin-transform-async-to-generator@6.24.1 
│ │ │ ├── babel-plugin-transform-es2015-duplicate-keys@6.24.1 
│ │ │ ├── babel-plugin-transform-es2015-modules-amd@6.24.1 
│ │ │ ├─┬ babel-plugin-transform-es2015-modules-systemjs@6.24.1 
│ │ │ │ └── babel-helper-hoist-variables@6.24.1 
│ │ │ ├── babel-plugin-transform-es2015-modules-umd@6.24.1 
│ │ │ ├── babel-plugin-transform-es2015-typeof-symbol@6.23.0 
│ │ │ └─┬ browserslist@2.1.5 
│ │ │   ├── caniuse-lite@1.0.30000696 
│ │ │   └── electron-to-chromium@1.3.15 
│ │ ├─┬ babel-preset-react@6.24.1 
│ │ │ ├── babel-plugin-transform-react-jsx-self@6.22.0 
│ │ │ └── babel-preset-flow@6.23.0 
│ │ └─┬ object.assign@4.0.4 
│ │   ├─┬ define-properties@1.1.2 
│ │   │ ├── foreach@2.0.5 
│ │   │ └── object-keys@1.0.11 
│ │   ├── function-bind@1.1.0 
│ │   └── object-keys@1.0.11 
│ ├─┬ babel-preset-expo@2.0.0 
│ │ ├─┬ babel-plugin-module-resolver@2.5.0 
│ │ │ ├── find-babel-config@1.1.0 
│ │ │ └─┬ resolve@1.3.3 
│ │ │   └── path-parse@1.0.5 
│ │ ├─┬ babel-plugin-transform-decorators-legacy@1.3.4 
│ │ │ └── babel-plugin-syntax-decorators@6.13.0 
│ │ └─┬ babel-preset-react-native-stage-0@1.0.1 
│ │   ├─┬ babel-plugin-transform-class-constructor-call@6.24.1 
│ │   │ └── babel-plugin-syntax-class-constructor-call@6.18.0 
│ │   ├─┬ babel-plugin-transform-do-expressions@6.22.0 
│ │   │ └── babel-plugin-syntax-do-expressions@6.13.0 
│ │   ├─┬ babel-plugin-transform-export-extensions@6.22.0 
│ │   │ └── babel-plugin-syntax-export-extensions@6.13.0 
│ │   └─┬ babel-plugin-transform-function-bind@6.22.0 
│ │     └── babel-plugin-syntax-function-bind@6.13.0 
│ ├── fbemitter@2.1.1 
│ ├── lodash.map@4.6.0 
│ ├── lodash.zipobject@4.1.3 
│ ├─┬ lottie-react-native@1.1.1 
│ │ ├── lottie-ios@1.5.2 
│ │ └─┬ react-native-safe-module@1.2.0 
│ │   └── dedent@0.6.0 
│ ├── md5-file@3.1.1 
│ ├─┬ pretty-format@20.0.3 
│ │ └─┬ ansi-styles@3.1.0 
│ │   └─┬ color-convert@1.9.0 
│ │     └── color-name@1.1.2 
│ ├── UNMET PEER DEPENDENCY react@>=15.3.1
│ ├── react-native-branch@2.0.0-beta.3 
│ ├─┬ react-native-fbads@4.1.0 
│ │ └── eventemitter3@2.0.3 
│ ├── react-native-maps@0.15.2 
│ ├─┬ react-native-svg@5.2.0 
│ │ └─┬ color@0.11.4 
│ │   ├── clone@1.0.2 
│ │   └── color-string@0.3.0 
│ ├── uuid-js@0.7.5 
│ └─┬ websql@0.4.4  (git://github.com/expo/node-websql.git#e364fa65146a9e2157a19e5c719e7702c2b6b87a)
│   ├── argsarray@0.0.1 
│   ├── immediate@3.2.3 
│   ├── noop-fn@1.0.0 
│   ├── pouchdb-collections@1.0.1 
│   └── tiny-queue@0.2.1 
├─┬ jest-expo@18.0.0 
│ ├─┬ babel-jest@19.0.0 
│ │ ├─┬ babel-plugin-istanbul@4.1.4 
│ │ │ ├─┬ find-up@2.1.0 
│ │ │ │ └─┬ locate-path@2.0.0 
│ │ │ │   └─┬ p-locate@2.0.0 
│ │ │ │     └── p-limit@1.1.0 
│ │ │ ├── istanbul-lib-instrument@1.7.3 
│ │ │ └─┬ test-exclude@4.1.1 
│ │ │   └── arrify@1.0.1 
│ │ └─┬ babel-preset-jest@19.0.0 
│ │   └── babel-plugin-jest-hoist@19.0.0 
│ ├─┬ jest@19.0.2 
│ │ └─┬ jest-cli@19.0.2 
│ │   ├── ansi-escapes@1.4.0 
│ │   ├── callsites@2.0.0 
│ │   ├─┬ is-ci@1.0.10 
│ │   │ └── ci-info@1.0.0 
│ │   ├─┬ istanbul-api@1.1.10 
│ │   │ ├── async@2.5.0 
│ │   │ ├── fileset@2.0.3 
│ │   │ ├─┬ istanbul-lib-hook@1.0.7 
│ │   │ │ └─┬ append-transform@0.4.0 
│ │   │ │   └── default-require-extensions@1.0.0 
│ │   │ ├─┬ istanbul-lib-report@1.1.1 
│ │   │ │ └─┬ supports-color@3.2.3 
│ │   │ │   └── has-flag@1.0.0 
│ │   │ ├─┬ istanbul-lib-source-maps@1.2.1 
│ │   │ │ └── rimraf@2.6.1 
│ │   │ ├─┬ istanbul-reports@1.1.1 
│ │   │ │ └─┬ handlebars@4.0.10 
│ │   │ │   ├── async@1.5.2 
│ │   │ │   └─┬ source-map@0.4.4 
│ │   │ │     └── amdefine@1.0.1 
│ │   │ └─┬ js-yaml@3.8.4 
│ │   │   ├─┬ argparse@1.0.9 
│ │   │   │ └── sprintf-js@1.0.3 
│ │   │   └── esprima@3.1.3 
│ │   ├── istanbul-lib-coverage@1.1.1 
│ │   ├── jest-changed-files@19.0.2 
│ │   ├─┬ jest-environment-jsdom@19.0.2 
│ │   │ └─┬ jsdom@9.12.0 
│ │   │   ├── abab@1.0.3 
│ │   │   ├── acorn@4.0.13 
│ │   │   ├── acorn-globals@3.1.0 
│ │   │   ├── array-equal@1.0.0 
│ │   │   ├── content-type-parser@1.0.1 
│ │   │   ├── cssom@0.3.2 
│ │   │   ├── cssstyle@0.2.37 
│ │   │   ├─┬ escodegen@1.8.1 
│ │   │   │ ├── esprima@2.7.3 
│ │   │   │ ├── estraverse@1.9.3 
│ │   │   │ ├─┬ optionator@0.8.2 
│ │   │   │ │ ├── deep-is@0.1.3 
│ │   │   │ │ ├── fast-levenshtein@2.0.6 
│ │   │   │ │ ├── levn@0.3.0 
│ │   │   │ │ ├── prelude-ls@1.1.2 
│ │   │   │ │ └── type-check@0.3.2 
│ │   │   │ └── source-map@0.2.0 
│ │   │   ├── html-encoding-sniffer@1.0.1 
│ │   │   ├── nwmatcher@1.4.1 
│ │   │   ├── parse5@1.5.1 
│ │   │   ├── sax@1.2.4 
│ │   │   ├── symbol-tree@3.2.2 
│ │   │   ├── webidl-conversions@4.0.1 
│ │   │   ├─┬ whatwg-encoding@1.0.1 
│ │   │   │ └── iconv-lite@0.4.13 
│ │   │   ├─┬ whatwg-url@4.8.0 
│ │   │   │ ├── tr46@0.0.3 
│ │   │   │ └── webidl-conversions@3.0.1 
│ │   │   └── xml-name-validator@2.0.1 
│ │   ├─┬ jest-haste-map@19.0.2 
│ │   │ └─┬ sane@1.5.0 
│ │   │   └─┬ fb-watchman@1.9.2 
│ │   │     └── bser@1.0.2 
│ │   ├─┬ jest-jasmine2@19.0.2 
│ │   │ ├─┬ jest-matcher-utils@19.0.0 
│ │   │ │ └─┬ pretty-format@19.0.0 
│ │   │ │   └── ansi-styles@3.1.0 
│ │   │ └── jest-matchers@19.0.0 
│ │   ├── jest-message-util@19.0.0 
│ │   ├── jest-resolve-dependencies@19.0.0 
│ │   ├─┬ jest-snapshot@19.0.2 
│ │   │ ├─┬ jest-diff@19.0.0 
│ │   │ │ ├── diff@3.2.0 
│ │   │ │ └─┬ pretty-format@19.0.0 
│ │   │ │   └── ansi-styles@3.1.0 
│ │   │ ├── natural-compare@1.4.0 
│ │   │ └─┬ pretty-format@19.0.0 
│ │   │   └── ansi-styles@3.1.0 
│ │   ├─┬ node-notifier@5.1.2 
│ │   │ ├── growly@1.3.0 
│ │   │ └── shellwords@0.1.0 
│ │   └── string-length@1.0.1 
│ ├─┬ jest-repl@19.0.2 
│ │ ├─┬ jest-util@19.0.2 
│ │ │ ├── jest-mock@19.0.0 
│ │ │ ├─┬ jest-validate@19.0.2 
│ │ │ │ └─┬ pretty-format@19.0.0 
│ │ │ │   └── ansi-styles@3.1.0 
│ │ │ └── leven@2.1.0 
│ │ └── repl@0.1.3 
│ └─┬ jest-runtime@19.0.4 
│   ├─┬ jest-config@19.0.4 
│   │ ├── jest-environment-node@19.0.2 
│   │ └─┬ pretty-format@19.0.0 
│   │   └── ansi-styles@3.1.0 
│   ├── jest-file-exists@19.0.0 
│   ├─┬ jest-haste-map@19.0.2 
│   │ └─┬ sane@1.5.0 
│   │   └─┬ fb-watchman@1.9.2 
│   │     └── bser@1.0.2 
│   ├── jest-regex-util@19.0.0 
│   ├─┬ jest-resolve@19.0.2 
│   │ ├─┬ browser-resolve@1.11.2 
│   │ │ └── resolve@1.1.7 
│   │ └─┬ jest-haste-map@19.0.2 
│   │   └─┬ sane@1.5.0 
│   │     └─┬ fb-watchman@1.9.2 
│   │       └── bser@1.0.2 
│   ├─┬ micromatch@2.3.11 
│   │ ├─┬ arr-diff@2.0.0 
│   │ │ └── arr-flatten@1.0.3 
│   │ ├── array-unique@0.2.1 
│   │ ├─┬ braces@1.8.5 
│   │ │ ├─┬ expand-range@1.8.2 
│   │ │ │ └─┬ fill-range@2.2.3 
│   │ │ │   ├── is-number@2.1.0 
│   │ │ │   ├─┬ isobject@2.1.0 
│   │ │ │   │ └── isarray@1.0.0 
│   │ │ │   ├─┬ randomatic@1.1.7 
│   │ │ │   │ ├─┬ is-number@3.0.0 
│   │ │ │   │ │ └── kind-of@3.2.2 
│   │ │ │   │ └── kind-of@4.0.0 
│   │ │ │   └── repeat-string@1.6.1 
│   │ │ ├── preserve@0.2.0 
│   │ │ └── repeat-element@1.1.2 
│   │ ├─┬ expand-brackets@0.1.5 
│   │ │ └── is-posix-bracket@0.1.1 
│   │ ├── extglob@0.3.2 
│   │ ├── filename-regex@2.0.1 
│   │ ├── is-extglob@1.0.0 
│   │ ├── is-glob@2.0.1 
│   │ ├── kind-of@3.2.2 
│   │ ├─┬ normalize-path@2.1.1 
│   │ │ └── remove-trailing-separator@1.0.2 
│   │ ├─┬ object.omit@2.0.1 
│   │ │ ├─┬ for-own@0.1.5 
│   │ │ │ └── for-in@1.0.2 
│   │ │ └── is-extendable@0.1.1 
│   │ ├─┬ parse-glob@3.0.4 
│   │ │ ├─┬ glob-base@0.3.0 
│   │ │ │ └── glob-parent@2.0.0 
│   │ │ └── is-dotfile@1.0.3 
│   │ └─┬ regex-cache@0.4.3 
│   │   ├── is-equal-shallow@0.1.3 
│   │   └── is-primitive@2.0.0 
│   └── strip-bom@3.0.0 
├── react@16.0.0-alpha.12 
├─┬ react-native@0.45.1 
│ ├── absolute-path@0.0.0 
│ ├── art@0.10.1 
│ ├── async@2.5.0 
│ ├─┬ babel-core@6.25.0 
│ │ ├── babel-code-frame@6.22.0 
│ │ ├── babel-helpers@6.24.1 
│ │ ├── babel-messages@6.23.0 
│ │ ├── babel-template@6.25.0 
│ │ ├── convert-source-map@1.5.0 
│ │ ├── private@0.1.7 
│ │ └── slash@1.0.0 
│ ├─┬ babel-generator@6.25.0 
│ │ ├─┬ detect-indent@4.0.0 
│ │ │ └─┬ repeating@2.0.1 
│ │ │   └── is-finite@1.0.2 
│ │ ├── jsesc@1.3.0 
│ │ └── trim-right@1.0.1 
│ ├── babel-plugin-external-helpers@6.22.0 
│ ├── babel-plugin-syntax-trailing-function-commas@6.22.0 
│ ├─┬ babel-plugin-transform-async-to-generator@6.16.0 
│ │ └── babel-helper-remap-async-to-generator@6.24.1 
│ ├─┬ babel-plugin-transform-flow-strip-types@6.22.0 
│ │ └── babel-plugin-syntax-flow@6.18.0 
│ ├─┬ babel-plugin-transform-object-rest-spread@6.23.0 
│ │ └── babel-plugin-syntax-object-rest-spread@6.13.0 
│ ├── babel-polyfill@6.23.0 
│ ├─┬ babel-preset-es2015-node@6.1.1 
│ │ ├── babel-plugin-transform-es2015-destructuring@6.23.0 
│ │ ├─┬ babel-plugin-transform-es2015-function-name@6.24.1 
│ │ │ └── babel-helper-function-name@6.24.1 
│ │ ├─┬ babel-plugin-transform-es2015-parameters@6.24.1 
│ │ │ ├── babel-helper-call-delegate@6.24.1 
│ │ │ └── babel-helper-get-function-arity@6.24.1 
│ │ ├── babel-plugin-transform-es2015-shorthand-properties@6.24.1 
│ │ ├── babel-plugin-transform-es2015-spread@6.22.0 
│ │ ├─┬ babel-plugin-transform-es2015-sticky-regex@6.24.1 
│ │ │ └── babel-helper-regex@6.24.1 
│ │ └─┬ babel-plugin-transform-es2015-unicode-regex@6.24.1 
│ │   └─┬ regexpu-core@2.0.0 
│ │     ├── regenerate@1.3.2 
│ │     ├── regjsgen@0.2.0 
│ │     └─┬ regjsparser@0.1.5 
│ │       └── jsesc@0.5.0 
│ ├─┬ babel-preset-fbjs@2.1.4 
│ │ ├── babel-plugin-check-es2015-constants@6.22.0 
│ │ ├── babel-plugin-syntax-class-properties@6.13.0 
│ │ ├── babel-plugin-syntax-jsx@6.18.0 
│ │ ├── babel-plugin-transform-class-properties@6.24.1 
│ │ ├── babel-plugin-transform-es2015-arrow-functions@6.22.0 
│ │ ├── babel-plugin-transform-es2015-block-scoped-functions@6.22.0 
│ │ ├── babel-plugin-transform-es2015-block-scoping@6.24.1 
│ │ ├─┬ babel-plugin-transform-es2015-classes@6.24.1 
│ │ │ ├── babel-helper-define-map@6.24.1 
│ │ │ ├── babel-helper-optimise-call-expression@6.24.1 
│ │ │ └── babel-helper-replace-supers@6.24.1 
│ │ ├── babel-plugin-transform-es2015-computed-properties@6.24.1 
│ │ ├── babel-plugin-transform-es2015-for-of@6.23.0 
│ │ ├── babel-plugin-transform-es2015-literals@6.22.0 
│ │ ├── babel-plugin-transform-es2015-object-super@6.24.1 
│ │ ├── babel-plugin-transform-react-display-name@6.25.0 
│ │ └─┬ babel-plugin-transform-react-jsx@6.24.1 
│ │   └── babel-helper-builder-react-jsx@6.24.1 
│ ├─┬ babel-preset-react-native@1.9.2 
│ │ ├── babel-plugin-react-transform@2.0.2 
│ │ ├── babel-plugin-syntax-async-functions@6.13.0 
│ │ ├── babel-plugin-transform-object-assign@6.22.0 
│ │ ├── babel-plugin-transform-react-jsx-source@6.22.0 
│ │ └─┬ babel-plugin-transform-regenerator@6.24.1 
│ │   └── regenerator-transform@0.9.11 
│ ├─┬ babel-register@6.24.1 
│ │ └─┬ home-or-tmp@2.0.0 
│ │   └── os-homedir@1.0.2 
│ ├─┬ babel-traverse@6.25.0 
│ │ └── globals@9.18.0 
│ ├─┬ babel-types@6.25.0 
│ │ ├── esutils@2.0.2 
│ │ └── to-fast-properties@1.0.3 
│ ├── babylon@6.17.4 
│ ├── base64-js@1.2.1 
│ ├─┬ bser@1.0.3 
│ │ └── node-int64@0.4.0 
│ ├─┬ connect@2.30.2 
│ │ ├── basic-auth-connect@1.0.0 
│ │ ├─┬ body-parser@1.13.3 
│ │ │ ├── iconv-lite@0.4.11 
│ │ │ └─┬ raw-body@2.1.7 
│ │ │   ├── bytes@2.4.0 
│ │ │   └── iconv-lite@0.4.13 
│ │ ├── bytes@2.1.0 
│ │ ├─┬ compression@1.5.2 
│ │ │ ├─┬ accepts@1.2.13 
│ │ │ │ └── negotiator@0.5.3 
│ │ │ ├── bytes@2.1.0 
│ │ │ ├── compressible@2.0.10 
│ │ │ ├─┬ debug@2.2.0 
│ │ │ │ └── ms@0.7.1 
│ │ │ └── vary@1.0.1 
│ │ ├─┬ connect-timeout@1.6.2 
│ │ │ ├── debug@2.2.0 
│ │ │ ├── http-errors@1.3.1 
│ │ │ └── ms@0.7.1 
│ │ ├── cookie@0.1.3 
│ │ ├─┬ cookie-parser@1.3.5 
│ │ │ └── cookie@0.1.3 
│ │ ├─┬ csurf@1.8.3 
│ │ │ ├── cookie@0.1.3 
│ │ │ ├─┬ csrf@3.0.6 
│ │ │ │ ├── rndm@1.2.0 
│ │ │ │ ├── tsscmp@1.0.5 
│ │ │ │ └─┬ uid-safe@2.1.4 
│ │ │ │   └── random-bytes@1.0.0 
│ │ │ └── http-errors@1.3.1 
│ │ ├─┬ debug@2.2.0 
│ │ │ └── ms@0.7.1 
│ │ ├── depd@1.0.1 
│ │ ├── errorhandler@1.4.3 
│ │ ├─┬ express-session@1.11.3 
│ │ │ ├── cookie@0.1.3 
│ │ │ ├── crc@3.3.0 
│ │ │ ├─┬ debug@2.2.0 
│ │ │ │ └── ms@0.7.1 
│ │ │ ├── depd@1.0.1 
│ │ │ └─┬ uid-safe@2.0.0 
│ │ │   └── base64-url@1.2.1 
│ │ ├─┬ finalhandler@0.4.0 
│ │ │ └── escape-html@1.0.2 
│ │ ├── fresh@0.3.0 
│ │ ├── http-errors@1.3.1 
│ │ ├── method-override@2.3.9 
│ │ ├─┬ morgan@1.6.1 
│ │ │ ├── basic-auth@1.0.4 
│ │ │ ├─┬ debug@2.2.0 
│ │ │ │ └── ms@0.7.1 
│ │ │ └── depd@1.0.1 
│ │ ├─┬ multiparty@3.3.2 
│ │ │ └── stream-counter@0.2.0 
│ │ ├── on-headers@1.0.1 
│ │ ├── pause@0.1.0 
│ │ ├── qs@4.0.0 
│ │ ├── response-time@2.3.2 
│ │ ├─┬ serve-favicon@2.3.2 
│ │ │ ├── etag@1.7.0 
│ │ │ ├── fresh@0.3.0 
│ │ │ └── ms@0.7.2 
│ │ ├─┬ serve-index@1.7.3 
│ │ │ ├─┬ accepts@1.2.13 
│ │ │ │ └── negotiator@0.5.3 
│ │ │ ├── batch@0.5.3 
│ │ │ ├─┬ debug@2.2.0 
│ │ │ │ └── ms@0.7.1 
│ │ │ └── http-errors@1.3.1 
│ │ ├─┬ serve-static@1.10.3 
│ │ │ ├── escape-html@1.0.3 
│ │ │ └─┬ send@0.13.2 
│ │ │   ├── depd@1.1.0 
│ │ │   ├── escape-html@1.0.3 
│ │ │   ├── etag@1.7.0 
│ │ │   ├── mime@1.3.4 
│ │ │   ├── range-parser@1.0.3 
│ │ │   └── statuses@1.2.1 
│ │ └── vhost@3.0.2 
│ ├── denodeify@1.2.1 
│ ├─┬ errno@0.1.4 
│ │ └── prr@0.0.0 
│ ├── event-target-shim@1.1.1 
│ ├─┬ fbjs-scripts@0.7.1 
│ │ ├── babel-preset-fbjs@1.0.0 
│ │ ├── core-js@1.2.7 
│ │ ├── cross-spawn@3.0.1 
│ │ ├─┬ gulp-util@3.0.8 
│ │ │ ├── array-differ@1.0.0 
│ │ │ ├── array-uniq@1.0.3 
│ │ │ ├── beeper@1.1.1 
│ │ │ ├── dateformat@2.0.0 
│ │ │ ├─┬ fancy-log@1.3.0 
│ │ │ │ └── time-stamp@1.1.0 
│ │ │ ├─┬ gulplog@1.0.0 
│ │ │ │ └── glogg@1.0.0 
│ │ │ ├─┬ has-gulplog@0.1.0 
│ │ │ │ └── sparkles@1.0.0 
│ │ │ ├── lodash._reescape@3.0.0 
│ │ │ ├── lodash._reevaluate@3.0.0 
│ │ │ ├── lodash._reinterpolate@3.0.0 
│ │ │ ├─┬ lodash.template@3.6.2 
│ │ │ │ ├── lodash._basecopy@3.0.1 
│ │ │ │ ├── lodash._basetostring@3.0.1 
│ │ │ │ ├── lodash._basevalues@3.0.0 
│ │ │ │ ├── lodash._isiterateecall@3.0.9 
│ │ │ │ ├─┬ lodash.escape@3.2.0 
│ │ │ │ │ └── lodash._root@3.0.1 
│ │ │ │ ├─┬ lodash.keys@3.1.2 
│ │ │ │ │ ├── lodash._getnative@3.9.1 
│ │ │ │ │ ├── lodash.isarguments@3.1.0 
│ │ │ │ │ └── lodash.isarray@3.0.4 
│ │ │ │ ├── lodash.restparam@3.6.1 
│ │ │ │ └── lodash.templatesettings@3.1.1 
│ │ │ ├─┬ multipipe@0.1.2 
│ │ │ │ └── duplexer2@0.0.2 
│ │ │ ├── object-assign@3.0.0 
│ │ │ ├── replace-ext@0.0.1 
│ │ │ └─┬ vinyl@0.5.3 
│ │ │   ├── clone@1.0.2 
│ │ │   └── clone-stats@0.0.1 
│ │ └─┬ through2@2.0.3 
│ │   ├─┬ readable-stream@2.3.3 
│ │   │ ├── isarray@1.0.0 
│ │   │ └── string_decoder@1.0.3 
│ │   └── xtend@4.0.1 
│ ├─┬ fs-extra@1.0.0 
│ │ └── jsonfile@2.4.0 
│ ├── image-size@0.3.5 
│ ├─┬ inquirer@0.12.0 
│ │ ├── ansi-escapes@1.4.0 
│ │ ├─┬ cli-cursor@1.0.2 
│ │ │ └─┬ restore-cursor@1.0.1 
│ │ │   ├── exit-hook@1.1.1 
│ │ │   └── onetime@1.1.0 
│ │ ├── figures@1.7.0 
│ │ ├─┬ readline2@1.0.1 
│ │ │ ├── is-fullwidth-code-point@1.0.0 
│ │ │ └── mute-stream@0.0.5 
│ │ ├── run-async@0.1.0 
│ │ ├── rx-lite@3.1.2 
│ │ └─┬ string-width@1.0.2 
│ │   ├── code-point-at@1.1.0 
│ │   └─┬ is-fullwidth-code-point@1.0.0 
│ │     └── number-is-nan@1.0.1 
│ ├─┬ jest-haste-map@20.0.4 
│ │ ├─┬ fb-watchman@2.0.0 
│ │ │ └── bser@2.0.0 
│ │ ├── jest-docblock@20.0.3 
│ │ ├─┬ sane@1.6.0 
│ │ │ ├── anymatch@1.3.0 
│ │ │ └─┬ fb-watchman@1.9.2 
│ │ │   └── bser@1.0.2 
│ │ └─┬ worker-farm@1.4.1 
│ │   └── xtend@4.0.1 
│ ├─┬ joi@6.10.1 
│ │ ├── isemail@1.2.0 
│ │ └── topo@1.1.0 
│ ├── json5@0.4.0 
│ ├── left-pad@1.1.3 
│ ├─┬ merge-stream@1.0.1 
│ │ └─┬ readable-stream@2.3.3 
│ │   ├── isarray@1.0.0 
│ │   └── string_decoder@1.0.3 
│ ├─┬ mime-types@2.1.11 
│ │ └── mime-db@1.23.0 
│ ├─┬ npmlog@2.0.4 
│ │ ├── ansi@0.3.1 
│ │ ├─┬ are-we-there-yet@1.1.4 
│ │ │ ├── delegates@1.0.0 
│ │ │ └─┬ readable-stream@2.3.3 
│ │ │   ├── isarray@1.0.0 
│ │ │   └── string_decoder@1.0.3 
│ │ └─┬ gauge@1.2.7 
│ │   ├── has-unicode@2.0.1 
│ │   ├── lodash.pad@4.5.1 
│ │   ├── lodash.padend@4.6.1 
│ │   └── lodash.padstart@4.6.1 
│ ├── opn@3.0.3 
│ ├─┬ optimist@0.6.1 
│ │ ├── minimist@0.0.10 
│ │ └── wordwrap@0.0.3 
│ ├─┬ plist@1.2.0 
│ │ ├── base64-js@0.0.8 
│ │ ├─┬ xmlbuilder@4.0.0 
│ │ │ └── lodash@3.10.1 
│ │ └── xmldom@0.1.27 
│ ├── pretty-format@4.3.1 
│ ├── react-clone-referenced-element@1.0.1 
│ ├─┬ react-devtools-core@2.4.0 
│ │ └─┬ ws@2.3.1 
│ │   ├── safe-buffer@5.0.1 
│ │   └── ultron@1.1.0 
│ ├── react-timer-mixin@0.13.3 
│ ├─┬ react-transform-hmr@1.0.4 
│ │ ├─┬ global@4.3.2 
│ │ │ ├─┬ min-document@2.19.0 
│ │ │ │ └── dom-walk@0.1.1 
│ │ │ └── process@0.5.2 
│ │ └─┬ react-proxy@1.1.8 
│ │   └── react-deep-force-update@1.0.1 
│ ├── rebound@0.0.13 
│ ├── regenerator-runtime@0.9.6 
│ ├── rimraf@2.6.1 
│ ├─┬ sane@1.4.1 
│ │ ├─┬ exec-sh@0.2.0 
│ │ │ └── merge@1.2.0 
│ │ ├─┬ fb-watchman@1.9.2 
│ │ │ └── bser@1.0.2 
│ │ ├─┬ walker@1.0.7 
│ │ │ └─┬ makeerror@1.0.11 
│ │ │   └── tmpl@1.0.4 
│ │ └── watch@0.10.0 
│ ├─┬ shell-quote@1.6.1 
│ │ ├── array-filter@0.0.1 
│ │ ├── array-map@0.0.0 
│ │ └── array-reduce@0.0.0 
│ ├── stacktrace-parser@0.1.4 
│ ├─┬ temp@0.8.3 
│ │ └── rimraf@2.2.8 
│ ├── throat@3.2.0 
│ ├─┬ uglify-js@2.7.5 
│ │ ├── async@0.2.10 
│ │ ├── uglify-to-browserify@1.0.2 
│ │ └─┬ yargs@3.10.0 
│ │   ├── camelcase@1.2.1 
│ │   ├─┬ cliui@2.1.0 
│ │   │ ├─┬ center-align@0.1.3 
│ │   │ │ ├─┬ align-text@0.1.4 
│ │   │ │ │ └── longest@1.0.1 
│ │   │ │ └── lazy-cache@1.0.4 
│ │   │ ├── right-align@0.1.3 
│ │   │ └── wordwrap@0.0.2 
│ │   └── window-size@0.1.0 
│ ├── whatwg-fetch@1.1.1 
│ ├── wordwrap@1.0.0 
│ ├─┬ write-file-atomic@1.3.4 
│ │ ├── imurmurhash@0.1.4 
│ │ └── slide@1.1.6 
│ ├─┬ ws@1.1.4 
│ │ ├── options@0.0.6 
│ │ └── ultron@1.0.2 
│ ├─┬ xcode@0.9.3 
│ │ ├── pegjs@0.10.0 
│ │ ├─┬ simple-plist@0.2.1 
│ │ │ ├─┬ bplist-creator@0.0.7 
│ │ │ │ └── stream-buffers@2.2.0 
│ │ │ ├─┬ bplist-parser@0.1.1 
│ │ │ │ └── big-integer@1.6.23 
│ │ │ └─┬ plist@2.0.1 
│ │ │   ├── base64-js@1.1.2 
│ │ │   └── xmlbuilder@8.2.2 
│ │ └── uuid@3.0.1 
│ ├─┬ xmldoc@0.4.0 
│ │ └── sax@1.1.6 
│ ├── xpipe@1.0.5 
│ ├── xtend@4.0.1 
│ └─┬ yargs@6.6.0 
│   ├── camelcase@3.0.0 
│   ├─┬ cliui@3.2.0 
│   │ ├─┬ string-width@1.0.2 
│   │ │ └── is-fullwidth-code-point@1.0.0 
│   │ └─┬ wrap-ansi@2.1.0 
│   │   └─┬ string-width@1.0.2 
│   │     └── is-fullwidth-code-point@1.0.0 
│   ├── decamelize@1.2.0 
│   ├── get-caller-file@1.0.2 
│   ├─┬ os-locale@1.4.0 
│   │ └─┬ lcid@1.0.0 
│   │   └── invert-kv@1.0.0 
│   ├─┬ read-pkg-up@1.0.1 
│   │ ├─┬ find-up@1.1.2 
│   │ │ └── path-exists@2.1.0 
│   │ └─┬ read-pkg@1.1.0 
│   │   ├─┬ load-json-file@1.1.0 
│   │   │ ├─┬ parse-json@2.2.0 
│   │   │ │ └─┬ error-ex@1.3.1 
│   │   │ │   └── is-arrayish@0.2.1 
│   │   │ └─┬ strip-bom@2.0.0 
│   │   │   └── is-utf8@0.2.1 
│   │   ├─┬ normalize-package-data@2.4.0 
│   │   │ ├── hosted-git-info@2.5.0 
│   │   │ ├─┬ is-builtin-module@1.0.0 
│   │   │ │ └── builtin-modules@1.1.1 
│   │   │ └─┬ validate-npm-package-license@3.0.1 
│   │   │   ├─┬ spdx-correct@1.0.2 
│   │   │   │ └── spdx-license-ids@1.2.2 
│   │   │   └── spdx-expression-parse@1.0.4 
│   │   └── path-type@1.1.0 
│   ├── require-directory@2.1.1 
│   ├── require-main-filename@1.0.1 
│   ├── set-blocking@2.0.0 
│   ├─┬ string-width@1.0.2 
│   │ └── is-fullwidth-code-point@1.0.0 
│   ├── which-module@1.0.0 
│   ├── y18n@3.2.1 
│   └── yargs-parser@4.2.1 
└── react-test-renderer@16.0.0-alpha.12 

npm WARN react-native-branch@2.0.0-beta.3 requires a peer of react@>=15.4.0 but none was installed.
npm WARN react-native-maps@0.15.2 requires a peer of react@>=15.4.0 but none was installed.
npm WARN lottie-react-native@1.1.1 requires a peer of react@>=15.3.1 but none was installed.


Success! Created grinder2 at /Users/jsheth/webdevcon/grinder2
Inside that directory, you can run several commands:

  npm start
    Starts the development server so you can open your app in the Expo
    app on your phone.

  npm run ios
    (Mac only, requires Xcode)
    Starts the development server and loads your app in an iOS simulator.

  npm run android
    (Requires Android build tools)
    Starts the development server and loads your app on a connected Android
    device or emulator.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd grinder2
  npm start

Happy hacking!
acbc32a00421:webdevcon jsheth$  cd grinder2
acbc32a00421:grinder2 jsheth$ npm start

> grinder2@0.1.0 start /Users/jsheth/webdevcon/grinder2
> react-native-scripts start

11:42:38 PM: Starting packager...
Packager started!

To view your app with live reloading, point the Expo app to this QR code.
You'll find the QR scanner on the Projects tab of the app.

                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        
                                                        

Or enter this address in the Expo app's search bar:

  exp://192.168.1.73:19000

Your phone will need to be on the same local network as this computer.

For links to install the Expo app, please visit https://expo.io.

Logs from serving your app will appear here. Press Ctrl+C at any time to stop.

^C11:56:53 PM: Stopping packager...

acbc32a00421:grinder2 jsheth$ 11:56:53 PM: Packager stopped.
ls
App.js		App.test.js	README.md	app.json	node_modules	package.json
acbc32a00421:grinder2 jsheth$ exp init grinder2
? Project type. Options are: "blank", "tabs" blank
[exp] Downloading project files...
[====================================================================================================] 100%
[exp] Extracting project files...
[exp] Customizing project...
[exp] Unable to initialize git repo. `git` not installed.
[exp] Starting project...
[exp] Your project is ready at /Users/jsheth/webdevcon/grinder2/grinder2. Use "exp start /Users/jsheth/webdevcon/grinder2/grinder2" to get started.
acbc32a00421:grinder2 jsheth$ ls
App.js		App.test.js	README.md	app.json	grinder2	node_modules	package.json
acbc32a00421:grinder2 jsheth$ ls
App.js		App.test.js	README.md	app.json	grinder2	node_modules	package.json
acbc32a00421:grinder2 jsheth$ cd ..
acbc32a00421:webdevcon jsheth$ ks
-bash: ks: command not found
acbc32a00421:webdevcon jsheth$ ls
grinder						npm-debug.log
grinder2					react-native-tinder-swipe-cards
my-app						react-native-tinder-swipe-cards-master.zip
node_modules
acbc32a00421:webdevcon jsheth$ cd ..
acbc32a00421:~ jsheth$ ks
-bash: ks: command not found
acbc32a00421:~ jsheth$ ls
AndroidStudioProjects				RetailSearchADP
Applications					RetailSearchPageletGroup
Certificate of Completion.pdf			RetailSearchShared
Desktop						Screen Shot 2017-04-18 at 9.02.16 PM.png
Documents					SearchExperienceShared
Downloads					Sites
Library						Ubuntu
Movies						brazil-pkg-cache
Music						desktop-workspace
PersonalWebsiteConfig				g2
PersonalWebsiteConfig.zip			local
Pictures					search.rendering.app.xml
Public						webdevcon
RSP						zshrc.rtf
acbc32a00421:~ jsheth$ pwd
/Users/jsheth
acbc32a00421:~ jsheth$ cd g2
acbc32a00421:g2 jsheth$ ls
App.js		app.json	assets		node_modules	package.json
acbc32a00421:g2 jsheth$ ls
App.js		Defaults.js	app.json	assets		node_modules	package.json	screenshots
acbc32a00421:g2 jsheth$ cd ..
acbc32a00421:~ jsheth$ npm install --save react-native-swipe-cards
npm WARN saveError ENOENT: no such file or directory, open '/Users/jsheth/package.json'
/Users/jsheth
└─┬ react-native-swipe-cards@0.1.0 
  └── clamp@1.0.1 

npm WARN enoent ENOENT: no such file or directory, open '/Users/jsheth/package.json'
npm WARN jsheth No description
npm WARN jsheth No repository field.
npm WARN jsheth No README data
npm WARN jsheth No license field.
acbc32a00421:~ jsheth$ ls
AndroidStudioProjects				RetailSearchPageletGroup
Applications					RetailSearchShared
Certificate of Completion.pdf			Screen Shot 2017-04-18 at 9.02.16 PM.png
Desktop						SearchExperienceShared
Documents					Sites
Downloads					Ubuntu
Library						brazil-pkg-cache
Movies						desktop-workspace
Music						g2
PersonalWebsiteConfig				g3
PersonalWebsiteConfig.zip			local
Pictures					node_modules
Public						search.rendering.app.xml
RSP						webdevcon
RetailSearchADP					zshrc.rtf
acbc32a00421:~ jsheth$ cd g3
acbc32a00421:g3 jsheth$ npm install --save react-native-swipe-cards
npm ERR! Darwin 15.6.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "install" "--save" "react-native-swipe-cards"
npm ERR! node v6.11.0
npm ERR! npm  v3.10.10
npm ERR! file /Users/jsheth/g3/package.json
npm ERR! code EJSONPARSE

npm ERR! Failed to parse json
npm ERR! Unexpected token ' ' at 9:24
npm ERR!     "clamp": "^1.0.1”,
npm ERR!                       ^
npm ERR! File: /Users/jsheth/g3/package.json
npm ERR! Failed to parse package.json data.
npm ERR! package.json must be actual JSON, not just JavaScript.
npm ERR! 
npm ERR! This is not a bug in npm.
npm ERR! Tell the package author to fix their package.json file. JSON.parse

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/jsheth/g3/npm-debug.log
acbc32a00421:g3 jsheth$ pwd
/Users/jsheth/g3
acbc32a00421:g3 jsheth$ cd ..
acbc32a00421:~ jsheth$ cd webdevcon/
acbc32a00421:webdevcon jsheth$ ls
grinder						npm-debug.log
grinder2					react-native-tinder-swipe-cards
my-app						react-native-tinder-swipe-cards-master.zip
node_modules
acbc32a00421:webdevcon jsheth$ rm -rf react-native-tinder-*
acbc32a00421:webdevcon jsheth$ ls
grinder		grinder2	my-app		node_modules	npm-debug.log
acbc32a00421:webdevcon jsheth$ ls
grinder						npm-debug.log
grinder2					react-native-tinder-swipe-cards
my-app						react-native-tinder-swipe-cards-master (1).zip
node_modules
acbc32a00421:webdevcon jsheth$ npm install --save react-native-swipe-cards
npm WARN saveError ENOENT: no such file or directory, open '/Users/jsheth/webdevcon/package.json'
/Users/jsheth/webdevcon
└── react-native-swipe-cards@0.1.0 

npm WARN enoent ENOENT: no such file or directory, open '/Users/jsheth/webdevcon/package.json'
npm WARN webdevcon No description
npm WARN webdevcon No repository field.
npm WARN webdevcon No README data
npm WARN webdevcon No license field.
acbc32a00421:webdevcon jsheth$ ls
grinder						node_modules
grinder2					react-native-tinder-swipe-cards
my-app						react-native-tinder-swipe-cards-master (1).zip
acbc32a00421:webdevcon jsheth$ cd react-native-tinder-swipe-cards
acbc32a00421:react-native-tinder-swipe-cards jsheth$ ls
Defaults.js	LICENSE		README.md	SwipeCards.js	package.json	screenshots
acbc32a00421:react-native-tinder-swipe-cards jsheth$ npm install --save react-native-swipe-cards
npm ERR! Darwin 15.6.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "install" "--save" "react-native-swipe-cards"
npm ERR! node v6.11.0
npm ERR! npm  v3.10.10
npm ERR! code ENOSELF

npm ERR! Refusing to install react-native-swipe-cards as a dependency of itself
npm ERR! 
npm ERR! If you need help, you may report this error at:
npm ERR!     <https://github.com/npm/npm/issues>

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/jsheth/webdevcon/react-native-tinder-swipe-cards/npm-debug.log
acbc32a00421:react-native-tinder-swipe-cards jsheth$ cd ..
acbc32a00421:webdevcon jsheth$ ls
grinder						node_modules
grinder2					react-native-tinder-swipe-cards
my-app						react-native-tinder-swipe-cards-master (1).zip
acbc32a00421:webdevcon jsheth$ cd ..
acbc32a00421:~ jsheth$ ls
AndroidStudioProjects				RetailSearchPageletGroup
Applications					RetailSearchShared
Certificate of Completion.pdf			Screen Shot 2017-04-18 at 9.02.16 PM.png
Desktop						SearchExperienceShared
Documents					Sites
Downloads					Ubuntu
Library						brazil-pkg-cache
Movies						desktop-workspace
Music						g2
PersonalWebsiteConfig				g3
PersonalWebsiteConfig.zip			local
Pictures					node_modules
Public						search.rendering.app.xml
RSP						webdevcon
RetailSearchADP					zshrc.rtf
acbc32a00421:~ jsheth$ cd g3
acbc32a00421:g3 jsheth$ npm install --save react-native-swipe-cards
npm ERR! Darwin 15.6.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "install" "--save" "react-native-swipe-cards"
npm ERR! node v6.11.0
npm ERR! npm  v3.10.10
npm ERR! file /Users/jsheth/g3/package.json
npm ERR! code EJSONPARSE

npm ERR! Failed to parse json
npm ERR! Unexpected token ' ' at 9:24
npm ERR!     "clamp": "^1.0.1”,
npm ERR!                       ^
npm ERR! File: /Users/jsheth/g3/package.json
npm ERR! Failed to parse package.json data.
npm ERR! package.json must be actual JSON, not just JavaScript.
npm ERR! 
npm ERR! This is not a bug in npm.
npm ERR! Tell the package author to fix their package.json file. JSON.parse

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/jsheth/g3/npm-debug.log
acbc32a00421:g3 jsheth$ ls
App.js		SwipeCards.js	app.json	node_modules	package.json
Defaults.js	Tinder.js	assets		npm-debug.log	screenshots
acbc32a00421:g3 jsheth$ ls
App.js		SwipeCards.js	app.json	node_modules	package.json
Defaults.js	Tinder.js	assets		npm-debug.log	screenshots
acbc32a00421:g3 jsheth$ npm install --save react-native-swipe-cards
g3@0.0.0 /Users/jsheth/g3
└─┬ react-native-swipe-cards@0.1.0 
  └── clamp@1.0.1 

npm WARN lottie-react-native@1.1.1 requires a peer of react@>=15.3.1 but none was installed.
npm WARN react-native-branch@2.0.0-beta.3 requires a peer of react@>=15.4.0 but none was installed.
npm WARN react-native-maps@0.15.2 requires a peer of react@>=15.4.0 but none was installed.
acbc32a00421:g3 jsheth$ ls
App.js		SwipeCards.js	app.json	node_modules	screenshots
Defaults.js	Tinder.js	assets		package.json
acbc32a00421:g3 jsheth$ pwd
/Users/jsheth/g3
acbc32a00421:g3 jsheth$ npm install
g3@0.0.0 /Users/jsheth/g3
└── clamp@1.0.1 

npm WARN lottie-react-native@1.1.1 requires a peer of react@>=15.3.1 but none was installed.
npm WARN react-native-branch@2.0.0-beta.3 requires a peer of react@>=15.4.0 but none was installed.
npm WARN react-native-maps@0.15.2 requires a peer of react@>=15.4.0 but none was installed.
acbc32a00421:g3 jsheth$ pwd
/Users/jsheth/g3
acbc32a00421:g3 jsheth$ npm install
npm WARN lottie-react-native@1.1.1 requires a peer of react@>=15.3.1 but none was installed.
npm WARN react-native-branch@2.0.0-beta.3 requires a peer of react@>=15.4.0 but none was installed.
npm WARN react-native-maps@0.15.2 requires a peer of react@>=15.4.0 but none was installed.
acbc32a00421:g3 jsheth$ ls
App.js		SwipeCards.js	app.json	node_modules	screenshots
Defaults.js	Tinder.js	assets		package.json
acbc32a00421:g3 jsheth$ cd assets
acbc32a00421:assets jsheth$ ls
icons
acbc32a00421:assets jsheth$ cd icons/
acbc32a00421:icons jsheth$ ls
app.png		loading.png
acbc32a00421:icons jsheth$ cd ..
acbc32a00421:assets jsheth$ ls
icons
acbc32a00421:assets jsheth$ cd ..
acbc32a00421:g3 jsheth$ ls
App.js		SwipeCards.js	app.json	node_modules	screenshots
Defaults.js	Tinder.js	assets		package.json
acbc32a00421:g3 jsheth$ npm install Jimmy-Johns
npm WARN deprecated node-uuid@1.4.8: Use uuid module instead
npm WARN deprecated tough-cookie@2.2.2: ReDoS vulnerability parsing Set-Cookie https://nodesecurity.io/advisories/130
g3@0.0.0 /Users/jsheth/g3
└─┬ Jimmy-Johns@0.1.2 
  └─┬ request@2.65.0 
    ├─┬ bl@1.0.3 
    │ └─┬ readable-stream@2.0.6 
    │   └── string_decoder@0.10.31 
    ├── caseless@0.11.0 
    ├── form-data@1.0.1 
    ├─┬ har-validator@2.0.6 
    │ └─┬ is-my-json-valid@2.16.0 
    │   ├── generate-function@2.0.0 
    │   ├─┬ generate-object-property@1.2.0 
    │   │ └── is-property@1.0.2 
    │   └── jsonpointer@4.0.1 
    ├─┬ http-signature@0.11.0 
    │ ├── asn1@0.1.11 
    │ ├── assert-plus@0.1.5 
    │ └── ctype@0.5.3 
    ├── node-uuid@1.4.8 
    ├── qs@5.2.1 
    ├── tough-cookie@2.2.2 
    └── tunnel-agent@0.4.3 

npm WARN lottie-react-native@1.1.1 requires a peer of react@>=15.3.1 but none was installed.
npm WARN react-native-branch@2.0.0-beta.3 requires a peer of react@>=15.4.0 but none was installed.
npm WARN react-native-maps@0.15.2 requires a peer of react@>=15.4.0 but none was installed.
acbc32a00421:g3 jsheth$ ls
App.js		SwipeCards.js	app.json	node_modules	screenshots
Defaults.js	Tinder.js	assets		package.json
acbc32a00421:g3 jsheth$ cd node_modules/
acbc32a00421:node_modules jsheth$ ls
@expo							is-builtin-module
Jimmy-Johns						is-dotfile
absolute-path						is-equal-shallow
accepts							is-extendable
ajv							is-extglob
align-text						is-finite
ansi							is-fullwidth-code-point
ansi-escapes						is-glob
ansi-regex						is-my-json-valid
ansi-styles						is-number
anymatch						is-posix-bracket
are-we-there-yet					is-primitive
argsarray						is-property
arr-diff						is-stream
arr-flatten						is-typedarray
array-differ						is-utf8
array-filter						isarray
array-map						isemail
array-reduce						isexe
array-uniq						isobject
array-unique						isomorphic-fetch
arrify							isstream
art							jest-docblock
asap							jest-haste-map
asn1							joi
assert-plus						js-tokens
async							jsbn
asynckit						jsesc
aws-sign2						json-schema
aws4							json-stable-stringify
babel-code-frame					json-stringify-safe
babel-core						json5
babel-generator						jsonfile
babel-helper-builder-binary-assignment-operator-visitor	jsonify
babel-helper-builder-react-jsx				jsonpointer
babel-helper-call-delegate				jsprim
babel-helper-define-map					kind-of
babel-helper-explode-assignable-expression		klaw
babel-helper-function-name				lazy-cache
babel-helper-get-function-arity				lcid
babel-helper-hoist-variables				left-pad
babel-helper-optimise-call-expression			load-json-file
babel-helper-regex					lodash
babel-helper-remap-async-to-generator			lodash._basecopy
babel-helper-replace-supers				lodash._basetostring
babel-helpers						lodash._basevalues
babel-messages						lodash._getnative
babel-plugin-check-es2015-constants			lodash._isiterateecall
babel-plugin-external-helpers				lodash._reescape
babel-plugin-module-resolver				lodash._reevaluate
babel-plugin-react-transform				lodash._reinterpolate
babel-plugin-syntax-async-functions			lodash._root
babel-plugin-syntax-class-constructor-call		lodash.escape
babel-plugin-syntax-class-properties			lodash.isarguments
babel-plugin-syntax-decorators				lodash.isarray
babel-plugin-syntax-do-expressions			lodash.keys
babel-plugin-syntax-exponentiation-operator		lodash.map
babel-plugin-syntax-export-extensions			lodash.pad
babel-plugin-syntax-flow				lodash.padend
babel-plugin-syntax-function-bind			lodash.padstart
babel-plugin-syntax-jsx					lodash.restparam
babel-plugin-syntax-object-rest-spread			lodash.template
babel-plugin-syntax-trailing-function-commas		lodash.templatesettings
babel-plugin-transform-async-to-generator		lodash.zipobject
babel-plugin-transform-class-constructor-call		longest
babel-plugin-transform-class-properties			loose-envify
babel-plugin-transform-decorators-legacy		lottie-ios
babel-plugin-transform-do-expressions			lottie-react-native
babel-plugin-transform-es2015-arrow-functions		lru-cache
babel-plugin-transform-es2015-block-scoped-functions	makeerror
babel-plugin-transform-es2015-block-scoping		md5-file
babel-plugin-transform-es2015-classes			media-typer
babel-plugin-transform-es2015-computed-properties	merge
babel-plugin-transform-es2015-destructuring		merge-stream
babel-plugin-transform-es2015-duplicate-keys		method-override
babel-plugin-transform-es2015-for-of			methods
babel-plugin-transform-es2015-function-name		micromatch
babel-plugin-transform-es2015-literals			mime
babel-plugin-transform-es2015-modules-amd		mime-db
babel-plugin-transform-es2015-modules-commonjs		mime-types
babel-plugin-transform-es2015-modules-systemjs		min-document
babel-plugin-transform-es2015-modules-umd		minimatch
babel-plugin-transform-es2015-object-super		minimist
babel-plugin-transform-es2015-parameters		mkdirp
babel-plugin-transform-es2015-shorthand-properties	moment
babel-plugin-transform-es2015-spread			morgan
babel-plugin-transform-es2015-sticky-regex		ms
babel-plugin-transform-es2015-template-literals		multiparty
babel-plugin-transform-es2015-typeof-symbol		multipipe
babel-plugin-transform-es2015-unicode-regex		mute-stream
babel-plugin-transform-es3-member-expression-literals	negotiator
babel-plugin-transform-es3-property-literals		node-fetch
babel-plugin-transform-exponentiation-operator		node-int64
babel-plugin-transform-export-extensions		noop-fn
babel-plugin-transform-flow-strip-types			normalize-package-data
babel-plugin-transform-function-bind			normalize-path
babel-plugin-transform-jscript				npmlog
babel-plugin-transform-object-assign			number-is-nan
babel-plugin-transform-object-rest-spread		oauth-sign
babel-plugin-transform-react-display-name		object-assign
babel-plugin-transform-react-jsx			object-keys
babel-plugin-transform-react-jsx-self			object.assign
babel-plugin-transform-react-jsx-source			object.omit
babel-plugin-transform-regenerator			on-finished
babel-plugin-transform-strict-mode			on-headers
babel-polyfill						once
babel-preset-airbnb					onetime
babel-preset-env					opn
babel-preset-es2015-node				optimist
babel-preset-expo					options
babel-preset-fbjs					os-homedir
babel-preset-flow					os-locale
babel-preset-react					os-tmpdir
babel-preset-react-native				parse-glob
babel-preset-react-native-stage-0			parse-json
babel-register						parseurl
babel-runtime						path-exists
babel-template						path-is-absolute
babel-traverse						path-parse
babel-types						path-type
babylon							pause
balanced-match						pegjs
base64-js						performance-now
base64-url						pify
basic-auth						pinkie
basic-auth-connect					pinkie-promise
batch							plist
bcrypt-pbkdf						pouchdb-collections
beeper							preserve
big-integer						pretty-format
bl							private
body-parser						process
boom							process-nextick-args
bplist-creator						promise
bplist-parser						prop-types
brace-expansion						prr
braces							pseudomap
browserslist						punycode
bser							qs
builtin-modules						random-bytes
bytes							randomatic
camelcase						range-parser
caniuse-lite						raw-body
caseless						react
center-align						react-clone-referenced-element
chalk							react-deep-force-update
clamp							react-devtools-core
cli-cursor						react-native
cli-width						react-native-branch
cliui							react-native-fbads
clone							react-native-maps
clone-stats						react-native-safe-module
co							react-native-svg
code-point-at						react-native-swipe-cards
color							react-native-vector-icons
color-convert						react-proxy
color-name						react-timer-mixin
color-string						react-transform-hmr
combined-stream						read-pkg
commander						read-pkg-up
compressible						readable-stream
compression						readline2
concat-map						rebound
concat-stream						regenerate
connect							regenerator-runtime
connect-timeout						regenerator-transform
content-type						regex-cache
convert-source-map					regexpu-core
cookie							regjsgen
cookie-parser						regjsparser
cookie-signature					remove-trailing-separator
core-js							repeat-element
core-util-is						repeat-string
crc							repeating
create-react-class					replace-ext
cross-spawn						request
cryptiles						require-directory
csrf							require-main-filename
csurf							resolve
ctype							response-time
dashdash						restore-cursor
dateformat						right-align
debug							rimraf
decamelize						rndm
dedent							run-async
define-properties					rx-lite
delayed-stream						safe-buffer
delegates						sane
denodeify						sax
depd							semver
destroy							send
detect-indent						serve-favicon
dom-walk						serve-index
duplexer2						serve-static
ecc-jsbn						set-blocking
ee-first						setimmediate
electron-to-chromium					shell-quote
encoding						simple-plist
errno							slash
error-ex						slide
errorhandler						sntp
escape-html						source-map
escape-string-regexp					source-map-support
esutils							sparkles
etag							spdx-correct
event-target-shim					spdx-expression-parse
eventemitter3						spdx-license-ids
exec-sh							sshpk
exit-hook						stacktrace-parser
expand-brackets						statuses
expand-range						stream-buffers
expo							stream-counter
express-session						string-width
extend							string_decoder
extglob							stringstream
extsprintf						strip-ansi
fancy-log						strip-bom
fb-watchman						supports-color
fbemitter						temp
fbjs							throat
fbjs-scripts						through
figures							through2
filename-regex						time-stamp
fill-range						tiny-queue
finalhandler						tmpl
find-babel-config					to-fast-properties
find-up							topo
for-in							tough-cookie
for-own							trim-right
foreach							tsscmp
forever-agent						tunnel-agent
form-data						tweetnacl
fresh							type-is
fs-extra						typedarray
fs.realpath						ua-parser-js
function-bind						uglify-js
gauge							uglify-to-browserify
generate-function					uid-safe
generate-object-property				ultron
get-caller-file						unpipe
getpass							util-deprecate
glob							utils-merge
glob-base						uuid
glob-parent						uuid-js
global							validate-npm-package-license
globals							vary
glogg							verror
graceful-fs						vhost
graceful-readlink					vinyl
gulp-util						walker
gulplog							watch
har-schema						websql
har-validator						whatwg-fetch
has-ansi						which
has-gulplog						which-module
has-unicode						window-size
hawk							wordwrap
hoek							worker-farm
home-or-tmp						wrap-ansi
hosted-git-info						wrappy
http-errors						write-file-atomic
http-signature						ws
iconv-lite						xcode
image-size						xmlbuilder
immediate						xmldoc
imurmurhash						xmldom
inflight						xpipe
inherits						xtend
inquirer						y18n
invariant						yallist
invert-kv						yargs
is-arrayish						yargs-parser
is-buffer
acbc32a00421:node_modules jsheth$ cd Jimmy-Johns/
acbc32a00421:Jimmy-Johns jsheth$ ls
README.md	main.js		node_modules	package.json
acbc32a00421:Jimmy-Johns jsheth$ vi main.js
acbc32a00421:Jimmy-Johns jsheth$ vi main.js
acbc32a00421:Jimmy-Johns jsheth$ pwd
/Users/jsheth/g3/node_modules/Jimmy-Johns
acbc32a00421:Jimmy-Johns jsheth$ vi main.js

var request = require('request');request.jar();
request = request.defaults({jar: true});


var JJ = {

  order: function(user_info, order_items, callback){
    /*
    user_info:
        email
        password
        first_name
        last_name
        phone
        tip_amount
        location_id
        is_test
        verbose

        address:
            line1
            line2
            city
            state
            zipcode
            longitude
            latitude

        payment_info:
            exp_month
            exp_year
            cvv
    */

    if (user_info == null || user_info.address == null || user_info.payment_info == null) {
      callback(false, {msg:"You are missing some user information!"});
      return;
    }

    log("Attempting Order from Jimmy John's");

