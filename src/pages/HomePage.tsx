import { useEffect, useState } from 'react';
import {useLazyGetUserReposQuery, useSearchUsersQuery } from '../store/github/github.api'
import { useDebounce } from '../hooks/debounce';
import RepoCart from '../components/RepoCart';

const HomePage = () => {

  const [search, setSearch]=useState('');
  const debounced=useDebounce(search); // строка ввода
  const {isLoading, isError, data: users}=useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true
  });
  const [dropdown, setDropdown]=useState(false);

  const [fetchRepos,{isLoading: areReposLoading, data: repos}]=useLazyGetUserReposQuery()

  useEffect(()=>{
    setDropdown(debounced.length>3 && users?.length! >0)

    console.log(debounced);
  }, [debounced, users])

  const clickHandler=(username: string)=>{
    fetchRepos(username); 
    setDropdown(false); 
  }
  
  console.log(users);
  return (
    <div className='flex justify-center pt-10 mx-auto h-screnen w-screen'>
      {isError && <p className='text-center text-red-600'>Somethin wrong!!!</p>}
      <div className='relative w-[560px]' >
        <input 
          type="text"
          className='border py-2 px-4 w-full h-[42px] mb-2'
          placeholder='Search for github username'
          value={search} 
          onChange={(e)=> setSearch(e.target.value)}
        />
        {dropdown && 
          <ul className='list-none absolute top-[42px] left-0 right-0 max-[200px] shadow-md bg-white overflow-y-scroll'>
            {isLoading && <p className='text-center'>Loading ...</p>}
            {users?.map((user) =>(
              <li key={user.id}
                onClick={()=> clickHandler(user.login)}
                className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
              >
                {user.login}
              </li>
            ))}  
          </ul>
        }
        <div className='container'>
        {areReposLoading && <p className='text-center'>Repos are loading ...</p>}
        {repos?.map(repo=> <RepoCart repo={repo} key={repo.id}/>)}
        </div>
      </div>

      
    </div>
  )
}

export default HomePage