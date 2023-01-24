describe("API", () => {
  it("Post Check", () => {
    cy.request("https://jsonplaceholder.typicode.com/posts").as("PostTest");

    cy.get("@PostTest").should((response) => {
      console.log(response);
      expect(response.body[0]).to.have.property("userId");
      expect(response.body[0]).to.have.property("id");
      expect(response.body[0]).to.have.property("title");
      expect(response.body[0]).to.have.property("body");
    });
  });
});
