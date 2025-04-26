import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'
import StartRate from '../components/StartRate'

const RoomDetails = () => {
    
    const {id} = useParams()
    const [room,setRoom] = useState(null)
    const [mainImage,setMainImage] = useState(null)

    useEffect(() => {
    const room = roomsDummyData.find(room => room._id ===id )
    room && setRoom(room)
    room && setMainImage(room.images[0])
    },[])
    
                                     
  return room && (
    <div className='py-28 md:py-35 px-4 md:px-10 lg:px-24 xl:px-32'>
        {/* room details */}
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
            <h1 className='text-3xl md:text-4xl font-play'>
                {room.hotel.name} <span className='font-inter text-sm'>({room.roomType})</span></h1>
            <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
        </div>

        {/* room rate */}
        <div className='flex items-center gap-1 mt-2'>
            <StartRate />
            <p className='ml-2'>200+ Reviews</p>
        </div>

        {/* room Address */}
        <div className='flex items-center gap-1 text-gray-500 mt-2'>
            <img src={assets.locationIcon} alt="location-icon" />
            <span>{room.hotel.address}</span>
        </div>

        {/* room imsges */}
        <div className='flex flex-col lg:flex-row mt-6 gap-6'>
            <div className='lg:w-1/2 w-full'>
                <img className='w-full rounded-xl shadow-lg object-cover' src={mainImage} alt="room-image" />
            </div>
            <div className='grid grid-cols-2 gap-2 lg:w-1/2 w-full '>
                {room?.images.length > 1 && room.images.map((image,index) => (
                    <img 
                    onClick={() => setMainImage(image)} 
                    key={index} src={image} alt="room image"
                    className={`w-full rounded-lg shadow-lg object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500'}`} />
                )) }
            </div>
        </div>
        {/* room highlights */}
        <div className='flex flex-col md:flex-row md:justify-between mt-10'>
            <div className='text-3xl md:text-4xl font-play'>
                <h1 className='text-3xl md:text-4xl font-play'>Experience Luxury Like Never Before</h1>
                <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                    {room.amenities.map((item,index) => (
                        <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-l-2xl bg-gray-100'>
                            <img className='w-5 h-5' src={facilityIcons[item]} alt={item} />
                            <p className='text-sm'>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* room price */}
            <p className='text-2xl font-medium'>${room.pricePerNight} /Night</p>
        </div>
        {/* check */}
        <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white
        shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
            <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>
                <div className='flex flex-col'>
                    <label className='font-medium' htmlFor="chekInDate">Check-In</label>
                    <input type="date" 
                    className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none'
                    placeholder='Check-In' name="" id="chekInDate" required />
                </div>
                <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                <div className='flex flex-col'>
                    <label className='font-medium' htmlFor="chekOutDate">Check-Out</label>
                    <input type="date" 
                    className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none'
                    placeholder='Check-Out' name="" id="chekOutDate" required />
                </div>
                <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                <div className='flex flex-col'>
                    <label className='font-medium' htmlFor="guests">Guests</label>
                    <input type="number" 
                    className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none'
                    placeholder='0' name="" id="guests" required />
                </div>
            </div>
            <button type='submit' className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-20 md:p-2 text-base cursor-pointer'>
                Check Availability
            </button>
        </form>

        {/* common Specification */}
        <div className='mt-25 space-y-4'>
            {roomCommonData.map((spce,index) => (
                <div key={index} className='flex items-start gap-2'>
                    <img className='w-6.5' src={spce.icon} alt={`${spce.title}-icon`} />
                    <div>
                        <p className='text-base'>{spce.title}</p>
                        <p className='text-gray-500'>{spce.description}</p>
                    </div>
                </div>
            ))}
        </div>
        <div>
            <p className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has 
                a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get
                the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable 
                two bedroom apartment that has a true city feeling.</p>
        </div>
            {/* hosted by */}
        <div className='flex flex-col items-start gap-4'>
            <div className='flex gap-4'>
                <img className='h-14 w-14 md:h-18 md:w-18 rounded-full' src={room.hotel.owner.image} alt="Host" />
                <div>
                    <p>Hosted By {room.hotel.name}</p>
                    <div className='flex items-center gap-1 mt-2'>
                        <StartRate />
                    </div>
                    <p className='ml-2'>200+ Reviews</p>
                </div>
            </div>
            <button className='px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer'>Contect Now</button>
        </div>
    </div>
  )
}

export default RoomDetails