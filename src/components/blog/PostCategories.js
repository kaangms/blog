import React, { useEffect } from "react";
//import { getPostCategories } from "../../redux/actions/postCategoryActions";
import { SearchBox } from "../toolbox/SearchBox";
import { RecentPosts } from "./RecentPosts";
import { useSelector, useDispatch } from "react-redux";
import { getPostCategories } from "../../redux/actions/postCategoryActions";

const PostCategories = (props) => {
  const postCategories = useSelector((state) => state.getPostCategoriesReducer);
  const dispatch = useDispatch();
  console.log({ postCategories });
  useEffect(() => {
    dispatch(getPostCategories());
  }, []);
  return (
    <div>
      <div className="sidebar">
        <div className="row">
          <div className="col-lg-12">
            <SearchBox />
          </div>
          <div className="col-lg-12">
            <RecentPosts />
          </div>
          <div className="col-lg-12">
            <div className="sidebar-item categories">
              <div className="sidebar-heading">
                <h2>Blog Kategorileri </h2>
              </div>
              <div className="content">
                <ul>
                  {postCategories.map((postCategory) => {
                    return (
                      <li key={postCategory.Id}> 
                        <a href="http://localhost:3000/ne-nedir/#">- {postCategory.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-12">
            <div className="sidebar-item tags">
              <div className="sidebar-heading">
                <h2>Etiketler</h2>
              </div>
              <div className="content">
                <ul>
                {postCategories.map((postCategory) => {
                    return (
                      <li key={postCategory.Id}> 
                        <a href="http://localhost:3000/ne-nedir/#">- {postCategory.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PostCategories;
