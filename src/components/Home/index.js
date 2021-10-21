import Header from '../Header'
import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="bg-container">
      <div className="title-container">
        <h1 className="heading">Clothes That Get You Noticed</h1>
        <p className="paragraph">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a maker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <div className="button-container">
          <button type="button" className="button">
            Shop Now
          </button>
        </div>
      </div>

      <div>
        <img
          className="image-container"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </div>
)

export default Home
