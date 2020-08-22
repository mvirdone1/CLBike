javascript:(function() {



var brandNames= ["specialized",
"origin8",
"diamond back",
"norco",
"raleigh",
"fisher",
"intense",
"turner",
"scott",
"yeti",
"kona",
"trek",
"giant",
"cannondale",
"jamis",
"marin",
"rocky mountain",
"eastern",
"redline",
"niner",
"ibis",
"diamondback",
"fezzari",
"gt "];

brandColor = "#ff0000";


var badNames = ["classic",
"vintage",
" 700c",
" 700",
"road",
"gravel",
"bmx",
"broken"];

badColor = "#A0A0A0"; 


var keyWords = ["downhill",
" DH ",
"freeride"];

keyColor = "#0AFF0A"; 


if(window.location.href.includes("ksl"))
{
    var bikes = document.getElementsByClassName("item-info-title-link");
}

if(window.location.href.includes("craigslist"))
{
    var bikes = document.getElementsByClassName("result-title hdrlnk");
}
    
numBikes = bikes.length;

for (var bikeIter=0;  bikeIter < numBikes; bikeIter++) 
{

    searchAndFormat(bikes[bikeIter],brandNames,brandColor);
    searchAndFormat(bikes[bikeIter],keyWords,keyColor);
    searchAndFormat(bikes[bikeIter],badNames,badColor);
}



function searchAndFormat(item, searchList, format)
{
    numSearchItems = searchList.length;
    var itemText = item.textContent.toLowerCase();
    
    for(var listIter=0; listIter<numSearchItems; listIter++)
    {
        currListItem = searchList[listIter];
        
        if(itemText.includes(currListItem))
        {
            item.style.color = format;
            break;
        }
            
        
    }
    
}

})();

