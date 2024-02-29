"use client"

import { useEffect, useState } from "react";
import { ITestComponent } from "./test-component.interface";
import { ICommon } from "@/interfaces/common.interface";

export function TestComponent(props: ITestComponent.Props) {
  const {
    getItems,
  } = props;

  const [users, setUsers] = useState<ICommon.User[]>([]);

  useEffect(() => {
    getItems().then((res) => {
      setUsers(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <button
          onClick={() => {
            const k = getItems();
            k.then((data) => {
              // console.log('@data', data);
              setUsers(data);
            });
          }}>
          갱신하기
        </button>
      </div>
      {
        users.map(item => {
          return (
            <div key={item.id}>
              { item.id } / { item.name } / { item.datetime.toISOString() }
            </div>
          )
        })
      }
    </>
  )
}