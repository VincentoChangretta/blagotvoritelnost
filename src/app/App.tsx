import { Header } from 'widgets/Header';
import { AppRouter } from './providers/router';
import './styles/App.css';
import './styles/reset.css';
import { Footer } from 'widgets/Footer/Footer';

function App() {
   return (
      <div className='app bg-cover bg-no-repeat'>
         <Header />
         <main className='main'>
            <AppRouter />
         </main>
         <Footer />
      </div>
   );
}

export default App;
