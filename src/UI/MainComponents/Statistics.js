import styles from './Statistics.module.scss'

const Statistics =()=>{
  
return <section className={styles.section}>
<h3 lassName={styles.tittle}>Детальну інформацію можете отримати у нас  в офісі</h3>
<div className={styles.container}>
<iframe className={styles.map}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24674.99730235818!2d28.526586794221092!3d49.453528392718106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d1569f211f657%3A0xe6e9e5997f8042dd!2sAGROKALINA!5e0!3m2!1sru!2sua!4v1698131387661!5m2!1sru!2sua"
      style={{ border: 0 }}
      allowfullscreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
</div>
</section> 
}
export default Statistics