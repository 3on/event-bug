montageDefine("8827da1","merge",{dependencies:["collections/shim"],factory:function(e,t){"use strict";function n(e,t){for(var n,i=(t.length+1)*(e.length+1),r=Array(i),a=Array(t.length+1),o=Array(t.length+1),s=0;e.length+1>s;s++){for(var l=0;t.length+1>l;l++){var u,c;if(0===s&&0===l)u=" ",c=0;else if(0===s)u="insert",c=l;else if(0===l)u="delete",c=s;else if(e[s-1]===t[l-1])u="retain",c=o[l-1];else{var h=a[l-1],d=o[l];h>d?(u="delete",c=d+1):(u="insert",c=h+1)}r[s+l*(e.length+1)]=u,a[l]=c}n=a,a=o,o=n}return{edges:r,cost:o[t.length],source:t,target:e}}function i(e){for(var t,n,i=[],r=e.edges,a=t=e.target.length,o=e.source.length;t||o;){var s=r[t+o*(a+1)];if("delete"===s){if(n&&"delete"===n[0])n[1]++;else{var l=["delete",1];n=l,i.push(l)}t--}else if("insert"===s){if(n&&"insert"===n[0])n[1]++;else{var l=["insert",1];n=l,i.push(l)}o--}else if("retain"===s){var l=["retain",1];n&&"retain"===n[0]?n[1]++:(n=l,i.push(l)),t--,o--}}return i.reverse(),i}function r(e,t){return i(n(e,t))}function a(e,t){for(var n=r(e,t),i=[],a=0,o=0,s=0;n.length>s;){var l=n[s++];if("insert"===l[0])i.push([o,0,t.slice(o,o+l[1])]),o+=l[1];else if("delete"===l[0])if(n.length>s&&"insert"===n[s][0]){var u=n[s++];i.push([o,l[1],t.slice(o,o+u[1])]),a+=l[1],o+=u[1]}else i.push([o,l[1]]),a+=l[1];else"retain"==l[0]&&(a+=l[1],o+=l[1])}return i}function o(e,t){for(var n=0;t.length>n;n++)e.swap.apply(e,t[n])}function s(e,t){o(e,a(e,t))}e("collections/shim"),t.graphOt=n,t.traceOt=i,t.ot=r,t.diff=a,t.apply=o,t.merge=s}});