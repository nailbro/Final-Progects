import React from 'react'
import './Fashion.scss'
import { IoMdChatbubbles } from "react-icons/io";
const Fashion = () => {
  return (
    <section className='blog'>
      <div className="blogs">
<h1>Fashion blog</h1>
<button>View blog</button>
      </div>
      <div className="blogi">
        <div className="blogcs">
        <div className="blogimg"></div>
            <div className="blocs">
<h3>Bag Trends for Summer 2020</h3>
<div className="meta">
<ul>
    <li>Fashion</li>
    <div className="diviler"></div>
    <li>August 24, 2020</li>
    <div className="diviler"></div>
    <li className='nbn'><IoMdChatbubbles className='nbnf' /> No comments</li>
</ul>
</div>
<p>Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt <br />aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...</p>
</div>
        </div>
        

        <div className="blogcs">
        <div className="blogimg2"></div>
            <div className="blocs">
<h3>Top 10 of This Season’s Hottest Sneakers</h3>
<div className="meta">
<ul>
    <li>Lifestyle</li>
    <div className="diviler"></div>
    <li>July 16, 2020</li>
    <div className="diviler"></div>
    <li className='nbn'><IoMdChatbubbles className='nbnf' /> 4 comments</li>
</ul>
</div>
<p>Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat <br /> vitae scelerisque. Rhoncus augue faucibus maecenas lacus...</p>
</div>
        </div>
        </div>
    </section>
  )
}

export default Fashion
