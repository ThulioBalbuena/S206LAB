describe('Testes de UI com cypress na Wikipedia', () => {
  
  it('Verificar o título da página', () => {
    cy.visit('https://www.wikipedia.org');
    cy.title().should('include', 'Wikipedia');
  });

  it('Verificar a presença do logotipo da Wikipedia', () => {
    cy.visit('https://www.wikipedia.org');
    cy.get('img.central-featured-logo').should('be.visible');
  });

  it('Verificar se o campo de pesquisa esta presente', () => {
    cy.visit('https://www.wikipedia.org');
    cy.get('input#searchInput').should('exist');
  });

  it('Verificar se o botão de busca esta presente', () => {
    cy.visit('https://www.wikipedia.org');
    cy.get('button[type="submit"]').should('exist');
  });
  
  it('Deve inserir o texto "teste" na barra de pesquisa e clicar no botão de pesquisa', () => {
      cy.visit('https://www.wikipedia.org');
      
      cy.get('input#searchInput').type('teste');
      
      cy.get('button[type="submit"]').click();
            
      cy.get('.mw-page-title-main').should('contain', 'Teste');
    });

  it('Deve checar se o texto "Discussão" esta errado',() => {  
      cy.visit('https://www.wikipedia.org');

      cy.get('input#searchInput').type('teste');
      
      cy.get('button[type="submit"]').click();
      
      cy.get('#ca-talk > a > span').should('not.contain', 'Discução');
    }
  );
});
