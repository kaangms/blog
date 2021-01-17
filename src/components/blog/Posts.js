import React from "react";
import { FaTags } from "react-icons/fa";
import blogThumb01 from "../../images/blog-thumb-01.jpg";
import blogThumb02 from "../../images/blog-thumb-02.jpg";
import blogThumb03 from "../../images/blog-thumb-03.jpg";
import blogThumb04 from "../../images/blog-thumb-04.jpg";
import blogThumb05 from "../../images/blog-thumb-05.jpg";
import blogThumb06 from "../../images/blog-thumb-06.jpg";
import PostCategories from "./PostCategories";

function Posts() {
  return (
    <div>
      <section className="blog-posts grid-system">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="all-blog-posts">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="blog-post">
                      <div className="blog-thumb">
                        <img src={blogThumb01} alt="" />
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
                          Nullam nibh mi, tincidunt sed sapien ut, rutrum
                          hendrerit velit. Integer auctor a mauris sit amet
                          eleifend.
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
                  <div className="col-lg-6">
                    <div className="blog-post">
                      <div className="blog-thumb">
                        <img src={blogThumb02} alt="" />
                      </div>
                      <div className="down-content">
                        <span>Lifestyle</span>
                        <a href="post-details.html">
                          <h4>Suspendisse et metus</h4>
                        </a>
                        <ul className="post-info">
                          <li>
                            <a href="#">Admin</a>
                          </li>
                          <li>
                            <a href="#">May 22, 2020</a>
                          </li>
                          <li>
                            <a href="#">26 Comments</a>
                          </li>
                        </ul>
                        <p>
                          Nullam nibh mi, tincidunt sed sapien ut, rutrum
                          hendrerit velit. Integer auctor a mauris sit amet
                          eleifend.
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
                  <div className="col-lg-6">
                    <div className="blog-post">
                      <div className="blog-thumb">
                        <img src={blogThumb03} alt="" />
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
                            <a href="#">May 18, 2020</a>
                          </li>
                          <li>
                            <a href="#">42 Comments</a>
                          </li>
                        </ul>
                        <p>
                          Nullam nibh mi, tincidunt sed sapien ut, rutrum
                          hendrerit velit. Integer auctor a mauris sit amet
                          eleifend.
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
                  <div className="col-lg-6">
                    <div className="blog-post">
                      <div className="blog-thumb">
                        <img src={blogThumb04} alt="" />
                      </div>
                      <div className="down-content">
                        <span>Lifestyle</span>
                        <a href="post-details.html">
                          <h4>Mauris ac dolor ornare</h4>
                        </a>
                        <ul className="post-info">
                          <li>
                            <a href="#">Admin</a>
                          </li>
                          <li>
                            <a href="#">May 16, 2020</a>
                          </li>
                          <li>
                            <a href="#">28 Comments</a>
                          </li>
                        </ul>
                        <p>
                          Nullam nibh mi, tincidunt sed sapien ut, rutrum
                          hendrerit velit. Integer auctor a mauris sit amet
                          eleifend.
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
                  <div className="col-lg-6">
                    <div className="blog-post">
                      <div className="blog-thumb">
                        <img src={blogThumb05} alt="" />
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
                            <a href="#">May 12, 2020</a>
                          </li>
                          <li>
                            <a href="#">16 Comments</a>
                          </li>
                        </ul>
                        <p>
                          Nullam nibh mi, tincidunt sed sapien ut, rutrum
                          hendrerit velit. Integer auctor a mauris sit amet
                          eleifend.
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
                  <div className="col-lg-6">
                    <div className="blog-post">
                      <div className="blog-thumb">
                        <img src={blogThumb06} alt="" />
                      </div>
                      <div className="down-content">
                        <span>Lifestyle</span>
                        <a href="post-details.html">
                          <h4>Mauris ac dolor ornare</h4>
                        </a>
                        <ul className="post-info">
                          <li>
                            <a href="#">Admin</a>
                          </li>
                          <li>
                            <a href="#">May 10, 2020</a>
                          </li>
                          <li>
                            <a href="#">3 Comments</a>
                          </li>
                        </ul>
                        <p>
                          Nullam nibh mi, tincidunt sed sapien ut, rutrum
                          hendrerit velit. Integer auctor a mauris sit amet
                          eleifend.
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
            </div>
            <div className="col-lg-4">
              <PostCategories />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Posts;
