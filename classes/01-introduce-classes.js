// Classes 
var Course = /** @class */ (function () {
    //    private title: string;
    //    private subtitle: string;
    //    private creationDt: Date;
    function Course(ntitle, subtitle, creationDt) {
        if (subtitle === void 0) { subtitle = ''; }
        if (creationDt === void 0) { creationDt = new Date(2025, 1, 14); }
        this.ntitle = ntitle;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
        this.ntitle = ntitle;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
    }
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
    return Course;
}());
var typescript = new Course("Typescript Bootcamp");
// typescript.title = "New Title Appear here!";
console.log(typescript.title);
var Angular = new Course("Angular Bootcamp");
console.log(Angular.title);
