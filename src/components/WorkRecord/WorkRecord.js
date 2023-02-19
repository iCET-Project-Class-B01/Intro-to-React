import React from 'react';
import style from './WorkRecord.module.css';

const WorkRecord = () => {
   return (
      <div className={style.outer_div}>
         <input type="checkbox" />
         <h3>This is sample work</h3>
         <button type="button">DEL</button>
      </div>
   );
}

export default WorkRecord;
