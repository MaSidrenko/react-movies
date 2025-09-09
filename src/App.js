import './App.css';
import Header from './layout/header/Header.js';
import Footer from './layout/footer/Footer.js';
import Main from './layout/main/Main.js';
import Pagination from './components/pagination/Pagination.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main>
      </Main>
      {/* <Pagination></Pagination> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
