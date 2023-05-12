import React from 'react';
import Header from './Header';
import Layout from './Layout';
import { useState } from 'react';
import data from "./heliverse_mock_data.json";

const App = () => {
  const [filter, setFilter] = useState('');

    const OnChangeInput = (event) => {
        setFilter(event.target.value);
    };

    const filteredData = data.filter((item) => {
        const itemName = item.first_name.toLowerCase() + item.last_name.toLocaleLowerCase();
        const itemGender = item.gender.toLowerCase();
        const itemAvailability = JSON.stringify(item.available).toLocaleLowerCase();
        const itemDomain = item.domain.toLocaleLowerCase()
        const filterText = filter.toLowerCase();

        return (
            itemName.includes(filterText) ||
            itemGender.includes(filterText) || itemDomain.includes(filterText) || itemAvailability.includes(filterText)
        );
    });

  return (
    <React.Fragment>
      <Header fun={OnChangeInput}/>
      <Layout data={filteredData}/>
    </React.Fragment>
  )
}

export default App