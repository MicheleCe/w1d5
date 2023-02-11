import React  from "react"
import ContentBetween from './ContentBetween'
import 'bootstrap/dist/js/bootstrap.js';
import Trending from './Trending'
import Again from './Again'
import New from './New'
import Footer from './Footer'

class Container extends React.Component {
    render() {
        return (
        <div className="container-fluid px-4">
            <ContentBetween/>
            <h4>Trending Now</h4>
            <Trending search="hobbit"/>
            <h4>Watch it again</h4>
            <Again search="Evil Dead"/>
            <h4>New Releases</h4>
            <New search="Star Wars"/>
            <Footer/>
        </div>
    )
    }
}

export default Container
    