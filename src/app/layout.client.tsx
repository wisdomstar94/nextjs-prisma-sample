"use client"
import Link from "next/link";
import { ReactNode, useState } from "react";

interface Menu {
  name: string;
  href: string;
}

export function LayoutClient(props: { children?: ReactNode }) {
  const [menuList, setMenuList] = useState<Menu[]>([
    { name: '/test/basic', href: '/test/basic' },
    { name: '/test/sql-injection-test', href: '/test/sql-injection-test' },
    { name: '/test/select', href: '/test/select' },
    { name: '/test/update', href: '/test/update' },
    { name: '/test/delete', href: '/test/delete' },
    { name: '/test/file-upload', href: '/test/file-upload' },
    { name: '/test/server-action', href: '/test/server-action' },
  ]);

  return (
    <>
      <div className="w-full relative flex flex-wrap gap-2">
        {
          menuList.map(item => {
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className="inline-flex px-4 py-1 border border-slate-400 text-sm cursor-pointer hover:bg-slate-100"
                >
                { item.name }
              </Link>
            );
          })
        }
      </div>
      { props.children }
    </>
  );
}