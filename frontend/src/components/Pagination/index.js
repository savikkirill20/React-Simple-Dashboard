import React from 'react';
import { default as PaginationBase } from 'rc-pagination';
import './Pagination.scss';

const Pagination = ({ current, total, pageSize, onChange, showPrevNextJumpers }) => (
  <PaginationBase
    current={current}
    total={total}
    pageSize={pageSize}
    onChange={onChange}
    showPrevNextJumpers={false}
    showQuickJumper={false}
    className="c-pagination"
  />
);

export default Pagination;