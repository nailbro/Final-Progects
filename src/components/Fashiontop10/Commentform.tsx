import React from 'react'
import './Commentform.scss'
const Commentform = () => {
  return (
    <div className='comment-form'>
      <h1>Leave your comment</h1>
      <form action="" className='form-comment'>
        <div className="formcomment">
          <div className="form-com">
     <label htmlFor="">Name*</label>
        <input type="text" placeholder='Your name' required/>
          </div>
                    <div className="form-com2">
     <label htmlFor="">Email*</label>
        <input type="email" name="email" id="1" placeholder='Your working email' required/>
          </div>
        </div>
        <div className="form-com3">
          <label htmlFor="">Your comment*</label>
          <input type="text" placeholder='Type comment here'required />
        </div>
        <div className="btnformcom">
<button>Post comment</button>
        </div>
      </form>
    </div>
  )
}

export default Commentform
