// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async24663 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24663 = (function (fn_handler,f,meta24664){
this.fn_handler = fn_handler;
this.f = f;
this.meta24664 = meta24664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24665,meta24664__$1){
var self__ = this;
var _24665__$1 = this;
return (new cljs.core.async.t_cljs$core$async24663(self__.fn_handler,self__.f,meta24664__$1));
});

cljs.core.async.t_cljs$core$async24663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24665){
var self__ = this;
var _24665__$1 = this;
return self__.meta24664;
});

cljs.core.async.t_cljs$core$async24663.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24663.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24663.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta24664","meta24664",-16351040,null)], null);
});

cljs.core.async.t_cljs$core$async24663.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24663";

cljs.core.async.t_cljs$core$async24663.cljs$lang$ctorPrWriter = (function (this__15877__auto__,writer__15878__auto__,opt__15879__auto__){
return cljs.core._write.call(null,writer__15878__auto__,"cljs.core.async/t_cljs$core$async24663");
});

cljs.core.async.__GT_t_cljs$core$async24663 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async24663(fn_handler__$1,f__$1,meta24664){
return (new cljs.core.async.t_cljs$core$async24663(fn_handler__$1,f__$1,meta24664));
});

}

return (new cljs.core.async.t_cljs$core$async24663(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args24668 = [];
var len__16337__auto___24671 = arguments.length;
var i__16338__auto___24672 = (0);
while(true){
if((i__16338__auto___24672 < len__16337__auto___24671)){
args24668.push((arguments[i__16338__auto___24672]));

var G__24673 = (i__16338__auto___24672 + (1));
i__16338__auto___24672 = G__24673;
continue;
} else {
}
break;
}

var G__24670 = args24668.length;
switch (G__24670) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24668.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args24675 = [];
var len__16337__auto___24678 = arguments.length;
var i__16338__auto___24679 = (0);
while(true){
if((i__16338__auto___24679 < len__16337__auto___24678)){
args24675.push((arguments[i__16338__auto___24679]));

var G__24680 = (i__16338__auto___24679 + (1));
i__16338__auto___24679 = G__24680;
continue;
} else {
}
break;
}

var G__24677 = args24675.length;
switch (G__24677) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24675.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24682 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24682);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24682,ret){
return (function (){
return fn1.call(null,val_24682);
});})(val_24682,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args24683 = [];
var len__16337__auto___24686 = arguments.length;
var i__16338__auto___24687 = (0);
while(true){
if((i__16338__auto___24687 < len__16337__auto___24686)){
args24683.push((arguments[i__16338__auto___24687]));

var G__24688 = (i__16338__auto___24687 + (1));
i__16338__auto___24687 = G__24688;
continue;
} else {
}
break;
}

var G__24685 = args24683.length;
switch (G__24685) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24683.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__16182__auto___24690 = n;
var x_24691 = (0);
while(true){
if((x_24691 < n__16182__auto___24690)){
(a[x_24691] = (0));

var G__24692 = (x_24691 + (1));
x_24691 = G__24692;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24693 = (i + (1));
i = G__24693;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24697 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24697 = (function (alt_flag,flag,meta24698){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24698 = meta24698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24699,meta24698__$1){
var self__ = this;
var _24699__$1 = this;
return (new cljs.core.async.t_cljs$core$async24697(self__.alt_flag,self__.flag,meta24698__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24699){
var self__ = this;
var _24699__$1 = this;
return self__.meta24698;
});})(flag))
;

cljs.core.async.t_cljs$core$async24697.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24697.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24698","meta24698",-1929551449,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24697.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24697";

cljs.core.async.t_cljs$core$async24697.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__15877__auto__,writer__15878__auto__,opt__15879__auto__){
return cljs.core._write.call(null,writer__15878__auto__,"cljs.core.async/t_cljs$core$async24697");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24697 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24697(alt_flag__$1,flag__$1,meta24698){
return (new cljs.core.async.t_cljs$core$async24697(alt_flag__$1,flag__$1,meta24698));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24697(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24703 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24703 = (function (alt_handler,flag,cb,meta24704){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24704 = meta24704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24705,meta24704__$1){
var self__ = this;
var _24705__$1 = this;
return (new cljs.core.async.t_cljs$core$async24703(self__.alt_handler,self__.flag,self__.cb,meta24704__$1));
});

cljs.core.async.t_cljs$core$async24703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24705){
var self__ = this;
var _24705__$1 = this;
return self__.meta24704;
});

cljs.core.async.t_cljs$core$async24703.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24703.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24703.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24704","meta24704",-873611832,null)], null);
});

cljs.core.async.t_cljs$core$async24703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24703";

cljs.core.async.t_cljs$core$async24703.cljs$lang$ctorPrWriter = (function (this__15877__auto__,writer__15878__auto__,opt__15879__auto__){
return cljs.core._write.call(null,writer__15878__auto__,"cljs.core.async/t_cljs$core$async24703");
});

cljs.core.async.__GT_t_cljs$core$async24703 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24703(alt_handler__$1,flag__$1,cb__$1,meta24704){
return (new cljs.core.async.t_cljs$core$async24703(alt_handler__$1,flag__$1,cb__$1,meta24704));
});

}

