import Card from 'react-bootstrap/Card';

const { Img, Body, Title, Text } = Card;

interface Props {
    reviewer: String
    review: String
}

const Review: React.FC<Props> = ({ reviewer, review }) => {
    return (
        <Card style={{ width: '65%' }} className="shadow">
            <Body>
                <Title>{reviewer}</Title>
                <Text>⭐⭐⭐⭐⭐</Text>
                <Text>
                    {review}
                </Text>
            </Body>
        </Card>
    )
}

export default Review;