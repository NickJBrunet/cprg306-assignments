
"use client";

import AssignmentSidebar from "../components/assignment-sidebar";
// Part 5: landing page starts
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import ShoppingList from './shopping_list/page';
import Header from '../components/header.js';

export default function Page(){


  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Handler function for signing in
  async function login(){
    // Sign in to Firebase with GitHub authentication
    await gitHubSignIn();
  }

  // Handler function for logging out
  async function logout(){
    // Sign out of Firebase
    await firebaseSignOut();
  }

  return (
    <main>
      <Header/>
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
            <button className="bg-red-200 p-2 rounded-sm hover:bg-red-300" onClick={logout}>Logout</button> 
          </div>
          <ShoppingList/>
        </div>
      }
    </main>
  )
}
