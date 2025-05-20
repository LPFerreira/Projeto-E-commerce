import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const TableRow = ({ data, handleRemoveItem, handleUpdateItem }) => {
  return (

    <tr>
      <td>
        <div className='product'>
          <img src={data.imagem} alt={data.name} />
          <div className='info'>
            <div className='name'>{data.name}</div>
            <div className='category'>{data.category}</div>
          </div>
        </div>
      </td>
      <td>{data.price} €</td>
      <td>
        <div className='qty'>
          <button onClick={() => { handleUpdateItem(data, 'decrease') }}>-
            <i className='bx bx-minus'></i>
          </button>
          <span>{data.quantity}</span>
          <button onClick={() => { handleUpdateItem(data, 'increase') }}>+
            <i className='bx bx-plus'></i>
          </button>
        </div>
      </td>
      <td>{data.price * data.quantity} €</td>
      <td>
        <button className='remove' onClick={() => { handleRemoveItem(data) }}>
           <FontAwesomeIcon icon={faTrash} style={{ color: "rgb(8, 8, 8)" }} />
          <i className='bx bx-x'></i>
        </button>
      </td>
    </tr>

  );
}

export default TableRow;