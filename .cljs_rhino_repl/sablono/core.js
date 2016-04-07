// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom.server');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__29329__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__29328 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__29328,(0),null);
var body = cljs.core.nthnext.call(null,vec__29328,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__29329 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29330__i = 0, G__29330__a = new Array(arguments.length -  0);
while (G__29330__i < G__29330__a.length) {G__29330__a[G__29330__i] = arguments[G__29330__i + 0]; ++G__29330__i;}
  args = new cljs.core.IndexedSeq(G__29330__a,0);
} 
return G__29329__delegate.call(this,args);};
G__29329.cljs$lang$maxFixedArity = 0;
G__29329.cljs$lang$applyTo = (function (arglist__29331){
var args = cljs.core.seq(arglist__29331);
return G__29329__delegate(args);
});
G__29329.cljs$core$IFn$_invoke$arity$variadic = G__29329__delegate;
return G__29329;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__16051__auto__ = (function sablono$core$update_arglists_$_iter__29336(s__29337){
return (new cljs.core.LazySeq(null,(function (){
var s__29337__$1 = s__29337;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29337__$1);
if(temp__4425__auto__){
var s__29337__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29337__$2)){
var c__16049__auto__ = cljs.core.chunk_first.call(null,s__29337__$2);
var size__16050__auto__ = cljs.core.count.call(null,c__16049__auto__);
var b__29339 = cljs.core.chunk_buffer.call(null,size__16050__auto__);
if((function (){var i__29338 = (0);
while(true){
if((i__29338 < size__16050__auto__)){
var args = cljs.core._nth.call(null,c__16049__auto__,i__29338);
cljs.core.chunk_append.call(null,b__29339,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__29340 = (i__29338 + (1));
i__29338 = G__29340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29339),sablono$core$update_arglists_$_iter__29336.call(null,cljs.core.chunk_rest.call(null,s__29337__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29339),null);
}
} else {
var args = cljs.core.first.call(null,s__29337__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__29336.call(null,cljs.core.rest.call(null,s__29337__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16051__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__16344__auto__ = [];
var len__16337__auto___29346 = arguments.length;
var i__16338__auto___29347 = (0);
while(true){
if((i__16338__auto___29347 < len__16337__auto___29346)){
args__16344__auto__.push((arguments[i__16338__auto___29347]));

var G__29348 = (i__16338__auto___29347 + (1));
i__16338__auto___29347 = G__29348;
continue;
} else {
}
break;
}

var argseq__16345__auto__ = ((((0) < args__16344__auto__.length))?(new cljs.core.IndexedSeq(args__16344__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__16345__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__16051__auto__ = (function sablono$core$iter__29342(s__29343){
return (new cljs.core.LazySeq(null,(function (){
var s__29343__$1 = s__29343;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29343__$1);
if(temp__4425__auto__){
var s__29343__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29343__$2)){
var c__16049__auto__ = cljs.core.chunk_first.call(null,s__29343__$2);
var size__16050__auto__ = cljs.core.count.call(null,c__16049__auto__);
var b__29345 = cljs.core.chunk_buffer.call(null,size__16050__auto__);
if((function (){var i__29344 = (0);
while(true){
if((i__29344 < size__16050__auto__)){
var style = cljs.core._nth.call(null,c__16049__auto__,i__29344);
cljs.core.chunk_append.call(null,b__29345,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__29349 = (i__29344 + (1));
i__29344 = G__29349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29345),sablono$core$iter__29342.call(null,cljs.core.chunk_rest.call(null,s__29343__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29345),null);
}
} else {
var style = cljs.core.first.call(null,s__29343__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__29342.call(null,cljs.core.rest.call(null,s__29343__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16051__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq29341){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29341));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to29350 = (function sablono$core$link_to29350(var_args){
var args__16344__auto__ = [];
var len__16337__auto___29353 = arguments.length;
var i__16338__auto___29354 = (0);
while(true){
if((i__16338__auto___29354 < len__16337__auto___29353)){
args__16344__auto__.push((arguments[i__16338__auto___29354]));

var G__29355 = (i__16338__auto___29354 + (1));
i__16338__auto___29354 = G__29355;
continue;
} else {
}
break;
}

var argseq__16345__auto__ = ((((1) < args__16344__auto__.length))?(new cljs.core.IndexedSeq(args__16344__auto__.slice((1)),(0))):null);
return sablono.core.link_to29350.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16345__auto__);
});

sablono.core.link_to29350.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to29350.cljs$lang$maxFixedArity = (1);

sablono.core.link_to29350.cljs$lang$applyTo = (function (seq29351){
var G__29352 = cljs.core.first.call(null,seq29351);
var seq29351__$1 = cljs.core.next.call(null,seq29351);
return sablono.core.link_to29350.cljs$core$IFn$_invoke$arity$variadic(G__29352,seq29351__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to29350);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to29356 = (function sablono$core$mail_to29356(var_args){
var args__16344__auto__ = [];
var len__16337__auto___29361 = arguments.length;
var i__16338__auto___29362 = (0);
while(true){
if((i__16338__auto___29362 < len__16337__auto___29361)){
args__16344__auto__.push((arguments[i__16338__auto___29362]));

var G__29363 = (i__16338__auto___29362 + (1));
i__16338__auto___29362 = G__29363;
continue;
} else {
}
break;
}

var argseq__16345__auto__ = ((((1) < args__16344__auto__.length))?(new cljs.core.IndexedSeq(args__16344__auto__.slice((1)),(0))):null);
return sablono.core.mail_to29356.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16345__auto__);
});

sablono.core.mail_to29356.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__29359){
var vec__29360 = p__29359;
var content = cljs.core.nth.call(null,vec__29360,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__15279__auto__ = content;
if(cljs.core.truth_(or__15279__auto__)){
return or__15279__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to29356.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to29356.cljs$lang$applyTo = (function (seq29357){
var G__29358 = cljs.core.first.call(null,seq29357);
var seq29357__$1 = cljs.core.next.call(null,seq29357);
return sablono.core.mail_to29356.cljs$core$IFn$_invoke$arity$variadic(G__29358,seq29357__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to29356);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list29364 = (function sablono$core$unordered_list29364(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__16051__auto__ = (function sablono$core$unordered_list29364_$_iter__29369(s__29370){
return (new cljs.core.LazySeq(null,(function (){
var s__29370__$1 = s__29370;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29370__$1);
if(temp__4425__auto__){
var s__29370__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29370__$2)){
var c__16049__auto__ = cljs.core.chunk_first.call(null,s__29370__$2);
var size__16050__auto__ = cljs.core.count.call(null,c__16049__auto__);
var b__29372 = cljs.core.chunk_buffer.call(null,size__16050__auto__);
if((function (){var i__29371 = (0);
while(true){
if((i__29371 < size__16050__auto__)){
var x = cljs.core._nth.call(null,c__16049__auto__,i__29371);
cljs.core.chunk_append.call(null,b__29372,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__29373 = (i__29371 + (1));
i__29371 = G__29373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29372),sablono$core$unordered_list29364_$_iter__29369.call(null,cljs.core.chunk_rest.call(null,s__29370__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29372),null);
}
} else {
var x = cljs.core.first.call(null,s__29370__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list29364_$_iter__29369.call(null,cljs.core.rest.call(null,s__29370__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16051__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list29364);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list29374 = (function sablono$core$ordered_list29374(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__16051__auto__ = (function sablono$core$ordered_list29374_$_iter__29379(s__29380){
return (new cljs.core.LazySeq(null,(function (){
var s__29380__$1 = s__29380;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29380__$1);
if(temp__4425__auto__){
var s__29380__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29380__$2)){
var c__16049__auto__ = cljs.core.chunk_first.call(null,s__29380__$2);
var size__16050__auto__ = cljs.core.count.call(null,c__16049__auto__);
var b__29382 = cljs.core.chunk_buffer.call(null,size__16050__auto__);
if((function (){var i__29381 = (0);
while(true){
if((i__29381 < size__16050__auto__)){
var x = cljs.core._nth.call(null,c__16049__auto__,i__29381);
cljs.core.chunk_append.call(null,b__29382,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__29383 = (i__29381 + (1));
i__29381 = G__29383;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29382),sablono$core$ordered_list29374_$_iter__29379.call(null,cljs.core.chunk_rest.call(null,s__29380__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29382),null);
}
} else {
var x = cljs.core.first.call(null,s__29380__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list29374_$_iter__29379.call(null,cljs.core.rest.call(null,s__29380__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16051__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list29374);
/**
 * Create an image element.
 */
sablono.core.image29384 = (function sablono$core$image29384(var_args){
var args29385 = [];
var len__16337__auto___29388 = arguments.length;
var i__16338__auto___29389 = (0);
while(true){
if((i__16338__auto___29389 < len__16337__auto___29388)){
args29385.push((arguments[i__16338__auto___29389]));

var G__29390 = (i__16338__auto___29389 + (1));
i__16338__auto___29389 = G__29390;
continue;
} else {
}
break;
}

var G__29387 = args29385.length;
switch (G__29387) {
case 1:
return sablono.core.image29384.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image29384.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29385.length)].join('')));

}
});

sablono.core.image29384.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image29384.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image29384.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image29384);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__29392_SHARP_,p2__29393_SHARP_){
return [cljs.core.str(p1__29392_SHARP_),cljs.core.str("["),cljs.core.str(p2__29393_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__29394_SHARP_,p2__29395_SHARP_){
return [cljs.core.str(p1__29394_SHARP_),cljs.core.str("-"),cljs.core.str(p2__29395_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field29396 = (function sablono$core$color_field29396(var_args){
var args29397 = [];
var len__16337__auto___29464 = arguments.length;
var i__16338__auto___29465 = (0);
while(true){
if((i__16338__auto___29465 < len__16337__auto___29464)){
args29397.push((arguments[i__16338__auto___29465]));

var G__29466 = (i__16338__auto___29465 + (1));
i__16338__auto___29465 = G__29466;
continue;
} else {
}
break;
}

var G__29399 = args29397.length;
switch (G__29399) {
case 1:
return sablono.core.color_field29396.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field29396.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29397.length)].join('')));

}
});

sablono.core.color_field29396.cljs$core$IFn$_invoke$arity$1 = (function (name__21676__auto__){
return sablono.core.color_field29396.call(null,name__21676__auto__,null);
});

sablono.core.color_field29396.cljs$core$IFn$_invoke$arity$2 = (function (name__21676__auto__,value__21677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__21676__auto__,value__21677__auto__);
});

sablono.core.color_field29396.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field29396);

/**
 * Creates a date input field.
 */
sablono.core.date_field29400 = (function sablono$core$date_field29400(var_args){
var args29401 = [];
var len__16337__auto___29468 = arguments.length;
var i__16338__auto___29469 = (0);
while(true){
if((i__16338__auto___29469 < len__16337__auto___29468)){
args29401.push((arguments[i__16338__auto___29469]));

var G__29470 = (i__16338__auto___29469 + (1));
i__16338__auto___29469 = G__29470;
continue;
} else {
}
break;
}

var G__29403 = args29401.length;
switch (G__29403) {
case 1:
return sablono.core.date_field29400.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field29400.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29401.length)].join('')));

}
});

sablono.core.date_field29400.cljs$core$IFn$_invoke$arity$1 = (function (name__21676__auto__){
return sablono.core.date_field29400.call(null,name__21676__auto__,null);
});

sablono.core.date_field29400.cljs$core$IFn$_invoke$arity$2 = (function (name__21676__auto__,value__21677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__21676__auto__,value__21677__auto__);
});

sablono.core.date_field29400.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field29400);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field29404 = (function sablono$core$datetime_field29404(var_args){
var args29405 = [];
var len__16337__auto___29472 = arguments.length;
var i__16338__auto___29473 = (0);
while(true){
if((i__16338__auto___29473 < len__16337__auto___29472)){
args29405.push((arguments[i__16338__auto___29473]));

var G__29474 = (i__16338__auto___29473 + (1));
i__16338__auto___29473 = G__29474;
continue;
} else {
}
break;
}

var G__29407 = args29405.length;
switch (G__29407) {
case 1:
return sablono.core.datetime_field29404.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field29404.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29405.length)].join('')));

}
});

sablono.core.datetime_field29404.cljs$core$IFn$_invoke$arity$1 = (function (name__21676__auto__){
return sablono.core.datetime_field29404.call(null,name__21676__auto__,null);
});

sablono.core.datetime_field29404.cljs$core$IFn$_invoke$arity$2 = (function (name__21676__auto__,value__21677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__21676__auto__,value__21677__auto__);
});

sablono.core.datetime_field29404.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field29404);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field29408 = (function sablono$core$datetime_local_field29408(var_args){
var args29409 = [];
var len__16337__auto___29476 = arguments.length;
var i__16338__auto___29477 = (0);
while(true){
if((i__16338__auto___29477 < len__16337__auto___29476)){
args29409.push((arguments[i__16338__auto___29477]));

var G__29478 = (i__16338__auto___29477 + (1));
i__16338__auto___29477 = G__29478;
continue;
} else {
}
break;
}

var G__29411 = args29409.length;
switch (G__29411) {
case 1:
return sablono.core.datetime_local_field29408.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field29408.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29409.length)].join('')));

}
});

sablono.core.datetime_local_field29408.cljs$core$IFn$_invoke$arity$1 = (function (name__21676__auto__){
return sablono.core.datetime_local_field29408.call(null,name__21676__auto__,null);
});

sablono.core.datetime_local_field29408.cljs$core$IFn$_invoke$arity$2 = (function (name__21676__auto__,value__21677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__21676__auto__,value__21677__auto__);
});

sablono.core.datetime_local_field29408.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field29408);

/**
 * Creates a email input field.
 */
sablono.core.email_field29412 = (function sablono$core$email_field29412(var_args){
var args29413 = [];
var len__16337__auto___29480 = arguments.length;
var i__16338__auto___29481 = (0);
while(true){
if((i__16338__auto___29481 < len__16337__auto___29480)){
args29413.push((arguments[i__16338__auto___29481]));

var G__29482 = (i__16338__auto___29481 + (1));
i__16338__auto___29481 = G__29482;
continue;
} else {
}
break;
}

var G__29415 = args29413.length;
switch (G__29415) {
case 1:
return sablono.core.email_field29412.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field29412.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29413.length)].join('')));

}
});

sablono.core.email_field29412.cljs$core$IFn$_invoke$arity$1 = (function (name__21676__auto__){
return sablono.core.email_field29412.call(null,name__21676__auto__,null);
});

sablono.core.email_field29412.cljs$core$IFn$_invoke$arity$2 = (function (name__21676__auto__,value__21677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__21676__auto__,value__21677__auto__);
});

sablono.core.email_field29412.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field29412);

/**
 * Creates a file input field.
 */
sablono.core.file_field29416 = (function sablono$core$file_field29416(var_args){
var args29417 = [];
var len__16337__auto___29484 = arguments.length;
var i__16338__auto___29485 = (0);
while(true){
if((i__16338__auto___29485 < len__16337__auto___29484)){
args29417.push((arguments[i__16338__auto___29485]));

var G__29486 = (i__16338__auto___29485 + (1));
i__16338__auto___29485 = G__29486;
continue;
} else {
}
break;
}

var G__29419 = args29417.length;
switch (G__29419) {
case 1:
return sablono.core.file_field29416.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field29416.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29417.length)].join('')));

}
});

sablono.core.file_field29416.cljs$core$IFn$_invoke$arity$1 = (function (name__21676__auto__){
return sablono.core.file_field29416.call(null,name__21676__auto__,null);
});

sablono.core.file_field29416.cljs$core$IFn$_invoke$arity$2 = (function (name__21676__auto__,value__21677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__21676__auto__,value__21677__auto__);
});

sablono.core.file_field29416.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field29416);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field29420 = (function sablono$core$hidden_field29420(var_args){
var args29421 = [];
var len__16337__auto___29488 = arguments.length;
var i__16338__auto___29489 = (0);
while(true){
if((i__16338__auto___29489 < len__16337__auto___29488)){
args29421.push((arguments[i__16338__auto___29489]));

var G__29490 = (i__16338__auto___29489 + (1));
i__16338__auto___29489 = G__29490;
continue;
} else {
}
break;
}

var G__29423 = args29421.length;
switch (G__29423) {
case 1:
return sablono.core.hidden_field29420.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field29420.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29421.length)].join('')));

}
});

sablono.core.hidden_field29420.cljs$core$IFn$_invoke$arity$1 = (function (name__21676__auto__){
return sablono.core.hidden_field29420.call(null,name__21676__auto__,null);
});

sablono.core.hidden_field29420.cljs$core$IFn$_invoke$arity$2 = (function (name__21676__auto__,value__21677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__21676__auto__,value__21677__auto__);
});

sablono.core.hidden_field29420.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field29420);

/**
 * Creates a month input field.
 */
sablono.core.month_field29424 = (function sablono$core$month_field29424(var_args){
var args29425 = [];
var len__16337__auto___29492 = arguments.length;
var i__16338__auto___29493 = (0);
while(true){
if((i__16338__auto___29493 < len__16337__auto___29492)){
args29425.push((arguments[i__16338__auto___29493]));

var G__29494 = (i__16338__auto___29493 + (1));
i__16338__auto___29493 = G__29494;
continue;
} else {
}
break;
}

var G__29427 = args29425.length;
switch (G__29427) {
case 1:
return sablono.core.month_field29424.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field29424.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29425.length)].join('')));

}
});

sablono.core.month_field29424.cljs$core$IFn$_invoke$arity$1 = (function (name__21676__auto__){
return sablono.core.month_field29424.call(null,name__21676__auto__,null);
});

sablono.core.month_field29424.cljs$core$IFn$_invoke$arity$2 = (function (name__21676__auto__,value__21677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__21676__auto__,value__21677__auto__);
});

sablono.core.month_field29424.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field29424);

/**
 * Creates a number input field.
 */
sablono.core.number_field29428 = (function sablono$core$number_field29428(var_args){
var args29429 = [];
var len__16337__auto___29496 = arguments.length;
var i__16338__auto___29497 = (0);
while(true){
if((i__16338__auto___29497 < len__16337__auto___29496)){
args29429.push((arguments[i__16338__auto___29497]));

var G__29498 = (i__16338__auto___29497 + (1));
i__16338__auto___29497 = G__29498;
continue;
} else {
}
break;
}

var G__29431 = args29429.length;
switch (G__29431) {
case 1:
return sablono.core.number_field29428.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field29428.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29429.length)].join('')));

}
});

sablono.core.number_field29428.cljs$core$IFn$_invoke$arity$1 = (function (name__21676__auto__){
return sablono.core.number_field29428.call(null,name__21676__auto__,null);
});

sablono.core.number_field29428.cljs$core$IFn$_invoke$arity$2 = (function (name__21676__auto__,value__21677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__21676__auto__,value__21677__auto__);
});

sablono.core.number_field29428.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field29428);

