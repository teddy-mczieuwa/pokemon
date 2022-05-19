import React,{FC} from 'react';
import {StatsTableProps} from './interface';
import styles from './StatsTable.module.css';

const StatsTable:FC<StatsTableProps> = ({stats, isPending}) => {
    const renderStats = () => stats.map((stat:any, index:number) => (
        <tr key={index}>
            <td>{stat.stat.name}</td>
            <td>{stat.base_stat}</td>
            <td>{stat.effort}</td>
        </tr>
    ));
    return (
        <div className={styles.StatsTable}>
            <h2>Stats</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Base Stat</th>
                    <th>Effort</th>
                </tr>
                </thead>

                <tbody>
                    {isPending ? <tr><td>loading...</td></tr> : renderStats()}           
                </tbody>
            </table>
        </div>
    )
}

export default StatsTable