import { Outlet } from 'react-router-dom';
import Footer from '@components/Footer';
import siteContent from '@data/content.json';
import { SiteContent } from '../../types';
import './index.scss';

function Root() {
  const content = siteContent as SiteContent;
  
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer content={content.footer} />
    </>
  )
}

export default Root
