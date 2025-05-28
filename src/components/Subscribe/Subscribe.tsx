import React, { useState } from 'react'
import './Subscribe.scss'
import messages from '../../assets/Image/messages.png'

const Subscribe = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Women')
  const categories = ['Women', 'Men', 'Girls', 'Boys']

  return (
    <div className='subscribe'>
      <div className="message">
        <img src={messages} alt="message" />
      </div>
      <div className="subscribe_top container">
        <h1>Subscribe for updates</h1>
        <h3>Subscribe for exclusive early sale access and new arrivals.</h3>

        <div className="checkbox">
          {categories.map(category => (
            <div key={category} className={`checkbox-item checkbox-${category.toLowerCase()}`}>
              <button
                type="button"
                className={category === activeCategory ? 'active' : ''}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            </div>
          ))}
        </div>

        <div className="input_group">
          <label htmlFor="email">Email</label>
          <form action="">
            <input className='child-first-subscribe'
              type="email"
              id="email"
              name="email"
              placeholder='Your working email'
              required
            />
            <button type="submit">Subscribe</button>
           <div className="checkbox5">
          <input type="checkbox" id="agree" name="agree" required />
          <label htmlFor="agree">
            I agree to receive communications from Createx Store.
          </label>
        </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Subscribe