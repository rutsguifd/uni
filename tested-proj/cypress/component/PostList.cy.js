import PostList from "../../src/components/PostList.jsx";

describe("PostList.cy.js", () => {
  beforeEach(() => {
    cy.mount(<PostList />);
  });
  it("Mount", () => {
    cy.mount(<PostList />);
  });
  it("Delete Test", () => {
    cy.get(".item button").each(() => {
      cy.contains("delete").click();
    });
  });
  it("Search Test", () => {
    cy.get("input[placeholder='search...']").type("magnam");
  });
  it("Sort By Name Test", () => {
    cy.get("select").select("sort by name").should("have.value", "title");
  });
  it("Sort By Description Test", () => {
    cy.get("select").select("sort by description").should("have.value", "body");
  });
});
