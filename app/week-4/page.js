/*

Author: Nick Brunet
Description: Week 4 assignment page
Modified: 2024-09-25

*/

import Header from '../components/header';
import NewItem from './new-item';

export default function Page() {
  return (
    <div className="flex flex-col h-dvh w-screen text-center">
      <Header />
      <NewItem />
    </div>
  )
}