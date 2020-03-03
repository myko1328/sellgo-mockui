import React, { Fragment } from 'react'
import { Tab, Search, Button } from 'semantic-ui-react'
import ProductTable from '../productTable/productTable'

const panes = [
  { menuItem: 'All Groups', render: () => <Tab.Pane>
    <Fragment>  
      <Search />
        <Button primary>Add Product</Button>
    </Fragment>
    <ProductTable />
    </Tab.Pane> },
  { menuItem: 'Ungroup', render: () => <Tab.Pane>Ungroup</Tab.Pane> },
  { menuItem: 'Group 1', render: () => <Tab.Pane>Group 1</Tab.Pane> },
]

const GroupTab = () => <Tab panes={panes} />

export default GroupTab;
