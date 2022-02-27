import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SideBarDrawerProviderProps {
  children: ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn

const SiderBarDrawerContext = createContext({} as SideBarDrawerContextData);

export function SideBarDrawerProvider({ children }: SideBarDrawerProviderProps) {
  const disclosure = useDisclosure()
  const router = useRouter()
  
  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])
 
  return (
    <SiderBarDrawerContext.Provider value={disclosure}>
      {children}
    </SiderBarDrawerContext.Provider>
  )
}

export const useSideBarDrawer = () => useContext(SiderBarDrawerContext)