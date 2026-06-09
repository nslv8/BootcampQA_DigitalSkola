let nctDream = {
  name: "NCT DREAM",
  debut: 2016,
//   members: ["Jaemin": biodata {
//     nama: "Jaemin",
//     umur: 22,
//     posisi: "Main Dancer, Vocalist, Rapper",
//   }, "Renjun": biodata {
//     nama: "Renjun",
//     umur: 22,
//     posisi: "Main Vocalist",
//   }, "Jeno": biodata {
//     nama: "Jeno",
//     umur: 22,   
//     posisi: "Lead Dancer, Vocalist, Rapper", 
//   }, "Haechan": biodata {
//     nama: "Haechan",
//     umur: 22,   
//     posisi: "Main Vocalist, Lead Dancer",
//     }, "Chenle": biodata {
//     nama: "Chenle",
//     umur: 22,   
//     posisi: "Main Vocalist",
//     }, "Mark": biodata {
//     nama: "Mark",
//     umur: 22,   
//     posisi: "Main Rapper, Lead Dancer, Vocalist",
//     }, "Jisung": biodata {
//     nama: "Jisung",
//     umur: 22,   
//     posisi: "Main Dancer, Vocalist, Rapper",
//     }, ],
    members: ["Jisung", "Mark", "Haechan", "Jeno", "Chenle", "Renjun", "Jaemin"], //array of string
};

console.log("Informasi IDOL:");
console.log(`Nama Grup: ${nctDream.name}`); 
console.log(`Debut: ${nctDream.debut}`);
console.log(`Total Anggota : ${nctDream.members.length}`);
console.log("-------------------------------");
// console.log(nctDream.members.push("Jungwoo"));
console.log("Daftar Nama Anggota:");

// perulangan 
for (let i = 0; i < nctDream.members.length; i++) {
  console.log(`Anggota ke-${i + 1}: ${nctDream.members[i]}`);
}
console.log("------------------------------");

//Object
let mobill = {
  merk: "Toyota",
  tipe: "Avanza",
  tahun: 2020,
  warna: "Hitam",
};

console.log("Informasi Mobil:");
console.log(`Merk: ${mobill.merk}`);
console.log(`Tipe: ${mobill.tipe}`);
console.log(`Tahun: ${mobill.tahun}`);
console.log(`Warna: ${mobill.warna}`);
console.log(mobill);