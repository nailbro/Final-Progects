import { useState } from 'react'; // Import useState
import { IoMdChatbubbles } from 'react-icons/io';
import './Fashionblock.scss';
import { FaLongArrowAltRight, FaSearch } from 'react-icons/fa';
import noshki from '../../assets/Image/noshki.png';
import clock from '../../assets/Image/Clock.svg';
import post1 from '../../assets/Image/post-1.png';
import post2 from '../../assets/Image/post-2.png';
import { Link } from 'react-router-dom';

const Fashionblock = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
  };

  return (
    <div className='Fashion_block'>
      <div className="articels">
        <div className="articelbox">
          <h1>Fashion blog</h1>
          <div className="boxartil">
            <form action="">
              <input type="search" placeholder='Search the blog...' required/>
              <button>
                <i>
                  <FaSearch />
                </i>
              </button>
            </form>
            <div className="divider3"></div>

            <div className="categoris">
              <h4>Blog Categories</h4>
              <div className="categoriesul">
                <div className="categoriesli">
                  <ul>
                    <li>All</li>
                    <li>Fashion</li>
                    <li>Designers</li>
                    <li>Lifestyle</li>
                    <li>Celebrity style</li>
                  </ul>
                </div>
                <div className="quanity">
                  <ul>
                    <li>23</li>
                    <li>3</li>
                    <li>7</li>
                    <li>4</li>
                    <li>9</li>
                  </ul>
                </div>
              </div>
              <div className="divider3"></div>
              <div className="featuared-posts">
                <h4>Featured Posts</h4>
                <div className="posts">
                  <div className="post">
                      <Link to={'/Fashionnews'} className='no-under'>
                    <img src={noshki} alt="noshki" />
                    </Link>
                    <div className="title">
                      <div className="data">
                        <img src={clock} alt="clock" />
                        <span>July 5, 2020</span>
                      </div>
                        <Link to={'/Fashionnews'} className='no-under'>
                      <p>14 Items From End-of-Spring Sales Are Sure to Spark Joy</p>
                      </Link>
                    </div>
                  </div>

                  <div className="post2">
                      <Link to={'/Fashionnews'} className='no-under'>
                    <img src={post1} alt="noshki" />
                    </Link>
                    <div className="title">
                      <div className="data">
                        <img src={clock} alt="clock" />
                        <span>April 9, 2020</span>
                      </div>
                      <Link to={'/Fashionnews'} className='no-under'>
                      <p>Best Fashion Instagrams of the Week</p>
                      </Link>
                    </div>
                  </div>

                  <div className="post2">
                                          <Link to={'/Fashionnews'} className='no-under'>
                    <img src={post2} alt="noshki" />
                    </Link>
                    <div className="title">
                      <div className="data">
                        <img src={clock} alt="clock" />
                        <span>March 12, 2020</span>
                      </div>
                      <Link to={'/Fashionnews'} className='no-under'>
                       <p>Top 10 Looks from the Venice Film Festival</p>
                      </Link>   
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider4"></div>
              <div className="Tags">
                <h4>Tags</h4>
                <div className="tags">
                  <button
                    className={`tag ${activeTag === '#trends' ? 'active-tag' : ''}`}
                    onClick={() => handleTagClick('#trends')}
                  >
                    #trends
                  </button>
                  <button
                    className={`tag ${activeTag === '#inspiration' ? 'active-tag' : ''}`}
                    onClick={() => handleTagClick('#inspiration')}
                  >
                    #inspiration
                  </button>
                  <button
                    className={`tag ${activeTag === '#designers' ? 'active-tag' : ''}`}
                    onClick={() => handleTagClick('#designers')}
                  >
                    #designers
                  </button>
                  <button
                    className={`tag ${activeTag === '#kidsfashion' ? 'active-tag' : ''}`}
                    onClick={() => handleTagClick('#kidsfashion')}
                  >
                    #kidsfashion
                  </button>
                  <button
                    className={`tag ${activeTag === '#streetstyle' ? 'active-tag' : ''}`}
                    onClick={() => handleTagClick('#streetstyle')}
                  >
                    #streetstyle
                  </button>
                  <button
                    className={`tag ${activeTag === '#models' ? 'active-tag' : ''}`}
                    onClick={() => handleTagClick('#models')}
                  >
                    #models
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fashionblog">
          <div className="artigle">
            <div className="blogimage"></div>
            <div className="fashionblogs">
              <div className="metablog">
                <ul>
                  <li>Fashion</li>   
                  <div className="diviler"></div>
                  <li>August 24, 2020</li>
                  <div className="diviler"></div>
                  <li className='nbn'><IoMdChatbubbles className='nbnf' /> No comments</li>
                </ul>
              </div>
              <h3>Bag Trends for Summer 2020</h3>
              <p>Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit viverra ametedin, <br />malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod...</p>
            </div>
          </div>
        </div>
        <div className="fashionblog2">
          <div className="artigle">
            <div className="blogimage2"></div>
            <div className="fashionblogs">
              <div className="metablog">
                <ul>
                  <li>Celebrity style</li>
                  <div className="diviler"></div>
                  <li>August 5, 2020</li>
                  <div className="diviler"></div>
                  <li className='nbn'><IoMdChatbubbles className='nbnf' /> No comments</li>
                </ul>
              </div>
              <h3>Wardrobe Essentials Everyone Should Own Today</h3>
              <p>Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit. Tellus sed morbi massa quis sed. Faucibus tincidunt magna enim ultricies fringilla at rhoncus, hac...</p>
            </div>
          </div>
        </div>
        <div className="fashionblog2">
          <div className="artigle">
            <div className="blogimage3"></div>
            <div className="fashionblogs">
              <div className="metablog">
                <ul>
                  <li>Lifestyle</li>
                  <div className="diviler"></div>
                  <li>July 16, 2020</li>
                  <div className="diviler"></div>
                  <li className='nbn'><IoMdChatbubbles className='nbnf' /> 4 comments</li>
                </ul>
              </div>
              <h3>Top 10 of This Season’s Hottest Sneakers</h3>
              <p>Sollicitudin et nec congue magna quis commodo quis luctus risus. Dolor, dignissim semper faucibus quisque massa ut enim. Turpis viverra mattis semper pellentesque facilisis. Ut id eget sagittis lectus...</p>
            </div>
          </div>
        </div>
        <div className="fashionblog2">
          <div className="artigle">
            <div className="blogimage4"></div>
            <div className="fashionblogs">
              <div className="metablog">
                <ul>
                  <li>Fashion</li>
                  <div className="diviler"></div>
                  <li>July 2, 2020</li>
                  <div className="diviler"></div>
                  <li className='nbn'><IoMdChatbubbles className='nbnf' /> 2 comments</li>
                </ul>
              </div>
              <h3>Modern Accessories 2020: Why Simple Isn't Easy</h3>
              <p>Tellus sed morbi massa quis sed. Faucibus tincidunt magna enim ultricies fringilla at rhoncus, hac. Sollicitudin et nec congue magna quis commodo quis luctus risus. Dolor, dignissim semper faucibus quisque massa ut enim...</p>
            </div>
          </div>
        </div>
        <div className="pagination">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
          <i><FaLongArrowAltRight /></i>
        </div>
      </div>
    </div>
  );
};

export default Fashionblock;