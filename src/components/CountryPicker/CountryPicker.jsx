import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'
import { fetchCountries } from '../fetch/fetch'

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchAPICountries = async () => {
            setFetchedCountries(await fetchCountries())
        }

        fetchAPICountries()
    }, [setFetchedCountries])

    return (
        <FormControl className={styles.formControl} >
            <NativeSelect defaultValue="global" onChange={e => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                { fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>) }
            </NativeSelect>
        </FormControl>

    )
}

export default CountryPicker