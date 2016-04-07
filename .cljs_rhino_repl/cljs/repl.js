// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16435_16449 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16436_16450 = null;
var count__16437_16451 = (0);
var i__16438_16452 = (0);
while(true){
if((i__16438_16452 < count__16437_16451)){
var f_16453 = cljs.core._nth.call(null,chunk__16436_16450,i__16438_16452);
cljs.core.println.call(null,"  ",f_16453);

var G__16454 = seq__16435_16449;
var G__16455 = chunk__16436_16450;
var G__16456 = count__16437_16451;
var G__16457 = (i__16438_16452 + (1));
seq__16435_16449 = G__16454;
chunk__16436_16450 = G__16455;
count__16437_16451 = G__16456;
i__16438_16452 = G__16457;
continue;
} else {
var temp__4425__auto___16458 = cljs.core.seq.call(null,seq__16435_16449);
if(temp__4425__auto___16458){
var seq__16435_16459__$1 = temp__4425__auto___16458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16435_16459__$1)){
var c__16082__auto___16460 = cljs.core.chunk_first.call(null,seq__16435_16459__$1);
var G__16461 = cljs.core.chunk_rest.call(null,seq__16435_16459__$1);
var G__16462 = c__16082__auto___16460;
var G__16463 = cljs.core.count.call(null,c__16082__auto___16460);
var G__16464 = (0);
seq__16435_16449 = G__16461;
chunk__16436_16450 = G__16462;
count__16437_16451 = G__16463;
i__16438_16452 = G__16464;
continue;
} else {
var f_16465 = cljs.core.first.call(null,seq__16435_16459__$1);
cljs.core.println.call(null,"  ",f_16465);

var G__16466 = cljs.core.next.call(null,seq__16435_16459__$1);
var G__16467 = null;
var G__16468 = (0);
var G__16469 = (0);
seq__16435_16449 = G__16466;
chunk__16436_16450 = G__16467;
count__16437_16451 = G__16468;
i__16438_16452 = G__16469;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16470 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__15279__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__15279__auto__)){
return or__15279__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_16470);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_16470)))?cljs.core.second.call(null,arglists_16470):arglists_16470));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16439 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16440 = null;
var count__16441 = (0);
var i__16442 = (0);
while(true){
if((i__16442 < count__16441)){
var vec__16443 = cljs.core._nth.call(null,chunk__16440,i__16442);
var name = cljs.core.nth.call(null,vec__16443,(0),null);
var map__16444 = cljs.core.nth.call(null,vec__16443,(1),null);
var map__16444__$1 = ((((!((map__16444 == null)))?((((map__16444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16444):map__16444);
var doc = cljs.core.get.call(null,map__16444__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__16444__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__16471 = seq__16439;
var G__16472 = chunk__16440;
var G__16473 = count__16441;
var G__16474 = (i__16442 + (1));
seq__16439 = G__16471;
chunk__16440 = G__16472;
count__16441 = G__16473;
i__16442 = G__16474;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16439);
if(temp__4425__auto__){
var seq__16439__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16439__$1)){
var c__16082__auto__ = cljs.core.chunk_first.call(null,seq__16439__$1);
var G__16475 = cljs.core.chunk_rest.call(null,seq__16439__$1);
var G__16476 = c__16082__auto__;
var G__16477 = cljs.core.count.call(null,c__16082__auto__);
var G__16478 = (0);
seq__16439 = G__16475;
chunk__16440 = G__16476;
count__16441 = G__16477;
i__16442 = G__16478;
continue;
} else {
var vec__16446 = cljs.core.first.call(null,seq__16439__$1);
var name = cljs.core.nth.call(null,vec__16446,(0),null);
var map__16447 = cljs.core.nth.call(null,vec__16446,(1),null);
var map__16447__$1 = ((((!((map__16447 == null)))?((((map__16447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16447):map__16447);
var doc = cljs.core.get.call(null,map__16447__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__16447__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__16479 = cljs.core.next.call(null,seq__16439__$1);
var G__16480 = null;
var G__16481 = (0);
var G__16482 = (0);
seq__16439 = G__16479;
chunk__16440 = G__16480;
count__16441 = G__16481;
i__16442 = G__16482;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map