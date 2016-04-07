// Compiled by ClojureScript 1.7.170 {}
goog.provide('com.stuartsierra.component');
goog.require('cljs.core');
goog.require('com.stuartsierra.dependency');
goog.require('com.stuartsierra.component.platform');

/**
 * @interface
 */
com.stuartsierra.component.Lifecycle = function(){};

/**
 * Begins operation of this component. Synchronous, does not return
 *   until the component is started. Returns an updated version of this
 *   component.
 */
com.stuartsierra.component.start = (function com$stuartsierra$component$start(component){
if((!((component == null))) && (!((component.com$stuartsierra$component$Lifecycle$start$arity$1 == null)))){
return component.com$stuartsierra$component$Lifecycle$start$arity$1(component);
} else {
var x__15934__auto__ = (((component == null))?null:component);
var m__15935__auto__ = (com.stuartsierra.component.start[goog.typeOf(x__15934__auto__)]);
if(!((m__15935__auto__ == null))){
return m__15935__auto__.call(null,component);
} else {
var m__15935__auto____$1 = (com.stuartsierra.component.start["_"]);
if(!((m__15935__auto____$1 == null))){
return m__15935__auto____$1.call(null,component);
} else {
throw cljs.core.missing_protocol.call(null,"Lifecycle.start",component);
}
}
}
});

/**
 * Ceases operation of this component. Synchronous, does not return
 *   until the component is stopped. Returns an updated version of this
 *   component.
 */
com.stuartsierra.component.stop = (function com$stuartsierra$component$stop(component){
if((!((component == null))) && (!((component.com$stuartsierra$component$Lifecycle$stop$arity$1 == null)))){
return component.com$stuartsierra$component$Lifecycle$stop$arity$1(component);
} else {
var x__15934__auto__ = (((component == null))?null:component);
var m__15935__auto__ = (com.stuartsierra.component.stop[goog.typeOf(x__15934__auto__)]);
if(!((m__15935__auto__ == null))){
return m__15935__auto__.call(null,component);
} else {
var m__15935__auto____$1 = (com.stuartsierra.component.stop["_"]);
if(!((m__15935__auto____$1 == null))){
return m__15935__auto____$1.call(null,component);
} else {
throw cljs.core.missing_protocol.call(null,"Lifecycle.stop",component);
}
}
}
});

(com.stuartsierra.component.Lifecycle["object"] = true);

(com.stuartsierra.component.start["object"] = (function (this$){
return this$;
}));

(com.stuartsierra.component.stop["object"] = (function (this$){
return this$;
}));
/**
 * Returns the map of other components on which this component depends.
 */
