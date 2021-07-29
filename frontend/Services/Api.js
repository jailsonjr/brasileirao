import axios from 'axios';

const API_URL = process.env.API_URL;

export const getYearData = async (year) => {
    let URL = API_URL + `${year}`;
    console.log("URL:" + API_URL);
    let http = await axios.get(URL);
    let response = await http.data;
    console.log(http.statusText);
    let lengthResponse = response.length;
    let tableData = getTableData(response[lengthResponse - 1]);
    let sortedTable = sortTable(tableData);
    return sortedTable;
}

const getTableData = (response) => {

    let tableData = [];
    response.partidas.map(partida => {
        let visitante = partida.pontuacao_geral_visitante;
        let mandante = partida.pontuacao_geral_mandante;
        tableData.push({
            nome: partida.visitante,
            vitorias: visitante.total_vitorias,
            empates: visitante.total_empates,
            derrotas: visitante.total_derrotas,
            pontos: visitante.total_pontos,
            gols_sofridos: visitante.total_gols_sofridos,
            gols_marcados: visitante.total_gols_marcados
        },{
            nome: partida.mandante,
            vitorias: mandante.total_vitorias,
            empates: mandante.total_empates,
            derrotas: mandante.total_derrotas,
            pontos: mandante.total_pontos,
            gols_sofridos: mandante.total_gols_sofridos,
            gols_marcados: mandante.total_gols_marcados
        })
    })

    return tableData;
}

const sortTable = (response) => {
    return response.sort((a,b) => {
        if(b.pontos == a.pontos){
            if(b.vitorias == a.vitorias) {
                return b.gols_marcados - a.gols_marcados;
            }
            return b.vitorias - a.vitorias;    
        }
        return b.pontos - a.pontos;
    });
}



