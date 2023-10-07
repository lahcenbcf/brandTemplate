import racer from "../assets/racer.jpg"
import fitness from "../assets/fitness.jpg"
import goodTimes from "../assets/goodTimes.jpg"
const OurWork = () => {
  return (
    <div className="work">
      <div className="movie">
          <h2>The Athelete</h2>
          <div className="line"></div>
          <img src={fitness} alt="athelete" />
      </div>
      <div className="movie">
          <h2>Good Times</h2>
          <div className="line"></div>
          <img src={goodTimes} alt="good Times" className="goodTimes" />
      </div>
      <div className="movie">
          <h2>The Racer</h2>
          <div className="line"></div>
          <img src={racer} alt="racer" />
      </div>
    </div>
  )
}

export default OurWork 