/**
 * Creates a password input field.
 */
sablono.core.password_field29432 = (function sablono$core$password_field29432(var_args){
var args29433 = [];
var len__16337__auto___29500 = arguments.length;
var i__16338__auto___29501 = (0);
while(true){
if((i__16338__auto___29501 < len__16337__auto___29500)){
args29433.push((arguments[i__16338__auto___29501]));

var G__29502 = (i__16338__auto___29501 + (1));
i__16338__auto___29501 = G__29502;
continue;
} else {
}
break;
}

var G__29435 = args29433.length;
switch (G__29435) {
case 1:
return sablono.core.password_field29432.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field29432.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29433.length)].join('')));

}
});

sablono.core.password_field29432.cljs$core$IFn$_invoke$arity$1 = (function (name__21676__auto__){
return sablono.core.password_field29432.call(null,name__21676__auto__,null);
});

sablono.core.password_field29432.cljs$core$IFn$_invoke$arity$2 = (function (name__21676__auto__,value__21677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__21676__auto__,value__21677__auto__);
});

sablono.core.password_field29432.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field29432);

/**
 * Creates a range input field.
 */
sablono.core.range_field29436 = (function sablono$core$range_field29436(var_args){
var args29437 = [];
var len__16337__auto___29504 = arguments.length;
var i__16338__auto___29505 = (0);
while(true){
if((i__16338__auto___29505 < len__16337__auto___29504)){
args29437.push((arguments[i__16338__auto___29505]));

var G__29506 = (i__16338__auto___29505 + (1));
i__16338__auto___29505 = G__29506;
continue;
} else {
}
break;
}

var G__29439 = args29437.length;
switch (G__29439) {
case 1:
return sablono.core.range_field29436.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field29436.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29437.length)].join('')));

}
});

