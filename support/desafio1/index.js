require("cypress-xpath");
import { information } from "../../../fixtures/dataUtils";

const elementsdesafio1 = require('./elements').elementsdesafio1

export function clickButtonAdd() {
    cy.get(elementsdesafio1.button).click()
}

export function fillFields() {
    cy.get(elementsdesafio1.customerName).type(information.customerName);
    cy.get(elementsdesafio1.contactLastName).type(information.contactLastName);
    cy.get(elementsdesafio1.contactFirstName).type(information.contactFirstName);
    cy.get(elementsdesafio1.phone).type(information.phone);
    cy.get(elementsdesafio1.addressLine1).type(information.addressLine1);
    cy.get(elementsdesafio1.addressLine2).type(desainformationfio1.addressLine2);
    cy.get(elementsdesafio1.city).type(information.city);
    cy.get(elementsdesafio1.state).type(information.state);
    cy.get(elementsdesafio1.postalCode).type(information.postalCode);
    cy.get(elementsdesafio1.country).type(information.country);
    cy.get(elementsdesafio1.salesRepEmployeeNumber).type(information.salesRepEmployeeNumber);
    cy.get(elementsdesafio1.creditLimit).type(information.creditLimit);
}

export function clickButtonSave() {
    cy.get(elementsdesafio1.buttonSave).click()
}

export function validationMessage() {
    cy.findAllByText(elementsdesafio1.validadeText).should('exist')
}