// Classes 

class Course {
//    private title: string;
//    private subtitle: string;
//    private creationDt: Date;
     
    constructor(
    private ntitle: string,
    private subtitle = '',
    private creationDt = new Date(2025,1,14)
) {
        this.ntitle = ntitle;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
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

const course = new Course("Typescript Bootcamp");

course.title = "New Title Appear here!";
console.log(course);
