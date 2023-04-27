import React, {useState} from 'react';
import s from '../TaskList/TaskList.module.css';

const AddNewList = ({list, setList}) => {

  const [openTitle, setOpenTitle] = useState(false);
  const [title, setTitle] = useState('');

  const addList = () => {
    if (title) {
      setList([...list, {title: title, id: list.length}])
      setOpenTitle(false)
      setTitle('')
    }
  }

  return (
    <div className={s.wrapper}>
      <div className={s.title} style={{cursor: 'pointer'}} onClick={() => setOpenTitle(!openTitle)}>+ Добавьте еще одну
        колонку
      </div>
      {openTitle &&
      <div>
        <input className={s.input} type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <div className={s.btnWrapper}>
          <div onClick={addList} className={s.addBtn}>Добавить</div>
          <div onClick={() => {
            setOpenTitle(false)
            setTitle('')
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill="#626262"/>
            </svg>
          </div>
        </div>

      </div>}
    </div>
  );
};

export default AddNewList;
