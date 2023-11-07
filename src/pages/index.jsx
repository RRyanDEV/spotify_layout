import Sidebar from '@/components/Sidebar';
import Overlay from '@/components/Overlay';
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>
  <Sidebar />
  <Overlay />  
   </>)
}
