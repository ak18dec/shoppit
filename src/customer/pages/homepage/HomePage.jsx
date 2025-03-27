import React from 'react'
import MainCarousel from '../../components/homecarousel/MainCarousel'
import HomeSectionCarousel from '../../components/homesectioncarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../data/mens_kurta'
import { mens_shoes } from '../../../data/mens_shoes'
import { mens_jeans } from '../../../data/mens_jeans'
import { womens_lehengacholi } from '../../../data/womens_lehengacholi'
import { womens_sarees } from '../../../data/womens_sarees'

const HomePage = () => {
  return (
    <div>
        <MainCarousel />
        <div className='space-y-10 py-20'>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarousel data={mens_shoes} sectionName={"Men's Shoes"}/>
            <HomeSectionCarousel data={mens_jeans} sectionName={"Men's Jeans"}/>
            <HomeSectionCarousel data={womens_lehengacholi} sectionName={"Women's Lehenga Choli"}/>
            <HomeSectionCarousel data={womens_sarees} sectionName={"Women's Sarees"}/>
        </div>
    </div>
  )
}

export default HomePage