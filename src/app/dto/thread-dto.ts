export class ThreadDTO {  

    id: Number;
    content: String;
    topicName: String;
    username: String;
    likeCount: Number;
    createdOn: String;


    constructor(id: Number, content: String, topicName: String, username: String, likeCount: Number, createdOn: String) {
        this.id = id;
        this.content = content;
        this.topicName = topicName;
        this.username = username;
        this.likeCount = likeCount;
        this.createdOn = createdOn;
    }
}
