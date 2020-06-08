export class HubbleVideosDetail {

    name: string;
    short_description: string;
    youtube_id: string;
    teachertube_id: string;
    credits: string;
    news_name: string;
    mission: string;
    collection: string;
    image: string;
    image_retina: string;
    html_5_video: any;
    video_files: any;

    constructor() {
        this.name = null;
        this.short_description = null;
        this.youtube_id = null;
        this.teachertube_id = null;
        this.credits = null;
        this.news_name = null;
        this.mission = null;
        this.collection = null;
        this.image = null;
        this.image_retina = null;
        this.html_5_video = {};
        this.video_files = {};
    }
}
