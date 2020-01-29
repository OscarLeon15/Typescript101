import * as _ from 'lodash';

async function hello(){
    return 'weird'
}

// let lucky = 24;
    // will get an error
// lucky = '23'

// let lucky: any = 24;
    //  this will work
// lucky = '23'


// let lucky;
    //this will work for both number and string;
// lucky = '23'
// lucky = 25


// let lucky: number;
    //this will work for number NOT string;
// lucky = '23'
// lucky = 25


////////////////////////////////////////////////

    //STRONG TYPING

// type style = 'string'; or
// type style = 'bold' | 'italic';

// let font: style;
    //this will be error 😢
// font = 'something';



interface Person {
    first: string;
    last: string;
    [key: string]: any
}

const person: Person = {
    first: 'Jeffe',
    last: 'Dendei'
}

const person2: Person = {
    first: 'Uso',
    last: 'Yei',
    fast: true
}





//STRONG TYPING FUNCTION    

// function pow(x: number, y: number): string {
//     // return Math.pow(x, y)    --> this is a number but should be changed to string
//     return Math.pow(x, y).toString();
// }

// pow(5 , 10);


function pow(x: number, y: number): void {
    //in many functions that dont have a RETURN then the VOID is needed
    // they dont return a value
    Math.pow(x, y).toString();
}

pow(5 , 10);


    // Strong type an Array

// const arr: number[] = []
//     //we force this array to only have number types
// arr.push(1)
// arr.push('23')
// arr.push(false)

    // type MyList = [number, string, boolean]
    // const arr: MyList= []
    //     //this arr is giving us error because we are initializing it as empty
        
    // arr.push(1)
    // arr.push('23')
    // arr.push(false)

type MyList = [number?, string?, boolean?]
const arr: MyList= []
 
arr.push(1)
arr.push('23')
arr.push(false)


    //Generics

class Observable<T>{
    constructor(public value: T){}
}

let x: Observable<number>;
let y: Observable<Person>;
let z: new Observable(32)
//no clue why this one is error