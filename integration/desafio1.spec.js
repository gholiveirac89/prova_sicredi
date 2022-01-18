import cypress from "cypress";
import { url, desafio1 } from "../fixtures/dataUtils";
import { clickButtonAdd, clickButtonSave, fillFields } from "../support/desafio1";

    it("Desafio 1 Sucess", () => {
        cy.visit(url)
        clickButtonAdd()
        fillFields()
        clickButtonSave()
        validationMessage()
    })



