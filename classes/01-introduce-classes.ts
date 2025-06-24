// Classes 

class Course {
    title: string;
    subtitle: string;
    creationDt: Date;
     
    constructor(title: string,
    subtitle: string,
    creationDt: Date) {
        this.title = title;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
    }

    age(){
       const ageTime = new Date().getTime() - this.creationDt.getTime();

       return Math.round(ageTime / 1000 / 60 / 24);
    }
}

const course = new Course(
    "Typescript Bootcamp",
    "Understanding Typescript Fundaments & classes",
    new Date(2025,6,24)
);

console.log(course.age());
