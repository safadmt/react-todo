import './App.css';
import {RouterProvider} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { router } from './routes/Routes';
import { TopicStateProvider } from './reducer&context/TopicContext';
function App() {
  return (
    <div className="App bg-[#edf2f4]">

      <ToastContainer
      position='top-right'
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover
      />
      <TopicStateProvider>
        <RouterProvider router={router}/>
      </TopicStateProvider>
      
    </div>
  );
}

export default App;
