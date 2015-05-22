var timeout=require("./timeout");
var $=require("jquery");
async function test()
{
    for(var i=0;;i++)
    {
        $("body").text(i);
        await timeout(1000);
    }
}

module.exports = test;