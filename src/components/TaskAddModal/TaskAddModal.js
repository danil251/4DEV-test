import React, {useState} from 'react';
import s from '../TaskChangeModal/TaskChangeModal.module.css';
import style from '../Select/Select.module.css';
import Select from '../Select/Select';
import {v4 as uuidv4} from 'uuid';

const TaskAddModal = ({data, setData, author, list, priority, setOpenAddTask}) => {
  const [modalData, setModalData] = useState(
    {
      id: uuidv4(),
      status: 0,
      priority: 0,
      title: '',
      description: '',
      creation_time: new Date().getTime(),
      author_name: '',
    },
  );

  return (
    <div className={s.modal} onClick={() => setOpenAddTask(false)}>
      <div className={s.modalWrap} onClick={(e) => e.stopPropagation()}>
        <div className={s.header}>
          <div className={s.title}>Новая задача</div>
          <div onClick={() => setOpenAddTask(false)} className={s.close}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill="#626262"/>
            </svg>
          </div>
        </div>
        <div className={s.wrapper}>
          <div className={style.wrapper}>
            <div className={style.title}>Название:</div>
            <input className={style.input} value={modalData.title} onChange={(e) => setModalData({...modalData, title: e.target.value})}/>
          </div>

          <Select title={'Исполнитель:'} placeholder={modalData.author_name} data={author} setValue={(e) => setModalData({
            ...modalData,
            author_name: e.title,
          })}/>
            <div>
              <div className={style.title}>Описание задачи:</div>
              <textarea value={modalData.description} onChange={(e) => setModalData({...modalData, description: e.target.value})} className={style.input} style={{height: '80px', marginTop: '10px'}}/>
            </div>


            <Select title={'Состояние:'} data={list} placeholder={list.find(f => f.id === modalData.status).title}
                    setValue={(e) => setModalData({...modalData, status: e.id})}/>
            <Select title={'Приоритет:'} data={priority}
                    placeholder={priority.find(f => f.id === modalData.priority).title}
                    setValue={(e) => setModalData({...modalData, priority: e.id})}/>
        </div>
        <div className={s.btnWrapper}>
          <button className={s.delete} onClick={() => setOpenAddTask(false)}>Удалить</button>
          <button className={s.save} onClick={() => {
            if (modalData.title && modalData.description && modalData.author_name) {
              setData([...data, modalData]);
              setOpenAddTask(false)
            }
          }}>Сохранить</button>
        </div>
      </div>
    </div>
);
};

export default TaskAddModal;