sablono.core.range_field29436.cljs$core$IFn$_invoke$arity$1 = (function (name__21676__auto__){
return sablono.core.range_field29436.call(null,name__21676__auto__,null);
});

sablono.core.range_field29436.cljs$core$IFn$_invoke$arity$2 = (function (name__21676__auto__,value__21677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__21676__auto__,value__21677__auto__);
});

sablono.core.range_field29436.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field29436);

/**
 * Creates a search input field.
 */
sablono.core.search_field29440 = (function sablono$core$search_field29440(var_args){
var args29441 = [];
var len__16337__auto___29508 = arguments.length;
var i__16338__auto___29509 = (0);
while(true){
if((i__16338__auto___29509 < len__16337__auto___29508)){
args29441.push((arguments[i__16338__auto___29509]));

var G__29510 = (i__16338__auto___29509 + (1));
i__16338__auto___29509 = G__29510;
continue;
} else {
}
break;
}

var G__29443 = args29441.length;
switch (G__29443) {
case 1:
return sablono.core.search_field29440.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field29440.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29441.length)].join('')));

}
});

sablono.core.search_field29440.cljs$core$IFn$_invoke$arity$1 = (function (name__21676__auto__){
return sablono.core.search_field29440.call(null,name__21676__auto__,null);
});