com.stuartsierra.component.dependencies = (function com$stuartsierra$component$dependencies(component){
return new cljs.core.Keyword("com.stuartsierra.component","dependencies","com.stuartsierra.component/dependencies",-1213797470).cljs$core$IFn$_invoke$arity$2(cljs.core.meta.call(null,component),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Associates metadata with component describing the other components
 *   on which it depends. Component dependencies are specified as a map.
 *   Keys in the map correspond to keys in this component which must be
 *   provided by its containing system. Values in the map are the keys in
 *   the system at which those components may be found. Alternatively, if
 *   the keys are the same in both the component and its enclosing
 *   system, they may be specified as a vector of keys.
 */
com.stuartsierra.component.using = (function com$stuartsierra$component$using(component,dependencies){
return cljs.core.vary_meta.call(null,component,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.stuartsierra.component","dependencies","com.stuartsierra.component/dependencies",-1213797470)], null),cljs.core.fnil.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY),((cljs.core.map_QMARK_.call(null,dependencies))?dependencies:((cljs.core.vector_QMARK_.call(null,dependencies))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}),dependencies)):(function(){throw cljs.core.ex_info.call(null,"Dependencies must be a map or vector",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("com.stuartsierra.component","invalid-dependencies","com.stuartsierra.component/invalid-dependencies",-1050144080),new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),dependencies], null))})()
)));
});
com.stuartsierra.component.nil_component = (function com$stuartsierra$component$nil_component(system,key){
return cljs.core.ex_info.call(null,[cljs.core.str("Component "),cljs.core.str(key),cljs.core.str(" was nil in system; maybe it returned nil from start or stop")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("com.stuartsierra.component","nil-component","com.stuartsierra.component/nil-component",-1755174116),new cljs.core.Keyword(null,"system-key","system-key",-334147604),key,new cljs.core.Keyword(null,"system","system",-29381724),system], null));
});
com.stuartsierra.component.get_component = (function com$stuartsierra$component$get_component(system,key){
var component = cljs.core.get.call(null,system,key,new cljs.core.Keyword("com.stuartsierra.component","not-found","com.stuartsierra.component/not-found",1697924753));
if((component == null)){
throw com.stuartsierra.component.nil_component.call(null,system,key);
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword("com.stuartsierra.component","not-found","com.stuartsierra.component/not-found",1697924753),component)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Missing component "),cljs.core.str(key),cljs.core.str(" from system")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("com.stuartsierra.component","missing-component","com.stuartsierra.component/missing-component",-1719526915),new cljs.core.Keyword(null,"system-key","system-key",-334147604),key,new cljs.core.Keyword(null,"system","system",-29381724),system], null));
} else {
}

return component;
});
com.stuartsierra.component.get_dependency = (function com$stuartsierra$component$get_dependency(system,system_key,component,dependency_key){
var dependency = cljs.core.get.call(null,system,system_key,new cljs.core.Keyword("com.stuartsierra.component","not-found","com.stuartsierra.component/not-found",1697924753));
if((dependency == null)){
throw com.stuartsierra.component.nil_component.call(null,system,system_key);
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword("com.stuartsierra.component","not-found","com.stuartsierra.component/not-found",1697924753),dependency)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Missing dependency "),cljs.core.str(dependency_key),cljs.core.str(" of "),cljs.core.str(com.stuartsierra.component.platform.type_name.call(null,component)),cljs.core.str(" expected in system at "),cljs.core.str(system_key)].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("com.stuartsierra.component","missing-dependency","com.stuartsierra.component/missing-dependency",-1159089756),new cljs.core.Keyword(null,"system-key","system-key",-334147604),system_key,new cljs.core.Keyword(null,"dependency-key","dependency-key",684780755),dependency_key,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"system","system",-29381724),system], null));
} else {
}

return dependency;
});
/**
 * Associates dependency metadata with multiple components in the
 *   system. dependency-map is a map of keys in the system to maps or
 *   vectors specifying the dependencies of the component at that key in
 *   the system, as per 'using'.
 */
com.stuartsierra.component.system_using = (function com$stuartsierra$component$system_using(system,dependency_map){
return cljs.core.reduce_kv.call(null,(function (system__$1,key,dependencies){
var component = com.stuartsierra.component.get_component.call(null,system__$1,key);
return cljs.core.assoc.call(null,system__$1,key,com.stuartsierra.component.using.call(null,component,dependencies));
}),system,dependency_map);
});
/**
 * Returns a dependency graph, using the data structures defined in
 *   com.stuartsierra.dependency, for the components found by
 *   (select-keys system component-keys)
 */
