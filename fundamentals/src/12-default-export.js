// default export is a way to export a single value or object from a module, which can be imported without using curly braces. This is useful for modules that export a single main functionality or object.
export const LAPTOP_MODEL = 'lenovo thinkpad x1 carbon';
export const BUSINESS_LAPTOPS = {
    model: LAPTOP_MODEL,
    price: 1500,
    warranty: '3 years',
    features: ['Lightweight', 'High Performance', 'Long Battery Life']
};
export default function getLaptopDetails() {
    console.log(` laptop model: ${BUSINESS_LAPTOPS}`);
}
