import HomeSectionCard from '../homesectioncard/HomeSectionCard'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button } from '@mui/material';
import { ArrowBackIosNewSharp, ArrowForwardIos } from '@mui/icons-material';

const HomeSectionCarousel = ({ data, sectionName }) => {
    const responsive = {
        0: { items: 1},
        720: {items: 3},
        1024: {items: 5.5}
    };

    const renderNextButton = ({ isDisabled }) => {
        return (
            <div>
                {!isDisabled && <Button 
                        variant='contained' 
                        className='z-50' 
                        sx={{
                                position: 'absolute', 
                                top: '8rem', 
                                right: '0rem',
                                transform: 'translateX(85%) rotate(90deg)',
                                bgcolor: 'white'
                            }} 
                        color='white' aria-label='next'>
                        <ArrowForwardIos sx={{ transform: 'rotate(-90deg)' }} />
                    </Button>}
            </div>
        )
    }

    const renderPrevButton = ({ isDisabled }) => {
        return (
            <div>
                {!isDisabled && <Button 
                    variant='contained' 
                    className='z-50 bg-white' 
                    sx={{
                            position: 'absolute', 
                            top: '8rem', 
                            left: '0rem',
                            transform: 'translateX(-85%) rotate(90deg)',
                            bgcolor: 'white'
                        }} 
                    color='white' aria-label='prev'>
                    <ArrowBackIosNewSharp sx={{ transform: 'rotate(-90deg)' }} />
                </Button>}
            </div>
        )
    }

    const items = data.slice(0,10).map((item) => <HomeSectionCard product={item} />)
  return (
    <div className='relative px-4 sm:px-6 lg:px-8 '>
        <h2 className='text-2xl font-extrabold text-gray-900 py-5'>{sectionName}</h2>
        <div className='border border-gray-200 relative p-5'>
            <AliceCarousel
                items={items}
                disableDotsControls
                responsive={responsive}
                controlsStrategy='responsive'
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}
            />
        </div>
    </div>
  )
}

export default HomeSectionCarousel