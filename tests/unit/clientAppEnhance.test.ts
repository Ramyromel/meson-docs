import { defineClientAppEnhance } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createLocalVue, mount } from '@vue/test-utils'
import clientAppEnhance from '../../src/.vuepress/clientAppEnhance'

describe('clientAppEnhance', () => {
  let localVue

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(ElementPlus)
  })

  it('should use ElementPlus', () => {
    const wrapper = mount(clientAppEnhance, {
      localVue,
      mocks: {
        $router: {
          beforeEach: jest.fn()
        }
      }
    })
    expect(wrapper.vm.$options).toBeDefined()
  })

  it('should track page views', () => {
    const routerMock = {
      beforeEach: jest.fn()
    }
    clientAppEnhance({ app: localVue, router: routerMock, siteData: {} })
    expect(routerMock.beforeEach).toHaveBeenCalled()
  })

  it('should handle errors in tracking page views', () => {
    const routerMock = {
      beforeEach: jest.fn((to, from, next) => {
        throw new Error('Test error')
      })
    }
    console.error = jest.fn()
    clientAppEnhance({ app: localVue, router: routerMock, siteData: {} })
    expect(routerMock.beforeEach).toHaveBeenCalled()
    expect(console.error).toHaveBeenCalledWith('Error tracking page view:', expect.any(Error))
  })
})
