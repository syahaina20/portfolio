import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div> 
            <Hero title={props.title} />

            <Content>

            <p>
                Hello, my name is Aina Syahirah binti Sirajulfikri. I'm majoring a Diploma in Information Technology (Digital Technology) in Politeknik METrO Tasek Gelugor and currently doing my internship programme at <a href="http://reka.com.my" target="_blank" rel="noopener noreferrer">REKA Inisiatif Sdn Bhd</a>. 
            </p>

            <p>
                I'm constantly learning new things currently those things include gaining more experience with Git version-control system and <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>.
            </p>

            <p>
                Over the course of my internship programme at this company, I learned many new things in system development. I've been exposed and trained in programming language which is <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">ReactJS</a> that I didn't learned in polytechnic. Through this, I gained knowledges in storing information, some collections component of React such as <a href="https://www.npmjs.com/package/react-router-dom" target="_blank" rel="noopener noreferrer">React Router</a>, <a href="https://react-redux.js.org/introduction/basic-tutorial" target="_blank" rel="noopener noreferrer">React Redux</a> and so on. 
            </p>

            <p>
                By learning that interesting programing language, I tried to create and build several simple applications. For instance, the <i>calculator, todo list, carousel image slider, voting, memory brain test, weather, authentication for website, chart and portfolio.</i>
            </p>

            <p>
                From tried to do those systems, I got to explore the <a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer">NodeJS</a>,  <a href="https://firebase.google.com/docs" target="_blank" rel="noopener noreferrer">Firebase</a>, <a href="https://lottiefiles.com/course/a-beginners-guide-to-lottie" target="_blank" rel="noopener noreferrer">LottieFiles</a>, <a href="https://openweathermap.org/guide" target="_blank" rel="noopener noreferrer">OpenWeatherMap</a>, <a href="https://sendgrid.com/resources/guides/" target="_blank" rel="noopener noreferrer">SendGrid</a>, Git family including <a href="https://guides.github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>, <a href="https://docs.gitlab.com/" target="_blank" rel="noopener noreferrer">GitLab</a>, <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">GitBash</a> and others.
            </p>

            </Content>
            
        </div>
    );

}

export default AboutPage;