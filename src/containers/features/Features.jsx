import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
    {
        title:'Improving end distrusts instaly',
        text:'Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı ol',
    },
    {
        title:'Become the tended active',
        text:'Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı ol',
    },
    {
        title:'Message or am nothing',
        text:'Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı ol',
    },
    {
        title:'Really boy law',
        text:'Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı ol',
    },
]

const Features = () => {
    return (
        <div class="gpt3__features section__padding">
           <div className="gpt3__features-heading">
           <h1 className="gradient__text">
               The Future is Now and You just Need To Realize it. Step into Future Today & Make it Happen. </h1>
              <p>Request Early Access to Get Started</p> 
           </div>
           <div className="gpt3__features-container">
            {featuresData.map((item, index) => (
                <Feature title={item.title} text={item.text} key={item.title + index} />
            ))}           
           </div> 
        </div>
    )
}

export default Features