com.stuartsierra.component.dependency_graph = (function com$stuartsierra$component$dependency_graph(system,component_keys){
return cljs.core.reduce_kv.call(null,(function (graph,key,component){
return cljs.core.reduce.call(null,(function (p1__29690_SHARP_,p2__29691_SHARP_){
return com.stuartsierra.dependency.depend.call(null,p1__29690_SHARP_,key,p2__29691_SHARP_);
}),graph,cljs.core.vals.call(null,com.stuartsierra.component.dependencies.call(null,component)));
}),com.stuartsierra.dependency.graph.call(null),cljs.core.select_keys.call(null,system,component_keys));
});
com.stuartsierra.component.assoc_dependency = (function com$stuartsierra$component$assoc_dependency(system,component,dependency_key,system_key){
var dependency = com.stuartsierra.component.get_dependency.call(null,system,system_key,component,dependency_key);
return cljs.core.assoc.call(null,component,dependency_key,dependency);
});
com.stuartsierra.component.assoc_dependencies = (function com$stuartsierra$component$assoc_dependencies(component,system){
return cljs.core.reduce_kv.call(null,(function (p1__29692_SHARP_,p2__29693_SHARP_,p3__29694_SHARP_){
return com.stuartsierra.component.assoc_dependency.call(null,system,p1__29692_SHARP_,p2__29693_SHARP_,p3__29694_SHARP_);
}),component,com.stuartsierra.component.dependencies.call(null,component));
});
com.stuartsierra.component.try_action = (function com$stuartsierra$component$try_action(component,system,key,f,args){
try{return cljs.core.apply.call(null,f,component,args);
}catch (e29696){var t = e29696;
throw cljs.core.ex_info.call(null,[cljs.core.str("Error in component "),cljs.core.str(key),cljs.core.str(" in system "),cljs.core.str(com.stuartsierra.component.platform.type_name.call(null,system)),cljs.core.str(" calling "),cljs.core.str(f)].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("com.stuartsierra.component","component-function-threw-exception","com.stuartsierra.component/component-function-threw-exception",1285478818),new cljs.core.Keyword(null,"function","function",-2127255473),f,new cljs.core.Keyword(null,"system-key","system-key",-334147604),key,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"system","system",-29381724),system], null),t);
}});
/**
 * Invokes (apply f component args) on each of the components at
 *   component-keys in the system, in dependency order. Before invoking
 *   f, assoc's updated dependencies of the component.
 */
com.stuartsierra.component.update_system = (function com$stuartsierra$component$update_system(var_args){
var args__16344__auto__ = [];
var len__16337__auto___29701 = arguments.length;
var i__16338__auto___29702 = (0);
while(true){
if((i__16338__auto___29702 < len__16337__auto___29701)){
args__16344__auto__.push((arguments[i__16338__auto___29702]));

var G__29703 = (i__16338__auto___29702 + (1));
i__16338__auto___29702 = G__29703;
continue;
} else {
}
break;
}

var argseq__16345__auto__ = ((((3) < args__16344__auto__.length))?(new cljs.core.IndexedSeq(args__16344__auto__.slice((3)),(0))):null);
return com.stuartsierra.component.update_system.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__16345__auto__);
});

com.stuartsierra.component.update_system.cljs$core$IFn$_invoke$arity$variadic = (function (system,component_keys,f,args){
var graph = com.stuartsierra.component.dependency_graph.call(null,system,component_keys);
return cljs.core.reduce.call(null,((function (graph){
return (function (system__$1,key){
return cljs.core.assoc.call(null,system__$1,key,com.stuartsierra.component.try_action.call(null,com.stuartsierra.component.assoc_dependencies.call(null,com.stuartsierra.component.get_component.call(null,system__$1,key),system__$1),system__$1,key,f,args));
});})(graph))
,system,cljs.core.sort.call(null,com.stuartsierra.dependency.topo_comparator.call(null,graph),component_keys));
});

com.stuartsierra.component.update_system.cljs$lang$maxFixedArity = (3);

com.stuartsierra.component.update_system.cljs$lang$applyTo = (function (seq29697){
var G__29698 = cljs.core.first.call(null,seq29697);
var seq29697__$1 = cljs.core.next.call(null,seq29697);
var G__29699 = cljs.core.first.call(null,seq29697__$1);
var seq29697__$2 = cljs.core.next.call(null,seq29697__$1);
var G__29700 = cljs.core.first.call(null,seq29697__$2);
var seq29697__$3 = cljs.core.next.call(null,seq29697__$2);
return com.stuartsierra.component.update_system.cljs$core$IFn$_invoke$arity$variadic(G__29698,G__29699,G__29700,seq29697__$3);
});
/**
 * Like update-system but operates in reverse dependency order.
 */
