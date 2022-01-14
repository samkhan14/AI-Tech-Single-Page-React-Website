import React from 'react';
import { Feature } from '../../components';
import './whatgpt3.css';

const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
           <div className="gpt3__whatgpt3-feature">
            <Feature title="What is GPT-3" text="Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem " />            
            </div> 
             <div className="gpt3__whatgpt3-heading">
                 <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                     <p>Explore The Library</p>
             </div>
             <div className="gpt3__whatgpt3-container">
                 <Feature title="Chatbots" text="Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı " />
                 <Feature title="Knowladgebase" text="Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitab" />
                 <Feature title="Education" text="Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı ol" />
             </div>
             </div>
       
    )
}

export default WhatGPT3
