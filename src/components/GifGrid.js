
import { useFetchGifts } from '../hooks/useFetchGifs';
import GridItem from './GridItem'


const GifGrid = ( { category }) => {

    const { data:images } = useFetchGifts(category);
  

    return (
        <>
            <h3 className='animate__animated animate__flash animate__delay-2s'>{category}</h3>
            
            <div className='row'>
                {     
                    images.map( (img) => 
                        <GridItem 
                            key = {img.id}
                            {...img}
                        />
                    )
                }
            </div>
               
            
        </>
    )
}


export default GifGrid;