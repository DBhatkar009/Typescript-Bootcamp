// Classes 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        // this.validate();
        Course.Total_Course++;
    }
    Course.prototype.validate = function () {
        console.log("Called Course Validate()");
        if (this.price <= 0) {
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
var FreeCourse = /** @class */ (function (_super) {
    __extends(FreeCourse, _super);
    function FreeCourse(title, subtitle, creationDt) {
        if (subtitle === void 0) { subtitle = ''; }
        if (creationDt === void 0) { creationDt = new Date(2025, 1, 14); }
        return _super.call(this, title, 0, subtitle, creationDt) || this;
    }
    FreeCourse.prototype.validate = function () {
        console.log("called FreeCourse Validate()");
    };
    return FreeCourse;
}(Course));
Course.Total_Course;
// Course.NEW_TITLE = '';
var typescript = new Course(Course.NEW_TITLE, 0);
// typescript.title = "New Title Appear here!";
console.log(typescript);
Course.printTitle(typescript);
var angular = new FreeCourse("Angular Bootcamp");
console.log(angular);
console.log(Course.NEW_TITLE);
console.log(Course.Total_Course);
