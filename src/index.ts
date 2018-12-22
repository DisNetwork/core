/*
 * The SnowFlake interface
 */
export interface SnowFlake {
    // the number of snowflake
    id: number;
}

/*
 * The read message interface
 */
export interface ReadMessage {
    // the message contents (up to 2000 characters)
    content: string;
    // a nonce that can be used for optimistic message sending
    nonce: SnowFlake;
    // true if this is a TTS message.
    tts: boolean;
    // the contents of the file being sent
    file: File;
    // embedded *rich* content.
    embed: Embed;
    // JSON encoded body of any additional request fields.
    payload_json: string;
}

/*
 * The rich embed interface
 */
export interface Embed {
    title?: string; // title of embed
    type?: string; // type of embed (always "rich" for webhook embeds)
    description?: string; // description of embed
    url?: string; // url of embed
    timestamp?: Date; // Please put the ISO8601 timestamp
    color?: string; // color code of the embed
    footer?: EmbedFooter; // footer information
    image?: EmbedImage; // image information
    thumbnail?: EmbedThumbnail; // thumbnail information
    video?: EmbedVideo; // video information
    provider?: EmbedProvider; // provider information
    author?: EmbedAuthor; // author information
    fields?: EmbeField[]; // fields information
}

export interface EmbedThumbnail {
    url?: string; // source url of thumbnail (only supports http(s) and attachments)
    proxy_url?: string; // a proxied url of the thumbnail
    height?: number; // height of thumbnail
    width?: number; // width of thumbnail
}

export interface EmbedImage {
    url?: string; // source url of image (only supports http(s) and attachments)
    proxy_url?: string; // a proxied url of the image
    height?: number; // height of image
    width?: number; // width of image
}

export interface EmbedVideo {
    url?: string; // source url video
    height?: number; // height of video
    width?: number; // width of video
}

export interface EmbedProvider {
    name?: string; // name of provider
    url?: string; // url of provider
}

export interface EmbedAuthor {
    name?: string; // name of author
    url?: string; // url of author
    icon_url?: string; // url of author icon (only supports http(s) and attachments)
    proxy_icon_url?: string; // a proxied url of author icon
}

export interface EmbedFooter {
    text: string; // footer text
    icon_url?: string; // url of footer icon (only supports http(s) and attachments)
    proxy_icon_url?: string; // a proxied url of footer icon
}

export interface EmbeField {
    name: string; // name of the field
    value: string; // value of the field
    inline?: boolean; // whether or not this field should display inline
}
