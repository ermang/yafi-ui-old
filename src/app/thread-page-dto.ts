export class ThreadPageDto {
     threadPageDtos: Array<ThreadPageDto>;
     totalPageCount: Number;

     constructor(threadPageDtos: Array<ThreadPageDto>, totalPageCount: Number) {
         this.threadPageDtos = threadPageDtos;
         this.totalPageCount = totalPageCount;
     }
}
