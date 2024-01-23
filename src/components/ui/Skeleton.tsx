import React from 'react'
import Skeleton  from '@mui/material/Skeleton'
type Props = {}

function SkeletonPage({}: Props) {
  return (
   <>
   <div className='flex flex-col gap-2'> 
     <Skeleton variant="rounded" width={340} height={300} />
     <Skeleton variant="rounded" width={340} height={200} >
        <Skeleton variant='rounded' width={340} height={12} sx={{backgroundColor:'black'}}></Skeleton>
     </Skeleton>
     <div className='flex items-center justify-between'>
        <Skeleton variant='rounded' width={130} height={30}></Skeleton>
        <Skeleton variant='rounded' width={40} height={40}></Skeleton>
     </div>
   </div>
   <div className='flex flex-col gap-2'> 
     <Skeleton variant="rounded" width={340} height={300} />
     <Skeleton variant="rounded" width={340} height={200} >
        <Skeleton variant='rounded' width={340} height={12} sx={{backgroundColor:'black'}}></Skeleton>
     </Skeleton>
     <div className='flex items-center justify-between'>
        <Skeleton variant='rounded' width={130} height={30}></Skeleton>
        <Skeleton variant='rounded' width={40} height={40}></Skeleton>
     </div>
   </div>
   <div className='flex flex-col gap-2'> 
     <Skeleton variant="rounded" width={340} height={300} />
     <Skeleton variant="rounded" width={340} height={200} >
        <Skeleton variant='rounded' width={340} height={12} sx={{backgroundColor:'black'}}></Skeleton>
     </Skeleton>
     <div className='flex items-center justify-between'>
        <Skeleton variant='rounded' width={130} height={30}></Skeleton>
        <Skeleton variant='rounded' width={40} height={40}></Skeleton>
     </div>
   </div>
   <div className='flex flex-col gap-2'> 
     <Skeleton variant="rounded" width={340} height={300} />
     <Skeleton variant="rounded" width={340} height={200} >
        <Skeleton variant='rounded' width={340} height={12} sx={{backgroundColor:'black'}}></Skeleton>
     </Skeleton>
     <div className='flex items-center justify-between'>
        <Skeleton variant='rounded' width={130} height={30}></Skeleton>
        <Skeleton variant='rounded' width={40} height={40}></Skeleton>
     </div>
   </div>
   <div className='flex flex-col gap-2'> 
     <Skeleton variant="rounded" width={340} height={300} />
     <Skeleton variant="rounded" width={340} height={200} >
        <Skeleton variant='rounded' width={340} height={12} sx={{backgroundColor:'black'}}></Skeleton>
     </Skeleton>
     <div className='flex items-center justify-between'>
        <Skeleton variant='rounded' width={130} height={30}></Skeleton>
        <Skeleton variant='rounded' width={40} height={40}></Skeleton>
     </div>
   </div>
   <div className='flex flex-col gap-2'> 
     <Skeleton variant="rounded" width={340} height={300} />
     <Skeleton variant="rounded" width={340} height={200} >
        <Skeleton variant='rounded' width={340} height={12} sx={{backgroundColor:'black'}}></Skeleton>
     </Skeleton>
     <div className='flex items-center justify-between'>
        <Skeleton variant='rounded' width={130} height={30}></Skeleton>
        <Skeleton variant='rounded' width={40} height={40}></Skeleton>
     </div>
   </div>
   </>
  )
}

export default SkeletonPage;






