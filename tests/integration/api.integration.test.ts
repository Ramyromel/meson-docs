import { defineClientAppEnhance } from '@vuepress/client'
import { createLocalVue, mount } from '@vue/test-utils'
import clientAppEnhance from '../../src/.vuepress/clientAppEnhance'
import api from '../../src/api.md'

describe('API Integration Tests', () => {
  let localVue

  beforeEach(() => {
    localVue = createLocalVue()
  })

  it('should create a pull zone using the API', async () => {
    const response = await api.createPullZone({
      token: 'YOUR_TOKEN',
      domain: 'YOUR_DOMAIN'
    })
    expect(response.status).toBe(200)
    expect(response.data.meta_status).toBe(1)
    expect(response.data.meta_message).toBe('success')
  })

  it('should delete a pull zone using the API', async () => {
    const response = await api.deletePullZone({
      token: 'YOUR_TOKEN',
      pullZoneId: 'YOUR_PULLZONE_ID'
    })
    expect(response.status).toBe(200)
    expect(response.data.meta_status).toBe(1)
    expect(response.data.meta_message).toBe('success')
  })

  it('should check traffic for a pull zone using the API', async () => {
    const response = await api.checkTraffic({
      token: 'YOUR_TOKEN',
      pullZoneId: 'YOUR_PULLZONE_ID',
      startDate: 'START_DATE',
      endDate: 'END_DATE'
    })
    expect(response.status).toBe(200)
    expect(response.data.meta_status).toBe(1)
    expect(response.data.meta_message).toBe('success')
  })

  it('should check price for traffic using the API', async () => {
    const response = await api.checkPrice({
      token: 'YOUR_TOKEN',
      startDate: 'START_DATE',
      endDate: 'END_DATE'
    })
    expect(response.status).toBe(200)
    expect(response.data.meta_status).toBe(1)
    expect(response.data.meta_message).toBe('success')
  })

  it('should check domain using the API', async () => {
    const response = await api.checkDomain({
      token: 'YOUR_TOKEN'
    })
    expect(response.status).toBe(200)
    expect(response.data.meta_status).toBe(1)
    expect(response.data.meta_message).toBe('success')
  })

  it('should monitor nodes using the API', async () => {
    const response = await api.monitorNodes({
      token: 'YOUR_TOKEN'
    })
    expect(response.status).toBe(200)
    expect(response.data.meta_status).toBe(1)
    expect(response.data.meta_message).toBe('success')
  })

  it('should handle errors in API requests', async () => {
    try {
      await api.createPullZone({
        token: 'INVALID_TOKEN',
        domain: 'YOUR_DOMAIN'
      })
    } catch (error) {
      expect(error.response.status).toBe(401)
      expect(error.response.data.meta_status).toBe(0)
      expect(error.response.data.meta_message).toBe('Invalid token')
    }
  })
})
