const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Masukkan bilangan genap: ', (x) => {
    x = parseInt(x);
    if (x < 0) {
      console.log('Tidak bisa input bilangan negatif');
    } else if (x % 2 !== 0) {
      console.log('Tidak bisa input bilangan ganjil');
    } else {
      console.log(`Akar pangkat 2 dari ${x} adalah ${Math.sqrt(x)}`);
    }
    readline.close();
  });  