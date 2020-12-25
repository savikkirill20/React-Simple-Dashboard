import React from 'react';
import { useTable } from 'react-table';
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import Progress from '../../components/Progress';

const TableDevicesSample = () => {
   const data = React.useMemo(
     () => [
       {
        os: 'Android',
        browser: 'Chrome',
        users: '578',
        avgSessionTime: '00:07:20',
        avgSessionPages: '4',
        avgEngagement: 34,
        returningUsers: '679',
        sessionsPerUser: '854',
        avgReturningSessionTime: '00:06:10',
        avgReturningSessionPages: '4',
        avgUserEngagement: 34,
       },
       {
        os: 'iOS',
        browser: 'Chrome',
        users: '578',
        avgSessionTime: '00:07:20',
        avgSessionPages: '4',
        avgEngagement: 34,
        returningUsers: '679',
        sessionsPerUser: '854',
        avgReturningSessionTime: '00:06:10',
        avgReturningSessionPages: '4',
        avgUserEngagement: 34,
       },
       {
        os: 'Mac OS',
        browser: 'Firefox',
        users: '578',
        avgSessionTime: '00:07:20',
        avgSessionPages: '4',
        avgEngagement: 34,
        returningUsers: '679',
        sessionsPerUser: '854',
        avgReturningSessionTime: '00:06:10',
        avgReturningSessionPages: '4',
        avgUserEngagement: 34,
       },
     ],
     []
   )
 
   const columns = React.useMemo(
     () => [
      {
        Header: ' ',
        columns: [
          {
            Header: "#",
            id: "row",
            className: 'u-font-weight-bold',
            style: {
              width: 40,
            },
            Cell: (data) => {
              return <div>{data.row.index + 1}</div>;
            }
          },   
          {
            Header: 'OS',
            accessor: 'os',
            className: 'u-font-weight-bold',
            
          },
          {
            Header: 'Browser',
            accessor: 'browser',
            className: 'u-font-weight-bold',
          },
        ],
      },

      {
        Header: 'NEW USERS',
        columns: [
          {
            Header: 'New Users',
            accessor: 'users',
          },
          {
            Header: 'Avg. Time per Session',
            accessor: 'avgSessionTime',
          },
          {
            Header: 'Avg. Pages per Session',
            accessor: 'avgSessionPages',
          },
          {
            Header: 'Avg Engagement',
            accessor: 'avgEngagement',
            Cell: (data) => {
             return <Progress value={data.value} />;
           }
          },
        ],
      }, 
      {
        Header: 'RETURNING USERS',
        columns: [
          {
            Header: 'Returning Users',
            accessor: 'returningUsers',
          },
          {
            Header: 'Sessions per User',
            accessor: 'sessionsPerUser',
          },
          {
            Header: 'Avg. Time per Session',
            accessor: 'avgReturningSessionTime',
          },
          {
            Header: 'Avg. Pages per Session',
            accessor: 'avgReturningSessionPages',
          },
          {
            Header: 'Avg Engagement',
            accessor: 'avgUserEngagement',
            Cell: (data) => {
             return <Progress value={data.value} />;
           }
          },
        ],
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

 export default TableDevicesSample;