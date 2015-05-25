export var timeout = duration=>new Promise(resolve=>setTimeout(resolve, duration));
export var docReady = ()=>new Promise(resolve=>{
    if (document.readyState != 'loading'){
        resolve();
    } else {
        document.addEventListener('DOMContentLoaded', resolve);
    }
});
export var listenOnce = function(event){
    var item=this;
    return new Promise(resolve=>{
    
        var f;
        f=evt=>{
            item.removeEventListener(event,f);
            resolve(evt);
        };
        item.addEventListener(event,f);
    });
}