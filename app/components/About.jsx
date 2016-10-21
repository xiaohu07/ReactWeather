var React = require('react');
var { Link } = require('react-router');

var About = (props) => {
  return (
    <div className="">
      <div className="">
        <h1 className="text-center">About</h1>
        <p>Welcome to Heroku</p>
        <Link to="https://github.com/xiaohu07"><span className="success badge">1</span> Github </Link>
        <br/>
        <Link to="https://facebook.com"><span className="success badge">2</span> Github </Link>
       
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> -- This was the JS framework used.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> -- Used to search weather by city.
          </li>
        </ul>
      </div>
      
    </div>
      
  
  )
};

module.exports = About;