import React from "react";
import PostCategories from "./PostCategories";
import { FaShareAlt, FaTags } from "react-icons/fa";
import blogpost02 from "../../images/blog-post-02.jpg";

function PostDetails() {
  return (
    <div>
      <section className="blog-posts grid-system">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="all-blog-posts">
                <div className="blog-post">
                  <div className="blog-thumb">
                    <img src={blogpost02} alt="" />
                  </div>
                  <div className="down-content">
                    <span>Lifestyle</span>
                    <a href="post-details.html">
                      <h4>Aenean pulvinar gravida sem nec</h4>
                    </a>
                    <ul className="post-info">
                      <li>
                        <a href="#">Admin</a>
                      </li>
                      <li>
                        <a href="#">May 12, 2020</a>
                      </li>
                      <li>
                        <a href="#">10 Comments</a>
                      </li>
                    </ul>
                    <p>
                      You can browse different tags such as
                      <a
                        rel="nofollow"
                        href="https://templatemo.com/tag/multi-page"
                        target="_parent"
                      >
                        multi-page
                      </a>
                      <a
                        rel="nofollow"
                        href="https://templatemo.com/tag/resume"
                        target="_parent"
                      >
                        resume
                      </a>
                      ,
                      <a
                        rel="nofollow"
                        href="https://templatemo.com/tag/video"
                        target="_parent"
                      >
                        video
                      </a>
                      , etc. to see more CSS templates. Sed hendrerit rutrum
                      arcu, non malesuada nisi. Sed id facilisis turpis. Donec
                      justo elit, dapibus vel ultricies in, molestie sit amet
                      risus. In nunc augue, rhoncus sed libero et, tincidunt
                      tempor nisl. Donec egestas, quam eu rutrum ultrices,
                      sapien ante posuere nisl, ac eleifend eros orci vel ante.
                      Pellentesque vitae eleifend velit. Etiam blandit felis
                      sollicitudin vestibulum feugiat.
                      <br />
                      <br />
                      Donec tincidunt leo nec magna gravida varius. Suspendisse
                      felis orci, egestas ac sodales quis, venenatis et neque.
                      Vivamus facilisis dignissim arcu et blandit. Maecenas
                      finibus dui non pulvinar lacinia. Ut lacinia finibus lorem
                      vel porttitor. Suspendisse et metus nec libero ultrices
                      varius eget in risus. Cras id nibh at erat pulvinar
                      malesuada et non ipsum. Suspendisse id ipsum leo.
                    </p>
                    <div className="post-options">
                      <div className="row">
                        <div className="col-6">
                          <ul className="post-tags">
                            <li>
                            <FaTags/>
                            </li>
                            <li>
                              <a href="#">Best Templates</a>,
                            </li>
                            <li>
                              <a href="#">TemplateMo</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6">
                          <ul className="post-share">
                            <li>
                              <FaShareAlt />
                            </li>
                            <li>
                              <a href="#">Facebook</a>,
                            </li>
                            <li>
                              <a href="#"> Twitter</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
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

export default PostDetails;
