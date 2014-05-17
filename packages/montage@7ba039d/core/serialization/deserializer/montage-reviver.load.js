montageDefine("7ba039d","core/serialization/deserializer/montage-reviver",{dependencies:["../../core","mousse/deserialization/reviver","./properties-deserializer","./self-deserializer","./unit-deserializer","../../module-reference","../alias","../../promise"],factory:function(e,t){var n=e("../../core").Montage,r=e("mousse/deserialization/reviver").Reviver,i=e("./properties-deserializer").PropertiesDeserializer,a=e("./self-deserializer").SelfDeserializer,o=e("./unit-deserializer").UnitDeserializer,s=e("../../module-reference").ModuleReference,l=e("../alias").Alias,u=e("../../promise").Promise,c=n.specialize({_require:{value:null},_objectRequires:{value:null},init:{value:function(e,t){if("function"!=typeof e)throw Error("Function 'require' missing.");if("string"!=typeof e.location)throw Error("Function 'require' location is missing");if("object"!=typeof t&&t!==void 0)throw Error("Parameter 'objectRequires' should be an object.");return this._require=e,this._objectRequires=t,this}},getExports:{value:function(e,t){var n;for(t=e.resolve(t),n=e.getModuleDescriptor(t);void 0!==n.redirect;)n=e.getModuleDescriptor(n.redirect);return void 0!==n.mappingRedirect?this.getExports(n.mappingRequire,n.mappingRedirect):n.exports}},getModule:{value:function(e,t){var n,r,i=this._objectRequires;return n=i&&t in i?i[t]:this._require,r=this.getExports(n,e),r||(r=n.async(e)),r}}}),d=t.MontageReviver=n.specialize.call(r,{moduleLoader:{value:null},init:{value:function(e,t){return this.moduleLoader=(new c).init(e,t),this}},getTypeOf:{value:function(e){if(null!==e&&"object"==typeof e&&1===Object.keys(e).length){if("#"in e)return"Element";if("%"in e)return"Module"}return r.prototype.getTypeOf.call(this,e)}},_checkLabel:{value:function(e,t){return t&&":"!==e[0]?Error('Aliases can only be defined in template properties (start with a colon (:)), "'+e+'".'):t||":"!==e[0]?void 0:Error('Only aliases are allowed as template properties (start with a colon (:), "'+e+'".')}},reviveRootObject:{value:function(e,t,n){var i,a="alias"in e;return i=this._checkLabel(n,a),i?u.reject(i):r.prototype.reviveRootObject.apply(this,arguments)}},reviveElement:{value:function(e,t,n){var r=e["#"],i=t.getElementById(r);return i?(n&&t.setObjectLabel(i,n),i):u.reject(Error("Element with id '"+r+"' was not found."))}},reviveModule:{value:function(e,t){var n=e["%"],r=t.getRequire();n=r.resolve(n);var i=r.getModuleDescriptor(n);return(new s).initWithIdAndRequire(i.id,i.require)}},reviveCustomObject:{value:function(e,t,n){return"alias"in e?this.reviveAlias(e,t,n):this.reviveMontageObject(e,t,n)}},reviveMontageObject:{value:function(e,t,n){var r,i,a,o=this,s=e.prototype||e.object;return s&&(i=d.parseObjectLocationId(s),r=this.moduleLoader.getModule(i.moduleId,n),a=i.objectName),u.isPromise(r)?r.then(function(r){return o.instantiateMontageObject(e,r,a,t,n)},function(t){throw t.stack&&console.error(t.stack),Error('Error deserializing "'+n+'" when loading module "'+i.moduleId+"' from '"+e.prototype+"'")}):this.instantiateMontageObject(e,r,a,t,n)}},instantiateMontageObject:{value:function(e,t,n,r,i){var a,o,s=this;return a=this.getMontageObject(e,t,n,r,i),r.setObjectLabel(a,i),a.isDeserializing=!0,o=this.reviveObjectLiteral(e,r),u.isPromise(o)?o.then(function(e){return s.deserializeMontageObject(e,a,r,i)}):this.deserializeMontageObject(o,a,r,i)}},deserializeMontageObject:{value:function(e,t,n,r){var i;return"function"==typeof t.deserializeSelf?this.deserializeCustomMontageObject(t,e,n,r):(n.setUnitsToDeserialize(t,e,d._unitNames),i=this.deserializeMontageObjectProperties(t,e.properties,n),u.isPromise(i)?i.then(function(){return t}):t)}},deserializeMontageObjectProperties:{value:function(e,t,n){var r;if("function"==typeof e.deserializeProperties){var a=(new i).initWithReviverAndObjects(this,n);r=e.deserializeProperties(a)}else for(var o in t)e[o]=t[o];return r}},deserializeCustomMontageObject:{value:function(e,t,n,r){var i,o=(new a).initWithObjectAndObjectDescriptorAndContextAndUnitNames(e,t,n,d._unitNames);return i=e.deserializeSelf(o),u.isPromise(i)?i.then(function(e){return n.setObjectLabel(e,r),e}):i!==void 0?(n.setObjectLabel(i,r),i):e}},getMontageObject:{value:function(e,t,n,r,i){var a;if(r.hasUserObject(i))return r.getUserObject(i);if("prototype"in e){if(!(n in t))throw Error('Error deserializing "'+i+'": object named "'+n+'"'+' was not found in "'+e.prototype+'".'+" Available objects are: "+Object.keys(t)+".");return a=Object.create(t[n].prototype),a.isDeserializing=!0,"function"==typeof a.didCreate?a.didCreate():"function"==typeof a.constructor&&a.constructor(),a}if("object"in e){if(!(n in t))throw Error('Error deserializing "'+i+'": object named "'+a+"' was not found given '"+e.object+"'");return t[n]}throw Error("Error deserializing "+JSON.stringify(e)+', might need "prototype" or "object" on label '+JSON.stringify(i))}},reviveAlias:{value:function(e,t,n){var r=new l;return r.value=e.alias,t.setObjectLabel(r,n),r}},didReviveObjects:{value:function(e,t){var n,r=this;return n=this._deserializeUnits(t),u.isPromise(n)?n.then(function(){r._invokeDeserializedFromSerialization(e,t)}):(this._invokeDeserializedFromSerialization(e,t),void 0)}},_invokeDeserializedFromSerialization:{value:function(e,t){var n;for(var r in e)n=e[r],null!=n&&delete n.isDeserializing,t.hasUserObject(r)||n&&"function"==typeof n.deserializedFromSerialization&&n.deserializedFromSerialization(r)}},_deserializeUnits:{value:function(e){var t,n,r=e.getUnitsToDeserialize(),i=d._unitRevivers;try{for(var a,s=0;a=r[s];s++){t=a.unitNames;for(var l,c=0;l=t[c];c++)l in a.objectDesc&&(n=(new o).initWithContext(e),i[l](n,a.object,a.objectDesc[l]))}}catch(h){return u.reject(h)}}}},{_unitRevivers:{value:Object.create(null)},_unitNames:{value:[]},_findObjectNameRegExp:{value:/([^\/]+?)(\.reel)?$/},_toCamelCaseRegExp:{value:/(?:^|-)([^-])/g},_replaceToCamelCase:{value:function(e,t){return t.toUpperCase()}},_locationDescCache:{value:Object.create(null)},parseObjectLocationId:{value:function(e){var t,n,r,i,a=this._locationDescCache;return e in a?t=a[e]:(n=e.indexOf("["),n>0?(r=e.substr(0,n),i=e.slice(n+1,-1)):(r=e,this._findObjectNameRegExp.test(e),i=RegExp.$1.replace(this._toCamelCaseRegExp,this._replaceToCamelCase)),t={moduleId:r,objectName:i},a[e]=t),t}},defineUnitReviver:{value:function(e,t){this._unitRevivers[e]=t,this._unitNames.push(e)}},getTypeOf:{value:function(e){return this.prototype.getTypeOf.call(this,e)}}});t!==void 0&&(t.MontageReviver=d)}});