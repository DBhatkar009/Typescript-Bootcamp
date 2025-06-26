// Classes 

class Course {
//    private title: string;
//    private subtitle: string;
//    private creationDt: Date;
     
     static Total_Course = 0;

    static NEW_TITLE = "Typescript Course";

    constructor(
    private ntitle: string,
    private price: number,
    private subtitle = '',
    private creationDt = new Date(2025,1,14)
) {
        // this.ntitle = ntitle;
        // this.subtitle = subtitle;
        // this.creationDt = creationDt;

        this.validate(this);
        Course.Total_Course++;

    }

       validate(course: Course){
         if(course.price <=0){
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

Course.Total_Course;
// Course.NEW_TITLE = '';
const typescript = new Course(Course.NEW_TITLE, 0);

// typescript.title = "New Title Appear here!";
console.log(typescript.title);
Course.printTitle(typescript);

const Angular = new Course("Angular Bootcamp", 0);
console.log(Angular.title);
console.log(Course.NEW_TITLE);
console.log(Course.Total_Course);
console.log();

