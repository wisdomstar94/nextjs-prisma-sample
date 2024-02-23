"use client"

export default function Page() {
  return (
    <>
      <div className="flex flex-wrap gap-2 relative">
        <div className="w-full relative">
          <button 
            className="inline-flex px-2 py-0.5 text-xs text-slate-600 border border-slate-500 cursor-pointer hover:bg-slate-100"
            onClick={() => {
              fetch('/api/insert', {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                // mode: "cors", // no-cors, *cors, same-origin
                // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                // credentials: "same-origin", // include, *same-origin, omit
                headers: {
                  "Content-Type": "application/json",
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                // redirect: "follow", // manual, *follow, error
                // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify({ 'name': 'gil' }), // body data type must match "Content-Type" header
              }).then(async res => {
                const resBody = await res.json();
                console.log('resBody', resBody);
              });
            }}
            >
            [POST] /api/insert 호출
          </button>
        </div>
      </div>
    </>
  );
}