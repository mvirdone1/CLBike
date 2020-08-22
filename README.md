# CLBike
Craigslist bike highlight

##### How it works #####
This javascript is meant to be copied/pasted into a bookmarklet in your browser then run on a craiglsist bike search output. 
You can filter on price and distance on craigslist and then use this to perform the highlighting

There are three highlight classes which get overridden in the following order:

1) Highlight based on brand (Red)
2) Highlight based on key words (Green)
2) Highlight (grey-out) based on 'bad' keywords (Grey)

Since this is a javascript bookmarklet, it runs entirely client side.

##### "Installation" #####
1) In your browser create a new bookmark
2) Name the bookmark whatever you want to call this feature (e.g. "Bike Highlight")
3) Copy and paste the entirety of Bikes.js into the 'URL' portion of the bookmark dialog
4) You now have the script entirely self contained within the 'URL' so that it will run whenever you click the bookmark

##### Customization #####
* You can add key words to any of the 3 classes easily by editing the arrays of strings
* Colors can be chaged by modifying the hex code associated with any of the classes (any HTML valid color string _should_ work)
* DO NOT add comments, it doesn't seem to work well in the context of the bookmarklet
