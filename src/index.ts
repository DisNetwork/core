/*
 * The read message interface
 */
export interface ReadMessage {
    // the message contents (up to 2000 characters)
    content: string;
    // true if this is a TTS message.
    tts: boolean;
    // embedded *rich* content.
    embed: Embed[];
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
    color?: string; // color code of the embed
    footer?: FooterEmbed; // footer information
    image?: ImageEmbed;
}

export interface FooterEmbed {
    text: string; // footer text
    icon_url?: string; // url of footer icon (only supports http(s) and attachments)
    proxy_icon_url?: string; // a proxied url of footer icon
}

export interface ImageEmbed {
    url?: string; // source url of image (only supports http(s) and attachments)
    proxy_url?: string; // a proxied url of the image
    height?: number; // height of image
    width?: number; // width of image
}
