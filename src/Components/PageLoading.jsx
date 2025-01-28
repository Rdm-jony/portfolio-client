import React from 'react';

const PageLoading = () => {
    return (
        <div className='flex w-screen h-screen justify-center items-center'>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    );
};

export default PageLoading;