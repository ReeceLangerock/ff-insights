import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LeagueList from "../components/League/LeagueList";

const Leagues = () => 
{
    return(
    
  <Layout>
    <SEO title="Leagues" />
    <LeagueList />
   
  </Layout>
)}

export default Leagues
