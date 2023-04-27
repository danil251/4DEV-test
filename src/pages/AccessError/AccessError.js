import React from 'react';
import s from '../../components/TaskChangeModal/TaskChangeModal.module.css';

const AccessError = ({navigate}) => {
  return (
    <div className={s.modal}>
      <div className={s.modalWrap}>
        <div className={s.header}>
          <div className={s.title}>Ошибка доступа</div>
        </div>
        <div className={s.wrapper}>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
        </div>

        <div className={s.btnWrapper}>
          <button className={s.delete} onClick={() => navigate('/')}>Назад</button>
        </div>

      </div>
    </div>
  );
};

export default AccessError;
