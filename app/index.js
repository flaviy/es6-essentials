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
    console.log(data);
    let a = [2,4,6];
    let z = [1,2,...a,56];
    console.log(d);
    console.log(z);

    const fellowship = ["Frodo", "Gandalf", "Aragorn", "Legolas", "Gimli"];
    let [hobbit, ...others] = fellowship;
    console.log(hobbit, ...others);


    let wizard = {magical : true, power :9}
    let {power, magical} = wizard;
    console.log(magical, power);
}

run();
