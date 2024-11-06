import { defineClientAppEnhance } from '@vuepress/client'
import { createLocalVue, mount } from '@vue/test-utils'
import config from '../../src/.vuepress/config'

describe('config', () => {
  let localVue

  beforeEach(() => {
    localVue = createLocalVue()
  })

  it('should have the correct locales', () => {
    expect(config.locales).toBeDefined()
    expect(config.locales['/']).toBeDefined()
    expect(config.locales['/'].lang).toBe('en-US')
    expect(config.locales['/'].title).toBe('Meson Network')
  })

  it('should have the correct head elements', () => {
    expect(config.head).toBeDefined()
    expect(config.head.length).toBeGreaterThan(0)
  })

  it('should have the correct markdown settings', () => {
    expect(config.markdown).toBeDefined()
    expect(config.markdown.extractHeaders).toBeDefined()
    expect(config.markdown.extractHeaders.level).toEqual([1, 2, 3, 4, 5])
  })

  it('should have the correct plugins', () => {
    expect(config.plugins).toBeDefined()
    expect(config.plugins.length).toBeGreaterThan(0)
  })

  it('should have the correct theme configuration', () => {
    expect(config.themeConfig).toBeDefined()
    expect(config.themeConfig.darkMode).toBe(false)
    expect(config.themeConfig.docsRepo).toBe('daqnext/meson-docs')
  })

  it('should handle errors in configuration', () => {
    try {
      config.locales['/'].lang = undefined
    } catch (error) {
      console.error('Error in configuration:', error)
    }
    expect(config.locales['/'].lang).toBeUndefined()
  })
})
