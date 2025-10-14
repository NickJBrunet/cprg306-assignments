/*

Author: Nick Brunet
Description: Week 3 assignment page
Modified: 2025-09-25

*/

import ItemList from './item-list';
import Link from 'next/link';
import Header from '../components/header';

export default function Page() {
  return (
    <main className="h-dvh">
        <Header />
        <div className="text-center">
          <h1 className="text-5xl p-1 m-1">Shopping List</h1>
          <ItemList />
        </div>
    </main>
  );
}