sablono.core.search_field29440.cljs$core$IFn$_invoke$arity$2 = (function (name__21676__auto__,value__21677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__21676__auto__,value__21677__auto__);
});

sablono.core.search_field29440.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field29440);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field29444 = (function sablono$core$tel_field29444(var_args){
var args29445 = [];
var len__16337__auto___29512 = arguments.length;
var i__16338__auto___29513 = (0);
while(true){
if((i__16338__auto___29513 < len__16337__auto___29512)){
args29445.push((arguments[i__16338__auto___29513]));

var G__29514 = (i__16338__auto___29513 + (1));
i__16338__auto___29513 = G__29514;
continue;
} else {
}
break;
}

var G__29447 = args29445.length;
switch (G__29447) {
case 1:
return sablono.core.tel_field29444.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field29444.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29445.length)].join('')));

}
});

sablono.core.tel_field29444.cljs$core$IFn$_invoke$arity$1 = (function (name__21676__auto__){
return sablono.core.tel_field29444.call(null,name__21676__auto__,null);
});

sablono.core.tel_field29444.cljs$core$IFn$_invoke$arity$2 = (function (name__21676__auto__,value__21677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__21676__auto__,value__21677__auto__);
});

sablono.core.tel_field29444.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field29444);

/**
 * Creates a text input field.
 */
