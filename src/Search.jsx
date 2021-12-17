import React from 'react'

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  'latency',
  'a2f8f0339ac19d6f835736f0c5485f3a'
);

const Search = () => {
  return (
    <div>
      <InstantSearch
    indexName="bestbuy"
    searchClient={searchClient}
  >
    <SearchBox />
    <Hits />
  </InstantSearch>
    </div>
  )
}

export default Search
