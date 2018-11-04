import { ThreadDTO } from './thread-dto';

export class ThreadPageDto {
     threadDTOs: Array<ThreadDTO>;
     totalPageCount: Number;

     constructor(threadDTOs: Array<ThreadDTO>, totalPageCount: Number) {
         this.threadDTOs = threadDTOs;
         this.totalPageCount = totalPageCount;
     }
}
