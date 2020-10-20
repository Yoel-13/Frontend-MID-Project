const cari = document.querySelector('#searchbox');
const id = document.getElementById('id');
const name = document.getElementById('name');
const jenisKelamin1 = document.getElementById('male');
const jenisKelamin2 = document.getElementById('female');
const jenisKelamin =  [jenisKelamin1,jenisKelamin2]
const form = document.querySelector('.form');
const table = document.querySelector('.table');
const fakultas = document.querySelector('#fakultas');
const prodi = document.querySelector('#prodi');
var tbody = document.querySelector('tbody');

form.addEventListener("submit",submitstudent);
function submitstudent(e)
{
    e.preventDefault();
    const barisData = document.createElement('tr');
    const idsiswa = document.createElement('td');
    const namasiswa= document.createElement('td');
    const jeniskelaminsiswa = document.createElement('td');
    const faculty = document.createElement('td');
    const programdidik = document.createElement('td');
    const tombolhapus = document.createElement('button');
    
    tombolhapus.className='btn btn-danger';
    tombolhapus.textContent = "delete";

    const jenis = jenisKelamin.map(function(gender)
    {
        if (gender.checked) 
        {
          return gender.value;
        }
    })

    idsiswa.innerText = id.value;
    namasiswa.innerText = name.value;
    jeniskelaminsiswa.innerText = jenis;
    faculty.innerText = fakultas.value;
    programdidik.innerText = prodi.value;

    barisData.appendChild(idsiswa);
    barisData.appendChild(namasiswa);
    barisData.appendChild(jeniskelaminsiswa);
    barisData.appendChild(faculty);
    barisData.appendChild(programdidik);
    barisData.appendChild(tombolhapus);
    tbody.appendChild(barisData);

    tombolhapus.addEventListener('click',function()
    {
        const row = this.parentNode.parentNode;
        row.parentNode.removeChild(row);
    })
}
cari.addEventListener('keyup',function()
{
   
    var tr = tbody.querySelectorAll('tr');
    var val = this.value.toUpperCase();
    console.log(tr);
    tr.forEach((itm,idx,arr)=>{
      let dataName = itm.getElementsByTagName('td')[1];
      if (dataName.textContent.toUpperCase().includes(val)>0) {
        arr[idx].style.display = ""
      } else{
        arr[idx].style.display = "none"
      }
    })
});
