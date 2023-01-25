// @ts-check
import { test, expect } from '@playwright/test'

test('app shows random fact and image', async ({ page }) => {
  await page.goto('http://localhost:5173')

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith('https://cdn.pixabay.com')).toBeTruthy()
})

test('on button click', async ({ page }) => {
  await page.goto('http://localhost:5173')

  const text = await page.getByRole('paragraph')
  const textContent = await text.textContent

  await page.getByRole('button').click()

  const newText = await page.getByRole('paragraph')
  const newTextContent = await newText.textContent

  await expect(textContent).not.toContain(newTextContent)
})

test('test', async ({ page }) => {
  // npx playright codegen (pantaila grabatzeko)

  await page.goto('http://localhost:5173/')
  await page.getByRole('button', { name: 'Cargar otra imagen' }).click()
})

test('test2', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  await page.getByRole('img', { name: 'A cat will tremble or shiver when it is extreme pain.' }).click()
  await page.getByText('A cat will tremble or shiver when it is extreme pain.').first().click()
  await page.getByRole('button', { name: 'Cargar otra imagen' }).click()
  await page.getByRole('heading', { name: 'App de gatitos' }).click()
  await page.getByRole('heading', { name: 'App de gatitos' }).click()
})
