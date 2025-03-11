import styles from './summaryCards.module.css';

const SummaryCards = ({ cards }) => {
  return (
    <div className={styles.summaryCards}>

      {
        cards.map((card, index) => (
          <div className={styles.card}>
            <h3>{card.title}</h3>
            <div className={styles.cardValue}>{card.value}</div>
            <div className={styles + `.cardChange` ${card.isPositive ? styles.positive}}>{card.change}</div>
          </div>
        ))
      }



      <div className={styles.card}>
        <h3>Arrecadação Mensal</h3>
        <div className={styles.cardValue}>R$ 345.780,00</div>
        <div className={styles.cardChange + " " + styles.positive}>+8% em relação ao mês passado</div>
      </div>

      <div className={styles.card}>
        <h3>Arrecadação Semestral</h3>
        <div className={styles.cardValue}>R$ 1.987.650,00</div>
        <div className={styles.cardChange + " " + styles.positive}>
          +12% em relação ao semestre anterior
        </div>
      </div>

      <div className={styles.card}>
        <h3>Ocupação Média</h3>
        <div className={styles.cardValue}>78%</div>
        <div className={styles.cardChange + " " + styles.negative}>
          -3% em relação à semana anterior
        </div>
      </div>
    </div>
  );
}

export default SummaryCards;