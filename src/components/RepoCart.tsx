import { useState } from 'react';
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';
import { IRepo } from '../models/models';

const RepoCart = ({repo}: {repo: IRepo}) => {

    const {addFavourite, removeFavourite}=useActions()
    const {favourites}=useAppSelector(state=> state.github)
    // console.log(favourites);

    const [isFav, setIsFav]=useState(favourites.includes(repo.html_url));

    const addToFavourite=(event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        addFavourite(repo.html_url);
        setIsFav(true);
    }

    const removeFromFavourite=(event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        removeFavourite(repo.html_url);
        setIsFav(false);
    }

  return (
    <div className='border-4 border-indigo-400 py-3 px-5 rounded mb-2 hover:shadow-md cursor-pointer hover:bg-green-100 transition-all'>
        <a href={repo.html_url}target='_blank'>
            <h2 className='text=lg font-bold'> 
                {repo.full_name}
            </h2>
            <p className='text-sm'>
                Forks: <span className='font-bold mr-2'>{repo.forks}</span>
                Watchers: <span className='font-bold'>{repo.watchers}</span>
            </p>
            <p className='text-sm font-thin'>{repo?.description}</p>
            {!isFav && 
                <button 
                    onClick={addToFavourite}
                    className='py-2 mr-2 mt-2 px-4 bg-yellow-500 rounded hover:shadow-md  transition-all'>
                    Add 
                </button>
            }
            {isFav && 
                <button 
                    onClick={removeFromFavourite}
                    className='py-2 px-4 mt-2 bg-red-500 rounded hover:shadow-md  transition-all'
                >Remove 
                </button>
            }
        </a>
    </div>
  )
}

export default RepoCart;