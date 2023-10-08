function pilihJalan() {
   let pilihanCinta = document.getElementById('cinta').value;
   let hasil = '';
   if (pilihanCinta === 'ya') {
      hasil = 'Anda memilih untuk pacaran. Semoga berbahagia!';
   } else {
      hasil = 'Anda memilih untuk mencari yang lain. Semoga Anda menemukan cinta sejati!';
   }

   document.getElementById('hasilJalan').innerHTML = hasil;
}
function pilihJalanHidup() {
   let pilihanCintaHidup = document.getElementById('cintaHidup').value;
   let hasilJalan = '';

   if (pilihanCintaHidup === 'ya') {
      hasilJalan = 'Anda memilih untuk pacaran. Semoga berbahagia!';
   } else if (pilihanCintaHidup === 'sudahPunya') {
      hasilJalan = 'Anda harus cari yang lain tapi kalau berhasil tidak apa-apa :)';
   } else {
      hasilJalan = 'Anda memilih untuk mencari yang lain. Semoga Anda menemukan cinta sejati!';
   }

   document.getElementById('hasilJalanHidup').innerHTML = hasilJalan;
}

function tebak() {
   let jawab = document.getElementById('angkaTebakan').value;
   let hadiah = '';

   switch (jawab) {
      case '1':
         hadiah = 'Tisu';
         break;
      case '3':
         hadiah = '1 Kotak Kopi';
         break;
      case '4':
         hadiah = 'Sticker';
         break;
      case '5':
         hadiah = 'Minyak Goreng';
         break;
      case '9':
         hadiah = 'Uang Rp 50.000';
         break;
      default:
         document.getElementById('hasilTebakan').innerHTML = '<h2>Kamu gagal mendapat hadiah Coba Lagi</h2>';
   }

   if (hadiah) {
      document.getElementById('hasilTebakan').innerHTML = '<h2>Selamat kamu mendapatkan ' + hadiah + '</h2>';
   }
}

function checkBarang() {
   const material = ['Batu bata', 'Besi beton', 'Papan kayu', 'Paku', 'Atap genteng', 'Semen'];

   let text = '';
   for (let i = 0; i < material.length; i++) {
      text += material[i] + '<br>';
   }

   document.getElementById('hasilMaterial').innerHTML = text;
}

function whileLoop() {
   let text = '';
   let i = 1;
   let jumlah = document.getElementById('valueWhile').value;
   while (i <= jumlah) {
      text += '<br>Angka Ke ' + i;
      i++;
   }
   document.getElementById('hasilWhile').innerHTML = text;
}

function doWhileFunction() {
    let text = '';
    let jumlah = document.getElementById('valueDoWhile').value;
    let i = 1;
    do {
       text += '<br> Saya sedang belajar JavaScript ' + i;
       i++;
    } while (i <= jumlah);
    document.getElementById('hasilDowhile').innerHTML = text;
 }

function myFunction() {
   alert('tombol fungsi ditekan');
}
