import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import { paymentData } from '../data/data';

const BillTable = () => {
  return (
    <div>
        <div className="table">
            <div className="table-header">
                <h6>Date</h6>
                <h6>Type</h6>
                <h6>Receipt</h6>
            </div>

           {paymentData.map((payment) => (
             <div className="table-item" key={payment.paymentId}>
                <p>{payment.paymentDate}</p>
                <span>{payment.type}</span>
                <button className="download-btn">Download</button>
            </div>
           ))}
        </div>

      <Link to='#' className="link">See more</Link>
    </div>
  )
}

export default BillTable


/*

<ul>
    {datas.map((data) => (
            <li key={data.name}>
                <div></div>
                <img src={data.icon}/>
                <p>{data.name}</p>
            </li>
    ))}
</ul>
*/