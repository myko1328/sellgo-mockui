import React from 'react'
import { Grid } from 'semantic-ui-react'
import UserPlaceholder from '../placeholder/Placeholder'
import SearchForm from '../search/SearchForm'
import ProductRating from '../productRatings/productRatings'
import ButtonUpgrade from '../buttonUpgrade/buttonUpgrade'
import CityDropDown from '../cityDropdown/cityDropdown'
import GroupTab from '../groupTab/groupTab'

const UserDashboard = () => {
    return (
        <Grid>
            <Grid.Column width={4}>
                <UserPlaceholder />
            </Grid.Column>
            <Grid.Column width={12}>
                <Grid>
                    <Grid.Column width={8} position='center'>
                        <p>Search your product: <SearchForm /></p>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ProductRating />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ButtonUpgrade />
                    </Grid.Column>
                    
                </Grid>
                    <GroupTab />
            </Grid.Column>
        </Grid>
    )
}

export default UserDashboard;
