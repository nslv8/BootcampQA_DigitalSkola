function kalkulator(a, b, operator) {
	switch (operator) {
		case "+":
			const tambah = a + b;
			return tambah;
			case "-":
      const kurang = a - b;
      return kurang;
	  case "*":
		  const kali = a * b;
      return kali;
    case "/":
      if (b === 0) return "Angka tidak bisa dibagi dengan nol";
      const bagi = a / b;
      return bagi;
    default:
      return "Operator tidak valid";
	}
}

module.exports = { kalkulator };