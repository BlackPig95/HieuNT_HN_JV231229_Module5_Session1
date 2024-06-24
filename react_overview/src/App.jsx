import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ListCourse from './components/BaiTap/ListCourse';
import Calculation from './components/BaiTap/Calculation';
import Colorbox from './components/BaiTap/Colorbox';
import FormatName from './components/BaiTap/FormatName';

function App()
{
  const [ count, setCount ] = useState(0);

  return (
    <>
      <Header></Header>
      <Footer></Footer>
      <ListCourse></ListCourse>
      <Calculation></Calculation>
      <Colorbox color={ "blue" }></Colorbox>
      <FormatName name1={ "Nguyễn Văn" } name2={ "A" }></FormatName>
    </>
  );
}

export default App;
