import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Login from "../containers/Login"
import Movie from "../containers/Movie"
import ContainerMovieData from "../containers/ContainerMovieData"
import Ticket from "../containers/Ticket"
import Layout from "../components/Layout"
import NotFound from "../components/NotFound"
const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/movie" component={Movie} />
        <Route exact path="/movie/:MovieId" component={ContainerMovieData} />
        <Route exact path="/Ticket" component={Ticket} />
        <Redirect from="/" to="/movie"/>
        <Redirect from="/video" to="/movie"/>
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App