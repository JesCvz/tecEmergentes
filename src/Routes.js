import { Home } from './Pages/Home/Home';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ImageIcon from '@mui/icons-material/Image';
import { Data } from './Pages/Data/Data';
import { Images } from './Pages/Data/Images';
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
    },
    {
        route:'/images',
        name: 'Images',
        icon: ImageIcon,
        components: Images
    }
]

