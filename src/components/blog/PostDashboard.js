import React from 'react'

import PostCategories from "./PostCategories";
import Posts from './Posts';

function PostDashboard() {
    return (
        <div>
             <section className="blog-posts grid-system">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
            <Posts/>
            </div>
            <div className="col-lg-4">
              <PostCategories />
            </div>
          </div>
        </div>
      </section> 
</div>
    )
}

export default PostDashboard
