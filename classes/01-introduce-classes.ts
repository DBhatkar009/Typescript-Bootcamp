import { HashId, HashTitle } from "./02-interfaces";
import { CourseService } from "./03-singleton";

// Classes 
abstract class Course implements HashTitle {
//    private title: string;
//    private subtitle: string;
//    private creationDt: Date;
     
     static Total_Course = 0;

    static NEW_TITLE = "Typescript Course";

   protected constructor(
    public id: string,
    protected ntitle: string,
    protected price: number,
    protected subtitle = '',
    protected creationDt = new Date(2025,1,14)
) {
        // this.ntitle = ntitle;
        // this.subtitle = subtitle;
        // this.creationDt = creationDt;
       const service = CourseService.instance();
        this.validate();
        Course.Total_Course++;

    }

       printId(){
        console.log(`this course id is ${this.id}`);
        
       }

       protected validate(){
        console.log("Called Course Validate()");
         if(this.price <=0){
            throw new Error("Price must be greater then Zero!!");
            
         }
    }
     
    static printTitle(course: Course){ 
        console.log(`Our New Course Title printed: ${course.title}`);
    }

    get title() {
        return this.ntitle;
    }

    set title(newTitle: string){
        if(!newTitle){
            throw new Error("Title can not be Empty");
              }
              this.ntitle = newTitle;
    }
   

    get age(){
       const ageTime = new Date().getTime() - this.creationDt.getTime();

       return Math.round(ageTime / 1000 / 60 / 24);
    }
}

class FreeCourse extends Course {
    constructor(
     id: string,
     title: string,
     subtitle = '',
     creationDt = new Date(2025,1,14)
    ){
       super(id, title, 0, subtitle, creationDt);
    }

   protected validate() {
        console.log("called FreeCourse Validate()");
    } 
}

// Course.Total_Course;
// Course.NEW_TITLE = '';
// const typescript = new Course(Course.NEW_TITLE, 0);

// typescript.title = "New Title Appear here!";
// console.log(typescript);
// Course.printTitle(typescript);
CourseService.instance();
const angular = new FreeCourse("1","Angular Bootcamp");
console.log(angular);
console.log(angular.id);
console.log(Course.NEW_TITLE);
console.log(Course.Total_Course);


