const cari = document.querySelector('#search');
const id = document.getElementById('id');
const name = document.getElementById('name');
const jenisKelamin1 = document.getElementById('male');
const jenisKelamin2 = document.getElementById('female');
const jenisKelamin =  [jenisKelamin1,jenisKelamin2]
const form = document.querySelector('.form');
const table = document.querySelector('.table');
const fakultas = document.querySelector('#falcuty');
const prodi = document.querySelector('#prodi');

form.addEventListener("click",submitstudent);
function submitstudent(e)
{
    e.preventDefault();
    const barisData = document.createElement('tr');
    const idsiswa = document.createElement('td');
    const namasiswa= document.createElement('td');
    const jeniskelaminsiswa = document.createElement('td');
    const fakultas = document.createElement('td');
    const programdidik = document.createElement('td');
    const tombolhapus = document.createElement('button');

    idsiswa.innerText = id.value;
    namasiswa.innerText = nama.value;
    jeniskelaminsiswa.innerText = jenis;
    fakultas.innerText = fakultas.value;
    programdidik.innerText = prodi.value;

    barisData.appendChild(idsiswa);
    barisData.appendChild(namasiswa);
    barisData.appendChild(jeniskelaminsiswa);
    barisData.appendChild(fakultas);
    barisData.appendChild(programdidik);
    barisData.appendChild(tombolhapus);
    table.appendChild(barisData);
}