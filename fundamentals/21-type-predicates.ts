// understanding typescript unknown Types

let garden: any;
garden = [];
garden = {};
garden = "";
garden = 58;
garden = Function;
garden = null;
garden = undefined;
garden = false;


let value1: undefined = garden;
let value2: any = garden;
let value3: [] = garden;
let value4: {} = garden;
let value5: string = garden;
let value6: number = garden;
let value7: boolean = garden;
let value8: null = garden;

let home: unknown;
home = "";
home = 56;
home: true;
home = Function;
home = [];
home = null;
home =  {};
home = undefined;


let val1: string = home;
let val2: number = home;
let val3: boolean = home;
let val4: null = home;
let val5: undefined = home;
let val6: [] = home;
let val7: {} = home;
let val8: Function = home;