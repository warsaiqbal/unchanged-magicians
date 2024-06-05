let magicians: string[] = ["Magician 1", "Magician 2", "Magician 3"]

function show_magicians(magicians: string[]){
    magicians.forEach(magician => {
        console.log(magician);
    });
}   

function make_great(magicians: string[]): string[] {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names