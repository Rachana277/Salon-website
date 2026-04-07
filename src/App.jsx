import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}
