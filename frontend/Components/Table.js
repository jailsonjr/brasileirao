import { useState, useEffect } from 'react';
import { getYearData } from "../Services/Api";
import styles from '../styles/Home.module.css'

export function Table({year}) {

  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    getYearData(year).then(data => setDataTable(data));
  }, [year])


  return (
      <table className={styles.appTable}>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>pontos</th>
            <th>vitorias</th>
            <th>empates</th>
            <th>derrotas</th>
            <th>gp</th>
            <th>gc</th>
            <th>s</th>
          </tr>
        </thead>
        <tbody>
          {
            dataTable.map((time,index) => {
              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{time.nome}</td>
                <td>{time.pontos}</td>
                <td>{time.vitorias}</td>
                <td>{time.empates}</td>
                <td>{time.derrotas}</td>
                <td>{time.gols_marcados}</td>
                <td>{time.gols_sofridos}</td>                
                <td>{time.gols_marcados - time.gols_sofridos}</td>
              </tr>
            })
          }

        </tbody>
      </table>
  )
}
