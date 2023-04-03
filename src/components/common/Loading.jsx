import s from "./Loading.module.css"
export default function Loading() {
    return <div className={s.loading}>
        <img src={'/img/loading.gif'} alt={'loading'} />
    </div>
}