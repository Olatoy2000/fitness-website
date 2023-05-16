import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import  ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage}: Props) => {
    const isAboveMediumScreens =  useMediaQuery("min-width:1060px");
  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
        {/* IMAGE AND MAIN HEADER */}
        <motion.div 
        onViewportEnter={()=> setSelectedPage(SelectedPage.Home)}
        className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
          {/* MAIN HEADER */}
          <div className='z-10 mt-32 md:basis-3/5'>
            {/* HEADINGS */}
            <motion.div 
            className='md:-mt-20'
            initial="hidden"
            // whileHover={{ scale: 1.2 }}
            whileInView="visible"
            viewport={{ once:true, amount: 0.5 }}
            transition={{ duration: 0.5}}
            variants={{ 
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}>
              <div className='relative'>
                <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                  <img src={HomePageText} alt="home-page-text" />
                </div>
              </div>

              <p className='mt-8 text-sm'>
                Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studio to get the Body Shapes That you Dream of.. Get your Dream Body Now.
              </p>
            </motion.div>

            {/* ACTIONS */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              // whileHover={{ scale: 1.2 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{delay:0.2, duration: 0.5}}
              variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0}
              }}
            className='mt-8 gap-8 md:justify-start flex items-center'>
              <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
              </ActionButton> 
              <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}>
                <p>Learn More</p>
              </AnchorLink>
            </motion.div>
          </div>
          {/* IMAGE */}
          <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
            <img src={HomePageGraphic} alt="home-pageGraphic" />
          </div>
        </motion.div>

        {/* SPONSORS */}
          {isAboveMediumScreens && (
            <div className='h-[150px] w-full bg-primary-100 py-10'>          
              <div className='mx-auto w-5/6'>
                <div className='flex w-3/5 items-center justify-between gap-5'>
                  <img src={SponsorRedBull} alt="redbull-sponsor" />
                  <img src={SponsorForbes} alt="forbes-sponsor" />
                  <img src={SponsorFortune} alt="fortune-sponsor" />
                </div>
              </div>
            </div>
          )}
    </section>
  )
}

export default Home
