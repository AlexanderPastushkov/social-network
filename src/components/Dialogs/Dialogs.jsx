import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>dima</div>
        <div className={s.dialog}>sanyua</div>
        <div className={s.dialog}>viktor</div>
        <div className={s.dialog}>valera</div>
        <div className={s.dialog}>nik</div>
        <div className={s.dialog}>dasha</div>
      </div>
    </div>
  );
};
export default Dialogs;
