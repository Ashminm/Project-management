import React from 'react'

function Profile() {
  return (
    <div className='card shadow p-5 '>
        <div className='text-center'>
        <h3>My profile</h3>
        </div>
        <div className='mt-3 row'>
            <label htmlFor="profile" className='text-center'>
                <input type="file" id="profile" className='d-none' />
                <img src="https://cdn-icons-png.flaticon.com/256/3135/3135715.png" width={100} height={100} alt="" />
            </label>
                <div className="mt-3">
                    <input type="text" className='form-control' placeholder='Your Name' />
                </div>
                <div className="mt-3">
                    <input type="text" className='form-control' placeholder='Your Github ID' />
                </div>
                <div className="mt-3">
                    <input type="text" className='form-control' placeholder='Your LinkedIn ID' />
                </div>
        </div>
    </div>
  )
}

export default Profile