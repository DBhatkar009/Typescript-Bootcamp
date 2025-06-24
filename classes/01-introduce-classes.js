// Classes 
var Course = /** @class */ (function () {
    function Course(title, subtitle, creationDt) {
        this.title = title;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
    }
    Course.prototype.age = function () {
        var ageTime = new Date().getTime() - this.creationDt.getTime();
        return Math.round(ageTime / 1000 / 60 / 24);
    };
    return Course;
}());
var course = new Course("Typescript Bootcamp", "Understanding Typescript Fundaments & classes", new Date(2025, 6, 24));
console.log(course.age());
