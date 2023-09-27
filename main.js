const pacientes = [
    {
        curp:"AUAM930906MDFGRR02",
        nombre: "Sofia",
        apellido:"Aguilar",
        direccion:"Canal del Norte 111 B301 Col. Emilio Carranza",
        tel:5545604252,
        consultas:[
            {
                fecha: "23/09/2023",
                hora:"10:00",
                anotaciones:"jdhgosiag dsfiosfjsoi dsioisdjoi djifsipfj",
                altura:1.73,
                peso:67,
                imcCalculado:23
            },
            {
                fecha: "14/08/2023 12:00hs",
                anotaciones:"jdhgosiag dsfiosfjsoi dsioisdjoi djifsipfj",
                peso:66,
                altura:1.73,
                imcCalculado:22
            }
        ]

    }
]

const pedirDatos = () =>{
    let nuevoPaciente = confirm("¿Es usted un nuevo paciente?")

    if(nuevoPaciente){
        const curp = prompt("Ingrese su CURP")
        const nombre = prompt("Ingrese su nombre")
        const apellido = prompt("Ingrese su apellido")
        const direccion = prompt("Ingrese su direccion")
        const tel = prompt("Ingrese su teléfono")
        
        const paciente = {
            curp,
            nombre,
            apellido,
            direccion,
            tel,
            consultas:[]
        }
        pacientes.push(paciente)
        alert("Paciente agregado a la base de datos")
    }else{
        alert("Paciente ya registrado")
    }
}
const calcularImc = () =>{
    let iniciarCalculo = confirm("¿Quiere conocer su IMC?")

    if(iniciarCalculo){
        const curp = prompt("Ingresa su CURP")
        const peso = parseFloat(prompt("Ingrese el peso")) 
        const altura = parseFloat( prompt("Ingrese la altura"))

        if (isNaN(peso) || isNaN(altura)) {
            alert("Por favor, ingrese valores numéricos válidos para peso y altura.")
            return;
        }

        const imcCalculado = peso / (altura * altura)
        alert ("El IMC es " + imcCalculado.toFixed(2))
    
        if (imcCalculado < 18.5) {
            alert ("IMC Abajo de lo recomendado");
        } else if (imcCalculado >= 18.5 && imcCalculado < 25 ) {   
            alert ("IMC está dentro del intervalo normal");
        } else if (imcCalculado >= 25 && imcCalculado < 30) {    
            alert ("IMC considerado como sobrepeso");
        } else { 
            alert ("IMC considerado como obesidad");
        }
        const anotaciones = prompt("Ingrese su anotación")
        const fecha = new Date().toLocaleString()
        const consulta = {
            fecha,
            peso,
            altura,
            anotaciones,
            imcCalculado
        }
        const paciente = pacientes.find(paciente => paciente.curp === curp)
        if (paciente) {
            paciente.consultas.push(consulta)
            alert("Gracias por elegirnos")
            console.log(pacientes)
        } else {
            alert("Paciente no encontrado")
        }
        
    }
}

let iniciarConsulta = confirm("¿Quiere iniciar una consulta?")
while(iniciarConsulta){
    pedirDatos()
    calcularImc()
    iniciarConsulta = confirm("¿Quiere iniciar una consulta?")
}