sablono.core.text_field29448 = (function sablono$core$text_field29448(var_args){
var args29449 = [];
var len__16337__auto___29516 = arguments.length;
var i__16338__auto___29517 = (0);
while(true){
if((i__16338__auto___29517 < len__16337__auto___29516)){
args29449.push((arguments[i__16338__auto___29517]));

var G__29518 = (i__16338__auto___29517 + (1));
i__16338__auto___29517 = G__29518;
continue;
} else {
}
break;
}

var G__29451 = args29449.length;
switch (G__29451) {
case 1:
return sablono.core.text_field29448.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field29448.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29449.length)].join('')));

}
});

sablono.core.text_field29448.cljs$core$IFn$_invoke$arity$1 = (function (name__21676__auto__){
return sablono.core.text_field29448.call(null,name__21676__auto__,null);
});

sablono.core.text_field29448.cljs$core$IFn$_invoke$arity$2 = (function (name__21676__auto__,value__21677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__21676__auto__,value__21677__auto__);
});

sablono.core.text_field29448.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field29448);

/**
 * Creates a time input field.
 */
sablono.core.time_field29452 = (function sablono$core$time_field29452(var_args){
var args29453 = [];
var len__16337__auto___29520 = arguments.length;
var i__16338__auto___29521 = (0);
while(true){
if((i__16338__auto___29521 < len__16337__auto___29520)){
args29453.push((arguments[i__16338__auto___29521]));

var G__29522 = (i__16338__auto___29521 + (1));
i__16338__auto___29521 = G__29522;
continue;
} else {
}
break;
}

var G__29455 = args29453.length;
switch (G__29455) {
case 1:
return sablono.core.time_field29452.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field29452.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29453.length)].join('')));

}
});

