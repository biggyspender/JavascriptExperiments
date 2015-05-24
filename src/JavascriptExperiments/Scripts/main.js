import {jqDocReady,jqOne,getJSON} from "./Libs/promiseLib"
import $ from "jquery"

export async function main()
{
    await jqDocReady();
    var pre=$("<pre></pre>").appendTo("body");
    for(;;){
        await jqOne($(document),"click");
        pre.text("");
        var results=await getJSON("http://radiotuna.com/api/Playlist/104568");
        pre.text(JSON.stringify(results,null,2))
    }
}

