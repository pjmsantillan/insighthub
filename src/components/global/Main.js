import Headlines from '../sub-components/Headline';
import LatestNewscards from '../sub-components/LatestNewscard';
import Navigation from '../sub-components/Navigation'



const Main =()=>{
    return (
        <div className="Main">
            <Headlines></Headlines>
             <Navigation></Navigation>
            <LatestNewscards></LatestNewscards>
        </div>
    )
}

export default Main