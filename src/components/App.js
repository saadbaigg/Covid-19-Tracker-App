import React, { Component } from 'react'
import Cards from './Cards/Cards'
import Chart from './Chart/Chart'
import CountryPicker from './CountryPicker/CountryPicker'
import styles from './App.module.css'
import { fetchData } from './fetch/fetch'
import Header from './Header/Header'
import Footer from './Footer/Footer'
 

class App extends Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData()

    this.setState({ data: fetchedData })
  } 

  handleCountryChange = async (country) => {

    const fetchedData = await fetchData(country)

    this.setState({ data: fetchedData, country: country })

  }


  render() {
    const { data, country } = this.state
    console.log(data)

    return (
      <div className={styles.container} >
        <Header />
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Footer />
      </div>
    )
  }
}

export default App
