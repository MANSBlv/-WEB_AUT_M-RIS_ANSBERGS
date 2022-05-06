import PracticeFormPage from "../pageObjects/PracticeFormPage";

context("Practice form page",()=> {
    context("Student Register form", () => {
        beforeEach(() => {
          PracticeFormPage.visit();
        });
        it("scenarios with fixtures",() =>{
            cy.fixture('practiceFormPageData').then(data =>{

            PracticeFormPage.nameInput.type(data.name);

            PracticeFormPage.lastNameInput.type(data.surname);

            PracticeFormPage.email.type(data.email);

            PracticeFormPage.gender.check(data.gender,{force:true});

            PracticeFormPage.phoneNr.type(data.phone);

            PracticeFormPage.birth.click();

            PracticeFormPage.month.select(data.month);

            PracticeFormPage.year.select(data.year);

            PracticeFormPage.date.click();

            PracticeFormPage.subject.type(data.subject+"{enter}");

            PracticeFormPage.hobbies.check(data.hobbiesButton,{force:true});

            PracticeFormPage.picture.selectFile('cypress/files/OIF.jpg');

            PracticeFormPage.address.type(data.address);

            PracticeFormPage.state.click({force:true}).type(data.state);

            PracticeFormPage.city.click({force:true}).type(data.city);

            PracticeFormPage.submitButton.click();


            PracticeFormPage.validate.eq(0).should('be.visible').should('contain',data.fullName);

            PracticeFormPage.validate.eq(1).should('be.visible').should('contain',data.email);

            PracticeFormPage.validate.eq(2).should('be.visible').should('contain',data.gender);

            PracticeFormPage.validate.eq(3).should('be.visible').should('contain',data.phone);

            PracticeFormPage.validate.eq(4).should('be.visible').should('contain',data.fullDateOfBirth);

            PracticeFormPage.validate.eq(5).should('be.visible').should('contain',data.subject);

            PracticeFormPage.validate.eq(6).should('be.visible').should('contain',data.hobbies);

            PracticeFormPage.validate.eq(7).should('be.visible').should('contain','OIF.jpg');

            PracticeFormPage.validate.eq(8).should('be.visible').should('contain',data.address);

            PracticeFormPage.validate.eq(9).should('be.visible').should('contain',data.dateAndCity);
            
            PracticeFormPage.closeButton.click();
            });    

        });
    });
});