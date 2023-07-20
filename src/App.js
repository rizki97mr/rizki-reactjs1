import { Outlet } from 'react-router-dom';
import './App.css';
import Content from './Routing/Components/Content';
import NavigationBar from './Routing/Components/NavigationBar';



function App() {
  return (
    <div className="myBG">
      <NavigationBar />
      <Outlet />
      <Content name="M RIZKI"/>
      
    </div>
  );
}

export default App;
