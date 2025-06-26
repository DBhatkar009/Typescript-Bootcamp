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

        this.validate();
        Course.Total_Course++;

    }

       validate(){
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
     title: string,
     subtitle = '',
     creationDt = new Date(2025,1,14)
    ){
       super(title, 0, subtitle, creationDt);
    }

    validate() {
        console.log("called FreeCourse Validate()");
    
    }
}

// Course.Total_Course;
// Course.NEW_TITLE = '';
const typescript = new Course(Course.NEW_TITLE, 0);

// typescript.title = "New Title Appear here!";
console.log(typescript);
// Course.printTitle(typescript);

const angular = new FreeCourse("Angular Bootcamp");
console.log(angular);
console.log(Course.NEW_TITLE);
console.log(Course.Total_Course);


