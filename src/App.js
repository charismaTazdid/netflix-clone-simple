import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Category from './components/Category/Category';
import requests from './dataUrl';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>

      <Category title={'NETFLIX OREGINAL'} fecthUrl = {requests.orginal} isLarge={true}></Category>
      <Category title={'Trending Now'} fecthUrl ={requests.tranding}></Category>
      <Category title={'Top Rated'} fecthUrl ={requests.topRated}></Category>
      <Category title={'Action Movies'} fecthUrl ={requests.actionMovie}></Category>
      <Category title={'Comedy Movies'} fecthUrl ={requests.comedeyMovie}></Category>
      <Category title={'Romance Movies'} fecthUrl ={requests.romanticMovie}></Category>
      <Category title={'Horror Movies'} fecthUrl ={requests.horrorMovie}></Category>
      <Category title={'Documentaries'} fecthUrl ={requests.documentary}></Category>


    </div>
  );
}

export default App;
