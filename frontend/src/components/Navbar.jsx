import React from 'react'
import { Link } from 'react-router'; 
import { PlusIcon } from 'lucide-react';

const Navbar= () => {
  return (
    <header className='bg-base-300 border-b border-base-content/10'>

        <div className='mx-auto max-w-6xl p-4'>

            <div className='flex items-center justify-between'>
                {/* Thinkboard - changed text-primary to text-[#63e] */}
                <h1 className='text-3xl font-bold text-[#63e] font-mono tracking-tight'>
                    IdeaPad
                </h1>

                <div className='flex items-center gap-4'>
                    {/* New Note Button - changed btn-primary to bg-[#63e] and added text-white for contrast */}
                    <Link to='/create' className='btn bg-[#63e] text-white hover:bg-purple-700 border-none'>
                    <PlusIcon className='size-5' /> {/* Icon will inherit text-white */}
                    <span>New Note</span>
                    </Link>
                </div>
            </div>

        </div>


    </header>
  )
}

export default Navbar;