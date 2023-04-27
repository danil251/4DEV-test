import React, {useMemo, useState} from 'react';
import s from './Task.module.css'

const Task = ({task, data, setOpenChangeTask, id, setData, idItem, setIdItem}) => {

  const priority = useMemo(() => {
    if (task.priority === 0) return {background: '#356b17'}
    else if (task.priority === 1) return {background: '#c8a562'}
    else if (task.priority === 2) return {background: '#993f3b'}
  }, [task])

  function dragLeaveHandler(e) {
    e.target.style.boxShadow = 'none'
  }

  function dragStartHandler(e) {
    if (idItem !== e.target.id) setIdItem(e.target.id)
  }

  function dragEndHandler(e) {
    e.target.style.boxShadow = 'none'
  }

  function dragOverHandler(e) {
    e.preventDefault()
    if (e.target.className === `${s.wrapper}`) {
      e.target.style.boxShadow = '0px 4px 3px gray'
    }
  }

  function dropHandler(e, id, idItems) {
    e.preventDefault()
    e.target.style.boxShadow = 'none'
    setData(data.map(m => m.id === idItems? {...m, status: id} : m))
  }


  return (
    <div className={s.wrapper} onClick={() => setOpenChangeTask(task)}
         id={task.id}
         draggable={true}
         onDragOver={(e) => dragOverHandler(e)}
         onDragLeave={(e) => dragLeaveHandler(e)}
         onDragStart={(e) => dragStartHandler(e)}
         onDragEnd={(e) => dragEndHandler(e)}
         onDrop={(e) => dropHandler(e, id, idItem)}
    >
      <div className={s.titleWrapper}>
        <div className={s.priority} style={priority}/>
        <div className={s.title}>{task.title}</div>
      </div>
      <div>
        {task.author_name}
      </div>
    </div>
  );
};

export default Task;
