import React from 'react';
import { Item, Segment, Dropdown } from 'semantic-ui-react';

const options = [
    { key: 1, text: '30 Days', value: 30 },
];

const UserPlaceholder = () => {
    return (
        <Segment.Group stacked>
				<Segment>
					<Item.Group>
						<Item>
							<Item.Content>
								<Item.Header>Our Advise</Item.Header>
								<Item.Description>We're still gathering data for the tracked products</Item.Description>
							</Item.Content>
						</Item>
					</Item.Group>
				</Segment>
                <Segment>
					<span>
						<p>Period of: <Dropdown clearable options={options} selection size='tiny'/></p>
					</span>
				</Segment>
        </Segment.Group>
    )
}

export default UserPlaceholder;
