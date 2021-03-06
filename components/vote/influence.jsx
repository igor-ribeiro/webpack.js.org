import React from 'react';
import './influence-style.scss';

export default class InfluenceComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (this.props.type === "normal" ? ( 
            <section className="influence-info influence-info__section">
                <h1 className="influence-info__header">What is Influence?</h1>
                <p><em>Influence</em> is a unit of measure based on time you have been a member on github. However, in 2017 and on you will recieve one influence per day.</p>            
            </section>
        ) : (
            <section className="influence-info influence-info__section">
                <h1 className="influence-info__header">What is Golden Influence?</h1>
                <p><em>Golden Influence</em> is equal to 100 <i>normal influence</i>. Golden Influence is obtained by being a backer or sponsor on our <a href="https://opencollective.com/webpack">Open Collective page</a>.</p>            
            </section>
        ));
    }
}