import React from 'react';
import Header from '../components/Header';
import BillTable from '../components/BillTable';
import BillPayment from '../components/BillPayment';
import '../index.css';

const Billing = () => {
  return (
    <div style={{ marginLeft: '12px' }}>
      <Header 
       name='Billing' 
       title='Order History'
       subTitle='Manage billing information and view receips'
      />

      <BillTable />
      <BillPayment />


    </div>
  )
}

export default Billing
