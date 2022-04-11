/* eslint-disable no-unused-vars */
import React from 'react';

import './styles.scss';

type TableProps = {
  tableHeads: Array<object>;
  tableData: Array<object>;
  noDataText: string;
  selectedRow: any;
  className?: string;
  onRowClick: (data: any) => void;
  onActionClick: (type: string, data: any) => void;
}

const Table: React.FC <TableProps> = (props) => {
  const { tableHeads, tableData, noDataText, selectedRow, className, onRowClick, onActionClick } = props;

  const renderTableData = (item: any, data: any) => {
    if (item.custom) { return <item.custom  data={data} onActionClick={onActionClick} />; }
    return data[item.value];
  };

  const isSelectedRow = (row: any) => row.id && row.id === selectedRow.id;

  return (
    <div className={`table-wrapper v-scroll h-scroll ${className}`}>
      <table>
        <thead>
          <tr className="f-14">
            {tableHeads?.map((head: any, index: number) => (
              <td key={index}>
                <div className="v-center">
                  {head.label}
                </div>
              </td>))}
          </tr>
        </thead>
        <tbody>
          {tableData?.map((data: any) => (
            <tr
              key={data.id}
              id={data.id}
              className={`pointer ${isSelectedRow(data) ? 'selected-row' : ''}`}
              role="presentation"
              onClick={() => onRowClick(data)}
            >
              {tableHeads?.map((item, index) => (
                <td key={index}>{renderTableData(item, data) || '-'}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {!tableData?.length && <div className="empty-list t-center f-18 f-reg">{noDataText}</div>}
    </div>
  );
};

export default Table;
