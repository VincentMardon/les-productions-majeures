import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
}

const withVanillaExtract = createVanillaExtractPlugin()

export default withVanillaExtract(nextConfig)
