import { mount } from 'vue-test-utils'
import { Timeline } from './'

test('it works', () => {
  const wrapper = mount(Timeline)
  expect(wrapper.isVueInstance()).toBe(true)
})
