import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'

const FavPage = () => {
  
    const {favourites}=useAppSelector(state=> state.github)

    if(favourites.length=== 0){
        return <p>No favourites.</p>
    }

    return (
        <div className='content-center'>
            <ul className='flex justify-center flex-col justify-center pt-10 mx-auto h-screnen w-screen'>
                {favourites.map(item=>
                        <li key={item} className='rounded-lg self-center text-black bg-green-200 py-2 px-9 my-3 w-fit min-w-96 text-center text-white hover:shadow-lg hover:shadow-blue-500/40 hover:cursor-pointer'> 
                            <a href={item} target='_blank'>{item}</a>
                        </li>
                )}
            </ul>
        </div>
  ) 
}

export default FavPage