com.stuartsierra.component.update_system_reverse = (function com$stuartsierra$component$update_system_reverse(var_args){
var args__16344__auto__ = [];
var len__16337__auto___29708 = arguments.length;
var i__16338__auto___29709 = (0);
while(true){
if((i__16338__auto___29709 < len__16337__auto___29708)){
args__16344__auto__.push((arguments[i__16338__auto___29709]));

var G__29710 = (i__16338__auto___29709 + (1));
i__16338__auto___29709 = G__29710;
continue;
} else {
}
break;
}

var argseq__16345__auto__ = ((((3) < args__16344__auto__.length))?(new cljs.core.IndexedSeq(args__16344__auto__.slice((3)),(0))):null);
return com.stuartsierra.component.update_system_reverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__16345__auto__);
});

com.stuartsierra.component.update_system_reverse.cljs$core$IFn$_invoke$arity$variadic = (function (system,component_keys,f,args){
var graph = com.stuartsierra.component.dependency_graph.call(null,system,component_keys);
return cljs.core.reduce.call(null,((function (graph){
return (function (system__$1,key){
return cljs.core.assoc.call(null,system__$1,key,com.stuartsierra.component.try_action.call(null,com.stuartsierra.component.assoc_dependencies.call(null,com.stuartsierra.component.get_component.call(null,system__$1,key),system__$1),system__$1,key,f,args));
});})(graph))
,system,cljs.core.reverse.call(null,cljs.core.sort.call(null,com.stuartsierra.dependency.topo_comparator.call(null,graph),component_keys)));
});

com.stuartsierra.component.update_system_reverse.cljs$lang$maxFixedArity = (3);

com.stuartsierra.component.update_system_reverse.cljs$lang$applyTo = (function (seq29704){
var G__29705 = cljs.core.first.call(null,seq29704);
var seq29704__$1 = cljs.core.next.call(null,seq29704);
var G__29706 = cljs.core.first.call(null,seq29704__$1);
var seq29704__$2 = cljs.core.next.call(null,seq29704__$1);
var G__29707 = cljs.core.first.call(null,seq29704__$2);
var seq29704__$3 = cljs.core.next.call(null,seq29704__$2);
return com.stuartsierra.component.update_system_reverse.cljs$core$IFn$_invoke$arity$variadic(G__29705,G__29706,G__29707,seq29704__$3);
});
/**
 * Recursively starts components in the system, in dependency order,
 *   assoc'ing in their dependencies along the way. component-keys is a
 *   collection of keys (order doesn't matter) in the system specifying
 *   the components to start, defaults to all keys in the system.
 */
com.stuartsierra.component.start_system = (function com$stuartsierra$component$start_system(var_args){
var args29711 = [];
var len__16337__auto___29714 = arguments.length;
var i__16338__auto___29715 = (0);
while(true){
if((i__16338__auto___29715 < len__16337__auto___29714)){
args29711.push((arguments[i__16338__auto___29715]));

var G__29716 = (i__16338__auto___29715 + (1));
i__16338__auto___29715 = G__29716;
continue;
} else {
}
break;
}

var G__29713 = args29711.length;
switch (G__29713) {
case 1:
return com.stuartsierra.component.start_system.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.stuartsierra.component.start_system.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29711.length)].join('')));

}
});

com.stuartsierra.component.start_system.cljs$core$IFn$_invoke$arity$1 = (function (system){
return com.stuartsierra.component.start_system.call(null,system,cljs.core.keys.call(null,system));
});

