import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import GetBooks from "./functions/GetBooks";
import AddBook from "./functions/AddBook";
import Login from "./functions/Login";
import Header from "./functions/Header";
import {PersistGate} from "redux-persist/integration/react";
import {store,persistor} from "./redux/store";
import EditBook from "./functions/EditBook";
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<h2>loading...</h2>} persistor={persistor}>
        <BrowserRouter>
          <Header/>
          <Routes>  
            <Route path="/books" element={<GetBooks/>}/>
            <Route path="/boo" element={<GetBooks/>}/>
            <Route path="/addbook" element={<AddBook/>}/>
            <Route path="/editbook/:id" element={<EditBook/>}/>
            <Route path="/login" element={<Login/>}/>

          </Routes>
        </BrowserRouter>


      </PersistGate>
    </Provider>
  );
  
}

export default App;
