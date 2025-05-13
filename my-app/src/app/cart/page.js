'use client';

import { Suspense } from 'react';
import CartPage from './cart-page';
export default function Page() {
  return (
    <Suspense fallback={<div>Đang tải dữ liệu...</div>}>
      <CartPage />
    </Suspense>
  );
}
