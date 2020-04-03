import React from 'react';
import Card from './Card';
import Row from 'react-bootstrap/Row';
import hogwarts from '../assets/images/hogwarts.png';
import flowers from '../assets/images/flowers.png';
import strangerthings from '../assets/images/strangerthings.png';
import Container from 'react-bootstrap/Container';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            kads: [
                {
                    id: 0,
                    title: 'Poster 1',
                    subTitle: 'The fans of the Hogwarts',
                    imgSrc: hogwarts,
                    link: 'https://www.wizardingworld.com/',
                    selected: false
                },

                {
                    id: 1,
                    title: 'Poster 2',
                    subTitle: 'For anthophiles',
                    imgSrc: flowers,
                    link: 'https://www.floraqueen.com/',
                    selected: false
                },

                {
                    id: 2,
                    title: 'Poster 3',
                    subTitle: 'Stranger Things',
                    imgSrc: strangerthings,
                    link: 'https://www.netflix.com/my/title/80057281',
                    selected: false
                },
            ]
            
        }
    }

    handleCardClick = (id, card) => {

        let kads = [...this.state.kads];

        kads[id].selected = kads[id].selected ? false : true;

        kads.forEach(kad => {
            if(kad.id !== id) {
                kad.selected = false;
            }
        });

        this.setState({
            kads
        });
    }

    makeKads = (kads) => {
        return kads.map(kad => {
            return <Card kad={kad} click={(e => this.handleCardClick(kad.id, e))} key={kad.id} />
        })
    }


    render() {
        return(
            
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeKads(this.state.kads)}
                </Row>
            </Container>

        );
    }

}

export default Carousel;