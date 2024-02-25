"use client"

import { useState } from "react";

export default function Page() {
  const [url, setUrl] = useState('/api/sql-injection-test');

  return (
    <>
      <div className="flex flex-wrap gap-2 relative">
        <div className="w-full relative">
          <button 
            className="inline-flex gap-2 px-4 py-1.5 text-xs text-slate-600 border border-slate-500 cursor-pointer hover:bg-slate-100"
            onClick={() => {
              fetch(url, {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
                // mode: "cors", // no-cors, *cors, same-origin
                // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                // credentials: "same-origin", // include, *same-origin, omit
                headers: {
                  "Content-Type": "application/json",
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                // redirect: "follow", // manual, *follow, error
                // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                // body: JSON.stringify({ 'name': 'gil' }), // body data type must match "Content-Type" header
              }).then(async res => {
                const resBody = await res.json();
                console.log('resBody', resBody);
              });
            }}
            >
            <span>[GET]</span> 
            <input type="text" className="inline-flex border border-slate-500" value={url} onChange={e => setUrl(e.target.value)} /> 
            <span>호출</span>
          </button>
        </div>
      </div>
    </>
  );
}