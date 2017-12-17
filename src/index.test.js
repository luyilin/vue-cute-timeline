import { mount } from 'vue-test-utils'
import FooBar from './'

test('it works', () => {
  const wrapper = mount(FooBar)
  expect(wrapper.isVueInstance()).toBe(true)
})
