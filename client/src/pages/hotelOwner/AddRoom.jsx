import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'

const AddRoom = () => {

  const [img,setImg] = useState({
    1:null,
    2:null,
    3:null,
    4:null,
  })

  const [input,setInput] = useState({
    roomType: '',
    pricePerNight:0,
    amenities: {
      'Free wifi': false,
      'Free breakfast': false,
      'room service': false,
      'mountin view': false,
      'fool access': false,
    }
  })

  return (
    <form>
      <Title align='left' title='Add Room' font='outfit' subtitle='fill in the details carefully and accurate room details, pricing. and amenitis, to enhance the use booking experience.' />

      {/* upload img */}
      <p className='text-gray-800 mt-10'>Images</p>
      <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
        {Object.keys(img).map((key) => (
          <label className='' htmlFor={`roomImage${key}`} key={key}>
            <img className='max-h-13 cursor-pointer opacity-80' src={img[key] ? URL.createObjectURL(img[key]) : assets.uploadArea} alt="" />
            <input type="file" accept='image/*' name="" id={`roomImage${key}`} hidden 
            onChange={e => setImg({...img,[key]: e.target.files[0]})}/>
          </label>
        ))}
      </div>

      <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
        <div className='flex-1 max-w-48'>
          <p className='text-gray-800 mt-4'>Room Type</p>
          <select value={input.roomType} onChange={e => setInput({...input,roomType: e.target.value})} className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full'>
            <option value="">Slelect Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>
        <div>
          <p className='mt-4 text-gray-800'>Price <span className='text-sm'>/night</span> </p>
          <input className='border border-gray-300 mt-1 rounded p-2 w-24' type="number" placeholder='0' value={input.pricePerNight} onChange={e => setInput({...input,pricePerNight: e.target.value})} id="" />
        </div>
      </div>

      <p className='text-gray-800 mt-4'>Aminites</p>
      <div className='flex flex-col max-w-sm flex-wrap mt-1 text-gray-400'>
        {Object.keys(input.amenities).map((aminity,index) => (
          <div key={index}>
            <input type="checkbox" id={`amenities${index+1}`} checked={input.amenities[aminity]}
            onChange={() => setInput({...input,amenities: {...input.amenities, [aminity]: !input.amenities[aminity]}})} />
            <label className='ml-2' htmlFor={`amenities${index+1}`}>{aminity}</label>
          </div>
        ))}
      </div>
      <button className='bg-primary text-white px-8 py-2 mt-8 cursor-pointer'>Add Room</button>
    </form>
  )
}

export default AddRoom