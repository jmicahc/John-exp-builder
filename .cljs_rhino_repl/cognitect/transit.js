// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__28888_28892 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__28889_28893 = null;
var count__28890_28894 = (0);
var i__28891_28895 = (0);
while(true){
if((i__28891_28895 < count__28890_28894)){
var k_28896 = cljs.core._nth.call(null,chunk__28889_28893,i__28891_28895);
var v_28897 = (b[k_28896]);
(a[k_28896] = v_28897);

var G__28898 = seq__28888_28892;
var G__28899 = chunk__28889_28893;
var G__28900 = count__28890_28894;
var G__28901 = (i__28891_28895 + (1));
seq__28888_28892 = G__28898;
chunk__28889_28893 = G__28899;
count__28890_28894 = G__28900;
i__28891_28895 = G__28901;
continue;
} else {
var temp__4425__auto___28902 = cljs.core.seq.call(null,seq__28888_28892);
if(temp__4425__auto___28902){
var seq__28888_28903__$1 = temp__4425__auto___28902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28888_28903__$1)){
var c__16082__auto___28904 = cljs.core.chunk_first.call(null,seq__28888_28903__$1);
var G__28905 = cljs.core.chunk_rest.call(null,seq__28888_28903__$1);
var G__28906 = c__16082__auto___28904;
var G__28907 = cljs.core.count.call(null,c__16082__auto___28904);
var G__28908 = (0);
seq__28888_28892 = G__28905;
chunk__28889_28893 = G__28906;
count__28890_28894 = G__28907;
i__28891_28895 = G__28908;
continue;
} else {
var k_28909 = cljs.core.first.call(null,seq__28888_28903__$1);
var v_28910 = (b[k_28909]);
(a[k_28909] = v_28910);

var G__28911 = cljs.core.next.call(null,seq__28888_28903__$1);
var G__28912 = null;
var G__28913 = (0);
var G__28914 = (0);
seq__28888_28892 = G__28911;
chunk__28889_28893 = G__28912;
count__28890_28894 = G__28913;
i__28891_28895 = G__28914;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__15877__auto__,writer__15878__auto__,opt__15879__auto__){
return cljs.core._write.call(null,writer__15878__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__15877__auto__,writer__15878__auto__,opt__15879__auto__){
return cljs.core._write.call(null,writer__15878__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args28915 = [];
var len__16337__auto___28918 = arguments.length;
var i__16338__auto___28919 = (0);
while(true){
if((i__16338__auto___28919 < len__16337__auto___28918)){
args28915.push((arguments[i__16338__auto___28919]));

var G__28920 = (i__16338__auto___28919 + (1));
i__16338__auto___28919 = G__28920;
continue;
} else {
}
break;
}

var G__28917 = args28915.length;
switch (G__28917) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28915.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__28922 = (i + (2));
var G__28923 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__28922;
ret = G__28923;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__15877__auto__,writer__15878__auto__,opt__15879__auto__){
return cljs.core._write.call(null,writer__15878__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__15877__auto__,writer__15878__auto__,opt__15879__auto__){
return cljs.core._write.call(null,writer__15878__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__28924_28928 = cljs.core.seq.call(null,v);
var chunk__28925_28929 = null;
var count__28926_28930 = (0);
var i__28927_28931 = (0);
while(true){
if((i__28927_28931 < count__28926_28930)){
var x_28932 = cljs.core._nth.call(null,chunk__28925_28929,i__28927_28931);
ret.push(x_28932);

var G__28933 = seq__28924_28928;
var G__28934 = chunk__28925_28929;
var G__28935 = count__28926_28930;
var G__28936 = (i__28927_28931 + (1));
seq__28924_28928 = G__28933;
chunk__28925_28929 = G__28934;
count__28926_28930 = G__28935;
i__28927_28931 = G__28936;
continue;
} else {
var temp__4425__auto___28937 = cljs.core.seq.call(null,seq__28924_28928);
if(temp__4425__auto___28937){
var seq__28924_28938__$1 = temp__4425__auto___28937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28924_28938__$1)){
var c__16082__auto___28939 = cljs.core.chunk_first.call(null,seq__28924_28938__$1);
var G__28940 = cljs.core.chunk_rest.call(null,seq__28924_28938__$1);
var G__28941 = c__16082__auto___28939;
var G__28942 = cljs.core.count.call(null,c__16082__auto___28939);
var G__28943 = (0);
seq__28924_28928 = G__28940;
chunk__28925_28929 = G__28941;
count__28926_28930 = G__28942;
i__28927_28931 = G__28943;
continue;
} else {
var x_28944 = cljs.core.first.call(null,seq__28924_28938__$1);
ret.push(x_28944);

var G__28945 = cljs.core.next.call(null,seq__28924_28938__$1);
var G__28946 = null;
var G__28947 = (0);
var G__28948 = (0);
seq__28924_28928 = G__28945;
chunk__28925_28929 = G__28946;
count__28926_28930 = G__28947;
i__28927_28931 = G__28948;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__15877__auto__,writer__15878__auto__,opt__15879__auto__){
return cljs.core._write.call(null,writer__15878__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__15877__auto__,writer__15878__auto__,opt__15879__auto__){
return cljs.core._write.call(null,writer__15878__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__28949_28953 = cljs.core.seq.call(null,v);
var chunk__28950_28954 = null;
var count__28951_28955 = (0);
var i__28952_28956 = (0);
while(true){
if((i__28952_28956 < count__28951_28955)){
var x_28957 = cljs.core._nth.call(null,chunk__28950_28954,i__28952_28956);
ret.push(x_28957);

var G__28958 = seq__28949_28953;
var G__28959 = chunk__28950_28954;
var G__28960 = count__28951_28955;
var G__28961 = (i__28952_28956 + (1));
seq__28949_28953 = G__28958;
chunk__28950_28954 = G__28959;
count__28951_28955 = G__28960;
i__28952_28956 = G__28961;
continue;
} else {
var temp__4425__auto___28962 = cljs.core.seq.call(null,seq__28949_28953);
if(temp__4425__auto___28962){
var seq__28949_28963__$1 = temp__4425__auto___28962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28949_28963__$1)){
var c__16082__auto___28964 = cljs.core.chunk_first.call(null,seq__28949_28963__$1);
var G__28965 = cljs.core.chunk_rest.call(null,seq__28949_28963__$1);
var G__28966 = c__16082__auto___28964;
var G__28967 = cljs.core.count.call(null,c__16082__auto___28964);
var G__28968 = (0);
seq__28949_28953 = G__28965;
chunk__28950_28954 = G__28966;
count__28951_28955 = G__28967;
i__28952_28956 = G__28968;
continue;
} else {
var x_28969 = cljs.core.first.call(null,seq__28949_28963__$1);
ret.push(x_28969);

var G__28970 = cljs.core.next.call(null,seq__28949_28963__$1);
var G__28971 = null;
var G__28972 = (0);
var G__28973 = (0);
seq__28949_28953 = G__28970;
chunk__28950_28954 = G__28971;
count__28951_28955 = G__28972;
i__28952_28956 = G__28973;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__15877__auto__,writer__15878__auto__,opt__15879__auto__){
return cljs.core._write.call(null,writer__15878__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__28974_28978 = cljs.core.seq.call(null,v);
var chunk__28975_28979 = null;
var count__28976_28980 = (0);
var i__28977_28981 = (0);
while(true){
if((i__28977_28981 < count__28976_28980)){
var x_28982 = cljs.core._nth.call(null,chunk__28975_28979,i__28977_28981);
ret.push(x_28982);

var G__28983 = seq__28974_28978;
var G__28984 = chunk__28975_28979;
var G__28985 = count__28976_28980;
var G__28986 = (i__28977_28981 + (1));
seq__28974_28978 = G__28983;
chunk__28975_28979 = G__28984;
count__28976_28980 = G__28985;
i__28977_28981 = G__28986;
continue;
} else {
var temp__4425__auto___28987 = cljs.core.seq.call(null,seq__28974_28978);
if(temp__4425__auto___28987){
var seq__28974_28988__$1 = temp__4425__auto___28987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28974_28988__$1)){
var c__16082__auto___28989 = cljs.core.chunk_first.call(null,seq__28974_28988__$1);
var G__28990 = cljs.core.chunk_rest.call(null,seq__28974_28988__$1);
var G__28991 = c__16082__auto___28989;
var G__28992 = cljs.core.count.call(null,c__16082__auto___28989);
var G__28993 = (0);
seq__28974_28978 = G__28990;
chunk__28975_28979 = G__28991;
count__28976_28980 = G__28992;
i__28977_28981 = G__28993;
continue;
} else {
var x_28994 = cljs.core.first.call(null,seq__28974_28988__$1);
ret.push(x_28994);

var G__28995 = cljs.core.next.call(null,seq__28974_28988__$1);
var G__28996 = null;
var G__28997 = (0);
var G__28998 = (0);
seq__28974_28978 = G__28995;
chunk__28975_28979 = G__28996;
count__28976_28980 = G__28997;
i__28977_28981 = G__28998;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__15877__auto__,writer__15878__auto__,opt__15879__auto__){
return cljs.core._write.call(null,writer__15878__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__15877__auto__,writer__15878__auto__,opt__15879__auto__){
return cljs.core._write.call(null,writer__15878__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args28999 = [];
var len__16337__auto___29010 = arguments.length;
var i__16338__auto___29011 = (0);
while(true){
if((i__16338__auto___29011 < len__16337__auto___29010)){
args28999.push((arguments[i__16338__auto___29011]));

var G__29012 = (i__16338__auto___29011 + (1));
i__16338__auto___29011 = G__29012;
continue;
} else {
}
break;
}

var G__29001 = args28999.length;
switch (G__29001) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28999.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__29002 = obj;
G__29002.push(kfn.call(null,k),vfn.call(null,v));

return G__29002;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x29003 = cljs.core.clone.call(null,handlers);
x29003.forEach = ((function (x29003,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__29004 = cljs.core.seq.call(null,coll);
var chunk__29005 = null;
var count__29006 = (0);
var i__29007 = (0);
while(true){
if((i__29007 < count__29006)){
var vec__29008 = cljs.core._nth.call(null,chunk__29005,i__29007);
var k = cljs.core.nth.call(null,vec__29008,(0),null);
var v = cljs.core.nth.call(null,vec__29008,(1),null);
f.call(null,v,k);

var G__29014 = seq__29004;
var G__29015 = chunk__29005;
var G__29016 = count__29006;
var G__29017 = (i__29007 + (1));
seq__29004 = G__29014;
chunk__29005 = G__29015;
count__29006 = G__29016;
i__29007 = G__29017;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29004);
if(temp__4425__auto__){
var seq__29004__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29004__$1)){
var c__16082__auto__ = cljs.core.chunk_first.call(null,seq__29004__$1);
var G__29018 = cljs.core.chunk_rest.call(null,seq__29004__$1);
var G__29019 = c__16082__auto__;
var G__29020 = cljs.core.count.call(null,c__16082__auto__);
var G__29021 = (0);
seq__29004 = G__29018;
chunk__29005 = G__29019;
count__29006 = G__29020;
i__29007 = G__29021;
continue;
} else {
var vec__29009 = cljs.core.first.call(null,seq__29004__$1);
var k = cljs.core.nth.call(null,vec__29009,(0),null);
var v = cljs.core.nth.call(null,vec__29009,(1),null);
f.call(null,v,k);

var G__29022 = cljs.core.next.call(null,seq__29004__$1);
var G__29023 = null;
var G__29024 = (0);
var G__29025 = (0);
seq__29004 = G__29022;
chunk__29005 = G__29023;
count__29006 = G__29024;
i__29007 = G__29025;
continue;
}
} else {
return null;
}
}
break;
}
});})(x29003,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x29003;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args29026 = [];
var len__16337__auto___29032 = arguments.length;
var i__16338__auto___29033 = (0);
while(true){
if((i__16338__auto___29033 < len__16337__auto___29032)){
args29026.push((arguments[i__16338__auto___29033]));

var G__29034 = (i__16338__auto___29033 + (1));
i__16338__auto___29033 = G__29034;
continue;
} else {
}
break;
}

var G__29028 = args29026.length;
switch (G__29028) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29026.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit29029 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit29029 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta29030){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta29030 = meta29030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit29029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29031,meta29030__$1){
var self__ = this;
var _29031__$1 = this;
return (new cognitect.transit.t_cognitect$transit29029(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta29030__$1));
});

cognitect.transit.t_cognitect$transit29029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29031){
var self__ = this;
var _29031__$1 = this;
return self__.meta29030;
});

cognitect.transit.t_cognitect$transit29029.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit29029.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit29029.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit29029.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit29029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta29030","meta29030",-1172235963,null)], null);
});

cognitect.transit.t_cognitect$transit29029.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit29029.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit29029";

cognitect.transit.t_cognitect$transit29029.cljs$lang$ctorPrWriter = (function (this__15877__auto__,writer__15878__auto__,opt__15879__auto__){
return cljs.core._write.call(null,writer__15878__auto__,"cognitect.transit/t_cognitect$transit29029");
});

cognitect.transit.__GT_t_cognitect$transit29029 = (function cognitect$transit$__GT_t_cognitect$transit29029(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta29030){
return (new cognitect.transit.t_cognitect$transit29029(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta29030));
});

}

return (new cognitect.transit.t_cognitect$transit29029(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__15279__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__15279__auto__)){
return or__15279__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map