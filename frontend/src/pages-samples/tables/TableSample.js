import React from 'react';
import { useTable } from 'react-table';
import Table from '../../components/Table';
import Text from '../../components/Text';
import Pagination from '../../components/Pagination';

const TableSample = () => {
   const data = React.useMemo(
     () => [
       {
        sources: 'Ad campaign #1',
        users: '643',
        conversions: '164',
        conversionRate: '25.5%',
       },
       {
        sources: 'Facebook',
        users: '467',
        conversions: '97',
        conversionRate: '20.7%',
       },
     ],
     []
   )
 
   const columns = React.useMemo(
     () => [
      {
        Header: "#",
        id: "row",
        style: {
          width: 40,
        },
        Cell: (data) => {
          return <div>{data.row.index + 1}</div>;
        }
      },    
       {
         Header: 'Sources',
         accessor: 'sources', // accessor is the "key" in the data
         className: 'u-text-align-left',
         Cell: (data) => {
          return <Text size="14px" fontWeight="medium" align="start">{data.value}</Text>;
        }
       },
       {
         Header: 'Users',
         accessor: 'users',
         className: 'u-border-right-none u-border-left-none',
       },
       {
        Header: 'Conversions',
        accessor: 'conversions',
        className: 'u-border-right-none u-border-left-none',
      },
      {
        Header: 'Conversion rate',
        accessor: 'conversionRate',
        className: 'u-border-right-none u-border-left-none',
      },
     ],
     []
   )
 
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data })
 
   return (
     <>
    <Table name="User Growth">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  className={column.className || ''}
                  style={column.style || null}
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      className={cell.column.className}
                      {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
     </Table>
     <Pagination current={1} total={55} pageSize={10} onChange={null} />
     </>
   )
 }

 export default TableSample;