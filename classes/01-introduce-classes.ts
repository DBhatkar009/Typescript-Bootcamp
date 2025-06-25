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

const typescript = new Course("Typescript Bootcamp");

// typescript.title = "New Title Appear here!";
console.log(typescript.title);

const Angular = new Course("Angular Bootcamp");
console.log(Angular.title);
