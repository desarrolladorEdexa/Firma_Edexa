
function createImg(){
    const nombre = document.getElementById('inputName').value;
    const cargo = document.getElementById('inputCargo').value;
    const correo = document.getElementById('inputCorreo').value;
    const extension = document.getElementById('inputExtension').value;
    const celular = document.getElementById('inputCelular').value;
    const select = document.getElementById("dir");
    const valorSeleccionado = select.value;

    if(nombre==''||cargo==''||correo==''||celular==''||valorSeleccionado=='select'){
        // window.error('Faltan campos por llenar')
        alert("Faltan campos por llenar");
        console.log(valorSeleccionado)
        
    }else{
        const nombreImg = document.getElementById('nombreImg').querySelector('strong');
        const cargoImg = document.getElementById('cargoImg').querySelector('strong');
        const correoImg = document.getElementById('correoImg');
        const extImg = document.getElementById('extImg');
        const celImg = document.getElementById('celImg');
        const divExt = document.getElementById('ext');
        const divCel = document.getElementById('idCel');
        const dir1 = document.getElementById('dir1');
        const dir2 = document.getElementById('dir2');

        if(valorSeleccionado=='med'){
            dir1.textContent = 'Cra 57 # 74 - 49 Itagüi'
            dir2.style.display= 'none'
        }
        nombreImg.textContent  = nombre;
        cargoImg.textContent  = cargo;
        correoImg.textContent  = correo;
        if(!extension){
            divExt.style.display = 'none';
        }
        extImg.textContent  = extension;
        if(!celular){
            divCel.style.display = 'none';
        }
        celImg.textContent  = celular;

        const contenido = document.getElementById('generarFirma');

         //Usar el método sin promesas (usando callback en lugar de .then())
         html2canvas(contenido, {
             onrendered: function (canvas) {
                 const imgData = canvas.toDataURL('image/png');
                 const link = document.createElement('a');
                 link.href = imgData;
                 link.download = 'firmaEdexa.png';
                 link.click();
             }
         });
    }
    
}

