/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

import { Outlet } from 'react-router-dom'
import BannerAdmin from '../../components/banner'
import FooterAdmin from '../../components/footer'
import HeaderAdmin from '../../components/header'



const LayOutClient = () => {
  return (
        <div>
          <header>
      <HeaderAdmin />
              </header>
            <main >
                <Outlet />
            </main>
             
             <footer>
                 <FooterAdmin />
             </footer>
           
        </div>
  
  )
}

export default LayOutClient