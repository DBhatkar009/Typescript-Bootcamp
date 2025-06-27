export class CourseService {

   private static INSTANCE: CourseService;

   private constructor(){
        console.log(`the course service was initialized`);
        
    }
   static instance() {
         if(CourseService.INSTANCE){
           CourseService.INSTANCE = new CourseService();
         }
         return CourseService.INSTANCE;
    }

}