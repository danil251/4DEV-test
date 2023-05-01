import React, {useMemo, useState} from 'react';
import s from './TaskList.module.css'
import Task from '../Task/Task';
import Arrow from '../Arrow/Arow';

const TaskList = ({title, id, data, setOpenChangeTask, setOpenAddTask, setData, idItem, setIdItem}) => {
  const [sortType, setSortType] = useState("none")

  const listItemArr = useMemo(() => data.filter(f => f.status === id), [data])

  const listItemSort = () => {
    if (sortType === 'none') {
      return listItemArr
    } else if (sortType === "desc") {
      return listItemArr.sort((a, b) => b.creation_time - a.creation_time)
    } else if (sortType === "asc") {
      return listItemArr.sort((a, b) => a.creation_time - b.creation_time)
    }
  }

  const sortTypeHandler = () => {
    if (sortType === 'none') {
      setSortType("desc")
    } else if (sortType === "desc") {
      setSortType("asc")
    } else if (sortType === "asc") {
      setSortType("none")
    }
  }

  const arrowStyle = () => {
    if (sortType === 'none') {
      return {color: '#000', direction: 'up'}
    } else if (sortType === "desc") {
      return {color: 'red', direction: 'up'}
    } else if (sortType === "asc") {
      return {color: 'red', direction: 'down'}
    }
  }

  function dragOverHandler(e) {
    e.preventDefault()
    if (e.target.className === `${s.wrapper}`) {
      e.target.style.boxShadow = '0px 4px 3px gray'
    }
  }
  function onDrop(e) {
    if (!listItemArr.length) setData(data.map(m => m.id === idItem? {...m, status: Number(e)} : m))
  }

  return (
    <div className={s.wrapper} onDrop={(e) => onDrop(e.target.id)} onDragOver={(e) => dragOverHandler(e)}>
      <div className={s.titleWrapper}>
        <p className={s.title}>{title}</p>
        <div onClick={sortTypeHandler}>
          <Arrow {...arrowStyle()}/>
        </div>
      </div>
      <div className={s.tasksWrapper}>
        {listItemSort().map((task, index) => <Task key={index} setOpenChangeTask={setOpenChangeTask} data={data} task={task} id={id} setData={setData} idItem={idItem} setIdItem={setIdItem}/>)}
      </div>
      {!listItemArr.length && <div id={id} className={s.add} onClick={() => setOpenAddTask(id)}>+ Новая задача</div>}
    </div>
  );
};

export default TaskList;
