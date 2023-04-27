import React, {useState} from 'react';
import s from './MainPage.module.css';
import Header from '../../components/Header/Header';
import {v4 as uuidv4} from 'uuid';
import TaskList from '../../components/TaskList/TaskList';
import TaskChangeModal from '../../components/TaskChangeModal/TaskChangeModal';
import TaskAddModal from '../../components/TaskAddModal/TaskAddModal';
import AddNewList from '../../components/AddNewList/AddNewList';

const MainPage = () => {
  const [list, setList] = useState([{title: 'В очереди', id: 0}, {title: 'В работе', id: 1}, {title: 'Выполненно', id: 2}]);
  const [priority] = useState([{title: 'Низкий', id: 0}, {title: 'Средний', id: 1}, {title: 'Высокий', id: 2}]);
  const [author] = useState([
    {
      id: '001',
      title: 'John Smith',
    },
    {
      id: '002',
      title: 'Sarah Lee',
    },
    {
      id: '003',
      title: 'James Wilson',
    },
    {
      id: '004',
      title: 'David Taylor',
    },
    {
      id: '005',
      title: 'Emma Anderson',
    },
    {
      id: '006',
      title: 'Ryan Garcia',
    },
  ]);
  const [data, setData] = useState([
    {
      id: uuidv4(),
      status: 0,
      priority: 2,
      title: 'Develop website homepage',
      description: 'Create a visually appealing and responsive homepage for the website',
      creation_time: '1681373024000',
      author_name: 'John Smith',
    },
    {
      id: uuidv4(),
      status: 1,
      priority: 1,
      title: 'Implement user authentication',
      description: 'Add user authentication feature to the website',
      creation_time: "1680941744000",
      author_name: 'Sarah Lee',
    },
    {
      id: uuidv4(),
      status: 2,
      priority: 0,
      title: 'Fix CSS issues on mobile devices',
      description: 'Resolve CSS issues on the website for mobile devices',
      creation_time: '1680509744000',
      author_name: 'John Smith',
    },
    {
      id: uuidv4(),
      status: 0,
      priority: 1,
      title: 'Add search functionality',
      description: 'Implement search feature on the website',
      creation_time: '1672733744000',
      author_name: 'John Smith',
    },
    {
      id: uuidv4(),
      status: 1,
      priority: 2,
      title: 'Optimize website performance',
      description: 'Improve website loading speed and overall performance',
      creation_time: '1671437444000',
      author_name: 'James Wilson',
    },
    {
      id: uuidv4(),
      status: 2,
      priority: 0,
      title: 'Fix broken links on the website',
      description: 'Identify and fix broken links on the website',
      creation_time: '1671091832000',
      author_name: 'Sarah Lee',
    },
    {
      id: uuidv4(),
      status: 0,
      priority: 1,
      title: 'Create product page',
      description: 'Design and develop a product page for the website',
      creation_time: '1670400615000',
      author_name: 'David Taylor',
    },
    {
      id: uuidv4(),
      status: 1,
      priority: 2,
      title: 'Implement payment gateway',
      description: 'Add payment gateway to the website for online transactions',
      creation_time: '1670055015000',
      author_name: 'Emma Anderson',
    },
    {
      id: uuidv4(),
      status: 2,
      priority: 0,
      title: 'Translate website content',
      description: 'Translate website content to multiple languages',
      creation_time: '1668845415000',
      author_name: 'Ryan Garcia',
    },
    {
      id: uuidv4(),
      status: 0,
      priority: 1,
      title: 'Design email templates',
      description: 'Create visually appealing email templates for the website',
      creation_time: '1668327015000',
      author_name: 'Emma Anderson',
    },

  ]);
  const [openChangeTask, setOpenChangeTask] = useState(null);
  const [openAddTask, setOpenAddTask] = useState(false);
  const [idItem, setIdItem] = useState()
  return (
    <>
      <div className={s.container}>
        <Header createTask={() => setOpenAddTask(true)}/>
        <div className={s.listsWrapper}>
          {list.map(list => <TaskList setOpenAddTask={setOpenAddTask} data={data} setData={setData} title={list.title} status={list.id}
                                      id={list.id} key={list.id} setOpenChangeTask={setOpenChangeTask} idItem={idItem} setIdItem={setIdItem}/>)}
                                      <AddNewList list={list} setList={setList}/>
        </div>
      </div>
      {openChangeTask &&
      <TaskChangeModal openChangeTask={openChangeTask} setOpenChangeTask={setOpenChangeTask} data={data}
                       setData={setData} author={author} list={list} priority={priority}/>}
      {openAddTask && <TaskAddModal data={data} setData={setData} author={author} list={list} priority={priority}
                                    setOpenAddTask={setOpenAddTask}/>}
    </>
  );
};

export default MainPage;
