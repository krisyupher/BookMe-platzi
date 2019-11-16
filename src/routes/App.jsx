import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Movie from "../containers/Movie"
import ContainerMovieData from "../containers/ContainerMovieData"
import Layout from "../components/Layout"
import NotFound from "../components/NotFound"
const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/movie" component={Movie} />
        <Route exact path="/movie/:MovieId" component={ContainerMovieData} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App