return (new cljs.core.async.t_cljs$core$async24703(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24706_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24706_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24707_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24707_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__15279__auto__ = wport;
if(cljs.core.truth_(or__15279__auto__)){
return or__15279__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24708 = (i + (1));
i = G__24708;
continue;
}
} else {
return null;
}
break;
}
})();
var or__15279__auto__ = ret;
if(cljs.core.truth_(or__15279__auto__)){
return or__15279__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__15267__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__15267__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__15267__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__16344__auto__ = [];
var len__16337__auto___24714 = arguments.length;
var i__16338__auto___24715 = (0);
while(true){
if((i__16338__auto___24715 < len__16337__auto___24714)){
args__16344__auto__.push((arguments[i__16338__auto___24715]));

var G__24716 = (i__16338__auto___24715 + (1));
i__16338__auto___24715 = G__24716;
continue;
} else {
}
break;
}

var argseq__16345__auto__ = ((((1) < args__16344__auto__.length))?(new cljs.core.IndexedSeq(args__16344__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16345__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24711){
var map__24712 = p__24711;
var map__24712__$1 = ((((!((map__24712 == null)))?((((map__24712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24712):map__24712);
var opts = map__24712__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24709){
var G__24710 = cljs.core.first.call(null,seq24709);
var seq24709__$1 = cljs.core.next.call(null,seq24709);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24710,seq24709__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args24717 = [];
var len__16337__auto___24767 = arguments.length;
var i__16338__auto___24768 = (0);
while(true){
if((i__16338__auto___24768 < len__16337__auto___24767)){
args24717.push((arguments[i__16338__auto___24768]));

var G__24769 = (i__16338__auto___24768 + (1));
i__16338__auto___24768 = G__24769;
continue;
} else {
}
break;
}

var G__24719 = args24717.length;
switch (G__24719) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24717.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18943__auto___24771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18943__auto___24771){
return (function (){
var f__18944__auto__ = (function (){var switch__18878__auto__ = ((function (c__18943__auto___24771){
return (function (state_24743){
var state_val_24744 = (state_24743[(1)]);
if((state_val_24744 === (7))){
var inst_24739 = (state_24743[(2)]);
var state_24743__$1 = state_24743;
var statearr_24745_24772 = state_24743__$1;
(statearr_24745_24772[(2)] = inst_24739);

(statearr_24745_24772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24744 === (1))){
var state_24743__$1 = state_24743;
var statearr_24746_24773 = state_24743__$1;
(statearr_24746_24773[(2)] = null);

(statearr_24746_24773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24744 === (4))){
var inst_24722 = (state_24743[(7)]);
var inst_24722__$1 = (state_24743[(2)]);
var inst_24723 = (inst_24722__$1 == null);
var state_24743__$1 = (function (){var statearr_24747 = state_24743;
(statearr_24747[(7)] = inst_24722__$1);

return statearr_24747;
})();
if(cljs.core.truth_(inst_24723)){
var statearr_24748_24774 = state_24743__$1;
(statearr_24748_24774[(1)] = (5));

} else {
var statearr_24749_24775 = state_24743__$1;
(statearr_24749_24775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24744 === (13))){
var state_24743__$1 = state_24743;
var statearr_24750_24776 = state_24743__$1;
(statearr_24750_24776[(2)] = null);

(statearr_24750_24776[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24744 === (6))){
var inst_24722 = (state_24743[(7)]);
var state_24743__$1 = state_24743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24743__$1,(11),to,inst_24722);
} else {
if((state_val_24744 === (3))){
var inst_24741 = (state_24743[(2)]);
var state_24743__$1 = state_24743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24743__$1,inst_24741);
} else {
if((state_val_24744 === (12))){
var state_24743__$1 = state_24743;
var statearr_24751_24777 = state_24743__$1;
(statearr_24751_24777[(2)] = null);

(statearr_24751_24777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24744 === (2))){
var state_24743__$1 = state_24743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24743__$1,(4),from);
} else {
if((state_val_24744 === (11))){
var inst_24732 = (state_24743[(2)]);
var state_24743__$1 = state_24743;
if(cljs.core.truth_(inst_24732)){
var statearr_24752_24778 = state_24743__$1;
(statearr_24752_24778[(1)] = (12));

} else {
var statearr_24753_24779 = state_24743__$1;
(statearr_24753_24779[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24744 === (9))){
var state_24743__$1 = state_24743;
var statearr_24754_24780 = state_24743__$1;
(statearr_24754_24780[(2)] = null);

(statearr_24754_24780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24744 === (5))){
var state_24743__$1 = state_24743;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24755_24781 = state_24743__$1;
(statearr_24755_24781[(1)] = (8));

} else {
var statearr_24756_24782 = state_24743__$1;
(statearr_24756_24782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24744 === (14))){
var inst_24737 = (state_24743[(2)]);
var state_24743__$1 = state_24743;
var statearr_24757_24783 = state_24743__$1;
(statearr_24757_24783[(2)] = inst_24737);

(statearr_24757_24783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24744 === (10))){
var inst_24729 = (state_24743[(2)]);
var state_24743__$1 = state_24743;
var statearr_24758_24784 = state_24743__$1;
(statearr_24758_24784[(2)] = inst_24729);

(statearr_24758_24784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24744 === (8))){
var inst_24726 = cljs.core.async.close_BANG_.call(null,to);
var state_24743__$1 = state_24743;
var statearr_24759_24785 = state_24743__$1;
(statearr_24759_24785[(2)] = inst_24726);

(statearr_24759_24785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18943__auto___24771))
;
return ((function (switch__18878__auto__,c__18943__auto___24771){
return (function() {
var cljs$core$async$state_machine__18879__auto__ = null;
var cljs$core$async$state_machine__18879__auto____0 = (function (){
var statearr_24763 = [null,null,null,null,null,null,null,null];
(statearr_24763[(0)] = cljs$core$async$state_machine__18879__auto__);

(statearr_24763[(1)] = (1));

return statearr_24763;
});
var cljs$core$async$state_machine__18879__auto____1 = (function (state_24743){
while(true){
var ret_value__18880__auto__ = (function (){try{while(true){
var result__18881__auto__ = switch__18878__auto__.call(null,state_24743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18881__auto__;
}
break;
}
}catch (e24764){if((e24764 instanceof Object)){
var ex__18882__auto__ = e24764;
var statearr_24765_24786 = state_24743;
(statearr_24765_24786[(5)] = ex__18882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24787 = state_24743;
state_24743 = G__24787;
continue;
} else {
return ret_value__18880__auto__;
}
break;
}
});
cljs$core$async$state_machine__18879__auto__ = function(state_24743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18879__auto____1.call(this,state_24743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18879__auto____0;
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18879__auto____1;
return cljs$core$async$state_machine__18879__auto__;
})()
;})(switch__18878__auto__,c__18943__auto___24771))
})();
var state__18945__auto__ = (function (){var statearr_24766 = f__18944__auto__.call(null);
(statearr_24766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18943__auto___24771);

return statearr_24766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18945__auto__);
});})(c__18943__auto___24771))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24971){
var vec__24972 = p__24971;
var v = cljs.core.nth.call(null,vec__24972,(0),null);
var p = cljs.core.nth.call(null,vec__24972,(1),null);
var job = vec__24972;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18943__auto___25154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18943__auto___25154,res,vec__24972,v,p,job,jobs,results){
return (function (){
var f__18944__auto__ = (function (){var switch__18878__auto__ = ((function (c__18943__auto___25154,res,vec__24972,v,p,job,jobs,results){
return (function (state_24977){
var state_val_24978 = (state_24977[(1)]);
if((state_val_24978 === (1))){
var state_24977__$1 = state_24977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24977__$1,(2),res,v);
} else {
if((state_val_24978 === (2))){
var inst_24974 = (state_24977[(2)]);
var inst_24975 = cljs.core.async.close_BANG_.call(null,res);
var state_24977__$1 = (function (){var statearr_24979 = state_24977;
(statearr_24979[(7)] = inst_24974);

return statearr_24979;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24977__$1,inst_24975);
} else {
return null;
}
}
});})(c__18943__auto___25154,res,vec__24972,v,p,job,jobs,results))
;
return ((function (switch__18878__auto__,c__18943__auto___25154,res,vec__24972,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____0 = (function (){
var statearr_24983 = [null,null,null,null,null,null,null,null];
(statearr_24983[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__);

(statearr_24983[(1)] = (1));

return statearr_24983;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____1 = (function (state_24977){
while(true){
var ret_value__18880__auto__ = (function (){try{while(true){
var result__18881__auto__ = switch__18878__auto__.call(null,state_24977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18881__auto__;
}
break;
}
}catch (e24984){if((e24984 instanceof Object)){
var ex__18882__auto__ = e24984;
var statearr_24985_25155 = state_24977;
(statearr_24985_25155[(5)] = ex__18882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25156 = state_24977;
state_24977 = G__25156;
continue;
} else {
return ret_value__18880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__ = function(state_24977){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____1.call(this,state_24977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__;
})()
;})(switch__18878__auto__,c__18943__auto___25154,res,vec__24972,v,p,job,jobs,results))
})();
var state__18945__auto__ = (function (){var statearr_24986 = f__18944__auto__.call(null);
(statearr_24986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18943__auto___25154);

return statearr_24986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18945__auto__);
});})(c__18943__auto___25154,res,vec__24972,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24987){
var vec__24988 = p__24987;
var v = cljs.core.nth.call(null,vec__24988,(0),null);
var p = cljs.core.nth.call(null,vec__24988,(1),null);
var job = vec__24988;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__16182__auto___25157 = n;
var __25158 = (0);
while(true){
if((__25158 < n__16182__auto___25157)){
var G__24989_25159 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24989_25159) {
case "compute":
var c__18943__auto___25161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25158,c__18943__auto___25161,G__24989_25159,n__16182__auto___25157,jobs,results,process,async){
return (function (){
var f__18944__auto__ = (function (){var switch__18878__auto__ = ((function (__25158,c__18943__auto___25161,G__24989_25159,n__16182__auto___25157,jobs,results,process,async){
return (function (state_25002){
var state_val_25003 = (state_25002[(1)]);
if((state_val_25003 === (1))){
var state_25002__$1 = state_25002;
var statearr_25004_25162 = state_25002__$1;
(statearr_25004_25162[(2)] = null);

(statearr_25004_25162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25003 === (2))){
var state_25002__$1 = state_25002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25002__$1,(4),jobs);
} else {
if((state_val_25003 === (3))){
var inst_25000 = (state_25002[(2)]);
var state_25002__$1 = state_25002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25002__$1,inst_25000);
} else {
if((state_val_25003 === (4))){
var inst_24992 = (state_25002[(2)]);
var inst_24993 = process.call(null,inst_24992);
var state_25002__$1 = state_25002;
if(cljs.core.truth_(inst_24993)){
var statearr_25005_25163 = state_25002__$1;
(statearr_25005_25163[(1)] = (5));

} else {
var statearr_25006_25164 = state_25002__$1;
(statearr_25006_25164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25003 === (5))){
var state_25002__$1 = state_25002;
var statearr_25007_25165 = state_25002__$1;
(statearr_25007_25165[(2)] = null);

(statearr_25007_25165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25003 === (6))){
var state_25002__$1 = state_25002;
var statearr_25008_25166 = state_25002__$1;
(statearr_25008_25166[(2)] = null);

(statearr_25008_25166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25003 === (7))){
var inst_24998 = (state_25002[(2)]);
var state_25002__$1 = state_25002;
var statearr_25009_25167 = state_25002__$1;
(statearr_25009_25167[(2)] = inst_24998);

(statearr_25009_25167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25158,c__18943__auto___25161,G__24989_25159,n__16182__auto___25157,jobs,results,process,async))
;
return ((function (__25158,switch__18878__auto__,c__18943__auto___25161,G__24989_25159,n__16182__auto___25157,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____0 = (function (){
var statearr_25013 = [null,null,null,null,null,null,null];
(statearr_25013[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__);

(statearr_25013[(1)] = (1));

return statearr_25013;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____1 = (function (state_25002){
while(true){
var ret_value__18880__auto__ = (function (){try{while(true){
var result__18881__auto__ = switch__18878__auto__.call(null,state_25002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18881__auto__;
}
break;
}
}catch (e25014){if((e25014 instanceof Object)){
var ex__18882__auto__ = e25014;
var statearr_25015_25168 = state_25002;
(statearr_25015_25168[(5)] = ex__18882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25169 = state_25002;
state_25002 = G__25169;
continue;
} else {
return ret_value__18880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__ = function(state_25002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____1.call(this,state_25002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__;
})()
;})(__25158,switch__18878__auto__,c__18943__auto___25161,G__24989_25159,n__16182__auto___25157,jobs,results,process,async))
})();
var state__18945__auto__ = (function (){var statearr_25016 = f__18944__auto__.call(null);
(statearr_25016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18943__auto___25161);

return statearr_25016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18945__auto__);
});})(__25158,c__18943__auto___25161,G__24989_25159,n__16182__auto___25157,jobs,results,process,async))
);


break;
case "async":
var c__18943__auto___25170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25158,c__18943__auto___25170,G__24989_25159,n__16182__auto___25157,jobs,results,process,async){
return (function (){
var f__18944__auto__ = (function (){var switch__18878__auto__ = ((function (__25158,c__18943__auto___25170,G__24989_25159,n__16182__auto___25157,jobs,results,process,async){
return (function (state_25029){
var state_val_25030 = (state_25029[(1)]);
if((state_val_25030 === (1))){
var state_25029__$1 = state_25029;
var statearr_25031_25171 = state_25029__$1;
(statearr_25031_25171[(2)] = null);

(statearr_25031_25171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (2))){
var state_25029__$1 = state_25029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25029__$1,(4),jobs);
} else {
if((state_val_25030 === (3))){
var inst_25027 = (state_25029[(2)]);
var state_25029__$1 = state_25029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25029__$1,inst_25027);
} else {
if((state_val_25030 === (4))){
var inst_25019 = (state_25029[(2)]);
var inst_25020 = async.call(null,inst_25019);
var state_25029__$1 = state_25029;
if(cljs.core.truth_(inst_25020)){
var statearr_25032_25172 = state_25029__$1;
(statearr_25032_25172[(1)] = (5));

} else {
var statearr_25033_25173 = state_25029__$1;
(statearr_25033_25173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (5))){
var state_25029__$1 = state_25029;
var statearr_25034_25174 = state_25029__$1;
(statearr_25034_25174[(2)] = null);

(statearr_25034_25174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (6))){
var state_25029__$1 = state_25029;
var statearr_25035_25175 = state_25029__$1;
(statearr_25035_25175[(2)] = null);

(statearr_25035_25175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25030 === (7))){
var inst_25025 = (state_25029[(2)]);
var state_25029__$1 = state_25029;
var statearr_25036_25176 = state_25029__$1;
(statearr_25036_25176[(2)] = inst_25025);

(statearr_25036_25176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25158,c__18943__auto___25170,G__24989_25159,n__16182__auto___25157,jobs,results,process,async))
;
return ((function (__25158,switch__18878__auto__,c__18943__auto___25170,G__24989_25159,n__16182__auto___25157,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____0 = (function (){
var statearr_25040 = [null,null,null,null,null,null,null];
(statearr_25040[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__);

(statearr_25040[(1)] = (1));

return statearr_25040;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____1 = (function (state_25029){
while(true){
var ret_value__18880__auto__ = (function (){try{while(true){
var result__18881__auto__ = switch__18878__auto__.call(null,state_25029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18881__auto__;
}
break;
}
}catch (e25041){if((e25041 instanceof Object)){
var ex__18882__auto__ = e25041;
var statearr_25042_25177 = state_25029;
(statearr_25042_25177[(5)] = ex__18882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25178 = state_25029;
state_25029 = G__25178;
continue;
} else {
return ret_value__18880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__ = function(state_25029){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____1.call(this,state_25029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__;
})()
;})(__25158,switch__18878__auto__,c__18943__auto___25170,G__24989_25159,n__16182__auto___25157,jobs,results,process,async))
})();
var state__18945__auto__ = (function (){var statearr_25043 = f__18944__auto__.call(null);
(statearr_25043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18943__auto___25170);

return statearr_25043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18945__auto__);
});})(__25158,c__18943__auto___25170,G__24989_25159,n__16182__auto___25157,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25179 = (__25158 + (1));
__25158 = G__25179;
continue;
} else {
}
break;
}

var c__18943__auto___25180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18943__auto___25180,jobs,results,process,async){
return (function (){
var f__18944__auto__ = (function (){var switch__18878__auto__ = ((function (c__18943__auto___25180,jobs,results,process,async){
return (function (state_25065){
var state_val_25066 = (state_25065[(1)]);
if((state_val_25066 === (1))){
var state_25065__$1 = state_25065;
var statearr_25067_25181 = state_25065__$1;
(statearr_25067_25181[(2)] = null);

(statearr_25067_25181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (2))){
var state_25065__$1 = state_25065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25065__$1,(4),from);
} else {
if((state_val_25066 === (3))){
var inst_25063 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25065__$1,inst_25063);
} else {
if((state_val_25066 === (4))){
var inst_25046 = (state_25065[(7)]);
var inst_25046__$1 = (state_25065[(2)]);
var inst_25047 = (inst_25046__$1 == null);
var state_25065__$1 = (function (){var statearr_25068 = state_25065;
(statearr_25068[(7)] = inst_25046__$1);

return statearr_25068;
})();
if(cljs.core.truth_(inst_25047)){
var statearr_25069_25182 = state_25065__$1;
(statearr_25069_25182[(1)] = (5));

} else {
var statearr_25070_25183 = state_25065__$1;
(statearr_25070_25183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (5))){
var inst_25049 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25065__$1 = state_25065;
var statearr_25071_25184 = state_25065__$1;
(statearr_25071_25184[(2)] = inst_25049);

(statearr_25071_25184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (6))){
var inst_25051 = (state_25065[(8)]);
var inst_25046 = (state_25065[(7)]);
var inst_25051__$1 = cljs.core.async.chan.call(null,(1));
var inst_25052 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25053 = [inst_25046,inst_25051__$1];
var inst_25054 = (new cljs.core.PersistentVector(null,2,(5),inst_25052,inst_25053,null));
var state_25065__$1 = (function (){var statearr_25072 = state_25065;
(statearr_25072[(8)] = inst_25051__$1);

return statearr_25072;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25065__$1,(8),jobs,inst_25054);
} else {
if((state_val_25066 === (7))){
var inst_25061 = (state_25065[(2)]);
var state_25065__$1 = state_25065;
var statearr_25073_25185 = state_25065__$1;
(statearr_25073_25185[(2)] = inst_25061);

(statearr_25073_25185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25066 === (8))){
var inst_25051 = (state_25065[(8)]);
var inst_25056 = (state_25065[(2)]);
var state_25065__$1 = (function (){var statearr_25074 = state_25065;
(statearr_25074[(9)] = inst_25056);

return statearr_25074;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25065__$1,(9),results,inst_25051);
} else {
if((state_val_25066 === (9))){
var inst_25058 = (state_25065[(2)]);
var state_25065__$1 = (function (){var statearr_25075 = state_25065;
(statearr_25075[(10)] = inst_25058);

return statearr_25075;
})();
var statearr_25076_25186 = state_25065__$1;
(statearr_25076_25186[(2)] = null);

(statearr_25076_25186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__18943__auto___25180,jobs,results,process,async))
;
return ((function (switch__18878__auto__,c__18943__auto___25180,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____0 = (function (){
var statearr_25080 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25080[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__);

(statearr_25080[(1)] = (1));

return statearr_25080;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____1 = (function (state_25065){
while(true){
var ret_value__18880__auto__ = (function (){try{while(true){
var result__18881__auto__ = switch__18878__auto__.call(null,state_25065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18881__auto__;
}
break;
}
}catch (e25081){if((e25081 instanceof Object)){
var ex__18882__auto__ = e25081;
var statearr_25082_25187 = state_25065;
(statearr_25082_25187[(5)] = ex__18882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25188 = state_25065;
state_25065 = G__25188;
continue;
} else {
return ret_value__18880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__ = function(state_25065){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____1.call(this,state_25065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__;
})()
;})(switch__18878__auto__,c__18943__auto___25180,jobs,results,process,async))
})();
var state__18945__auto__ = (function (){var statearr_25083 = f__18944__auto__.call(null);
(statearr_25083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18943__auto___25180);

return statearr_25083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18945__auto__);
});})(c__18943__auto___25180,jobs,results,process,async))
);


var c__18943__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18943__auto__,jobs,results,process,async){
return (function (){
var f__18944__auto__ = (function (){var switch__18878__auto__ = ((function (c__18943__auto__,jobs,results,process,async){
return (function (state_25121){
var state_val_25122 = (state_25121[(1)]);
if((state_val_25122 === (7))){
var inst_25117 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
var statearr_25123_25189 = state_25121__$1;
(statearr_25123_25189[(2)] = inst_25117);

(statearr_25123_25189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (20))){
var state_25121__$1 = state_25121;
var statearr_25124_25190 = state_25121__$1;
(statearr_25124_25190[(2)] = null);

(statearr_25124_25190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (1))){
var state_25121__$1 = state_25121;
var statearr_25125_25191 = state_25121__$1;
(statearr_25125_25191[(2)] = null);

(statearr_25125_25191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (4))){
var inst_25086 = (state_25121[(7)]);
var inst_25086__$1 = (state_25121[(2)]);
var inst_25087 = (inst_25086__$1 == null);
var state_25121__$1 = (function (){var statearr_25126 = state_25121;
(statearr_25126[(7)] = inst_25086__$1);

return statearr_25126;
})();
if(cljs.core.truth_(inst_25087)){
var statearr_25127_25192 = state_25121__$1;
(statearr_25127_25192[(1)] = (5));

} else {
var statearr_25128_25193 = state_25121__$1;
(statearr_25128_25193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (15))){
var inst_25099 = (state_25121[(8)]);
var state_25121__$1 = state_25121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25121__$1,(18),to,inst_25099);
} else {
if((state_val_25122 === (21))){
var inst_25112 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
var statearr_25129_25194 = state_25121__$1;
(statearr_25129_25194[(2)] = inst_25112);

(statearr_25129_25194[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (13))){
var inst_25114 = (state_25121[(2)]);
var state_25121__$1 = (function (){var statearr_25130 = state_25121;
(statearr_25130[(9)] = inst_25114);

return statearr_25130;
})();
var statearr_25131_25195 = state_25121__$1;
(statearr_25131_25195[(2)] = null);

(statearr_25131_25195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (6))){
var inst_25086 = (state_25121[(7)]);
var state_25121__$1 = state_25121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25121__$1,(11),inst_25086);
} else {
if((state_val_25122 === (17))){
var inst_25107 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
if(cljs.core.truth_(inst_25107)){
var statearr_25132_25196 = state_25121__$1;
(statearr_25132_25196[(1)] = (19));

} else {
var statearr_25133_25197 = state_25121__$1;
(statearr_25133_25197[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (3))){
var inst_25119 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25121__$1,inst_25119);
} else {
if((state_val_25122 === (12))){
var inst_25096 = (state_25121[(10)]);
var state_25121__$1 = state_25121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25121__$1,(14),inst_25096);
} else {
if((state_val_25122 === (2))){
var state_25121__$1 = state_25121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25121__$1,(4),results);
} else {
if((state_val_25122 === (19))){
var state_25121__$1 = state_25121;
var statearr_25134_25198 = state_25121__$1;
(statearr_25134_25198[(2)] = null);

(statearr_25134_25198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (11))){
var inst_25096 = (state_25121[(2)]);
var state_25121__$1 = (function (){var statearr_25135 = state_25121;
(statearr_25135[(10)] = inst_25096);

return statearr_25135;
})();
var statearr_25136_25199 = state_25121__$1;
(statearr_25136_25199[(2)] = null);

(statearr_25136_25199[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (9))){
var state_25121__$1 = state_25121;
var statearr_25137_25200 = state_25121__$1;
(statearr_25137_25200[(2)] = null);

(statearr_25137_25200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (5))){
var state_25121__$1 = state_25121;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25138_25201 = state_25121__$1;
(statearr_25138_25201[(1)] = (8));

} else {
var statearr_25139_25202 = state_25121__$1;
(statearr_25139_25202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (14))){
var inst_25101 = (state_25121[(11)]);
var inst_25099 = (state_25121[(8)]);
var inst_25099__$1 = (state_25121[(2)]);
var inst_25100 = (inst_25099__$1 == null);
var inst_25101__$1 = cljs.core.not.call(null,inst_25100);
var state_25121__$1 = (function (){var statearr_25140 = state_25121;
(statearr_25140[(11)] = inst_25101__$1);

(statearr_25140[(8)] = inst_25099__$1);

return statearr_25140;
})();
if(inst_25101__$1){
var statearr_25141_25203 = state_25121__$1;
(statearr_25141_25203[(1)] = (15));

} else {
var statearr_25142_25204 = state_25121__$1;
(statearr_25142_25204[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (16))){
var inst_25101 = (state_25121[(11)]);
var state_25121__$1 = state_25121;
var statearr_25143_25205 = state_25121__$1;
(statearr_25143_25205[(2)] = inst_25101);

(statearr_25143_25205[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (10))){
var inst_25093 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
var statearr_25144_25206 = state_25121__$1;
(statearr_25144_25206[(2)] = inst_25093);

(statearr_25144_25206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (18))){
var inst_25104 = (state_25121[(2)]);
var state_25121__$1 = state_25121;
var statearr_25145_25207 = state_25121__$1;
(statearr_25145_25207[(2)] = inst_25104);

(statearr_25145_25207[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25122 === (8))){
var inst_25090 = cljs.core.async.close_BANG_.call(null,to);
var state_25121__$1 = state_25121;
var statearr_25146_25208 = state_25121__$1;
(statearr_25146_25208[(2)] = inst_25090);

(statearr_25146_25208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18943__auto__,jobs,results,process,async))
;
return ((function (switch__18878__auto__,c__18943__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____0 = (function (){
var statearr_25150 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25150[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__);

(statearr_25150[(1)] = (1));

return statearr_25150;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____1 = (function (state_25121){
while(true){
var ret_value__18880__auto__ = (function (){try{while(true){
var result__18881__auto__ = switch__18878__auto__.call(null,state_25121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18881__auto__;
}
break;
}
}catch (e25151){if((e25151 instanceof Object)){
var ex__18882__auto__ = e25151;
var statearr_25152_25209 = state_25121;
(statearr_25152_25209[(5)] = ex__18882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25210 = state_25121;
state_25121 = G__25210;
continue;
} else {
return ret_value__18880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__ = function(state_25121){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____1.call(this,state_25121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18879__auto__;
})()
;})(switch__18878__auto__,c__18943__auto__,jobs,results,process,async))
})();
var state__18945__auto__ = (function (){var statearr_25153 = f__18944__auto__.call(null);
(statearr_25153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18943__auto__);

return statearr_25153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18945__auto__);
});})(c__18943__auto__,jobs,results,process,async))
);

return c__18943__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args25211 = [];
var len__16337__auto___25214 = arguments.length;
var i__16338__auto___25215 = (0);
while(true){
if((i__16338__auto___25215 < len__16337__auto___25214)){
args25211.push((arguments[i__16338__auto___25215]));

var G__25216 = (i__16338__auto___25215 + (1));
i__16338__auto___25215 = G__25216;
continue;
} else {
}
break;
}

var G__25213 = args25211.length;
switch (G__25213) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25211.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args25218 = [];
var len__16337__auto___25221 = arguments.length;
var i__16338__auto___25222 = (0);
while(true){
if((i__16338__auto___25222 < len__16337__auto___25221)){
args25218.push((arguments[i__16338__auto___25222]));

var G__25223 = (i__16338__auto___25222 + (1));
i__16338__auto___25222 = G__25223;
continue;
} else {
}
break;
}

var G__25220 = args25218.length;
switch (G__25220) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25218.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args25225 = [];
var len__16337__auto___25278 = arguments.length;
var i__16338__auto___25279 = (0);
while(true){
if((i__16338__auto___25279 < len__16337__auto___25278)){
args25225.push((arguments[i__16338__auto___25279]));

var G__25280 = (i__16338__auto___25279 + (1));
i__16338__auto___25279 = G__25280;
continue;
} else {
}
break;
}

var G__25227 = args25225.length;
switch (G__25227) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25225.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18943__auto___25282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18943__auto___25282,tc,fc){
return (function (){
var f__18944__auto__ = (function (){var switch__18878__auto__ = ((function (c__18943__auto___25282,tc,fc){
return (function (state_25253){
var state_val_25254 = (state_25253[(1)]);
if((state_val_25254 === (7))){
var inst_25249 = (state_25253[(2)]);
var state_25253__$1 = state_25253;
var statearr_25255_25283 = state_25253__$1;
(statearr_25255_25283[(2)] = inst_25249);

(statearr_25255_25283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25254 === (1))){
var state_25253__$1 = state_25253;
var statearr_25256_25284 = state_25253__$1;
(statearr_25256_25284[(2)] = null);

(statearr_25256_25284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25254 === (4))){
var inst_25230 = (state_25253[(7)]);
var inst_25230__$1 = (state_25253[(2)]);
var inst_25231 = (inst_25230__$1 == null);
var state_25253__$1 = (function (){var statearr_25257 = state_25253;
(statearr_25257[(7)] = inst_25230__$1);

return statearr_25257;
})();
if(cljs.core.truth_(inst_25231)){
var statearr_25258_25285 = state_25253__$1;
(statearr_25258_25285[(1)] = (5));

} else {
var statearr_25259_25286 = state_25253__$1;
(statearr_25259_25286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25254 === (13))){
var state_25253__$1 = state_25253;
var statearr_25260_25287 = state_25253__$1;
(statearr_25260_25287[(2)] = null);

(statearr_25260_25287[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25254 === (6))){
var inst_25230 = (state_25253[(7)]);
var inst_25236 = p.call(null,inst_25230);
var state_25253__$1 = state_25253;
if(cljs.core.truth_(inst_25236)){
var statearr_25261_25288 = state_25253__$1;
(statearr_25261_25288[(1)] = (9));

} else {
var statearr_25262_25289 = state_25253__$1;
(statearr_25262_25289[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25254 === (3))){
var inst_25251 = (state_25253[(2)]);
var state_25253__$1 = state_25253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25253__$1,inst_25251);
} else {
if((state_val_25254 === (12))){
var state_25253__$1 = state_25253;
var statearr_25263_25290 = state_25253__$1;
(statearr_25263_25290[(2)] = null);

(statearr_25263_25290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25254 === (2))){
var state_25253__$1 = state_25253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25253__$1,(4),ch);
} else {
if((state_val_25254 === (11))){
var inst_25230 = (state_25253[(7)]);
var inst_25240 = (state_25253[(2)]);
var state_25253__$1 = state_25253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25253__$1,(8),inst_25240,inst_25230);
} else {
if((state_val_25254 === (9))){
var state_25253__$1 = state_25253;
var statearr_25264_25291 = state_25253__$1;
(statearr_25264_25291[(2)] = tc);

(statearr_25264_25291[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25254 === (5))){
var inst_25233 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25234 = cljs.core.async.close_BANG_.call(null,fc);
var state_25253__$1 = (function (){var statearr_25265 = state_25253;
(statearr_25265[(8)] = inst_25233);

return statearr_25265;
})();
var statearr_25266_25292 = state_25253__$1;
(statearr_25266_25292[(2)] = inst_25234);

(statearr_25266_25292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25254 === (14))){
var inst_25247 = (state_25253[(2)]);
var state_25253__$1 = state_25253;
var statearr_25267_25293 = state_25253__$1;
(statearr_25267_25293[(2)] = inst_25247);

(statearr_25267_25293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25254 === (10))){
var state_25253__$1 = state_25253;
var statearr_25268_25294 = state_25253__$1;
(statearr_25268_25294[(2)] = fc);

(statearr_25268_25294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25254 === (8))){
var inst_25242 = (state_25253[(2)]);
var state_25253__$1 = state_25253;
if(cljs.core.truth_(inst_25242)){
var statearr_25269_25295 = state_25253__$1;
(statearr_25269_25295[(1)] = (12));

} else {
var statearr_25270_25296 = state_25253__$1;
(statearr_25270_25296[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18943__auto___25282,tc,fc))
;
return ((function (switch__18878__auto__,c__18943__auto___25282,tc,fc){
return (function() {
var cljs$core$async$state_machine__18879__auto__ = null;
var cljs$core$async$state_machine__18879__auto____0 = (function (){
var statearr_25274 = [null,null,null,null,null,null,null,null,null];
(statearr_25274[(0)] = cljs$core$async$state_machine__18879__auto__);

(statearr_25274[(1)] = (1));

return statearr_25274;
});
var cljs$core$async$state_machine__18879__auto____1 = (function (state_25253){
while(true){
var ret_value__18880__auto__ = (function (){try{while(true){
var result__18881__auto__ = switch__18878__auto__.call(null,state_25253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18881__auto__;
}
break;
}
}catch (e25275){if((e25275 instanceof Object)){
var ex__18882__auto__ = e25275;
var statearr_25276_25297 = state_25253;
(statearr_25276_25297[(5)] = ex__18882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25298 = state_25253;
state_25253 = G__25298;
continue;
} else {
return ret_value__18880__auto__;
}
break;
}
});
cljs$core$async$state_machine__18879__auto__ = function(state_25253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18879__auto____1.call(this,state_25253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18879__auto____0;
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18879__auto____1;
return cljs$core$async$state_machine__18879__auto__;
})()
;})(switch__18878__auto__,c__18943__auto___25282,tc,fc))
})();
var state__18945__auto__ = (function (){var statearr_25277 = f__18944__auto__.call(null);
(statearr_25277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18943__auto___25282);

return statearr_25277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18945__auto__);
});})(c__18943__auto___25282,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18943__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18943__auto__){
return (function (){
var f__18944__auto__ = (function (){var switch__18878__auto__ = ((function (c__18943__auto__){
return (function (state_25345){
var state_val_25346 = (state_25345[(1)]);
if((state_val_25346 === (1))){
var inst_25331 = init;
var state_25345__$1 = (function (){var statearr_25347 = state_25345;
(statearr_25347[(7)] = inst_25331);

return statearr_25347;
})();
var statearr_25348_25363 = state_25345__$1;
(statearr_25348_25363[(2)] = null);

(statearr_25348_25363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (2))){
var state_25345__$1 = state_25345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25345__$1,(4),ch);
} else {
if((state_val_25346 === (3))){
var inst_25343 = (state_25345[(2)]);
var state_25345__$1 = state_25345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25345__$1,inst_25343);
} else {
if((state_val_25346 === (4))){
var inst_25334 = (state_25345[(8)]);
var inst_25334__$1 = (state_25345[(2)]);
var inst_25335 = (inst_25334__$1 == null);
var state_25345__$1 = (function (){var statearr_25349 = state_25345;
(statearr_25349[(8)] = inst_25334__$1);

return statearr_25349;
})();
if(cljs.core.truth_(inst_25335)){
var statearr_25350_25364 = state_25345__$1;
(statearr_25350_25364[(1)] = (5));

} else {
var statearr_25351_25365 = state_25345__$1;
(statearr_25351_25365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (5))){
var inst_25331 = (state_25345[(7)]);
var state_25345__$1 = state_25345;
var statearr_25352_25366 = state_25345__$1;
(statearr_25352_25366[(2)] = inst_25331);

(statearr_25352_25366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (6))){
var inst_25331 = (state_25345[(7)]);
var inst_25334 = (state_25345[(8)]);
var inst_25338 = f.call(null,inst_25331,inst_25334);
var inst_25331__$1 = inst_25338;
var state_25345__$1 = (function (){var statearr_25353 = state_25345;
(statearr_25353[(7)] = inst_25331__$1);

return statearr_25353;
})();
var statearr_25354_25367 = state_25345__$1;
(statearr_25354_25367[(2)] = null);

(statearr_25354_25367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25346 === (7))){
var inst_25341 = (state_25345[(2)]);
var state_25345__$1 = state_25345;
var statearr_25355_25368 = state_25345__$1;
(statearr_25355_25368[(2)] = inst_25341);

(statearr_25355_25368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18943__auto__))
;
return ((function (switch__18878__auto__,c__18943__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18879__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18879__auto____0 = (function (){
var statearr_25359 = [null,null,null,null,null,null,null,null,null];
(statearr_25359[(0)] = cljs$core$async$reduce_$_state_machine__18879__auto__);

(statearr_25359[(1)] = (1));

return statearr_25359;
});
var cljs$core$async$reduce_$_state_machine__18879__auto____1 = (function (state_25345){
while(true){
var ret_value__18880__auto__ = (function (){try{while(true){
var result__18881__auto__ = switch__18878__auto__.call(null,state_25345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18881__auto__;
}
break;
}
}catch (e25360){if((e25360 instanceof Object)){
var ex__18882__auto__ = e25360;
var statearr_25361_25369 = state_25345;
(statearr_25361_25369[(5)] = ex__18882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25370 = state_25345;
state_25345 = G__25370;
continue;
} else {
return ret_value__18880__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18879__auto__ = function(state_25345){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18879__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18879__auto____1.call(this,state_25345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18879__auto____0;
cljs$core$async$reduce_$_state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18879__auto____1;
return cljs$core$async$reduce_$_state_machine__18879__auto__;
})()
;})(switch__18878__auto__,c__18943__auto__))
})();
var state__18945__auto__ = (function (){var statearr_25362 = f__18944__auto__.call(null);
(statearr_25362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18943__auto__);

return statearr_25362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18945__auto__);
});})(c__18943__auto__))
);

return c__18943__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args25371 = [];
var len__16337__auto___25423 = arguments.length;
var i__16338__auto___25424 = (0);
while(true){
if((i__16338__auto___25424 < len__16337__auto___25423)){
args25371.push((arguments[i__16338__auto___25424]));

var G__25425 = (i__16338__auto___25424 + (1));
i__16338__auto___25424 = G__25425;
continue;
} else {
}
break;
}

var G__25373 = args25371.length;
switch (G__25373) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25371.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18943__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18943__auto__){
return (function (){
var f__18944__auto__ = (function (){var switch__18878__auto__ = ((function (c__18943__auto__){
return (function (state_25398){
var state_val_25399 = (state_25398[(1)]);
if((state_val_25399 === (7))){
var inst_25380 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
var statearr_25400_25427 = state_25398__$1;
(statearr_25400_25427[(2)] = inst_25380);

(statearr_25400_25427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (1))){
var inst_25374 = cljs.core.seq.call(null,coll);
var inst_25375 = inst_25374;
var state_25398__$1 = (function (){var statearr_25401 = state_25398;
(statearr_25401[(7)] = inst_25375);

return statearr_25401;
})();
var statearr_25402_25428 = state_25398__$1;
(statearr_25402_25428[(2)] = null);

(statearr_25402_25428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (4))){
var inst_25375 = (state_25398[(7)]);
var inst_25378 = cljs.core.first.call(null,inst_25375);
var state_25398__$1 = state_25398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25398__$1,(7),ch,inst_25378);
} else {
if((state_val_25399 === (13))){
var inst_25392 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
var statearr_25403_25429 = state_25398__$1;
(statearr_25403_25429[(2)] = inst_25392);

(statearr_25403_25429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (6))){
var inst_25383 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
if(cljs.core.truth_(inst_25383)){
var statearr_25404_25430 = state_25398__$1;
(statearr_25404_25430[(1)] = (8));

} else {
var statearr_25405_25431 = state_25398__$1;
(statearr_25405_25431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (3))){
var inst_25396 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25398__$1,inst_25396);
} else {
if((state_val_25399 === (12))){
var state_25398__$1 = state_25398;
var statearr_25406_25432 = state_25398__$1;
(statearr_25406_25432[(2)] = null);

(statearr_25406_25432[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (2))){
var inst_25375 = (state_25398[(7)]);
var state_25398__$1 = state_25398;
if(cljs.core.truth_(inst_25375)){
var statearr_25407_25433 = state_25398__$1;
(statearr_25407_25433[(1)] = (4));

} else {
var statearr_25408_25434 = state_25398__$1;
(statearr_25408_25434[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (11))){
var inst_25389 = cljs.core.async.close_BANG_.call(null,ch);
var state_25398__$1 = state_25398;
var statearr_25409_25435 = state_25398__$1;
(statearr_25409_25435[(2)] = inst_25389);

(statearr_25409_25435[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (9))){
var state_25398__$1 = state_25398;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25410_25436 = state_25398__$1;
(statearr_25410_25436[(1)] = (11));

} else {
var statearr_25411_25437 = state_25398__$1;
(statearr_25411_25437[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (5))){
var inst_25375 = (state_25398[(7)]);
var state_25398__$1 = state_25398;
var statearr_25412_25438 = state_25398__$1;
(statearr_25412_25438[(2)] = inst_25375);

(statearr_25412_25438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (10))){
var inst_25394 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
var statearr_25413_25439 = state_25398__$1;
(statearr_25413_25439[(2)] = inst_25394);

(statearr_25413_25439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (8))){
var inst_25375 = (state_25398[(7)]);
var inst_25385 = cljs.core.next.call(null,inst_25375);
var inst_25375__$1 = inst_25385;
var state_25398__$1 = (function (){var statearr_25414 = state_25398;
(statearr_25414[(7)] = inst_25375__$1);

return statearr_25414;
})();
var statearr_25415_25440 = state_25398__$1;
(statearr_25415_25440[(2)] = null);

(statearr_25415_25440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18943__auto__))
;
return ((function (switch__18878__auto__,c__18943__auto__){
return (function() {
var cljs$core$async$state_machine__18879__auto__ = null;
var cljs$core$async$state_machine__18879__auto____0 = (function (){
var statearr_25419 = [null,null,null,null,null,null,null,null];
(statearr_25419[(0)] = cljs$core$async$state_machine__18879__auto__);

(statearr_25419[(1)] = (1));

return statearr_25419;
});
var cljs$core$async$state_machine__18879__auto____1 = (function (state_25398){
while(true){
var ret_value__18880__auto__ = (function (){try{while(true){
var result__18881__auto__ = switch__18878__auto__.call(null,state_25398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18881__auto__;
}
break;
}
}catch (e25420){if((e25420 instanceof Object)){
var ex__18882__auto__ = e25420;
var statearr_25421_25441 = state_25398;
(statearr_25421_25441[(5)] = ex__18882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25442 = state_25398;
state_25398 = G__25442;
continue;
} else {
return ret_value__18880__auto__;
}
break;
}
});
cljs$core$async$state_machine__18879__auto__ = function(state_25398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18879__auto____1.call(this,state_25398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18879__auto____0;
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18879__auto____1;
return cljs$core$async$state_machine__18879__auto__;
})()
;})(switch__18878__auto__,c__18943__auto__))
})();
var state__18945__auto__ = (function (){var statearr_25422 = f__18944__auto__.call(null);
(statearr_25422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18943__auto__);

return statearr_25422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18945__auto__);
});})(c__18943__auto__))
);

return c__18943__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__15934__auto__ = (((_ == null))?null:_);
var m__15935__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__15934__auto__)]);
if(!((m__15935__auto__ == null))){
return m__15935__auto__.call(null,_);
} else {
var m__15935__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__15935__auto____$1 == null))){
return m__15935__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__15934__auto__ = (((m == null))?null:m);
var m__15935__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__15934__auto__)]);
if(!((m__15935__auto__ == null))){
return m__15935__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__15935__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__15935__auto____$1 == null))){
return m__15935__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__15934__auto__ = (((m == null))?null:m);
var m__15935__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__15934__auto__)]);
if(!((m__15935__auto__ == null))){
return m__15935__auto__.call(null,m,ch);
} else {
var m__15935__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__15935__auto____$1 == null))){
return m__15935__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__15934__auto__ = (((m == null))?null:m);
var m__15935__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__15934__auto__)]);
if(!((m__15935__auto__ == null))){
return m__15935__auto__.call(null,m);
} else {
var m__15935__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__15935__auto____$1 == null))){
return m__15935__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25664 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25664 = (function (mult,ch,cs,meta25665){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25665 = meta25665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25666,meta25665__$1){
var self__ = this;
var _25666__$1 = this;
return (new cljs.core.async.t_cljs$core$async25664(self__.mult,self__.ch,self__.cs,meta25665__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25666){
var self__ = this;
var _25666__$1 = this;
return self__.meta25665;
});})(cs))
;

cljs.core.async.t_cljs$core$async25664.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25664.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25664.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25664.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25664.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25664.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25664.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25665","meta25665",-327774527,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25664.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25664";

cljs.core.async.t_cljs$core$async25664.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15877__auto__,writer__15878__auto__,opt__15879__auto__){
return cljs.core._write.call(null,writer__15878__auto__,"cljs.core.async/t_cljs$core$async25664");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25664 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25664(mult__$1,ch__$1,cs__$1,meta25665){
return (new cljs.core.async.t_cljs$core$async25664(mult__$1,ch__$1,cs__$1,meta25665));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25664(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18943__auto___25885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18943__auto___25885,cs,m,dchan,dctr,done){
return (function (){
var f__18944__auto__ = (function (){var switch__18878__auto__ = ((function (c__18943__auto___25885,cs,m,dchan,dctr,done){
return (function (state_25797){
var state_val_25798 = (state_25797[(1)]);
if((state_val_25798 === (7))){
var inst_25793 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25799_25886 = state_25797__$1;
(statearr_25799_25886[(2)] = inst_25793);

(statearr_25799_25886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (20))){
var inst_25698 = (state_25797[(7)]);
var inst_25708 = cljs.core.first.call(null,inst_25698);
var inst_25709 = cljs.core.nth.call(null,inst_25708,(0),null);
var inst_25710 = cljs.core.nth.call(null,inst_25708,(1),null);
var state_25797__$1 = (function (){var statearr_25800 = state_25797;
(statearr_25800[(8)] = inst_25709);

return statearr_25800;
})();
if(cljs.core.truth_(inst_25710)){
var statearr_25801_25887 = state_25797__$1;
(statearr_25801_25887[(1)] = (22));

} else {
var statearr_25802_25888 = state_25797__$1;
(statearr_25802_25888[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (27))){
var inst_25740 = (state_25797[(9)]);
var inst_25745 = (state_25797[(10)]);
var inst_25669 = (state_25797[(11)]);
var inst_25738 = (state_25797[(12)]);
var inst_25745__$1 = cljs.core._nth.call(null,inst_25738,inst_25740);
var inst_25746 = cljs.core.async.put_BANG_.call(null,inst_25745__$1,inst_25669,done);
var state_25797__$1 = (function (){var statearr_25803 = state_25797;
(statearr_25803[(10)] = inst_25745__$1);

return statearr_25803;
})();
if(cljs.core.truth_(inst_25746)){
var statearr_25804_25889 = state_25797__$1;
(statearr_25804_25889[(1)] = (30));

} else {
var statearr_25805_25890 = state_25797__$1;
(statearr_25805_25890[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (1))){
var state_25797__$1 = state_25797;
var statearr_25806_25891 = state_25797__$1;
(statearr_25806_25891[(2)] = null);

(statearr_25806_25891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (24))){
var inst_25698 = (state_25797[(7)]);
var inst_25715 = (state_25797[(2)]);
var inst_25716 = cljs.core.next.call(null,inst_25698);
var inst_25678 = inst_25716;
var inst_25679 = null;
var inst_25680 = (0);
var inst_25681 = (0);
var state_25797__$1 = (function (){var statearr_25807 = state_25797;
(statearr_25807[(13)] = inst_25680);

(statearr_25807[(14)] = inst_25679);

(statearr_25807[(15)] = inst_25678);

(statearr_25807[(16)] = inst_25715);

(statearr_25807[(17)] = inst_25681);

return statearr_25807;
})();
var statearr_25808_25892 = state_25797__$1;
(statearr_25808_25892[(2)] = null);

(statearr_25808_25892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (39))){
var state_25797__$1 = state_25797;
var statearr_25812_25893 = state_25797__$1;
(statearr_25812_25893[(2)] = null);

(statearr_25812_25893[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (4))){
var inst_25669 = (state_25797[(11)]);
var inst_25669__$1 = (state_25797[(2)]);
var inst_25670 = (inst_25669__$1 == null);
var state_25797__$1 = (function (){var statearr_25813 = state_25797;
(statearr_25813[(11)] = inst_25669__$1);

return statearr_25813;
})();
if(cljs.core.truth_(inst_25670)){
var statearr_25814_25894 = state_25797__$1;
(statearr_25814_25894[(1)] = (5));

} else {
var statearr_25815_25895 = state_25797__$1;
(statearr_25815_25895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (15))){
var inst_25680 = (state_25797[(13)]);
var inst_25679 = (state_25797[(14)]);
var inst_25678 = (state_25797[(15)]);
var inst_25681 = (state_25797[(17)]);
var inst_25694 = (state_25797[(2)]);
var inst_25695 = (inst_25681 + (1));
var tmp25809 = inst_25680;
var tmp25810 = inst_25679;
var tmp25811 = inst_25678;
var inst_25678__$1 = tmp25811;
var inst_25679__$1 = tmp25810;
var inst_25680__$1 = tmp25809;
var inst_25681__$1 = inst_25695;
var state_25797__$1 = (function (){var statearr_25816 = state_25797;
(statearr_25816[(13)] = inst_25680__$1);

(statearr_25816[(18)] = inst_25694);

(statearr_25816[(14)] = inst_25679__$1);

(statearr_25816[(15)] = inst_25678__$1);

(statearr_25816[(17)] = inst_25681__$1);

return statearr_25816;
})();
var statearr_25817_25896 = state_25797__$1;
(statearr_25817_25896[(2)] = null);

(statearr_25817_25896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (21))){
var inst_25719 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25821_25897 = state_25797__$1;
(statearr_25821_25897[(2)] = inst_25719);

(statearr_25821_25897[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (31))){
var inst_25745 = (state_25797[(10)]);
var inst_25749 = done.call(null,null);
var inst_25750 = cljs.core.async.untap_STAR_.call(null,m,inst_25745);
var state_25797__$1 = (function (){var statearr_25822 = state_25797;
(statearr_25822[(19)] = inst_25749);

return statearr_25822;
})();
var statearr_25823_25898 = state_25797__$1;
(statearr_25823_25898[(2)] = inst_25750);

(statearr_25823_25898[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (32))){
var inst_25740 = (state_25797[(9)]);
var inst_25737 = (state_25797[(20)]);
var inst_25738 = (state_25797[(12)]);
var inst_25739 = (state_25797[(21)]);
var inst_25752 = (state_25797[(2)]);
var inst_25753 = (inst_25740 + (1));
var tmp25818 = inst_25737;
var tmp25819 = inst_25738;
var tmp25820 = inst_25739;
var inst_25737__$1 = tmp25818;
var inst_25738__$1 = tmp25819;
var inst_25739__$1 = tmp25820;
var inst_25740__$1 = inst_25753;
var state_25797__$1 = (function (){var statearr_25824 = state_25797;
(statearr_25824[(9)] = inst_25740__$1);

(statearr_25824[(22)] = inst_25752);

(statearr_25824[(20)] = inst_25737__$1);

(statearr_25824[(12)] = inst_25738__$1);

(statearr_25824[(21)] = inst_25739__$1);

return statearr_25824;
})();
var statearr_25825_25899 = state_25797__$1;
(statearr_25825_25899[(2)] = null);

(statearr_25825_25899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (40))){
var inst_25765 = (state_25797[(23)]);
var inst_25769 = done.call(null,null);
var inst_25770 = cljs.core.async.untap_STAR_.call(null,m,inst_25765);
var state_25797__$1 = (function (){var statearr_25826 = state_25797;
(statearr_25826[(24)] = inst_25769);

return statearr_25826;
})();
var statearr_25827_25900 = state_25797__$1;
(statearr_25827_25900[(2)] = inst_25770);

(statearr_25827_25900[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (33))){
var inst_25756 = (state_25797[(25)]);
var inst_25758 = cljs.core.chunked_seq_QMARK_.call(null,inst_25756);
var state_25797__$1 = state_25797;
if(inst_25758){
var statearr_25828_25901 = state_25797__$1;
(statearr_25828_25901[(1)] = (36));

} else {
var statearr_25829_25902 = state_25797__$1;
(statearr_25829_25902[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (13))){
var inst_25688 = (state_25797[(26)]);
var inst_25691 = cljs.core.async.close_BANG_.call(null,inst_25688);
var state_25797__$1 = state_25797;
var statearr_25830_25903 = state_25797__$1;
(statearr_25830_25903[(2)] = inst_25691);

(statearr_25830_25903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (22))){
var inst_25709 = (state_25797[(8)]);
var inst_25712 = cljs.core.async.close_BANG_.call(null,inst_25709);
var state_25797__$1 = state_25797;
var statearr_25831_25904 = state_25797__$1;
(statearr_25831_25904[(2)] = inst_25712);

(statearr_25831_25904[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (36))){
var inst_25756 = (state_25797[(25)]);
var inst_25760 = cljs.core.chunk_first.call(null,inst_25756);
var inst_25761 = cljs.core.chunk_rest.call(null,inst_25756);
var inst_25762 = cljs.core.count.call(null,inst_25760);
var inst_25737 = inst_25761;
var inst_25738 = inst_25760;
var inst_25739 = inst_25762;
var inst_25740 = (0);
var state_25797__$1 = (function (){var statearr_25832 = state_25797;
(statearr_25832[(9)] = inst_25740);

(statearr_25832[(20)] = inst_25737);

(statearr_25832[(12)] = inst_25738);

(statearr_25832[(21)] = inst_25739);

return statearr_25832;
})();
var statearr_25833_25905 = state_25797__$1;
(statearr_25833_25905[(2)] = null);

(statearr_25833_25905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (41))){
var inst_25756 = (state_25797[(25)]);
var inst_25772 = (state_25797[(2)]);
var inst_25773 = cljs.core.next.call(null,inst_25756);
var inst_25737 = inst_25773;
var inst_25738 = null;
var inst_25739 = (0);
var inst_25740 = (0);
var state_25797__$1 = (function (){var statearr_25834 = state_25797;
(statearr_25834[(9)] = inst_25740);

(statearr_25834[(27)] = inst_25772);

(statearr_25834[(20)] = inst_25737);

(statearr_25834[(12)] = inst_25738);

(statearr_25834[(21)] = inst_25739);

return statearr_25834;
})();
var statearr_25835_25906 = state_25797__$1;
(statearr_25835_25906[(2)] = null);

(statearr_25835_25906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (43))){
var state_25797__$1 = state_25797;
var statearr_25836_25907 = state_25797__$1;
(statearr_25836_25907[(2)] = null);

(statearr_25836_25907[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (29))){
var inst_25781 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25837_25908 = state_25797__$1;
(statearr_25837_25908[(2)] = inst_25781);

(statearr_25837_25908[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (44))){
var inst_25790 = (state_25797[(2)]);
var state_25797__$1 = (function (){var statearr_25838 = state_25797;
(statearr_25838[(28)] = inst_25790);

return statearr_25838;
})();
var statearr_25839_25909 = state_25797__$1;
(statearr_25839_25909[(2)] = null);

(statearr_25839_25909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (6))){
var inst_25729 = (state_25797[(29)]);
var inst_25728 = cljs.core.deref.call(null,cs);
var inst_25729__$1 = cljs.core.keys.call(null,inst_25728);
var inst_25730 = cljs.core.count.call(null,inst_25729__$1);
var inst_25731 = cljs.core.reset_BANG_.call(null,dctr,inst_25730);
var inst_25736 = cljs.core.seq.call(null,inst_25729__$1);
var inst_25737 = inst_25736;
var inst_25738 = null;
var inst_25739 = (0);
var inst_25740 = (0);
var state_25797__$1 = (function (){var statearr_25840 = state_25797;
(statearr_25840[(9)] = inst_25740);

(statearr_25840[(30)] = inst_25731);

(statearr_25840[(20)] = inst_25737);

(statearr_25840[(12)] = inst_25738);

(statearr_25840[(21)] = inst_25739);

(statearr_25840[(29)] = inst_25729__$1);

return statearr_25840;
})();
var statearr_25841_25910 = state_25797__$1;
(statearr_25841_25910[(2)] = null);

(statearr_25841_25910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (28))){
var inst_25756 = (state_25797[(25)]);
var inst_25737 = (state_25797[(20)]);
var inst_25756__$1 = cljs.core.seq.call(null,inst_25737);
var state_25797__$1 = (function (){var statearr_25842 = state_25797;
(statearr_25842[(25)] = inst_25756__$1);

return statearr_25842;
})();
if(inst_25756__$1){
var statearr_25843_25911 = state_25797__$1;
(statearr_25843_25911[(1)] = (33));

} else {
var statearr_25844_25912 = state_25797__$1;
(statearr_25844_25912[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (25))){
var inst_25740 = (state_25797[(9)]);
var inst_25739 = (state_25797[(21)]);
var inst_25742 = (inst_25740 < inst_25739);
var inst_25743 = inst_25742;
var state_25797__$1 = state_25797;
if(cljs.core.truth_(inst_25743)){
var statearr_25845_25913 = state_25797__$1;
(statearr_25845_25913[(1)] = (27));

} else {
var statearr_25846_25914 = state_25797__$1;
(statearr_25846_25914[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (34))){
var state_25797__$1 = state_25797;
var statearr_25847_25915 = state_25797__$1;
(statearr_25847_25915[(2)] = null);

(statearr_25847_25915[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (17))){
var state_25797__$1 = state_25797;
var statearr_25848_25916 = state_25797__$1;
(statearr_25848_25916[(2)] = null);

(statearr_25848_25916[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (3))){
var inst_25795 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25797__$1,inst_25795);
} else {
if((state_val_25798 === (12))){
var inst_25724 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25849_25917 = state_25797__$1;
(statearr_25849_25917[(2)] = inst_25724);

(statearr_25849_25917[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (2))){
var state_25797__$1 = state_25797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25797__$1,(4),ch);
} else {
if((state_val_25798 === (23))){
var state_25797__$1 = state_25797;
var statearr_25850_25918 = state_25797__$1;
(statearr_25850_25918[(2)] = null);

(statearr_25850_25918[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (35))){
var inst_25779 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25851_25919 = state_25797__$1;
(statearr_25851_25919[(2)] = inst_25779);

(statearr_25851_25919[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (19))){
var inst_25698 = (state_25797[(7)]);
var inst_25702 = cljs.core.chunk_first.call(null,inst_25698);
var inst_25703 = cljs.core.chunk_rest.call(null,inst_25698);
var inst_25704 = cljs.core.count.call(null,inst_25702);
var inst_25678 = inst_25703;
var inst_25679 = inst_25702;
var inst_25680 = inst_25704;
var inst_25681 = (0);
var state_25797__$1 = (function (){var statearr_25852 = state_25797;
(statearr_25852[(13)] = inst_25680);

(statearr_25852[(14)] = inst_25679);

(statearr_25852[(15)] = inst_25678);

(statearr_25852[(17)] = inst_25681);

return statearr_25852;
})();
var statearr_25853_25920 = state_25797__$1;
(statearr_25853_25920[(2)] = null);

(statearr_25853_25920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (11))){
var inst_25698 = (state_25797[(7)]);
var inst_25678 = (state_25797[(15)]);
var inst_25698__$1 = cljs.core.seq.call(null,inst_25678);
var state_25797__$1 = (function (){var statearr_25854 = state_25797;
(statearr_25854[(7)] = inst_25698__$1);

return statearr_25854;
})();
if(inst_25698__$1){
var statearr_25855_25921 = state_25797__$1;
(statearr_25855_25921[(1)] = (16));

} else {
var statearr_25856_25922 = state_25797__$1;
(statearr_25856_25922[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (9))){
var inst_25726 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25857_25923 = state_25797__$1;
(statearr_25857_25923[(2)] = inst_25726);

(statearr_25857_25923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (5))){
var inst_25676 = cljs.core.deref.call(null,cs);
var inst_25677 = cljs.core.seq.call(null,inst_25676);
var inst_25678 = inst_25677;
var inst_25679 = null;
var inst_25680 = (0);
var inst_25681 = (0);
var state_25797__$1 = (function (){var statearr_25858 = state_25797;
(statearr_25858[(13)] = inst_25680);

(statearr_25858[(14)] = inst_25679);

(statearr_25858[(15)] = inst_25678);

(statearr_25858[(17)] = inst_25681);

return statearr_25858;
})();
var statearr_25859_25924 = state_25797__$1;
(statearr_25859_25924[(2)] = null);

(statearr_25859_25924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (14))){
var state_25797__$1 = state_25797;
var statearr_25860_25925 = state_25797__$1;
(statearr_25860_25925[(2)] = null);

(statearr_25860_25925[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (45))){
var inst_25787 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25861_25926 = state_25797__$1;
(statearr_25861_25926[(2)] = inst_25787);

(statearr_25861_25926[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (26))){
var inst_25729 = (state_25797[(29)]);
var inst_25783 = (state_25797[(2)]);
var inst_25784 = cljs.core.seq.call(null,inst_25729);
var state_25797__$1 = (function (){var statearr_25862 = state_25797;
(statearr_25862[(31)] = inst_25783);

return statearr_25862;
})();
if(inst_25784){
var statearr_25863_25927 = state_25797__$1;
(statearr_25863_25927[(1)] = (42));

} else {
var statearr_25864_25928 = state_25797__$1;
(statearr_25864_25928[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (16))){
var inst_25698 = (state_25797[(7)]);
var inst_25700 = cljs.core.chunked_seq_QMARK_.call(null,inst_25698);
var state_25797__$1 = state_25797;
if(inst_25700){
var statearr_25865_25929 = state_25797__$1;
(statearr_25865_25929[(1)] = (19));

} else {
var statearr_25866_25930 = state_25797__$1;
(statearr_25866_25930[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (38))){
var inst_25776 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25867_25931 = state_25797__$1;
(statearr_25867_25931[(2)] = inst_25776);

(statearr_25867_25931[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (30))){
var state_25797__$1 = state_25797;
var statearr_25868_25932 = state_25797__$1;
(statearr_25868_25932[(2)] = null);

(statearr_25868_25932[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (10))){
var inst_25679 = (state_25797[(14)]);
var inst_25681 = (state_25797[(17)]);
var inst_25687 = cljs.core._nth.call(null,inst_25679,inst_25681);
var inst_25688 = cljs.core.nth.call(null,inst_25687,(0),null);
var inst_25689 = cljs.core.nth.call(null,inst_25687,(1),null);
var state_25797__$1 = (function (){var statearr_25869 = state_25797;
(statearr_25869[(26)] = inst_25688);

return statearr_25869;
})();
if(cljs.core.truth_(inst_25689)){
var statearr_25870_25933 = state_25797__$1;
(statearr_25870_25933[(1)] = (13));

} else {
var statearr_25871_25934 = state_25797__$1;
(statearr_25871_25934[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (18))){
var inst_25722 = (state_25797[(2)]);
var state_25797__$1 = state_25797;
var statearr_25872_25935 = state_25797__$1;
(statearr_25872_25935[(2)] = inst_25722);

(statearr_25872_25935[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (42))){
var state_25797__$1 = state_25797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25797__$1,(45),dchan);
} else {
if((state_val_25798 === (37))){
var inst_25756 = (state_25797[(25)]);
var inst_25765 = (state_25797[(23)]);
var inst_25669 = (state_25797[(11)]);
var inst_25765__$1 = cljs.core.first.call(null,inst_25756);
var inst_25766 = cljs.core.async.put_BANG_.call(null,inst_25765__$1,inst_25669,done);
var state_25797__$1 = (function (){var statearr_25873 = state_25797;
(statearr_25873[(23)] = inst_25765__$1);

return statearr_25873;
})();
if(cljs.core.truth_(inst_25766)){
var statearr_25874_25936 = state_25797__$1;
(statearr_25874_25936[(1)] = (39));

} else {
var statearr_25875_25937 = state_25797__$1;
(statearr_25875_25937[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25798 === (8))){
var inst_25680 = (state_25797[(13)]);
var inst_25681 = (state_25797[(17)]);
var inst_25683 = (inst_25681 < inst_25680);
var inst_25684 = inst_25683;
var state_25797__$1 = state_25797;
if(cljs.core.truth_(inst_25684)){
var statearr_25876_25938 = state_25797__$1;
(statearr_25876_25938[(1)] = (10));

} else {
var statearr_25877_25939 = state_25797__$1;
(statearr_25877_25939[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18943__auto___25885,cs,m,dchan,dctr,done))
;
return ((function (switch__18878__auto__,c__18943__auto___25885,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18879__auto__ = null;
var cljs$core$async$mult_$_state_machine__18879__auto____0 = (function (){
var statearr_25881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25881[(0)] = cljs$core$async$mult_$_state_machine__18879__auto__);

(statearr_25881[(1)] = (1));

return statearr_25881;
});
var cljs$core$async$mult_$_state_machine__18879__auto____1 = (function (state_25797){
while(true){
var ret_value__18880__auto__ = (function (){try{while(true){
var result__18881__auto__ = switch__18878__auto__.call(null,state_25797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18881__auto__;
}
break;
}
}catch (e25882){if((e25882 instanceof Object)){
var ex__18882__auto__ = e25882;
var statearr_25883_25940 = state_25797;
(statearr_25883_25940[(5)] = ex__18882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25941 = state_25797;
state_25797 = G__25941;
continue;
} else {
return ret_value__18880__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18879__auto__ = function(state_25797){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18879__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18879__auto____1.call(this,state_25797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18879__auto____0;
cljs$core$async$mult_$_state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18879__auto____1;
return cljs$core$async$mult_$_state_machine__18879__auto__;
})()
;})(switch__18878__auto__,c__18943__auto___25885,cs,m,dchan,dctr,done))
})();
var state__18945__auto__ = (function (){var statearr_25884 = f__18944__auto__.call(null);
(statearr_25884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18943__auto___25885);

return statearr_25884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18945__auto__);
});})(c__18943__auto___25885,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args25942 = [];
var len__16337__auto___25945 = arguments.length;
var i__16338__auto___25946 = (0);
while(true){
if((i__16338__auto___25946 < len__16337__auto___25945)){
args25942.push((arguments[i__16338__auto___25946]));

var G__25947 = (i__16338__auto___25946 + (1));
i__16338__auto___25946 = G__25947;
continue;
} else {
}
break;
}

var G__25944 = args25942.length;
switch (G__25944) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25942.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__15934__auto__ = (((m == null))?null:m);
var m__15935__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__15934__auto__)]);
if(!((m__15935__auto__ == null))){
return m__15935__auto__.call(null,m,ch);
} else {
var m__15935__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__15935__auto____$1 == null))){
return m__15935__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__15934__auto__ = (((m == null))?null:m);
var m__15935__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__15934__auto__)]);
if(!((m__15935__auto__ == null))){
return m__15935__auto__.call(null,m,ch);
} else {
var m__15935__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__15935__auto____$1 == null))){
return m__15935__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__15934__auto__ = (((m == null))?null:m);
var m__15935__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__15934__auto__)]);
if(!((m__15935__auto__ == null))){
return m__15935__auto__.call(null,m);
} else {
var m__15935__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__15935__auto____$1 == null))){
return m__15935__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__15934__auto__ = (((m == null))?null:m);
var m__15935__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__15934__auto__)]);
if(!((m__15935__auto__ == null))){
return m__15935__auto__.call(null,m,state_map);
} else {
var m__15935__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__15935__auto____$1 == null))){
return m__15935__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__15934__auto__ = (((m == null))?null:m);
var m__15935__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__15934__auto__)]);
if(!((m__15935__auto__ == null))){
return m__15935__auto__.call(null,m,mode);
} else {
var m__15935__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__15935__auto____$1 == null))){
return m__15935__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__16344__auto__ = [];
var len__16337__auto___25959 = arguments.length;
var i__16338__auto___25960 = (0);
while(true){
if((i__16338__auto___25960 < len__16337__auto___25959)){
args__16344__auto__.push((arguments[i__16338__auto___25960]));

var G__25961 = (i__16338__auto___25960 + (1));
i__16338__auto___25960 = G__25961;
continue;
} else {
}
break;
}

var argseq__16345__auto__ = ((((3) < args__16344__auto__.length))?(new cljs.core.IndexedSeq(args__16344__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__16345__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25953){
var map__25954 = p__25953;
var map__25954__$1 = ((((!((map__25954 == null)))?((((map__25954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25954):map__25954);
var opts = map__25954__$1;
var statearr_25956_25962 = state;
(statearr_25956_25962[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25954,map__25954__$1,opts){
return (function (val){
var statearr_25957_25963 = state;
(statearr_25957_25963[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25954,map__25954__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25958_25964 = state;
(statearr_25958_25964[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25949){
var G__25950 = cljs.core.first.call(null,seq25949);
var seq25949__$1 = cljs.core.next.call(null,seq25949);
var G__25951 = cljs.core.first.call(null,seq25949__$1);
var seq25949__$2 = cljs.core.next.call(null,seq25949__$1);
var G__25952 = cljs.core.first.call(null,seq25949__$2);
var seq25949__$3 = cljs.core.next.call(null,seq25949__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25950,G__25951,G__25952,seq25949__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26128 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26128 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26129){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26129 = meta26129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26130,meta26129__$1){
var self__ = this;
var _26130__$1 = this;
return (new cljs.core.async.t_cljs$core$async26128(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26129__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26128.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26130){
var self__ = this;
var _26130__$1 = this;
return self__.meta26129;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26128.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26128.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26128.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26128.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26128.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26128.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26128.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26128.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26128.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26129","meta26129",1516703701,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26128.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26128";

cljs.core.async.t_cljs$core$async26128.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15877__auto__,writer__15878__auto__,opt__15879__auto__){
return cljs.core._write.call(null,writer__15878__auto__,"cljs.core.async/t_cljs$core$async26128");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26128 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26128(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26129){
return (new cljs.core.async.t_cljs$core$async26128(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26129));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26128(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18943__auto___26291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18943__auto___26291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18944__auto__ = (function (){var switch__18878__auto__ = ((function (c__18943__auto___26291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26228){
var state_val_26229 = (state_26228[(1)]);
if((state_val_26229 === (7))){
var inst_26146 = (state_26228[(2)]);
var state_26228__$1 = state_26228;
var statearr_26230_26292 = state_26228__$1;
(statearr_26230_26292[(2)] = inst_26146);

(statearr_26230_26292[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (20))){
var inst_26158 = (state_26228[(7)]);
var state_26228__$1 = state_26228;
var statearr_26231_26293 = state_26228__$1;
(statearr_26231_26293[(2)] = inst_26158);

(statearr_26231_26293[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (27))){
var state_26228__$1 = state_26228;
var statearr_26232_26294 = state_26228__$1;
(statearr_26232_26294[(2)] = null);

(statearr_26232_26294[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (1))){
var inst_26134 = (state_26228[(8)]);
var inst_26134__$1 = calc_state.call(null);
var inst_26136 = (inst_26134__$1 == null);
var inst_26137 = cljs.core.not.call(null,inst_26136);
var state_26228__$1 = (function (){var statearr_26233 = state_26228;
(statearr_26233[(8)] = inst_26134__$1);

return statearr_26233;
})();
if(inst_26137){
var statearr_26234_26295 = state_26228__$1;
(statearr_26234_26295[(1)] = (2));

} else {
var statearr_26235_26296 = state_26228__$1;
(statearr_26235_26296[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (24))){
var inst_26202 = (state_26228[(9)]);
var inst_26188 = (state_26228[(10)]);
var inst_26181 = (state_26228[(11)]);
var inst_26202__$1 = inst_26181.call(null,inst_26188);
var state_26228__$1 = (function (){var statearr_26236 = state_26228;
(statearr_26236[(9)] = inst_26202__$1);

return statearr_26236;
})();
if(cljs.core.truth_(inst_26202__$1)){
var statearr_26237_26297 = state_26228__$1;
(statearr_26237_26297[(1)] = (29));

} else {
var statearr_26238_26298 = state_26228__$1;
(statearr_26238_26298[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (4))){
var inst_26149 = (state_26228[(2)]);
var state_26228__$1 = state_26228;
if(cljs.core.truth_(inst_26149)){
var statearr_26239_26299 = state_26228__$1;
(statearr_26239_26299[(1)] = (8));

} else {
var statearr_26240_26300 = state_26228__$1;
(statearr_26240_26300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (15))){
var inst_26175 = (state_26228[(2)]);
var state_26228__$1 = state_26228;
if(cljs.core.truth_(inst_26175)){
var statearr_26241_26301 = state_26228__$1;
(statearr_26241_26301[(1)] = (19));

} else {
var statearr_26242_26302 = state_26228__$1;
(statearr_26242_26302[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (21))){
var inst_26180 = (state_26228[(12)]);
var inst_26180__$1 = (state_26228[(2)]);
var inst_26181 = cljs.core.get.call(null,inst_26180__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26182 = cljs.core.get.call(null,inst_26180__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26183 = cljs.core.get.call(null,inst_26180__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26228__$1 = (function (){var statearr_26243 = state_26228;
(statearr_26243[(12)] = inst_26180__$1);

(statearr_26243[(13)] = inst_26182);

(statearr_26243[(11)] = inst_26181);

return statearr_26243;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26228__$1,(22),inst_26183);
} else {
if((state_val_26229 === (31))){
var inst_26210 = (state_26228[(2)]);
var state_26228__$1 = state_26228;
if(cljs.core.truth_(inst_26210)){
var statearr_26244_26303 = state_26228__$1;
(statearr_26244_26303[(1)] = (32));

} else {
var statearr_26245_26304 = state_26228__$1;
(statearr_26245_26304[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (32))){
var inst_26187 = (state_26228[(14)]);
var state_26228__$1 = state_26228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26228__$1,(35),out,inst_26187);
} else {
if((state_val_26229 === (33))){
var inst_26180 = (state_26228[(12)]);
var inst_26158 = inst_26180;
var state_26228__$1 = (function (){var statearr_26246 = state_26228;
(statearr_26246[(7)] = inst_26158);

return statearr_26246;
})();
var statearr_26247_26305 = state_26228__$1;
(statearr_26247_26305[(2)] = null);

(statearr_26247_26305[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (13))){
var inst_26158 = (state_26228[(7)]);
var inst_26165 = inst_26158.cljs$lang$protocol_mask$partition0$;
var inst_26166 = (inst_26165 & (64));
var inst_26167 = inst_26158.cljs$core$ISeq$;
var inst_26168 = (inst_26166) || (inst_26167);
var state_26228__$1 = state_26228;
if(cljs.core.truth_(inst_26168)){
var statearr_26248_26306 = state_26228__$1;
(statearr_26248_26306[(1)] = (16));

} else {
var statearr_26249_26307 = state_26228__$1;
(statearr_26249_26307[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (22))){
var inst_26187 = (state_26228[(14)]);
var inst_26188 = (state_26228[(10)]);
var inst_26186 = (state_26228[(2)]);
var inst_26187__$1 = cljs.core.nth.call(null,inst_26186,(0),null);
var inst_26188__$1 = cljs.core.nth.call(null,inst_26186,(1),null);
var inst_26189 = (inst_26187__$1 == null);
var inst_26190 = cljs.core._EQ_.call(null,inst_26188__$1,change);
var inst_26191 = (inst_26189) || (inst_26190);
var state_26228__$1 = (function (){var statearr_26250 = state_26228;
(statearr_26250[(14)] = inst_26187__$1);

(statearr_26250[(10)] = inst_26188__$1);

return statearr_26250;
})();
if(cljs.core.truth_(inst_26191)){
var statearr_26251_26308 = state_26228__$1;
(statearr_26251_26308[(1)] = (23));

} else {
var statearr_26252_26309 = state_26228__$1;
(statearr_26252_26309[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (36))){
var inst_26180 = (state_26228[(12)]);
var inst_26158 = inst_26180;
var state_26228__$1 = (function (){var statearr_26253 = state_26228;
(statearr_26253[(7)] = inst_26158);

return statearr_26253;
})();
var statearr_26254_26310 = state_26228__$1;
(statearr_26254_26310[(2)] = null);

(statearr_26254_26310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (29))){
var inst_26202 = (state_26228[(9)]);
var state_26228__$1 = state_26228;
var statearr_26255_26311 = state_26228__$1;
(statearr_26255_26311[(2)] = inst_26202);

(statearr_26255_26311[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (6))){
var state_26228__$1 = state_26228;
var statearr_26256_26312 = state_26228__$1;
(statearr_26256_26312[(2)] = false);

(statearr_26256_26312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (28))){
var inst_26198 = (state_26228[(2)]);
var inst_26199 = calc_state.call(null);
var inst_26158 = inst_26199;
var state_26228__$1 = (function (){var statearr_26257 = state_26228;
(statearr_26257[(15)] = inst_26198);

(statearr_26257[(7)] = inst_26158);

return statearr_26257;
})();
var statearr_26258_26313 = state_26228__$1;
(statearr_26258_26313[(2)] = null);

(statearr_26258_26313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (25))){
var inst_26224 = (state_26228[(2)]);
var state_26228__$1 = state_26228;
var statearr_26259_26314 = state_26228__$1;
(statearr_26259_26314[(2)] = inst_26224);

(statearr_26259_26314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (34))){
var inst_26222 = (state_26228[(2)]);
var state_26228__$1 = state_26228;
var statearr_26260_26315 = state_26228__$1;
(statearr_26260_26315[(2)] = inst_26222);

(statearr_26260_26315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (17))){
var state_26228__$1 = state_26228;
var statearr_26261_26316 = state_26228__$1;
(statearr_26261_26316[(2)] = false);

(statearr_26261_26316[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (3))){
var state_26228__$1 = state_26228;
var statearr_26262_26317 = state_26228__$1;
(statearr_26262_26317[(2)] = false);

(statearr_26262_26317[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (12))){
var inst_26226 = (state_26228[(2)]);
var state_26228__$1 = state_26228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26228__$1,inst_26226);
} else {
if((state_val_26229 === (2))){
var inst_26134 = (state_26228[(8)]);
var inst_26139 = inst_26134.cljs$lang$protocol_mask$partition0$;
var inst_26140 = (inst_26139 & (64));
var inst_26141 = inst_26134.cljs$core$ISeq$;
var inst_26142 = (inst_26140) || (inst_26141);
var state_26228__$1 = state_26228;
if(cljs.core.truth_(inst_26142)){
var statearr_26263_26318 = state_26228__$1;
(statearr_26263_26318[(1)] = (5));

} else {
var statearr_26264_26319 = state_26228__$1;
(statearr_26264_26319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (23))){
var inst_26187 = (state_26228[(14)]);
var inst_26193 = (inst_26187 == null);
var state_26228__$1 = state_26228;
if(cljs.core.truth_(inst_26193)){
var statearr_26265_26320 = state_26228__$1;
(statearr_26265_26320[(1)] = (26));

} else {
var statearr_26266_26321 = state_26228__$1;
(statearr_26266_26321[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (35))){
var inst_26213 = (state_26228[(2)]);
var state_26228__$1 = state_26228;
if(cljs.core.truth_(inst_26213)){
var statearr_26267_26322 = state_26228__$1;
(statearr_26267_26322[(1)] = (36));

} else {
var statearr_26268_26323 = state_26228__$1;
(statearr_26268_26323[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (19))){
var inst_26158 = (state_26228[(7)]);
var inst_26177 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26158);
var state_26228__$1 = state_26228;
var statearr_26269_26324 = state_26228__$1;
(statearr_26269_26324[(2)] = inst_26177);

(statearr_26269_26324[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (11))){
var inst_26158 = (state_26228[(7)]);
var inst_26162 = (inst_26158 == null);
var inst_26163 = cljs.core.not.call(null,inst_26162);
var state_26228__$1 = state_26228;
if(inst_26163){
var statearr_26270_26325 = state_26228__$1;
(statearr_26270_26325[(1)] = (13));

} else {
var statearr_26271_26326 = state_26228__$1;
(statearr_26271_26326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (9))){
var inst_26134 = (state_26228[(8)]);
var state_26228__$1 = state_26228;
var statearr_26272_26327 = state_26228__$1;
(statearr_26272_26327[(2)] = inst_26134);

(statearr_26272_26327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (5))){
var state_26228__$1 = state_26228;
var statearr_26273_26328 = state_26228__$1;
(statearr_26273_26328[(2)] = true);

(statearr_26273_26328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (14))){
var state_26228__$1 = state_26228;
var statearr_26274_26329 = state_26228__$1;
(statearr_26274_26329[(2)] = false);

(statearr_26274_26329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (26))){
var inst_26188 = (state_26228[(10)]);
var inst_26195 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26188);
var state_26228__$1 = state_26228;
var statearr_26275_26330 = state_26228__$1;
(statearr_26275_26330[(2)] = inst_26195);

(statearr_26275_26330[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (16))){
var state_26228__$1 = state_26228;
var statearr_26276_26331 = state_26228__$1;
(statearr_26276_26331[(2)] = true);

(statearr_26276_26331[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (38))){
var inst_26218 = (state_26228[(2)]);
var state_26228__$1 = state_26228;
var statearr_26277_26332 = state_26228__$1;
(statearr_26277_26332[(2)] = inst_26218);

(statearr_26277_26332[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (30))){
var inst_26188 = (state_26228[(10)]);
var inst_26182 = (state_26228[(13)]);
var inst_26181 = (state_26228[(11)]);
var inst_26205 = cljs.core.empty_QMARK_.call(null,inst_26181);
var inst_26206 = inst_26182.call(null,inst_26188);
var inst_26207 = cljs.core.not.call(null,inst_26206);
var inst_26208 = (inst_26205) && (inst_26207);
var state_26228__$1 = state_26228;
var statearr_26278_26333 = state_26228__$1;
(statearr_26278_26333[(2)] = inst_26208);

(statearr_26278_26333[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (10))){
var inst_26134 = (state_26228[(8)]);
var inst_26154 = (state_26228[(2)]);
var inst_26155 = cljs.core.get.call(null,inst_26154,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26156 = cljs.core.get.call(null,inst_26154,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26157 = cljs.core.get.call(null,inst_26154,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26158 = inst_26134;
var state_26228__$1 = (function (){var statearr_26279 = state_26228;
(statearr_26279[(16)] = inst_26157);

(statearr_26279[(7)] = inst_26158);

(statearr_26279[(17)] = inst_26155);

(statearr_26279[(18)] = inst_26156);

return statearr_26279;
})();
var statearr_26280_26334 = state_26228__$1;
(statearr_26280_26334[(2)] = null);

(statearr_26280_26334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (18))){
var inst_26172 = (state_26228[(2)]);
var state_26228__$1 = state_26228;
var statearr_26281_26335 = state_26228__$1;
(statearr_26281_26335[(2)] = inst_26172);

(statearr_26281_26335[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (37))){
var state_26228__$1 = state_26228;
var statearr_26282_26336 = state_26228__$1;
(statearr_26282_26336[(2)] = null);

(statearr_26282_26336[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26229 === (8))){
var inst_26134 = (state_26228[(8)]);
var inst_26151 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26134);
var state_26228__$1 = state_26228;
var statearr_26283_26337 = state_26228__$1;
(statearr_26283_26337[(2)] = inst_26151);

(statearr_26283_26337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18943__auto___26291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18878__auto__,c__18943__auto___26291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18879__auto__ = null;
var cljs$core$async$mix_$_state_machine__18879__auto____0 = (function (){
var statearr_26287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26287[(0)] = cljs$core$async$mix_$_state_machine__18879__auto__);

(statearr_26287[(1)] = (1));

return statearr_26287;
});
var cljs$core$async$mix_$_state_machine__18879__auto____1 = (function (state_26228){
while(true){
var ret_value__18880__auto__ = (function (){try{while(true){
var result__18881__auto__ = switch__18878__auto__.call(null,state_26228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18881__auto__;
}
break;
}
}catch (e26288){if((e26288 instanceof Object)){
var ex__18882__auto__ = e26288;
var statearr_26289_26338 = state_26228;
(statearr_26289_26338[(5)] = ex__18882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26339 = state_26228;
state_26228 = G__26339;
continue;
} else {
return ret_value__18880__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18879__auto__ = function(state_26228){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18879__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18879__auto____1.call(this,state_26228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18879__auto____0;
cljs$core$async$mix_$_state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18879__auto____1;
return cljs$core$async$mix_$_state_machine__18879__auto__;
})()
;})(switch__18878__auto__,c__18943__auto___26291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18945__auto__ = (function (){var statearr_26290 = f__18944__auto__.call(null);
(statearr_26290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18943__auto___26291);

return statearr_26290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18945__auto__);
});})(c__18943__auto___26291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__15934__auto__ = (((p == null))?null:p);
var m__15935__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__15934__auto__)]);
if(!((m__15935__auto__ == null))){
return m__15935__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__15935__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__15935__auto____$1 == null))){
return m__15935__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__15934__auto__ = (((p == null))?null:p);
var m__15935__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__15934__auto__)]);
if(!((m__15935__auto__ == null))){
return m__15935__auto__.call(null,p,v,ch);
} else {
var m__15935__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__15935__auto____$1 == null))){
return m__15935__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26340 = [];
var len__16337__auto___26343 = arguments.length;
var i__16338__auto___26344 = (0);
while(true){
if((i__16338__auto___26344 < len__16337__auto___26343)){
args26340.push((arguments[i__16338__auto___26344]));

var G__26345 = (i__16338__auto___26344 + (1));
i__16338__auto___26344 = G__26345;
continue;
} else {
}
break;
}

var G__26342 = args26340.length;
switch (G__26342) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26340.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__15934__auto__ = (((p == null))?null:p);
var m__15935__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15934__auto__)]);
if(!((m__15935__auto__ == null))){
return m__15935__auto__.call(null,p);
} else {
var m__15935__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__15935__auto____$1 == null))){
return m__15935__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__15934__auto__ = (((p == null))?null:p);
var m__15935__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15934__auto__)]);
if(!((m__15935__auto__ == null))){
return m__15935__auto__.call(null,p,v);
} else {
var m__15935__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__15935__auto____$1 == null))){
return m__15935__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args26348 = [];
var len__16337__auto___26473 = arguments.length;
var i__16338__auto___26474 = (0);
while(true){
if((i__16338__auto___26474 < len__16337__auto___26473)){
args26348.push((arguments[i__16338__auto___26474]));

var G__26475 = (i__16338__auto___26474 + (1));
i__16338__auto___26474 = G__26475;
continue;
} else {
}
break;
}

var G__26350 = args26348.length;
switch (G__26350) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26348.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__15279__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__15279__auto__)){
return or__15279__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__15279__auto__,mults){
return (function (p1__26347_SHARP_){
if(cljs.core.truth_(p1__26347_SHARP_.call(null,topic))){
return p1__26347_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26347_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__15279__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26351 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26351 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26352){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26352 = meta26352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26353,meta26352__$1){
var self__ = this;
var _26353__$1 = this;
return (new cljs.core.async.t_cljs$core$async26351(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26352__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26351.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26353){
var self__ = this;
var _26353__$1 = this;
return self__.meta26352;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26351.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26351.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26351.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26351.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26351.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26351.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26351.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26351.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26352","meta26352",1886968604,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26351.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26351";

cljs.core.async.t_cljs$core$async26351.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15877__auto__,writer__15878__auto__,opt__15879__auto__){
return cljs.core._write.call(null,writer__15878__auto__,"cljs.core.async/t_cljs$core$async26351");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26351 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26351(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26352){
return (new cljs.core.async.t_cljs$core$async26351(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26352));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26351(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18943__auto___26477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18943__auto___26477,mults,ensure_mult,p){
return (function (){
var f__18944__auto__ = (function (){var switch__18878__auto__ = ((function (c__18943__auto___26477,mults,ensure_mult,p){
return (function (state_26425){
var state_val_26426 = (state_26425[(1)]);
if((state_val_26426 === (7))){
var inst_26421 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26427_26478 = state_26425__$1;
(statearr_26427_26478[(2)] = inst_26421);

(statearr_26427_26478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (20))){
var state_26425__$1 = state_26425;
var statearr_26428_26479 = state_26425__$1;
(statearr_26428_26479[(2)] = null);

(statearr_26428_26479[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (1))){
var state_26425__$1 = state_26425;
var statearr_26429_26480 = state_26425__$1;
(statearr_26429_26480[(2)] = null);

(statearr_26429_26480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (24))){
var inst_26404 = (state_26425[(7)]);
var inst_26413 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26404);
var state_26425__$1 = state_26425;
var statearr_26430_26481 = state_26425__$1;
(statearr_26430_26481[(2)] = inst_26413);

(statearr_26430_26481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (4))){
var inst_26356 = (state_26425[(8)]);
var inst_26356__$1 = (state_26425[(2)]);
var inst_26357 = (inst_26356__$1 == null);
var state_26425__$1 = (function (){var statearr_26431 = state_26425;
(statearr_26431[(8)] = inst_26356__$1);

return statearr_26431;
})();
if(cljs.core.truth_(inst_26357)){
var statearr_26432_26482 = state_26425__$1;
(statearr_26432_26482[(1)] = (5));

} else {
var statearr_26433_26483 = state_26425__$1;
(statearr_26433_26483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (15))){
var inst_26398 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26434_26484 = state_26425__$1;
(statearr_26434_26484[(2)] = inst_26398);

(statearr_26434_26484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (21))){
var inst_26418 = (state_26425[(2)]);
var state_26425__$1 = (function (){var statearr_26435 = state_26425;
(statearr_26435[(9)] = inst_26418);

return statearr_26435;
})();
var statearr_26436_26485 = state_26425__$1;
(statearr_26436_26485[(2)] = null);

(statearr_26436_26485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (13))){
var inst_26380 = (state_26425[(10)]);
var inst_26382 = cljs.core.chunked_seq_QMARK_.call(null,inst_26380);
var state_26425__$1 = state_26425;
if(inst_26382){
var statearr_26437_26486 = state_26425__$1;
(statearr_26437_26486[(1)] = (16));

} else {
var statearr_26438_26487 = state_26425__$1;
(statearr_26438_26487[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (22))){
var inst_26410 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
if(cljs.core.truth_(inst_26410)){
var statearr_26439_26488 = state_26425__$1;
(statearr_26439_26488[(1)] = (23));

} else {
var statearr_26440_26489 = state_26425__$1;
(statearr_26440_26489[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (6))){
var inst_26406 = (state_26425[(11)]);
var inst_26356 = (state_26425[(8)]);
var inst_26404 = (state_26425[(7)]);
var inst_26404__$1 = topic_fn.call(null,inst_26356);
var inst_26405 = cljs.core.deref.call(null,mults);
var inst_26406__$1 = cljs.core.get.call(null,inst_26405,inst_26404__$1);
var state_26425__$1 = (function (){var statearr_26441 = state_26425;
(statearr_26441[(11)] = inst_26406__$1);

(statearr_26441[(7)] = inst_26404__$1);

return statearr_26441;
})();
if(cljs.core.truth_(inst_26406__$1)){
var statearr_26442_26490 = state_26425__$1;
(statearr_26442_26490[(1)] = (19));

} else {
var statearr_26443_26491 = state_26425__$1;
(statearr_26443_26491[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (25))){
var inst_26415 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26444_26492 = state_26425__$1;
(statearr_26444_26492[(2)] = inst_26415);

(statearr_26444_26492[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (17))){
var inst_26380 = (state_26425[(10)]);
var inst_26389 = cljs.core.first.call(null,inst_26380);
var inst_26390 = cljs.core.async.muxch_STAR_.call(null,inst_26389);
var inst_26391 = cljs.core.async.close_BANG_.call(null,inst_26390);
var inst_26392 = cljs.core.next.call(null,inst_26380);
var inst_26366 = inst_26392;
var inst_26367 = null;
var inst_26368 = (0);
var inst_26369 = (0);
var state_26425__$1 = (function (){var statearr_26445 = state_26425;
(statearr_26445[(12)] = inst_26367);

(statearr_26445[(13)] = inst_26366);

(statearr_26445[(14)] = inst_26368);

(statearr_26445[(15)] = inst_26391);

(statearr_26445[(16)] = inst_26369);

return statearr_26445;
})();
var statearr_26446_26493 = state_26425__$1;
(statearr_26446_26493[(2)] = null);

(statearr_26446_26493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (3))){
var inst_26423 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26425__$1,inst_26423);
} else {
if((state_val_26426 === (12))){
var inst_26400 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26447_26494 = state_26425__$1;
(statearr_26447_26494[(2)] = inst_26400);

(statearr_26447_26494[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (2))){
var state_26425__$1 = state_26425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26425__$1,(4),ch);
} else {
if((state_val_26426 === (23))){
var state_26425__$1 = state_26425;
var statearr_26448_26495 = state_26425__$1;
(statearr_26448_26495[(2)] = null);

(statearr_26448_26495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (19))){
var inst_26406 = (state_26425[(11)]);
var inst_26356 = (state_26425[(8)]);
var inst_26408 = cljs.core.async.muxch_STAR_.call(null,inst_26406);
var state_26425__$1 = state_26425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26425__$1,(22),inst_26408,inst_26356);
} else {
if((state_val_26426 === (11))){
var inst_26366 = (state_26425[(13)]);
var inst_26380 = (state_26425[(10)]);
var inst_26380__$1 = cljs.core.seq.call(null,inst_26366);
var state_26425__$1 = (function (){var statearr_26449 = state_26425;
(statearr_26449[(10)] = inst_26380__$1);

return statearr_26449;
})();
if(inst_26380__$1){
var statearr_26450_26496 = state_26425__$1;
(statearr_26450_26496[(1)] = (13));

} else {
var statearr_26451_26497 = state_26425__$1;
(statearr_26451_26497[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (9))){
var inst_26402 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26452_26498 = state_26425__$1;
(statearr_26452_26498[(2)] = inst_26402);

(statearr_26452_26498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (5))){
var inst_26363 = cljs.core.deref.call(null,mults);
var inst_26364 = cljs.core.vals.call(null,inst_26363);
var inst_26365 = cljs.core.seq.call(null,inst_26364);
var inst_26366 = inst_26365;
var inst_26367 = null;
var inst_26368 = (0);
var inst_26369 = (0);
var state_26425__$1 = (function (){var statearr_26453 = state_26425;
(statearr_26453[(12)] = inst_26367);

(statearr_26453[(13)] = inst_26366);

(statearr_26453[(14)] = inst_26368);

(statearr_26453[(16)] = inst_26369);

return statearr_26453;
})();
var statearr_26454_26499 = state_26425__$1;
(statearr_26454_26499[(2)] = null);

(statearr_26454_26499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (14))){
var state_26425__$1 = state_26425;
var statearr_26458_26500 = state_26425__$1;
(statearr_26458_26500[(2)] = null);

(statearr_26458_26500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (16))){
var inst_26380 = (state_26425[(10)]);
var inst_26384 = cljs.core.chunk_first.call(null,inst_26380);
var inst_26385 = cljs.core.chunk_rest.call(null,inst_26380);
var inst_26386 = cljs.core.count.call(null,inst_26384);
var inst_26366 = inst_26385;
var inst_26367 = inst_26384;
var inst_26368 = inst_26386;
var inst_26369 = (0);
var state_26425__$1 = (function (){var statearr_26459 = state_26425;
(statearr_26459[(12)] = inst_26367);

(statearr_26459[(13)] = inst_26366);

(statearr_26459[(14)] = inst_26368);

(statearr_26459[(16)] = inst_26369);

return statearr_26459;
})();
var statearr_26460_26501 = state_26425__$1;
(statearr_26460_26501[(2)] = null);

(statearr_26460_26501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (10))){
var inst_26367 = (state_26425[(12)]);
var inst_26366 = (state_26425[(13)]);
var inst_26368 = (state_26425[(14)]);
var inst_26369 = (state_26425[(16)]);
var inst_26374 = cljs.core._nth.call(null,inst_26367,inst_26369);
var inst_26375 = cljs.core.async.muxch_STAR_.call(null,inst_26374);
var inst_26376 = cljs.core.async.close_BANG_.call(null,inst_26375);
var inst_26377 = (inst_26369 + (1));
var tmp26455 = inst_26367;
var tmp26456 = inst_26366;
var tmp26457 = inst_26368;
var inst_26366__$1 = tmp26456;
var inst_26367__$1 = tmp26455;
var inst_26368__$1 = tmp26457;
var inst_26369__$1 = inst_26377;
var state_26425__$1 = (function (){var statearr_26461 = state_26425;
(statearr_26461[(12)] = inst_26367__$1);

(statearr_26461[(13)] = inst_26366__$1);

(statearr_26461[(14)] = inst_26368__$1);

(statearr_26461[(16)] = inst_26369__$1);

(statearr_26461[(17)] = inst_26376);

return statearr_26461;
})();
var statearr_26462_26502 = state_26425__$1;
(statearr_26462_26502[(2)] = null);

(statearr_26462_26502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (18))){
var inst_26395 = (state_26425[(2)]);
var state_26425__$1 = state_26425;
var statearr_26463_26503 = state_26425__$1;
(statearr_26463_26503[(2)] = inst_26395);

(statearr_26463_26503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26426 === (8))){
var inst_26368 = (state_26425[(14)]);
var inst_26369 = (state_26425[(16)]);
var inst_26371 = (inst_26369 < inst_26368);
var inst_26372 = inst_26371;
var state_26425__$1 = state_26425;
if(cljs.core.truth_(inst_26372)){
var statearr_26464_26504 = state_26425__$1;
(statearr_26464_26504[(1)] = (10));

} else {
var statearr_26465_26505 = state_26425__$1;
(statearr_26465_26505[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18943__auto___26477,mults,ensure_mult,p))
;
return ((function (switch__18878__auto__,c__18943__auto___26477,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18879__auto__ = null;
var cljs$core$async$state_machine__18879__auto____0 = (function (){
var statearr_26469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26469[(0)] = cljs$core$async$state_machine__18879__auto__);

(statearr_26469[(1)] = (1));

return statearr_26469;
});
var cljs$core$async$state_machine__18879__auto____1 = (function (state_26425){
while(true){
var ret_value__18880__auto__ = (function (){try{while(true){
var result__18881__auto__ = switch__18878__auto__.call(null,state_26425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18881__auto__;
}
break;
}
}catch (e26470){if((e26470 instanceof Object)){
var ex__18882__auto__ = e26470;
var statearr_26471_26506 = state_26425;
(statearr_26471_26506[(5)] = ex__18882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26507 = state_26425;
state_26425 = G__26507;
continue;
} else {
return ret_value__18880__auto__;
}
break;
}
});
cljs$core$async$state_machine__18879__auto__ = function(state_26425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18879__auto____1.call(this,state_26425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18879__auto____0;
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18879__auto____1;
return cljs$core$async$state_machine__18879__auto__;
})()
;})(switch__18878__auto__,c__18943__auto___26477,mults,ensure_mult,p))
})();
var state__18945__auto__ = (function (){var statearr_26472 = f__18944__auto__.call(null);
(statearr_26472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18943__auto___26477);

return statearr_26472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18945__auto__);
});})(c__18943__auto___26477,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args26508 = [];
var len__16337__auto___26511 = arguments.length;
var i__16338__auto___26512 = (0);
while(true){
if((i__16338__auto___26512 < len__16337__auto___26511)){
args26508.push((arguments[i__16338__auto___26512]));

var G__26513 = (i__16338__auto___26512 + (1));
i__16338__auto___26512 = G__26513;
continue;
} else {
}
break;
}

var G__26510 = args26508.length;
switch (G__26510) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26508.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args26515 = [];
var len__16337__auto___26518 = arguments.length;
var i__16338__auto___26519 = (0);
while(true){
if((i__16338__auto___26519 < len__16337__auto___26518)){
args26515.push((arguments[i__16338__auto___26519]));

var G__26520 = (i__16338__auto___26519 + (1));
i__16338__auto___26519 = G__26520;
continue;
} else {
}
break;
}

var G__26517 = args26515.length;
switch (G__26517) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26515.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args26522 = [];
var len__16337__auto___26593 = arguments.length;
var i__16338__auto___26594 = (0);
while(true){
if((i__16338__auto___26594 < len__16337__auto___26593)){
args26522.push((arguments[i__16338__auto___26594]));

var G__26595 = (i__16338__auto___26594 + (1));
i__16338__auto___26594 = G__26595;
continue;
} else {
}
break;
}

var G__26524 = args26522.length;
switch (G__26524) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26522.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18943__auto___26597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18943__auto___26597,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18944__auto__ = (function (){var switch__18878__auto__ = ((function (c__18943__auto___26597,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26563){
var state_val_26564 = (state_26563[(1)]);
if((state_val_26564 === (7))){
var state_26563__$1 = state_26563;
var statearr_26565_26598 = state_26563__$1;
(statearr_26565_26598[(2)] = null);

(statearr_26565_26598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (1))){
var state_26563__$1 = state_26563;
var statearr_26566_26599 = state_26563__$1;
(statearr_26566_26599[(2)] = null);

(statearr_26566_26599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (4))){
var inst_26527 = (state_26563[(7)]);
var inst_26529 = (inst_26527 < cnt);
var state_26563__$1 = state_26563;
if(cljs.core.truth_(inst_26529)){
var statearr_26567_26600 = state_26563__$1;
(statearr_26567_26600[(1)] = (6));

} else {
var statearr_26568_26601 = state_26563__$1;
(statearr_26568_26601[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (15))){
var inst_26559 = (state_26563[(2)]);
var state_26563__$1 = state_26563;
var statearr_26569_26602 = state_26563__$1;
(statearr_26569_26602[(2)] = inst_26559);

(statearr_26569_26602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (13))){
var inst_26552 = cljs.core.async.close_BANG_.call(null,out);
var state_26563__$1 = state_26563;
var statearr_26570_26603 = state_26563__$1;
(statearr_26570_26603[(2)] = inst_26552);

(statearr_26570_26603[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (6))){
var state_26563__$1 = state_26563;
var statearr_26571_26604 = state_26563__$1;
(statearr_26571_26604[(2)] = null);

(statearr_26571_26604[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (3))){
var inst_26561 = (state_26563[(2)]);
var state_26563__$1 = state_26563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26563__$1,inst_26561);
} else {
if((state_val_26564 === (12))){
var inst_26549 = (state_26563[(8)]);
var inst_26549__$1 = (state_26563[(2)]);
var inst_26550 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26549__$1);
var state_26563__$1 = (function (){var statearr_26572 = state_26563;
(statearr_26572[(8)] = inst_26549__$1);

return statearr_26572;
})();
if(cljs.core.truth_(inst_26550)){
var statearr_26573_26605 = state_26563__$1;
(statearr_26573_26605[(1)] = (13));

} else {
var statearr_26574_26606 = state_26563__$1;
(statearr_26574_26606[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (2))){
var inst_26526 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26527 = (0);
var state_26563__$1 = (function (){var statearr_26575 = state_26563;
(statearr_26575[(7)] = inst_26527);

(statearr_26575[(9)] = inst_26526);

return statearr_26575;
})();
var statearr_26576_26607 = state_26563__$1;
(statearr_26576_26607[(2)] = null);

(statearr_26576_26607[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (11))){
var inst_26527 = (state_26563[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26563,(10),Object,null,(9));
var inst_26536 = chs__$1.call(null,inst_26527);
var inst_26537 = done.call(null,inst_26527);
var inst_26538 = cljs.core.async.take_BANG_.call(null,inst_26536,inst_26537);
var state_26563__$1 = state_26563;
var statearr_26577_26608 = state_26563__$1;
(statearr_26577_26608[(2)] = inst_26538);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26563__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (9))){
var inst_26527 = (state_26563[(7)]);
var inst_26540 = (state_26563[(2)]);
var inst_26541 = (inst_26527 + (1));
var inst_26527__$1 = inst_26541;
var state_26563__$1 = (function (){var statearr_26578 = state_26563;
(statearr_26578[(10)] = inst_26540);

(statearr_26578[(7)] = inst_26527__$1);

return statearr_26578;
})();
var statearr_26579_26609 = state_26563__$1;
(statearr_26579_26609[(2)] = null);

(statearr_26579_26609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (5))){
var inst_26547 = (state_26563[(2)]);
var state_26563__$1 = (function (){var statearr_26580 = state_26563;
(statearr_26580[(11)] = inst_26547);

return statearr_26580;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26563__$1,(12),dchan);
} else {
if((state_val_26564 === (14))){
var inst_26549 = (state_26563[(8)]);
var inst_26554 = cljs.core.apply.call(null,f,inst_26549);
var state_26563__$1 = state_26563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26563__$1,(16),out,inst_26554);
} else {
if((state_val_26564 === (16))){
var inst_26556 = (state_26563[(2)]);
var state_26563__$1 = (function (){var statearr_26581 = state_26563;
(statearr_26581[(12)] = inst_26556);

return statearr_26581;
})();
var statearr_26582_26610 = state_26563__$1;
(statearr_26582_26610[(2)] = null);

(statearr_26582_26610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (10))){
var inst_26531 = (state_26563[(2)]);
var inst_26532 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26563__$1 = (function (){var statearr_26583 = state_26563;
(statearr_26583[(13)] = inst_26531);

return statearr_26583;
})();
var statearr_26584_26611 = state_26563__$1;
(statearr_26584_26611[(2)] = inst_26532);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26563__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26564 === (8))){
var inst_26545 = (state_26563[(2)]);
var state_26563__$1 = state_26563;
var statearr_26585_26612 = state_26563__$1;
(statearr_26585_26612[(2)] = inst_26545);

(statearr_26585_26612[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18943__auto___26597,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18878__auto__,c__18943__auto___26597,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18879__auto__ = null;
var cljs$core$async$state_machine__18879__auto____0 = (function (){
var statearr_26589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26589[(0)] = cljs$core$async$state_machine__18879__auto__);

(statearr_26589[(1)] = (1));

return statearr_26589;
});
var cljs$core$async$state_machine__18879__auto____1 = (function (state_26563){
while(true){
var ret_value__18880__auto__ = (function (){try{while(true){
var result__18881__auto__ = switch__18878__auto__.call(null,state_26563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18881__auto__;
}
break;
}
}catch (e26590){if((e26590 instanceof Object)){
var ex__18882__auto__ = e26590;
var statearr_26591_26613 = state_26563;
(statearr_26591_26613[(5)] = ex__18882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26614 = state_26563;
state_26563 = G__26614;
continue;
} else {
return ret_value__18880__auto__;
}
break;
}
});
cljs$core$async$state_machine__18879__auto__ = function(state_26563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18879__auto____1.call(this,state_26563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18879__auto____0;
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18879__auto____1;
return cljs$core$async$state_machine__18879__auto__;
})()
;})(switch__18878__auto__,c__18943__auto___26597,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18945__auto__ = (function (){var statearr_26592 = f__18944__auto__.call(null);
(statearr_26592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18943__auto___26597);

return statearr_26592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18945__auto__);
});})(c__18943__auto___26597,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args26616 = [];
var len__16337__auto___26672 = arguments.length;
var i__16338__auto___26673 = (0);
while(true){
if((i__16338__auto___26673 < len__16337__auto___26672)){
args26616.push((arguments[i__16338__auto___26673]));

var G__26674 = (i__16338__auto___26673 + (1));
i__16338__auto___26673 = G__26674;
continue;
} else {
}
break;
}

var G__26618 = args26616.length;
switch (G__26618) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26616.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18943__auto___26676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18943__auto___26676,out){
return (function (){
var f__18944__auto__ = (function (){var switch__18878__auto__ = ((function (c__18943__auto___26676,out){
return (function (state_26648){
var state_val_26649 = (state_26648[(1)]);
if((state_val_26649 === (7))){
var inst_26628 = (state_26648[(7)]);
var inst_26627 = (state_26648[(8)]);
var inst_26627__$1 = (state_26648[(2)]);
var inst_26628__$1 = cljs.core.nth.call(null,inst_26627__$1,(0),null);
var inst_26629 = cljs.core.nth.call(null,inst_26627__$1,(1),null);
var inst_26630 = (inst_26628__$1 == null);
var state_26648__$1 = (function (){var statearr_26650 = state_26648;
(statearr_26650[(7)] = inst_26628__$1);

(statearr_26650[(9)] = inst_26629);

(statearr_26650[(8)] = inst_26627__$1);

return statearr_26650;
})();
if(cljs.core.truth_(inst_26630)){
var statearr_26651_26677 = state_26648__$1;
(statearr_26651_26677[(1)] = (8));

} else {
var statearr_26652_26678 = state_26648__$1;
(statearr_26652_26678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (1))){
var inst_26619 = cljs.core.vec.call(null,chs);
var inst_26620 = inst_26619;
var state_26648__$1 = (function (){var statearr_26653 = state_26648;
(statearr_26653[(10)] = inst_26620);

return statearr_26653;
})();
var statearr_26654_26679 = state_26648__$1;
(statearr_26654_26679[(2)] = null);

(statearr_26654_26679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (4))){
var inst_26620 = (state_26648[(10)]);
var state_26648__$1 = state_26648;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26648__$1,(7),inst_26620);
} else {
if((state_val_26649 === (6))){
var inst_26644 = (state_26648[(2)]);
var state_26648__$1 = state_26648;
var statearr_26655_26680 = state_26648__$1;
(statearr_26655_26680[(2)] = inst_26644);

(statearr_26655_26680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (3))){
var inst_26646 = (state_26648[(2)]);
var state_26648__$1 = state_26648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26648__$1,inst_26646);
} else {
if((state_val_26649 === (2))){
var inst_26620 = (state_26648[(10)]);
var inst_26622 = cljs.core.count.call(null,inst_26620);
var inst_26623 = (inst_26622 > (0));
var state_26648__$1 = state_26648;
if(cljs.core.truth_(inst_26623)){
var statearr_26657_26681 = state_26648__$1;
(statearr_26657_26681[(1)] = (4));

} else {
var statearr_26658_26682 = state_26648__$1;
(statearr_26658_26682[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (11))){
var inst_26620 = (state_26648[(10)]);
var inst_26637 = (state_26648[(2)]);
var tmp26656 = inst_26620;
var inst_26620__$1 = tmp26656;
var state_26648__$1 = (function (){var statearr_26659 = state_26648;
(statearr_26659[(11)] = inst_26637);

(statearr_26659[(10)] = inst_26620__$1);

return statearr_26659;
})();
var statearr_26660_26683 = state_26648__$1;
(statearr_26660_26683[(2)] = null);

(statearr_26660_26683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (9))){
var inst_26628 = (state_26648[(7)]);
var state_26648__$1 = state_26648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26648__$1,(11),out,inst_26628);
} else {
if((state_val_26649 === (5))){
var inst_26642 = cljs.core.async.close_BANG_.call(null,out);
var state_26648__$1 = state_26648;
var statearr_26661_26684 = state_26648__$1;
(statearr_26661_26684[(2)] = inst_26642);

(statearr_26661_26684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (10))){
var inst_26640 = (state_26648[(2)]);
var state_26648__$1 = state_26648;
var statearr_26662_26685 = state_26648__$1;
(statearr_26662_26685[(2)] = inst_26640);

(statearr_26662_26685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (8))){
var inst_26628 = (state_26648[(7)]);
var inst_26620 = (state_26648[(10)]);
var inst_26629 = (state_26648[(9)]);
var inst_26627 = (state_26648[(8)]);
var inst_26632 = (function (){var cs = inst_26620;
var vec__26625 = inst_26627;
var v = inst_26628;
var c = inst_26629;
return ((function (cs,vec__26625,v,c,inst_26628,inst_26620,inst_26629,inst_26627,state_val_26649,c__18943__auto___26676,out){
return (function (p1__26615_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26615_SHARP_);
});
;})(cs,vec__26625,v,c,inst_26628,inst_26620,inst_26629,inst_26627,state_val_26649,c__18943__auto___26676,out))
})();
var inst_26633 = cljs.core.filterv.call(null,inst_26632,inst_26620);
var inst_26620__$1 = inst_26633;
var state_26648__$1 = (function (){var statearr_26663 = state_26648;
(statearr_26663[(10)] = inst_26620__$1);

return statearr_26663;
})();
var statearr_26664_26686 = state_26648__$1;
(statearr_26664_26686[(2)] = null);

(statearr_26664_26686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18943__auto___26676,out))
;
return ((function (switch__18878__auto__,c__18943__auto___26676,out){
return (function() {
var cljs$core$async$state_machine__18879__auto__ = null;
var cljs$core$async$state_machine__18879__auto____0 = (function (){
var statearr_26668 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26668[(0)] = cljs$core$async$state_machine__18879__auto__);

(statearr_26668[(1)] = (1));

return statearr_26668;
});
var cljs$core$async$state_machine__18879__auto____1 = (function (state_26648){
while(true){
var ret_value__18880__auto__ = (function (){try{while(true){
var result__18881__auto__ = switch__18878__auto__.call(null,state_26648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18881__auto__;
}
break;
}
}catch (e26669){if((e26669 instanceof Object)){
var ex__18882__auto__ = e26669;
var statearr_26670_26687 = state_26648;
(statearr_26670_26687[(5)] = ex__18882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26688 = state_26648;
state_26648 = G__26688;
continue;
} else {
return ret_value__18880__auto__;
}
break;
}
});
cljs$core$async$state_machine__18879__auto__ = function(state_26648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18879__auto____1.call(this,state_26648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18879__auto____0;
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18879__auto____1;
return cljs$core$async$state_machine__18879__auto__;
})()
;})(switch__18878__auto__,c__18943__auto___26676,out))
})();
var state__18945__auto__ = (function (){var statearr_26671 = f__18944__auto__.call(null);
(statearr_26671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18943__auto___26676);

return statearr_26671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18945__auto__);
});})(c__18943__auto___26676,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args26689 = [];
var len__16337__auto___26738 = arguments.length;
var i__16338__auto___26739 = (0);
while(true){
if((i__16338__auto___26739 < len__16337__auto___26738)){
args26689.push((arguments[i__16338__auto___26739]));

var G__26740 = (i__16338__auto___26739 + (1));
i__16338__auto___26739 = G__26740;
continue;
} else {
}
break;
}

var G__26691 = args26689.length;
switch (G__26691) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26689.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18943__auto___26742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18943__auto___26742,out){
return (function (){
var f__18944__auto__ = (function (){var switch__18878__auto__ = ((function (c__18943__auto___26742,out){
return (function (state_26715){
var state_val_26716 = (state_26715[(1)]);
if((state_val_26716 === (7))){
var inst_26697 = (state_26715[(7)]);
var inst_26697__$1 = (state_26715[(2)]);
var inst_26698 = (inst_26697__$1 == null);
var inst_26699 = cljs.core.not.call(null,inst_26698);
var state_26715__$1 = (function (){var statearr_26717 = state_26715;
(statearr_26717[(7)] = inst_26697__$1);

return statearr_26717;
})();
if(inst_26699){
var statearr_26718_26743 = state_26715__$1;
(statearr_26718_26743[(1)] = (8));

} else {
var statearr_26719_26744 = state_26715__$1;
(statearr_26719_26744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26716 === (1))){
var inst_26692 = (0);
var state_26715__$1 = (function (){var statearr_26720 = state_26715;
(statearr_26720[(8)] = inst_26692);

return statearr_26720;
})();
var statearr_26721_26745 = state_26715__$1;
(statearr_26721_26745[(2)] = null);

(statearr_26721_26745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26716 === (4))){
var state_26715__$1 = state_26715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26715__$1,(7),ch);
} else {
if((state_val_26716 === (6))){
var inst_26710 = (state_26715[(2)]);
var state_26715__$1 = state_26715;
var statearr_26722_26746 = state_26715__$1;
(statearr_26722_26746[(2)] = inst_26710);

(statearr_26722_26746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26716 === (3))){
var inst_26712 = (state_26715[(2)]);
var inst_26713 = cljs.core.async.close_BANG_.call(null,out);
var state_26715__$1 = (function (){var statearr_26723 = state_26715;
(statearr_26723[(9)] = inst_26712);

return statearr_26723;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26715__$1,inst_26713);
} else {
if((state_val_26716 === (2))){
var inst_26692 = (state_26715[(8)]);
var inst_26694 = (inst_26692 < n);
var state_26715__$1 = state_26715;
if(cljs.core.truth_(inst_26694)){
var statearr_26724_26747 = state_26715__$1;
(statearr_26724_26747[(1)] = (4));

} else {
var statearr_26725_26748 = state_26715__$1;
(statearr_26725_26748[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26716 === (11))){
var inst_26692 = (state_26715[(8)]);
var inst_26702 = (state_26715[(2)]);
var inst_26703 = (inst_26692 + (1));
var inst_26692__$1 = inst_26703;
var state_26715__$1 = (function (){var statearr_26726 = state_26715;
(statearr_26726[(8)] = inst_26692__$1);

(statearr_26726[(10)] = inst_26702);

return statearr_26726;
})();
var statearr_26727_26749 = state_26715__$1;
(statearr_26727_26749[(2)] = null);

(statearr_26727_26749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26716 === (9))){
var state_26715__$1 = state_26715;
var statearr_26728_26750 = state_26715__$1;
(statearr_26728_26750[(2)] = null);

(statearr_26728_26750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26716 === (5))){
var state_26715__$1 = state_26715;
var statearr_26729_26751 = state_26715__$1;
(statearr_26729_26751[(2)] = null);

(statearr_26729_26751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26716 === (10))){
var inst_26707 = (state_26715[(2)]);
var state_26715__$1 = state_26715;
var statearr_26730_26752 = state_26715__$1;
(statearr_26730_26752[(2)] = inst_26707);

(statearr_26730_26752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26716 === (8))){
var inst_26697 = (state_26715[(7)]);
var state_26715__$1 = state_26715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26715__$1,(11),out,inst_26697);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18943__auto___26742,out))
;
return ((function (switch__18878__auto__,c__18943__auto___26742,out){
return (function() {
var cljs$core$async$state_machine__18879__auto__ = null;
var cljs$core$async$state_machine__18879__auto____0 = (function (){
var statearr_26734 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26734[(0)] = cljs$core$async$state_machine__18879__auto__);

(statearr_26734[(1)] = (1));

return statearr_26734;
});
var cljs$core$async$state_machine__18879__auto____1 = (function (state_26715){
while(true){
var ret_value__18880__auto__ = (function (){try{while(true){
var result__18881__auto__ = switch__18878__auto__.call(null,state_26715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18881__auto__;
}
break;
}
}catch (e26735){if((e26735 instanceof Object)){
var ex__18882__auto__ = e26735;
var statearr_26736_26753 = state_26715;
(statearr_26736_26753[(5)] = ex__18882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26754 = state_26715;
state_26715 = G__26754;
continue;
} else {
return ret_value__18880__auto__;
}
break;
}
});
cljs$core$async$state_machine__18879__auto__ = function(state_26715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18879__auto____1.call(this,state_26715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18879__auto____0;
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18879__auto____1;
return cljs$core$async$state_machine__18879__auto__;
})()
;})(switch__18878__auto__,c__18943__auto___26742,out))
})();
var state__18945__auto__ = (function (){var statearr_26737 = f__18944__auto__.call(null);
(statearr_26737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18943__auto___26742);

return statearr_26737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18945__auto__);
});})(c__18943__auto___26742,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26762 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26762 = (function (map_LT_,f,ch,meta26763){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26763 = meta26763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26764,meta26763__$1){
var self__ = this;
var _26764__$1 = this;
return (new cljs.core.async.t_cljs$core$async26762(self__.map_LT_,self__.f,self__.ch,meta26763__$1));
});

cljs.core.async.t_cljs$core$async26762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26764){
var self__ = this;
var _26764__$1 = this;
return self__.meta26763;
});

cljs.core.async.t_cljs$core$async26762.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26762.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26762.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26762.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26762.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26765 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26765 = (function (map_LT_,f,ch,meta26763,_,fn1,meta26766){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26763 = meta26763;
this._ = _;
this.fn1 = fn1;
this.meta26766 = meta26766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26767,meta26766__$1){
var self__ = this;
var _26767__$1 = this;
return (new cljs.core.async.t_cljs$core$async26765(self__.map_LT_,self__.f,self__.ch,self__.meta26763,self__._,self__.fn1,meta26766__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26765.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26767){
var self__ = this;
var _26767__$1 = this;
return self__.meta26766;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26765.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26765.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26765.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26755_SHARP_){
return f1.call(null,(((p1__26755_SHARP_ == null))?null:self__.f.call(null,p1__26755_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26765.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26763","meta26763",-1755990429,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26762","cljs.core.async/t_cljs$core$async26762",1524900749,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26766","meta26766",2133586506,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26765.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26765";

cljs.core.async.t_cljs$core$async26765.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__15877__auto__,writer__15878__auto__,opt__15879__auto__){
return cljs.core._write.call(null,writer__15878__auto__,"cljs.core.async/t_cljs$core$async26765");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26765 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26765(map_LT___$1,f__$1,ch__$1,meta26763__$1,___$2,fn1__$1,meta26766){
return (new cljs.core.async.t_cljs$core$async26765(map_LT___$1,f__$1,ch__$1,meta26763__$1,___$2,fn1__$1,meta26766));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26765(self__.map_LT_,self__.f,self__.ch,self__.meta26763,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__15267__auto__ = ret;
if(cljs.core.truth_(and__15267__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__15267__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26762.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26762.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26763","meta26763",-1755990429,null)], null);
});

cljs.core.async.t_cljs$core$async26762.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26762";

cljs.core.async.t_cljs$core$async26762.cljs$lang$ctorPrWriter = (function (this__15877__auto__,writer__15878__auto__,opt__15879__auto__){
return cljs.core._write.call(null,writer__15878__auto__,"cljs.core.async/t_cljs$core$async26762");
});

cljs.core.async.__GT_t_cljs$core$async26762 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26762(map_LT___$1,f__$1,ch__$1,meta26763){
return (new cljs.core.async.t_cljs$core$async26762(map_LT___$1,f__$1,ch__$1,meta26763));
});

}

return (new cljs.core.async.t_cljs$core$async26762(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26771 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26771 = (function (map_GT_,f,ch,meta26772){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26772 = meta26772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26773,meta26772__$1){
var self__ = this;
var _26773__$1 = this;
return (new cljs.core.async.t_cljs$core$async26771(self__.map_GT_,self__.f,self__.ch,meta26772__$1));
});

cljs.core.async.t_cljs$core$async26771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26773){
var self__ = this;
var _26773__$1 = this;
return self__.meta26772;
});

cljs.core.async.t_cljs$core$async26771.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26771.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26771.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26771.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26771.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26771.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26772","meta26772",1711465590,null)], null);
});

cljs.core.async.t_cljs$core$async26771.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26771";

cljs.core.async.t_cljs$core$async26771.cljs$lang$ctorPrWriter = (function (this__15877__auto__,writer__15878__auto__,opt__15879__auto__){
return cljs.core._write.call(null,writer__15878__auto__,"cljs.core.async/t_cljs$core$async26771");
});

cljs.core.async.__GT_t_cljs$core$async26771 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26771(map_GT___$1,f__$1,ch__$1,meta26772){
return (new cljs.core.async.t_cljs$core$async26771(map_GT___$1,f__$1,ch__$1,meta26772));
});

}

return (new cljs.core.async.t_cljs$core$async26771(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26777 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26777 = (function (filter_GT_,p,ch,meta26778){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26778 = meta26778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26779,meta26778__$1){
var self__ = this;
var _26779__$1 = this;
return (new cljs.core.async.t_cljs$core$async26777(self__.filter_GT_,self__.p,self__.ch,meta26778__$1));
});

cljs.core.async.t_cljs$core$async26777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26779){
var self__ = this;
var _26779__$1 = this;
return self__.meta26778;
});

cljs.core.async.t_cljs$core$async26777.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26777.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26777.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26777.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26777.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26777.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26777.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26778","meta26778",1462401788,null)], null);
});

cljs.core.async.t_cljs$core$async26777.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26777";

cljs.core.async.t_cljs$core$async26777.cljs$lang$ctorPrWriter = (function (this__15877__auto__,writer__15878__auto__,opt__15879__auto__){
return cljs.core._write.call(null,writer__15878__auto__,"cljs.core.async/t_cljs$core$async26777");
});

cljs.core.async.__GT_t_cljs$core$async26777 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26777(filter_GT___$1,p__$1,ch__$1,meta26778){
return (new cljs.core.async.t_cljs$core$async26777(filter_GT___$1,p__$1,ch__$1,meta26778));
});

}

return (new cljs.core.async.t_cljs$core$async26777(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args26780 = [];
var len__16337__auto___26824 = arguments.length;
var i__16338__auto___26825 = (0);
while(true){
if((i__16338__auto___26825 < len__16337__auto___26824)){
args26780.push((arguments[i__16338__auto___26825]));

var G__26826 = (i__16338__auto___26825 + (1));
i__16338__auto___26825 = G__26826;
continue;
} else {
}
break;
}

var G__26782 = args26780.length;
switch (G__26782) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26780.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18943__auto___26828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18943__auto___26828,out){
return (function (){
var f__18944__auto__ = (function (){var switch__18878__auto__ = ((function (c__18943__auto___26828,out){
return (function (state_26803){
var state_val_26804 = (state_26803[(1)]);
if((state_val_26804 === (7))){
var inst_26799 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
var statearr_26805_26829 = state_26803__$1;
(statearr_26805_26829[(2)] = inst_26799);

(statearr_26805_26829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (1))){
var state_26803__$1 = state_26803;
var statearr_26806_26830 = state_26803__$1;
(statearr_26806_26830[(2)] = null);

(statearr_26806_26830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (4))){
var inst_26785 = (state_26803[(7)]);
var inst_26785__$1 = (state_26803[(2)]);
var inst_26786 = (inst_26785__$1 == null);
var state_26803__$1 = (function (){var statearr_26807 = state_26803;
(statearr_26807[(7)] = inst_26785__$1);

return statearr_26807;
})();
if(cljs.core.truth_(inst_26786)){
var statearr_26808_26831 = state_26803__$1;
(statearr_26808_26831[(1)] = (5));

} else {
var statearr_26809_26832 = state_26803__$1;
(statearr_26809_26832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (6))){
var inst_26785 = (state_26803[(7)]);
var inst_26790 = p.call(null,inst_26785);
var state_26803__$1 = state_26803;
if(cljs.core.truth_(inst_26790)){
var statearr_26810_26833 = state_26803__$1;
(statearr_26810_26833[(1)] = (8));

} else {
var statearr_26811_26834 = state_26803__$1;
(statearr_26811_26834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (3))){
var inst_26801 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26803__$1,inst_26801);
} else {
if((state_val_26804 === (2))){
var state_26803__$1 = state_26803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26803__$1,(4),ch);
} else {
if((state_val_26804 === (11))){
var inst_26793 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
var statearr_26812_26835 = state_26803__$1;
(statearr_26812_26835[(2)] = inst_26793);

(statearr_26812_26835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (9))){
var state_26803__$1 = state_26803;
var statearr_26813_26836 = state_26803__$1;
(statearr_26813_26836[(2)] = null);

(statearr_26813_26836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (5))){
var inst_26788 = cljs.core.async.close_BANG_.call(null,out);
var state_26803__$1 = state_26803;
var statearr_26814_26837 = state_26803__$1;
(statearr_26814_26837[(2)] = inst_26788);

(statearr_26814_26837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (10))){
var inst_26796 = (state_26803[(2)]);
var state_26803__$1 = (function (){var statearr_26815 = state_26803;
(statearr_26815[(8)] = inst_26796);

return statearr_26815;
})();
var statearr_26816_26838 = state_26803__$1;
(statearr_26816_26838[(2)] = null);

(statearr_26816_26838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (8))){
var inst_26785 = (state_26803[(7)]);
var state_26803__$1 = state_26803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26803__$1,(11),out,inst_26785);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18943__auto___26828,out))
;
return ((function (switch__18878__auto__,c__18943__auto___26828,out){
return (function() {
var cljs$core$async$state_machine__18879__auto__ = null;
var cljs$core$async$state_machine__18879__auto____0 = (function (){
var statearr_26820 = [null,null,null,null,null,null,null,null,null];
(statearr_26820[(0)] = cljs$core$async$state_machine__18879__auto__);

(statearr_26820[(1)] = (1));

return statearr_26820;
});
var cljs$core$async$state_machine__18879__auto____1 = (function (state_26803){
while(true){
var ret_value__18880__auto__ = (function (){try{while(true){
var result__18881__auto__ = switch__18878__auto__.call(null,state_26803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18881__auto__;
}
break;
}
}catch (e26821){if((e26821 instanceof Object)){
var ex__18882__auto__ = e26821;
var statearr_26822_26839 = state_26803;
(statearr_26822_26839[(5)] = ex__18882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26840 = state_26803;
state_26803 = G__26840;
continue;
} else {
return ret_value__18880__auto__;
}
break;
}
});
cljs$core$async$state_machine__18879__auto__ = function(state_26803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18879__auto____1.call(this,state_26803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18879__auto____0;
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18879__auto____1;
return cljs$core$async$state_machine__18879__auto__;
})()
;})(switch__18878__auto__,c__18943__auto___26828,out))
})();
var state__18945__auto__ = (function (){var statearr_26823 = f__18944__auto__.call(null);
(statearr_26823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18943__auto___26828);

return statearr_26823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18945__auto__);
});})(c__18943__auto___26828,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26841 = [];
var len__16337__auto___26844 = arguments.length;
var i__16338__auto___26845 = (0);
while(true){
if((i__16338__auto___26845 < len__16337__auto___26844)){
args26841.push((arguments[i__16338__auto___26845]));

var G__26846 = (i__16338__auto___26845 + (1));
i__16338__auto___26845 = G__26846;
continue;
} else {
}
break;
}

var G__26843 = args26841.length;
switch (G__26843) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26841.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18943__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18943__auto__){
return (function (){
var f__18944__auto__ = (function (){var switch__18878__auto__ = ((function (c__18943__auto__){
return (function (state_27013){
var state_val_27014 = (state_27013[(1)]);
if((state_val_27014 === (7))){
var inst_27009 = (state_27013[(2)]);
var state_27013__$1 = state_27013;
var statearr_27015_27056 = state_27013__$1;
(statearr_27015_27056[(2)] = inst_27009);

(statearr_27015_27056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (20))){
var inst_26979 = (state_27013[(7)]);
var inst_26990 = (state_27013[(2)]);
var inst_26991 = cljs.core.next.call(null,inst_26979);
var inst_26965 = inst_26991;
var inst_26966 = null;
var inst_26967 = (0);
var inst_26968 = (0);
var state_27013__$1 = (function (){var statearr_27016 = state_27013;
(statearr_27016[(8)] = inst_26968);

(statearr_27016[(9)] = inst_26965);

(statearr_27016[(10)] = inst_26990);

(statearr_27016[(11)] = inst_26966);

(statearr_27016[(12)] = inst_26967);

return statearr_27016;
})();
var statearr_27017_27057 = state_27013__$1;
(statearr_27017_27057[(2)] = null);

(statearr_27017_27057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (1))){
var state_27013__$1 = state_27013;
var statearr_27018_27058 = state_27013__$1;
(statearr_27018_27058[(2)] = null);

(statearr_27018_27058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (4))){
var inst_26954 = (state_27013[(13)]);
var inst_26954__$1 = (state_27013[(2)]);
var inst_26955 = (inst_26954__$1 == null);
var state_27013__$1 = (function (){var statearr_27019 = state_27013;
(statearr_27019[(13)] = inst_26954__$1);

return statearr_27019;
})();
if(cljs.core.truth_(inst_26955)){
var statearr_27020_27059 = state_27013__$1;
(statearr_27020_27059[(1)] = (5));

} else {
var statearr_27021_27060 = state_27013__$1;
(statearr_27021_27060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (15))){
var state_27013__$1 = state_27013;
var statearr_27025_27061 = state_27013__$1;
(statearr_27025_27061[(2)] = null);

(statearr_27025_27061[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (21))){
var state_27013__$1 = state_27013;
var statearr_27026_27062 = state_27013__$1;
(statearr_27026_27062[(2)] = null);

(statearr_27026_27062[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (13))){
var inst_26968 = (state_27013[(8)]);
var inst_26965 = (state_27013[(9)]);
var inst_26966 = (state_27013[(11)]);
var inst_26967 = (state_27013[(12)]);
var inst_26975 = (state_27013[(2)]);
var inst_26976 = (inst_26968 + (1));
var tmp27022 = inst_26965;
var tmp27023 = inst_26966;
var tmp27024 = inst_26967;
var inst_26965__$1 = tmp27022;
var inst_26966__$1 = tmp27023;
var inst_26967__$1 = tmp27024;
var inst_26968__$1 = inst_26976;
var state_27013__$1 = (function (){var statearr_27027 = state_27013;
(statearr_27027[(8)] = inst_26968__$1);

(statearr_27027[(14)] = inst_26975);

(statearr_27027[(9)] = inst_26965__$1);

(statearr_27027[(11)] = inst_26966__$1);

(statearr_27027[(12)] = inst_26967__$1);

return statearr_27027;
})();
var statearr_27028_27063 = state_27013__$1;
(statearr_27028_27063[(2)] = null);

(statearr_27028_27063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (22))){
var state_27013__$1 = state_27013;
var statearr_27029_27064 = state_27013__$1;
(statearr_27029_27064[(2)] = null);

(statearr_27029_27064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (6))){
var inst_26954 = (state_27013[(13)]);
var inst_26963 = f.call(null,inst_26954);
var inst_26964 = cljs.core.seq.call(null,inst_26963);
var inst_26965 = inst_26964;
var inst_26966 = null;
var inst_26967 = (0);
var inst_26968 = (0);
var state_27013__$1 = (function (){var statearr_27030 = state_27013;
(statearr_27030[(8)] = inst_26968);

(statearr_27030[(9)] = inst_26965);

(statearr_27030[(11)] = inst_26966);

(statearr_27030[(12)] = inst_26967);

return statearr_27030;
})();
var statearr_27031_27065 = state_27013__$1;
(statearr_27031_27065[(2)] = null);

(statearr_27031_27065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (17))){
var inst_26979 = (state_27013[(7)]);
var inst_26983 = cljs.core.chunk_first.call(null,inst_26979);
var inst_26984 = cljs.core.chunk_rest.call(null,inst_26979);
var inst_26985 = cljs.core.count.call(null,inst_26983);
var inst_26965 = inst_26984;
var inst_26966 = inst_26983;
var inst_26967 = inst_26985;
var inst_26968 = (0);
var state_27013__$1 = (function (){var statearr_27032 = state_27013;
(statearr_27032[(8)] = inst_26968);

(statearr_27032[(9)] = inst_26965);

(statearr_27032[(11)] = inst_26966);

(statearr_27032[(12)] = inst_26967);

return statearr_27032;
})();
var statearr_27033_27066 = state_27013__$1;
(statearr_27033_27066[(2)] = null);

(statearr_27033_27066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (3))){
var inst_27011 = (state_27013[(2)]);
var state_27013__$1 = state_27013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27013__$1,inst_27011);
} else {
if((state_val_27014 === (12))){
var inst_26999 = (state_27013[(2)]);
var state_27013__$1 = state_27013;
var statearr_27034_27067 = state_27013__$1;
(statearr_27034_27067[(2)] = inst_26999);

(statearr_27034_27067[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (2))){
var state_27013__$1 = state_27013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27013__$1,(4),in$);
} else {
if((state_val_27014 === (23))){
var inst_27007 = (state_27013[(2)]);
var state_27013__$1 = state_27013;
var statearr_27035_27068 = state_27013__$1;
(statearr_27035_27068[(2)] = inst_27007);

(statearr_27035_27068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (19))){
var inst_26994 = (state_27013[(2)]);
var state_27013__$1 = state_27013;
var statearr_27036_27069 = state_27013__$1;
(statearr_27036_27069[(2)] = inst_26994);

(statearr_27036_27069[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (11))){
var inst_26979 = (state_27013[(7)]);
var inst_26965 = (state_27013[(9)]);
var inst_26979__$1 = cljs.core.seq.call(null,inst_26965);
var state_27013__$1 = (function (){var statearr_27037 = state_27013;
(statearr_27037[(7)] = inst_26979__$1);

return statearr_27037;
})();
if(inst_26979__$1){
var statearr_27038_27070 = state_27013__$1;
(statearr_27038_27070[(1)] = (14));

} else {
var statearr_27039_27071 = state_27013__$1;
(statearr_27039_27071[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (9))){
var inst_27001 = (state_27013[(2)]);
var inst_27002 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27013__$1 = (function (){var statearr_27040 = state_27013;
(statearr_27040[(15)] = inst_27001);

return statearr_27040;
})();
if(cljs.core.truth_(inst_27002)){
var statearr_27041_27072 = state_27013__$1;
(statearr_27041_27072[(1)] = (21));

} else {
var statearr_27042_27073 = state_27013__$1;
(statearr_27042_27073[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (5))){
var inst_26957 = cljs.core.async.close_BANG_.call(null,out);
var state_27013__$1 = state_27013;
var statearr_27043_27074 = state_27013__$1;
(statearr_27043_27074[(2)] = inst_26957);

(statearr_27043_27074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (14))){
var inst_26979 = (state_27013[(7)]);
var inst_26981 = cljs.core.chunked_seq_QMARK_.call(null,inst_26979);
var state_27013__$1 = state_27013;
if(inst_26981){
var statearr_27044_27075 = state_27013__$1;
(statearr_27044_27075[(1)] = (17));

} else {
var statearr_27045_27076 = state_27013__$1;
(statearr_27045_27076[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (16))){
var inst_26997 = (state_27013[(2)]);
var state_27013__$1 = state_27013;
var statearr_27046_27077 = state_27013__$1;
(statearr_27046_27077[(2)] = inst_26997);

(statearr_27046_27077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27014 === (10))){
var inst_26968 = (state_27013[(8)]);
var inst_26966 = (state_27013[(11)]);
var inst_26973 = cljs.core._nth.call(null,inst_26966,inst_26968);
var state_27013__$1 = state_27013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27013__$1,(13),out,inst_26973);
} else {
if((state_val_27014 === (18))){
var inst_26979 = (state_27013[(7)]);
var inst_26988 = cljs.core.first.call(null,inst_26979);
var state_27013__$1 = state_27013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27013__$1,(20),out,inst_26988);
} else {
if((state_val_27014 === (8))){
var inst_26968 = (state_27013[(8)]);
var inst_26967 = (state_27013[(12)]);
var inst_26970 = (inst_26968 < inst_26967);
var inst_26971 = inst_26970;
var state_27013__$1 = state_27013;
if(cljs.core.truth_(inst_26971)){
var statearr_27047_27078 = state_27013__$1;
(statearr_27047_27078[(1)] = (10));

} else {
var statearr_27048_27079 = state_27013__$1;
(statearr_27048_27079[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18943__auto__))
;
return ((function (switch__18878__auto__,c__18943__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18879__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18879__auto____0 = (function (){
var statearr_27052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27052[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18879__auto__);

(statearr_27052[(1)] = (1));

return statearr_27052;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18879__auto____1 = (function (state_27013){
while(true){
var ret_value__18880__auto__ = (function (){try{while(true){
var result__18881__auto__ = switch__18878__auto__.call(null,state_27013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18881__auto__;
}
break;
}
}catch (e27053){if((e27053 instanceof Object)){
var ex__18882__auto__ = e27053;
var statearr_27054_27080 = state_27013;
(statearr_27054_27080[(5)] = ex__18882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27081 = state_27013;
state_27013 = G__27081;
continue;
} else {
return ret_value__18880__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18879__auto__ = function(state_27013){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18879__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18879__auto____1.call(this,state_27013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18879__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18879__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18879__auto__;
})()
;})(switch__18878__auto__,c__18943__auto__))
})();
var state__18945__auto__ = (function (){var statearr_27055 = f__18944__auto__.call(null);
(statearr_27055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18943__auto__);

return statearr_27055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18945__auto__);
});})(c__18943__auto__))
);

return c__18943__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27082 = [];
var len__16337__auto___27085 = arguments.length;
var i__16338__auto___27086 = (0);
while(true){
if((i__16338__auto___27086 < len__16337__auto___27085)){
args27082.push((arguments[i__16338__auto___27086]));

var G__27087 = (i__16338__auto___27086 + (1));
i__16338__auto___27086 = G__27087;
continue;
} else {
}
break;
}

var G__27084 = args27082.length;
switch (G__27084) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27082.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args27089 = [];
var len__16337__auto___27092 = arguments.length;
var i__16338__auto___27093 = (0);
while(true){
if((i__16338__auto___27093 < len__16337__auto___27092)){
args27089.push((arguments[i__16338__auto___27093]));

var G__27094 = (i__16338__auto___27093 + (1));
i__16338__auto___27093 = G__27094;
continue;
} else {
}
break;
}

var G__27091 = args27089.length;
switch (G__27091) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27089.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args27096 = [];
var len__16337__auto___27147 = arguments.length;
var i__16338__auto___27148 = (0);
while(true){
if((i__16338__auto___27148 < len__16337__auto___27147)){
args27096.push((arguments[i__16338__auto___27148]));

var G__27149 = (i__16338__auto___27148 + (1));
i__16338__auto___27148 = G__27149;
continue;
} else {
}
break;
}

var G__27098 = args27096.length;
switch (G__27098) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27096.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18943__auto___27151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18943__auto___27151,out){
return (function (){
var f__18944__auto__ = (function (){var switch__18878__auto__ = ((function (c__18943__auto___27151,out){
return (function (state_27122){
var state_val_27123 = (state_27122[(1)]);
if((state_val_27123 === (7))){
var inst_27117 = (state_27122[(2)]);
var state_27122__$1 = state_27122;
var statearr_27124_27152 = state_27122__$1;
(statearr_27124_27152[(2)] = inst_27117);

(statearr_27124_27152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27123 === (1))){
var inst_27099 = null;
var state_27122__$1 = (function (){var statearr_27125 = state_27122;
(statearr_27125[(7)] = inst_27099);

return statearr_27125;
})();
var statearr_27126_27153 = state_27122__$1;
(statearr_27126_27153[(2)] = null);

(statearr_27126_27153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27123 === (4))){
var inst_27102 = (state_27122[(8)]);
var inst_27102__$1 = (state_27122[(2)]);
var inst_27103 = (inst_27102__$1 == null);
var inst_27104 = cljs.core.not.call(null,inst_27103);
var state_27122__$1 = (function (){var statearr_27127 = state_27122;
(statearr_27127[(8)] = inst_27102__$1);

return statearr_27127;
})();
if(inst_27104){
var statearr_27128_27154 = state_27122__$1;
(statearr_27128_27154[(1)] = (5));

} else {
var statearr_27129_27155 = state_27122__$1;
(statearr_27129_27155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27123 === (6))){
var state_27122__$1 = state_27122;
var statearr_27130_27156 = state_27122__$1;
(statearr_27130_27156[(2)] = null);

(statearr_27130_27156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27123 === (3))){
var inst_27119 = (state_27122[(2)]);
var inst_27120 = cljs.core.async.close_BANG_.call(null,out);
var state_27122__$1 = (function (){var statearr_27131 = state_27122;
(statearr_27131[(9)] = inst_27119);

return statearr_27131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27122__$1,inst_27120);
} else {
if((state_val_27123 === (2))){
var state_27122__$1 = state_27122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27122__$1,(4),ch);
} else {
if((state_val_27123 === (11))){
var inst_27102 = (state_27122[(8)]);
var inst_27111 = (state_27122[(2)]);
var inst_27099 = inst_27102;
var state_27122__$1 = (function (){var statearr_27132 = state_27122;
(statearr_27132[(7)] = inst_27099);

(statearr_27132[(10)] = inst_27111);

return statearr_27132;
})();
var statearr_27133_27157 = state_27122__$1;
(statearr_27133_27157[(2)] = null);

(statearr_27133_27157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27123 === (9))){
var inst_27102 = (state_27122[(8)]);
var state_27122__$1 = state_27122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27122__$1,(11),out,inst_27102);
} else {
if((state_val_27123 === (5))){
var inst_27102 = (state_27122[(8)]);
var inst_27099 = (state_27122[(7)]);
var inst_27106 = cljs.core._EQ_.call(null,inst_27102,inst_27099);
var state_27122__$1 = state_27122;
if(inst_27106){
var statearr_27135_27158 = state_27122__$1;
(statearr_27135_27158[(1)] = (8));

} else {
var statearr_27136_27159 = state_27122__$1;
(statearr_27136_27159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27123 === (10))){
var inst_27114 = (state_27122[(2)]);
var state_27122__$1 = state_27122;
var statearr_27137_27160 = state_27122__$1;
(statearr_27137_27160[(2)] = inst_27114);

(statearr_27137_27160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27123 === (8))){
var inst_27099 = (state_27122[(7)]);
var tmp27134 = inst_27099;
var inst_27099__$1 = tmp27134;
var state_27122__$1 = (function (){var statearr_27138 = state_27122;
(statearr_27138[(7)] = inst_27099__$1);

return statearr_27138;
})();
var statearr_27139_27161 = state_27122__$1;
(statearr_27139_27161[(2)] = null);

(statearr_27139_27161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18943__auto___27151,out))
;
return ((function (switch__18878__auto__,c__18943__auto___27151,out){
return (function() {
var cljs$core$async$state_machine__18879__auto__ = null;
var cljs$core$async$state_machine__18879__auto____0 = (function (){
var statearr_27143 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27143[(0)] = cljs$core$async$state_machine__18879__auto__);

(statearr_27143[(1)] = (1));

return statearr_27143;
});
var cljs$core$async$state_machine__18879__auto____1 = (function (state_27122){
while(true){
var ret_value__18880__auto__ = (function (){try{while(true){
var result__18881__auto__ = switch__18878__auto__.call(null,state_27122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18881__auto__;
}
break;
}
}catch (e27144){if((e27144 instanceof Object)){
var ex__18882__auto__ = e27144;
var statearr_27145_27162 = state_27122;
(statearr_27145_27162[(5)] = ex__18882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27163 = state_27122;
state_27122 = G__27163;
continue;
} else {
return ret_value__18880__auto__;
}
break;
}
});
cljs$core$async$state_machine__18879__auto__ = function(state_27122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18879__auto____1.call(this,state_27122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18879__auto____0;
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18879__auto____1;
return cljs$core$async$state_machine__18879__auto__;
})()
;})(switch__18878__auto__,c__18943__auto___27151,out))
})();
var state__18945__auto__ = (function (){var statearr_27146 = f__18944__auto__.call(null);
(statearr_27146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18943__auto___27151);

return statearr_27146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18945__auto__);
});})(c__18943__auto___27151,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27164 = [];
var len__16337__auto___27234 = arguments.length;
var i__16338__auto___27235 = (0);
while(true){
if((i__16338__auto___27235 < len__16337__auto___27234)){
args27164.push((arguments[i__16338__auto___27235]));

var G__27236 = (i__16338__auto___27235 + (1));
i__16338__auto___27235 = G__27236;
continue;
} else {
}
break;
}

var G__27166 = args27164.length;
switch (G__27166) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27164.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18943__auto___27238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18943__auto___27238,out){
return (function (){
var f__18944__auto__ = (function (){var switch__18878__auto__ = ((function (c__18943__auto___27238,out){
return (function (state_27204){
var state_val_27205 = (state_27204[(1)]);
if((state_val_27205 === (7))){
var inst_27200 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27206_27239 = state_27204__$1;
(statearr_27206_27239[(2)] = inst_27200);

(statearr_27206_27239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (1))){
var inst_27167 = (new Array(n));
var inst_27168 = inst_27167;
var inst_27169 = (0);
var state_27204__$1 = (function (){var statearr_27207 = state_27204;
(statearr_27207[(7)] = inst_27168);

(statearr_27207[(8)] = inst_27169);

return statearr_27207;
})();
var statearr_27208_27240 = state_27204__$1;
(statearr_27208_27240[(2)] = null);

(statearr_27208_27240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (4))){
var inst_27172 = (state_27204[(9)]);
var inst_27172__$1 = (state_27204[(2)]);
var inst_27173 = (inst_27172__$1 == null);
var inst_27174 = cljs.core.not.call(null,inst_27173);
var state_27204__$1 = (function (){var statearr_27209 = state_27204;
(statearr_27209[(9)] = inst_27172__$1);

return statearr_27209;
})();
if(inst_27174){
var statearr_27210_27241 = state_27204__$1;
(statearr_27210_27241[(1)] = (5));

} else {
var statearr_27211_27242 = state_27204__$1;
(statearr_27211_27242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (15))){
var inst_27194 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27212_27243 = state_27204__$1;
(statearr_27212_27243[(2)] = inst_27194);

(statearr_27212_27243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (13))){
var state_27204__$1 = state_27204;
var statearr_27213_27244 = state_27204__$1;
(statearr_27213_27244[(2)] = null);

(statearr_27213_27244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (6))){
var inst_27169 = (state_27204[(8)]);
var inst_27190 = (inst_27169 > (0));
var state_27204__$1 = state_27204;
if(cljs.core.truth_(inst_27190)){
var statearr_27214_27245 = state_27204__$1;
(statearr_27214_27245[(1)] = (12));

} else {
var statearr_27215_27246 = state_27204__$1;
(statearr_27215_27246[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (3))){
var inst_27202 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27204__$1,inst_27202);
} else {
if((state_val_27205 === (12))){
var inst_27168 = (state_27204[(7)]);
var inst_27192 = cljs.core.vec.call(null,inst_27168);
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27204__$1,(15),out,inst_27192);
} else {
if((state_val_27205 === (2))){
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27204__$1,(4),ch);
} else {
if((state_val_27205 === (11))){
var inst_27184 = (state_27204[(2)]);
var inst_27185 = (new Array(n));
var inst_27168 = inst_27185;
var inst_27169 = (0);
var state_27204__$1 = (function (){var statearr_27216 = state_27204;
(statearr_27216[(7)] = inst_27168);

(statearr_27216[(8)] = inst_27169);

(statearr_27216[(10)] = inst_27184);

return statearr_27216;
})();
var statearr_27217_27247 = state_27204__$1;
(statearr_27217_27247[(2)] = null);

(statearr_27217_27247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (9))){
var inst_27168 = (state_27204[(7)]);
var inst_27182 = cljs.core.vec.call(null,inst_27168);
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27204__$1,(11),out,inst_27182);
} else {
if((state_val_27205 === (5))){
var inst_27168 = (state_27204[(7)]);
var inst_27169 = (state_27204[(8)]);
var inst_27177 = (state_27204[(11)]);
var inst_27172 = (state_27204[(9)]);
var inst_27176 = (inst_27168[inst_27169] = inst_27172);
var inst_27177__$1 = (inst_27169 + (1));
var inst_27178 = (inst_27177__$1 < n);
var state_27204__$1 = (function (){var statearr_27218 = state_27204;
(statearr_27218[(12)] = inst_27176);

(statearr_27218[(11)] = inst_27177__$1);

return statearr_27218;
})();
if(cljs.core.truth_(inst_27178)){
var statearr_27219_27248 = state_27204__$1;
(statearr_27219_27248[(1)] = (8));

} else {
var statearr_27220_27249 = state_27204__$1;
(statearr_27220_27249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (14))){
var inst_27197 = (state_27204[(2)]);
var inst_27198 = cljs.core.async.close_BANG_.call(null,out);
var state_27204__$1 = (function (){var statearr_27222 = state_27204;
(statearr_27222[(13)] = inst_27197);

return statearr_27222;
})();
var statearr_27223_27250 = state_27204__$1;
(statearr_27223_27250[(2)] = inst_27198);

(statearr_27223_27250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (10))){
var inst_27188 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27224_27251 = state_27204__$1;
(statearr_27224_27251[(2)] = inst_27188);

(statearr_27224_27251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (8))){
var inst_27168 = (state_27204[(7)]);
var inst_27177 = (state_27204[(11)]);
var tmp27221 = inst_27168;
var inst_27168__$1 = tmp27221;
var inst_27169 = inst_27177;
var state_27204__$1 = (function (){var statearr_27225 = state_27204;
(statearr_27225[(7)] = inst_27168__$1);

(statearr_27225[(8)] = inst_27169);

return statearr_27225;
})();
var statearr_27226_27252 = state_27204__$1;
(statearr_27226_27252[(2)] = null);

(statearr_27226_27252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18943__auto___27238,out))
;
return ((function (switch__18878__auto__,c__18943__auto___27238,out){
return (function() {
var cljs$core$async$state_machine__18879__auto__ = null;
var cljs$core$async$state_machine__18879__auto____0 = (function (){
var statearr_27230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27230[(0)] = cljs$core$async$state_machine__18879__auto__);

(statearr_27230[(1)] = (1));

return statearr_27230;
});
var cljs$core$async$state_machine__18879__auto____1 = (function (state_27204){
while(true){
var ret_value__18880__auto__ = (function (){try{while(true){
var result__18881__auto__ = switch__18878__auto__.call(null,state_27204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18881__auto__;
}
break;
}
}catch (e27231){if((e27231 instanceof Object)){
var ex__18882__auto__ = e27231;
var statearr_27232_27253 = state_27204;
(statearr_27232_27253[(5)] = ex__18882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27254 = state_27204;
state_27204 = G__27254;
continue;
} else {
return ret_value__18880__auto__;
}
break;
}
});
cljs$core$async$state_machine__18879__auto__ = function(state_27204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18879__auto____1.call(this,state_27204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18879__auto____0;
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18879__auto____1;
return cljs$core$async$state_machine__18879__auto__;
})()
;})(switch__18878__auto__,c__18943__auto___27238,out))
})();
var state__18945__auto__ = (function (){var statearr_27233 = f__18944__auto__.call(null);
(statearr_27233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18943__auto___27238);

return statearr_27233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18945__auto__);
});})(c__18943__auto___27238,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27255 = [];
var len__16337__auto___27329 = arguments.length;
var i__16338__auto___27330 = (0);
while(true){
if((i__16338__auto___27330 < len__16337__auto___27329)){
args27255.push((arguments[i__16338__auto___27330]));

var G__27331 = (i__16338__auto___27330 + (1));
i__16338__auto___27330 = G__27331;
continue;
} else {
}
break;
}

var G__27257 = args27255.length;
switch (G__27257) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27255.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18943__auto___27333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18943__auto___27333,out){
return (function (){
var f__18944__auto__ = (function (){var switch__18878__auto__ = ((function (c__18943__auto___27333,out){
return (function (state_27299){
var state_val_27300 = (state_27299[(1)]);
if((state_val_27300 === (7))){
var inst_27295 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
var statearr_27301_27334 = state_27299__$1;
(statearr_27301_27334[(2)] = inst_27295);

(statearr_27301_27334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (1))){
var inst_27258 = [];
var inst_27259 = inst_27258;
var inst_27260 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27299__$1 = (function (){var statearr_27302 = state_27299;
(statearr_27302[(7)] = inst_27259);

(statearr_27302[(8)] = inst_27260);

return statearr_27302;
})();
var statearr_27303_27335 = state_27299__$1;
(statearr_27303_27335[(2)] = null);

(statearr_27303_27335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (4))){
var inst_27263 = (state_27299[(9)]);
var inst_27263__$1 = (state_27299[(2)]);
var inst_27264 = (inst_27263__$1 == null);
var inst_27265 = cljs.core.not.call(null,inst_27264);
var state_27299__$1 = (function (){var statearr_27304 = state_27299;
(statearr_27304[(9)] = inst_27263__$1);

return statearr_27304;
})();
if(inst_27265){
var statearr_27305_27336 = state_27299__$1;
(statearr_27305_27336[(1)] = (5));

} else {
var statearr_27306_27337 = state_27299__$1;
(statearr_27306_27337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (15))){
var inst_27289 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
var statearr_27307_27338 = state_27299__$1;
(statearr_27307_27338[(2)] = inst_27289);

(statearr_27307_27338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (13))){
var state_27299__$1 = state_27299;
var statearr_27308_27339 = state_27299__$1;
(statearr_27308_27339[(2)] = null);

(statearr_27308_27339[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (6))){
var inst_27259 = (state_27299[(7)]);
var inst_27284 = inst_27259.length;
var inst_27285 = (inst_27284 > (0));
var state_27299__$1 = state_27299;
if(cljs.core.truth_(inst_27285)){
var statearr_27309_27340 = state_27299__$1;
(statearr_27309_27340[(1)] = (12));

} else {
var statearr_27310_27341 = state_27299__$1;
(statearr_27310_27341[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (3))){
var inst_27297 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27299__$1,inst_27297);
} else {
if((state_val_27300 === (12))){
var inst_27259 = (state_27299[(7)]);
var inst_27287 = cljs.core.vec.call(null,inst_27259);
var state_27299__$1 = state_27299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27299__$1,(15),out,inst_27287);
} else {
if((state_val_27300 === (2))){
var state_27299__$1 = state_27299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27299__$1,(4),ch);
} else {
if((state_val_27300 === (11))){
var inst_27263 = (state_27299[(9)]);
var inst_27267 = (state_27299[(10)]);
var inst_27277 = (state_27299[(2)]);
var inst_27278 = [];
var inst_27279 = inst_27278.push(inst_27263);
var inst_27259 = inst_27278;
var inst_27260 = inst_27267;
var state_27299__$1 = (function (){var statearr_27311 = state_27299;
(statearr_27311[(7)] = inst_27259);

(statearr_27311[(11)] = inst_27277);

(statearr_27311[(8)] = inst_27260);

(statearr_27311[(12)] = inst_27279);

return statearr_27311;
})();
var statearr_27312_27342 = state_27299__$1;
(statearr_27312_27342[(2)] = null);

(statearr_27312_27342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (9))){
var inst_27259 = (state_27299[(7)]);
var inst_27275 = cljs.core.vec.call(null,inst_27259);
var state_27299__$1 = state_27299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27299__$1,(11),out,inst_27275);
} else {
if((state_val_27300 === (5))){
var inst_27263 = (state_27299[(9)]);
var inst_27260 = (state_27299[(8)]);
var inst_27267 = (state_27299[(10)]);
var inst_27267__$1 = f.call(null,inst_27263);
var inst_27268 = cljs.core._EQ_.call(null,inst_27267__$1,inst_27260);
var inst_27269 = cljs.core.keyword_identical_QMARK_.call(null,inst_27260,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27270 = (inst_27268) || (inst_27269);
var state_27299__$1 = (function (){var statearr_27313 = state_27299;
(statearr_27313[(10)] = inst_27267__$1);

return statearr_27313;
})();
if(cljs.core.truth_(inst_27270)){
var statearr_27314_27343 = state_27299__$1;
(statearr_27314_27343[(1)] = (8));

} else {
var statearr_27315_27344 = state_27299__$1;
(statearr_27315_27344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (14))){
var inst_27292 = (state_27299[(2)]);
var inst_27293 = cljs.core.async.close_BANG_.call(null,out);
var state_27299__$1 = (function (){var statearr_27317 = state_27299;
(statearr_27317[(13)] = inst_27292);

return statearr_27317;
})();
var statearr_27318_27345 = state_27299__$1;
(statearr_27318_27345[(2)] = inst_27293);

(statearr_27318_27345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (10))){
var inst_27282 = (state_27299[(2)]);
var state_27299__$1 = state_27299;
var statearr_27319_27346 = state_27299__$1;
(statearr_27319_27346[(2)] = inst_27282);

(statearr_27319_27346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27300 === (8))){
var inst_27259 = (state_27299[(7)]);
var inst_27263 = (state_27299[(9)]);
var inst_27267 = (state_27299[(10)]);
var inst_27272 = inst_27259.push(inst_27263);
var tmp27316 = inst_27259;
var inst_27259__$1 = tmp27316;
var inst_27260 = inst_27267;
var state_27299__$1 = (function (){var statearr_27320 = state_27299;
(statearr_27320[(14)] = inst_27272);

(statearr_27320[(7)] = inst_27259__$1);

(statearr_27320[(8)] = inst_27260);

return statearr_27320;
})();
var statearr_27321_27347 = state_27299__$1;
(statearr_27321_27347[(2)] = null);

(statearr_27321_27347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18943__auto___27333,out))
;
return ((function (switch__18878__auto__,c__18943__auto___27333,out){
return (function() {
var cljs$core$async$state_machine__18879__auto__ = null;
var cljs$core$async$state_machine__18879__auto____0 = (function (){
var statearr_27325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27325[(0)] = cljs$core$async$state_machine__18879__auto__);

(statearr_27325[(1)] = (1));

return statearr_27325;
});
var cljs$core$async$state_machine__18879__auto____1 = (function (state_27299){
while(true){
var ret_value__18880__auto__ = (function (){try{while(true){
var result__18881__auto__ = switch__18878__auto__.call(null,state_27299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18881__auto__;
}
break;
}
}catch (e27326){if((e27326 instanceof Object)){
var ex__18882__auto__ = e27326;
var statearr_27327_27348 = state_27299;
(statearr_27327_27348[(5)] = ex__18882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27349 = state_27299;
state_27299 = G__27349;
continue;
} else {
return ret_value__18880__auto__;
}
break;
}
});
cljs$core$async$state_machine__18879__auto__ = function(state_27299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18879__auto____1.call(this,state_27299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18879__auto____0;
cljs$core$async$state_machine__18879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18879__auto____1;
return cljs$core$async$state_machine__18879__auto__;
})()
;})(switch__18878__auto__,c__18943__auto___27333,out))
})();
var state__18945__auto__ = (function (){var statearr_27328 = f__18944__auto__.call(null);
(statearr_27328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18943__auto___27333);

return statearr_27328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18945__auto__);
});})(c__18943__auto___27333,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map