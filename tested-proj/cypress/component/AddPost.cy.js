import AddPost from "../../src/components/AddPost.jsx";

describe("PostItem.cy.js", () => {
  const mock = () => {
    return true;
  };
  it("Mount", () => {
    cy.mount(<AddPost create={mock} />);
  });
});
