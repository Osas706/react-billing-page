import React from 'react';
import '../index.css';
import { paymentVisa } from '../data/data';

const BillPayment = () => {
  return (
    <div>
      <div className="payment-header">
        <h4>Payment Method</h4>
        <p>Manage billing information and view receips</p>
      </div>

      <div className="payment">
        <img src={paymentVisa} />
        <p>Visa ending in 2255</p>
        <button>Remove</button>
      </div>
    </div>
  )
}

export default BillPayment
