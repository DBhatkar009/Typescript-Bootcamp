// Classes 
var Course = /** @class */ (function () {
    //    private title: string;
    //    private subtitle: string;
    //    private creationDt: Date;
    function Course(ntitle, subtitle, creationDt) {
        this.ntitle = ntitle;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
        this.ntitle = ntitle;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
    }
    Object.defineProperty(Course.prototype, "title", {
        set: function (newTitle) {
            if (!newTitle) {
                throw new Error("Title can not be Empty");
            }
            this.ntitle = newTitle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "age", {
        get: function () {
            var ageTime = new Date().getTime() - this.creationDt.getTime();
            return Math.round(ageTime / 1000 / 60 / 24);
        },
        enumerable: false,
        configurable: true
    });
    return Course;
}());
var course = new Course("Typescript Bootcamp", "Understanding Typescript Fundaments & classes", new Date(2025, 6, 24));
course.title = "New Title Appear here!";
console.log(course);
