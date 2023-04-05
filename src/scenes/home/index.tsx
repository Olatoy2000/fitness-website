import { SelectedPage } from '@/shared/types'
import React from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'
import  ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomepageGraphics from "@/assets/HomepageGraphics.png";
import SponserRedBull from "@/assets/SponserRedBull.png";
import SponserForbes from "@/assets/SponserForbes.png";
import SponserFortune from "@/assets/SponserFortune.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home
 = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens =  useMediaQuerySelect("min-width:1060px");
  return (
    <section id='home' className='gap-16 pbg-gray-20 py-10 md:h-full md:pb-0'>
        {/* IMAGE AND MAIN HEADER */}
        <div>
          {/* MAIN HEADER */}
          <div>
            {/* HEADINGS */}
            <div>
              <div>
                <div>
                  <img src={HomePageText} alt="home-page-text" />
                </div>
              </div>
            </div>
          </div>
          {/* IMAGE */}
          <div>

          </div>
        </div>
    </section>
  )
}

export default Home
