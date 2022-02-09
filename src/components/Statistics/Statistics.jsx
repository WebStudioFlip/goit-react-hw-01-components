import style from "./statistics.module.scss";
import PropTypes from "prop-types";

const Statistics  = ({title, stats}) => {
    const statsList = stats.map(el => <li key={el.id} className={style.item}>
    <span className={style.label}>{el.label}</span>
    <span className={style.percentage}>{el.percentage}%</span>
  </li>)

return (
    <section className={style.statistics}>
         {title && <h2 className={style.title}>{title}</h2>}  

  <ul className={style.statList}>
    {statsList}
  </ul>
</section>
)
}

Statistics.defaultProps = {
    stats: []
}

Statistics.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
}

export default Statistics;