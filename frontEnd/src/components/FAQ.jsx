import React, { useState } from 'react';
import "./faq.css"
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

const FAQ = () => {
    const [questionData, setQuestionData] = useState([
        {
            question: 'Who can use WriteophonicGO?',
            answer: 'If you have a Writeophonic Premium subscription in any country, you have access to WriteophonicGO. Most Writeophonic Business and Writeophonic for Education (higher education) accounts have access to the beta launch. WriteophonicGO is also available to people with a Writeophonic Free account in Australia, Canada, Germany, Japan, New Zealand, Poland, Ukraine, the United Kingdom, and the United States—with rollouts planned for other countries. ',
            isOpen: false
        },
        {
            question: 'Where can I use WriteophonicGO?',
            answer: 'WriteophonicGO is available on the following product offerings and platforms: Writeophonic for Windows, Writeophonic for Mac, Writeophonic for Chrome, Writeophonic for Edge, and the Writeophonic Editor. You’ll be able to use its generative writing capabilities in Gmail, Google Docs, Microsoft Word, LinkedIn, and Medium. WriteophonicGO will continue to be optimized for more applications and websites over time.',
            isOpen: false
        },
        {
            question: 'I’m an administrator for my team, organization, or institution. What kind of controls are available for WriteophonicGO?',
            answer: 'Writeophonic takes transparency and customer control seriously. Administrators can decide whether or not they want their team or learning institution to take advantage of the capabilities offered by WriteophonicGO and generative AI. WriteophonicGO is off by default for Writeophonic Business and Writeophonic for Education customers. To make it available, go to your account and switch it on for your entire team, organization, or institution.',
            isOpen: false
        },
        {
            question: 'I’m a developer. Will WriteophonicGO be available in the Writeophonic Text Editor SDK?',
            answer: 'We are evaluating bringing generative AI into the Text Editor SDK later this year. Please check ',
            isOpen: false
        },
        {
            question: 'How does WriteophonicGO use my data?',
            answer: 'Writeophonic’s enterprise-grade attestations and certifications.. Writeophonic never sells customer data and never provides information to third parties to help them advertise their products to you. Rather, Writeophonic makes money when people subscribe to our paid offerings.',
            isOpen: false
        },
       

       
    ]);

    const toggleAnswer = (index) => {
        const updatedQuestionData = [...questionData];
        updatedQuestionData[index].isOpen = !updatedQuestionData[index].isOpen;
        setQuestionData(updatedQuestionData);
    };

    return (
    
    <> 
    <Navbar/>
           <div className='faq'>
            <h1>Frequently Asked Questions</h1>
            <div className='questioncontainer'>
  {questionData.map((question, index) => (
    <div
      key={index}
      className={`question ${question.isOpen ? 'active' : ''}`}
      onClick={() => toggleAnswer(index)}
      style={{ marginBottom: '10px' }} // Add margin here
    >
      <div className='question-text'>{question.question}</div>
      <div className='arrow'>{question.isOpen ? '' : '▼'}</div>
      {question.isOpen && <div className='answer'>{question.answer}</div>}
    </div>
  ))}
</div>

        </div>
        <Footer/>
        </>

    );
};

export default FAQ;