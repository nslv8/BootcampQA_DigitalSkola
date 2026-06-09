const { kalkulator } = require("./rumus.js");
const readline = require("readline");

const inputUser = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Hii, Selamat datang di Kalkulator Sederhana >.< \n");
// Input angka pertama
inputUser.question("Masukkan angka pertama: ", (angka1) => {
  // Input angka kedua
  inputUser.question("Masukkan angka kedua: ", (angka2) => {
    console.log("-------------------------------");
    // Pilih operator
    console.log("Pilih operator:");
    console.log("a) +");
    console.log("b) -");
    console.log("c) *");
    console.log("d) /");
    inputUser.question("Pilih opsi (a, b, c, d): ", (pilihan) => {
      let operator;
      switch (pilihan.toLowerCase()) {
        case "a":
          operator = "+";
          break;
        case "b":
          operator = "-";
          break;
        case "c":
          operator = "*";
          break;
        case "d":
          operator = "/";
          break;
        default:
          console.log("Pilihan tidak valid");
          inputUser.close();
          return;
      }

      const hasil = kalkulator(
        parseFloat(angka1),
        parseFloat(angka2),
        operator,
      );

      console.log("------------------------------");
      console.log(
        `Hasil dari ${angka1} ${operator} ${angka2} adalah: ${hasil}`,
      );
      console.log("------------------------------");
      inputUser.close();
    });
  });
});
