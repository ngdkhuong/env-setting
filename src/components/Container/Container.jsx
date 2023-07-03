import Footer from '../Footer';
import Navbar from './../Navbar';

const Container = (props) => {
  return (
    <div>
        <Navbar />
        <main>
            {props.children}
        </main>
        <Footer />
    </div>
  )
}

export default Container