montageDefine("aad2a25","index",{dependencies:["buffer"],factory:function(e,t){function n(e){if(e&&!s(e))throw Error("Unknown encoding: "+e)}function r(e){return e.toString(this.encoding)}function i(e){var t=this.charReceived=e.length%2;return this.charLength=t?2:0,t}function a(e){var t=this.charReceived=e.length%3;return this.charLength=t?3:0,t}var o=e("buffer").Buffer,s=o.isEncoding||function(e){switch(e&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}},l=t.StringDecoder=function(e){switch(this.encoding=(e||"utf8").toLowerCase().replace(/[-_]/,""),n(e),this.encoding){case"utf8":this.surrogateSize=3;break;case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=i;break;case"base64":this.surrogateSize=3,this.detectIncompleteChar=a;break;default:return this.write=r,void 0}this.charBuffer=new o(6),this.charReceived=0,this.charLength=0};l.prototype.write=function(e){for(var t="",n=0;this.charLength;){var r=e.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:e.length;if(e.copy(this.charBuffer,this.charReceived,n,r),this.charReceived+=r-n,n=r,this.charReceived<this.charLength)return"";t=this.charBuffer.slice(0,this.charLength).toString(this.encoding);var i=t.charCodeAt(t.length-1);if(!(i>=55296&&56319>=i)){if(this.charReceived=this.charLength=0,r==e.length)return t;e=e.slice(r,e.length);break}this.charLength+=this.surrogateSize,t=""}var a=this.detectIncompleteChar(e),o=e.length;this.charLength&&(e.copy(this.charBuffer,0,e.length-a,o),this.charReceived=a,o-=a),t+=e.toString(this.encoding,0,o);var o=t.length-1,i=t.charCodeAt(o);if(i>=55296&&56319>=i){var s=this.surrogateSize;return this.charLength+=s,this.charReceived+=s,this.charBuffer.copy(this.charBuffer,s,0,s),this.charBuffer.write(t.charAt(t.length-1),this.encoding),t.substring(0,o)}return t},l.prototype.detectIncompleteChar=function(e){for(var t=e.length>=3?3:e.length;t>0;t--){var n=e[e.length-t];if(1==t&&6==n>>5){this.charLength=2;break}if(2>=t&&14==n>>4){this.charLength=3;break}if(3>=t&&30==n>>3){this.charLength=4;break}}return t},l.prototype.end=function(e){var t="";if(e&&e.length&&(t=this.write(e)),this.charReceived){var n=this.charReceived,r=this.charBuffer,i=this.encoding;t+=r.slice(0,n).toString(i)}return t}}});