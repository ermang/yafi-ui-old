export class TopicDto {
    name: string;
    createdBy: string

    constructor(name: string, createdBy: string) {
        this.name = name;
        this.createdBy = createdBy;
    }
}
