import style from "./transactionHistory.module.scss";
import PropTypes from "prop-types";

const TransactionHistory  = ({items}) => {     
const element = items.map(({id, type, amount, currency}) =><tr className={style.row} key={id} >
    <td className={style.td}>{type}</td>
    <td className={style.td}>{amount}</td>
    <td className={style.td}>{currency}</td>
  </tr>)

return (
    <table className={style.transactionHistory}>
  <thead className={style.thead}>
    <tr className={style.tr}>
      <th className={style.th}>Type</th>
      <th className={style.th}>Amount</th>
      <th className={style.th}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {element}
  </tbody>
</table>
)
}

TransactionHistory.defaultProps = {
    items: []
}

TransactionHistory.propTypes = {    
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}

export default TransactionHistory;