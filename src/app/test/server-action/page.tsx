"use client"

import { createUser, findUser } from "@/actions/user.action"
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState('');

  return (
    <>
      <div>
        { '/test/c-in-s' }
        <div className="w-full">
          <button
            onClick={() => {
              createUser(name);
            }}>
            insert
          </button>
        </div>
        <div className="w-full">
          <div className="w-full">
            <input className="inline-flex border border-slate-700" type="text" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <button
            onClick={() => {
              findUser().then((data) => {
                console.log('@data', data);
              });
            }}>
            select
          </button>
        </div>
        <div className="w-full">

        </div>
        <div className="w-full">

        </div>
      </div>
    </>
  )
}