com.stuartsierra.component.start_system.cljs$core$IFn$_invoke$arity$2 = (function (system,component_keys){
return com.stuartsierra.component.update_system.call(null,system,component_keys,new cljs.core.Var(function(){return com.stuartsierra.component.start;},new cljs.core.Symbol("com.stuartsierra.component","start","com.stuartsierra.component/start",-1511960847,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol("com.stuartsierra.component","Lifecycle","com.stuartsierra.component/Lifecycle",-1776107234,null),new cljs.core.Symbol(null,"com.stuartsierra.component","com.stuartsierra.component",881800690,null),new cljs.core.Symbol(null,"start","start",1285322546,null),".cljs_rhino_repl/com/stuartsierra/component.cljc",9,1,5,6,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null)], null)),"Begins operation of this component. Synchronous, does not return\n  until the component is started. Returns an updated version of this\n  component.",(cljs.core.truth_(com.stuartsierra.component.start)?com.stuartsierra.component.start.cljs$lang$test:null)])));
});

com.stuartsierra.component.start_system.cljs$lang$maxFixedArity = 2;
/**
 * Recursively stops components in the system, in reverse dependency
 *   order. component-keys is a collection of keys (order doesn't matter)
 *   in the system specifying the components to stop, defaults to all
 *   keys in the system.
 */
com.stuartsierra.component.stop_system = (function com$stuartsierra$component$stop_system(var_args){
var args29718 = [];
var len__16337__auto___29721 = arguments.length;
var i__16338__auto___29722 = (0);
while(true){
if((i__16338__auto___29722 < len__16337__auto___29721)){
args29718.push((arguments[i__16338__auto___29722]));

var G__29723 = (i__16338__auto___29722 + (1));
i__16338__auto___29722 = G__29723;
continue;
} else {
}
break;
}

var G__29720 = args29718.length;
switch (G__29720) {
case 1:
return com.stuartsierra.component.stop_system.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.stuartsierra.component.stop_system.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29718.length)].join('')));

}
});

com.stuartsierra.component.stop_system.cljs$core$IFn$_invoke$arity$1 = (function (system){
return com.stuartsierra.component.stop_system.call(null,system,cljs.core.keys.call(null,system));
});

com.stuartsierra.component.stop_system.cljs$core$IFn$_invoke$arity$2 = (function (system,component_keys){
return com.stuartsierra.component.update_system_reverse.call(null,system,component_keys,new cljs.core.Var(function(){return com.stuartsierra.component.stop;},new cljs.core.Symbol("com.stuartsierra.component","stop","com.stuartsierra.component/stop",1533540630,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol("com.stuartsierra.component","Lifecycle","com.stuartsierra.component/Lifecycle",-1776107234,null),new cljs.core.Symbol(null,"com.stuartsierra.component","com.stuartsierra.component",881800690,null),new cljs.core.Symbol(null,"stop","stop",-500379815,null),".cljs_rhino_repl/com/stuartsierra/component.cljc",8,1,5,10,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null)], null)),"Ceases operation of this component. Synchronous, does not return\n  until the component is stopped. Returns an updated version of this\n  component.",(cljs.core.truth_(com.stuartsierra.component.stop)?com.stuartsierra.component.stop.cljs$lang$test:null)])));
});

com.stuartsierra.component.stop_system.cljs$lang$maxFixedArity = 2;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.stuartsierra.component.SystemMap = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.stuartsierra.component.SystemMap.prototype.com$stuartsierra$component$Lifecycle$ = true;

com.stuartsierra.component.SystemMap.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (system){
var self__ = this;
var system__$1 = this;
return com.stuartsierra.component.start_system.call(null,system__$1);
});

