import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Main } from "./Main";
import { Layout } from "./UI/Layout";

function App() {
  return (
    <div>
      <Router>
        <Fragment>
          <Layout>
            <Routes>
              <Route exact path='/' element={<Main />}>
              </Route>
            </Routes>
          </Layout>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
