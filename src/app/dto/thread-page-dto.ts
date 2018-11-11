import { ThreadDTO } from './thread-dto';

export class ThreadPageDto {
     threadDTOs: Array<ThreadDTO>;
     totalPageCount: number;

     constructor(threadDTOs: Array<ThreadDTO>, totalPageCount: number) {
         this.threadDTOs = threadDTOs;
         this.totalPageCount = totalPageCount;
     }
}
