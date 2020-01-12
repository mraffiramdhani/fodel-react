import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Container, Button } from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            isFetched: false
        }
    }
    async componentDidMount() {
        const { data } = await axios.get('https://rickandmortyapi.com/api/character?page=3')
        this.setState({ data, isFetched: !this.state.isFetched })
    }
    prevButton = async () => {
        const prevUrl = this.state.data.info.prev
        if (prevUrl) {
            const { data } = await axios.get(prevUrl)
            this.setState({ data })
        }
    }
    nextButton = async () => {
        const nextUrl = this.state.data.info.next
        if (nextUrl) {
            const { data } = await axios.get(nextUrl)
            this.setState({ data })
        }
    }
    render() {
        const { isFetched, data } = this.state
        return (
            <Container>
                <Row>
                    {
                        isFetched &&
                        data.results.map(v => (
                            <Col md key={v.id} className="mt-5 text-center">
                                <div>
                                    <img src={v.image} alt={v.name} />
                                </div>
                                <div>{v.name}</div>
                            </Col>
                        ))
                    }
                </Row>
                <Row>
                    <Col md={6} className="text-right">
                        <Button onClick={this.prevButton}>Previous</Button>
                    </Col>
                    <Col md={6} className="text-left">
                        <Button onClick={this.nextButton}>Next</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home