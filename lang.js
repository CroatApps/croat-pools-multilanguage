var langs = ['ca', 'en', 'es'];
var langCode = 'ca';
var langJS = null; 

var translate = function (jsdata)
{	
	$("[tkey]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('tkey')];
	    $(this).html (strTr);
	});
} 
 
const $_GET = {};
const args = location.search.substr(1).split(/&/);
for (let i=0; i<args.length; ++i) {
    const tmp = args[i].split(/=/);
    if (tmp[0] != "") {
        $_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
        var langCode = $_GET['lang'];
    }//::END if
}//::END for
 
if ( $.inArray( langCode, langs ) > -1 )
	$.getJSON('lang/'+langCode+'.json', translate);
else
	$.getJSON('lang/ca.json', translate);



