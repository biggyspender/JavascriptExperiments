import * as promiseLib from "./Libs/promiseLib"
import $ from "jquery"

export async function main()
{
    await promiseLib.jqDocReady();
    var pre=$("<pre></pre>").appendTo("body");
    for(;;){
        await promiseLib.jqOne($(document),"click");
        pre.text("");
        var results=await promiseLib.getJSON("http://radiotuna.com/api/Playlist/104568");
        pre.text(JSON.stringify(results,null,2))
    }
}

