import './App.css';
import Aside from './components/Aside';
import Header from './components/Header';
import Main from './components/Main';
import RightBar from './components/RightBar';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='inner-content'>
        <Aside />
        <Main />
        <RightBar />
      </div>
    </div>
  );
}

export default App;
