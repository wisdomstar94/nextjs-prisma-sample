import { TestComponent } from "@/components/test-component/test-component.component";
import { ReactNode } from "react";
import { prisma } from "../../../../prisma/client.prisma";

export default async function Layout({ children }: { children: ReactNode }) {
  async function getItems() {
    'use server'
    const users = await prisma.user.findMany({
      include: {
        user_other_infos: true,
      },
    });
    return users;
  }

  return (
    <>
      <TestComponent 
        getItems={getItems}
        />
      <div>
        { children }
      </div>
    </>
  );
}