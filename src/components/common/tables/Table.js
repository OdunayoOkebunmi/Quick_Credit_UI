import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const AdminTable = () => {
  const data = [
    {
      loanId: 0,
      id: 0,
      user: 'string',
      createdOn: 'string',
      status: 'string',
      repaid: true,
      tenor: 0,
      amount: 0,
      paymentInstallments: 0,
      balance: 0,
      interest: 0,
    },
  ];
  const columns = [{
    Header: () => <div style={{ backgroundColor: 'red' }}>Loan ID</div>,
    accessor: 'loanId', // String-based value accessors!
  },
  {
    Header: 'Email',
    accessor: 'user', // String-based value accessors!
  },
  {
    Header: 'Date Created',
    accessor: 'createdOn', // String-based value accessors!
  },
  {
    Header: 'Status',
    accessor: 'status', // String-based value accessors!
  },
  {
    Header: 'Repaid',
    accessor: d => String(d.repaid),
    id: 'repaid',
  },
  {
    Header: 'Tenor',
    accessor: 'tenor', // String-based value accessors!
  },
  {
    Header: 'Amount',
    accessor: 'amount', // String-based value accessors!
  },
  {
    Header: 'Repayments',
    accessor: 'paymentInstallments', // String-based value accessors!
  },
  {
    Header: 'Balance',
    accessor: 'balance', // String-based value accessors!
  },
  {
    Header: 'Interest',
    accessor: 'interest', // String-based value accessors!
  },
  ];

  return (
    <ReactTable
      data={data}
      columns={columns}
      headerClassName="admin-users-loans__details--table"
    />
  );
};
export default AdminTable;
