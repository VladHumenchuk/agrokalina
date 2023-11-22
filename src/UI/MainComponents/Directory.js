import styles from './Directory.module.scss'
import { directory } from '../../DATA/directory'
import OneDirectory from '../../components/mainDataComponents/OneDirectory'


const Directory=()=>{
  const directoruData = directory.map(value=><OneDirectory key={value.id} title={value.title} text={value.text}></OneDirectory>)
return <section className={styles.section}>
  {directoruData}
</section>
}
export default Directory