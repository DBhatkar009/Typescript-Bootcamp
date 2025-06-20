"use strict";
// default export is a way to export a single value or object from a module, which can be imported without using curly braces. This is useful for modules that export a single main functionality or object.
Object.defineProperty(exports, "__esModule", { value: true });
exports.BUSINESS_LAPTOPS = exports.LAPTOP_MODEL = void 0;
exports.default = getLaptopDetails;
exports.LAPTOP_MODEL = 'lenovo thinkpad x1 carbon';
exports.BUSINESS_LAPTOPS = {
    model: exports.LAPTOP_MODEL,
    price: 1500,
    warranty: '3 years',
    features: ['Lightweight', 'High Performance', 'Long Battery Life']
};
function getLaptopDetails() {
    console.log(" laptop model: ".concat(exports.BUSINESS_LAPTOPS));
}
