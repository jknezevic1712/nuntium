import React from "react";

import Title from "../title/title.component";

import {
  BlogPageContainer,
  BlogPageInnerContainer,
  BlogPageContent,
  BlogPageTitle,
  BlogPagePgs,
  BlogPagePg,
  BlogPageImg,
} from "./blog-page.styles";

const BlogPage = ({ blogDetails }) => {
  const { title, paragraph1, paragraph2, paragraph3, author, bg, img1, img2 } =
    blogDetails;

  return (
    <BlogPageContainer>
      <Title />
      <BlogPageInnerContainer bg={bg}>
        <BlogPageContent>
          <BlogPageTitle>
            {<h2>{title}</h2>}
            <span>{author}</span>
          </BlogPageTitle>
          <BlogPagePgs>
            <BlogPagePg>{<p>{paragraph1}</p>}</BlogPagePg>
            <BlogPageImg>
              <img src={img1.url} alt={img1.caption} />
              <figcaption>{img1.caption}</figcaption>
            </BlogPageImg>
            <BlogPagePg>{<p>{paragraph2}</p>}</BlogPagePg>
            <BlogPageImg>
              <img src={img2.url} alt={img2.caption} />
              <figcaption>{img2.caption}</figcaption>
            </BlogPageImg>
            <BlogPagePg>{<p>{paragraph3}</p>}</BlogPagePg>
          </BlogPagePgs>
        </BlogPageContent>
      </BlogPageInnerContainer>
    </BlogPageContainer>
  );
};

export default BlogPage;
