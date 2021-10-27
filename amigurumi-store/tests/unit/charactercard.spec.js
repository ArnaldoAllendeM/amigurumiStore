import { shallowMount } from '@vue/test-utils';
import CharacterCard from '@/components/CharacterCard.vue'
import chai from 'chai';
chai.should();
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
var expect = chai.expect
  describe('Testeando randerizado', () => {
    const vm = shallowMount(CharacterCard, {
        propsData: {
            producto: "type: Object, required: true" //pasando prop para el componente
        }
    });

    it('chequeando producto  ', () => {
        expect(vm.props().producto).to.eql('type: Object, required: true');
    })
})
