export class HubbleImage {
    id: number;
    name: string;
    news_name: string;
    collection: string;

    constructor() {
        this.id = 0;
        this.name = null;
        this.news_name = null;
        this.collection = null;
    }

}


/*

"id": 4671,
"name": "Artist's Illustration of the Early Universe",
"news_name": "a",
"collection": "news"
http://hubblesite.org/api/v3/images


/api/v3/images
/api/v3/images/:collection_name


Parameter	        Type	        Default	    Description
:collection_name	String	        science	    If a collection is specified, it shows the images for that collection.

Collections are sets of images, for example, for Hubble we have collections with the names 'news', 'spacecraft', 'printshop', etc.
Different missions (hubble, james_webb) may have images in different collections.
A possible collection_name is also 'all', which will return all the images for all the collections and missions.
If 'all 'is used for the collection_name, then the mission and collection will be returned for each item.
if collection_name is not 'all', the images' mission will correspond to the site used - hubble's images for hubblesite.org (and media.stsci.edu), and james_webb images for webbtelescope.org.
If not collection is given, the default collection will be used, and if no default exists, all will be used.

page	            Integer or String   1	    The possible values are any integer 1 or larger, or 'all' to return all items.

Any other values will default to '1'.Unless the value passed is 'all', it returns 25 items.


Examples:

/api/v3/images
/api/v3/images/all
/api/v3/images/all?page=2
/api/v3/images/news
/api/v3/images/spacecraft?page=all
/api/v3/images/unknown



Returns:


key	        Description

id	        Internal key to identify the image. It can be used to gather more information using the details API call (below).
name	    Name given to the Image
news_name	Legacy name given to this image in a news release. Usually is 'a', 'b', 'c', ...
collection	Collection name the image belongs to.
mission	    Space Telescope or telescope website, the image belongs to. It is usually 'hubble', 'james_webb', etc.


Example:

[
{
"id": 4671,
"name": "Artist's Illustration of the Early Universe",
"news_name": "a",
"collection": "news"
},
{
"id": 4672,
"name": "Intracluster Light in MACS J0416",
"news_name": "b",
"collection": "news"
}
]









*/
