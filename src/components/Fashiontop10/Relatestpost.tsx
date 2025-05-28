import React from 'react'
import { IoMdChatbubbles } from "react-icons/io";
import { Link } from 'react-router-dom';
import './Relatestpost.scss'
const Relatestpost = () => {
  return (
    <section className='blogpost'>
      <div className="blogds container">
      <div className="blogspost">
<h1>Related posts</h1>
<Link to={'/fashionblock'} className="no-underline-link">
<button>View all posts</button>
</Link>
      </div>
      <div className="blogi-post">
        <div className="blogcs-post">
        <div className="blogimg"></div>
            <div className="blocs">
<h3>Bag Trends for Summer 2020</h3>
<div className="meta">
<ul>
    <li>Fashion</li>
    <div className="diviler"></div>
    <li>August 24, 2020</li>
    <div className="diviler"></div>
    <li className='nbn'><i><IoMdChatbubbles className='nbnf' /></i> No comments</li>
</ul>
</div>
<p>Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt <br />aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...</p>
</div>
        </div>
        

        <div className="blogcs">
        <div className="blogimg2"></div>
            <div className="blocs">
<h3>Wardrobe Essentials Everyone Should Own Today</h3>
<div className="meta">
<ul>
    <li>Fashion</li>
    <div className="diviler"></div>
    <li>Fugust 5, 2020</li>
    <div className="diviler"></div>
    <li className='nbn'><i><IoMdChatbubbles className='nbnf' /></i>No comments</li>
</ul>
</div>
<p>Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat <br /> vitae scelerisque. Rhoncus augue faucibus maecenas lacus...</p>
</div>
        </div>
        </div>
           </div>
    </section>
  )
}


export default Relatestpost
