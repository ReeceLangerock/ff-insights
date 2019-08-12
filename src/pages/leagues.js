import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LeagueList from "../components/LeagueList";

const Leagues = () => 
{
    return(
    
  <Layout>
    <SEO title="LeagueList" />
    <LeagueList />
   
  </Layout>
)}

export default Leagues
