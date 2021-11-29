import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './pages/Home';
import Book from './pages/Book';
import Payment from './pages/Payment';
import Tickets from './pages/Tickets';
import Ticketdetails from './pages/Ticketdetails';

const AppNavigator = createStackNavigator({
        Home: { screen: Home },
        Book: { screen: Book },
        Payment: { screen: Payment },
        Tickets: { screen: Tickets },
        Ticketdetails: { screen: Ticketdetails },
    },
    {
        headerMode: 'none',
        navigationOptions: {
        headerVisible: false,
    }
   }
);


const AppNav = createAppContainer(AppNavigator);

export default AppNav;