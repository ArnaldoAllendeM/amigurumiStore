import { expect } from 'chai'
import Vue from 'vue'
import CharacterCard from '@/components/CharacterCard.vue'

var chai = require('chai')
// var expect = chai.expect

function getRenderedText (Component, propsData) {
    const Constructor = Vue.extend(Component)
    const vm = new Constructor({ propsData: propsData }).$mount()
    return vm.$el.textContent
  }
  
  describe('CharacterCard.vue', () => {
    it('renderiza correctamente con diferentes props', () => {
      expect(getRenderedText(CharacterCard.vue, {
        msg: 'Ver Amigurumi'
      })).to.eventually.equal('Ver Amigurumi')
  
      expect(getRenderedText(CharacterCard.vue, {
        msg: 'Ver Amigurumi'
      })).to.eventually.equal('Ver Amigurumi')
    })
  })