sablono.core.time_field29452.cljs$core$IFn$_invoke$arity$1 = (function (name__21676__auto__){
return sablono.core.time_field29452.call(null,name__21676__auto__,null);
});

sablono.core.time_field29452.cljs$core$IFn$_invoke$arity$2 = (function (name__21676__auto__,value__21677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__21676__auto__,value__21677__auto__);
});

sablono.core.time_field29452.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field29452);

/**
 * Creates a url input field.
 */
sablono.core.url_field29456 = (function sablono$core$url_field29456(var_args){
var args29457 = [];
var len__16337__auto___29524 = arguments.length;
var i__16338__auto___29525 = (0);
while(true){
if((i__16338__auto___29525 < len__16337__auto___29524)){
args29457.push((arguments[i__16338__auto___29525]));

var G__29526 = (i__16338__auto___29525 + (1));
i__16338__auto___29525 = G__29526;
continue;
} else {
}
break;
}

var G__29459 = args29457.length;
switch (G__29459) {
case 1:
return sablono.core.url_field29456.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field29456.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29457.length)].join('')));

}
});

sablono.core.url_field29456.cljs$core$IFn$_invoke$arity$1 = (function (name__21676__auto__){
return sablono.core.url_field29456.call(null,name__21676__auto__,null);
});

