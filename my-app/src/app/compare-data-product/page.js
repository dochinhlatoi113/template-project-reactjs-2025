'use client';

import { Suspense } from 'react';
import TblCompareData from './tbl-compare-data';

export default function Page() {
  return (
    <Suspense fallback={<div>Đang tải dữ liệu...</div>}>
      <TblCompareData />
    </Suspense>
  );
}
