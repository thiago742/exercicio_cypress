describe("Testes de funcionalidades da aplicação Agenda de Contatos", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("Deve adicionar um novo contato", () => {
      cy.get('input[type="text"]').type("João Silva");
      cy.get('input[type="email"]').type("joao@silva.com");
      cy.get('input[type="tel"]').type("11999999999");
      cy.get('button[type="submit"]').click();
  
      cy.contains("João Silva").should("be.visible");
  
      cy.get('input[type="text"]').clear().type("João Silva 2");
      cy.get('input[type="email"]').clear().type("joao@silva2.com");
      cy.get('input[type="tel"]').clear().type("11999999999");
      cy.get('button[type="submit"]').click();
  
      cy.contains("João Silva 2").should("be.visible");
    });
  
    it("Deve deletar um contato", () => {
      cy.get(".delete").eq(1).click();
  
      cy.contains("João Silva 2").should("not.exist");
    });
  
    it("Deve editar um contato", () => {
      cy.get(".edit").eq(0).click();
      cy.get('input[type="text"]').clear().type("Contato Editado");
      cy.get('input[type="email"]').clear().type("contato@edit.com");
      cy.get('input[type="tel"]').clear().type("11988888888");
      cy.get('.alterar').click();
  
      cy.contains("Contato Editado").should("be.visible");
      cy.contains("contato@edit.com").should("be.visible");
    });
  });
  