sablono.core.url_field29456.cljs$core$IFn$_invoke$arity$2 = (function (name__21676__auto__,value__21677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__21676__auto__,value__21677__auto__);
});

sablono.core.url_field29456.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field29456);

/**
 * Creates a week input field.
 */
sablono.core.week_field29460 = (function sablono$core$week_field29460(var_args){
var args29461 = [];
var len__16337__auto___29528 = arguments.length;
var i__16338__auto___29529 = (0);
while(true){
if((i__16338__auto___29529 < len__16337__auto___29528)){
args29461.push((arguments[i__16338__auto___29529]));

var G__29530 = (i__16338__auto___29529 + (1));
i__16338__auto___29529 = G__29530;
continue;
} else {
}
break;
}

var G__29463 = args29461.length;
switch (G__29463) {
case 1:
return sablono.core.week_field29460.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field29460.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29461.length)].join('')));

}
});

sablono.core.week_field29460.cljs$core$IFn$_invoke$arity$1 = (function (name__21676__auto__){
return sablono.core.week_field29460.call(null,name__21676__auto__,null);
});

sablono.core.week_field29460.cljs$core$IFn$_invoke$arity$2 = (function (name__21676__auto__,value__21677__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__21676__auto__,value__21677__auto__);
});

sablono.core.week_field29460.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field29460);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box29532 = (function sablono$core$check_box29532(var_args){
var args29533 = [];
var len__16337__auto___29536 = arguments.length;
var i__16338__auto___29537 = (0);
while(true){
if((i__16338__auto___29537 < len__16337__auto___29536)){
args29533.push((arguments[i__16338__auto___29537]));

var G__29538 = (i__16338__auto___29537 + (1));
i__16338__auto___29537 = G__29538;
continue;
} else {
}
break;
}

var G__29535 = args29533.length;
switch (G__29535) {
case 1:
return sablono.core.check_box29532.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box29532.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box29532.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29533.length)].join('')));

}
});

sablono.core.check_box29532.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box29532.call(null,name,null);
});

sablono.core.check_box29532.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box29532.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box29532.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box29532.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box29532);
/**
 * Creates a radio button.
 */
sablono.core.radio_button29540 = (function sablono$core$radio_button29540(var_args){
var args29541 = [];
var len__16337__auto___29544 = arguments.length;
var i__16338__auto___29545 = (0);
while(true){
if((i__16338__auto___29545 < len__16337__auto___29544)){
args29541.push((arguments[i__16338__auto___29545]));

var G__29546 = (i__16338__auto___29545 + (1));
i__16338__auto___29545 = G__29546;
continue;
} else {
}
break;
}

var G__29543 = args29541.length;
switch (G__29543) {
case 1:
return sablono.core.radio_button29540.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button29540.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button29540.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29541.length)].join('')));

}
});

sablono.core.radio_button29540.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button29540.call(null,group,null);
});

