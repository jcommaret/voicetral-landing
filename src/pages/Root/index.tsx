import { Outlet } from 'react-router-dom';

import Nav from '../../components/nav';
import Footer from '../../components/footer';

import './index.scss';

function Root() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Root
