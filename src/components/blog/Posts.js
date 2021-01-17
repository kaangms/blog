import React from "react";
import { FaTags } from "react-icons/fa";
import blogThumb01 from "../../images/blog-thumb-01.jpg";
// import blogThumb02 from "../../images/blog-thumb-02.jpg";
// import blogThumb03 from "../../images/blog-thumb-03.jpg";
// import blogThumb04 from "../../images/blog-thumb-04.jpg";
// import blogThumb05 from "../../images/blog-thumb-05.jpg";
// import blogThumb06 from "../../images/blog-thumb-06.jpg";
import PostCategories from "./PostCategories";

function Posts() {
  return (
    <div className="all-blog-posts">
      <div className="row">
        <div className="col-lg-6">
          <div className="blog-post">
            <div className="blog-thumb">
              <img src={require(`../../images/blog-thumb-02.jpg`)} alt="sa" />
            </div>
            <div className="down-content">
              <span>Lifestyle</span>
              <a href="post-details.html">
                <h4>Donec tincidunt leo</h4>
              </a>
              <ul className="post-info">
                <li>
                  <a href="#">Admin</a>
                </li>
                <li>
                  <a href="#">May 31, 2020</a>
                </li>
                <li>
                  <a href="#">12 Comments</a>
                </li>
              </ul>
              <p>
                Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit.
                Integer auctor a mauris sit amet eleifend.
              </p>
              <div className="post-options">
                <div className="row">
                  <div className="col-lg-12">
                    <ul className="post-tags">
                      <li>
                        <FaTags />
                      </li>
                      <li>
                        <a href="#">Best Templates</a>,
                      </li>
                      <li>
                        <a href="#">TemplateMo</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <ul className="page-numbers">
            <li>
              <a href="#">1</a>
            </li>
            <li className="active">
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-angle-double-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Posts;
