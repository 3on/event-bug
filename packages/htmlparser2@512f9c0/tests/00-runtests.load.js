montageDefine("512f9c0","tests/00-runtests",{dependencies:["fs","path","assert"],factory:function(e){var t=e("fs"),n=e("path"),i=e("assert"),r=0,a=0,o=!1;["./01-events.js","./02-stream.js","./03-feed.js"].map(e).forEach(function(s){console.log("\nStarting",s.dir,"\n----");var l=n.resolve(__dirname,s.dir);t.readdirSync(l).filter(RegExp.prototype.test,/^[^\._]/).map(function(e){return n.resolve(l,e)}).map(e).forEach(function(e){r++,console.log("Testing:",e.name);var t=!1;s.test(e,function(n,s){i.ifError(n),i.deepEqual(e.expected,s,"didn't get expected output"),t?(a++,!--r&&o&&console.log("Total tests:",a)):t=!0})})});var o=!0}});