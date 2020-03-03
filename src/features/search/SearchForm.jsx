import React from 'react'
import { Grid, Search } from 'semantic-ui-react'

const SearchForm = () => {
    return (
        <Grid>
        <Grid.Column width={6}>
          <Search />
        </Grid.Column>
      </Grid>
    )
}

export default SearchForm
