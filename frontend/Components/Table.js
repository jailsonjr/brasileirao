import { useState, useEffect } from 'react';
import { getYearData } from "../Services/Api";
import styles from '../styles/Home.module.css'

export function Table({year}) {

  const [dataTable, setDataTable] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getYearData(year).then(data => {
      setLoading(true);
      setDataTable(data);
      setLoading(false);
    });
  }, [year])

  if(loading) {
    return <div>carregando</div>;
  }

  return (
      <table className={styles.appTable} cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>p</th>
            <th>v</th>
            <th>e</th>
            <th>d</th>
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
