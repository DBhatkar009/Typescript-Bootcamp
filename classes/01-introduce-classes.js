// Classes 
var Course = /** @class */ (function () {
    function Course(ntitle, price, subtitle, creationDt) {
        // this.ntitle = ntitle;
        // this.subtitle = subtitle;
        // this.creationDt = creationDt;
        if (subtitle === void 0) { subtitle = ''; }
        if (creationDt === void 0) { creationDt = new Date(2025, 1, 14); }
        this.ntitle = ntitle;
        this.price = price;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
        this.validate(this);
        Course.Total_Course++;
    }
    Course.prototype.validate = function (course) {
        if (course.price <= 0) {
            throw new Error("Price must be greater then Zero!!");
        }
    };
    Course.printTitle = function (course) {
        console.log("Our New Course Title printed: ".concat(course.title));
    };
    Object.defineProperty(Course.prototype, "title", {
        get: function () {
            return this.ntitle;
        },
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
    //    private title: string;
    //    private subtitle: string;
    //    private creationDt: Date;
    Course.Total_Course = 0;
    Course.NEW_TITLE = "Typescript Course";
    return Course;
}());
Course.Total_Course;
// Course.NEW_TITLE = '';
var typescript = new Course(Course.NEW_TITLE, 0);
// typescript.title = "New Title Appear here!";
console.log(typescript.title);
Course.printTitle(typescript);
var Angular = new Course("Angular Bootcamp", 0);
console.log(Angular.title);
console.log(Course.NEW_TITLE);
console.log(Course.Total_Course);
console.log();
