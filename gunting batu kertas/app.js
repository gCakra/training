const user = prompt('Masukan pilihan (gunting/kertas/batu):').toLowerCase();

let cpu;
const random = Math.random();
if (random <= 0.33) {
    cpu = "gunting";
} else if (random <= 0.66) {
    cpu = "kertas";
} else {
    cpu = "batu";
}

let result;
if (user === cpu) {
    result = "seimbang";
} else if (
    (user === "gunting" && cpu === "kertas") ||
    (user === "kertas" && cpu === "batu") ||
    (user === "batu" && cpu === "gunting")
) {
    result = "user menang";
} else {
    result = "user kalah";
}

alert(`User: ${user}\nCPU: ${cpu}\nHasil: ${result}`);
