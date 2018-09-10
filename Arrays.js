//MUSKETEERS
musketeers = ["Athos", "Porthos", "Aramis"];
for (i = 0; i < musketeers.length; i++){
    console.log(musketeers[i]);
}
musketeers.push ("D'Artagnan");

musketeers.forEach(myElement => {console.log(`${myElement}`); 
});

musketeers.splice(2, 1);

let ofArray;
for (ofArray of musketeers){
    console.log(ofArray);
}

//SUM OF VALUES 
const values = [3, 11, 7, 2, 9, 10];
console.log(
  values.reduce((a, b) => a + b, 0)
);
//ARRAY MAX
console.log(Math.max(...values));

