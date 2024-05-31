import React from "react";

const Blog = () => {
  return (
    <section className="blog spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <div className="blog__sidebar">
              <div className="blog__sidebar__search">
                <form action="#">
                  <input type="text" placeholder="Search..." />
                  <button type="submit">
                    <span className="icon_search"></span>
                  </button>
                </form>
              </div>
              <div className="blog__sidebar__item">
                <h4>Categories</h4>
                <ul>
                  <li>
                    <a href="#">All</a>
                  </li>
                  <li>
                    <a href="#">Beauty (20)</a>
                  </li>
                  <li>
                    <a href="#">Food (5)</a>
                  </li>
                  <li>
                    <a href="#">Life Style (9)</a>
                  </li>
                  <li>
                    <a href="#">Travel (10)</a>
                  </li>
                </ul>
              </div>
              <div className="blog__sidebar__item">
                <h4>Recent News</h4>
                <div className="blog__sidebar__recent">
                  {/* Recent news items */}
                </div>
              </div>
              <div className="blog__sidebar__item">
                <h4>Search By</h4>
                <div className="blog__sidebar__item__tags">{/* Tags */}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-7">
            <div className="row">{/* Blog items */}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
