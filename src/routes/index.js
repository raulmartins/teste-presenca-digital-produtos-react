import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProdutoList from '../components/Produtos'


const Routes = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={ProdutoList} />
    </Fragment>
  </Router>
)

export default Routes