com.stuartsierra.component.SystemMap.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (system){
var self__ = this;
var system__$1 = this;
return com.stuartsierra.component.stop_system.call(null,system__$1);
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15893__auto__,k__15894__auto__){
var self__ = this;
var this__15893__auto____$1 = this;
return cljs.core._lookup.call(null,this__15893__auto____$1,k__15894__auto__,null);
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15895__auto__,k29726,else__15896__auto__){
var self__ = this;
var this__15895__auto____$1 = this;
var G__29728 = k29726;
switch (G__29728) {
default:
return cljs.core.get.call(null,self__.__extmap,k29726,else__15896__auto__);

}
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15907__auto__,writer__15908__auto__,opts__15909__auto__){
var self__ = this;
var this__15907__auto____$1 = this;
var pr_pair__15910__auto__ = ((function (this__15907__auto____$1){
return (function (keyval__15911__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__15908__auto__,cljs.core.pr_writer,""," ","",opts__15909__auto__,keyval__15911__auto__);
});})(this__15907__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__15908__auto__,pr_pair__15910__auto__,"#com.stuartsierra.component.SystemMap{",", ","}",opts__15909__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IIterable$ = true;

com.stuartsierra.component.SystemMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29725){
var self__ = this;
var G__29725__$1 = this;
return (new cljs.core.RecordIter((0),G__29725__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15891__auto__){
var self__ = this;
var this__15891__auto____$1 = this;
return self__.__meta;
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__15887__auto__){
var self__ = this;
var this__15887__auto____$1 = this;
return (new com.stuartsierra.component.SystemMap(self__.__meta,self__.__extmap,self__.__hash));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15897__auto__){
var self__ = this;
var this__15897__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15888__auto__){
var self__ = this;
var this__15888__auto____$1 = this;
var h__15714__auto__ = self__.__hash;
if(!((h__15714__auto__ == null))){
return h__15714__auto__;
} else {
var h__15714__auto____$1 = cljs.core.hash_imap.call(null,this__15888__auto____$1);
self__.__hash = h__15714__auto____$1;

return h__15714__auto____$1;
}
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15889__auto__,other__15890__auto__){
var self__ = this;
var this__15889__auto____$1 = this;
if(cljs.core.truth_((function (){var and__15267__auto__ = other__15890__auto__;
if(cljs.core.truth_(and__15267__auto__)){
var and__15267__auto____$1 = (this__15889__auto____$1.constructor === other__15890__auto__.constructor);
if(and__15267__auto____$1){
return cljs.core.equiv_map.call(null,this__15889__auto____$1,other__15890__auto__);
} else {
return and__15267__auto____$1;
}
} else {
return and__15267__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15902__auto__,k__15903__auto__){
var self__ = this;
var this__15902__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__15903__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15902__auto____$1),self__.__meta),k__15903__auto__);
} else {
return (new com.stuartsierra.component.SystemMap(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15903__auto__)),null));
}
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15900__auto__,k__15901__auto__,G__29725){
var self__ = this;
var this__15900__auto____$1 = this;
var pred__29729 = cljs.core.keyword_identical_QMARK_;
var expr__29730 = k__15901__auto__;
return (new com.stuartsierra.component.SystemMap(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15901__auto__,G__29725),null));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15905__auto__){
var self__ = this;
var this__15905__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15892__auto__,G__29725){
var self__ = this;
var this__15892__auto____$1 = this;
return (new com.stuartsierra.component.SystemMap(G__29725,self__.__extmap,self__.__hash));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15898__auto__,entry__15899__auto__){
var self__ = this;
var this__15898__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__15899__auto__)){
return cljs.core._assoc.call(null,this__15898__auto____$1,cljs.core._nth.call(null,entry__15899__auto__,(0)),cljs.core._nth.call(null,entry__15899__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__15898__auto____$1,entry__15899__auto__);
}
});

com.stuartsierra.component.SystemMap.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

com.stuartsierra.component.SystemMap.cljs$lang$type = true;

com.stuartsierra.component.SystemMap.cljs$lang$ctorPrSeq = (function (this__15927__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.stuartsierra.component/SystemMap");
});

com.stuartsierra.component.SystemMap.cljs$lang$ctorPrWriter = (function (this__15927__auto__,writer__15928__auto__){
return cljs.core._write.call(null,writer__15928__auto__,"com.stuartsierra.component/SystemMap");
});

