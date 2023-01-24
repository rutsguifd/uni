import PostItem from "../../src/components/PostItem.jsx";

describe("PostItem.cy.js", () => {
  const post = {
    id: 1,
    post: {
      title: "title test",
      body: "body test",
    },
  };
  it("Mount", () => {
    cy.mount(
      <PostItem
        removePost={false}
        number={post.id}
        post={post.post}
        key={post.id}
      />
    );
  });
});
