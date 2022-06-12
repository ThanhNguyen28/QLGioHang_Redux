import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CartContainer from './Container/CartContainer';
import ProductsContainer from './Container/ProductsContainer';
import MessageContainer from './Container/MessageContainer';
class App extends React.Component {
  render() {
    return (
            <div>
                  <Header/>
                  <main id="mainContainer">
                     <div className="container">
                        <ProductsContainer/>
                        <MessageContainer/>
                        <CartContainer/>
                     </div>
                  </main>   
                  <Footer/>
            </div>
    );
  }
}
export default App;
