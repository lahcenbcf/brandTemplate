import racer from "../../assets/racer.jpg"
import fitness from "../../assets/fitness.jpg"
import fitness2 from "../../assets/fitness2.jpg"
import goodTimes2 from "../../assets/goodTimes2.jpg"
import racer2 from "../../assets/racer2.jpg"
import goodTimes from "../../assets/goodTimes.jpg"
export const moviesState=()=>{
    return [
        {
            title:"The Athelete",
            mainImg:fitness,
            secondImg:fitness2,
            url:"/work/the-athelete",
            awards:[
                {
                    title:"Truly a masterpiece",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                }
                ,
                {
                    title:'Fresh look on a brutal sport',
                    description:"Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit amet tellus cras"
                },
                {
                    title:"It's okay lmao",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
            ]
        }
        ,
        {
            title:"Good Times",
            mainImg:goodTimes,
            url:"/work/good-times",
            secondImg:goodTimes2,
            awards:[
                {
                    title:'Fresh look on a brutal sport',
                    description:"Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit amet tellus cras"
                },
                {
                    title:"It's okay lmao",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
            ]
        }
        ,{
            title:"The Racer",
            mainImg:racer,
            url:"/work/racer",
            secondImg:racer2,
            awards:[
                {
                    title:'Fresh look on a brutal sport',
                    description:"Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit amet tellus cras"
                },
                {
                    title:"It's okay lmao",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
            ]
        }
    ]
}