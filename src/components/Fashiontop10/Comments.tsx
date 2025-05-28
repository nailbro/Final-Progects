import  './Comments.scss';
import { BiSolidShare } from "react-icons/bi";
const Comments = () => {
  return (
    <div className='comments'>
      <h1>4 comments</h1>
      <div className="comment">
        <div className="user">
<h4>Devon Lane</h4>
<span>July 15, 2020</span>
        </div>
        <div className="commen">
            <p>Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas sed duis purus diam et.</p>
            <div className="repry">
                <i><BiSolidShare /></i>
                <span>Reply</span>
            </div>
        </div>
      </div>
            <div className="comment">
        <div className="user">
<h4>Annette Black</h4>
<span>1 day ago</span>
        </div>
        <div className="commen">
<p><span>@Devon Lane </span>Egestas fermentum natoque sollicitudin mauris. Facilisis praesent urna sed rhoncus quis pharetra pellentesque erat sagittis.</p>
            <div className="repry">
                <i><BiSolidShare /></i>
                <span>Reply</span>
            </div>
        </div>
      </div>
            <div className="comment">
        <div className="user">
<h4>Albert Flores</h4>
<span>July 7, 2020</span>
        </div>
        <div className="commen">
<p>Libero commodo sit dui ac proin. Penatibus ultricies at adipiscing mauris nunc. Fames faucibus nisl duis id diam.</p>
            <div className="repry">
                <i><BiSolidShare /></i>
                <span>Reply</span>
            </div>
        </div>
      </div>
            <div className="comment">
        <div className="user">
<h4>Marvin McKinney</h4>
<span>June 28, 2020</span>
        </div>
        <div className="commen">
<p>Ullamcorper nibh sed ac ipsum nunc imperdiet rhoncus. Quam donec habitant nibh sit consequat erat libero, tincidunt. Eros ut aliquam proin et duis. Mauris, egestas congue nibh dui a nulla.</p>
            <div className="repry">
                <i><BiSolidShare /></i>
                <span>Reply</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
