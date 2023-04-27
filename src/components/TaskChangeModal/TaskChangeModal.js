import React, {useState} from 'react';
import s from './TaskChangeModal.module.css'
import Select from '../Select/Select';


const TaskChangeModal = ({openChangeTask, setOpenChangeTask, setData, list, priority, data}) => {

  const [modalData, setModalData] = useState(openChangeTask)

  const saveHandler = () => {
    setData([...data.map(f => f.id === modalData.id? modalData : f)])
    setOpenChangeTask(null)
  }
  const deleteHandler = () => {
    setData([...data.filter(f => f.id !== modalData.id)])
    setOpenChangeTask(null)
  }

  return (
    <div className={s.modal} onClick={() => setOpenChangeTask(null)}>
      <div className={s.modalWrap} onClick={(e) => e.stopPropagation()}>
        <div className={s.header}>
          <div className={s.title}>{modalData.title}</div>
          <div onClick={() => setOpenChangeTask(null)} className={s.close}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill="#626262"/>
            </svg>
          </div>
        </div>
        <div className={s.wrapper}>
          <div className={s.text}>Исполнитель: {modalData.author_name}</div>
          <div className={s.text}>Описание задачи: {modalData.description}</div>
          <Select title={'Состояние:'} data={list} placeholder={list.find(f => f.id === modalData.status).title} setValue={(e) => setModalData({...modalData, status: e.id})}/>
          <Select title={'Приоритет:'} data={priority} placeholder={priority.find(f => f.id === modalData.priority).title} setValue={(e) => setModalData({...modalData, priority: e.id})}/>
        </div>
        <div className={s.btnWrapper}>
          <button className={s.delete} onClick={deleteHandler}>Удалить</button>
          <button className={s.save} onClick={saveHandler}>Сохранить</button>
        </div>
      </div>
    </div>
  );
};

export default TaskChangeModal;