com.stuartsierra.component.__GT_SystemMap = (function com$stuartsierra$component$__GT_SystemMap(){
return (new com.stuartsierra.component.SystemMap(null,null,null));
});

com.stuartsierra.component.map__GT_SystemMap = (function com$stuartsierra$component$map__GT_SystemMap(G__29727){
return (new com.stuartsierra.component.SystemMap(null,cljs.core.dissoc.call(null,G__29727),null));
});

com.stuartsierra.component.SystemMap.prototype.cljs$core$IPrintWithWriter$ = true;

com.stuartsierra.component.SystemMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core._write.call(null,writer,"#<SystemMap>");
});
/**
 * Returns a system constructed of key/value pairs. The system has
 *   default implementations of the Lifecycle 'start' and 'stop' methods
 *   which recursively start/stop all components in the system.
 * 
 *   System maps print as #<SystemMap> to avoid overwhelming the printer
 *   with large objects. As a consequence, printed system maps cannot be
 *   'read'. To disable this behavior and print system maps like normal
 *   records, call
 *   (remove-method clojure.core/print-method com.stuartsierra.component.SystemMap)
 */
com.stuartsierra.component.system_map = (function com$stuartsierra$component$system_map(var_args){
var args__16344__auto__ = [];
var len__16337__auto___29734 = arguments.length;
var i__16338__auto___29735 = (0);
while(true){
if((i__16338__auto___29735 < len__16337__auto___29734)){
args__16344__auto__.push((arguments[i__16338__auto___29735]));

var G__29736 = (i__16338__auto___29735 + (1));
i__16338__auto___29735 = G__29736;
continue;
} else {
}
break;
}

var argseq__16345__auto__ = ((((0) < args__16344__auto__.length))?(new cljs.core.IndexedSeq(args__16344__auto__.slice((0)),(0))):null);
return com.stuartsierra.component.system_map.cljs$core$IFn$_invoke$arity$variadic(argseq__16345__auto__);
});

com.stuartsierra.component.system_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,keyvals))){
} else {
throw com.stuartsierra.component.platform.argument_error.call(null,"system-map requires an even number of arguments");
}

return com.stuartsierra.component.map__GT_SystemMap.call(null,cljs.core.apply.call(null,cljs.core.array_map,keyvals));
});

com.stuartsierra.component.system_map.cljs$lang$maxFixedArity = (0);

com.stuartsierra.component.system_map.cljs$lang$applyTo = (function (seq29733){
return com.stuartsierra.component.system_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29733));
});
/**
 * True if the error has ex-data indicating it was thrown by something
 *   in the com.stuartsierra.component namespace.
 */
com.stuartsierra.component.ex_component_QMARK_ = (function com$stuartsierra$component$ex_component_QMARK_(error){
var map__29739 = cljs.core.ex_data.call(null,error);
var map__29739__$1 = ((((!((map__29739 == null)))?((((map__29739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29739):map__29739);
var reason = cljs.core.get.call(null,map__29739__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
return ((reason instanceof cljs.core.Keyword)) && (cljs.core._EQ_.call(null,"com.stuartsierra.component",cljs.core.namespace.call(null,reason)));
});
/**
 * If the error has ex-data provided by the com.stuartsierra.component
 *   namespace, returns a new exception instance with the :component
 *   and :system removed from its ex-data. Preserves the other details of
 *   the original error. If the error was not created by this namespace,
 *   returns it unchanged. Use this when you want to catch and rethrow
 *   exceptions without including the full component or system.
 */
com.stuartsierra.component.ex_without_components = (function com$stuartsierra$component$ex_without_components(error){
if(cljs.core.truth_(com.stuartsierra.component.ex_component_QMARK_.call(null,error))){
return com.stuartsierra.component.platform.alter_ex_data.call(null,error,cljs.core.dissoc,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"system","system",-29381724));
} else {
return error;
}
});

//# sourceMappingURL=component.js.map