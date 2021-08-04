import { useState, useEffect } from 'react';
import { getYearData } from "../Services/Api";
import ImageClub from './ImageClub';
import styles from '../styles/Home.module.css'
import { useLoading } from '../Context/LoadingContext';
import Loading from './Loading';

export function Table({year}) {

  const [dataTable, setDataTable] = useState([]);
  const {loading, setLoading } = useLoading();

  useEffect(() => {
    getYearData(year).then(data => {
      setDataTable(data);
      setLoading(false);
    });
  }, [year])

  return (
    <div className={styles.appConteinerTable}>
      <table className={styles.appTable} cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th></th>
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
                <td>
                  <ImageClub name={time.nome} className="time-logo"/>
                  <span>{time.nome}</span>
                </td>
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
      {
          loading ? <Loading /> : null
        }
      
    </div>
  )
}
