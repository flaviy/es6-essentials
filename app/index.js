import React from 'react';
import ReactDOM from 'react-dom';
import { students,total} from './students';
import multiply from './students';
import App from './react';
import { Hobbit } from './classes/hobbit';
console.log(students);
console.log(total);
console.log('multiply 2 and 6 equals ' + multiply(2,6));


function run() {

    let b = 2;
    console.log(b);

    {
        let b = 3;
        console.log(b);
    }

    let c = 'hello';
    let d = `${c} world`;
    let arr = [1, 2, 3, 4, 5];
    let data = [...arr];
    let a = [2,4,6];
    let z = [1,2,...a,56];
    console.log(arr);

    console.log(data);
    console.log(d);
    console.log(z);

    const fellowship = ["Frodo", "Gandalf", "Aragorn", "Legolas", "Gimli"];
    let [hobbit, ...others] = fellowship;
    console.log(hobbit, ...others);


    let wizard = {magical : true, power :9}
    let {power, magical} = wizard;
    console.log(magical, power);

    let eye = "eye";

    const fire = () =>
    {
        return `bulls-${eye}`;
    }
    console.log(fire());

    //arrow function

    let materials = [
        'Hydrogen',
        'Helium',
        'Lithium',
        'Beryllium'
    ];

    let materialsLength1 = materials.map(function(material) {
        return material.length;
    }); //8,6,7,9

    let materialsLength2 = materials.map((material) => {
        return material.length;
    }); //8,6,7,9

    let materialsLength3 = materials.map(material => material.length);
    console.log(materialsLength3)

    //map
    let points = [10, 20,30];
    let addOne = (element) =>  {
        return element + 1;
    }
    points = points.map(element => element + 1);
    console.log(points);
    let lengths = [3, 7, 5];
    let multiple = 8;

    const scale = (multiple) => {
        return lengths.map(element => element * multiple);
    };

    //filtering

    let isPassing = (param) => {
        return param >=100;
    }

    let scores = [122,22,23,444];
    scores = scores.filter(isPassing);
    let biggest = scores.filter(element => element > 122);
    console.log(scores);
    let Frodo = new Hobbit('Frodo', 124);
    Frodo.greet();
}

run();
ReactDOM.render(<App />, document.getElementById('root'));
