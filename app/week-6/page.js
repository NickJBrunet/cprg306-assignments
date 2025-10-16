/*

Author: Nick Brunet
Description: Week 6 assignment page
Modified: 2025-10-14

*/

import Header from '../components/header';
import ItemList from './ItemList';

export default function Page() {
  return (
    <main className="w-full">
      <Header/>
      <ItemList/>
    </main>
  );
}