sablono.core.radio_button29540.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button29540.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button29540.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button29540.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button29540);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options29548 = (function sablono$core$select_options29548(coll){
var iter__16051__auto__ = (function sablono$core$select_options29548_$_iter__29557(s__29558){
return (new cljs.core.LazySeq(null,(function (){
var s__29558__$1 = s__29558;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29558__$1);
if(temp__4425__auto__){
var s__29558__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29558__$2)){
var c__16049__auto__ = cljs.core.chunk_first.call(null,s__29558__$2);
var size__16050__auto__ = cljs.core.count.call(null,c__16049__auto__);
var b__29560 = cljs.core.chunk_buffer.call(null,size__16050__auto__);
if((function (){var i__29559 = (0);
while(true){
if((i__29559 < size__16050__auto__)){
var x = cljs.core._nth.call(null,c__16049__auto__,i__29559);
cljs.core.chunk_append.call(null,b__29560,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__29563 = x;
var text = cljs.core.nth.call(null,vec__29563,(0),null);
var val = cljs.core.nth.call(null,vec__29563,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__29563,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options29548.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__29565 = (i__29559 + (1));
i__29559 = G__29565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29560),sablono$core$select_options29548_$_iter__29557.call(null,cljs.core.chunk_rest.call(null,s__29558__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29560),null);
}
} else {
var x = cljs.core.first.call(null,s__29558__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__29564 = x;
var text = cljs.core.nth.call(null,vec__29564,(0),null);
var val = cljs.core.nth.call(null,vec__29564,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__29564,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options29548.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options29548_$_iter__29557.call(null,cljs.core.rest.call(null,s__29558__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16051__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options29548);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down29566 = (function sablono$core$drop_down29566(var_args){
var args29567 = [];
var len__16337__auto___29570 = arguments.length;
var i__16338__auto___29571 = (0);
while(true){
if((i__16338__auto___29571 < len__16337__auto___29570)){
args29567.push((arguments[i__16338__auto___29571]));

var G__29572 = (i__16338__auto___29571 + (1));
i__16338__auto___29571 = G__29572;
continue;
} else {
}
break;
}

var G__29569 = args29567.length;
switch (G__29569) {
case 2:
return sablono.core.drop_down29566.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down29566.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29567.length)].join('')));

}
});

sablono.core.drop_down29566.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down29566.call(null,name,options,null);
});

sablono.core.drop_down29566.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down29566.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down29566);
/**
 * Creates a text area element.
 */
sablono.core.text_area29574 = (function sablono$core$text_area29574(var_args){
var args29575 = [];
var len__16337__auto___29578 = arguments.length;
var i__16338__auto___29579 = (0);
while(true){
if((i__16338__auto___29579 < len__16337__auto___29578)){
args29575.push((arguments[i__16338__auto___29579]));

var G__29580 = (i__16338__auto___29579 + (1));
i__16338__auto___29579 = G__29580;
continue;
} else {
}
break;
}

var G__29577 = args29575.length;
switch (G__29577) {
case 1:
return sablono.core.text_area29574.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area29574.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29575.length)].join('')));

}
});

sablono.core.text_area29574.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area29574.call(null,name,null);
});

sablono.core.text_area29574.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area29574.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area29574);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label29582 = (function sablono$core$label29582(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label29582);
/**
 * Creates a submit button.
 */
sablono.core.submit_button29583 = (function sablono$core$submit_button29583(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button29583);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button29584 = (function sablono$core$reset_button29584(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button29584);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to29585 = (function sablono$core$form_to29585(var_args){
var args__16344__auto__ = [];
var len__16337__auto___29590 = arguments.length;
var i__16338__auto___29591 = (0);
while(true){
if((i__16338__auto___29591 < len__16337__auto___29590)){
args__16344__auto__.push((arguments[i__16338__auto___29591]));

var G__29592 = (i__16338__auto___29591 + (1));
i__16338__auto___29591 = G__29592;
continue;
} else {
}
break;
}

var argseq__16345__auto__ = ((((1) < args__16344__auto__.length))?(new cljs.core.IndexedSeq(args__16344__auto__.slice((1)),(0))):null);
return sablono.core.form_to29585.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16345__auto__);
});

sablono.core.form_to29585.cljs$core$IFn$_invoke$arity$variadic = (function (p__29588,body){
var vec__29589 = p__29588;
var method = cljs.core.nth.call(null,vec__29589,(0),null);
var action = cljs.core.nth.call(null,vec__29589,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to29585.cljs$lang$maxFixedArity = (1);

sablono.core.form_to29585.cljs$lang$applyTo = (function (seq29586){
var G__29587 = cljs.core.first.call(null,seq29586);
var seq29586__$1 = cljs.core.next.call(null,seq29586);
return sablono.core.form_to29585.cljs$core$IFn$_invoke$arity$variadic(G__29587,seq29586__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to29585);

//# sourceMappingURL=core.js.map