import Global from "./styles/global.style"
import Routes from "./routes/index.routes"

import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
   <>
    <Global/>
    <Routes/>
    <Toaster/>
   </>
  );
}

