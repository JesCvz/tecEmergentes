import { Home } from './Pages/Home/Home';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Data } from './Pages/Data/Data';
export const Routes = [
    {
        route:'/',
        name: 'Home',
        components: Home,
        icon: HomeIcon
    },
    {
        route:'/data',
        name: 'Data',
        icon: SupervisorAccountIcon,
        components: Data
    }
]

