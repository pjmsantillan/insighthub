import { Outlet } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
const RootLayout = () => {

    return (

        <div className='RootLayout'>

            <Header></Header>
            <Main></Main>
            <Outlet/>
        </div>


    )

    
}

export default RootLayout