import React, {useState} from 'react';
import s from './Select.module.css'

const Select = ({data, title, placeholder, setValue}) => {

  const [openSelect, setOpenSelect] = useState(false)

  return (
    <div className={s.wrapper}>
      <div className={s.title}>{title}</div>
      <div className={openSelect? `${s.selectBody} ${s.selectBodyActive}` : s.selectBody} onClick={() => setOpenSelect(!openSelect)}>
        {placeholder}
        <div className={openSelect? `${s.selectItemBg} ${s.active}` : s.selectItemBg} onClick={(e) => e.stopPropagation()}>
          {data.map(m => <div key={m.id} onClick={() => {
            setValue(m);
            setOpenSelect(false)
          }} className={s.selectItem}>{m.title}</div>)}
        </div>
      </div>
    </div>
  );
};

export default Select;
