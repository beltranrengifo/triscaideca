import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Logo from '@/components/common/Logo.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Logo, {
      stubs: {
        NLink: RouterLinkStub,
        NuxtLink: RouterLinkStub,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
  test('matches with snapshot', () => {
    const wrapper = shallowMount(Logo, {
      stubs: {
        NLink: RouterLinkStub,
        NuxtLink: RouterLinkStub,
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
