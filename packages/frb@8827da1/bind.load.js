montageDefine("8827da1","bind",{dependencies:["./parse","./algebra","./stringify","./compile-observer","./compile-binder","./compile-assigner","./observers","./binders","./scope"],factory:function(e,t,n){function i(e,t,n){n.target=e,n.targetPath=t;var i=n.source=n.source||e,u=n["<-"]||n["<->"]||"",c=n.twoWay="<->"in n;n.sourcePath=u,n.value;var h=n.parameters=n.parameters||i,d=n.document,p=n.components,m=n.trace,v=n.sourceScope=new f(i);v.parameters=h,v.document=d,v.components=p;var g=n.targetScope=new f(e);if(g.parameters=h,g.document=d,g.components=p,n.converter){var _=n.converter;_.convert&&(n.convert=_.convert.bind(_)),_.revert&&(n.revert=_.revert.bind(_))}else if(n.reverter){var b=n.reverter;b.convert&&(n.revert=b.convert.bind(b)),b.revert&&(n.convert=b.revert.bind(b))}var y=n.convert,w=n.revert,E=n.sourceSyntax=o(u),C=n.targetSyntax=o(t),S=s(C,E);if(C=S[0],E=S[1],c&&"rangeContent"===C.type)return a(g,C.args[0],v,E,y,w,n,m?{sourcePath:l(E),targetPath:l(C.args[0])}:null);m&&console.log("DEFINE BINDING",t,"<-",u,e);var T=r(g,C,v,E,y,n,m),S=s(E,C);E=S[0],C=S[1];var P=Function.noop;return c&&(m&&console.log("DEFINE BINDING",t,"->",u,i),P=r(v,E,g,C,w,n,m)),function(){T(),P()}}function r(e,t,n,i,r,a,o){var s=u(i);r&&(s=d.makeConverterObserver(s,r,n));var h=c(t);return h(s,n,e,a,o?{sourcePath:l(i),targetPath:l(t)}:null)}function a(e,t,n,i,r,a,o,s){function l(e,t,n){v||(v=!0,s&&console.log("RANGE CONTENT PROPAGATED",s.targetPath,"<-",s.sourcePath,"PLUS",e,"MINUS",t,"AT",n),f.swap(n,t.length,e),v=!1)}function c(e,t,n){v||(v=!0,s&&console.log("RANGE CONTENT PROPAGATED",s.targetPath,"->",s.sourcePath,"PLUS",e,"MINUS",t,"AT",n),m.swap(n,t.length,e),v=!1)}function d(){if(m!==f){s&&console.log("RANGE CONTENT BOUND",s.targetPath,"<->",s.sourcePath),v=!0;var t=p(m,l,n),i=p(f,c,e);return v=!1,function(){s&&console.log("RANGE CONTENT UNBOUND",s.targetPath,"<->",s.sourcePath),t(),i()}}}var f,m,v,g=u(i),_=u(t),b=h(i),y=h(t),w=Function.noop;v=!0;var E=_(function(e){w(),w=Function.noop,s&&console.log("RANGE CONTENT TARGET",s.targetPath,"SET TO",e),e&&e.addRangeChangeListener&&(f=e,m&&f?(s&&console.log("RANGE CONTENT TARGET REPLACES SOURCE",s.targetPath,"->",s.sourcePath,"WITH",f),v=!0,m.swap(0,m.length,f),v=!1,w=d()):m||v||(s&&console.log("RANGE CONTENT TARGET INITIALIZED TO COPY OF SOURCE",s.targetPath,"<-",tarce.sourcePath,"WITH",m),b(f.clone(),n)))},e);v=!1;var C=g(function(t){w(),w=Function.noop,s&&console.log("RANGE CONTENT SOURCE",s.sourcePath,"SET TO",t),t&&t.addRangeChangeListener&&(m=t,f&&m?(s&&console.log("RANGE CONTENT SOURCE REPLACES TARGET",s.targetPath,"<-",s.sourcePath,"WITH",m),v=!0,f.swap(0,f.length,m),v=!1,w=d()):f||y(m.clone(),e))},n);return f||m||b([],n),function(){w(),E(),C()}}var o=e("./parse"),s=e("./algebra"),l=e("./stringify"),u=e("./compile-observer"),c=e("./compile-binder"),h=e("./compile-assigner"),d=e("./observers"),p=d.observeRangeChange;e("./binders");var f=e("./scope");n.exports=i}});