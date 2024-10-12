///<reference> = cypress>

describe("testes da criacao, registro e login",()=>{
    it("deve criar um novo usuario",()=>{
        cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        cy.get('.btn-link').click()
        cy.get('#firstName').type('Lucas')
        cy.get('#Text1').type('Lucas')
        cy.get('#username').type('lucas')
        cy.get('#password').type('123456')
        cy.get('.btn-primary').click()
        cy.get('.ng-binding').should('contain.text','Registration successful')
    }
    )
    it("deve criar um usuário com falha",()=>{
        cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        cy.get('.btn-link').click()
        cy.get('#firstName').type('Lucas')
        cy.get('#Text1').type('Lucas')
        cy.get('#username').type('lucas')
        cy.get('.btn-primary').should('be.disabled')
    })
    it('teste de login',()=>{
      let infos = register()
      cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
      cy.get('#username').type(infos[0])
      cy.get('#password').type(infos[1])
      cy.get('.btn-primary').click()
      cy.get('.ng-binding').should('contain.text','Hi '+infos[0]+'!')}
    )
    it('teste de login com falha após deletar o anterior',()=>{
      let infos = register()
      cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
      cy.get('#username').type(infos[0])
      cy.get('#password').type(infos[1])
      cy.get('.btn-primary').click()
      cy.get('.ng-binding').should('contain.text','Hi '+infos[0]+'!')
      cy.get('.ng-binding > a').click()
      cy.get('.btn').click()
      cy.get('#username').type(infos[0])
      cy.get('#password').type(infos[1])
      cy.get('.btn-primary').click()
      cy.get('.ng-binding').should('contain.text','Username or password is incorrect')
    })
})

function register(){

  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let segundo = new Date().getSeconds().toString()
  let id = hora+minuto+segundo + 'ID'
  let senha = hora+minuto+segundo + 'Senha'
  let infos = [id,senha]
    cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('.btn-link').click()
    cy.get('#firstName').type(id)
    cy.get('#Text1').type(id)
    cy.get('#username').type(id)
    cy.get('#password').type(senha)
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text','Registration successful')
    return infos
}