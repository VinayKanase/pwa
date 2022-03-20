if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Register");
    console.log(registration);
    }).catch(err=>console.log(err));
} else{
    console.log("No support for serviceWorker");
}