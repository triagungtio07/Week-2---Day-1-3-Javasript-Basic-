let a = "";

for (let i = 1; i < 16; i++) {

   for (let j = 1; j < 16; j++) {
        if (i+j > 16) {
            a += "*"
        }
        else{
            a+= " "
        }
    }
    a += "\n"
}

console.log(a)