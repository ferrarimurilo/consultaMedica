const prompt = require("prompt-sync")({ sigint: true });

let consultas = [];
let consulta = +0;

while(true){
    console.log(`
    //////////////////////////////////////////
    //       === Menu de Consultas ===      //
    //                                      //
    //     1. Agendar uma nova consulta     //
    //     2. Listar todas as consultas     //
    //     3. Atualiza uma consulta         //
    //     4. Cancela uma consulta          //
    //     0. Sair                          //
    //////////////////////////////////////////     
    `);

    let opcaoMenu = +prompt("Escolha uma opção: ");

switch (opcaoMenu) {
    case 1:
        console.log("=== Agendar nova consulta ===")
        let paciente = prompt("Nome do paciente: ");
        let medico = prompt("Nome do medico: ");
        let data = prompt("Data da consulta: ");
        let hora = prompt("Hora da consulta: ");
        consultas.push({paciente,medico,data,hora});
        console.log("Consulta agendada com sucesso!");
        break;

    case 2:
        console.log("=== Listar todas as consultas ===")
        consultas.forEach((consultas, index) => {
            console.log("Consulta "+(index+1)+" - "+"Paciente: "+consultas.paciente+" / "+"Médico: "+consultas.medico+" / "+"Data: "+consultas.data+" / "+"Hora: "+consultas.hora);
        });
        break;

    case 3:
        console.log("=== Atualizar uma consulta ===")
        consultas.forEach((consultas, index) => {
            console.log("Consulta "+(index+1)+" - "+"Paciente: "+consultas.paciente+" / "+"Médico: "+consultas.medico+" / "+"Data: "+consultas.data+" / "+"Hora: "+consultas.hora);
        });
        consulta = +prompt("Escolha a consulta que deseja atualizar: ");

        let novoPaciente = prompt("Nome do paciente: ");
        let novoMedico = prompt("Nome do medico: ");
        let novaData = prompt("Data da consulta: ");
        let novaHora = prompt("Hora da consulta: ");
        consultas[consulta].paciente = novoPaciente;
        consultas[consulta].medico = novoMedico;
        consultas[consulta].data = novaData;
        consultas[consulta].data = novaHora;

        break;

    case 4:
        console.log("=== Cancelar uma consulta ===")
        consultas.forEach((consultas, index) => {
            console.log("Consulta "+(index+1)+" - "+"Paciente: "+consultas.paciente+" / "+"Médico: "+consultas.medico+" / "+"Data: "+consultas.data+" / "+"Hora: "+consultas.hora);
        });
        consulta = +prompt("Escolha a consulta que deseja cancelar: ");
        consultas.splice(consulta-1,1);
        break;

    case 0:
        break;

    default:
        console.log("Escolha uma opção válida");
        break;
}

}

