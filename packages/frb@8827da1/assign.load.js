montageDefine("8827da1","assign",{dependencies:["./parse","./compile-assigner","./scope"],factory:function(e,t,n){function i(e,t,n,i,s,l){var u;u="string"==typeof t?r(t):t;var c=a(u),h=new o(e);return h.parameters=i,h.document=s,h.components=l,c(n,h)}var r=e("./parse"),a=e("./compile-assigner"),o=e("./scope");n.exports=i}});