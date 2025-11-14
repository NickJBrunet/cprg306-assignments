
"use client";

import AssignmentSidebar from "../components/assignment-sidebar";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import ShoppingList from './shopping-list/page';
import Header from '../components/header.js';

export default function Page(){


  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Handler function for signing in
  async function login(){
    // Sign in to Firebase with GitHub authentication
    await gitHubSignIn();
  }

  return (
    <main>
      <Header/>
      <div className="w-full flex justify-center m-4">
				{user == null ? 
          <div className="flex flex-col justify-center m-4 w-fit">
            <p className="text-xl font-bold">
              You are not logged in!
            </p>
            <button className="bg-green-200 p-2 rounded-sm hover:bg-green-300" onClick={login}>Login</button> 
          </div>
          :
          <div>
            <div className="flex flex-col justify-center m-4 w-fit">
              <p className="text-xl font-bold">
                Welcome! {user.displayName} ({user.email})
              </p>
              <Link className="bg-green-200 p-2 rounded-sm hover:bg-green-300 mt-4 text-center" href="./week-9/shopping-list">Shopping List</Link> 
            </div>
          </div>
        }
			</div>
    </main>
  )
}
