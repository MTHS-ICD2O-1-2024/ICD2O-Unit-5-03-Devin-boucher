// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

// eslint-disable-next-line no-unused-vars
function checkNumber () {
  let age = parseFloat(document.getElementById('age').value)

  if (age >= 17) {
    age = ('You can see an R movie alone.')
  } else if (age >= 13) {
    age = ('You can see a PG-13 movie alone')
  } else if (age >= 5) {
    age = ('You can see a G or PG movie alone')
  } else {
    age = ('Your too young for most things, pal')
  }

  document.getElementById('result').innerHTML = `<p><strong>${age}</strong></p>`
}
