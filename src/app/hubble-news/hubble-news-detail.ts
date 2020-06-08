export class HubbleNewsDetail {

    name: string;
    news_id: string;
    url: string;
    publication: string;
    mission: string;
    abstract: string;
    credits: string;
    thumbnail: string;
    thumbnail_retina: string;
    thumbnail_1x: string;
    thumbnail_2x: string;
    keystone_image_1x: string;
    keystone_image_2x: string;
    release_images: number[];
    release_videos: number[];


    constructor() {
        this.name = null;
        this.news_id = null;
        this.url = null;
        this.publication = null;
        this.mission = null;
        this.abstract = null;
        this.credits = null;
        this.thumbnail = null;
        this.thumbnail_retina = null;
        this.thumbnail_1x = null;
        this.thumbnail_2x = null;
        this.keystone_image_1x = null;
        this.keystone_image_2x = null;
        this.release_images = [];
        this.release_videos = [];
    }

}
