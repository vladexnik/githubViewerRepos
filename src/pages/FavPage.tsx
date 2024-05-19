import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux'

const FavPage = () => {
  
    const {favourites}=useAppSelector(state=> state.github)
    const {removeFavourite}=useActions();
    
    if(favourites.length=== 0){
        return <p className='text-3xl text-center text-black font-bold my-20'>No favourites yet. You can fix it</p>
    }
    return (
        <div className='content-center'>
            <ul className='flex justify-center flex-col justify-center pt-10 mx-auto h-screnen w-screen'>
                {favourites.map(item=>
                        <li key={item} className='flex items-center justify-between gap-3 rounded-lg self-center text-black font-bold bg-green-200 py-2 px-4 my-3 w-fit min-w-96 text-center hover:shadow-lg hover:shadow-blue-500/40 hover:cursor-pointer'> 
                            <a href={item} target='_blank'>{item}</a>
                            <button 
                                className='py-1 px-2 bg-red-500 rounded hover:shadow-md  transition-all'
                                onClick={()=> removeFavourite(item)}
                            > 
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                                </svg>
                            </button>
                        </li>
                )}
            </ul>
        </div>
  ) 
}

export default FavPage