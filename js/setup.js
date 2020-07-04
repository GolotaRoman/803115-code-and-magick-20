'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizards = [
  {
    name: WIZARD_NAMES[randomNumber(0, WIZARD_NAMES.length - 1)],
    surname: WIZARD_SURNAMES[randomNumber(0, WIZARD_SURNAMES.length - 1)],
    coatColor: COAT_COLOR[randomNumber(0, COAT_COLOR.length - 1)],
    eyesColor: EYES_COLOR[randomNumber(0, EYES_COLOR.length - 1)]
  },
  {
    name: WIZARD_NAMES[randomNumber(0, WIZARD_NAMES.length - 1)],
    surname: WIZARD_SURNAMES[randomNumber(0, WIZARD_SURNAMES.length - 1)],
    coatColor: COAT_COLOR[randomNumber(0, COAT_COLOR.length - 1)],
    eyesColor: EYES_COLOR[randomNumber(0, EYES_COLOR.length - 1)]
  },
  {
    name: WIZARD_NAMES[randomNumber(0, WIZARD_NAMES.length - 1)],
    surname: WIZARD_SURNAMES[randomNumber(0, WIZARD_SURNAMES.length - 1)],
    coatColor: COAT_COLOR[randomNumber(0, COAT_COLOR.length - 1)],
    eyesColor: EYES_COLOR[randomNumber(0, EYES_COLOR.length - 1)]
  },
  {
    name: WIZARD_NAMES[randomNumber(0, WIZARD_NAMES.length - 1)],
    surname: WIZARD_SURNAMES[randomNumber(0, WIZARD_SURNAMES.length - 1)],
    coatColor: COAT_COLOR[randomNumber(0, COAT_COLOR.length - 1)],
    eyesColor: EYES_COLOR[randomNumber(0, EYES_COLOR.length - 1)]
  }
];

function randomNumber(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
