export class CreateThreadDto {
    content: String;
    topicName: String;

    constructor(content: String, topicName: String) {
        this.content = content;
        this.topicName = topicName;
    }
}
