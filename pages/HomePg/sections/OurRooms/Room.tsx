/* eslint-disable react/no-unescaped-entities */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const { Img, Body, Title, Text } = Card;

interface Props {
    alt: String
    src: String,
    description: String
    title: String
    index: Number
}


const Room: React.FC<Props> = ({ alt, src, description, title, index }) => {
    const _description = description || "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam vero voluptatibus rerum voluptate quas officiis modi eligendi cumque quis, non vel iste deleniti iure unde!"
    const isSecondOrLastPic = (index === 1) || (index === 3)

    return (
        <li className={`d-inline-block liCardContainer d-flex justify-content-center align-items-center ${isSecondOrLastPic ? 'cardRoomSpacingRow' : ''}`}>
            <Card className="shadow cardStyles">
                <Img variant="top" src={src as string} alt={alt as string} />
                <Body>
                    <Title>{title}</Title>
                    <Text>
                        {_description}
                    </Text>
                    <section className="d-flex justify-content-center align-items-center border-top pt-2">
                    <Button variant="primary" className="ps-4 pe-4">VIEW</Button>
                    </section>
                </Body>
            </Card>
        </li>
    )
}

export default Room;