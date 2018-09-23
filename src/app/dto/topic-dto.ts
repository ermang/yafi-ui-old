export class TopicDto {
    name: String;
    createdBy: String

    constructor(name: String, createdBy: String) {
        this.name = name;
        this.createdBy = createdBy;
    }
}
