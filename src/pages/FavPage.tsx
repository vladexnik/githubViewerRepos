import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'

const FavPage = () => {
  
    const {favourites}=useAppSelector(state=> state.github)

    if(favourites.length=== 0){
        return <p>No favourites.</p>
    }

    return (
        <div >
            <ul className='flex flex-col justify-center pt-10 h-screnen w-screen '>
                {favourites.map(item=>
                    <div className='flex'>
                        <li key={item} className='rounded-lg bg-blue-500 py-2 px-3 my-3 mx-2 text-center text-white  hover:shadow-lg hover:shadow-blue-500/40 hover:cursor-pointer'> 
                            <a href={item} target='_blank'>{item}</a>
                        </li>
                    </div>
                )}
            </ul>
        </div>
  ) 
}

export default FavPage