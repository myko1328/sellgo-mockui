import React from 'react'
import { Table } from 'semantic-ui-react'

const ProductTable = () => (
  <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell sortable={true}>Product Information</Table.HeaderCell>
        <Table.HeaderCell sortable={true}>KPI</Table.HeaderCell>
        <Table.HeaderCell sortable={true}>Avg Price</Table.HeaderCell>
        <Table.HeaderCell sortable={true}>Avg Profit</Table.HeaderCell>
        <Table.HeaderCell sortable={true}>Avg Margin</Table.HeaderCell>
        <Table.HeaderCell sortable={true}>Avg Daily Unit Sold</Table.HeaderCell>
        <Table.HeaderCell sortable={true}>Avg Daily Revenue</Table.HeaderCell>
        <Table.HeaderCell sortable={true}>Avg ROI</Table.HeaderCell>
        <Table.HeaderCell sortable={true}>Avg Daily Rank</Table.HeaderCell>
        <Table.HeaderCell sortable={true}>Reviews</Table.HeaderCell>
        <Table.HeaderCell sortable={true}>Ratings</Table.HeaderCell>
        <Table.HeaderCell sortable={true}>Dimensions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  </Table>
)

export default ProductTable