import React from 'react'
import {Form, Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function GeneralCanteen() {
  return (
    <div className="w-full h-screen text-white">
     <div className="bg-[url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')] h-96 bg-cover bg-center bg-no-repeat">
        <div className='text-xl p-5'>
            <Link to="/Home"><FontAwesomeIcon icon={faAngleLeft} /></Link>
            <center className='text-3xl'>Huma Caterers</center>
            <p className="text-center mt-12">Explore all the most exciting dishes based on your taste and dietary preferences.</p>
        </div>
     </div>

     <div>
        <h1 className='text-[#323643] text-shadow-lg'>Items</h1>
        <h1 className='text-[#7D7D7D]'>Review</h1>
     </div>
    </div>
  )
}

export default GeneralCanteen